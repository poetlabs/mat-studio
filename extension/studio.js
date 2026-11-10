
"use strict";
const PALETTES = {"colorstar": [["White No Clear", "#fefefe"], ["C01 White", "#ffffff"], ["C02 Light Grey", "#b9b9b9"], ["C03 Mid Grey", "#8c8e90"], ["C04 Dark Grey", "#454b52"], ["C05 Anthracite", "#292c30"], ["C06 Black", "#000000"], ["C07 Cool Anthracite", "#222e40"], ["C08 Cool Grey", "#707b87"], ["C09 Orange", "#e85110"], ["C10 Light Orange", "#d46d1e"], ["C11 Gold", "#c68929"], ["C12 Yellow", "#ffc300"], ["C13 Lemon", "#f1e83a"], ["C14 Limegreen", "#9cbd42"], ["C15 Dark Green", "#264028"], ["C16 Olive", "#5c6514"], ["C17 Grass Green", "#3e660c"], ["C18 Glen Green", "#325933"], ["C19 Forest Green", "#3b522d"], ["C20 Turquoise", "#26624a"], ["C21 Sea Blue", "#3d7b87"], ["C22 Cobalt Blue", "#254b77"], ["C23 Marine Blue", "#114c5c"], ["C24 Lagoon Blue", "#b3c9e3"], ["C25 Sky Blue", "#8bb9de"], ["C26 Light Blue", "#6889d3"], ["C27 Mid Blue", "#1d35a7"], ["C28 Royal Blue", "#172d75"], ["C29 Navy", "#1b2b4a"], ["C30 Deep Blue", "#081838"], ["C30(b)Dark Navy, only for old", "#0d1545"], ["C31 Purple", "#290970"], ["C32 Dark Purple", "#3e1258"], ["C33 Burgundy", "#94193e"], ["C34 Wine", "#6e2c30"], ["C35 Dark Fuchsia", "#c01d5f"], ["C36 Fuchsia", "#f2057f"], ["C37 Hot Pink", "#ed74ab"], ["C38 Bright Red", "#cc140a"], ["C39 Red", "#e00000"], ["C40 Ruby", "#b51b1b"], ["C41 Brick Red", "#6c252d"], ["C42 Chocolate", "#3e2020"], ["C43 Walnut", "#4f2d12"], ["C44 Brown", "#89542c"], ["C45 Sandalwood", "#a67953"], ["C46 Taupe", "#463a2a"], ["C47 Light Beige", "#f0cea7"], ["C48 Violet", "#906fc8"], ["C49 Peach", "#f0ae9f"], ["C50 Soft Orange", "#ebb759"], ["C51 Pink", "#f0a1c5"], ["C52 Raspberry", "#cc8a8a"], ["C53 Coral", "#d67a89"], ["C54 Salmon", "#fcad92"], ["C55 Light Yellow", "#faf1ad"], ["C56 Cactus", "#8d9352"], ["C57 Mint", "#9bccbd"], ["C58 Bright gold", "#c4914d"], ["C58 (b) Moss old", "#9cab80"], ["C59 Azure", "#6798b3"], ["C60 Lavender", "#7777ad"], ["C61 Charcoal", "#1c1918"], ["C62 Dark Ash", "#474747"], ["C63 Grey Ash", "#7a7a7a"], ["C64 Light Ash", "#c2c2c2"], ["C65 Warm Grey", "#857264"], ["C66 Light Green", "#66a135"]], "colorstar_hd": [["A01 Light Yellow", "#faf1ad"], ["A02 Lemon", "#f1e83a"], ["A03 Chartreuse", "#d6c331"], ["A04 Amber", "#c49106"], ["A05 Yellow", "#ffc300"], ["A06 Gold", "#c46900"], ["A07 Bright Gold", "#c68929"], ["A08 Soft Orange", "#ebb759"], ["A09 Grapefruit", "#ee482e"], ["A10 Light Orange", "#d46d1e"], ["B01 Orange", "#e85110"], ["B02 Red", "#e00000"], ["B03 Bright Red", "#cc140a"], ["B04 Carmine Red", "#af0000"], ["B05 Ruby", "#b5201b"], ["B06 Cardinal Red", "#9b2a34"], ["B07 Burgundy", "#94193e"], ["B08 Wine", "#6e2c30"], ["B09 Brick Red", "#791e00"], ["B10 Maroon", "#3e0000"], ["C01 Peach", "#f0ae9f"], ["C02 Salmon", "#fcad92"], ["C03 Raspberry", "#cc8a8a"], ["C04 Coral", "#d67a89"], ["C05 Pink", "#f0a1c5"], ["C06 Baby Pink", "#ff7682"], ["C07 Blush Pink", "#ff6382"], ["C08 Hot Pink", "#ed74ab"], ["C09 Fuchsia", "#f2057f"], ["C10 Dark Fuchsia", "#c01d5f"], ["D01 Violet", "#906fc8"], ["D02 Lavender", "#7777ad"], ["D03 Lilac Purple", "#7251aa"], ["D04 Amethyst", "#59598f"], ["D05 Royal Purple", "#3d2782"], ["D06 Persian Blue", "#18125c"], ["D07 Purple", "#290970"], ["D08 Dusty Mauve", "#6e395a"], ["D09 Verbena", "#5a2546"], ["D10 Dark Purple", "#3e1233"], ["E01 Lagoon Blue", "#b3c9e3"], ["E02 Sky Blue", "#8bb9de"], ["E03 Light Blue", "#6889d3"], ["E04 Azure", "#6798b3"], ["E05 Denium Blue", "#4c6699"], ["E06 Mid Blue", "#3149bb"], ["E07 Royal Blue", "#172d75"], ["E08 Cobalt Blue", "#254b77"], ["E09 Marine Blue", "#114c5c"], ["E10 Navy", "#1b2b4a"], ["F01 Deep Blue", "#081838"], ["F02 Cool Grey", "#707b87"], ["F03 Cool Anthracite", "#222e40"], ["F04 Spearmint", "#7bd1cd"], ["F05 Mint", "#7bccaa"], ["F06 Pacific Blue", "#28bbbc"], ["F07 Aquamarine", "#0a9d9e"], ["F08 Light Cyan", "#1db3db"], ["F09 Sea Blue", "#277b87"], ["F10 Pale Blue", "#befcfc"], ["G01 Pistachio Green", "#9be0bd"], ["G02 Moss", "#9cab80"], ["G03 Sage Green", "#696e45"], ["G04 Artichoke", "#546e5f"], ["G05 Pastel Green", "#a1dc54"], ["G06 Appel Green", "#6faa22"], ["G07 Cactus", "#8d9352"], ["G08 Lime Green", "#9cbd42"], ["G09 Light Green", "#66a135"], ["G10 Spring Green", "#2d8f3b"], ["H01 Grass Green", "#3e660c"], ["H02 Olive", "#5c6514"], ["H03 Autumn Green", "#6e5b17"], ["H04 Glen Green", "#325933"], ["H05 Forest Green", "#3b522d"], ["H06 Turquoise", "#26624a"], ["H07 Dark Green", "#264028"], ["H08 Light Beige", "#f0cea7"], ["H09 Sand", "#a0773d"], ["H10 Sandalwood", "#a67953"], ["I01 Ash Brown", "#976a44"], ["I02 Camel Brown", "#a6653f"], ["I03 Brown", "#89542c"], ["I04 Terracotta", "#a24500"], ["I05 Sienna", "#8e3100"], ["I06 Dark Sienna", "#7a1d00"], ["I07 Walnut", "#4f2d12"], ["I08 Chocolat", "#3d1b00"], ["I09 Taupe", "#463a2a"], ["I10 Warm Grey", "#857264"], ["J01 White", "#ffffff"], ["J02 Light Grey", "#b9b9b9"], ["J03 Mid Grey", "#8c8e90"], ["J04 Dark Grey", "#454b52"], ["J05 Anthracite", "#292c30"], ["J06 Light Ash", "#c2c2c2"], ["J07 Grey Ash", "#7a7a7a"], ["J08 Dark Ash", "#474747"], ["J09 Charcoal", "#1c1918"], ["J10 Black", "#000000"], ["White No Clear", "#fefefe"]], "classic": [["100 Burgundy", "#80293d"], ["101 Charcoal", "#666366"], ["102 Brown", "#9e5205"], ["103 Dark Gold", "#c27d05"], ["104 Turquoise", "#006973"], ["105 Purple", "#59178a"], ["106 Light Blue", "#93bfe8"], ["107 Royal Blue", "#3c5a87"], ["108 Black - NS8", "#1f1a17"], ["109 Gold", "#e4bf00"], ["110 Emerald Green", "#0f7a56"], ["111 Chocolate", "#82613b"], ["112 Red", "#d90b38"], ["114 Cranberry", "#8f2140"], ["115 Grey", "#94948f"], ["116 Silver", "#7a7a78"], ["117 Forest Green", "#355e42"], ["118 Navy", "#00214d"], ["119 Rose", "#ba8285"], ["120 Sandalwood", "#c2a787"], ["121 Steel Blue", "#454755"], ["123 Suede", "#9e8a6d"], ["126 Clay", "#b34307"], ["127 Orange", "#f27d00"], ["128 Yellow", "#ffff00"], ["130 Aquamarine", "#5cc9ba"], ["140 White", "#ffffff"], ["306 Sky Blue", "#64c9ed"], ["308 Mid Grey", "#6a656d"], ["311 Bright Red", "#b80707"], ["335 Hot Pink", "#ea579f"], ["340 Green", "#006b3f"], ["363 Bronze", "#7c6316"], ["366 Bright Green", "#55b755"], ["369 Airforce Blue", "#2b5763"], ["381 Peach", "#f0c49e"], ["382 Dark Beige", "#997059"], ["383 Light Brown", "#8f5c30"], ["384 Dark Brown", "#421e03"], ["385 Moss Green", "#3d4713"], ["386 Dark Green", "#00665c"], ["387 Light Grey", "#828585"], ["388 Dark Grey", "#403b33"], ["389 Pale Pink", "#f1bdd8"], ["390 Cherry Red", "#9e292b"], ["391 Plum", "#4d2942"], ["392 Fuschia", "#ad0078"], ["393 Violet", "#91829d"], ["394 Champagne", "#f7eed0"], ["395 Pale Yellow", "#efd083"], ["396 Bright Orange", "#ed6e00"], ["397 Wine Red", "#7d212b"], ["398 Bright Blue", "#003896"], ["399 Grass Green", "#404714"], ["400 Cloud Grey", "#dedddb"], ["401 Cookie Brown", "#906952"], ["402 Sea Green", "#4caeaa"], ["403 Lime Green", "#ded531"], ["404 True Blue", "#03326b"], ["405 Icy Grey", "#8397aa"], ["406 Tropical Blue", "#7fc0e7"], ["407 Cranberry", "#961f57"], ["408 Mid Blue", "#266fcb"], ["409 Crimson Red", "#c9002d"], ["411 Tarnished Grey", "#394049"], ["412 Apple Green", "#b2d567"], ["413 Parmaviolet", "#8783d3"], ["414 Baby Pink", "#e9b4c3"], ["415 Scarlet", "#de2f10"], ["416 Lemon Yellow", "#f1e968"], ["417 Baby Blue", "#8bafe9"], ["418 Desert Gold", "#c88922"], ["419 Pebble Grey", "#f0ebef"], ["420 Peacock", "#002633"], ["421 Denim", "#0b1326"], ["422 Arctic", "#6e93b8"], ["423 Bermuda Blue", "#052b31"], ["426 Ocean", "#09505f"], ["427 Cornflower", "#8da4eb"], ["428 Azure", "#000d99"], ["429 Space Blue", "#181026"], ["430 Pear", "#66991f"], ["431 Tea", "#97e85d"], ["432 Pine", "#125c38"], ["433 Avocado", "#b5ba12"], ["434 Spring", "#9eb300"], ["435 Seaweed", "#363d18"], ["436 Metallic", "#323d3a"], ["437 Kiwk", "#302d05"], ["439 Rust", "#712617"], ["440 Crimson", "#990033"], ["442 Grape", "#4d0033"], ["443 Postal", "#990027"], ["444 Black Forest", "#251020"], ["445 Pearl", "#b6a1a1"], ["446 Dove", "#cfc8c5"], ["447 Oat", "#eff3eb"], ["448 Fossil", "#4c5547"], ["449 Thunder", "#868076"], ["450 Smokey", "#555358"], ["451 Magenta", "#ba1265"], ["452 Bubblegum", "#ba1268"], ["453 Mushroom", "#ba8c90"], ["454 Deep Violet", "#4d0046"], ["455 Flamingo", "#f593ab"], ["457 Lavender", "#bd6cd9"], ["458 Linen", "#cfb8b5"], ["459 Orchid", "#8c0e57"], ["460 Shell", "#efd7dd"], ["463 Blush", "#e0925a"], ["464 Honey", "#c27427"], ["466 Olive", "#94853b"], ["467 Brass", "#705c21"], ["468 Butterscoth", "#ebac2f"], ["469 Apricot", "#ffc34c"], ["470 Pineapple", "#e6d600"], ["471 Teddybear", "#3d2b2e"], ["472 Sage", "#3d3d2b"], ["473 Caramel", "#866752"], ["474 Mahogany", "#4d2000"], ["475 Stone", "#86716c"], ["476 Sand Brown", "#d9b46c"], ["477 Fawn", "#b68c7f"], ["478 Lilac", "#9687e1"], ["479 Indigo", "#380e49"], ["480 Shadow", "#72728e"], ["481 Raincloud Grey", "#4c4755"], ["482 Bramble", "#3d323b"], ["483 Aubergine", "#221d25"], ["White No Clear", "#fefefe"]], "promoscrape": [["A01 Lemon Yellow", "#f1e968"], ["A02 Yellow", "#ffff00"], ["A03 Gold", "#e4bf00"], ["A04 Desert Gold", "#c88922"], ["A05 Dark Gold", "#c27d05"], ["A06 Bronze", "#7c6316"], ["A07 Orange", "#f27d00"], ["A08 Bright Orange", "#ed6e00"], ["A09 Clay", "#b34307"], ["A10 Red", "#d90b38"], ["B01 Crimson Red", "#c9002d"], ["B02 Bright Red", "#b80707"], ["B03 Wine Red", "#7d212b"], ["B04 Burgundy", "#80293d"], ["B05 Peach", "#f0c49e"], ["B06 Pale Pink", "#f1bdd8"], ["B07 Hot Pink", "#ea579f"], ["B08 Fuschia", "#ad0078"], ["B09 Parmaviolet", "#8783d3"], ["B10 Purple", "#59178a"], ["C01 Plum", "#4d2942"], ["C02 Tropical Blue", "#7fc0e7"], ["C03 Sky Blue", "#64c9ed"], ["C04 Baby Blue", "#8bafe9"], ["C05 Mid Blue", "#266fcb"], ["C06 Royal Blue", "#3c5a87"], ["C07 Bright Blue", "#003896"], ["C08 True Blue", "#03326b"], ["C09 Navy", "#00214d"], ["C10 Aquamarine", "#5cc9ba"], ["D01 Sea Green", "#5cc9ba"], ["D02 Dark Green", "#00665c"], ["D03 Turquoise", "#006973"], ["D04 Airforce Blue", "#2b5763"], ["D05 Lime Green", "#ded531"], ["D06 Apple Green", "#b2d567"], ["D07 Bright Green", "#55b755"], ["D08 Green", "#006b3f"], ["D09 Forest Green", "#355e42"], ["D10 Moss Green", "#3d4713"], ["E01 Champagne", "#f7eed0"], ["E02 Sandalwood", "#c2a787"], ["E03 Suede", "#9e8a6d"], ["E04 Chocolate", "#82613b"], ["E05 Dark Brown", "#421e03"], ["E06 Pebble Grey", "#f0ebef"], ["E07 Light Grey", "#828585"], ["E08 Silver", "#7a7a78"], ["E09 Dark Grey", "#403b33"], ["E10 Black", "#1f1a17"]]};
const STYLES = {
  classic:      {label:"Classic Impression", palette:"classic", tex:"impression", print:true},
  colorstar:    {label:"ColorStar Logo", palette:"colorstar", tex:"pile"},
  colorstar_hd: {label:"ColorStar HD", palette:"colorstar_hd", tex:"pileHD"},
  promoscrape:  {label:"Promoscrape Impressions Drainage Holes", palette:"promoscrape", tex:"scrape"}
};
const PRESETS = [[60,40],[85,60],[115,85],[150,85],[175,115],[200,115],[240,115],[200,150],[250,150],[200,175],[300,200]];

/* ---------- colour science ---------- */
const LIN = new Float32Array(256);
for (let i=0;i<256;i++){ const c=i/255; LIN[i]= c<=0.04045? c/12.92 : Math.pow((c+0.055)/1.055,2.4); }
function rgbToLab(r,g,b){
  const R=LIN[r],G=LIN[g],B=LIN[b];
  const x=(R*0.4124564+G*0.3575761+B*0.1804375)/0.95047, y=R*0.2126729+G*0.7151522+B*0.0721750, z=(R*0.0193339+G*0.1191920+B*0.9503041)/1.08883;
  const f=t=>t>0.008856?Math.cbrt(t):(7.787*t+16/116); const fx=f(x),fy=f(y),fz=f(z);
  return [116*fy-16,500*(fx-fy),200*(fy-fz)];
}
function de2000(a,b){
  const [L1,a1,b1]=a,[L2,a2,b2]=b, rad=Math.PI/180;
  const C1=Math.hypot(a1,b1),C2=Math.hypot(a2,b2),Cb=(C1+C2)/2, G=0.5*(1-Math.sqrt(Math.pow(Cb,7)/(Math.pow(Cb,7)+Math.pow(25,7))));
  const a1p=(1+G)*a1,a2p=(1+G)*a2, C1p=Math.hypot(a1p,b1),C2p=Math.hypot(a2p,b2);
  const h=(x,y)=>{ if(x===0&&y===0) return 0; let v=Math.atan2(y,x)/rad; return v<0?v+360:v; };
  const h1p=h(a1p,b1),h2p=h(a2p,b2), dL=L2-L1, dC=C2p-C1p;
  let dh=0; if(C1p*C2p!==0){ dh=h2p-h1p; if(dh>180) dh-=360; else if(dh<-180) dh+=360; }
  const dH=2*Math.sqrt(C1p*C2p)*Math.sin(dh*rad/2), Lb=(L1+L2)/2, Cbp=(C1p+C2p)/2;
  let hb=h1p+h2p; if(C1p*C2p!==0){ if(Math.abs(h1p-h2p)>180) hb = (h1p+h2p<360)? (h1p+h2p+360)/2 : (h1p+h2p-360)/2; else hb=(h1p+h2p)/2; }
  const T=1-0.17*Math.cos((hb-30)*rad)+0.24*Math.cos(2*hb*rad)+0.32*Math.cos((3*hb+6)*rad)-0.20*Math.cos((4*hb-63)*rad);
  const dTh=30*Math.exp(-Math.pow((hb-275)/25,2)), Rc=2*Math.sqrt(Math.pow(Cbp,7)/(Math.pow(Cbp,7)+Math.pow(25,7)));
  const Sl=1+0.015*Math.pow(Lb-50,2)/Math.sqrt(20+Math.pow(Lb-50,2)), Sc=1+0.045*Cbp, Sh=1+0.015*Cbp*T, Rt=-Math.sin(2*dTh*rad)*Rc;
  return Math.sqrt(Math.pow(dL/Sl,2)+Math.pow(dC/Sc,2)+Math.pow(dH/Sh,2)+Rt*(dC/Sc)*(dH/Sh));
}
const hexToRgb=h=>[parseInt(h.slice(1,3),16),parseInt(h.slice(3,5),16),parseInt(h.slice(5,7),16)];
const rgbToHex=(r,g,b)=>"#"+[r,g,b].map(v=>Math.round(v).toString(16).padStart(2,"0")).join("");
const YARNS={};
for (const k in PALETTES){ YARNS[k]=PALETTES[k].map(([label,hex])=>{ const rgb=hexToRgb(hex); const sp=label.indexOf(" "); return {label,hex,rgb,lab:rgbToLab(...rgb),code:sp<0?label:label.slice(0,sp),name:sp<0?"":label.slice(sp+1),manual:!/^[A-Z]{0,2}\d{2,3}/.test(label) || /\(b\)|\bold\b/i.test(label)}; }); } // legacy "(b) ... old" swatches: pick by hand only
// Swatches without a yarn code (e.g. "White No Clear") are special-purpose: selectable, never auto-picked.
function nearestYarn(pal,lab){ let best=null,bd=1e9; for(const y of YARNS[pal]){ if(y.manual) continue; const d=de2000(lab,y.lab); if(d<bd){bd=d;best=y;} } return {yarn:best,de:bd}; }
const yarnBy=(pal,label)=>YARNS[pal].find(y=>y.label===label);
/* Two clearly different logo colours (navy and royal blue triangles) must not share a yarn, or the shapes melt into one blob:
   the colour farther from the shared yarn moves to its nearest yarn not used yet. */
function separateYarns(){ const p=pal(); const used=new Set(S.clusters.map(c=>c.yarn)); if(S.bg) used.add(S.bg); if(S.bgOrder) used.add(S.bgOrder);
  const mats=[...used].filter(l=>l===S.bg||l===S.bgOrder).map(l=>yarnBy(p,l)).filter(Boolean);
  const all=S.clusters.filter(c=>!c.bg&&!c.grad), tot=all.reduce((a,c)=>a+c.count,0)||1;
  const logo=all.filter(c=>c.count>=0.04*tot).sort((a,b)=>b.count-a.count);
  for(let i=0;i<logo.length;i++) for(let j=0;j<i;j++){ const a=logo[j], b=logo[i]; if(a.yarn!==b.yarn || de2000(a.lab,b.lab)<10) continue;
    const mv= b.de>=a.de? b : a; let best=null,bd=1e9; for(const y of YARNS[p]){ if(y.manual||used.has(y.label)||mats.some(m=>de2000(m.lab,y.lab)<12)) continue; const d=de2000(mv.lab,y.lab); if(d<bd){bd=d;best=y;} }
    if(best && bd<12){ mv.yarn=best.label; mv.de=bd; used.add(best.label); } } }

/* ---------- state ---------- */
const S = {
  id:"5069241", style:"colorstar", w:200, h:115, corner:"square", bg:null, bgLocked:false, logoYarn:"auto", logoSet:[], orderNotes:[], keepAll:false, photo:false, border:"none", borderW:5,
  k:"auto", smooth:2, minDetail:3, roundMM:2, build:"stacked", scale:0.95, dx:0, dy:0, view:"mockup",
  srcName:"", srcCanvas:null, isSample:false,
  work:null, clusters:[], idx:null, bbox:null, layers:[], traceJob:0, tracing:false
};
const $=id=>document.getElementById(id);
const pal=()=>STYLES[S.style].palette;

/* ---------- UI setup ---------- */
function fillSelect(sel, items, val){ sel.innerHTML=""; for(const [v,t] of items){ const o=document.createElement("option"); o.value=v; o.textContent=t; sel.appendChild(o);} if(val!=null) sel.value=val; }
fillSelect($("style"), Object.entries(STYLES).map(([k,s])=>[k,s.label]), S.style);
fillSelect($("preset"), [["","Custom"],...PRESETS.map(([w,h])=>[w+"x"+h, w+" × "+h+" cm"])], "200x115");
fillSelect($("kSel"), [["auto","Auto"],...[2,3,4,5,6,7,8].map(n=>[String(n),n+" colours"])], "auto");
function fillYarnSelects(){
  const p=pal();
  if(!S.bg || !yarnBy(p,S.bg)) S.bg = nearestYarn(p, S.bg? rgbToLab(...hexToRgb(lastHex.bg||"#c2c2c2")) : rgbToLab(194,194,194)).yarn.label;
  if(S.border!=="none" && !yarnBy(p,S.border)) S.border = nearestYarn(p, rgbToLab(...hexToRgb(lastHex.border||"#222222"))).yarn.label;
  fillSelect($("bgYarn"), YARNS[p].map(y=>[y.label,y.label]), S.bg);
  fillSelect($("borderYarn"), [["none","No border"],...YARNS[p].map(y=>[y.label,y.label])], S.border);
  S.logoSet=S.logoSet.filter(l=>yarnBy(p,l));
  if(S.logoYarn==="set" && S.logoSet.length<2) S.logoYarn = S.logoSet[0]||"auto";
  if(S.logoYarn!=="auto" && S.logoYarn!=="set" && !yarnBy(p,S.logoYarn)) S.logoYarn = nearestYarn(p, rgbToLab(...hexToRgb(lastHex.logo||"#000000"))).yarn.label;
  fillSelect($("logoYarn"), [["auto","From the logo (multi-colour)"],...(S.logoSet.length>1?[["set","Order colours: "+S.logoSet.map(l=>l.split(" ")[0]).join(", ")]]:[]),...YARNS[p].map(y=>[y.label,y.label])], S.logoYarn);
  syncChips();
}
const lastHex={bg:null,border:null,logo:null};
function syncChips(){
  const p=pal(); const bg=yarnBy(p,S.bg); $("bgChip").style.background=bg?bg.hex:"transparent"; lastHex.bg=bg&&bg.hex;
  const bd=S.border==="none"?null:yarnBy(p,S.border); $("borderChip").style.background=bd?bd.hex:"transparent"; if(bd) lastHex.border=bd.hex;
  $("borderWWrap").hidden = !bd;
  const lg=(S.logoYarn==="auto"||S.logoYarn==="set")?null:yarnBy(p,S.logoYarn); $("logoChip").style.background=lg?lg.hex:"conic-gradient(#c33,#e93,#3a6,#36c,#c33)"; if(lg) lastHex.logo=lg.hex;
}
function applyLogoYarn(){ const p=pal();
  if(S.logoYarn==="set"){ const ys=S.logoSet.map(l=>yarnBy(p,l)).filter(Boolean); if(!ys.length) return;
    // several order colours: each logo colour goes to the closest of the colours the order asks for
    // a page-coloured pocket kept inside an emblem (the white inside a red hexagon outline) stays the mat colour when the mat is that colour
    const mat=yarnBy(p,S.bg), page=S.clusters.find(c=>c.bg&&!c.panel);
    for(const c of S.clusters) if(!c.bg){ c.hole=false; let b=ys[0],bd=1e9; for(const y of ys){ const d=de2000(c.lab,y.lab); if(d<bd){bd=d;b=y;} }
      const dm=mat&&page&&S.bgSrc&&de2000(c.lab,page.lab)<10? de2000(c.lab,mat.lab) : 1e9; if(dm<10 && dm<bd){ c.yarn=mat.label; c.de=dm; c.hole=true; continue; }
      c.yarn=b.label; c.de=bd; } return; }
  if(S.logoYarn==="auto") return; const y=yarnBy(p,S.logoYarn); if(!y) return;
  for(const c of S.clusters) if(!c.bg){ c.yarn=y.label; c.de=de2000(c.lab,y.lab); } }

/* ---------- image intake ---------- */
const WORK_LONG=2000;
/* ---------- vector artwork: PDF / Illustrator (.ai with PDF compatibility) / SVG ---------- */
const PDFJS_BASE=window.MATSTUDIO_PDFJS||"https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/"; // the Chrome extension ships its own copy
let pdfjsReady=null;
function loadScript(src){ return new Promise((res,rej)=>{ const el=document.createElement("script"); el.src=src; el.onload=res; el.onerror=()=>rej(new Error("load")); document.head.appendChild(el); }); }
function getPdfjs(){
  if(!pdfjsReady) pdfjsReady=(async()=>{ await loadScript(PDFJS_BASE+"pdf.min.js"); await loadScript(PDFJS_BASE+"pdf.worker.min.js");
    window.pdfjsLib.GlobalWorkerOptions.workerSrc=PDFJS_BASE+"pdf.worker.min.js"; return window.pdfjsLib; })().catch(e=>{ pdfjsReady=null; throw {user:"The PDF reader could not be loaded. Check the internet connection and try again."}; });
  return pdfjsReady;
}
const RENDER_LONG=2600;
async function renderPdfPage(doc,pageNo){
  const page=await doc.getPage(pageNo);
  const tc=await page.getTextContent(); const txt=tc.items.map(i=>i.str).join(" ");
  if(/saved without PDF Content/i.test(txt)) throw {user:"This Illustrator file was saved without PDF compatibility, so only Illustrator can open it. Ask the customer for a PDF, or open it in Illustrator and save again with “Create PDF Compatible File” ticked."};
  const v1=page.getViewport({scale:1}); const sc=Math.min(12,RENDER_LONG/Math.max(v1.width,v1.height)); const vp=page.getViewport({scale:sc});
  const c=document.createElement("canvas"); c.width=Math.ceil(vp.width); c.height=Math.ceil(vp.height);
  // A page that carries a picture (a scan or a printed screenshot) is read on white paper, the way it looks in any viewer;
  // a vector logo keeps its transparent page so white lettering stays visible.
  let hasImage=false; try{ const ops=await page.getOperatorList(), O=pdfjsLib.OPS; hasImage=ops.fnArray.some(f=>f===O.paintImageXObject||f===O.paintJpegXObject||f===O.paintInlineImageXObject||f===O.paintImageXObjectRepeat); }catch(e){}
  await page.render({canvasContext:c.getContext("2d"),viewport:vp,background:hasImage?"rgba(255,255,255,1)":"rgba(0,0,0,0)"}).promise;
  return c;
}
async function renderSvg(blob){
  const txt=await blob.text(); const dom=new DOMParser().parseFromString(txt,"image/svg+xml"); const svg=dom.documentElement;
  if(!svg || svg.nodeName.toLowerCase()!=="svg") throw {user:"This SVG file could not be read."};
  const vb=(svg.getAttribute("viewBox")||"").trim().split(/[\s,]+/).map(Number);
  let w=parseFloat(svg.getAttribute("width"))||0, h=parseFloat(svg.getAttribute("height"))||0;
  if(vb.length===4 && vb[2]>0 && vb[3]>0){ w=vb[2]; h=vb[3]; } else { w=w||1000; h=h||1000; svg.setAttribute("viewBox","0 0 "+w+" "+h); }
  const sc=RENDER_LONG/Math.max(w,h); svg.setAttribute("width",String(w*sc)); svg.setAttribute("height",String(h*sc));
  const url=URL.createObjectURL(new Blob([new XMLSerializer().serializeToString(svg)],{type:"image/svg+xml"}));
  const img=await new Promise((res,rej)=>{ const i=new Image(); i.onload=()=>res(i); i.onerror=()=>rej({user:"This SVG file could not be drawn."}); i.src=url; });
  const c=document.createElement("canvas"); c.width=Math.round(w*sc); c.height=Math.round(h*sc); c.getContext("2d").drawImage(img,0,0,c.width,c.height); return c;
}
function showSource(canvas,name,info){
  S.isSample=false; S.fullSrc=canvas; S.cropSrc=null; S.plain=false;
  const t=document.createElement("canvas"), k=144/Math.max(canvas.width,canvas.height); t.width=Math.max(1,Math.round(canvas.width*k)); t.height=Math.max(1,Math.round(canvas.height*k));
  t.getContext("2d").drawImage(canvas,0,0,t.width,t.height); $("thumb").src=t.toDataURL();
  $("srcTools").hidden=false; closeCrop(); ingest(canvas,name,info);
}
async function loadFromBlob(blob,name){
  name=name||"pasted image"; const ext=(name.split(".").pop()||"").toLowerCase();
  try{
    if(blob.type==="application/pdf"||ext==="pdf"||ext==="ai"){
      busy("Opening "+ext.toUpperCase()+"…"); const lib=await getPdfjs();
      const doc=await lib.getDocument({data:new Uint8Array(await blob.arrayBuffer()),isEvalSupported:false}).promise;
      S.pdfDoc={doc,name};
      const pw=$("pageWrap"); pw.hidden=doc.numPages<2; fillSelect($("pdfPage"),Array.from({length:doc.numPages},(_,i)=>[String(i+1),"Page "+(i+1)+" of "+doc.numPages]),"1");
      const c=await renderPdfPage(doc,1); busy(null);
      showSource(c,name,(ext==="ai"?"Illustrator":"PDF")+" · vector, rendered sharp"+(doc.numPages>1?" · "+doc.numPages+" pages":""));
      return;
    }
    S.pdfDoc=null; $("pageWrap").hidden=true;
    if(blob.type==="image/svg+xml"||ext==="svg"){ busy("Opening SVG…"); const c=await renderSvg(blob); busy(null); showSource(c,name,"SVG · vector, rendered sharp"); return; }
    if(["ppt","pptx","doc","docx","eps","cdr","psd","tif","tiff","heic","xls","xlsx"].includes(ext)) throw {user:"."+ext+" files can't be read here. Export the logo as PDF, SVG or PNG first."};
    const url=URL.createObjectURL(blob);
    const img=await new Promise((res,rej)=>{ const i=new Image(); i.onload=()=>res(i); i.onerror=()=>rej({user:"That file could not be read as an image. Try PNG, JPG, PDF or SVG."}); i.src=url; });
    const c=document.createElement("canvas"); c.width=img.naturalWidth; c.height=img.naturalHeight; c.getContext("2d").drawImage(img,0,0);
    showSource(c,name,img.naturalWidth+" × "+img.naturalHeight+" px");
  }catch(e){ busy(null); toast(e&&e.user?e.user:"That file could not be opened ("+(e&&e.message||"unknown error")+")."); }
}
$("pdfPage").addEventListener("change",async e=>{ if(!S.pdfDoc) return; try{ busy("Rendering page…"); const c=await renderPdfPage(S.pdfDoc.doc,+e.target.value); busy(null); showSource(c,S.pdfDoc.name+" · page "+e.target.value,"PDF page "+e.target.value); }catch(err){ busy(null); toast(err.user||"That page could not be rendered."); } });

/* crop a region of the artwork (spec sheets, proofs with notes) */
const crop={sel:null,drag:null,scale:1};
function openCrop(){ if(!S.fullSrc) return; const box=$("cropBox"), cv=$("cropCv"); box.hidden=false;
  const W=Math.min(600,box.clientWidth||300), k=W/S.fullSrc.width; crop.scale=k; cv.width=Math.round(S.fullSrc.width*k); cv.height=Math.round(S.fullSrc.height*k); crop.sel=null; $("bCropUse").disabled=true; drawCrop(); }
function closeCrop(){ $("cropBox").hidden=true; crop.sel=null; }
function drawCrop(){ const cv=$("cropCv"), x=cv.getContext("2d"); x.clearRect(0,0,cv.width,cv.height); x.drawImage(S.fullSrc,0,0,cv.width,cv.height);
  if(crop.sel){ const r=crop.sel; x.fillStyle="rgba(0,0,0,.45)"; x.fillRect(0,0,cv.width,cv.height); x.save(); x.beginPath(); x.rect(r.x,r.y,r.w,r.h); x.clip(); x.clearRect(r.x,r.y,r.w,r.h); x.drawImage(S.fullSrc,0,0,cv.width,cv.height); x.restore();
    x.strokeStyle=cssVar("--accent")||"#17646C"; x.lineWidth=2; x.setLineDash([6,4]); x.strokeRect(r.x+1,r.y+1,r.w-2,r.h-2); x.setLineDash([]); } }
const cropPt=e=>{ const cv=$("cropCv"), b=cv.getBoundingClientRect(); return {x:(e.clientX-b.left)*cv.width/b.width, y:(e.clientY-b.top)*cv.height/b.height}; };
$("cropCv").addEventListener("pointerdown",e=>{ e.preventDefault(); $("cropCv").setPointerCapture(e.pointerId); crop.drag=cropPt(e); crop.sel=null; });
$("cropCv").addEventListener("pointermove",e=>{ if(!crop.drag) return; const p=cropPt(e), a=crop.drag; crop.sel={x:Math.min(a.x,p.x),y:Math.min(a.y,p.y),w:Math.abs(p.x-a.x),h:Math.abs(p.y-a.y)}; drawCrop(); });
$("cropCv").addEventListener("pointerup",()=>{ crop.drag=null; $("bCropUse").disabled=!(crop.sel&&crop.sel.w>6&&crop.sel.h>6); });
$("bCrop").onclick=openCrop; $("bCropCancel").onclick=closeCrop;
$("bCropAll").onclick=()=>{ closeCrop(); S.cropSrc=null; ingest(S.fullSrc,S.srcName.replace(/ \(selection\)$/,""),"whole artwork"); };
$("bCropUse").onclick=()=>{ const r=crop.sel, k=crop.scale; if(!r) return; const c=document.createElement("canvas");
  c.width=Math.max(1,Math.round(r.w/k)); c.height=Math.max(1,Math.round(r.h/k)); c.getContext("2d").drawImage(S.fullSrc,Math.round(r.x/k),Math.round(r.y/k),c.width,c.height,0,0,c.width,c.height);
  const full=S.fullSrc; closeCrop(); S.cropSrc=c; ingest(c,S.srcName.replace(/ \(selection\)$/,"")+" (selection)",c.width+" × "+c.height+" px selected"); S.fullSrc=full; };
function ingest(img,name,info){
  let w=img.naturalWidth||img.width, h=img.naturalHeight||img.height;
  if(!w||!h){ w=1000; h=500; }
  S.plain=false; S.photoSrc=null; S.photoUser=false; S.cleanupUser=null; S.srcName=name; $("srcName").textContent=name; $("srcInfo").innerHTML=info+(S.isSample?'<span class="sample-tag">SAMPLE</span>':"");
  const s=WORK_LONG/Math.max(w,h); const W=Math.round(w*s), H=Math.round(h*s);
  const c=document.createElement("canvas"); c.width=W; c.height=H; const x=c.getContext("2d",{willReadFrequently:true});
  x.imageSmoothingEnabled=true; x.imageSmoothingQuality="high"; x.drawImage(img,0,0,W,H);
  S.srcCanvas=c; S.upscale=s; analyze();
}
const drop=$("drop");
drop.addEventListener("click",()=>$("file").click());
drop.addEventListener("keydown",e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); $("file").click(); }});
$("file").addEventListener("change",e=>{ const f=e.target.files[0]; if(f) loadFromBlob(f,f.name); e.target.value=""; });
["dragenter","dragover"].forEach(t=>drop.addEventListener(t,e=>{e.preventDefault(); drop.classList.add("over");}));
["dragleave","drop"].forEach(t=>drop.addEventListener(t,e=>{e.preventDefault(); drop.classList.remove("over");}));
drop.addEventListener("drop",e=>{ const f=[...e.dataTransfer.files][0]; if(f) loadFromBlob(f,f.name); else toast("Drop a logo file (image, PDF, AI or SVG)."); });
document.addEventListener("paste",e=>{ const it=[...(e.clipboardData||{}).items||[]].find(i=>i.type.startsWith("image/")); if(it){ loadFromBlob(it.getAsFile(),"pasted image"); }});

/* ---------- analysis: smooth, cluster, map to yarns ---------- */
function boxBlur(src,w,h,r){
  if(r<1) return src; const out=new Uint8ClampedArray(src.length), tmp=new Float32Array(src.length), d=2*r+1;
  for(let y=0;y<h;y++){ for(let c=0;c<4;c++){ let acc=0; for(let i=-r;i<=r;i++){ const xx=Math.min(w-1,Math.max(0,i)); acc+=src[(y*w+xx)*4+c]; }
      for(let x=0;x<w;x++){ tmp[(y*w+x)*4+c]=acc/d; const xo=Math.max(0,x-r), xi=Math.min(w-1,x+r+1); acc+=src[(y*w+xi)*4+c]-src[(y*w+xo)*4+c]; } } }
  for(let x=0;x<w;x++){ for(let c=0;c<4;c++){ let acc=0; for(let i=-r;i<=r;i++){ const yy=Math.min(h-1,Math.max(0,i)); acc+=tmp[(yy*w+x)*4+c]; }
      for(let y=0;y<h;y++){ out[(y*w+x)*4+c]=acc/d; const yo=Math.max(0,y-r), yi=Math.min(h-1,y+r+1); acc+=tmp[(yi*w+x)*4+c]-tmp[(yo*w+x)*4+c]; } } }
  return out;
}
function rng(seed){ return ()=>{ seed=(seed*1664525+1013904223)>>>0; return seed/4294967296; }; }

function analyze(){
  if(!S.srcCanvas) return;
  const c=S.srcCanvas, w=c.width, h=c.height, N=w*h;
  let data=c.getContext("2d",{willReadFrequently:true}).getImageData(0,0,w,h).data;
  // Blur only artwork that had to be enlarged a lot (pixelated); sharp artwork keeps its thin details (serif ends).
  const r=Math.min(3,Math.round(S.smooth*0.5*Math.max(0,S.upscale-1.5)));
  data=boxBlur(data,w,h,r); if(r>0) data=boxBlur(data,w,h,Math.max(1,r>>1));
  // Sample flat (non-edge) pixels so anti-aliased fringes don't become their own colours
  const rand=rng(7), samples=[], d=2;
  for(let t=0;t<60000 && samples.length<24000;t++){
    const x=d+Math.floor(rand()*(w-2*d)), y=d+Math.floor(rand()*(h-2*d)), p=(y*w+x)*4;
    if(data[p+3]<128) continue;
    let diff=0; for(const q of [p-4*d,p+4*d,p-4*w*d,p+4*w*d]) diff+=Math.abs(data[q]-data[p])+Math.abs(data[q+1]-data[p+1])+Math.abs(data[q+2]-data[p+2]);
    if(diff>40) continue;
    samples.push(rgbToLab(data[p],data[p+1],data[p+2]));
  }
  if(samples.length<50){ for(let t=0;t<4000;t++){ const p=Math.floor(rand()*N)*4; if(data[p+3]>=128) samples.push(rgbToLab(data[p],data[p+1],data[p+2])); } }
  const K = S.k==="auto"? 8 : +S.k, nFlat=samples.length; // nFlat: the flat samples (later additions are edge/detail pixels)
  let cents=kmeans(samples,K,rand);
  if(S.k==="auto") cents=mergeClose(cents, samples.length);
  if(cents.length<2){ // thin artwork (fine lettering) can lack flat samples: look for any clearly different pixels
    const c0=cents[0].lab, far=[]; for(let t=0;t<200000 && far.length<6000;t++){ const p=Math.floor(rand()*N)*4; if(data[p+3]<128) continue; const l=rgbToLab(data[p],data[p+1],data[p+2]); if((l[0]-c0[0])**2+(l[1]-c0[1])**2+(l[2]-c0[2])**2>900) far.push(l); }
    if(far.length>=30){ // keep the core of the strokes, not their anti-aliased edges: the most distant half
      far.sort((a,b)=>((b[0]-c0[0])**2+(b[1]-c0[1])**2+(b[2]-c0[2])**2)-((a[0]-c0[0])**2+(a[1]-c0[1])**2+(a[2]-c0[2])**2));
      const core=far.slice(0,Math.max(15,far.length>>1)); cents=cents.concat(mergeClose(kmeans(core,Math.min(3,core.length),rand),core.length)); samples.push(...core); } }
  { // thin or small elements in a colour of their own (a thin red rule, a small flower) have no flat samples: find them
    const far=[]; let tried=0;
    for(let t=0;t<200000;t++){ const p=Math.floor(rand()*N)*4; if(data[p+3]<128) continue; tried++; const l=rgbToLab(data[p],data[p+1],data[p+2]);
      let md=1e9; for(const c of cents){ const d=(l[0]-c.lab[0])**2+(l[1]-c.lab[1])**2+(l[2]-c.lab[2])**2; if(d<md) md=d; } if(md>900) far.push([l,md]); }
    if(cents.length>=2 && far.length>=Math.max(40,0.0015*tried)){
      far.sort((a,b)=>b[1]-a[1]); const core=far.slice(0,Math.max(20,far.length>>1)).map(x=>x[0]);
      const add=mergeClose(kmeans(core,Math.min(4,core.length),rand),core.length).filter(c=>c.n>=Math.max(15,0.12*core.length) && Math.hypot(c.lab[1],c.lab[2])>=23 && cents.every(o=>de2000(o.lab,c.lab)>=20)); // vivid only: greys and dull tints are edge blends
      if(add.length){ cents=cents.concat(add.map(c=>Object.assign(c,{rescued:true}))); samples.push(...core); } } }
  const TR=255; S.dbg=[cents.map(c=>[labHex(c.lab),c.n,!!c.rescued])];
  let idx=assignPixels(data,N,cents);
  if(cents.some(c=>c.rescued)){ // keep a rescued colour only where it forms solid shapes; rims around other shapes are edge blur
    // "solid" measured in source pixels: deeper inside the shape than an enlarged, blurred edge can reach
    const tot=new Float64Array(cents.length), inn=new Float64Array(cents.length), deep=Math.max(1.5,1.2*Math.max(1,S.upscale||1));
    cents.forEach((c,k)=>{ if(!c.rescued) return; const m=new Uint8Array(N); for(let i=0;i<N;i++) m[i]=idx[i]===k?1:0; const d=chamfer(m,w,h);
      for(let i=0;i<N;i++) if(m[i]){ tot[k]++; if(d[i]>deep) inn[k]++; } });
    // thin but standing on one colour (a hairline on the mat) stays; thin and squeezed between two colours (a rim) goes
    const nb=cents.map(()=>new Float64Array(cents.length));
    for(let y=1;y<h-1;y++) for(let x=1;x<w-1;x++){ const i=y*w+x, v=idx[i]; if(v===255||!cents[v].rescued) continue; for(const j of [i-1,i+1,i-w,i+w]){ const u=idx[j]; if(u!==v&&u!==255) nb[v][u]++; } }
    const rimLike=k=>{ const a=[...nb[k]].sort((p,q)=>q-p), t=a.reduce((p,q)=>p+q,0); return t>0 && a[1]>=0.2*t; };
    const drop=cents.map((c,k)=>c.rescued && (!tot[k] || (inn[k]/tot[k]<0.5 && rimLike(k))));
    if(drop.some(Boolean)){ cents=cents.filter((c,k)=>!drop[k]); idx=assignPixels(data,N,cents); } }
  if(S.k==="auto" && cents.length>2){ const fr=fringeClusters(idx,w,h,cents);
    if(fr.size){ cents=cents.filter((_,k)=>!fr.has(k)); idx=assignPixels(data,N,cents); } }
  modeFilter(idx,w,h,cents.length); modeFilter(idx,w,h,cents.length);
  dropSlivers(idx,w,h,data,cents); dropSlivers(idx,w,h,data,cents);
  S.rimMoved=dropRims(idx,w,h,data,cents); if(S.rimMoved) modeFilter(idx,w,h,cents.length);
  // How photographic is the artwork? Share of flat samples far from every flat colour (gradients, shading, photos).
  const sNear=new Int16Array(samples.length), sFar=new Uint8Array(samples.length);
  samples.forEach((s,i)=>{ let md=1e9; cents.forEach((c,k)=>{ const d=(s[0]-c.lab[0])**2+(s[1]-c.lab[1])**2+(s[2]-c.lab[2])**2; if(d<md){ md=d; sNear[i]=k; } }); sFar[i]=md>144?1:0; });
  // Background: the colour dominating the image edge (or transparency)
  const edge=new Float64Array(cents.length+1); let edgeN=0, trN=0;
  for(let x=0;x<w;x++) for(const y of [0,h-1]){ const v=idx[y*w+x]; edge[v===TR?cents.length:v]++; edgeN++; }
  for(let y=0;y<h;y++) for(const x of [0,w-1]){ const v=idx[y*w+x]; edge[v===TR?cents.length:v]++; edgeN++; }
  let bgC=-1, bgMax=0; for(let k=0;k<cents.length;k++) if(edge[k]>bgMax){bgMax=edge[k];bgC=k;}
  if(edge[cents.length]>bgMax || bgMax<0.5*edgeN) bgC=-1;
  if(bgC<0 && edge[cents.length]>=0.5*edgeN && cents.length>=3){
    // transparent page around opaque artwork: if the artwork's own outer rim is mostly one light colour (the white margin
    // of a pasted scan), that colour is the page too
    const rim=new Float64Array(cents.length); let rn=0;
    for(let i=0;i<N;i++){ const v=idx[i]; if(v===TR) continue; const x=i%w; if((x>0&&idx[i-1]===TR)||(x<w-1&&idx[i+1]===TR)||(i>=w&&idx[i-w]===TR)||(i<N-w&&idx[i+w]===TR)){ rim[v]++; rn++; } }
    let rk=0; for(let k=1;k<cents.length;k++) if(rim[k]>rim[rk]) rk=k;
    let ox0=w,oy0=h,ox1=-1,oy1=-1; for(let i=0;i<N;i++) if(idx[i]!==TR){ const x=i%w,y=(i-x)/w; if(x<ox0)ox0=x; if(x>ox1)ox1=x; if(y<oy0)oy0=y; if(y>oy1)oy1=y; }
    let bn=0, bo=0; for(let x=ox0;x<=ox1;x++) for(const y of [oy0,oy1]){ bn++; if(idx[y*w+x]!==TR) bo++; } for(let y=oy0;y<=oy1;y++) for(const x of [ox0,ox1]){ bn++; if(idx[y*w+x]!==TR) bo++; }
    if(rn>0 && bo>=0.9*bn && rim[rk]>=0.45*rn && cents[rk].lab[0]>85) bgC=rk; }
  { let far=0,n=0; for(let i=0;i<Math.min(nFlat,samples.length);i++){ if(sNear[i]===bgC && !sFar[i]) continue; n++; far+=sFar[i]; } S.resid=n>30? far/n : 0; } // measured on the logo, not the backdrop
  // Photos and textured scans (a photo of an old mat, a painted sign): keep only the logo strokes, like a designer redrawing them.
  S.noise=speckRate(idx,w,h);
  const photoWanted=!S.photoUser && (S.photoReq || (STYLES[S.style].print && S.resid>PHOTO_RESID));
  S.cleanup= S.cleanupUser!=null? S.cleanupUser : (!photoWanted && S.noise>CLEANUP_NOISE);
  S.cleanupInfo=null; S.cleanupConf=null;
  if(S.cleanup){ const cu=cleanupStrokes(c,w,h,idx,cents);
    // automatically only when the picture is clearly "one stroke colour on a mat" (a photo of a mat or a painted sign)
    if(cu && (S.cleanupUser || cu.info.conf>=CLEANUP_CONF)){ idx=cu.idx; cents=cu.cents; bgC=0; S.cleanupInfo=cu.info; S.cleanupConf=cu.info.conf; S.resid=0; }
    else { S.cleanupHint=!S.cleanupUser; S.cleanup=false; if(cu) S.cleanupConf=cu.info.conf; } }
  else S.cleanupHint=false;
  { const cb=$("cleanupMode"); if(cb) cb.checked=!!S.cleanup; }
  // Is that edge colour really flat (a plain backdrop), or part of a picture (sky, gradient)?
  let flat=0, flatN=0; if(bgC>=0){ const bl=cents[bgC].lab; for(let x=0;x<w;x+=3) for(const y of [1,h-2]){ const q=(y*w+x)*4; if(data[q+3]<128) continue; const l=rgbToLab(data[q],data[q+1],data[q+2]); flatN++; if((l[0]-bl[0])**2+(l[1]-bl[1])**2+(l[2]-bl[2])**2<64) flat++; }
    for(let y=0;y<h;y+=3) for(const x of [1,w-2]){ const q=(y*w+x)*4; if(data[q+3]<128) continue; const l=rgbToLab(data[q],data[q+1],data[q+2]); flatN++; if((l[0]-bl[0])**2+(l[1]-bl[1])**2+(l[2]-bl[2])**2<64) flat++; } }
  S.bgFlat=flatN? flat/flatN : 0;
  // Thin bits hugging the picture edge (a frame line, a cropping edge) are not part of the logo.
  if(bgC>=0 && !S.cleanup){ const m=Math.max(3,Math.round(0.015*Math.min(w,h))), ec=components(w,h,i=>idx[i]!==TR&&idx[i]!==bgC,()=>true);
    const hug=new Uint8Array(ec.n+1); let anyH=false;
    for(let q=1;q<=ec.n;q++){ if(ec.x1[q]<m||ec.x0[q]>w-1-m||ec.y1[q]<m||ec.y0[q]>h-1-m){ hug[q]=1; anyH=true; } }
    if(anyH) for(let i=0;i<N;i++) if(hug[ec.lab[i]]) idx[i]=bgC; }
  // Background connected to the image edge (used to cut a photo's plain backdrop away).
  S.bgConn=null;
  if(bgC>=0){ const conn=new Uint8Array(N), seenT=new Uint8Array(N), st=[];
    // flood from the picture edge through background and transparent pixels
    const push=i=>{ if(idx[i]===bgC){ if(!conn[i]){ conn[i]=1; st.push(i); } } else if(idx[i]===TR && !seenT[i]){ seenT[i]=1; st.push(i); } };
    for(let x=0;x<w;x++){ push(x); push((h-1)*w+x); } for(let y=0;y<h;y++){ push(y*w); push(y*w+w-1); }
    while(st.length){ const i=st.pop(), x=i%w; if(x>0) push(i-1); if(x<w-1) push(i+1); if(i>=w) push(i-w); if(i<N-w) push(i+w); }
    S.bgConn=conn;
    // Page colour inside an emblem (white checker squares in a shield, white text in a badge) is part of the logo.
    // An emblem = one large connected logo shape that is mostly solid inside its outline; lettering (small separate
    // shapes) and rings with an empty middle are not, so their counters and centres still show the mat.
    if(!S.cleanup && cents[bgC].lab[0]>80){ const comp=components(w,h,i=>idx[i]!==TR && idx[i]!==bgC,()=>true), holes=components(w,h,i=>idx[i]===bgC && !conn[i],()=>true);
      const sil=new Float64Array(comp.n+1), own=new Int32Array(holes.n+1);
      const dark=new Float64Array(holes.n+1), edgeN=new Float64Array(holes.n+1);
      for(let i=0;i<N;i++){ const hq=holes.lab[i]; if(!hq) continue; const x=i%w; const nb=[x>0?i-1:-1,x<w-1?i+1:-1,i-w,i+w];
        for(const j of nb) if(j>=0&&j<N&&comp.lab[j]){ if(!own[hq]) own[hq]=comp.lab[j]; edgeN[hq]++; if(cents[idx[j]].lab[0]<75) dark[hq]++; } }
      // a hole edged by a pale colour is part of a pale area (a faint tint around the page colour), not a white detail
      for(let q=1;q<=holes.n;q++) if(edgeN[q] && dark[q]<0.6*edgeN[q]) own[q]=0;
      const nh=new Int32Array(comp.n+1); for(let q=1;q<=holes.n;q++) if(own[q]){ sil[own[q]]+=holes.size[q]; nh[own[q]]++; }
      let lx0=w,ly0=h,lx1=-1,ly1=-1; for(let q=1;q<=comp.n;q++){ if(comp.x0[q]<lx0)lx0=comp.x0[q]; if(comp.y0[q]<ly0)ly0=comp.y0[q]; if(comp.x1[q]>lx1)lx1=comp.x1[q]; if(comp.y1[q]>ly1)ly1=comp.y1[q]; }
      const logoBox=Math.max(1,(lx1-lx0+1)*(ly1-ly0+1)), emblem=new Uint8Array(comp.n+1); let anyE=false;
      for(let q=1;q<=comp.n;q++){ const silA=comp.size[q]+sil[q]; if(silA>=0.12*logoBox && comp.size[q]/silA>=0.55 && nh[q]>=5){ /* many white details (checker squares, badge text), not a letter's counters */ emblem[q]=1; anyE=true; } }
      if(anyE){ const nk=cents.length; let moved=0; for(let i=0;i<N;i++){ const hq=holes.lab[i]; if(hq && emblem[own[hq]]){ idx[i]=nk; moved++; } }
        if(moved>0.002*N) cents.push({lab:cents[bgC].lab.slice()}); else for(let i=0;i<N;i++) if(idx[i]===nk) idx[i]=bgC; } }
  }
  if(!S.cleanup && S.keepGradients!==false) findGradients(idx,w,h,data,cents,bgC);
  let cnt=new Float64Array(cents.length); for(let i=0;i<N;i++){ const v=idx[i]; if(v===TR){trN++; continue;} cnt[v]++; }
  // A solid panel behind the logo (a coloured card on a white page) is background too: designers drop the
  // panel and use its colour (or the order's) for the mat. Panel = one colour whose box holds the whole logo
  // and is filled almost completely (>90%: rectangles, rounded cards — not round badges or shields).
  let panelC=-1;
  { const K=cents.length, bx=new Int32Array(K*4); for(let k=0;k<K;k++){ bx[k*4]=w; bx[k*4+1]=h; bx[k*4+2]=-1; bx[k*4+3]=-1; }
    let fg=0; for(let y=0;y<h;y++) for(let x=0;x<w;x++){ const v=idx[y*w+x]; if(v===TR||v===bgC) continue; fg++; const o=v*4; if(x<bx[o])bx[o]=x; if(y<bx[o+1])bx[o+1]=y; if(x>bx[o+2])bx[o+2]=x; if(y>bx[o+3])bx[o+3]=y; }
    let best=0;
    for(let k=0;k<K;k++){ if(k===bgC || cnt[k]<0.3*fg || bx[k*4+2]<0) continue; const x0=bx[k*4],y0=bx[k*4+1],x1=bx[k*4+2],y1=bx[k*4+3], A=(x1-x0+1)*(y1-y0+1);
      if(A<0.15*N) continue; let inside=0; for(let y=y0;y<=y1;y++) for(let x=x0;x<=x1;x++){ const v=idx[y*w+x]; if(v!==TR && v!==bgC) inside++; }
      if(inside>=0.97*fg && inside>=0.9*A && cnt[k]>best){ best=cnt[k]; panelC=k; } } }
  // Artwork drawn in the page colour on the panel (an outline frame, lettering) is logo, not background.
  if(panelC>=0 && S.bgConn){ const nk=cents.length; let moved=0; for(let i=0;i<N;i++) if(idx[i]===bgC && !S.bgConn[i]){ idx[i]=nk; moved++; }
    if(moved){ cents.push({lab:cents[bgC].lab.slice()}); cnt=new Float64Array(cents.length); trN=0; for(let i=0;i<N;i++){ const v=idx[i]; if(v===TR){trN++; continue;} cnt[v]++; } } }
  const p=pal();
  S.clusters=cents.map((c,k)=>{ const m=nearestYarn(p,c.lab); return {lab:c.lab, hex:labHex(c.lab), count:cnt[k], yarn:m.yarn.label, de:m.de, bg:k===bgC||k===panelC, panel:k===panelC, grad:c.grad||null}; });
  separateYarns(); applyLogoYarn(); decideBg(); decidePanel(); fillYarnSelects();
  S.idx=idx; S.work={w,h}; S.trN=trN;
  // Printed styles (Classic Impression) keep photographic artwork as an image, like the designers do;
  // a plain backdrop is cut away, a full picture (sky, scene) fills the whole mat.
  if(!S.photoUser){ const ph=!S.cleanup && (S.photoReq || (STYLES[S.style].print && S.resid>PHOTO_RESID));
    S.photo=ph; const cb=$("photoMode"); if(cb) cb.checked=ph; }
  S.photoFit= bgC>=0 && S.bgFlat>0.7 ? "cut" : "bleed";
  contrastSwap(); computeBBox(); renderYarnMap(); retrace();
}
const PHOTO_RESID=0.42;
/* Order logo colours that include the mat colour plus one more (MTL: mat C45, logo "C45 + C47"), on artwork that sits on a
   backdrop of that other colour: designers keep the backdrop as an inner panel in it and draw the logo in the mat colour. */
function decidePanel(){ S.innerPanel=null; const p=pal();
  if(S.logoYarn!=="set" || !S.logoSet.includes(S.bg)) return; const others=S.logoSet.filter(l=>l!==S.bg); if(others.length!==1) return;
  const Y=yarnBy(p,others[0]), a=S.clusters.find(c=>c.panel)||S.clusters.find(c=>c.bg); if(!Y||!a) return;
  if(de2000(a.lab,Y.lab)<20){ S.innerPanel=Y.label; S.bgNote=(S.bgNote?S.bgNote+" ":"")+"Artwork backdrop kept as an inner panel in "+Y.label+" (order lists it with the mat colour)."; }
}

const MIN_STROKE_MM=6;
function smoothMask(m,w,h,r){ if(r<1) return; const N=w*h; let a=new Float32Array(N), b=new Float32Array(N); for(let i=0;i<N;i++) a[i]=m[i];
  for(let pass=0;pass<2;pass++){
    for(let y=0;y<h;y++){ let acc=0; const o=y*w; for(let x=-r;x<=r;x++) acc+=a[o+Math.min(w-1,Math.max(0,x))];
      for(let x=0;x<w;x++){ b[o+x]=acc/(2*r+1); acc+=a[o+Math.min(w-1,x+r+1)]-a[o+Math.max(0,x-r)]; } }
    for(let x=0;x<w;x++){ let acc=0; for(let y=-r;y<=r;y++) acc+=b[Math.min(h-1,Math.max(0,y))*w+x];
      for(let y=0;y<h;y++){ a[y*w+x]=acc/(2*r+1); acc+=b[Math.min(h-1,y+r+1)*w+x]-b[Math.max(0,y-r)*w+x]; } } }
  for(let i=0;i<N;i++) m[i]=a[i]>=0.5?1:0; }

function thickenThin(m,w,h,r){
  if(!(r>=1)) return; const N=w*h, dt=chamfer(m,w,h), R=Math.ceil(r), disc=[];
  // specks and dust stay as they are (they are dropped later as too small); only real shapes get thickened
  const cc=components(w,h,i=>m[i]===1,()=>true), minA=Math.max(12,6*r*r);
  for(let dy=-R;dy<=R;dy++) for(let dx=-R;dx<=R;dx++) if(dx*dx+dy*dy<=r*r) disc.push([dx,dy]);
  const add=[];
  for(let y=1;y<h-1;y++) for(let x=1;x<w-1;x++){ const i=y*w+x, v=dt[i]; if(!v || v>=r) continue;
    // ridge of the stroke: no neighbour is further from the edge
    if(dt[i-1]>v||dt[i+1]>v||dt[i-w]>v||dt[i+w]>v||dt[i-w-1]>v||dt[i-w+1]>v||dt[i+w-1]>v||dt[i+w+1]>v) continue;
    if(cc.size[cc.lab[i]]<minA) continue; add.push(i); }
  for(const i of add){ const x=i%w, y=(i-x)/w; for(const [dx,dy] of disc){ const X=x+dx, Y=y+dy; if(X>=0&&Y>=0&&X<w&&Y<h) m[Y*w+X]=1; } }
}

/* Designers enlarge lines of text too small to tuft (dune: "Hôtel-Maison" 3.8 -> 7.1 cm). A line of text = a horizontal band
   of at least 3 separate shapes; when its height on the mat is under the style's minimum it grows (up to the logo's width),
   and the lines below move down so nothing overlaps; the whole logo is then re-centred and re-fitted to the mat. */
// From the designers' files: lines from about 3.6 cm up are left alone; smaller lines are brought up to about 4 cm.
const MIN_TEXT_MM={colorstar:35, colorstar_hd:35, promoscrape:35, classic:35}, TARGET_TEXT_MM=40;
function enlargeSmallText(layers,k){
  if(S.keepTextSize) return 0; const minH=MIN_TEXT_MM[S.style]||40, items=[];
  const box=ct=>{ let x0=ct.x0,x1=ct.x0,y0=ct.y0,y1=ct.y0; for(const g of ct.segs){ for(let j=1;j<g.length;j+=2){ const x=g[j],y=g[j+1]; if(x<x0)x0=x; if(x>x1)x1=x; if(y<y0)y0=y; if(y>y1)y1=y; } } return {x0,y0,x1,y1}; };
  layers.forEach(L=>L.paths.forEach(cs=>{ if(!cs.length) return; const b=box(cs[0]); items.push({cs,b}); }));
  if(items.length<3) return 0;
  items.sort((a,b)=>a.b.y0-b.b.y0); const bands=[];
  for(const it of items){ const last=bands[bands.length-1]; if(last && it.b.y0 < last.y1-1){ last.items.push(it); last.y1=Math.max(last.y1,it.b.y1); last.x0=Math.min(last.x0,it.b.x0); last.x1=Math.max(last.x1,it.b.x1); }
    else bands.push({items:[it],y0:it.b.y0,y1:it.b.y1,x0:it.b.x0,x1:it.b.x1}); }
  if(bands.length<2) return 0;
  const W0=Math.min(...bands.map(b=>b.x0)), W1=Math.max(...bands.map(b=>b.x1)), maxW=W1-W0; let changed=0;
  for(const b of bands){ b.f=1; const h=b.y1-b.y0, w=b.x1-b.x0, hm=h*k;
    if(b.items.length>=3 && hm<minH && hm>=0.25*minH && w>2.5*h){ const f=Math.min(TARGET_TEXT_MM/hm, maxW/w, 2.2); if(f>1.05){ b.f=f; changed++; } } }
  if(!changed) return 0;
  const top=bands[0].y0, bot=bands[bands.length-1].y1; let y=top; const plan=[];
  bands.forEach((b,i)=>{ if(i>0) y+=Math.max(0,b.y0-bands[i-1].y1)*Math.max(1,(b.f+bands[i-1].f)/2); plan.push(y); y+=(b.y1-b.y0)*b.f; });
  const shift=((top+bot)/2)-((top+y)/2);
  bands.forEach((b,i)=>{ const cx=(b.x0+b.x1)/2, f=b.f, ny0=plan[i]+shift, X=x=>cx+(x-cx)*f, Y=v=>ny0+(v-b.y0)*f;
    for(const it of b.items) for(const ct of it.cs){ ct.x0=X(ct.x0); ct.y0=Y(ct.y0); for(const g of ct.segs) for(let j=1;j<g.length;j+=2){ g[j]=X(g[j]); g[j+1]=Y(g[j+1]); } } });
  // the logo box follows the new geometry
  let x0=1e9,y0=1e9,x1=-1e9,y1=-1e9; for(const it of items) for(const ct of it.cs){ const q=box(ct); if(q.x0<x0)x0=q.x0; if(q.y0<y0)y0=q.y0; if(q.x1>x1)x1=q.x1; if(q.y1>y1)y1=q.y1; }
  S.bbox={x:x0,y:y0,w:Math.max(1,x1-x0),h:Math.max(1,y1-y0)};
  return changed;
}

/* Gradients: neighbouring colours that blend smoothly into each other (a gold sun fading to pale yellow) are one shape
   with a colour ramp, as the designers keep them. Across a real edge the colour jumps within a couple of source pixels;
   across a gradient band it barely changes over the same distance. Each connected gradient region becomes one cluster
   carrying a linear gradient fitted to the artwork's own colours. */
function findGradients(idx,w,h,data,cents,bgC){
  const N=w*h, K=cents.length, TR=255; if(K<2) return;
  const rgbOf=k=>{ const x=labHex(cents[k].lab); return [parseInt(x.slice(1,3),16),parseInt(x.slice(3,5),16),parseInt(x.slice(5,7),16)]; };
  const C=[]; for(let k=0;k<K;k++) C.push(rgbOf(k));
  const s=Math.max(3,Math.round(3*Math.max(1,S.upscale||1))), sum=new Float64Array(K*K), num=new Float64Array(K*K);
  const at=(x,y)=>{ const p=(y*w+x)*4; return [data[p],data[p+1],data[p+2]]; };
  for(let y=s;y<h-s;y++) for(let x=s;x<w-s;x++){ const i=y*w+x, a=idx[i]; if(a===TR||a===bgC) continue;
    for(const [dx,dy] of [[1,0],[0,1]]){ const b=idx[i+dx+dy*w]; if(b===a||b===TR||b===bgC) continue;
      if(idx[i-dx*s-dy*s*w]!==a || idx[i+dx*(s+1)+dy*(s+1)*w]!==b) continue;
      const P=at(x-dx*s,y-dy*s), Q=at(x+dx*(s+1),y+dy*(s+1)), D=Math.hypot(C[a][0]-C[b][0],C[a][1]-C[b][1],C[a][2]-C[b][2])||1;
      const r=Math.hypot(P[0]-Q[0],P[1]-Q[1],P[2]-Q[2])/D, ab=Math.min(a,b)*K+Math.max(a,b); sum[ab]+=r<0.45?1:0; num[ab]++; } }
  S.gradR2=[]; S.gradDbg=[]; for(let a=0;a<K;a++) for(let b=a+1;b<K;b++){ const ab=a*K+b; if(num[ab]) S.gradDbg.push([labHex(cents[a].lab),labHex(cents[b].lab),num[ab],+(sum[ab]/num[ab]).toFixed(2)]); }
  const link=new Uint8Array(K*K); let any=false;
  for(let a=0;a<K;a++) for(let b=a+1;b<K;b++){ const ab=a*K+b; if(sum[ab]>=12 && sum[ab]/num[ab]>=0.3){ link[ab]=link[b*K+a]=1; any=true; } }
  if(!any) return;
  const inG=new Uint8Array(K); for(let a=0;a<K;a++) for(let b=0;b<K;b++) if(link[a*K+b]) inG[a]=1;
  const comp=components(w,h,i=>idx[i]!==TR&&inG[idx[i]],(i,j)=>idx[i]===idx[j]||link[idx[i]*K+idx[j]]===1);
  for(let q=1;q<=comp.n;q++){ if(comp.size[q]<0.004*N) continue;
    const share=new Float64Array(K); let n=0; const pts=[];
    for(let y=comp.y0[q];y<=comp.y1[q];y++) for(let x=comp.x0[q];x<=comp.x1[q];x++){ const i=y*w+x; if(comp.lab[i]!==q) continue; share[idx[i]]++; n++; if((x+y)%3===0) pts.push(i); }
    const main=[...share].filter(v=>v>=0.1*n).length; if(main<2) continue;
    // least-squares plane per channel: c = a + bx*x + by*y
    let Sx=0,Sy=0,Sxx=0,Syy=0,Sxy=0; const Sc=[0,0,0],Sxc=[0,0,0],Syc=[0,0,0];
    for(const i of pts){ const x=i%w, y=(i-x)/w, p=i*4; Sx+=x; Sy+=y; Sxx+=x*x; Syy+=y*y; Sxy+=x*y; for(let c=0;c<3;c++){ Sc[c]+=data[p+c]; Sxc[c]+=x*data[p+c]; Syc[c]+=y*data[p+c]; } }
    const m=pts.length, mx=Sx/m, my=Sy/m, vxx=Sxx/m-mx*mx, vyy=Syy/m-my*my, vxy=Sxy/m-mx*my, det=vxx*vyy-vxy*vxy; if(Math.abs(det)<1e-6) continue;
    let gxx=0,gyy=0,gxy=0; const B=[];
    for(let c=0;c<3;c++){ const cx=Sxc[c]/m-mx*Sc[c]/m, cy=Syc[c]/m-my*Sc[c]/m, bx=(cx*vyy-cy*vxy)/det, by=(cy*vxx-cx*vxy)/det; gxx+=bx*bx; gyy+=by*by; gxy+=bx*by; B.push([Sc[c]/m,bx,by]); }
    // a real ramp: the plane explains most of the colour variation (lettering with a coloured rim does not)
    let res=0, tot=0; for(const i of pts){ const x=i%w, y=(i-x)/w, p=i*4; for(let c=0;c<3;c++){ const pr=B[c][0]+B[c][1]*(x-mx)+B[c][2]*(y-my), v=data[p+c]; res+=(v-pr)**2; tot+=(v-B[c][0])**2; } }
    (S.gradR2=S.gradR2||[]).push([comp.size[q], +(1-res/tot).toFixed(2), comp.x0[q],comp.y0[q],comp.x1[q],comp.y1[q]]);
    if(tot<=0 || 1-res/tot<0.3) continue;
    const th=0.5*Math.atan2(2*gxy,gxx-gyy), dx=Math.cos(th), dy=Math.sin(th);
    const ts=pts.map(i=>{ const x=i%w,y=(i-x)/w; return (x-mx)*dx+(y-my)*dy; }), so=[...ts].sort((a,b)=>a-b), t0=so[Math.floor(0.02*so.length)], t1=so[Math.floor(0.98*so.length)];
    if(t1-t0<4) continue;
    const NB=6, acc=Array.from({length:NB},()=>[0,0,0,0]);
    pts.forEach((i,j)=>{ const b=Math.max(0,Math.min(NB-1,Math.floor((ts[j]-t0)/(t1-t0)*NB))), p=i*4; acc[b][0]+=data[p]; acc[b][1]+=data[p+1]; acc[b][2]+=data[p+2]; acc[b][3]++; });
    let stops=acc.map((a,b)=>a[3]? {t:(b+0.5)/NB, rgb:[a[0]/a[3],a[1]/a[3],a[2]/a[3]]} : null).filter(Boolean);
    // the ramp must really go somewhere (not a flat shape with shading noise)
    const first=stops[0].rgb, last=stops[stops.length-1].rgb; if(Math.hypot(first[0]-last[0],first[1]-last[1],first[2]-last[2])<25) continue;
    // drop stops that sit on the straight line between their neighbours
    stops=stops.filter((st,j)=>{ if(j===0||j===stops.length-1) return true; const A=stops[j-1], B=stops[j+1], f=(st.t-A.t)/(B.t-A.t);
      return Math.hypot(...[0,1,2].map(c=>st.rgb[c]-(A.rgb[c]+(B.rgb[c]-A.rgb[c])*f)))>6; });
    const hex=v=>"#"+v.map(c=>Math.round(Math.max(0,Math.min(255,c))).toString(16).padStart(2,"0")).join("");
    let L=[0,0,0]; for(const i of pts){ const p=i*4, l=rgbToLab(data[p],data[p+1],data[p+2]); L[0]+=l[0]; L[1]+=l[1]; L[2]+=l[2]; } L=L.map(v=>v/m);
    const nk=cents.length; if(nk>=250) break;
    cents.push({lab:L, grad:{x0:mx+dx*t0, y0:my+dy*t0, x1:mx+dx*t1, y1:my+dy*t1, stops:stops.map(st=>({t:st.t, hex:hex(st.rgb), rgb:st.rgb.map(v=>Math.round(v))}))}});
    for(let y=comp.y0[q];y<=comp.y1[q];y++) for(let x=comp.x0[q];x<=comp.x1[q];x++){ const i=y*w+x; if(comp.lab[i]===q) idx[i]=nk; }
  }
}
const gradKey=(c,k)=>c.grad? "grad#"+k : c.yarn;
function gradFill(ctx,g){ const lg=ctx.createLinearGradient(g.x0,g.y0,g.x1,g.y1); for(const st of g.stops) lg.addColorStop(st.t,st.hex); return lg; }

/* Thin slivers sandwiched between two other colours are anti-aliasing edges (a teal rim around dark lettering on white),
   not artwork: give each pixel to the nearer of the two colours it sits between. Thin lines lying on one colour stay. */
function dropSlivers(idx,w,h,data,cents){
  const N=w*h, K=cents.length; if(K<3) return;
  const comp=components(w,h,i=>idx[i]!==255,(i,j)=>idx[i]===idx[j]);
  const mask=new Uint8Array(N); for(let i=0;i<N;i++) mask[i]=idx[i]!==255&&comp.size[comp.lab[i]]<0.005*N?1:0;
  // thickness: distance to the component's own edge; a sliver is at most a few source pixels wide
  const inner=new Uint8Array(N); for(let y=1;y<h-1;y++) for(let x=1;x<w-1;x++){ const i=y*w+x; if(!mask[i]) continue; const q=comp.lab[i];
    inner[i]= comp.lab[i-1]===q&&comp.lab[i+1]===q&&comp.lab[i-w]===q&&comp.lab[i+w]===q ? 1:0; }
  const dt=chamfer(inner,w,h), maxT=Math.max(2,1.3*Math.max(1,S.upscale||1)), thick=new Uint8Array(comp.n+1);
  for(let i=0;i<N;i++) if(mask[i] && dt[i]+1>maxT) thick[comp.lab[i]]=1;
  const nb=new Map();
  for(let i=0;i<N;i++){ if(!mask[i]) continue; const q=comp.lab[i]; if(thick[q]) continue; const x=i%w;
    for(const j of [x>0?i-1:-1,x<w-1?i+1:-1,i-w,i+w]){ if(j<0||j>=N) continue; const v=idx[j]; if(v===255||v===idx[i]) continue;
      let m=nb.get(q); if(!m){ m=new Float64Array(K); nb.set(q,m); } m[v]++; } }
  const pick=new Map();
  for(const [q,m] of nb){ let a=-1,b=-1; for(let k=0;k<K;k++){ if(a<0||m[k]>m[a]){ b=a; a=k; } else if(b<0||m[k]>m[b]) b=k; }
    const tot=m.reduce((s,v)=>s+v,0); if(b>=0 && m[a]>=0.2*tot && m[b]>=0.2*tot) pick.set(q,[a,b]); }
  if(!pick.size) return;
  for(let i=0;i<N;i++){ if(!mask[i]) continue; const pr=pick.get(comp.lab[i]); if(!pr) continue; const p=i*4, l=rgbToLab(data[p],data[p+1],data[p+2]);
    const A=cents[pr[0]].lab, B=cents[pr[1]].lab; idx[i]= ((l[0]-A[0])**2+(l[1]-A[1])**2+(l[2]-A[2])**2) <= ((l[0]-B[0])**2+(l[1]-B[1])**2+(l[2]-B[2])**2) ? pr[0] : pr[1]; }
}
/* Rims inside a big shape of one colour: a pale JPEG edge between white and blue lands in the teal cluster and joins the
   real teal triangles, so dropSlivers (small pieces only) misses it. Find the thin parts of every colour by opening its mask,
   and give long thin parts squeezed between two other colours to the nearer of those two. */
function dropRims(idx,w,h,data,cents){
  const N=w*h, K=cents.length; if(K<3) return 0; const r=Math.max(1,Math.ceil(0.9*Math.max(1,S.upscale||1))); let moved=0;
  for(let c=0;c<K;c++){ const m=new Uint8Array(N); let n=0; for(let i=0;i<N;i++) if(idx[i]===c){ m[i]=1; n++; } if(!n) continue;
    const op=morph(morph(m,w,h,false,r),w,h,true,r+1);
    const comp=components(w,h,i=>m[i]===1&&!op[i],()=>true); if(!comp.n) continue;
    const nb=new Map();
    for(let i=0;i<N;i++){ const q=comp.lab[i]; if(!q) continue; const x=i%w;
      for(const j of [x>0?i-1:-1,x<w-1?i+1:-1,i-w,i+w]){ if(j<0||j>=N) continue; const v=idx[j]; if(v===255||v===c) continue;
        let a=nb.get(q); if(!a){ a=new Float64Array(K); nb.set(q,a); } a[v]++; } }
    const pick=new Map();
    for(const [q,a] of nb){ if(comp.size[q]<6*r*r) continue; let p1=-1,p2=-1; for(let k=0;k<K;k++){ if(p1<0||a[k]>a[p1]){ p2=p1; p1=k; } else if(p2<0||a[k]>a[p2]) p2=k; }
      const t=a.reduce((u,v)=>u+v,0); if(p2>=0 && a[p1]>=0.2*t && a[p2]>=0.2*t && t>=0.5*comp.size[q]) pick.set(q,[p1,p2]); }
    for(let i=0;i<N;i++){ const pr=pick.get(comp.lab[i]); if(!pr) continue; const p=i*4, l=rgbToLab(data[p],data[p+1],data[p+2]);
      const A=cents[pr[0]].lab, B=cents[pr[1]].lab; idx[i]= ((l[0]-A[0])**2+(l[1]-A[1])**2+(l[2]-A[2])**2) <= ((l[0]-B[0])**2+(l[1]-B[1])**2+(l[2]-B[2])**2) ? pr[0] : pr[1]; moved++; } }
  return moved;
}
const CLEANUP_NOISE=1500, CLEANUP_CONF=0.85; // tiny specks per megapixel above which artwork is treated as a photo / textured scan
/* 4-connected components of a mask (or of equal labels when `eq` is given). */
function components(w,h,inSet,same){
  const N=w*h, lab=new Int32Array(N), st=new Int32Array(N), size=[0], x0=[0], y0=[0], x1=[0], y1=[0]; let n=0;
  for(let s=0;s<N;s++){ if(lab[s]||!inSet(s)) continue; n++; let top=0, cnt=0, ax=w, ay=h, bx=-1, by=-1; st[top++]=s; lab[s]=n;
    while(top){ const i=st[--top], x=i%w, y=(i-x)/w; cnt++; if(x<ax)ax=x; if(x>bx)bx=x; if(y<ay)ay=y; if(y>by)by=y;
      if(x>0){ const j=i-1; if(!lab[j]&&inSet(j)&&same(i,j)){ lab[j]=n; st[top++]=j; } }
      if(x<w-1){ const j=i+1; if(!lab[j]&&inSet(j)&&same(i,j)){ lab[j]=n; st[top++]=j; } }
      if(y>0){ const j=i-w; if(!lab[j]&&inSet(j)&&same(i,j)){ lab[j]=n; st[top++]=j; } }
      if(y<h-1){ const j=i+w; if(!lab[j]&&inSet(j)&&same(i,j)){ lab[j]=n; st[top++]=j; } } }
    size.push(cnt); x0.push(ax); y0.push(ay); x1.push(bx); y1.push(by); }
  return {lab,n,size,x0,y0,x1,y1};
}
function speckRate(idx,w,h){ // specks of <=12 px per megapixel: high for photos and textures, low for clean artwork
  const c=components(w,h,i=>idx[i]!==255,(i,j)=>idx[i]===idx[j]); let sp=0; for(let k=1;k<=c.n;k++) if(c.size[k]<=12) sp++; return sp/(w*h/1e6); }
function morph(m,w,h,dilate,it){ let a=m;
  for(let t=0;t<it;t++){ const b=new Uint8Array(a.length);
    for(let y=0;y<h;y++){ const o=y*w; for(let x=0;x<w;x++){ const i=o+x;
      b[i]= dilate? (a[i]||(x>0&&a[i-1])||(x<w-1&&a[i+1])||(y>0&&a[i-w])||(y<h-1&&a[i+w])?1:0)
                  : (a[i]&&x>0&&a[i-1]&&x<w-1&&a[i+1]&&y>0&&a[i-w]&&y<h-1&&a[i+w]?1:0); } }
    a=b; } return a; }
function strokeParts(m,w,h){ // solid, stroke-sized shapes away from the picture edge
  const N=w*h, mg=Math.round(0.01*Math.min(w,h));
  const cl=morph(morph(morph(morph(m,w,h,true,2),w,h,false,2),w,h,false,2),w,h,true,2);
  const c=components(w,h,i=>cl[i]===1,()=>true), keep=[];
  for(let k=1;k<=c.n;k++){ const sz=c.size[k]; if(sz<0.0008*N||sz>0.08*N) continue;
    if(c.x0[k]<mg||c.y0[k]<mg||c.x1[k]>=w-mg||c.y1[k]>=h-mg) continue;
    if((c.x1[k]-c.x0[k]+1)*(c.y1[k]-c.y0[k]+1)>0.3*N) continue; keep.push(k); }
  return {c,keep};
}
function chamfer(m,w,h){ const d=new Float32Array(m.length), INF=1e9;
  for(let i=0;i<m.length;i++) d[i]=m[i]?INF:0;
  for(let y=0;y<h;y++) for(let x=0;x<w;x++){ const i=y*w+x; if(!d[i]) continue; let v=d[i];
    if(x>0) v=Math.min(v,d[i-1]+1); if(y>0) v=Math.min(v,d[i-w]+1); if(x>0&&y>0) v=Math.min(v,d[i-w-1]+1.414); if(x<w-1&&y>0) v=Math.min(v,d[i-w+1]+1.414); d[i]=v; }
  for(let y=h-1;y>=0;y--) for(let x=w-1;x>=0;x--){ const i=y*w+x; if(!d[i]) continue; let v=d[i];
    if(x<w-1) v=Math.min(v,d[i+1]+1); if(y<h-1) v=Math.min(v,d[i+w]+1); if(x<w-1&&y<h-1) v=Math.min(v,d[i+w+1]+1.414); if(x>0&&y<h-1) v=Math.min(v,d[i+w-1]+1.414); d[i]=v; }
  return d; }
/* Clean-up for photos / textured scans: find the colour that forms solid strokes (the lettering), split the picture into
   "stroke colour" vs "the mat around it", keep only stroke-sized, stroke-thick shapes, fill speckle holes, smooth the edges. */
function cleanupStrokes(canvas,w,h,idx,cents){
  const N=w*h, raw=canvas.getContext("2d",{willReadFrequently:true}).getImageData(0,0,w,h).data, blur=boxBlur(raw,w,h,2);
  let best=-1, bk=-1;
  for(let k=0;k<cents.length;k++){ const m=new Uint8Array(N); for(let i=0;i<N;i++) m[i]=idx[i]===k?1:0;
    const {c,keep}=strokeParts(m,w,h); let sc=0; for(const q of keep) sc+=c.size[q]; if(sc>best){ best=sc; bk=k; } }
  if(bk<0 || best<0.01*N) return null;
  // the mat around the strokes
  let core=new Uint8Array(N); { const m=new Uint8Array(N); for(let i=0;i<N;i++) m[i]=idx[i]===bk?1:0; const {c,keep}=strokeParts(m,w,h), ks=new Set(keep); for(let i=0;i<N;i++) core[i]=ks.has(c.lab[i])?1:0; }
  const outer=morph(core,w,h,true,12), inner=morph(core,w,h,true,4), hist=new Float64Array(cents.length+1);
  for(let i=0;i<N;i++) if(outer[i]&&!inner[i]&&idx[i]!==255) hist[idx[i]]++;
  let mk=0; for(let k=1;k<cents.length;k++) if(hist[k]>hist[mk]) mk=k;
  if(mk===bk) return null;
  const Lc=cents[bk].lab, Mc=cents[mk].lab, fg=new Uint8Array(N);
  for(let i=0;i<N;i++){ const p=i*4; if(blur[p+3]<128) continue; const l=rgbToLab(blur[p],blur[p+1],blur[p+2]);
    fg[i]= (l[0]-Lc[0])**2+(l[1]-Lc[1])**2+(l[2]-Lc[2])**2 < (l[0]-Mc[0])**2+(l[1]-Mc[1])**2+(l[2]-Mc[2])**2 ? 1:0; }
  const {c,keep}=strokeParts(fg,w,h); if(!keep.length) return null;
  const ks=new Set(keep), kept=new Uint8Array(N); for(let i=0;i<N;i++) kept[i]=ks.has(c.lab[i])?1:0;
  // drop thin stray lines (door edges, floor joints): keep shapes about as thick as the lettering
  const dt=chamfer(kept,w,h), thick=new Float32Array(c.n+1); for(let i=0;i<N;i++){ const q=c.lab[i]; if(kept[i]&&dt[i]>thick[q]) thick[q]=dt[i]; }
  const top=[...keep].sort((a,b)=>c.size[b]-c.size[a]).slice(0,5).map(q=>thick[q]).sort((a,b)=>a-b), ref=top[top.length>>1];
  const good=new Set(keep.filter(q=>thick[q]>=0.45*ref)); let logo=new Uint8Array(N); for(let i=0;i<N;i++) logo[i]=good.has(c.lab[i])?1:0;
  // fill speckle holes, keep real counters (the inside of an "o")
  const holes=components(w,h,i=>!logo[i],()=>true);
  for(let k=1;k<=holes.n;k++){ if(holes.size[k]<0.0004*N && holes.x0[k]>0 && holes.y0[k]>0 && holes.x1[k]<w-1 && holes.y1[k]<h-1) holes.size[k]=-1; }
  for(let i=0;i<N;i++) if(!logo[i] && holes.size[holes.lab[i]]===-1) logo[i]=1;
  // smooth fibrous edges: blur the shape and cut at half
  const rgba=new Uint8ClampedArray(N*4); for(let i=0;i<N;i++){ rgba[i*4]=logo[i]*255; rgba[i*4+3]=255; }
  const sm=boxBlur(boxBlur(rgba,w,h,3),w,h,2), out=new Uint8Array(N); let on=0;
  for(let i=0;i<N;i++){ if(raw[i*4+3]<128){ out[i]=255; continue; } out[i]=sm[i*4]>=128?1:0; on+=out[i]; }
  if(on<0.003*N) return null;
  // confidence: inside the logo's box, how much of the picture is just "stroke colour" or "mat colour"
  let bx0=w,by0=h,bx1=-1,by1=-1; for(let i=0;i<N;i++) if(out[i]===1){ const x=i%w,y=(i-x)/w; if(x<bx0)bx0=x; if(x>bx1)bx1=x; if(y<by0)by0=y; if(y>by1)by1=y; }
  // confidence: how much of the stroke colour away from the picture edge ended up in the kept shapes
  // (lettering on a mat: nearly all of it; a texture such as cork or a photo: little of it)
  const fgc=components(w,h,i=>fg[i]===1,()=>true), mg=Math.round(0.01*Math.min(w,h)); let fgIn=0, hit=0;
  for(let i=0;i<N;i++){ if(!fg[i]) continue; const q=fgc.lab[i]; if(fgc.x0[q]<mg||fgc.y0[q]<mg||fgc.x1[q]>=w-mg||fgc.y1[q]>=h-mg) continue; fgIn++; if(out[i]===1) hit++; }
  // and the kept shapes should sit on the mat colour all round (not on a floor, a window, a wall)
  const ringO=morph(out.map(v=>v===1?1:0),w,h,true,8), ringI=morph(out.map(v=>v===1?1:0),w,h,true,3); let rn=0, rm=0;
  for(let i=0;i<N;i++){ if(!ringO[i]||ringI[i]) continue; const p=i*4; if(blur[p+3]<128) continue; rn++; const l=rgbToLab(blur[p],blur[p+1],blur[p+2]);
    if((l[0]-Mc[0])**2+(l[1]-Mc[1])**2+(l[2]-Mc[2])**2 < 625) rm++; }
  const conf=Math.min(fgIn? hit/fgIn : 0, rn? rm/rn/0.8 : 0);
  return {idx:out, cents:[{lab:Mc.slice()},{lab:Lc.slice()}], info:{parts:good.size, dropped:keep.length-good.size, conf, fgShare:fgIn? hit/fgIn:0, ring:rn? rm/rn:0}};
}

const chromaOf=l=>Math.hypot(l[1],l[2]);
function extremeYarn(p,dark){ let b=null; for(const y of YARNS[p]){ if(y.manual) continue; if(chromaOf(y.lab)>12) continue; if(!b || (dark? y.lab[0]<b.lab[0] : y.lab[0]>b.lab[0])) b=y; } return b; }
/* Mat background, the way the designers choose it:
   - a colour the order or the instructions name wins, except the portal's default black when the artwork
     itself sits on a clear colour (designers keep the artwork's coloured backdrop);
   - with no order colour, artwork on white or a light neutral goes on the style's black, otherwise on the
     artwork's own background colour. Picking a background by hand always wins. */
function decideBg(){ const p=pal(); S.bgNote="";
  if(S.bgSrc==="user"||S.bgSrc==="instr") return;
  const a=S.clusters.find(c=>c.panel)||S.clusters.find(c=>c.bg);
  if(S.bgSrc==="order"){ const oy=yarnBy(p,S.bgOrder); if(!oy){ S.bgSrc=null; return decideBg(); }
    const isBlack=oy===extremeYarn(p,true); // the portal's default
    if(isBlack && a && chromaOf(a.lab)>20 && a.lab[0]>25 && a.lab[0]<92){ S.bg=a.yarn; S.bgNote="Background "+a.yarn+" taken from the artwork (the order showed the default black)."; }
    else S.bg=oy.label; return; }
  if(!a){ if(!S.bg || !yarnBy(p,S.bg)) S.bg=extremeYarn(p,true).label; return; }
  if(a.lab[0]>85 && chromaOf(a.lab)<10){ S.bg=extremeYarn(p,true).label; S.bgNote="Artwork on white: placed on "+S.bg+" (no background colour in the order)."; }
  else S.bg=a.yarn;
}
/* A logo colour that would vanish into the mat (black text on a black mat) switches to white or black. */
function contrastSwap(){ const p=pal(), bg=yarnBy(p,S.innerPanel||S.bg); if(!bg) return; S.swapped=[];
  const orderCols=(S.logoYarn==="set"?S.logoSet:S.logoYarn!=="auto"?[S.logoYarn]:[]).map(l=>yarnBy(p,l)).filter(y=>y && de2000(y.lab,bg.lab)>=10);
  for(const c of S.clusters){ if(c.bg||(c.hole&&c.yarn===S.bg&&!S.innerPanel)) continue; const y=yarnBy(p,c.yarn); if(!y) continue;
    if(c.yarn===bg.label || de2000(y.lab,bg.lab)<10){ const to=orderCols[0]||extremeYarn(p,bg.lab[0]>50); if(to && to.label!==c.yarn){ S.swapped.push(c.yarn+" → "+to.label); c.yarn=to.label; c.de=de2000(c.lab,to.lab); } } } }
function assignPixels(data,N,cents){
  const idx=new Uint8Array(N), cache=new Map();
  for(let i=0;i<N;i++){ const p=i*4; if(data[p+3]<128){ idx[i]=255; continue; }
    const key=(data[p]>>2)<<12|(data[p+1]>>2)<<6|(data[p+2]>>2); let ci=cache.get(key);
    if(ci===undefined){ const L=rgbToLab(data[p],data[p+1],data[p+2]); let bd=1e9; ci=0; for(let k=0;k<cents.length;k++){ const c=cents[k].lab, dd=(c[0]-L[0])**2+(c[1]-L[1])**2+(c[2]-L[2])**2; if(dd<bd){bd=dd;ci=k;} } cache.set(key,ci); }
    idx[i]=ci; }
  return idx;
}
// A colour that sits on the line between two other logo colours and has almost no solid interior
// is anti-aliasing fringe (e.g. gold text blended into white), not a real ink. Drop it.
function fringeClusters(idx,w,h,cents){
  const K=cents.length, tot=new Float64Array(K), inner=new Float64Array(K), d=2;
  for(let y=d;y<h-d;y++) for(let x=d;x<w-d;x++){ const i=y*w+x, v=idx[i]; if(v===255) continue; tot[v]++;
    if(idx[i-d]===v&&idx[i+d]===v&&idx[i-d*w]===v&&idx[i+d*w]===v) inner[v]++; }
  const all=tot.reduce((a,b)=>a+b,0)||1, out=new Set();
  for(let c=0;c<K;c++){ if(tot[c]/all>0.15 || inner[c]/(tot[c]||1)>0.4) continue;
    const C=cents[c].lab;
    for(let a=0;a<K&&!out.has(c);a++) for(let b=a+1;b<K;b++){ if(a===c||b===c||out.has(a)||out.has(b)) continue;
      const A=cents[a].lab,B=cents[b].lab, ab=[B[0]-A[0],B[1]-A[1],B[2]-A[2]], L2=ab[0]**2+ab[1]**2+ab[2]**2; if(L2<1) continue;
      const t=((C[0]-A[0])*ab[0]+(C[1]-A[1])*ab[1]+(C[2]-A[2])*ab[2])/L2; if(t<0.12||t>0.88) continue;
      const res=Math.hypot(A[0]+t*ab[0]-C[0],A[1]+t*ab[1]-C[1],A[2]+t*ab[2]-C[2]);
      if(res<Math.max(6,0.12*Math.sqrt(L2))){ out.add(c); break; } } }
  return out;
}
function labHex(L){ // Lab -> sRGB hex
  const fy=(L[0]+16)/116, fx=fy+L[1]/500, fz=fy-L[2]/200, inv=t=>t**3>0.008856? t**3 : (t-16/116)/7.787;
  const x=inv(fx)*0.95047, y=inv(fy), z=inv(fz)*1.08883;
  let r=x*3.2404542+y*-1.5371385+z*-0.4985314, g=x*-0.9692660+y*1.8760108+z*0.0415560, b=x*0.0556434+y*-0.2040259+z*1.0572252;
  const gam=v=>{ v=Math.max(0,Math.min(1,v)); return 255*(v<=0.0031308?12.92*v:1.055*Math.pow(v,1/2.4)-0.055); };
  return rgbToHex(gam(r),gam(g),gam(b));
}
function kmeans(S_,K,rand){
  const n=S_.length; if(!n) return [{lab:[100,0,0],n:1}];
  const cents=[S_[Math.floor(rand()*n)].slice()], dist=new Float64Array(n).fill(1e18);
  while(cents.length<K){ const c=cents[cents.length-1]; let tot=0;
    for(let i=0;i<n;i++){ const s=S_[i], dd=(s[0]-c[0])**2+(s[1]-c[1])**2+(s[2]-c[2])**2; if(dd<dist[i]) dist[i]=dd; tot+=dist[i]; }
    if(tot===0) break; let r=rand()*tot, i=0; for(;i<n-1;i++){ r-=dist[i]; if(r<=0) break; } cents.push(S_[i].slice()); }
  const as=new Int32Array(n);
  for(let it=0;it<14;it++){ const acc=cents.map(()=>[0,0,0,0]);
    for(let i=0;i<n;i++){ const s=S_[i]; let bd=1e18,bk=0; for(let k=0;k<cents.length;k++){ const c=cents[k], dd=(s[0]-c[0])**2+(s[1]-c[1])**2+(s[2]-c[2])**2; if(dd<bd){bd=dd;bk=k;} } as[i]=bk; const a=acc[bk]; a[0]+=s[0];a[1]+=s[1];a[2]+=s[2];a[3]++; }
    for(let k=0;k<cents.length;k++){ const a=acc[k]; if(a[3]) cents[k]=[a[0]/a[3],a[1]/a[3],a[2]/a[3]]; } }
  const ns=new Array(cents.length).fill(0); for(let i=0;i<n;i++) ns[as[i]]++;
  return cents.map((c,k)=>({lab:c,n:ns[k]})).filter(c=>c.n>0).sort((a,b)=>b.n-a.n);
}
const MERGE_DE=9; // colours closer than this are one colour; light greys next to white keep apart down to 6 (CD Equipement's grey C on a white page)
function mergeClose(cs,total){
  cs=cs.map(c=>({lab:c.lab.slice(),n:c.n}));
  let merged=true;
  while(merged && cs.length>1){ merged=false; let bi=-1,bj=-1,bd=1e9;
    const pale=l=>l[0]>78 && Math.hypot(l[1],l[2])<8;
    for(let i=0;i<cs.length;i++) for(let j=i+1;j<cs.length;j++){ let d=de2000(cs[i].lab,cs[j].lab); if(pale(cs[i].lab)&&pale(cs[j].lab)&&d>=6) d+=3; if(d<bd){bd=d;bi=i;bj=j;} }
    const small=cs.findIndex(c=>c.n<0.006*total);
    if(bd<MERGE_DE || small>=0){ let i=bi,j=bj;
      if(bd>=MERGE_DE){ j=small; let b2=1e9; cs.forEach((c,k)=>{ if(k!==small){ const d=de2000(c.lab,cs[small].lab); if(d<b2){b2=d;i=k;} } }); }
      const a=cs[i], b=cs[j], n=a.n+b.n; const keep = a.n>=b.n? a : b;
      cs[i]={lab:keep.lab, n}; cs.splice(j,1); merged=true; } }
  return cs.sort((a,b)=>b.n-a.n);
}
function modeFilter(idx,w,h,K){
  const src=idx.slice(), cnt=new Uint8Array(256);
  for(let y=1;y<h-1;y++) for(let x=1;x<w-1;x++){ const i=y*w+x; const own=src[i];
    let best=own,bc=0; const nb=[i-w-1,i-w,i-w+1,i-1,i,i+1,i+w-1,i+w,i+w+1];
    for(const q of nb) cnt[src[q]]++;
    for(const q of nb){ const v=src[q]; if(cnt[v]>bc){bc=cnt[v];best=v;} }
    if(cnt[own]<3) idx[i]=best;
    for(const q of nb) cnt[src[q]]=0; }
}
function computeBBox(){
  const {w,h}=S.work, idx=S.idx; const isBg=v=>v===255 || (S.clusters[v]&&S.clusters[v].bg);
  let x0=w,y0=h,x1=-1,y1=-1;
  for(let y=0;y<h;y++) for(let x=0;x<w;x++){ if(!isBg(idx[y*w+x])){ if(x<x0)x0=x; if(x>x1)x1=x; if(y<y0)y0=y; if(y>y1)y1=y; } }
  S.bbox = x1<0? {x:0,y:0,w:w,h:h} : {x:x0,y:y0,w:x1-x0+1,h:y1-y0+1};
}

/* ---------- yarn map UI ---------- */
function renderYarnMap(){
  const box=$("ymap"); box.innerHTML="";
  if(S.plain){ box.innerHTML='<div class="photoNote">Plain mat: only the background colour is used.</div>'; $("yarnCount").textContent=""; return; }
  if(S.photo){ box.innerHTML='<div class="photoNote">Kept as a photo: the image is placed as it is, without tracing or yarn colours. Untick “Keep as a photo” to trace it instead.</div>'; $("yarnCount").textContent="photo"; return; }
  if(!S.clusters.length){ box.innerHTML='<div class="empty">Colours found in the logo appear here once it is loaded.</div>'; return; }
  const total=S.clusters.reduce((a,c)=>a+c.count,0)||1, p=pal();
  S.clusters.forEach((c,k)=>{
    const shown = c.bg ? (yarnBy(p,S.bg)||yarnBy(p,c.yarn)) : yarnBy(p,c.yarn);
    const y=shown; const row=document.createElement("div"); row.className="yrow"+(c.bg?" isbg":"");
    const de=c.de<5?["good","close"]:c.de<12?["ok","fair"]:["far","far"];
    const byOrder = !c.bg && S.logoYarn!=="auto" && c.yarn===S.logoYarn;
    row.innerHTML=`<span class="orig" style="background:${c.hex}" title="Logo colour ${c.hex}"></span><span class="arrow" aria-hidden="true">→</span><span class="chip" style="background:${y.hex}"></span>`;
    const sel=document.createElement("select"); sel.id="yarn-"+k; sel.setAttribute("aria-label","Yarn for logo colour "+(k+1));
    fillSelect(sel, YARNS[p].map(o=>[o.label,o.label]), y.label); if(c.bg){ sel.disabled=true; sel.title="Set in Work order → Background colour"; }
    if(c.grad){ row.querySelector(".orig").style.background=`linear-gradient(90deg,${c.grad.stops.map(st=>st.hex).join(",")})`; row.title="Gradient kept as a gradient. Pick a yarn to make it one flat colour."; }
    sel.addEventListener("change",()=>{ c.yarn=sel.value; c.grad=null; c.de=de2000(c.lab,yarnBy(p,c.yarn).lab); renderYarnMap(); retrace(); });
    row.appendChild(sel);
    const meta=document.createElement("div"); meta.className="meta";
    meta.innerHTML=`<label><input type="checkbox" id="bg-${k}" ${c.bg?"checked":""}> Mat background</label><span>${(100*c.count/total).toFixed(1)}% ${c.bg?"":byOrder?'<span class="de set" title="Logo colour from the work order">set by order</span>':`<span class="de ${de[0]}" title="Colour difference ΔE2000 = ${c.de.toFixed(1)}">ΔE ${c.de.toFixed(1)} ${de[1]}</span>`}</span>`;
    meta.querySelector("input").addEventListener("change",e=>{ c.bg=e.target.checked; if(c.bg && S.bgSrc!=="user" && S.bgSrc!=="instr"){ S.bg=c.yarn; fillYarnSelects(); } if(!c.bg) applyLogoYarn(); computeBBox(); renderYarnMap(); retrace(); });
    row.appendChild(meta); box.appendChild(row);
  });
  const used=new Set(S.clusters.filter(c=>!c.bg).map(c=>c.yarn)); $("yarnCount").textContent=used.size+" logo yarn"+(used.size===1?"":"s");
}

/* ---------- tracing (in a worker) ---------- */
let worker=null;
function getWorker(){
  if(worker) return worker;
  const src=window.MATSTUDIO_WORKER? "" : $("tracerSrc").textContent + "\n" + $("fitSrc").textContent + `
  self.onmessage=function(e){ var m=e.data, T=self.ImageTracer, w=m.w, h=m.h, out=[];
    var o=T.checkoptions(m.opts);
    function fitLayer(ins){ return ins.map(function(p){ var pts=p.points.map(function(q){ return {x:q.x,y:q.y}; });
        var segs=FIT.fitClosed(pts,m.fit)||[]; return {segments:segs,isholepath:p.isholepath,holechildren:p.holechildren}; }); }
    for(var L=0;L<m.masks.length;L++){ var mk=m.masks[L], arr=new Array(h+2);
      for(var j=0;j<h+2;j++){ var row=new Array(w+2); row.fill(-1); if(j>0&&j<=h){ var off=(j-1)*w; for(var i=0;i<w;i++) row[i+1]=mk[off+i]; } arr[j]=row; }
      var ii={array:arr,palette:[{r:0,g:0,b:0,a:255},{r:255,g:255,b:255,a:255}]};
      out.push(fitLayer(T.internodes(T.pathscan(T.layeringstep(ii,1),o.pathomit),o)));
      self.postMessage({job:m.job,progress:L+1,of:m.masks.length}); }
    self.postMessage({job:m.job,layers:out}); };`;
  worker= window.MATSTUDIO_WORKER ? new Worker(window.MATSTUDIO_WORKER) : new Worker(URL.createObjectURL(new Blob([src],{type:"text/javascript"})));
  worker.onmessage=onTrace; worker.onerror=e=>{ busy(null); toast("Tracing failed: "+(e.message||"worker error")); };
  return worker;
}
let retraceT=0;
function retrace(){ clearTimeout(retraceT); retraceT=setTimeout(doTrace,60); render(); }
function doTrace(){
  if(S.photo && S.work){ S.layers=[]; if(S.photoFit==="cut") computeBBox(); else S.bbox={x:0,y:0,w:S.work.w,h:S.work.h}; S.traceJob++; busy(null); preparePhoto(); renderYarnMap(); render(); updateSpec(); return; }
  if(!S.idx) return;
  const {w,h}=S.work, N=w*h, p=pal();
  const groups=new Map();
  S.clusters.forEach((c,k)=>{ if(c.bg) return; const key=gradKey(c,k); let g=groups.get(key); if(!g){ g={yarn:c.yarn,grad:c.grad||null,ks:[],count:0}; groups.set(key,g);} g.ks.push(k); g.count+=c.count; });
  const order=[...groups.values()].sort((a,b)=>b.count-a.count);
  const layerOf=new Int16Array(256).fill(-1); order.forEach((g,li)=>g.ks.forEach(k=>layerOf[k]=li));
  const masks=order.map((g,li)=>{ const m=new Uint8Array(N); for(let i=0;i<N;i++){ const L=layerOf[S.idx[i]]; m[i]= S.build==="stacked"? (L>=li?1:0) : (L===li?1:0); } return m; });
  const lay=layout(), mmPerPx=lay.k||1, dpx=S.minDetail/mmPerPx;
  // Designers never leave a stroke thinner than about 4-5 mm on the mat (it would not tuft): thin lines, hairline
  // rings and light lettering are thickened to the minimum; strokes already thicker are untouched.
  if(!S.keepThin) masks.forEach(m=>thickenThin(m,w,h,MIN_STROKE_MM/2/mmPerPx));
  const opts={pathomit:Math.max(8,Math.round(dpx*3)),rightangleenhance:false};
  const rs=Math.max(w,h)/1400; // detail windows scale with the working resolution
  const fit={round:S.roundMM>0? S.roundMM/mmPerPx : 0, tol:0.45+S.smooth*0.15, lineTol:0.6, lineBias:0.06, minLine:Math.max(Math.round(14*rs),Math.round(6/mmPerPx)), trim:Math.round(3*rs), k:Math.round(4*rs), cornerAngle:1.0, cornerCut:1.2*rs, capAngle:1.75, keepAngle:0.9, capLen:S.roundMM>0? 2.6*S.roundMM/mmPerPx : 0, smoothPasses:Math.round(4*rs), sharp:(S.upscale||1)<=1.6};
  S.pendingOrder=order; S.traceJob++; busy("Tracing "+order.length+" colour layer"+(order.length===1?"":"s")+"…");
  if(!order.length){ S.layers=[]; busy(null); render(); updateSpec(); return; }
  getWorker().postMessage({job:S.traceJob,w,h,masks,opts,fit});
}
function onTrace(e){
  const m=e.data; if(m.job!==S.traceJob || S.plain) return;
  if(m.progress){ busy("Tracing layer "+m.progress+" of "+m.of+"…"); return; }
  const p=pal();
  S.layers=m.layers.map((tl,li)=>{ const y=yarnBy(p,S.pendingOrder[li].yarn); return {yarn:y, grad:S.pendingOrder[li].grad||null, paths:geomFromTrace(tl)}; });
  S.enlarged=enlargeSmallText(S.layers, layout().k||1);
  snapGeometry(S.layers, layout().k||1);
  S.layers.forEach(L=>{ L.d=L.paths.map(contoursToD).join(" "); L.p2d=new Path2D(L.d); });
  busy(null); render(); updateSpec();
}
function geomFromTrace(tl){
  const fwd=p=>{ const s=p.segments; return {x0:s[0].x1,y0:s[0].y1,segs:s.map(g=>g.type==="C"?["C",g.x2,g.y2,g.x3,g.y3,g.x4,g.y4]:g.type==="Q"?["Q",g.x2,g.y2,g.x3,g.y3]:["L",g.x2,g.y2])}; };
  const endOf=g=>g.type==="C"?[g.x4,g.y4]:g.type==="Q"?[g.x3,g.y3]:[g.x2,g.y2];
  const rev=p=>{ const s=p.segments, st=endOf(s[s.length-1]); const segs=[];
    for(let i=s.length-1;i>=0;i--){ const g=s[i]; segs.push(g.type==="C"?["C",g.x3,g.y3,g.x2,g.y2,g.x1,g.y1]:g.type==="Q"?["Q",g.x2,g.y2,g.x1,g.y1]:["L",g.x1,g.y1]); } return {x0:st[0],y0:st[1],segs}; };
  const out=[]; for(const p of tl){ if(p.isholepath||!p.segments.length) continue; const cs=[fwd(p)]; for(const hi of p.holechildren){ const hp=tl[hi]; if(hp&&hp.segments.length) cs.push(rev(hp)); } out.push(cs); }
  return out;
}
/* Alignment pass: near-horizontal/vertical straight edges become exact, and horizontal edges that sit at
   almost the same height across letters (baseline, cap height, serif bottoms) snap to one shared line. */
function snapGeometry(layers, mmPerPx){
  const angTol=Math.tan(3*Math.PI/180), minLen=Math.max(4, 2/mmPerPx), yTol=Math.max(1.5, 1.5/mmPerPx);
  // point access: point i of a contour (0..m), where point m == point 0
  const ptOf=(ct,i)=>{ const m=ct.segs.length; if(i===0||i===m) return [ct.x0,ct.y0]; const s=ct.segs[i-1]; return s[0]==="C"?[s[5],s[6]]:[s[1],s[2]]; };
  const shiftEnd=(s,dx,dy)=>{ if(s[0]==="C"){ s[3]+=dx; s[4]+=dy; s[5]+=dx; s[6]+=dy; } else { s[1]+=dx; s[2]+=dy; } };
  const shiftStartHandle=(s,dx,dy)=>{ if(s[0]==="C"){ s[1]+=dx; s[2]+=dy; } };
  const movePt=(ct,i,dx,dy)=>{ const m=ct.segs.length; if(!dx&&!dy) return;
    if(i===0||i===m){ ct.x0+=dx; ct.y0+=dy; shiftEnd(ct.segs[m-1],dx,dy); shiftStartHandle(ct.segs[0],dx,dy); }
    else { shiftEnd(ct.segs[i-1],dx,dy); shiftStartHandle(ct.segs[i],dx,dy); } };
  const contours=[]; for(const L of layers) for(const cs of L.paths) for(const ct of cs) contours.push(ct);
  const H=[];
  for(const ct of contours){ const m=ct.segs.length;
    for(let j=0;j<m;j++){ if(ct.segs[j][0]!=="L") continue; const a=ptOf(ct,j), b=ptOf(ct,j+1), dx=b[0]-a[0], dy=b[1]-a[1], len=Math.hypot(dx,dy);
      if(len<minLen) continue;
      if(Math.abs(dy)<=angTol*Math.abs(dx)) H.push({ct,j,y:(a[1]+b[1])/2,len});
      else if(Math.abs(dx)<=angTol*Math.abs(dy)){ const x=(a[0]+b[0])/2; movePt(ct,j,x-a[0],0); movePt(ct,j+1,x-b[0],0); } } }
  // cluster horizontal edges by height (length-weighted)
  H.sort((p,q)=>p.y-q.y); const groups=[];
  for(const e of H){ const g=groups[groups.length-1]; if(g && e.y-g.lastY<=yTol && e.y-g.firstY<=yTol*2){ g.items.push(e); g.lastY=e.y; } else groups.push({items:[e],firstY:e.y,lastY:e.y}); }
  for(const g of groups){ const W=g.items.reduce((s,e)=>s+e.len,0), y=g.items.reduce((s,e)=>s+e.y*e.len,0)/W;
    for(const e of g.items){ const a=ptOf(e.ct,e.j), b=ptOf(e.ct,e.j+1); movePt(e.ct,e.j,0,y-a[1]); movePt(e.ct,e.j+1,0,y-b[1]); } }
}
const f2=v=>Math.round(v*100)/100;
function contoursToD(cs){ return cs.map(c=>"M"+f2(c.x0)+" "+f2(c.y0)+c.segs.map(s=>s[0]==="C"?"C"+s.slice(1).map(f2).join(" "):s[0]==="Q"?"Q"+f2(s[1])+" "+f2(s[2])+" "+f2(s[3])+" "+f2(s[4]):"L"+f2(s[1])+" "+f2(s[2])).join("")+"Z").join(""); }

/* ---------- mat outline (shared by preview and every export) ---------- */
const KAPPA=0.5523;
function shapeOutline(L,inset){
  const W=L.matW, H=L.matH, i=inset||0, K=KAPPA, segs=[]; let x0=0,y0=0;
  const ell=(cx,cy,rx,ry)=>{ x0=cx+rx; y0=cy;
    segs.push(["C",cx+rx,cy+K*ry,cx+K*rx,cy+ry,cx,cy+ry],["C",cx-K*rx,cy+ry,cx-rx,cy+K*ry,cx-rx,cy],["C",cx-rx,cy-K*ry,cx-K*rx,cy-ry,cx,cy-ry],["C",cx+K*rx,cy-ry,cx+rx,cy-K*ry,cx+rx,cy]); };
  if(S.corner==="oval") ell(W/2,H/2,W/2-i,H/2-i);
  else if(S.corner==="circle"){ const r=Math.min(W,H)/2-i; ell(W/2,H/2,r,r); }
  else if(S.corner==="arch"){ // flat bottom, half-ellipse top (e.g. "1/2 rond 1m40 diameter, 1m radius" = 140 × 100 cm)
    const rx=W/2-i, ry=H-2*i, cx=W/2, by=H-i; x0=cx-rx; y0=by;
    segs.push(["L",cx+rx,by],["C",cx+rx,by-K*ry,cx+K*rx,by-ry,cx,by-ry],["C",cx-K*rx,by-ry,cx-rx,by-K*ry,cx-rx,by]); }
  else { const r=S.corner==="rounded"? Math.max(0,Math.min(W,H)*0.06-i) : 0, x=i, y=i, w=W-2*i, h=H-2*i;
    if(r<=0){ x0=x; y0=y; segs.push(["L",x+w,y],["L",x+w,y+h],["L",x,y+h],["L",x,y]); }
    else { const k=K*r; x0=x+r; y0=y;
      segs.push(["L",x+w-r,y],["C",x+w-r+k,y,x+w,y+r-k,x+w,y+r],["L",x+w,y+h-r],["C",x+w,y+h-r+k,x+w-r+k,y+h,x+w-r,y+h],
        ["L",x+r,y+h],["C",x+r-k,y+h,x,y+h-r+k,x,y+h-r],["L",x,y+r],["C",x,y+r-k,x+r-k,y,x+r,y]); } }
  return {x0,y0,segs};
}
function tracePath(ctx,o){ ctx.beginPath(); ctx.moveTo(o.x0,o.y0); for(const g of o.segs){ if(g[0]==="L") ctx.lineTo(g[1],g[2]); else ctx.bezierCurveTo(g[1],g[2],g[3],g[4],g[5],g[6]); } ctx.closePath(); }
// polygon points of a contour (curves flattened), mapped through map(x,y)
function flattenContour(ct,map,step){
  const pts=[map(ct.x0,ct.y0)]; let x=ct.x0,y=ct.y0;
  for(const g of ct.segs){
    if(g[0]==="L"){ x=g[1]; y=g[2]; pts.push(map(x,y)); }
    else if(g[0]==="C"){ const [_,ax,ay,bx,by,ex,ey]=g; const P0=map(x,y),P1=map(ax,ay),P2=map(bx,by),P3=map(ex,ey);
      const len=Math.hypot(P1[0]-P0[0],P1[1]-P0[1])+Math.hypot(P2[0]-P1[0],P2[1]-P1[1])+Math.hypot(P3[0]-P2[0],P3[1]-P2[1]); const n=Math.max(4,Math.min(96,Math.ceil(len/step)));
      for(let k=1;k<=n;k++){ const t=k/n, mt=1-t, a=mt*mt*mt, b=3*mt*mt*t, c=3*mt*t*t, d=t*t*t; pts.push([a*P0[0]+b*P1[0]+c*P2[0]+d*P3[0], a*P0[1]+b*P1[1]+c*P2[1]+d*P3[1]]); } x=ex; y=ey; }
    else { const [_,qx,qy,ex,ey]=g; const n=8; for(let k=1;k<=n;k++){ const t=k/n,a=(1-t)*(1-t),b=2*(1-t)*t,c=t*t; pts.push(map(a*x+b*qx+c*ex,a*y+b*qy+c*ey)); } x=ex; y=ey; } }
  return pts;
}

/* ---------- layout (all in mm) ---------- */
function layout(){
  const matW=S.w*10, matH=S.h*10, bw=S.border!=="none"? S.borderW*10 : 0, edge=S.edgeCm? S.edgeCm*10 : null;
  let margin= edge!=null && !S.innerPanel ? edge : Math.min(matW,matH)*0.07, panel=null, off=bw;
  if(S.innerPanel && !S.plain){ const e=edge!=null? edge : Math.min(matW,matH)*0.1; panel={x:bw+e,y:bw+e,w:matW-2*(bw+e),h:matH-2*(bw+e),yarn:S.innerPanel}; off=bw+e; margin=Math.min(panel.w,panel.h)*0.12; }
  const bb=S.bbox||{x:0,y:0,w:1,h:1}, a=bb.w/bb.h;
  let aw=matW-2*(off+margin), ah=matH-2*(off+margin), ccy=matH/2;
  if(S.corner==="oval"||S.corner==="circle"){ // largest box of the logo's proportions inside the ellipse
    const rx=(S.corner==="circle"?Math.min(matW,matH):matW)/2-bw, ry=(S.corner==="circle"?Math.min(matW,matH):matH)/2-bw;
    const v=1/Math.sqrt(a*a/(rx*rx)+1/(ry*ry)); aw=2*a*v*0.88; ah=2*v*0.88; }
  else if(S.corner==="arch"){ // box standing on the flat bottom, under the half-ellipse
    const rx=matW/2-bw, ry=matH-2*bw, t=1/Math.sqrt(a*a/(4*rx*rx)+1/(ry*ry)); aw=a*t*0.82; ah=t*0.82; ccy=matH-bw-t*0.5; }
  let k=Math.max(1e-6,Math.min(aw/bb.w, ah/bb.h))*S.scale;
  let cx=matW/2+S.dx/100*matW, cy=ccy+S.dy/100*matH;
  if(S.photo && S.photoFit==="bleed" && S.srcCanvas && !S.plain){ k=Math.max((matW-2*bw)/bb.w,(matH-2*bw)/bb.h); cx=matW/2; cy=matH/2; }
  return {matW,matH,bw,k,panel,tx:cx-(bb.x+bb.w/2)*k,ty:cy-(bb.y+bb.h/2)*k,logoW:bb.w*k,logoH:bb.h*k,
    radius:S.corner==="rounded"? Math.min(matW,matH)*0.06 : 0};
}

/* ---------- textures ---------- */
const TEX={};
function fiberTile(size,n,len,curl,alpha,seed){
  const c=document.createElement("canvas"); c.width=c.height=size; const x=c.getContext("2d"); const r=rng(seed);
  x.fillStyle="#808080"; x.fillRect(0,0,size,size); x.lineCap="round";
  for(let i=0;i<n;i++){ const px=r()*size, py=r()*size, a=r()*Math.PI*2, l=len*(0.5+r());
    x.strokeStyle= r()<0.5? `rgba(255,255,255,${alpha*(0.5+r())})` : `rgba(0,0,0,${alpha*(0.5+r())})`; x.lineWidth=0.8+r()*1.2;
    for(const ox of [-size,0,size]) for(const oy of [-size,0,size]){ x.beginPath(); x.moveTo(px+ox,py+oy);
      x.bezierCurveTo(px+ox+Math.cos(a+curl)*l*0.5, py+oy+Math.sin(a+curl)*l*0.5, px+ox+Math.cos(a-curl)*l*0.8, py+oy+Math.sin(a-curl)*l*0.8, px+ox+Math.cos(a)*l, py+oy+Math.sin(a)*l); x.stroke(); } }
  return c;
}
function speckTile(size,seed){
  const c=document.createElement("canvas"); c.width=c.height=size; const x=c.getContext("2d"); const r=rng(seed);
  x.fillStyle="#808080"; x.fillRect(0,0,size,size);
  for(let i=0;i<size*size/6;i++){ x.fillStyle= r()<0.5?`rgba(255,255,255,${0.12*r()})`:`rgba(0,0,0,${0.18*r()})`; x.fillRect(r()*size,r()*size,1+r()*1.5,1+r()*1.5); }
  return c;
}
function tex(name){
  if(TEX[name]) return TEX[name];
  if(name==="impression") TEX[name]={tile:fiberTile(256,1700,12,1.4,0.32,11),mm:70,alpha:0.85};
  else if(name==="pile") TEX[name]={tile:fiberTile(256,2600,6,0.6,0.22,5),mm:35,alpha:0.7};
  else if(name==="pileHD") TEX[name]={tile:fiberTile(256,3200,4,0.5,0.16,9),mm:28,alpha:0.55};
  else TEX[name]={tile:speckTile(256,3),mm:40,alpha:0.9};
  return TEX[name];
}

/* ---------- rendering ---------- */
function matPath(ctx,x,y,w,h,r){ ctx.beginPath(); if(r>0 && ctx.roundRect) ctx.roundRect(x,y,w,h,r); else ctx.rect(x,y,w,h); }
function cssVar(n){ return getComputedStyle(document.documentElement).getPropertyValue(n).trim(); }
function drawMat(ctx, px, ox, oy, mode){ // px = canvas pixels per mm
  const L=layout(), p=pal(), st=STYLES[S.style];
  const bg=yarnBy(p,S.bg)||YARNS[p][0], bd=S.border==="none"?null:yarnBy(p,S.border);
  ctx.save(); ctx.translate(ox,oy); ctx.scale(px,px);
  // shadow
  const outer=shapeOutline(L,0), inner=bd?shapeOutline(L,L.bw):null;
  if(mode==="mockup"){ ctx.save(); ctx.shadowColor="rgba(0,0,0,.35)"; ctx.shadowBlur=14; ctx.shadowOffsetY=5;
    tracePath(ctx,outer); ctx.fillStyle=bd?bd.hex:bg.hex; ctx.fill(); ctx.restore(); }
  ctx.save(); tracePath(ctx,outer); ctx.clip();
  ctx.fillStyle=bd?bd.hex:bg.hex; ctx.fillRect(0,0,L.matW,L.matH);
  if(bd){ ctx.fillStyle=bg.hex; tracePath(ctx,inner); ctx.fill(); }
  if(L.panel){ const py=yarnBy(p,L.panel.yarn); if(py){ ctx.fillStyle=py.hex; ctx.fillRect(L.panel.x,L.panel.y,L.panel.w,L.panel.h); } }
  // logo
  ctx.save(); ctx.transform(L.k,0,0,L.k,L.tx,L.ty);
  if(mode==="mockup" && st.tex==="impression" && !S.plain){
    for(const ly of S.layers){ ctx.save(); ctx.translate(0.7/L.k,0.9/L.k); ctx.fillStyle="rgba(0,0,0,.35)"; ctx.fill(ly.p2d,"evenodd"); ctx.restore(); }
  }
  if(!S.plain) for(const ly of S.layers){ ctx.fillStyle=ly.grad? gradFill(ctx,ly.grad) : ly.yarn.hex; ctx.fill(ly.p2d,"evenodd"); }
  if(S.photo && S.srcCanvas && !S.plain){ ctx.imageSmoothingQuality="high"; const bb=S.bbox; ctx.drawImage(photoSource(),bb.x,bb.y,bb.w,bb.h); }
  ctx.restore();
  if(mode==="mockup"){
    const t=tex(st.tex), pat=ctx.createPattern(t.tile,"repeat"), s=t.mm/t.tile.width;
    pat.setTransform(new DOMMatrix().scale(s));
    ctx.globalCompositeOperation="overlay"; ctx.globalAlpha=t.alpha; ctx.fillStyle=pat; ctx.fillRect(0,0,L.matW,L.matH);
    ctx.globalCompositeOperation="source-over"; ctx.globalAlpha=1;
    if(st.tex==="scrape") drawHoles(ctx,L);
    // pile edge darkening
    const g=ctx.createLinearGradient(0,0,0,L.matH); g.addColorStop(0,"rgba(255,255,255,.06)"); g.addColorStop(1,"rgba(0,0,0,.10)"); ctx.fillStyle=g; ctx.fillRect(0,0,L.matW,L.matH);
    if(bd){ ctx.strokeStyle="rgba(0,0,0,.25)"; ctx.lineWidth=2; tracePath(ctx,inner); ctx.stroke(); }
  }
  ctx.restore();
  if(mode==="mockup"){ ctx.strokeStyle="rgba(0,0,0,.35)"; ctx.lineWidth=1.2; tracePath(ctx,outer); ctx.stroke(); }
  ctx.restore();
  return L;
}
function drawHoles(ctx,L){
  const sp=32, r=4.2, inset=Math.max(L.bw,14);
  for(let y=inset+sp/2, row=0; y<L.matH-inset; y+=sp*0.866, row++){
    for(let x=inset+(row%2?sp/2:0)+sp/4; x<L.matW-inset; x+=sp){
      ctx.beginPath(); ctx.ellipse(x,y,r,r*0.8,0,0,Math.PI*2); ctx.fillStyle="rgba(0,0,0,.62)"; ctx.fill();
      ctx.beginPath(); ctx.ellipse(x,y,r,r*0.8,0,0.1*Math.PI,0.9*Math.PI); ctx.strokeStyle="rgba(255,255,255,.22)"; ctx.lineWidth=0.8; ctx.stroke(); } }
}
function render(){
  const cv=$("cv"), stage=$("stage"), dpr=Math.min(2,window.devicePixelRatio||1);
  const W=stage.clientWidth; const L0=layout(); const pad=S.view==="proof"?54:26;
  const H=Math.min(Math.max(240, (W-2*pad)*L0.matH/L0.matW+2*pad), Math.max(320, window.innerHeight*0.7));
  cv.width=Math.round(W*dpr); cv.height=Math.round(H*dpr); cv.style.height=H+"px";
  const ctx=cv.getContext("2d"); ctx.setTransform(dpr,0,0,dpr,0,0); ctx.clearRect(0,0,W,H);
  const px=Math.min((W-2*pad)/L0.matW,(H-2*pad)/L0.matH), ox=(W-L0.matW*px)/2, oy=(H-L0.matH*px)/2;
  const L=drawMat(ctx,px,ox,oy,S.view);
  if(S.view==="proof") drawDims(ctx,L,px,ox,oy);
  $("stageTitle").textContent=`${S.sizeMissing?"size needed":S.w+" × "+S.h+" cm"} · ${STYLES[S.style].label}`;
  const shapes=S.layers.reduce((a,l)=>a+l.paths.length,0);
  $("stats").innerHTML = S.plain? "<span>Plain mat, no logo</span>" : S.photo&&S.srcCanvas? `<span>Photo <b>${(L.logoW/10).toFixed(1)} × ${(L.logoH/10).toFixed(1)} cm</b></span><span>Placed as an image</span>` : S.idx? `<span>Logo <b>${(L.logoW/10).toFixed(1)} × ${(L.logoH/10).toFixed(1)} cm</b></span><span>Logo yarns <b>${S.layers.length}</b></span><span>Vector shapes <b>${shapes}</b></span><span>Smallest detail kept <b>${S.minDetail} mm</b></span>` : "<span>Load a logo to start.</span>";
}
function drawDims(ctx,L,px,ox,oy){
  const ink=cssVar("--muted")||"#555", acc=cssVar("--accent")||"#17646C";
  ctx.save(); ctx.strokeStyle=ink; ctx.fillStyle=ink; ctx.lineWidth=1; ctx.font="500 12px "+cssVar("--f-mono");
  const x0=ox,x1=ox+L.matW*px,y0=oy,y1=oy+L.matH*px, ty=y0-22, tx=x0-22;
  ctx.beginPath(); ctx.moveTo(x0,ty); ctx.lineTo(x1,ty); ctx.moveTo(x0,ty-5); ctx.lineTo(x0,ty+5); ctx.moveTo(x1,ty-5); ctx.lineTo(x1,ty+5);
  ctx.moveTo(tx,y0); ctx.lineTo(tx,y1); ctx.moveTo(tx-5,y0); ctx.lineTo(tx+5,y0); ctx.moveTo(tx-5,y1); ctx.lineTo(tx+5,y1); ctx.stroke();
  const lab=(t,x,y,rot)=>{ ctx.save(); ctx.translate(x,y); if(rot) ctx.rotate(-Math.PI/2); const w=ctx.measureText(t).width+10; ctx.fillStyle=cssVar("--stage"); ctx.fillRect(-w/2,-9,w,18); ctx.fillStyle=ink; ctx.textAlign="center"; ctx.textBaseline="middle"; ctx.fillText(t,0,0); ctx.restore(); };
  lab(S.w+" cm",(x0+x1)/2,ty); lab(S.h+" cm",tx,(y0+y1)/2,true);
  if(S.layers.length){ const bx=ox+(L.tx+S.bbox.x*L.k)*px, by=oy+(L.ty+S.bbox.y*L.k)*px, bw=L.logoW*px, bh=L.logoH*px;
    ctx.setLineDash([4,3]); ctx.strokeStyle=acc; ctx.strokeRect(bx,by,bw,bh); ctx.setLineDash([]);
    ctx.fillStyle=acc; ctx.textAlign="left"; ctx.textBaseline="top"; const t=`logo ${(L.logoW/10).toFixed(1)} × ${(L.logoH/10).toFixed(1)} cm`;
    const w=ctx.measureText(t).width+8; ctx.fillStyle=cssVar("--panel"); ctx.fillRect(bx,by+bh+4,w,17); ctx.fillStyle=acc; ctx.fillText(t,bx+4,by+bh+6); }
  ctx.restore();
}

/* ---------- photo mode ---------- */
// the image used when "Keep as a photo" is on: the original artwork (or selection), at most 3000 px on the long side
function photoSource(){
  const src=S.photoSrc||S.srcCanvas; if(!src) return null; return src; }
function preparePhoto(){
  const base=S.cropSrc||S.fullSrc||S.srcCanvas; if(!base){ S.photoSrc=null; return; }
  const bb=S.bbox, sx=base.width/S.work.w, sy=base.height/S.work.h, cw=bb.w*sx, ch=bb.h*sy;
  const k=Math.min(1,3000/Math.max(cw,ch)); const c=document.createElement("canvas"); c.width=Math.max(1,Math.round(cw*k)); c.height=Math.max(1,Math.round(ch*k));
  const x=c.getContext("2d"); x.imageSmoothingQuality="high"; x.drawImage(base,bb.x*sx,bb.y*sy,cw,ch,0,0,c.width,c.height);
  if(S.photoFit==="cut" && S.bgConn){ // cut the plain backdrop away (only the part connected to the image edge)
    const m=document.createElement("canvas"); m.width=bb.w; m.height=bb.h; const mx=m.getContext("2d"), id=mx.createImageData(bb.w,bb.h), W=S.work.w;
    for(let y=0;y<bb.h;y++) for(let xx=0;xx<bb.w;xx++){ id.data[(y*bb.w+xx)*4+3]= S.bgConn[(bb.y+y)*W+bb.x+xx]? 0 : 255; }
    mx.putImageData(id,0,0); x.globalCompositeOperation="destination-in"; x.imageSmoothingEnabled=true; x.drawImage(m,0,0,c.width,c.height); x.globalCompositeOperation="source-over"; }
  S.photoSrc=c; }
function photoJPEG(maxPx,q){ const src=photoSource(); const k=Math.min(1,maxPx/Math.max(src.width,src.height)); const c=document.createElement("canvas"); c.width=Math.round(src.width*k); c.height=Math.round(src.height*k);
  const x=c.getContext("2d"); const bgY=yarnBy(pal(),S.bg); x.fillStyle=bgY?bgY.hex:"#ffffff"; x.fillRect(0,0,c.width,c.height); x.drawImage(src,0,0,c.width,c.height);
  const b64=c.toDataURL("image/jpeg",q||0.92).split(",")[1]; return {w:c.width,h:c.height,b64,bin:atob(b64),canvas:c}; }

/* ---------- exports ---------- */
// Designers' files are drawn at 1:10 — 1 mm on the artboard = 1 cm on the mat (internal geometry is in real mm).
const FILE_SCALE=0.1;
const num=v=>{ const s=(Math.round(v*1000)/1000).toString(); return s==="-0"?"0":s; };
function specText(){
  const L=layout(), p=pal(), bg=yarnBy(p,S.bg), bd=S.border==="none"?null:yarnBy(p,S.border);
  const total=S.layers.length? S.clusters.filter(c=>!c.bg).reduce((a,c)=>a+c.count,0) : 0;
  const lines=[`Design ID:   ${S.id}`,`Style:       ${STYLES[S.style].label}`,`Mat size:    ${S.w} x ${S.h} cm`,`Mat shape:   ${({square:"rectangle",rounded:"rectangle, rounded corners",oval:"oval",circle:"circle",arch:"arch (half-round top)"})[S.corner]||S.corner}`,`File scale:  1:10 (1 mm in file = 1 cm on mat)`,
    `Background:  ${bg?bg.label:"-"}`,`Border:      ${bd? bd.label+" / "+S.borderW+" cm":"None"}`,`Logo colour: ${S.logoYarn==="auto"?"From logo":S.logoYarn==="set"?"Order colours "+S.logoSet.join(", "):S.logoYarn}`,
    `Logo size:   ${(L.logoW/10).toFixed(1)} x ${(L.logoH/10).toFixed(1)} cm`,`Corners:     ${S.roundMM>0? "rounded "+S.roundMM+" mm" : "sharp"}`, ``, `Logo yarns (share of logo area):`];
  for(const ly of S.layers){ const share=S.clusters.filter(c=>!c.bg&&(ly.grad? c.grad===ly.grad : !c.grad&&c.yarn===ly.yarn.label)).reduce((a,c)=>a+c.count,0);
    const name= ly.grad? "Gradient "+ly.grad.stops.map(st=>st.hex).join(" > ") : ly.yarn.label;
    lines.push(`  ${name.padEnd(22)} ${total? (100*share/total).toFixed(1).padStart(5)+"%":""}`); }
  if(S.plain){ lines.splice(lines.indexOf("Logo yarns (share of logo area):")-1); lines.push("","Plain mat: no logo."); }
  else if(S.photo&&S.srcCanvas){ lines.splice(lines.indexOf("Logo yarns (share of logo area):")-1); lines.push("",S.photoFit==="bleed"?"Artwork kept as a photo, filling the whole mat.":"Artwork kept as a photo, its plain backdrop cut away."); }
  else if(!S.layers.length) lines.push("  (no logo loaded)");
  const auto=[S.enlarged&&!S.photo? `Small text enlarged to about ${TARGET_TEXT_MM/10} cm high (${S.enlarged} line${S.enlarged>1?"s":""} under ${MIN_TEXT_MM[S.style]/10} cm).`:"", S.cleanup&&!S.photo? "Artwork is a photo or textured scan: cleaned up to the logo shapes only - check the lettering.":S.cleanupHint&&!S.photo? "Artwork looks like a photo or textured scan: try “Clean up a photo or scan”, or redraw.":"", S.bgNote,S.swapped&&S.swapped.length&&!S.photo? "Colour too close to the background, switched: "+S.swapped.join(", ")+".":""].filter(Boolean);
  if(auto.length) lines.push("",...auto);
  if(S.orderNotes&&S.orderNotes.length) lines.push("",...S.orderNotes);
  return lines.join("\n");
}
function updateSpec(){ $("spec").textContent=specText(); $("packNames").textContent=`${S.id}.ai, ${S.id}.wmf`; }

function buildSVG(){
  const L=layout(), p=pal(), bg=yarnBy(p,S.bg), bd=S.border==="none"?null:yarnBy(p,S.border);
  const shp=(inset,fill,id)=>`<path id="${id}" fill="${fill}" d="${contoursToD([shapeOutline(L,inset)])}"/>`;
  let s=`<?xml version="1.0" encoding="UTF-8"?>\n<!-- Design ${S.id} · ${STYLES[S.style].label} · ${S.w}x${S.h} cm · drawn 1:10 (1 mm = 1 cm on the mat) -->\n`;
  s+=`<svg xmlns="http://www.w3.org/2000/svg" width="${num(L.matW*FILE_SCALE)}mm" height="${num(L.matH*FILE_SCALE)}mm" viewBox="0 0 ${L.matW} ${L.matH}">\n<title>${S.id}</title>\n`;
  s+=`<g id="Mat">`+(bd? shp(0,bd.hex,"Border_"+safeId(bd.label)) + shp(L.bw,bg.hex,"Background_"+safeId(bg.label)) : shp(0,bg.hex,"Background_"+safeId(bg.label)))+`</g>\n`;
  if(L.panel){ const py=yarnBy(p,L.panel.yarn); if(py) s+=`<rect id="Panel_${safeId(py.label)}" x="${num(L.panel.x)}" y="${num(L.panel.y)}" width="${num(L.panel.w)}" height="${num(L.panel.h)}" fill="${py.hex}"/>\n`; }
  if(S.plain) return s+`</svg>\n`;
  s+=`<g id="Logo" transform="matrix(${L.k} 0 0 ${L.k} ${L.tx} ${L.ty})">\n`;
  if(S.photo && photoSource()){ const j=photoJPEG(3000,0.92); s+=`<image id="Photo" x="${S.bbox.x}" y="${S.bbox.y}" width="${S.bbox.w}" height="${S.bbox.h}" preserveAspectRatio="none" href="data:image/jpeg;base64,${j.b64}"/>\n`; }
  else S.layers.forEach((ly,li)=>{ let fill=ly.yarn.hex;
    if(ly.grad){ const g=ly.grad; s+=`<linearGradient id="G${li}" gradientUnits="userSpaceOnUse" x1="${num(g.x0)}" y1="${num(g.y0)}" x2="${num(g.x1)}" y2="${num(g.y1)}">${g.stops.map(st=>`<stop offset="${num(st.t)}" stop-color="${st.hex}"/>`).join("")}</linearGradient>\n`; fill=`url(#G${li})`; }
    s+=`<path id="${safeId(ly.grad?"Gradient_"+li:ly.yarn.label)}" data-yarn="${ly.grad?"gradient":ly.yarn.label}" fill="${fill}" fill-rule="evenodd" d="${ly.d}"/>\n`; });
  return s+`</g>\n</svg>\n`;
}
const safeId=t=>t.replace(/[^A-Za-z0-9]+/g,"_");

function pdfText(t){ return "("+[...t].map(ch=>{ const c=ch.charCodeAt(0); return c<32||c>126? "\\"+(c&255).toString(8).padStart(3,"0") : "()\\".includes(ch)? "\\"+ch : ch; }).join("")+")"; }
const SRGB_ICC="AAACTGxjbXMEQAAAbW50clJHQiBYWVogB+oACgAcAA8AJgAPYWNzcEFQUEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPbWAAEAAAAA0y1sY21zAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALZGVzYwAAAQgAAAA2Y3BydAAAAUAAAABMd3RwdAAAAYwAAAAUY2hhZAAAAaAAAAAsclhZWgAAAcwAAAAUYlhZWgAAAeAAAAAUZ1hZWgAAAfQAAAAUclRSQwAAAggAAAAgZ1RSQwAAAggAAAAgYlRSQwAAAggAAAAgY2hybQAAAigAAAAkbWx1YwAAAAAAAAABAAAADGVuVVMAAAAaAAAAHABzAFIARwBCACAAYgB1AGkAbAB0AC0AaQBuAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAADAAAAAcAE4AbwAgAGMAbwBwAHkAcgBpAGcAaAB0ACwAIAB1AHMAZQAgAGYAcgBlAGUAbAB5WFlaIAAAAAAAAPbWAAEAAAAA0y1zZjMyAAAAAAABDEIAAAXe///zJQAAB5MAAP2Q///7of///aIAAAPcAADAblhZWiAAAAAAAABvoAAAOPUAAAOQWFlaIAAAAAAAACSfAAAPhAAAtsNYWVogAAAAAAAAYpcAALeHAAAY2XBhcmEAAAAAAAMAAAACZmYAAPKnAAANWQAAE9AAAApbY2hybQAAAAAAAwAAAACj1wAAVHsAAEzNAACZmgAAJmYAAA9c";
function pdfName(t){ return "/"+[...t].map(ch=>{ const c=ch.charCodeAt(0); return (c>32&&c<127&&!"#()<>[]{}/%".includes(ch))? ch : "#"+(c&255).toString(16).padStart(2,"0"); }).join(""); }
function buildPDF(){
  const L=layout(), p=pal(), bg=yarnBy(p,S.bg), bd=S.border==="none"?null:yarnBy(p,S.border);
  const PT=72/25.4*FILE_SCALE, Wp=L.matW*PT, Hp=L.matH*PT;
  // Plain RGB fills in an sRGB space, like the designers' files (spot colours made Illustrator open the file as CMYK).
  // Each yarn goes on its own layer named after the yarn.
  const rgb=y=>"/RGB cs "+y.rgb.map(v=>num(v/255)).join(" ")+" scn\n";
  const layers=[]; const layer=name=>{ layers.push(name); return "/OC /L"+(layers.length-1)+" BDC\n"; };
  const pathOps=ct=>{ let o=`${num(ct.x0)} ${num(ct.y0)} m\n`; for(const g of ct.segs) o+= g[0]==="L"? `${num(g[1])} ${num(g[2])} l\n` : `${num(g[1])} ${num(g[2])} ${num(g[3])} ${num(g[4])} ${num(g[5])} ${num(g[6])} c\n`; return o+"h\n"; };
  // exact scale: 3-decimal rounding of 0.2834646 made every mat 0.17% small (200 x 130 cm came out 199.67 x 129.78)
  const n6=v=>{ const t=(Math.round(v*1e6)/1e6).toString(); return t==="-0"?"0":t; };
  let c=`q 1 0 0 -1 0 ${n6(Hp)} cm ${n6(PT)} 0 0 ${n6(PT)} 0 0 cm\n`;
  if(bd){ c+=layer("Border "+bd.label)+rgb(bd)+pathOps(shapeOutline(L,0))+"f\nEMC\n"; c+=layer("Background "+bg.label)+rgb(bg)+pathOps(shapeOutline(L,L.bw))+"f\nEMC\n"; }
  else c+=layer("Background "+bg.label)+rgb(bg)+pathOps(shapeOutline(L,0))+"f\nEMC\n";
  if(L.panel){ const py=yarnBy(p,L.panel.yarn); if(py) c+=layer("Panel "+py.label)+rgb(py)+`${n6(L.panel.x)} ${n6(L.panel.y)} ${n6(L.panel.w)} ${n6(L.panel.h)} re f\nEMC\n`; }
  c+=`q ${n6(L.k)} 0 0 ${n6(L.k)} ${n6(L.tx)} ${n6(L.ty)} cm\n`;
  let img=null; if(!S.plain && S.photo && photoSource()){ img=photoJPEG(3000,0.92); c+=layer("Photo")+`q ${num(S.bbox.w)} 0 0 ${num(-S.bbox.h)} ${num(S.bbox.x)} ${num(S.bbox.y+S.bbox.h)} cm /Im0 Do Q\nEMC\n`; }
  const shadings=[];
  for(const ly of (S.plain||img?[]:S.layers)){ c+=layer(ly.grad? "Gradient "+ly.grad.stops[0].hex+" to "+ly.grad.stops[ly.grad.stops.length-1].hex : ly.yarn.label)+(ly.grad? "q\n" : rgb(ly.yarn));
    for(const cs of ly.paths) for(const ct of cs){ let x=ct.x0,y=ct.y0; c+=`${num(x)} ${num(y)} m\n`;
      for(const sg of ct.segs){ if(sg[0]==="L"){ x=sg[1]; y=sg[2]; c+=`${num(x)} ${num(y)} l\n`; }
        else if(sg[0]==="C"){ c+=`${num(sg[1])} ${num(sg[2])} ${num(sg[3])} ${num(sg[4])} ${num(sg[5])} ${num(sg[6])} c\n`; x=sg[5]; y=sg[6]; }
        else { const qx=sg[1],qy=sg[2],ex=sg[3],ey=sg[4]; c+=`${num(x+2/3*(qx-x))} ${num(y+2/3*(qy-y))} ${num(ex+2/3*(qx-ex))} ${num(ey+2/3*(qy-ey))} ${num(ex)} ${num(ey)} c\n`; x=ex; y=ey; } }
      c+="h\n"; }
    if(ly.grad){ shadings.push(ly.grad); c+=`W* n /Sh${shadings.length-1} sh Q\nEMC\n`; } else c+="f*\nEMC\n"; }
  c+="Q Q\n";
  const objs=[]; const add=s=>{ objs.push(s); return objs.length; };
  const cat=add(null), pages=add(null);
  const iccBin=atob(SRGB_ICC), icc=add(`<< /N 3 /Alternate /DeviceRGB /Length ${iccBin.length} >>\nstream\n${iccBin}\nendstream`);
  const ocgs=layers.map(n=>add(`<< /Type /OCG /Name ${pdfText(n)} >>`));
  const shObjs=shadings.map(g=>{ const st=g.stops, f=(a,b)=>`<< /FunctionType 2 /Domain [0 1] /C0 [${a.rgb.map(v=>num(v/255)).join(" ")}] /C1 [${b.rgb.map(v=>num(v/255)).join(" ")}] /N 1 >>`;
    const fn= st.length===2? f(st[0],st[1]) : `<< /FunctionType 3 /Domain [0 1] /Functions [${st.slice(0,-1).map((a,j)=>f(a,st[j+1])).join(" ")}] /Bounds [${st.slice(1,-1).map(a=>num((a.t-st[0].t)/(st[st.length-1].t-st[0].t))).join(" ")}] /Encode [${st.slice(0,-1).map(()=>"0 1").join(" ")}] >>`;
    const t0=st[0].t, t1=st[st.length-1].t, X=(t)=>[g.x0+(g.x1-g.x0)*t, g.y0+(g.y1-g.y0)*t], A=X(t0), B=X(t1);
    return add(`<< /ShadingType 2 /ColorSpace /DeviceRGB /Coords [${num(A[0])} ${num(A[1])} ${num(B[0])} ${num(B[1])}] /Function ${fn} /Extend [true true] >>`); });
  const content=add(`<< /Length ${c.length} >>\nstream\n${c}endstream`);
  const imgObj=img? add(`<< /Type /XObject /Subtype /Image /Width ${img.w} /Height ${img.h} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${img.bin.length} >>\nstream\n${img.bin}\nendstream`) : 0;
  const page=add(`<< /Type /Page /Parent ${pages} 0 R /MediaBox [0 0 ${num(Wp)} ${num(Hp)}] /Resources << /ColorSpace << /RGB [/ICCBased ${icc} 0 R] >> /Properties << ${ocgs.map((o,i)=>`/L${i} ${o} 0 R`).join(" ")} >>${shObjs.length?` /Shading << ${shObjs.map((o,i)=>`/Sh${i} ${o} 0 R`).join(" ")} >>`:""}${imgObj?` /XObject << /Im0 ${imgObj} 0 R >>`:""} >> /Contents ${content} 0 R >>`);
  objs[cat-1]=`<< /Type /Catalog /Pages ${pages} 0 R /OCProperties << /OCGs [${ocgs.map(o=>o+" 0 R").join(" ")}] /D << /Order [${ocgs.map(o=>o+" 0 R").join(" ")}] /ON [${ocgs.map(o=>o+" 0 R").join(" ")}] >> >> >>`; objs[pages-1]=`<< /Type /Pages /Kids [${page} 0 R] /Count 1 >>`;
  const info=add(`<< /Title (${S.id.replace(/[()\\]/g,"")}) /Subject (${STYLES[S.style].label} ${S.w}x${S.h} cm) /Creator (Logo Mat Proof Studio) >>`);
  let out="%PDF-1.5\n%\xE2\xE3\xCF\xD3\n"; const offs=[];
  objs.forEach((o,i)=>{ offs.push(out.length); out+=`${i+1} 0 obj\n${o}\nendobj\n`; });
  const xref=out.length; out+=`xref\n0 ${objs.length+1}\n0000000000 65535 f \n`+offs.map(o=>String(o).padStart(10,"0")+" 00000 n \n").join("");
  out+=`trailer\n<< /Size ${objs.length+1} /Root ${cat} 0 R /Info ${info} 0 R >>\nstartxref\n${xref}\n%%EOF\n`;
  const bytes=new Uint8Array(out.length); for(let i=0;i<out.length;i++) bytes[i]=out.charCodeAt(i)&255; return bytes;
}

function buildWMF(){
  const L=layout(), p=pal(), bg=yarnBy(p,S.bg), bd=S.border==="none"?null:yarnBy(p,S.border);
  const INCH=288, U=INCH/25.4*FILE_SCALE; // same units as the designers' Illustrator WMF export (288 per inch, 1:10)
  const W=Math.round(L.matW*U), H=Math.round(L.matH*U);
  const recs=[]; let maxRec=0;
  const rec=(fn,words)=>{ const size=3+words.length; maxRec=Math.max(maxRec,size); recs.push({size,fn,words}); };
  const s16=v=>{ v=Math.round(v); return v<0? (v+65536)&65535 : v&65535; };
  const color=rgb=>[ (rgb[1]<<8|rgb[0])&65535, rgb[2]&255 ];
  rec(0x0103,[8]); rec(0x020B,[0,0]); rec(0x020C,[s16(H),s16(W)]); rec(0x0106,[1,0]); rec(0x0102,[1]);
  rec(0x02FA,[5,0,0,0,0]); rec(0x012D,[0]); // null pen, select (object 0)
  const fillPolys=(rgb,polys)=>{ if(!polys.length) return; rec(0x02FC,[0,...color(rgb),0]); rec(0x012D,[1]);
    // split into records of <= 8000 points
    let batch=[],n=0; const flush=()=>{ if(!batch.length) return; const w=[batch.length,...batch.map(q=>q.length)]; for(const q of batch) for(const [x,y] of q){ w.push(s16(x),s16(y)); } rec(0x0538,w); batch=[]; n=0; };
    for(const poly of polys){ if(poly.length<3) continue; if(n+poly.length>8000) flush(); batch.push(poly); n+=poly.length; }
    flush(); rec(0x01F0,[1]); };
  const dedupe=pts=>{ const dd=[]; for(const q of pts){ const r=[Math.round(q[0]),Math.round(q[1])]; const l=dd[dd.length-1]; if(!l||l[0]!==r[0]||l[1]!==r[1]) dd.push(r); } return dd; };
  const M=(x,y)=>[x*U,y*U];
  if(bd){ fillPolys(bd.rgb,[dedupe(flattenContour(shapeOutline(L,0),M,2.5))]); fillPolys(bg.rgb,[dedupe(flattenContour(shapeOutline(L,L.bw),M,2.5))]); }
  else fillPolys(bg.rgb,[dedupe(flattenContour(shapeOutline(L,0),M,2.5))]);
  if(L.panel){ const py=yarnBy(p,L.panel.yarn), P=L.panel; if(py) fillPolys(py.rgb,[dedupe([M(P.x,P.y),M(P.x+P.w,P.y),M(P.x+P.w,P.y+P.h),M(P.x,P.y+P.h)])]); }
  const T=(x,y)=>[(L.tx+x*L.k)*U,(L.ty+y*L.k)*U];
  if(!S.plain && S.photo && photoSource()){ // photo: embedded 24-bit bitmap (META_STRETCHDIB)
    const j=photoJPEG(1600,0.92), cx=j.canvas.getContext("2d"), d=cx.getImageData(0,0,j.w,j.h).data, row=(j.w*3+3)&~3, bytes=new Uint8Array(40+row*j.h), bv=new DataView(bytes.buffer);
    bv.setUint32(0,40,true); bv.setInt32(4,j.w,true); bv.setInt32(8,j.h,true); bv.setUint16(12,1,true); bv.setUint16(14,24,true); bv.setUint32(20,row*j.h,true);
    for(let yy=0;yy<j.h;yy++){ const o=40+(j.h-1-yy)*row; for(let xx=0;xx<j.w;xx++){ const p=(yy*j.w+xx)*4; bytes[o+xx*3]=d[p+2]; bytes[o+xx*3+1]=d[p+1]; bytes[o+xx*3+2]=d[p]; } }
    const [x0,y0]=T(S.bbox.x,S.bbox.y), [x1,y1]=T(S.bbox.x+S.bbox.w,S.bbox.y+S.bbox.h);
    const words=[0x0020,0x00CC,0, s16(j.h),s16(j.w),0,0, s16(y1-y0),s16(x1-x0),s16(y0),s16(x0)];
    for(let q=0;q<bytes.length;q+=2) words.push(bytes[q]|((bytes[q+1]||0)<<8));
    rec(0x0F43,words);
  } else if(!S.plain) for(const ly of S.layers){ const polys=[];
    for(const cs of ly.paths) for(const ct of cs) polys.push(dedupe(flattenContour(ct,T,2.5)));
    fillPolys(ly.yarn.rgb,polys); }
  rec(0x01F0,[0]); rec(0x0000,[]);
  const bodyWords=9+recs.reduce((a,r)=>a+r.size,0);
  const buf=new ArrayBuffer(22+bodyWords*2), dv=new DataView(buf); let o=0;
  const u16=v=>{dv.setUint16(o,v,true);o+=2;}, u32=v=>{dv.setUint32(o,v,true);o+=4;};
  u32(0x9AC6CDD7); u16(0); u16(0); u16(0); u16(s16(W)); u16(s16(H)); u16(INCH); u32(0);
  let cs=0; for(let i=0;i<20;i+=2) cs^=dv.getUint16(i,true); u16(cs);
  u16(1); u16(9); u16(0x0300); u32(bodyWords); u16(2); u32(maxRec); u16(0);
  for(const r of recs){ u32(r.size); u16(r.fn); for(const w of r.words) u16(w); }
  return new Uint8Array(buf);
}

function mockupPNG(){
  return new Promise(res=>{ const L=layout(), px=3000/Math.max(L.matW,L.matH);
    const c=document.createElement("canvas"); c.width=Math.round(L.matW*px); c.height=Math.round(L.matH*px);
    drawMat(c.getContext("2d"),px,0,0,"mockup"); c.toBlob(b=>res(b),"image/png"); });
}
/* ZIP (store only) */
const CRC=(()=>{ const t=new Uint32Array(256); for(let n=0;n<256;n++){ let c=n; for(let k=0;k<8;k++) c= c&1? 0xEDB88320^(c>>>1) : c>>>1; t[n]=c>>>0; } return t; })();
function crc32(b){ let c=0xFFFFFFFF; for(let i=0;i<b.length;i++) c=CRC[(c^b[i])&255]^(c>>>8); return (c^0xFFFFFFFF)>>>0; }
function zip(files){
  const enc=new TextEncoder(), parts=[], cen=[]; let off=0;
  for(const f of files){ const name=enc.encode(f.name), data=f.data, crc=crc32(data);
    const h=new DataView(new ArrayBuffer(30)); h.setUint32(0,0x04034b50,true); h.setUint16(4,20,true); h.setUint16(6,0x0800,true); h.setUint16(8,0,true);
    h.setUint16(10,0,true); h.setUint16(12,0x21,true); h.setUint32(14,crc,true); h.setUint32(18,data.length,true); h.setUint32(22,data.length,true); h.setUint16(26,name.length,true); h.setUint16(28,0,true);
    parts.push(new Uint8Array(h.buffer),name,data);
    const c=new DataView(new ArrayBuffer(46)); c.setUint32(0,0x02014b50,true); c.setUint16(4,20,true); c.setUint16(6,20,true); c.setUint16(8,0x0800,true); c.setUint16(10,0,true);
    c.setUint16(12,0,true); c.setUint16(14,0x21,true); c.setUint32(16,crc,true); c.setUint32(20,data.length,true); c.setUint32(24,data.length,true); c.setUint16(28,name.length,true); c.setUint32(42,off,true);
    cen.push(new Uint8Array(c.buffer),name); off+=30+name.length+data.length; }
  const cenSize=cen.reduce((a,b)=>a+b.length,0); const e=new DataView(new ArrayBuffer(22));
  e.setUint32(0,0x06054b50,true); e.setUint16(8,files.length,true); e.setUint16(10,files.length,true); e.setUint32(12,cenSize,true); e.setUint32(16,off,true);
  return new Blob([...parts,...cen,new Uint8Array(e.buffer)],{type:"application/zip"});
}

let downloadsNs; const dlReady=(async()=>{ try{ downloadsNs = window.claude&&window.claude.use ? await window.claude.use("downloads") : null; }catch(_){ downloadsNs=null; } })();
async function saveFile(filename,blob){
  await Promise.race([dlReady,new Promise(r=>setTimeout(r,300))]);
  if(downloadsNs){ try{ await downloadsNs.save({filename,data:blob}); toast("Saved "+filename); }
    catch(e){ const code=e&&e.code; toast(code==="declined"?"Save cancelled.":code==="rate_limited"?"Another save is waiting for your answer.":"Could not save "+filename+(e&&e.message?": "+e.message:"")); } return; }
  const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download=filename; document.body.appendChild(a); a.click(); setTimeout(()=>{URL.revokeObjectURL(a.href); a.remove();},1500);
}
function needLogo(){ if(S.sizeMissing && !(+$("matW").value>0 && +$("matH").value>0)){ toast("Type the mat size first: it was not found on the order."); $("matW").focus(); return true; } S.sizeMissing=false;
  if(S.plain) return false; if(S.photo && S.srcCanvas) return false; if(!S.layers.length){ toast(S.tracing?"Still tracing, try again in a moment.":"Load a logo first."); return true; } return false; }
const fname=ext=>(S.id||"design").replace(/[^\w.-]+/g,"_")+ext;
$("bSvg").onclick=()=>{ if(needLogo())return; saveFile(fname(".svg"),new Blob([buildSVG()],{type:"image/svg+xml"})); };
$("bPdf").onclick=()=>{ if(needLogo())return; saveFile(fname(".pdf"),new Blob([buildPDF()],{type:"application/pdf"})); };
$("bPng").onclick=async()=>{ if(needLogo())return; saveFile(fname("_mockup.png"),await mockupPNG()); };
$("bZip").onclick=async()=>{ if(needLogo())return; const enc=new TextEncoder(), png=new Uint8Array(await (await mockupPNG()).arrayBuffer());
  const files=[{name:fname(".ai"),data:buildPDF()},{name:fname(".wmf"),data:buildWMF()},{name:fname(".svg"),data:enc.encode(buildSVG())},{name:fname("_mockup.png"),data:png},{name:fname("_spec.txt"),data:enc.encode(specText()+"\n")}];
  saveFile(fname("_pack.zip"),zip(files)); };
$("bAi").onclick=()=>{ if(needLogo())return; saveFile(fname(".ai"),new Blob([buildPDF()],{type:"application/postscript"})); };
$("bWmf").onclick=()=>{ if(needLogo())return; saveFile(fname(".wmf"),new Blob([buildWMF()],{type:"image/wmf"})); };

/* ---------- order lookup by design number (needs the Mat Studio launcher, which can read the portal) ---------- */
let apiOk=null, apiPortal=null, apiExt=false;
const apiReady=(location.protocol==="http:"||location.protocol==="https:"||location.protocol==="chrome-extension:")
  ? fetch("api/ping",{cache:"no-store"}).then(r=>r.ok?r.json():null).then(j=>{ apiOk=!!(j&&j.ok); apiPortal=j&&j.portal||null; apiExt=!!(j&&j.ext); if(apiExt){ $("bmBox").hidden=true; $("qFind").textContent="Read portal queue"; $("qZip").textContent="Download all ready"; } if(apiOk) $("aiBtns").hidden=false; return apiOk; }).catch(()=>{ apiOk=false; return false; })
  : Promise.resolve(apiOk=false);
const esc=t=>String(t==null?"":t).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[c]);
function lookupMsg(t){ const m=$("lookupMsg"); m.hidden=!t; m.textContent=t||""; }
function renderOrder(o){
  const card=$("orderCard"); card.hidden=false;
  const rows=o.fields.map(([l,v])=>`<dt>${esc(l)}</dt><dd>${esc(v)||"–"}</dd>`).join("");
  const arts=o.artwork.length? o.artwork.map((a,i)=>`<div class="art"><span>${esc(a.name||a.label)}</span><button type="button" class="btn small" data-art="${i}">Load</button><a href="${esc(a.url)}" target="_blank" rel="noopener">Original</a></div>`).join("") : '<p class="sub">No artwork attached to this order.</p>';
  const sim=o.similar.length? `<p class="sub">Similar designs: ${o.similar.map(x=>`<a href="${esc(x.url)}" target="_blank" rel="noopener">${esc(x.label||x.url)}</a>`).join(", ")}</p>` : "";
  card.innerHTML=`<div><h3>${esc(o.number)} · ${esc(o.name)}</h3><div class="sub">${esc(o.product)}</div><div class="sub">${esc(o.customer)}${o.account?" · account "+esc(o.account):""}</div></div>
    <dl>${rows}</dl>${o.special&&!/^none\.?$/i.test(o.special)?`<div class="sp"><b>Special instructions:</b> ${esc(o.special)}</div>`:""}
    <div><b>Customer artwork</b>${arts}</div>${sim}<a href="${esc(o.url)}" target="_blank" rel="noopener">Open in the portal</a>`;
  card.querySelectorAll("[data-art]").forEach(b=>b.onclick=()=>loadArtwork(o.artwork[+b.dataset.art]));
}
async function loadArtwork(a){
  busy("Downloading "+(a.name||"artwork")+"…");
  try{ const r=await fetch("api/file?u="+encodeURIComponent(a.url)); if(!r.ok){ const j=await r.json().catch(()=>({})); throw new Error(j.error||("HTTP "+r.status)); }
    const blob=await r.blob(); busy(null); await loadFromBlob(blob,a.name||"artwork"); }
  catch(e){ busy(null); lookupMsg("Artwork: "+e.message+" Use “Original” to download it, then drop it in."); }
}
/* Read the portal's "NEW Design Instructions" page: a column of labels ("Size:") beside a column of values. */
function parseOrderHtml(htmlText,n){
  const d=new DOMParser().parseFromString(htmlText,"text/html"), base=apiPortal||"https://designupload.logomatsllc.com";
  d.querySelectorAll("[data-cfemail]").forEach(e=>{ const h=e.getAttribute("data-cfemail"), k=parseInt(h.slice(0,2),16); let t=""; for(let i=2;i<h.length;i+=2) t+=String.fromCharCode(parseInt(h.slice(i,i+2),16)^k); e.textContent=t; });
  d.querySelectorAll("script,style").forEach(e=>e.remove());
  d.querySelectorAll("p,div,h1,h2,h3,h4,h5,h6,li,br,tr").forEach(e=>{ e.insertAdjacentText("beforebegin","\n"); e.insertAdjacentText("afterend","\n"); });
  const clean=t=>String(t||"").replace(/\s*\n\s*/g,"\n").replace(/[ \t ]+/g," ").trim();
  const lines=clean(d.body?d.body.textContent:"").split("\n").map(l=>l.trim()).filter(Boolean);
  if(!lines.some(l=>/Design Instructions|Design Number/i.test(l))) throw new Error("The portal has no order "+n+".");
  const after=label=>{ const re1=new RegExp("^"+label+"\\s*:?$","i"), re2=new RegExp("^"+label+"\\s*:\\s*(.+)$","i");
    for(let i=0;i<lines.length;i++){ if(re1.test(lines[i]) && i+1<lines.length) return lines[i+1]; const m=lines[i].match(re2); if(m) return m[1].trim(); } return ""; };
  const fields=[]; let fieldsGuessed=false;
  for(const box of d.querySelectorAll("div")){ const ps=[...box.children].filter(c=>c.tagName==="P"), labels=ps.map(p=>clean(p.textContent));
    if(labels.length>=3 && labels.every(l=>l.endsWith(":")) && labels.some(l=>/^(size|background colou?r|style)\s*:/i.test(l))){ /* the order details, not the customer block (Name, Email, Account) */ const nx=box.nextElementSibling, vals=nx? [...nx.children].filter(c=>c.tagName==="P").map(p=>clean(p.textContent).replace(/\n/g," ")) : [];
      const L=labels.map(l=>l.replace(/:$/,"").trim());
      if(vals.length===L.length) L.forEach((l,j)=>fields.push([l,vals[j]]));
      else { // the portal leaves blank values out: place each value by what it looks like
        const got={}, rest=[];
        for(const v of vals){ const k= /\d\s*cm\s*[x×]/i.test(v)&&!got["Size"]? "Size" : /-->|landscape|portrait/i.test(v)? "Style" : /^(square|round)/i.test(v)? "Mat Corner" : /border/i.test(v)? "Border" : (/^\d+([.,]\d+)?\s*(cm)?\s*[x×]\s*\d/i.test(v)||/^none$/i.test(v))&&!got["Size Note"]? "Size Note" : null;
          if(k && L.includes(k) && !got[k]) got[k]=v; else rest.push(v); }
        const open=L.filter(l=>!got[l]); rest.forEach((v,j)=>{ const l=open[open.length-rest.length+j]; if(l) got[l]=v; });
        L.forEach(l=>fields.push([l,got[l]||""])); fieldsGuessed=true; }
      break; } }
  let special="";
  for(const p of d.querySelectorAll("p")){ if(/^Special Instructions\s*:?$/i.test(clean(p.textContent)) && p.parentElement){ special=clean(p.parentElement.textContent).replace(/^Special Instructions\s*:?\s*/i,"").replace(/\n/g," "); break; } }
  const artwork=[], similar=[];
  for(const a of d.querySelectorAll("a[href]")){ let href; try{ href=new URL(a.getAttribute("href"),base+"/").href; }catch(e){ continue; }
    const label=clean(a.textContent);
    if(/\/attachment\//.test(href)){ const segs=href.replace(/\/+$/,"").split("/"), seg=decodeURIComponent(/download$/i.test(segs[segs.length-1])? segs[segs.length-2] : segs[segs.length-1]);
      artwork.push({label, name:seg.replace(/_[0-9a-fA-F-]{36}$/,""), url:href}); }
    else if(/designNumber=\d+/i.test(href) && !href.includes("designNumber="+n)) similar.push({label, url:href}); }
  const product=lines.find(l=>/^\d+\s*-\s*.*(impression|colou?r\s*star|promo|scrape)/i.test(l))||"";
  const o={number:after("NEW Design Number")||String(n), name:after("Design Name"), customer:after("Name"), email:after("Email"), account:after("Customer Account #"),
    product, fields, fieldsGuessed, special, artwork, similar, url:base+"/Design/ViewDesignHtml?designNumber="+n};
  o.text=["NEW Design Number: "+o.number,"Design Name: "+o.name,product,...fields.map(([l,v])=>l+": "+v),"Special Instructions: "+(special||"None")].join("\n");
  return o;
}
async function lookupOrder(n){
  n=String(n).replace(/\D/g,""); if(!n){ lookupMsg("Type a sketch / design number."); return; }
  await apiReady;
  if(!apiOk){ lookupMsg("Looking up orders works when the studio is opened from the Mat Studio launcher on your computer (the portal does not let other websites read it). Here, paste the order page text below instead."); $("pasteBox").open=true; return; }
  lookupMsg("Reading order "+n+"…"); $("bGo").disabled=true;
  try{ const r=await fetch("api/page?n="+n,{cache:"no-store"});
    if(r.status===403 || r.status===502){ // the portal only lets a real browser in: open the order there, the bookmark sends it back
      window.open(PORTAL_ORDER+n,"_blank");
      lookupMsg("The order is opening in a new tab. When it has loaded, click the “Send to Mat Studio” bookmark there."+(hasBookmark()?"":" (First time: add the bookmark, steps below.)"));
      $("bmBox").open=!hasBookmark(); return; }
    if(!r.ok){ const j=await r.json().catch(()=>({})); throw new Error(j.error||("HTTP "+r.status)); }
    await useOrder(parseOrderHtml(await r.text(),n));
  }catch(e){ lookupMsg(e.message); }
  finally{ $("bGo").disabled=false; }
}
const PORTAL_ORDER="https://designupload.logomatsllc.com/Design/ViewDesignHtml?designNumber=";
const ART_PREF=[/no-?effects/i,/reviewed/i];
async function useOrder(o){
  lookupMsg(o.fieldsGuessed? "Some fields are blank on the portal page: check size and colours below." : ""); $("lookupNo").value=o.number;
  renderOrder(o); $("orderText").value=o.text; fillFromOrder(o.text);
  if(!o.artwork.length){ toast("Order filled. No artwork attached: plain mat or add the logo by hand."); return; }
  // approval forms and proofs of an earlier mat are not the logo: use them only when nothing else is attached
  const PROOF=/approv|proof|visual|mock-?up|quotation|invoice|\bform\b/i, arts=o.artwork.filter(x=>!PROOF.test(x.name)), pool=arts.length?arts:o.artwork;
  if(arts.length<o.artwork.length) toast("Skipped "+(o.artwork.length-arts.length)+" approval/proof file(s); use Load to pick one.");
  let a=pool[0]; for(const re of ART_PREF){ const m=pool.find(x=>re.test(x.name)); if(m){ a=m; break; } }
  const vec=pool.find(x=>/\.(pdf|ai|svg)$/i.test(x.name)); if(vec) a=vec;
  if(!apiOk){ lookupMsg("Order filled. Download the artwork with “Original” and drop it in."); return; }
  if(!vec && pool.length>1){ // several pictures: use the sharpest (most pixels), like the designers pick the best file
    busy("Comparing "+pool.length+" artwork files…"); let best=null,bp=0;
    for(const x of pool){ try{ const r=await fetch("api/file?u="+encodeURIComponent(x.url)); if(!r.ok) continue; const b=await r.blob();
      const px=await new Promise(res=>{ const im=new Image(); im.onload=()=>{ res(im.naturalWidth*im.naturalHeight); URL.revokeObjectURL(im.src); }; im.onerror=()=>res(0); im.src=URL.createObjectURL(b); });
      if(px>bp){ bp=px; best={x,b}; } }catch(e){} }
    busy(null); if(best){ lookupMsg(pool.length+" artwork files: using "+best.x.name+" (sharpest). Use Load to pick another."); await loadFromBlob(best.b,best.x.name); return; } }
  await loadArtwork(a);
}
function hasBookmark(){ try{ return localStorage.getItem("matstudio.bm")==="1"; }catch(e){ return false; } }
/* The bookmark runs on the portal page (where the browser is already let in) and hands the page to this studio. */
function bookmarkCode(){
  const target=location.origin+location.pathname;
  // on the queue page it sends the list of sketches; on an order page it sends that order
  return "javascript:(function(){if(/ViewQueue/i.test(location.pathname)){var r=[],a=document.querySelectorAll('a[href*=\"designNumber=\"]');"
    +"for(var i=0;i<a.length;i++){var m=a[i].href.match(/designNumber=(\\d+)/),u=a[i].closest('ul'),c=u?u.children:[],t=function(k){return c[k]?c[k].textContent.trim():'';};if(m)r.push([m[1],t(2),t(3),t(4),t(5)]);}"
    +"if(!r.length){alert('No sketches in the queue.');return;}window.open('"+target+"#queue='+encodeURIComponent(JSON.stringify(r)),'matstudio');return;}"
    +"var m=location.search.match(/designNumber=(\\d+)/);if(!m||!/Design Number/i.test(document.body.innerText)){alert('Open the design queue or a NEW Design Instructions page first.');return;}"
    +"window.open('"+target+"#portal='+m[1]+'&html='+encodeURIComponent(document.documentElement.outerHTML),'matstudio');})();";
}
async function readHash(){
  const h=location.hash;
  if(h==="#autoqueue"){ history.replaceState(null,"",location.pathname+location.search); await apiReady; $("queue").open=true; await qFind(); if(Q.items.some(i=>i.status==="new")) await qRunAll(); return; }
  if(h.startsWith("#queue=")){ history.replaceState(null,"",location.pathname+location.search);
    try{ localStorage.setItem("matstudio.bm","1"); }catch(e){}
    let rows=[]; try{ rows=JSON.parse(decodeURIComponent(h.slice(7))); }catch(e){ return; }
    await apiReady; qFromPortal(rows); return; }
  if(!h.startsWith("#portal=")) return;
  const p=new URLSearchParams(h.slice(1)), n=p.get("portal"), html=p.get("html");
  history.replaceState(null,"",location.pathname+location.search);
  if(!n||!html) return;
  try{ localStorage.setItem("matstudio.bm","1"); }catch(e){}
  await apiReady;
  try{ await useOrder(parseOrderHtml(html,n)); }catch(e){ lookupMsg(e.message); }
}
window.addEventListener("hashchange",readHash);
/* ---------- order queue: find new sketch numbers, design them one after another, list them for review ---------- */
const Q={items:[], files:new Map(), running:false, timer:null}, QKEY="matstudio.queue";
function qMsg(t){ $("qMsg").textContent=t; }
function qLoad(){ try{ const j=JSON.parse(localStorage.getItem(QKEY)||"{}"); Q.items=(j.items||[]).map(i=>Object.assign(i, i.status==="designing"?{status:"new"}:{})); if(j.next) $("qFrom").value=j.next; }catch(e){} }
function qSave(){ try{ localStorage.setItem(QKEY,JSON.stringify({items:Q.items.slice(-200), next:$("qFrom").value})); }catch(e){} }
function qItem(n){ let it=Q.items.find(i=>i.n===n); if(!it){ it={n, status:"new", name:"", note:""}; Q.items.push(it); } return it; }
const Q_LABEL={new:"new", designing:"designing…", ready:"ready", check:"check", failed:"failed", done:"done"};
function qRender(){
  const g=$("qGrid"); g.innerHTML="";
  for(const it of [...Q.items].reverse()){ const f=Q.files.get(it.n), c=document.createElement("div"); c.className="qcard"+(it.status==="done"?" isdone":"");
    c.innerHTML=`<div class="qimg">${f&&f.thumb?`<img alt="Proof for ${esc(it.n)}" src="${f.thumb}">`:(it.status==="designing"?"designing…":"no proof yet")}</div>
      <h4>${esc(it.n)} <span title="${esc(it.name||"")}">${esc(it.name||"")}</span></h4>${it.style||it.division?`<div class="hint">${esc([it.style,it.division,it.date].filter(Boolean).join(" · "))}</div>`:""}
      <div><span class="qst ${it.status}">${Q_LABEL[it.status]||it.status}</span> <span class="hint">${esc(it.size||"")}</span></div>
      <div class="qnote">${esc(it.note||"")}</div>
      <div class="qbtns"><button type="button" class="btn" data-q="open">Open</button>${f&&f.ai?`<button type="button" class="btn" data-q="ai">.ai</button><button type="button" class="btn" data-q="wmf">.wmf</button>`:`<button type="button" class="btn" data-q="redo"${Q.running?" disabled":""}>Design</button>`}
      <a class="btn" href="${esc((apiPortal||"https://designupload.logomatsllc.com")+"/Design/Upload/"+it.n)}" target="_blank" rel="noopener">Upload</a><button type="button" class="btn" data-q="done">${it.status==="done"?"Undo done":"Done"}</button><button type="button" class="btn" data-q="del" aria-label="Remove ${esc(it.n)} from the list">×</button></div>`;
    c.querySelectorAll("[data-q]").forEach(b=>b.onclick=()=>qAction(it,b.dataset.q)); g.appendChild(c); }
  $("qRun").disabled=Q.running; $("qFind").disabled=Q.running;
}
async function qAction(it,a){
  const f=Q.files.get(it.n);
  if(a==="open"){ window.scrollTo({top:0,behavior:"smooth"}); $("lookupNo").value=it.n; await lookupOrder(it.n); }
  else if(a==="ai"&&f) saveFile(it.n+".ai",new Blob([f.ai],{type:"application/postscript"}));
  else if(a==="wmf"&&f) saveFile(it.n+".wmf",new Blob([f.wmf],{type:"image/wmf"}));
  else if(a==="redo"){ it.status="new"; await qRunAll([it]); }
  else if(a==="done"){ it.status= it.status==="done" ? (f&&f.ai?(it.note?"check":"ready"):"new") : "done"; }
  else if(a==="del"){ Q.items=Q.items.filter(x=>x!==it); Q.files.delete(it.n); }
  qSave(); qRender();
}
async function qFind(){
  await apiReady;
  if(apiExt && !$("qList").value.trim()){ qMsg("Reading the portal's design queue…");
    try{ const r=await fetch("api/queue",{cache:"no-store"}); const j=await r.json(); if(!r.ok) throw new Error(j.error||("HTTP "+r.status));
      const before=Q.items.length; qFromPortal(j.rows, true); return Q.items.length-before; }
    catch(e){ qMsg(e.message); return 0; } }
  if(!apiOk){ qMsg("The queue needs the studio opened from Mat Studio (the hosted link or the launcher)."); return 0; }
  const listed=($("qList").value.match(/\d{6,10}/g)||[]);
  let found=0;
  if(listed.length){ for(const n of listed){ if(!Q.items.some(i=>i.n===n)){ qItem(n); found++; } } $("qList").value=""; qMsg(found+" sketch number(s) added."); qSave(); qRender(); return found; }
  const from=parseInt($("qFrom").value,10), count=+$("qCount").value;
  if(!(from>0)){ qMsg("Type the number to scan from (the next sketch number you expect), or paste a list."); $("qFrom").focus(); return 0; }
  qMsg("Looking at "+from+"–"+(from+count-1)+" on the portal…"); $("qFind").disabled=true;
  try{ const r=await fetch(`api/scan?from=${from}&count=${count}`,{cache:"no-store"});
    if(r.status===404){ qMsg("This launcher can't scan the portal. Paste the sketch numbers instead, or use the hosted link or the Python launcher."); return 0; }
    const j=await r.json(); if(!r.ok) throw new Error(j.error||("HTTP "+r.status));
    if(j.blocked){ qMsg("The portal blocked "+j.blocked+" of the look-ups (Cloudflare). Paste the sketch numbers instead."); }
    let last=0; for(const x of j.results){ if(!x.ok) continue; last=Math.max(last,+x.n); if(!Q.items.some(i=>i.n===x.n)){ const it=qItem(x.n); it.name=x.name; if(!x.artwork) it.note="No artwork attached"; found++; } }
    // next scan starts after the last order found; if nothing was found, keep the start so newer orders are not skipped
    if(last) $("qFrom").value=String(last+1);
    if(!j.blocked) qMsg(found? found+" new order(s) found. Press “Design all new”." : "No new orders between "+from+" and "+(from+count-1)+".");
  }catch(e){ qMsg("Scan failed: "+e.message); }
  finally{ $("qFind").disabled=Q.running; qSave(); qRender(); }
  return found;
}
function qWait(ms){ return new Promise(r=>setTimeout(r,ms)); }
async function qWaitDesigned(limit){ const t0=Date.now(); let ok=0;
  while(Date.now()-t0<limit){ await qWait(300);
    const done=S.srcName && $("busy").hidden && !S.tracing && (S.layers.length>0 || S.photo || S.plain);
    ok= done? ok+1 : 0; if(ok>=3) return true; }
  return false; }
async function qDesign(it){
  it.status="designing"; it.note=""; qRender();
  S.layers=[]; S.srcName=""; S.plain=false;
  const r=await fetch("api/page?n="+it.n,{cache:"no-store"});
  if(!r.ok) throw new Error(r.status===403?"portal blocked the look-up":"portal error "+r.status);
  const o=parseOrderHtml(await r.text(),it.n); it.name=o.name;
  const notes=[];
  await useOrder(o);
  it.size=S.sizeMissing?"size missing":`${S.w} × ${S.h} cm`;
  if(!o.artwork.length){ it.status="check"; it.note="No artwork attached: plain mat or add the logo by hand."; return; }
  if(!(await qWaitDesigned(120000))) throw new Error("design took too long");
  if(S.sizeMissing) notes.push("Size missing on the order: type it, then download.");
  if(o.fieldsGuessed) notes.push("Some order fields were blank: check size and colours.");
  if(o.special && !/^none\.?$/i.test(o.special.trim())) notes.push("Has special instructions: “"+o.special.slice(0,90)+(o.special.length>90?"…":"")+"”");
  if(S.bgNote) notes.push(S.bgNote);
  const L=layout(), px=Math.min(1.2, 420/Math.max(L.matW,L.matH)), c=document.createElement("canvas");
  c.width=Math.max(1,Math.round(L.matW*px)); c.height=Math.max(1,Math.round(L.matH*px)); drawMat(c.getContext("2d"),px,0,0,"proof");
  const f={thumb:c.toDataURL("image/png")};
  if(!S.sizeMissing){ f.ai=buildPDF(); f.wmf=buildWMF(); }
  Q.files.set(it.n,f); it.note=notes.join(" "); it.status=notes.length?"check":"ready";
  if(window.matstudioSeen) window.matstudioSeen(it.n);
}
async function qRunAll(list){
  if(Q.running) return; Q.running=true; qRender();
  const todo=(list||Q.items.filter(i=>i.status==="new"||i.status==="failed"));
  let n=0; for(const it of todo){ n++; qMsg(`Designing ${it.n} (${n} of ${todo.length})…`);
    try{ await qDesign(it); }catch(e){ it.status="failed"; it.note=e.message||String(e); }
    qSave(); qRender(); }
  Q.running=false; qRender();
  const rd=Q.items.filter(i=>i.status==="ready").length, ck=Q.items.filter(i=>i.status==="check").length;
  qMsg(todo.length? `Finished: ${rd} ready, ${ck} to check. Open each proof to review it before uploading.` : "Nothing new to design.");
}
/* The portal's design queue (behind its log-in) arrives from the bookmark: add new sketches, retire ones that left the queue, design the new ones. */
function qFromPortal(rows,noRun){
  const nums=new Set(); let added=0;
  for(const [n,name,style,date,div] of rows){ if(!/^\d{4,10}$/.test(n)) continue; nums.add(n);
    let it=Q.items.find(i=>i.n===n); if(!it){ it=qItem(n); added++; } Object.assign(it,{name:it.name||name, style, date, division:div, fromQueue:true}); }
  let gone=0; for(const it of Q.items) if(it.fromQueue && !nums.has(it.n) && it.status!=="done" && it.status!=="designing"){ it.status="done"; it.note="No longer in the portal queue (uploaded)."; gone++; }
  $("queue").open=true; qSave(); qRender(); window.scrollTo({top:0,behavior:"smooth"});
  qMsg(`${nums.size} sketches in the portal queue: ${added} new${gone?", "+gone+" left the queue":""}.`+(added&&!noRun?" Designing the new ones…":""));
  if(added && !noRun) qRunAll();
}
$("qFind").onclick=qFind;
$("qRun").onclick=()=>qRunAll();
$("qZip").onclick=async()=>{ if(apiExt){ let k=0; for(const it of Q.items){ const f=Q.files.get(it.n); if(f&&f.ai&&it.status!=="done"&&!f.saved){ await saveFile(it.n+".ai",new Blob([f.ai])); await saveFile(it.n+".wmf",new Blob([f.wmf])); f.saved=true; k++; } }
    qMsg(k? k+" design(s) saved to Downloads/MatStudio." : "Nothing new to download."); return; }
  const files=[]; for(const it of Q.items){ const f=Q.files.get(it.n); if(f&&f.ai&&it.status!=="done"){ files.push({name:it.n+".ai",data:f.ai},{name:it.n+".wmf",data:f.wmf}); } }
  if(!files.length){ qMsg("No designed proofs to download yet."); return; } saveFile("mat-studio-queue.zip",zip(files)); };
$("qAuto").onchange=e=>{ clearInterval(Q.timer); Q.timer=null; if(e.target.checked){ const tick=async()=>{ if(Q.running) return; await qFind(); if(Q.items.some(i=>i.status==="new")) await qRunAll(); }; Q.timer=setInterval(tick,10*60*1000); tick(); } };
qLoad(); qRender(); if(Q.items.length) $("queue").open=true;

$("bmCopy").onclick=()=>{ const code=bookmarkCode();
  navigator.clipboard.writeText(code).then(()=>toast("Bookmark copied. Now add it to the bookmarks bar (steps below)."),()=>{ const t=document.createElement("textarea"); t.value=code; document.body.appendChild(t); t.select(); try{ document.execCommand("copy"); toast("Bookmark copied. Now add it to the bookmarks bar (steps below)."); }catch(e){ toast("Copy failed: select the text in the box and press Ctrl+C."); } t.remove(); }); };
try{ if(!window.name) window.name="matstudio"; }catch(e){}
readHash();
$("lookup").addEventListener("submit",e=>{ e.preventDefault(); lookupOrder($("lookupNo").value); });
{ const q=new URLSearchParams(location.search).get("design"); if(q){ $("lookupNo").value=q; lookupOrder(q); } }
$("bCopy").onclick=()=>{ const t=specText(); navigator.clipboard.writeText(t).then(()=>toast("Colour spec copied"),()=>{ const r=document.createRange(); r.selectNodeContents($("spec")); const s=getSelection(); s.removeAllRanges(); s.addRange(r); toast("Press Ctrl+C to copy the selected spec"); }); };

/* ---------- fill from the order page ---------- */
function findYarn(p,text){
  if(!text) return null; const t=text.trim().toLowerCase().replace(/\s+/g," "); if(!t) return null; const Y=YARNS[p], first=t.split(" ")[0];
  return Y.find(y=>y.label.toLowerCase()===t) || Y.find(y=>y.code.toLowerCase()===first && /\d/.test(first)) || Y.find(y=>y.name && y.name.toLowerCase()===t) || Y.find(y=>y.name && t.includes(y.name.toLowerCase())) || null;
}
/* Yarn codes written in free text: "c11", "C5", "J01", "B8", "394 Champagne". Letter codes are matched anywhere;
   plain numbers (Classic Impression) only when the yarn's name follows or a colour word comes before. */
function findCodes(p,text){
  const out=[], seen=new Set(), Y=YARNS[p]; if(!text) return out;
  const norm=c=>{ const m=String(c).toUpperCase().match(/^([A-Z]{0,2})0*(\d+)$/); return m? m[1]+"|"+(+m[2]) : null; };
  const byCode=new Map(); for(const y of Y){ const k=norm(y.code.replace(/\(.*$/,"")); if(k && !y.manual && !byCode.has(k)) byCode.set(k,y); }
  const re=/(^|[^A-Za-z0-9])([A-Za-z]{1,2})\s?0*(\d{1,3})(?![\dA-Za-z])|(^|[^A-Za-z0-9.,])(\d{3})(?![\d.,]|\s*(?:cm|mm|m\b|x))/g; let m;
  while((m=re.exec(text))){
    let y=null;
    if(m[2]){ y=byCode.get(m[2].toUpperCase()+"|"+(+m[3])); }
    else { const cand=byCode.get("|"+(+m[5])); if(cand){ const after=text.slice(m.index+m[0].length, m.index+m[0].length+24).toLowerCase(), before=text.slice(Math.max(0,m.index-24), m.index).toLowerCase();
        if(after.trim().startsWith(cand.name.toLowerCase().split(" ")[0]) || /colou?r|couleur|farbe|kleur|color|fond|logo|texte?/.test(before)) y=cand; } }
    if(y && !seen.has(y.label)){ seen.add(y.label); out.push({yarn:y, at:m.index}); }
  }
  // yarns written by name ("cool anthracite" = F03 Cool Anthracite); the longest name wins, so "anthracite" alone
  // doesn't also match. One-word everyday colour names count only next to a colour word.
  const low=" "+text.toLowerCase().replace(/[^a-z0-9à-ÿ]+/g," ")+" ", colourCtx=/colou?r|couleur|farbe|kleur|fond|background|logo|text|mat\b/i.test(text);
  const named=Y.filter(y=>!y.manual && y.name && y.name.length>=3).map(y=>({y,n:" "+y.name.toLowerCase().replace(/[^a-z0-9à-ÿ]+/g," ").trim()+" "}))
    .filter(o=>low.includes(o.n) && (o.n.trim().includes(" ") || colourCtx)).sort((a,b)=>b.n.length-a.n.length);
  const used=[];
  for(const o of named){ const at=low.indexOf(o.n); if(used.some(([a,b])=>at<b && at+o.n.length>a)) continue; used.push([at,at+o.n.length]);
    if(!seen.has(o.y.label)){ seen.add(o.y.label); out.push({yarn:o.y, at:Math.max(0,at-1)}); } }
  return out.sort((a,b)=>a.at-b.at);
}
const BG_WORDS=/(colou?r preference|preferred colou?r|mat colou?r|colou?r of the mat|couleur du tapis|farbe der matte|fond|background|\bbg\b|hintergrund|fondo|fundo|achtergrond|pozad|háttér|hatter|tło|tlo|sfondo|bakgrund|baggrund|tausta|grund)/i;
const LOGO_WORDS=/(logo|texte?|text|schrift|lettering|letters|tekst|testo|texto|písmo|felirat|napis|szöveg)/i;
function readSpecial(p,sp){
  const res={bg:null, logo:[], shape:null, photo:false, keepAll:false, edgeCm:null, notes:[]}; if(!sp) return res;
  { const m=sp.match(/(\d+(?:[.,]\d+)?)\s*cm\s*(?:du|de|des|from(?: the)?|vom|van|dal|of(?: the)?)?\s*(?:bord|edge|border|rand|kant|bordo|margin|marge)/i) || sp.match(/(?:margin|marge|bord|edge|rand|abstand)\D{0,20}(\d+(?:[.,]\d+)?)\s*cm/i);
    if(m){ const v=parseFloat(m[1].replace(",",".")); if(v>0 && v<60){ res.edgeCm=v; res.notes.push("Margin "+v+" cm from the edge (from instructions)."); } } }
  const clauses=sp.split(/\n|\/(?![\d])|;|\.(?=\s)/).map(c=>c.trim()).filter(Boolean);
  for(const cl of clauses){ const codes=findCodes(p,cl); if(!codes.length) continue;
    const bgPos=cl.search(BG_WORDS), lgPos=cl.search(LOGO_WORDS);
    if(bgPos>=0 && lgPos>=0){ // both named: each colour belongs to the word right after it ("grey on a light ash background") or else the last word before it
      const kw=[]; for(const [re,t] of [[new RegExp(BG_WORDS.source,"gi"),"bg"],[new RegExp(LOGO_WORDS.source,"gi"),"logo"]]){ let m; while((m=re.exec(cl))) kw.push({at:m.index,t}); }
      kw.sort((a,b)=>a.at-b.at);
      for(const c of codes){ const nx=kw.find(k=>k.at>c.at && k.at-c.at<30 && !/[,;:]/.test(cl.slice(c.at,k.at)) && !codes.some(o=>o!==c && o.at>c.at && o.at<k.at)), pv=[...kw].reverse().find(k=>k.at<c.at), t=(nx||pv||{t:"logo"}).t;
        if(t==="bg" && !res.bg) res.bg=c.yarn; else res.logo.push(c.yarn); } }
    else if(bgPos>=0){ res.bg=res.bg||codes[0].yarn; codes.slice(1).forEach(c=>res.logo.push(c.yarn)); }
    else codes.forEach(c=>res.logo.push(c.yarn)); }
  const t=sp.toLowerCase();
  if(/(half|1\/2|demi|halb|halv|semi)[^a-z]{0,3}\s*(round|rond|rund|circle|cercle|kreis|cirkel)|\barche?\b|\bbogen\b|\bdome\b|dôme/.test(t)) res.shape="arch";
  else if(/\b(ovale?|ovaal|oválne|ovális)\b/.test(t)) res.shape="oval";
  else if(/\b(circle|circular|round mat|rond|runde?|kreis|cirkel|kör|kruh)\b|diameter|diamètre|durchmesser|(^|\s)ø\s*\d/.test(t) && !/round(ed)?\s+corner/.test(t)) res.shape="circle";
  if(/photo\s*-?\s*realisti|photoréalist|fotorealist|as a photo|print the photo/.test(t)) res.photo=true;
  if(/(do not|don't|dont|please don't)\s+(remove|delete|leave out)|include all|keep all|nothing removed|alle (texte|details)|nichts (weg|entfern)/.test(t)) res.keepAll=true;
  const old=t.match(/old mat\s*:?\s*(\d{6,})|re-?order|same (design )?as (before|last|old)|wie (die |das )?(alte|letzte)/); if(old) res.notes.push("Reorder"+(old[1]?" of mat "+old[1]:"")+": check the previous design first.");
  return res;
}
function fillFromOrder(txt){
  if(!txt.trim()){ toast("Paste the order page text first."); return; }
  const line=label=>{ const m=txt.match(new RegExp("(?:^|\\n)[ \\t]*"+label+"[ \\t]*:?[ \\t]*([^\\n]*)(?:\\n[ \\t]*([^\\n]*))?","i")); if(!m) return null;
    const v=m[1].trim(); if(v) return v; const nx=(m[2]||"").trim(); return nx && !/^[A-Za-z ]{2,24}:/.test(nx) ? nx : ""; };
  const num=v=>parseFloat(String(v).replace(",","."));
  const done=[], missed=[];
  // every order starts from a clean slate
  S.edgeCm=null; S.innerPanel=null; S.bgLocked=false; S.bgSrc=null; S.bgOrder=null; S.photoReq=false; S.photoUser=false; S.logoSet=[]; S.logoYarn="auto"; S.photo=false; S.keepAll=false; S.orderNotes=[]; S.corner="square"; $("corner").value="square";
  S.minDetail=3; $("minDetail").value=3; const ph0=$("photoMode"); if(ph0) ph0.checked=false;
  const id=(txt.match(/Design Number\s*:?\s*(\d{4,})/i)||txt.match(/Design Number[\s\S]{0,60}?\b(\d{6,8})\b/i)||[])[1]; if(id){ S.id=id; $("designId").value=id; done.push("design "+id); } else missed.push("design ID");
  const prod=(txt.match(/^[ \t]*\d+\s*-\s*(.*(?:impression|colou?r\s*star|promo|scrape).*)$/im)||[])[1]||"";
  let st=null; if(/promo|scrape/i.test(prod)) st="promoscrape"; else if(/colou?r\s*star/i.test(prod)) st=/\bHD\b/i.test(prod)?"colorstar_hd":"colorstar"; else if(/impression/i.test(prod)) st="classic";
  if(st){ S.style=st; $("style").value=st; fillYarnSelects(); done.push(STYLES[st].label); } else missed.push("style");
  // sizes come as "115cm x 200cm", "120 x 65 cm", "1200x650mm", "1,20 m x 0,65 m", "120cm (W) x 65cm (H)"...
  const parseSize=t=>{ if(!t) return null; const m=String(t).match(/(\d+(?:[.,]\d+)?)\s*(mm|cm|m(?![a-wyz]))?[^\dx×X*]{0,12}?\s*(?:x|×|X|\*|by)\s*(\d+(?:[.,]\d+)?)\s*(mm|cm|m(?![a-z]))?/i); if(!m) return null;
    const u=(m[2]||m[4]||"cm").toLowerCase(), k=u==="mm"?0.1:u==="m"?100:1; let a=num(m[1])*k, b=num(m[3])*k;
    if(u==="cm" && !m[2] && !m[4] && a<=5 && b<=5){ a*=100; b*=100; } // "1.2 x 0.65" = metres
    return a>0&&b>0? [a,b] : null; };
  let w=0,h=0; const s1=parseSize(line("Size")); if(s1){ [w,h]=s1; }
  if(!(w>0&&h>0)){ const s2=parseSize(line("Size Note")); if(s2){ [w,h]=s2; } }
  if(w>0&&h>0){ const o=line("Style")||""; if(/landscape/i.test(o)){ [w,h]=[Math.max(w,h),Math.min(w,h)]; } else if(/portrait/i.test(o)){ [w,h]=[Math.min(w,h),Math.max(w,h)]; }
    S.sizeMissing=false; $("matW").classList.remove("need"); $("matH").classList.remove("need"); S.w=Math.round(w*10)/10; S.h=Math.round(h*10)/10; $("matW").value=S.w; $("matH").value=S.h; $("preset").value=PRESETS.some(([a,b])=>a===S.w&&b===S.h)?S.w+"x"+S.h:""; done.push(S.w+" × "+S.h+" cm"); }
  else { missed.push("SIZE — type the mat size by hand"); $("matW").value=""; $("matH").value=""; $("preset").value=""; S.sizeMissing=true; $("matW").classList.add("need"); $("matH").classList.add("need"); toast("Mat size not found on the order: type it in Width / Height."); }
  const cn=line("Mat Corner"); if(cn){ S.corner=/round/i.test(cn)?"rounded":"square"; $("corner").value=S.corner; }
  const p=pal();
  const bgT=line("Background Colou?r"), bgY=findYarn(p,bgT); if(bgY){ S.bg=bgY.label; S.bgLocked=true; S.bgSrc="order"; S.bgOrder=bgY.label; done.push("background "+bgY.label); } else if(bgT) missed.push("background \""+bgT+"\"");
  const bdT=line("Border"); if(bdT!==null){ const bdY=/without|^no\b|none/i.test(bdT)||!bdT? null : findYarn(p,bdT); S.border=bdY?bdY.label:"none"; if(bdT && !bdY && !/without|^no\b|none/i.test(bdT)) missed.push("border \""+bdT+"\""); }
  const lgT=line("Logo Colou?r"); const lgCodes=findCodes(p,lgT).map(c=>c.yarn); const lgY=lgCodes.length?null:findYarn(p,lgT);
  S.logoSet=[]; S.logoYarn="auto";
  if(lgCodes.length>1){ S.logoSet=lgCodes.map(y=>y.label); S.logoYarn="set"; done.push("logo "+S.logoSet.join(" + ")); }
  else if(lgCodes.length===1||lgY){ S.logoYarn=(lgCodes[0]||lgY).label; done.push("logo "+S.logoYarn); }
  else if(lgT) missed.push("logo colour \""+lgT+"\"");
  // Special Instructions: colour codes, shape, photo and "keep everything" requests, in any language
  const spRaw=(txt.match(/Special Instructions\s*:?\s*([\s\S]*?)(?:\n\s*(?:Download Links|Click to download|Similar Designs|Return to Queue)|$)/i)||[])[1]||"";
  const SP=readSpecial(p,spRaw); const notes=[];
  if(SP.bg){ S.bg=SP.bg.label; S.bgLocked=true; S.bgSrc="instr"; notes.push("background "+SP.bg.label+" (from instructions)"); }
  if(SP.logo.length){ const set=[...new Set([...(S.logoYarn!=="auto"&&S.logoYarn!=="set"?[S.logoYarn]:[]),...S.logoSet,...SP.logo.map(y=>y.label)])].filter(l=>l!==S.bg);
    if(set.length===1){ S.logoYarn=set[0]; S.logoSet=[]; } else if(set.length>1){ S.logoSet=set; S.logoYarn="set"; }
    notes.push("logo "+set.join(" + ")+" (from instructions)"); }
  if(SP.edgeCm) S.edgeCm=SP.edgeCm;
  if(SP.shape){ S.corner=SP.shape; $("corner").value=SP.shape; notes.push(SP.shape+" mat"); }
  if(SP.photo){ S.photoReq=true; notes.push("photo-realistic artwork requested"); }
  if(SP.keepAll){ S.keepAll=true; S.minDetail=1; $("minDetail").value=1; notes.push("keep all small details"); }
  S.orderNotes=SP.notes;
  fillYarnSelects();
  if(S.clusters.length){ const p2=pal(); for(const c of S.clusters){ const m=nearestYarn(p2,c.lab); c.yarn=m.yarn.label; c.de=m.de; } separateYarns(); applyLogoYarn(); decideBg(); decidePanel(); contrastSwap(); fillYarnSelects();
    const ph=S.photoReq || (STYLES[S.style].print && S.resid>PHOTO_RESID); S.photo=ph; $("photoMode").checked=ph; computeBBox(); renderYarnMap(); retrace(); } else render();
  updateSpec();
  const spTxt=spRaw.trim().replace(/\s+/g," "); const sp=spTxt && !/^none\.?$/i.test(spTxt) ? " Special instructions: “"+spTxt+"”" : "";
  const r=$("fillResult"); r.hidden=false; r.textContent="Filled: "+done.join(", ")+"."+(notes.length?" From instructions: "+notes.join(", ")+".":"")+(missed.length?" Not found, set by hand: "+missed.join(", ")+".":"")+(S.orderNotes.length?" "+S.orderNotes.join(" "):"")+sp;
  toast("Work order filled from the order page");
}

/* ---------- misc UI ---------- */
let toastT; function toast(m){ const t=$("toast"); t.textContent=m; t.hidden=false; clearTimeout(toastT); toastT=setTimeout(()=>t.hidden=true,3200); }
function busy(m){ S.tracing=!!m; const b=$("busy"); b.hidden=!m; if(m) b.textContent=m; }
function bind(id,key,fn,parse){ const el=$(id); el.addEventListener(el.type==="range"||el.type==="number"||el.type==="text"?"input":"change",()=>{ S[key]=parse?parse(el.value):el.value; fn&&fn(); }); }
bind("designId","id",updateSpec,v=>v.trim()||"design");
$("style").addEventListener("change",e=>{ S.style=e.target.value; fillYarnSelects();
  const p=pal(); for(const c of S.clusters){ const m=nearestYarn(p,c.lab); c.yarn=m.yarn.label; c.de=m.de; } separateYarns(); applyLogoYarn(); decideBg(); contrastSwap(); fillYarnSelects();
  renderYarnMap(); retrace(); updateSpec(); });
$("preset").addEventListener("change",e=>{ if(!e.target.value) return; const [w,h]=e.target.value.split("x").map(Number); S.w=w;S.h=h; S.sizeMissing=false; $("matW").classList.remove("need"); $("matH").classList.remove("need"); $("matW").value=w;$("matH").value=h; render(); updateSpec(); });
const sizeChange=()=>{ $("preset").value = PRESETS.some(([w,h])=>w===S.w&&h===S.h)? S.w+"x"+S.h : ""; render(); updateSpec(); };
bind("matW","w",sizeChange,v=>Math.max(30,+v||30)); bind("matH","h",sizeChange,v=>Math.max(30,+v||30));
["matW","matH"].forEach(id=>$(id).addEventListener("input",()=>{ if(+$("matW").value>0 && +$("matH").value>0){ $("matW").classList.remove("need"); $("matH").classList.remove("need"); S.sizeMissing=false; } }));
bind("corner","corner",()=>{render();updateSpec();});
$("bgYarn").addEventListener("change",e=>{ S.bg=e.target.value; S.bgLocked=true; S.bgSrc="user"; syncChips(); renderYarnMap(); render(); updateSpec(); });
$("logoYarn").addEventListener("change",e=>{ S.logoYarn=e.target.value; syncChips();
  if(S.logoYarn==="auto"){ const p=pal(); for(const c of S.clusters){ const m=nearestYarn(p,c.lab); c.yarn=m.yarn.label; c.de=m.de; } separateYarns(); } else applyLogoYarn();
  renderYarnMap(); retrace(); updateSpec(); });
$("bFill").addEventListener("click",()=>fillFromOrder($("orderText").value));
$("borderYarn").addEventListener("change",e=>{ S.border=e.target.value; syncChips(); render(); updateSpec(); });
bind("borderW","borderW",()=>{render();updateSpec();},v=>Math.max(1,+v||1));
bind("scale","scale",()=>{ $("oScale").textContent=Math.round(S.scale*100)+"%"; render(); updateSpec(); },v=>v/100);
bind("dx","dx",()=>{ $("oDx").textContent=S.dx; render(); },Number);
bind("dy","dy",()=>{ $("oDy").textContent=S.dy; render(); },Number);
bind("kSel","k",analyze);
let smT; bind("smooth","smooth",()=>{ $("oSmooth").textContent=S.smooth; clearTimeout(smT); smT=setTimeout(analyze,250); },Number);
let mdT; bind("minDetail","minDetail",()=>{ clearTimeout(mdT); mdT=setTimeout(retrace,300); },v=>Math.max(0,+v||0));
let rdT; bind("roundMM","roundMM",()=>{ clearTimeout(rdT); rdT=setTimeout(retrace,300); },v=>Math.max(0,+v||0));
bind("build","build",retrace);
$("cleanupMode").addEventListener("change",e=>{ S.cleanupUser=e.target.checked; if(e.target.checked){ S.photo=false; S.photoUser=true; $("photoMode").checked=false; } analyze(); });
$("photoMode").addEventListener("change",e=>{ S.photo=e.target.checked; S.photoUser=true; if(!S.photo){ computeBBox(); retrace(); } else doTrace(); });
$("bPlain").onclick=()=>{ S.plain=true; S.traceJob++; busy(null); S.layers=[]; S.photo=false; $("photoMode").checked=false; $("srcName").textContent="Plain mat"; $("srcInfo").textContent="No logo: only the background colour"; $("thumb").removeAttribute("src"); $("srcTools").hidden=true; renderYarnMap(); render(); updateSpec(); };
const setView=v=>{ S.view=v; $("vMock").setAttribute("aria-pressed",v==="mockup"); $("vProof").setAttribute("aria-pressed",v==="proof"); render(); };
$("vMock").onclick=()=>setView("mockup"); $("vProof").onclick=()=>setView("proof");
new ResizeObserver(()=>render()).observe($("stage"));
matchMedia("(prefers-color-scheme: dark)").addEventListener("change",render);

/* ---------- sample logo (invented brand, deliberately low-res) ---------- */
async function loadSample(){
  try{ await document.fonts.load('700 60px "Barlow Condensed"'); }catch(_){}
  const c=document.createElement("canvas"); c.width=420; c.height=170; const x=c.getContext("2d");
  x.fillStyle="#ffffff"; x.fillRect(0,0,420,170);
  x.fillStyle="#1f2f5c"; x.beginPath(); x.arc(78,85,58,0,Math.PI*2); x.fill();
  x.fillStyle="#e2a33a"; x.beginPath(); x.arc(78,92,26,Math.PI,0); x.fill();
  x.strokeStyle="#ffffff"; x.lineWidth=6; for(let i=0;i<3;i++){ x.beginPath(); x.moveTo(36,104+i*12); for(let t=0;t<=84;t+=4) x.lineTo(36+t,104+i*12+Math.sin(t/7)*3.5); x.stroke(); }
  const fit=(t,font,size,maxW,y,col)=>{ x.font=`${font} ${size}px "Barlow Condensed","Arial Narrow",sans-serif`; const m=x.measureText(t).width; x.save(); x.translate(152,y); if(m>maxW) x.scale(maxW/m,1); x.fillStyle=col; x.fillText(t,0,0); x.restore(); };
  x.textBaseline="alphabetic"; fit("HARBOURLINE",700,70,252,98,"#1f2f5c"); fit("HOTEL  ·  EST. 1987",600,30,252,136,"#e2a33a");
  const small=document.createElement("canvas"); small.width=300; small.height=121; small.getContext("2d").drawImage(c,0,0,300,121);
  const url=small.toDataURL("image/jpeg",0.55); const img=new Image();
  img.onload=()=>{ S.isSample=true; $("thumb").src=url; ingest(img,"harbourline-logo.jpg","300 × 121 px JPEG"); };
  img.src=url;
}
fillYarnSelects(); updateSpec(); render(); if(!window.__noSample) loadSample();
