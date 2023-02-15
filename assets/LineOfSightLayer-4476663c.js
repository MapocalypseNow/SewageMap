import{Q as l,jF as x,fj as N,ko as h,aC as s,aD as i,aL as w,hQ as O,aE as f,aF as C,jG as P,M as n,o as m,eD as D,at as L,dF as E,e9 as F,bG as b,Y as R,kp as G,fc as H,kq as M,kr as Q,ds as Z,du as Y,v as B}from"./vendor-8855e047.js";import{c as J}from"./Analysis-197cdacc.js";import{g as c}from"./persistable-2d197bd6.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";function S(e,t){return j(e)===j(t)}function j(e){if(l(e))return null;const t=e.layer!=null?e.layer.id:"";let r=null;return r=e.objectId!=null?e.objectId:e.layer!=null&&"objectIdField"in e.layer&&e.layer.objectIdField!=null&&e.attributes!=null?e.attributes[e.layer.objectIdField]:e.uid,r==null?null:`o-${t}-${r}`}const z={json:{write:{writer:K,target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:U}}}};function K(e,t){var r;l(e)||((r=e.layer)==null?void 0:r.objectIdField)==null||e.attributes==null||(t.feature={layerId:e.layer.id,objectId:e.attributes[e.layer.objectIdField]})}function U(e){if(e.layerId!=null&&e.objectId!=null)return{uid:null,layer:{id:e.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:e.objectId}}}let u=class extends x(N(C)){constructor(t){super(t),this.position=null,this.elevationInfo=null,this.feature=null}equals(t){return h(this.position,t.position)&&h(this.elevationInfo,t.elevationInfo)&&S(this.feature,t.feature)}};s([i({type:w}),c()],u.prototype,"position",void 0),s([i({type:O}),c()],u.prototype,"elevationInfo",void 0),s([i(z)],u.prototype,"feature",void 0),u=s([f("esri.analysis.LineOfSightAnalysisObserver")],u);const _=u;let p=class extends x(P){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return h(this.position,e.position)&&h(this.elevationInfo,e.elevationInfo)&&S(this.feature,e.feature)}};s([i({type:w}),c()],p.prototype,"position",void 0),s([i({type:O}),c()],p.prototype,"elevationInfo",void 0),s([i(z)],p.prototype,"feature",void 0),p=s([f("esri.analysis.LineOfSightAnalysisTarget")],p);const q=p;function V(e){return e?ee:te}function W(e,t){return l(t)||!t.mode?V(e).mode:t.mode}function X(e,t){return W(!!n(e)&&e.hasZ,t)}const ee={mode:"absolute-height",offset:0},te={mode:"on-the-ground",offset:null},v=m.ofType(q);let a=class extends J{constructor(e){super(e),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles(L(()=>this._computeExtent(),e=>{(l(e)||l(e.pending))&&this._set("extent",n(e)?e.extent:null)},E))}get targets(){return this._get("targets")||new v}set targets(e){this._set("targets",F(e,this.targets,v))}get spatialReference(){return n(this.observer)&&n(this.observer.position)?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){return[b(this.observer,e=>e.position)]}async waitComputeExtent(){const e=this._computeExtent();return n(e)?R(e.pending):null}_computeExtent(){const e=this.spatialReference;if(l(this.observer)||l(this.observer.position)||l(e))return null;const t=y=>X(y.position,y.elevationInfo)==="absolute-height",r=this.observer.position,$=G(r.x,r.y,r.z,r.x,r.y,r.z);for(const y of this.targets)if(n(y.position)){const d=H(y.position,e);if(n(d.pending))return{pending:d.pending,extent:null};if(n(d.geometry)){const{x:A,y:T,z:k}=d.geometry;M($,[A,T,k])}}const g=Q($,e);return t(this.observer)&&this.targets.every(t)||(g.zmin=null,g.zmax=null),{pending:null,extent:g}}clear(){this.observer=null,this.targets.removeAll()}};s([i({type:["line-of-sight"]})],a.prototype,"type",void 0),s([i({type:_,json:{read:!0,write:!0}})],a.prototype,"observer",void 0),s([i({cast:D,type:v,nonNullable:!0,json:{read:!0,write:!0}})],a.prototype,"targets",null),s([i({value:null,readOnly:!0})],a.prototype,"extent",void 0),s([i({readOnly:!0})],a.prototype,"spatialReference",null),s([i({readOnly:!0})],a.prototype,"requiredPropertiesForEditing",null),a=s([f("esri.analysis.LineOfSightAnalysis")],a);const I=a,se=m.ofType(q);let o=class extends Z(Y(B)){constructor(e){super(e),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new I,this.opacity=1}initialize(){this.addHandles(L(()=>this.analysis,(e,t)=>{n(t)&&t.parent===this&&(t.parent=null),n(e)&&(e.parent=this)},E))}async load(){return n(this.analysis)&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){return b(this.analysis,e=>e.observer)}set observer(e){b(this.analysis,t=>t.observer=e)}get targets(){return n(this.analysis)?this.analysis.targets:new m}set targets(e){var t;F(e,(t=this.analysis)==null?void 0:t.targets)}get fullExtent(){return n(this.analysis)?this.analysis.extent:null}get spatialReference(){return n(this.analysis)?R(this.analysis.spatialReference):null}releaseAnalysis(e){this.analysis===e&&(this.analysis=new I)}};s([i({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),s([i({type:["LineOfSightLayer"]})],o.prototype,"operationalLayerType",void 0),s([i({type:_,json:{read:!0,write:{ignoreOrigin:!0}}})],o.prototype,"observer",null),s([i({type:se,json:{read:!0,write:{ignoreOrigin:!0}}})],o.prototype,"targets",null),s([i({nonNullable:!0,json:{read:!1,write:!1}})],o.prototype,"analysis",void 0),s([i({readOnly:!0})],o.prototype,"fullExtent",null),s([i({readOnly:!0})],o.prototype,"spatialReference",null),s([i({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],o.prototype,"opacity",void 0),s([i({type:["show","hide"]})],o.prototype,"listMode",void 0),o=s([f("esri.layers.LineOfSightLayer")],o);const le=o;export{le as default};