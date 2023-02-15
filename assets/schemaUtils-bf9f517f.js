import{F as ne,K as h,bG as se,s as c,T as le,cT as ae,cU as oe,X as N,ab as $,cV as H,P as K,cW as ue,cX as de}from"./vendor-f61b19da.js";import{A as V,S as m}from"./enums-4ca4641f.js";import{r as fe}from"./Utils-823f2fe9.js";import{c as pe}from"./utils-073a76a7.js";import{l as ce}from"./visualVariablesUtils-9b7ef877.js";import{createSymbolSchema as g}from"./createSymbolSchema-59778335.js";import"./ExpandedCIM-387e7205.js";import"./MaterialKey-6fc95429.js";import{g as Y,i as ye}from"./rendererUtils-ca5f4ebc.js";import{e as X}from"./util-b2f998f9.js";function me(e){if(!e)return V.NONE;let r=0;for(const i of e)if(i.type==="size"){const t=ce(i);r|=t,i.target==="outline"&&(r|=t<<4)}else i.type==="color"?r|=V.COLOR:i.type==="opacity"?r|=V.OPACITY:i.type==="rotation"&&(r|=V.ROTATION);return r}function ge(e,r){if(!("visualVariables"in e)||!e.hasVisualVariables("size"))return 0;const i=e.getVisualVariablesForType("size");if(!i[0])return 0;const t=i[0];if(r&&t.field==="cluster_count"&&r.type==="cluster")return r.clusterMaxSize;if(t.target==="outline")return 0;if(t.transformationType==="stops")return t.stops.map(n=>n.size).reduce(M,0);if(t.transformationType==="clamped-linear"){let n=-1/0,s=-1/0;return n=typeof t.maxSize=="number"?t.maxSize:t.maxSize.stops.map(l=>l.size).reduce(M,0),s=typeof t.minSize=="number"?t.minSize:t.minSize.stops.map(l=>l.size).reduce(M,0),Math.max(n,s)}return t.transformationType==="real-world-size"?30:void 0}function M(e,r){return Math.max(e,r)}const v=ne.getLogger("esri.views.2d.layers.features.schemaUtils"),p="ValidationError";function P(e,r){let i=0,t=0,n=m.DEFAULT;if(h(e)){if(t=ge(e,r),"visualVariables"in e&&(i=me(e.visualVariables||[]),e.type==="dot-density"&&(n=m.DOT_DENSITY)),e.type==="heatmap"&&(n=m.HEATMAP),e.type==="dictionary")return{maxVVSize:t,vvFlags:i,symbologyType:m.DEFAULT};if(e.type==="pie-chart")return{maxVVSize:t,vvFlags:i,symbologyType:m.PIE_CHART};if(n!==m.DOT_DENSITY&&n!==m.HEATMAP){const s=e.getSymbols();"backgroundFillSymbol"in e&&e.backgroundFillSymbol&&s.push(e.backgroundFillSymbol);let l=!0,o=!0;for(const a of s)if(a.type==="cim"&&(o=!1),a.type==="simple-fill"||a.type==="picture-fill"){const u=a.outline,d=u&&u.style!=="none"&&u.style!=="solid",f=a.type==="simple-fill"&&a.style!=="none"&&a.style!=="solid",y=a.type==="picture-fill"||f||d;d&&(l=!1),y&&(o=!1)}l?n=o?m.OUTLINE_FILL_SIMPLE:m.OUTLINE_FILL:o&&(n=m.SIMPLE)}}return{vvFlags:i,maxVVSize:t,symbologyType:n}}let _=null;function Ge(e){if(le("esri-2d-update-debug")){const r=G(e,!0);console.debug("Created new schema",r),console.debug("Schema diff",ae(_,r)),_=r}return G(e)}function G(e,r=!1){var i,t;try{const n=Te(e,r),s=Ee(e),l={};n.map(u=>be(l,e,u));const o=h(e.subtypeCode)?`${e.subtypeField} = ${e.subtypeCode}`:null;return{source:{definitionExpression:oe(e.definitionExpression,o),fields:e.fields.map(u=>u.toJSON()),gdbVersion:e.gdbVersion,historicMoment:(i=e.historicMoment)==null?void 0:i.getTime(),outFields:e.availableFields,pixelBuffer:e.pixelBuffer,spatialReference:e.spatialReference.toJSON(),timeExtent:(t=e.timeExtent)==null?void 0:t.toJSON(),customParameters:e.customParameters},attributes:{fields:{},indexCount:0},processors:n,tileRenderer:s,targets:l}}catch(n){if(n.fieldName===p)return v.error(n),null;throw n}}function be(e,r,i){switch(i.target){case"feature":return void R(e,L(r),i);case"aggregate":{if(!("featureReduction"in r))return;const t=r.featureReduction;switch(t.type){case"selection":throw new c(p,"Mapview does not support `selection` reduction type",t);case"binning":return R(e,L(r),i),void xe(e,t,r.fields.map(n=>n.toJSON()),i);case"cluster":return R(e,L(r),i),void he(e,t,r.fields.map(n=>n.toJSON()),i)}}}}function k(e,r){for(const i in r){const t=r[i];if(t.target!==e.name)continue;const n=e.attributes[i];n?(n.context.mesh=n.context.mesh||t.context.mesh,n.context.storage=n.context.storage||t.context.storage):e.attributes[i]=t}return e}function L(e){var r,i,t;return[((r=N(e.filter))==null?void 0:r.toJSON())??null,((t=N((i=N(e.featureEffect))==null?void 0:i.filter))==null?void 0:t.toJSON())??null]}function R(e,r,i){return e.feature||(e.feature={name:"feature",input:"source",filters:r,attributes:{}}),k(e.feature,i.attributes.fields),e}function W(e,r){const{onStatisticExpression:i,onStatisticField:t,statisticType:n}=e;switch(n){case"min":case"max":case"avg":case"avg_angle":case"sum":case"count":return"esriFieldTypeDouble";case"mode":{if(i){const{returnType:l}=i;return l?l==="string"?"esriFieldTypeString":"esriFieldTypeDouble":(v.error(new c(p,"Unable to infer type of aggregateField with onStatisticExpression. ReturnType is not defined",e)),"esriFieldTypeString")}const s=r.find(l=>l.name===t);return s?s.type:(v.error(new c(p,"Unable to infer type of aggregateField with onStatisticExpression. ReturnType is not defined",e)),"esriFieldTypeString")}}}function xe(e,r,i,t){return e.aggregate||(e.aggregate={name:"aggregate",type:"bin",filters:null,input:"feature",params:{fixedBinLevel:r.fixedBinLevel,fields:(r.fields??[]).map(n=>({...n.toJSON(),type:W(n,i)}))},attributes:{}}),k(e.aggregate,t.attributes.fields),e}function he(e,r,i,t){var n;return e.aggregate||(e.aggregate={name:"aggregate",type:"cluster",input:"feature",filters:null,attributes:{},params:{clusterRadius:$(r.clusterRadius/2),clusterPixelBuffer:64*Math.ceil($(r.clusterMaxSize)/64),fields:(n=r.fields??[])==null?void 0:n.map(s=>({...s.toJSON(),type:W(s,i)}))}}),k(e.aggregate,t.attributes.fields),e}function b(e,r){return r.field?T(e,{...r,type:"field",field:r.field}):r.valueExpression?T(e,{...r,type:"expression",valueExpression:r.valueExpression}):{field:null,fieldIndex:null}}function T(e,r){switch(r.type){case"expression":{const i=r.valueExpression;if(!e.fields[i]){const t=e.indexCount++;e.fields[i]={...r,name:i,fieldIndex:t}}return{fieldIndex:e.fields[i].fieldIndex}}case"label-expression":{const i=JSON.stringify(r.label);if(!e.fields[i]){const t=e.indexCount++;e.fields[i]={...r,name:i,fieldIndex:t}}return{fieldIndex:e.fields[i].fieldIndex}}case"field":{const i=r.field;return r.target==="aggregate"&&e.fields[i]||(e.fields[i]={...r,name:i}),{field:i}}case"statistic":return e.fields[r.name]={...r},{field:r.name}}}function Te(e,r=!1){const i=new Array;let t=0;return i.push(Se(e,t++,r)),i}function A(e,r,i,t,n,s=!1){const l=T(e,{type:"label-expression",target:i,context:{mesh:!0},resultType:"string",label:{labelExpression:r.labelExpression,labelExpressionInfo:r.labelExpressionInfo?{expression:r.labelExpressionInfo.expression}:null,symbol:!!r.symbol,where:r.where}}),{fieldIndex:o}=l;return{...g(r,n,s),fieldIndex:o,target:i,index:t}}function ve(e,r,i){var d;const t="featureReduction"in r&&r.featureReduction;if(!t)return{fields:[],labels:[],matcher:null,rendererOverride:null};const n="aggregate",s=[];let l=null,o=X(r.geometryType),a=[],u=null;if(t)switch(t.type){case"selection":return v.error(new c(p,"Mapview does not support `selection` reduction type",t)),{fields:[],labels:[],matcher:null,rendererOverride:null};case"cluster":case"binning":if(s.push(...t.fields??[]),t.type==="cluster"?o="esriGeometryPoint":t.type==="binning"&&(o="esriGeometryPolygon"),t.renderer&&!((d=t.renderer.authoringInfo)!=null&&d.isAutoGenerated)){if(t.type==="cluster"){const{renderer:y}=ue(t.renderer,t,null);u=y}else u=t.renderer;const f=P(t.renderer,t);l=D(null,n,t.renderer,f,i),a=t&&t.labelsVisible&&t.labelingInfo||[]}else if(t.type==="cluster"){if(u=de(s,r.renderer,t,null,!0),t.symbol){const f=P(u,t);l={type:"simple",symbol:g(t.symbol,f,i),symbologyType:f.symbologyType}}a=t&&t.labelsVisible&&t.labelingInfo||[]}}return we(e,s),{labels:H(a,t.type==="binning"?"esriGeometryPolygon":o),matcher:l,fields:s,rendererOverride:u}}function Se(e,r,i=!1){const t={indexCount:0,fields:{}},n="featureReduction"in e&&e.featureReduction,s=n?"aggregate":"feature";if("sublayers"in e){const x={type:"subtype",subtypeField:e.subtypeField,renderers:{},symbologyType:m.DEFAULT},F={type:"subtype",mapping:{},target:"feature"},z={type:"subtype",classes:{}},Z={type:"symbol",target:"feature",aggregateFields:[],attributes:t,storage:F,mesh:{matcher:x,aggregateMatcher:null,labels:z,sortKey:null}},C=new Set;let ee=0;for(const{renderer:S,subtypeCode:E,labelingInfo:te,labelsVisible:ie}of e.sublayers){const J={symbologyType:m.DEFAULT,vvFlags:0,maxVVSize:0},I=D(t,s,S,J,i),w=q(t,s,S),U=ie&&te;if("visualVariables"in S&&S.visualVariables&&S.visualVariables.length)throw new c(p,"Visual variables are currently not supported for subtype layers");if(I.type==="dictionary")throw new c(p,"Dictionary renderer is not supported in subtype layers");if(I.type==="subtype")throw new c(p,"Nested subtype renderers is not supported");if(h(w)&&w.type==="subtype")throw new c(p,"Nested subtype storage is not supported");if(h(w)&&h(w.attributeMapping))throw new c(p,"Non-visual-variable attributes are not supported in subtype layers");if(I.type==="heatmap")throw new c(p,"Heatmaps are not supported in subtype layers");if(I.type==="pie-chart")throw new c(p,"Pie-charts are not supported in subtype layers");if(C.has(E))throw new c(p,"Subtype codes for sublayers must be unique");C.add(E),x.renderers[E]=I,F.mapping[E]=w,U&&(z.classes[E]=U.map(re=>A(t,re,"feature",ee++,J,i)))}return Z}if(e.renderer.type==="heatmap"&&Y()==="raster"){const{radius:x,fieldOffset:F,field:z}=e.renderer;return{type:"heatmap",aggregateFields:[],attributes:t,target:s,storage:null,mesh:{radius:x,fieldOffset:F,field:b(t,{target:s,field:z,resultType:"numeric"}).field}}}const l=ve(t,e,i),o=X(e.geometryType),a=l.rendererOverride??e.renderer,u=P(a,n),d=D(t,s,a,u,i),f=q(t,s,a),y=Ie(t,e.orderBy,n),O=e.labelsVisible&&e.labelingInfo||[],j=H(O,o);let B=0;const Q=[...j.map(x=>A(t,x,"feature",B++,u,i)),...l.labels.map(x=>A(t,x,"aggregate",B++,u,i))];return{type:"symbol",target:s,attributes:t,aggregateFields:l.fields,storage:f,mesh:{matcher:d,labels:{type:"simple",classes:Q},aggregateMatcher:l.matcher,sortKey:y}}}function Ee(e){var r;return((r=e.renderer)==null?void 0:r.type)==="heatmap"&&Y()==="raster"?{type:"heatmap"}:{type:"symbol"}}function Ie(e,r,i){if(h(i)||K(r)||!r.length)return null;r.length>1&&v.warn(`Layer rendering currently only supports ordering by 1 orderByInfo, but found ${r.length}. All but the first will be discarded`);const t=r[0],n=t.order==="ascending"?"asc":"desc";return t.field?{field:t.field,order:n}:t.valueExpression?{fieldIndex:T(e,{type:"expression",target:"feature",valueExpression:t.valueExpression,resultType:"numeric"}).fieldIndex,order:n}:(v.error(new c(p,"Expected to find a field or valueExpression for OrderByInfo",t)),null)}function we(e,r){const i={mesh:!0,storage:!0};for(const t of r){const{name:n,onStatisticField:s,onStatisticExpression:l,statisticType:o}=t;let a=null,u=null;const d="numeric",f="feature";l?u=T(e,{type:"expression",target:f,valueExpression:l.expression,resultType:d}).fieldIndex:a=T(e,{type:"field",target:f,field:s,resultType:d}).field,T(e,{type:"statistic",target:"aggregate",name:n,context:i,inField:a,inFieldIndex:u,statisticType:o})}}function q(e,r,i){let t;switch(i.type){case"simple":case"class-breaks":case"unique-value":case"dictionary":t={visualVariables:!0,attributes:null};break;default:t=pe(i).getStorageSpec(i)}return Fe(e,r,t,i)}function Fe(e,r,i,t){if(K(i))return null;const{visualVariables:n,attributes:s}=i;let l=null;n&&"visualVariables"in t&&(l=ze(e,r,t.visualVariables));const o=h(l)?4:0;let a=null;return h(s)&&(a=s.map((u,d)=>{const{field:f,fieldIndex:y}=b(e,{valueExpression:u.valueExpression,field:u.field,resultType:"numeric",target:r});return{binding:d+o,field:f,fieldIndex:y}})),{type:"simple",target:r,attributeMapping:a,vvMapping:l}}function ze(e,r,i){if(!i||!i.length)return[];const t={storage:!0},n="numeric";return ye(i).map(s=>{const l=fe(s.type),{field:o,fieldIndex:a}=b(e,{target:r,valueExpression:s.valueExpression,field:s.field,context:t,resultType:n});switch(s.type){case"size":return s.valueExpression==="$view.scale"?null:{type:"size",binding:l,field:o,fieldIndex:a,normalizationField:b(e,{target:r,field:s.normalizationField,context:t,resultType:n}).field,valueRepresentation:s.valueRepresentation??null};case"color":return{type:"color",binding:l,field:o,fieldIndex:a,normalizationField:b(e,{target:r,field:s.normalizationField,context:t,resultType:n}).field};case"opacity":return{type:"opacity",binding:l,field:o,fieldIndex:a,normalizationField:b(e,{target:r,field:s.normalizationField,context:t,resultType:n}).field};case"rotation":return{type:"rotation",binding:l,field:o,fieldIndex:a}}}).filter(s=>s)}function D(e,r,i,t,n=!1){const s=se(e,{indexCount:0,fields:{}});switch(i.type){case"simple":case"dot-density":return Ve(s,i,t,n);case"class-breaks":return Ne(s,r,i,t,n);case"unique-value":return Me(s,r,i,t,n);case"dictionary":return Le(s,i,t,n);case"heatmap":return Re(s,i,t,n);case"pie-chart":return Oe(s,i,t,n)}}function Ve(e,r,i,t=!1){const n=r.getSymbols(),s=n.length?n[0]:null;return{type:"simple",symbol:g(s,i,t),symbologyType:i.symbologyType}}function Oe(e,r,i,t=!1){const n=r.getSymbols(),s=n[0],l=n.length>1?n[1]:null;return{type:"pie-chart",markerSymbol:g(s,i,t),fillSymbol:g(l,i,t),symbologyType:i.symbologyType}}function Ne(e,r,i,t,n=!1){const s={mesh:!0,use:"renderer.field"},l=i.backgroundFillSymbol,{field:o,fieldIndex:a}=b(e,{target:r,field:i.field,valueExpression:i.valueExpression,resultType:"numeric",context:s}),u=i.normalizationType,d=u==="log"?"esriNormalizeByLog":u==="percent-of-total"?"esriNormalizeByPercentOfTotal":u==="field"?"esriNormalizeByField":null,f=i.classBreakInfos.map(y=>({symbol:g(y.symbol,t,n),min:y.minValue,max:y.maxValue})).sort((y,O)=>y.min-O.min);return{type:"interval",attributes:e.fields,field:o,fieldIndex:a,backgroundFillSymbol:g(l,t,n),defaultSymbol:g(i.defaultSymbol,t,n),intervals:f,normalizationField:i.normalizationField,normalizationTotal:i.normalizationTotal,normalizationType:d,isMaxInclusive:i.isMaxInclusive,symbologyType:t.symbologyType}}function Me(e,r,i,t,n=!1){const s=[],l=i.backgroundFillSymbol,o={target:r,context:{mesh:!0},resultType:"string"};if(i.field&&typeof i.field!="string")throw new c(p,"Expected renderer.field to be a string",i);const{field:a,fieldIndex:u}=b(e,{...o,field:i.field,valueExpression:i.valueExpression});for(const d of i.uniqueValueInfos)s.push({value:""+d.value,symbol:g(d.symbol,t,n)});return{type:"map",attributes:e.fields,field:a,fieldIndex:u,field2:b(e,{...o,field:i.field2}).field,field3:b(e,{...o,field:i.field3}).field,fieldDelimiter:i.fieldDelimiter,backgroundFillSymbol:g(l,t),defaultSymbol:g(i.defaultSymbol,t),map:s,symbologyType:t.symbologyType}}function Le(e,r,i,t=!1){return{type:"dictionary",config:r.config,fieldMap:r.fieldMap,scaleExpression:r.scaleExpression,url:r.url,symbolOptions:i,symbologyType:i.symbologyType}}function Re(e,r,i,t=!1){const n=r.getSymbols(),s=n.length?n[0]:null;return{type:"heatmap",symbol:g(s,i,t),symbologyType:i.symbologyType}}export{D as $,Ge as F,P as w};
