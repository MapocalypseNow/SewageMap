import{M as S,U as v,s as h,fS as L,E as V,a0 as k,dQ as P,G as q,aC as c,aD as u,jw as M,z as b,dx as f,dW as E,dy as z,dz as F,f3 as C,aE as D,ev as J,jx as B,fO as G,jy as Z,jz as H,jA as Q,D as j,m as W,r as N,q as X}from"./vendor-8855e047.js";import{i as T}from"./originUtils-1469eeaf.js";import{getSiblingOfSameTypeI as Y}from"./resourceUtils-5542fb86.js";async function ee(n,s,e,t,o,r){let a=null;if(S(e)){const i=`${n}/nodepages/`,p=i+Math.floor(e.rootIndex/e.nodesPerPage);try{return{type:"page",rootPage:(await v(p,{query:{f:"json",token:t},responseType:"json",signal:r})).data,rootIndex:e.rootIndex,pageSize:e.nodesPerPage,lodMetric:e.lodSelectionMetricType,urlPrefix:i}}catch(y){S(o)&&o.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",p,y),a=y}}if(!s)return null;const l=`${n}/nodes/`,d=l+(s&&s.split("/").pop());try{return{type:"node",rootNode:(await v(d,{query:{f:"json",token:t},responseType:"json",signal:r})).data,urlPrefix:l}}catch(i){throw new h("sceneservice:root-node-missing","Root node missing.",{pageError:a,nodeError:i,url:d})}}async function O(n,s,e){if(!s||!s.resources)return;const t=s.portalItem===n.portalItem?new Set(n.paths):new Set;n.paths.length=0,n.portalItem=s.portalItem;const o=new Set(s.resources.toKeep.map(i=>i.resource.path)),r=new Set,a=[];o.forEach(i=>{t.delete(i),n.paths.push(i)});for(const i of s.resources.toUpdate)if(t.delete(i.resource.path),o.has(i.resource.path)||r.has(i.resource.path)){const{resource:p,content:y,finish:x,error:_}=i,A=Y(p,L());n.paths.push(A.path),a.push($({resource:A,content:y,compress:i.compress,finish:x,error:_},e))}else n.paths.push(i.resource.path),a.push(te(i,e)),r.add(i.resource.path);for(const i of s.resources.toAdd)a.push($(i,e)),n.paths.push(i.resource.path);if(t.forEach(i=>{const p=s.portalItem.resourceFromPath(i);a.push(p.portalItem.removeResource(p).catch(()=>{}))}),a.length===0)return;const l=await V(a);k(e);const d=l.filter(i=>"error"in i).map(i=>i.error);if(d.length>0)throw new h("save:resources","Failed to save one or more resources",{errors:d})}async function $(n,s){const e={...S(s)?s:{},compress:n.compress},t=await P(n.resource.portalItem.addResource(n.resource,n.content,e));if(t.ok!==!0)throw n.error&&n.error(t.error),t.error;n.finish&&n.finish(n.resource)}async function te(n,s){const e=await P(n.resource.update(n.content,s));if(e.ok!==!0)throw n.error(e.error),e.error;n.finish(n.resource)}const K="esri.layers.mixins.SceneService",m=q.getLogger(K),ie=n=>{let s=class extends n{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=J(async(e,t,o)=>{switch(e){case I.SAVE:return this._save(t);case I.SAVE_AS:return this._saveAs(o,t)}})}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(e.spatialReference!=null)return b.fromJSON(e.spatialReference);{const t=e.store,o=t.indexCRS||t.geographicCRS,r=o&&parseInt(o.substring(o.lastIndexOf("/")+1,o.length),10);return r!=null?new b(r):null}}readFullExtent(e,t,o){if(e!=null&&typeof e=="object"){const l=e.spatialReference==null?{...e,spatialReference:this._readSpatialReference(t)}:e;return E.fromJSON(l,o)}const r=t.store,a=this._readSpatialReference(t);return a==null||r==null||r.extent==null||!Array.isArray(r.extent)||r.extent.some(l=>l<R)?null:new E({xmin:r.extent[0],ymin:r.extent[1],xmax:r.extent[2],ymax:r.extent[3],spatialReference:a})}parseVersionString(e){const t={major:Number.NaN,minor:Number.NaN,versionString:e},o=e.split(".");return o.length>=2&&(t.major=parseInt(o[0],10),t.minor=parseInt(o[1],10)),t}readVersion(e,t){const o=t.store,r=o.version!=null?o.version.toString():"";return this.parseVersionString(r)}readTitlePortalItem(e){return this.sublayerTitleMode!=="item-title"?void 0:e}readTitleService(e,t){const o=this.portalItem&&this.portalItem.title;if(this.sublayerTitleMode==="item-title")return B(this.url,t.name);let r=t.name;if(!r&&this.url){const a=G(this.url);S(a)&&(r=a.title)}return this.sublayerTitleMode==="item-title-and-service-name"&&o&&(r=o+" - "+r),Z(r)}set url(e){const t=H({layer:this,url:e,nonStandardUrlAllowed:!1,logger:m});this._set("url",t.url),t.layerId!=null&&this._set("layerId",t.layerId)}writeUrl(e,t,o,r){Q(this,e,"layers",t,r)}get parsedUrl(){const e=this._get("url"),t=j(e);return this.layerId!=null&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=ee(this.parsedUrl.path,this.rootNode,e,this.apiKey,m,t),this.fullExtent==null||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){var t,o,r;if((e==null?void 0:e.type)==="page"){const a=e.rootIndex%e.pageSize,l=(o=(t=e.rootPage)==null?void 0:t.nodes)==null?void 0:o[a];if(l==null||l.obb==null||l.obb.center==null||l.obb.halfSize==null)throw new h("sceneservice:invalid-node-page","Invalid node page.");if(l.obb.center[0]<R||this.fullExtent==null||this.fullExtent.hasZ)return;const d=l.obb.halfSize,i=l.obb.center[2],p=Math.sqrt(d[0]*d[0]+d[1]*d[1]+d[2]*d[2]);this.fullExtent.zmin=i-p,this.fullExtent.zmax=i+p}else if((e==null?void 0:e.type)==="node"){const a=(r=e.rootNode)==null?void 0:r.mbs;if(!Array.isArray(a)||a.length!==4||a[0]<R)return;const l=a[2],d=a[3],{fullExtent:i}=this;i&&(i.zmin=l-d,i.zmax=l+d)}}async _fetchService(e){if(this.url==null)throw new h("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(this.layerId==null&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);t!=null&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const t=await v(this.url,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});if(t.data&&Array.isArray(t.data.layers)&&t.data.layers.length>0)return t.data.layers[0].id}async _fetchServiceLayer(e){var a;const t=await v(((a=this.parsedUrl)==null?void 0:a.path)??"",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});t.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));let o=!1;if(t.data.layerType&&t.data.layerType==="Voxel"&&(o=!0),o)return this._fetchVoxelServiceLayer();const r=t.data;this.read(r,{origin:"service",url:this.parsedUrl}),this.validateLayer(r)}async _fetchVoxelServiceLayer(e){var o;const t=(await v(((o=this.parsedUrl)==null?void 0:o.path)+"/layer",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,{origin:"service",url:this.parsedUrl}),this.validateLayer(t)}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&typeof this.beforeSave=="function"&&await this.beforeSave()}validateLayer(e){}_updateTypeKeywords(e,t,o){e.typeKeywords||(e.typeKeywords=[]);const r=t.getTypeKeywords();for(const a of r)e.typeKeywords.push(a);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((a,l,d)=>d.indexOf(a)===l),o===g.newItem&&(e.typeKeywords=e.typeKeywords.filter(a=>a!=="Hosted Service")))}async _saveAs(e,t){var i,p;const o={...U,...t};let r=W.from(e);r||(m.error("_saveAs(): requires a portal item parameter"),await Promise.reject(new h("sceneservice:portal-item-required","_saveAs() requires a portal item to save to"))),r.id&&(r=r.clone(),r.id=null);const a=r.portal||N.getDefault();await this._ensureLoadBeforeSave(),r.type=w,r.portal=a;const l={origin:"portal-item",url:null,messages:[],portal:a,portalItem:r,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},d={layers:[this.write({},l)]};return await Promise.all(((i=l.resources)==null?void 0:i.pendingOperations)??[]),await this._validateAgainstJSONSchema(d,l,o),r.url=this.url,r.title||(r.title=this.title),this._updateTypeKeywords(r,o,g.newItem),await a._signIn(),await((p=a.user)==null?void 0:p.addItem({item:r,folder:o&&o.folder,data:d})),await O(this.resourceReferences,l,null),this.portalItem=r,T(l),l.portalItem=r,r}async _save(e){var a;const t={...U,...e};if(!this.portalItem)throw m.error("_save(): requires the .portalItem property to be set"),new h("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService");if(this.portalItem.type!==w)throw m.error("_save(): Non-matching portal item type. Got "+this.portalItem.type+", expected "+w),new h("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${w}"`);await this._ensureLoadBeforeSave();const o={origin:"portal-item",url:this.portalItem.itemUrl&&j(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||N.getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},r={layers:[this.write({},o)]};return await Promise.all(((a=o.resources)==null?void 0:a.pendingOperations)??[]),await this._validateAgainstJSONSchema(r,o,t),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,t,g.existingItem),await this.portalItem.update({data:r}),await O(this.resourceReferences,o,null),T(o),this.portalItem}async _validateAgainstJSONSchema(e,t,o){var a,l,d,i;let r=((a=t.messages)==null?void 0:a.filter(p=>p.type==="error").map(p=>new h(p.name,p.message,p.details)))??[];if(o&&((l=o.validationOptions)!=null&&l.ignoreUnsupported)&&(r=r.filter(p=>p.name!=="layer:unsupported"&&p.name!=="symbol:unsupported"&&p.name!=="symbol-layer:unsupported"&&p.name!=="property:unsupported"&&p.name!=="url:unsupported"&&p.name!=="scenemodification:unsupported")),((d=o.validationOptions)==null?void 0:d.enabled)||re){const p=(await X(()=>import("./schemaValidator-65f0da1c.js"),["assets/schemaValidator-65f0da1c.js","assets/vendor-8855e047.js"])).validate(e,o.portalItemLayerType);if(p.length>0){const y=`Layer item did not validate:
${p.join(`
`)}`;if(m.error(`_validateAgainstJSONSchema(): ${y}`),((i=o.validationOptions)==null?void 0:i.failPolicy)==="throw"){const x=p.map(_=>new h("sceneservice:schema-validation",_)).concat(r);throw new h("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:x})}}}if(r.length>0)throw new h("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:r})}};return c([u(M)],s.prototype,"id",void 0),c([u({type:b})],s.prototype,"spatialReference",void 0),c([f("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],s.prototype,"readSpatialReference",null),c([u({type:E})],s.prototype,"fullExtent",void 0),c([f("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],s.prototype,"readFullExtent",null),c([u({readOnly:!0,type:z})],s.prototype,"heightModelInfo",void 0),c([u({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],s.prototype,"minScale",void 0),c([u({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],s.prototype,"maxScale",void 0),c([u({readOnly:!0})],s.prototype,"version",void 0),c([f("version",["store.version"])],s.prototype,"readVersion",null),c([u({type:String,json:{read:{source:"copyrightText"}}})],s.prototype,"copyright",void 0),c([u({type:String,json:{read:!1}})],s.prototype,"sublayerTitleMode",void 0),c([u({type:String})],s.prototype,"title",void 0),c([f("portal-item","title")],s.prototype,"readTitlePortalItem",null),c([f("service","title",["name"])],s.prototype,"readTitleService",null),c([u({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],s.prototype,"layerId",void 0),c([u(F)],s.prototype,"url",null),c([C("url")],s.prototype,"writeUrl",null),c([u()],s.prototype,"parsedUrl",null),c([u({readOnly:!0})],s.prototype,"store",void 0),c([u({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],s.prototype,"rootNode",void 0),s=c([D(K)],s),s},R=-1e38,re=!1;var g;(function(n){n[n.existingItem=0]="existingItem",n[n.newItem=1]="newItem"})(g||(g={}));const w="Scene Service",U={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};var I;(function(n){n[n.SAVE=0]="SAVE",n[n.SAVE_AS=1]="SAVE_AS"})(I||(I={}));export{I as L,ie as N,ee as n};