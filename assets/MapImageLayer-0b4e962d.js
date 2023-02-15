import{jf as S,jY as w,jg as I,dr as $,ds as j,dt as O,du as E,jh as M,js as T,jZ as L,aA as P,M as N,bn as R,kg as b,fb as g,e$ as U,U as f,dW as F,f1 as J,jt as q,j_ as A,s as v,a2 as k,aC as i,aD as n,dx as _,f3 as z,dz as V,aE as B,v as C,ji as D}from"./vendor-8855e047.js";import{E as W,y as G,z as H}from"./SublayersOwner-296f7f45.js";import{c as K}from"./ExportImageParameters-989b00c6.js";import{n as x}from"./sublayerUtils-e5f898f8.js";import"./Version-9fefcff2.js";import"./floorFilterUtils-080a7cd2.js";let s=class extends S(w(I(W(G($(j(O(E(M(T(L(P(C))))))))))))){constructor(...e){super(...e),this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}load(e){const r=N(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(R).then(()=>this._fetchService(r))),Promise.resolve(this)}readImageFormat(e,r){const p=r.supportedImageFormatTypes;return p&&p.includes("PNG32")?"png32":"png24"}writeSublayers(e,r,p,t){if(!this.loaded||!e)return;const o=e.slice().reverse().flatten(({sublayers:a})=>a&&a.toArray().reverse()).toArray();let l=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){const a=b(t.origin);if(a===g.PORTAL_ITEM){const h=this.createSublayersForOrigin("service").sublayers;l=x(o,h,g.SERVICE)}else if(a>g.PORTAL_ITEM){const h=this.createSublayersForOrigin("portal-item");l=x(o,h.sublayers,b(h.origin))}}const c=[],y={writeSublayerStructure:l,...t};let m=l;o.forEach(a=>{const h=a.write({},y);c.push(h),m=m||a.originOf("visible")==="user"}),c.some(a=>Object.keys(a).length>1)&&(r.layers=c),m&&(r.visibleLayers=o.filter(a=>a.visible).map(a=>a.id))}createExportImageParameters(e,r,p,t){const o=t&&t.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const l=new K({layer:this,floors:t==null?void 0:t.floors,scale:U({extent:e,width:r})*o}),c=l.toJSON();l.destroy();const y=!t||!t.rotation||this.version<10.3?{}:{rotation:-t.rotation},m=e&&e.spatialReference,a=m.wkid||JSON.stringify(m.toJSON());c.dpi*=o;const h={};if(t!=null&&t.timeExtent){const{start:d,end:u}=t.timeExtent.toJSON();h.time=d&&u&&d===u?""+d:`${d??"null"},${u??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(h.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:a,imageSR:a,size:r+","+p,...c,...y,...h}}async fetchImage(e,r,p,t){return this._fetchImage("image",e,r,p,t)}async fetchImageBitmap(e,r,p,t){const o=await this._fetchImage("blob",e,r,p,t);return createImageBitmap(o)}async fetchRecomputedExtents(e={}){const r={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:p}=await f(this.url,r),{extent:t,fullExtent:o,timeExtent:l}=p,c=t||o;return{fullExtent:c&&F.fromJSON(c),timeExtent:l&&J.fromJSON({start:l[0],end:l[1]})}}loadAll(){return q(this,e=>{e(this.allSublayers)})}serviceSupportsSpatialReference(e){return A(this,e)}async _fetchImage(e,r,p,t,o){const l={responseType:e,signal:(o==null?void 0:o.signal)??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(r,p,t,o),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},c=this.parsedUrl.path+"/export";if(l.query.dynamicLayers!=null&&!this.capabilities.exportMap.supportsDynamicLayers)throw new v("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:l.query});try{const{data:y}=await f(c,l);return y}catch(y){throw k(y)?y:new v("mapimagelayer:image-fetch-error",`Unable to load image: ${c}`,{error:y})}}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:r,ssl:p}=await f(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});p&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r,this.read(r,{origin:"service",url:this.parsedUrl})}};i([n({type:Boolean})],s.prototype,"datesInUnknownTimezone",void 0),i([n()],s.prototype,"dpi",void 0),i([n()],s.prototype,"gdbVersion",void 0),i([n()],s.prototype,"imageFormat",void 0),i([_("imageFormat",["supportedImageFormatTypes"])],s.prototype,"readImageFormat",null),i([n({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],s.prototype,"imageMaxHeight",void 0),i([n({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],s.prototype,"imageMaxWidth",void 0),i([n()],s.prototype,"imageTransparency",void 0),i([n({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],s.prototype,"isReference",void 0),i([n({json:{read:!1,write:!1}})],s.prototype,"labelsVisible",void 0),i([n({type:["ArcGISMapServiceLayer"]})],s.prototype,"operationalLayerType",void 0),i([n({json:{read:!1,write:!1}})],s.prototype,"popupEnabled",void 0),i([n()],s.prototype,"sourceJSON",void 0),i([n({json:{write:{ignoreOrigin:!0}}})],s.prototype,"sublayers",void 0),i([z("sublayers",{layers:{type:[H]},visibleLayers:{type:[D]}})],s.prototype,"writeSublayers",null),i([n({type:["show","hide","hide-children"]})],s.prototype,"listMode",void 0),i([n({json:{read:!1},readOnly:!0,value:"map-image"})],s.prototype,"type",void 0),i([n(V)],s.prototype,"url",void 0),s=i([B("esri.layers.MapImageLayer")],s);const re=s;export{re as default};
