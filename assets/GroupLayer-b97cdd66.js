import{je as p,jf as v,dr as b,ds as u,jJ as c,jK as f,dt as _,fg as g,jL as m,as as d,jM as L,K as O,js as w,jN as M,aB as t,aC as r,f2 as j,eD as h,aD as C,r as V}from"./vendor-f61b19da.js";import{a as $}from"./lazyLayerLoader-5f49cdd1.js";let s=class extends p(v(b(u(c(f(_(V))))))){constructor(e){super(e),this._visibilityHandles={},this.allLayers=new g({getCollections:()=>[this.layers],getChildrenFunction:i=>"layers"in i?i.layers:null}),this.allTables=m(this),this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group"}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.addHandles(d(()=>this.visible,this._onVisibilityChange.bind(this),h))}_writeLayers(e,i,o,l){const a=[];if(!e)return a;e.forEach(y=>{const n=L(y,l.webmap?l.webmap.getLayerJSONFromResourceInfo(y):null,l);O(n)&&n.layerType&&a.push(n)}),i.layers=a}set portalItem(e){this._set("portalItem",e)}set visibilityMode(e){const i=this._get("visibilityMode")!==e;this._set("visibilityMode",e),i&&this._enforceVisibility(e,this.visible)}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"],layerModuleTypeMap:$},e)),Promise.resolve(this)}loadAll(){return w(this,e=>{e(this.layers,this.tables)})}layerAdded(e){e.visible&&this.visibilityMode==="exclusive"?this._turnOffOtherLayers(e):this.visibilityMode==="inherited"&&(e.visible=this.visible),this._visibilityHandles[e.uid]=d(()=>e.visible,i=>this._onChildVisibilityChange(e,i),h)}layerRemoved(e){const i=this._visibilityHandles[e.uid];i&&(i.remove(),delete this._visibilityHandles[e.uid]),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(e){this.layers.forEach(i=>{i!==e&&(i.visible=!1)})}_enforceVisibility(e,i){if(!M(this).initialized)return;const o=this.layers;let l=o.find(a=>a.visible);switch(e){case"exclusive":o.length&&!l&&(l=o.getItemAt(0),l.visible=!0),this._turnOffOtherLayers(l);break;case"inherited":o.forEach(a=>{a.visible=i})}}_onVisibilityChange(e){this.visibilityMode==="inherited"&&this.layers.forEach(i=>{i.visible=e})}_onChildVisibilityChange(e,i){switch(this.visibilityMode){case"exclusive":i?this._turnOffOtherLayers(e):this._isAnyLayerVisible()||(e.visible=!0);break;case"inherited":e.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some(e=>e.visible)}};t([r({readOnly:!0,dependsOn:[]})],s.prototype,"allLayers",void 0),t([r({readOnly:!0})],s.prototype,"allTables",void 0),t([r()],s.prototype,"fullExtent",void 0),t([r({json:{read:!0,write:!0}})],s.prototype,"blendMode",void 0),t([r({json:{read:!1,write:{ignoreOrigin:!0}}})],s.prototype,"layers",void 0),t([j("layers")],s.prototype,"_writeLayers",null),t([r({type:["GroupLayer"]})],s.prototype,"operationalLayerType",void 0),t([r({json:{origins:{"web-document":{read:!1,write:!1}}}})],s.prototype,"portalItem",null),t([r()],s.prototype,"spatialReference",void 0),t([r({json:{read:!1},readOnly:!0,value:"group"})],s.prototype,"type",void 0),t([r({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{read:!1,write:!1}}}})],s.prototype,"visibilityMode",null),s=t([C("esri.layers.GroupLayer")],s);const E=s;export{E as default};
