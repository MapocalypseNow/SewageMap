import{f as t,y as a,bg as S,eq as O,A as f,dJ as $,f2 as x,iZ as L,jR as b,a1 as N,jd as R,j,L as A,U as I,dB as w,dj as M,dk as J,dl as U,iP as D,dm as P,j0 as V,aB as K,el as E,eZ as k,cH as q,bC as z,r as B,k as C,s as y,dq as G,j3 as Z,d as F}from"./index.js";import{g as m}from"./persistable.js";import{E as H,L as v}from"./SceneService.js";import{s as Q,l as W,u as X,m as Y}from"./I3SLayerDefinitions.js";import"./multiOriginJSONSupportUtils.js";import"./resourceExtension.js";import"./originUtils.js";import"./resourceUtils.js";var h;let n=h=class extends ${constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,i,s,o){if(o.layer&&o.layer.spatialReference&&!o.layer.spatialReference.equals(this.geometry.spatialReference)){if(!x(e.spatialReference,o.layer.spatialReference))return void(o&&o.messages&&o.messages.push(new L("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:o.layer.spatialReference,context:o})));const l=new S;b(e,l,o.layer.spatialReference),i[s]=l.toJSON(o)}else i[s]=e.toJSON(o);delete i[s].spatialReference}clone(){return new h({geometry:N(this.geometry),type:this.type})}};t([a({type:S}),m()],n.prototype,"geometry",void 0),t([O(["web-scene","portal-item"],"geometry")],n.prototype,"writeGeometry",null),t([a({type:["clip","mask","replace"],nonNullable:!0}),m()],n.prototype,"type",void 0),n=h=t([f("esri.layers.support.SceneModification")],n);const c=n;var p;let d=p=class extends R(j.ofType(c)){constructor(e){super(e),this.url=null}clone(){return new p({url:this.url,items:this.items.map(e=>e.clone())})}toJSON(e){return this.toArray().map(i=>i.toJSON(e)).filter(i=>!!i.geometry)}static fromJSON(e,i){const s=new p;for(const o of e)s.add(c.fromJSON(o,i));return s}static async fromUrl(e,i,s){const o={url:A(e),origin:"service"},l=await I(e,{responseType:"json",signal:w(s,"signal")}),T=i.toJSON(),u=[];for(const g of l.data)u.push(c.fromJSON({...g,geometry:{...g.geometry,spatialReference:T}},o));return new p({url:e,items:u})}};t([a({type:String})],d.prototype,"url",void 0),d=p=t([f("esri.layers.support.SceneModifications")],d);const _=d;let r=class extends H(M(J(U(D(P(V(F))))))){constructor(...e){super(...e),this._handles=new K,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null}destroy(){this._handles.destroy()}initialize(){this._handles.add(E(()=>this.modifications,"after-changes",()=>this.modifications=this.modifications,k))}normalizeCtorArgs(e,i){return typeof e=="string"?{url:e,...i}:e}readModifications(e,i,s){this._modificationsSource={url:q(e,s),context:s}}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const i=w(e,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(s){z(s)}if(await this._fetchService(i),B(this._modificationsSource)){const s=await _.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",s,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,i)}beforeSave(){if(!C(this._modificationsSource))return this.load().then(()=>{},()=>{})}async saveAs(e,i){return this._debouncedSaveOperations(v.SAVE_AS,{...i,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(v.SAVE,e)}validateLayer(e){if(e.layerType&&e.layerType!=="IntegratedMesh")throw new y("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new y("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new y("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}};t([a({type:String,readOnly:!0})],r.prototype,"geometryType",void 0),t([a({type:["show","hide"]})],r.prototype,"listMode",void 0),t([a({type:["IntegratedMeshLayer"]})],r.prototype,"operationalLayerType",void 0),t([a({json:{read:!1},readOnly:!0})],r.prototype,"type",void 0),t([a({type:Q,readOnly:!0})],r.prototype,"nodePages",void 0),t([a({type:[W],readOnly:!0})],r.prototype,"materialDefinitions",void 0),t([a({type:[X],readOnly:!0})],r.prototype,"textureSetDefinitions",void 0),t([a({type:[Y],readOnly:!0})],r.prototype,"geometryDefinitions",void 0),t([a({readOnly:!0})],r.prototype,"serviceUpdateTimeStamp",void 0),t([a({type:_}),m({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],r.prototype,"modifications",void 0),t([G(["web-scene","portal-item"],"modifications")],r.prototype,"readModifications",null),t([a(Z)],r.prototype,"elevationInfo",void 0),t([a({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],r.prototype,"path",void 0),r=t([f("esri.layers.IntegratedMeshLayer")],r);const pe=r;export{pe as default};
