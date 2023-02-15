import{ix as Z,dC as I,iy as D,iz as G,iA as J,hf as A,ag as p,gW as E,g_ as g,h1 as M,aJ as P,aI as f,gX as T,iB as K,hr as W,iC as X,gV as k,G as F,Q as H,h0 as N,gZ as V,iD as U,h7 as tt,iw as et,g$ as it,iE as x,ai as C,it as st}from"./vendor-8855e047.js";import{n as rt}from"./mat3f64-b33e332c.js";import{n as nt}from"./mat4f64-3d813481.js";import{n as ot}from"./quatf64-7fd38d64.js";class ct{constructor(e){this._allocator=e,this._items=[],this._itemsPtr=0,this._grow()}get(){return this._itemsPtr===0&&Z(()=>this._reset()),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const e=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*R);this._items.length=Math.min(e,this._items.length),this._itemsPtr=0}_grow(){for(let e=0;e<Math.max(8,Math.min(this._items.length,R));e++)this._items.push(this._allocator())}}const R=1024;let l=class u{constructor(e,i,s){this._itemByteSize=e,this._itemCreate=i,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(s/this._itemByteSize)}get(){this._itemsPtr===0&&Z(()=>this._reset());const e=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=e;){const i=new ArrayBuffer(this._itemsPerBuffer*this._itemByteSize);for(let s=0;s<this._itemsPerBuffer;++s)this._items.push(this._itemCreate(i,s*this._itemByteSize));this._buffers.push(i)}return this._items[this._itemsPtr++]}_reset(){const e=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>e;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(e=m){return new u(16,D,e)}static createVec3f64(e=m){return new u(24,G,e)}static createVec4f64(e=m){return new u(32,J,e)}static createMat3f64(e=m){return new u(72,rt,e)}static createMat4f64(e=m){return new u(128,nt,e)}static createQuatf64(e=m){return new u(32,ot,e)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this._itemByteSize}}};const m=4*I.KILOBYTES;l.createVec2f64();const h=l.createVec3f64();l.createVec4f64();l.createMat3f64();const at=l.createMat4f64();l.createQuatf64();var _;(function(t){t[t.X=0]="X",t[t.Y=1]="Y",t[t.Z=2]="Z"})(_||(_={}));function ut(t){return t?O(A(t.origin),A(t.direction)):O(p(),p())}function O(t,e){return{origin:t,direction:e}}function Zt(t,e){const i=ht.get();return i.origin=t,i.direction=e,i}function ft(t,e,i){const s=E(t.direction,g(i,e,t.origin));return M(i,t.origin,P(i,t.direction,s)),i}const ht=new ct(()=>ut());function mt(t,e){const i=E(t,e)/(f(t)*f(e));return-T(i)}function b(){return K()}function Y(t,e=b()){return W(e,t)}function _t(t,e){return X(t[0],t[1],t[2],e)}function gt(t){return t}function lt(t){t[0]=t[1]=t[2]=t[3]=0}function $t(t,e){return t[0]=t[1]=t[2]=0,t[3]=e,t}function d(t){return t[3]}function pt(t){return t}function Pt(t,e,i,s){return X(t,e,i,s)}function Mt(t,e,i){return t!==i&&k(i,t),i[3]=t[3]+e,i}function dt(t,e,i){return F.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),t===i?i:Y(t,i)}function w(t,e,i){if(H(e))return!1;const{origin:s,direction:r}=e,n=wt;n[0]=s[0]-t[0],n[1]=s[1]-t[1],n[2]=s[2]-t[2];const o=r[0]*r[0]+r[1]*r[1]+r[2]*r[2];if(o===0)return!1;const c=2*(r[0]*n[0]+r[1]*n[1]+r[2]*n[2]),$=c*c-4*o*(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]-t[3]*t[3]);if($<0)return!1;const z=Math.sqrt($);let a=(-c-z)/(2*o);const y=(-c+z)/(2*o);return(a<0||y<a&&y>0)&&(a=y),!(a<0)&&(i&&(i[0]=s[0]+r[0]*a,i[1]=s[1]+r[1]*a,i[2]=s[2]+r[2]*a),!0)}const wt=p();function yt(t,e){return w(t,e,null)}function Bt(t,e,i){if(w(t,e,i))return i;const s=q(t,e,h.get());return M(i,e.origin,P(h.get(),e.direction,N(e.origin,s)/f(e.direction))),i}function q(t,e,i){const s=h.get(),r=at.get();V(s,e.origin,e.direction);const n=d(t);V(i,s,e.origin),P(i,i,1/f(i)*n);const o=L(t,e.origin),c=mt(e.origin,i);return U(r,c+o,s),tt(i,i,r),i}function St(t,e,i){return w(t,e,i)?i:(ft(e,t,i),v(t,i,i))}function v(t,e,i){const s=g(h.get(),e,t),r=P(h.get(),s,t[3]/f(s));return M(i,r,t)}function bt(t,e){const i=g(h.get(),e,t),s=et(i),r=t[3]*t[3];return Math.sqrt(Math.abs(s-r))}function L(t,e){const i=g(h.get(),e,t),s=f(i),r=d(t),n=r+Math.abs(r-s);return T(r/n)}const B=p();function Q(t,e,i,s){const r=g(B,e,t);switch(i){case _.X:{const n=x(r,B)[2];return C(s,-Math.sin(n),Math.cos(n),0)}case _.Y:{const n=x(r,B),o=n[1],c=n[2],$=Math.sin(o);return C(s,-$*Math.cos(c),-$*Math.sin(c),Math.cos(o))}case _.Z:return it(s,r);default:return}}function j(t,e){const i=g(S,e,t);return f(i)-t[3]}function zt(t,e,i,s){const r=j(t,e),n=Q(t,e,_.Z,S),o=P(S,n,i-r);return M(s,e,o)}function At(t,e){const i=st(t,e),s=d(t);return i<=s*s}const S=p(),Vt=b();Object.freeze(Object.defineProperty({__proto__:null,create:b,copy:Y,fromCenterAndRadius:_t,wrap:gt,clear:lt,fromRadius:$t,getRadius:d,getCenter:pt,fromValues:Pt,elevate:Mt,setExtent:dt,intersectRay:w,intersectsRay:yt,intersectRayClosestSilhouette:Bt,closestPointOnSilhouette:q,closestPoint:St,projectPoint:v,distanceToSilhouette:bt,angleToSilhouette:L,axisAt:Q,altitudeAt:j,setAltitudeAt:zt,containsPoint:At,tmpSphere:Vt},Symbol.toStringTag,{value:"Module"}));export{At as N,b as R,d as T,yt as V,Y as _,h as c,ut as d,pt as k,Zt as p,ct as s};