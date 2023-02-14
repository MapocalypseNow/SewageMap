import{V as o,c as s,ao as A,r as m,K as u,P as c,ap as l,t as p,e as v,aq as b,J as f,ar as h,as as x,at as g,au as F,av as P,y as I,aw as V,ax as w}from"./arcadeUtils-09cd4b60.js";import"./geometry-da69b92c.js";import"./ensureType-9613b5f0.js";import"./string-cc430a78.js";import"./typedArrayUtil-bd69bba0.js";import"./Error-8814705f.js";import"./Extent-d21a2637.js";import"./cast-4943406f.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-ec14a623.js";import"./Polyline-98ddf509.js";import"./typeUtils-98cd71e2.js";import"./jsonMap-9318d50f.js";import"./preload-helper-6c8d3039.js";import"./number-744902c4.js";import"./locale-30120714.js";import"./Field-27137e22.js";import"./enumeration-1740c98c.js";import"./fieldType-ff12d8db.js";import"./jsonUtils-7333a4d1.js";import"./featureConversionUtils-e981d065.js";import"./OptimizedFeature-ec32193d.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./request-9ab300ca.js";import"./unitUtils-bc71b997.js";import"./Portal-c85307b1.js";import"./Loadable-8b974e55.js";import"./Promise-9613afa4.js";import"./PortalGroup-e30a1480.js";import"./PortalUser-6c405f61.js";import"./sizeVariableUtils-d4870b0d.js";function y(t){return t&&t.domain?t.domain.type==="coded-value"||t.domain.type==="codedValue"?f.convertObjectToArcadeDictionary({type:"codedValue",name:t.domain.name,dataType:w[t.field.type],codedValues:t.domain.codedValues.map(r=>({name:r.name,code:r.code}))}):f.convertObjectToArcadeDictionary({type:"range",name:t.domain.name,dataType:w[t.field.type],min:t.domain.min,max:t.domain.max}):null}function en(t){t.mode==="async"&&(t.functions.domain=function(r,a){return t.standardFunctionAsync(r,a,async(i,d,n)=>{if(o(n,2,3,r,a),s(n[0]))return y(A(n[0],u(n[1]),n[2]===void 0?void 0:m(n[2])));if(c(n[0]))return await n[0]._ensureLoaded(),y(l(u(n[1]),n[0],null,n[2]===void 0?void 0:m(n[2])));throw new p(r,v.InvalidParameter,a)})},t.functions.subtypes=function(r,a){return t.standardFunctionAsync(r,a,async(i,d,n)=>{if(o(n,1,1,r,a),s(n[0])){const e=b(n[0]);return e?f.convertObjectToArcadeDictionary(e):null}if(c(n[0])){await n[0]._ensureLoaded();const e=n[0].subtypes();return e?f.convertObjectToArcadeDictionary(e):null}throw new p(r,v.InvalidParameter,a)})},t.functions.domainname=function(r,a){return t.standardFunctionAsync(r,a,async(i,d,n)=>{if(o(n,2,4,r,a),s(n[0]))return h(n[0],u(n[1]),n[2],n[3]===void 0?void 0:m(n[3]));if(c(n[0])){await n[0]._ensureLoaded();const e=l(u(n[1]),n[0],null,n[3]===void 0?void 0:m(n[3]));return x(e,n[2])}throw new p(r,v.InvalidParameter,a)})},t.signatures.push({name:"domainname",min:2,max:4}),t.functions.domaincode=function(r,a){return t.standardFunctionAsync(r,a,async(i,d,n)=>{if(o(n,2,4,r,a),s(n[0]))return g(n[0],u(n[1]),n[2],n[3]===void 0?void 0:m(n[3]));if(c(n[0])){await n[0]._ensureLoaded();const e=l(u(n[1]),n[0],null,n[3]===void 0?void 0:m(n[3]));return F(e,n[2])}throw new p(r,v.InvalidParameter,a)})},t.signatures.push({name:"domaincode",min:2,max:4})),t.functions.text=function(r,a){return t.standardFunctionAsync(r,a,(i,d,n)=>{if(o(n,1,2,r,a),!c(n[0]))return P(n[0],n[1]);{const e=I(n[1],"");if(e==="")return n[0].castToText();if(e.toLowerCase()==="schema")return n[0].convertToText("schema",i.abortSignal);if(e.toLowerCase()==="featureset")return n[0].convertToText("featureset",i.abortSignal)}})},t.functions.gdbversion=function(r,a){return t.standardFunctionAsync(r,a,async(i,d,n)=>{if(o(n,1,1,r,a),s(n[0]))return n[0].gdbVersion();if(c(n[0]))return(await n[0].load()).gdbVersion;throw new p(r,v.InvalidParameter,a)})},t.functions.schema=function(r,a){return t.standardFunctionAsync(r,a,async(i,d,n)=>{if(o(n,1,1,r,a),c(n[0]))return await n[0].load(),f.convertObjectToArcadeDictionary(n[0].schema());if(s(n[0])){const e=V(n[0]);return e?f.convertObjectToArcadeDictionary(e):null}throw new p(r,v.InvalidParameter,a)})}}export{en as registerFunctions};
