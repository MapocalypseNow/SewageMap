import{_ as K}from"./preload-helper-6c8d3039.js";import{s as Oe,b as w,a as _}from"./Error-8814705f.js";import{h as x,y as ve}from"./string-cc430a78.js";import{x as j,r as M,t as ce,e as Ce}from"./typedArrayUtil-bd69bba0.js";import{p as fe,v as Te,j as ke,a as de}from"./promiseUtils-ec14a623.js";const Le=Oe.getLogger("esri.core.urlUtils"),T=w.request,ne="esri/config: esriConfig.request.proxyUrl is not set.",pe=/^\s*[a-z][a-z0-9-+.]*:(?![0-9])/i,he=/^\s*http:/i,Ue=/^\s*https:/i,Ee=/^\s*file:/i,Se=/:\d+$/,Re=/^https?:\/\/[^/]+\.arcgis.com\/sharing(\/|$)/i,_e=new RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?$"),je=new RegExp("^((([^\\[:]+):)?([^@]+)@)?(\\[([^\\]]+)\\]|([^\\[:]*))(:([0-9]+))?$");class C{constructor(t=""){this.uri=t,this.scheme=null,this.authority=null,this.path=null,this.query=null,this.fragment=null,this.user=null,this.password=null,this.host=null,this.port=null;let r=j(this.uri.match(_e));this.scheme=r[2]||(r[1]?"":null),this.authority=r[4]||(r[3]?"":null),this.path=r[5],this.query=r[7]||(r[6]?"":null),this.fragment=r[9]||(r[8]?"":null),this.authority!=null&&(r=j(this.authority.match(je)),this.user=r[3]||null,this.password=r[4]||null,this.host=r[6]||r[7],this.port=r[9]||null)}toString(){return this.uri}}const R={},Pe=new C(w.applicationUrl);let d=Pe;const Ie=De();let V=Ie;const me=()=>d,Lt=()=>V;function De(){const e=j(d.path),t=e.substring(0,e.lastIndexOf(e.split("/")[e.split("/").length-1]));return`${`${d.scheme}://${d.host}${d.port!=null?`:${d.port}`:""}`}${t}`}function O(e){if(!e)return null;const t={path:null,query:null},r=new C(e),n=e.indexOf("?");return r.query===null?t.path=e:(t.path=e.substring(0,n),t.query=ge(r.query)),r.fragment&&(t.hash=r.fragment,r.query===null&&(t.path=t.path.substring(0,t.path.length-(r.fragment.length+1)))),t}function ge(e){const t=e.split("&"),r={};for(const n of t){if(!n)continue;const s=n.indexOf("=");let o,a;s<0?(o=decodeURIComponent(n),a=""):(o=decodeURIComponent(n.slice(0,s)),a=decodeURIComponent(n.slice(s+1)));let i=r[o];typeof i=="string"&&(i=r[o]=[i]),Array.isArray(i)?i.push(a):r[o]=a}return r}function se(e){return e&&typeof e=="object"&&"toJSON"in e&&typeof e.toJSON=="function"}function U(e,t){return e?t&&typeof t=="function"?Object.keys(e).map(r=>encodeURIComponent(r)+"="+encodeURIComponent(t(r,e[r]))).join("&"):Object.keys(e).map(r=>{const n=e[r];if(n==null)return"";const s=encodeURIComponent(r)+"=",o=t&&t[r];return o?s+encodeURIComponent(o(n)):Array.isArray(n)?n.map(a=>se(a)?s+encodeURIComponent(JSON.stringify(a)):s+encodeURIComponent(a)).join("&"):se(n)?s+encodeURIComponent(JSON.stringify(n)):s+encodeURIComponent(n)}).filter(r=>r).join("&"):""}function Ae(e=!1){let t,r=T.proxyUrl;if(typeof e=="string"){t=We(e);const n=B(e);n&&(r=n.proxyUrl)}else t=!!e;if(!r)throw Le.warn(ne),new _("urlutils:proxy-not-set",ne);return t&&z()&&(r=te(r)),O(r)}function Ut(e){const t=B(e);let r,n;if(t){const s=G(t.proxyUrl);r=s.path,n=s.query?ge(s.query):null}if(r){const s=O(e);e=r+"?"+s.path;const o=U({...n,...s.query});o&&(e=`${e}?${o}`)}return e}const k={path:"",query:""};function G(e){const t=e.indexOf("?");return t!==-1?(k.path=e.slice(0,t),k.query=e.slice(t+1)):(k.path=e,k.query=null),k}function ye(e){return e=(e=I(e=Xe(e=G(e).path),!0)).toLowerCase()}function Be(e){const t={proxyUrl:e.proxyUrl,urlPrefix:ye(e.urlPrefix)},r=T.proxyRules,n=t.urlPrefix;let s=r.length;for(let o=0;o<r.length;o++){const a=r[o].urlPrefix;if(n.indexOf(a)===0){if(n.length===a.length)return-1;s=o;break}a.indexOf(n)===0&&(s=o+1)}return r.splice(s,0,t),s}function B(e){const t=T.proxyRules,r=ye(e);for(let n=0;n<t.length;n++)if(r.indexOf(t[n].urlPrefix)===0)return t[n]}function Et(e,t){return e=oe(e),t=oe(t),I(e)===I(t)}function oe(e){const t=(e=L(e)).indexOf("/sharing");return t>0?e.substring(0,t):e.replace(/\/+$/,"")}function we(e){const t=n=>n==null||n instanceof RegExp&&n.test(e)||typeof n=="string"&&e.startsWith(n),r=T.interceptors;if(r){for(const n of r)if(Array.isArray(n.urls)){if(n.urls.some(t))return n}else if(t(n.urls))return n}return null}function P(e,t,r=!1){if(!e||!t)return!1;const n=J(e),s=J(t);return!(!r&&n.scheme!==s.scheme)&&n.host!=null&&s.host!=null&&n.host.toLowerCase()===s.host.toLowerCase()&&n.port===s.port}function Q(e){if(typeof e=="string"){if(!E(e))return!0;e=J(e)}if(P(e,d))return!0;const t=T.trustedServers||[];for(let r=0;r<t.length;r++){const n=He(t[r]);for(let s=0;s<n.length;s++)if(P(e,n[s]))return!0}return!1}function He(e){return R[e]||(ee(e)||q(e)?R[e]=[new C(X(e))]:R[e]=[new C(`http://${e}`),new C(`https://${e}`)]),R[e]}function X(e,t=V,r){return q(e)?r&&r.preserveProtocolRelative?e:d.scheme==="http"&&d.authority===g(e).slice(2)?`http:${e}`:`https:${e}`:ee(e)?e:j(Ne(e[0]==="/"?Qe(t):t,e))}function St(e,t=V,r){if(e==null||!E(e))return e;const n=L(e),s=n.toLowerCase(),o=L(t).toLowerCase().replace(/\/+$/,""),a=r?L(r).toLowerCase().replace(/\/+$/,""):null;if(a&&o.indexOf(a)!==0)return e;const i=($,f,y)=>(y=$.indexOf(f,y))===-1?$.length:y;let l=i(s,"/",s.indexOf("//")+2),u=-1;for(;s.slice(0,l+1)===o.slice(0,l)+"/"&&(u=l+1,l!==s.length);)l=i(s,"/",l+1);if(u===-1||a&&u<a.length)return e;e=n.slice(u);const c=o.slice(u-1).replace(/[^/]+/g,"").length;if(c>0)for(let $=0;$<c;$++)e=`../${e}`;else e=`./${e}`;return e}function L(e){return e=et(e=Ze(e=Ye(e=X(e=e.trim()))))}function Ne(...e){const t=e.filter(M);if(!t||!t.length)return;const r=[];if(E(t[0])){const s=t[0],o=s.indexOf("//");o!==-1&&(r.push(s.slice(0,o+1)),Ve(t[0])&&(r[0]+="/"),t[0]=s.slice(o+2))}else t[0][0]==="/"&&r.push("");const n=t.reduce((s,o)=>o?s.concat(o.split("/")):s,[]);for(let s=0;s<n.length;s++){const o=n[s];o===".."&&r.length>0&&r[r.length-1]!==".."?r.pop():(!o&&s===n.length-1||o&&(o!=="."||r.length===0))&&r.push(o)}return r.join("/")}function g(e,t=!1){if(e==null||Y(e)||Z(e))return null;let r=e.indexOf("://");if(r===-1&&q(e))r=2;else{if(r===-1)return null;r+=3}const n=e.indexOf("/",r);return n!==-1&&(e=e.slice(0,n)),t&&(e=I(e,!0)),e}function E(e){return q(e)||ee(e)}function Y(e){return e!=null&&e.slice(0,5)==="blob:"}function Z(e){return e!=null&&e.slice(0,5)==="data:"}function Rt(e){const t=Me(e);if(!t||!t.isBase64)return null;const r=atob(t.data),n=new Uint8Array(r.length);for(let s=0;s<r.length;s++)n[s]=r.charCodeAt(s);return n.buffer}function _t(e){return btoa(String.fromCharCode.apply(null,e)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}const Fe=/^data:(.*?)(;base64)?,(.*)$/;function Me(e){const t=e.match(Fe);if(!t)return null;const[,r,n,s]=t;return{mediaType:r,isBase64:!!n,data:s}}function jt(e){return e.isBase64?`data:${e.mediaType};base64,${e.data}`:`data:${e.mediaType},${e.data}`}function Pt(e,t){ze(e,t)||Je(e,t)}function ze(e,t){if(!e)return!1;const r=document.createElement("a");if(!("download"in r))return!1;const n=URL.createObjectURL(e);return r.download=t,r.href=n,r.style.display="none",document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(n),!0}function Je(e,t){return!!window.navigator.msSaveOrOpenBlob&&window.navigator.msSaveOrOpenBlob(e,t)}function q(e){return e!=null&&e[0]==="/"&&e[1]==="/"}function ee(e){return e!=null&&pe.test(e)}function We(e){return e!=null&&Ue.test(e)||d.scheme==="https"&&q(e)}function Ke(e){return e!=null&&he.test(e)||d.scheme==="http"&&q(e)}function Ve(e){return e!=null&&Ee.test(e)}function te(e){return q(e)?`https:${e}`:e.replace(he,"https:")}function Ge(){return d.scheme==="http"}function z(){return d.scheme==="https"}function I(e,t=!1){return q(e)?e.slice(2):(e=e.replace(pe,""),t&&e.length>1&&e[0]==="/"&&e[1]==="/"&&(e=e.slice(2)),e)}function Qe(e){const t=e.indexOf("//"),r=e.indexOf("/",t+2);return r===-1?e:e.slice(0,r)}function It(e){let t=0;if(E(e)){const n=e.indexOf("//");n!==-1&&(t=n+2)}const r=e.lastIndexOf("/");return r<t?e:e.slice(0,r+1)}function Dt(e,t){if(!e)return"";const r=O(e).path.replace(/\/+$/,""),n=r.substring(r.lastIndexOf("/")+1);if(!(t!=null&&t.length))return n;const s=new RegExp(`.(${t.join("|")})$`,"ig");return n.replace(s,"")}function Xe(e){return e&&e[e.length-1]==="/"?e:`${e}/`}function At(e){return e.replace(/\/+$/,"")}function Ye(e){if(/^https?:\/\//i.test(e)){const t=G(e);e=(e=t.path.replace(/\/{2,}/g,"/")).replace("/","//"),t.query&&(e+=`?${t.query}`)}return e}function Ze(e){return e.replace(/^(https?:\/\/)(arcgis\.com)/i,"$1www.$2")}function et(e){const t=T.httpsDomains;if(!Ke(e))return e;const r=e.indexOf("/",7);let n;if(n=r===-1?e:e.slice(0,r),n=n.toLowerCase().slice(7),Se.test(n)){if(!n.endsWith(":80"))return e;n=n.slice(0,-3),e=e.replace(":80","")}return Ge()&&n===d.authority&&!Re.test(e)||(z()&&n===d.authority||t&&t.some(s=>n===s||n.endsWith(`.${s}`))||z()&&!B(e))&&(e=te(e)),e}function Bt(e,t,r){if(!(t&&r&&e&&E(e)))return e;const n=e.indexOf("//"),s=e.indexOf("/",n+2),o=e.indexOf(":",n+2),a=Math.min(s<0?e.length:s,o<0?e.length:o);return e.slice(n+2,a).toLowerCase()!==t.toLowerCase()?e:`${e.slice(0,n+2)}${r}${e.slice(a)}`}function J(e){return typeof e=="string"?new C(X(e)):(e.scheme||(e.scheme=d.scheme),e)}function Ht(e){return tt.test(e)}function Nt(e,t){const r=O(e),n=Object.keys(r.query||{});return n.length>0&&t&&t.warn("removeQueryParameters()",`Url query parameters are not supported, the following parameters have been removed: ${n.join(", ")}.`),r.path}function be(e,t,r){const n=O(e),s=n.query||{};return s[t]=String(r),`${n.path}?${U(s)}`}function F(e,t){const r=O(e),n=r.query||{};for(const o in t)n[o]=t[o];const s=U(n);return s?`${r.path}?${s}`:r.path}function Ft(e){if(ce(e))return null;const t=e.match($e);return t?t[2]:null}function Mt(e){if(ce(e))return null;const t=e.match($e);return t?{path:t[1],extension:t[2]}:{path:e,extension:null}}const $e=/([^.]*)\.([^\/]*)$/,tt=/(^data:image\/svg|\.svg$)/i,zt="4.25",Jt={async request(e,t){var i,l;const{default:r}=await K(()=>Promise.resolve().then(()=>xt),void 0),n=e.options,s=n.responseType;n.signal=t==null?void 0:t.signal,n.responseType=s==="native"||s==="native-request-init"?"native-request-init":s&&["blob","json","text"].includes(s)&&((i=we(e.url))!=null&&i.after)?s:"array-buffer";const o=await r(e.url,n),a={data:o.data,ssl:o.ssl};switch((l=o.requestOptions)==null?void 0:l.responseType){case"native-request-init":return delete a.data.signal,a;case"blob":a.data=await a.data.arrayBuffer();break;case"json":a.data=new TextEncoder().encode(JSON.stringify(a.data)).buffer;break;case"text":a.data=new TextEncoder().encode(a.data).buffer}return{result:a,transferList:[a.data]}}};let p;function Wt(e){p=e}function Kt(e){const t=p&&p.findCredential(e);return t&&t.token?be(e,"token",t.token):e}x("host-webworker");const rt=/^https:\/\/([a-z\d-]+)(\.maps([^.]*))?\.arcgis\.com/i,nt={devext:{customBaseUrl:"mapsdevext.arcgis.com",portalHostname:"devext.arcgis.com"},qaext:{customBaseUrl:"mapsqa.arcgis.com",portalHostname:"qaext.arcgis.com"},www:{customBaseUrl:"maps.arcgis.com",portalHostname:"www.arcgis.com"}};function Vt(e){const t=e==null?void 0:e.match(rt);if(!t)return null;const[,r,n,s]=t;if(!r)return null;let o=null,a=null,i=null;const{devext:l,qaext:u,www:c}=nt;if(n)if(o=r,s)switch(s.toLowerCase()){case"devext":({customBaseUrl:a,portalHostname:i}=l);break;case"qa":({customBaseUrl:a,portalHostname:i}=u);break;default:return null}else({customBaseUrl:a,portalHostname:i}=c);else switch(r.toLowerCase()){case"devext":({customBaseUrl:a,portalHostname:i}=l);break;case"qaext":({customBaseUrl:a,portalHostname:i}=u);break;case"www":({customBaseUrl:a,portalHostname:i}=c);break;default:return null}return{customBaseUrl:a,isPortal:!1,portalHostname:i,urlKey:o}}function st(e){return/\/(sharing|usrsvcs)\/(appservices|servers)\//i.test(e)}const ot=["elevation3d.arcgis.com","js.arcgis.com","jsdev.arcgis.com","jsqa.arcgis.com","static.arcgis.com"];function at(e){const t=g(e,!0);return!!t&&t.endsWith(".arcgis.com")&&!ot.includes(t)&&!e.endsWith("/sharing/rest/generateToken")}function it(e,t,r=!1,n){return new Promise((s,o)=>{if(fe(n))return void o(ae());let a=()=>{u(),o(new Error(`Unable to load ${t}`))},i=()=>{const c=e;u(),s(c)},l=()=>{if(!e)return;const c=e;u(),c.src="",o(ae())};const u=()=>{x("esri-image-decode")||(e.removeEventListener("error",a),e.removeEventListener("load",i)),a=null,i=null,e=null,M(n)&&n.removeEventListener("abort",l),l=null,r&&URL.revokeObjectURL(t)};M(n)&&n.addEventListener("abort",l),x("esri-image-decode")?e.decode().then(i,a):(e.addEventListener("error",a),e.addEventListener("load",i))})}function ae(){try{return new DOMException("Aborted","AbortError")}catch{const e=new Error;return e.name="AbortError",e}}function lt(e){w.request.crossOriginNoCorsDomains||(w.request.crossOriginNoCorsDomains={});const t=w.request.crossOriginNoCorsDomains;for(let r of e)r=r.toLowerCase(),/^https?:\/\//.test(r)?t[g(r)??""]=0:(t[g("http://"+r)??""]=0,t[g("https://"+r)??""]=0)}function ut(e){const t=w.request.crossOriginNoCorsDomains;if(t){let r=g(e);if(r)return r=r.toLowerCase(),!P(r,me())&&t[r]<Date.now()-36e5}return!1}async function ct(e){var s;const t=w.request.crossOriginNoCorsDomains,r=g(e);t&&r&&(t[r.toLowerCase()]=Date.now());const n=O(e);e=n.path,((s=n.query)==null?void 0:s.f)==="json"&&(e+="?f=json");try{await fetch(e,{mode:"no-cors",credentials:"include"})}catch{}}async function b(e,t){var u;const r=Z(e),n=Y(e);n||r||(e=L(e));const s={url:e,requestOptions:{...Ce(t)}};let o=we(e);if(o){const c=await wt(o,s);if(c!=null)return{data:c,getHeader:re,requestOptions:s.requestOptions,url:s.url};o.after||o.error||(o=null)}if(e=s.url,(t=s.requestOptions).responseType==="image"){if(x("host-webworker")||x("host-node"))throw m("request:invalid-parameters",new Error("responseType 'image' is not supported in Web Workers or Node environment"),s)}else if(r)throw m("request:invalid-parameters",new Error("Data URLs are not supported for responseType = "+t.responseType),s);if(t.method==="head"){if(t.body)throw m("request:invalid-parameters",new Error("body parameter cannot be set when method is 'head'"),s);if(r||n)throw m("request:invalid-parameters",new Error("data and blob URLs are not supported for method 'head'"),s)}if(await mt(),D)return D.execute(e,t);const a=new AbortController;Te(t,()=>a.abort());const i={controller:a,credential:void 0,credentialToken:void 0,fetchOptions:void 0,hasToken:!1,interceptor:o,params:s,redoRequest:!1,useIdentity:h.useIdentity,useProxy:!1,useSSL:!1,withCredentials:!1},l=await $t(i);return(u=o==null?void 0:o.after)==null||u.call(o,l),l}let D;const h=w.request,qe="FormData"in globalThis,ft=[499,498,403,401],dt=["COM_0056","COM_0057","SB_0008"],pt=[/\/arcgis\/tokens/i,/\/sharing(\/rest)?\/generatetoken/i,/\/rest\/info/i],re=()=>null,A=Symbol();function ht(e){const t=g(e);t&&!b._corsServers.includes(t)&&b._corsServers.push(t)}function ie(e){const t=g(e);return!t||t.endsWith(".arcgis.com")||b._corsServers.includes(t)||Q(t)}function m(e,t,r,n){let s="Error";const o={url:r.url,requestOptions:r.requestOptions,getHeader:re,ssl:!1};if(t instanceof _)return t.details?(t.details=ve(t.details),t.details.url=r.url,t.details.requestOptions=r.requestOptions):t.details=o,t;if(t){const a=n&&(u=>n.headers.get(u)),i=n&&n.status,l=t.message;l&&(s=l),a&&(o.getHeader=a),o.httpStatus=(t.httpCode!=null?t.httpCode:t.code)||i||0,o.subCode=t.subcode,o.messageCode=t.messageCode,typeof t.details=="string"?o.messages=[t.details]:o.messages=t.details,o.raw=A in t?t[A]:t}return ke(t)?de():new _(e,s,o)}async function mt(){x("host-webworker")?D||(D=await K(()=>import("./request-3e7e9dc4.js"),["assets/request-3e7e9dc4.js","assets/Error-8814705f.js","assets/string-cc430a78.js","assets/typedArrayUtil-bd69bba0.js"])):b._abortableFetch||(b._abortableFetch=globalThis.fetch.bind(globalThis))}async function W(){p||await K(()=>import("./IdentityManager-72c45ff2.js"),["assets/IdentityManager-72c45ff2.js","assets/cast-4943406f.js","assets/typedArrayUtil-bd69bba0.js","assets/string-cc430a78.js","assets/Error-8814705f.js","assets/ensureType-9613b5f0.js","assets/nextTick-3ee5a785.js","assets/promiseUtils-ec14a623.js","assets/Evented-28d49a6f.js","assets/reactiveUtils-3389689f.js","assets/intl-e6f005e0.js","assets/number-d7fe9942.js","assets/jsonMap-9318d50f.js","assets/locale-30120714.js","assets/messages-d8933302.js","assets/assets-2905a8db.js","assets/widget-d96a3fbc.js","assets/Promise-9613afa4.js","assets/uuid-73213768.js","assets/preload-helper-6c8d3039.js"])}async function gt(e){var i;const t=e.params.url,r=e.params.requestOptions,n=e.controller.signal,s=r.body;let o=null,a=null;if(qe&&"HTMLFormElement"in globalThis&&(s instanceof FormData?o=s:s instanceof HTMLFormElement&&(o=new FormData(s))),typeof s=="string"&&(a=s),e.fetchOptions={cache:r.cacheBust&&!b._abortableFetch.polyfill?"no-cache":"default",credentials:"same-origin",headers:r.headers||{},method:r.method==="head"?"HEAD":"GET",mode:"cors",priority:h.priority,redirect:"follow",signal:n},(o||a)&&(e.fetchOptions.body=o||a),r.authMode==="anonymous"&&(e.useIdentity=!1),e.hasToken=!!(/token=/i.test(t)||(i=r.query)!=null&&i.token||o!=null&&o.get("token")),!e.hasToken&&w.apiKey&&at(t)&&(r.query||(r.query={}),r.query.token=w.apiKey,e.hasToken=!0),e.useIdentity&&!e.hasToken&&!e.credentialToken&&!xe(t)&&!fe(n)){let l;r.authMode==="immediate"?(await W(),l=await p.getCredential(t,{signal:n}),e.credential=l):r.authMode==="no-prompt"?(await W(),l=await p.getCredential(t,{prompt:!1,signal:n}).catch(()=>{}),e.credential=l):p&&(l=p.findCredential(t)),l&&(e.credentialToken=l.token,e.useSSL=!!l.ssl)}}function xe(e){return pt.some(t=>t.test(e))}async function yt(e){let t=e.params.url;const r=e.params.requestOptions,n=e.fetchOptions??{},s=Y(t)||Z(t),o=r.responseType||"json",a=s?0:r.timeout!=null?r.timeout:h.timeout;let i=!1;if(!s){e.useSSL&&(t=te(t)),r.cacheBust&&n.cache==="default"&&(t=be(t,"request.preventCache",Date.now()));let f={...r.query};e.credentialToken&&(f.token=e.credentialToken);let y=U(f);x("esri-url-encodes-apostrophe")&&(y=y.replace(/'/g,"%27"));const H=t.length+1+y.length;let N;i=r.method==="delete"||r.method==="post"||r.method==="put"||!!r.body||H>h.maxUrlLength;const S=r.useProxy||!!B(t);if(S){const v=Ae(t);N=v.path,!i&&N.length+1+H>h.maxUrlLength&&(i=!0),v.query&&(f={...v.query,...f})}if(n.method==="HEAD"&&(i||S)){if(i)throw H>h.maxUrlLength?m("request:invalid-parameters",new Error("URL exceeds maximum length"),e.params):m("request:invalid-parameters",new Error("cannot use POST request when method is 'head'"),e.params);if(S)throw m("request:invalid-parameters",new Error("cannot use proxy when method is 'head'"),e.params)}if(i?(n.method=r.method==="delete"?"DELETE":r.method==="put"?"PUT":"POST",r.body?t=F(t,f):(n.body=U(f),n.headers||(n.headers={}),n.headers["Content-Type"]="application/x-www-form-urlencoded")):t=F(t,f),S&&(e.useProxy=!0,t=`${N}?${t}`),f.token&&qe&&n.body instanceof FormData&&!st(t)&&n.body.set("token",f.token),r.hasOwnProperty("withCredentials"))e.withCredentials=r.withCredentials;else if(!P(t,me())){if(Q(t))e.withCredentials=!0;else if(p){const v=p.findServerInfo(t);v&&v.webTierAuth&&(e.withCredentials=!0)}}e.withCredentials&&(n.credentials="include",ut(t)&&await ct(i?F(t,f):t))}let l,u,c=0,$=!1;a>0&&(c=setTimeout(()=>{$=!0,e.controller.abort()},a));try{if(r.responseType==="native-request-init")u=n,u.url=t;else if(r.responseType!=="image"||n.cache!=="default"||n.method!=="GET"||i||bt(r.headers)||!s&&!e.useProxy&&h.proxyUrl&&!ie(t)){if(l=await b._abortableFetch(t,n),e.useProxy||ht(t),r.responseType==="native")u=l;else if(n.method!=="HEAD")if(l.ok){switch(o){case"array-buffer":u=await l.arrayBuffer();break;case"blob":case"image":u=await l.blob();break;default:u=await l.text()}if(c&&(clearTimeout(c),c=0),o==="json"||o==="xml"||o==="document")if(u)switch(o){case"json":u=JSON.parse(u);break;case"xml":u=le(u,"application/xml");break;case"document":u=le(u,"text/html")}else u=null;if(u){if(o==="array-buffer"||o==="blob"){const f=l.headers.get("Content-Type");if(f&&/application\/json|text\/plain/i.test(f)&&u[o==="blob"?"size":"byteLength"]<=750)try{const y=await new Response(u).json();y.error&&(u=y)}catch{}}o==="image"&&u instanceof Blob&&(u=await ue(URL.createObjectURL(u),e,!0))}}else u=await l.text()}else u=await ue(t,e)}catch(f){if(f.name==="AbortError")throw $?new Error("Timeout exceeded"):de("Request canceled");if(!(!l&&f instanceof TypeError&&h.proxyUrl)||r.body||r.method==="delete"||r.method==="head"||r.method==="post"||r.method==="put"||e.useProxy||ie(t))throw f;e.redoRequest=!0,Be({proxyUrl:h.proxyUrl,urlPrefix:g(t)??""})}finally{c&&clearTimeout(c)}return[l,u]}async function wt(e,t){if(e.responseData!=null)return e.responseData;if(e.headers&&(t.requestOptions.headers={...t.requestOptions.headers,...e.headers}),e.query&&(t.requestOptions.query={...t.requestOptions.query,...e.query}),e.before){let r,n;try{n=await e.before(t)}catch(s){r=m("request:interceptor",s,t)}if((n instanceof Error||n instanceof _)&&(r=m("request:interceptor",n,t)),r)throw e.error&&e.error(r),r;return n}}function bt(e){if(e){for(const t of Object.getOwnPropertyNames(e))if(e[t])return!0}return!1}function le(e,t){let r;try{r=new DOMParser().parseFromString(e,t)}catch{}if(!r||r.getElementsByTagName("parsererror").length)throw new SyntaxError("XML Parse error");return r}async function $t(e){var o;let t,r;await gt(e);try{do[t,r]=await yt(e);while(!await qt(e,t,r))}catch(a){const i=m("request:server",a,e.params,t);throw i.details.ssl=e.useSSL,e.interceptor&&e.interceptor.error&&e.interceptor.error(i),i}const n=e.params.url;if(r&&/\/sharing\/rest\/(accounts|portals)\/self/i.test(n)){if(!e.hasToken&&!e.credentialToken&&((o=r.user)!=null&&o.username)&&!Q(n)){const a=g(n,!0);a&&h.trustedServers.push(a)}Array.isArray(r.authorizedCrossOriginNoCorsDomains)&&lt(r.authorizedCrossOriginNoCorsDomains)}const s=e.credential;if(s&&p){const a=p.findServerInfo(s.server);let i=a&&a.owningSystemUrl;if(i){i=i.replace(/\/?$/,"/sharing");const l=p.findCredential(i,s.userId);l&&p._getIdenticalSvcIdx(i,l)===-1&&l.resources.unshift(i)}}return{data:r,getHeader:t?a=>t==null?void 0:t.headers.get(a):re,requestOptions:e.params.requestOptions,ssl:e.useSSL,url:e.params.url}}async function qt(e,t,r){if(e.redoRequest)return e.redoRequest=!1,!1;const n=e.params.requestOptions;if(!t||n.responseType==="native"||n.responseType==="native-request-init")return!0;let s,o;if(!t.ok)throw s=new Error(`Unable to load ${t.url} status: ${t.status}`),s[A]=r,s;r&&(r.error?s=r.error:r.status==="error"&&Array.isArray(r.messages)&&(s={...r},s[A]=r,s.details=r.messages));let a,i=null;s&&(o=Number(s.code),i=s.hasOwnProperty("subcode")?Number(s.subcode):null,a=s.messageCode,a=a&&a.toUpperCase());const l=n.authMode;if(o===403&&(i===4||s.message&&s.message.toLowerCase().includes("ssl")&&!s.message.toLowerCase().includes("permission"))){if(!e.useSSL)return e.useSSL=!0,!1}else if(!e.hasToken&&e.useIdentity&&(l!=="no-prompt"||o===498)&&o!==void 0&&ft.includes(o)&&!xe(e.params.url)&&(o!==403||a&&!dt.includes(a)&&(i==null||i===2&&e.credentialToken))){await W();try{const u=await p.getCredential(e.params.url,{error:m("request:server",s,e.params),prompt:l!=="no-prompt",signal:e.controller.signal,token:e.credentialToken});return e.credential=u,e.credentialToken=u.token,e.useSSL=e.useSSL||u.ssl,!1}catch(u){if(l==="no-prompt")return e.credential=void 0,e.credentialToken=void 0,!1;s=u}}if(s)throw s;return!0}function ue(e,t,r=!1){const n=t.controller.signal,s=new Image;return t.withCredentials?s.crossOrigin="use-credentials":s.crossOrigin="anonymous",s.alt="",s.fetchPriority=h.priority,s.src=e,it(s,e,r,n)}b._abortableFetch=null,b._corsServers=["https://server.arcgisonline.com","https://services.arcgisonline.com"];const xt=Object.freeze(Object.defineProperty({__proto__:null,default:b},Symbol.toStringTag,{value:"Module"}));export{Nt as A,F as B,At as C,Mt as E,L as F,Ne as G,g as H,Ht as I,B as J,E as K,Bt as L,Et as N,It as O,X as Q,Ut as S,b as U,Y as V,Z as X,Rt as Y,_t as Z,St as _,zt as a,at as b,me as c,ge as d,jt as e,q as f,U as g,Wt as h,Dt as i,O as j,Ft as k,We as l,te as m,Me as n,Kt as o,Lt as p,Vt as q,Jt as r,p as s,st as t,it as u,Pt as v,xt as w,C as y,P as z};
