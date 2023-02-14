import{i as d,e as r,y as s,n as h}from"./cast-4943406f.js";import{l as b}from"./CollectionFlattener-43de7f16.js";import{n as v}from"./loadAll-17f65048.js";import{r as u}from"./typedArrayUtil-bd69bba0.js";import{O as f}from"./MultiOriginJSONSupport-1415ac8d.js";import{l as m,U as y}from"./reactiveUtils-3389689f.js";import"./ensureType-9613b5f0.js";import{r as c}from"./Extent-d21a2637.js";import{b as _}from"./Layer-df88343f.js";import{n as g}from"./BlendLayer-8c6b6724.js";import{c as L}from"./OperationalLayer-620e6022.js";import{v as O}from"./PortalLayer-92819795.js";import{t as w}from"./ScaleRangeLayer-1135beed.js";import{a as M}from"./lazyLayerLoader-93a021d4.js";import{l as V,d as $,t as C}from"./TablesMixin-40f50a54.js";import{y as x}from"./writeUtils-04bd9a01.js";import"./string-cc430a78.js";import"./Error-8814705f.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-ec14a623.js";import"./Collection-e1ec52f9.js";import"./Evented-28d49a6f.js";import"./SimpleObservable-b403cd38.js";import"./asyncUtils-b47bdec8.js";import"./Loadable-8b974e55.js";import"./Promise-9613afa4.js";import"./preload-helper-6c8d3039.js";import"./geometry-da69b92c.js";import"./Polyline-98ddf509.js";import"./typeUtils-98cd71e2.js";import"./jsonMap-9318d50f.js";import"./request-9ab300ca.js";import"./Identifiable-28626f77.js";import"./parser-da666a95.js";import"./colorUtils-639f4d25.js";import"./screenUtils-7afeb41c.js";import"./mat4-62d5e6a4.js";import"./common-701a4199.js";import"./TimeExtent-fd94e986.js";import"./persistableUrlUtils-d6987fba.js";import"./ElevationInfo-2dc5cc64.js";import"./fieldUtils-605e1353.js";import"./arcadeOnDemand-5200ab6b.js";import"./lengthUtils-b711b4b2.js";import"./unitUtils-bc71b997.js";import"./opacityUtils-dc8d0a85.js";import"./Portal-c85307b1.js";import"./locale-30120714.js";import"./PortalGroup-e30a1480.js";import"./PortalUser-6c405f61.js";import"./PortalItem-0e5c0cbb.js";import"./assets-2905a8db.js";import"./collectionUtils-28848f7d.js";import"./layerUtils-6996b9ea.js";let t=class extends g(w(L(O(V($(f(_))))))){constructor(i){super(i),this._visibilityHandles={},this.allLayers=new b({getCollections:()=>[this.layers],getChildrenFunction:e=>"layers"in e?e.layers:null}),this.allTables=C(this),this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group"}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.addHandles(m(()=>this.visible,this._onVisibilityChange.bind(this),y))}_writeLayers(i,e,p,o){const l=[];if(!i)return l;i.forEach(n=>{const a=x(n,o.webmap?o.webmap.getLayerJSONFromResourceInfo(n):null,o);u(a)&&a.layerType&&l.push(a)}),e.layers=l}set portalItem(i){this._set("portalItem",i)}set visibilityMode(i){const e=this._get("visibilityMode")!==i;this._set("visibilityMode",i),e&&this._enforceVisibility(i,this.visible)}load(i){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"],layerModuleTypeMap:M},i)),Promise.resolve(this)}loadAll(){return v(this,i=>{i(this.layers,this.tables)})}layerAdded(i){i.visible&&this.visibilityMode==="exclusive"?this._turnOffOtherLayers(i):this.visibilityMode==="inherited"&&(i.visible=this.visible),this._visibilityHandles[i.uid]=m(()=>i.visible,e=>this._onChildVisibilityChange(i,e),y)}layerRemoved(i){const e=this._visibilityHandles[i.uid];e&&(e.remove(),delete this._visibilityHandles[i.uid]),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(i){this.layers.forEach(e=>{e!==i&&(e.visible=!1)})}_enforceVisibility(i,e){if(!d(this).initialized)return;const p=this.layers;let o=p.find(l=>l.visible);switch(i){case"exclusive":p.length&&!o&&(o=p.getItemAt(0),o.visible=!0),this._turnOffOtherLayers(o);break;case"inherited":p.forEach(l=>{l.visible=e})}}_onVisibilityChange(i){this.visibilityMode==="inherited"&&this.layers.forEach(e=>{e.visible=i})}_onChildVisibilityChange(i,e){switch(this.visibilityMode){case"exclusive":e?this._turnOffOtherLayers(i):this._isAnyLayerVisible()||(i.visible=!0);break;case"inherited":i.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some(i=>i.visible)}};r([s({readOnly:!0,dependsOn:[]})],t.prototype,"allLayers",void 0),r([s({readOnly:!0})],t.prototype,"allTables",void 0),r([s()],t.prototype,"fullExtent",void 0),r([s({json:{read:!0,write:!0}})],t.prototype,"blendMode",void 0),r([s({json:{read:!1,write:{ignoreOrigin:!0}}})],t.prototype,"layers",void 0),r([c("layers")],t.prototype,"_writeLayers",null),r([s({type:["GroupLayer"]})],t.prototype,"operationalLayerType",void 0),r([s({json:{origins:{"web-document":{read:!1,write:!1}}}})],t.prototype,"portalItem",null),r([s()],t.prototype,"spatialReference",void 0),r([s({json:{read:!1},readOnly:!0,value:"group"})],t.prototype,"type",void 0),r([s({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{read:!1,write:!1}}}})],t.prototype,"visibilityMode",null),t=r([h("esri.layers.GroupLayer")],t);const Ti=t;export{Ti as default};
