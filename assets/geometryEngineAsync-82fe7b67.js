import{ap as f,ea as w}from"./vendor-445d19db.js";function i(t){var r;return Array.isArray(t)?(r=t[0])==null?void 0:r.spatialReference:t==null?void 0:t.spatialReference}function l(t){return t&&(Array.isArray(t)?t.map(l):t.toJSON?t.toJSON():t)}function u(t){return Array.isArray(t)?t.map(r=>f(r)):f(t)}function m(t,r){let e;return Array.isArray(t)?e=t:(e=[],e.push(t),r!=null&&e.push(r)),e}let s;async function g(){return s||(s=w("geometryEngineWorker",{strategy:"distributed"})),s}async function n(t,r){return(await g()).invoke("executeGEOperation",{operation:t,parameters:l(r)})}async function h(t,r){return u(await n("clip",[i(t),t,r]))}async function x(t,r){return u(await n("cut",[i(t),t,r]))}function v(t,r){return n("contains",[i(t),t,r])}function E(t,r){return n("crosses",[i(t),t,r])}function O(t,r,e){return n("distance",[i(t),t,r,e])}function R(t,r){return n("equals",[i(t),t,r])}function S(t,r){return n("intersects",[i(t),t,r])}function J(t,r){return n("touches",[i(t),t,r])}function N(t,r){return n("within",[i(t),t,r])}function b(t,r){return n("disjoint",[i(t),t,r])}function k(t,r){return n("overlaps",[i(t),t,r])}function D(t,r,e){return n("relate",[i(t),t,r,e])}function L(t){return n("isSimple",[i(t),t])}async function j(t){return u(await n("simplify",[i(t),t]))}async function B(t,r=!1){return u(await n("convexHull",[i(t),t,r]))}async function G(t,r){return u(await n("difference",[i(t),t,r]))}async function H(t,r){return u(await n("symmetricDifference",[i(t),t,r]))}async function W(t,r){return u(await n("intersect",[i(t),t,r]))}async function $(t,r=null){const e=m(t,r);return u(await n("union",[i(e),e]))}async function q(t,r,e,a,c,o){return u(await n("offset",[i(t),t,r,e,a,c,o]))}async function z(t,r,e,a=!1){const c=[i(t),t,r,e,a];return u(await n("buffer",c))}async function C(t,r,e,a,c,o){const p=[i(t),t,r,e,a,c,o];return u(await n("geodesicBuffer",p))}function d(t){var r;return"xmin"in t?t.center:"x"in t?t:(r=t.extent)==null?void 0:r.center}async function F(t,r,e){if(t==null)throw new y;const a=t.spatialReference;if((e=e??d(t))==null)throw new y;const c=t.constructor.fromJSON(await n("rotate",[a,t,r,e]));return c.spatialReference=a,c}async function I(t,r,e,a){return u(await n("generalize",[i(t),t,r,e,a]))}async function K(t,r,e){return u(await n("densify",[i(t),t,r,e]))}async function M(t,r,e,a=0){return u(await n("geodesicDensify",[i(t),t,r,e,a]))}function P(t,r){return n("planarArea",[i(t),t,r])}function U(t,r){return n("planarLength",[i(t),t,r])}function Z(t,r,e){return n("geodesicArea",[i(t),t,r,e])}function Q(t,r,e){return n("geodesicLength",[i(t),t,r,e])}class y extends Error{constructor(){super("Illegal Argument Exception")}}export{b as A,I as B,K as C,W as D,G as E,U as F,F as H,L as J,Z as K,z as L,Q as M,j as N,k as O,C as P,D as R,J as S,M as U,P as W,$ as b,O as d,R as g,S as h,B as j,H as k,E as m,v as p,q as v,x as w,N as x,h as y};
