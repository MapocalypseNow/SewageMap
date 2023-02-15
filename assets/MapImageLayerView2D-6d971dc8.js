import{K as P,b1 as k,e_ as D,cU as z,aB as n,aC as p,e$ as Z,dh as W,dV as L,y as K,f0 as X,aD as R,dl as q,f1 as Y,ea as O,dw as ee,f2 as te,f3 as re,eT as ie,f4 as se,f5 as oe,f6 as ae,U as ne,eh as le,eF as pe,eu as he,b as ue,s as G,o as ye,f7 as me,f8 as de,dd as ce,P as fe,T as ge,f9 as we,E as ve,el as be,a1 as xe,F as $e,as as A,m as Ie}from"./vendor-f61b19da.js";import{a as _e}from"./BitmapContainer-468994cd.js";import{y as Ee,u as Se}from"./LayerView-db230c5b.js";import{o as Pe}from"./BaseGraphicContainer-8fd74117.js";import{n as Fe}from"./HighlightGraphicContainer-e0978809.js";import{v as Re}from"./ExportStrategy-003b0158.js";import{c as je}from"./ExportImageParameters-a582794b.js";import{n as U}from"./floorFilterUtils-080a7cd2.js";import{s as T,a as Ne}from"./drapedUtils-03c2169d.js";import{i as Oe}from"./sublayerUtils-3d8cfd90.js";import{d as Ue,s as Ve}from"./popupUtils-191f4a43.js";import{i as Ge}from"./RefreshableLayerView-3ea97239.js";import"./WGLContainer-78c0e7a1.js";import"./enums-64ab819c.js";import"./pixelUtils-e7c1af11.js";import"./utils-073a76a7.js";import"./enums-4ca4641f.js";import"./MaterialKey-6fc95429.js";import"./Utils-823f2fe9.js";import"./definitions-315e9606.js";import"./Texture-a45928bd.js";import"./VertexElementDescriptor-2925c6af.js";import"./VertexArrayObject-336b55d9.js";import"./ProgramTemplate-0eca8760.js";import"./StyleDefinition-beb706e3.js";import"./config-1337d16e.js";import"./GeometryUtils-c093d234.js";import"./earcut-58237617.js";import"./ExpandedCIM-387e7205.js";import"./BidiEngine-836b7ef6.js";import"./Rect-ea14f53a.js";import"./GeometryUtils-eebff0a0.js";import"./floatRGBA-51b72951.js";import"./normalizeUtilsSync-20aebf4d.js";import"./projectionSupport-d522253e.js";import"./json-48e3ea08.js";import"./FeatureContainer-d2ba38b3.js";import"./TileContainer-ef5effe6.js";import"./visualVariablesUtils-69d25540.js";import"./visualVariablesUtils-9b7ef877.js";import"./Matcher-341f1577.js";import"./tileUtils-f4264142.js";import"./TileClipper-5d3dda2e.js";import"./Geometry-daada628.js";import"./devEnvironmentUtils-5002a058.js";import"./schemaUtils-bf9f517f.js";import"./createSymbolSchema-59778335.js";import"./rendererUtils-ca5f4ebc.js";import"./util-b2f998f9.js";import"./ComputedAttributeStorage-f8b84bd3.js";import"./FeatureSetReader-d42fce40.js";import"./centroid-7bcd4b03.js";import"./vec3f32-4322908d.js";import"./Bitmap-68500ca8.js";const M=s=>s.spatialReference.wkid||JSON.stringify(s.spatialReference);function Ae(s,e){const{dpi:t,gdbVersion:i,geometry:r,geometryPrecision:o,height:y,layerOption:h,mapExtent:a,maxAllowableOffset:l,returnFieldName:u,returnGeometry:m,returnUnformattedValues:g,returnZ:I,spatialReference:x,timeExtent:$,tolerance:c,width:E}=s.toJSON(),{dynamicLayers:w,layerDefs:f,layerIds:v}=Te(s),V=e&&P(e.geometry)?e.geometry:null,b={geometryPrecision:o,maxAllowableOffset:l,returnFieldName:u,returnGeometry:m,returnUnformattedValues:g,returnZ:I,tolerance:c},S=V&&V.toJSON()||r;if(b.imageDisplay=`${E},${y},${t}`,i&&(b.gdbVersion=i),S&&(delete S.spatialReference,b.geometry=JSON.stringify(S),b.geometryType=k(S)),x?b.sr=x.wkid||JSON.stringify(x):S&&S.spatialReference?b.sr=M(S):a&&a.spatialReference&&(b.sr=M(a)),b.time=$?[$.start,$.end].join(","):null,a){const{xmin:J,ymin:H,xmax:B,ymax:Q}=a;b.mapExtent=`${J},${H},${B},${Q}`}return f&&(b.layerDefs=f),w&&!f&&(b.dynamicLayers=w),b.layers=h==="popup"?"visible":h,v&&!w&&(b.layers+=`:${v.join(",")}`),b}function Te(s){var x,$;const{mapExtent:e,floors:t,width:i,sublayers:r,layerIds:o,layerOption:y,gdbVersion:h}=s,a=($=(x=r==null?void 0:r.find(c=>c.layer!=null))==null?void 0:x.layer)==null?void 0:$.serviceSublayers,l=y==="popup",u={},m=D({extent:e,width:i,spatialReference:e==null?void 0:e.spatialReference}),g=[],I=c=>{const E=m===0,w=c.minScale===0||m<=c.minScale,f=c.maxScale===0||m>=c.maxScale;if(c.visible&&(E||w&&f))if(c.sublayers)c.sublayers.forEach(I);else{if((o==null?void 0:o.includes(c.id))===!1||l&&(!c.popupTemplate||!c.popupEnabled))return;g.unshift(c)}};if(r==null||r.forEach(I),r&&!g.length)u.layerIds=[];else{const c=Oe(g,a,h),E=g.map(w=>{const f=U(t,w);return w.toExportImageJSON(f)});if(c)u.dynamicLayers=JSON.stringify(E);else{if(r){let f=g.map(({id:v})=>v);o&&(f=f.filter(v=>o.includes(v))),u.layerIds=f}else o!=null&&o.length&&(u.layerIds=o);const w=Me(t,g);if(P(w)&&w.length){const f={};for(const v of w)v.definitionExpression&&(f[v.id]=v.definitionExpression);Object.keys(f).length&&(u.layerDefs=JSON.stringify(f))}}}return u}function Me(s,e){const t=!!(s!=null&&s.length),i=e.filter(r=>r.definitionExpression!=null||t&&r.floorInfo!=null);return i.length?i.map(r=>{const o=U(s,r),y=z(o,r.definitionExpression);return{id:r.id,definitionExpression:y}}):null}var N;let d=N=class extends q{constructor(s){super(s),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}static from(s){return Y(N,s)}};n([p({type:Number,json:{write:!0}})],d.prototype,"dpi",void 0),n([p()],d.prototype,"floors",void 0),n([p({type:String,json:{write:!0}})],d.prototype,"gdbVersion",void 0),n([p({types:Z,json:{read:W,write:!0}})],d.prototype,"geometry",void 0),n([p({type:Number,json:{write:!0}})],d.prototype,"geometryPrecision",void 0),n([p({type:Number,json:{write:!0}})],d.prototype,"height",void 0),n([p({type:[Number],json:{write:!0}})],d.prototype,"layerIds",void 0),n([p({type:["top","visible","all","popup"],json:{write:!0}})],d.prototype,"layerOption",void 0),n([p({type:L,json:{write:!0}})],d.prototype,"mapExtent",void 0),n([p({type:Number,json:{write:!0}})],d.prototype,"maxAllowableOffset",void 0),n([p({type:Boolean,json:{write:!0}})],d.prototype,"returnFieldName",void 0),n([p({type:Boolean,json:{write:!0}})],d.prototype,"returnGeometry",void 0),n([p({type:Boolean,json:{write:!0}})],d.prototype,"returnM",void 0),n([p({type:Boolean,json:{write:!0}})],d.prototype,"returnUnformattedValues",void 0),n([p({type:Boolean,json:{write:!0}})],d.prototype,"returnZ",void 0),n([p({type:K,json:{write:!0}})],d.prototype,"spatialReference",void 0),n([p()],d.prototype,"sublayers",void 0),n([p({type:X,json:{write:!0}})],d.prototype,"timeExtent",void 0),n([p({type:Number,json:{write:!0}})],d.prototype,"tolerance",void 0),n([p({type:Number,json:{write:!0}})],d.prototype,"width",void 0),d=N=n([R("esri.rest.support.IdentifyParameters")],d);const C=d;let _=class extends q{constructor(e){super(e),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(e,t){return O.fromJSON({attributes:{...t.attributes},geometry:{...t.geometry}})}writeFeature(e,t){if(!e)return;const{attributes:i,geometry:r}=e;i&&(t.attributes={...i}),P(r)&&(t.geometry=r.toJSON(),t.geometryType=re.toJSON(r.type))}};n([p({type:String,json:{write:!0}})],_.prototype,"displayFieldName",void 0),n([p({type:O})],_.prototype,"feature",void 0),n([ee("feature",["attributes","geometry"])],_.prototype,"readFeature",null),n([te("feature")],_.prototype,"writeFeature",null),n([p({type:Number,json:{write:!0}})],_.prototype,"layerId",void 0),n([p({type:String,json:{write:!0}})],_.prototype,"layerName",void 0),_=n([R("esri.rest.support.IdentifyResult")],_);const Le=_;async function qe(s,e,t){const i=(e=Je(e)).geometry?[e.geometry]:[],r=ie(s);return r.path+="/identify",se(i).then(o=>{const y=Ae(e,{geometry:o&&o[0]}),h=oe({...r.query,f:"json",...y}),a=ae(h,t);return ne(r.path,a).then(Ce).then(l=>He(l,e.sublayers))})}function Ce(s){const e=s.data;return e.results=e.results||[],e.exceededTransferLimit=Boolean(e.exceededTransferLimit),e.results=e.results.map(t=>Le.fromJSON(t)),e}function Je(s){return s=C.from(s)}function He(s,e){if(!(e!=null&&e.length))return s;const t=new Map;function i(r){t.set(r.id,r),r.sublayers&&r.sublayers.forEach(i)}e.forEach(i);for(const r of s.results)r.feature.sourceLayer=t.get(r.layerId);return s}let j=null;const Be=s=>{let e=class extends s{constructor(){super(...arguments),this._featuresResolutions=new WeakMap,this.highlightGraphics=new pe,this.updateHighlightedFeatures=he(async t=>{this.destroyed||this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(t).catch(()=>{}))})}initialize(){this.exportImageParameters=new je({layer:this.layer}),this.handles.add([ue(()=>this.highlightGraphics,"change",t=>{this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(t.added).catch(()=>{})),this.updateHighlightedFeatures(this._highlightGeometriesResolution)})])}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var t;return(t=this.exportImageParameters)==null||t.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeatures(t,i){var y,h,a,l;const{layer:r}=this;if(!t)throw new G("mapimagelayer:fetchPopupFeatures","Nothing to fetch without area",{layer:r});const o=((h=(y=this.layer.capabilities)==null?void 0:y.operations)==null?void 0:h.supportsQuery)??!0;if(!((((l=(a=this.layer.capabilities)==null?void 0:a.operations)==null?void 0:l.supportsIdentify)??!0)&&this.layer.version>=10.5)&&!o)throw new G("mapimagelayer:fetchPopupFeatures-not-supported","query operation is disabled for this service",{layer:r});return o?this._fetchPopupFeaturesUsingQueries(t,i):this._fetchPopupFeaturesUsingIdentify(t,i)}canResume(){var t;return!!super.canResume()&&!((t=this.timeExtent)!=null&&t.isEmpty)}async _updateHighlightedFeaturesSymbols(t){for(const i of t){const r="renderer"in i.sourceLayer&&i.sourceLayer.renderer;"geometryType"in i.sourceLayer&&i.sourceLayer.geometryType==="point"&&r&&"getSymbolAsync"in r&&r.getSymbolAsync(i).then(async o=>{var a;let y="width"in o&&"height"in o&&o.width!=null&&o.height!=null?Math.max(o.width,o.height):"size"in o?o.size:null;const h="visualVariables"in r&&((a=r.visualVariables)==null?void 0:a.find(l=>l.type==="size"));h&&(j||(j=(await ye(()=>import("./vendor-f61b19da.js").then(l=>l.ma),[])).getSize),y=j(h,i,{view:this.view.type,scale:this.view.scale,shape:o.type==="simple-marker"?o.style:null})),this.highlightGraphics.includes(i)&&(i.symbol=new me({style:"square",size:y,xoffset:"xoffset"in o?o.xoffset:0,yoffset:"yoffset"in o?o.yoffset:0}),i.visible=!0,this.highlightGraphicUpdated(i,"symbol"))})}}async _updateHighlightedFeaturesGeometries(t){this._highlightGeometriesResolution=t;const i=this.highlightGraphics;if(!i.length||!this.layer.capabilities.operations.supportsQuery)return;const r=this._getTargetResolution(t),o=new Map;for(const a of i)if(!this._featuresResolutions.has(a)||this._featuresResolutions.get(a)>r){const l=a.sourceLayer;de(o,l,()=>new Map).set(a.getObjectId(),a)}const y=Array.from(o,([a,l])=>{const u=a.createQuery();return u.objectIds=[...l.keys()],u.outFields=[a.objectIdField],u.returnGeometry=!0,u.maxAllowableOffset=r,u.outSpatialReference=this.view.spatialReference,a.queryFeatures(u)}),h=await Promise.all(y);if(!this.destroyed)for(const{features:a}of h)for(const l of a){const u=l.sourceLayer,m=o.get(u).get(l.getObjectId());m&&this.highlightGraphics.includes(m)&&(m.geometry=l.geometry,this.highlightGraphicUpdated(m,"geometry"),this._featuresResolutions.set(m,r))}}_getTargetResolution(t){const i=t*ce(this.view.spatialReference),r=i/16;return r<=10?0:t/i*r}async _fetchPopupFeaturesUsingIdentify(t,i){const r=await this._createIdentifyParameters(t,i);if(fe(r))return[];const{results:o}=await qe(this.layer.parsedUrl,r);return o.map(y=>y.feature)}async _createIdentifyParameters(t,i){const{floors:r,spatialReference:o,scale:y}=this.view,h=P(i)?i.event:null,a=await this._collectPopupProviders(this.layer.sublayers,y,i);if(!a.length)return null;await Promise.all(a.map(({sublayer:x})=>x.load().catch(()=>{})));const l=Math.min(ge("mapimagelayer-popup-identify-max-tolerance"),this.layer.allSublayers.reduce((x,$)=>$.renderer?T({renderer:$.renderer,event:h}):x,2)),u=this.createFetchPopupFeaturesQueryGeometry(t,l),m=we(y,o),g=Math.round(u.width/m),I=new L({xmin:u.center.x-m*g,ymin:u.center.y-m*g,xmax:u.center.x+m*g,ymax:u.center.y+m*g,spatialReference:u.spatialReference});return new C({floors:r,gdbVersion:this.layer.gdbVersion,geometry:t,height:g,layerOption:"popup",mapExtent:I,returnGeometry:!0,spatialReference:o,sublayers:this.layer.sublayers,timeExtent:this.timeExtent,tolerance:l,width:g})}async _fetchPopupFeaturesUsingQueries(t,i){const r=await this._collectPopupProviders(this.layer.sublayers,this.view.scale,i),o=P(i)?i.event:null,y=r.map(async({sublayer:h,popupTemplate:a})=>{var E,w;await h.load().catch(()=>{});const l=h.createQuery(),u=T({renderer:h.renderer,event:o}),m=this.createFetchPopupFeaturesQueryGeometry(t,u);if(l.geometry=m,l.outFields=await Ue(h,a),l.timeExtent=this.timeExtent,"floors"in this.view){const f=(w=(E=this.view)==null?void 0:E.floors)==null?void 0:w.clone(),v=U(f,h);P(v)&&(l.where=l.where?`(${l.where}) AND (${v})`:v)}const g=this._getTargetResolution(m.width/u),I=await this._loadArcadeModules(a),x=h.geometryType==="point"||I&&I.arcadeUtils.hasGeometryOperations(a);x||(l.maxAllowableOffset=g);const{features:$}=await h.queryFeatures(l),c=x?0:g;for(const f of $)this._featuresResolutions.set(f,c);return $});return(await ve(y)).reverse().reduce((h,a)=>a.value?[...h,...a.value]:h,[]).filter(h=>h!=null)}async _collectPopupProviders(t,i,r){const o=[],y=async a=>{const l=a.minScale===0||i<=a.minScale,u=a.maxScale===0||i>=a.maxScale;if(a.visible&&l&&u){if(a.sublayers)a.sublayers.forEach(y);else if(a.popupEnabled){const m=Ve(a,{...r,defaultPopupTemplateEnabled:!1});P(m)&&o.unshift({sublayer:a,popupTemplate:m})}}},h=t.toArray().reverse().map(y);return await Promise.all(h),o}_loadArcadeModules(t){var i;if((i=t.expressionInfos)!=null&&i.length||Array.isArray(t.content)&&t.content.some(r=>r.type==="expression"))return be()}};return n([p()],e.prototype,"highlightGraphics",void 0),n([p()],e.prototype,"exportImageParameters",void 0),n([p({readOnly:!0})],e.prototype,"exportImageVersion",null),n([p()],e.prototype,"layer",void 0),n([p()],e.prototype,"suspended",void 0),n([p(le)],e.prototype,"timeExtent",void 0),e=n([R("esri.views.layers.MapImageLayerView")],e),e};let F=class extends Be(Ge(Ee(Se))){update(s){this.strategy.update(s).catch(e=>{xe(e)||$e.getLogger(this.declaredClass).error(e)}),s.stationary&&this.updateHighlightedFeatures(s.state.resolution),this._highlightView.processUpdate(s)}attach(){const{imageMaxWidth:s,imageMaxHeight:e,version:t}=this.layer,i=t>=10.3,r=t>=10;this._bitmapContainer=new _e,this.container.addChild(this._bitmapContainer),this._highlightView=new Pe({view:this.view,graphics:this.highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new Fe(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container),this.strategy=new Re({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:s,imageMaxHeight:e,imageRotationSupported:i,imageNormalizationSupported:r,hidpi:!0}),this.handles.add(A(()=>this.exportImageVersion,()=>this.requestUpdate()),"exportImageVersion"),this.handles.add(A(()=>{var o;return(o=this.view)==null?void 0:o.floors},()=>this.requestUpdate()),"view.floors"),this.requestUpdate()}detach(){this.handles.remove("exportImageVersion"),this.handles.remove("view.floors"),this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(s){let e=null;if(s instanceof O?e=[s]:Ie.isCollection(s)&&s.length>0?e=s.toArray():Array.isArray(s)&&s.length>0&&(e=s),e=e==null?void 0:e.filter(Boolean),!e||!e.length)return{remove:()=>{}};for(const t of e)"geometryType"in t.sourceLayer&&t.sourceLayer.geometryType==="point"&&(t.visible=!1);return this.highlightGraphics.addMany(e),{remove:()=>{this.highlightGraphics.removeMany(e)}}}supportsSpatialReference(s){return this.layer.serviceSupportsSpatialReference(s)}createFetchPopupFeaturesQueryGeometry(s,e){return Ne(s,e,this.view)}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}highlightGraphicUpdated(s,e){this._highlightView.graphicUpdateHandler({graphic:s,property:e})}fetchImage(s,e,t,i){return this.layer.fetchImage(s,e,t,{timeExtent:this.timeExtent,floors:this.view.floors,...i})}fetchImageBitmap(s,e,t,i){return this.layer.fetchImageBitmap(s,e,t,{timeExtent:this.timeExtent,floors:this.view.floors,...i})}};n([p()],F.prototype,"strategy",void 0),n([p()],F.prototype,"updating",void 0),F=n([R("esri.views.2d.layers.MapImageLayerView2D")],F);const kt=F;export{kt as default};
