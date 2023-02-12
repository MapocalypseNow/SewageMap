import{aJ as $,iT as j,ee as g,eG as y,aN as S,eA as m,v as h,w as b,il as F,j as v,B as s,C as l,jC as M,dn as d,D as w,O as C,it as I,iv as N,iu as T,di as K,dj as P,dk as R,fe as J,k,dV as A,bD as z,f1 as D,dq as V,b as W}from"./index.js";import{j as G,S as x,g as E,d as O}from"./kmlUtils.js";var u;let a=u=class extends $.EventedMixin(j(C)){constructor(...e){super(...e),this.description=null,this.id=null,this.networkLink=null,this.sublayers=null,this.title=null,this.sourceJSON=null,this.fullExtent=null,this.addHandles([g(()=>this.sublayers,"after-add",({item:t})=>{t.parent=this,t.layer=this.layer},y),g(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=t.parent=null},y),S(()=>this.sublayers,(t,i)=>{if(i)for(const r of i)r.layer=r.parent=null;if(t)for(const r of t)r.parent=this,r.layer=this.layer},y)])}initialize(){m(()=>this.networkLink).then(()=>m(()=>this.visible===!0)).then(()=>this.load())}load(e){var r,n;if(!this.networkLink||this.networkLink.viewFormat)return;const t=h(e)?e.signal:null,i=this._fetchService((n=(r=this._get("networkLink"))==null?void 0:r.href)!=null?n:"",t).then(p=>{var f;const _=G(p.sublayers);this.fullExtent=b.fromJSON(_),this.sourceJSON=p;const c=F(v.ofType(u),x(u,p));this.sublayers?this.sublayers.addMany(c):this.sublayers=c,(f=this.layer)==null||f.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")});return this.addResolvingPromise(i),Promise.resolve(this)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(e,t){return!!t.visibility}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach(t=>t.layer=e)}_fetchService(e,t){return E(e,this.layer.outSpatialReference,this.layer.refreshInterval,t).then(i=>O(i.data))}};s([l()],a.prototype,"description",void 0),s([l()],a.prototype,"id",void 0),s([l({readOnly:!0,value:null})],a.prototype,"networkLink",void 0),s([l({json:{write:{allowNull:!0}}})],a.prototype,"parent",void 0),s([l({type:v.ofType(u),json:{write:{allowNull:!0}}})],a.prototype,"sublayers",void 0),s([l({value:null,json:{read:{source:"name",reader:e=>M(e)}}})],a.prototype,"title",void 0),s([l({value:!0})],a.prototype,"visible",null),s([d("visible",["visibility"])],a.prototype,"readVisible",null),s([l()],a.prototype,"sourceJSON",void 0),s([l({value:null})],a.prototype,"layer",null),s([l({type:b})],a.prototype,"fullExtent",void 0),a=u=s([w("esri.layers.support.KMLSublayer")],a);const L=a,H=["kml","xml"];let o=class extends I(N(T(K(P(R(W)))))){constructor(...e){super(...e),this._visibleFolders=[],this.allSublayers=new J({getCollections:()=>[this.sublayers],getChildrenFunction:t=>t.sublayers}),this.outSpatialReference=k.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.addHandles([S(()=>this.sublayers,(e,t)=>{t&&t.forEach(i=>{i.parent=null,i.layer=null}),e&&e.forEach(i=>{i.parent=this,i.layer=this})},y),this.on("sublayer-update",()=>this.notifyChange("fullExtent"))])}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}readSublayersFromItemOrWebMap(e,t){this._visibleFolders=t.visibleFolders}readSublayers(e,t,i){return x(L,t,i,this._visibleFolders)}writeSublayers(e,t){const i=[],r=e.toArray();for(;r.length;){const n=r[0];n.networkLink||(n.visible&&i.push(n.id),n.sublayers&&r.push(...n.sublayers.toArray())),r.shift()}t.visibleFolders=i}get title(){const e=this._get("title");return e&&this.originOf("title")!=="defaults"?e:this.url?A(this.url,H)||"KML":e||""}set title(e){this._set("title",e)}get visibleSublayers(){const e=this.sublayers,t=[],i=r=>{r.visible&&(t.push(r),r.sublayers&&r.sublayers.forEach(i))};return e&&e.forEach(i),t}get fullExtent(){return this._recomputeFullExtent()}load(e){const t=h(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"],supportsData:!1},e).catch(z).then(()=>this._fetchService(t))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}async _fetchService(e){const t=await Promise.resolve().then(()=>{var r;return this.resourceInfo?{ssl:!1,data:this.resourceInfo}:E((r=this.url)!=null?r:"",this.outSpatialReference,this.refreshInterval,e)}),i=O(t.data);i&&this.read(i,{origin:"service"})}_recomputeFullExtent(){let e=null;h(this.extent)&&(e=this.extent.clone());const t=i=>{if(i.sublayers)for(const r of i.sublayers.items)t(r),r.visible&&r.fullExtent&&(h(e)?e.union(r.fullExtent):e=r.fullExtent.clone())};return t(this),e}};s([l({readOnly:!0})],o.prototype,"allSublayers",void 0),s([l({type:k})],o.prototype,"outSpatialReference",void 0),s([l({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],o.prototype,"path",void 0),s([l({readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"legendEnabled",void 0),s([l({type:["show","hide","hide-children"]})],o.prototype,"listMode",void 0),s([l({type:["KML"]})],o.prototype,"operationalLayerType",void 0),s([l({})],o.prototype,"resourceInfo",void 0),s([l({type:v.ofType(L),json:{write:{ignoreOrigin:!0}}})],o.prototype,"sublayers",void 0),s([d(["web-map","portal-item"],"sublayers",["visibleFolders"])],o.prototype,"readSublayersFromItemOrWebMap",null),s([d("service","sublayers",["sublayers"])],o.prototype,"readSublayers",null),s([D("sublayers")],o.prototype,"writeSublayers",null),s([l({readOnly:!0,json:{read:!1}})],o.prototype,"type",void 0),s([l({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],o.prototype,"title",null),s([l(V)],o.prototype,"url",void 0),s([l({readOnly:!0})],o.prototype,"visibleSublayers",null),s([l({type:b})],o.prototype,"extent",void 0),s([l()],o.prototype,"fullExtent",null),o=s([w("esri.layers.KMLLayer")],o);const B=o;export{B as default};