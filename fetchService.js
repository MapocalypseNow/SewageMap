import{U as c}from"./index.js";async function i(t,e){const{data:r}=await c(t,{responseType:"json",query:{f:"json",...e==null?void 0:e.customParameters,token:e==null?void 0:e.apiKey}});return r}async function l(t,e){var s;const r=await i(t,e);r.layers=r.layers.filter(y);const a={serviceJSON:r};if(((s=r.currentVersion)!=null?s:0)<10.5)return a;const n=await i(t+"/layers",e);return a.layersJSON={layers:n.layers.filter(y),tables:n.tables},a}function y(t){return!t.type||t.type==="Feature Layer"}export{l as r,i as t};
