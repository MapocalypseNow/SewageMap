import{e as a,y as o,n as k,r as y,i as P,s as Y,q as A,w as Z}from"./cast-4943406f.js";import{U as K,j as ee,g as re}from"./request-9ab300ca.js";import{f as te}from"./promiseUtils-ec14a623.js";import{r as ie}from"./Version-51a09f10.js";import{r as M}from"./typedArrayUtil-bd69bba0.js";import{s as se,b as ae,T as j,v as q}from"./ensureType-9613b5f0.js";import{o as g,a as H,k as le,r as v}from"./Extent-d21a2637.js";import{j as oe,p as ne}from"./OperationalLayer-620e6022.js";import{j as J}from"./Collection-e1ec52f9.js";import{l as ye}from"./CollectionFlattener-43de7f16.js";import{a as w,s as E}from"./Error-8814705f.js";import{l as pe,U as de}from"./reactiveUtils-3389689f.js";import{_ as V}from"./preload-helper-6c8d3039.js";import"./geometry-da69b92c.js";import{k as ue}from"./PopupTemplate-9e34fd80.js";import"./UniqueValueRenderer-e68a70b1.js";import{b as ce,n as fe}from"./jsonUtils-e7abff59.js";import{t as he}from"./symbols-26ff8002.js";import{a as be}from"./HandleOwner-46fb81da.js";import{s as me}from"./Identifiable-28626f77.js";import{y as D}from"./string-cc430a78.js";import{m as ge}from"./Loadable-8b974e55.js";import{O as Se}from"./MultiOriginJSONSupport-1415ac8d.js";import{t as Ie,p as ve}from"./LayerFloorInfo-b2b66573.js";import{m as we}from"./arcgisLayerUrl-32f60088.js";import{n as Ee}from"./FeatureType-5f514ce7.js";import{y as Le}from"./Field-27137e22.js";import{r as xe}from"./FieldsIndex-e1d877a8.js";import{c as Oe,j as _e}from"./labelingInfo-b488ae0e.js";import{c as R,x as Q,K as W}from"./Query-ca5b0d4c.js";import{p as De}from"./popupUtils-333f560b.js";import{i as U}from"./typeUtils-98cd71e2.js";import{t as Te}from"./sublayerUtils-8f568211.js";const ur=r=>{let e=class extends r{constructor(){super(...arguments),this.capabilities=void 0,this.copyright=null,this.fullExtent=null,this.legendEnabled=!0,this.spatialReference=null,this.version=void 0,this._allLayersAndTablesPromise=null,this._allLayersAndTablesMap=null}readCapabilities(t,i){const s=i.capabilities&&i.capabilities.split(",").map(z=>z.toLowerCase().trim());if(!s)return{operations:{supportsExportMap:!1,supportsExportTiles:!1,supportsIdentify:!1,supportsQuery:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};const n=this.type,p=s.includes("data"),u=s.includes("query"),c=s.includes("map"),S=!!i.exportTilesAllowed,b=s.includes("tilemap"),m=n!=="tile"&&!!i.supportsDynamicLayers,L=n!=="tile"&&(!i.tileInfo||m),x=n!=="tile"&&(!i.tileInfo||m),d=n!=="tile",f=i.cimVersion&&ie.parse(i.cimVersion),O=(f==null?void 0:f.since(1,4))??!1,_=(f==null?void 0:f.since(2,0))??!1;return{operations:{supportsExportMap:c,supportsExportTiles:S,supportsIdentify:u,supportsQuery:p,supportsTileMap:b},exportMap:c?{supportsArcadeExpressionForLabeling:O,supportsSublayersChanges:d,supportsDynamicLayers:m,supportsSublayerVisibility:L,supportsSublayerDefinitionExpression:x,supportsCIMSymbols:_}:null,exportTiles:S?{maxExportTilesCount:+i.maxExportTilesCount}:null}}readVersion(t,i){let s=i.currentVersion;return s||(s=i.hasOwnProperty("capabilities")||i.hasOwnProperty("tables")?10:i.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),s}async fetchSublayerInfo(t,i){var s;return await this.fetchAllLayersAndTables(i),(s=this._allLayersAndTablesMap)==null?void 0:s.get(t)}async fetchAllLayersAndTables(t){await this.load(t),this._allLayersAndTablesPromise||(this._allLayersAndTablesPromise=K(ee(this.url).path+"/layers",{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey}}).then(s=>{this._allLayersAndTablesMap=new Map;for(const n of s.data.layers)this._allLayersAndTablesMap.set(n.id,n);return{result:s.data}},s=>({error:s})));const i=await this._allLayersAndTablesPromise;if(te(t),"result"in i)return i.result;throw i.error}};return a([o({readOnly:!0})],e.prototype,"capabilities",void 0),a([g("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],e.prototype,"readCapabilities",null),a([o({json:{read:{source:"copyrightText"}}})],e.prototype,"copyright",void 0),a([o({type:H})],e.prototype,"fullExtent",void 0),a([o(oe)],e.prototype,"id",void 0),a([o({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],e.prototype,"legendEnabled",void 0),a([o(ne)],e.prototype,"popupEnabled",void 0),a([o({type:le})],e.prototype,"spatialReference",void 0),a([o({readOnly:!0})],e.prototype,"version",void 0),a([g("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],e.prototype,"readVersion",null),e=a([k("esri.layers.mixins.ArcGISMapService")],e),e};var F;function C(r){return r&&r.type==="esriSMS"}function N(r,e,t){var s;const i=this.originIdOf(e)>=A(t.origin);return{ignoreOrigin:!0,allowNull:i,enabled:!!t&&((s=t.layer)==null?void 0:s.type)==="map-image"&&(t.writeSublayerStructure||i)}}function G(r,e,t){var i;return{enabled:!!t&&((i=t.layer)==null?void 0:i.type)==="tile"&&this._isOverridden(e)}}function h(r,e,t){return{ignoreOrigin:!0,enabled:t&&t.writeSublayerStructure||!1}}function T(r,e,t){return{ignoreOrigin:!0,enabled:!!t&&(t.writeSublayerStructure||this.originIdOf(e)>=A(t.origin))}}let Pe=0;const I=new Set;I.add("layer"),I.add("parent"),I.add("loaded"),I.add("loadStatus"),I.add("loadError"),I.add("loadWarnings");let l=F=class extends be(Se(me(ge))){constructor(r){super(r),this.capabilities=void 0,this.fields=null,this.fullExtent=null,this.geometryType=null,this.globalIdField=null,this.legendEnabled=!0,this.objectIdField=null,this.popupEnabled=!0,this.popupTemplate=null,this.sourceJSON=null,this.title=null,this.typeIdField=null,this.types=null}async load(r){return this.addResolvingPromise((async()=>{var t,i;if(!this.layer&&!this.url)throw new w("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:this});let e=null;if(!this.layer||this.originIdOf("url")>y.SERVICE||((t=this.source)==null?void 0:t.type)==="data-layer")e=(await K(this.url,{responseType:"json",query:{f:"json"},...r})).data;else{let s=this.id;((i=this.source)==null?void 0:i.type)==="map-layer"&&(s=this.source.mapLayerId),e=await this.layer.fetchSublayerInfo(s,r)}e&&(this.sourceJSON=e,this.read({layerDefinition:e},{origin:"service"}))})()),this}readCapabilities(r,e){const t=(r=(e=e.layerDefinition||e).capabilities||r)?r.toLowerCase().split(",").map(n=>n.trim()):[],i=this.url?we(this.url):null,s=t.includes(M(i)&&i.serverType==="MapServer"?"data":"query");return{exportMap:{supportsModification:!!e.canModifyLayer},operations:{supportsQuery:s}}}set definitionExpression(r){this._setAndNotifyLayer("definitionExpression",r)}get fieldsIndex(){return new xe(this.fields||[])}set floorInfo(r){this._setAndNotifyLayer("floorInfo",r)}readGlobalIdFieldFromService(r,e){if((e=e.layerDefinition||e).globalIdField)return e.globalIdField;if(e.fields){for(const t of e.fields)if(t.type==="esriFieldTypeGlobalID")return t.name}}get id(){return this._get("id")??Pe++}set id(r){this._get("id")!==r&&(this.get("layer.capabilities.exportMap.supportsDynamicLayers")!==!1?this._set("id",r):this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"))}set labelingInfo(r){this._setAndNotifyLayer("labelingInfo",r)}writeLabelingInfo(r,e,t,i){r&&r.length&&(e.layerDefinition={drawingInfo:{labelingInfo:r.map(s=>s.write({},i))}})}set labelsVisible(r){this._setAndNotifyLayer("labelsVisible",r)}set layer(r){this._set("layer",r),this.sublayers&&this.sublayers.forEach(e=>e.layer=r)}set listMode(r){this._set("listMode",r)}set minScale(r){this._setAndNotifyLayer("minScale",r)}readMinScale(r,e){return e.minScale||e.layerDefinition&&e.layerDefinition.minScale||0}set maxScale(r){this._setAndNotifyLayer("maxScale",r)}readMaxScale(r,e){return e.maxScale||e.layerDefinition&&e.layerDefinition.maxScale||0}get effectiveScaleRange(){const{minScale:r,maxScale:e}=this;return{minScale:r,maxScale:e}}readObjectIdFieldFromService(r,e){if((e=e.layerDefinition||e).objectIdField)return e.objectIdField;if(e.fields){for(const t of e.fields)if(t.type==="esriFieldTypeOID")return t.name}}set opacity(r){this._setAndNotifyLayer("opacity",r)}readOpacity(r,e){const t=e.layerDefinition;return 1-.01*(t.transparency!=null?t.transparency:t.drawingInfo.transparency)}writeOpacity(r,e,t,i){e.layerDefinition={drawingInfo:{transparency:100-100*r}}}writeParent(r,e){this.parent&&this.parent!==this.layer?e.parentLayerId=se(this.parent.id):e.parentLayerId=-1}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(r){if(r){for(const e of r.getSymbols())if(he(e)){E.getLogger(this.declaredClass).warn("Sublayer renderer should use 2D symbols");break}}this._setAndNotifyLayer("renderer",r)}get source(){return this._get("source")||new R({mapLayerId:this.id})}set source(r){this._setAndNotifyLayer("source",r)}set sublayers(r){this._handleSublayersChange(r,this._get("sublayers")),this._set("sublayers",r)}castSublayers(r){return ae(J.ofType(F),r)}writeSublayers(r,e,t){this.get("sublayers.length")&&(e[t]=this.sublayers.map(i=>i.id).toArray().reverse())}readTypeIdField(r,e){let t=(e=e.layerDefinition||e).typeIdField;if(t&&e.fields){t=t.toLowerCase();const i=e.fields.find(s=>s.name.toLowerCase()===t);i&&(t=i.name)}return t}get url(){var i;const r=((i=this.layer)==null?void 0:i.parsedUrl)??this._lastParsedUrl,e=this.source;if(!r)return null;if(this._lastParsedUrl=r,(e==null?void 0:e.type)==="map-layer")return`${r.path}/${e.mapLayerId}`;const t={layer:JSON.stringify({source:this.source})};return`${r.path}/dynamicLayer?${re(t)}`}set url(r){this._overrideIfSome("url",r)}set visible(r){this._setAndNotifyLayer("visible",r)}writeVisible(r,e,t,i){e[t]=this.getAtOrigin("defaultVisibility","service")||r}clone(){const{store:r}=P(this),e=new F;return P(e).store=r.clone(I),this.commitProperty("url"),e._lastParsedUrl=this._lastParsedUrl,e}createPopupTemplate(r){return De(this,r)}createQuery(){return new Q({returnGeometry:!0,where:this.definitionExpression||"1=1"})}async createFeatureLayer(){var t,i;if(this.hasOwnProperty("sublayers"))return null;const r=(t=this.layer)==null?void 0:t.parsedUrl,e=new(await V(()=>import("./FeatureLayer-053f70ea.js"),["assets/FeatureLayer-053f70ea.js","assets/preload-helper-6c8d3039.js","assets/cast-4943406f.js","assets/typedArrayUtil-bd69bba0.js","assets/string-cc430a78.js","assets/Error-8814705f.js","assets/ensureType-9613b5f0.js","assets/nextTick-3ee5a785.js","assets/promiseUtils-ec14a623.js","assets/PopupTemplate-9e34fd80.js","assets/Clonable-7eedeb5c.js","assets/Collection-e1ec52f9.js","assets/Evented-28d49a6f.js","assets/SimpleObservable-b403cd38.js","assets/Extent-d21a2637.js","assets/fieldUtils-605e1353.js","assets/arcadeOnDemand-5200ab6b.js","assets/geometry-da69b92c.js","assets/Polyline-98ddf509.js","assets/typeUtils-98cd71e2.js","assets/jsonMap-9318d50f.js","assets/enumeration-1740c98c.js","assets/number-d7fe9942.js","assets/locale-30120714.js","assets/Identifiable-28626f77.js","assets/UniqueValueRenderer-e68a70b1.js","assets/symbols-26ff8002.js","assets/CIMSymbol-fc3b1809.js","assets/Symbol-f543a02b.js","assets/Color-ebbea628.js","assets/colorUtils-639f4d25.js","assets/mathUtils-daf59e84.js","assets/common-701a4199.js","assets/screenUtils-7afeb41c.js","assets/opacityUtils-dc8d0a85.js","assets/aaBoundingBox-58fec4c8.js","assets/request-9ab300ca.js","assets/persistableUrlUtils-d6987fba.js","assets/collectionUtils-28848f7d.js","assets/Portal-c85307b1.js","assets/Loadable-8b974e55.js","assets/Promise-9613afa4.js","assets/PortalGroup-e30a1480.js","assets/PortalUser-6c405f61.js","assets/ColorStop-5a499504.js","assets/reactiveUtils-3389689f.js","assets/diffUtils-2ca899cf.js","assets/colorRamps-08b6e1ac.js","assets/sizeVariableUtils-d4870b0d.js","assets/Graphic-13c64b79.js","assets/jsonUtils-7333a4d1.js","assets/compilerUtils-527a276b.js","assets/lengthUtils-b711b4b2.js","assets/unitUtils-bc71b997.js","assets/jsonUtils-218ba25d.js","assets/styleUtils-e2a5393c.js","assets/jsonUtils-e7abff59.js","assets/DictionaryLoader-b16ebe69.js","assets/LRUCache-4d2d0a4a.js","assets/MemCache-786f3df9.js","assets/deprecate-bd315c0b.js","assets/heatmapUtils-90a13d85.js","assets/vec4f64-018b3fa6.js","assets/MultiOriginJSONSupport-1415ac8d.js","assets/LayerFloorInfo-b2b66573.js","assets/FeatureLayerBase-cb2d88a2.js","assets/Field-27137e22.js","assets/fieldType-ff12d8db.js","assets/HeightModelInfo-224c60b3.js","assets/arcgisLayerUrl-32f60088.js","assets/OperationalLayer-620e6022.js","assets/TimeExtent-fd94e986.js","assets/ElevationInfo-2dc5cc64.js","assets/RelationshipQuery-a6b246d9.js","assets/Query-ca5b0d4c.js","assets/Layer-df88343f.js","assets/HandleOwner-46fb81da.js","assets/workers-a88acec1.js","assets/Connection-2ff63c33.js","assets/Queue-f6edac75.js","assets/assets-2905a8db.js","assets/intl-e6f005e0.js","assets/messages-d8933302.js","assets/editsZScale-cfe55ac3.js","assets/queryZScale-38bff362.js","assets/zscale-3fafe111.js","assets/FeatureSet-cf76d07f.js","assets/APIKeyMixin-69452d20.js","assets/ArcGISService-ae190e7c.js","assets/BlendLayer-8c6b6724.js","assets/parser-da666a95.js","assets/mat4-62d5e6a4.js","assets/CustomParametersMixin-8b6f41ed.js","assets/EditBusLayer-a562c30c.js","assets/FeatureReductionLayer-c35575f9.js","assets/labelingInfo-b488ae0e.js","assets/labelUtils-f67e4fba.js","assets/defaultsJSON-b087dd4d.js","assets/OrderedLayer-d96c6d71.js","assets/PortalLayer-92819795.js","assets/asyncUtils-b47bdec8.js","assets/PortalItem-0e5c0cbb.js","assets/RefreshableLayer-c72be848.js","assets/ScaleRangeLayer-1135beed.js","assets/TemporalLayer-89511e6d.js","assets/TimeInfo-8d51135f.js","assets/FeatureTemplate-4d9e29f9.js","assets/FeatureType-5f514ce7.js","assets/fieldProperties-9f75a173.js","assets/FieldsIndex-e1d877a8.js","assets/versionUtils-927c90ab.js","assets/styleUtils-8709ea6a.js","assets/TopFeaturesQuery-a641bf51.js","assets/popupUtils-333f560b.js"])).default({url:r.path});return r&&this.source&&(this.source.type==="map-layer"?e.layerId=this.source.mapLayerId:e.dynamicDataSource=this.source),this.layer.refreshInterval!=null&&(e.refreshInterval=this.layer.refreshInterval),this.definitionExpression&&(e.definitionExpression=this.definitionExpression),this.floorInfo&&(e.floorInfo=D(this.floorInfo)),this.originIdOf("labelingInfo")>y.SERVICE&&(e.labelingInfo=D(this.labelingInfo)),this.originIdOf("labelsVisible")>y.DEFAULTS&&(e.labelsVisible=this.labelsVisible),this.originIdOf("legendEnabled")>y.DEFAULTS&&(e.legendEnabled=this.legendEnabled),this.originIdOf("visible")>y.DEFAULTS&&(e.visible=this.visible),this.originIdOf("minScale")>y.DEFAULTS&&(e.minScale=this.minScale),this.originIdOf("maxScale")>y.DEFAULTS&&(e.maxScale=this.maxScale),this.originIdOf("opacity")>y.DEFAULTS&&(e.opacity=this.opacity),this.originIdOf("popupTemplate")>y.DEFAULTS&&(e.popupTemplate=D(this.popupTemplate)),this.originIdOf("renderer")>y.SERVICE&&(e.renderer=D(this.renderer)),((i=this.source)==null?void 0:i.type)==="data-layer"&&(e.dynamicDataSource=this.source.clone()),this.originIdOf("title")>y.DEFAULTS&&(e.title=this.title),this.layer.type==="map-image"&&this.layer.originIdOf("customParameters")>y.DEFAULTS&&(e.customParameters=this.layer.customParameters),this.layer.type==="tile"&&this.layer.originIdOf("customParameters")>y.DEFAULTS&&(e.customParameters=this.layer.customParameters),e}getField(r){return this.fieldsIndex.get(r)}getFeatureType(r){const{typeIdField:e,types:t}=this;if(!e||!r)return null;const i=r.attributes?r.attributes[e]:void 0;if(i==null)return null;let s=null;return t.some(n=>{const{id:p}=n;return p!=null&&(p.toString()===i.toString()&&(s=n),!!s)}),s}getFieldDomain(r,e){const t=e&&e.feature,i=this.getFeatureType(t);if(i){const s=i.domains&&i.domains[r];if(s&&s.type!=="inherited")return s}return this._getLayerDomain(r)}async queryFeatures(r=this.createQuery(),e){var p,u,c,S,b;if(await this.load(),!((u=(p=this.capabilities)==null?void 0:p.operations)!=null&&u.supportsQuery))throw new w("Sublayer.queryFeatures","this layer doesn't support queries.");const[{executeQuery:t},{default:i}]=await Promise.all([V(()=>import("./query-b278558e.js").then(m=>m.q),["assets/query-b278558e.js","assets/request-9ab300ca.js","assets/preload-helper-6c8d3039.js","assets/Error-8814705f.js","assets/string-cc430a78.js","assets/typedArrayUtil-bd69bba0.js","assets/promiseUtils-ec14a623.js","assets/jsonUtils-7333a4d1.js","assets/Extent-d21a2637.js","assets/cast-4943406f.js","assets/ensureType-9613b5f0.js","assets/nextTick-3ee5a785.js","assets/Polyline-98ddf509.js","assets/normalizeUtils-758f8b63.js","assets/geometry-da69b92c.js","assets/typeUtils-98cd71e2.js","assets/jsonMap-9318d50f.js","assets/pbfQueryUtils-4074e0c2.js","assets/pbf-9c9087c4.js","assets/OptimizedFeature-ec32193d.js","assets/unitUtils-bc71b997.js","assets/OptimizedFeatureSet-1d1ac4b9.js","assets/queryZScale-38bff362.js","assets/zscale-3fafe111.js"]),V(()=>import("./FeatureSet-cf76d07f.js"),["assets/FeatureSet-cf76d07f.js","assets/cast-4943406f.js","assets/typedArrayUtil-bd69bba0.js","assets/string-cc430a78.js","assets/Error-8814705f.js","assets/ensureType-9613b5f0.js","assets/nextTick-3ee5a785.js","assets/promiseUtils-ec14a623.js","assets/geometry-da69b92c.js","assets/Extent-d21a2637.js","assets/Polyline-98ddf509.js","assets/typeUtils-98cd71e2.js","assets/jsonMap-9318d50f.js","assets/Graphic-13c64b79.js","assets/PopupTemplate-9e34fd80.js","assets/Clonable-7eedeb5c.js","assets/Collection-e1ec52f9.js","assets/Evented-28d49a6f.js","assets/SimpleObservable-b403cd38.js","assets/fieldUtils-605e1353.js","assets/preload-helper-6c8d3039.js","assets/arcadeOnDemand-5200ab6b.js","assets/enumeration-1740c98c.js","assets/number-d7fe9942.js","assets/locale-30120714.js","assets/Identifiable-28626f77.js","assets/symbols-26ff8002.js","assets/CIMSymbol-fc3b1809.js","assets/Symbol-f543a02b.js","assets/Color-ebbea628.js","assets/colorUtils-639f4d25.js","assets/mathUtils-daf59e84.js","assets/common-701a4199.js","assets/screenUtils-7afeb41c.js","assets/opacityUtils-dc8d0a85.js","assets/aaBoundingBox-58fec4c8.js","assets/request-9ab300ca.js","assets/persistableUrlUtils-d6987fba.js","assets/collectionUtils-28848f7d.js","assets/Portal-c85307b1.js","assets/Loadable-8b974e55.js","assets/Promise-9613afa4.js","assets/PortalGroup-e30a1480.js","assets/PortalUser-6c405f61.js","assets/jsonUtils-7333a4d1.js","assets/Field-27137e22.js","assets/fieldType-ff12d8db.js"])]),s=await t(this.url,Q.from(r),((c=this.layer)==null?void 0:c.spatialReference)??null,{...e,query:{...(S=this.layer)==null?void 0:S.customParameters,token:(b=this.layer)==null?void 0:b.apiKey}}),n=i.fromJSON(s.data);if(n!=null&&n.features)for(const m of n.features)m.sourceLayer=this;return n}toExportImageJSON(r){var n;const e={id:this.id,source:((n=this.source)==null?void 0:n.toJSON())||{mapLayerId:this.id,type:"mapLayer"}},t=Ie(r,this.definitionExpression);M(t)&&(e.definitionExpression=t);const i=["renderer","labelingInfo","opacity","labelsVisible"].reduce((p,u)=>(p[u]=this.originIdOf(u),p),{});if(Object.keys(i).some(p=>i[p]>y.SERVICE)){const p=e.drawingInfo={};if(i.renderer>y.SERVICE&&(p.renderer=this.renderer?this.renderer.toJSON():null),i.labelsVisible>y.SERVICE&&(p.showLabels=this.labelsVisible),this.labelsVisible&&i.labelingInfo>y.SERVICE){!this.loaded&&this.labelingInfo.some(c=>!c.labelPlacement)&&E.getLogger(this.declaredClass).warnOnce(`A Sublayer (title: ${this.title}, id: ${this.id}) has an undefined 'labelPlacement' and so labels cannot be displayed. Either define a valid 'labelPlacement' or call Sublayer.load() to use a default value based on geometry type.`,{sublayer:this});let u=this.labelingInfo;M(this.geometryType)&&(u=Oe(this.labelingInfo,U.toJSON(this.geometryType))),p.labelingInfo=u.filter(c=>c.labelPlacement).map(c=>c.toJSON({origin:"service",layer:this.layer})),p.showLabels=!0}i.opacity>y.SERVICE&&(p.transparency=100-100*this.opacity),this._assignDefaultSymbolColors(p.renderer)}return e}_assignDefaultSymbolColors(r){this._forEachSimpleMarkerSymbols(r,e=>{e.color||e.style!=="esriSMSX"&&e.style!=="esriSMSCross"||(e.outline&&e.outline.color?e.color=e.outline.color:e.color=[0,0,0,0])})}_forEachSimpleMarkerSymbols(r,e){if(r){const t="uniqueValueInfos"in r?r.uniqueValueInfos:"classBreakInfos"in r?r.classBreakInfos:[];for(const i of t)C(i.symbol)&&e(i.symbol);"symbol"in r&&C(r.symbol)&&e(r.symbol),"defaultSymbol"in r&&C(r.defaultSymbol)&&e(r.defaultSymbol)}}_setAndNotifyLayer(r,e){const t=this.layer,i=this._get(r);let s,n;switch(r){case"definitionExpression":case"floorInfo":s="supportsSublayerDefinitionExpression";case"minScale":case"maxScale":case"visible":s="supportsSublayerVisibility";break;case"labelingInfo":case"labelsVisible":case"opacity":case"renderer":case"source":s="supportsDynamicLayers",n="supportsModification"}const p=P(this).getDefaultOrigin();if(p!=="service"){if(s&&this.get(`layer.capabilities.exportMap.${s}`)===!1)return void this._logLockedError(r,`capability not available 'layer.capabilities.exportMap.${s}'`);if(n&&this.get(`capabilities.exportMap.${n}`)===!1)return void this._logLockedError(r,`capability not available 'capabilities.exportMap.${n}'`)}r!=="source"||this.loadStatus==="not-loaded"?(this._set(r,e),p!=="service"&&i!==e&&t&&t.emit&&t.emit("sublayer-update",{propertyName:r,target:this})):this._logLockedError(r,"'source' can't be changed after calling sublayer.load()")}_handleSublayersChange(r,e){e&&(e.forEach(t=>{t.parent=null,t.layer=null}),this.handles.removeAll()),r&&(r.forEach(t=>{t.parent=this,t.layer=this.layer}),this.handles.add([r.on("after-add",({item:t})=>{t.parent=this,t.layer=this.layer}),r.on("after-remove",({item:t})=>{t.parent=null,t.layer=null}),r.on("before-changes",t=>{const i=this.get("layer.capabilities.exportMap.supportsSublayersChanges");i==null||i||(E.getLogger(this.declaredClass).error(new w("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:this,layer:this.layer})),t.preventDefault())})]))}_logLockedError(r,e){E.getLogger(this.declaredClass).error(new w("sublayer:locked",`Property '${String(r)}' can't be changed on Sublayer from the layer '${this.layer.id}'`,{reason:e,sublayer:this,layer:this.layer}))}_getLayerDomain(r){const e=this.fieldsIndex.get(r);return e?e.domain:null}};l.test={isMapImageLayerOverridePolicy:r=>r===h||r===N,isTileImageLayerOverridePolicy:r=>r===G},a([o({readOnly:!0})],l.prototype,"capabilities",void 0),a([g("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],l.prototype,"readCapabilities",null),a([o({type:String,value:null,json:{name:"layerDefinition.definitionExpression",write:{allowNull:!0,overridePolicy:N}}})],l.prototype,"definitionExpression",null),a([o({type:[Le],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],l.prototype,"fields",void 0),a([o({readOnly:!0})],l.prototype,"fieldsIndex",null),a([o({type:ve,value:null,json:{name:"layerDefinition.floorInfo",read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo",overridePolicy:N},origins:{"web-scene":{read:!1,write:!1}}}})],l.prototype,"floorInfo",null),a([o({type:H,json:{read:{source:"layerDefinition.extent"}}})],l.prototype,"fullExtent",void 0),a([o({type:U.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:U.read}}}}})],l.prototype,"geometryType",void 0),a([o({type:String})],l.prototype,"globalIdField",void 0),a([g("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],l.prototype,"readGlobalIdFieldFromService",null),a([o({type:j,json:{write:{ignoreOrigin:!0}}})],l.prototype,"id",null),a([o({value:null,type:[_e],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:h}}})],l.prototype,"labelingInfo",null),a([v("labelingInfo")],l.prototype,"writeLabelingInfo",null),a([o({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:h}}})],l.prototype,"labelsVisible",null),a([o({value:null})],l.prototype,"layer",null),a([o({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:T}}})],l.prototype,"legendEnabled",void 0),a([o({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],l.prototype,"listMode",null),a([o({type:Number,value:0,json:{write:{overridePolicy:h}}})],l.prototype,"minScale",null),a([g("minScale",["minScale","layerDefinition.minScale"])],l.prototype,"readMinScale",null),a([o({type:Number,value:0,json:{write:{overridePolicy:h}}})],l.prototype,"maxScale",null),a([g("maxScale",["maxScale","layerDefinition.maxScale"])],l.prototype,"readMaxScale",null),a([o({readOnly:!0})],l.prototype,"effectiveScaleRange",null),a([o({type:String})],l.prototype,"objectIdField",void 0),a([g("service","objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],l.prototype,"readObjectIdFieldFromService",null),a([o({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:h}}})],l.prototype,"opacity",null),a([g("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],l.prototype,"readOpacity",null),a([v("opacity")],l.prototype,"writeOpacity",null),a([o({json:{type:j,write:{target:"parentLayerId",writerEnsuresNonNull:!0,overridePolicy:h}}})],l.prototype,"parent",void 0),a([v("parent")],l.prototype,"writeParent",null),a([o({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:(r,e)=>!e.disablePopup},write:{target:"disablePopup",overridePolicy:T,writer(r,e,t){e[t]=!r}}}})],l.prototype,"popupEnabled",void 0),a([o({type:ue,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:T}}})],l.prototype,"popupTemplate",void 0),a([o({readOnly:!0})],l.prototype,"defaultPopupTemplate",null),a([o({types:ce,value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:h},origins:{"web-scene":{types:fe,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:h}}}}})],l.prototype,"renderer",null),a([o({types:{key:"type",base:null,typeMap:{"data-layer":W,"map-layer":R}},cast(r){if(r){if("mapLayerId"in r)return q(R,r);if("dataSource"in r)return q(W,r)}return r},json:{name:"layerDefinition.source",write:{overridePolicy:h}}})],l.prototype,"source",null),a([o()],l.prototype,"sourceJSON",void 0),a([o({value:null,json:{type:[j],write:{target:"subLayerIds",allowNull:!0,overridePolicy:h}}})],l.prototype,"sublayers",null),a([Y("sublayers")],l.prototype,"castSublayers",null),a([v("sublayers")],l.prototype,"writeSublayers",null),a([o({type:String,json:{name:"name",write:{overridePolicy:T}}})],l.prototype,"title",void 0),a([o({type:String})],l.prototype,"typeIdField",void 0),a([g("typeIdField",["layerDefinition.typeIdField"])],l.prototype,"readTypeIdField",null),a([o({type:[Ee],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],l.prototype,"types",void 0),a([o({type:String,json:{read:{source:"layerUrl"},write:{target:"layerUrl",overridePolicy:G}}})],l.prototype,"url",null),a([o({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:h}}})],l.prototype,"visible",null),a([v("visible")],l.prototype,"writeVisible",null),l=F=a([k("esri.layers.support.Sublayer")],l);const B=l,Fe=E.getLogger("esri.layers.TileLayer");function Ae(r,e){const t=[],i={};return r&&r.forEach(s=>{const n=new B;if(n.read(s,e),i[n.id]=n,s.parentLayerId!=null&&s.parentLayerId!==-1){const p=i[s.parentLayerId];p.sublayers||(p.sublayers=[]),p.sublayers.unshift(n)}else t.unshift(n)}),t}const $=J.ofType(B);function X(r,e){r&&r.forEach(t=>{e(t),t.sublayers&&t.sublayers.length&&X(t.sublayers,e)})}const cr=r=>{let e=class extends r{constructor(...t){super(...t),this.allSublayers=new ye({getCollections:()=>[this.sublayers],getChildrenFunction:i=>i.sublayers}),this.sublayersSourceJSON={[y.SERVICE]:{},[y.PORTAL_ITEM]:{},[y.WEB_SCENE]:{},[y.WEB_MAP]:{}},this.addHandles(pe(()=>this.sublayers,(i,s)=>this._handleSublayersChange(i,s),de))}readSublayers(t,i){if(!i||!t)return;const{sublayersSourceJSON:s}=this,n=A(i.origin);if(n<y.SERVICE||(s[n]={context:i,visibleLayers:t.visibleLayers||s[n].visibleLayers,layers:t.layers||s[n].layers},n>y.SERVICE))return;this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);const{sublayers:p,origin:u}=this.createSublayersForOrigin("web-document"),c=P(this);c.setDefaultOrigin(u),this._set("sublayers",new $(p)),c.setDefaultOrigin("user")}findSublayerById(t){return this.allSublayers.find(i=>i.id===t)}createServiceSublayers(){return this.createSublayersForOrigin("service").sublayers}createSublayersForOrigin(t){const i=A(t==="web-document"?"web-map":t);let s=y.SERVICE,n=this.sublayersSourceJSON[y.SERVICE].layers,p=this.sublayersSourceJSON[y.SERVICE].context,u=null;const c=[y.PORTAL_ITEM,y.WEB_SCENE,y.WEB_MAP].filter(d=>d<=i);for(const d of c){const f=this.sublayersSourceJSON[d];Te(f.layers)&&(s=d,n=f.layers,p=f.context,f.visibleLayers&&(u={visibleLayers:f.visibleLayers,context:f.context}))}const S=[y.PORTAL_ITEM,y.WEB_SCENE,y.WEB_MAP].filter(d=>d>s&&d<=i);let b=null;for(const d of S){const{layers:f,visibleLayers:O,context:_}=this.sublayersSourceJSON[d];f&&(b={layers:f,context:_}),O&&(u={visibleLayers:O,context:_})}const m=Ae(n,p),L=new Map,x=new Set;if(b)for(const d of b.layers)L.set(d.id,d);if(u)for(const d of u.visibleLayers)x.add(d);return X(m,d=>{b&&d.read(L.get(d.id),b.context),u&&d.read({defaultVisibility:x.has(d.id)},u.context)}),{origin:Z(s),sublayers:new $({items:m})}}read(t,i){super.read(t,i),this.readSublayers(t,i)}_handleSublayersChange(t,i){i&&(i.forEach(s=>{s.parent=null,s.layer=null}),this.handles.remove("sublayers-owner")),t&&(t.forEach(s=>{s.parent=this,s.layer=this}),this.handles.add([t.on("after-add",({item:s})=>{s.parent=this,s.layer=this}),t.on("after-remove",({item:s})=>{s.parent=null,s.layer=null})],"sublayers-owner"),this.type==="tile"&&this.handles.add(t.on("before-changes",s=>{Fe.error(new w("tilelayer:sublayers-non-modifiable","ISublayer can't be added, moved, or removed from the layer's sublayers",{layer:this})),s.preventDefault()}),"sublayers-owner"))}};return a([o({readOnly:!0})],e.prototype,"allSublayers",void 0),a([o({readOnly:!0,type:J.ofType(B)})],e.prototype,"serviceSublayers",void 0),a([o({value:null,type:$,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],e.prototype,"sublayers",void 0),a([o({readOnly:!0})],e.prototype,"sublayersSourceJSON",void 0),e=a([k("esri.layers.mixins.SublayersOwner")],e),e};export{cr as E,ur as y,B as z};
