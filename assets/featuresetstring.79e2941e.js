import{V as o,c as s,ao as A,r as u,K as m,P as c,ap as w,t as v,e as f,aq as b,J as l,ar as h,as as x,at as g,au as F,av as P,y as I,aw as V,ax as p}from"./arcadeUtils.ce22dab4.js";import"./index.2901469c.js";import"./number.ccbb18e7.js";function y(a){return a&&a.domain?a.domain.type==="coded-value"||a.domain.type==="codedValue"?l.convertObjectToArcadeDictionary({type:"codedValue",name:a.domain.name,dataType:p[a.field.type],codedValues:a.domain.codedValues.map(e=>({name:e.name,code:e.code}))}):l.convertObjectToArcadeDictionary({type:"range",name:a.domain.name,dataType:p[a.field.type],min:a.domain.min,max:a.domain.max}):null}function O(a){a.mode==="async"&&(a.functions.domain=function(e,t){return a.standardFunctionAsync(e,t,async(i,d,n)=>{if(o(n,2,3,e,t),s(n[0]))return y(A(n[0],m(n[1]),n[2]===void 0?void 0:u(n[2])));if(c(n[0]))return await n[0]._ensureLoaded(),y(w(m(n[1]),n[0],null,n[2]===void 0?void 0:u(n[2])));throw new v(e,f.InvalidParameter,t)})},a.functions.subtypes=function(e,t){return a.standardFunctionAsync(e,t,async(i,d,n)=>{if(o(n,1,1,e,t),s(n[0])){const r=b(n[0]);return r?l.convertObjectToArcadeDictionary(r):null}if(c(n[0])){await n[0]._ensureLoaded();const r=n[0].subtypes();return r?l.convertObjectToArcadeDictionary(r):null}throw new v(e,f.InvalidParameter,t)})},a.functions.domainname=function(e,t){return a.standardFunctionAsync(e,t,async(i,d,n)=>{if(o(n,2,4,e,t),s(n[0]))return h(n[0],m(n[1]),n[2],n[3]===void 0?void 0:u(n[3]));if(c(n[0])){await n[0]._ensureLoaded();const r=w(m(n[1]),n[0],null,n[3]===void 0?void 0:u(n[3]));return x(r,n[2])}throw new v(e,f.InvalidParameter,t)})},a.signatures.push({name:"domainname",min:2,max:4}),a.functions.domaincode=function(e,t){return a.standardFunctionAsync(e,t,async(i,d,n)=>{if(o(n,2,4,e,t),s(n[0]))return g(n[0],m(n[1]),n[2],n[3]===void 0?void 0:u(n[3]));if(c(n[0])){await n[0]._ensureLoaded();const r=w(m(n[1]),n[0],null,n[3]===void 0?void 0:u(n[3]));return F(r,n[2])}throw new v(e,f.InvalidParameter,t)})},a.signatures.push({name:"domaincode",min:2,max:4})),a.functions.text=function(e,t){return a.standardFunctionAsync(e,t,(i,d,n)=>{if(o(n,1,2,e,t),!c(n[0]))return P(n[0],n[1]);{const r=I(n[1],"");if(r==="")return n[0].castToText();if(r.toLowerCase()==="schema")return n[0].convertToText("schema",i.abortSignal);if(r.toLowerCase()==="featureset")return n[0].convertToText("featureset",i.abortSignal)}})},a.functions.gdbversion=function(e,t){return a.standardFunctionAsync(e,t,async(i,d,n)=>{if(o(n,1,1,e,t),s(n[0]))return n[0].gdbVersion();if(c(n[0]))return(await n[0].load()).gdbVersion;throw new v(e,f.InvalidParameter,t)})},a.functions.schema=function(e,t){return a.standardFunctionAsync(e,t,async(i,d,n)=>{if(o(n,1,1,e,t),c(n[0]))return await n[0].load(),l.convertObjectToArcadeDictionary(n[0].schema());if(s(n[0])){const r=V(n[0]);return r?l.convertObjectToArcadeDictionary(r):null}throw new v(e,f.InvalidParameter,t)})}}export{O as registerFunctions};
