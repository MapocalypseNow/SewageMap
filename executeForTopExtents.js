import{C as r,lv as m,w as c}from"./index.js";import{p as f}from"./queryTopFeatures.js";async function u(o,a,e){const n=r(o),t=await f(n,m.from(a),{...e});return{count:t.data.count,extent:c.fromJSON(t.data.extent)}}export{u as executeForTopExtents};