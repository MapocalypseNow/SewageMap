import{e as d,r as h,p as j,a as p,v as w}from"./promiseUtils-ec14a623.js";import{P as L,G as $,c as q}from"./cast-4943406f.js";import{h as m}from"./typedArrayUtil-bd69bba0.js";import"./string-cc430a78.js";import"./Error-8814705f.js";function x(n,o,t={}){return a(n,o,t,v)}function z(n,o,t={}){return a(n,o,t,y)}function a(n,o,t={},e){let r=null;const c=t.once?(i,l)=>{e(i)&&(m(r),o(i,l))}:(i,l)=>{e(i)&&o(i,l)};if(r=L(n,c,t.sync,t.equals),t.initial){const i=n();c(i,i)}return r}function B(n,o,t,e={}){let r=null,c=null,i=null;function l(){var u;r&&c&&(c.remove(),(u=e.onListenerRemove)==null||u.call(e,r),r=null,c=null)}function f(u){e.once&&e.once&&m(i),t(u)}const P=x(n,(u,G)=>{var s;l(),d(u)&&(r=u,c=h(u,o,f),(s=e.onListenerAdd)==null||s.call(e,u))},{sync:e.sync,initial:!0});return i=q(()=>{P.remove(),l()}),i}function C(n,o){return A(n,y,o)}function A(n,o,t){if(j(t))return Promise.reject(p());const e=n();if(o!=null&&o(e))return Promise.resolve(e);let r=null;function c(){r=m(r)}return new Promise((i,l)=>{r=$([w(t,()=>{c(),l(p())}),a(n,f=>{c(),i(f)},{sync:!1,once:!0},o??v)])})}function v(n){return!0}function y(n){return!!n}const D={sync:!0},E={initial:!0},F={sync:!0,initial:!0};export{D as U,B as a,z as f,E as h,C as j,x as l,F as w};
