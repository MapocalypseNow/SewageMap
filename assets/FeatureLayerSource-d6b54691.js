import{fr as W,fs as ee,ft as te,fu as k,U as h,eT as I,fv as se,fw as ae,ek as z,dV as Q,fx as D,eb as V,fy as re,K as c,B as ne,f4 as oe,dG as J,b1 as ie,fz as $,aB as F,aC as R,fA as B,aD as L,fB as ue,T as v,fC as le,fD as de,P as q,dO as ce,o as ye,s as O,dg as Z,fE as he,eu as pe,fF as fe,X as me,f0 as Fe,fG as ge,fH as be,fI as Re,y as Oe,ea as Ie,dh as Se,dj as G}from"./vendor-f61b19da.js";import{n as qe,s as we}from"./executeForIds-e3990384.js";var C;(function(t){t[t.PROJECT_VERTICES=1]="PROJECT_VERTICES"})(C||(C={}));function _e(t){const e=t.toJSON();return e.attachmentTypes&&(e.attachmentTypes=e.attachmentTypes.join(",")),e.keywords&&(e.keywords=e.keywords.join(",")),e.globalIds&&(e.globalIds=e.globalIds.join(",")),e.objectIds&&(e.objectIds=e.objectIds.join(",")),e.size&&(e.size=e.size.join(",")),e}function X(t,e){const s={};for(const a of t){const{parentObjectId:r,parentGlobalId:o,attachmentInfos:i}=a;for(const n of i){const{id:u}=n,l=W(ee(`${e}/${r}/attachments/${u}`)),d=te.fromJSON(n);d.set({url:l,parentObjectId:r,parentGlobalId:o}),s[r]?s[r].push(d):s[r]=[d]}}return s}function je(t,e,s){let a={query:k({...t.query,f:"json",..._e(e)})};return s&&(a={...s,...a,query:{...s.query,...a.query}}),h(t.path+"/queryAttachments",a)}async function Ee(t,e,s){const a=I(t);return je(a,se.from(e),{...s}).then(r=>X(r.data.attachmentGroups,a.path))}async function xe(t,e,s){const a=I(t);return ae(a,z.from(e),{...s}).then(r=>({count:r.data.count,extent:Q.fromJSON(r.data.extent)}))}function Te(t,e){const s=t.toJSON();return s.objectIds&&(s.objectIds=s.objectIds.join(",")),s.orderByFields&&(s.orderByFields=s.orderByFields.join(",")),s.outFields&&!(e!=null&&e.returnCountOnly)?s.outFields.includes("*")?s.outFields="*":s.outFields=s.outFields.join(","):delete s.outFields,s.outSpatialReference&&(s.outSR=s.outSR.wkid||JSON.stringify(s.outSR.toJSON()),delete s.outSpatialReference),s.dynamicDataSource&&(s.layer=JSON.stringify({source:s.dynamicDataSource}),delete s.dynamicDataSource),s}async function De(t,e,s){const a=await Y(t,e,s),r=a.data,o=r.geometryType,i=r.spatialReference,n={};for(const u of r.relatedRecordGroups){const l={fields:void 0,objectIdFieldName:void 0,geometryType:o,spatialReference:i,hasZ:!!r.hasZ,hasM:!!r.hasM,features:u.relatedRecords};if(u.objectId!=null)n[u.objectId]=l;else for(const d in u)u.hasOwnProperty(d)&&d!=="relatedRecords"&&(n[u[d]]=l)}return{...a,data:n}}async function $e(t,e,s){const a=await Y(t,e,s,{returnCountOnly:!0}),r=a.data,o={};for(const i of r.relatedRecordGroups)i.objectId!=null&&(o[i.objectId]=i.count);return{...a,data:o}}async function Y(t,e,s={},a){const r=k({...t.query,f:"json",...a,...Te(e,a)});return h(t.path+"/queryRelatedRecords",{...s,query:{...s.query,...r}})}async function Ne(t,e,s){e=D.from(e);const a=I(t);return De(a,e,s).then(r=>{const o=r.data,i={};return Object.keys(o).forEach(n=>i[n]=V.fromJSON(o[n])),i})}async function Ae(t,e,s){e=D.from(e);const a=I(t);return $e(a,e,{...s}).then(r=>r.data)}const P="Layer does not support extent calculation.";function Je(t,e){var o,i;const s=t.geometry,a=t.toJSON(),r=a;if(c(s)&&(r.geometry=JSON.stringify(s),r.geometryType=ie(s),r.inSR=s.spatialReference.wkid||JSON.stringify(s.spatialReference)),(o=a.topFilter)!=null&&o.groupByFields&&(r.topFilter.groupByFields=a.topFilter.groupByFields.join(",")),(i=a.topFilter)!=null&&i.orderByFields&&(r.topFilter.orderByFields=a.topFilter.orderByFields.join(",")),a.topFilter&&(r.topFilter=JSON.stringify(r.topFilter)),a.objectIds&&(r.objectIds=a.objectIds.join(",")),a.orderByFields&&(r.orderByFields=a.orderByFields.join(",")),a.outFields&&!(e!=null&&e.returnCountOnly||e!=null&&e.returnExtentOnly||e!=null&&e.returnIdsOnly)?a.outFields.includes("*")?r.outFields="*":r.outFields=a.outFields.join(","):delete r.outFields,a.outSR?r.outSR=a.outSR.wkid||JSON.stringify(a.outSR):s&&a.returnGeometry&&(r.outSR=r.inSR),a.returnGeometry&&delete a.returnGeometry,a.timeExtent){const n=a.timeExtent,{start:u,end:l}=n;u==null&&l==null||(r.time=u===l?u:`${u??"null"},${l??"null"}`),delete a.timeExtent}return r}async function ve(t,e,s,a){const r=await N(t,e,"json",a);return re(e,s,r.data),r}async function Ce(t,e,s){return c(e.timeExtent)&&e.timeExtent.isEmpty?{data:{objectIds:[]}}:N(t,e,"json",s,{returnIdsOnly:!0})}async function ke(t,e,s){return c(e.timeExtent)&&e.timeExtent.isEmpty?{data:{count:0,extent:null}}:N(t,e,"json",s,{returnExtentOnly:!0,returnCountOnly:!0}).then(a=>{const r=a.data;if(r.hasOwnProperty("extent"))return a;if(r.features)throw new Error(P);if(r.hasOwnProperty("count"))throw new Error(P);return a})}function Qe(t,e,s){return c(e.timeExtent)&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):N(t,e,"json",s,{returnIdsOnly:!0,returnCountOnly:!0})}function N(t,e,s,a={},r={}){const o=typeof t=="string"?ne(t):t,i=e.geometry?[e.geometry]:[];return a.responseType=s==="pbf"?"array-buffer":"json",oe(i,null,a).then(n=>{const u=n&&n[0];c(u)&&((e=e.clone()).geometry=u);const l=k({...o.query,f:s,...r,...Je(e,r)});return h(J(o.path,"queryTopFeatures"),{...a,query:{...l,...a.query}})})}async function Ve(t,e,s,a){const r=I(t),o={...a},{data:i}=await ve(r,$.from(e),s,o);return V.fromJSON(i)}async function Ue(t,e,s){const a=I(t);return(await Ce(a,$.from(e),{...s})).data.objectIds}async function Ge(t,e,s){const a=I(t),r=await ke(a,$.from(e),{...s});return{count:r.data.count,extent:Q.fromJSON(r.data.extent)}}async function Pe(t,e,s){const a=I(t);return(await Qe(a,$.from(e),{...s})).data.count}let b=class extends ue{constructor(t){super(t),this.dynamicDataSource=null,this.fieldsIndex=null,this.format="json",this.gdbVersion=null,this.infoFor3D=null,this.sourceSpatialReference=null}async execute(t,e){const s=await this.executeJSON(t,e);return this.featureSetFromJSON(t,s,e)}async executeJSON(t,e){var u;const s={...this.requestOptions,...e},a=this._normalizeQuery(t),r=((u=t.outStatistics)==null?void 0:u[0])!=null,o=v("featurelayer-pbf-statistics"),i=!r||o;let n;if(this.format==="pbf"&&i)try{n=await le(this.url,a,s)}catch(l){if(l.name!=="query:parsing-pbf")throw l;this.format="json"}return this.format!=="json"&&i||(n=await de(this.url,a,s)),this._normalizeFields(n.fields),n}async featureSetFromJSON(t,e,s){if(!this._queryIs3DObjectFormat(t)||q(this.infoFor3D)||!e.assetMaps||!e.features||!e.features.length)return V.fromJSON(e);const{meshFeatureSetFromJSON:a}=await ce(ye(()=>import("./meshFeatureSet-0fee450a.js").then(r=>r.a),["assets/meshFeatureSet-0fee450a.js","assets/vendor-f61b19da.js","assets/georeference-45262fa8.js","assets/mat3f64-b33e332c.js","assets/mat4f64-3d813481.js","assets/quat-430c5228.js","assets/quatf64-7fd38d64.js","assets/BufferView-5bc6b457.js","assets/vec33-28f8f792.js","assets/earcut-58237617.js","assets/deduplicate-c3104723.js"]),s);return a(t,this.infoFor3D,e)}executeForCount(t,e){const s={...this.requestOptions,...e},a=this._normalizeQuery(t);return qe(this.url,a,s)}executeForExtent(t,e){const s={...this.requestOptions,...e},a=this._normalizeQuery(t);return xe(this.url,a,s)}executeForIds(t,e){const s={...this.requestOptions,...e},a=this._normalizeQuery(t);return we(this.url,a,s)}executeRelationshipQuery(t,e){t=D.from(t);const s={...this.requestOptions,...e};return(this.gdbVersion||this.dynamicDataSource)&&((t=t.clone()).gdbVersion=t.gdbVersion||this.gdbVersion,t.dynamicDataSource=t.dynamicDataSource||this.dynamicDataSource),Ne(this.url,t,s)}executeRelationshipQueryForCount(t,e){t=D.from(t);const s={...this.requestOptions,...e};return(this.gdbVersion||this.dynamicDataSource)&&((t=t.clone()).gdbVersion=t.gdbVersion||this.gdbVersion,t.dynamicDataSource=t.dynamicDataSource||this.dynamicDataSource),Ae(this.url,t,s)}executeAttachmentQuery(t,e){const s={...this.requestOptions,...e};return Ee(this.url,t,s)}executeTopFeaturesQuery(t,e){const s={...this.requestOptions,...e};return Ve(this.parsedUrl,t,this.sourceSpatialReference,s)}executeForTopIds(t,e){const s={...this.requestOptions,...e};return Ue(this.parsedUrl,t,s)}executeForTopExtents(t,e){const s={...this.requestOptions,...e};return Ge(this.parsedUrl,t,s)}executeForTopCount(t,e){const s={...this.requestOptions,...e};return Pe(this.parsedUrl,t,s)}_normalizeQuery(t){let e=z.from(t);if(e.sourceSpatialReference=e.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(e=e===t?e.clone():e,e.gdbVersion=t.gdbVersion||this.gdbVersion,e.dynamicDataSource=t.dynamicDataSource?B.from(t.dynamicDataSource):this.dynamicDataSource),c(this.infoFor3D)&&this._queryIs3DObjectFormat(t)){e=e===t?e.clone():e,e.formatOf3DObjects=null;for(const s of this.infoFor3D.queryFormats){if(s==="3D_glb"){e.formatOf3DObjects=s;break}s!=="3D_gltf"||e.formatOf3DObjects||(e.formatOf3DObjects=s)}if(!e.formatOf3DObjects)throw new O("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(q(e.outFields)||!e.outFields.includes("*")){e=e===t?e.clone():e,q(e.outFields)&&(e.outFields=[]);const{originX:s,originY:a,originZ:r,translationX:o,translationY:i,translationZ:n,scaleX:u,scaleY:l,scaleZ:d,rotationX:g,rotationY:y,rotationZ:p,rotationDeg:m}=this.infoFor3D.transformFieldRoles;e.outFields.push(s,a,r,o,i,n,u,l,d,g,y,p,m)}}return e}_normalizeFields(t){if(c(this.fieldsIndex)&&c(t))for(const e of t){const s=this.fieldsIndex.get(e.name);s&&Object.assign(e,s.toJSON())}}_queryIs3DObjectFormat(t){return c(this.infoFor3D)&&t.returnGeometry&&t.multipatchOption!=="xyFootprint"&&!t.outStatistics}};F([R({type:B})],b.prototype,"dynamicDataSource",void 0),F([R()],b.prototype,"fieldsIndex",void 0),F([R()],b.prototype,"format",void 0),F([R()],b.prototype,"gdbVersion",void 0),F([R()],b.prototype,"infoFor3D",void 0),F([R()],b.prototype,"sourceSpatialReference",void 0),b=F([L("esri.tasks.QueryTask")],b);const Me=b,ze=new Z({originalAndCurrentFeatures:"original-and-current-features",none:"none"});async function M(t){return typeof t=="string"?G(t)||{data:t}:new Promise((e,s)=>{const a=new FileReader;a.readAsDataURL(t),a.onload=()=>e(G(a.result)),a.onerror=r=>s(r)})}const Be=new Set(["Feature Layer","Table"]),Le=new Z({Started:"published",Publishing:"publishing",Stopped:"unavailable"});let w=class extends he{constructor(){super(...arguments),this.type="feature-layer",this.refresh=pe(async()=>{var s,a;await this.load();const t=(s=this.sourceJSON.editingInfo)==null?void 0:s.lastEditDate;if(t==null)return{dataChanged:!0,updates:{}};try{await this._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}const e=t!==((a=this.sourceJSON.editingInfo)==null?void 0:a.lastEditDate);return{dataChanged:e,updates:e?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}})}load(t){const e=c(t)?t.signal:null;return this.addResolvingPromise(this._fetchService(this.layer.sourceJSON,e)),Promise.resolve(this)}get queryTask(){const{capabilities:{query:{supportsFormatPBF:t}},parsedUrl:e,dynamicDataSource:s,infoFor3D:a,gdbVersion:r,spatialReference:o,fieldsIndex:i}=this.layer,n=v("featurelayer-pbf")&&t&&q(a)?"pbf":"json";return new Me({url:e.path,format:n,fieldsIndex:i,infoFor3D:a,dynamicDataSource:s,gdbVersion:r,sourceSpatialReference:o})}async addAttachment(t,e){await this.load();const s=t.attributes[this.layer.objectIdField],a=this.layer.parsedUrl.path+"/"+s+"/addAttachment",r=this._getLayerRequestOptions(),o=this._getFormDataForAttachment(e,r.query);try{const i=await h(a,{body:o});return this._createFeatureEditResult(i.data.addAttachmentResult)}catch(i){throw this._createAttachmentErrorResult(s,i)}}async updateAttachment(t,e,s){await this.load();const a=t.attributes[this.layer.objectIdField],r=this.layer.parsedUrl.path+"/"+a+"/updateAttachment",o=this._getLayerRequestOptions({query:{attachmentId:e}}),i=this._getFormDataForAttachment(s,o.query);try{const n=await h(r,{body:i});return this._createFeatureEditResult(n.data.updateAttachmentResult)}catch(n){throw this._createAttachmentErrorResult(a,n)}}async applyEdits(t,e){await this.load();const s=this.layer.infoFor3D,a=c(s),r=a||(e==null?void 0:e.globalIdUsed),o=t.addFeatures.map(f=>this._serializeFeature(f,s)),i=t.updateFeatures.map(f=>this._serializeFeature(f,s)),n=this._getFeatureIds(t.deleteFeatures,r);fe(o,i,this.layer.spatialReference);const u=[],l=[],d=[...t.deleteAttachments];for(const f of t.addAttachments)u.push(await this._serializeAttachment(f));for(const f of t.updateAttachments)l.push(await this._serializeAttachment(f));const g=u.length||l.length||d.length?{adds:u,updates:l,deletes:d}:null;let y,p=null;if(a){p=new Map;const f=[];for(const _ of t.addAssets)f.push(this._serializeAssetMapEditAndUploadAssets(_,p));const E=await Promise.all(f);y=E.length?{adds:E,updates:[],deletes:[]}:void 0}const m={gdbVersion:(e==null?void 0:e.gdbVersion)||this.layer.gdbVersion,rollbackOnFailure:e==null?void 0:e.rollbackOnFailureEnabled,useGlobalIds:r,returnEditMoment:e==null?void 0:e.returnEditMoment,usePreviousEditMoment:e==null?void 0:e.usePreviousEditMoment,sessionId:e==null?void 0:e.sessionId};e!=null&&e.returnServiceEditsOption?(m.edits=JSON.stringify([{id:this.layer.layerId,adds:o,updates:i,deletes:n,attachments:g,assetMaps:me(y)}]),m.returnServiceEditsOption=ze.toJSON(e==null?void 0:e.returnServiceEditsOption),m.returnServiceEditsInSourceSR=e==null?void 0:e.returnServiceEditsInSourceSR):(m.adds=o.length?JSON.stringify(o):null,m.updates=i.length?JSON.stringify(i):null,m.deletes=n.length?r?JSON.stringify(n):n.join(","):null,m.attachments=g&&JSON.stringify(g),m.assetMaps=c(y)?JSON.stringify(y):void 0);const H=this._getLayerRequestOptions({method:"post",query:m}),U=e!=null&&e.returnServiceEditsOption?this.layer.url:this.layer.parsedUrl.path,j=await h(U+"/applyEdits",H);if(a&&j.data!=null&&j.data.assetMaps!=null){const f=j.data,E=this.layer.objectIdField,_=[];for(const S of f.addResults)S.success&&_.push(S.objectId);for(const S of f.updateResults)S.success&&_.push(S.objectId);const K=this._createRequestQueryOptions(),x=await h(U+"/query",{...K,query:{f:"json",formatOf3DObjects:"3D_glb",where:`OBJECTID IN (${_.join(",")})`,outFields:`${E}`}});if(x&&x.data&&x.data.assetMaps&&c(p)){const S=x.data.assetMaps;for(const A of S){const T=p.get(A.parentGlobalId).geometry;c(T)&&T.type==="mesh"&&T.updateExternalSource({source:[{name:A.assetName,source:A.assetName}],extent:T.extent})}}}return this._createEditsResult(j)}async deleteAttachments(t,e){await this.load();const s=t.attributes[this.layer.objectIdField],a=this.layer.parsedUrl.path+"/"+s+"/deleteAttachments";try{return(await h(a,this._getLayerRequestOptions({query:{attachmentIds:e.join(",")},method:"post"}))).data.deleteAttachmentResults.map(this._createFeatureEditResult)}catch(r){throw this._createAttachmentErrorResult(s,r)}}fetchRecomputedExtents(t={}){const e=t.signal;return this.load({signal:e}).then(async()=>{const s=this._getLayerRequestOptions({...t,query:{returnUpdates:!0}}),{layerId:a,url:r}=this.layer,{data:o}=await h(`${r}/${a}`,s),{id:i,extent:n,fullExtent:u,timeExtent:l}=o,d=n||u;return{id:i,fullExtent:d&&Q.fromJSON(d),timeExtent:l&&Fe.fromJSON({start:l[0],end:l[1]})}})}async queryAttachments(t,e={}){const{parsedUrl:s}=this.layer,a=s.path;await this.load();const r=this._getLayerRequestOptions(e);if(!this.layer.get("capabilities.operations.supportsQueryAttachments")){const{objectIds:o}=t,i=[];for(const n of o){const u=a+"/"+n+"/attachments";i.push(h(u,r))}return Promise.all(i).then(n=>o.map((u,l)=>({parentObjectId:u,attachmentInfos:n[l].data.attachmentInfos}))).then(n=>X(n,a))}return this.queryTask.executeAttachmentQuery(t,r)}async queryFeatures(t,e){return await this.load(),this.queryTask.execute(t,{...e,query:this._createRequestQueryOptions(e)})}async queryFeaturesJSON(t,e){return await this.load(),this.queryTask.executeJSON(t,{...e,query:this._createRequestQueryOptions(e)})}async queryObjectIds(t,e){return await this.load(),this.queryTask.executeForIds(t,{...e,query:this._createRequestQueryOptions(e)})}async queryFeatureCount(t,e){return await this.load(),this.queryTask.executeForCount(t,{...e,query:this._createRequestQueryOptions(e)})}async queryExtent(t,e){return await this.load(),this.queryTask.executeForExtent(t,{...e,query:this._createRequestQueryOptions(e)})}async queryRelatedFeatures(t,e){return await this.load(),this.queryTask.executeRelationshipQuery(t,{...e,query:this._createRequestQueryOptions(e)})}async queryRelatedFeaturesCount(t,e){return await this.load(),this.queryTask.executeRelationshipQueryForCount(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopFeatures(t,e){return await this.load(),this.queryTask.executeTopFeaturesQuery(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopObjectIds(t,e){return await this.load(),this.queryTask.executeForTopIds(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopExtents(t,e){return await this.load(),this.queryTask.executeForTopExtents(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopCount(t,e){return await this.load(),this.queryTask.executeForTopCount(t,{...e,query:this._createRequestQueryOptions(e)})}async fetchPublishingStatus(){if(!ge(this.layer.url))return"unavailable";const t=J(this.layer.url,"status"),e=await h(t,{query:{f:"json"}});return Le.fromJSON(e.data.status)}_createRequestQueryOptions(t){const e={...this.layer.customParameters,token:this.layer.apiKey,...t==null?void 0:t.query};return this.layer.datesInUnknownTimezone&&(e.timeReferenceUnknownClient=!0),e}async _fetchService(t,e){if(!t){const{data:a}=await h(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:v("featurelayer-advanced-symbols")?{returnAdvancedSymbols:!0}:{},signal:e}));t=a}this.sourceJSON=this._patchServiceJSON(t);const s=t.type;if(!Be.has(s))throw new O("feature-layer-source:unsupported-type",`Source type "${s}" is not supported`)}_patchServiceJSON(t){var e;if(t.type!=="Table"&&t.geometryType&&!((e=t==null?void 0:t.drawingInfo)!=null&&e.renderer)&&!t.defaultSymbol){const s=be(t.geometryType).renderer;Re("drawingInfo.renderer",s,t)}return t.geometryType==="esriGeometryMultiPatch"&&t.infoFor3D&&(t.geometryType="mesh"),t}_serializeFeature(t,e){const{geometry:s,attributes:a}=t;if(c(e)&&c(t.geometry)&&t.geometry.type==="mesh"){const r={...a},o=t.geometry,i=o.origin,n=o.transform;if(r[e.transformFieldRoles.originX]=i.x,r[e.transformFieldRoles.originY]=i.y,r[e.transformFieldRoles.originZ]=i.z,c(n)){const u=n.translation,l=n.scale,d=n.rotation;r[e.transformFieldRoles.translationX]=u[0],r[e.transformFieldRoles.translationY]=u[1],r[e.transformFieldRoles.translationZ]=u[2],r[e.transformFieldRoles.scaleX]=l[0],r[e.transformFieldRoles.scaleY]=l[1],r[e.transformFieldRoles.scaleZ]=l[2],r[e.transformFieldRoles.rotationX]=d[0],r[e.transformFieldRoles.rotationY]=d[1],r[e.transformFieldRoles.rotationZ]=d[2],r[e.transformFieldRoles.rotationDeg]=d[3]}return{geometry:null,attributes:r}}return q(s)?{attributes:a}:s.type==="mesh"||s.type==="extent"?null:{geometry:s.toJSON(),attributes:a}}async _serializeAttachment(t){const{feature:e,attachment:s}=t,{globalId:a,name:r,contentType:o,data:i,uploadId:n}=s,u={globalId:a,parentGlobalId:null,contentType:null,name:null,uploadId:null,data:null};if(e&&(u.parentGlobalId="attributes"in e?e.attributes&&e.attributes[this.layer.globalIdField]:e.globalId),n)u.uploadId=n;else if(i){const l=await M(i);u.contentType=l.mediaType,u.data=l.data,i instanceof File&&(u.name=i.name)}return r&&(u.name=r),o&&(u.contentType=o),u}async _serializeAssetMapEditAndUploadAssets(t,e){const s=this.layer.url;let a=null;try{const l=new Blob([t.data],{type:t.mimeType}),d=new FormData;d.append("f","json"),d.append("file",l,`${t.assetName}`);const g={body:d,method:"post",responseType:"json"},{data:y}=await h(`${s}/uploads/upload`,g);if(!y.success)throw new O("feature-layer-source:upload-failure","Expected upload to be successfull.");a={assetType:t.assetType,assetUploadId:y.item.itemID}}catch{a=null}if(q(a)){const l=await M(new Blob([t.data]));if(!l.isBase64)throw new O("feature-layer-source:uploadAssets-failure","Expected gltf data in base64 format after conversion.");a={assetType:t.assetType,assetData:l.data}}if(q(a))throw new O("feature-layer-source:uploadAssets-failure","Unable to prepare uploadAsset request options.");const r={method:"post",query:{f:"json",assets:JSON.stringify([a])},responseType:"json"},o=await h(J(this.layer.parsedUrl.path,"uploadAssets"),r);if(o.data.uploadResults.length!==1||!o.data.uploadResults[0].success)throw new O("feature-layer-source:uploadAssets-failure","Bad response.");const i=o.data.uploadResults[0].assetHash,n=[];t.flags&C.PROJECT_VERTICES&&n.push("PROJECT_VERTICES");const u={globalId:t.assetMapGlobalId,parentGlobalId:t.featureGlobalId,assetName:t.assetName,assetHash:i,flags:n};return e.set(t.featureGlobalId,t.feature),u}_getFeatureIds(t,e){const s=t[0];return s?this._canUseGlobalIds(e,t)?this._getGlobalIdsFromFeatureIdentifier(t):"objectId"in s?this._getObjectIdsFromFeatureIdentifier(t):this._getIdsFromFeatures(t):[]}_getIdsFromFeatures(t){const e=this.layer.objectIdField;return t.map(s=>s.attributes&&s.attributes[e])}_canUseGlobalIds(t,e){return t&&"globalId"in e[0]}_getObjectIdsFromFeatureIdentifier(t){return t.map(e=>e.objectId)}_getGlobalIdsFromFeatureIdentifier(t){return t.map(e=>e.globalId)}_createEditsResult(t){const e=t.data,{layerId:s}=this.layer,a=[];let r=null;if(Array.isArray(e))for(const n of e)a.push({id:n.id,editedFeatures:n.editedFeatures}),n.id===s&&(r={addResults:n.addResults,updateResults:n.updateResults,deleteResults:n.deleteResults,attachments:n.attachments,editMoment:n.editMoment});else r=e;const o=r==null?void 0:r.attachments,i={addFeatureResults:r.addResults?r.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:r.updateResults?r.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:r.deleteResults?r.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:o&&o.addResults?o.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:o&&o.updateResults?o.updateResults.map(this._createFeatureEditResult,this):[],deleteAttachmentResults:o&&o.deleteResults?o.deleteResults.map(this._createFeatureEditResult,this):[]};if(r.editMoment&&(i.editMoment=r.editMoment),a.length>0){i.editedFeatureResults=[];for(const n of a){const{adds:u,updates:l,deletes:d,spatialReference:g}=n.editedFeatures,y=g?new Oe(g):null;i.editedFeatureResults.push({layerId:n.id,editedFeatures:{adds:(u==null?void 0:u.map(p=>this._createEditedFeature(p,y)))||[],updates:(l==null?void 0:l.map(p=>({original:this._createEditedFeature(p[0],y),current:this._createEditedFeature(p[1],y)})))||[],deletes:(d==null?void 0:d.map(p=>this._createEditedFeature(p,y)))||[],spatialReference:y}})}}return i}_createEditedFeature(t,e){return new Ie({attributes:t.attributes,geometry:Se({...t.geometry,spatialReference:e})})}_createFeatureEditResult(t){const e=t.success===!0?null:t.error||{code:void 0,description:void 0};return{objectId:t.objectId,globalId:t.globalId,error:e?new O("feature-layer-source:edit-failure",e.description,{code:e.code}):null}}_createAttachmentErrorResult(t,e){const s=e.details.messages&&e.details.messages[0]||e.message,a=e.details.httpStatus||e.details.messageCode;return{objectId:t,globalId:null,error:new O("feature-layer-source:attachment-failure",s,{code:a})}}_getFormDataForAttachment(t,e){const s=t instanceof FormData?t:t&&t.elements?new FormData(t):null;if(s)for(const a in e){const r=e[a];r!=null&&(s.set?s.set(a,r):s.append(a,r))}return s}_getLayerRequestOptions(t={}){const{parsedUrl:e,gdbVersion:s,dynamicDataSource:a}=this.layer;return{...t,query:{gdbVersion:s,layer:a?JSON.stringify({source:a}):void 0,...e.query,f:"json",...this._createRequestQueryOptions(t)},responseType:"json"}}};F([R()],w.prototype,"type",void 0),F([R({constructOnly:!0})],w.prototype,"layer",void 0),F([R({readOnly:!0})],w.prototype,"queryTask",null),w=F([L("esri.layers.graphics.sources.FeatureLayerSource")],w);const Ye=w;export{Ye as default};
