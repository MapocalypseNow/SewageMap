import{a2 as le,h as P,bQ as _,A as c,dc as te,r as v,c9 as xe,ds as ve,q as A,dt as he,aJ as re,du as ae,l as Te,dv as Fe,dw as Se}from"./vendor.f8a4aecc.js";import{L as R,S as g,V as we}from"./color.1638605e.js";import{c as Ee}from"./utils.370c18a5.js";import{l as Ie}from"./visualVariablesUtils.fe2e172f.js";import{createSymbolSchema as b}from"./createSymbolSchema.11788a82.js";import{t as Ve}from"./ExpandedCIM.4718187a.js";import{u as ze}from"./definitions.1d569ae6.js";import"./MaterialKey.04e0f9bd.js";import{e as oe}from"./util.05d7e1cf.js";function ue(e){if(!e)return R.NONE;let r=0;for(const i of e)if(i.type==="size"){const t=Ie(i);r|=t,i.target==="outline"&&(r|=t<<4)}else i.type==="color"?r|=R.COLOR:i.type==="opacity"?r|=R.OPACITY:i.type==="rotation"&&(r|=R.ROTATION);return r}function Oe(e,r){if(!("visualVariables"in e)||!e.hasVisualVariables("size"))return 0;const i=e.getVisualVariablesForType("size");if(!i[0])return 0;const t=i[0];if(r&&t.field==="cluster_count"&&r.type==="cluster")return r.clusterMaxSize;if(t.target==="outline")return 0;if(t.transformationType==="stops")return t.stops.map(s=>s.size).reduce(J,0);if(t.transformationType==="clamped-linear"){let s=-1/0,n=-1/0;return s=typeof t.maxSize=="number"?t.maxSize:t.maxSize.stops.map(l=>l.size).reduce(J,0),n=typeof t.minSize=="number"?t.minSize:t.minSize.stops.map(l=>l.size).reduce(J,0),Math.max(s,n)}return t.transformationType==="real-world-size"?30:void 0}ze.metrics,new Ve(0,0,24,24);function J(e,r){return Math.max(e,r)}const D=8,pe=D-2,k=le.getLogger("esri.views.2d.layers.features.support.rendererUtils"),lt=e=>{if(!("visualVariables"in e)||!e.visualVariables||!e.visualVariables.length)return e;const r=e.clone(),i=r.visualVariables.map(t=>fe(t)?de(t):t);return r.visualVariables=i,r};function Me(e){return e.map(r=>fe(r)?de(r.clone()):r)}function fe(e){return(e.type==="size"||e.type==="color"||e.type==="opacity")&&e.stops!=null}function de(e){var r;return e.stops=Be(e.type,(r=e.stops)!=null?r:[]),e}function z(e,r,i){return(1-i)*e+i*r}function Le(e,r){const[i,...t]=r,s=t.pop(),n=t[0].value,l=t[t.length-1].value,u=(l-n)/pe,o=[];for(let a=n;a<l;a+=u){let p=0;for(;a>=t[p].value;)p++;const d=t[p],f=r[p-1],w=a-f.value,F=d.value===f.value?1:w/(d.value-f.value);if(e==="color"){const x=t[p],h=r[p-1],y=x.color.clone();y.r=z(h.color.r,y.r,F),y.g=z(h.color.g,y.g,F),y.b=z(h.color.b,y.b,F),y.a=z(h.color.a,y.a,F),o.push({value:a,color:y,label:x.label})}else if(e==="size"){const x=t[p],h=r[p-1],y=te(x.size),B=z(te(h.size),y,F);o.push({value:a,size:B,label:x.label})}else{const x=t[p],h=z(r[p-1].opacity,x.opacity,F);o.push({value:a,opacity:h,label:x.label})}}return[i,...o,s]}function Ne(e){const[r,...i]=e,t=i.pop();for(;i.length>pe;){let s=0,n=0;for(let l=1;l<i.length;l++){const u=i[l-1],o=i[l],a=Math.abs(o.value-u.value);a>n&&(n=a,s=l)}i.splice(s,1)}return[r,...i,t]}function Be(e,r){return r.length<=D?r:(k.warn(`Found ${r.length} Visual Variable stops, but MapView only supports ${D}. Displayed stops will be simplified.`),r.length>2*D?Le(e,r):Ne(r))}function Y(){if(P("heatmap-force-raster"))return"raster";const{supportsTextureFloat:e,supportsTextureHalfFloat:r,supportsColorBufferFloat:i,supportsColorBufferFloatBlend:t,supportsColorBufferHalfFloat:s}=_("2d");return e&&i&&t||r&&s?"symbol":P("heatmap-allow-raster-fallback")?"raster":"none"}function at(e){if(!e)return!0;switch(e.type){case"dot-density":if(!_("2d").supportsTextureFloat)return k.error(new c("webgl-missing-extension","Missing WebGL extension OES_Texture_Float which is required for DotDensity")),!1;break;case"heatmap":{const r=Y();if(r==="none"||r==="raster"&&!P("heatmap-force-raster")){const i=_("2d"),t=["supportsTextureFloat","supportsTextureHalfFloat","supportsColorBufferFloat","supportsColorBufferFloatBlend","supportsColorBufferHalfFloat"].filter(s=>!i[s]).join(", ");if(r==="none")return k.errorOnce(new c("webgl-missing-extension",`Missing WebGL${i.type} requirements for Heatmap: ${t}`)),!1;r==="raster"&&k.warnOnce(`Missing WebGL${i.type} requirements for accelerated Heatmap: ${t}. Feature support may be limited.`)}break}}return!0}const I=le.getLogger("esri.views.2d.layers.features.schemaUtils"),m="ValidationError";function G(e,r){let i=0,t=0,s=g.DEFAULT;if(v(e)){if(t=Oe(e,r),"visualVariables"in e&&(i=ue(e.visualVariables||[]),e.type==="dot-density"&&(s=g.DOT_DENSITY)),e.type==="heatmap"&&(s=g.HEATMAP),e.type==="dictionary")return{maxVVSize:t,vvFlags:i,symbologyType:g.DEFAULT};if(e.type==="pie-chart")return{maxVVSize:t,vvFlags:i,symbologyType:g.PIE_CHART};if(s!==g.DOT_DENSITY&&s!==g.HEATMAP){const n=e.getSymbols();"backgroundFillSymbol"in e&&e.backgroundFillSymbol&&n.push(e.backgroundFillSymbol);let l=!0,u=!0;for(const o of n)if(o.type==="cim"&&(u=!1),o.type==="simple-fill"||o.type==="picture-fill"){const a=o.outline,p=a&&a.style!=="none"&&a.style!=="solid",d=o.type==="simple-fill"&&o.style!=="none"&&o.style!=="solid";p&&(l=!1),(o.type==="picture-fill"||d||p)&&(u=!1)}l?s=u?g.OUTLINE_FILL_SIMPLE:g.OUTLINE_FILL:u&&(s=g.SIMPLE)}}return{vvFlags:i,maxVVSize:t,symbologyType:s}}let ie=null;function ot(e){if(P("esri-2d-update-debug")){const r=se(e,!0);console.debug("Created new schema",r),console.debug("Schema diff",ve(ie,r)),ie=r}return se(e)}function se(e,r=!1){var i,t;try{const s=Ae(e,r),n=Pe(e),l={};s.map(a=>$e(l,e,a));const u=v(e.subtypeCode)?`${e.subtypeField} = ${e.subtypeCode}`:null;return{source:{definitionExpression:A(he(e.definitionExpression,u)),fields:e.fields.map(a=>a.toJSON()),gdbVersion:e.gdbVersion,historicMoment:(i=e.historicMoment)==null?void 0:i.getTime(),outFields:e.availableFields,pixelBuffer:e.pixelBuffer,spatialReference:e.spatialReference.toJSON(),timeExtent:(t=e.timeExtent)==null?void 0:t.toJSON(),customParameters:e.customParameters},attributes:{fields:{},indexCount:0},processors:s,tileRenderer:n,targets:l}}catch(s){if(s.fieldName===m)return I.error(s),null;throw s}}function $e(e,r,i){switch(i.target){case"feature":return void H(e,q(r),i);case"aggregate":{if(!("featureReduction"in r))return;const t=r.featureReduction;switch(t==null?void 0:t.type){case"selection":throw new c(m,"Mapview does not support `selection` reduction type",t);case"binning":return H(e,q(r),i),void Ce(e,t,r.fields.map(s=>s.toJSON()),i);case"cluster":return H(e,q(r),i),void Re(e,t,r.fields.map(s=>s.toJSON()),i)}}}}function K(e,r){var i,t;for(const s in r){const n=r[s];if(n.target!==e.name)continue;const l=e.attributes[s];if(l!=null&&l.context){const u=l.context;u.mesh=u.mesh||((i=n.context)==null?void 0:i.mesh),u.storage=u.storage||((t=n.context)==null?void 0:t.storage)}else e.attributes[s]=n}return e}function q(e){var r,i,t,s,n;return[(i=(r=A(e.filter))==null?void 0:r.toJSON())!=null?i:null,(n=(s=A((t=A(e.featureEffect))==null?void 0:t.filter))==null?void 0:s.toJSON())!=null?n:null]}function H(e,r,i){return e.feature||(e.feature={name:"feature",input:"source",filters:r,attributes:{}}),K(e.feature,i.attributes.fields),e}function ce(e,r){const{onStatisticExpression:i,onStatisticField:t,statisticType:s}=e;switch(s){case"min":case"max":case"avg":case"avg_angle":case"sum":case"count":return"esriFieldTypeDouble";case"mode":{if(i){const{returnType:l}=i;return l?l==="string"?"esriFieldTypeString":"esriFieldTypeDouble":(I.error(new c(m,"Unable to infer type of aggregateField with onStatisticExpression. ReturnType is not defined",e)),"esriFieldTypeString")}const n=r.find(l=>l.name===t);return n?n.type:(I.error(new c(m,"Unable to infer type of aggregateField with onStatisticExpression. ReturnType is not defined",e)),"esriFieldTypeString")}}}function Ce(e,r,i,t){var s;return e.aggregate||(e.aggregate={name:"aggregate",type:"bin",filters:null,input:"feature",params:{fixedBinLevel:r.fixedBinLevel,fields:((s=r.fields)!=null?s:[]).map(n=>({...n.toJSON(),type:ce(n,i)}))},attributes:{}}),K(e.aggregate,t.attributes.fields),e}function Re(e,r,i,t){var s,n;return e.aggregate||(e.aggregate={name:"aggregate",type:"cluster",input:"feature",filters:null,attributes:{},params:{clusterRadius:re(r.clusterRadius/2),clusterPixelBuffer:64*Math.ceil(re(r.clusterMaxSize)/64),fields:(n=(s=r.fields)!=null?s:[])==null?void 0:n.map(l=>({...l.toJSON(),type:ce(l,i)}))}}),K(e.aggregate,t.attributes.fields),e}function T(e,r){return r.field?E(e,{...r,type:"field",field:r.field}):r.valueExpression?E(e,{...r,type:"expression",valueExpression:r.valueExpression}):{field:void 0,fieldIndex:void 0}}function E(e,r){switch(r.type){case"expression":{const i=r.valueExpression;if(!e.fields[i]){const t=e.indexCount++;e.fields[i]={...r,name:i,fieldIndex:t}}return{fieldIndex:e.fields[i].fieldIndex}}case"label-expression":{const i=JSON.stringify(r.label);if(!e.fields[i]){const t=e.indexCount++;e.fields[i]={...r,name:i,fieldIndex:t}}return{fieldIndex:e.fields[i].fieldIndex}}case"field":{const i=r.field;return r.target==="aggregate"&&e.fields[i]||(e.fields[i]={...r,name:i}),{field:i}}case"statistic":return e.fields[r.name]={...r},{field:r.name}}}function Ae(e,r=!1){const i=new Array;let t=0;return i.push(ke(e,t++,r)),i}function U(e,r,i,t,s,n=!1){const l=E(e,{type:"label-expression",target:i,context:{mesh:!0},resultType:"string",label:{labelExpression:r.labelExpression,labelExpressionInfo:r.labelExpressionInfo?{expression:r.labelExpressionInfo.expression}:null,symbol:!!r.symbol,where:r.where}}),{fieldIndex:u}=l;return{...b(r,s,n),fieldIndex:u,target:i,index:t}}function De(e,r,i){var p,d;const t="featureReduction"in r&&r.featureReduction;if(!t)return{fields:[],labels:[],matcher:void 0,rendererOverride:void 0};const s="aggregate",n=[];let l=null,u=oe(r.geometryType),o=[],a=null;if(t)switch(t.type){case"selection":return I.error(new c(m,"Mapview does not support `selection` reduction type",t)),{fields:[],labels:[],matcher:void 0,rendererOverride:void 0};case"cluster":case"binning":if(n.push(...(p=t.fields)!=null?p:[]),t.type==="cluster"?u="esriGeometryPoint":t.type==="binning"&&(u="esriGeometryPolygon"),t.renderer&&!((d=t.renderer.authoringInfo)!=null&&d.isAutoGenerated)){if(t.type==="cluster"){const{renderer:w}=Fe(t.renderer,t,null);a=w}else a=t.renderer;const f=G(t.renderer,t);l=W(e,s,t.renderer,f,i),o=t&&t.labelsVisible&&t.labelingInfo||[]}else if(t.type==="cluster"){if(a=Se(n,r.renderer,t,null,!0),t.symbol){const f=G(a,t);l={type:"simple",symbol:b(t.symbol,f,i),symbologyType:f.symbologyType}}o=t&&t.labelsVisible&&t.labelingInfo||[]}}return qe(e,n),{labels:ae(o,t.type==="binning"?"esriGeometryPolygon":u),matcher:l,fields:n,rendererOverride:a}}function ke(e,r,i=!1){var y,B,j;const t={indexCount:0,fields:{}},s="featureReduction"in e&&(y=e.featureReduction)!=null?y:void 0,n=s?"aggregate":"feature";if("sublayers"in e){const S={type:"subtype",subtypeField:e.subtypeField,renderers:{},symbologyType:g.DEFAULT},$={type:"subtype",mapping:{},target:"feature",subtypeField:e.subtypeField},C={type:"subtype",classes:{}},ye={type:"symbol",target:"feature",aggregateFields:[],attributes:t,storage:$,mesh:{matcher:S,aggregateMatcher:null,labels:C,sortKey:null}},Q=new Set;let me=0;for(const{renderer:V,subtypeCode:O,labelingInfo:ge,labelsVisible:be}of e.sublayers){let X=0;"visualVariables"in V&&V.visualVariables&&(V.visualVariables.some(N=>N.type!=="rotation")&&I.warnOnce("SubtypeGroupLayer currently only supports rotation visualVariables. All other visualVariable types will be ignored."),X=ue(V.visualVariables.filter(N=>N.type!=="size")));const Z={symbologyType:g.DEFAULT,vvFlags:X,maxVVSize:0},M=W(t,n,V,Z,i),L=ne(t,n,V),ee=be&&ge;if(M.type==="dictionary")throw new c(m,"Dictionary renderer is not supported in subtype layers");if(M.type==="subtype")throw new c(m,"Nested subtype renderers is not supported");if(v(L)&&L.type==="subtype")throw new c(m,"Nested subtype storage is not supported");if(v(L)&&v(L.attributeMapping))throw new c(m,"Non-visual-variable attributes are not supported in subtype layers");if(M.type==="heatmap")throw new c(m,"Heatmaps are not supported in subtype layers");if(M.type==="pie-chart")throw new c(m,"Pie-charts are not supported in subtype layers");if(Q.has(O))throw new c(m,"Subtype codes for sublayers must be unique");Q.add(O),S.renderers[O]=M,$.mapping[O]=L,ee&&(C.classes[O]=ee.map(N=>U(t,N,"feature",me++,Z,i)))}return ye}if(((B=e.renderer)==null?void 0:B.type)==="heatmap"&&Y()==="raster"){const{radius:S,fieldOffset:$,field:C}=e.renderer;return{type:"heatmap",aggregateFields:[],attributes:t,target:n,storage:null,mesh:{radius:S,fieldOffset:$,field:T(t,{target:n,field:C,resultType:"numeric"}).field}}}const l=De(t,e,i),u=oe(e.geometryType),o=(j=l.rendererOverride)!=null?j:e.renderer,a=G(o,s),p=W(t,n,o,a,i),d=ne(t,n,o),f=Je(t,e.orderBy,e.renderer,s),w=e.labelsVisible&&e.labelingInfo||[],F=ae(w,u);let x=0;const h=[...F.map(S=>U(t,S,"feature",x++,a,i)),...l.labels.map(S=>U(t,S,"aggregate",x++,a,i))];return{type:"symbol",target:n,attributes:t,aggregateFields:l.fields,storage:d,mesh:{matcher:p,labels:{type:"simple",classes:h},aggregateMatcher:l.matcher,sortKey:f}}}function Pe(e){var r;return((r=e.renderer)==null?void 0:r.type)==="heatmap"&&Y()==="raster"?{type:"heatmap"}:{type:"symbol"}}function Je(e,r,i,t){if(v(t))return null;if(v(r)&&r.length){r.length>1&&I.warn(`Layer rendering currently only supports ordering by 1 orderByInfo, but found ${r.length}. All but the first will be discarded`);const s=r[0],n=s.order==="ascending"?"asc":"desc";return s.field?{field:s.field,order:n}:s.valueExpression?{fieldIndex:E(e,{type:"expression",target:"feature",valueExpression:s.valueExpression,resultType:"numeric"}).fieldIndex,order:n}:(I.error(new c(m,"Expected to find a field or valueExpression for OrderByInfo",s)),null)}return v(i)&&i.type==="unique-value"&&i.orderByClassesEnabled?{byRenderer:!0,order:"asc"}:null}function qe(e,r){const i={mesh:!0,storage:!0};for(const t of r){const{name:s,onStatisticField:n,onStatisticExpression:l,statisticType:u}=t;let o,a;const p="numeric",d="feature";l?a=E(e,{type:"expression",target:d,valueExpression:l.expression,resultType:p}).fieldIndex:o=E(e,{type:"field",target:d,field:n,resultType:p}).field,E(e,{type:"statistic",target:"aggregate",name:s,context:i,inField:o,inFieldIndex:a,statisticType:u})}}function ne(e,r,i){let t;switch(i.type){case"simple":case"class-breaks":case"unique-value":case"dictionary":t={visualVariables:!0,attributes:null};break;default:t=Ee(i).getStorageSpec(i)}return He(e,r,t,i)}function He(e,r,i,t){if(Te(i))return null;const{visualVariables:s,attributes:n}=i;let l=null;s&&"visualVariables"in t&&(l=Ue(e,r,t.visualVariables));const u=v(l)?4:0;let o=null;return v(n)&&(o=n.map((a,p)=>{const{field:d,fieldIndex:f}=T(e,{valueExpression:a.valueExpression,field:a.field,resultType:"numeric",target:r});return{binding:p+u,field:d,fieldIndex:f}})),{type:"simple",target:r,attributeMapping:o,vvMapping:l}}function Ue(e,r,i){if(!i||!i.length)return[];const t={storage:!0},s="numeric";return Me(i).map(n=>{var a;const l=we(n.type),{field:u,fieldIndex:o}=T(e,{target:r,valueExpression:n.valueExpression,field:n.field,context:t,resultType:s});switch(n.type){case"size":return n.valueExpression==="$view.scale"?null:{type:"size",binding:l,field:u,fieldIndex:o,normalizationField:T(e,{target:r,field:n.normalizationField,context:t,resultType:s}).field,valueRepresentation:(a=n.valueRepresentation)!=null?a:null};case"color":return{type:"color",binding:l,field:u,fieldIndex:o,normalizationField:T(e,{target:r,field:n.normalizationField,context:t,resultType:s}).field};case"opacity":return{type:"opacity",binding:l,field:u,fieldIndex:o,normalizationField:T(e,{target:r,field:n.normalizationField,context:t,resultType:s}).field};case"rotation":return{type:"rotation",binding:l,field:u,fieldIndex:o}}}).filter(v)}function W(e,r,i,t,s=!1){const n=xe(e,{indexCount:0,fields:{}});switch(i.type){case"simple":case"dot-density":return _e(n,i,t,s);case"class-breaks":return We(n,r,i,t,s);case"unique-value":return Ye(n,r,i,t,s);case"dictionary":return Ke(n,i,t,s);case"heatmap":return je(n,i,t,s);case"pie-chart":return Ge(n,i,t,s)}}function _e(e,r,i,t=!1){const s=r.getSymbols(),n=s.length?s[0]:null;return{type:"simple",symbol:b(n,i,t),symbologyType:i.symbologyType}}function Ge(e,r,i,t=!1){const s=r.getSymbols(),n=s[0],l=s.length>1?s[1]:null;return{type:"pie-chart",markerSymbol:b(n,i,t),fillSymbol:b(l,i,t),symbologyType:i.symbologyType}}function We(e,r,i,t,s=!1){const n={mesh:!0,use:"renderer.field"},l=i.backgroundFillSymbol,{field:u,fieldIndex:o}=T(e,{target:r,field:i.field,valueExpression:i.valueExpression,resultType:"numeric",context:n}),a=i.normalizationType,p=a==="log"?"esriNormalizeByLog":a==="percent-of-total"?"esriNormalizeByPercentOfTotal":a==="field"?"esriNormalizeByField":null,d=i.classBreakInfos.map(f=>({symbol:b(f.symbol,t,s),min:f.minValue,max:f.maxValue})).sort((f,w)=>f.min-w.min);return{type:"interval",attributes:e.fields,field:u,fieldIndex:o,backgroundFillSymbol:b(l,t,s),defaultSymbol:b(i.defaultSymbol,t,s),intervals:d,normalizationField:i.normalizationField,normalizationTotal:i.normalizationTotal,normalizationType:p,isMaxInclusive:i.isMaxInclusive,symbologyType:t.symbologyType}}function Ye(e,r,i,t,s=!1){var p,d;const n=[],l=i.backgroundFillSymbol,u={target:r,context:{mesh:!0},resultType:"string"};if(i.field&&typeof i.field!="string")throw new c(m,"Expected renderer.field to be a string",i);const{field:o,fieldIndex:a}=T(e,{...u,field:i.field,valueExpression:i.valueExpression});for(const f of(p=i.uniqueValueInfos)!=null?p:[])n.push({value:""+f.value,symbol:b(f.symbol,t,s)});return{type:"map",attributes:e.fields,field:o,fieldIndex:a,field2:T(e,{...u,field:i.field2}).field,field3:T(e,{...u,field:i.field3}).field,fieldDelimiter:(d=i.fieldDelimiter)!=null?d:void 0,backgroundFillSymbol:b(l,t),defaultSymbol:b(i.defaultSymbol,t),map:n,symbologyType:t.symbologyType}}function Ke(e,r,i,t=!1){return{type:"dictionary",config:r.config,fieldMap:r.fieldMap,scaleExpression:r.scaleExpression,url:r.url,symbolOptions:i,symbologyType:i.symbologyType}}function je(e,r,i,t=!1){const s=r.getSymbols(),n=s.length?s[0]:null;return{type:"heatmap",symbol:b(n,i,t),symbologyType:i.symbologyType}}export{W as $,ot as I,at as h,lt as n,G as w};
