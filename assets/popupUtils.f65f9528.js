import{l as m,e_ as T,e$ as x,r}from"./vendor.f8a4aecc.js";async function b(e,s=e.popupTemplate){var l,o;if(m(s))return[];const n=await s.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:c}=s,{objectIdField:t,typeIdField:i,globalIdField:d,relationships:u}=e;if(n.includes("*"))return["*"];const h=c?await T(e):[],p=x(e.fieldsIndex,[...n,...h]);return i&&p.push(i),p&&t&&((l=e.fieldsIndex)==null?void 0:l.has(t))&&!p.includes(t)&&p.push(t),p&&d&&((o=e.fieldsIndex)==null?void 0:o.has(d))&&!p.includes(d)&&p.push(d),u&&u.forEach(I=>{var f;const{keyField:a}=I;p&&a&&((f=e.fieldsIndex)==null?void 0:f.has(a))&&!p.includes(a)&&p.push(a)}),p}function E(e,s){return e.popupTemplate?e.popupTemplate:r(s)&&s.defaultPopupTemplateEnabled&&r(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}export{b as d,E as s};
