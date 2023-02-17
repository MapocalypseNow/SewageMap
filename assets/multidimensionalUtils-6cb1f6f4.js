import{a8 as g,a9 as N,g1 as b,aa as F,aK as Y,au as I,a3 as C,I as p}from"./vendor-445d19db.js";var w;let v=w=class extends Y{constructor(e){super(e),this.variableName=null,this.dimensionName=null,this.values=[],this.isSlice=!1}clone(){return new w({variableName:this.variableName,dimensionName:this.dimensionName,values:I(this.values),isSlice:this.isSlice})}};g([N({type:String,json:{write:!0}})],v.prototype,"variableName",void 0),g([N({type:String,json:{write:!0}})],v.prototype,"dimensionName",void 0),g([N({type:b.array(b.oneOf([b.native(Number),b.array(b.native(Number))])),json:{write:!0}})],v.prototype,"values",void 0),g([N({type:Boolean,json:{write:!0}})],v.prototype,"isSlice",void 0),v=w=g([F("esri.layers.support.DimensionalDefinition")],v);const M=v;function U(e,n,t){var a;const o=n.shift();if(t.length===0){const s=[];t.push({sliceId:-1,multidimensionalDefinition:s})}const i=t.length;for(let s=0;s<i;s++){const u=t.shift().multidimensionalDefinition;(a=o.values)==null||a.forEach(m=>{t.push({sliceId:-1,multidimensionalDefinition:[...u,{variableName:e,dimensionName:o.name,values:[m]}]})})}n.length&&U(e,n,t)}function j(e,n){const t=[];let o=0;return(n?e.variables.filter(i=>i.name.toLowerCase()===n.toLowerCase()):[...e.variables].sort((i,a)=>i.name>a.name?1:-1)).forEach(i=>{const a=[],s=[...i.dimensions].sort((u,m)=>u.name>m.name?-1:1);U(i.name,s,a),a.forEach(u=>{t.push({...u,sliceId:o++})})}),t}function O(e,n,t){let o=e;if(n&&(n=[...n].sort((i,a)=>i.dimensionName<a.dimensionName?-1:1)).forEach(({dimensionName:i,values:a,isSlice:s})=>{a.length&&(o=o.filter(u=>{const m=u.multidimensionalDefinition.find(r=>r.dimensionName===i);if(m==null)return!1;const l=m.values[0];return typeof l=="number"?typeof a[0]=="number"?a.includes(l):a.some(r=>r[0]<=l&&r[1]>=l):typeof a[0]=="number"?a.some(r=>l[0]<=r&&l[1]>=r):s?a.some(r=>r[0]===l[0]&&r[0]===l[1]):a.some(r=>r[0]>=l[0]&&r[0]<=l[1]||r[1]>=l[0]&&r[1]<=l[1]||r[0]<l[0]&&r[1]>l[1])}))}),o.length&&t&&C(t.start)&&C(t.end)){const i=t.start.getTime(),a=t.end.getTime(),s=o[0].multidimensionalDefinition.findIndex(u=>u.dimensionName==="StdTime");s>-1&&(o=o.filter(u=>{const m=u.multidimensionalDefinition[s].values[0];return i<=m&&a>=m}))}return o.map(i=>i.sliceId)}function k(e,n){return Array.isArray(e)?n[0]===n[1]?e[0]===n[0]||e[1]===n[0]:e[0]>=n[0]&&e[0]<=n[1]&&e[1]>=n[0]&&e[1]<=n[1]:e>=n[0]&&e<=n[1]}function x(e,n){return e[0]<=n[0]&&e[1]>=n[0]||e[0]<=n[1]&&e[1]>=n[1]||e[0]>=n[0]&&e[1]<=n[1]}function S(e){return e.length===1?[e[0],e[0]]:[e[0],e[e.length-1]]}function A(e,n,t){var s,u,m;if(!((s=n==null?void 0:n.subsetDefinitions)!=null&&s.length))return e;let o;if(t){const{variables:l}=n;if(l.length&&!l.includes(t))return null;const r=n.subsetDefinitions.find(c=>c.dimensionName===e.name&&c.variableName===t);if(!((u=r==null?void 0:r.values)!=null&&u.length))return e;o=S(r.values)}else o=(m=n.dimensions.find(({name:l})=>l===e.name))==null?void 0:m.extent;const i=o;if(!i||!(i!=null&&i.length))return e;const a=e.values.filter(l=>k(l,i));return{...e,extent:[...i],values:a}}function R(e,n,t){var i;if(!((i=n==null?void 0:n.subsetDefinitions)!=null&&i.length))return!1;const{variables:o}=n;if(o.length&&e.some(({variableName:a})=>a&&!o.includes(a)))return!0;for(let a=0;a<e.length;a++){const s=e[a],u=n.subsetDefinitions.find(m=>(s.variableName===""||m.variableName===s.variableName)&&m.dimensionName===s.dimensionName);if(u!=null&&u.values.length){const m=S(u.values);if(!s.isSlice&&s.values.length===2&&!Array.isArray(s.values[0])&&s.values[0]!==s.values[1]&&t){if(!x(s.values,m))return!0}else if(s.values.some(l=>!k(l,m)))return!0}}return!1}function $(e,n={}){var c;const{multidimensionalInfo:t,keyProperties:o}=e;if(p(t))return null;const i=n.variableName||(o==null?void 0:o.DefaultVariable);let{variables:a}=t;const{multidimensionalSubset:s}=n;(c=s==null?void 0:s.variables)!=null&&c.length&&(a=a.filter(({name:f})=>s.variables.includes(f)));const u=i?a.find(({name:f})=>f===i)??a[0]:a[0];if(!u)return null;const m=[],{dimensions:l,name:r}=u;if(l.length===0)return[new M({variableName:r,dimensionName:"",values:[],isSlice:!0})];for(let f=0;f<l.length;f++){const d=A(l[f],s,r);if(!d)return null;const{values:h,extent:y}=d;let D=(h==null?void 0:h[0])??y[0];d.name.toLowerCase()==="stdz"&&!d.hasRanges&&Math.abs(y[1])<=Math.abs(y[0])&&(D=h!=null&&h.length?h[h.length-1]:y[1]),m.push(new M({variableName:r,dimensionName:d.name,values:[D],isSlice:!n.useRangeForRangedDimensionInfo||!!d.hasRanges}))}return m}function z(e){return!(p(e)||!e.length)&&e.some(n=>{if(n.values==null)return!0;const t=n.values.length;return t===0||t>1||!n.isSlice&&Array.isArray(n.values[0])})}function B(e,n){var o;if(p(n)||p(e))return null;let t=n.variables.map(i=>({...i}));return(o=e==null?void 0:e.variables)!=null&&o.length&&(t=t.filter(({name:i})=>e.variables.includes(i)),t.forEach(i=>{i.dimensions=i.dimensions.map(a=>A(a,e,i.name))})),t}function E(e,n){var u;const{values:t}=n;if(t!=null&&t.length)return Array.isArray(t[0])!==Array.isArray(e)?-1:Array.isArray(t[0])?t.findIndex(m=>m[0]===e[0]&&m[1]===e[1]):t.indexOf(e);const{extent:o}=n;if(Array.isArray(e)||e<o[0]||e>o[1])return-1;const i=n.interval||1;if(n.unit!=="ISO8601")return Math.round((e-o[0])/i);const a=o[0];let s=-1;switch(((u=n.intervalUnit)==null?void 0:u.toLowerCase())||"seconds"){case"seconds":s=Math.round((e-a)/1e3/i);break;case"minutes":s=Math.round((e-a)/6e4/i);break;case"hours":s=Math.round((e-a)/36e5/i);break;case"days":s=Math.round((e-a)/864e5/i);break;case"months":{const m=new Date(e).getUTCFullYear()-new Date(a).getUTCFullYear(),l=new Date(a).getUTCMonth(),r=new Date(e).getUTCMonth();s=m===0?r-l:r+11-l+12*(m-1)}break;case"years":s=Math.round((new Date(e).getUTCFullYear()-new Date(a).getUTCFullYear())/i);break;case"decades":s=Math.round((new Date(e).getUTCFullYear()-new Date(a).getUTCFullYear())/10/i)}return s}function T(e){var s,u;let n=(s=e.values)==null?void 0:s.length;if(n)return n;const{extent:t,unit:o}=e,i=e.interval||1,a=t?t[1]-t[0]:0;if(o!=="ISO8601")return Math.round(a/i);switch(((u=e.intervalUnit)==null?void 0:u.toLowerCase())??"seconds"){case"seconds":n=Math.round(a/1e3/i);break;case"minutes":n=Math.round(a/6e4/i);break;case"hours":n=Math.round(a/36e5/i);break;case"days":n=Math.round(a/864e5/i);break;case"months":{const m=new Date(t[1]).getUTCFullYear()-new Date(t[0]).getUTCFullYear(),l=new Date(t[1][0]).getUTCMonth(),r=new Date(t[1][1]).getUTCMonth();n=m===0?r-l+1:r+11-l+12*(m-1)+1}break;case"years":n=Math.round((new Date(t[1]).getUTCFullYear()-new Date(t[0]).getUTCFullYear())/i);break;case"decades":n=Math.round((new Date(t[1]).getUTCFullYear()-new Date(t[0]).getUTCFullYear())/10/i);break;default:n=0}return n}function K(e,n){let t=0;const o=e[0].variableName,i=[...n.variables].sort((a,s)=>a.name>s.name?1:-1);for(let a=0;a<i.length;a++){const s=i[a],u=[...s.dimensions].sort((r,c)=>r.name>c.name?-1:1);if(s.name!==o){t+=u.map(r=>T(r)).reduce((r,c)=>r*c);continue}const m=u.map(r=>T(r)),l=u.length;for(let r=0;r<l;r++){const c=e.find(d=>d.dimensionName===u[r].name);if(c==null)return null;const f=E(c.values[0],u[r]);if(f===-1)return null;m.shift(),t+=r===l-1?f:f*m.reduce((d,h)=>d*h)}break}return t}export{$ as c,B as d,z as f,K as g,j as i,R as m,M as p,O as s};
