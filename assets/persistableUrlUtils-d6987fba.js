import{e as n}from"./typedArrayUtil-bd69bba0.js";import{Q as p,_ as f,K as a,F as y,X as x,E as m,L as i,z as P,c as O}from"./request-9ab300ca.js";function h(e,t){const l=t&&t.url&&t.url.path;if(e&&l&&(e=p(e,l,{preserveProtocolRelative:!0}),t.portalItem&&t.readResourcePaths)){const r=f(e,t.portalItem.itemUrl);r!=null&&b.test(r)&&t.readResourcePaths.push(t.portalItem.resourceFromPath(r).path)}return c(e,t&&t.portal)}function v(e,t,l=s.YES){if(e==null)return e;!a(e)&&t&&t.blockedRelativeUrls&&t.blockedRelativeUrls.push(e);let r=p(e);if(t){const o=t.verifyItemRelativeUrls&&t.verifyItemRelativeUrls.rootPath||t.url&&t.url.path;if(o){const u=c(o,t.portal);r=f(c(r,t.portal),u,u),r!=null&&r!==e&&t.verifyItemRelativeUrls&&t.verifyItemRelativeUrls.writtenUrls.push(r)}}return r=d(r,t==null?void 0:t.portal),a(r)&&(r=y(r)),t!=null&&t.resources&&(t!=null&&t.portalItem)&&!a(r)&&!x(r)&&l===s.YES&&t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(r),compress:!1}),r}function S(e,t,l){return h(e,l)}function K(e,t,l,r){const o=v(e,r);o!==void 0&&(t[l]=o)}const U=/\/items\/([^\/]+)\/resources\/(.*)/,b=/^\.\/resources\//;function E(e){var t;return((t=(e==null?void 0:e.match(U))??null)==null?void 0:t[1])??null}function F(e){const t=(e==null?void 0:e.match(U))??null;if(t==null)return null;const l=t[2],r=l.lastIndexOf("/");if(r===-1){const{path:I,extension:R}=m(l);return{prefix:null,filename:I,extension:n(R)}}const{path:o,extension:u}=m(l.slice(r+1));return{prefix:l.slice(0,r),filename:o,extension:n(u)}}function d(e,t){return t&&!t.isPortal&&t.urlKey&&t.customBaseUrl?i(e,`${t.urlKey}.${t.customBaseUrl}`,t.portalHostname):e}function c(e,t){if(!t||t.isPortal||!t.urlKey||!t.customBaseUrl)return e;const l=`${t.urlKey}.${t.customBaseUrl}`,r=O();return P(r,`${r.scheme}://${l}`)?i(e,t.portalHostname,l):i(e,l,t.portalHostname)}var s;(function(e){e[e.YES=0]="YES",e[e.NO=1]="NO"})(s||(s={}));const B=Object.freeze(Object.defineProperty({__proto__:null,fromJSON:h,toJSON:v,read:S,write:K,itemIdFromResourceUrl:E,prefixAndFilenameFromResourceUrl:F,ensureMainOnlineDomain:d,get MarkKeep(){return s}},Symbol.toStringTag,{value:"Module"}));export{s as R,E as U,h as c,F as d,K as f,v as m,S as p,B as x,d as y};
