import{O as B,s as m,k as $}from"./index.js";import{e as N,n as d}from"./enums2.js";import{F as G,G as S,C as l}from"./enums.js";import{t as H}from"./VertexElementDescriptor.js";var i,R,L,M,E,g,f;(function(t){t[t.FILL=0]="FILL",t[t.LINE=1]="LINE",t[t.MARKER=2]="MARKER",t[t.TEXT=3]="TEXT",t[t.LABEL=4]="LABEL"})(i||(i={})),function(t){t[t.NONE=0]="NONE",t[t.MAP=1]="MAP",t[t.LABEL=2]="LABEL",t[t.LABEL_ALPHA=4]="LABEL_ALPHA",t[t.HITTEST=8]="HITTEST",t[t.HIGHLIGHT=16]="HIGHLIGHT",t[t.CLIP=32]="CLIP",t[t.DEBUG=64]="DEBUG",t[t.NUM_DRAW_PHASES=9]="NUM_DRAW_PHASES"}(R||(R={})),function(t){t[t.SIZE=0]="SIZE",t[t.COLOR=1]="COLOR",t[t.OPACITY=2]="OPACITY",t[t.ROTATION=3]="ROTATION"}(L||(L={})),function(t){t[t.NONE=0]="NONE",t[t.OPACITY=1]="OPACITY",t[t.COLOR=2]="COLOR",t[t.ROTATION=4]="ROTATION",t[t.SIZE_MINMAX_VALUE=8]="SIZE_MINMAX_VALUE",t[t.SIZE_SCALE_STOPS=16]="SIZE_SCALE_STOPS",t[t.SIZE_FIELD_STOPS=32]="SIZE_FIELD_STOPS",t[t.SIZE_UNIT_VALUE=64]="SIZE_UNIT_VALUE"}(M||(M={})),function(t){t[t.MINMAX_TARGETS_OUTLINE=128]="MINMAX_TARGETS_OUTLINE",t[t.SCALE_TARGETS_OUTLINE=256]="SCALE_TARGETS_OUTLINE",t[t.FIELD_TARGETS_OUTLINE=512]="FIELD_TARGETS_OUTLINE",t[t.UNIT_TARGETS_OUTLINE=1024]="UNIT_TARGETS_OUTLINE"}(E||(E={})),function(t){t[t.SPRITE=0]="SPRITE",t[t.GLYPH=1]="GLYPH"}(g||(g={})),function(t){t[t.DEFAULT=0]="DEFAULT",t[t.SIMPLE=1]="SIMPLE",t[t.DOT_DENSITY=2]="DOT_DENSITY",t[t.OUTLINE_FILL=3]="OUTLINE_FILL",t[t.OUTLINE_FILL_SIMPLE=4]="OUTLINE_FILL_SIMPLE",t[t.HEATMAP=5]="HEATMAP",t[t.PIE_CHART=6]="PIE_CHART"}(f||(f={}));const A=B.getLogger("esri.views.2d.engine.webgl.Utils"),c="geometry",v=[{name:c,strideInBytes:12}],b=[{name:c,strideInBytes:36}],Y=[{name:c,strideInBytes:24}],x=[{name:c,strideInBytes:12}],Z=[{name:c,strideInBytes:40}],V=[{name:c,strideInBytes:36}],z=[{name:c,strideInBytes:36}];function I(t){const n={};for(const e of t)n[e.name]=e.strideInBytes;return n}const X=I([{name:c,strideInBytes:36}]),k=I(v),K=I(b),W=I(Y),q=I(x),J=I(Z),Q=I(V),j=I(z);function Nt(t,n){switch(t){case i.MARKER:return n===f.HEATMAP?k:X;case i.FILL:switch(n){case f.DOT_DENSITY:return q;case f.SIMPLE:case f.OUTLINE_FILL_SIMPLE:return W;default:return K}case i.LINE:return J;case i.TEXT:return Q;case i.LABEL:return j}}const tt=[c],nt=[c],et=[c],rt=[c],at=[c];function st(t){switch(t){case i.MARKER:return tt;case i.FILL:return nt;case i.LINE:return et;case i.TEXT:return rt;case i.LABEL:return at}}function it(t){switch(t%4){case 0:case 2:return 4;case 1:case 3:return 1}}function dt(t,n){switch(n%4){case 0:case 2:return new Uint32Array(Math.floor(t*n/4));case 1:case 3:return new Uint8Array(t*n)}}function mt(t,n){switch(n%4){case 0:case 2:return new Uint32Array(t);case 1:case 3:return new Uint8Array(t)}}function Ot(t){return t!=null}function yt(t){return typeof t=="number"}function pt(t){switch(t){case"butt":return N.BUTT;case"round":return N.ROUND;case"square":return N.SQUARE;default:return A.error(new m("mapview-invalid-type",`Cap type ${t} is not a valid option. Defaulting to round`)),N.ROUND}}function Ut(t){switch(t){case"miter":return d.MITER;case"bevel":return d.BEVEL;case"round":return d.ROUND;default:return A.error(new m("mapview-invalid-type",`Join type ${t} is not a valid option. Defaulting to round`)),d.ROUND}}function Rt(t){switch(t){case"opacity":return L.OPACITY;case"color":return L.COLOR;case"rotation":return L.ROTATION;case"size":return L.SIZE;default:return A.error(`Cannot interpret unknown vv: ${t}`),null}}function Mt(t,n,e,r,a,u,s){for(const T in u){const o=u[T].stride,O=it(o),p=u[T].data,U=e[T].data;if(p==null||U==null)continue;const h=o*a.vertexCount/O,C=o*t/O,F=o*a.vertexFrom/O;for(let _=0;_<h;++_)U[_+C]=p[_+F]}if(s!=null&&r!=null){const T=a.indexCount;for(let o=0;o<T;++o)r[o+n]=s[o+a.indexFrom]-a.vertexFrom+t}}const Et={[c]:G.STATIC_DRAW};function gt(t,n){const e=[];for(let r=0;r<5;++r){const a=st(r),u={};for(const s of a)u[s]={data:n(r,s)};e.push({data:t(r),buffers:u})}return e}function ct(t){switch(t){case l.BYTE:case l.UNSIGNED_BYTE:return 1;case l.SHORT:case l.UNSIGNED_SHORT:return 2;case l.FLOAT:case l.INT:case l.UNSIGNED_INT:return 4}}function Dt(t){switch(t){case S.UNSIGNED_BYTE:return 1;case S.UNSIGNED_SHORT_4_4_4_4:return 2;case S.FLOAT:return 4;default:return void A.error(new m("webgl-utils",`Unable to handle type ${t}`))}}function wt(t){switch(t){case S.UNSIGNED_BYTE:return Uint8Array;case S.UNSIGNED_SHORT_4_4_4_4:return Uint16Array;case S.FLOAT:return Float32Array;default:return void A.error(new m("webgl-utils",`Unable to handle type ${t}`))}}function ut(t){var e;const n={};for(const r in t){const a=t[r];let u=0;n[r]=a.map(s=>{const T=new H(s.name,s.count,s.type,u,0,s.normalized||!1);return u+=s.count*ct(s.type),T}),(e=n[r])==null||e.forEach(s=>s.stride=u)}return n}const ot=t=>{const n=new Map;for(const e in t)for(const r of t[e])n.set(r.name,r.location);return n},It=t=>{const n={};for(const e in t){const r=t[e];n[e]=r!=null&&r.length?r[0].stride:0}return n},y=new Map,Pt=(t,n)=>{if(!y.has(t)){const e=ut(n),r={strides:It(e),bufferLayouts:e,attributes:ot(n)};y.set(t,r)}return y.get(t)};function ht(t){t(i.FILL),t(i.LINE),t(i.MARKER),t(i.TEXT),t(i.LABEL)}const Ct=t=>"path"in t&&Tt(t.path),Ft=t=>"url"in t&&t.url||"imageData"in t&&t.imageData,Bt=t=>"imageData"in t&&t.imageData&&"contentType"in t&&t.contentType?`data:${t.contentType};base64,${t.imageData}`:"url"in t?t.url:null,D=t=>t!=null&&t.startsWith("data:image/gif"),$t=t=>"url"in t&&t.url&&(t.url.includes(".gif")||D(t.url))||"contentType"in t&&t.contentType==="image/gif"||"imageData"in t&&D(t.imageData),w=t=>t!=null&&t.startsWith("data:image/png"),Gt=t=>"url"in t&&t.url&&(t.url.includes(".png")||w(t.url))||"contentType"in t&&t.contentType==="image/png"||"imageData"in t&&w(t.imageData),Ht=t=>t.type&&t.type.toLowerCase().includes("3d");function vt(t){switch(t.type){case"line":{const n=t;return n.cim.type==="CIMSolidStroke"&&!n.dashTemplate}case"fill":return t.cim.type==="CIMSolidFill";case"esriSFS":return t.style==="esriSFSSolid"||t.style==="esriSFSNull";case"esriSLS":return t.style==="esriSLSSolid"||t.style==="esriSLSNull";default:return!1}}const bt=t=>t.includes("data:image/svg+xml");function Yt(t){switch("cim"in t?t.cim.type:t.type){case"esriSMS":case"esriPMS":case"CIMPointSymbol":return!1;case"CIMVectorMarker":case"CIMCharacterMarker":case"CIMPictureMarker":return lt(t);default:return!0}}function xt(t){const n="maxVVSize"in t&&t.maxVVSize,e="width"in t&&t.width||"size"in t&&t.size||0;return n||e}function Zt(t){const n=[];for(let e=0;e<t.length;e++)n.push(t.charCodeAt(e));return n}const Tt=t=>!!t&&(t=t.trim(),!!(/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4)),lt=t=>{var n,e;return t.type==="fill"&&((e=(n=t==null?void 0:t.cim)==null?void 0:n.markerPlacement)==null?void 0:e.type)==="CIMMarkerPlacementInsidePolygon"},Lt=new Float32Array(1);new Uint32Array(Lt.buffer);function Vt(t){return[255&t,(65280&t)>>>8,(16711680&t)>>>16,(4278190080&t)>>>24]}function zt(t,n){return 65535&t|n<<16}function P(t,n,e,r){return 255&t|(255&n)<<8|(255&e)<<16|r<<24}function Xt(t,n=0,e=!1){const r=t[n+3];return t[n+0]*=r,t[n+1]*=r,t[n+2]*=r,e||(t[n+3]*=255),t}function kt(t){if(!t)return 0;const{r:n,g:e,b:r,a}=t;return P(n*a,e*a,r*a,255*a)}function Kt(t){if(!t)return 0;const[n,e,r,a]=t;return P(n*(a/255),e*(a/255),r*(a/255),a)}function Wt(t,n,e=0){if($(n))return t[e+0]=0,t[e+1]=0,t[e+2]=0,void(t[e+3]=0);const{r,g:a,b:u,a:s}=n;t[e+0]=r*s/255,t[e+1]=a*s/255,t[e+2]=u*s/255,t[e+3]=s}export{yt as $,E as A,i as E,it as F,Ut as G,gt as H,lt as I,Dt as K,M as L,Vt as M,mt as P,Nt as R,f as S,R as T,Rt as V,wt as W,Et as Y,g as _,P as a,Kt as b,kt as c,xt as d,Pt as e,Yt as f,Xt as g,Wt as h,$t as i,Mt as j,pt as k,vt as l,bt as m,Ct as n,Gt as o,Zt as p,Ft as r,Bt as s,ht as t,Ht as u,zt as w,dt as x,Ot as z};
