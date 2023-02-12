import{U as h,i8 as L,s as m,i9 as j,dM as P,ia as $,ib as x,u as A,k as C,w as V,cv as W,fJ as b,ct as X,e1 as z,E as Y,e8 as d,ic as _,r as k}from"./index.js";import{s as q}from"./geojson.js";import{o as F,n as T}from"./xmlUtils.js";function H(n){var t;return(t=Q(n))!=null?t:J(n)}function J(n){const t=new Date(n).getTime();return Number.isNaN(t)?null:t}function Q(n){var y,f,E,N;const t=B.exec(n);if(!(t!=null&&t.groups))return null;const e=t.groups,a=+e.year,r=+e.month-1,s=+e.day,o=+((y=e.hours)!=null?y:"0"),i=+((f=e.minutes)!=null?f:"0"),u=+((E=e.seconds)!=null?E:"0");if(o>23||i>59||u>59)return null;const p=(N=e.ms)!=null?N:"0",c=p?+p.padEnd(3,"0").substring(0,3):0;let l;if(e.isUTC)l=Date.UTC(a,r,s,o,i,u,c);else if(e.offsetSign){const I=+e.offsetHours,O=+e.offsetMinutes;l=6e4*(e.offsetSign==="+"?-1:1)*(60*I+O)+Date.UTC(a,r,s,o,i,u,c)}else l=new Date(a,r,s,o,i,u,c).getTime();return Number.isNaN(l)?null:l}const B=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/,S="xlink:href",g="2.0.0",v="__esri_wfs_id__",K="wfs-layer:getWFSLayerTypeInfo-error",Z="wfs-layer:empty-service",G="wfs-layer:feature-type-not-found",ee="wfs-layer:geojson-not-supported",te="wfs-layer:kvp-encoding-not-supported",ne="wfs-layer:malformed-json",R="wfs-layer:unknown-geometry-type",ae="wfs-layer:unknown-field-type",re="wfs-layer:unsupported-spatial-reference",se="wfs-layer:unsupported-wfs-version";async function Ne(n,t){const e=oe((await h(n,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:g,...t==null?void 0:t.customParameters},signal:t==null?void 0:t.signal})).data);return pe(n,e),e}function oe(n){const t=U(n);Se(t),M(t);const e=t.firstElementChild,a=L(ce(e));return{operations:ue(e),get featureTypes(){return Array.from(a())},readFeatureTypes:a}}const ie=new Set(["json","application/json","geojson","application/json; subtype=geojson"]);function ue(n){let t=!1;const e={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}};if(F(n,{OperationsMetadata:{Operation:a=>{switch(a.getAttribute("name")){case"GetCapabilities":return{DCP:{HTTP:{Get:r=>{e.GetCapabilities.url=r.getAttribute(S)}}}};case"DescribeFeatureType":return{DCP:{HTTP:{Get:r=>{e.DescribeFeatureType.url=r.getAttribute(S)}}}};case"GetFeature":return{DCP:{HTTP:{Get:r=>{e.GetFeature.url=r.getAttribute(S)}}},Parameter:r=>{if(r.getAttribute("name")==="outputFormat")return{AllowedValues:{Value:s=>{const o=s.textContent;o&&ie.has(o.toLowerCase())&&(e.GetFeature.outputFormat=o)}}}}}}},Constraint:a=>{switch(a.getAttribute("name")){case"KVPEncoding":return{DefaultValue:r=>{t=r.textContent.toLowerCase()==="true"}};case"ImplementsResultPaging":return{DefaultValue:r=>{e.GetFeature.supportsPagination=r.textContent.toLowerCase()==="true"}}}}}}),!t)throw new m(te,"WFS service doesn't support key/value pair (KVP) encoding");if(C(e.GetFeature.outputFormat))throw new m(ee,"WFS service doesn't support GeoJSON output format");return e}function pe(n,t){j(n)&&(P(n,t.operations.DescribeFeatureType.url,!0)&&(t.operations.DescribeFeatureType.url=$(t.operations.DescribeFeatureType.url)),P(n,t.operations.GetFeature.url,!0)&&(t.operations.GetFeature.url=$(t.operations.GetFeature.url)))}function ce(n){return T(n,{FeatureTypeList:{FeatureType:t=>{const e={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",supportedSpatialReferences:[]},a=new Set([4326]),r=s=>{var i,u,p,c;const o=parseInt((c=(p=(u=(i=s.textContent)==null?void 0:i.match(/(?<wkid>\d+$)/i))==null?void 0:u.groups)==null?void 0:p.wkid)!=null?c:"",10);Number.isNaN(o)||a.add(o)};return F(t,{Name:s=>{const{name:o,prefix:i}=w(s.textContent);e.typeName=`${i}:${o}`,e.name=o,e.namespacePrefix=i,e.namespaceUri=s.lookupNamespaceURI(i)},Abstract:s=>{e.description=s.textContent},Title:s=>{e.title=s.textContent},WGS84BoundingBox:s=>{e.extent=le(s)},DefaultSRS:r,DefaultCRS:r,OtherSRS:r,OtherCRS:r}),e.title||(e.title=e.name),e.supportedSpatialReferences.push(...a),e}}})}function le(n){let t,e,a,r;for(const s of n.children)switch(s.localName){case"LowerCorner":[t,e]=s.textContent.split(" ").map(o=>Number.parseFloat(o));break;case"UpperCorner":[a,r]=s.textContent.split(" ").map(o=>Number.parseFloat(o))}return{xmin:t,ymin:e,xmax:a,ymax:r,spatialReference:b}}function me(n,t,e){return x(n,a=>e?a.name===t&&a.namespaceUri===e:a.typeName===t||a.name===t)}async function Pe(n,t,e,a={}){var l;const{featureType:r,extent:s}=await ye(n,t,e,a),{fields:o,geometryType:i,swapXY:u,objectIdField:p,geometryField:c}=await fe(n,r.typeName,a);return{url:n.operations.GetCapabilities.url,name:r.name,namespaceUri:r.namespaceUri,fields:o,geometryField:c,geometryType:i,objectIdField:p,spatialReference:(l=a.spatialReference)!=null?l:A.WGS84,extent:s,swapXY:u,wfsCapabilities:n,customParameters:a.customParameters}}async function ye(n,t,e,a={}){const{spatialReference:r=A.WGS84}=a,s=n.readFeatureTypes(),o=t?me(s,t,e):s.next().value;if(C(o))throw t?new m(G,`The type '${t}' could not be found in the service`):new m(Z,"The service is empty");let i=new V({...o.extent,spatialReference:r});if(!W(r,b))try{await X(b,r,void 0,a),i=z(i,b)}catch{throw new m(re,"Projection not supported")}return{extent:i,spatialReference:r,featureType:o}}async function fe(n,t,e={}){var p,c,l,y,f;const[a,r]=await Y([we(n.operations.DescribeFeatureType.url,t,e),ge(n,t,e)]);if(a.error||r.error)throw new m(K,`An error occurred while getting info about the feature type '${t}'`,{error:a.error||r.error});const{fields:s,errors:o}=(p=a.value)!=null?p:{},i=((c=a.value)==null?void 0:c.geometryType)||((l=r.value)==null?void 0:l.geometryType),u=(f=(y=r.value)==null?void 0:y.swapXY)!=null?f:!1;if(C(i))throw new m(R,`The geometry type could not be determined for type '${t}`,{typeName:t,geometryType:i,fields:s,errors:o});return{...de(s!=null?s:[]),geometryType:i,swapXY:u}}function de(n){var a;const t=n.find(r=>r.type==="geometry");let e=n.find(r=>r.type==="oid");return n=n.filter(r=>r.type!=="geometry"),e||(e=new d({name:v,type:"oid",alias:v}),n.unshift(e)),{geometryField:(a=t==null?void 0:t.name)!=null?a:null,objectIdField:e.name,fields:n}}async function ge(n,t,e={}){var u;let a,r=!1;const[s,o]=await Promise.all([Fe(n.operations.GetFeature.url,t,n.operations.GetFeature.outputFormat,{...e,count:1}),h(n.operations.GetFeature.url,{responseType:"text",query:D(t,void 0,{...e,count:1}),signal:e==null?void 0:e.signal})]),i=s.type==="FeatureCollection"&&((u=s.features[0])==null?void 0:u.geometry);if(i){let p;switch(a=_.fromJSON(q(i.type)),i.type){case"Point":p=i.coordinates;break;case"LineString":case"MultiPoint":p=i.coordinates[0];break;case"MultiLineString":case"Polygon":p=i.coordinates[0][0];break;case"MultiPolygon":p=i.coordinates[0][0][0]}const c=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(o.data);if(c){const l=p[0].toFixed(3),y=p[1].toFixed(3),f=parseFloat(c[1]).toFixed(3);l===parseFloat(c[2]).toFixed(3)&&y===f&&(r=!0)}}return{geometryType:a,swapXY:r}}async function we(n,t,e){return be(t,(await h(n,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:g,TYPENAME:t,...e==null?void 0:e.customParameters},signal:e==null?void 0:e.signal})).data)}function be(n,t){const{name:e}=w(n),a=U(t);M(a);const r=x(T(a.firstElementChild,{element:s=>({name:s.getAttribute("name"),typeName:w(s.getAttribute("type")).name})}),({name:s})=>s===e);if(k(r)){const s=x(T(a.firstElementChild,{complexType:o=>o}),o=>o.getAttribute("name")===r.typeName);if(k(s))return he(s)}throw new m(G,`Type '${n}' not found in document`,{document:new XMLSerializer().serializeToString(a)})}const Te=new Set(["objectid","fid"]);function he(n){const t=[],e=[];let a;const r=T(n,{complexContent:{extension:{sequence:{element:s=>s}}}});for(const s of r){const o=s.getAttribute("name");if(!o)continue;let i,u;if(s.hasAttribute("type")?i=w(s.getAttribute("type")).name:F(s,{simpleType:{restriction:l=>(i=w(l.getAttribute("base")).name,{maxLength:y=>{u=+y.getAttribute("value")}})}}),!i)continue;const p=s.getAttribute("nillable")==="true";let c=!1;switch(i.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":e.push(new d({name:o,alias:o,type:"integer",nullable:p}));break;case"float":case"double":case"decimal":e.push(new d({name:o,alias:o,type:"double",nullable:p}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":e.push(new d({name:o,alias:o,type:"string",nullable:p,length:u!=null?u:255}));break;case"datetime":case"date":e.push(new d({name:o,alias:o,type:"date",nullable:p,length:u!=null?u:36}));break;case"pointpropertytype":a="point",c=!0;break;case"multipointpropertytype":a="multipoint",c=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":a="polyline",c=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":a="polygon",c=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":c=!0,t.push(new m(R,`geometry type '${i}' is not supported`,{type:new XMLSerializer().serializeToString(n)}));break;default:t.push(new m(ae,`Unknown field type '${i}'`,{type:new XMLSerializer().serializeToString(n)}))}c&&e.push(new d({name:o,alias:o,type:"geometry",nullable:p}))}for(const s of e)if(s.type==="integer"&&!s.nullable&&Te.has(s.name.toLowerCase())){s.type="oid";break}return{geometryType:a,fields:e,errors:t}}async function Fe(n,t,e,a){var s;let{data:r}=await h(n,{responseType:"text",query:D(t,e,a),signal:a==null?void 0:a.signal});r=r.replace(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3');try{if((s=a==null?void 0:a.dateFields)!=null&&s.length){const o=new Set(a.dateFields);return JSON.parse(r,(i,u)=>o.has(i)?H(u):u)}return JSON.parse(r)}catch(o){throw new m(ne,"Error while parsing the\xA0response",{response:r,error:o})}}function D(n,t,e){return{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:g,TYPENAMES:n,OUTPUTFORMAT:t,SRSNAME:"EPSG:4326",STARTINDEX:e==null?void 0:e.startIndex,COUNT:e==null?void 0:e.count,...e==null?void 0:e.customParameters}}function U(n){return new DOMParser().parseFromString(n.trim(),"text/xml")}function w(n){const[t,e]=n.split(":");return{prefix:e?t:"",name:e!=null?e:t}}function Se(n){var e;const t=(e=n.firstElementChild)==null?void 0:e.getAttribute("version");if(t&&t!==g)throw new m(se,`Unsupported WFS version ${t}. Supported version: ${g}`)}function M(n){let t="",e="";if(F(n.firstElementChild,{Exception:a=>(t=a.getAttribute("exceptionCode"),{ExceptionText:r=>{e=r.textContent}})}),t)throw new m(`wfs-layer:${t}`,e)}export{v as C,Ne as D,Fe as K,me as W,Pe as X,de as z};
