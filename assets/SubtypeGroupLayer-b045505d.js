import{_ as J}from"./preload-helper-6c8d3039.js";import{e as i,y as o,n as L,l as H,h as z,r as N,t as Z,q as P}from"./cast-4943406f.js";import{j as x}from"./Collection-e1ec52f9.js";import{a as w}from"./Error-8814705f.js";import{a as q}from"./HandleOwner-46fb81da.js";import{r as C,s as K,c as W}from"./typedArrayUtil-bd69bba0.js";import{O as R}from"./MultiOriginJSONSupport-1415ac8d.js";import{w as X,y as Y}from"./promiseUtils-ec14a623.js";import{l as ee,U as te}from"./reactiveUtils-3389689f.js";import{t as re}from"./LayerFloorInfo-b2b66573.js";import{j as ie,G as oe}from"./request-9ab300ca.js";import"./ensureType-9613b5f0.js";import{o as F,r as M}from"./Extent-d21a2637.js";import{b as se}from"./Layer-df88343f.js";import{i as ne}from"./APIKeyMixin-69452d20.js";import{p as ae}from"./ArcGISService-ae190e7c.js";import{n as le}from"./BlendLayer-8c6b6724.js";import{o as pe}from"./CustomParametersMixin-8b6f41ed.js";import{a as ue}from"./EditBusLayer-a562c30c.js";import{y as de,M as ye,F as me,x as ce,P as he,L as fe,O as be,v as ge,E as ve,I as we,T as $e,j as Fe,a as Se,D as Oe,G as Ie}from"./FeatureLayerBase-cb2d88a2.js";import{m as je,a as Te,v as _e,I as xe,p as Le,c as Ce,j as Ee}from"./OperationalLayer-620e6022.js";import{v as Pe}from"./PortalLayer-92819795.js";import{p as Ge}from"./RefreshableLayer-c72be848.js";import{t as De}from"./ScaleRangeLayer-1135beed.js";import{a as Ve}from"./TemporalLayer-89511e6d.js";import{y as Ne}from"./arcgisLayerUrl-32f60088.js";import{s as k}from"./fieldProperties-9f75a173.js";import{F as qe,a as Re}from"./fieldUtils-605e1353.js";import{t as Me}from"./Field-27137e22.js";import{k as ke}from"./PopupTemplate-9e34fd80.js";import{p as Ae,C as Ue,_ as Qe}from"./UniqueValueRenderer-e68a70b1.js";import{p as E}from"./jsonUtils-e7abff59.js";import{y as $,o as Be}from"./string-cc430a78.js";import{s as Je}from"./Identifiable-28626f77.js";import{m as He}from"./Loadable-8b974e55.js";import{p as A}from"./FeatureTemplate-4d9e29f9.js";import{j as ze,i as Ze,b as Ke,u as We,d as Xe}from"./labelingInfo-b488ae0e.js";import{p as Ye}from"./popupUtils-333f560b.js";import{v as et}from"./TimeInfo-8d51135f.js";import{e as tt}from"./versionUtils-927c90ab.js";import{x as rt}from"./Query-ca5b0d4c.js";import"./nextTick-3ee5a785.js";import"./Evented-28d49a6f.js";import"./SimpleObservable-b403cd38.js";import"./geometry-da69b92c.js";import"./Polyline-98ddf509.js";import"./typeUtils-98cd71e2.js";import"./jsonMap-9318d50f.js";import"./parser-da666a95.js";import"./colorUtils-639f4d25.js";import"./screenUtils-7afeb41c.js";import"./mat4-62d5e6a4.js";import"./common-701a4199.js";import"./HeightModelInfo-224c60b3.js";import"./unitUtils-bc71b997.js";import"./Clonable-7eedeb5c.js";import"./RelationshipQuery-a6b246d9.js";import"./TimeExtent-fd94e986.js";import"./persistableUrlUtils-d6987fba.js";import"./ElevationInfo-2dc5cc64.js";import"./lengthUtils-b711b4b2.js";import"./opacityUtils-dc8d0a85.js";import"./asyncUtils-b47bdec8.js";import"./Portal-c85307b1.js";import"./locale-30120714.js";import"./PortalGroup-e30a1480.js";import"./PortalUser-6c405f61.js";import"./PortalItem-0e5c0cbb.js";import"./assets-2905a8db.js";import"./Promise-9613afa4.js";import"./FieldsIndex-e1d877a8.js";import"./arcadeOnDemand-5200ab6b.js";import"./enumeration-1740c98c.js";import"./fieldType-ff12d8db.js";import"./number-d7fe9942.js";import"./symbols-26ff8002.js";import"./CIMSymbol-fc3b1809.js";import"./Symbol-f543a02b.js";import"./Color-ebbea628.js";import"./mathUtils-daf59e84.js";import"./aaBoundingBox-58fec4c8.js";import"./collectionUtils-28848f7d.js";import"./ColorStop-5a499504.js";import"./diffUtils-2ca899cf.js";import"./colorRamps-08b6e1ac.js";import"./sizeVariableUtils-d4870b0d.js";import"./Graphic-13c64b79.js";import"./jsonUtils-7333a4d1.js";import"./compilerUtils-527a276b.js";import"./jsonUtils-218ba25d.js";import"./styleUtils-e2a5393c.js";import"./DictionaryLoader-b16ebe69.js";import"./LRUCache-4d2d0a4a.js";import"./MemCache-786f3df9.js";import"./deprecate-bd315c0b.js";import"./heatmapUtils-90a13d85.js";import"./vec4f64-018b3fa6.js";import"./labelUtils-f67e4fba.js";import"./defaultsJSON-b087dd4d.js";let f=class extends H{constructor(){super(...arguments),this.code=null,this.defaultValues={},this.domains=null,this.name=null}readDomains(e){if(!e)return null;const t={};for(const r of Object.keys(e))t[r]=Me(e[r]);return t}writeDomains(e,t){var n;if(!e)return;const r={};for(const s of Object.keys(e))e[s]&&(r[s]=(n=e[s])==null?void 0:n.toJSON());t.domains=r}};i([o({type:Number,json:{write:!0}})],f.prototype,"code",void 0),i([o({type:Object,json:{write:!0}})],f.prototype,"defaultValues",void 0),i([o({json:{write:!0}})],f.prototype,"domains",void 0),i([F("domains")],f.prototype,"readDomains",null),i([M("domains")],f.prototype,"writeDomains",null),i([o({type:String,json:{write:!0}})],f.prototype,"name",void 0),f=i([L("esri.layers.support.Subtype")],f);const it=f,ot=["charts","editingEnabled","formTemplate","labelsVisible","labelingInfo","legendEnabled","minScale","maxScale","opacity","popupEnabled","popupTemplate","renderer","subtypeCode","templates","title","visible"],U={key:"type",base:Ae,errorContext:"renderer",typeMap:{simple:E,"unique-value":Ue,"class-breaks":Qe}},G=k(),D=z({types:U});let st=0;function O(e){const t=e.json.write;return typeof t=="object"?t.ignoreOrigin=!0:e.json.write={ignoreOrigin:!0},e}function nt(e){return new E({symbol:at(e)})}function at(e){switch(e){case"point":case"multipoint":return Xe.clone();case"polyline":return We.clone();case"polygon":case"multipatch":return Ke.clone();default:return null}}function lt(e,t){return!!t&&(e==null?void 0:e.type)==="unique-value"&&typeof e.field=="string"&&e.field.toLowerCase()===t.toLowerCase()&&!e.field2&&!e.field3&&!e.valueExpression}function Q(e,t){var r;return e==null?null:(r=t.subtypes)==null?void 0:r.find(n=>n.code===e)}function pt(e,t){let r=null;switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":r="point";break;case"esriGeometryPolyline":r="line";break;case"esriGeometryPolygon":case"esriGeometryMultiPatch":r="polygon";break;default:t.type,r=null}const n={},s=Q(e,t);if(C(s)){const{defaultValues:a}=s;for(const p in a)n[p]=a[p]}return n[t.subtypeField]=e,new A({name:"New Feature",drawingTool:r,prototype:{attributes:n}})}const ut="esri.layers.support.SubtypeSublayer";let l=class extends q(R(Je(He))){constructor(e){super(e),this.charts=null,this.editingEnabled=!0,this.fieldOverrides=null,this.fieldsIndex=null,this.formTemplate=null,this.id=`${Date.now().toString(16)}-subtype-sublayer-${st++}`,this.type="subtype-sublayer",this.labelsVisible=!0,this.labelingInfo=null,this.layerType="ArcGISFeatureLayer",this.legendEnabled=!0,this.listMode="show",this.minScale=0,this.maxScale=0,this.opacity=1,this.popupEnabled=!0,this.popupTemplate=null,this.subtypeCode=null,this.templates=null,this.title=null,this.visible=!0}writeFieldOverrides(e,t,r){const{fields:n,parent:s}=this;let a;if(n){a=[];let p=0;n.forEach(({name:y,alias:c,editable:b,visible:g})=>{var I;if(!g)return;const d=(I=s==null?void 0:s.fields)==null?void 0:I.find(S=>S.name===y);if(!d)return;const h={name:y};let v=!1;c!==d.alias&&(h.alias=c,v=!0),b!==d.editable&&(h.editable=b,v=!0),a.push(h),v&&p++}),p===0&&a.length===n.length&&(a=null)}else a=$(e);a!=null&&a.length&&Be(r,a,t)}get fields(){const{parent:e,fieldOverrides:t,subtypeCode:r}=this,n=e==null?void 0:e.fields;if(!(n!=null&&n.length))return null;const{subtypes:s,subtypeField:a}=e,p=s.find(g=>g.code===r),y=p==null?void 0:p.defaultValues,c=p==null?void 0:p.domains,b=[];for(const g of n){const d=g.clone(),{name:h}=d,v=t==null?void 0:t.find(j=>j.name===h);if(d.visible=!t||!!v,v){const{alias:j,editable:B}=v;j&&(d.alias=j),B===!1&&(d.editable=!1)}const I=(y==null?void 0:y[h])??null;d.defaultValue=h===a?r:I;const S=(c==null?void 0:c[h])??null;d.domain=h===a?null:S?S.type==="inherited"?d.domain:S.clone():null,b.push(d)}return b}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){qe(e,this.fieldsIndex),this._override("renderer",e)}get renderer(){if(this._isOverridden("renderer"))return this._get("renderer");const{parent:e}=this;return e&&!e.isTable&&e.geometryType!=="mesh"?nt(e.geometryType):null}readRendererFromService(e,t,r){var y,c,b;if(t.type==="Table")return null;const n=(y=t.drawingInfo)==null?void 0:y.renderer,s=D(n,t,r);let a;const{subtypeCode:p}=this;if(p!=null&&lt(s,t.subtypeField)){const g=(c=s.uniqueValueInfos)==null?void 0:c.find(({value:d})=>(d=typeof d=="number"?String(d):d)===String(p));g&&(a=new E({symbol:g.symbol}))}else(s==null?void 0:s.type)!=="simple"||(b=s.visualVariables)!=null&&b.length||(a=s);return a}readRenderer(e,t,r){var s,a,p;const n=(a=(s=t==null?void 0:t.layerDefinition)==null?void 0:s.drawingInfo)==null?void 0:a.renderer;if(n&&!((p=n.visualVariables)!=null&&p.length))return D(n,t,r)||void 0}readTemplatesFromService(e,t){return[pt(this.subtypeCode,t)]}readTitleFromService(e,t){const r=Q(this.subtypeCode,t);return C(r)?r.name:null}createPopupTemplate(e){let t=this;const{parent:r,fields:n,title:s}=this;if(r){const{displayField:a,editFieldsInfo:p,objectIdField:y}=r;t={displayField:a,editFieldsInfo:p,fields:n,objectIdField:y,title:s}}return Ye(t,e)}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e){return this._getLayerDomain(e)}hasUserOverrides(){return ot.some(e=>this.originIdOf(e)===N.USER)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};i([o({json:{write:{ignoreOrigin:!0}}})],l.prototype,"charts",void 0),i([o({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:{ignoreOrigin:!0}}})],l.prototype,"editingEnabled",void 0),i([o({readOnly:!0,json:{name:"layerDefinition.fieldOverrides",origins:{service:{read:!1}},write:{ignoreOrigin:!0,allowNull:!0}}})],l.prototype,"fieldOverrides",void 0),i([M("fieldOverrides")],l.prototype,"writeFieldOverrides",null),i([o({...G.fields,readOnly:!0,json:{read:!1}})],l.prototype,"fields",null),i([o(G.fieldsIndex)],l.prototype,"fieldsIndex",void 0),i([o({type:de,json:{name:"formInfo",write:{ignoreOrigin:!0}}})],l.prototype,"formTemplate",void 0),i([o({type:String,readOnly:!0,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],l.prototype,"id",void 0),i([o({readOnly:!0,json:{read:!1}})],l.prototype,"type",void 0),i([o(O($(je)))],l.prototype,"labelsVisible",void 0),i([o({type:[ze],json:{name:"layerDefinition.drawingInfo.labelingInfo",origins:{service:{read:!1}},read:{reader:Ze},write:{ignoreOrigin:!0}}})],l.prototype,"labelingInfo",void 0),i([o({type:["ArcGISFeatureLayer"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],l.prototype,"layerType",void 0),i([o(O($(Te)))],l.prototype,"legendEnabled",void 0),i([o({type:["show","hide"]})],l.prototype,"listMode",void 0),i([o((()=>{const e=$(_e);return e.json.origins.service.read=!1,O(e)})())],l.prototype,"minScale",void 0),i([o((()=>{const e=$(xe);return e.json.origins.service.read=!1,O(e)})())],l.prototype,"maxScale",void 0),i([o({readOnly:!0})],l.prototype,"effectiveScaleRange",null),i([o({type:Number,range:{min:0,max:1},nonNullable:!0,json:{write:{ignoreOrigin:!0}}})],l.prototype,"opacity",void 0),i([o()],l.prototype,"parent",void 0),i([o(O($(Le)))],l.prototype,"popupEnabled",void 0),i([o({type:ke,json:{name:"popupInfo",write:{ignoreOrigin:!0}}})],l.prototype,"popupTemplate",void 0),i([o({readOnly:!0})],l.prototype,"defaultPopupTemplate",null),i([o({types:U,json:{write:{target:"layerDefinition.drawingInfo.renderer",ignoreOrigin:!0}}})],l.prototype,"renderer",null),i([F("service","renderer",["drawingInfo.renderer","subtypeField","type"])],l.prototype,"readRendererFromService",null),i([F("renderer",["layerDefinition.drawingInfo.renderer"])],l.prototype,"readRenderer",null),i([o({type:Number,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],l.prototype,"subtypeCode",void 0),i([o({type:[A],json:{name:"layerDefinition.templates",write:{ignoreOrigin:!0}}})],l.prototype,"templates",void 0),i([F("service","templates",["geometryType","subtypeField","subtypes","type"])],l.prototype,"readTemplatesFromService",null),i([o({type:String,json:{write:{ignoreOrigin:!0}}})],l.prototype,"title",void 0),i([F("service","title",["subtypes"])],l.prototype,"readTitleFromService",null),i([o({type:Boolean,nonNullable:!0,json:{name:"visibility",write:{ignoreOrigin:!0}}})],l.prototype,"visible",void 0),l=i([L(ut)],l);const T=l,m="SubtypeGroupLayer",dt="esri.layers.SubtypeGroupLayer";function V(e,t){return new w("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}const _=k();let u=class extends ye(ue(le(Ve(De(Ge(ae(Ce(Pe(R(pe(ne(q(se))))))))))))){constructor(...e){super(...e),this._handles=new Z,this._sublayersCollectionChanged=!1,this.fields=null,this.fieldsIndex=null,this.outFields=null,this.subtypes=null,this.sublayers=new(x.ofType(T)),this.timeInfo=null,this.title="Layer",this.type="subtype-group",this.addHandles(ee(()=>this.sublayers,(t,r)=>this._handleSublayersChange(t,r),te))}destroy(){var e;(e=this.source)==null||e.destroy(),this._handles=K(this._handles)}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){const t=C(e)?e.signal:null,r=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(X).then(async()=>{if(!this.url)throw new w("subtype-grouplayer:missing-url-or-source","SubtypeGroupLayer must be created with either a url or a portal item");if(this.layerId==null)throw new w("subtype-grouplayer:missing-layerid","layerId is required for a SubtypeGroupLayer created with url");return this._initLayerProperties(await this.createGraphicsSource(t))}).then(()=>this.finishLoadEditablePortalLayer(e));return this.addResolvingPromise(r),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get parsedUrl(){const e=ie(this.url);return e!=null&&this.layerId!=null&&(e.path=oe(e.path,this.layerId.toString())),e}set source(e){this._get("source")!==e&&this._set("source",e)}readTitleFromService(e,{name:t}){return this.url?Ne(this.url,t):t}async addAttachment(e,t){return me(this,e,t,m)}async updateAttachment(e,t,r){return ce(this,e,t,r,m)}async applyEdits(e,t){return he(this,e,t)}on(e,t){return super.on(e,t)}async createGraphicsSource(e){const{default:t}=await Y(J(()=>import("./FeatureLayerSource-4fc64f76.js"),["assets/FeatureLayerSource-4fc64f76.js","assets/cast-4943406f.js","assets/typedArrayUtil-bd69bba0.js","assets/string-cc430a78.js","assets/Error-8814705f.js","assets/ensureType-9613b5f0.js","assets/nextTick-3ee5a785.js","assets/promiseUtils-ec14a623.js","assets/geometry-da69b92c.js","assets/Extent-d21a2637.js","assets/Polyline-98ddf509.js","assets/typeUtils-98cd71e2.js","assets/jsonMap-9318d50f.js","assets/Graphic-13c64b79.js","assets/PopupTemplate-9e34fd80.js","assets/Clonable-7eedeb5c.js","assets/Collection-e1ec52f9.js","assets/Evented-28d49a6f.js","assets/SimpleObservable-b403cd38.js","assets/fieldUtils-605e1353.js","assets/preload-helper-6c8d3039.js","assets/arcadeOnDemand-5200ab6b.js","assets/enumeration-1740c98c.js","assets/number-d7fe9942.js","assets/locale-30120714.js","assets/Identifiable-28626f77.js","assets/symbols-26ff8002.js","assets/CIMSymbol-fc3b1809.js","assets/Symbol-f543a02b.js","assets/Color-ebbea628.js","assets/colorUtils-639f4d25.js","assets/mathUtils-daf59e84.js","assets/common-701a4199.js","assets/screenUtils-7afeb41c.js","assets/opacityUtils-dc8d0a85.js","assets/aaBoundingBox-58fec4c8.js","assets/request-9ab300ca.js","assets/persistableUrlUtils-d6987fba.js","assets/collectionUtils-28848f7d.js","assets/Portal-c85307b1.js","assets/Loadable-8b974e55.js","assets/Promise-9613afa4.js","assets/PortalGroup-e30a1480.js","assets/PortalUser-6c405f61.js","assets/jsonUtils-7333a4d1.js","assets/TimeExtent-fd94e986.js","assets/clientSideDefaults-542574a3.js","assets/QueryEngineCapabilities-42e44ded.js","assets/defaultsJSON-b087dd4d.js","assets/Query-ca5b0d4c.js","assets/Field-27137e22.js","assets/fieldType-ff12d8db.js","assets/AttachmentInfo-fc5d4f91.js","assets/normalizeUtils-758f8b63.js","assets/query-b278558e.js","assets/pbfQueryUtils-4074e0c2.js","assets/pbf-9c9087c4.js","assets/OptimizedFeature-ec32193d.js","assets/unitUtils-bc71b997.js","assets/OptimizedFeatureSet-1d1ac4b9.js","assets/queryZScale-38bff362.js","assets/zscale-3fafe111.js","assets/FeatureSet-cf76d07f.js","assets/Task-44399f92.js","assets/featureConversionUtils-e981d065.js","assets/RelationshipQuery-a6b246d9.js","assets/executeForIds-2e345052.js","assets/TopFeaturesQuery-a641bf51.js","assets/arcgisLayerUrl-32f60088.js","assets/editsZScale-cfe55ac3.js"]),e);return new t({layer:this}).load({signal:e})}createQuery(){const e=fe(this),t=this.sublayers.map(r=>r.subtypeCode);return e.where=re(`${this.subtypeField} IN (${t.join(",")})`,this.definitionExpression),e}async deleteAttachments(e,t){return be(this,e,t,m)}async fetchRecomputedExtents(e){return ge(this,e,m)}getFieldDomain(e,t){return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}async queryAttachments(e,t){return ve(this,e,t,m)}async queryFeatures(e,t){const r=await this.load(),n=rt.from(e)??r.createQuery(),s=W(n.outFields,[]);s.includes(this.subtypeField)||(s.push(this.subtypeField),n.outFields=s);const a=await r.source.queryFeatures(n,t);if(a!=null&&a.features)for(const p of a.features)p.layer=this._findSublayerForFeature(p),p.sourceLayer=this;return a}async queryObjectIds(e,t){return we(this,e,t,m)}async queryFeatureCount(e,t){return $e(this,e,t,m)}async queryExtent(e,t){return Fe(this,e,t,m)}async queryRelatedFeatures(e,t){return Se(this,e,t,m)}async queryRelatedFeaturesCount(e,t){return Oe(this,e,t,m)}write(e,t){var a;const{origin:r,layerContainerType:n,messages:s}=t;if(this.isTable){if(r==="web-scene"||r==="web-map"&&n!=="tables")return s==null||s.push(V(this,"using a table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&r==="web-map"&&n==="tables")return s==null||s.push(V(this,"using a non-table source cannot be written to tables in web maps")),null;return(a=this.sublayers)!=null&&a.length?super.write(e,t):(s==null||s.push(new w("web-document-write:invalid-property",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer`,{layer:this})),null)}serviceSupportsSpatialReference(e){return!!this.loaded&&tt(this,e)}_findSublayerForFeature(e){const t=this.fieldsIndex.get(this.subtypeField),r=e.attributes[t.name];return this.sublayers.find(n=>n.subtypeCode===r)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}async _initLayerProperties(e){var r;this._set("source",e);const{sourceJSON:t}=e;if(t&&(this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})),this.isTable)throw new w("subtype-grouplayer:unsupported-source","SubtypeGroupLayer cannot be created using a layer with table source");if(!((r=this.subtypes)!=null&&r.length))throw new w("subtype-grouplayer:missing-subtypes","SubtypeGroupLayer must be created using a layer with subtypes");this._verifyFields(),Re(this.timeInfo,this.fieldsIndex)}async hasDataChanged(){return Ie(this)}_verifyFields(){var t,r;const e=((t=this.parsedUrl)==null?void 0:t.path)??"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||e.search(/\/FeatureServer\//i)!==-1||(r=this.fields)!=null&&r.some(n=>n.type==="geometry")||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_handleSublayersChange(e,t){t&&(t.forEach(r=>{r.parent=null}),this.handles.remove("sublayers-owner")),e&&(e.forEach(r=>{r.parent=this}),this._sublayersCollectionChanged=!1,this.handles.add([e.on("after-add",({item:r})=>{r.parent=this}),e.on("after-remove",({item:r})=>{r.parent=null}),e.on("after-changes",()=>{this._sublayersCollectionChanged=!0})],"sublayers-owner"))}};i([o({readOnly:!0})],u.prototype,"createQueryVersion",null),i([o({type:Boolean,readOnly:!0})],u.prototype,"editingEnabled",null),i([o({..._.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],u.prototype,"fields",void 0),i([o(_.fieldsIndex)],u.prototype,"fieldsIndex",void 0),i([o(Ee)],u.prototype,"id",void 0),i([o({type:["show","hide","hide-children"]})],u.prototype,"listMode",void 0),i([o({value:"SubtypeGroupLayer",type:["SubtypeGroupLayer"]})],u.prototype,"operationalLayerType",void 0),i([o(_.outFields)],u.prototype,"outFields",void 0),i([o({readOnly:!0})],u.prototype,"parsedUrl",null),i([o()],u.prototype,"source",null),i([o({type:[it],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],u.prototype,"subtypes",void 0),i([o({type:x.ofType(T),json:{origins:{service:{read:{source:"subtypes",reader:(e,t,r)=>{const n=e.map(({code:s})=>{const a=new T({subtypeCode:s});return a.read(t,r),a});return new(x.ofType(T))(n)}}}},name:"layers",write:{overridePolicy(e,t,r){const n=this.originOf("sublayers"),s=N.PORTAL_ITEM;let a=!0;if(P(n)===s&&P(r.origin)>s){const p=e.some(y=>y.hasUserOverrides());a=this._sublayersCollectionChanged||p}return{enabled:a,ignoreOrigin:!0}}}}})],u.prototype,"sublayers",void 0),i([o({type:et})],u.prototype,"timeInfo",void 0),i([o({json:{origins:{"portal-item":{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0}}}}})],u.prototype,"title",void 0),i([F("service","title",["name"])],u.prototype,"readTitleFromService",null),i([o({json:{read:!1}})],u.prototype,"type",void 0),u=i([L(dt)],u);const ii=u;export{ii as default};
