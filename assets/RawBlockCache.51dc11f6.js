import{v as W,a$ as J}from"./index.2901469c.js";import{J as L,C as P,o as q}from"./rasterProjectionHelper.283d2ad4.js";class F{constructor(n=15e3,t=5e3){this._timer=null,this._cachedBlocks=new Map,this._size=-1,this._duration=n,this._interval=Math.min(n,t)}decreaseRefCount(n,t){const e=n+"/"+t,r=this._cachedBlocks;if(r.has(e)){const o=r.get(e);return o.refCount--,o.refCount<=0&&(r.delete(e),o.controller&&o.controller.abort()),o.refCount}return 0}getBlock(n,t){const e=n+"/"+t,r=this._cachedBlocks;if(r.has(e)){const o=r.get(e);return o.ts=Date.now(),o.refCount++,r.delete(e),r.set(e,o),o.block}return null}putBlock(n,t,e,r){const o=this._cachedBlocks,s=n+"/"+t;if(o.has(s)){const i=o.get(s);i.ts=Date.now(),i.refCount++}else o.set(s,{block:e,ts:Date.now(),refCount:1,controller:r});this._trim(),this._updateTimer()}deleteBlock(n,t){const e=this._cachedBlocks,r=n+"/"+t;e.has(r)&&e.delete(r)}updateMaxSize(n){this._size=n,this._trim()}empty(){this._cachedBlocks.clear(),this._clearTimer()}getCurrentSize(){return this._cachedBlocks.size}_updateTimer(){if(this._timer!=null)return;const n=this._cachedBlocks;this._timer=setInterval(()=>{const t=Array.from(n),e=Date.now();for(let r=0;r<t.length&&t[r][1].ts<=e-this._duration;r++)n.delete(t[r][0]);n.size===0&&this._clearTimer()},this._interval)}_trim(){const n=this._cachedBlocks;if(this._size===-1||this._size>=n.size)return;const t=Array.from(n);for(let e=0;e<t.length-this._size;e++)n.delete(t[e][0])}_clearTimer(){this._timer!=null&&(clearInterval(this._timer),this._timer=null)}}const f=new Map,d=new F;function O(l,n){return n==null?l:`${l}?sliceId=${n}`}function Q(l,n){const t={extent:null,rasterInfo:n,cache:new Map},e=f.get(l);return e?(e.push(t),e.length-1):(f.set(l,[t]),0)}function U(l,n){const t=f.get(l);t&&(t[n]=null,t.some(e=>e!=null)||f.delete(l))}function V(l,n,t){var s,i;const e=f.get(l);if(!e)return n==null?d.decreaseRefCount(l,t):0;if(n==null||e[n]==null)return d.decreaseRefCount(l,t);const r=(s=e[n])==null?void 0:s.cache,o=r==null?void 0:r.get(t);if(r&&o){if(o.refCount--,o.refCount===0){r.delete(t);for(let c=0;c<e.length;c++)(i=e[c])==null||i.cache.delete(t);o.controller&&o.controller.abort()}return o.refCount}return 0}function X(l,n,t){var o,s,i;const e=f.get(l);if(!e)return n==null?d.getBlock(l,t):null;if(n==null||e[n]==null){for(let c=0;c<e.length;c++){const a=(o=e[c])==null?void 0:o.cache.get(t);if(a)return a.refCount++,a.block}return d.getBlock(l,t)}const r=(s=e[n])==null?void 0:s.cache.get(t);if(r)return r.refCount++,r.block;for(let c=0;c<e.length;c++){if(c===n||!e[c])continue;const a=(i=e[c])==null?void 0:i.cache,m=a==null?void 0:a.get(t);if(a&&m)return m.refCount++,a.set(t,m),m.block}return null}function Y(l,n,t,e,r=null){var i;const o=f.get(l);if(!o)return void(n==null&&d.putBlock(l,t,e,r));if(n==null||o[n]==null)return void d.putBlock(l,t,e,r);const s={refCount:1,block:e,isResolved:!1,isRejected:!1,controller:r};e.then(()=>s.isResolved=!0).catch(()=>s.isRejected=!0),(i=o[n])==null||i.cache.set(t,s)}function Z(l,n,t){var r;const e=f.get(l);e?n!=null&&e[n]!=null?(r=e[n])==null||r.cache.delete(t):d.deleteBlock(l,t):n==null&&d.deleteBlock(l,t)}function G(l,n){var e;const t=f.get(l);return t&&(e=t[n])!=null?e:null}function ee(l,n,t,e,r,o,s=null){const i=G(l,n);if(!i)return;const c=i.extent,{cache:a,rasterInfo:m}=i;if(c&&c.xmin===t.xmin&&c.xmax===t.xmax&&c.ymin===t.ymin&&c.ymax===t.ymax)return;e=e!=null?e:0;const M=t.clone().normalize(),{spatialReference:R,transform:v}=m,w=new Set;for(let g=0;g<M.length;g++){const h=M[g];if(h.xmax-h.xmin<=e||h.ymax-h.ymin<=e)continue;let u=L(h,R,s);W(v)&&(u=v.inverseTransform(u));const I=new J({x:e,y:e,spatialReference:h.spatialReference});if(r==null&&!(r=P(I,R,h,s)))return;const{pyramidLevel:p,pyramidResolution:_,excessiveReading:T}=q(r,m,o||"closest");if(T)return;const{storageInfo:x}=m,{origin:b}=x,k={x:Math.max(0,Math.floor((u.xmin-b.x)/_.x)),y:Math.max(0,Math.floor((b.y-u.ymax)/_.y))},j=Math.ceil((u.xmax-u.xmin)/_.x-.1),D=Math.ceil((u.ymax-u.ymin)/_.y-.1),z=p>0?x.pyramidBlockWidth:x.blockWidth,$=p>0?x.pyramidBlockHeight:x.blockHeight,y=1,H=Math.max(0,Math.floor(k.x/z)-y),S=Math.max(0,Math.floor(k.y/$)-y),A=Math.floor((k.x+j-1)/z)+y,E=Math.floor((k.y+D-1)/$)+y;for(let B=S;B<=E;B++)for(let C=H;C<=A;C++)w.add(`${p}/${B}/${C}`)}a.forEach((g,h)=>{if(!w.has(h)){const u=a.get(h);(u==null||u.isResolved||u.isRejected)&&a.delete(h)}}),i.extent={xmin:t.xmin,ymin:t.ymin,xmax:t.xmax,ymax:t.ymax}}export{O as a,Z as d,U as f,ee as g,Y as h,V as m,Q as u,X as x};
