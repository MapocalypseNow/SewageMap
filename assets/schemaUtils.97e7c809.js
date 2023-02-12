import{a2 as re,H as A,bA as U,s as d,cB as Q,v as w,bX as me,cO as ge,cP as be,R as D,aw as X,cQ as ie,L as se,cR as xe,cS as he}from"./index.2901469c.js";import{l as B,S as g,r as ve}from"./Utils.1ad8c295.js";import{c as Te}from"./utils.4edbb65b.js";import{l as Se}from"./visualVariablesUtils.c546f7fd.js";import{createSymbolSchema as b}from"./createSymbolSchema.03065359.js";import{t as we}from"./ExpandedCIM.7023f1aa.js";import{a8 as Fe}from"./enums.0295eb81.js";import"./MaterialKey.b21e8ccb.js";import{e as ne}from"./util.dbbaba27.js";function Ee(e){if(!e)return B.NONE;let r=0;for(const i of e)if(i.type==="size"){const t=Se(i);r|=t,i.target==="outline"&&(r|=t<<4)}else i.type==="color"?r|=B.COLOR:i.type==="opacity"?r|=B.OPACITY:i.type==="rotation"&&(r|=B.ROTATION);return r}function Ie(e,r){if(!("visualVariables"in e)||!e.hasVisualVariables("size"))return 0;const i=e.getVisualVariablesForType("size");if(!i[0])return 0;const t=i[0];if(r&&t.field==="cluster_count"&&r.type==="cluster")return r.clusterMaxSize;if(t.target==="outline")return 0;if(t.transformationType==="stops")return t.stops.map(s=>s.size).reduce(k,0);if(t.transformationType==="clamped-linear"){let s=-1/0,n=-1/0;return s=typeof t.maxSize=="number"?t.maxSize:t.maxSize.stops.map(l=>l.size).reduce(k,0),n=typeof t.minSize=="number"?t.minSize:t.minSize.stops.map(l=>l.size).reduce(k,0),Math.max(s,n)}return t.transformationType==="real-world-size"?30:void 0}Fe.metrics,new we(0,0,24,24);function k(e,r){return Math.max(e,r)}const R=8,le=R-2,C=re.getLogger("esri.views.2d.layers.features.support.rendererUtils"),it=e=>{if(!("visualVariables"in e)||!e.visualVariables||!e.visualVariables.length)return e;const r=e.clone(),i=r.visualVariables.map(t=>ae(t)?oe(t):t);return r.visualVariables=i,r};function ze(e){return e.map(r=>ae(r)?oe(r.clone()):r)}function ae(e){return(e.type==="size"||e.type==="color"||e.type==="opacity")&&e.stops!=null}function oe(e){return e.stops=Me(e.type,e.stops),e}function I(e,r,i){return(1-i)*e+i*r}function Ve(e,r){const[i,...t]=r,s=t.pop(),n=t[0].value,l=t[t.length-1].value,u=(l-n)/le,o=[];for(let a=n;a<l;a+=u){let p=0;for(;a>=t[p].value;)p++;const c=t[p],f=r[p-1],F=a-f.value,S=c.value===f.value?1:F/(c.value-f.value);if(e==="color"){const x=t[p],h=r[p-1],m=x.color.clone();m.r=I(h.color.r,m.r,S),m.g=I(h.color.g,m.g,S),m.b=I(h.color.b,m.b,S),m.a=I(h.color.a,m.a,S),o.push({value:a,color:m,label:x.label})}else if(e==="size"){const x=t[p],h=r[p-1],m=Q(x.size),v=I(Q(h.size),m,S);o.push({value:a,size:v,label:x.label})}else{const x=t[p],h=I(r[p-1].opacity,x.opacity,S);o.push({value:a,opacity:h,label:x.label})}}return[i,...o,s]}function Oe(e){const[r,...i]=e,t=i.pop();for(;i.length>le;){let s=0,n=0;for(let l=1;l<i.length;l++){const u=i[l-1],o=i[l],a=Math.abs(o.value-u.value);a>n&&(n=a,s=l)}i.splice(s,1)}return[r,...i,t]}function Me(e,r){return r.length<=R?r:(C.warn(`Found ${r.length} Visual Variable stops, but MapView only supports ${R}. Displayed stops will be simplified.`),r.length>2*R?Ve(e,r):Oe(r))}function G(){if(A("heatmap-force-raster"))return"raster";const{supportsTextureFloat:e,supportsTextureHalfFloat:r,supportsColorBufferFloat:i,supportsColorBufferFloatBlend:t,supportsColorBufferHalfFloat:s}=U("2d");return e&&i&&t||r&&s?"symbol":A("heatmap-allow-raster-fallback")?"raster":"none"}function st(e){if(!e)return!0;switch(e.type){case"dot-density":if(!U("2d").supportsTextureFloat)return C.error(new d("webgl-missing-extension","Missing WebGL extension OES_Texture_Float which is required for DotDensity")),!1;break;case"heatmap":{const r=G();if(r==="none"||r==="raster"&&!A("heatmap-force-raster")){const i=U("2d"),t=["supportsTextureFloat","supportsTextureHalfFloat","supportsColorBufferFloat","supportsColorBufferFloatBlend","supportsColorBufferHalfFloat"].filter(s=>!i[s]).join(", ");if(r==="none")return C.errorOnce(new d("webgl-missing-extension",`Missing WebGL${i.type} requirements for Heatmap: ${t}`)),!1;r==="raster"&&C.warnOnce(`Missing WebGL${i.type} requirements for accelerated Heatmap: ${t}. Feature support may be limited.`)}break}}return!0}const z=re.getLogger("esri.views.2d.layers.features.schemaUtils"),y="ValidationError";function _(e,r){let i=0,t=0,s=g.DEFAULT;if(w(e)){if(t=Ie(e,r),"visualVariables"in e&&(i=Ee(e.visualVariables||[]),e.type==="dot-density"&&(s=g.DOT_DENSITY)),e.type==="heatmap"&&(s=g.HEATMAP),e.type==="dictionary")return{maxVVSize:t,vvFlags:i,symbologyType:g.DEFAULT};if(e.type==="pie-chart")return{maxVVSize:t,vvFlags:i,symbologyType:g.PIE_CHART};if(s!==g.DOT_DENSITY&&s!==g.HEATMAP){const n=e.getSymbols();"backgroundFillSymbol"in e&&e.backgroundFillSymbol&&n.push(e.backgroundFillSymbol);let l=!0,u=!0;for(const o of n)if(o.type==="cim"&&(u=!1),o.type==="simple-fill"||o.type==="picture-fill"){const a=o.outline,p=a&&a.style!=="none"&&a.style!=="solid",c=o.type==="simple-fill"&&o.style!=="none"&&o.style!=="solid",f=o.type==="picture-fill"||c||p;p&&(l=!1),f&&(u=!1)}l?s=u?g.OUTLINE_FILL_SIMPLE:g.OUTLINE_FILL:u&&(s=g.SIMPLE)}}return{vvFlags:i,maxVVSize:t,symbologyType:s}}let Z=null;function nt(e){if(A("esri-2d-update-debug")){const r=ee(e,!0);console.debug("Created new schema",r),console.debug("Schema diff",ge(Z,r)),Z=r}return ee(e)}function ee(e,r=!1){var i,t;try{const s=Be(e,r),n=Ae(e),l={};s.map(a=>Ne(l,e,a));const u=w(e.subtypeCode)?`${e.subtypeField} = ${e.subtypeCode}`:null;return{source:{definitionExpression:be(e.definitionExpression,u),fields:e.fields.map(a=>a.toJSON()),gdbVersion:e.gdbVersion,historicMoment:(i=e.historicMoment)==null?void 0:i.getTime(),outFields:e.availableFields,pixelBuffer:e.pixelBuffer,spatialReference:e.spatialReference.toJSON(),timeExtent:(t=e.timeExtent)==null?void 0:t.toJSON(),customParameters:e.customParameters},attributes:{fields:{},indexCount:0},processors:s,tileRenderer:n,targets:l}}catch(s){if(s.fieldName===y)return z.error(s),null;throw s}}function Ne(e,r,i){switch(i.target){case"feature":return void H(e,P(r),i);case"aggregate":{if(!("featureReduction"in r))return;const t=r.featureReduction;switch(t.type){case"selection":throw new d(y,"Mapview does not support `selection` reduction type",t);case"binning":return H(e,P(r),i),void Le(e,t,r.fields.map(s=>s.toJSON()),i);case"cluster":return H(e,P(r),i),void $e(e,t,r.fields.map(s=>s.toJSON()),i)}}}}function W(e,r){for(const i in r){const t=r[i];if(t.target!==e.name)continue;const s=e.attributes[i];s?(s.context.mesh=s.context.mesh||t.context.mesh,s.context.storage=s.context.storage||t.context.storage):e.attributes[i]=t}return e}function P(e){var r,i,t,s,n;return[(i=(r=D(e.filter))==null?void 0:r.toJSON())!=null?i:null,(n=(s=D((t=D(e.featureEffect))==null?void 0:t.filter))==null?void 0:s.toJSON())!=null?n:null]}function H(e,r,i){return e.feature||(e.feature={name:"feature",input:"source",filters:r,attributes:{}}),W(e.feature,i.attributes.fields),e}function ue(e,r){const{onStatisticExpression:i,onStatisticField:t,statisticType:s}=e;switch(s){case"min":case"max":case"avg":case"avg_angle":case"sum":case"count":return"esriFieldTypeDouble";case"mode":{if(i){const{returnType:l}=i;return l?l==="string"?"esriFieldTypeString":"esriFieldTypeDouble":(z.error(new d(y,"Unable to infer type of aggregateField with onStatisticExpression. ReturnType is not defined",e)),"esriFieldTypeString")}const n=r.find(l=>l.name===t);return n?n.type:(z.error(new d(y,"Unable to infer type of aggregateField with onStatisticExpression. ReturnType is not defined",e)),"esriFieldTypeString")}}}function Le(e,r,i,t){var s;return e.aggregate||(e.aggregate={name:"aggregate",type:"bin",filters:null,input:"feature",params:{fixedBinLevel:r.fixedBinLevel,fields:((s=r.fields)!=null?s:[]).map(n=>({...n.toJSON(),type:ue(n,i)}))},attributes:{}}),W(e.aggregate,t.attributes.fields),e}function $e(e,r,i,t){var s,n;return e.aggregate||(e.aggregate={name:"aggregate",type:"cluster",input:"feature",filters:null,attributes:{},params:{clusterRadius:X(r.clusterRadius/2),clusterPixelBuffer:64*Math.ceil(X(r.clusterMaxSize)/64),fields:(n=(s=r.fields)!=null?s:[])==null?void 0:n.map(l=>({...l.toJSON(),type:ue(l,i)}))}}),W(e.aggregate,t.attributes.fields),e}function T(e,r){return r.field?E(e,{...r,type:"field",field:r.field}):r.valueExpression?E(e,{...r,type:"expression",valueExpression:r.valueExpression}):{field:null,fieldIndex:null}}function E(e,r){switch(r.type){case"expression":{const i=r.valueExpression;if(!e.fields[i]){const t=e.indexCount++;e.fields[i]={...r,name:i,fieldIndex:t}}return{fieldIndex:e.fields[i].fieldIndex}}case"label-expression":{const i=JSON.stringify(r.label);if(!e.fields[i]){const t=e.indexCount++;e.fields[i]={...r,name:i,fieldIndex:t}}return{fieldIndex:e.fields[i].fieldIndex}}case"field":{const i=r.field;return r.target==="aggregate"&&e.fields[i]||(e.fields[i]={...r,name:i}),{field:i}}case"statistic":return e.fields[r.name]={...r},{field:r.name}}}function Be(e,r=!1){const i=new Array;let t=0;return i.push(Ce(e,t++,r)),i}function J(e,r,i,t,s,n=!1){const l=E(e,{type:"label-expression",target:i,context:{mesh:!0},resultType:"string",label:{labelExpression:r.labelExpression,labelExpressionInfo:r.labelExpressionInfo?{expression:r.labelExpressionInfo.expression}:null,symbol:!!r.symbol,where:r.where}}),{fieldIndex:u}=l;return{...b(r,s,n),fieldIndex:u,target:i,index:t}}function Re(e,r,i){var p,c;const t="featureReduction"in r&&r.featureReduction;if(!t)return{fields:[],labels:[],matcher:null,rendererOverride:null};const s="aggregate",n=[];let l=null,u=ne(r.geometryType),o=[],a=null;if(t)switch(t.type){case"selection":return z.error(new d(y,"Mapview does not support `selection` reduction type",t)),{fields:[],labels:[],matcher:null,rendererOverride:null};case"cluster":case"binning":if(n.push(...(p=t.fields)!=null?p:[]),t.type==="cluster"?u="esriGeometryPoint":t.type==="binning"&&(u="esriGeometryPolygon"),t.renderer&&!((c=t.renderer.authoringInfo)!=null&&c.isAutoGenerated)){if(t.type==="cluster"){const{renderer:F}=xe(t.renderer,t,null);a=F}else a=t.renderer;const f=_(t.renderer,t);l=q(null,s,t.renderer,f,i),o=t&&t.labelsVisible&&t.labelingInfo||[]}else if(t.type==="cluster"){if(a=he(n,r.renderer,t,null,!0),t.symbol){const f=_(a,t);l={type:"simple",symbol:b(t.symbol,f,i),symbologyType:f.symbologyType}}o=t&&t.labelsVisible&&t.labelingInfo||[]}}return ke(e,n),{labels:ie(o,t.type==="binning"?"esriGeometryPolygon":u),matcher:l,fields:n,rendererOverride:a}}function Ce(e,r,i=!1){var m;const t={indexCount:0,fields:{}},s="featureReduction"in e&&e.featureReduction,n=s?"aggregate":"feature";if("sublayers"in e){const v={type:"subtype",subtypeField:e.subtypeField,renderers:{},symbologyType:g.DEFAULT},L={type:"subtype",mapping:{},target:"feature"},$={type:"subtype",classes:{}},pe={type:"symbol",target:"feature",aggregateFields:[],attributes:t,storage:L,mesh:{matcher:v,aggregateMatcher:null,labels:$,sortKey:null}},Y=new Set;let fe=0;for(const{renderer:V,subtypeCode:O,labelingInfo:ce,labelsVisible:de}of e.sublayers){const K={symbologyType:g.DEFAULT,vvFlags:0,maxVVSize:0},M=q(t,n,V,K,i),N=te(t,n,V),j=de&&ce;if("visualVariables"in V&&V.visualVariables&&V.visualVariables.length)throw new d(y,"Visual variables are currently not supported for subtype layers");if(M.type==="dictionary")throw new d(y,"Dictionary renderer is not supported in subtype layers");if(M.type==="subtype")throw new d(y,"Nested subtype renderers is not supported");if(w(N)&&N.type==="subtype")throw new d(y,"Nested subtype storage is not supported");if(w(N)&&w(N.attributeMapping))throw new d(y,"Non-visual-variable attributes are not supported in subtype layers");if(M.type==="heatmap")throw new d(y,"Heatmaps are not supported in subtype layers");if(M.type==="pie-chart")throw new d(y,"Pie-charts are not supported in subtype layers");if(Y.has(O))throw new d(y,"Subtype codes for sublayers must be unique");Y.add(O),v.renderers[O]=M,L.mapping[O]=N,j&&($.classes[O]=j.map(ye=>J(t,ye,"feature",fe++,K,i)))}return pe}if(e.renderer.type==="heatmap"&&G()==="raster"){const{radius:v,fieldOffset:L,field:$}=e.renderer;return{type:"heatmap",aggregateFields:[],attributes:t,target:n,storage:null,mesh:{radius:v,fieldOffset:L,field:T(t,{target:n,field:$,resultType:"numeric"}).field}}}const l=Re(t,e,i),u=ne(e.geometryType),o=(m=l.rendererOverride)!=null?m:e.renderer,a=_(o,s),p=q(t,n,o,a,i),c=te(t,n,o),f=De(t,e.orderBy,s),F=e.labelsVisible&&e.labelingInfo||[],S=ie(F,u);let x=0;const h=[...S.map(v=>J(t,v,"feature",x++,a,i)),...l.labels.map(v=>J(t,v,"aggregate",x++,a,i))];return{type:"symbol",target:n,attributes:t,aggregateFields:l.fields,storage:c,mesh:{matcher:p,labels:{type:"simple",classes:h},aggregateMatcher:l.matcher,sortKey:f}}}function Ae(e){var r;return((r=e.renderer)==null?void 0:r.type)==="heatmap"&&G()==="raster"?{type:"heatmap"}:{type:"symbol"}}function De(e,r,i){if(w(i)||se(r)||!r.length)return null;r.length>1&&z.warn(`Layer rendering currently only supports ordering by 1 orderByInfo, but found ${r.length}. All but the first will be discarded`);const t=r[0],s=t.order==="ascending"?"asc":"desc";return t.field?{field:t.field,order:s}:t.valueExpression?{fieldIndex:E(e,{type:"expression",target:"feature",valueExpression:t.valueExpression,resultType:"numeric"}).fieldIndex,order:s}:(z.error(new d(y,"Expected to find a field or valueExpression for OrderByInfo",t)),null)}function ke(e,r){const i={mesh:!0,storage:!0};for(const t of r){const{name:s,onStatisticField:n,onStatisticExpression:l,statisticType:u}=t;let o=null,a=null;const p="numeric",c="feature";l?a=E(e,{type:"expression",target:c,valueExpression:l.expression,resultType:p}).fieldIndex:o=E(e,{type:"field",target:c,field:n,resultType:p}).field,E(e,{type:"statistic",target:"aggregate",name:s,context:i,inField:o,inFieldIndex:a,statisticType:u})}}function te(e,r,i){let t;switch(i.type){case"simple":case"class-breaks":case"unique-value":case"dictionary":t={visualVariables:!0,attributes:null};break;default:t=Te(i).getStorageSpec(i)}return Pe(e,r,t,i)}function Pe(e,r,i,t){if(se(i))return null;const{visualVariables:s,attributes:n}=i;let l=null;s&&"visualVariables"in t&&(l=He(e,r,t.visualVariables));const u=w(l)?4:0;let o=null;return w(n)&&(o=n.map((a,p)=>{const{field:c,fieldIndex:f}=T(e,{valueExpression:a.valueExpression,field:a.field,resultType:"numeric",target:r});return{binding:p+u,field:c,fieldIndex:f}})),{type:"simple",target:r,attributeMapping:o,vvMapping:l}}function He(e,r,i){if(!i||!i.length)return[];const t={storage:!0},s="numeric";return ze(i).map(n=>{var a;const l=ve(n.type),{field:u,fieldIndex:o}=T(e,{target:r,valueExpression:n.valueExpression,field:n.field,context:t,resultType:s});switch(n.type){case"size":return n.valueExpression==="$view.scale"?null:{type:"size",binding:l,field:u,fieldIndex:o,normalizationField:T(e,{target:r,field:n.normalizationField,context:t,resultType:s}).field,valueRepresentation:(a=n.valueRepresentation)!=null?a:null};case"color":return{type:"color",binding:l,field:u,fieldIndex:o,normalizationField:T(e,{target:r,field:n.normalizationField,context:t,resultType:s}).field};case"opacity":return{type:"opacity",binding:l,field:u,fieldIndex:o,normalizationField:T(e,{target:r,field:n.normalizationField,context:t,resultType:s}).field};case"rotation":return{type:"rotation",binding:l,field:u,fieldIndex:o}}}).filter(n=>n)}function q(e,r,i,t,s=!1){const n=me(e,{indexCount:0,fields:{}});switch(i.type){case"simple":case"dot-density":return Je(n,i,t,s);case"class-breaks":return _e(n,r,i,t,s);case"unique-value":return qe(n,r,i,t,s);case"dictionary":return Ge(n,i,t,s);case"heatmap":return We(n,i,t,s);case"pie-chart":return Ue(n,i,t,s)}}function Je(e,r,i,t=!1){const s=r.getSymbols(),n=s.length?s[0]:null;return{type:"simple",symbol:b(n,i,t),symbologyType:i.symbologyType}}function Ue(e,r,i,t=!1){const s=r.getSymbols(),n=s[0],l=s.length>1?s[1]:null;return{type:"pie-chart",markerSymbol:b(n,i,t),fillSymbol:b(l,i,t),symbologyType:i.symbologyType}}function _e(e,r,i,t,s=!1){const n={mesh:!0,use:"renderer.field"},l=i.backgroundFillSymbol,{field:u,fieldIndex:o}=T(e,{target:r,field:i.field,valueExpression:i.valueExpression,resultType:"numeric",context:n}),a=i.normalizationType,p=a==="log"?"esriNormalizeByLog":a==="percent-of-total"?"esriNormalizeByPercentOfTotal":a==="field"?"esriNormalizeByField":null,c=i.classBreakInfos.map(f=>({symbol:b(f.symbol,t,s),min:f.minValue,max:f.maxValue})).sort((f,F)=>f.min-F.min);return{type:"interval",attributes:e.fields,field:u,fieldIndex:o,backgroundFillSymbol:b(l,t,s),defaultSymbol:b(i.defaultSymbol,t,s),intervals:c,normalizationField:i.normalizationField,normalizationTotal:i.normalizationTotal,normalizationType:p,isMaxInclusive:i.isMaxInclusive,symbologyType:t.symbologyType}}function qe(e,r,i,t,s=!1){const n=[],l=i.backgroundFillSymbol,u={target:r,context:{mesh:!0},resultType:"string"};if(i.field&&typeof i.field!="string")throw new d(y,"Expected renderer.field to be a string",i);const{field:o,fieldIndex:a}=T(e,{...u,field:i.field,valueExpression:i.valueExpression});for(const p of i.uniqueValueInfos)n.push({value:""+p.value,symbol:b(p.symbol,t,s)});return{type:"map",attributes:e.fields,field:o,fieldIndex:a,field2:T(e,{...u,field:i.field2}).field,field3:T(e,{...u,field:i.field3}).field,fieldDelimiter:i.fieldDelimiter,backgroundFillSymbol:b(l,t),defaultSymbol:b(i.defaultSymbol,t),map:n,symbologyType:t.symbologyType}}function Ge(e,r,i,t=!1){return{type:"dictionary",config:r.config,fieldMap:r.fieldMap,scaleExpression:r.scaleExpression,url:r.url,symbolOptions:i,symbologyType:i.symbologyType}}function We(e,r,i,t=!1){const s=r.getSymbols(),n=s.length?s[0]:null;return{type:"heatmap",symbol:b(n,i,t),symbologyType:i.symbologyType}}export{q as $,nt as F,st as h,it as n,_ as w};