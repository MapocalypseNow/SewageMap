import{e6 as s,w as N,e1 as F,a$ as S,bi as R,e0 as E,Z as W,e8 as Y,d8 as Q}from"./index.js";import{q as o,V as h,z as j,K as q,t as a,e as u,Y as P,E as I,g as Z,v as g,P as L,x as b,y as w,G as D,H as m,S as M,I as O,r as A,L as X,O as _,R as $,T as nn,U as z}from"./arcadeUtils.js";import{disjoint as en,intersects as tn,touches as rn,crosses as an,within as un,contains as cn,overlaps as ln,equals as fn,relate as on,intersect as sn,union as dn,difference as wn,symmetricDifference as hn,clip as mn,cut as pn,planarArea as H,geodesicArea as J,planarLength as C,geodesicLength as k,distance as yn,densify as T,geodesicDensify as B,generalize as gn,buffer as vn,geodesicBuffer as Pn,offset as In,rotate as K,simplify as U,isSimple as An,convexHull as Fn}from"./geometryEngineAsync.js";import"./number.js";function V(r){return Y.indexOf("4.")===0?R.fromExtent(r):new R({spatialReference:r.spatialReference,rings:[[[r.xmin,r.ymin],[r.xmin,r.ymax],[r.xmax,r.ymax],[r.xmax,r.ymin],[r.xmin,r.ymin]]]})}function v(r,e,t){if(h(r,2,2,e,t),!(r[0]instanceof s&&r[1]instanceof s)){if(!(r[0]instanceof s&&r[1]===null)){if(!(r[1]instanceof s&&r[0]===null)){if(r[0]!==null||r[1]!==null)throw new a(e,u.InvalidParameter,t)}}}}async function G(r,e){if(r.type!=="polygon"&&r.type!=="polyline"&&r.type!=="extent")return 0;let t=1;(r.spatialReference.vcsWkid||r.spatialReference.latestVcsWkid)&&(t=nn(r.spatialReference)/Q(r.spatialReference));let l=0;if(r.type==="polyline")for(const n of r.paths)for(let i=1;i<n.length;i++)l+=z(n[i],n[i-1],t);else if(r.type==="polygon")for(const n of r.rings){for(let i=1;i<n.length;i++)l+=z(n[i],n[i-1],t);(n[0][0]!==n[n.length-1][0]||n[0][1]!==n[n.length-1][1]||n[0][2]!==void 0&&n[0][2]!==n[n.length-1][2])&&(l+=z(n[0],n[n.length-1],t))}else r.type==="extent"&&(l+=2*z([r.xmin,r.ymin,0],[r.xmax,r.ymin,0],t),l+=2*z([r.xmin,r.ymin,0],[r.xmin,r.ymax,0],t),l*=2,l+=4*Math.abs(w(r.zmax,0)*t-w(r.zmin,0)*t));const f=new F({hasZ:!1,hasM:!1,spatialReference:r.spatialReference,paths:[[0,0],[0,l]]});return C(f,e)}function Sn(r){r.mode==="async"&&(r.functions.disjoint=function(e,t){return r.standardFunctionAsync(e,t,(l,f,n)=>(v(n=o(n),e,t),n[0]===null||n[1]===null||en(n[0],n[1])))},r.functions.intersects=function(e,t){return r.standardFunctionAsync(e,t,(l,f,n)=>(v(n=o(n),e,t),n[0]!==null&&n[1]!==null&&tn(n[0],n[1])))},r.functions.touches=function(e,t){return r.standardFunctionAsync(e,t,(l,f,n)=>(v(n=o(n),e,t),n[0]!==null&&n[1]!==null&&rn(n[0],n[1])))},r.functions.crosses=function(e,t){return r.standardFunctionAsync(e,t,(l,f,n)=>(v(n=o(n),e,t),n[0]!==null&&n[1]!==null&&an(n[0],n[1])))},r.functions.within=function(e,t){return r.standardFunctionAsync(e,t,(l,f,n)=>(v(n=o(n),e,t),n[0]!==null&&n[1]!==null&&un(n[0],n[1])))},r.functions.contains=function(e,t){return r.standardFunctionAsync(e,t,(l,f,n)=>(v(n=o(n),e,t),n[0]!==null&&n[1]!==null&&cn(n[0],n[1])))},r.functions.overlaps=function(e,t){return r.standardFunctionAsync(e,t,(l,f,n)=>(v(n=o(n),e,t),n[0]!==null&&n[1]!==null&&ln(n[0],n[1])))},r.functions.equals=function(e,t){return r.standardFunctionAsync(e,t,(l,f,n)=>(h(n,2,2,e,t),n[0]===n[1]||(n[0]instanceof s&&n[1]instanceof s?fn(n[0],n[1]):!(!j(n[0])||!j(n[1]))&&n[0].getTime()===n[1].getTime())))},r.functions.relate=function(e,t){return r.standardFunctionAsync(e,t,(l,f,n)=>{if(n=o(n),h(n,3,3,e,t),n[0]instanceof s&&n[1]instanceof s)return on(n[0],n[1],q(n[2]));if(n[0]instanceof s&&n[1]===null||n[1]instanceof s&&n[0]===null||n[0]===null&&n[1]===null)return!1;throw new a(e,u.InvalidParameter,t)})},r.functions.intersection=function(e,t){return r.standardFunctionAsync(e,t,(l,f,n)=>(v(n=o(n),e,t),n[0]===null||n[1]===null?null:sn(n[0],n[1])))},r.functions.union=function(e,t){return r.standardFunctionAsync(e,t,(l,f,n)=>{const i=[];if((n=o(n)).length===0)throw new a(e,u.WrongNumberOfParameters,t);if(n.length===1)if(P(n[0])){const c=o(n[0]);for(let d=0;d<c.length;d++)if(c[d]!==null){if(!(c[d]instanceof s))throw new a(e,u.InvalidParameter,t);i.push(c[d])}}else{if(!I(n[0])){if(n[0]instanceof s)return Z(g(n[0]),e.spatialReference);if(n[0]===null)return null;throw new a(e,u.InvalidParameter,t)}{const c=o(n[0].toArray());for(let d=0;d<c.length;d++)if(c[d]!==null){if(!(c[d]instanceof s))throw new a(e,u.InvalidParameter,t);i.push(c[d])}}}else for(let c=0;c<n.length;c++)if(n[c]!==null){if(!(n[c]instanceof s))throw new a(e,u.InvalidParameter,t);i.push(n[c])}return i.length===0?null:dn(i)})},r.functions.difference=function(e,t){return r.standardFunctionAsync(e,t,(l,f,n)=>(v(n=o(n),e,t),n[0]!==null&&n[1]===null?g(n[0]):n[0]===null?null:wn(n[0],n[1])))},r.functions.symmetricdifference=function(e,t){return r.standardFunctionAsync(e,t,(l,f,n)=>(v(n=o(n),e,t),n[0]===null&&n[1]===null?null:n[0]===null?g(n[1]):n[1]===null?g(n[0]):hn(n[0],n[1])))},r.functions.clip=function(e,t){return r.standardFunctionAsync(e,t,(l,f,n)=>{if(n=o(n),h(n,2,2,e,t),!(n[1]instanceof N)&&n[1]!==null)throw new a(e,u.InvalidParameter,t);if(n[0]===null)return null;if(!(n[0]instanceof s))throw new a(e,u.InvalidParameter,t);return n[1]===null?null:mn(n[0],n[1])})},r.functions.cut=function(e,t){return r.standardFunctionAsync(e,t,(l,f,n)=>{if(n=o(n),h(n,2,2,e,t),!(n[1]instanceof F)&&n[1]!==null)throw new a(e,u.InvalidParameter,t);if(n[0]===null)return[];if(!(n[0]instanceof s))throw new a(e,u.InvalidParameter,t);return n[1]===null?[g(n[0])]:pn(n[0],n[1])})},r.functions.area=function(e,t){return r.standardFunctionAsync(e,t,async(l,f,n)=>{if(h(n,1,2,e,t),(n=o(n))[0]===null)return 0;if(L(n[0])){const i=await n[0].sumArea(b(w(n[1],-1)),!1,e.abortSignal);if(e.abortSignal.aborted)throw new a(e,u.Cancelled,t);return i}if(P(n[0])||I(n[0])){const i=D(n[0],e.spatialReference);return i===null?0:H(i,b(w(n[1],-1)))}if(!(n[0]instanceof s))throw new a(e,u.InvalidParameter,t);return H(n[0],b(w(n[1],-1)))})},r.functions.areageodetic=function(e,t){return r.standardFunctionAsync(e,t,async(l,f,n)=>{if(h(n,1,2,e,t),(n=o(n))[0]===null)return 0;if(L(n[0])){const i=await n[0].sumArea(b(w(n[1],-1)),!0,e.abortSignal);if(e.abortSignal.aborted)throw new a(e,u.Cancelled,t);return i}if(P(n[0])||I(n[0])){const i=D(n[0],e.spatialReference);return i===null?0:J(i,b(w(n[1],-1)))}if(!(n[0]instanceof s))throw new a(e,u.InvalidParameter,t);return J(n[0],b(w(n[1],-1)))})},r.functions.length=function(e,t){return r.standardFunctionAsync(e,t,async(l,f,n)=>{if(h(n,1,2,e,t),(n=o(n))[0]===null)return 0;if(L(n[0])){const i=await n[0].sumLength(m(w(n[1],-1)),!1,e.abortSignal);if(e.abortSignal.aborted)throw new a(e,u.Cancelled,t);return i}if(P(n[0])||I(n[0])){const i=M(n[0],e.spatialReference);return i===null?0:C(i,m(w(n[1],-1)))}if(!(n[0]instanceof s))throw new a(e,u.InvalidParameter,t);return C(n[0],m(w(n[1],-1)))})},r.functions.length3d=function(e,t){return r.standardFunctionAsync(e,t,(l,f,n)=>{if(h(n,1,2,e,t),(n=o(n))[0]===null)return 0;if(P(n[0])||I(n[0])){const i=M(n[0],e.spatialReference);return i===null?0:i.hasZ===!0?G(i,m(w(n[1],-1))):C(i,m(w(n[1],-1)))}if(!(n[0]instanceof s))throw new a(e,u.InvalidParameter,t);return n[0].hasZ===!0?G(n[0],m(w(n[1],-1))):C(n[0],m(w(n[1],-1)))})},r.functions.lengthgeodetic=function(e,t){return r.standardFunctionAsync(e,t,async(l,f,n)=>{if(h(n,1,2,e,t),(n=o(n))[0]===null)return 0;if(L(n[0])){const i=await n[0].sumLength(m(w(n[1],-1)),!0,e.abortSignal);if(e.abortSignal.aborted)throw new a(e,u.Cancelled,t);return i}if(P(n[0])||I(n[0])){const i=M(n[0],e.spatialReference);return i===null?0:k(i,m(w(n[1],-1)))}if(!(n[0]instanceof s))throw new a(e,u.InvalidParameter,t);return k(n[0],m(w(n[1],-1)))})},r.functions.distance=function(e,t){return r.standardFunctionAsync(e,t,(l,f,n)=>{n=o(n),h(n,2,3,e,t);let i=n[0];(P(n[0])||I(n[0]))&&(i=O(n[0],e.spatialReference));let c=n[1];if((P(n[1])||I(n[1]))&&(c=O(n[1],e.spatialReference)),!(i instanceof s))throw new a(e,u.InvalidParameter,t);if(!(c instanceof s))throw new a(e,u.InvalidParameter,t);return yn(i,c,m(w(n[2],-1)))})},r.functions.distancegeodetic=function(e,t){return r.standardFunctionAsync(e,t,(l,f,n)=>{n=o(n),h(n,2,3,e,t);const i=n[0],c=n[1];if(!(i instanceof S))throw new a(e,u.InvalidParameter,t);if(!(c instanceof S))throw new a(e,u.InvalidParameter,t);const d=new F({paths:[],spatialReference:i.spatialReference});return d.addPath([i,c]),k(d,m(w(n[2],-1)))})},r.functions.densify=function(e,t){return r.standardFunctionAsync(e,t,(l,f,n)=>{if(n=o(n),h(n,2,3,e,t),n[0]===null)return null;if(!(n[0]instanceof s))throw new a(e,u.InvalidParameter,t);const i=A(n[1]);if(isNaN(i))throw new a(e,u.InvalidParameter,t);if(i<=0)throw new a(e,u.InvalidParameter,t);return n[0]instanceof R||n[0]instanceof F?T(n[0],i,m(w(n[2],-1))):n[0]instanceof N?T(V(n[0]),i,m(w(n[2],-1))):n[0]})},r.functions.densifygeodetic=function(e,t){return r.standardFunctionAsync(e,t,(l,f,n)=>{if(n=o(n),h(n,2,3,e,t),n[0]===null)return null;if(!(n[0]instanceof s))throw new a(e,u.InvalidParameter,t);const i=A(n[1]);if(isNaN(i))throw new a(e,u.InvalidParameter,t);if(i<=0)throw new a(e,u.InvalidParameter,t);return n[0]instanceof R||n[0]instanceof F?B(n[0],i,m(w(n[2],-1))):n[0]instanceof N?B(V(n[0]),i,m(w(n[2],-1))):n[0]})},r.functions.generalize=function(e,t){return r.standardFunctionAsync(e,t,(l,f,n)=>{if(n=o(n),h(n,2,4,e,t),n[0]===null)return null;if(!(n[0]instanceof s))throw new a(e,u.InvalidParameter,t);const i=A(n[1]);if(isNaN(i))throw new a(e,u.InvalidParameter,t);return gn(n[0],i,X(w(n[2],!0)),m(w(n[3],-1)))})},r.functions.buffer=function(e,t){return r.standardFunctionAsync(e,t,(l,f,n)=>{if(n=o(n),h(n,2,3,e,t),n[0]===null)return null;if(!(n[0]instanceof s))throw new a(e,u.InvalidParameter,t);const i=A(n[1]);if(isNaN(i))throw new a(e,u.InvalidParameter,t);return i===0?g(n[0]):vn(n[0],i,m(w(n[2],-1)))})},r.functions.buffergeodetic=function(e,t){return r.standardFunctionAsync(e,t,(l,f,n)=>{if(n=o(n),h(n,2,3,e,t),n[0]===null)return null;if(!(n[0]instanceof s))throw new a(e,u.InvalidParameter,t);const i=A(n[1]);if(isNaN(i))throw new a(e,u.InvalidParameter,t);return i===0?g(n[0]):Pn(n[0],i,m(w(n[2],-1)))})},r.functions.offset=function(e,t){return r.standardFunctionAsync(e,t,(l,f,n)=>{if(n=o(n),h(n,2,6,e,t),n[0]===null)return null;if(!(n[0]instanceof R||n[0]instanceof F))throw new a(e,u.InvalidParameter,t);const i=A(n[1]);if(isNaN(i))throw new a(e,u.InvalidParameter,t);const c=A(w(n[4],10));if(isNaN(c))throw new a(e,u.InvalidParameter,t);const d=A(w(n[5],0));if(isNaN(d))throw new a(e,u.InvalidParameter,t);return In(n[0],i,m(w(n[2],-1)),q(w(n[3],"round")).toLowerCase(),c,d)})},r.functions.rotate=function(e,t){return r.standardFunctionAsync(e,t,(l,f,n)=>{n=o(n),h(n,2,3,e,t);let i=n[0];if(i===null)return null;if(!(i instanceof s))throw new a(e,u.InvalidParameter,t);i instanceof N&&(i=R.fromExtent(i));const c=A(n[1]);if(isNaN(c))throw new a(e,u.InvalidParameter,t);const d=w(n[2],null);if(d===null)return K(i,c);if(d instanceof S)return K(i,c,d);throw new a(e,u.InvalidParameter,t)})},r.functions.centroid=function(e,t){return r.standardFunctionAsync(e,t,(l,f,n)=>{if(n=o(n),h(n,1,1,e,t),n[0]===null)return null;let i=n[0];if((P(n[0])||I(n[0]))&&(i=O(n[0],e.spatialReference)),i===null)return null;if(!(i instanceof s))throw new a(e,u.InvalidParameter,t);return i instanceof S?Z(g(n[0]),e.spatialReference):i instanceof R?i.centroid:i instanceof F?_(i):i instanceof E?$(i):i instanceof N?i.center:null})},r.functions.multiparttosinglepart=function(e,t){return r.standardFunctionAsync(e,t,async(l,f,n)=>{n=o(n),h(n,1,1,e,t);const i=[];if(n[0]===null)return null;if(!(n[0]instanceof s))throw new a(e,u.InvalidParameter,t);if(n[0]instanceof S)return[Z(g(n[0]),e.spatialReference)];if(n[0]instanceof N)return[Z(g(n[0]),e.spatialReference)];const c=await U(n[0]);if(c instanceof R){const d=[],y=[];for(let p=0;p<c.rings.length;p++)if(c.isClockwise(c.rings[p])){const x=W({rings:[c.rings[p]],hasZ:c.hasZ===!0,hazM:c.hasM===!0,spatialReference:c.spatialReference.toJSON()});d.push(x)}else y.push({ring:c.rings[p],pt:c.getPoint(p,0)});for(let p=0;p<y.length;p++)for(let x=0;x<d.length;x++)if(d[x].contains(y[p].pt)){d[x].addRing(y[p].ring);break}return d}if(c instanceof F){const d=[];for(let y=0;y<c.paths.length;y++){const p=W({paths:[c.paths[y]],hasZ:c.hasZ===!0,hazM:c.hasM===!0,spatialReference:c.spatialReference.toJSON()});d.push(p)}return d}if(n[0]instanceof E){const d=Z(g(n[0]),e.spatialReference);for(let y=0;y<d.points.length;y++)i.push(d.getPoint(y));return i}return null})},r.functions.issimple=function(e,t){return r.standardFunctionAsync(e,t,(l,f,n)=>{if(n=o(n),h(n,1,1,e,t),n[0]===null)return!0;if(!(n[0]instanceof s))throw new a(e,u.InvalidParameter,t);return An(n[0])})},r.functions.simplify=function(e,t){return r.standardFunctionAsync(e,t,(l,f,n)=>{if(n=o(n),h(n,1,1,e,t),n[0]===null)return null;if(!(n[0]instanceof s))throw new a(e,u.InvalidParameter,t);return U(n[0])})},r.functions.convexhull=function(e,t){return r.standardFunctionAsync(e,t,(l,f,n)=>{if(n=o(n),h(n,1,1,e,t),n[0]===null)return null;if(!(n[0]instanceof s))throw new a(e,u.InvalidParameter,t);return Fn(n[0])})})}export{Sn as registerFunctions};
