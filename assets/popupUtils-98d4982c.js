import{P as c,f0 as h,eN as I,v as l}from"./vendor-128d427e.js";async function T(e,p=e.popupTemplate){if(c(p))return[];const n=await p.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:o}=p,{objectIdField:t,typeIdField:i,globalIdField:a,relationships:u}=e;if(n.includes("*"))return["*"];const f=o?await h(e):[],s=I(e.fieldsIndex,[...n,...f]);return i&&s.push(i),s&&t&&e.fieldsIndex.has(t)&&!s.includes(t)&&s.push(t),s&&a&&e.fieldsIndex.has(a)&&!s.includes(a)&&s.push(a),u&&u.forEach(r=>{const{keyField:d}=r;s&&d&&e.fieldsIndex.has(d)&&!s.includes(d)&&s.push(d)}),s}function x(e,p){return e.popupTemplate?e.popupTemplate:l(p)&&p.defaultPopupTemplateEnabled&&l(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}export{T as d,x as s};
