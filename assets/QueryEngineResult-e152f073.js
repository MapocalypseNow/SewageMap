import{g6 as H,V as S,gq as G,gr as ce,P as ae,d6 as de,d7 as Y,v as U,gs as he,gt as X,gu as k,gv as W,gw as fe,gx as ge,gy as me,gz as pe,gA as ye,gB as xe,gC as Fe,gD as J,T as Ie,gE as _e,gF as K,bE as Ve,gG as Te,gH as ve,eP as De}from"./vendor-128d427e.js";import{WhereClause as Ae}from"./WhereClause-8ea485ce.js";import{g as ee}from"./projectionSupport-3d7d1b44.js";import{E as $,v as O,b as te}from"./utils-5b3e6768.js";let be=class{constructor(t,e){this._cache=new H(t),this._invalidCache=new H(e)}get(t,e){const i=`${e.uid}:${t}`,a=this._cache.get(i);if(a)return a;if(this._invalidCache.get(i)!==void 0)return null;try{const s=Ae.create(t,e);return this._cache.put(i,s),s}catch{return this._invalidCache.put(i,null),null}}};const j=new be(50,500),w="feature-store:unsupported-query",ne=" as ",ze=new Set(["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeDate"]);function Ge(u,t){if(!t)return!0;const e=j.get(t,u);if(!e)throw new S(w,"invalid SQL expression",{where:t});if(!e.isStandardized)throw new S(w,"where clause is not standard",{where:t});return Z(u,e.fieldNames,"where clause contains missing fields"),!0}function $e(u,t,e){if(!t)return!0;const i=j.get(t,u);if(!i)throw new S(w,"invalid SQL expression",{having:t});if(!i.isAggregate)throw new S(w,"having does not contain a valid aggregate function",{having:t});const a=i.fieldNames;if(Z(u,a,"having contains missing fields"),!i.getExpressions().every(s=>{const{aggregateType:n,field:r}=s,o=u.has(r)&&u.get(r).name;return e.some(c=>{const{onStatisticField:l,statisticType:d}=c;return(u.has(l)&&u.get(l).name)===o&&d.toLowerCase().trim()===n})}))throw new S(w,"expressions in having should also exist in outStatistics",{having:t});return!0}function q(u,t){return u?j.get(u,t):null}function Z(u,t,e,i=!0){const a=[];for(const s of t)if(s!=="*"&&!u.has(s))if(i){const n=re(s);try{const r=q(n,u);if(!r)throw new S(w,"invalid SQL expression",{where:n});if(!r.isStandardized)throw new S(w,"expression is not standard",{clause:r});Z(u,r.fieldNames,"expression contains missing fields")}catch(r){const o=r&&r.details;if(o&&(o.clause||o.where))throw r;o&&o.missingFields?a.push(...o.missingFields):a.push(s)}}else a.push(s);if(a.length)throw new S(w,e,{missingFields:a})}function re(u){return u.split(ne)[0]}function Se(u){return u.split(ne)[1]}function Oe(u,t){const e=t.get(u);return!!e&&!ze.has(e.type)}class M{constructor(t,e,i){this._fieldDataCache=new Map,this._returnDistinctMap=new Map,this.returnDistinctValues=t.returnDistinctValues??!1,this.fieldsIndex=i,this.featureAdapter=e;const a=t.outFields;if(a&&!a.includes("*")){this.outFields=a;let s=0;for(const n of a){const r=re(n),o=this.fieldsIndex.get(r),c=o?null:q(r,i),l=o?o.name:Se(n)||"FIELD_EXP_"+s++;this._fieldDataCache.set(n,{alias:l,clause:c})}}}countDistinctValues(t){return this.returnDistinctValues?(t.forEach(e=>this.getAttributes(e)),this._returnDistinctMap.size):t.length}getAttributes(t){const e=this._processAttributesForOutFields(t);return this._processAttributesForDistinctValues(e)}getFieldValue(t,e,i){const a=i?i.name:e;let s=null;return this._fieldDataCache.has(a)?s=this._fieldDataCache.get(a).clause:i||(s=q(e,this.fieldsIndex),this._fieldDataCache.set(a,{alias:a,clause:s})),i?this.featureAdapter.getAttribute(t,a):s.calculateValue(t,this.featureAdapter)}getDataValue(t,e){const i=e.normalizationType,a=e.normalizationTotal;let s=this.getFieldValue(t,e.field,this.fieldsIndex.get(e.field));if(e.field2&&(s=`${G(s)}${e.fieldDelimiter}${G(this.getFieldValue(t,e.field2,this.fieldsIndex.get(e.field2)))}`,e.field3&&(s=`${s}${e.fieldDelimiter}${G(this.getFieldValue(t,e.field3,this.fieldsIndex.get(e.field3)))}`)),i&&Number.isFinite(s)){const n=i==="field"&&e.normalizationField?this.getFieldValue(t,e.normalizationField,this.fieldsIndex.get(e.normalizationField)):null;s=ce(s,i,n,a)}return s}getExpressionValue(t,e,i,a){const s={attributes:this.featureAdapter.getAttributes(t),layer:{fields:this.fieldsIndex.fields}},n=a.createExecContext(s,i);return a.executeFunction(e,n)}getExpressionValues(t,e,i,a){const s={fields:this.fieldsIndex.fields};return t.map(n=>{const r={attributes:this.featureAdapter.getAttributes(n),layer:s},o=a.createExecContext(r,i);return a.executeFunction(e,o)})}validateItem(t,e){return this._fieldDataCache.has(e)||this._fieldDataCache.set(e,{alias:e,clause:q(e,this.fieldsIndex)}),this._fieldDataCache.get(e).clause.testFeature(t,this.featureAdapter)}validateItems(t,e){return this._fieldDataCache.has(e)||this._fieldDataCache.set(e,{alias:e,clause:q(e,this.fieldsIndex)}),this._fieldDataCache.get(e).clause.testSet(t,this.featureAdapter)}_processAttributesForOutFields(t){const e=this.outFields;if(!e||!e.length)return this.featureAdapter.getAttributes(t);const i={};for(const a of e){const{alias:s,clause:n}=this._fieldDataCache.get(a);i[s]=n?n.calculateValue(t,this.featureAdapter):this.featureAdapter.getAttribute(t,s)}return i}_processAttributesForDistinctValues(t){if(ae(t)||!this.returnDistinctValues)return t;const e=this.outFields,i=[];if(e)for(const n of e){const{alias:r}=this._fieldDataCache.get(n);i.push(t[r])}else for(const n in t)i.push(t[n]);const a=`${(e||["*"]).join(",")}=${i.join(",")}`;let s=this._returnDistinctMap.get(a)||0;return this._returnDistinctMap.set(a,++s),s>1?null:t}}function we(u,t,e){return{objectId:u,target:t,distance:e,type:"vertex"}}function Ee(u,t,e,i,a,s=!1){return{objectId:u,target:t,distance:e,type:"edge",start:i,end:a,draped:s}}class je{constructor(t,e,i){this.items=t,this.query=e,this.geometryType=i.geometryType,this.hasM=i.hasM,this.hasZ=i.hasZ,this.fieldsIndex=i.fieldsIndex,this.objectIdField=i.objectIdField,this.spatialReference=i.spatialReference,this.featureAdapter=i.featureAdapter}get size(){return this.items.length}createQueryResponseForCount(){const t=new M(this.query,this.featureAdapter,this.fieldsIndex);if(!this.query.outStatistics)return t.countDistinctValues(this.items);const{groupByFieldsForStatistics:e,having:i,outStatistics:a}=this.query;if(!(e==null?void 0:e.length))return 1;const n=new Map,r=new Map,o=new Set;for(const c of a){const{statisticType:l}=c,d=l!=="exceedslimit"?c.onStatisticField:void 0;if(!r.has(d)){const h=[];for(const m of e){const x=this._getAttributeValues(t,m,n);h.push(x)}r.set(d,this._calculateUniqueValues(h,t.returnDistinctValues))}const f=r.get(d);for(const h in f){const{data:m,items:x}=f[h],V=m.join(",");i&&!t.validateItems(x,i)||o.add(V)}}return o.size}async createQueryResponse(){let t;return this.query.outStatistics?t=this.query.outStatistics.some(e=>e.statisticType==="exceedslimit")?this._createExceedsLimitQueryResponse(this.query):await this._createStatisticsQueryResponse(this.query):t=this._createFeatureQueryResponse(this.query),this.query.returnQueryGeometry&&(de(this.query.outSR)&&!Y(this.query.geometry.spatialReference,this.query.outSR)?t.queryGeometry=$({spatialReference:this.query.outSR,...ee(this.query.geometry,this.query.geometry.spatialReference,this.query.outSR)}):t.queryGeometry=$({spatialReference:this.query.outSR,...this.query.geometry})),t}createSnappingResponse(t,e){const i=this.featureAdapter,a=ie(this.hasZ,this.hasM),{point:s}=t,n=typeof t.distance=="number"?t.distance:t.distance.x,r=typeof t.distance=="number"?t.distance:t.distance.y,o={candidates:[]},c=this.geometryType==="esriGeometryPolygon",l=s.z!=null,d=s.m!=null,f=this._getPointCreator(s,l,d,this.spatialReference,e),h=new se(null,0),m=new se(null,0),x={x:0,y:0,z:0};for(const V of this.items){const y=i.getGeometry(V);if(ae(y))continue;const{coords:I,lengths:_}=y;if(h.coords=I,m.coords=I,t.types&P.EDGE){let F=0;for(let p=0;p<_.length;p++){const g=_[p];for(let T=0;T<g;T++,F+=a){const D=h;if(D.coordsIndex=F,T!==g-1){const b=m;b.coordsIndex=F+a;const v=x;Ce(x,s,D,b);const A=(s.x-v.x)/n,C=(s.y-v.y)/r,E=A*A+C*C;E<=1&&o.candidates.push(Ee(i.getObjectId(V),f(v),Math.sqrt(E),f(D),f(b)))}}}}if(t.types&P.VERTEX){const F=c?I.length-a:I.length;for(let p=0;p<F;p+=a){const g=h;g.coordsIndex=p;const T=(s.x-g.x)/n,D=(s.y-g.y)/r,b=T*T+D*D;b<=1&&o.candidates.push(we(i.getObjectId(V),f(g),Math.sqrt(b)))}}}return o.candidates.sort((V,y)=>V.distance-y.distance),o}_getPointCreator(t,e,i,a,s){const n=U(s)&&!Y(a,s)?l=>ee(l,a,s):l=>l,{hasZ:r}=this,o=0,c=t.m;return e&&i?r?({x:l,y:d,z:f})=>n({x:l,y:d,z:f,m:c}):({x:l,y:d})=>n({x:l,y:d,z:o,m:c}):e?r?({x:l,y:d,z:f})=>n({x:l,y:d,z:f}):({x:l,y:d})=>n({x:l,y:d,z:o}):i?({x:l,y:d})=>n({x:l,y:d,m:c}):({x:l,y:d})=>n({x:l,y:d})}async createSummaryStatisticsResponse(t){const{field:e,valueExpression:i,normalizationField:a,normalizationType:s,normalizationTotal:n,minValue:r,maxValue:o,scale:c}=t,l=this.fieldsIndex.isDateField(e),d=await this._getDataValues({field:e,valueExpression:i,normalizationField:a,normalizationType:s,normalizationTotal:n,scale:c}),f=he({normalizationType:s,normalizationField:a,minValue:r,maxValue:o}),h=this.fieldsIndex.get(e),m={value:.5,fieldType:h==null?void 0:h.type},x=X(h)?k({values:d,supportsNullCount:f,percentileParams:m}):W({values:d,minValue:r,maxValue:o,useSampleStdDev:!s,supportsNullCount:f,percentileParams:m});return fe(x,l)}async createUniqueValuesResponse(t){const{field:e,valueExpression:i,domains:a,returnAllCodedValues:s,scale:n}=t,r=await this._getDataValues({field:e,field2:t.field2,field3:t.field3,fieldDelimiter:t.fieldDelimiter,valueExpression:i,scale:n}),o=ge(r);return me(o,a,s,t.fieldDelimiter)}async createClassBreaksResponse(t){const{field:e,valueExpression:i,normalizationField:a,normalizationType:s,normalizationTotal:n,classificationMethod:r,standardDeviationInterval:o,minValue:c,maxValue:l,numClasses:d,scale:f}=t,h=await this._getDataValues({field:e,valueExpression:i,normalizationField:a,normalizationType:s,normalizationTotal:n,scale:f}),m=pe(h,{field:e,normalizationField:a,normalizationType:s,normalizationTotal:n,classificationMethod:r,standardDeviationInterval:o,minValue:c,maxValue:l,numClasses:d});return ye(m,r)}async createHistogramResponse(t){const{field:e,valueExpression:i,normalizationField:a,normalizationType:s,normalizationTotal:n,classificationMethod:r,standardDeviationInterval:o,minValue:c,maxValue:l,numBins:d,scale:f}=t,h=await this._getDataValues({field:e,valueExpression:i,normalizationField:a,normalizationType:s,normalizationTotal:n,scale:f});return xe(h,{field:e,normalizationField:a,normalizationType:s,normalizationTotal:n,classificationMethod:r,standardDeviationInterval:o,minValue:c,maxValue:l,numBins:d})}_sortFeatures(t,e,i){if(t.length>1&&e&&e.length)for(const a of e.reverse()){const s=a.split(" "),n=s[0],r=this.fieldsIndex.get(n),o=s[1]&&s[1].toLowerCase()==="desc",c=Fe(r==null?void 0:r.type,o);t.sort((l,d)=>{const f=i(l,n,r),h=i(d,n,r);return c(f,h)})}}_createFeatureQueryResponse(t){const e=this.items,{geometryType:i,hasM:a,hasZ:s,objectIdField:n,spatialReference:r}=this,{outFields:o,outSR:c,quantizationParameters:l,resultRecordCount:d,resultOffset:f,returnZ:h,returnM:m}=t,x=d!=null&&e.length>(f||0)+d,V=o&&(o.includes("*")?[...this.fieldsIndex.fields]:o.map(y=>this.fieldsIndex.get(y)));return{exceededTransferLimit:x,features:this._createFeatures(t,e),fields:V,geometryType:i,hasM:a&&m,hasZ:s&&h,objectIdFieldName:n,spatialReference:$(c||r),transform:l&&J(l)||null}}_createFeatures(t,e){const i=new M(t,this.featureAdapter,this.fieldsIndex),{hasM:a,hasZ:s}=this,{orderByFields:n,quantizationParameters:r,returnGeometry:o,returnCentroid:c,maxAllowableOffset:l,resultOffset:d,resultRecordCount:f,returnZ:h=!1,returnM:m=!1}=t,x=s&&h,V=a&&m;let y=[],I=0;const _=[...e];if(this._sortFeatures(_,n,(p,g,T)=>i.getFieldValue(p,g,T)),o||c){const p=J(r);if(o&&!c)for(const g of _)y[I++]={attributes:i.getAttributes(g),geometry:O(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(g),l,p,x,V)};else if(!o&&c)for(const g of _)y[I++]={attributes:i.getAttributes(g),centroid:te(this,this.featureAdapter.getCentroid(g,this),p)};else for(const g of _)y[I++]={attributes:i.getAttributes(g),centroid:te(this,this.featureAdapter.getCentroid(g,this),p),geometry:O(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(g),l,p,x,V)}}else for(const p of _){const g=i.getAttributes(p);g&&(y[I++]={attributes:g})}const F=d||0;if(f!=null){const p=F+f;y=y.slice(F,Math.min(y.length,p))}return y}_createExceedsLimitQueryResponse(t){let e=!1,i=Number.POSITIVE_INFINITY,a=Number.POSITIVE_INFINITY,s=Number.POSITIVE_INFINITY;for(const n of t.outStatistics)if(n.statisticType==="exceedslimit"){i=n.maxPointCount!=null?n.maxPointCount:Number.POSITIVE_INFINITY,a=n.maxRecordCount!=null?n.maxRecordCount:Number.POSITIVE_INFINITY,s=n.maxVertexCount!=null?n.maxVertexCount:Number.POSITIVE_INFINITY;break}if(this.geometryType==="esriGeometryPoint")e=this.items.length>i;else if(this.items.length>a)e=!0;else{const n=ie(this.hasZ,this.hasM),r=this.featureAdapter;e=this.items.reduce((o,c)=>{const l=r.getGeometry(c);return o+(U(l)&&l.coords.length||0)},0)/n>s}return{fields:[{name:"exceedslimit",type:"esriFieldTypeInteger",alias:"exceedslimit",sqlType:"sqlTypeInteger",domain:null,defaultValue:null}],features:[{attributes:{exceedslimit:Number(e)}}]}}async _createStatisticsQueryResponse(t){const e={attributes:{}},i=[],a=new Map,s=new Map,n=new Map,r=new Map,o=new M(t,this.featureAdapter,this.fieldsIndex),c=t.outStatistics,{groupByFieldsForStatistics:l,having:d,orderByFields:f}=t,h=l&&l.length,m=!!h,x=m&&l[0],V=m&&!this.fieldsIndex.get(x);for(const I of c){const{outStatisticFieldName:_,statisticType:F}=I,p=I,g=F!=="exceedslimit"?I.onStatisticField:void 0,T=F==="percentile_disc"||F==="percentile_cont",D=F==="EnvelopeAggregate"||F==="CentroidAggregate"||F==="ConvexHullAggregate",b=m&&h===1&&(g===x||V)&&F==="count";if(m){if(!n.has(g)){const A=[];for(const C of l){const E=this._getAttributeValues(o,C,a);A.push(E)}n.set(g,this._calculateUniqueValues(A,!D&&o.returnDistinctValues))}const v=n.get(g);for(const A in v){const{count:C,data:E,items:Q,itemPositions:oe}=v[A],L=E.join(",");if(!d||o.validateItems(Q,d)){const R=r.get(L)||{attributes:{}};if(D){R.aggregateGeometries||(R.aggregateGeometries={});const{aggregateGeometries:z,outStatisticFieldName:N}=await this._getAggregateGeometry(p,Q);R.aggregateGeometries[N]=z}else{let z=null;if(b)z=C;else{const N=this._getAttributeValues(o,g,a),B=oe.map(ue=>N[ue]);z=T&&"statisticParameters"in p?this._getPercentileValue(p,B):this._getStatisticValue(p,B,null,o.returnDistinctValues)}R.attributes[_]=z}let le=0;l.forEach((z,N)=>R.attributes[this.fieldsIndex.get(z)?z:"EXPR_"+ ++le]=E[N]),r.set(L,R)}}}else if(D){e.aggregateGeometries||(e.aggregateGeometries={});const{aggregateGeometries:v,outStatisticFieldName:A}=await this._getAggregateGeometry(p,this.items);e.aggregateGeometries[A]=v}else{const v=this._getAttributeValues(o,g,a);e.attributes[_]=T&&"statisticParameters"in p?this._getPercentileValue(p,v):this._getStatisticValue(p,v,s,o.returnDistinctValues)}i.push({name:_,alias:_,type:"esriFieldTypeDouble"})}const y=m?Array.from(r.values()):[e];return this._sortFeatures(y,f,(I,_)=>I.attributes[_]),{fields:i,features:y}}async _getAggregateGeometry(t,e){const i=await Ie(()=>import("./geometryEngineJSON-a45b7108.js"),["assets/geometryEngineJSON-a45b7108.js","assets/geometryEngineBase-3dd302e0.js","assets/geometryEngineJSON-45c195fe.js","assets/json-48e3ea08.js"]),{statisticType:a,outStatisticFieldName:s}=t,{featureAdapter:n,spatialReference:r,geometryType:o,hasZ:c,hasM:l}=this,d=e.map(m=>O(o,c,l,n.getGeometry(m))),f=i.convexHull(r,d,!0)[0],h={aggregateGeometries:null,outStatisticFieldName:null};if(a==="EnvelopeAggregate"){const m=f?_e(f):K(i.union(r,d));h.aggregateGeometries={...m,spatialReference:r},h.outStatisticFieldName=s||"extent"}else if(a==="CentroidAggregate"){const m=f?Ve(f):Te(K(i.union(r,d)));h.aggregateGeometries={x:m[0],y:m[1],spatialReference:r},h.outStatisticFieldName=s||"centroid"}else a==="ConvexHullAggregate"&&(h.aggregateGeometries=f,h.outStatisticFieldName=s||"convexHull");return h}_getStatisticValue(t,e,i,a){const{onStatisticField:s,statisticType:n}=t;let r=null;return r=i!=null&&i.has(s)?i.get(s):X(this.fieldsIndex.get(s))?k({values:e,returnDistinct:a}):W({values:e,minValue:null,maxValue:null,useSampleStdDev:!0}),i&&i.set(s,r),r[n==="var"?"variance":n]}_getPercentileValue(t,e){const{onStatisticField:i,statisticParameters:a,statisticType:s}=t,{value:n,orderBy:r}=a,o=this.fieldsIndex.get(i);return ve(e,{value:n,orderBy:r,fieldType:o==null?void 0:o.type,isDiscrete:s==="percentile_disc"})}_getAttributeValues(t,e,i){if(i.has(e))return i.get(e);const a=this.fieldsIndex.get(e),s=this.items.map(n=>t.getFieldValue(n,e,a));return i.set(e,s),s}_getAttributeDataValues(t,e){return this.items.map(i=>t.getDataValue(i,{field:e.field,field2:e.field2,field3:e.field3,fieldDelimiter:e.fieldDelimiter,normalizationField:e.normalizationField,normalizationType:e.normalizationType,normalizationTotal:e.normalizationTotal}))}async _getAttributeExpressionValues(t,e,i){const{arcadeUtils:a}=await De(),s=a.createFunction(e),n=i&&a.getViewInfo(i);return t.getExpressionValues(this.items,s,n,a)}_calculateUniqueValues(t,e){const i={},a=this.items,s=a.length;for(let n=0;n<s;n++){const r=a[n],o=[];for(const l of t)o.push(l[n]);const c=o.join(",");e?i[c]==null&&(i[c]={count:1,data:o,items:[r],itemPositions:[n]}):i[c]==null?i[c]={count:1,data:o,items:[r],itemPositions:[n]}:(i[c].count++,i[c].items.push(r),i[c].itemPositions.push(n))}return i}async _getDataValues(t){const e=new M(this.query,this.featureAdapter,this.fieldsIndex),{valueExpression:i,field:a,normalizationField:s,normalizationType:n,normalizationTotal:r,scale:o}=t,c=i?{viewingMode:"map",scale:o,spatialReference:this.query.outSR||this.spatialReference}:null;return i?this._getAttributeExpressionValues(e,i,c):this._getAttributeDataValues(e,{field:a,field2:t.field2,field3:t.field3,fieldDelimiter:t.fieldDelimiter,normalizationField:s,normalizationType:n,normalizationTotal:r})}}function Ce(u,t,e,i){const a=i.x-e.x,s=i.y-e.y,n=a*a+s*s,r=(t.x-e.x)*a+(t.y-e.y)*s,o=Math.min(1,Math.max(0,r/n));u.x=e.x+a*o,u.y=e.y+s*o}function ie(u,t){return u?t?4:3:t?3:2}var P;(function(u){u[u.NONE=0]="NONE",u[u.EDGE=1]="EDGE",u[u.VERTEX=2]="VERTEX"})(P||(P={}));class se{constructor(t,e){this.coords=t,this.coordsIndex=e}get x(){return this.coords[this.coordsIndex]}get y(){return this.coords[this.coordsIndex+1]}get z(){return this.coords[this.coordsIndex+2]}}export{je as A,$e as a,Z as c,Oe as f,q as l,Ge as o,P as q};
