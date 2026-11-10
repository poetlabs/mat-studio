/* Logo Mat Studio, Chrome extension: answers the studio's "api/..." calls inside the browser.
   The extension may read the portal and the artwork hosts directly (host permissions), with the designer's own log-in. */
(function(){
  const PORTAL="https://designupload.logomatsllc.com", ORDER="/Design/ViewDesignHtml?designNumber=";
  const HOSTS=["live.mtapi.biz","designupload.logomatsllc.com","amazonaws.com"];
  window.MATSTUDIO_EXT=true;
  window.MATSTUDIO_PDFJS=chrome.runtime.getURL("pdfjs/");
  window.MATSTUDIO_WORKER=chrome.runtime.getURL("worker.js");
  const realFetch=window.fetch.bind(window);
  const json=(o,status)=>new Response(JSON.stringify(o),{status:status||200,headers:{"Content-Type":"application/json"}});
  const loginWall=r=>/\/Account\/LogOn/i.test(r.url);
  async function readQueue(){
    const r=await realFetch(PORTAL+"/Design/ViewQueue",{credentials:"include",cache:"no-store"});
    if(loginWall(r)) return json({error:"Log in to the design portal in this browser first, then try again."},401);
    if(!r.ok) return json({error:"The portal answered "+r.status+"."},502);
    const d=new DOMParser().parseFromString(await r.text(),"text/html"), rows=[];
    for(const a of d.querySelectorAll('a[href*="designNumber="]')){ const m=(a.getAttribute("href")||"").match(/designNumber=(\d+)/), u=a.closest("ul"), c=u?u.children:[];
      const t=k=>c[k]?c[k].textContent.trim():""; if(m && !rows.some(x=>x[0]===m[1])) rows.push([m[1],t(2),t(3),t(4),t(5)]); }
    chrome.storage.local.set({queue:rows.map(x=>x[0]), queueAt:Date.now()});
    return json({rows});
  }
  window.fetch=async function(input,init){
    const url=typeof input==="string"?input:(input&&input.url)||"";
    if(!/^api\//.test(url)) return realFetch(input,init);
    const q=new URLSearchParams(url.split("?")[1]||""), path=url.split("?")[0];
    try{
      if(path==="api/ping") return json({ok:true,portal:PORTAL,ext:true});
      if(path==="api/queue") return await readQueue();
      if(path==="api/page"){ const n=(q.get("n")||"").trim(); if(!/^\d{4,10}$/.test(n)) return json({error:"Type a design number (digits only)."},400);
        const r=await realFetch(PORTAL+ORDER+n,{credentials:"include",cache:"no-store"}); return new Response(await r.text(),{status:r.status,headers:{"Content-Type":"text/html"}}); }
      if(path==="api/file"){ const u=q.get("u")||""; let host=""; try{ host=new URL(u).hostname; }catch(e){}
        if(!HOSTS.some(h=>host===h||host.endsWith("."+h))) return json({error:"That file is not on the design portal."},400);
        const r=await realFetch(u,{credentials:"include"}); if(!r.ok) return json({error:"Could not download the artwork ("+r.status+")."},502);
        return new Response(await r.blob(),{status:200,headers:{"Content-Type":r.headers.get("Content-Type")||"application/octet-stream"}}); }
      if(path==="api/scan"){ const from=parseInt(q.get("from"),10), count=Math.min(60,parseInt(q.get("count"),10)||20), out=[];
        for(let i=0;i<count;i++){ const n=String(from+i); try{ const r=await realFetch(PORTAL+ORDER+n,{credentials:"include"}); const t=await r.text(); out.push({n,ok:/Design Number/i.test(t)&&/Size/i.test(t)}); }catch(e){ out.push({n,ok:false,error:String(e)}); } }
        return json({results:out,blocked:0}); }
      return json({error:"Not found"},404);
    }catch(e){ return json({error:"Could not reach the design portal: "+(e.message||e)},502); }
  };
  // saves go straight to Downloads/MatStudio (no zip, no dialog)
  window.claude={use:async name=>name==="downloads"?{save:async({filename,data})=>{
    const u=URL.createObjectURL(data); try{ await chrome.downloads.download({url:u,filename:"MatStudio/"+filename,conflictAction:"overwrite",saveAs:false}); } finally{ setTimeout(()=>URL.revokeObjectURL(u),60000); } }}:null};
  // remember which sketches are designed, for the toolbar badge
  window.matstudioSeen=n=>chrome.storage.local.get({seen:[]},o=>{ if(!o.seen.includes(n)){ o.seen.push(n); chrome.storage.local.set({seen:o.seen.slice(-2000)}); } });
})();
