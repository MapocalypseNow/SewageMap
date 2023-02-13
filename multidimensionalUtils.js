import{e as b,y as p,eZ as y,j as k,di as A,W as F,r as g,t as d}from"./index.js";var N;let h=N=class extends A{constructor(e){super(e),this.variableName=null,this.dimensionName=null,this.values=[],this.isSlice=!1}clone(){return new N({variableName:this.variableName,dimensionName:this.dimensionName,values:F(this.values),isSlice:this.isSlice})}};b([p({type:String,json:{write:!0}})],h.prototype,"variableName",void 0),b([p({type:String,json:{write:!0}})],h.prototype,"dimensionName",void 0),b([p({type:y.array(y.oneOf([y.native(Number),y.array(y.native(Number))])),json:{write:!0}})],h.prototype,"values",void 0),b([p({type:Boolean,json:{write:!0}})],h.prototype,"isSlice",void 0),h=N=b([k("esri.layers.support.DimensionalDefinition")],h);const D=h;function M(e,n,a){var t;const l=n.shift();if(a.length===0){const s=[];a.push({sliceId:-1,multidimensionalDefinition:s})}const i=a.length;for(let s=0;s<i;s++){const u=a.shift().multidimensionalDefinition;(t=l.values)==null||t.forEach(m=>{a.push({sliceId:-1,multidimensionalDefinition:[...u,{variableName:e,dimensionName:l.name,values:[m]}]})})}n.length&&M(e,n,a)}function L(e,n){const a=[];let l=0;return(n?e.variables.filter(i=>i.name.toLowerCase()===n.toLowerCase()):[...e.variables].sort((i,t)=>i.name>t.name?1:-1)).forEach(i=>{const t=[],s=[...i.dimensions].sort((u,m)=>u.name>m.name?-1:1);M(i.name,s,t),t.forEach(u=>{a.push({...u,sliceId:l++})})}),a}function R(e,n,a){let l=e;if(n&&(n=[...n].sort((i,t)=>i.dimensionName<t.dimensionName?-1:1)).forEach(({dimensionName:i,values:t,isSlice:s})=>{t.length&&(l=l.filter(u=>{const m=u.multidimensionalDefinition.find(r=>r.dimensionName===i);if(m==null)return!1;const o=m.values[0];return typeof o=="number"?typeof t[0]=="number"?t.includes(o):t.some(r=>r[0]<=o&&r[1]>=o):typeof t[0]=="number"?t.some(r=>o[0]<=r&&o[1]>=r):s?t.some(r=>r[0]===o[0]&&r[0]===o[1]):t.some(r=>r[0]>=o[0]&&r[0]<=o[1]||r[1]>=o[0]&&r[1]<=o[1]||r[0]<o[0]&&r[1]>o[1])}))}),l.length&&a&&g(a.start)&&g(a.end)){const i=a.start.getTime(),t=a.end.getTime(),s=l[0].multidimensionalDefinition.findIndex(u=>u.dimensionName==="StdTime");s>-1&&(l=l.filter(u=>{const m=u.multidimensionalDefinition[s].values[0];return i<=m&&t>=m}))}return l.map(i=>i.sliceId)}function C(e,n){return Array.isArray(e)?n[0]===n[1]?e[0]===n[0]||e[1]===n[0]:e[0]>=n[0]&&e[0]<=n[1]&&e[1]>=n[0]&&e[1]<=n[1]:e>=n[0]&&e<=n[1]}function Y(e,n){return e[0]<=n[0]&&e[1]>=n[0]||e[0]<=n[1]&&e[1]>=n[1]||e[0]>=n[0]&&e[1]<=n[1]}function T(e){return e.length===1?[e[0],e[0]]:[e[0],e[e.length-1]]}function S(e,n,a){var s,u,m;if(!((s=n==null?void 0:n.subsetDefinitions)!=null&&s.length))return e;let l;if(a){const{variables:o}=n;if(o.length&&!o.includes(a))return null;const r=n.subsetDefinitions.find(c=>c.dimensionName===e.name&&c.variableName===a);if(!((u=r==null?void 0:r.values)!=null&&u.length))return e;l=T(r.values)}else l=(m=n.dimensions.find(({name:o})=>o===e.name))==null?void 0:m.extent;const i=l;if(!i||!(i!=null&&i.length))return e;const t=e.values.filter(o=>C(o,i));return{...e,extent:[...i],values:t}}function x(e,n,a){var i;if(!((i=n==null?void 0:n.subsetDefinitions)!=null&&i.length))return!1;const{variables:l}=n;if(l.length&&e.some(({variableName:t})=>t&&!l.includes(t)))return!0;for(let t=0;t<e.length;t++){const s=e[t],u=n.subsetDefinitions.find(m=>(s.variableName===""||m.variableName===s.variableName)&&m.dimensionName===s.dimensionName);if(u!=null&&u.values.length){const m=T(u.values);if(!s.isSlice&&s.values.length===2&&!Array.isArray(s.values[0])&&s.values[0]!==s.values[1]&&a){if(!Y(s.values,m))return!0}else if(s.values.some(o=>!C(o,m)))return!0}}return!1}function z(e,n){if(d(e))return{isOutside:!1};const{geometry:a,timeExtent:l,multidimensionalDefinition:i}=n;let t=null;if(g(l)&&(t=I(e,l),d(t)))return{isOutside:!0};const{areaOfInterest:s}=e;if(s&&a){const u=a.type==="point"?a:a.type==="extent"?a.center:a.type==="polygon"?a.centroid:null;if(u&&!s.contains(u))return{isOutside:!0}}return g(i)&&i.length&&x(i,e,!0)?{isOutside:!0}:{isOutside:!1,intersection:{geometry:a,timeExtent:t,multidimensionalDefinition:i}}}function I(e,n){var s,u;const a=e.dimensions.find(({name:m})=>m==="StdTime");if(a==null||d(n.start)&&d(n.end))return n;n=n.clone();const{start:l,end:i}=n.toJSON(),t=l===i?[l]:l!=null&&i!=null?[l,i]:[l!=null?l:i];return t.length===2&&(a==null?void 0:a.extent.length)&&(t[0]=Math.max(t[0],a.extent[0]),t[1]=Math.min(t[1],(s=a.extent[1])!=null?s:a.extent[0]),t[1]<t[0])||x([new D({variableName:"",dimensionName:"StdTime",isSlice:t.length===1,values:t})],e,!0)?null:(n.start=new Date(t[0]),n.end=new Date((u=t[1])!=null?u:t[0]),n)}function O(e,n={}){var r,c,v;const{multidimensionalInfo:a,keyProperties:l}=e;if(d(a))return null;const{variableName:i,multidimensionalSubset:t,multidimensionalDefinition:s}=n,u=g(s)?(r=s[0])==null?void 0:r.variableName:null,m=i||u||(l==null?void 0:l.DefaultVariable);let{variables:o}=a;return(c=t==null?void 0:t.variables)!=null&&c.length&&(o=o.filter(({name:f})=>t.variables.includes(f))),m&&(v=o.find(({name:f})=>f===m))!=null?v:o[0]}function B(e,n={}){var s;const a=O(e,n);if(!a)return null;const l=[],{dimensions:i,name:t}=a;if(i.length===0)return[new D({variableName:t,dimensionName:"",values:[],isSlice:!0})];for(let u=0;u<i.length;u++){const m=S(i[u],n.multidimensionalSubset,t);if(!m)return null;const{values:o,extent:r}=m;let c=(s=o==null?void 0:o[0])!=null?s:r[0];m.name.toLowerCase()==="stdz"&&!m.hasRanges&&Math.abs(r[1])<=Math.abs(r[0])&&(c=o!=null&&o.length?o[o.length-1]:r[1]),l.push(new D({variableName:t,dimensionName:m.name,values:[c],isSlice:!n.useRangeForRangedDimensionInfo||!!m.hasRanges}))}return l}function J(e){return!(d(e)||!e.length)&&e.some(n=>{if(n.values==null)return!0;const a=n.values.length;return a===0||a>1||!n.isSlice&&Array.isArray(n.values[0])})}function P(e,n){var l;if(d(n)||d(e))return null;let a=n.variables.map(i=>({...i}));return(l=e==null?void 0:e.variables)!=null&&l.length&&(a=a.filter(({name:i})=>e.variables.includes(i)),a.forEach(i=>{i.dimensions=i.dimensions.map(t=>S(t,e,i.name)).filter(g)})),a}function E(e,n){var u;const{values:a}=n;if(a!=null&&a.length)return Array.isArray(a[0])!==Array.isArray(e)?-1:Array.isArray(a[0])?a.findIndex(m=>m[0]===e[0]&&m[1]===e[1]):a.indexOf(e);const{extent:l}=n;if(Array.isArray(e)||e<l[0]||e>l[1])return-1;const i=n.interval||1;if(n.unit!=="ISO8601")return Math.round((e-l[0])/i);const t=l[0];let s=-1;switch(((u=n.intervalUnit)==null?void 0:u.toLowerCase())||"seconds"){case"seconds":s=Math.round((e-t)/1e3/i);break;case"minutes":s=Math.round((e-t)/6e4/i);break;case"hours":s=Math.round((e-t)/36e5/i);break;case"days":s=Math.round((e-t)/864e5/i);break;case"months":{const m=new Date(e).getUTCFullYear()-new Date(t).getUTCFullYear(),o=new Date(t).getUTCMonth(),r=new Date(e).getUTCMonth();s=m===0?r-o:r+11-o+12*(m-1)}break;case"years":s=Math.round((new Date(e).getUTCFullYear()-new Date(t).getUTCFullYear())/i);break;case"decades":s=Math.round((new Date(e).getUTCFullYear()-new Date(t).getUTCFullYear())/10/i)}return s}function w(e){var s,u,m;let n=(s=e.values)==null?void 0:s.length;if(n)return n;const{extent:a,unit:l}=e,i=e.interval||1,t=a?a[1]-a[0]:0;if(l!=="ISO8601")return Math.round(t/i);switch((m=(u=e.intervalUnit)==null?void 0:u.toLowerCase())!=null?m:"seconds"){case"seconds":n=Math.round(t/1e3/i);break;case"minutes":n=Math.round(t/6e4/i);break;case"hours":n=Math.round(t/36e5/i);break;case"days":n=Math.round(t/864e5/i);break;case"months":{const o=new Date(a[1]).getUTCFullYear()-new Date(a[0]).getUTCFullYear(),r=new Date(a[1][0]).getUTCMonth(),c=new Date(a[1][1]).getUTCMonth();n=o===0?c-r+1:c+11-r+12*(o-1)+1}break;case"years":n=Math.round((new Date(a[1]).getUTCFullYear()-new Date(a[0]).getUTCFullYear())/i);break;case"decades":n=Math.round((new Date(a[1]).getUTCFullYear()-new Date(a[0]).getUTCFullYear())/10/i);break;default:n=0}return n}function V(e,n){let a=0;const l=e[0].variableName,i=[...n.variables].sort((t,s)=>t.name>s.name?1:-1);for(let t=0;t<i.length;t++){const s=i[t],u=[...s.dimensions].sort((r,c)=>r.name>c.name?-1:1);if(s.name!==l){a+=u.map(r=>w(r)).reduce((r,c)=>r*c);continue}const m=u.map(r=>w(r)),o=u.length;for(let r=0;r<o;r++){const c=e.find(f=>f.dimensionName===u[r].name);if(c==null)return null;const v=E(c.values[0],u[r]);if(v===-1)return null;m.shift(),a+=r===o-1?v:v*m.reduce((f,U)=>f*U)}break}return a}export{L as a,z as c,O as d,J as g,B as h,x as m,D as p,R as s,P as v,V as y};
