import{hf as f,ag as v,gV as l,g_ as m,gW as p,iw as w,aJ as $,ax as x,h1 as j}from"./vendor-8855e047.js";import{s as A,c as E}from"./sphere-a9bb54d9.js";function h(r){return r?{origin:f(r.origin),vector:f(r.vector)}:{origin:v(),vector:v()}}function S(r,o,e=h()){return l(e.origin,r),m(e.vector,o,r),e}function V(r,o,e){return b(r,o,0,1,e)}function b(r,o,e,u,i){const{vector:s,origin:t}=r,n=m(E.get(),o,t),c=p(s,n)/w(s);return $(i,s,x(c,e,u)),j(i,i,r.origin)}new A(()=>h());class k{constructor(o){this.message=o}toString(){return`AssertException: ${this.message}`}}function W(r,o){if(!r)throw o=o||"assert",console.log(new Error(o).stack),new k(o)}function _(r,o,e,u){let i,s=(e[0]-r[0])/o[0],t=(u[0]-r[0])/o[0];s>t&&(i=s,s=t,t=i);let n=(e[1]-r[1])/o[1],c=(u[1]-r[1])/o[1];if(n>c&&(i=n,n=c,c=i),s>c||n>t)return!1;n>s&&(s=n),c<t&&(t=c);let g=(e[2]-r[2])/o[2],a=(u[2]-r[2])/o[2];return g>a&&(i=g,g=a,a=i),!(s>a||g>t)&&(a<t&&(t=a),!(t<0))}export{S as b,_ as c,W as e,V as j,h as v};
