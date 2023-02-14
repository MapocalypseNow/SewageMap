import{dr as W,hw as te,r as p,l as y,hP as se,eX as ie,av as m,ae as z,cR as H,f as u,g as d,G as O,P as X,bw as Y,aW as A,hQ as N,es as P,bM as D,fr as re,hR as ne,fq as K,z as ae,M as oe,N as I,w as le,bT as ce,a2 as he,d$ as ue,q as de,hS as fe,hT as pe,hU as _e,hV as ge,dz as ye,eo as me,ga as Ee,gp as Ce,a0 as Fe,fm as x,hW as Te,hX as U,hY as ee,et as ve,b7 as Se,hZ as M,aQ as be,h_ as j,D as q,h$ as Ie,aT as B,fl as we}from"./vendor.f8a4aecc.js";import{g as xe}from"./FeatureStore.ce85c997.js";import{e as Oe}from"./QueryEngine.88dac3fa.js";import{o as $e}from"./BoundsStore.612a541f.js";import"./centroid.9e8a0f0b.js";import"./utils.8a4b09c9.js";import"./projectionSupport.258a3ed3.js";import"./json.5152e73f.js";import"./QueryEngineResult.209e1055.js";import"./WhereClause.d1d9a78f.js";import"./executionError.c4c51b90.js";import"./timeSupport.f686ff6b.js";import"./PooledRBush.eee5348f.js";function V(e=!1,t){if(e){const{elevationInfo:s,alignPointsInFeatures:i,spatialReference:r}=t;return new Pe(s,i,r)}return new Ae}class Ae{async alignCandidates(t,s){return t}notifyElevationSourceChange(){}}const Re=1024;class Pe{constructor(t,s,i){this._elevationInfo=t,this._alignPointsInFeatures=s,this.spatialReference=i,this._alignmentsCache=new W(Re),this._cacheVersion=0,this._metersPerVerticalUnit=te(i)}async alignCandidates(t,s){const i=this._elevationInfo;return p(i)&&i.mode==="absolute-height"&&!i.featureExpressionInfo?(this._alignAbsoluteElevationCandidates(t,i),t):this._alignComputedElevationCandidates(t,s)}notifyElevationSourceChange(){this._alignmentsCache.clear(),this._cacheVersion++}_alignAbsoluteElevationCandidates(t,s){const{offset:i,unit:r}=s;if(y(i))return;const n=i*(se(r!=null?r:"meters")/this._metersPerVerticalUnit);for(const a of t)switch(a.type){case"edge":a.start.z+=n,a.end.z+=n;continue;case"vertex":a.target.z+=n;continue}}async _alignComputedElevationCandidates(t,s){const i=new Map;for(const _ of t)ie(i,_.objectId,ze).push(_);const[r,n,a]=this._prepareQuery(i),o=await this._alignPointsInFeatures(r,s);if(m(s),a!==this._cacheVersion)return this._alignComputedElevationCandidates(t,s);this._applyCacheAndResponse(r,o,n);const{drapedObjectIds:c,failedObjectIds:h}=o,f=[];for(const _ of t){const{objectId:E}=_;c.has(E)&&_.type==="edge"&&(_.draped=!0),h.has(E)||f.push(_)}return f}_prepareQuery(t){const s=[],i=[];for(const[r,n]of t){const a=[];for(const o of n)this._addToQueriesOrCachedResult(r,o.target,a,i),o.type==="edge"&&(this._addToQueriesOrCachedResult(r,o.start,a,i),this._addToQueriesOrCachedResult(r,o.end,a,i));a.length!==0&&s.push({objectId:r,points:a})}return[s,i,this._cacheVersion]}_addToQueriesOrCachedResult(t,s,i,r){const n=k(t,s),a=this._alignmentsCache.get(n);p(a)?r.push(new De(s,a)):i.push(s)}_applyCacheAndResponse(t,{elevations:s,drapedObjectIds:i,failedObjectIds:r},n){for(const c of n)c.apply();let a=0;const o=this._alignmentsCache;for(const{objectId:c,points:h}of t){if(r.has(c)){a+=h.length;continue}const f=!i.has(c);for(const _ of h){const E=k(c,_),C=s[a++];_.z=C,f&&o.put(E,C,1)}}}}class De{constructor(t,s){this.point=t,this.z=s}apply(){this.point.z=this.z}}function k(e,{x:t,y:s,z:i}){return`${e}-${t}-${s}-${i!=null?i:0}}`}function ze(){return[]}class He{filter(t,s){return s}notifyElevationSourceChange(){}}class Ne{filter(t,s){const{point:i,distance:r}=t,{z:n}=i;if(n==null||s.length===0)return s;const a=Be(r),o=this._updateCandidatesTo3D(s,i,a).filter(Ue);return o.sort(Ve),o}_updateCandidatesTo3D(t,s,i){for(const r of t)switch(r.type){case"edge":Me(r,s,i);continue;case"vertex":qe(r,s,i);continue}return t}}function Ue(e){return e.distance<=1}function Q(e=!1){return e?new Ne:new He}function Me(e,t,{x:s,y:i,z:r}){const{start:n,end:a,target:o}=e;e.draped||je(o,t,n,a);const c=(t.x-o.x)/s,h=(t.y-o.y)/i,f=(t.z-o.z)/r;e.distance=Math.sqrt(c*c+h*h+f*f)}function je(e,t,s,i){const r=i.x-s.x,n=i.y-s.y,a=i.z-s.z,o=r*r+n*n+a*a,c=(t.x-s.x)*r+(t.y-s.y)*n+a*(t.z-s.z),h=Math.min(1,Math.max(0,c/o)),f=s.x+r*h,_=s.y+n*h,E=s.z+a*h;e.x=f,e.y=_,e.z=E}function qe(e,t,{x:s,y:i,z:r}){const{target:n}=e,a=(t.x-n.x)/s,o=(t.y-n.y)/i,c=(t.z-n.z)/r,h=Math.sqrt(a*a+o*o+c*c);e.distance=h}function Be(e){return typeof e=="number"?{x:e,y:e,z:e}:e}function Ve(e,t){return e.distance-t.distance}function L(e=!1,t){return e?new Le(t):new ke}class ke{async fetch(){return[]}notifySymbologyChange(){}}const Qe=1024;class Le{constructor(t){this._getSymbologyCandidates=t,this._candidatesCache=new W(Qe),this._cacheVersion=0}async fetch(t,s){if(t.length===0)return[];const i=[],r=[],n=this._candidatesCache;for(const _ of t){const E=J(_),C=n.get(E);if(C)for(const b of C)r.push(z(b));else i.push(_),n.put(E,[],1)}if(i.length===0)return r;const a=this._cacheVersion,{candidates:o,sourceCandidateIndices:c}=await this._getSymbologyCandidates(i,s);if(m(s),a!==this._cacheVersion)return this.fetch(t,s);const h=[],{length:f}=o;for(let _=0;_<f;++_){const E=o[_],C=J(i[c[_]]),b=n.get(C);b.push(E),n.put(C,b,b.length),h.push(z(E))}return r.concat(h)}notifySymbologyChange(){this._candidatesCache.clear(),this._cacheVersion++}}function J(e){var t,s,i;switch(e.type){case"vertex":{const{objectId:r,target:n}=e,a=`${r}-vertex-${n.x}-${n.y}-${(t=n.z)!=null?t:0}`;return H(a).toString()}case"edge":{const{objectId:r,start:n,end:a}=e,o=`${r}-edge-${n.x}-${n.y}-${(s=n.z)!=null?s:0}-to-${a.x}-${a.y}-${(i=a.z)!=null?i:0}`;return H(o).toString()}default:return""}}let w=class extends X{constructor(){super(...arguments),this.updating=!1,this._pending=[]}push(e,t){this._pending.push({promise:e,callback:t}),this._pending.length===1&&this._process()}_process(){if(!this._pending.length)return void(this.updating=!1);this.updating=!0;const e=this._pending[0];e.promise.then(t=>e.callback(t)).catch(()=>{}).then(()=>{this._pending.shift(),this._process()})}};u([d()],w.prototype,"updating",void 0),w=u([O("esri.core.AsyncSequence")],w);class Je{constructor(t,s){this.data=t,this.resolution=s,this.state={type:l.CREATED},this.alive=!0}process(t){switch(this.state.type){case l.CREATED:return this.state=this._gotoFetchCount(this.state,t),this.state.task.promise.then(t.resume,t.resume);case l.FETCH_COUNT:break;case l.FETCHED_COUNT:return this.state=this._gotoFetchFeatures(this.state,t),this.state.task.promise.then(t.resume,t.resume);case l.FETCH_FEATURES:break;case l.FETCHED_FEATURES:this.state=this._goToDone(this.state,t);case l.DONE:}return null}get debugInfo(){return{data:this.data,featureCount:this._featureCount,state:this._stateToString}}get _featureCount(){switch(this.state.type){case l.CREATED:case l.FETCH_COUNT:return 0;case l.FETCHED_COUNT:return this.state.featureCount;case l.FETCH_FEATURES:return this.state.previous.featureCount;case l.FETCHED_FEATURES:return this.state.features.length;case l.DONE:return this.state.previous.features.length}}get _stateToString(){switch(this.state.type){case l.CREATED:return"created";case l.FETCH_COUNT:return"fetch-count";case l.FETCHED_COUNT:return"fetched-count";case l.FETCH_FEATURES:return"fetch-features";case l.FETCHED_FEATURES:return"fetched-features";case l.DONE:return"done"}}_gotoFetchCount(t,s){return{type:l.FETCH_COUNT,previous:t,task:A(async i=>{const r=await N(s.fetchCount(this,i));this.state.type===l.FETCH_COUNT&&(this.state=this._gotoFetchedCount(this.state,r.ok?r.value:1/0))})}}_gotoFetchedCount(t,s){return{type:l.FETCHED_COUNT,featureCount:s,previous:t}}_gotoFetchFeatures(t,s){return{type:l.FETCH_FEATURES,previous:t,task:A(async i=>{const r=await N(s.fetchFeatures(this,t.featureCount,i));this.state.type===l.FETCH_FEATURES&&(this.state=this._gotoFetchedFeatures(this.state,r.ok?r.value:[]))})}}_gotoFetchedFeatures(t,s){return{type:l.FETCHED_FEATURES,previous:t,features:s}}_goToDone(t,s){return s.finish(this,t.features),{type:l.DONE,previous:t}}reset(){const t=this.state;switch(this.state={type:l.CREATED},t.type){case l.CREATED:case l.FETCHED_COUNT:case l.FETCHED_FEATURES:case l.DONE:break;case l.FETCH_COUNT:case l.FETCH_FEATURES:t.task.abort()}}intersects(t){return!(!y(t)&&this.data.extent)||(P(t,G),D(this.data.extent,G))}}var l;(function(e){e[e.CREATED=0]="CREATED",e[e.FETCH_COUNT=1]="FETCH_COUNT",e[e.FETCHED_COUNT=2]="FETCHED_COUNT",e[e.FETCH_FEATURES=3]="FETCH_FEATURES",e[e.FETCHED_FEATURES=4]="FETCHED_FEATURES",e[e.DONE=5]="DONE"})(l||(l={}));const G=Y();let g=class extends re{get _minimumVerticesPerFeature(){var e;switch((e=this.store)==null?void 0:e.featureStore.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":return 1;case"esriGeometryPolygon":return 4;case"esriGeometryPolyline":return 2}}set filter(e){const t=this._get("filter"),s=this._filterProperties(e);JSON.stringify(t)!==JSON.stringify(s)&&this._set("filter",s)}set customParameters(e){const t=this._get("customParameters");JSON.stringify(t)!==JSON.stringify(e)&&this._set("customParameters",e)}get _configuration(){return{filter:this.filter,customParameters:this.customParameters,tileInfo:this.tileInfo,tileSize:this.tileSize}}set tileInfo(e){const t=this._get("tileInfo");t!==e&&(p(e)&&p(t)&&JSON.stringify(e)===JSON.stringify(t)||(this._set("tileInfo",e),this.store.tileInfo=e))}set tileSize(e){this._get("tileSize")!==e&&this._set("tileSize",e)}get updating(){return this.updatingExcludingEdits||this._pendingEdits.updating}get updatingExcludingEdits(){return this.updatingHandles.updating}get hasZ(){return this.store.featureStore.hasZ}constructor(e){super(e),this.tilesOfInterest=[],this.availability=0,this._pendingTiles=new Map,this._pendingEdits=new w,this._pendingEditsAbortController=new AbortController}initialize(){this._initializeFetchExtent(),this.updatingHandles.add(()=>this._configuration,()=>this.refresh()),this.updatingHandles.add(()=>this.tilesOfInterest,(e,t)=>{ne(e,t,({id:s},{id:i})=>s===i)||this._process()},K)}destroy(){this._pendingTiles.forEach(e=>this._deletePendingTile(e)),this._pendingTiles.clear(),this.store.destroy(),this.tilesOfInterest.length=0,this._pendingEditsAbortController.abort(),this._pendingEditsAbortController=null}refresh(){this.store.refresh(),this._pendingTiles.forEach(e=>this._deletePendingTile(e)),this._process()}applyEdits(e){this._pendingEdits.push(e,async t=>{if(t.addedFeatures.length===0&&t.updatedFeatures.length===0&&t.deletedFeatures.length===0)return;for(const[,i]of this._pendingTiles)i.reset();const s={...t,deletedFeatures:t.deletedFeatures.map(({objectId:i,globalId:r})=>i&&i!==-1?i:this._lookupObjectIdByGlobalId(r))};await this.updatingHandles.addPromise(this.store.processEdits(s,(i,r)=>this._queryFeaturesById(i,r),this._pendingEditsAbortController.signal)),this._processPendingTiles()})}_initializeFetchExtent(){if(!this.capabilities.query.supportsExtent||!ae(this.url))return;const e=A(async t=>{var s;try{const i=await oe(this.url,new I({where:"1=1",outSpatialReference:this.spatialReference,cacheHint:!!this.capabilities.query.supportsCacheHint||void 0}),{query:this._configuration.customParameters,signal:t});this.store.extent=le.fromJSON((s=i.data)==null?void 0:s.extent)}catch(i){ce(i),he.getLogger(this.declaredClass).warn("Failed to fetch data extent",i)}});this.updatingHandles.addPromise(e.promise.then(()=>this._process())),this.handles.add(ue(()=>e.abort()))}get debugInfo(){return{numberOfFeatures:this.store.featureStore.numFeatures,tilesOfInterest:this.tilesOfInterest,pendingTiles:Array.from(this._pendingTiles.values()).map(e=>e.debugInfo),storedTiles:this.store.debugInfo}}_process(){this._markTilesNotAlive(),this._createPendingTiles(),this._deletePendingTiles(),this._processPendingTiles()}_markTilesNotAlive(){for(const[,e]of this._pendingTiles)e.alive=!1}_createPendingTiles(){const e=this._collectMissingTilesInfo();if(this._setAvailability(y(e)?1:e.coveredArea/e.fullArea),!y(e))for(const{data:t,resolution:s}of e.missingTiles){const i=this._pendingTiles.get(t.id);i?(i.resolution=s,i.alive=!0):this._createPendingTile(t,s)}}_collectMissingTilesInfo(){let e=null;for(let t=this.tilesOfInterest.length-1;t>=0;t--){const s=this.tilesOfInterest[t],i=this.store.process(s,(r,n)=>this._verifyTileComplexity(r,n));y(e)?e=i:e.prepend(i)}return e}_deletePendingTiles(){for(const[,e]of this._pendingTiles)e.alive||this._deletePendingTile(e)}_processPendingTiles(){const e={fetchCount:(t,s)=>this._fetchCount(t,s),fetchFeatures:(t,s,i)=>this._fetchFeatures(t,s,i),finish:(t,s)=>this._finishPendingTile(t,s),resume:()=>this._processPendingTiles()};if(this._ensureFetchAllCounts(e))for(const[,t]of this._pendingTiles)this._verifyTileComplexity(this.store.getFeatureCount(t.data),t.resolution)&&this.updatingHandles.addPromise(t.process(e))}_verifyTileComplexity(e,t){return this._verifyVertexComplexity(e)&&this._verifyFeatureDensity(e,t)}_verifyVertexComplexity(e){return e*this._minimumVerticesPerFeature<Ze}_verifyFeatureDensity(e,t){if(y(this.tileInfo))return!1;const s=this.tileSize*t;return e*(We/(s*s))<Xe}_ensureFetchAllCounts(e){let t=!0;for(const[,s]of this._pendingTiles)s.state.type<l.FETCHED_COUNT&&this.updatingHandles.addPromise(s.process(e)),s.state.type<=l.FETCH_COUNT&&(t=!1);return t}_finishPendingTile(e,t){this.store.add(e.data,t),this._deletePendingTile(e),this._updateAvailability()}_updateAvailability(){const e=this._collectMissingTilesInfo();this._setAvailability(y(e)?1:e.coveredArea/e.fullArea)}_setAvailability(e){this._set("availability",e)}_createPendingTile(e,t){const s=new Je(e,t);return this._pendingTiles.set(e.id,s),s}_deletePendingTile(e){e.reset(),this._pendingTiles.delete(e.data.id)}async _fetchCount(e,t){return this.store.fetchCount(e.data,this.url,this._createCountQuery(e),{query:this.customParameters,timeout:$,signal:t})}async _fetchFeatures(e,t,s){let i=0;const r=[];let n=0,a=t;for(;;){const o=this._createFeaturesQuery(e),c=this._setPagingParameters(o,i,a),{features:h,exceededTransferLimit:f}=await this._queryFeatures(o,s);c&&(i+=de(o.num)),n+=h.length;for(const _ of h)r.push(_);if(a=t-n,!c||!f||a<=0)return r}}_filterProperties(e){return y(e)?{where:"1=1",gdbVersion:void 0,timeExtent:void 0}:{where:e.where||"1=1",timeExtent:e.timeExtent,gdbVersion:e.gdbVersion}}_lookupObjectIdByGlobalId(e){const t=this.globalIdField,s=this.objectIdField;if(y(t))throw new Error("Expected globalIdField to be defined");let i=null;if(this.store.featureStore.forEach(r=>{var n;e===r.attributes[t]&&(i=(n=r.objectId)!=null?n:r.attributes[s])}),y(i))throw new Error(`Expected to find a feature with globalId ${e}`);return i}_queryFeaturesById(e,t){const s=this._createFeaturesQuery();return s.objectIds=e,this._queryFeatures(s,t)}_queryFeatures(e,t){return this.capabilities.query.supportsFormatPBF?this._queryFeaturesPBF(e,t):this._queryFeaturesJSON(e,t)}async _queryFeaturesPBF(e,t){const{sourceSpatialReference:s}=this,{data:i}=await fe(this.url,e,new pe({sourceSpatialReference:s}),{query:this._configuration.customParameters,timeout:$,signal:t});return _e(i)}async _queryFeaturesJSON(e,t){const{sourceSpatialReference:s}=this,{data:i}=await ge(this.url,e,s,{query:this._configuration.customParameters,timeout:$,signal:t});return ye(i,this.objectIdField)}_createCountQuery(e){const t=this._createBaseQuery(e);return this.capabilities.query.supportsCacheHint&&(t.cacheHint=!0),t}_createFeaturesQuery(e=null){const t=this._createBaseQuery(e);return t.outFields=this.globalIdField?[this.globalIdField,this.objectIdField]:[this.objectIdField],t.returnGeometry=!0,p(e)&&(this.capabilities.query.supportsResultType?t.resultType="tile":this.capabilities.query.supportsCacheHint&&(t.cacheHint=!0)),t}_createBaseQuery(e){const t=new I({returnZ:this.hasZ,returnM:!1,geometry:p(this.tileInfo)&&p(e)?me(e.data.extent,this.tileInfo.spatialReference):void 0}),s=this._configuration.filter;return p(s)&&(t.where=s.where,t.gdbVersion=s.gdbVersion,t.timeExtent=s.timeExtent),t.outSpatialReference=this.spatialReference,t}_setPagingParameters(e,t,s){if(!this.capabilities.query.supportsPagination)return!1;const{supportsMaxRecordCountFactor:i,supportsCacheHint:r,tileMaxRecordCount:n,maxRecordCount:a,supportsResultType:o}=this.capabilities.query,c=i?I.MAX_MAX_RECORD_COUNT_FACTOR:1,h=c*((o||r)&&n?n:a||Ge);return e.start=t,i?(e.maxRecordCountFactor=Math.min(c,Math.ceil(s/h)),e.num=Math.min(s,e.maxRecordCountFactor*h)):e.num=Math.min(s,h),!0}};u([d({constructOnly:!0})],g.prototype,"url",void 0),u([d({constructOnly:!0})],g.prototype,"objectIdField",void 0),u([d({constructOnly:!0})],g.prototype,"globalIdField",void 0),u([d({constructOnly:!0})],g.prototype,"capabilities",void 0),u([d({constructOnly:!0})],g.prototype,"sourceSpatialReference",void 0),u([d({constructOnly:!0})],g.prototype,"spatialReference",void 0),u([d({constructOnly:!0})],g.prototype,"store",void 0),u([d({readOnly:!0})],g.prototype,"_minimumVerticesPerFeature",null),u([d()],g.prototype,"filter",null),u([d()],g.prototype,"customParameters",null),u([d({readOnly:!0})],g.prototype,"_configuration",null),u([d()],g.prototype,"tileInfo",null),u([d()],g.prototype,"tileSize",null),u([d()],g.prototype,"tilesOfInterest",void 0),u([d({readOnly:!0})],g.prototype,"updating",null),u([d({readOnly:!0})],g.prototype,"updatingExcludingEdits",null),u([d({readOnly:!0})],g.prototype,"availability",void 0),u([d()],g.prototype,"hasZ",null),g=u([O("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher")],g);const Ge=2e3,$=6e5,Ze=1e6,We=25,Xe=1;class Ye{constructor(){this._store=new Map,this._byteSize=0}set(t,s){this.delete(t),this._store.set(t,s),this._byteSize+=s.byteSize}delete(t){const s=this._store.get(t);return!!this._store.delete(t)&&(s!=null&&(this._byteSize-=s.byteSize),!0)}get(t){return this._used(t),this._store.get(t)}has(t){return this._used(t),this._store.has(t)}clear(){this._store.clear()}applyByteSizeLimit(t,s){for(const[i,r]of this._store){if(this._byteSize<=t)break;this.delete(i),s(r)}}values(){return this._store.values()}[Symbol.iterator](){return this._store[Symbol.iterator]()}_used(t){const s=this._store.get(t);s&&(this._store.delete(t),this._store.set(t,s))}}let v=class extends X{constructor(e){super(e),this.tileInfo=null,this.extent=null,this.maximumByteSize=10*Ee.MEGABYTES,this._tileBounds=new $e,this._tiles=new Ye,this._refCounts=new Map,this._tileFeatureCounts=new Map,this._tmpBoundingRect=Y()}add(e,t){const s=[];for(const i of t)this._referenceFeature(i.objectId)===T.ADDED&&s.push(i);this._addTileStorage(e,new Set(t.map(i=>i.objectId)),Ke(t)),this.featureStore.addMany(s),this._tiles.applyByteSizeLimit(this.maximumByteSize,i=>this._removeTileStorage(i))}destroy(){this.clear(),this._tileFeatureCounts.clear()}clear(){this.featureStore.clear(),this._tileBounds.clear(),this._tiles.clear(),this._refCounts.clear()}refresh(){this.clear(),this._tileFeatureCounts.clear()}processEdits(e,t,s){return this._processEditsDelete(e.deletedFeatures.concat(e.updatedFeatures)),this._processEditsRefetch(e.addedFeatures.concat(e.updatedFeatures),t,s)}_addTileStorage(e,t,s){const i=e.id;this._tiles.set(i,new st(e,t,s)),this._tileBounds.set(i,e.extent),this._tileFeatureCounts.set(i,t.size)}_remove({id:e}){const t=this._tiles.get(e);t&&this._removeTileStorage(t)}_removeTileStorage(e){const t=[];for(const i of e.objectIds)this._unreferenceFeature(i)===T.REMOVED&&t.push(i);this.featureStore.removeManyById(t);const s=e.data.id;this._tiles.delete(s),this._tileBounds.delete(s)}_processEditsDelete(e){this.featureStore.removeManyById(e);for(const[,t]of this._tiles){for(const s of e)t.objectIds.delete(s);this._tileFeatureCounts.set(t.data.id,t.objectIds.size)}for(const t of e)this._refCounts.delete(t)}async _processEditsRefetch(e,t,s){const i=(await t(e,s)).features,{hasZ:r,hasM:n}=this.featureStore;for(const a of i){const o=Ce(this._tmpBoundingRect,a.geometry,r,n);y(o)||this._tileBounds.forEachInBounds(o,c=>{const h=this._tiles.get(c);this.featureStore.add(a);const f=a.objectId;h.objectIds.has(f)||(h.objectIds.add(f),this._referenceFeature(f),this._tileFeatureCounts.set(h.data.id,h.objectIds.size))})}}process(e,t=()=>!0){if(y(this.tileInfo)||!e.extent||p(this.extent)&&!D(P(this.extent,this._tmpBoundingRect),e.extent))return new R(e);if(this._tiles.has(e.id))return new R(e);const s=this._createTileTree(e,this.tileInfo);return this._simplify(s,t,null,0,1),this._collectMissingTiles(e,s,this.tileInfo)}get debugInfo(){return Array.from(this._tiles.values()).map(({data:e})=>({data:e,featureCount:this._tileFeatureCounts.get(e.id)||0}))}getFeatureCount(e){var t;return(t=this._tileFeatureCounts.get(e.id))!=null?t:0}async fetchCount(e,t,s,i){const r=this._tileFeatureCounts.get(e.id);if(r!=null)return r;const n=await Fe(t,s,i);return this._tileFeatureCounts.set(e.id,n.data.count),n.data.count}_createTileTree(e,t){const s=new Z(e.level,e.row,e.col);return t.updateTileInfo(s,x.ExtrapolateOptions.POWER_OF_TWO),this._tileBounds.forEachInBounds(e.extent,i=>{var n;const r=(n=this._tiles.get(i))==null?void 0:n.data;r&&this._tilesAreRelated(e,r)&&this._populateChildren(s,r,t,this._tileFeatureCounts.get(r.id)||0)}),s}_tilesAreRelated(e,t){if(!e||!t)return!1;if(e.level===t.level)return e.row===t.row&&e.col===t.col;const s=e.level<t.level,i=s?e:t,r=s?t:e,n=1<<r.level-i.level;return Math.floor(r.row/n)===i.row&&Math.floor(r.col/n)===i.col}_populateChildren(e,t,s,i){const r=t.level-e.level-1;if(r<0)return void(e.isLeaf=!0);const n=t.row>>r,a=t.col>>r,o=e.row<<1,c=a-(e.col<<1)+(n-o<<1),h=e.children[c];if(p(h))this._populateChildren(h,t,s,i);else{const f=new Z(e.level+1,n,a);s.updateTileInfo(f,x.ExtrapolateOptions.POWER_OF_TWO),e.children[c]=f,this._populateChildren(f,t,s,i)}}_simplify(e,t,s,i,r){const n=r*r;if(e.isLeaf)return t(this.getFeatureCount(e),r)?0:(this._remove(e),p(s)&&(s.children[i]=null),n);const a=r/2,o=a*a;let c=0;for(let h=0;h<e.children.length;h++){const f=e.children[h];c+=p(f)?this._simplify(f,t,e,h,a):o}return c===0?this._mergeChildren(e):1-c/n<rt&&(this._purge(e),p(s)&&(s.children[i]=null),c=n),c}_mergeChildren(e){const t=new Set;let s=0;this._forEachLeaf(e,i=>{const r=this._tiles.get(i.id);if(r){s+=r.byteSize;for(const n of r.objectIds)t.has(n)||(t.add(n),this._referenceFeature(n));this._remove(i)}}),this._addTileStorage(e,t,s),e.isLeaf=!0,e.children[0]=e.children[1]=e.children[2]=e.children[3]=null,this._tileFeatureCounts.set(e.id,t.size)}_forEachLeaf(e,t){for(const s of e.children)y(s)||(s.isLeaf?t(s):this._forEachLeaf(s,t))}_purge(e){if(!y(e))if(e.isLeaf)this._remove(e);else for(let t=0;t<e.children.length;t++){const s=e.children[t];this._purge(s),e.children[t]=null}}_collectMissingTiles(e,t,s){const i=new it(s,e,this.extent);return this._collectMissingTilesRecurse(t,i,1),i.info}_collectMissingTilesRecurse(e,t,s){if(e.isLeaf)return;if(!e.hasChildren)return void t.addMissing(e.level,e.row,e.col,s);const i=s/2;for(let r=0;r<e.children.length;r++){const n=e.children[r];y(n)?t.addMissing(e.level+1,(e.row<<1)+((2&r)>>1),(e.col<<1)+(1&r),i):this._collectMissingTilesRecurse(n,t,i)}}_referenceFeature(e){const t=(this._refCounts.get(e)||0)+1;return this._refCounts.set(e,t),t===1?T.ADDED:T.UNCHANGED}_unreferenceFeature(e){const t=(this._refCounts.get(e)||0)-1;return t===0?(this._refCounts.delete(e),T.REMOVED):(t>0&&this._refCounts.set(e,t),T.UNCHANGED)}get test(){return{tiles:Array.from(this._tiles.values()).map(e=>`${e.data.id}:[${Array.from(e.objectIds)}]`),featureReferences:Array.from(this._refCounts.keys()).map(e=>`${e}:${this._refCounts.get(e)}`)}}};function Ke(e){return e.reduce((t,s)=>t+et(s),0)}function et(e){return 32+tt(e.geometry)+Te(e.attributes)}function tt(e){if(y(e))return 0;const t=U(e.lengths,4);return 32+U(e.coords,8)+t}u([d({constructOnly:!0})],v.prototype,"featureStore",void 0),u([d()],v.prototype,"tileInfo",void 0),u([d()],v.prototype,"extent",void 0),u([d()],v.prototype,"maximumByteSize",void 0),v=u([O("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTileStore")],v);class st{constructor(t,s,i){this.data=t,this.objectIds=s,this.byteSize=i}}class Z{constructor(t,s,i){this.level=t,this.row=s,this.col=i,this.isLeaf=!1,this.extent=null,this.children=[null,null,null,null]}get hasChildren(){return!this.isLeaf&&(p(this.children[0])||p(this.children[1])||p(this.children[2])||p(this.children[3]))}}class R{constructor(t,s=[]){this.missingTiles=s,this.fullArea=0,this.coveredArea=0,this.fullArea=ee(t.extent),this.coveredArea=this.fullArea}prepend(t){this.missingTiles=t.missingTiles.concat(this.missingTiles),this.coveredArea+=t.coveredArea,this.fullArea+=t.fullArea}}class it{constructor(t,s,i){this._tileInfo=t,this._extent=null,this.info=new R(s),p(i)&&(this._extent=P(i))}addMissing(t,s,i,r){const n=new ve(null,t,s,i);this._tileInfo.updateTileInfo(n,x.ExtrapolateOptions.POWER_OF_TWO),y(n.extent)||p(this._extent)&&!D(this._extent,n.extent)||(this.info.missingTiles.push({data:n,resolution:r}),this.info.coveredArea-=ee(n.extent))}}const rt=.18751;var T;(function(e){e[e.ADDED=0]="ADDED",e[e.REMOVED=1]="REMOVED",e[e.UNCHANGED=2]="UNCHANGED"})(T||(T={}));let S=class extends Se.EventedAccessor{constructor(){super(...arguments),this._isInitializing=!0,this.remoteClient=null,this._whenSetup=M(),this._elevationAligner=V(),this._elevationFilter=Q(),this._symbologyCandidatesFetcher=L(),this._handles=new be,this._updatingHandles=new j,this._editsUpdatingHandles=new j,this._pendingApplyEdits=new Map,this._alignPointsInFeatures=async(e,t)=>{const s={points:e},i=await this.remoteClient.invoke("alignElevation",s,{signal:t});return m(t),i},this._getSymbologyCandidates=async(e,t)=>{const s={candidates:e,spatialReference:this._spatialReference.toJSON()},i=await this.remoteClient.invoke("getSymbologyCandidates",s,{signal:t});return m(t),i}}get updating(){return this.updatingExcludingEdits||this._editsUpdatingHandles.updating||this._featureFetcher.updating}get updatingExcludingEdits(){return this._featureFetcher.updatingExcludingEdits||this._isInitializing||this._updatingHandles.updating}destroy(){this._featureFetcher.destroy(),this._queryEngine.destroy(),this._featureStore.clear(),this._handles.destroy()}async setup(e){const{geometryType:t,objectIdField:s,timeInfo:i,fields:r}=e.serviceInfo,{hasZ:n}=e,a=q.fromJSON(e.spatialReference);this._spatialReference=a,this._featureStore=new xe({...e.serviceInfo,hasZ:n,hasM:!1}),this._queryEngine=new Oe({spatialReference:e.spatialReference,featureStore:this._featureStore,geometryType:t,fields:r,hasZ:n,hasM:!1,objectIdField:s,timeInfo:i}),this._featureFetcher=new g({store:new v({featureStore:this._featureStore}),url:e.serviceInfo.url,objectIdField:e.serviceInfo.objectIdField,globalIdField:e.serviceInfo.globalIdField,capabilities:e.serviceInfo.capabilities,spatialReference:a,sourceSpatialReference:q.fromJSON(e.serviceInfo.spatialReference)});const o=e.configuration.viewType==="3d";return this._elevationAligner=V(o,{elevationInfo:p(e.elevationInfo)?Ie.fromJSON(e.elevationInfo):null,alignPointsInFeatures:this._alignPointsInFeatures,spatialReference:a}),this._elevationFilter=Q(o),this._handles.add([B(()=>this._featureFetcher.availability,c=>this.emit("notify-availability",{availability:c}),K),B(()=>this.updating,()=>this._notifyUpdating())]),this._whenSetup.resolve(),this._isInitializing=!1,this.configure(e.configuration)}async configure(e){return await this._updatingHandles.addPromise(this._whenSetup.promise),this._updateFeatureFetcherConfiguration(e),{result:{}}}async fetchCandidates(e,t){await this._whenSetup.promise,m(t);const s=nt(e),i=p(t)?t.signal:null,r=await this._queryEngine.executeQueryForSnapping(s,i);m(i);const n=await this._elevationAligner.alignCandidates(r.candidates,i);m(i);const a=await this._symbologyCandidatesFetcher.fetch(n,i);m(i);const o=a.length===0?n:n.concat(a);return{result:{candidates:this._elevationFilter.filter(s,o)}}}async updateTiles(e,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),m(t),this._featureFetcher.tileSize=e.tileSize,this._featureFetcher.tilesOfInterest=e.tiles,this._featureFetcher.tileInfo=p(e.tileInfo)?x.fromJSON(e.tileInfo):null,F}async refresh(e,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),m(t),this._featureFetcher.refresh(),F}async whenNotUpdating(e,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),m(t),await we(()=>!this.updatingExcludingEdits,t),m(t),F}async getDebugInfo(e,t){return m(t),{result:this._featureFetcher.debugInfo}}async beginApplyEdits(e,t){this._updatingHandles.addPromise(this._whenSetup.promise),m(t);const s=M();return this._pendingApplyEdits.set(e.id,s),this._featureFetcher.applyEdits(s.promise),this._editsUpdatingHandles.addPromise(s.promise),F}async endApplyEdits(e,t){const s=this._pendingApplyEdits.get(e.id);return s&&s.resolve(e.edits),m(t),F}async notifyElevationSourceChange(e,t){return this._elevationAligner.notifyElevationSourceChange(),F}async notifySymbologyChange(e,t){return F}async setSymbologySnappingSupported(e){return this._symbologyCandidatesFetcher=L(e,this._getSymbologyCandidates),F}_updateFeatureFetcherConfiguration(e){this._featureFetcher.filter=p(e.filter)?I.fromJSON(e.filter):null,this._featureFetcher.customParameters=e.customParameters}_notifyUpdating(){this.emit("notify-updating",{updating:this.updating})}};u([d({readOnly:!0})],S.prototype,"updating",null),u([d({readOnly:!0})],S.prototype,"updatingExcludingEdits",null),u([d()],S.prototype,"_isInitializing",void 0),S=u([O("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorker")],S);const Et=S;function nt(e){return{point:e.point,mode:e.mode,distance:e.distance,types:e.types,query:p(e.filter)?e.filter:{where:"1=1"}}}const F={result:{}};export{Et as default};
