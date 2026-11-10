/* Toolbar button opens the studio; every 15 minutes the badge shows how many queue sketches are not designed yet. */
const STUDIO=chrome.runtime.getURL("studio.html"), PORTAL="https://designupload.logomatsllc.com";
async function openStudio(suffix){
  const tabs=await chrome.tabs.query({url:STUDIO+"*"}); const url=STUDIO+(suffix||"");
  if(tabs.length){ await chrome.tabs.update(tabs[0].id,{active:true,url}); await chrome.windows.update(tabs[0].windowId,{focused:true}); }
  else await chrome.tabs.create({url});
}
chrome.action.onClicked.addListener(()=>openStudio("#autoqueue"));
chrome.runtime.onMessage.addListener((m)=>{ if(m&&m.design) openStudio("?design="+encodeURIComponent(m.design)); else if(m&&m.queue) openStudio("#autoqueue"); });
async function checkQueue(){
  try{ const r=await fetch(PORTAL+"/Design/ViewQueue",{credentials:"include",cache:"no-store"});
    if(/LogOn/i.test(r.url)){ chrome.action.setBadgeText({text:"?"}); chrome.action.setTitle({title:"Logo Mat Studio: log in to the design portal"}); return; }
    const nums=[...new Set([...(await r.text()).matchAll(/designNumber=(\d+)/g)].map(m=>m[1]))];
    const {seen=[]}=await chrome.storage.local.get({seen:[]}); const todo=nums.filter(n=>!seen.includes(n)).length;
    chrome.action.setBadgeBackgroundColor({color:"#17646C"}); chrome.action.setBadgeText({text:todo?String(todo):""});
    chrome.action.setTitle({title:"Logo Mat Studio: "+(todo? todo+" sketch(es) in the queue not designed yet" : "queue up to date")});
  }catch(e){ chrome.action.setBadgeText({text:""}); }
}
chrome.runtime.onInstalled.addListener(()=>{ chrome.alarms.create("queue",{periodInMinutes:15}); checkQueue(); });
chrome.runtime.onStartup.addListener(()=>{ chrome.alarms.create("queue",{periodInMinutes:15}); checkQueue(); });
chrome.alarms.onAlarm.addListener(a=>{ if(a.name==="queue") checkQueue(); });
chrome.storage.onChanged.addListener(c=>{ if(c.seen) checkQueue(); });
