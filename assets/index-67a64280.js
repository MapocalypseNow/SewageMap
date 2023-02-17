var O=Object.defineProperty;var z=(i,e,t)=>e in i?O(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var m=(i,e,t)=>(z(i,typeof e!="symbol"?e+"":e,t),t);import{W as B,j as b,H as l,R as g,c as N,i as E,u as A,n as w,C as K,k as Z,Z as F,a as k,t as G,p as S,x as T,s as W,L,b as H,_ as U,d as Y,e as J,f as X,g as j,h as Q}from"./vendor-445d19db.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const P=B(["*,*::before,*::after{box-sizing:border-box;}*{margin:0;}html,body{height:100%;}body{line-height:1.5;-webkit-font-smoothing:antialiased;}img,picture,video,canvas,svg{display:block;max-width:100%;}input,button,textarea,select{font:inherit;}p,h1,h2,h3,h4,h5,h6{overflow-wrap:break-word;}#root,#__next{isolation:isolate;}"]),v=b.Fragment,o=b.jsx,u=b.jsxs,_=l.div.withConfig({displayName:"Container"})(["background-color:var(--color);border-radius:8px;padding:8px 16px;text-align:center;line-height:1.3rem;"]);function $(i){switch(i){case"Discharging":return"hsl(0, 100%, 90%)";case"Recent Discharge":return"hsl(50, 100%, 84%)";case"Not Discharging":return"hsl(125, 68%, 85%)"}}const ee=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function y(i){const e=new Date(i);return{month:ee[e.getMonth()],day:e.getDate(),year:e.getFullYear()}}function te({alertStatus:i,discharge:e}){return o(_,{style:{"--color":$(i)},children:e.start===null?o(ie,{children:"N/A"}):u(v,{children:[o(ne,{children:y(e.end??Date.now()).month}),o(re,{children:y(e.end??Date.now()).day}),o(ae,{children:y(e.end??Date.now()).year})]})})}var ie=l("p").withConfig({displayName:"_StyledP"})(["font-size:1.5rem;"]),ne=l("p").withConfig({displayName:"_StyledP2"})(["font-size:0.9rem;"]),re=l("p").withConfig({displayName:"_StyledP3"})(["font-size:1.5rem;font-weight:500;"]),ae=l("p").withConfig({displayName:"_StyledP4"})(["font-size:0.7rem;"]);const se=l.div.withConfig({displayName:"Container"})(["line-height:1.5rem;"]),x=l.span.withConfig({displayName:"RowLabel"})(["color:hsl(0,0%,50%);padding-right:8px;"]);function oe(i,e){switch(i){case"Discharging":return"Discharging Now 🤮";case"Recent Discharge":return"Discharge in last 48 hours 🤢";case"Not Discharging":return e?"Historic Discharge Event 🤕":"No Discharges Since 1st April 2022"}}function M(i,e,t=!1){const n=e-i,r=Math.floor(n/(1e3*60*60)),a=Math.floor(n%(1e3*60*60)/(1e3*60)),c=Math.floor(n%(1e3*60)/1e3);return`${r>0?`${r} hours `:""}${a<10?"0"+a:a} mins ${t?`${c<10?"0"+c:c} sec`:""} `}function C(i){const e=new Date(i);let t=e.getHours();const n=e.getMinutes(),r=t>=12?"pm":"am";t=t%12,t=t||12;const a=n<10?"0"+n:n;return`${t}:${a} ${r}`}const ce=l.span.withConfig({displayName:"PulseDot"})(["border-radius:100%;background-color:hsl(10,90%,50%);width:4px;display:inline-block;height:4px;margin-bottom:2px;vertical-align:middle;margin-right:4px;box-shadow:0 0 0 0 hsl(10,90%,50%);transform:scale(1);animation:pulse 2s infinite;@keyframes pulse{0%{transform:scale(0.95);box-shadow:0 0 0 0 hsl(9.95633187772926,89.80392156862744%,50%,0.7);}70%{transform:scale(1);box-shadow:0 0 0 5px hsl(10,90%,50%,0);}100%{transform:scale(0.95);box-shadow:0 0 0 0 hsl(10,90%,50%,0);}}"]);function le(){return u(de,{children:[o(ce,{}),"ACTIVE"]})}function he({start:i}){const[e,t]=g.useState(Date.now());function n(){t(Date.now())}return g.useEffect(()=>{const r=setInterval(n,1e3);return function(){clearInterval(r)}},[]),o(v,{children:M(i,e,!0)})}function ue({alertStatus:i,discharge:e}){return u(se,{children:[o(pe,{children:oe(i,e.start)}),e.start!=null&&u(v,{children:[u(me,{children:[o(x,{children:"TIME PERIOD"})," ",C(e.start)," -"," ",e.end?C(e.end):o(le,{})]}),u(ge,{children:[o(x,{children:"DURATION"}),e.end?M(e.start,e.end):o(he,{start:e.start})]})]})]})}var de=l("span").withConfig({displayName:"_StyledSpan"})(["border-radius:99999px;background-color:hsl(0,100%,97%);padding:0px 8px;border:hsl(0,100%,90%) solid 1px;color:hsl(10,90%,50%);font-size:0.7rem;"]),pe=l("p").withConfig({displayName:"_StyledP"})(["font-size:1.1rem;margin-bottom:4px;"]),me=l("p").withConfig({displayName:"_StyledP2"})(["font-size:0.8rem;"]),ge=l("p").withConfig({displayName:"_StyledP3"})(["font-size:0.8rem;"]);const fe=l.div.withConfig({displayName:"DischargeDataCardWrapper"})(["--shadow-color:0deg 0% 0%;--shadow-elevation-medium:0.2px 0.3px 0.4px hsl(var(--shadow-color) / 0.1),0.5px 1px 1.2px -0.8px hsl(var(--shadow-color) / 0.09),1.2px 2.5px 3.1px -1.7px hsl(var(--shadow-color) / 0.09),3px 6px 7.5px -2.5px hsl(var(--shadow-color) / 0.09);margin:8px 0px;margin-top:0px;padding:8px;border-radius:8px;box-shadow:var(--shadow-elevation-medium);border:hsl(0,0%,90%) solid 1px;display:flex;gap:8px;"]);function Ae(i){return u(fe,{children:[o(te,{...i}),o(ue,{...i})]})}const I="data:image/png;base64,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",R="/SewageMap/assets/poo-0952f12a.png",q="data:image/png;base64,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",we=l.header.withConfig({displayName:"Header"})(["display:flex;gap:8px;padding:8px 0px;flex-direction:row;"]),Se=l.img.withConfig({displayName:"Icon"})(["width:30px;height:30px;"]),ye=l.h1.withConfig({displayName:"Title"})(["font-size:1.2rem;color:hsl(0,0%,20%);line-height:1.1;"]),be=l.p.withConfig({displayName:"SubTitle"})(["font-size:0.9rem;color:hsl(0,0%,30%);"]);function ve(i){switch(i){case"Discharging":return R;case"Recent Discharge":return I;case"Not Discharging":return q}}function xe({alertStatus:i,location:e,feeds:t}){return u(we,{children:[o(Se,{src:ve(i)}),u("div",{children:[o(ye,{children:e}),u(be,{children:["Feeds into: ",t]})]})]})}function Ce(i){const e=document.createElement("div");return N(e).render(u(g.StrictMode,{children:[o(P,{}),o(Fe,{...De(i.graphic)})]})),e}function De(i){const{attributes:e}=i,t=e.AlertPast48Hours==="true",n=e.AlertStatus.trim().toLocaleLowerCase(),r=e.MostRecentDischargeAlertStart,a=e.MostRecentDischargeAlertStop,c=e.ReceivingWaterCourse,h=e.LocationName;return console.log({alertStatus:D(t,n),discharge:{start:r,end:a},feeds:c,location:h}),{alertStatus:D(t,n),discharge:{start:r,end:a},feeds:c,location:h}}function D(i,e){return i===!0&&e!="discharging"&&e!="offline"?"Recent Discharge":e=="not discharging"?"Not Discharging":e=="discharging"?"Discharging":"Not Discharging"}const Ne=l.div.withConfig({displayName:"Wrapper"})(["width:100%;height:100%;"]);function Fe(i){return u(Ne,{children:[o(xe,{...i}),o(Ae,{...i})]})}const Te=`/* eslint-disable */\r
var statuses = ["Not Discharging", "Recent Discharge", "Discharging", "Offline"];\r
\r
var index = 3;\r
\r
if (\r
    Boolean($feature.AlertPast48Hours) == true &&\r
    Lower(Trim($feature.AlertStatus)) != "discharging" &&\r
    Lower(Trim($feature.AlertStatus)) != "offline"\r
) {\r
    index = 1;\r
} else if (Lower(Trim($feature.AlertStatus)) == "not discharging") {\r
    index = 0;\r
} else if ($feature.AlertStatus == null || IsEmpty($feature.AlertStatus)) {\r
    index = 3;\r
} else if (Lower(Trim($feature.AlertStatus)) == "discharging") {\r
    index = 2;\r
} else if (Lower(Trim($feature.AlertStatus)) == "offline") {\r
    index = 3;\r
}\r
return statuses[index];\r
`,Pe=Te,Me=[new E({classes:[new A({label:"Discharging",symbol:new w({url:R,width:"32px",height:"32px"}),values:"Discharging"}),new A({label:"Not Discharging",symbol:new w({url:q,width:"16",height:"16"}),values:"Not Discharging"}),new A({label:"Recent Discharge",symbol:new w({url:I,width:"20",height:"20"}),values:"Recent Discharge"})]})],Ie=new K({valueExpression:Pe,uniqueValueGroups:Me});function Re(){const i=new Z({returnGeometry:!0,content:Ce});return new F({url:"https://services2.arcgis.com/g6o32ZDQ33GpCIu3/arcgis/rest/services/STEServiceProduction/FeatureServer",outFields:["*"],renderer:Ie,popupTemplate:i,effect:"drop-shadow(0.3px 0.5px 0.7px #a0a0925c) drop-shadow(0.4px 0.8px 1px #a0a0925c) drop-shadow( 1px 2px 2.5px #a0a0925c)",orderBy:[{field:"MostRecentDischargeAlertStart",order:"descending"}]})}class qe{constructor({view:e,layer:t,scaleFactor:n,animationSpeed:r=200}){m(this,"_activeAnimatedGraphic",null);m(this,"hitTest",G(async(e,t)=>{var h,d;this._activeAnimatedGraphic&&t.include.push(this._activeAnimatedGraphic);const{results:n}=await this.mapView.hitTest(e,t),r=n.filter(s=>s.type="graphic");if(r.filter(s=>s.layer===null).length)return;const c=r.filter(s=>s.layer!==null);if(r.length){const s=c[0].graphic;s.symbol=await T(s),this.activeAnimatedGraphic=s,(h=this.mapView.container)==null||h.classList.add("cursor-pointer")}else(d=this.mapView.container)==null||d.classList.remove("cursor-pointer"),this.activeAnimatedGraphic=null},60));this.mapView=e,this.layer=t,this.scaleFactor=n,this.animationSpeed=r,k(()=>this.mapView,"pointer-move",a=>{const c={include:[this.layer]};this.hitTest(a,c)})}set activeAnimatedGraphic(e){if(e===null){this._activeAnimatedGraphic&&this.abortAnimation(this._activeAnimatedGraphic),this._activeAnimatedGraphic=null;return}this._activeAnimatedGraphic!==null&&this.isSameGraphic(this._activeAnimatedGraphic,e)||(this._activeAnimatedGraphic&&this.abortAnimation(this._activeAnimatedGraphic),this._activeAnimatedGraphic=Ve(e.clone()),this.animatePointPopEffect(this._activeAnimatedGraphic))}animatePointPopEffect(e){switch(this.mapView.graphics.add(e),e.symbol.type){case"simple-marker":{const{size:t}=e.symbol;e.animationManager.animateSimpleMarkerSize(t,t*this.scaleFactor,200);break}case"picture-marker":{const{height:t,width:n}=e.symbol;e.animationManager.animatePictureMarkerSize({height:t,width:n},{height:t*this.scaleFactor,width:n*this.scaleFactor},this.animationSpeed)}}}abortAnimation(e){switch(e.symbol.type){case"simple-marker":{const t=e.symbol.size,n=e.animationManager.originalSymbol.size;e.animationManager.animateSimpleMarkerSize(t,n,this.animationSpeed,()=>{this.mapView.graphics.remove(e)});break}case"picture-marker":{const{height:t,width:n}=e.symbol,{height:r,width:a}=e.animationManager.originalSymbol;e.animationManager.animatePictureMarkerSize({height:t,width:n},{height:r,width:a},this.animationSpeed,()=>{this.mapView.graphics.remove(e)})}}}isSameGraphic(e,t){return e.getObjectId()===t.getObjectId()}}function Ve(i){return i.animationManager=new Oe(i),i}class Oe{constructor(e){m(this,"animationStartTimeStamp",0);m(this,"easeOutQuad",e=>e*(2-e));m(this,"abortCurrentAnimation",()=>{});this.graphic=e,this.originalSymbol=S(e.symbol.toJSON())}resetAnimationTimeStamps(){this.animationStartTimeStamp=0}updateSimpleMarkerSize(e){const t=S(this.graphic.symbol.toJSON());t.size=e,this.graphic.symbol=t}updatePictureMarkerSize(e){const t=S(this.graphic.symbol.toJSON());t.width=e.width,t.height=e.height,this.graphic.symbol=t}animateSimpleMarkerSize(e,t,n=2e3,r){var h;(h=this.abortCurrentAnimation)==null||h.call(this);let a=!1;const c=d=>{this.animationStartTimeStamp===0&&(this.animationStartTimeStamp=d);const s=d-this.animationStartTimeStamp;if(!a&&s<n){const p=this.easeOutQuad(s/n);this.updateSimpleMarkerSize(e+(t-e)*p),window.requestAnimationFrame(c)}else this.resetAnimationTimeStamps(),r&&r()};window.requestAnimationFrame(c),this.abortCurrentAnimation=()=>{a=!0}}animatePictureMarkerSize(e,t,n=2e3,r){var h;(h=this.abortCurrentAnimation)==null||h.call(this);let a=!1;const c=d=>{this.animationStartTimeStamp===0&&(this.animationStartTimeStamp=d);const s=d-this.animationStartTimeStamp;if(!a&&s<n){const p=this.easeOutQuad(s/n);this.updatePictureMarkerSize({width:e.width+(t.width-e.width)*p,height:e.height+(t.height-e.height)*p}),window.requestAnimationFrame(c)}else this.resetAnimationTimeStamps(),r&&r()};window.requestAnimationFrame(c),this.abortCurrentAnimation=()=>{a=!0}}}const ze=l.div.withConfig({displayName:"MapViewContainer"})(["padding:0;margin:0;height:100%;width:100%;"]);async function Be(i){var d;const e=Re();W.apiKey="AAPK27fcdc2310f14ea59b10f7a3f0b992f6pr7xdq6MOr38g1z2ybBfXE8JnBesHZgo_c2XF5GpocoAc9CpjY-Px6uSRly9uLmC";const t=new L({basemap:new H({portalItem:{id:"a8c045aa74d643cc9e2fa2702cc4cb45"}}),layers:[e]}),n=new U({container:i,constraints:{minZoom:6},map:t,center:[-.75,51.6],zoom:8,highlightOptions:{fillOpacity:0,haloOpacity:1}}),r=new Y({view:n,includeDefaultSources:!1,sources:[new J({placeholder:"Find address or place",url:"https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer",countryCode:"GB",suggestionsEnabled:!0,minSuggestCharacters:2})]});n.ui.add(r,{position:"top-right"});const a=new qe({view:n,layer:e,scaleFactor:1.5,animationSpeed:150});X(()=>{var s;return(s=n.popup)==null?void 0:s.selectedFeature},async s=>{(s==null?void 0:s.layer)===e?(n.popup.viewModel.location=n.popup.selectedFeature.geometry,n.goTo({target:n.popup.selectedFeature,zoom:12}),s.symbol=await T(s),a.activeAnimatedGraphic=s):a.activeAnimatedGraphic=null});const c=new j({where:"AlertPast48Hours = 'true'",returnGeometry:!0,outFields:["*"]}),h=await e.queryFeatures(c);if(((d=h.features)==null?void 0:d.length)>0){const s=await Q("https://hydro.arcgis.com/arcgis/rest/services/Tools/Hydrology/GPServer/TraceDownstream",{PointIDField:"PermitNumber",f:"json",InputPoints:JSON.stringify(h.toJSON())});await s.waitForJobCompletion();const{value:p}=await s.fetchResultData("OutputTraceLine"),f=p;if(f){const V=new F({source:f.features,objectIdField:"OBJECTID",fields:f.fields,renderer:{type:"simple",symbol:{type:"simple-line",color:"#733f2e",width:"8px",style:"solid"}}});t.add(V,0)}}}function Ee(){const i=g.useRef(null),e=async()=>{i.current&&Be(i.current)};return g.useEffect(()=>{e().catch(console.error)},[]),o(ze,{ref:i})}function Ke(){return o(Ee,{})}const Ze=document.getElementById("root"),ke=N(Ze);ke.render(u(g.StrictMode,{children:[o(P,{}),o(Ke,{})]}));
