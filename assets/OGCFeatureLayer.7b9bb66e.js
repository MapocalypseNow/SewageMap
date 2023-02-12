import{B as r,C as i,D as P,O as Q,q as N,L as k,k as C,v as R,f2 as J,s as b,iG as Z,jc as z,jT as H,jU as U,it as V,jV as W,jb as K,iu as X,di as Y,dj as ee,iv as te,dk as se,jW as I,iz as re,n as O,jX as oe,iJ as ie,e4 as ne,w as pe,i1 as T,jK as ae,jY as le,jZ as ue,j2 as de,iB as ce,eC as ye,jL as he,iA as fe,j_ as me,jM as ge,dq as ve,iC as Se,b as xe}from"./index.2901469c.js";import{N as Ce,F as $,v as D,x as je,k as we,T as Fe,S as Re,I as be,j as Ie}from"./ogcFeatureUtils.8da82483.js";import"./geojson.65b92a3b.js";let y=class extends Q{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getSource(){const{featureDefinition:{collection:e,layerDefinition:t,spatialReference:s,supportedCrs:n},layer:{apiKey:p,customParameters:l,effectiveMaxRecordCount:a}}=this;return{type:"ogc-source",collection:e,layerDefinition:t,maxRecordCount:a,queryParameters:{apiKey:p,customParameters:l},spatialReference:s,supportedCrs:n}}queryExtent(e,t={}){return null}queryFeatureCount(e,t={}){return null}queryFeatures(e,t={}){return this.queryFeaturesJSON(e,t).then(s=>N.fromJSON(s))}queryFeaturesJSON(e,t={}){const s=this.getSource();return this.load(t).then(()=>Ce(s,e,t))}queryObjectIds(e,t={}){return null}serviceSupportsSpatialReference(e){return!(!e.isWGS84&&!e.isWebMercator)||!!this.featureDefinition.supportedCrs[e.wkid]}_conformsToType(e,t){var n;const s=new RegExp(`^${t}$`,"i");return(n=e.conformsTo.some(p=>s.test(p)))!=null?n:!1}_getCapabilities(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},query:{maxRecordCount:t,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1}}}_getMaxRecordCount(e){var t,s,n,p,l,a,u,d,m;return(m=(p=(n=(s=(t=e==null?void 0:e.components)==null?void 0:t.parameters)==null?void 0:s.limit)==null?void 0:n.schema)==null?void 0:p.maximum)!=null?m:(d=(u=(a=(l=e==null?void 0:e.components)==null?void 0:l.parameters)==null?void 0:a.limitFeatures)==null?void 0:u.schema)==null?void 0:d.maximum}_getStorageSpatialReference(e){var n;const t=(n=e.storageCrs)!=null?n:$,s=D(t);return k(s)?C.WGS84:new C({wkid:s})}_getSupportedSpatialReferences(e,t){var a;const s="#/crs",n=(a=e.crs)!=null?a:[$],p=n.includes(s)?n.filter(u=>u!==s).concat(t.crs):n,l=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return p.filter(u=>!l.test(u))}async _loadOGCServices(e,t){const s=R(t)?t.signal:null,{apiKey:n,collectionId:p,customParameters:l,fields:a,geometryType:u,hasZ:d,objectIdField:m,timeInfo:g,url:E}=e,_={fields:a==null?void 0:a.map(c=>c.toJSON()),geometryType:J.toJSON(u),hasZ:d,objectIdField:m,timeInfo:g==null?void 0:g.toJSON()},h={apiKey:n,customParameters:l,signal:s},v=await je(E,h),[j,w]=await Promise.all([we(v,h),Fe(v,h)]);if(!this._conformsToType(j,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new b("ogc-feature-layer:no-geojson-support","Server does not support geojson");const f=w.collections.find(c=>c.id===p);if(!f)throw new b("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const q=this._conformsToType(j,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await Re(v,h):null,F=await be(f,_,h),M=this._getMaxRecordCount(q),G=this._getCapabilities(F.hasZ,M),B=this._getStorageSpatialReference(f).toJSON(),A=this._getSupportedSpatialReferences(f,w),L=new RegExp(`^${Ie}`,"i"),S={};for(const c of A){const x=D(c);R(x)&&(S[x]||(S[x]=c.replace(L,"")))}this.featureDefinition={capabilities:G,collection:f,layerDefinition:F,spatialReference:B,supportedCrs:S}}};r([i()],y.prototype,"featureDefinition",void 0),r([i({constructOnly:!0})],y.prototype,"layer",void 0),r([i()],y.prototype,"type",void 0),y=r([P("esri.layers.graphics.sources.OGCFeatureSource")],y);const Oe=Se();let o=class extends Z(z(H(U(V(W(K(X(Y(ee(te(se(xe)))))))))))){constructor(e){super(e),this.collectionId=null,this.copyright=null,this.definitionExpression=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.maxRecordCount=null,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new y({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then(()=>this._fetchService(e))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get effectiveMaxRecordCount(){var e,t,s;return(s=(t=this.maxRecordCount)!=null?t:(e=this.capabilities)==null?void 0:e.query.maxRecordCount)!=null?s:5e3}get isTable(){return this.loaded&&this.geometryType==null}set renderer(e){I(e,this.fieldsIndex),this._set("renderer",e)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return re(this,e)}createQuery(){return new O}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var a;let s,n=!1;const p=(a=t==null?void 0:t.feature)==null?void 0:a.attributes,l=this.typeIdField&&(p==null?void 0:p[this.typeIdField]);return l!=null&&this.types&&(n=this.types.some(u=>{var d;return u.id==l&&(s=(d=u.domains)==null?void 0:d[e],(s==null?void 0:s.type)==="inherited"&&(s=this._getLayerDomain(e)),!0)})),n||s||(s=this._getLayerDomain(e)),s}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(O.from(e)||this.createQuery(),t)).then(s=>{var n;return(n=s==null?void 0:s.features)==null||n.forEach(p=>{p.layer=p.sourceLayer=this}),s})}serviceSupportsSpatialReference(e){var t,s;return(s=(t=this.source)==null?void 0:t.serviceSupportsSpatialReference(e))!=null?s:!1}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),I(this.renderer,this.fieldsIndex),oe(this.timeInfo,this.fieldsIndex)}_getLayerDomain(e){if(!this.fields)return null;for(const t of this.fields)if(t.name===e&&t.domain)return t.domain;return null}};r([i({readOnly:!0,json:{origins:{service:{read:!0}}}})],o.prototype,"capabilities",void 0),r([i({type:String,json:{write:!0}})],o.prototype,"collectionId",void 0),r([i({type:String})],o.prototype,"copyright",void 0),r([i({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),r([i({type:String})],o.prototype,"definitionExpression",void 0),r([i({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],o.prototype,"description",void 0),r([i({type:String})],o.prototype,"displayField",void 0),r([i({type:Number})],o.prototype,"effectiveMaxRecordCount",null),r([i(ie)],o.prototype,"elevationInfo",void 0),r([i({type:[ne],json:{origins:{service:{name:"layerDefinition.fields"}}}})],o.prototype,"fields",void 0),r([i(Oe.fieldsIndex)],o.prototype,"fieldsIndex",void 0),r([i({readOnly:!0,type:pe,json:{origins:{service:{name:"layerDefinition.extent"}}}})],o.prototype,"fullExtent",void 0),r([i({type:T.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:T.read}}}}})],o.prototype,"geometryType",void 0),r([i({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],o.prototype,"hasZ",void 0),r([i({type:Boolean,readOnly:!0})],o.prototype,"isTable",null),r([i({type:[ae],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:le},write:!0}}}})],o.prototype,"labelingInfo",void 0),r([i(ue)],o.prototype,"labelsVisible",void 0),r([i(de)],o.prototype,"legendEnabled",void 0),r([i({type:Number})],o.prototype,"maxRecordCount",void 0),r([i({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],o.prototype,"objectIdField",void 0),r([i({type:["OGCFeatureLayer"]})],o.prototype,"operationalLayerType",void 0),r([i(ce)],o.prototype,"popupEnabled",void 0),r([i({type:ye,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),r([i({types:he,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:fe,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],o.prototype,"renderer",null),r([i(me)],o.prototype,"screenSizePerspectiveEnabled",void 0),r([i({readOnly:!0})],o.prototype,"source",void 0),r([i({readOnly:!0,type:C,json:{origins:{service:{read:!0}}}})],o.prototype,"spatialReference",void 0),r([i({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],o.prototype,"title",void 0),r([i({readOnly:!0,json:{read:!1}})],o.prototype,"type",void 0),r([i({type:String,readOnly:!0})],o.prototype,"typeIdField",void 0),r([i({type:[ge]})],o.prototype,"types",void 0),r([i(ve)],o.prototype,"url",void 0),o=r([P("esri.layers.OGCFeatureLayer")],o);const Pe=o;export{Pe as default};
