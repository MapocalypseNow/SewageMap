import{cD as x,bU as G,s as S,v as U,a as D,f as u,cH as $,cI as H,fm as j,cF as O,cG as P,fn as E,fo as I,fp as g,fq as w,cE as M}from"./index.eddec14a.js";import{c as R,a as N}from"./devEnvironmentUtils.d8d0484c.js";function A(e,t,a,l){return e.name?e.styleName&&e.styleName==="Esri2DPointSymbolsStyle"?W(e,t,l):x(e,t,l).then(r=>T(G(r),e.name,t,a,l)):Promise.reject(new S("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function T(e,t,a,l,r){var f,d,h;const y=e.data,m=a&&U(a.portal)?a.portal:D.getDefault(),p={portal:m,url:u(e.baseUrl),origin:"portal-item"},o=y.items.find(n=>n.name===t);if(!o){const n=`The symbol name '${t}' could not be found`;return Promise.reject(new S("symbolstyleutils:symbol-name-not-found",n,{symbolName:t}))}let i=$(H(o,l),p),c=(d=(f=o.thumbnail)==null?void 0:f.href)!=null?d:null;const b=o.thumbnail&&o.thumbnail.imageData;R()&&(i=(h=N(i))!=null?h:"",c=N(c));const v={portal:m,url:u(j(i)),origin:"portal-item"};return O(i,r).then(n=>{const F=l==="cimRef"?P(n.data):n.data,s=E(F,v);if(s&&I(s)){if(c){const q=$(c,p);s.thumbnail=new g({url:q})}else b&&(s.thumbnail=new g({url:`data:image/png;base64,${b}`}));e.styleUrl?s.styleOrigin=new w({portal:a.portal,styleUrl:e.styleUrl,name:t}):e.styleName&&(s.styleOrigin=new w({portal:a.portal,styleName:e.styleName,name:t}))}return s})}function W(e,t,a){const l=M.replace(/\{SymbolName\}/gi,e.name),r=U(t.portal)?t.portal:D.getDefault();return O(l,a).then(y=>{const m=P(y.data);return E(m,{portal:r,url:u(j(l)),origin:"portal-item"})})}export{T as fetchSymbolFromStyle,A as resolveWebStyleSymbol};