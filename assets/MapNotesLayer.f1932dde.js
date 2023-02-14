import{jD as $,jE as D,eG as R,f as o,g as l,h$ as K,l2 as U,G as T,em as j,ez as G,kg as q,kf as Q,eW as M,l3 as V,g3 as X,g4 as Y,g5 as Z,D as w,aj as J,e as ee,ae as x,gx as P,r as f,l4 as L,fN as v,l5 as _,eo as A,E as te,l as h,A as re,C as oe,d6 as ie,fw as ae,fu as le,fv as ne,er as se,ak as ye,jU as I,eR as b,eS as pe,w as ue,l6 as F}from"./vendor.f8a4aecc.js";import{n as de}from"./objectIdUtils.e2ddfb9a.js";let m=class extends $(D(j)){constructor(e){super(e),this.elevationInfo=null,this.graphics=new R,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(e){return this.graphics.add(e),this}addMany(e){return this.graphics.addMany(e),this}removeAll(){return this.graphics.removeAll(),this}remove(e){this.graphics.remove(e)}removeMany(e){this.graphics.removeMany(e)}on(e,t){return super.on(e,t)}graphicChanged(e){this.emit("graphic-update",e)}};o([l({type:K})],m.prototype,"elevationInfo",void 0),o([l(U(R,"graphics"))],m.prototype,"graphics",void 0),o([l({type:["show","hide"]})],m.prototype,"listMode",void 0),o([l()],m.prototype,"screenSizePerspectiveEnabled",void 0),o([l({readOnly:!0})],m.prototype,"type",void 0),o([l({constructOnly:!0})],m.prototype,"internal",void 0),m=o([T("esri.layers.GraphicsLayer")],m);const ce=m;function O(e){return e.featureCollectionType==="markup"||e.layers.some(t=>t.layerDefinition.visibilityField!=null||!z(t))}function z({layerDefinition:e,featureSet:t}){var i;const r=(i=e.geometryType)!=null?i:t.geometryType;return C.find(a=>{var s,y,p;return r===a.geometryTypeJSON&&((p=(y=(s=e.drawingInfo)==null?void 0:s.renderer)==null?void 0:y.symbol)==null?void 0:p.type)===a.identifyingSymbol.type})}function B(){return new ue({xmin:-180,ymin:-90,xmax:180,ymax:90})}const E=new G({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),me=new G({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0});let d=class extends ce{constructor(e){super(e),this.visibilityMode="inherited"}initialize(){for(const e of this.graphics)e.sourceLayer=this.layer;this.graphics.on("after-add",e=>{e.item.sourceLayer=this.layer}),this.graphics.on("after-remove",e=>{e.item.sourceLayer=null})}get fullExtent(){var r;const e=(r=this.layer)==null?void 0:r.spatialReference,t=this.fullBounds;return e?h(t)?v(B(),e).geometry:A(t,e):null}get fullBounds(){var r;const e=(r=this.layer)==null?void 0:r.spatialReference;if(!e)return null;const t=P();return this.graphics.forEach(i=>{const a=f(i.geometry)?v(i.geometry,e).geometry:null;f(a)&&L(t,a.type==="point"?a:a.extent,t)}),_(t,F)?null:t}get sublayers(){return this.graphics}};o([l({readOnly:!0})],d.prototype,"fullExtent",null),o([l({readOnly:!0})],d.prototype,"fullBounds",null),o([l({readOnly:!0})],d.prototype,"sublayers",null),o([l()],d.prototype,"layer",void 0),o([l()],d.prototype,"layerId",void 0),o([l({readOnly:!0})],d.prototype,"visibilityMode",void 0),d=o([T("esri.layers.MapNotesLayer.MapNotesSublayer")],d);const C=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:new q().toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:new Q().toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:new M().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:new M().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:new V().toJSON()}];let n=class extends $(D(X(Y(Z(j))))){constructor(e){super(e),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.listMode="hide-children",this.minScale=0,this.maxScale=0,this.spatialReference=w.WGS84,this.sublayers=new J(C.map(t=>new d({id:t.id,layerId:t.layerId,title:t.title,layer:this}))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(e,t,r){return{operations:{supportsMapNotesEditing:!O(t)&&(r==null?void 0:r.origin)!=="portal-item"}}}readFeatureCollections(e,t,r){if(!O(t))return null;const i=t.layers.map(a=>{const s=new ee;return s.read(a,r),s});return new J({items:i})}readLegacyfeatureCollectionJSON(e,t){return O(t)?x(t.featureCollection):null}get fullExtent(){var r;const e=this.spatialReference,t=P();return f(this.sublayers)?this.sublayers.forEach(({fullBounds:i})=>f(i)?L(t,i,t):t,t):(r=this.featureCollectionJSON)!=null&&r.layers.some(i=>i.layerDefinition.extent)&&this.featureCollectionJSON.layers.forEach(i=>{const a=v(i.layerDefinition.extent,e).geometry;f(a)&&L(t,a,t)}),_(t,F)?v(B(),e).geometry:A(t,e)}readMinScale(e,t){for(const r of t.layers)if(r.layerDefinition.minScale!=null)return r.layerDefinition.minScale;return 0}readMaxScale(e,t){for(const r of t.layers)if(r.layerDefinition.maxScale!=null)return r.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(e,t){return t.layers.length?w.fromJSON(t.layers[0].layerDefinition.spatialReference):w.WGS84}readSublayers(e,t,r){var s;if(O(t))return null;const i=[];let a=t.layers.reduce((y,p)=>{var u;return Math.max(y,(u=p.layerDefinition.id)!=null?u:-1)},-1)+1;for(const y of t.layers){const{layerDefinition:p,featureSet:u}=y,g=(s=p.id)!=null?s:a++,c=z(y);if(f(c)){const S=new d({id:c.id,title:p.name,layerId:g,layer:this,graphics:u.features.map(({geometry:N,symbol:k,attributes:W,popupInfo:H})=>te.fromJSON({attributes:W,geometry:N,symbol:k,popupTemplate:H}))});i.push(S)}}return new J(i)}writeSublayers(e,t,r,i){var g;const{minScale:a,maxScale:s}=this;if(h(e))return;const y=e.some(c=>c.graphics.length>0);if(!this.capabilities.operations.supportsMapNotesEditing)return void(y&&((g=i==null?void 0:i.messages)==null?void 0:g.push(new re("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer"))));const p=[];let u=this.spatialReference.toJSON();e:for(const c of e)for(const S of c.graphics)if(f(S.geometry)){u=S.geometry.spatialReference.toJSON();break e}for(const c of C){const S=e.find(N=>c.id===N.id);this._writeMapNoteSublayer(p,S,c,a,s,u,i)}oe("featureCollection.layers",p,t)}get textLayer(){return this._findSublayer("textLayer")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}read(e,t){"featureCollection"in e&&(e=x(e),Object.assign(e,e.featureCollection)),super.read(e,t)}async beforeSave(){if(h(this.sublayers))return;let e=null;const t=[];for(const i of this.sublayers)for(const a of i.graphics)if(f(a.geometry)){const s=a.geometry;e?ie(s.spatialReference,e)||(ae(s.spatialReference,e)||le()||await ne(),a.geometry=se(s,e)):e=s.spatialReference,t.push(a)}const r=await ye(t.map(i=>i.geometry));t.forEach((i,a)=>i.geometry=r[a])}_findSublayer(e){var t,r;return h(this.sublayers)?null:(r=(t=this.sublayers)==null?void 0:t.find(i=>i.id===e))!=null?r:null}_writeMapNoteSublayer(e,t,r,i,a,s,y){const p=[];if(!h(t)){for(const u of t.graphics)this._writeMapNote(p,u,r.geometryType,y);this._normalizeObjectIds(p,E),e.push({layerDefinition:{name:t.title,drawingInfo:{renderer:{type:"simple",symbol:x(r.identifyingSymbol)}},id:t.layerId,geometryType:r.geometryTypeJSON,minScale:i,maxScale:a,objectIdField:"OBJECTID",fields:[E.toJSON(),me.toJSON()],spatialReference:s},featureSet:{features:p,geometryType:r.geometryTypeJSON}})}}_writeMapNote(e,t,r,i){var u,g;if(h(t))return;const{geometry:a,symbol:s,popupTemplate:y}=t;if(h(a))return;if(a.type!==r)return void((u=i==null?void 0:i.messages)==null?void 0:u.push(new I("map-notes-layer:invalid-geometry-type",`Geometry "${a.type}" cannot be saved in "${r}" layer`,{graphic:t})));if(h(s))return void((g=i==null?void 0:i.messages)==null?void 0:g.push(new I("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:t})));const p={attributes:{...t.attributes},geometry:a.toJSON(),symbol:s.toJSON()};f(y)&&(p.popupInfo=y.toJSON()),e.push(p)}_normalizeObjectIds(e,t){const r=t.name;let i=de(r,e)+1;const a=new Set;for(const s of e){s.attributes||(s.attributes={});const{attributes:y}=s;(y[r]==null||a.has(y[r]))&&(y[r]=i++),a.add(y[r])}}};o([l({readOnly:!0})],n.prototype,"capabilities",void 0),o([b(["portal-item","web-map"],"capabilities",["layers"])],n.prototype,"readCapabilities",null),o([l({readOnly:!0})],n.prototype,"featureCollections",void 0),o([b(["web-map","portal-item"],"featureCollections",["layers"])],n.prototype,"readFeatureCollections",null),o([l({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],n.prototype,"featureCollectionJSON",void 0),o([b(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],n.prototype,"readLegacyfeatureCollectionJSON",null),o([l({readOnly:!0,json:{read:!0,write:{enabled:!0,ignoreOrigin:!0}}})],n.prototype,"featureCollectionType",void 0),o([l({readOnly:!0})],n.prototype,"fullExtent",null),o([l({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:this.featureCollectionJSON!=null}}}}}}})],n.prototype,"legendEnabled",void 0),o([l({type:["show","hide","hide-children"]})],n.prototype,"listMode",void 0),o([l({type:Number,nonNullable:!0,json:{write:!1}})],n.prototype,"minScale",void 0),o([b(["web-map","portal-item"],"minScale",["layers"])],n.prototype,"readMinScale",null),o([l({type:Number,nonNullable:!0,json:{write:!1}})],n.prototype,"maxScale",void 0),o([b(["web-map","portal-item"],"maxScale",["layers"])],n.prototype,"readMaxScale",null),o([l({readOnly:!0})],n.prototype,"multipointLayer",null),o([l({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],n.prototype,"operationalLayerType",void 0),o([l({readOnly:!0})],n.prototype,"pointLayer",null),o([l({readOnly:!0})],n.prototype,"polygonLayer",null),o([l({readOnly:!0})],n.prototype,"polylineLayer",null),o([l({type:w})],n.prototype,"spatialReference",void 0),o([b(["web-map","portal-item"],"spatialReference",["layers"])],n.prototype,"readSpatialReference",null),o([l({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],n.prototype,"sublayers",void 0),o([b("web-map","sublayers",["layers"])],n.prototype,"readSublayers",null),o([pe("web-map","sublayers")],n.prototype,"writeSublayers",null),o([l({readOnly:!0})],n.prototype,"textLayer",null),o([l()],n.prototype,"title",void 0),o([l({readOnly:!0,json:{read:!1}})],n.prototype,"type",void 0),n=o([T("esri.layers.MapNotesLayer")],n);const ge=n;export{ge as default};
