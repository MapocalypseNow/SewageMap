import{dz as w,jt as z,ju as O,iR as S,ip as x,jv as $,jw as A,jx as B,jy as F,jz as U,jA as E,ab as J,G as K,_ as T,jB as V}from"./index.2901469c.js";import{i as k}from"./multiOriginJSONSupportUtils.38b69b9c.js";function g(e){return y[D(e)]||L}function D(e){return e instanceof Blob?e.type:G(e.url)}function G(e){const t=w(e);return d[t]||I}const y={},I="text/plain",L=y[I],d={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const e in d)y[d[e]]=e;function ee(e){var o;const t=(o=e==null?void 0:e.origins)!=null?o:[void 0];return(i,n)=>{const s=q(e,i,n);for(const a of t){const r=z(i,a,n);for(const c in s)r[c]=s[c]}}}function q(e,t,o){var i;if((e==null?void 0:e.type)==="resource")return C(e,t,o);switch((i=e==null?void 0:e.type)!=null?i:"other"){case"other":return{read:!0,write:!0};case"url":{const{read:n,write:s}=V;return{read:n,write:s}}}}function C(e,t,o){const i=O(t,o);return{type:String,read:(n,s,a)=>{const r=S(n,s,a);return i.type===String?r:typeof i.type=="function"?new i.type({url:r}):void 0},write:{writer(n,s,a,r){if(!r||!r.resources)return typeof n=="string"?void(s[a]=x(n,r)):void(s[a]=n.write({},r));const c=W(n),p=x(c,{...r,verifyItemRelativeUrls:r&&r.verifyItemRelativeUrls?{writtenUrls:r.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},$.NO),l=i.type!==String&&(!k(this)||r&&r.origin&&this.originIdOf(o)>A(r.origin)),u={object:this,propertyName:o,value:n,targetUrl:p,dest:s,targetPropertyName:a,context:r,params:e};r&&r.portalItem&&p&&!B(p)?l?H(u):M(u):r&&r.portalItem&&(p==null||F(p)!=null||U(p)||l)?b(u):s[a]=p}}}}function b(e){var v,h,j;const{targetUrl:t,params:o,value:i,context:n,dest:s,targetPropertyName:a}=e;if(!n.portalItem)return;const r=E(t),c=(v=r==null?void 0:r.filename)!=null?v:J(),p=(h=o==null?void 0:o.prefix)!=null?h:r==null?void 0:r.prefix,l=N(i,t,n),u=K(p,c),m=`${u}.${g(l)}`,f=n.portalItem.resourceFromPath(m);U(t)&&n.resources&&n.resources.pendingOperations.push(Q(t).then(_=>{f.path=`${u}.${g(_)}`,s[a]=f.itemRelativeUrl}).catch(()=>{}));const R=(j=o==null?void 0:o.compress)!=null?j:!1;n.resources&&P({...e,resource:f,content:l,compress:R,updates:n.resources.toAdd}),s[a]=f.itemRelativeUrl}function H(e){var m;const{context:t,targetUrl:o,params:i,value:n,dest:s,targetPropertyName:a}=e;if(!t.portalItem)return;const r=t.portalItem.resourceFromPath(o),c=N(n,o,t),p=g(c),l=w(r.path),u=(m=i==null?void 0:i.compress)!=null?m:!1;p===l?(t.resources&&P({...e,resource:r,content:c,compress:u,updates:t.resources.toUpdate}),s[a]=o):b(e)}function M({context:e,targetUrl:t,dest:o,targetPropertyName:i}){e.portalItem&&e.resources&&(e.resources.toKeep.push({resource:e.portalItem.resourceFromPath(t),compress:!1}),o[i]=t)}function P({object:e,propertyName:t,updates:o,resource:i,content:n,compress:s}){o.push({resource:i,content:n,compress:s,finish:a=>{X(e,t,a)}})}function N(e,t,o){return typeof e=="string"?{url:t}:new Blob([JSON.stringify(e.toJSON(o))],{type:"application/json"})}async function Q(e){const t=(await T(()=>import("./index.2901469c.js").then(i=>i.ll),["assets/index.2901469c.js","assets/index.45a801fc.css"])).default,{data:o}=await t(e,{responseType:"blob"});return o}function W(e){return e==null?null:typeof e=="string"?e:e.url}function X(e,t,o){typeof e[t]=="string"?e[t]=o.url:e[t].url=o.url}export{ee as g};
