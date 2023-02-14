function c(n){return n!=null}function f(n){return n==null}function g(n,t){return c(n)?t(n):null}function M(n){return n}function x(n,t){return y(n,t),n}function y(n,t){if(f(n))throw new Error(t??"value is None")}function F(n,t){return c(n)?n:typeof t=="function"?t():t}function U(n,t){return c(n)?n:t}function v(n){return c(n)&&n.destroy(),null}function _(n){return c(n)&&n.dispose(),null}function b(n){return c(n)&&n.remove(),null}function E(n){return c(n)&&n.abort(),null}function R(n){return c(n)&&n.release(),null}function S(n,t,r){return c(n)&&c(t)?c(r)?r(n,t):n.equals(t):n===t}function z(n){return null}function B(n,t){const r=new Array;for(const e of n)r.push(A(e,null,t));return r}function C(n,t){for(const r of n)g(r,t)}function A(n,t,r){return c(n)?r(n):t}function O(n){return n.filter(t=>c(t))}function q(n,...t){let r=n;for(let e=0;e<t.length&&r;++e)r=r[t[e]];return r}function N(n){return n}let h=class l{constructor(t=1){this._seed=t}set seed(t){this._seed=t??Math.random()*l._m}getInt(){return this._seed=(l._a*this._seed+l._c)%l._m,this._seed}getFloat(){return this.getInt()/(l._m-1)}getIntRange(t,r){return Math.round(this.getFloatRange(t,r))}getFloatRange(t,r){const e=r-t;return t+this.getInt()/l._m*e}};h._m=2147483647,h._a=48271,h._c=0;function j(n,t){return t?n.filter((r,e,s)=>s.findIndex(t.bind(null,r))===e):n.filter((r,e,s)=>s.indexOf(r)===e)}function k(n,t,r){if(f(n)&&f(t))return!0;if(f(n)||f(t)||n.length!==t.length)return!1;if(r){for(let e=0;e<n.length;e++)if(!r(n[e],t[e]))return!1}else for(let e=0;e<n.length;e++)if(n[e]!==t[e])return!1;return!0}function D(n,t){let r=n.length!==t.length;r&&(n.length=t.length);for(let e=0;e<t.length;++e)n[e]!==t[e]&&(n[e]=t[e],r=!0);return r}function G(n,t,r){let e,s;return r?(e=t.filter(o=>!n.some(a=>r(a,o))),s=n.filter(o=>!t.some(a=>r(a,o)))):(e=t.filter(o=>!n.includes(o)),s=n.filter(o=>!t.includes(o))),{added:e,removed:s}}function H(n){return n&&typeof n.length=="number"}const $=!!Array.prototype.fill;function J(n,t){if($)return new Array(n).fill(t);const r=new Array(n);for(let e=0;e<n;e++)r[e]=t;return r}function K(n,t){t===void 0&&(t=n,n=0);const r=new Array(t-n);for(let e=n;e<t;e++)r[e-n]=e;return r}class p{constructor(){this.last=0}}const m=new p;function w(n,t,r,e){e=e||m;const s=Math.max(0,e.last-10);for(let a=s;a<r;++a)if(n[a]===t)return e.last=a,a;const o=Math.min(s,r);for(let a=0;a<o;++a)if(n[a]===t)return e.last=a,a;return-1}function L(n,t,r,e){const s=r??n.length,o=w(n,t,s,e);if(o!==-1)return n[o]=n[s-1],r==null&&n.pop(),t}const i=new Set;function P(n,t,r=n.length,e=t.length,s,o){if(e===0||r===0)return r;i.clear();for(let u=0;u<e;++u)i.add(t[u]);s=s||m;const a=Math.max(0,s.last-10);for(let u=a;u<r;++u)if(i.has(n[u])&&(o&&o.push(n[u]),i.delete(n[u]),n[u]=n[r-1],--r,--u,i.size===0||r===0))return i.clear(),r;for(let u=0;u<a;++u)if(i.has(n[u])&&(o&&o.push(n[u]),i.delete(n[u]),n[u]=n[r-1],--r,--u,i.size===0||r===0))return i.clear(),r;return i.clear(),r}function Q(n,t,r){const e=n.length;if(t>=e)return n.slice(0);const s=I(r),o=new Set,a=[];for(;a.length<t;){const u=Math.floor(s()*e);o.has(u)||(o.add(u),a.push(n[u]))}return a}function I(n){return n?(d.seed=n,()=>d.getFloat()):Math.random}const d=new h;function T(n,t){const r=n.indexOf(t);return r!==-1?(n.splice(r,1),t):null}function V(n,t){if(n.forEach)n.forEach(t);else for(let r=0;r<n.length;r++)t(n[r],r,n)}function W(n,t,r){if(n.slice)return n.slice(t,r);t===void 0?t=0:(t<0&&(t+=n.length),t=Math.min(n.length,Math.max(0,t))),r===void 0?r=n.length:(r<0&&(r+=n.length),r=Math.min(n.length,Math.max(0,r)));const e=Math.max(0,r-t),s=new n.constructor(e);for(let o=0;o<e;o++)s[o]=n[t+o];return s}function X(n){return n instanceof ArrayBuffer||n&&n.constructor&&n.constructor.name==="ArrayBuffer"}function Y(n){return n instanceof Int8Array||n&&n.constructor&&n.constructor.name==="Int8Array"}function Z(n){return n instanceof Uint8Array||n&&n.constructor&&n.constructor.name==="Uint8Array"}function nn(n){return n instanceof Uint8ClampedArray||n&&n.constructor&&n.constructor.name==="Uint8ClampedArray"}function tn(n){return n instanceof Int16Array||n&&n.constructor&&n.constructor.name==="Int16Array"}function rn(n){return n instanceof Uint16Array||n&&n.constructor&&n.constructor.name==="Uint16Array"}function en(n){return n instanceof Int32Array||n&&n.constructor&&n.constructor.name==="Int32Array"}function on(n){return n instanceof Uint32Array||n&&n.constructor&&n.constructor.name==="Uint32Array"}function un(n){return n instanceof Float32Array||n&&n.constructor&&n.constructor.name==="Float32Array"}function sn(n){return n instanceof Float64Array||n&&n.constructor&&n.constructor.name==="Float64Array"}export{sn as A,W as B,T as C,L as D,A as E,S as F,y as G,G as H,H as I,_ as J,D as K,h as L,B as M,C as N,R as O,J as P,K as Q,V as R,O as S,X as T,U,p as a,w as b,F as c,z as d,M as e,x as f,Y as g,b as h,k as i,P as j,Z as k,nn as l,tn as m,rn as n,g as o,E as p,q,c as r,v as s,f as t,j as u,en as v,on as w,N as x,un as y,Q as z};
