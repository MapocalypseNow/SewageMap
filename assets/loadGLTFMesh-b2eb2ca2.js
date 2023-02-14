import{l as R}from"./Color-ebbea628.js";import{U as G}from"./request-9ab300ca.js";import{r as F}from"./ensureType-9613b5f0.js";import{M}from"./mathUtils-daf59e84.js";import{r as m,e as T,o as h,t as P}from"./typedArrayUtil-bd69bba0.js";import{g as B}from"./mat3-45e3f2eb.js";import{e as I}from"./mat3f64-b33e332c.js";import{a as D}from"./common-701a4199.js";import{r as U}from"./vec4f64-018b3fa6.js";import{p as j,m as k,c as q,g as z}from"./meshFeatureSet-720ed76e.js";import{T as V,i as N,c as O,x as _,u as K,L as Q,O as L,E as W}from"./BufferView-dfb97f8b.js";import{t as X,r as Y,o as Z,b as H,f as J,e as tt,n as rt}from"./vec33-19f0d176.js";import{a as ot,m as et,r as b,b as nt,h as it,t as E,c as st,j as at,d as mt,e as pt,k as ut,i as ct,f as lt,g as ft,l as dt,o as $t}from"./DefaultMaterial_COLOR_GAMMA-41f9de94.js";import{_ as xt}from"./georeference-cd1f34ad.js";import{E as A,D as C}from"./enums-64ab819c.js";import"./colorUtils-639f4d25.js";import"./preload-helper-6c8d3039.js";import"./Error-8814705f.js";import"./string-cc430a78.js";import"./promiseUtils-ec14a623.js";import"./Graphic-13c64b79.js";import"./cast-4943406f.js";import"./nextTick-3ee5a785.js";import"./geometry-da69b92c.js";import"./Extent-d21a2637.js";import"./Polyline-98ddf509.js";import"./typeUtils-98cd71e2.js";import"./jsonMap-9318d50f.js";import"./PopupTemplate-9e34fd80.js";import"./Clonable-7eedeb5c.js";import"./Collection-e1ec52f9.js";import"./Evented-28d49a6f.js";import"./SimpleObservable-b403cd38.js";import"./fieldUtils-605e1353.js";import"./arcadeOnDemand-5200ab6b.js";import"./enumeration-1740c98c.js";import"./number-d7fe9942.js";import"./locale-30120714.js";import"./Identifiable-28626f77.js";import"./symbols-26ff8002.js";import"./CIMSymbol-fc3b1809.js";import"./Symbol-f543a02b.js";import"./screenUtils-7afeb41c.js";import"./opacityUtils-dc8d0a85.js";import"./aaBoundingBox-58fec4c8.js";import"./persistableUrlUtils-d6987fba.js";import"./collectionUtils-28848f7d.js";import"./Portal-c85307b1.js";import"./Loadable-8b974e55.js";import"./Promise-9613afa4.js";import"./PortalGroup-e30a1480.js";import"./PortalUser-6c405f61.js";import"./jsonUtils-7333a4d1.js";import"./HandleOwner-46fb81da.js";import"./reactiveUtils-3389689f.js";import"./imageUtils-c2d0d1ae.js";import"./earcut-58237617.js";import"./deduplicate-eb9d58da.js";import"./projection-462aeb9f.js";import"./unitUtils-bc71b997.js";import"./mat4-62d5e6a4.js";import"./assets-2905a8db.js";import"./zscale-3fafe111.js";import"./mat4f64-3d813481.js";import"./FeatureSet-cf76d07f.js";import"./Field-27137e22.js";import"./fieldType-ff12d8db.js";import"./vec2-f978aef8.js";import"./types-e1c0a5bf.js";import"./asyncUtils-b47bdec8.js";import"./Version-51a09f10.js";import"./quat-7867de93.js";import"./quatf64-7fd38d64.js";import"./compilerUtils-527a276b.js";async function Xr(t,r,n){const i=new ot(gt(n)),o=(await et(i,r,n,!0)).model,l=o.lods.shift(),p=new Map,u=new Map;o.textures.forEach((g,y)=>p.set(y,bt(g))),o.materials.forEach((g,y)=>u.set(y,vt(g,p)));const a=ht(l);for(const g of a.parts)wt(a,g,u);const{position:d,normal:c,tangent:e,color:s,texCoord0:f}=a.vertexAttributes,x={position:d.typedBuffer,normal:m(c)?c.typedBuffer:null,tangent:m(e)?e.typedBuffer:null,uv:m(f)?f.typedBuffer:null,color:m(s)?s.typedBuffer:null},w=xt(x,t,n);return{transform:w.transform,components:a.components,spatialReference:t.spatialReference,vertexAttributes:new j({position:w.vertexAttributes.position,normal:w.vertexAttributes.normal,tangent:w.vertexAttributes.tangent,color:x.color,uv:x.uv})}}function gt(t){const r=t==null?void 0:t.resolveFile;return r?{busy:!1,request:async(n,i,o)=>{const l=r(n);return(await G(l,{responseType:i==="image"?"image":i==="binary"?"array-buffer":"json",signal:m(o)?o.signal:null})).data}}:null}function v(t,r){if(P(t))return"-";const n=t.typedBuffer;return`${F(r,n.buffer,()=>r.size)}/${n.byteOffset}/${n.byteLength}`}function Tt(t){return m(t)?t.toString():"-"}function ht(t){let r=0;const n={color:!1,tangent:!1,normal:!1,texCoord0:!1},i=new Map,o=new Map,l=[];for(const p of t.parts){const{attributes:{position:u,normal:a,color:d,tangent:c,texCoord0:e}}=p,s=`
      ${v(u,i)}/
      ${v(a,i)}/
      ${v(d,i)}/
      ${v(c,i)}/
      ${v(e,i)}/
      ${Tt(p.transform)}
    `;let f=!1;const x=F(o,s,()=>(f=!0,{start:r,length:u.count}));f&&(r+=u.count),a&&(n.normal=!0),d&&(n.color=!0),c&&(n.tangent=!0),e&&(n.texCoord0=!0),l.push({gltf:p,writeVertices:f,region:x})}return{vertexAttributes:{position:b(V,r),normal:n.normal?b(N,r):null,tangent:n.tangent?b(O,r):null,color:n.color?b(_,r):null,texCoord0:n.texCoord0?b(K,r):null},parts:l,components:[]}}function bt(t){return new k({data:t.data,wrap:Ct(t.parameters.wrap)})}function vt(t,r){const n=new R(Rt(t.color,t.opacity)),i=t.emissiveFactor?new R(Mt(t.emissiveFactor)):null;return new q({color:n,colorTexture:T(h(t.textureColor,o=>r.get(o))),normalTexture:T(h(t.textureNormal,o=>r.get(o))),emissiveColor:i,emissiveTexture:T(h(t.textureEmissive,o=>r.get(o))),occlusionTexture:T(h(t.textureOcclusion,o=>r.get(o))),alphaMode:At(t.alphaMode),alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,metallic:t.metallicFactor,roughness:t.roughnessFactor,metallicRoughnessTexture:T(h(t.textureMetallicRoughness,o=>r.get(o))),colorTextureTransform:t.colorTextureTransform,normalTextureTransform:t.normalTextureTransform,occlusionTextureTransform:t.occlusionTextureTransform,emissiveTextureTransform:t.emissiveTextureTransform,metallicRoughnessTextureTransform:t.metallicRoughnessTextureTransform})}function wt(t,r,n){r.writeVertices&&yt(t,r);const i=r.gltf,o=Et(i.indices||i.attributes.position.count,i.primitiveType),l=r.region.start;if(l)for(let p=0;p<o.length;p++)o[p]+=l;t.components.push(new z({faces:o,material:n.get(i.material),trustSourceNormals:!0}))}function yt(t,r){const{position:n,normal:i,tangent:o,color:l,texCoord0:p}=t.vertexAttributes,u=r.region.start,{attributes:a,transform:d}=r.gltf,c=a.position.count;if(X(n.slice(u,c),a.position,d),m(a.normal)&&m(i)){const e=B(I(),d),s=i.slice(u,c);Y(s,a.normal,e),M(e)&&Z(s,s)}else m(i)&&H(i,0,0,1,{dstIndex:u,count:c});if(m(a.tangent)&&m(o)){const e=B(I(),d),s=o.slice(u,c);nt(s,a.tangent,e),M(e)&&it(s,s)}else m(o)&&E(o,0,0,1,1,{dstIndex:u,count:c});if(m(a.texCoord0)&&m(p)?st(p.slice(u,c),a.texCoord0):m(p)&&at(p,0,0,{dstIndex:u,count:c}),m(a.color)&&m(l)){const e=a.color,s=l.slice(u,c);if(e.elementCount===4)e instanceof O?mt(s,e,255):e instanceof _?pt(s,e):e instanceof Q&&ut(s,e,8);else{E(s,255,255,255,255);const f=L.fromTypedArray(s.typedBuffer,s.typedBufferStride);e instanceof N?J(f,e,255):e instanceof L?tt(f,e):e instanceof W&&rt(f,e,8)}}else m(l)&&E(l.slice(u,c),255,255,255,255)}function Et(t,r){switch(r){case A.TRIANGLES:return ft(t,dt);case A.TRIANGLE_STRIP:return lt(t);case A.TRIANGLE_FAN:return ct(t)}}function At(t){switch(t){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function Ct(t){return{horizontal:S(t.s),vertical:S(t.t)}}function S(t){switch(t){case C.CLAMP_TO_EDGE:return"clamp";case C.MIRRORED_REPEAT:return"mirror";case C.REPEAT:return"repeat"}}function $(t){return t**(1/$t)*255}function Rt(t,r){return U($(t[0]),$(t[1]),$(t[2]),r)}function Mt(t){return D($(t[0]),$(t[1]),$(t[2]))}export{Xr as loadGLTFMesh};
