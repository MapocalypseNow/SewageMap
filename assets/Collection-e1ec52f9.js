import{j as i,v as R,e as A,y as D,n as x}from"./cast-4943406f.js";import{e as B,t as y,b as L,S as w}from"./ensureType-9613b5f0.js";import{n as I}from"./Evented-28d49a6f.js";import{y as S}from"./string-cc430a78.js";import{x as V}from"./typedArrayUtil-bd69bba0.js";import{e as q}from"./SimpleObservable-b403cd38.js";var n;(function(e){e[e.ADD=1]="ADD",e[e.REMOVE=2]="REMOVE",e[e.MOVE=4]="MOVE"})(n||(n={}));function N(e){return(t,s)=>{t[s]=e}}var b;class P{constructor(){this.target=null,this.cancellable=!1,this.defaultPrevented=!1,this.item=void 0,this.type=void 0}preventDefault(){this.cancellable&&(this.defaultPrevented=!0)}reset(t){this.defaultPrevented=!1,this.item=t}}const u=new B(P,void 0,e=>{e.item=null,e.target=null,e.defaultPrevented=!1,e.cancellable=!1}),j=()=>{};function C(e){return e?e instanceof E?e.toArray():e.length?Array.prototype.slice.apply(e):[]:[]}function O(e){if(e&&e.length)return e[0]}function T(e,t,s,r){const l=Math.min(e.length-s,t.length-r);let f=0;for(;f<l&&e[s+f]===t[r+f];)f++;return f}function $(e,t,s,r){t&&t.forEach((l,f,_)=>{e.push(l),$(e,s.call(r,l,f,_),s,r)})}const d=new Set,v=new Set,p=new Set,M=new Map;let z=0,E=b=class extends I.EventedAccessor{constructor(e){super(e),this._chgListeners=[],this._notifications=null,this._timer=null,this._observable=new q,this.length=0,this._items=[],Object.defineProperty(this,"uid",{value:z++})}static isCollection(e){return e!=null&&e instanceof b}normalizeCtorArgs(e){return e?Array.isArray(e)||e instanceof b?{items:e}:e:{}}destroy(){this.removeAll()}*[Symbol.iterator](){yield*this.items}get items(){return i(this._observable),this._items}set items(e){this._emitBeforeChanges(n.ADD)||(this._splice(0,this.length,C(e)),this._emitAfterChanges(n.ADD))}hasEventListener(e){return e==="change"?this._chgListeners.length>0:this._emitter.hasEventListener(e)}on(e,t){if(e==="change"){const s=this._chgListeners,r={removed:!1,callback:t};return s.push(r),this._notifications&&this._notifications.push({listeners:s.slice(),items:this._items.slice(),changes:[]}),{remove(){this.remove=j,r.removed=!0,s.splice(s.indexOf(r),1)}}}return this._emitter.on(e,t)}once(e,t){const s=this.on(e,t);return{remove(){s.remove()}}}add(e,t){if(i(this._observable),this._emitBeforeChanges(n.ADD))return this;const s=this.getNextIndex(t??null);return this._splice(s,0,[e]),this._emitAfterChanges(n.ADD),this}addMany(e,t=this._items.length){if(i(this._observable),!e||!e.length)return this;if(this._emitBeforeChanges(n.ADD))return this;const s=this.getNextIndex(t);return this._splice(s,0,C(e)),this._emitAfterChanges(n.ADD),this}at(e){if(i(this._observable),(e=Math.trunc(e)||0)<0&&(e+=this.length),!(e<0||e>=this.length))return this._items[e]}removeAll(){if(i(this._observable),!this.length||this._emitBeforeChanges(n.REMOVE))return[];const e=this._splice(0,this.length)||[];return this._emitAfterChanges(n.REMOVE),e}clone(){return i(this._observable),this._createNewInstance({items:this._items.map(S)})}concat(...e){i(this._observable);const t=e.map(C);return this._createNewInstance({items:this._items.concat(...t)})}drain(e,t){if(i(this._observable),!this.length||this._emitBeforeChanges(n.REMOVE))return;const s=V(this._splice(0,this.length)),r=s.length;for(let l=0;l<r;l++)e.call(t,s[l],l,s);this._emitAfterChanges(n.REMOVE)}every(e,t){return i(this._observable),this._items.every(e,t)}filter(e,t){let s;return i(this._observable),s=arguments.length===2?this._items.filter(e,t):this._items.filter(e),this._createNewInstance({items:s})}find(e,t){return i(this._observable),this._items.find(e,t)}findIndex(e,t){return i(this._observable),this._items.findIndex(e,t)}flatten(e,t){i(this._observable);const s=[];return $(s,this,e,t),new b(s)}forEach(e,t){return i(this._observable),this._items.forEach(e,t)}getItemAt(e){return i(this._observable),this._items[e]}getNextIndex(e){i(this._observable);const t=this.length;return(e=e??t)<0?e=0:e>t&&(e=t),e}includes(e,t=0){return i(this._observable),this._items.includes(e,t)}indexOf(e,t=0){return i(this._observable),this._items.indexOf(e,t)}join(e=","){return i(this._observable),this._items.join(e)}lastIndexOf(e,t=this.length-1){return i(this._observable),this._items.lastIndexOf(e,t)}map(e,t){i(this._observable);const s=this._items.map(e,t);return new b({items:s})}reorder(e,t=this.length-1){i(this._observable);const s=this.indexOf(e);if(s!==-1){if(t<0?t=0:t>=this.length&&(t=this.length-1),s!==t){if(this._emitBeforeChanges(n.MOVE))return e;this._splice(s,1),this._splice(t,0,[e]),this._emitAfterChanges(n.MOVE)}return e}}pop(){if(i(this._observable),!this.length||this._emitBeforeChanges(n.REMOVE))return;const e=O(this._splice(this.length-1,1));return this._emitAfterChanges(n.REMOVE),e}push(...e){return i(this._observable),this._emitBeforeChanges(n.ADD)||(this._splice(this.length,0,e),this._emitAfterChanges(n.ADD)),this.length}reduce(e,t){i(this._observable);const s=this._items;return arguments.length===2?s.reduce(e,t):s.reduce(e)}reduceRight(e,t){i(this._observable);const s=this._items;return arguments.length===2?s.reduceRight(e,t):s.reduceRight(e)}remove(e){return i(this._observable),this.removeAt(this.indexOf(e))}removeAt(e){if(i(this._observable),e<0||e>=this.length||this._emitBeforeChanges(n.REMOVE))return;const t=O(this._splice(e,1));return this._emitAfterChanges(n.REMOVE),t}removeMany(e){if(i(this._observable),!e||!e.length||this._emitBeforeChanges(n.REMOVE))return[];const t=e instanceof b?e.toArray():e,s=this._items,r=[],l=t.length;for(let f=0;f<l;f++){const _=t[f],a=s.indexOf(_);if(a>-1){const o=1+T(t,s,f+1,a+1),c=this._splice(a,o);c&&c.length>0&&r.push.apply(r,c),f+=o-1}}return this._emitAfterChanges(n.REMOVE),r}reverse(){if(i(this._observable),this._emitBeforeChanges(n.MOVE))return this;const e=this._splice(0,this.length);return e&&(e.reverse(),this._splice(0,0,e)),this._emitAfterChanges(n.MOVE),this}shift(){if(i(this._observable),!this.length||this._emitBeforeChanges(n.REMOVE))return;const e=O(this._splice(0,1));return this._emitAfterChanges(n.REMOVE),e}slice(e=0,t=this.length){return i(this._observable),this._createNewInstance({items:this._items.slice(e,t)})}some(e,t){return i(this._observable),this._items.some(e,t)}sort(e){if(i(this._observable),!this.length||this._emitBeforeChanges(n.MOVE))return this;const t=V(this._splice(0,this.length));return arguments.length?t.sort(e):t.sort(),this._splice(0,0,t),this._emitAfterChanges(n.MOVE),this}splice(e,t,...s){i(this._observable);const r=(t?n.REMOVE:0)|(s.length?n.ADD:0);if(this._emitBeforeChanges(r))return[];const l=this._splice(e,t,s)||[];return this._emitAfterChanges(r),l}toArray(){return i(this._observable),this._items.slice()}toJSON(){return i(this._observable),this.toArray()}toLocaleString(){return i(this._observable),this._items.toLocaleString()}toString(){return i(this._observable),this._items.toString()}unshift(...e){return i(this._observable),!e.length||this._emitBeforeChanges(n.ADD)||(this._splice(0,0,e),this._emitAfterChanges(n.ADD)),this.length}_createNewInstance(e){return new this.constructor(e)}_splice(e,t,s){const r=this._items,l=this.itemType;let f,_;if(!this._notifications&&this.hasEventListener("change")&&(this._notifications=[{listeners:this._chgListeners.slice(),items:this._items.slice(),changes:[]}],this._timer&&this._timer.remove(),this._timer=R(()=>this._dispatchChange())),t){if(_=r.splice(e,t),this.hasEventListener("before-remove")){const a=u.acquire();a.target=this,a.cancellable=!0;for(let o=0,c=_.length;o<c;o++)f=_[o],a.reset(f),this.emit("before-remove",a),a.defaultPrevented&&(_.splice(o,1),r.splice(e,0,f),e+=1,o-=1,c-=1);u.release(a)}if(this.length=this._items.length,this.hasEventListener("after-remove")){const a=u.acquire();a.target=this,a.cancellable=!1;const o=_.length;for(let c=0;c<o;c++)a.reset(_[c]),this.emit("after-remove",a);u.release(a)}}if(s&&s.length){if(l){const h=[];for(const m of s){const g=l.ensureType(m);g==null&&m!=null||h.push(g)}s=h}const a=this.hasEventListener("before-add"),o=this.hasEventListener("after-add"),c=e===this.length;if(a||o){const h=u.acquire();h.target=this,h.cancellable=!0;const m=u.acquire();m.target=this,m.cancellable=!1;for(const g of s)a?(h.reset(g),this.emit("before-add",h),h.defaultPrevented||(c?r.push(g):r.splice(e++,0,g),this._set("length",r.length),o&&(m.reset(g),this.emit("after-add",m)))):(c?r.push(g):r.splice(e++,0,g),this._set("length",r.length),m.reset(g),this.emit("after-add",m));u.release(m),u.release(h)}else{if(c)for(const h of s)r.push(h);else r.splice(e,0,...s);this._set("length",r.length)}}return(s&&s.length||_&&_.length)&&this._notifyChangeEvent(s,_),_}_emitBeforeChanges(e){let t=!1;if(this.hasEventListener("before-changes")){const s=u.acquire();s.target=this,s.cancellable=!0,s.type=e,this.emit("before-changes",s),t=s.defaultPrevented,u.release(s)}return t}_emitAfterChanges(e){if(this.hasEventListener("after-changes")){const t=u.acquire();t.target=this,t.cancellable=!1,t.type=e,this.emit("after-changes",t),u.release(t)}this._observable.notify()}_notifyChangeEvent(e,t){this.hasEventListener("change")&&this._notifications&&this._notifications[this._notifications.length-1].changes.push({added:e,removed:t})}_dispatchChange(){if(this._timer&&(this._timer.remove(),this._timer=null),!this._notifications)return;const e=this._notifications;this._notifications=null;for(const t of e){const s=t.changes;d.clear(),v.clear(),p.clear();for(const{added:o,removed:c}of s){if(o)if(p.size===0&&v.size===0)for(const h of o)d.add(h);else for(const h of o)v.has(h)?(p.add(h),v.delete(h)):p.has(h)||d.add(h);if(c)if(p.size===0&&d.size===0)for(const h of c)v.add(h);else for(const h of c)d.has(h)?d.delete(h):(p.delete(h),v.add(h))}const r=y.acquire();d.forEach(o=>{r.push(o)});const l=y.acquire();v.forEach(o=>{l.push(o)});const f=this._items,_=t.items,a=y.acquire();if(p.forEach(o=>{_.indexOf(o)!==f.indexOf(o)&&a.push(o)}),t.listeners&&(r.length||l.length||a.length)){const o={target:this,added:r,removed:l,moved:a},c=t.listeners.length;for(let h=0;h<c;h++){const m=t.listeners[h];m.removed||m.callback.call(this,o)}}y.release(r),y.release(l),y.release(a)}d.clear(),v.clear(),p.clear()}};E.ofType=e=>{if(!e)return b;if(M.has(e))return M.get(e);let t=null;if(typeof e=="function")t=e.prototype.declaredClass;else if(e.base)t=e.base.prototype.declaredClass;else for(const r in e.typeMap){const l=e.typeMap[r].prototype.declaredClass;t?t+=` | ${l}`:t=l}let s=class extends b{};return A([N({Type:e,ensureType:typeof e=="function"?L(e):w(e)})],s.prototype,"itemType",void 0),s=A([x(`esri.core.Collection<${t}>`)],s),M.set(e,s),s},A([D()],E.prototype,"length",void 0),A([D()],E.prototype,"items",null),E=b=A([x("esri.core.Collection")],E);const Q=E;export{Q as j,N as n};
