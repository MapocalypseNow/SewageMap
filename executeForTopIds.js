import{C as s,lv as e}from"./index.js";import{m}from"./queryTopFeatures.js";async function n(o,t,a){const r=s(o);return(await m(r,e.from(t),{...a})).data.objectIds}export{n as executeForTopIds};
