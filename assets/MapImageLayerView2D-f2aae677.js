import{M as P,b2 as k,e$ as z,cV as D,aC as n,aD as p,f0 as W,di as Z,dW as L,z as K,f1 as X,aE as F,dm as q,f2 as Y,eb as O,dx as ee,f3 as te,f4 as re,eU as ie,f5 as se,f6 as oe,f7 as ae,U as ne,ei as le,eG as pe,ev as he,b as ue,s as U,q as me,f8 as ye,f9 as de,de as ce,Q as fe,V as ge,fa as we,E as ve,em as be,a2 as xe,G as $e,at as A,o as Ie}from"./vendor-8855e047.js";import{a as _e}from"./BitmapContainer-92c1e45a.js";import{y as Ee,u as Se}from"./LayerView-c0e4871a.js";import{o as Pe}from"./BaseGraphicContainer-3fd28768.js";import{n as Re}from"./HighlightGraphicContainer-14109d46.js";import{v as Fe}from"./ExportStrategy-ee67fbb7.js";import{c as je}from"./ExportImageParameters-989b00c6.js";import{n as V}from"./floorFilterUtils-080a7cd2.js";import{s as M,a as Ne}from"./drapedUtils-ae6734c6.js";import{i as Oe}from"./sublayerUtils-e5f898f8.js";import{d as Ve,s as Ge}from"./popupUtils-1cb728f8.js";import{i as Ue}from"./RefreshableLayerView-c4301415.js";import"./WGLContainer-ebc02f47.js";import"./enums-64ab819c.js";import"./pixelUtils-3855591f.js";import"./utils-8ee526e4.js";import"./enums-4ca4641f.js";import"./MaterialKey-70f1285d.js";import"./Utils-d4b93383.js";import"./definitions-315e9606.js";import"./Texture-a453d16b.js";import"./VertexElementDescriptor-2925c6af.js";import"./VertexArrayObject-e5efdca7.js";import"./ProgramTemplate-6b3e4a32.js";import"./StyleDefinition-beb706e3.js";import"./config-1337d16e.js";import"./GeometryUtils-c093d234.js";import"./earcut-58237617.js";import"./ExpandedCIM-b3066f4d.js";import"./BidiEngine-836b7ef6.js";import"./Rect-ea14f53a.js";import"./GeometryUtils-eebff0a0.js";import"./floatRGBA-7e7ca4e5.js";import"./normalizeUtilsSync-49ecedfc.js";import"./projectionSupport-e3191e9a.js";import"./json-48e3ea08.js";import"./FeatureContainer-8b2a11d8.js";import"./TileContainer-c8699d4e.js";import"./visualVariablesUtils-0be3d85f.js";import"./visualVariablesUtils-50395d49.js";import"./Matcher-692375ad.js";import"./tileUtils-34824a75.js";import"./TileClipper-04d2fc45.js";import"./Geometry-daada628.js";import"./devEnvironmentUtils-5002a058.js";import"./schemaUtils-0a330120.js";import"./createSymbolSchema-b76ad5ea.js";import"./rendererUtils-5cf9121b.js";import"./util-7ba604f1.js";import"./ComputedAttributeStorage-82bce8bc.js";import"./FeatureSetReader-1e4ad503.js";import"./centroid-19b48edf.js";import"./vec3f32-4322908d.js";import"./Bitmap-032dcd21.js";const T=s=>s.spatialReference.wkid||JSON.stringify(s.spatialReference);function Ae(s,e){const{dpi:t,gdbVersion:i,geometry:r,geometryPrecision:o,height:m,layerOption:h,mapExtent:a,maxAllowableOffset:l,returnFieldName:u,returnGeometry:y,returnUnformattedValues:g,returnZ:I,spatialReference:x,timeExtent:$,tolerance:c,width:E}=s.toJSON(),{dynamicLayers:w,layerDefs:f,layerIds:v}=Me(s),G=e&&P(e.geometry)?e.geometry:null,b={geometryPrecision:o,maxAllowableOffset:l,returnFieldName:u,returnGeometry:y,returnUnformattedValues:g,returnZ:I,tolerance:c},S=G&&G.toJSON()||r;if(b.imageDisplay=`${E},${m},${t}`,i&&(b.gdbVersion=i),S&&(delete S.spatialReference,b.geometry=JSON.stringify(S),b.geometryType=k(S)),x?b.sr=x.wkid||JSON.stringify(x):S&&S.spatialReference?b.sr=T(S):a&&a.spatialReference&&(b.sr=T(a)),b.time=$?[$.start,$.end].join(","):null,a){const{xmin:J,ymin:H,xmax:B,ymax:Q}=a;b.mapExtent=`${J},${H},${B},${Q}`}return f&&(b.layerDefs=f),w&&!f&&(b.dynamicLayers=w),b.layers=h==="popup"?"visible":h,v&&!w&&(b.layers+=`:${v.join(",")}`),b}function Me(s){var x,$;const{mapExtent:e,floors:t,width:i,sublayers:r,layerIds:o,layerOption:m,gdbVersion:h}=s,a=($=(x=r==null?void 0:r.find(c=>c.layer!=null))==null?void 0:x.layer)==null?void 0:$.serviceSublayers,l=m==="popup",u={},y=z({extent:e,width:i,spatialReference:e==null?void 0:e.spatialReference}),g=[],I=c=>{const E=y===0,w=c.minScale===0||y<=c.minScale,f=c.maxScale===0||y>=c.maxScale;if(c.visible&&(E||w&&f))if(c.sublayers)c.sublayers.forEach(I);else{if((o==null?void 0:o.includes(c.id))===!1||l&&(!c.popupTemplate||!c.popupEnabled))return;g.unshift(c)}};if(r==null||r.forEach(I),r&&!g.length)u.layerIds=[];else{const c=Oe(g,a,h),E=g.map(w=>{const f=V(t,w);return w.toExportImageJSON(f)});if(c)u.dynamicLayers=JSON.stringify(E);else{if(r){let f=g.map(({id:v})=>v);o&&(f=f.filter(v=>o.includes(v))),u.layerIds=f}else o!=null&&o.length&&(u.layerIds=o);const w=Te(t,g);if(P(w)&&w.length){const f={};for(const v of w)v.definitionExpression&&(f[v.id]=v.definitionExpression);Object.keys(f).length&&(u.layerDefs=JSON.stringify(f))}}}return u}function Te(s,e){const t=!!(s!=null&&s.length),i=e.filter(r=>r.definitionExpression!=null||t&&r.floorInfo!=null);return i.length?i.map(r=>{const o=V(s,r),m=D(o,r.definitionExpression);return{id:r.id,definitionExpression:m}}):null}var N;let d=N=class extends q{constructor(s){super(s),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}static from(s){return Y(N,s)}};n([p({type:Number,json:{write:!0}})],d.prototype,"dpi",void 0),n([p()],d.prototype,"floors",void 0),n([p({type:String,json:{write:!0}})],d.prototype,"gdbVersion",void 0),n([p({types:W,json:{read:Z,write:!0}})],d.prototype,"geometry",void 0),n([p({type:Number,json:{write:!0}})],d.prototype,"geometryPrecision",void 0),n([p({type:Number,json:{write:!0}})],d.prototype,"height",void 0),n([p({type:[Number],json:{write:!0}})],d.prototype,"layerIds",void 0),n([p({type:["top","visible","all","popup"],json:{write:!0}})],d.prototype,"layerOption",void 0),n([p({type:L,json:{write:!0}})],d.prototype,"mapExtent",void 0),n([p({type:Number,json:{write:!0}})],d.prototype,"maxAllowableOffset",void 0),n([p({type:Boolean,json:{write:!0}})],d.prototype,"returnFieldName",void 0),n([p({type:Boolean,json:{write:!0}})],d.prototype,"returnGeometry",void 0),n([p({type:Boolean,json:{write:!0}})],d.prototype,"returnM",void 0),n([p({type:Boolean,json:{write:!0}})],d.prototype,"returnUnformattedValues",void 0),n([p({type:Boolean,json:{write:!0}})],d.prototype,"returnZ",void 0),n([p({type:K,json:{write:!0}})],d.prototype,"spatialReference",void 0),n([p()],d.prototype,"sublayers",void 0),n([p({type:X,json:{write:!0}})],d.prototype,"timeExtent",void 0),n([p({type:Number,json:{write:!0}})],d.prototype,"tolerance",void 0),n([p({type:Number,json:{write:!0}})],d.prototype,"width",void 0),d=N=n([F("esri.rest.support.IdentifyParameters")],d);const C=d;let _=class extends q{constructor(e){super(e),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(e,t){return O.fromJSON({attributes:{...t.attributes},geometry:{...t.geometry}})}writeFeature(e,t){if(!e)return;const{attributes:i,geometry:r}=e;i&&(t.attributes={...i}),P(r)&&(t.geometry=r.toJSON(),t.geometryType=re.toJSON(r.type))}};n([p({type:String,json:{write:!0}})],_.prototype,"displayFieldName",void 0),n([p({type:O})],_.prototype,"feature",void 0),n([ee("feature",["attributes","geometry"])],_.prototype,"readFeature",null),n([te("feature")],_.prototype,"writeFeature",null),n([p({type:Number,json:{write:!0}})],_.prototype,"layerId",void 0),n([p({type:String,json:{write:!0}})],_.prototype,"layerName",void 0),_=n([F("esri.rest.support.IdentifyResult")],_);const Le=_;async function qe(s,e,t){const i=(e=Je(e)).geometry?[e.geometry]:[],r=ie(s);return r.path+="/identify",se(i).then(o=>{const m=Ae(e,{geometry:o&&o[0]}),h=oe({...r.query,f:"json",...m}),a=ae(h,t);return ne(r.path,a).then(Ce).then(l=>He(l,e.sublayers))})}function Ce(s){const e=s.data;return e.results=e.results||[],e.exceededTransferLimit=Boolean(e.exceededTransferLimit),e.results=e.results.map(t=>Le.fromJSON(t)),e}function Je(s){return s=C.from(s)}function He(s,e){if(!(e!=null&&e.length))return s;const t=new Map;function i(r){t.set(r.id,r),r.sublayers&&r.sublayers.forEach(i)}e.forEach(i);for(const r of s.results)r.feature.sourceLayer=t.get(r.layerId);return s}let j=null;const Be=s=>{let e=class extends s{constructor(){super(...arguments),this._featuresResolutions=new WeakMap,this.highlightGraphics=new pe,this.updateHighlightedFeatures=he(async t=>{this.destroyed||this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(t).catch(()=>{}))})}initialize(){this.exportImageParameters=new je({layer:this.layer}),this.handles.add([ue(()=>this.highlightGraphics,"change",t=>{this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(t.added).catch(()=>{})),this.updateHighlightedFeatures(this._highlightGeometriesResolution)})])}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var t;return(t=this.exportImageParameters)==null||t.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeatures(t,i){var m,h,a,l;const{layer:r}=this;if(!t)throw new U("mapimagelayer:fetchPopupFeatures","Nothing to fetch without area",{layer:r});const o=((h=(m=this.layer.capabilities)==null?void 0:m.operations)==null?void 0:h.supportsQuery)??!0;if(!((((l=(a=this.layer.capabilities)==null?void 0:a.operations)==null?void 0:l.supportsIdentify)??!0)&&this.layer.version>=10.5)&&!o)throw new U("mapimagelayer:fetchPopupFeatures-not-supported","query operation is disabled for this service",{layer:r});return o?this._fetchPopupFeaturesUsingQueries(t,i):this._fetchPopupFeaturesUsingIdentify(t,i)}canResume(){var t;return!!super.canResume()&&!((t=this.timeExtent)!=null&&t.isEmpty)}async _updateHighlightedFeaturesSymbols(t){for(const i of t){const r="renderer"in i.sourceLayer&&i.sourceLayer.renderer;"geometryType"in i.sourceLayer&&i.sourceLayer.geometryType==="point"&&r&&"getSymbolAsync"in r&&r.getSymbolAsync(i).then(async o=>{var a;let m="width"in o&&"height"in o&&o.width!=null&&o.height!=null?Math.max(o.width,o.height):"size"in o?o.size:null;const h="visualVariables"in r&&((a=r.visualVariables)==null?void 0:a.find(l=>l.type==="size"));h&&(j||(j=(await me(()=>import("./vendor-8855e047.js").then(l=>l.mb),[])).getSize),m=j(h,i,{view:this.view.type,scale:this.view.scale,shape:o.type==="simple-marker"?o.style:null})),this.highlightGraphics.includes(i)&&(i.symbol=new ye({style:"square",size:m,xoffset:"xoffset"in o?o.xoffset:0,yoffset:"yoffset"in o?o.yoffset:0}),i.visible=!0,this.highlightGraphicUpdated(i,"symbol"))})}}async _updateHighlightedFeaturesGeometries(t){this._highlightGeometriesResolution=t;const i=this.highlightGraphics;if(!i.length||!this.layer.capabilities.operations.supportsQuery)return;const r=this._getTargetResolution(t),o=new Map;for(const a of i)if(!this._featuresResolutions.has(a)||this._featuresResolutions.get(a)>r){const l=a.sourceLayer;de(o,l,()=>new Map).set(a.getObjectId(),a)}const m=Array.from(o,([a,l])=>{const u=a.createQuery();return u.objectIds=[...l.keys()],u.outFields=[a.objectIdField],u.returnGeometry=!0,u.maxAllowableOffset=r,u.outSpatialReference=this.view.spatialReference,a.queryFeatures(u)}),h=await Promise.all(m);if(!this.destroyed)for(const{features:a}of h)for(const l of a){const u=l.sourceLayer,y=o.get(u).get(l.getObjectId());y&&this.highlightGraphics.includes(y)&&(y.geometry=l.geometry,this.highlightGraphicUpdated(y,"geometry"),this._featuresResolutions.set(y,r))}}_getTargetResolution(t){const i=t*ce(this.view.spatialReference),r=i/16;return r<=10?0:t/i*r}async _fetchPopupFeaturesUsingIdentify(t,i){const r=await this._createIdentifyParameters(t,i);if(fe(r))return[];const{results:o}=await qe(this.layer.parsedUrl,r);return o.map(m=>m.feature)}async _createIdentifyParameters(t,i){const{floors:r,spatialReference:o,scale:m}=this.view,h=P(i)?i.event:null,a=await this._collectPopupProviders(this.layer.sublayers,m,i);if(!a.length)return null;await Promise.all(a.map(({sublayer:x})=>x.load().catch(()=>{})));const l=Math.min(ge("mapimagelayer-popup-identify-max-tolerance"),this.layer.allSublayers.reduce((x,$)=>$.renderer?M({renderer:$.renderer,event:h}):x,2)),u=this.createFetchPopupFeaturesQueryGeometry(t,l),y=we(m,o),g=Math.round(u.width/y),I=new L({xmin:u.center.x-y*g,ymin:u.center.y-y*g,xmax:u.center.x+y*g,ymax:u.center.y+y*g,spatialReference:u.spatialReference});return new C({floors:r,gdbVersion:this.layer.gdbVersion,geometry:t,height:g,layerOption:"popup",mapExtent:I,returnGeometry:!0,spatialReference:o,sublayers:this.layer.sublayers,timeExtent:this.timeExtent,tolerance:l,width:g})}async _fetchPopupFeaturesUsingQueries(t,i){const r=await this._collectPopupProviders(this.layer.sublayers,this.view.scale,i),o=P(i)?i.event:null,m=r.map(async({sublayer:h,popupTemplate:a})=>{var E,w;await h.load().catch(()=>{});const l=h.createQuery(),u=M({renderer:h.renderer,event:o}),y=this.createFetchPopupFeaturesQueryGeometry(t,u);if(l.geometry=y,l.outFields=await Ve(h,a),l.timeExtent=this.timeExtent,"floors"in this.view){const f=(w=(E=this.view)==null?void 0:E.floors)==null?void 0:w.clone(),v=V(f,h);P(v)&&(l.where=l.where?`(${l.where}) AND (${v})`:v)}const g=this._getTargetResolution(y.width/u),I=await this._loadArcadeModules(a),x=h.geometryType==="point"||I&&I.arcadeUtils.hasGeometryOperations(a);x||(l.maxAllowableOffset=g);const{features:$}=await h.queryFeatures(l),c=x?0:g;for(const f of $)this._featuresResolutions.set(f,c);return $});return(await ve(m)).reverse().reduce((h,a)=>a.value?[...h,...a.value]:h,[]).filter(h=>h!=null)}async _collectPopupProviders(t,i,r){const o=[],m=async a=>{const l=a.minScale===0||i<=a.minScale,u=a.maxScale===0||i>=a.maxScale;if(a.visible&&l&&u){if(a.sublayers)a.sublayers.forEach(m);else if(a.popupEnabled){const y=Ge(a,{...r,defaultPopupTemplateEnabled:!1});P(y)&&o.unshift({sublayer:a,popupTemplate:y})}}},h=t.toArray().reverse().map(m);return await Promise.all(h),o}_loadArcadeModules(t){var i;if((i=t.expressionInfos)!=null&&i.length||Array.isArray(t.content)&&t.content.some(r=>r.type==="expression"))return be()}};return n([p()],e.prototype,"highlightGraphics",void 0),n([p()],e.prototype,"exportImageParameters",void 0),n([p({readOnly:!0})],e.prototype,"exportImageVersion",null),n([p()],e.prototype,"layer",void 0),n([p()],e.prototype,"suspended",void 0),n([p(le)],e.prototype,"timeExtent",void 0),e=n([F("esri.views.layers.MapImageLayerView")],e),e};let R=class extends Be(Ue(Ee(Se))){update(s){this.strategy.update(s).catch(e=>{xe(e)||$e.getLogger(this.declaredClass).error(e)}),s.stationary&&this.updateHighlightedFeatures(s.state.resolution),this._highlightView.processUpdate(s)}attach(){const{imageMaxWidth:s,imageMaxHeight:e,version:t}=this.layer,i=t>=10.3,r=t>=10;this._bitmapContainer=new _e,this.container.addChild(this._bitmapContainer),this._highlightView=new Pe({view:this.view,graphics:this.highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new Re(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container),this.strategy=new Fe({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:s,imageMaxHeight:e,imageRotationSupported:i,imageNormalizationSupported:r,hidpi:!0}),this.handles.add(A(()=>this.exportImageVersion,()=>this.requestUpdate()),"exportImageVersion"),this.handles.add(A(()=>{var o;return(o=this.view)==null?void 0:o.floors},()=>this.requestUpdate()),"view.floors"),this.requestUpdate()}detach(){this.handles.remove("exportImageVersion"),this.handles.remove("view.floors"),this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(s){let e=null;if(s instanceof O?e=[s]:Ie.isCollection(s)&&s.length>0?e=s.toArray():Array.isArray(s)&&s.length>0&&(e=s),e=e==null?void 0:e.filter(Boolean),!e||!e.length)return{remove:()=>{}};for(const t of e)"geometryType"in t.sourceLayer&&t.sourceLayer.geometryType==="point"&&(t.visible=!1);return this.highlightGraphics.addMany(e),{remove:()=>{this.highlightGraphics.removeMany(e)}}}supportsSpatialReference(s){return this.layer.serviceSupportsSpatialReference(s)}createFetchPopupFeaturesQueryGeometry(s,e){return Ne(s,e,this.view)}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}highlightGraphicUpdated(s,e){this._highlightView.graphicUpdateHandler({graphic:s,property:e})}fetchImage(s,e,t,i){return this.layer.fetchImage(s,e,t,{timeExtent:this.timeExtent,floors:this.view.floors,...i})}fetchImageBitmap(s,e,t,i){return this.layer.fetchImageBitmap(s,e,t,{timeExtent:this.timeExtent,floors:this.view.floors,...i})}};n([p()],R.prototype,"strategy",void 0),n([p()],R.prototype,"updating",void 0),R=n([F("esri.views.2d.layers.MapImageLayerView2D")],R);const kt=R;export{kt as default};