import{a2 as K,P as m,a3 as F,s as n,a4 as R,a5 as D,E as _,L as j,x as q,a as z,a6 as M,v as $,a7 as U}from"./index.eddec14a.js";import{i as w}from"./originUtils.2d0aad75.js";import{r as Y}from"./fetchService.fc00ddc8.js";import{o as v}from"./jsonContext.fba3af5e.js";import{i as f,a as B,c as g,f as d}from"./portalItemUtils.0cf9c4af.js";import"./multiOriginJSONSupportUtils.38b69b9c.js";const C=K.getLogger("esri.layers.FeatureLayer"),c="Feature Service";function y(a,e){return`Layer (title: ${a.title}, id: ${a.id}) of type '${a.declaredClass}' ${e}`}function E(a,e){if(e.type!==c)throw new n("feature-layer:portal-item-wrong-type",y(a,`should have portal item of type "${c}"`))}async function J(a){if(await a.load(),F(a))throw new n("feature-layer:save",y(a,"using an in-memory source cannot be saved to a portal item"))}function G(a,e){var r;let t=((r=a.messages)!=null?r:[]).filter(({type:s})=>s==="error").map(({name:s,message:o,details:l})=>new n(s,o,l));if(e!=null&&e.ignoreUnsupported&&(t=t.filter(({name:s})=>s!=="layer:unsupported"&&s!=="symbol:unsupported"&&s!=="symbol-layer:unsupported"&&s!=="property:unsupported"&&s!=="url:unsupported")),t.length>0)throw new n("feature-layer:save","Failed to save feature layer due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:t})}async function h(a,e,t){"beforeSave"in a&&typeof a.beforeSave=="function"&&await a.beforeSave();const r=a.write({},e);return G(e,t),r}function N(a){const{layer:e,layerJSON:t}=a;return e.isTable?{layers:[],tables:[t]}:{layers:[t],tables:[]}}function b(a){f(a,d.JSAPI),a.typeKeywords&&(a.typeKeywords=a.typeKeywords.filter((e,t,r)=>r.indexOf(e)===t))}function Z(a){const e=a.portalItem;if(!e)throw C.error("save: requires the portalItem property to be set"),new n("feature-layer:portal-item-not-set",y(a,"requires the portalItem property to be set"));if(!e.loaded)throw new n("feature-layer:portal-item-not-loaded",y(a,"cannot be saved to a portal item that does not exist or is inaccessible"));E(a,e)}async function O(a,e){var t;return/\/\d+\/?$/.test((t=a.url)!=null?t:"")?N(e[0]):k(a,e)}async function k(a,e){const{layer:{url:t,customParameters:r,apiKey:s}}=e[0];let o=await a.fetchData("json");o&&o.layers!=null&&o.tables!=null||(o=await H(o,{url:t!=null?t:"",customParameters:r,apiKey:s},e.map(l=>l.layer.layerId)));for(const l of e)P(l.layer,l.layerJSON,o);return o}async function H(a,e,t){var r,s;a||(a={}),(r=a).layers||(r.layers=[]),(s=a).tables||(s.tables=[]);const{url:o,customParameters:l,apiKey:i}=e,{serviceJSON:u,layersJSON:p}=await Y(o,{customParameters:l,apiKey:i}),I=x(a.layers,u.layers,t),S=x(a.tables,u.tables,t);a.layers=I.itemResources,a.tables=S.itemResources;const L=[...I.added,...S.added],T=p?[...p.layers,...p.tables]:[];return await Q(a,L,o,T),a}function x(a,e,t){const r=R(a,e,(o,l)=>o.id===l.id);a=a.filter(o=>!r.removed.some(l=>l.id===o.id));const s=r.added.map(({id:o})=>({id:o}));return s.forEach(({id:o})=>{a.push({id:o})}),{itemResources:a,added:s.filter(({id:o})=>!t.includes(o))}}async function Q(a,e,t,r){const s=e.map(({id:o})=>new D({url:t,layerId:o,sourceJSON:r.find(({id:l})=>l===o)}));await _(s.map(o=>o.load())),s.forEach(o=>{const{layerId:l,loaded:i,defaultPopupTemplate:u}=o;!i||j(u)||P(o,{id:l,popupInfo:u.toJSON()},a)})}function P(a,e,t){a.isTable?A(t.tables,e):A(t.layers,e)}function A(a,e){if(!a)return;const t=a.findIndex(({id:r})=>r===e.id);t===-1?a.push(e):a[t]=e}function V(a){const{portalItem:e}=a;return U(a)&&!a.dynamicDataSource&&!!(e!=null&&e.loaded)&&e.type===c}async function W(a){if(!(a!=null&&a.length))throw new n("feature-layer-utils-saveall:missing-parameters","'layers' array should contain at least one feature layer");await Promise.all(a.map(r=>r.load()));for(const r of a)if(!V(r))throw new n("feature-layer-utils-saveall:invalid-parameters",`'layers' array should only contain layers or tables in a feature service loaded from 'Feature Service' item. ${y(r,"does not conform")}`,{layer:r});const e=a.map(r=>r.portalItem.id);if(new Set(e).size>1)throw new n("feature-layer-utils-saveall:invalid-parameters","All layers in the 'layers' array should be loaded from the same portal item");const t=a.map(r=>r.layerId);if(new Set(t).size!==t.length)throw new n("feature-layer-utils-saveall:invalid-parameters","'layers' array should contain only one instance each of layer or table in a feature service")}function X(a,e){var o,l;var t,r;let s=q.from(e);return s.id&&(s=s.clone(),s.id=null),(o=(t=s).type)!=null||(t.type=c),(l=(r=s).portal)!=null||(r.portal=z.getDefault()),E(a,s),s}async function aa(a,e){const{url:t,layerId:r,title:s,fullExtent:o,isTable:l}=a,i=M(t),u=$(i)&&i.serverType==="FeatureServer";e.url=u?t:`${t}/${r}`,e.title||(e.title=s),e.extent=null,!l&&$(o)&&(e.extent=await B(o)),g(e,d.METADATA),g(e,d.MULTI_LAYER),f(e,d.SINGLE_LAYER),l&&f(e,d.TABLE),b(e)}async function ea(a,e,t){var s;const r=a.portal;await(r==null?void 0:r._signIn()),await((s=r==null?void 0:r.user)==null?void 0:s.addItem({item:a,data:e,folder:t==null?void 0:t.folder}))}const da=m(ta);async function ta(a,e){await J(a),Z(a);const t=a.portalItem,r=v(t),s=await h(a,r,e),o=await O(t,[{layer:a,layerJSON:s}]);return b(t),await t.update({data:o}),w(r),t}const ya=m(async(a,e)=>{await W(a);const t=a[0].portalItem,r=v(t),s=await Promise.all(a.map(l=>h(l,r,e))),o=await O(t,a.map((l,i)=>({layer:l,layerJSON:s[i]})));return b(t),await t.update({data:o}),await Promise.all(a.slice(1).map(l=>l.portalItem.reload())),w(r),t.clone()}),ca=m(ra);async function ra(a,e,t){await J(a);const r=X(a,e),s=v(r),o=N({layer:a,layerJSON:await h(a,s,t)});return await aa(a,r),await ea(r,o,t),a.portalItem=r,w(s),r}export{da as save,ya as saveAll,ca as saveAs};