import"./geometry-da69b92c.js";import{U as T}from"./request-9ab300ca.js";import{s as U,a as g}from"./Error-8814705f.js";import{t as y,c as _,r as k}from"./typedArrayUtil-bd69bba0.js";import{k as I,M as G,z as B}from"./Extent-d21a2637.js";import{u as Q,r as V,n as H}from"./featureConversionUtils-e981d065.js";import{e as X}from"./OptimizedFeatureSet-1d1ac4b9.js";import{T as Y,L as ee,I as te}from"./geojson-95f15e7c.js";import{o as ne}from"./clientSideDefaults-542574a3.js";import{r as ie}from"./FieldsIndex-e1d877a8.js";import{i as ae}from"./fieldType-ff12d8db.js";const N=U.getLogger("esri.layers.graphics.sources.ogcfeature"),R="http://www.opengis.net/def/crs/",Te=`${R}OGC/1.3/CRS84`;async function je(e,n,t={},i=5){const{links:r}=e,l=m(r,"items","application/geo+json")||m(r,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if(y(l))throw new g("ogc-feature-layer:missing-items-page","Missing items url");const{data:d}=await T(l.href,{signal:t.signal,query:{limit:i,...t.customParameters,token:t.apiKey},headers:{accept:"application/geo+json"}});await Y(d);const s=ee(d,{geometryType:n.geometryType}),u=n.fields||s.fields||[],x=n.hasZ!=null?n.hasZ:s.hasZ,h=s.geometryType,f=n.objectIdField||s.objectIdFieldName||"OBJECTID";let o=n.timeInfo;const j=u.find(({name:a})=>a===f);if(j)j.editable=!1,j.nullable=!1;else{if(!s.objectIdFieldType)throw new g("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");u.unshift({name:f,alias:f,type:s.objectIdFieldType==="number"?"esriFieldTypeOID":"esriFieldTypeString",editable:!1,nullable:!1})}if(f!==s.objectIdFieldName){const a=u.find(({name:c})=>c===s.objectIdFieldName);a&&(a.type="esriFieldTypeInteger")}u===s.fields&&s.unknownFields.length>0&&N.warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:s.unknownFields}});for(const a of u){if(a.name==null&&(a.name=a.alias),a.alias==null&&(a.alias=a.name),a.type!=="esriFieldTypeOID"&&a.type!=="esriFieldTypeGlobalID"&&(a.editable=a.editable==null||!!a.editable,a.nullable=a.nullable==null||!!a.nullable),!a.name)throw new g("ogc-feature-layer:invalid-field-name","field name is missing",{field:a});if(!ae.jsonValues.includes(a.type))throw new g("ogc-feature-layer:invalid-field-type",`invalid type for field "${a.name}"`,{field:a})}if(o){const a=new ie(u);if(o.startTimeField){const c=a.get(o.startTimeField);c?(o.startTimeField=c.name,c.type="esriFieldTypeDate"):o.startTimeField=null}if(o.endTimeField){const c=a.get(o.endTimeField);c?(o.endTimeField=c.name,c.type="esriFieldTypeDate"):o.endTimeField=null}if(o.trackIdField){const c=a.get(o.trackIdField);c?o.trackIdField=c.name:(o.trackIdField=null,N.warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:o}}))}o.startTimeField||o.endTimeField||(N.warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:o}}),o=null)}return{drawingInfo:h?ne(h):null,extent:de(e),geometryType:h,fields:u,hasZ:!!x,objectIdField:f,timeInfo:o}}async function ke(e,n={}){const{links:t}=e,i=m(t,"data","application/json")||m(t,"http://www.opengis.net/def/rel/ogc/1.0/data","application/json");if(y(i))throw new g("ogc-feature-layer:missing-collections-page","Missing collections url");const{apiKey:r,customParameters:l,signal:d}=n,{data:s}=await T(i.href,{signal:d,headers:{accept:"application/json"},query:{...l,token:r}});return s}async function xe(e,n={}){const{links:t}=e,i=m(t,"conformance","application/json")||m(t,"http://www.opengis.net/def/rel/ogc/1.0/conformance","application/json");if(y(i))throw new g("ogc-feature-layer:missing-conformance-page","Missing conformance url");const{apiKey:r,customParameters:l,signal:d}=n,{data:s}=await T(i.href,{signal:d,headers:{accept:"application/json"},query:{...l,token:r}});return s}async function $e(e,n={}){const{apiKey:t,customParameters:i,signal:r}=n,{data:l}=await T(e,{signal:r,headers:{accept:"application/json"},query:{...i,token:t}});return l}async function Se(e,n={}){const t="application/vnd.oai.openapi+json;version=3.0",i=m(e.links,"service-desc",t);if(y(i))return N.warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null;const{apiKey:r,customParameters:l,signal:d}=n,{data:s}=await T(i.href,{signal:d,headers:{accept:t},query:{...l,token:r}});return s}function ve(e){var r;const n=(r=/^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(e))==null?void 0:r.groups;if(!n)return null;const{authority:t,code:i}=n;switch(t.toLowerCase()){case"ogc":switch(i.toLowerCase()){case"crs27":return I.GCS_NAD_1927.wkid;case"crs83":return 4269;case"crs84":case"crs84h":return I.WGS84.wkid;default:return null}case"esri":case"epsg":{const l=Number.parseInt(i,10);return Number.isNaN(l)?null:l}default:return null}}async function Ne(e,n,t){const i=await re(e,n,t);return Q(i)}async function re(e,n,t){const{collection:i,layerDefinition:r,maxRecordCount:l,queryParameters:{apiKey:d,customParameters:s},spatialReference:u,supportedCrs:x}=e,{links:h}=i,f=m(h,"items","application/geo+json")||m(h,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if(y(f))throw new g("ogc-feature-layer:missing-items-page","Missing items url");const{geometry:o,num:j,start:a,timeExtent:c,where:D}=n;if(n.objectIds)throw new g("ogc-feature-layer:query-by-objectids-not-supported","Queries with objectids are not supported");const Z=I.fromJSON(u),F=_(n.outSpatialReference,Z),$=F.isWGS84?null:P(F,x),K=ce(o,x),L=oe(c),J=le(D),z=j??(a!=null&&a!==void 0?10:l),{data:w}=await T(f.href,{...t,query:{...s,...K,crs:$,datetime:L,query:J,limit:z,startindex:a,token:d},headers:{accept:"application/geo+json"}});let S=!1;w.links&&(S=!!w.links.find(v=>v.rel==="next")),!S&&Number.isInteger(w.numberMatched)&&Number.isInteger(w.numberReturned)&&(S=w.numberReturned<w.numberMatched);const{fields:A,geometryType:q,hasZ:M,objectIdField:O}=r,C=te(w,{geometryType:q,hasZ:M,objectIdField:O});if(!$&&F.isWebMercator){for(const b of C)if(k(b.geometry)){const v=V(b.geometry,q,M,!1);v.spatialReference=I.WGS84,b.geometry=H(G(v,F))}}for(const b of C)b.objectId=b.attributes[O];const E=$||!$&&F.isWebMercator?F.toJSON():B,p=new X;return p.exceededTransferLimit=S,p.features=C,p.fields=A,p.geometryType=q,p.hasZ=M,p.objectIdFieldName=O,p.spatialReference=E,p}function se(e){return k(e)&&e.type==="extent"}function P(e,n){const{isWebMercator:t,wkid:i}=e;if(!i)return null;const r=t?n[3857]??n[102100]??n[102113]??n[900913]:n[e.wkid];return r?`${R}${r}`:null}function W(e){if(y(e))return"";const{xmin:n,ymin:t,xmax:i,ymax:r}=e;return`${n},${t},${i},${r}`}function oe(e){if(y(e))return null;const{start:n,end:t}=e;return`${k(n)?n.toISOString():".."}/${k(t)?t.toISOString():".."}`}function le(e){return y(e)||!e||e==="1=1"?null:e}function ce(e,n){if(!se(e))return null;const{spatialReference:t}=e;if(!t||t.isWGS84)return{bbox:W(e)};const i=P(t,n);return k(i)?{bbox:W(e),"bbox-crs":i}:t.isWebMercator?{bbox:W(G(e,I.WGS84))}:null}function de(e){var s;const n=(s=e.extent)==null?void 0:s.spatial;if(!n)return null;const t=n.bbox[0],i=t.length===4,r=t[0],l=t[1],d=i?void 0:t[2];return{xmin:r,ymin:l,xmax:i?t[2]:t[3],ymax:i?t[3]:t[4],zmin:d,zmax:i?void 0:t[5],spatialReference:I.WGS84.toJSON()}}function m(e,n,t){return e.find(i=>i.rel===n&&i.type===t)||e.find(i=>i.rel===n&&!i.type)}export{Te as F,je as I,Ne as N,Se as S,ke as T,R as j,xe as k,re as q,ve as v,$e as x};
