import{dg as N,gD as A,f4 as U,dh as G,P as R,bo as $,b3 as J,bn as E,cA as P,eJ as z,gK as B,gL as Z,cs as k,gb as _,o as q,K as D,b9 as I,ba as g,gM as K,bc as S,gN as y,bb as L,gO as V,gP as j}from"./vendor-f61b19da.js";import{f as O,g as F}from"./projectionSupport-d522253e.js";const C=new N({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),b=Object.freeze({}),x=new S,T=new S,p=new S,l={esriGeometryPoint:y,esriGeometryPolyline:L,esriGeometryPolygon:V,esriGeometryMultipoint:j};function et(t,a,s,n=t.hasZ,e=t.hasM){if(R(a))return null;const o=t.hasZ&&n,r=t.hasM&&e;if(s){const i=g(p,a,t.hasZ,t.hasM,"esriGeometryPoint",s,n,e);return y(i,o,r)}return y(a,o,r)}function nt(t,a,s,n,e,o,r=a,i=s){var d,h,w;const u=a&&r,f=s&&i,c=D(n)?"coords"in n?n:n.geometry:null;if(R(c))return null;if(e){let m=I(T,c,a,s,t,e,r,i);return o&&(m=g(p,m,u,f,t,o)),((d=l[t])==null?void 0:d.call(l,m,u,f))??null}if(o){const m=g(p,c,a,s,t,o,r,i);return((h=l[t])==null?void 0:h.call(l,m,u,f))??null}return K(x,c,a,s,r,i),((w=l[t])==null?void 0:w.call(l,x,u,f))??null}async function at(t,a,s){const{outFields:n,orderByFields:e,groupByFieldsForStatistics:o,outStatistics:r}=t;if(n)for(let i=0;i<n.length;i++)n[i]=n[i].trim();if(e)for(let i=0;i<e.length;i++)e[i]=e[i].trim();if(o)for(let i=0;i<o.length;i++)o[i]=o[i].trim();if(r)for(let i=0;i<r.length;i++)r[i].onStatisticField&&(r[i].onStatisticField=r[i].onStatisticField.trim());return t.geometry&&!t.outSR&&(t.outSR=t.geometry.spatialReference),X(t,a,s)}async function X(t,a,s){var o;if(!t)return null;let{where:n}=t;if(t.where=n=n&&n.trim(),(!n||/^1 *= *1$/.test(n)||a&&a===n)&&(t.where=null),!t.geometry)return t;let e=await Q(t);if(t.distance=0,t.units=null,t.spatialRel==="esriSpatialRelEnvelopeIntersects"){const{spatialReference:r}=t.geometry;e=A(e),e.spatialReference=r}if(e){await O(e.spatialReference,s),e=H(e,s);const r=(await U(G(e)))[0];if(R(r))throw b;const i="quantizationParameters"in t&&((o=t.quantizationParameters)==null?void 0:o.tolerance)||"maxAllowableOffset"in t&&t.maxAllowableOffset||0,u=i&&v(e,s)?{densificationStep:8*i}:void 0,f=r.toJSON(),c=await F(f,f.spatialReference,s,u);if(!c)throw b;c.spatialReference=s,t.geometry=c}return t}function v(t,a){if(!t)return!1;const s=t.spatialReference;return($(t)||J(t)||E(t))&&!P(s,a)&&!z(s,a)}function H(t,a){const s=t.spatialReference;return v(t,a)&&$(t)?{spatialReference:s,rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]}:t}async function Q(t){const{distance:a,units:s}=t,n=t.geometry;if(a==null||"vertexAttributes"in n)return n;const e=n.spatialReference,o=s?C.fromJSON(s):B(e),r=e&&(Z(e)||k(e))?n:await O(e,_).then(()=>F(n,_));return(await W())(r.spatialReference,r,a,o)}async function W(){return(await q(()=>import("./geometryEngineJSON-a45b7108.js"),["assets/geometryEngineJSON-a45b7108.js","assets/geometryEngineBase-3dd302e0.js","assets/geometryEngineJSON-45c195fe.js","assets/json-48e3ea08.js"])).geodesicBuffer}function st(t){return t&&M in t?JSON.parse(JSON.stringify(t,Y)):t}const M="_geVersion",Y=(t,a)=>t!==M?a:void 0;export{st as E,b as F,X as J,et as b,nt as v,at as z};
