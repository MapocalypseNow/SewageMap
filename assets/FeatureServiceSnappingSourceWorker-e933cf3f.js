import{cS as W,hn as te,K as p,P as y,hC as se,f8 as ie,$ as m,by as H,cl as z,aB as u,aC as f,aD as O,aE as X,a$ as Y,aY as A,hD as N,dM as P,bf as D,eE as re,hE as ne,eD as K,fG as ae,fw as oe,ek as I,dV as le,bm as ce,F as he,dn as ue,X as de,hF as fe,hG as pe,hH as _e,hI as ge,cZ as ye,dJ as me,dB as Ee,ge as Ce,fJ as Fe,dz as x,hJ as Te,hK as M,hL as ee,dF as ve,ao as Se,hM as U,aX as be,hN as j,y as B,hO as Ie,hP as we,as as q,ey as xe}from"./vendor-f61b19da.js";import{o as Oe,u as $e}from"./FeatureStore-94e343e5.js";import{Y as Ae}from"./QueryEngine-e2474b91.js";import"./PooledRBush-5d379de5.js";import"./centroid-7bcd4b03.js";import"./QueryEngineResult-b44257dc.js";import"./WhereClause-522598a9.js";import"./projectionSupport-d522253e.js";import"./json-48e3ea08.js";import"./utils-c855525f.js";import"./timeSupport-e7dadba4.js";function V(t=!1,e){if(t){const{elevationInfo:s,alignPointsInFeatures:i,spatialReference:r}=e;return new De(s,i,r)}return new Re}let Re=class{async alignCandidates(e,s){return e}notifyElevationSourceChange(){}};const Pe=1024;class De{constructor(e,s,i){this._elevationInfo=e,this._alignPointsInFeatures=s,this.spatialReference=i,this._alignmentsCache=new W(Pe),this._cacheVersion=0,this._metersPerVerticalUnit=te(i)}async alignCandidates(e,s){const i=this._elevationInfo;return p(i)&&i.mode==="absolute-height"&&!i.featureExpressionInfo?(this._alignAbsoluteElevationCandidates(e,i),e):this._alignComputedElevationCandidates(e,s)}notifyElevationSourceChange(){this._alignmentsCache.clear(),this._cacheVersion++}_alignAbsoluteElevationCandidates(e,s){const{offset:i,unit:r}=s;if(y(i))return;const n=i*(se(r??"meters")/this._metersPerVerticalUnit);for(const a of e)switch(a.type){case"edge":a.start.z+=n,a.end.z+=n;continue;case"vertex":a.target.z+=n;continue}}async _alignComputedElevationCandidates(e,s){const i=new Map;for(const _ of e)ie(i,_.objectId,ze).push(_);const[r,n,a]=this._prepareQuery(i),o=await this._alignPointsInFeatures(r,s);if(m(s),a!==this._cacheVersion)return this._alignComputedElevationCandidates(e,s);this._applyCacheAndResponse(r,o,n);const{drapedObjectIds:c,failedObjectIds:h}=o,d=[];for(const _ of e){const{objectId:E}=_;c.has(E)&&_.type==="edge"&&(_.draped=!0),h.has(E)||d.push(_)}return d}_prepareQuery(e){const s=[],i=[];for(const[r,n]of e){const a=[];for(const o of n)this._addToQueriesOrCachedResult(r,o.target,a,i),o.type==="edge"&&(this._addToQueriesOrCachedResult(r,o.start,a,i),this._addToQueriesOrCachedResult(r,o.end,a,i));a.length!==0&&s.push({objectId:r,points:a})}return[s,i,this._cacheVersion]}_addToQueriesOrCachedResult(e,s,i,r){const n=k(e,s),a=this._alignmentsCache.get(n);p(a)?r.push(new He(s,a)):i.push(s)}_applyCacheAndResponse(e,{elevations:s,drapedObjectIds:i,failedObjectIds:r},n){for(const c of n)c.apply();let a=0;const o=this._alignmentsCache;for(const{objectId:c,points:h}of e){if(r.has(c)){a+=h.length;continue}const d=!i.has(c);for(const _ of h){const E=k(c,_),C=s[a++];_.z=C,d&&o.put(E,C,1)}}}}class He{constructor(e,s){this.point=e,this.z=s}apply(){this.point.z=this.z}}function k(t,{x:e,y:s,z:i}){return`${t}-${e}-${s}-${i??0}}`}function ze(){return[]}let Ne=class{filter(e,s){return s}notifyElevationSourceChange(){}},Me=class{filter(e,s){const{point:i,distance:r}=e,{z:n}=i;if(n==null||s.length===0)return s;const a=Ve(r),o=this._updateCandidatesTo3D(s,i,a).filter(Ue);return o.sort(ke),o}_updateCandidatesTo3D(e,s,i){for(const r of e)switch(r.type){case"edge":je(r,s,i);continue;case"vertex":qe(r,s,i);continue}return e}};function Ue(t){return t.distance<=1}function J(t=!1){return t?new Me:new Ne}function je(t,e,{x:s,y:i,z:r}){const{start:n,end:a,target:o}=t;t.draped||Be(o,e,n,a);const c=(e.x-o.x)/s,h=(e.y-o.y)/i,d=(e.z-o.z)/r;t.distance=Math.sqrt(c*c+h*h+d*d)}function Be(t,e,s,i){const r=i.x-s.x,n=i.y-s.y,a=i.z-s.z,o=r*r+n*n+a*a,c=(e.x-s.x)*r+(e.y-s.y)*n+a*(e.z-s.z),h=Math.min(1,Math.max(0,c/o)),d=s.x+r*h,_=s.y+n*h,E=s.z+a*h;t.x=d,t.y=_,t.z=E}function qe(t,e,{x:s,y:i,z:r}){const{target:n}=t,a=(e.x-n.x)/s,o=(e.y-n.y)/i,c=(e.z-n.z)/r,h=Math.sqrt(a*a+o*o+c*c);t.distance=h}function Ve(t){return typeof t=="number"?{x:t,y:t,z:t}:t}function ke(t,e){return t.distance-e.distance}function L(t=!1,e){return t?new Qe(e):new Je}class Je{async fetch(){return[]}notifySymbologyChange(){}}const Le=1024;class Qe{constructor(e){this._getSymbologyCandidates=e,this._candidatesCache=new W(Le),this._cacheVersion=0}async fetch(e,s){if(e.length===0)return[];const i=[],r=[],n=this._candidatesCache;for(const _ of e){const E=Q(_),C=n.get(E);if(C)for(const b of C)r.push(H(b));else i.push(_),n.put(E,[],1)}if(i.length===0)return r;const a=this._cacheVersion,{candidates:o,sourceCandidateIndices:c}=await this._getSymbologyCandidates(i,s);if(m(s),a!==this._cacheVersion)return this.fetch(e,s);const h=[],{length:d}=o;for(let _=0;_<d;++_){const E=o[_],C=Q(i[c[_]]),b=n.get(C);b.push(E),n.put(C,b,b.length),h.push(H(E))}return r.concat(h)}notifySymbologyChange(){this._candidatesCache.clear(),this._cacheVersion++}}function Q(t){switch(t.type){case"vertex":{const{objectId:e,target:s}=t,i=`${e}-vertex-${s.x}-${s.y}-${s.z??0}`;return z(i).toString()}case"edge":{const{objectId:e,start:s,end:i}=t,r=`${e}-edge-${s.x}-${s.y}-${s.z??0}-to-${i.x}-${i.y}-${i.z??0}`;return z(r).toString()}default:return""}}let w=class extends X{constructor(){super(...arguments),this.updating=!1,this._pending=[]}push(t,e){this._pending.push({promise:t,callback:e}),this._pending.length===1&&this._process()}_process(){if(!this._pending.length)return void(this.updating=!1);this.updating=!0;const t=this._pending[0];t.promise.then(e=>t.callback(e)).catch(()=>{}).then(()=>{this._pending.shift(),this._process()})}};u([f()],w.prototype,"updating",void 0),w=u([O("esri.core.AsyncSequence")],w);class Ge{constructor(e,s){this.data=e,this.resolution=s,this.state={type:l.CREATED},this.alive=!0}process(e){switch(this.state.type){case l.CREATED:return this.state=this._gotoFetchCount(this.state,e),this.state.task.promise.then(e.resume,e.resume);case l.FETCH_COUNT:break;case l.FETCHED_COUNT:return this.state=this._gotoFetchFeatures(this.state,e),this.state.task.promise.then(e.resume,e.resume);case l.FETCH_FEATURES:break;case l.FETCHED_FEATURES:this.state=this._goToDone(this.state,e);case l.DONE:}return null}get debugInfo(){return{data:this.data,featureCount:this._featureCount,state:this._stateToString}}get _featureCount(){switch(this.state.type){case l.CREATED:case l.FETCH_COUNT:return 0;case l.FETCHED_COUNT:return this.state.featureCount;case l.FETCH_FEATURES:return this.state.previous.featureCount;case l.FETCHED_FEATURES:return this.state.features.length;case l.DONE:return this.state.previous.features.length}}get _stateToString(){switch(this.state.type){case l.CREATED:return"created";case l.FETCH_COUNT:return"fetch-count";case l.FETCHED_COUNT:return"fetched-count";case l.FETCH_FEATURES:return"fetch-features";case l.FETCHED_FEATURES:return"fetched-features";case l.DONE:return"done"}}_gotoFetchCount(e,s){return{type:l.FETCH_COUNT,previous:e,task:A(async i=>{const r=await N(s.fetchCount(this,i));this.state.type===l.FETCH_COUNT&&(this.state=this._gotoFetchedCount(this.state,r.ok?r.value:1/0))})}}_gotoFetchedCount(e,s){return{type:l.FETCHED_COUNT,featureCount:s,previous:e}}_gotoFetchFeatures(e,s){return{type:l.FETCH_FEATURES,previous:e,task:A(async i=>{const r=await N(s.fetchFeatures(this,e.featureCount,i));this.state.type===l.FETCH_FEATURES&&(this.state=this._gotoFetchedFeatures(this.state,r.ok?r.value:[]))})}}_gotoFetchedFeatures(e,s){return{type:l.FETCHED_FEATURES,previous:e,features:s}}_goToDone(e,s){return s.finish(this,e.features),{type:l.DONE,previous:e}}reset(){const e=this.state;switch(this.state={type:l.CREATED},e.type){case l.CREATED:case l.FETCHED_COUNT:case l.FETCHED_FEATURES:case l.DONE:break;case l.FETCH_COUNT:case l.FETCH_FEATURES:e.task.abort()}}intersects(e){return!(!y(e)&&this.data.extent)||(P(e,G),D(this.data.extent,G))}}var l;(function(t){t[t.CREATED=0]="CREATED",t[t.FETCH_COUNT=1]="FETCH_COUNT",t[t.FETCHED_COUNT=2]="FETCHED_COUNT",t[t.FETCH_FEATURES=3]="FETCH_FEATURES",t[t.FETCHED_FEATURES=4]="FETCHED_FEATURES",t[t.DONE=5]="DONE"})(l||(l={}));const G=Y();let g=class extends re{constructor(e){super(e),this.tilesOfInterest=[],this.availability=0,this._pendingTiles=new Map,this._pendingEdits=new w,this._pendingEditsAbortController=new AbortController}get _minimumVerticesPerFeature(){var e;switch((e=this.store)==null?void 0:e.featureStore.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":return 1;case"esriGeometryPolygon":return 4;case"esriGeometryPolyline":return 2}}set filter(e){const s=this._get("filter"),i=this._filterProperties(e);JSON.stringify(s)!==JSON.stringify(i)&&this._set("filter",i)}set customParameters(e){const s=this._get("customParameters");JSON.stringify(s)!==JSON.stringify(e)&&this._set("customParameters",e)}get _configuration(){return{filter:this.filter,customParameters:this.customParameters,tileInfo:this.tileInfo,tileSize:this.tileSize}}set tileInfo(e){const s=this._get("tileInfo");s!==e&&(p(e)&&p(s)&&JSON.stringify(e)===JSON.stringify(s)||(this._set("tileInfo",e),this.store.tileInfo=e))}set tileSize(e){this._get("tileSize")!==e&&this._set("tileSize",e)}get updating(){return this.updatingExcludingEdits||this._pendingEdits.updating}get updatingExcludingEdits(){return this.updatingHandles.updating}get hasZ(){return this.store.featureStore.hasZ}initialize(){this._initializeFetchExtent(),this.updatingHandles.add(()=>this._configuration,()=>this.refresh()),this.updatingHandles.add(()=>this.tilesOfInterest,(e,s)=>{ne(e,s,({id:i},{id:r})=>i===r)||this._process()},K)}destroy(){this._pendingTiles.forEach(e=>this._deletePendingTile(e)),this._pendingTiles.clear(),this.store.destroy(),this.tilesOfInterest.length=0,this._pendingEditsAbortController.abort(),this._pendingEditsAbortController=null}refresh(){this.store.refresh(),this._pendingTiles.forEach(e=>this._deletePendingTile(e)),this._process()}applyEdits(e){this._pendingEdits.push(e,async s=>{if(s.addedFeatures.length===0&&s.updatedFeatures.length===0&&s.deletedFeatures.length===0)return;for(const[,r]of this._pendingTiles)r.reset();const i={...s,deletedFeatures:s.deletedFeatures.map(({objectId:r,globalId:n})=>r&&r!==-1?r:this._lookupObjectIdByGlobalId(n))};await this.updatingHandles.addPromise(this.store.processEdits(i,(r,n)=>this._queryFeaturesById(r,n),this._pendingEditsAbortController.signal)),this._processPendingTiles()})}_initializeFetchExtent(){if(!this.capabilities.query.supportsExtent||!ae(this.url))return;const e=A(async s=>{var i;try{const r=await oe(this.url,new I({where:"1=1",outSpatialReference:this.spatialReference,cacheHint:!!this.capabilities.query.supportsCacheHint||void 0}),{query:this._configuration.customParameters,signal:s});this.store.extent=le.fromJSON((i=r.data)==null?void 0:i.extent)}catch(r){ce(r),he.getLogger(this.declaredClass).warn("Failed to fetch data extent",r)}});this.updatingHandles.addPromise(e.promise.then(()=>this._process())),this.handles.add(ue(()=>e.abort()))}get debugInfo(){return{numberOfFeatures:this.store.featureStore.numFeatures,tilesOfInterest:this.tilesOfInterest,pendingTiles:Array.from(this._pendingTiles.values()).map(e=>e.debugInfo),storedTiles:this.store.debugInfo}}_process(){this._markTilesNotAlive(),this._createPendingTiles(),this._deletePendingTiles(),this._processPendingTiles()}_markTilesNotAlive(){for(const[,e]of this._pendingTiles)e.alive=!1}_createPendingTiles(){const e=this._collectMissingTilesInfo();if(this._setAvailability(y(e)?1:e.coveredArea/e.fullArea),!y(e))for(const{data:s,resolution:i}of e.missingTiles){const r=this._pendingTiles.get(s.id);r?(r.resolution=i,r.alive=!0):this._createPendingTile(s,i)}}_collectMissingTilesInfo(){let e=null;for(let s=this.tilesOfInterest.length-1;s>=0;s--){const i=this.tilesOfInterest[s],r=this.store.process(i,(n,a)=>this._verifyTileComplexity(n,a));y(e)?e=r:e.prepend(r)}return e}_deletePendingTiles(){for(const[,e]of this._pendingTiles)e.alive||this._deletePendingTile(e)}_processPendingTiles(){const e={fetchCount:(s,i)=>this._fetchCount(s,i),fetchFeatures:(s,i,r)=>this._fetchFeatures(s,i,r),finish:(s,i)=>this._finishPendingTile(s,i),resume:()=>this._processPendingTiles()};if(this._ensureFetchAllCounts(e))for(const[,s]of this._pendingTiles)this._verifyTileComplexity(this.store.getFeatureCount(s.data),s.resolution)&&this.updatingHandles.addPromise(s.process(e))}_verifyTileComplexity(e,s){return this._verifyVertexComplexity(e)&&this._verifyFeatureDensity(e,s)}_verifyVertexComplexity(e){return e*this._minimumVerticesPerFeature<We}_verifyFeatureDensity(e,s){if(y(this.tileInfo))return!1;const i=this.tileSize*s;return e*(Xe/(i*i))<Ye}_ensureFetchAllCounts(e){let s=!0;for(const[,i]of this._pendingTiles)i.state.type<l.FETCHED_COUNT&&this.updatingHandles.addPromise(i.process(e)),i.state.type<=l.FETCH_COUNT&&(s=!1);return s}_finishPendingTile(e,s){this.store.add(e.data,s),this._deletePendingTile(e),this._updateAvailability()}_updateAvailability(){const e=this._collectMissingTilesInfo();this._setAvailability(y(e)?1:e.coveredArea/e.fullArea)}_setAvailability(e){this._set("availability",e)}_createPendingTile(e,s){const i=new Ge(e,s);return this._pendingTiles.set(e.id,i),i}_deletePendingTile(e){e.reset(),this._pendingTiles.delete(e.data.id)}async _fetchCount(e,s){return this.store.fetchCount(e.data,this.url,this._createCountQuery(e),{query:this.customParameters,timeout:$,signal:s})}async _fetchFeatures(e,s,i){let r,n=0,a=0,o=s;for(;;){const c=this._createFeaturesQuery(e),h=this._setPagingParameters(c,n,o),{features:d,exceededTransferLimit:_}=await this._queryFeatures(c,i);if(h&&(n+=de(c.num)),a+=d.length,r=r?r.concat(d):d,o=s-a,!h||!_||o<=0)return r}}_filterProperties(e){return y(e)?{where:"1=1",gdbVersion:void 0,timeExtent:void 0}:{where:e.where||"1=1",timeExtent:e.timeExtent,gdbVersion:e.gdbVersion}}_lookupObjectIdByGlobalId(e){const s=this.globalIdField,i=this.objectIdField;if(y(s))throw new Error("Expected globalIdField to be defined");let r=null;if(this.store.featureStore.forEach(n=>{e===n.attributes[s]&&(r=n.objectId??n.attributes[i])}),y(r))throw new Error(`Expected to find a feature with globalId ${e}`);return r}_queryFeaturesById(e,s){const i=this._createFeaturesQuery();return i.objectIds=e,this._queryFeatures(i,s)}_queryFeatures(e,s){return this.capabilities.query.supportsFormatPBF?this._queryFeaturesPBF(e,s):this._queryFeaturesJSON(e,s)}async _queryFeaturesPBF(e,s){const{sourceSpatialReference:i}=this,{data:r}=await fe(this.url,e,new pe({sourceSpatialReference:i}),{query:this._configuration.customParameters,timeout:$,signal:s});return _e(r)}async _queryFeaturesJSON(e,s){const{sourceSpatialReference:i}=this,{data:r}=await ge(this.url,e,i,{query:this._configuration.customParameters,timeout:$,signal:s});return ye(r,this.objectIdField)}_createCountQuery(e){const s=this._createBaseQuery(e);return this.capabilities.query.supportsCacheHint&&(s.cacheHint=!0),s}_createFeaturesQuery(e=null){const s=this._createBaseQuery(e);return s.outFields=this.globalIdField?[this.globalIdField,this.objectIdField]:[this.objectIdField],s.returnGeometry=!0,p(e)&&(this.capabilities.query.supportsResultType?s.resultType="tile":this.capabilities.query.supportsCacheHint&&(s.cacheHint=!0)),s}_createBaseQuery(e){const s=new I({returnZ:this.hasZ,returnM:!1,geometry:p(this.tileInfo)&&p(e)?me(e.data.extent,this.tileInfo.spatialReference):void 0}),i=this._configuration.filter;return p(i)&&(s.where=i.where,s.gdbVersion=i.gdbVersion,s.timeExtent=i.timeExtent),s.outSpatialReference=this.spatialReference,s}_setPagingParameters(e,s,i){if(!this.capabilities.query.supportsPagination)return!1;const{supportsMaxRecordCountFactor:r,supportsCacheHint:n,tileMaxRecordCount:a,maxRecordCount:o,supportsResultType:c}=this.capabilities.query,h=r?I.MAX_MAX_RECORD_COUNT_FACTOR:1,d=h*((c||n)&&a?a:o||Ze);return e.start=s,r?(e.maxRecordCountFactor=Math.min(h,Math.ceil(i/d)),e.num=Math.min(i,e.maxRecordCountFactor*d)):e.num=Math.min(i,d),!0}};u([f({constructOnly:!0})],g.prototype,"url",void 0),u([f({constructOnly:!0})],g.prototype,"objectIdField",void 0),u([f({constructOnly:!0})],g.prototype,"globalIdField",void 0),u([f({constructOnly:!0})],g.prototype,"capabilities",void 0),u([f({constructOnly:!0})],g.prototype,"sourceSpatialReference",void 0),u([f({constructOnly:!0})],g.prototype,"spatialReference",void 0),u([f({constructOnly:!0})],g.prototype,"store",void 0),u([f({readOnly:!0})],g.prototype,"_minimumVerticesPerFeature",null),u([f()],g.prototype,"filter",null),u([f()],g.prototype,"customParameters",null),u([f({readOnly:!0})],g.prototype,"_configuration",null),u([f()],g.prototype,"tileInfo",null),u([f()],g.prototype,"tileSize",null),u([f()],g.prototype,"tilesOfInterest",void 0),u([f({readOnly:!0})],g.prototype,"updating",null),u([f({readOnly:!0})],g.prototype,"updatingExcludingEdits",null),u([f({readOnly:!0})],g.prototype,"availability",void 0),u([f()],g.prototype,"hasZ",null),g=u([O("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher")],g);const Ze=2e3,$=6e5,We=1e6,Xe=25,Ye=1;class Ke{constructor(){this._store=new Map,this._byteSize=0}set(e,s){this.delete(e),this._store.set(e,s),this._byteSize+=s.byteSize}delete(e){const s=this._store.get(e);return!!this._store.delete(e)&&(s!=null&&(this._byteSize-=s.byteSize),!0)}get(e){return this._used(e),this._store.get(e)}has(e){return this._used(e),this._store.has(e)}clear(){this._store.clear()}applyByteSizeLimit(e,s){for(const[i,r]of this._store){if(this._byteSize<=e)break;this.delete(i),s(r)}}values(){return this._store.values()}[Symbol.iterator](){return this._store[Symbol.iterator]()}_used(e){const s=this._store.get(e);s&&(this._store.delete(e),this._store.set(e,s))}}let v=class extends X{constructor(t){super(t),this.tileInfo=null,this.extent=null,this.maximumByteSize=10*Ee.MEGABYTES,this._tileBounds=new Oe,this._tiles=new Ke,this._refCounts=new Map,this._tileFeatureCounts=new Map,this._tmpBoundingRect=Y()}add(t,e){const s=[];for(const i of e)this._referenceFeature(i.objectId)===T.ADDED&&s.push(i);this._addTileStorage(t,new Set(e.map(({objectId:i})=>i)),et(e)),this.featureStore.addMany(s),this._tiles.applyByteSizeLimit(this.maximumByteSize,i=>this._removeTileStorage(i))}destroy(){this.clear(),this._tileFeatureCounts.clear()}clear(){this.featureStore.clear(),this._tileBounds.clear(),this._tiles.clear(),this._refCounts.clear()}refresh(){this.clear(),this._tileFeatureCounts.clear()}processEdits(t,e,s){return this._processEditsDelete(t.deletedFeatures.concat(t.updatedFeatures)),this._processEditsRefetch(t.addedFeatures.concat(t.updatedFeatures),e,s)}_addTileStorage(t,e,s){this._tiles.set(t.id,new it(t,e,s)),this._tileBounds.set(t.id,t.extent),this._tileFeatureCounts.set(t.id,e.size)}_remove({id:t}){const e=this._tiles.get(t);e&&this._removeTileStorage(e)}_removeTileStorage(t){const e=[];for(const i of t.objectIds)this._unreferenceFeature(i)===T.REMOVED&&e.push(i);this.featureStore.removeManyById(e);const s=t.data.id;this._tiles.delete(s),this._tileBounds.delete(s)}_processEditsDelete(t){this.featureStore.removeManyById(t);for(const[,e]of this._tiles){for(const s of t)e.objectIds.delete(s);this._tileFeatureCounts.set(e.data.id,e.objectIds.size)}for(const e of t)this._refCounts.delete(e)}async _processEditsRefetch(t,e,s){const i=(await e(t,s)).features,{hasZ:r,hasM:n}=this.featureStore;for(const a of i){const o=Ce(this._tmpBoundingRect,a.geometry,r,n);y(o)||this._tileBounds.forEachInBounds(o,c=>{const h=this._tiles.get(c);this.featureStore.add(a),h.objectIds.has(a.objectId)||(h.objectIds.add(a.objectId),this._referenceFeature(a.objectId),this._tileFeatureCounts.set(h.data.id,h.objectIds.size))})}}process(t,e=()=>!0){if(y(this.tileInfo)||!t.extent||p(this.extent)&&!D(P(this.extent,this._tmpBoundingRect),t.extent))return new R(t);if(this._tiles.has(t.id))return new R(t);const s=this._createTileTree(t,this.tileInfo);return this._simplify(s,e,null,0,1),this._collectMissingTiles(t,s,this.tileInfo)}get debugInfo(){return Array.from(this._tiles.values()).map(({data:t})=>({data:t,featureCount:this._tileFeatureCounts.get(t.id)||0}))}getFeatureCount(t){return this._tileFeatureCounts.get(t.id)??0}async fetchCount(t,e,s,i){const r=this._tileFeatureCounts.get(t.id);if(r!=null)return r;const n=await Fe(e,s,i);return this._tileFeatureCounts.set(t.id,n.data.count),n.data.count}_createTileTree(t,e){const s=new Z(t.level,t.row,t.col);return e.updateTileInfo(s,x.ExtrapolateOptions.POWER_OF_TWO),this._tileBounds.forEachInBounds(t.extent,i=>{const r=this._tiles.get(i).data;this._tilesAreRelated(t,r)&&this._populateChildren(s,r,e,this._tileFeatureCounts.get(r.id)||0)}),s}_tilesAreRelated(t,e){if(!t||!e)return!1;if(t.level===e.level)return t.row===e.row&&t.col===e.col;const s=t.level<e.level,i=s?t:e,r=s?e:t,n=1<<r.level-i.level;return Math.floor(r.row/n)===i.row&&Math.floor(r.col/n)===i.col}_populateChildren(t,e,s,i){const r=e.level-t.level-1;if(r<0)return void(t.isLeaf=!0);const n=e.row>>r,a=e.col>>r,o=t.row<<1,c=a-(t.col<<1)+(n-o<<1),h=t.children[c];if(p(h))this._populateChildren(h,e,s,i);else{const d=new Z(t.level+1,n,a);s.updateTileInfo(d,x.ExtrapolateOptions.POWER_OF_TWO),t.children[c]=d,this._populateChildren(d,e,s,i)}}_simplify(t,e,s,i,r){const n=r*r;if(t.isLeaf)return e(this.getFeatureCount(t),r)?0:(this._remove(t),p(s)&&(s.children[i]=null),n);const a=r/2,o=a*a;let c=0;for(let h=0;h<t.children.length;h++){const d=t.children[h];c+=p(d)?this._simplify(d,e,t,h,a):o}return c===0?this._mergeChildren(t):1-c/n<nt&&(this._purge(t),p(s)&&(s.children[i]=null),c=n),c}_mergeChildren(t){const e=new Set;let s=0;this._forEachLeaf(t,i=>{const r=this._tiles.get(i.id);if(r){s+=r.byteSize;for(const n of r.objectIds)e.has(n)||(e.add(n),this._referenceFeature(n));this._remove(i)}}),this._addTileStorage(t,e,s),t.isLeaf=!0,t.children[0]=t.children[1]=t.children[2]=t.children[3]=null,this._tileFeatureCounts.set(t.id,e.size)}_forEachLeaf(t,e){for(const s of t.children)y(s)||(s.isLeaf?e(s):this._forEachLeaf(s,e))}_purge(t){if(!y(t))if(t.isLeaf)this._remove(t);else for(let e=0;e<t.children.length;e++){const s=t.children[e];this._purge(s),t.children[e]=null}}_collectMissingTiles(t,e,s){const i=new rt(s,t,this.extent);return this._collectMissingTilesRecurse(e,i,1),i.info}_collectMissingTilesRecurse(t,e,s){if(t.isLeaf)return;if(!t.hasChildren)return void e.addMissing(t.level,t.row,t.col,s);const i=s/2;for(let r=0;r<t.children.length;r++){const n=t.children[r];y(n)?e.addMissing(t.level+1,(t.row<<1)+((2&r)>>1),(t.col<<1)+(1&r),i):this._collectMissingTilesRecurse(n,e,i)}}_referenceFeature(t){const e=(this._refCounts.get(t)||0)+1;return this._refCounts.set(t,e),e===1?T.ADDED:T.UNCHANGED}_unreferenceFeature(t){const e=(this._refCounts.get(t)||0)-1;return e===0?(this._refCounts.delete(t),T.REMOVED):(e>0&&this._refCounts.set(t,e),T.UNCHANGED)}get test(){return{tiles:Array.from(this._tiles.values()).map(t=>`${t.data.id}:[${Array.from(t.objectIds)}]`),featureReferences:Array.from(this._refCounts.keys()).map(t=>`${t}:${this._refCounts.get(t)}`)}}};function et(t){return t.reduce((e,s)=>e+tt(s),0)}function tt(t){return 32+st(t.geometry)+Te(t.attributes)}function st(t){if(y(t))return 0;const e=M(t.lengths,4);return 32+M(t.coords,8)+e}u([f({constructOnly:!0})],v.prototype,"featureStore",void 0),u([f()],v.prototype,"tileInfo",void 0),u([f()],v.prototype,"extent",void 0),u([f()],v.prototype,"maximumByteSize",void 0),v=u([O("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTileStore")],v);class it{constructor(e,s,i){this.data=e,this.objectIds=s,this.byteSize=i}}class Z{constructor(e,s,i){this.level=e,this.row=s,this.col=i,this.isLeaf=!1,this.extent=null,this.children=[null,null,null,null]}get hasChildren(){return!this.isLeaf&&(p(this.children[0])||p(this.children[1])||p(this.children[2])||p(this.children[3]))}}let R=class{constructor(e,s=[]){this.missingTiles=s,this.fullArea=0,this.coveredArea=0,this.fullArea=ee(e.extent),this.coveredArea=this.fullArea}prepend(e){this.missingTiles=e.missingTiles.concat(this.missingTiles),this.coveredArea+=e.coveredArea,this.fullArea+=e.fullArea}};class rt{constructor(e,s,i){this._tileInfo=e,this._extent=null,this.info=new R(s),p(i)&&(this._extent=P(i))}addMissing(e,s,i,r){const n=new ve(null,e,s,i);this._tileInfo.updateTileInfo(n,x.ExtrapolateOptions.POWER_OF_TWO),y(n.extent)||p(this._extent)&&!D(this._extent,n.extent)||(this.info.missingTiles.push({data:n,resolution:r}),this.info.coveredArea-=ee(n.extent))}}const nt=.18751;var T;(function(t){t[t.ADDED=0]="ADDED",t[t.REMOVED=1]="REMOVED",t[t.UNCHANGED=2]="UNCHANGED"})(T||(T={}));let S=class extends Se.EventedAccessor{constructor(){super(...arguments),this._isInitializing=!0,this.remoteClient=null,this._whenSetup=U(),this._elevationAligner=V(),this._elevationFilter=J(),this._symbologyCandidatesFetcher=L(),this._handles=new be,this._updatingHandles=new j,this._editsUpdatingHandles=new j,this._pendingApplyEdits=new Map,this._alignPointsInFeatures=async(t,e)=>{const s={points:t},i=await this.remoteClient.invoke("alignElevation",s,{signal:e});return m(e),i},this._getSymbologyCandidates=async(t,e)=>{const s={candidates:t,spatialReference:this._spatialReference.toJSON()},i=await this.remoteClient.invoke("getSymbologyCandidates",s,{signal:e});return m(e),i}}get updating(){return this.updatingExcludingEdits||this._editsUpdatingHandles.updating||this._featureFetcher.updating}get updatingExcludingEdits(){return this._featureFetcher.updatingExcludingEdits||this._isInitializing||this._updatingHandles.updating}destroy(){this._featureFetcher.destroy(),this._queryEngine.destroy(),this._featureStore.clear(),this._handles.destroy()}async setup(t){const{geometryType:e,objectIdField:s,timeInfo:i,fields:r}=t.serviceInfo,{hasZ:n}=t,a=B.fromJSON(t.spatialReference);this._spatialReference=a,this._featureStore=new $e({...t.serviceInfo,hasZ:n,hasM:!1}),this._queryEngine=new Ae({spatialReference:t.spatialReference,featureStore:this._featureStore,geometryType:e,fields:r,hasZ:n,hasM:!1,objectIdField:s,timeInfo:i?Ie.fromJSON(i):null}),this._featureFetcher=new g({store:new v({featureStore:this._featureStore}),url:t.serviceInfo.url,objectIdField:t.serviceInfo.objectIdField,globalIdField:t.serviceInfo.globalIdField,capabilities:t.serviceInfo.capabilities,spatialReference:a,sourceSpatialReference:B.fromJSON(t.serviceInfo.spatialReference)});const o=t.configuration.viewType==="3d";return this._elevationAligner=V(o,{elevationInfo:p(t.elevationInfo)?we.fromJSON(t.elevationInfo):null,alignPointsInFeatures:this._alignPointsInFeatures,spatialReference:a}),this._elevationFilter=J(o),this._handles.add([q(()=>this._featureFetcher.availability,c=>this.emit("notify-availability",{availability:c}),K),q(()=>this.updating,()=>this._notifyUpdating())]),this._whenSetup.resolve(),this._isInitializing=!1,this.configure(t.configuration)}async configure(t){return await this._updatingHandles.addPromise(this._whenSetup.promise),this._updateFeatureFetcherConfiguration(t),{result:{}}}async fetchCandidates(t,e){await this._whenSetup.promise,m(e);const s=at(t),i=p(e)?e.signal:null,r=await this._queryEngine.executeQueryForSnapping(s,i);m(i);const n=await this._elevationAligner.alignCandidates(r.candidates,i);m(i);const a=await this._symbologyCandidatesFetcher.fetch(n,i);m(i);const o=a.length===0?n:n.concat(a);return{result:{candidates:this._elevationFilter.filter(s,o)}}}async updateTiles(t,e){return await this._updatingHandles.addPromise(this._whenSetup.promise),m(e),this._featureFetcher.tileSize=t.tileSize,this._featureFetcher.tilesOfInterest=t.tiles,this._featureFetcher.tileInfo=p(t.tileInfo)?x.fromJSON(t.tileInfo):null,F}async refresh(t,e){return await this._updatingHandles.addPromise(this._whenSetup.promise),m(e),this._featureFetcher.refresh(),F}async whenNotUpdating(t,e){return await this._updatingHandles.addPromise(this._whenSetup.promise),m(e),await xe(()=>!this.updatingExcludingEdits,e),m(e),F}async getDebugInfo(t,e){return m(e),{result:this._featureFetcher.debugInfo}}async beginApplyEdits(t,e){this._updatingHandles.addPromise(this._whenSetup.promise),m(e);const s=U();return this._pendingApplyEdits.set(t.id,s),this._featureFetcher.applyEdits(s.promise),this._editsUpdatingHandles.addPromise(s.promise),F}async endApplyEdits(t,e){const s=this._pendingApplyEdits.get(t.id);return s&&s.resolve(t.edits),m(e),F}async notifyElevationSourceChange(t,e){return this._elevationAligner.notifyElevationSourceChange(),F}async notifySymbologyChange(t,e){return F}async setSymbologySnappingSupported(t){return this._symbologyCandidatesFetcher=L(t,this._getSymbologyCandidates),F}_updateFeatureFetcherConfiguration(t){this._featureFetcher.filter=p(t.filter)?I.fromJSON(t.filter):null,this._featureFetcher.customParameters=t.customParameters}_notifyUpdating(){this.emit("notify-updating",{updating:this.updating})}};u([f({readOnly:!0})],S.prototype,"updating",null),u([f({readOnly:!0})],S.prototype,"updatingExcludingEdits",null),u([f()],S.prototype,"_isInitializing",void 0),S=u([O("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorker")],S);const vt=S;function at(t){return{point:t.point,distance:t.distance,types:t.types,query:p(t.filter)?t.filter:{where:"1=1"}}}const F={result:{}};export{vt as default};
