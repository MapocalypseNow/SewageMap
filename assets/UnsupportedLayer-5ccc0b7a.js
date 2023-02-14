import{v as m,e,y as p,n}from"./cast-4943406f.js";import{a as l}from"./Error-8814705f.js";import{O as u}from"./MultiOriginJSONSupport-1415ac8d.js";import"./typedArrayUtil-bd69bba0.js";import"./ensureType-9613b5f0.js";import{b as a}from"./Layer-df88343f.js";import{v as d}from"./PortalLayer-92819795.js";import"./string-cc430a78.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-ec14a623.js";import"./preload-helper-6c8d3039.js";import"./geometry-da69b92c.js";import"./Extent-d21a2637.js";import"./Polyline-98ddf509.js";import"./typeUtils-98cd71e2.js";import"./jsonMap-9318d50f.js";import"./request-9ab300ca.js";import"./Evented-28d49a6f.js";import"./Identifiable-28626f77.js";import"./Loadable-8b974e55.js";import"./Promise-9613afa4.js";import"./asyncUtils-b47bdec8.js";import"./Portal-c85307b1.js";import"./locale-30120714.js";import"./PortalGroup-e30a1480.js";import"./PortalUser-6c405f61.js";import"./PortalItem-0e5c0cbb.js";import"./assets-2905a8db.js";let t=class extends d(u(a)){constructor(r){super(r),this.resourceInfo=null,this.type="unsupported"}initialize(){this.addResolvingPromise(new Promise((r,i)=>{m(()=>{const o=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let s="Unsupported layer type";o&&(s+=" "+o),i(new l("layer:unsupported-layer-type",s,{layerType:o}))})}))}read(r,i){const o={resourceInfo:r};r.id!=null&&(o.id=r.id),r.title!=null&&(o.title=r.title),super.read(o,i)}write(r){return Object.assign(r||{},this.resourceInfo,{id:this.id})}};e([p({readOnly:!0})],t.prototype,"resourceInfo",void 0),e([p({type:["show","hide"]})],t.prototype,"listMode",void 0),e([p({json:{read:!1},readOnly:!0,value:"unsupported"})],t.prototype,"type",void 0),t=e([n("esri.layers.UnsupportedLayer")],t);const G=t;export{G as default};
