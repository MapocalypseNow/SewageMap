import{D as s,E as o,F as D,Y as Q,r as L,P as N,a6 as x,v as j,ft as H,V as R,jv as V,jW as J,kA as U,kB as Z,jc as z,kC as W,jV as K,jd as X,fS as Y,fT as ee,jk as te,fU as se,kD as I,jo as re,m as b,kE as oe,jx as ie,et as ne,w as pe,iL as O,kr as ae,kF as le,kG as ue,jN as de,jq as ce,d as ye,ks as he,jp as fe,kH as me,kt as ge,fX as ve,jr as Se,eg as xe}from"./vendor-128d427e.js";import{N as Ce,F as $,v as T,x as we,k as Fe,T as je,S as Re,I as Ie,j as be}from"./ogcFeatureUtils-f2ffd10f.js";import"./geojson-52b22b2d.js";let y=class extends Q{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getSource(){const{featureDefinition:{collection:e,layerDefinition:t,spatialReference:i,supportedCrs:n},layer:{apiKey:p,customParameters:l,effectiveMaxRecordCount:a}}=this;return{type:"ogc-source",collection:e,layerDefinition:t,maxRecordCount:a,queryParameters:{apiKey:p,customParameters:l},spatialReference:i,supportedCrs:n}}queryExtent(e,t={}){return null}queryFeatureCount(e,t={}){return null}queryFeatures(e,t={}){return this.queryFeaturesJSON(e,t).then(i=>L.fromJSON(i))}queryFeaturesJSON(e,t={}){const i=this.getSource();return this.load(t).then(()=>Ce(i,e,t))}queryObjectIds(e,t={}){return null}serviceSupportsSpatialReference(e){return!(!e.isWGS84&&!e.isWebMercator)||!!this.featureDefinition.supportedCrs[e.wkid]}_conformsToType(e,t){const i=new RegExp(`^${t}$`,"i");return e.conformsTo.some(n=>i.test(n))??!1}_getCapabilities(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},query:{maxRecordCount:t,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1}}}_getMaxRecordCount(e){var t,i,n,p,l,a,u,d;return((p=(n=(i=(t=e==null?void 0:e.components)==null?void 0:t.parameters)==null?void 0:i.limit)==null?void 0:n.schema)==null?void 0:p.maximum)??((d=(u=(a=(l=e==null?void 0:e.components)==null?void 0:l.parameters)==null?void 0:a.limitFeatures)==null?void 0:u.schema)==null?void 0:d.maximum)}_getStorageSpatialReference(e){const t=e.storageCrs??$,i=T(t);return N(i)?x.WGS84:new x({wkid:i})}_getSupportedSpatialReferences(e,t){const i="#/crs",n=e.crs??[$],p=n.includes(i)?n.filter(a=>a!==i).concat(t.crs):n,l=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return p.filter(a=>!l.test(a))}async _loadOGCServices(e,t){const i=j(t)?t.signal:null,{apiKey:n,collectionId:p,customParameters:l,fields:a,geometryType:u,hasZ:d,objectIdField:E,timeInfo:m,url:P}=e,_={fields:a==null?void 0:a.map(c=>c.toJSON()),geometryType:H.toJSON(u),hasZ:d,objectIdField:E,timeInfo:m==null?void 0:m.toJSON()},h={apiKey:n,customParameters:l,signal:i},g=await we(P,h),[C,w]=await Promise.all([Fe(g,h),je(g,h)]);if(!this._conformsToType(C,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new R("ogc-feature-layer:no-geojson-support","Server does not support geojson");const f=w.collections.find(c=>c.id===p);if(!f)throw new R("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const k=this._conformsToType(C,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await Re(g,h):null,F=await Ie(f,_,h),q=this._getMaxRecordCount(k),G=this._getCapabilities(F.hasZ,q),M=this._getStorageSpatialReference(f).toJSON(),A=this._getSupportedSpatialReferences(f,w),B=new RegExp(`^${be}`,"i"),v={};for(const c of A){const S=T(c);j(S)&&(v[S]||(v[S]=c.replace(B,"")))}this.featureDefinition={capabilities:G,collection:f,layerDefinition:F,spatialReference:M,supportedCrs:v}}};s([o()],y.prototype,"featureDefinition",void 0),s([o({constructOnly:!0})],y.prototype,"layer",void 0),s([o()],y.prototype,"type",void 0),y=s([D("esri.layers.graphics.sources.OGCFeatureSource")],y);const Oe=Se();let r=class extends V(J(U(Z(z(W(K(X(Y(ee(te(se(xe)))))))))))){constructor(e){super(e),this.collectionId=null,this.copyright=null,this.definitionExpression=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.maxRecordCount=null,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new y({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then(()=>this._fetchService(e))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get effectiveMaxRecordCount(){var e;return this.maxRecordCount??((e=this.capabilities)==null?void 0:e.query.maxRecordCount)??5e3}get isTable(){return this.loaded&&this.geometryType==null}set renderer(e){I(e,this.fieldsIndex),this._set("renderer",e)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return re(this,e)}createQuery(){return new b}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var a;let i,n=!1;const p=(a=t==null?void 0:t.feature)==null?void 0:a.attributes,l=this.typeIdField&&(p==null?void 0:p[this.typeIdField]);return l!=null&&this.types&&(n=this.types.some(u=>{var d;return u.id==l&&(i=(d=u.domains)==null?void 0:d[e],(i==null?void 0:i.type)==="inherited"&&(i=this._getLayerDomain(e)),!0)})),n||i||(i=this._getLayerDomain(e)),i}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(b.from(e)||this.createQuery(),t)).then(i=>{var n;return(n=i==null?void 0:i.features)==null||n.forEach(p=>{p.layer=p.sourceLayer=this}),i})}serviceSupportsSpatialReference(e){var t;return((t=this.source)==null?void 0:t.serviceSupportsSpatialReference(e))??!1}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),I(this.renderer,this.fieldsIndex),oe(this.timeInfo,this.fieldsIndex)}_getLayerDomain(e){if(!this.fields)return null;for(const t of this.fields)if(t.name===e&&t.domain)return t.domain;return null}};s([o({readOnly:!0,json:{origins:{service:{read:!0}}}})],r.prototype,"capabilities",void 0),s([o({type:String,json:{write:!0}})],r.prototype,"collectionId",void 0),s([o({type:String})],r.prototype,"copyright",void 0),s([o({readOnly:!0})],r.prototype,"defaultPopupTemplate",null),s([o({type:String})],r.prototype,"definitionExpression",void 0),s([o({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],r.prototype,"description",void 0),s([o({type:String})],r.prototype,"displayField",void 0),s([o({type:Number})],r.prototype,"effectiveMaxRecordCount",null),s([o(ie)],r.prototype,"elevationInfo",void 0),s([o({type:[ne],json:{origins:{service:{name:"layerDefinition.fields"}}}})],r.prototype,"fields",void 0),s([o(Oe.fieldsIndex)],r.prototype,"fieldsIndex",void 0),s([o({readOnly:!0,type:pe,json:{origins:{service:{name:"layerDefinition.extent"}}}})],r.prototype,"fullExtent",void 0),s([o({type:O.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:O.read}}}}})],r.prototype,"geometryType",void 0),s([o({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],r.prototype,"hasZ",void 0),s([o({type:Boolean,readOnly:!0})],r.prototype,"isTable",null),s([o({type:[ae],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:le},write:!0}}}})],r.prototype,"labelingInfo",void 0),s([o(ue)],r.prototype,"labelsVisible",void 0),s([o(de)],r.prototype,"legendEnabled",void 0),s([o({type:Number})],r.prototype,"maxRecordCount",void 0),s([o({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],r.prototype,"objectIdField",void 0),s([o({type:["OGCFeatureLayer"]})],r.prototype,"operationalLayerType",void 0),s([o(ce)],r.prototype,"popupEnabled",void 0),s([o({type:ye,json:{name:"popupInfo",write:!0}})],r.prototype,"popupTemplate",void 0),s([o({types:he,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:fe,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],r.prototype,"renderer",null),s([o(me)],r.prototype,"screenSizePerspectiveEnabled",void 0),s([o({readOnly:!0})],r.prototype,"source",void 0),s([o({readOnly:!0,type:x,json:{origins:{service:{read:!0}}}})],r.prototype,"spatialReference",void 0),s([o({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],r.prototype,"title",void 0),s([o({readOnly:!0,json:{read:!1}})],r.prototype,"type",void 0),s([o({type:String,readOnly:!0})],r.prototype,"typeIdField",void 0),s([o({type:[ge]})],r.prototype,"types",void 0),s([o(ve)],r.prototype,"url",void 0),r=s([D("esri.layers.OGCFeatureLayer")],r);const Ee=r;export{Ee as default};
