import{ft as w,gk as j,fS as F,gl as D,fR as H}from"./index.js";class O{constructor(t=9,n){this._compareMinX=R,this._compareMinY=v,this._toBBox=e=>e,this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),n&&(typeof n=="function"?this._toBBox=n:this._initFormat(n)),this.clear()}destroy(){this.clear(),_.prune(),X.prune(),d.prune(),Y.prune()}all(t){this._all(this._data,t)}search(t,n){let e=this._data;const i=this._toBBox;if(M(t,e))for(_.clear();e;){for(let h=0,a=e.children.length;h<a;h++){const r=e.children[h],o=e.leaf?i(r):r;M(t,o)&&(e.leaf?n(r):S(t,o)?this._all(r,n):_.push(r))}e=_.pop()}}collides(t){let n=this._data;const e=this._toBBox;if(!M(t,n))return!1;for(_.clear();n;){for(let i=0,h=n.children.length;i<h;i++){const a=n.children[i],r=n.leaf?e(a):a;if(M(t,r)){if(n.leaf||S(t,r))return!0;_.push(a)}}n=_.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let e=0,i=t.length;e<i;e++)this.insert(t[e]);return this}let n=this._build(t.slice(0,t.length),0,t.length-1,0);if(this._data.children.length)if(this._data.height===n.height)this._splitRoot(this._data,n);else{if(this._data.height<n.height){const e=this._data;this._data=n,n=e}this._insert(n,this._data.height-n.height-1,!0)}else this._data=n;return this}insert(t){return t&&this._insert(t,this._data.height-1),this}clear(){return this._data=new B([]),this}remove(t){var o;if(!t)return this;let n,e=this._data,i=null,h=0,a=!1;const r=this._toBBox(t);for(d.clear(),Y.clear();e||d.length>0;){if(e||(e=j(d.pop()),i=d.data[d.length-1],h=(o=Y.pop())!=null?o:0,a=!0),e.leaf&&(n=F(e.children,t,e.children.length,e.indexHint),n!==-1))return e.children.splice(n,1),d.push(e),this._condense(d),this;a||e.leaf||!S(e,r)?i?(h++,e=i.children[h],a=!1):e=null:(d.push(e),Y.push(h),h=0,i=e,e=e.children[0])}return this}toJSON(){return this._data}fromJSON(t){return this._data=t,this}_all(t,n){var i;let e=t;for(X.clear();e;){if(e.leaf===!0)for(const h of e.children)n(h);else X.pushArray(e.children);e=(i=X.pop())!=null?i:null}}_build(t,n,e,i){const h=e-n+1;let a=this._maxEntries;if(h<=a){const l=new B(t.slice(n,e+1));return x(l,this._toBBox),l}i||(i=Math.ceil(Math.log(h)/Math.log(a)),a=Math.ceil(h/a**(i-1)));const r=new E([]);r.height=i;const o=Math.ceil(h/a),c=o*Math.ceil(Math.sqrt(a));$(t,n,e,c,this._compareMinX);for(let l=n;l<=e;l+=c){const m=Math.min(l+c-1,e);$(t,l,m,o,this._compareMinY);for(let u=l;u<=m;u+=o){const A=Math.min(u+o-1,m);r.children.push(this._build(t,u,A,i-1))}}return x(r,this._toBBox),r}_chooseSubtree(t,n,e,i){for(;i.push(n),n.leaf!==!0&&i.length-1!==e;){let h,a=1/0,r=1/0;for(let o=0,c=n.children.length;o<c;o++){const l=n.children[o],m=b(l),u=N(t,l)-m;u<r?(r=u,a=m<a?m:a,h=l):u===r&&m<a&&(a=m,h=l)}n=h||n.children[0]}return n}_insert(t,n,e){const i=this._toBBox,h=e?t:i(t);d.clear();const a=this._chooseSubtree(h,this._data,n,d);for(a.children.push(t),p(a,h);n>=0&&d.data[n].children.length>this._maxEntries;)this._split(d,n),n--;this._adjustParentBBoxes(h,d,n)}_split(t,n){const e=t.data[n],i=e.children.length,h=this._minEntries;this._chooseSplitAxis(e,h,i);const a=this._chooseSplitIndex(e,h,i);if(!a)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const r=e.children.splice(a,e.children.length-a),o=e.leaf?new B(r):new E(r);o.height=e.height,x(e,this._toBBox),x(o,this._toBBox),n?t.data[n-1].children.push(o):this._splitRoot(e,o)}_splitRoot(t,n){this._data=new E([t,n]),this._data.height=t.height+1,x(this._data,this._toBBox)}_chooseSplitIndex(t,n,e){let i,h,a;i=h=1/0;for(let r=n;r<=e-n;r++){const o=f(t,0,r,this._toBBox),c=f(t,r,e,this._toBBox),l=P(o,c),m=b(o)+b(c);l<i?(i=l,a=r,h=m<h?m:h):l===i&&m<h&&(h=m,a=r)}return a}_chooseSplitAxis(t,n,e){const i=t.leaf?this._compareMinX:R,h=t.leaf?this._compareMinY:v;this._allDistMargin(t,n,e,i)<this._allDistMargin(t,n,e,h)&&t.children.sort(i)}_allDistMargin(t,n,e,i){t.children.sort(i);const h=this._toBBox,a=f(t,0,n,h),r=f(t,e-n,e,h);let o=g(a)+g(r);for(let c=n;c<e-n;c++){const l=t.children[c];p(a,t.leaf?h(l):l),o+=g(a)}for(let c=e-n-1;c>=n;c--){const l=t.children[c];p(r,t.leaf?h(l):l),o+=g(r)}return o}_adjustParentBBoxes(t,n,e){for(let i=e;i>=0;i--)p(n.data[i],t)}_condense(t){for(let n=t.length-1;n>=0;n--){const e=t.data[n];if(e.children.length===0)if(n>0){const i=t.data[n-1],h=i.children;h.splice(F(h,e,h.length,i.indexHint),1)}else this.clear();else x(e,this._toBBox)}}_initFormat(t){const n=["return a"," - b",";"];this._compareMinX=new Function("a","b",n.join(t[0])),this._compareMinY=new Function("a","b",n.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function x(s,t){f(s,0,s.children.length,t,s)}function f(s,t,n,e,i){i||(i=new B([])),i.minX=1/0,i.minY=1/0,i.maxX=-1/0,i.maxY=-1/0;for(let h,a=t;a<n;a++)h=s.children[a],p(i,s.leaf?e(h):h);return i}function p(s,t){s.minX=Math.min(s.minX,t.minX),s.minY=Math.min(s.minY,t.minY),s.maxX=Math.max(s.maxX,t.maxX),s.maxY=Math.max(s.maxY,t.maxY)}function R(s,t){return s.minX-t.minX}function v(s,t){return s.minY-t.minY}function b(s){return(s.maxX-s.minX)*(s.maxY-s.minY)}function g(s){return s.maxX-s.minX+(s.maxY-s.minY)}function N(s,t){return(Math.max(t.maxX,s.maxX)-Math.min(t.minX,s.minX))*(Math.max(t.maxY,s.maxY)-Math.min(t.minY,s.minY))}function P(s,t){const n=Math.max(s.minX,t.minX),e=Math.max(s.minY,t.minY),i=Math.min(s.maxX,t.maxX),h=Math.min(s.maxY,t.maxY);return Math.max(0,i-n)*Math.max(0,h-e)}function S(s,t){return s.minX<=t.minX&&s.minY<=t.minY&&t.maxX<=s.maxX&&t.maxY<=s.maxY}function M(s,t){return t.minX<=s.maxX&&t.minY<=s.maxY&&t.maxX>=s.minX&&t.maxY>=s.minY}function $(s,t,n,e,i){const h=[t,n];for(;h.length;){const a=j(h.pop()),r=j(h.pop());if(a-r<=e)continue;const o=r+Math.ceil((a-r)/e/2)*e;D(s,o,r,a,i),h.push(r,o,o,a)}}const _=new w,X=new w,d=new w,Y=new w({deallocator:void 0});class I{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class y extends I{constructor(){super(...arguments),this.height=1,this.indexHint=new H}}class B extends y{constructor(t){super(),this.children=t,this.leaf=!0}}class E extends y{constructor(t){super(),this.children=t,this.leaf=!1}}export{O as h};
