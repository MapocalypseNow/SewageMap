import{e as V,f as N,y as k,g as $,h as X,r as m,i as G,k as J,U as f,l as Y,n as Z,w as H,T as K,o as W,V as P,s as _,p as ee,q as te,u as se,v as ae,z as re,A as ie,B as z}from"./index.js";import{E as ne}from"./assetEditingSupport.js";import{x as oe}from"./QueryTask.js";import"./executeForIds.js";const ue=new V({originalAndCurrentFeatures:"original-and-current-features",none:"none"});async function L(t){return typeof t=="string"?z(t)||{data:t}:new Promise((e,a)=>{const r=new FileReader;r.readAsDataURL(t),r.onload=()=>e(z(r.result)),r.onerror=s=>a(s)})}const le=new Set(["Feature Layer","Table"]),de=new V({Started:"published",Publishing:"publishing",Stopped:"unavailable"});let E=class extends ${constructor(){super(...arguments),this.type="feature-layer",this.refresh=X(async()=>{var a,r;await this.load();const t=(a=this.sourceJSON.editingInfo)==null?void 0:a.lastEditDate;if(t==null)return{dataChanged:!0,updates:{}};try{await this._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}const e=t!==((r=this.sourceJSON.editingInfo)==null?void 0:r.lastEditDate);return{dataChanged:e,updates:e?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}})}load(t){const e=m(t)?t.signal:null,a=this.layer.sourceJSON;return this.addResolvingPromise(this._fetchService(a,e)),Promise.resolve(this)}get queryTask(){var o,d;const{capabilities:t,parsedUrl:e,dynamicDataSource:a,infoFor3D:r,gdbVersion:s,spatialReference:i,fieldsIndex:n}=this.layer,u=G("featurelayer-pbf")&&(t==null?void 0:t.query.supportsFormatPBF)&&J(r),l=(d=(o=t==null?void 0:t.operations)==null?void 0:o.supportsQueryAttachments)!=null?d:!1;return new oe({url:e.path,pbfSupported:u,fieldsIndex:n,infoFor3D:r,dynamicDataSource:a,gdbVersion:s,sourceSpatialReference:i,queryAttachmentsSupported:l})}async addAttachment(t,e){await this.load();const a=t.attributes[this.layer.objectIdField],r=this.layer.parsedUrl.path+"/"+a+"/addAttachment",s=this._getLayerRequestOptions(),i=this._getFormDataForAttachment(e,s.query);try{const n=await f(r,{body:i});return this._createFeatureEditResult(n.data.addAttachmentResult)}catch(n){throw this._createAttachmentErrorResult(a,n)}}async updateAttachment(t,e,a){await this.load();const r=t.attributes[this.layer.objectIdField],s=this.layer.parsedUrl.path+"/"+r+"/updateAttachment",i=this._getLayerRequestOptions({query:{attachmentId:e}}),n=this._getFormDataForAttachment(a,i.query);try{const u=await f(s,{body:n});return this._createFeatureEditResult(u.data.updateAttachmentResult)}catch(u){throw this._createAttachmentErrorResult(r,u)}}async applyEdits(t,e){var w,O,S,b,g,U,M,Q,C;await this.load();const a=this.layer.infoFor3D,r=m(a),s=r||((w=e==null?void 0:e.globalIdUsed)!=null?w:!1),i=(S=(O=t.addFeatures)==null?void 0:O.map(h=>this._serializeFeature(h,a)).filter(m))!=null?S:[],n=(g=(b=t.updateFeatures)==null?void 0:b.map(h=>this._serializeFeature(h,a)).filter(m))!=null?g:[],u=this._getFeatureIds(t.deleteFeatures,s);Y(i,n,this.layer.spatialReference);const l=[],o=[],d=[...(U=t.deleteAttachments)!=null?U:[]];for(const h of(M=t.addAttachments)!=null?M:[])l.push(await this._serializeAttachment(h));for(const h of(Q=t.updateAttachments)!=null?Q:[])o.push(await this._serializeAttachment(h));const R=l.length||o.length||d.length?{adds:l,updates:o,deletes:d}:null;let y,q=null;if(r){q=new Map;const h=[];for(const T of(C=t.addAssets)!=null?C:[])h.push(this._serializeAssetMapEditAndUploadAssets(T,q));const x=await Promise.all(h);y=x.length?{adds:x,updates:[],deletes:[]}:void 0}const p={gdbVersion:(e==null?void 0:e.gdbVersion)||this.layer.gdbVersion,rollbackOnFailure:e==null?void 0:e.rollbackOnFailureEnabled,useGlobalIds:s,returnEditMoment:e==null?void 0:e.returnEditMoment,usePreviousEditMoment:e==null?void 0:e.usePreviousEditMoment,sessionId:e==null?void 0:e.sessionId};e!=null&&e.returnServiceEditsOption?(p.edits=JSON.stringify([{id:this.layer.layerId,adds:i,updates:n,deletes:u,attachments:R,assetMaps:Z(y)}]),p.returnServiceEditsOption=ue.toJSON(e==null?void 0:e.returnServiceEditsOption),p.returnServiceEditsInSourceSR=e==null?void 0:e.returnServiceEditsInSourceSR):(p.adds=i.length?JSON.stringify(i):null,p.updates=n.length?JSON.stringify(n):null,p.deletes=u.length?s?JSON.stringify(u):u.join(","):null,p.attachments=R&&JSON.stringify(R),p.assetMaps=m(y)?JSON.stringify(y):void 0);const A=this._getLayerRequestOptions({method:"post",query:p}),c=e!=null&&e.returnServiceEditsOption?this.layer.url:this.layer.parsedUrl.path,F=await f(c+"/applyEdits",A);if(r&&F.data!=null&&F.data.assetMaps!=null){const h=F.data,x=this.layer.objectIdField,T=[];for(const I of h.addResults)I.success&&T.push(I.objectId);for(const I of h.updateResults)I.success&&T.push(I.objectId);const B=this._createRequestQueryOptions(),j=await f(c+"/query",{...B,query:{f:"json",formatOf3DObjects:"3D_glb",where:`OBJECTID IN (${T.join(",")})`,outFields:`${x}`}});if(j&&j.data&&j.data.assetMaps&&m(q)){const I=j.data.assetMaps;for(const D of I){const v=q.get(D.parentGlobalId).geometry;m(v)&&v.type==="mesh"&&v.updateExternalSource({source:[{name:D.assetName,source:D.assetName}],extent:v.extent})}}}return this._createEditsResult(F)}async deleteAttachments(t,e){await this.load();const a=t.attributes[this.layer.objectIdField],r=this.layer.parsedUrl.path+"/"+a+"/deleteAttachments";try{return(await f(r,this._getLayerRequestOptions({query:{attachmentIds:e.join(",")},method:"post"}))).data.deleteAttachmentResults.map(this._createFeatureEditResult)}catch(s){throw this._createAttachmentErrorResult(a,s)}}fetchRecomputedExtents(t={}){const e=t.signal;return this.load({signal:e}).then(async()=>{const a=this._getLayerRequestOptions({...t,query:{returnUpdates:!0}}),{layerId:r,url:s}=this.layer,{data:i}=await f(`${s}/${r}`,a),{id:n,extent:u,fullExtent:l,timeExtent:o}=i,d=u||l;return{id:n,fullExtent:d&&H.fromJSON(d),timeExtent:o&&K.fromJSON({start:o[0],end:o[1]})}})}async queryAttachments(t,e={}){await this.load();const a=this._getLayerRequestOptions(e);return this.queryTask.executeAttachmentQuery(t,a)}async queryFeatures(t,e){return await this.load(),this.queryTask.execute(t,{...e,query:this._createRequestQueryOptions(e)})}async queryFeaturesJSON(t,e){return await this.load(),this.queryTask.executeJSON(t,{...e,query:this._createRequestQueryOptions(e)})}async queryObjectIds(t,e){return await this.load(),this.queryTask.executeForIds(t,{...e,query:this._createRequestQueryOptions(e)})}async queryFeatureCount(t,e){return await this.load(),this.queryTask.executeForCount(t,{...e,query:this._createRequestQueryOptions(e)})}async queryExtent(t,e){return await this.load(),this.queryTask.executeForExtent(t,{...e,query:this._createRequestQueryOptions(e)})}async queryRelatedFeatures(t,e){return await this.load(),this.queryTask.executeRelationshipQuery(t,{...e,query:this._createRequestQueryOptions(e)})}async queryRelatedFeaturesCount(t,e){return await this.load(),this.queryTask.executeRelationshipQueryForCount(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopFeatures(t,e){return await this.load(),this.queryTask.executeTopFeaturesQuery(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopObjectIds(t,e){return await this.load(),this.queryTask.executeForTopIds(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopExtents(t,e){return await this.load(),this.queryTask.executeForTopExtents(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopCount(t,e){return await this.load(),this.queryTask.executeForTopCount(t,{...e,query:this._createRequestQueryOptions(e)})}async fetchPublishingStatus(){if(!W(this.layer.url))return"unavailable";const t=P(this.layer.url,"status"),e=await f(t,{query:{f:"json"}});return de.fromJSON(e.data.status)}_createRequestQueryOptions(t){const e={...this.layer.customParameters,token:this.layer.apiKey,...t==null?void 0:t.query};return this.layer.datesInUnknownTimezone&&(e.timeReferenceUnknownClient=!0),e}async _fetchService(t,e){if(!t){const{data:r}=await f(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:G("featurelayer-advanced-symbols")?{returnAdvancedSymbols:!0}:{},signal:e}));t=r}this.sourceJSON=this._patchServiceJSON(t);const a=t.type;if(!le.has(a))throw new _("feature-layer-source:unsupported-type",`Source type "${a}" is not supported`)}_patchServiceJSON(t){var e;if(t.type!=="Table"&&t.geometryType&&!((e=t==null?void 0:t.drawingInfo)!=null&&e.renderer)&&!t.defaultSymbol){const a=ee(t.geometryType).renderer;te("drawingInfo.renderer",a,t)}return t.geometryType==="esriGeometryMultiPatch"&&t.infoFor3D&&(t.geometryType="mesh"),t}_serializeFeature(t,e){const{geometry:a,attributes:r}=t;if(m(e)&&m(t.geometry)&&t.geometry.type==="mesh"){const s={...r},i=t.geometry,n=i.origin,u=i.transform;if(s[e.transformFieldRoles.originX]=n.x,s[e.transformFieldRoles.originY]=n.y,s[e.transformFieldRoles.originZ]=n.z,m(u)){const l=u.translation,o=u.scale,d=u.rotation;s[e.transformFieldRoles.translationX]=l[0],s[e.transformFieldRoles.translationY]=-l[2],s[e.transformFieldRoles.translationZ]=l[1],s[e.transformFieldRoles.scaleX]=o[0],s[e.transformFieldRoles.scaleY]=o[1],s[e.transformFieldRoles.scaleZ]=o[2],s[e.transformFieldRoles.rotationX]=d[0],s[e.transformFieldRoles.rotationY]=d[2],s[e.transformFieldRoles.rotationZ]=d[1],s[e.transformFieldRoles.rotationDeg]=d[3]}return{geometry:null,attributes:s}}return J(a)?{attributes:r}:a.type==="mesh"||a.type==="extent"?null:{geometry:a.toJSON(),attributes:r}}async _serializeAttachment(t){const{feature:e,attachment:a}=t,{globalId:r,name:s,contentType:i,data:n,uploadId:u}=a,l={globalId:r,parentGlobalId:null,contentType:null,name:null,uploadId:null,data:null};if(e&&(l.parentGlobalId="attributes"in e?e.attributes&&e.attributes[this.layer.globalIdField]:e.globalId),u)l.uploadId=u;else if(n){const o=await L(n);o&&(l.contentType=o.mediaType,l.data=o.data),n instanceof File&&(l.name=n.name)}return s&&(l.name=s),i&&(l.contentType=i),l}async _serializeAssetMapEditAndUploadAssets(t,e){const a=this.layer.url;let r=null;try{const o=new Blob([t.data],{type:t.mimeType}),d=new FormData;d.append("f","json"),d.append("file",o,`${t.assetName}`);const R={body:d,method:"post",responseType:"json"},{data:y}=await f(`${a}/uploads/upload`,R);if(!y.success)throw new _("feature-layer-source:upload-failure","Expected upload to be successfull.");r={assetType:t.assetType,assetUploadId:y.item.itemID}}catch{r=null}if(J(r)){const o=await L(new Blob([t.data]));if(!o.isBase64)throw new _("feature-layer-source:uploadAssets-failure","Expected gltf data in base64 format after conversion.");r={assetType:t.assetType,assetData:o.data}}if(J(r))throw new _("feature-layer-source:uploadAssets-failure","Unable to prepare uploadAsset request options.");const s={method:"post",query:{f:"json",assets:JSON.stringify([r])},responseType:"json"},i=await f(P(this.layer.parsedUrl.path,"uploadAssets"),s);if(i.data.uploadResults.length!==1||!i.data.uploadResults[0].success)throw new _("feature-layer-source:uploadAssets-failure","Bad response.");const n=i.data.uploadResults[0].assetHash,u=[];t.flags&ne.PROJECT_VERTICES&&u.push("PROJECT_VERTICES");const l={globalId:t.assetMapGlobalId,parentGlobalId:t.featureGlobalId,assetName:t.assetName,assetHash:n,flags:u};return e.set(t.featureGlobalId,t.feature),l}_getFeatureIds(t,e){const a=t==null?void 0:t[0];return a?this._canUseGlobalIds(e,t)?this._getGlobalIdsFromFeatureIdentifier(t):"objectId"in a?this._getObjectIdsFromFeatureIdentifier(t):this._getIdsFromFeatures(t):[]}_getIdsFromFeatures(t){const e=this.layer.objectIdField;return t.map(a=>a.attributes&&a.attributes[e])}_canUseGlobalIds(t,e){return t&&"globalId"in e[0]}_getObjectIdsFromFeatureIdentifier(t){return t.map(e=>e.objectId)}_getGlobalIdsFromFeatureIdentifier(t){return t.map(e=>e.globalId)}_createEditsResult(t){var u,l,o,d,R,y,q,p,A;const e=t.data,{layerId:a}=this.layer,r=[];let s=null;if(Array.isArray(e))for(const c of e)r.push({id:c.id,editedFeatures:c.editedFeatures}),c.id===a&&(s={addResults:(u=c.addResults)!=null?u:[],updateResults:(l=c.updateResults)!=null?l:[],deleteResults:(o=c.deleteResults)!=null?o:[],attachments:c.attachments,editMoment:c.editMoment});else s=e;const i=s==null?void 0:s.attachments,n={addFeatureResults:(R=(d=s==null?void 0:s.addResults)==null?void 0:d.map(this._createFeatureEditResult,this))!=null?R:[],updateFeatureResults:(q=(y=s==null?void 0:s.updateResults)==null?void 0:y.map(this._createFeatureEditResult,this))!=null?q:[],deleteFeatureResults:(A=(p=s==null?void 0:s.deleteResults)==null?void 0:p.map(this._createFeatureEditResult,this))!=null?A:[],addAttachmentResults:i&&i.addResults?i.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:i&&i.updateResults?i.updateResults.map(this._createFeatureEditResult,this):[],deleteAttachmentResults:i&&i.deleteResults?i.deleteResults.map(this._createFeatureEditResult,this):[]};if(s!=null&&s.editMoment&&(n.editMoment=s.editMoment),r.length>0){n.editedFeatureResults=[];for(const c of r){const{adds:F,updates:w,deletes:O,spatialReference:S}=c.editedFeatures,b=S?new se(S):null;n.editedFeatureResults.push({layerId:c.id,editedFeatures:{adds:(F==null?void 0:F.map(g=>this._createEditedFeature(g,b)))||[],updates:(w==null?void 0:w.map(g=>({original:this._createEditedFeature(g[0],b),current:this._createEditedFeature(g[1],b)})))||[],deletes:(O==null?void 0:O.map(g=>this._createEditedFeature(g,b)))||[],spatialReference:b}})}}return n}_createEditedFeature(t,e){return new ae({attributes:t.attributes,geometry:re({...t.geometry,spatialReference:e})})}_createFeatureEditResult(t){const e=t.success===!0?null:t.error||{code:void 0,description:void 0};return{objectId:t.objectId,globalId:t.globalId,error:e?new _("feature-layer-source:edit-failure",e.description,{code:e.code}):null}}_createAttachmentErrorResult(t,e){const a=e.details.messages&&e.details.messages[0]||e.message,r=e.details.httpStatus||e.details.messageCode;return{objectId:t,globalId:null,error:new _("feature-layer-source:attachment-failure",a,{code:r})}}_getFormDataForAttachment(t,e){const a=t instanceof FormData?t:t&&t.elements?new FormData(t):null;if(a)for(const r in e){const s=e[r];s!=null&&(a.set?a.set(r,s):a.append(r,s))}return a}_getLayerRequestOptions(t={}){const{parsedUrl:e,gdbVersion:a,dynamicDataSource:r}=this.layer;return{...t,query:{gdbVersion:a,layer:r?JSON.stringify({source:r}):void 0,...e.query,f:"json",...this._createRequestQueryOptions(t)},responseType:"json"}}};N([k()],E.prototype,"type",void 0),N([k({constructOnly:!0})],E.prototype,"layer",void 0),N([k({readOnly:!0})],E.prototype,"queryTask",null),E=N([ie("esri.layers.graphics.sources.FeatureLayerSource")],E);const me=E;export{me as default};
