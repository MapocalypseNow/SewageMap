import{l as s,iT as e}from"./index.js";import{m}from"./queryTopFeatures.js";async function i(o,t,a){const r=s(o);return(await m(r,e.from(t),{...a})).data.objectIds}export{i as executeForTopIds};
