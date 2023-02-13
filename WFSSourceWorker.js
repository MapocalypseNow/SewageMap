import{ac as p,cq as l,fJ as u,r as g,cv as _,cO as f,cX as d,a as w,b as h,aC as E,ae as q,D as F}from"./index.js";import{g as x}from"./FeatureStore.js";import{g as S,f as T}from"./projectionSupport.js";import{e as b}from"./QueryEngine.js";import{T as j,I}from"./geojson.js";import{m as C}from"./sourceUtils.js";import{K as P}from"./wfsUtils.js";import"./BoundsStore.js";import"./PooledRBush.js";import"./centroid.js";import"./utils2.js";import"./json.js";import"./QueryEngineResult.js";import"./WhereClause.js";import"./executionError.js";import"./timeSupport.js";import"./xmlUtils.js";class z{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async e=>{var i;const{objectIdField:t}=this._queryEngine,s=await P((i=this._getFeatureUrl)!=null?i:"",this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map(r=>r.name),signal:e});await j(s),p(e);const a=I(s,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:t});if(!l(this._queryEngine.spatialReference,u))for(const r of a)g(r.geometry)&&(r.geometry=_(S(f(r.geometry,this._queryEngine.geometryType,!1,!1),u,this._queryEngine.spatialReference)));let n=1;for(const r of a){const o={};C(this._fieldsIndex,o,r.attributes,!0),r.attributes=o,r.attributes[t]==null&&(r.objectId=r.attributes[t]=n++)}return a}}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=null}async load(e,t){const{getFeatureUrl:s,getFeatureOutputFormat:a,spatialReference:n,fields:i,geometryType:r,featureType:o,objectIdField:y,customParameters:c}=e;this._featureType=o,this._customParameters=c,this._getFeatureUrl=s,this._getFeatureOutputFormat=a,this._fieldsIndex=new d(i),await this._checkProjection(n),p(t),this._queryEngine=new b({fields:i,geometryType:r,hasM:!1,hasZ:!1,objectIdField:y,spatialReference:n,timeInfo:null,featureStore:new x({geometryType:r,hasM:!1,hasZ:!1})});const m=await this._snapshotFeatures(w(t.signal));return this._queryEngine.featureStore.addMany(m),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async applyEdits(){throw new h("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var t;return this._customParameters=e,(t=this._snapshotTask)==null||t.abort(),this._snapshotTask=E(this._snapshotFeatures),this._snapshotTask.promise.then(s=>{this._queryEngine.featureStore.clear(),s&&this._queryEngine.featureStore.addMany(s)},s=>{this._queryEngine.featureStore.clear(),q(s)||F.getLogger("esri.layers.WFSLayer").error(new h("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:s}))}),await this._waitSnapshotComplete(),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _checkProjection(e){try{await T(u,e)}catch{throw new h("unsupported-projection","Projection not supported",{spatialReference:e})}}}export{z as default};
