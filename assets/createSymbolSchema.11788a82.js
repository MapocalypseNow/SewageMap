import{E as u,S}from"./color.1638605e.js";import{f as y,_ as V,A as b}from"./MaterialKey.04e0f9bd.js";import"./vendor.f8a4aecc.js";import"./enums.9a5c29c3.js";import"./enums.3c1fa5b5.js";import"./VertexElementDescriptor.5da9dfe9.js";function p(e){var r;return e.type==="line-marker"?{type:"line-marker",color:(r=e.color)==null?void 0:r.toJSON(),placement:e.placement,style:e.style}:e.constructor.fromJSON(e.toJSON()).toJSON()}function f(e){return b(e)}function w(e,r,t=!1){if(!e)return null;switch(e.type){case"simple-fill":case"picture-fill":return x(e,r,t);case"simple-marker":case"picture-marker":return g(e,r,t);case"simple-line":return K(e,r,t);case"text":return z(e,r,t);case"label":return d(e,r,t);case"cim":return{type:"cim",rendererKey:r.vvFlags,data:e.data,maxVVSize:r.maxVVSize};case"CIMSymbolReference":return{type:"cim",rendererKey:r.vvFlags,data:e,maxVVSize:r.maxVVSize};case"web-style":return{...p(e),type:"web-style",hash:e.hash(),rendererKey:r.vvFlags,maxVVSize:r.maxVVSize};default:throw new Error(`symbol not supported ${e.type}`)}}function d(e,r,t){const a=e.toJSON(),l=y(u.LABEL,{...r,placement:a.labelPlacement});return{materialKey:t?f(l):l,hash:e.hash(),...a,labelPlacement:a.labelPlacement}}function x(e,r,t){const a=y(u.FILL,r),l=t?f(a):a,n=e.clone(),s=n.outline,i=V(r.symbologyType);i||(n.outline=null);const c={materialKey:l,hash:n.hash(),...p(n)};if(i)return c;const m=[];if(m.push(c),s){const o=y(u.LINE,{...r,isOutline:!0}),h={materialKey:t?f(o):o,hash:s.hash(),...p(s)};m.push(h)}return{type:"composite-symbol",layers:m,hash:m.reduce((o,h)=>h.hash+o,"")}}function K(e,r,t){var m;const a=V(r.symbologyType)?S.DEFAULT:r.symbologyType,l=y(u.LINE,{...r,symbologyType:a}),n=t?f(l):l,s=e.clone(),i=s.marker;s.marker=null;const c=[];if(c.push({materialKey:n,hash:s.hash(),...p(s)}),i){const o=y(u.MARKER,r),h=t?f(o):o;i.color=(m=i.color)!=null?m:s.color,c.push({materialKey:h,hash:i.hash(),lineWidth:s.width,...p(i)})}return{type:"composite-symbol",layers:c,hash:c.reduce((o,h)=>h.hash+o,"")}}function g(e,r,t){const a=y(u.MARKER,r),l=t?f(a):a,n=p(e);return{materialKey:l,hash:e.hash(),...n,angle:e.angle,maxVVSize:r.maxVVSize}}function z(e,r,t){const a=y(u.TEXT,r),l=t?f(a):a,n=p(e);return{materialKey:l,hash:e.hash(),...n,angle:e.angle,maxVVSize:r.maxVVSize}}export{w as createSymbolSchema};
