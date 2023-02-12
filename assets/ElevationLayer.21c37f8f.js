import{de as f,a2 as g,df as w,dg as T,v as p,al as u,R as b,dh as S,di as $,dj as L,dk as D,dl as I,s as k,bD as E,U as v,dm as x,_ as m,B as a,C as o,dn as V,dp as O,dq as j,D as P,b as A}from"./index.eddec14a.js";import{s as M}from"./ArcGISCachedService.be263080.js";import"./TilemapCache.e5b34792.js";class C{constructor(e,t,r,l,h={}){this._mainMethod=t,this._transferLists=r,this._listeners=[],this._promise=f(e,{...h,schedule:l}).then(d=>{if(this._thread===void 0){this._thread=d,this._promise=null,h.hasInitialize&&this.broadcast({},"initialize");for(const n of this._listeners)this._connectListener(n)}else d.close()}),this._promise.catch(d=>g.getLogger("esri.core.workers.WorkerHandle").error(`Failed to initialize ${e} worker: ${d}`))}on(e,t){const r={removed:!1,eventName:e,callback:t,threadHandle:null};return this._listeners.push(r),this._connectListener(r),w(()=>{r.removed=!0,T(this._listeners,r),this._thread&&p(r.threadHandle)&&r.threadHandle.remove()})}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,r){if(this._thread){const l=this._transferLists[e],h=l?l(t):[];return this._thread.invoke(e,t,{transferList:h,signal:r})}return this._promise?this._promise.then(()=>(u(r),this.invokeMethod(e,t,r))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then(()=>{}):this._promise?this._promise.then(()=>this.broadcast(e,t)):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then(t=>{e.removed||(e.threadHandle=t)})}}class _ extends C{constructor(e=null){super("LercWorker","_decode",{_decode:t=>[t.buffer]},e,{strategy:"dedicated"}),this.schedule=e,this.ref=0}decode(e,t,r){return e&&e.byteLength!==0?this.invoke({buffer:e,options:t},r):Promise.resolve(null)}release(){--this.ref<=0&&(c.forEach((e,t)=>{e===this&&c.delete(t)}),this.destroy())}}const c=new Map;function U(i=null){let e=c.get(b(i));return e||(p(i)?(e=new _(t=>i.schedule(t)),c.set(i,e)):(e=new _,c.set(null,e))),++e.ref,e}let s=class extends M(S($(L(D(A))))){constructor(...i){super(...i),this.copyright=null,this.heightModelInfo=null,this.path=null,this.minScale=void 0,this.maxScale=void 0,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=U()}normalizeCtorArgs(i,e){return typeof i=="string"?{url:i,...e}:i}destroy(){this._lercDecoder=I(this._lercDecoder)}readVersion(i,e){let t=e.currentVersion;return t||(t=9.3),t}load(i){const e=p(i)?i.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:t=>{for(let r=0;r<t.typeKeywords.length;r++)if(t.typeKeywords[r].toLowerCase()==="elevation 3d layer")return!0;throw new k("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},i).catch(E).then(()=>this._fetchImageService(e))),Promise.resolve(this)}fetchTile(i,e,t,r){const l=p((r=r||{signal:null}).signal)?r.signal:r.signal=new AbortController().signal,h={responseType:"array-buffer",signal:l},d={noDataValue:r.noDataValue,returnFileInfo:!0};return this.load().then(()=>this._fetchTileAvailability(i,e,t,r)).then(()=>v(this.getTileUrl(i,e,t),h)).then(n=>this._lercDecoder.decode(n.data,d,l)).then(n=>{var y;return{values:n.pixelData,width:n.width,height:n.height,maxZError:(y=n.fileInfo)==null?void 0:y.maxZError,noDataValue:n.noDataValue,minValue:n.minValue,maxValue:n.maxValue}})}getTileUrl(i,e,t){const r=!this.tilemapCache&&this.supportsBlankTile,l=x({...this.parsedUrl.query,blankTile:!r&&null});return`${this.parsedUrl.path}/tile/${i}/${e}/${t}${l?"?"+l:""}`}async queryElevation(i,e){const{ElevationQuery:t}=await m(()=>import("./ElevationQuery.28b9f9ea.js"),["assets/ElevationQuery.28b9f9ea.js","assets/index.eddec14a.js","assets/index.45a801fc.css"]);return u(e),new t().query(this,i,e)}async createElevationSampler(i,e){const{ElevationQuery:t}=await m(()=>import("./ElevationQuery.28b9f9ea.js"),["assets/ElevationQuery.28b9f9ea.js","assets/index.eddec14a.js","assets/index.45a801fc.css"]);return u(e),new t().createSampler(this,i,e)}_fetchTileAvailability(i,e,t,r){return this.tilemapCache?this.tilemapCache.fetchAvailability(i,e,t,r):Promise.resolve("unknown")}async _fetchImageService(i){var r;if(this.sourceJSON)return this.sourceJSON;const e={query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:i},t=await v(this.parsedUrl.path,e);t.ssl&&(this.url=(r=this.url)==null?void 0:r.replace(/^http:/i,"https:")),this.sourceJSON=t.data,this.read(t.data,{origin:"service",url:this.parsedUrl})}get hasOverriddenFetchTile(){return!this.fetchTile.__isDefault__}};a([o({json:{read:{source:"copyrightText"}}})],s.prototype,"copyright",void 0),a([o({readOnly:!0,type:O})],s.prototype,"heightModelInfo",void 0),a([o({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],s.prototype,"path",void 0),a([o({type:["show","hide"]})],s.prototype,"listMode",void 0),a([o({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],s.prototype,"minScale",void 0),a([o({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],s.prototype,"maxScale",void 0),a([o({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],s.prototype,"opacity",void 0),a([o({type:["ArcGISTiledElevationServiceLayer"]})],s.prototype,"operationalLayerType",void 0),a([o()],s.prototype,"sourceJSON",void 0),a([o({json:{read:!1},value:"elevation",readOnly:!0})],s.prototype,"type",void 0),a([o(j)],s.prototype,"url",void 0),a([o()],s.prototype,"version",void 0),a([V("version",["currentVersion"])],s.prototype,"readVersion",null),s=a([P("esri.layers.ElevationLayer")],s),s.prototype.fetchTile.__isDefault__=!0;const J=s;export{J as default};