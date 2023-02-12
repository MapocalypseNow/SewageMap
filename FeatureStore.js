import{fI as n,k as a,bs as h,fc as u,aS as f,r as i,fK as m,O as g,s as _,fL as c,bf as y}from"./index.js";import{o as I}from"./BoundsStore.js";import{e as l}from"./centroid.js";import{E as b}from"./utils2.js";const B={getObjectId:s=>s.objectId,getAttributes:s=>s.attributes,getAttribute:(s,e)=>s.attributes[e],cloneWithGeometry:(s,e)=>new n(e,s.attributes,null,s.objectId),getGeometry:s=>s.geometry,getCentroid:(s,e)=>(a(s.centroid)&&(s.centroid=l(new h,s.geometry,e.hasZ,e.hasM)),s.centroid)},v=u();class x{constructor(e){this.geometryInfo=e,this._boundsStore=new I,this._featuresById=new Map,this._markedIds=new Set,this.events=new f,this.featureAdapter=B}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let e=0;return this._featuresById.forEach(t=>{i(t.geometry)&&t.geometry.coords&&(e+=t.geometry.coords.length)}),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}getFullExtent(e){if(a(this.fullBounds))return null;const[t,r,o,d]=this.fullBounds;return{xmin:t,ymin:r,xmax:o,ymax:d,spatialReference:b(e)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(const t of e)this._add(t);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const r=this._featuresById.get(t);r&&this._remove(r)}this._emitChanged()}forEachBounds(e,t){for(const r of e){const o=this._boundsStore.get(r.objectId);o&&t(m(v,o))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}forEach(e){this._featuresById.forEach(t=>e(t))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,r=>{t(this._featuresById.get(r))})}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let e=!1;this._featuresById.forEach((t,r)=>{this._markedIds.has(r)||(e=!0,this._remove(t))}),this._markedIds.clear(),e&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(e){if(!e)return;const t=e.objectId;if(t==null)return void g.getLogger("esri.layers.graphics.data.FeatureStore").error(new _("featurestore:invalid-feature","feature id is missing",{feature:e}));const r=this._featuresById.get(t);let o;if(this._markedIds.add(t),r?(e.displayId=r.displayId,o=this._boundsStore.get(t),this._boundsStore.delete(t)):i(this.onFeatureAdd)&&this.onFeatureAdd(e),a(e.geometry)||!e.geometry.coords||!e.geometry.coords.length)return this._boundsStore.set(t,null),void this._featuresById.set(t,e);o=c(i(o)?o:y(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),i(o)&&this._boundsStore.set(t,o),this._featuresById.set(t,e)}_remove(e){i(this.onFeatureRemove)&&this.onFeatureRemove(e);const t=e.objectId;return this._markedIds.delete(t),this._boundsStore.delete(t),this._featuresById.delete(t),e}}export{x as g};
