import{lm as p,lt as d,lu as f,lr as i,U as m}from"./index.js";function y(s){const t=s.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}function j(s,t){const e={};for(const n of t){const{parentObjectId:a,parentGlobalId:o,attachmentInfos:r}=n;for(const c of r){const{id:h}=c,l=p(d(`${s.path}/${a}/attachments/${h}`)),u=f.fromJSON(c);u.set({url:l,parentObjectId:a,parentGlobalId:o}),e[a]?e[a].push(u):e[a]=[u]}}return e}function b(s,t,e){let n={query:i({...s.query,f:"json",...y(t)})};return e&&(n={...e,...n,query:{...e.query,...n.query}}),m(s.path+"/queryAttachments",n).then(a=>a.data.attachmentGroups)}async function q(s,t,e){const{objectIds:n}=t,a=[];for(const o of n)a.push(m(s.path+"/"+o+"/attachments",e));return Promise.all(a).then(o=>n.map((r,c)=>({parentObjectId:r,attachmentInfos:o[c].data.attachmentInfos})))}export{b as executeAttachmentQuery,q as fetchAttachments,j as processAttachmentQueryResult};