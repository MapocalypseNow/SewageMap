import{B as y,C as D,eU as N,D as x,dd as I,a8 as L,v as T,L as w}from"./index.2901469c.js";var C;let h=C=class extends I{constructor(e){super(e),this.variableName=null,this.dimensionName=null,this.values=[],this.isSlice=!1}clone(){return new C({variableName:this.variableName,dimensionName:this.dimensionName,values:L(this.values),isSlice:this.isSlice})}};y([D({type:String,json:{write:!0}})],h.prototype,"variableName",void 0),y([D({type:String,json:{write:!0}})],h.prototype,"dimensionName",void 0),y([D({type:N.array(N.oneOf([N.native(Number),N.array(N.native(Number))])),json:{write:!0}})],h.prototype,"values",void 0),y([D({type:Boolean,json:{write:!0}})],h.prototype,"isSlice",void 0),h=C=y([x("esri.layers.support.DimensionalDefinition")],h);const U=h;function S(e,n,a){var t;const o=n.shift();if(a.length===0){const s=[];a.push({sliceId:-1,multidimensionalDefinition:s})}const i=a.length;for(let s=0;s<i;s++){const u=a.shift().multidimensionalDefinition;(t=o.values)==null||t.forEach(m=>{a.push({sliceId:-1,multidimensionalDefinition:[...u,{variableName:e,dimensionName:o.name,values:[m]}]})})}n.length&&S(e,n,a)}function R(e,n){const a=[];let o=0;return(n?e.variables.filter(i=>i.name.toLowerCase()===n.toLowerCase()):[...e.variables].sort((i,t)=>i.name>t.name?1:-1)).forEach(i=>{const t=[],s=[...i.dimensions].sort((u,m)=>u.name>m.name?-1:1);S(i.name,s,t),t.forEach(u=>{a.push({...u,sliceId:o++})})}),a}function $(e,n,a){let o=e;if(n&&(n=[...n].sort((i,t)=>i.dimensionName<t.dimensionName?-1:1)).forEach(({dimensionName:i,values:t,isSlice:s})=>{t.length&&(o=o.filter(u=>{const m=u.multidimensionalDefinition.find(r=>r.dimensionName===i);if(m==null)return!1;const l=m.values[0];return typeof l=="number"?typeof t[0]=="number"?t.includes(l):t.some(r=>r[0]<=l&&r[1]>=l):typeof t[0]=="number"?t.some(r=>l[0]<=r&&l[1]>=r):s?t.some(r=>r[0]===l[0]&&r[0]===l[1]):t.some(r=>r[0]>=l[0]&&r[0]<=l[1]||r[1]>=l[0]&&r[1]<=l[1]||r[0]<l[0]&&r[1]>l[1])}))}),o.length&&a&&T(a.start)&&T(a.end)){const i=a.start.getTime(),t=a.end.getTime(),s=o[0].multidimensionalDefinition.findIndex(u=>u.dimensionName==="StdTime");s>-1&&(o=o.filter(u=>{const m=u.multidimensionalDefinition[s].values[0];return i<=m&&t>=m}))}return o.map(i=>i.sliceId)}function A(e,n){return Array.isArray(e)?n[0]===n[1]?e[0]===n[0]||e[1]===n[0]:e[0]>=n[0]&&e[0]<=n[1]&&e[1]>=n[0]&&e[1]<=n[1]:e>=n[0]&&e<=n[1]}function E(e,n){return e[0]<=n[0]&&e[1]>=n[0]||e[0]<=n[1]&&e[1]>=n[1]||e[0]>=n[0]&&e[1]<=n[1]}function F(e){return e.length===1?[e[0],e[0]]:[e[0],e[e.length-1]]}function Y(e,n,a){var s,u,m;if(!((s=n==null?void 0:n.subsetDefinitions)!=null&&s.length))return e;let o;if(a){const{variables:l}=n;if(l.length&&!l.includes(a))return null;const r=n.subsetDefinitions.find(c=>c.dimensionName===e.name&&c.variableName===a);if(!((u=r==null?void 0:r.values)!=null&&u.length))return e;o=F(r.values)}else o=(m=n.dimensions.find(({name:l})=>l===e.name))==null?void 0:m.extent;const i=o;if(!i||!(i!=null&&i.length))return e;const t=e.values.filter(l=>A(l,i));return{...e,extent:[...i],values:t}}function B(e,n,a){var i;if(!((i=n==null?void 0:n.subsetDefinitions)!=null&&i.length))return!1;const{variables:o}=n;if(o.length&&e.some(({variableName:t})=>t&&!o.includes(t)))return!0;for(let t=0;t<e.length;t++){const s=e[t],u=n.subsetDefinitions.find(m=>(s.variableName===""||m.variableName===s.variableName)&&m.dimensionName===s.dimensionName);if(u!=null&&u.values.length){const m=F(u.values);if(!s.isSlice&&s.values.length===2&&!Array.isArray(s.values[0])&&s.values[0]!==s.values[1]&&a){if(!E(s.values,m))return!0}else if(s.values.some(l=>!A(l,m)))return!0}}return!1}function z(e,n={}){var c,v,g;const{multidimensionalInfo:a,keyProperties:o}=e;if(w(a))return null;const i=n.variableName||(o==null?void 0:o.DefaultVariable);let{variables:t}=a;const{multidimensionalSubset:s}=n;(c=s==null?void 0:s.variables)!=null&&c.length&&(t=t.filter(({name:f})=>s.variables.includes(f)));const u=i&&(v=t.find(({name:f})=>f===i))!=null?v:t[0];if(!u)return null;const m=[],{dimensions:l,name:r}=u;if(l.length===0)return[new U({variableName:r,dimensionName:"",values:[],isSlice:!0})];for(let f=0;f<l.length;f++){const b=Y(l[f],s,r);if(!b)return null;const{values:d,extent:p}=b;let M=(g=d==null?void 0:d[0])!=null?g:p[0];b.name.toLowerCase()==="stdz"&&!b.hasRanges&&Math.abs(p[1])<=Math.abs(p[0])&&(M=d!=null&&d.length?d[d.length-1]:p[1]),m.push(new U({variableName:r,dimensionName:b.name,values:[M],isSlice:!n.useRangeForRangedDimensionInfo||!!b.hasRanges}))}return m}function P(e){return!(w(e)||!e.length)&&e.some(n=>{if(n.values==null)return!0;const a=n.values.length;return a===0||a>1||!n.isSlice&&Array.isArray(n.values[0])})}function V(e,n){var o;if(w(n)||w(e))return null;let a=n.variables.map(i=>({...i}));return(o=e==null?void 0:e.variables)!=null&&o.length&&(a=a.filter(({name:i})=>e.variables.includes(i)),a.forEach(i=>{i.dimensions=i.dimensions.map(t=>Y(t,e,i.name))})),a}function j(e,n){var u;const{values:a}=n;if(a!=null&&a.length)return Array.isArray(a[0])!==Array.isArray(e)?-1:Array.isArray(a[0])?a.findIndex(m=>m[0]===e[0]&&m[1]===e[1]):a.indexOf(e);const{extent:o}=n;if(Array.isArray(e)||e<o[0]||e>o[1])return-1;const i=n.interval||1;if(n.unit!=="ISO8601")return Math.round((e-o[0])/i);const t=o[0];let s=-1;switch(((u=n.intervalUnit)==null?void 0:u.toLowerCase())||"seconds"){case"seconds":s=Math.round((e-t)/1e3/i);break;case"minutes":s=Math.round((e-t)/6e4/i);break;case"hours":s=Math.round((e-t)/36e5/i);break;case"days":s=Math.round((e-t)/864e5/i);break;case"months":{const m=new Date(e).getUTCFullYear()-new Date(t).getUTCFullYear(),l=new Date(t).getUTCMonth(),r=new Date(e).getUTCMonth();s=m===0?r-l:r+11-l+12*(m-1)}break;case"years":s=Math.round((new Date(e).getUTCFullYear()-new Date(t).getUTCFullYear())/i);break;case"decades":s=Math.round((new Date(e).getUTCFullYear()-new Date(t).getUTCFullYear())/10/i)}return s}function k(e){var s,u,m;let n=(s=e.values)==null?void 0:s.length;if(n)return n;const{extent:a,unit:o}=e,i=e.interval||1,t=a?a[1]-a[0]:0;if(o!=="ISO8601")return Math.round(t/i);switch((m=(u=e.intervalUnit)==null?void 0:u.toLowerCase())!=null?m:"seconds"){case"seconds":n=Math.round(t/1e3/i);break;case"minutes":n=Math.round(t/6e4/i);break;case"hours":n=Math.round(t/36e5/i);break;case"days":n=Math.round(t/864e5/i);break;case"months":{const l=new Date(a[1]).getUTCFullYear()-new Date(a[0]).getUTCFullYear(),r=new Date(a[1][0]).getUTCMonth(),c=new Date(a[1][1]).getUTCMonth();n=l===0?c-r+1:c+11-r+12*(l-1)+1}break;case"years":n=Math.round((new Date(a[1]).getUTCFullYear()-new Date(a[0]).getUTCFullYear())/i);break;case"decades":n=Math.round((new Date(a[1]).getUTCFullYear()-new Date(a[0]).getUTCFullYear())/10/i);break;default:n=0}return n}function q(e,n){let a=0;const o=e[0].variableName,i=[...n.variables].sort((t,s)=>t.name>s.name?1:-1);for(let t=0;t<i.length;t++){const s=i[t],u=[...s.dimensions].sort((r,c)=>r.name>c.name?-1:1);if(s.name!==o){a+=u.map(r=>k(r)).reduce((r,c)=>r*c);continue}const m=u.map(r=>k(r)),l=u.length;for(let r=0;r<l;r++){const c=e.find(g=>g.dimensionName===u[r].name);if(c==null)return null;const v=j(c.values[0],u[r]);if(v===-1)return null;m.shift(),a+=r===l-1?v:v*m.reduce((g,f)=>g*f)}break}return a}export{z as c,V as d,P as f,q as g,R as i,B as m,U as p,$ as s};
