import{o as Lt}from"./_commonjsHelpers.js";import{e as Bt,a as Ot}from"./ProgramTemplate.js";import{b as F,n as Ut}from"./WGLContainer.js";import{aJ as Ve,i as je,aK as Nt,U as xt,aL as Vt,aM as Gt,aN as qt,s as j,ai as L,k as me,O as Mt,aO as Ht,ah as Wt,aj as Ke,aP as jt,aQ as pe,r as Y,av as ie,aR as Zt,ae as et,aS as Yt,aG as k,aT as H,aU as Xt,aV as Qt,aW as Jt,az as Kt,f as M,y as D,A as ne,G as ae,aX as tt,aY as ei,am as zt,ao as ti,aZ as ii,a_ as Tt,a$ as Pe,b0 as Fe,b1 as St,b2 as Se,b3 as ni,b4 as ai,b5 as si,b6 as ri,b7 as oi,b8 as _e,b9 as li,ba as Ge,bb as hi,bc as ui,aC as fe,bd as it}from"./index.js";import{p as ci,i as ge,r as nt,t as at,u as di,a as mi,o as pi,e as _i,b as fi,c as gi}from"./ExpandedCIM.js";import{r as vi,e as yi}from"./rasterizingUtils.js";import{e as I,z as st,y as rt,j as wi,U as bi,V as xi}from"./definitions.js";import{u as Mi,_ as ve,p as zi,l as Ti,n as ot,r as Si,I as Di,f as ye,s as lt,d as ht,i as $i,o as Ci,m as Ii,T as Pi}from"./color.js";import{t as P}from"./Rect.js";import{P as De,G as Ze,L as qe,R as Q,M as Fi,D as Ri}from"./enums.js";import{E as Ye}from"./Texture.js";import{o as Ai}from"./floatRGBA.js";import{e as ut}from"./GeometryUtils2.js";import{c as Ei}from"./imageutils2.js";import{d as V}from"./enums2.js";import{e as ki}from"./Matcher.js";import{s as Li}from"./CircularArray.js";import{T as Bi}from"./webgl-debug.js";import{t as Oi}from"./ComputedAttributeStorage.js";var ct,He={};ct=function(){return function(n){var e={};function t(i){if(e[i])return e[i].exports;var a=e[i]={exports:{},id:i,loaded:!1};return n[i].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}return t.m=n,t.c=e,t.p="",t(0)}([function(n,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.isNotPNG=l,e.isNotAPNG=h,e.default=c;var i=s(t(1)),a=t(2);function s(f){return f&&f.__esModule?f:{default:f}}var r=new Error("Not a PNG"),o=new Error("Not an animated PNG");function l(f){return f===r}function h(f){return f===o}var u=new Uint8Array([137,80,78,71,13,10,26,10]);function c(f){var g=new Uint8Array(f);if(Array.prototype.some.call(u,function(R,$){return R!==g[$]}))return r;var w=!1;if(d(g,function(R){return!(w=R==="acTL")}),!w)return o;var b=[],z=[],C=null,x=null,q=0,N=new a.APNG;if(d(g,function(R,$,T,se){var A=new DataView($.buffer);switch(R){case"IHDR":C=$.subarray(T+8,T+8+se),N.width=A.getUint32(T+8),N.height=A.getUint32(T+12);break;case"acTL":N.numPlays=A.getUint32(T+8+4);break;case"fcTL":x&&(N.frames.push(x),q++),(x=new a.Frame).width=A.getUint32(T+8+4),x.height=A.getUint32(T+8+8),x.left=A.getUint32(T+8+12),x.top=A.getUint32(T+8+16);var kt=A.getUint16(T+8+20),Ae=A.getUint16(T+8+22);Ae===0&&(Ae=100),x.delay=1e3*kt/Ae,x.delay<=10&&(x.delay=100),N.playTime+=x.delay,x.disposeOp=A.getUint8(T+8+24),x.blendOp=A.getUint8(T+8+25),x.dataParts=[],q===0&&x.disposeOp===2&&(x.disposeOp=1);break;case"fdAT":x&&x.dataParts.push($.subarray(T+8+4,T+8+se));break;case"IDAT":x&&x.dataParts.push($.subarray(T+8,T+8+se));break;case"IEND":z.push(_($,T,12+se));break;default:b.push(_($,T,12+se))}}),x&&N.frames.push(x),N.frames.length==0)return o;var At=new Blob(b),Et=new Blob(z);return N.frames.forEach(function(R){var $=[];$.push(u),C.set(y(R.width),0),C.set(y(R.height),4),$.push(v("IHDR",C)),$.push(At),R.dataParts.forEach(function(T){return $.push(v("IDAT",T))}),$.push(Et),R.imageData=new Blob($,{type:"image/png"}),delete R.dataParts,$=null}),N}function d(f,g){var w=new DataView(f.buffer),b=8,z=void 0,C=void 0,x=void 0;do C=w.getUint32(b),x=g(z=m(f,b+4,4),f,b,C),b+=12+C;while(x!==!1&&z!="IEND"&&b<f.length)}function m(f,g,w){var b=Array.prototype.slice.call(f.subarray(g,g+w));return String.fromCharCode.apply(String,b)}function p(f){for(var g=new Uint8Array(f.length),w=0;w<f.length;w++)g[w]=f.charCodeAt(w);return g}function _(f,g,w){var b=new Uint8Array(w);return b.set(f.subarray(g,g+w)),b}var v=function(f,g){var w=f.length+g.length,b=new Uint8Array(w+8),z=new DataView(b.buffer);z.setUint32(0,g.length),b.set(p(f),4),b.set(g,8);var C=(0,i.default)(b,4,w);return z.setUint32(w+4,C),b},y=function(f){return new Uint8Array([f>>>24&255,f>>>16&255,f>>>8&255,255&f])}},function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(r){for(var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,l=-1,h=o,u=o+(arguments.length>2&&arguments[2]!==void 0?arguments[2]:r.length-o);h<u;h++)l=l>>>8^t[255&(l^r[h])];return-1^l};for(var t=new Uint32Array(256),i=0;i<256;i++){for(var a=i,s=0;s<8;s++)a=(1&a)!=0?3988292384^a>>>1:a>>>1;t[i]=a}},function(n,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.Frame=e.APNG=void 0;var i=function(){function o(l,h){for(var u=0;u<h.length;u++){var c=h[u];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(l,c.key,c)}}return function(l,h,u){return h&&o(l.prototype,h),u&&o(l,u),l}}(),a=s(t(3));function s(o){return o&&o.__esModule?o:{default:o}}function r(o,l){if(!(o instanceof l))throw new TypeError("Cannot call a class as a function")}e.APNG=function(){function o(){r(this,o),this.width=0,this.height=0,this.numPlays=0,this.playTime=0,this.frames=[]}return i(o,[{key:"createImages",value:function(){return Promise.all(this.frames.map(function(l){return l.createImage()}))}},{key:"getPlayer",value:function(l){var h=this,u=arguments.length>1&&arguments[1]!==void 0&&arguments[1];return this.createImages().then(function(){return new a.default(h,l,u)})}}]),o}(),e.Frame=function(){function o(){r(this,o),this.left=0,this.top=0,this.width=0,this.height=0,this.delay=0,this.disposeOp=0,this.blendOp=0,this.imageData=null,this.imageElement=null}return i(o,[{key:"createImage",value:function(){var l=this;return this.imageElement?Promise.resolve():new Promise(function(h,u){var c=URL.createObjectURL(l.imageData);l.imageElement=document.createElement("img"),l.imageElement.onload=function(){URL.revokeObjectURL(c),h()},l.imageElement.onerror=function(){URL.revokeObjectURL(c),l.imageElement=null,u(new Error("Image creation error"))},l.imageElement.src=c})}}]),o}()},function(n,e,t){Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function h(u,c){for(var d=0;d<c.length;d++){var m=c[d];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(u,m.key,m)}}return function(u,c,d){return c&&h(u.prototype,c),d&&h(u,d),u}}();function a(h){return h&&h.__esModule?h:{default:h}}function s(h,u){if(!(h instanceof u))throw new TypeError("Cannot call a class as a function")}function r(h,u){if(!h)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!u||typeof u!="object"&&typeof u!="function"?h:u}function o(h,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof u);h.prototype=Object.create(u&&u.prototype,{constructor:{value:h,enumerable:!1,writable:!0,configurable:!0}}),u&&(Object.setPrototypeOf?Object.setPrototypeOf(h,u):h.__proto__=u)}var l=function(h){function u(c,d,m){s(this,u);var p=r(this,(u.__proto__||Object.getPrototypeOf(u)).call(this));return p.playbackRate=1,p._currentFrameNumber=0,p._ended=!1,p._paused=!0,p._numPlays=0,p._apng=c,p.context=d,p.stop(),m&&p.play(),p}return o(u,h),i(u,[{key:"renderNextFrame",value:function(){this._currentFrameNumber=(this._currentFrameNumber+1)%this._apng.frames.length,this._currentFrameNumber===this._apng.frames.length-1&&(this._numPlays++,this._apng.numPlays!==0&&this._numPlays>=this._apng.numPlays&&(this._ended=!0,this._paused=!0)),this._prevFrame&&this._prevFrame.disposeOp==1?this.context.clearRect(this._prevFrame.left,this._prevFrame.top,this._prevFrame.width,this._prevFrame.height):this._prevFrame&&this._prevFrame.disposeOp==2&&this.context.putImageData(this._prevFrameData,this._prevFrame.left,this._prevFrame.top);var c=this.currentFrame;this._prevFrame=c,this._prevFrameData=null,c.disposeOp==2&&(this._prevFrameData=this.context.getImageData(c.left,c.top,c.width,c.height)),c.blendOp==0&&this.context.clearRect(c.left,c.top,c.width,c.height),this.context.drawImage(c.imageElement,c.left,c.top),this.emit("frame",this._currentFrameNumber),this._ended&&this.emit("end")}},{key:"play",value:function(){var c=this;this.emit("play"),this._ended&&this.stop(),this._paused=!1;var d=performance.now()+this.currentFrame.delay/this.playbackRate,m=function p(_){if(!c._ended&&!c._paused){if(_>=d){for(;_-d>=c._apng.playTime/c.playbackRate;)d+=c._apng.playTime/c.playbackRate,c._numPlays++;do c.renderNextFrame(),d+=c.currentFrame.delay/c.playbackRate;while(!c._ended&&_>d)}requestAnimationFrame(p)}};requestAnimationFrame(m)}},{key:"pause",value:function(){this._paused||(this.emit("pause"),this._paused=!0)}},{key:"stop",value:function(){this.emit("stop"),this._numPlays=0,this._ended=!1,this._paused=!0,this._currentFrameNumber=-1,this.context.clearRect(0,0,this._apng.width,this._apng.height),this.renderNextFrame()}},{key:"currentFrameNumber",get:function(){return this._currentFrameNumber}},{key:"currentFrame",get:function(){return this._apng.frames[this._currentFrameNumber]}},{key:"paused",get:function(){return this._paused}},{key:"ended",get:function(){return this._ended}}]),u}(a(t(4)).default);e.default=l},function(n,e){function t(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function i(o){return typeof o=="function"}function a(o){return typeof o=="number"}function s(o){return typeof o=="object"&&o!==null}function r(o){return o===void 0}n.exports=t,t.EventEmitter=t,t.prototype._events=void 0,t.prototype._maxListeners=void 0,t.defaultMaxListeners=10,t.prototype.setMaxListeners=function(o){if(!a(o)||o<0||isNaN(o))throw TypeError("n must be a positive number");return this._maxListeners=o,this},t.prototype.emit=function(o){var l,h,u,c,d,m;if(this._events||(this._events={}),o==="error"&&(!this._events.error||s(this._events.error)&&!this._events.error.length)){if((l=arguments[1])instanceof Error)throw l;var p=new Error('Uncaught, unspecified "error" event. ('+l+")");throw p.context=l,p}if(r(h=this._events[o]))return!1;if(i(h))switch(arguments.length){case 1:h.call(this);break;case 2:h.call(this,arguments[1]);break;case 3:h.call(this,arguments[1],arguments[2]);break;default:c=Array.prototype.slice.call(arguments,1),h.apply(this,c)}else if(s(h))for(c=Array.prototype.slice.call(arguments,1),u=(m=h.slice()).length,d=0;d<u;d++)m[d].apply(this,c);return!0},t.prototype.addListener=function(o,l){var h;if(!i(l))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",o,i(l.listener)?l.listener:l),this._events[o]?s(this._events[o])?this._events[o].push(l):this._events[o]=[this._events[o],l]:this._events[o]=l,s(this._events[o])&&!this._events[o].warned&&(h=r(this._maxListeners)?t.defaultMaxListeners:this._maxListeners)&&h>0&&this._events[o].length>h&&(this._events[o].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[o].length),typeof console.trace=="function"&&console.trace()),this},t.prototype.on=t.prototype.addListener,t.prototype.once=function(o,l){if(!i(l))throw TypeError("listener must be a function");var h=!1;function u(){this.removeListener(o,u),h||(h=!0,l.apply(this,arguments))}return u.listener=l,this.on(o,u),this},t.prototype.removeListener=function(o,l){var h,u,c,d;if(!i(l))throw TypeError("listener must be a function");if(!this._events||!this._events[o])return this;if(c=(h=this._events[o]).length,u=-1,h===l||i(h.listener)&&h.listener===l)delete this._events[o],this._events.removeListener&&this.emit("removeListener",o,l);else if(s(h)){for(d=c;d-- >0;)if(h[d]===l||h[d].listener&&h[d].listener===l){u=d;break}if(u<0)return this;h.length===1?(h.length=0,delete this._events[o]):h.splice(u,1),this._events.removeListener&&this.emit("removeListener",o,l)}return this},t.prototype.removeAllListeners=function(o){var l,h;if(!this._events)return this;if(!this._events.removeListener)return arguments.length===0?this._events={}:this._events[o]&&delete this._events[o],this;if(arguments.length===0){for(l in this._events)l!=="removeListener"&&this.removeAllListeners(l);return this.removeAllListeners("removeListener"),this._events={},this}if(i(h=this._events[o]))this.removeListener(o,h);else if(h)for(;h.length;)this.removeListener(o,h[h.length-1]);return delete this._events[o],this},t.prototype.listeners=function(o){return this._events&&this._events[o]?i(this._events[o])?[this._events[o]]:this._events[o].slice():[]},t.prototype.listenerCount=function(o){if(this._events){var l=this._events[o];if(i(l))return 1;if(l)return l.length}return 0},t.listenerCount=function(o,l){return o.listenerCount(l)}}])},{get exports(){return He},set exports(n){He=n}}.exports=ct();const $a=Lt(He);var X={},Dt={},G={};Object.defineProperty(G,"__esModule",{value:!0}),G.loop=G.conditional=G.parse=void 0;var Ui=function n(e,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:i;if(Array.isArray(t))t.forEach(function(r){return n(e,r,i,a)});else if(typeof t=="function")t(e,i,a,n);else{var s=Object.keys(t)[0];Array.isArray(t[s])?(a[s]={},n(e,t[s],i,a[s])):a[s]=t[s](e,i,a,n)}return i};G.parse=Ui;var Ni=function(n,e){return function(t,i,a,s){e(t,i,a)&&s(t,n,i,a)}};G.conditional=Ni;var Vi=function(n,e){return function(t,i,a,s){for(var r=[],o=t.pos;e(t,i,a);){var l={};if(s(t,n,i,l),t.pos===o)break;o=t.pos,r.push(l)}return r}};G.loop=Vi;var S={};Object.defineProperty(S,"__esModule",{value:!0}),S.readBits=S.readArray=S.readUnsigned=S.readString=S.peekBytes=S.readBytes=S.peekByte=S.readByte=S.buildStream=void 0;var Gi=function(n){return{data:n,pos:0}};S.buildStream=Gi;var $t=function(){return function(n){return n.data[n.pos++]}};S.readByte=$t;var qi=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return function(e){return e.data[e.pos+n]}};S.peekByte=qi;var Re=function(n){return function(e){return e.data.subarray(e.pos,e.pos+=n)}};S.readBytes=Re;var Hi=function(n){return function(e){return e.data.subarray(e.pos,e.pos+n)}};S.peekBytes=Hi;var Wi=function(n){return function(e){return Array.from(Re(n)(e)).map(function(t){return String.fromCharCode(t)}).join("")}};S.readString=Wi;var ji=function(n){return function(e){var t=Re(2)(e);return n?(t[1]<<8)+t[0]:(t[0]<<8)+t[1]}};S.readUnsigned=ji;var Zi=function(n,e){return function(t,i,a){for(var s=typeof e=="function"?e(t,i,a):e,r=Re(n),o=new Array(s),l=0;l<s;l++)o[l]=r(t);return o}};S.readArray=Zi;var Yi=function(n,e,t){for(var i=0,a=0;a<t;a++)i+=n[e+a]&&Math.pow(2,t-a-1);return i},Xi=function(n){return function(e){for(var t=$t()(e),i=new Array(8),a=0;a<8;a++)i[7-a]=!!(t&1<<a);return Object.keys(n).reduce(function(s,r){var o=n[r];return o.length?s[r]=Yi(i,o.index,o.length):s[r]=i[o.index],s},{})}};S.readBits=Xi,function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=G,t=S,i={blocks:function(u){for(var c=0,d=[],m=u.data.length,p=0,_=(0,t.readByte)()(u);_!==c&&_;_=(0,t.readByte)()(u)){if(u.pos+_>=m){var v=m-u.pos;d.push((0,t.readBytes)(v)(u)),p+=v;break}d.push((0,t.readBytes)(_)(u)),p+=_}for(var y=new Uint8Array(p),f=0,g=0;g<d.length;g++)y.set(d[g],f),f+=d[g].length;return y}},a=(0,e.conditional)({gce:[{codes:(0,t.readBytes)(2)},{byteSize:(0,t.readByte)()},{extras:(0,t.readBits)({future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}})},{delay:(0,t.readUnsigned)(!0)},{transparentColorIndex:(0,t.readByte)()},{terminator:(0,t.readByte)()}]},function(u){var c=(0,t.peekBytes)(2)(u);return c[0]===33&&c[1]===249}),s=(0,e.conditional)({image:[{code:(0,t.readByte)()},{descriptor:[{left:(0,t.readUnsigned)(!0)},{top:(0,t.readUnsigned)(!0)},{width:(0,t.readUnsigned)(!0)},{height:(0,t.readUnsigned)(!0)},{lct:(0,t.readBits)({exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}})}]},(0,e.conditional)({lct:(0,t.readArray)(3,function(u,c,d){return Math.pow(2,d.descriptor.lct.size+1)})},function(u,c,d){return d.descriptor.lct.exists}),{data:[{minCodeSize:(0,t.readByte)()},i]}]},function(u){return(0,t.peekByte)()(u)===44}),r=(0,e.conditional)({text:[{codes:(0,t.readBytes)(2)},{blockSize:(0,t.readByte)()},{preData:function(u,c,d){return(0,t.readBytes)(d.text.blockSize)(u)}},i]},function(u){var c=(0,t.peekBytes)(2)(u);return c[0]===33&&c[1]===1}),o=(0,e.conditional)({application:[{codes:(0,t.readBytes)(2)},{blockSize:(0,t.readByte)()},{id:function(u,c,d){return(0,t.readString)(d.blockSize)(u)}},i]},function(u){var c=(0,t.peekBytes)(2)(u);return c[0]===33&&c[1]===255}),l=(0,e.conditional)({comment:[{codes:(0,t.readBytes)(2)},i]},function(u){var c=(0,t.peekBytes)(2)(u);return c[0]===33&&c[1]===254}),h=[{header:[{signature:(0,t.readString)(3)},{version:(0,t.readString)(3)}]},{lsd:[{width:(0,t.readUnsigned)(!0)},{height:(0,t.readUnsigned)(!0)},{gct:(0,t.readBits)({exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}})},{backgroundColorIndex:(0,t.readByte)()},{pixelAspectRatio:(0,t.readByte)()}]},(0,e.conditional)({gct:(0,t.readArray)(3,function(u,c){return Math.pow(2,c.lsd.gct.size+1)})},function(u,c){return c.lsd.gct.exists}),{frames:(0,e.loop)([a,o,l,s,r],function(u){var c=(0,t.peekByte)()(u);return c===33||c===44})}];n.default=h}(Dt);var $e={};Object.defineProperty($e,"__esModule",{value:!0}),$e.deinterlace=void 0;var Qi=function(n,e){for(var t=new Array(n.length),i=n.length/e,a=function(u,c){var d=n.slice(c*e,(c+1)*e);t.splice.apply(t,[u*e,e].concat(d))},s=[0,4,2,1],r=[8,8,4,2],o=0,l=0;l<4;l++)for(var h=s[l];h<i;h+=r[l])a(h,o),o++;return t};$e.deinterlace=Qi;var Ce={};Object.defineProperty(Ce,"__esModule",{value:!0}),Ce.lzw=void 0;var Ji=function(n,e,t){var i,a,s,r,o,l,h,u,c,d,m,p,_,v,y,f,g=4096,w=-1,b=t,z=new Array(t),C=new Array(g),x=new Array(g),q=new Array(g+1);for(o=(a=1<<(d=n))+1,i=a+2,h=w,s=(1<<(r=d+1))-1,u=0;u<a;u++)C[u]=0,x[u]=u;for(m=p=_=v=y=f=0,c=0;c<b;){if(v===0){if(p<r){m+=e[f]<<p,p+=8,f++;continue}if(u=m&s,m>>=r,p-=r,u>i||u==o)break;if(u==a){s=(1<<(r=d+1))-1,i=a+2,h=w;continue}if(h==w){q[v++]=x[u],h=u,_=u;continue}for(l=u,u==i&&(q[v++]=_,u=h);u>a;)q[v++]=x[u],u=C[u];_=255&x[u],q[v++]=_,i<g&&(C[i]=h,x[i]=_,(++i&s)==0&&i<g&&(r++,s+=i)),h=l}v--,z[y++]=q[v],c++}for(c=y;c<b;c++)z[c]=0;return z};Ce.lzw=Ji,Object.defineProperty(X,"__esModule",{value:!0});var Ki=X.decompressFrames=X.decompressFrame=ln=X.parseGIF=void 0,en=rn(Dt),tn=G,nn=S,an=$e,sn=Ce;function rn(n){return n&&n.__esModule?n:{default:n}}var on=function(n){var e=new Uint8Array(n);return(0,tn.parse)((0,nn.buildStream)(e),en.default)},ln=X.parseGIF=on,hn=function(n){for(var e=n.pixels.length,t=new Uint8ClampedArray(4*e),i=0;i<e;i++){var a=4*i,s=n.pixels[i],r=n.colorTable[s]||[0,0,0];t[a]=r[0],t[a+1]=r[1],t[a+2]=r[2],t[a+3]=s!==n.transparentIndex?255:0}return t},Ct=function(n,e,t){if(n.image){var i=n.image,a=i.descriptor.width*i.descriptor.height,s=(0,sn.lzw)(i.data.minCodeSize,i.data.blocks,a);i.descriptor.lct.interlaced&&(s=(0,an.deinterlace)(s,i.descriptor.width));var r={pixels:s,dims:{top:n.image.descriptor.top,left:n.image.descriptor.left,width:n.image.descriptor.width,height:n.image.descriptor.height}};return i.descriptor.lct&&i.descriptor.lct.exists?r.colorTable=i.lct:r.colorTable=e,n.gce&&(r.delay=10*(n.gce.delay||10),r.disposalType=n.gce.extras.disposal,n.gce.extras.transparentColorGiven&&(r.transparentIndex=n.gce.transparentColorIndex)),t&&(r.patch=hn(r)),r}console.warn("gif frame does not have associated image.")};X.decompressFrame=Ct;var un=function(n,e){return n.frames.filter(function(t){return t.image}).map(function(t){return Ct(t,n.gct,e)})};Ki=X.decompressFrames=un;const cn=512;class dn{constructor(e){this._resourceManager=e,this._rasterizationCanvas=null}dispose(){this._rasterizationCanvas=null}rasterizeJSONResource(e,t,i){if(this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),e.type==="simple-fill"||e.type==="esriSFS"){const[m,p,_]=vi(this._rasterizationCanvas,e.style,t);return{size:[p,_],image:new Uint32Array(m.buffer),sdf:!1,simplePattern:!0,anchorX:0,anchorY:0,rasterizationScale:Ve(Math.ceil(t))}}if(e.type==="simple-line"||e.type==="esriSLS"||e.type==="line"&&e.dashTemplate){let m,p;if(e.type==="simple-line"||e.type==="esriSLS")switch(m=ci(e.style,e.cap),e.cap){case"butt":p="Butt";break;case"square":p="Square";break;default:p="Round"}else m=e.dashTemplate,p=e.cim.capStyle;const[_,v,y]=yi(m,p);return{size:[v,y],image:new Uint32Array(_.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}}let a,s=null,r=null,o=1;if(e.type==="simple-marker"||e.type==="esriSMS"||e.type==="line-marker"?(a=ge.fromSimpleMarker(e),r=nt(a)):e.cim&&e.cim.type==="CIMHatchFill"?(a=ge.fromCIMHatchFill(e.cim,t),s=new at(a.frame.xmin,-a.frame.ymax,a.frame.xmax-a.frame.xmin,a.frame.ymax-a.frame.ymin),o=t):e.cim.markerPlacement&&e.cim.markerPlacement.type==="CIMMarkerPlacementInsidePolygon"?(a=ge.fromCIMInsidePolygon(e.cim),s=new at(a.frame.xmin,-a.frame.ymax,a.frame.xmax-a.frame.xmin,a.frame.ymax-a.frame.ymin)):(a=e.cim,e.avoidSDFRasterization||(r=nt(a))),r&&!i){const[m,p,_]=mi(r);return m?{size:[p,_],image:new Uint32Array(m.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0,rasterizationScale:o}:null}const[l,h,u,c,d]=ge.rasterize(this._rasterizationCanvas,a,s,this._resourceManager,!i);return l?{size:[h,u],image:new Uint32Array(l.buffer),sdf:!1,simplePattern:!1,anchorX:c,anchorY:d}:null}rasterizeImageResource(e,t,i,a){this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),this._rasterizationCanvas.width=e,this._rasterizationCanvas.height=t;const s=this._rasterizationCanvas.getContext("2d");i instanceof ImageData?s.putImageData(i,0,0):(i.setAttribute("width",`${e}px`),i.setAttribute("height",`${t}px`),s.drawImage(i,0,0,e,t));const r=s.getImageData(0,0,e,t),o=new Uint8Array(r.data);if(a){for(const m of a)if(m&&m.oldColor&&m.oldColor.length===4&&m.newColor&&m.newColor.length===4){const[p,_,v,y]=m.oldColor,[f,g,w,b]=m.newColor;if(p===f&&_===g&&v===w&&y===b)continue;for(let z=0;z<o.length;z+=4)p===o[z]&&_===o[z+1]&&v===o[z+2]&&y===o[z+3]&&(o[z]=f,o[z+1]=g,o[z+2]=w,o[z+3]=b)}}let l;for(let m=0;m<o.length;m+=4)l=o[m+3]/255,o[m]=o[m]*l,o[m+1]=o[m+1]*l,o[m+2]=o[m+2]*l;let h=o,u=e,c=t;const d=cn;if(u>=d||c>=d){const m=u/c;m>1?(u=d,c=Math.round(d/m)):(c=d,u=Math.round(d*m)),h=new Uint8Array(4*u*c);const p=new Uint8ClampedArray(h.buffer);di(o,e,t,p,u,c,!1)}return{size:[u,c],image:new Uint32Array(h.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}}const mn={background:{"background.frag":`#ifdef PATTERN
uniform lowp float u_opacity;
uniform lowp sampler2D u_texture;
varying mediump vec4 v_tlbr;
varying mediump vec2 v_tileTextureCoord;
#else
uniform lowp vec4 u_color;
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
void main() {
#ifdef PATTERN
mediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);
mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
lowp vec4 color = texture2D(u_texture, samplePos);
gl_FragColor = u_opacity * color;
#else
gl_FragColor = u_color;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"background.vert":`precision mediump float;
attribute vec2 a_pos;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform mediump float u_coord_range;
uniform mediump float u_depth;
#ifdef PATTERN
uniform mediump mat3 u_pattern_matrix;
varying mediump vec2 v_tileTextureCoord;
uniform mediump vec4 u_tlbr;
uniform mediump vec2 u_mosaicSize;
varying mediump vec4 v_tlbr;
#endif
void main() {
gl_Position = vec4((u_dvsMat3 * vec3(u_coord_range * a_pos, 1.0)).xy, u_depth, 1.0);
#ifdef PATTERN
v_tileTextureCoord = (u_pattern_matrix * vec3(a_pos, 1.0)).xy;
v_tlbr             = u_tlbr / u_mosaicSize.xyxy;
#endif
#ifdef ID
v_id = u_id / 255.0;
#endif
}`},circle:{"circle.frag":`precision lowp float;
varying lowp vec4 v_color;
varying lowp vec4 v_stroke_color;
varying mediump float v_blur;
varying mediump float v_stroke_width;
varying mediump float v_radius;
varying mediump vec2 v_offset;
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
mediump float dist = length(v_offset);
mediump float alpha = smoothstep(0.0, -v_blur, dist - 1.0);
lowp float color_mix_ratio = v_stroke_width < 0.01 ? 0.0 : smoothstep(-v_blur, 0.0, dist - v_radius / (v_radius + v_stroke_width));
gl_FragColor = alpha * mix(v_color, v_stroke_color, color_mix_ratio);
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"circle.vert":`precision mediump float;
attribute vec2 a_pos;
#pragma header
varying lowp vec4 v_color;
varying lowp vec4 v_stroke_color;
varying mediump float v_blur;
varying mediump float v_stroke_width;
varying mediump float v_radius;
varying mediump vec2 v_offset;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump vec2 u_circleTranslation;
uniform mediump float u_depth;
uniform mediump float u_antialiasingWidth;
void main()
{
#pragma main
v_color = color * opacity;
v_stroke_color = stroke_color * stroke_opacity;
v_stroke_width = stroke_width;
v_radius = radius;
v_blur = max(blur, u_antialiasingWidth / (radius + stroke_width));
mediump vec2 offset = vec2(mod(a_pos, 2.0) * 2.0 - 1.0);
v_offset = offset;
#ifdef ID
v_id = u_id / 255.0;
#endif
mediump vec3 pos = u_dvsMat3 * vec3(a_pos * 0.5, 1.0) + u_displayMat3 * vec3((v_radius + v_stroke_width) * offset + u_circleTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},fill:{"fill.frag":`precision lowp float;
#ifdef PATTERN
uniform lowp sampler2D u_texture;
varying mediump vec2 v_tileTextureCoord;
varying mediump vec4 v_tlbr;
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
vec4 mixColors(vec4 color1, vec4 color2) {
float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);
vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);
return vec4(compositeColor, compositeAlpha);
}
void main()
{
#ifdef PATTERN
mediump vec2 normalizedTextureCoord = fract(v_tileTextureCoord);
mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
lowp vec4 color = texture2D(u_texture, samplePos);
gl_FragColor = v_color[3] * color;
#else
gl_FragColor = v_color;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"fill.vert":`precision mediump float;
attribute vec2 a_pos;
#pragma header
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump float u_depth;
uniform mediump vec2 u_fillTranslation;
#ifdef PATTERN
#include <util/util.glsl>
uniform mediump vec2 u_mosaicSize;
uniform mediump float u_patternFactor;
varying mediump vec2 v_tileTextureCoord;
varying mediump vec4 v_tlbr;
#endif
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
void main()
{
#pragma main
v_color = color * opacity;
#ifdef ID
v_id = u_id / 255.0;
#endif
#ifdef PATTERN
float patternWidth = nextPOT(tlbr.z - tlbr.x);
float patternHeight = nextPOT(tlbr.w - tlbr.y);
float scaleX = 1.0 / (patternWidth * u_patternFactor);
float scaleY = 1.0 / (patternHeight * u_patternFactor);
mat3 patterMat = mat3(scaleX, 0.0,    0.0,
0.0,    -scaleY, 0.0,
0.0,    0.0,    1.0);
v_tileTextureCoord = (patterMat * vec3(a_pos, 1.0)).xy;
v_tlbr             = tlbr / u_mosaicSize.xyxy;
#endif
vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(u_fillTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},icon:{"icon.frag":`precision mediump float;
uniform lowp sampler2D u_texture;
#ifdef SDF
uniform lowp vec4 u_color;
uniform lowp vec4 u_outlineColor;
#endif
varying mediump vec2 v_tex;
varying lowp float v_opacity;
varying mediump vec2 v_size;
varying lowp vec4 v_color;
#ifdef SDF
varying mediump flaot v_halo_width;
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
#include <util/encoding.glsl>
vec4 mixColors(vec4 color1, vec4 color2) {
float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);
vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);
return vec4(compositeColor, compositeAlpha);
}
void main()
{
#ifdef SDF
lowp vec4 fillPixelColor = v_color;
float d = rgba2float(texture2D(u_texture, v_tex)) - 0.5;
const float softEdgeRatio = 0.248062016;
float size = max(v_size.x, v_size.y);
float dist = d * softEdgeRatio * size;
fillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);
if (v_halo_width > 0.25) {
lowp vec4 outlinePixelColor = u_outlineColor;
const float outlineLimitRatio = (16.0 / 86.0);
float clampedOutlineSize = softEdgeRatio * min(v_halo_width, outlineLimitRatio * max(v_size.x, v_size.y));
outlinePixelColor *= clamp(0.5 - (abs(dist) - clampedOutlineSize), 0.0, 1.0);
gl_FragColor = v_opacity * mixColors(fillPixelColor, outlinePixelColor);
}
else {
gl_FragColor = v_opacity * fillPixelColor;
}
#else
lowp vec4 texColor = texture2D(u_texture, v_tex);
gl_FragColor = v_opacity * texColor;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"icon.vert":`attribute vec2 a_pos;
attribute vec2 a_vertexOffset;
attribute vec4 a_texAngleRange;
attribute vec4 a_levelInfo;
attribute float a_opacityInfo;
#pragma header
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
#ifdef SDF
varying mediump float v_halo_width;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump vec2 u_iconTranslation;
uniform vec2 u_mosaicSize;
uniform mediump float u_depth;
uniform mediump float u_mapRotation;
uniform mediump float u_level;
uniform lowp float u_keepUpright;
uniform mediump float u_fadeDuration;
varying mediump vec2 v_tex;
varying lowp float v_opacity;
varying mediump vec2 v_size;
const float C_OFFSET_PRECISION = 1.0 / 8.0;
const float C_256_TO_RAD = 3.14159265359 / 128.0;
const float C_DEG_TO_RAD = 3.14159265359 / 180.0;
const float tileCoordRatio = 1.0 / 8.0;
uniform highp float u_time;
void main()
{
#pragma main
v_color = color;
v_opacity = opacity;
#ifdef SDF
v_halo_width = halo_width;
#endif
float modded = mod(a_opacityInfo, 128.0);
float targetOpacity = (a_opacityInfo - modded) / 128.0;
float startOpacity = modded / 127.0;
float interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);
v_opacity *= interpolatedOpacity;
mediump float a_angle         = a_levelInfo[1];
mediump float a_minLevel      = a_levelInfo[2];
mediump float a_maxLevel      = a_levelInfo[3];
mediump vec2 a_tex            = a_texAngleRange.xy;
mediump float delta_z = 0.0;
mediump float rotated = mod(a_angle + u_mapRotation, 256.0);
delta_z += (1.0 - step(u_keepUpright, 0.0)) * step(64.0, rotated) * (1.0 - step(192.0, rotated));
delta_z += 1.0 - step(a_minLevel, u_level);
delta_z += step(a_maxLevel, u_level);
delta_z += step(v_opacity, 0.0);
vec2 offset = C_OFFSET_PRECISION * a_vertexOffset;
v_size = abs(offset);
#ifdef SDF
offset = (120.0 / 86.0) * offset;
#endif
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayViewMat3 * vec3(size * offset, 0.0) + u_displayMat3 * vec3(u_iconTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);
#ifdef ID
v_id = u_id / 255.0;
#endif
v_tex = a_tex.xy / u_mosaicSize;
}`},line:{"line.frag":`precision lowp float;
varying mediump vec2 v_normal;
varying highp float v_accumulatedDistance;
varying mediump float v_lineHalfWidth;
varying lowp vec4 v_color;
varying mediump float v_blur;
#if defined (PATTERN) || defined(SDF)
varying mediump vec4 v_tlbr;
varying mediump vec2 v_patternSize;
varying mediump float v_widthRatio;
uniform sampler2D u_texture;
uniform mediump float u_antialiasing;
#endif
#ifdef SDF
#include <util/encoding.glsl>
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
mediump float fragDist = length(v_normal) * v_lineHalfWidth;
lowp float alpha = clamp((v_lineHalfWidth - fragDist) / v_blur, 0.0, 1.0);
#ifdef PATTERN
mediump float relativeTexX = fract(v_accumulatedDistance / (v_patternSize.x * v_widthRatio));
mediump float relativeTexY = 0.5 + v_normal.y * v_lineHalfWidth / (v_patternSize.y * v_widthRatio);
mediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));
lowp vec4 color = texture2D(u_texture, texCoord);
gl_FragColor = alpha * v_color[3] * color;
#elif defined(SDF)
mediump float relativeTexX = fract((v_accumulatedDistance * 0.5) / (v_patternSize.x * v_widthRatio));
mediump float relativeTexY =  0.5 + 0.25 * v_normal.y;
mediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));
mediump float d = rgba2float(texture2D(u_texture, texCoord)) - 0.5;
float dist = d * (v_lineHalfWidth + u_antialiasing / 2.0);
gl_FragColor = alpha * clamp(0.5 - dist, 0.0, 1.0) * v_color;
#else
gl_FragColor = alpha * v_color;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"line.vert":`precision mediump float;
attribute vec2 a_pos;
attribute vec4 a_extrude_offset;
attribute vec4 a_dir_normal;
attribute vec2 a_accumulatedDistance;
#pragma header
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump float u_zoomFactor;
uniform mediump vec2 u_lineTranslation;
uniform mediump float u_antialiasing;
uniform mediump float u_depth;
varying mediump vec2 v_normal;
varying highp float v_accumulatedDistance;
const float scale = 1.0 / 31.0;
const mediump float tileCoordRatio = 8.0;
#if defined (SDF)
const mediump float sdfPatternHalfWidth = 15.5;
#endif
#if defined (PATTERN) || defined(SDF)
uniform mediump vec2 u_mosaicSize;
varying mediump vec4 v_tlbr;
varying mediump vec2 v_patternSize;
varying mediump float v_widthRatio;
#endif
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
varying mediump float v_lineHalfWidth;
varying mediump float v_blur;
void main()
{
#pragma main
v_color = color * opacity;
v_blur = blur + u_antialiasing;
v_normal = a_dir_normal.zw * scale;
#if defined (PATTERN) || defined(SDF)
v_tlbr          = tlbr / u_mosaicSize.xyxy;
v_patternSize   = vec2(tlbr.z - tlbr.x, tlbr.y - tlbr.w);
#if defined (PATTERN)
v_widthRatio = width / v_patternSize.y;
#else
v_widthRatio = width / sdfPatternHalfWidth / 2.0;
#endif
#endif
v_lineHalfWidth = (width + u_antialiasing) * 0.5;
mediump vec2 dir = a_dir_normal.xy * scale;
mediump vec2 offset_ = a_extrude_offset.zw * scale * offset;
mediump vec2 dist = v_lineHalfWidth * scale * a_extrude_offset.xy;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos + offset_ * tileCoordRatio / u_zoomFactor, 1.0) + u_displayViewMat3 * vec3(dist, 0.0) + u_displayMat3 * vec3(u_lineTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
#if defined (PATTERN) || defined(SDF)
v_accumulatedDistance = a_accumulatedDistance.x * u_zoomFactor / tileCoordRatio + dot(dir, dist + offset_);
#endif
#ifdef ID
v_id = u_id / 255.0;
#endif
}`},outline:{"outline.frag":`varying lowp vec4 v_color;
varying mediump vec2 v_normal;
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
lowp float dist = abs(v_normal.y);
lowp float alpha = smoothstep(1.0, 0.0, dist);
gl_FragColor = alpha * v_color;
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"outline.vert":`attribute vec2 a_pos;
attribute vec2 a_offset;
attribute vec2 a_xnormal;
#pragma header
varying lowp vec4 v_color;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump vec2 u_fillTranslation;
uniform mediump float u_depth;
uniform mediump float u_outline_width;
varying lowp vec2 v_normal;
const float scale = 1.0 / 15.0;
void main()
{
#pragma main
v_color = color * opacity;
#ifdef ID
v_id = u_id / 255.0;
#endif
v_normal = a_xnormal;
mediump vec2 dist = u_outline_width * scale * a_offset;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(dist + u_fillTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},text:{"text.frag":`uniform lowp sampler2D u_texture;
varying lowp vec2 v_tex;
varying lowp vec4 v_color;
varying mediump float v_edgeWidth;
varying mediump float v_edgeDistance;
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
lowp float dist = texture2D(u_texture, v_tex).a;
mediump float alpha = smoothstep(v_edgeDistance - v_edgeWidth, v_edgeDistance + v_edgeWidth, dist);
gl_FragColor = alpha * v_color;
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"text.vert":`attribute vec2 a_pos;
attribute vec2 a_vertexOffset;
attribute vec4 a_texAngleRange;
attribute vec4 a_levelInfo;
attribute float a_opacityInfo;
#pragma header
varying lowp vec4 v_color;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump vec2 u_textTranslation;
uniform vec2 u_mosaicSize;
uniform mediump float u_depth;
uniform mediump float u_mapRotation;
uniform mediump float u_level;
uniform lowp float u_keepUpright;
uniform mediump float u_fadeDuration;
varying lowp vec2 v_tex;
const float offsetPrecision = 1.0 / 8.0;
const mediump float edgePos = 0.75;
uniform mediump float u_antialiasingWidth;
varying mediump float v_edgeDistance;
varying mediump float v_edgeWidth;
uniform lowp float u_halo;
const float sdfFontScale = 1.0 / 24.0;
const float sdfPixel = 3.0;
uniform highp float u_time;
void main()
{
#pragma main
if (u_halo > 0.5)
{
v_color = halo_color * opacity;
halo_width *= sdfPixel;
halo_blur *= sdfPixel;
}
else
{
v_color = color * opacity;
halo_width = 0.0;
halo_blur = 0.0;
}
float modded = mod(a_opacityInfo, 128.0);
float targetOpacity = (a_opacityInfo - modded) / 128.0;
float startOpacity = modded / 127.0;
float interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);
v_color *= interpolatedOpacity;
mediump float a_angle       = a_levelInfo[1];
mediump float a_minLevel    = a_levelInfo[2];
mediump float a_maxLevel    = a_levelInfo[3];
mediump vec2 a_tex          = a_texAngleRange.xy;
mediump float a_visMinAngle    = a_texAngleRange.z;
mediump float a_visMaxAngle    = a_texAngleRange.w;
mediump float delta_z = 0.0;
mediump float angle = mod(a_angle + u_mapRotation, 256.0);
if (a_visMinAngle < a_visMaxAngle)
{
delta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) + (1.0 - step(a_visMinAngle, angle)));
}
else
{
delta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) * (1.0 - step(a_visMinAngle, angle)));
}
delta_z += 1.0 - step(a_minLevel, u_level);
delta_z += step(a_maxLevel, u_level);
delta_z += step(v_color[3], 0.0);
v_tex = a_tex.xy / u_mosaicSize;
#ifdef ID
v_id = u_id / 255.0;
#endif
v_edgeDistance = edgePos - halo_width / size;
v_edgeWidth = (u_antialiasingWidth + halo_blur) / size;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + sdfFontScale * u_displayViewMat3 * vec3(offsetPrecision * size * a_vertexOffset, 0.0) + u_displayMat3 * vec3(u_textTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);
}`},util:{"encoding.glsl":`const vec4 rgba2float_factors = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, rgba2float_factors);
}`,"util.glsl":`float nextPOT(in float x) {
return pow(2.0, ceil(log2(abs(x))));
}`}};function pn(n){let e=mn;return n.split("/").forEach(t=>{e&&(e=e[t])}),e}const _n=new Bt(pn);function Ca(n){return _n.resolveIncludes(n)}const Ia={shaders:{vertexShader:F("bitBlit/bitBlit.vert"),fragmentShader:F("bitBlit/bitBlit.frag")},attributes:new Map([["a_pos",0],["a_tex",1]])};class Ie{constructor(e,t){this._width=0,this._height=0,this._free=[],this._width=e,this._height=t,this._free.push(new P(0,0,e,t))}get width(){return this._width}get height(){return this._height}allocate(e,t){if(e>this._width||t>this._height)return new P;let i=null,a=-1;for(let s=0;s<this._free.length;++s){const r=this._free[s];e<=r.width&&t<=r.height&&(i===null||r.y<=i.y&&r.x<=i.x)&&(i=r,a=s)}return i===null?new P:(this._free.splice(a,1),i.width<i.height?(i.width>e&&this._free.push(new P(i.x+e,i.y,i.width-e,t)),i.height>t&&this._free.push(new P(i.x,i.y+t,i.width,i.height-t))):(i.width>e&&this._free.push(new P(i.x+e,i.y,i.width-e,i.height)),i.height>t&&this._free.push(new P(i.x,i.y+t,e,i.height-t))),new P(i.x,i.y,e,t))}release(e){for(let t=0;t<this._free.length;++t){const i=this._free[t];if(i.y===e.y&&i.height===e.height&&i.x+i.width===e.x)i.width+=e.width;else if(i.x===e.x&&i.width===e.width&&i.y+i.height===e.y)i.height+=e.height;else if(e.y===i.y&&e.height===i.height&&e.x+e.width===i.x)i.x=e.x,i.width+=e.width;else{if(e.x!==i.x||e.width!==i.width||e.y+e.height!==i.y)continue;i.y=e.y,i.height+=e.height}this._free.splice(t,1),this.release(e)}this._free.push(e)}}const fn=256,gn=n=>Math.floor(n/256);function vn(n){const e=new Set;for(const t of n)e.add(gn(t));return e}function yn(n,e,t){return n.has(e)||n.set(e,t().then(()=>{n.delete(e)}).catch(i=>{n.delete(e),Nt(i)})),n.get(e)}const wn=n=>({rect:new P(0,0,0,0),page:0,metrics:{left:0,width:0,height:0,advance:0,top:0},code:n,sdf:!0});class bn{constructor(e,t,i){this.width=0,this.height=0,this._dirties=[],this._glyphData=[],this._currentPage=0,this._glyphCache={},this._textures=[],this._rangePromises=new Map,this.width=e,this.height=t,this._glyphSource=i,this._binPack=new Ie(e-4,t-4),this._glyphData.push(new Uint8Array(e*t)),this._dirties.push(!0),this._textures.push(null),this._initDecorationGlyph()}dispose(){this._binPack=null;for(const e of this._textures)e&&e.dispose();this._textures.length=0,this._glyphData.length=0}_initDecorationGlyph(){const e=[117,149,181,207,207,181,149,117],t=[];for(let a=0;a<e.length;a++){const s=e[a];for(let r=0;r<11;r++)t.push(s)}const i={metrics:{width:5,height:2,left:0,top:0,advance:0},bitmap:new Uint8Array(t)};this._recordGlyph(i)}async getGlyphItems(e,t,i){const a=this._getGlyphCache(e);return await this._fetchRanges(e,t,i),t.map(s=>this._getMosaicItem(a,e,s))}bind(e,t,i,a){const s=this._getTexture(e,i);s.setSamplingMode(t),this._dirties[i]&&(s.setData(this._glyphData[i]),this._dirties[i]=!1),e.bindTexture(s,a)}_getGlyphCache(e){return this._glyphCache[e]||(this._glyphCache[e]={}),this._glyphCache[e]}_getTexture(e,t){return this._textures[t]||(this._textures[t]=new Ye(e,{pixelFormat:De.ALPHA,dataType:Ze.UNSIGNED_BYTE,width:this.width,height:this.height},new Uint8Array(this.width*this.height))),this._textures[t]}_invalidate(){this._dirties[this._currentPage]=!0}async _fetchRanges(e,t,i){const a=vn(t),s=[];a.forEach(r=>{s.push(this._fetchRange(e,r,i))}),await Promise.all(s)}async _fetchRange(e,t,i){if(t>fn)return;const a=e+t;return yn(this._rangePromises,a,()=>this._glyphSource.getRange(e,t,i))}_getMosaicItem(e,t,i){if(!e[i]){const a=this._glyphSource.getGlyph(t,i);if(!a||!a.metrics)return wn(i);const s=this._recordGlyph(a),r=this._currentPage,o=a.metrics;e[i]={rect:s,page:r,metrics:o,code:i,sdf:!0},this._invalidate()}return e[i]}_recordGlyph(e){const t=e.metrics;let i;if(t.width===0)i=new P(0,0,0,0);else{const s=t.width+6,r=t.height+2*3;i=this._binPack.allocate(s,r),i.isEmpty&&(this._dirties[this._currentPage]||(this._glyphData[this._currentPage]=null),this._currentPage=this._glyphData.length,this._glyphData.push(new Uint8Array(this.width*this.height)),this._dirties.push(!0),this._textures.push(null),this._initDecorationGlyph(),this._binPack=new Ie(this.width-4,this.height-4),i=this._binPack.allocate(s,r));const o=this._glyphData[this._currentPage],l=e.bitmap;let h,u;if(l)for(let c=0;c<r;c++){h=s*c,u=this.width*(i.y+c)+i.x;for(let d=0;d<s;d++)o[u+d]=l[h+d]}je("esri-glyph-debug")&&this._showDebugPage(o)}return i}_showDebugPage(e){const t=document.createElement("canvas"),i=t.getContext("2d"),a=new ImageData(this.width,this.height),s=a.data;t.width=this.width,t.height=this.height,t.style.border="1px solid black";for(let r=0;r<e.length;++r)s[4*r+0]=e[r],s[4*r+1]=0,s[4*r+2]=0,s[4*r+3]=255;i.putImageData(a,0,0),document.body.appendChild(t)}}class xn{constructor(e){for(this._metrics=[],this._bitmaps=[];e.next();)switch(e.tag()){case 1:{const t=e.getMessage();for(;t.next();)switch(t.tag()){case 3:{const i=t.getMessage();let a,s,r,o,l,h,u;for(;i.next();)switch(i.tag()){case 1:a=i.getUInt32();break;case 2:s=i.getBytes();break;case 3:r=i.getUInt32();break;case 4:o=i.getUInt32();break;case 5:l=i.getSInt32();break;case 6:h=i.getSInt32();break;case 7:u=i.getUInt32();break;default:i.skip()}i.release(),a&&(this._metrics[a]={width:r,height:o,left:l,top:h,advance:u},this._bitmaps[a]=s);break}default:t.skip()}t.release();break}default:e.skip()}}getMetrics(e){return this._metrics[e]}getBitmap(e){return this._bitmaps[e]}}class Mn{constructor(){this._ranges=[]}getRange(e){return this._ranges[e]}addRange(e,t){this._ranges[e]=t}}class zn{constructor(e){this._glyphInfo={},this._baseURL=e}getRange(e,t,i){const a=this._getFontStack(e);if(a.getRange(t))return Promise.resolve();const s=256*t,r=s+255,o=this._baseURL.replace("{fontstack}",e).replace("{range}",s+"-"+r);return xt(o,{responseType:"array-buffer",...i}).then(l=>{a.addRange(t,new xn(new Vt(new Uint8Array(l.data),new DataView(l.data))))})}getGlyph(e,t){const i=this._getFontStack(e);if(!i)return;const a=Math.floor(t/256);if(a>256)return;const s=i.getRange(a);return s?{metrics:s.getMetrics(t),bitmap:s.getBitmap(t)}:void 0}_getFontStack(e){let t=this._glyphInfo[e];return t||(t=this._glyphInfo[e]=new Mn),t}}const re=1e20;class Tn{constructor(e){this._svg=null,this.size=e;const t=document.createElement("canvas");t.width=t.height=e,this._context=t.getContext("2d"),this._gridOuter=new Float64Array(e*e),this._gridInner=new Float64Array(e*e),this._f=new Float64Array(e),this._d=new Float64Array(e),this._z=new Float64Array(e+1),this._v=new Int16Array(e)}dispose(){this._context=this._gridOuter=this._gridInner=this._f=this._d=this._z=this._v=null,this._svg&&(document.body.removeChild(this._svg),this._svg=null)}draw(e,t,i=31){this._initSVG();const a=this.createSVGString(e);return new Promise((s,r)=>{const o=new Image;o.src="data:image/svg+xml; charset=utf8, "+encodeURIComponent(a),o.onload=()=>{o.onload=null,this._context.clearRect(0,0,this.size,this.size),this._context.drawImage(o,0,0,this.size,this.size);const h=this._context.getImageData(0,0,this.size,this.size),u=new Uint8Array(this.size*this.size*4);for(let c=0;c<this.size*this.size;c++){const d=h.data[4*c+3]/255;this._gridOuter[c]=d===1?0:d===0?re:Math.max(0,.5-d)**2,this._gridInner[c]=d===1?re:d===0?0:Math.max(0,d-.5)**2}this._edt(this._gridOuter,this.size,this.size),this._edt(this._gridInner,this.size,this.size);for(let c=0;c<this.size*this.size;c++){const d=this._gridOuter[c]-this._gridInner[c];Ai(.5-d/(2*i),u,4*c)}s(u)};const l=t&&t.signal;l&&Gt(l,()=>r(qt()))})}_initSVG(){if(!this._svg){const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("style","position: absolute;"),e.setAttribute("width","0"),e.setAttribute("height","0"),e.setAttribute("aria-hidden","true"),e.setAttribute("role","presentation"),document.body.appendChild(e),this._svg=e}return this._svg}createSVGString(e){const t=this._initSVG(),i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttribute("d",e),t.appendChild(i);const a=i.getBBox(),s=a.width/a.height,r=this.size/2;let o,l,h,u;if(s>1){l=o=r/a.width;const p=r*(1/s);h=this.size/4,u=r-p/2}else o=l=r/a.height,h=r-r*s/2,u=this.size/4;const c=-a.x*o+h,d=-a.y*l+u;i.setAttribute("style",`transform: matrix(${o}, 0, 0, ${l}, ${c}, ${d})`);const m=`<svg style="fill:red;" height="${this.size}" width="${this.size}" xmlns="http://www.w3.org/2000/svg">${t.innerHTML}</svg>`;return t.removeChild(i),m}_edt(e,t,i){const a=this._f,s=this._d,r=this._v,o=this._z;for(let l=0;l<t;l++){for(let h=0;h<i;h++)a[h]=e[h*t+l];this._edt1d(a,s,r,o,i);for(let h=0;h<i;h++)e[h*t+l]=s[h]}for(let l=0;l<i;l++){for(let h=0;h<t;h++)a[h]=e[l*t+h];this._edt1d(a,s,r,o,t);for(let h=0;h<t;h++)e[l*t+h]=Math.sqrt(s[h])}}_edt1d(e,t,i,a,s){i[0]=0,a[0]=-re,a[1]=+re;for(let r=1,o=0;r<s;r++){let l=(e[r]+r*r-(e[i[o]]+i[o]*i[o]))/(2*r-2*i[o]);for(;l<=a[o];)o--,l=(e[r]+r*r-(e[i[o]]+i[o]*i[o]))/(2*r-2*i[o]);o++,i[o]=r,a[o]=l,a[o+1]=+re}for(let r=0,o=0;r<s;r++){for(;a[o+1]<r;)o++;t[r]=(r-i[o])*(r-i[o])+e[i[o]]}}}function J(n){return n&&n.type==="static"}class Xe{constructor(e,t,i=0){this._mosaicPages=[],this._maxItemSize=0,this._currentPage=0,this._pageWidth=0,this._pageHeight=0,this._mosaicRects=new Map,this._spriteCopyQueue=[],this.pixelRatio=1,(e<=0||t<=0)&&console.error("Sprites mosaic defaultWidth and defaultHeight must be greater than zero!"),this._pageWidth=e,this._pageHeight=t,i>0&&(this._maxItemSize=i),this.pixelRatio=window.devicePixelRatio||1,this._binPack=new Ie(this._pageWidth,this._pageHeight);const a=Math.floor(this._pageWidth),s=Math.floor(this._pageHeight);this._mosaicPages.push({mosaicsData:{type:"static",data:new Uint32Array(a*s)},size:[this._pageWidth,this._pageHeight],dirty:!0,texture:void 0})}getWidth(e){return e>=this._mosaicPages.length?-1:this._mosaicPages[e].size[0]}getHeight(e){return e>=this._mosaicPages.length?-1:this._mosaicPages[e].size[1]}getPageTexture(e){return e<this._mosaicPages.length?this._mosaicPages[e].texture:null}has(e){return this._mosaicRects.has(e)}get itemCount(){return this._mosaicRects.size}getSpriteItem(e){return this._mosaicRects.get(e)}addSpriteItem(e,t,i,a,s,r,o=1){if(this._mosaicRects.has(e))return this._mosaicRects.get(e);let l,h,u;if(J(i))[l,h,u]=this._allocateImage(t[0],t[1]);else{l=new P(0,0,t[0],t[1]),h=this._mosaicPages.length;const d=void 0;this._mosaicPages.push({mosaicsData:i,size:[t[0]+2*I,t[1]+2*I],dirty:!0,texture:d})}if(l.width<=0||l.height<=0)return null;const c={rect:l,width:t[0],height:t[1],sdf:s,simplePattern:r,pixelRatio:o,page:h};return this._mosaicRects.set(e,c),J(i)&&this._copy({rect:l,spriteSize:t,spriteData:i.data,page:h,pageSize:u,repeat:a,sdf:s}),c}hasItemsToProcess(){return this._spriteCopyQueue.length!==0}processNextItem(){const e=this._spriteCopyQueue.pop();e&&this._copy(e)}getSpriteItems(e){const t={};for(const i of e)t[i]=this.getSpriteItem(i);return t}getMosaicItemPosition(e){const t=this.getSpriteItem(e),i=t&&t.rect;if(!i)return null;i.width=t.width,i.height=t.height;const a=t.width,s=t.height,r=I,o=this._mosaicPages[t.page];return{size:[t.width,t.height],tl:[(i.x+r)/o[0],(i.y+r)/o[1]],br:[(i.x+r+a)/o[0],(i.y+r+s)/o[1]],page:t.page}}bind(e,t,i=0,a=0){const s=this._mosaicPages[i],r=s.mosaicsData;let o=s.texture;o||(o=Sn(e,s.size),s.texture=o),o.setSamplingMode(t),J(r)?(e.bindTexture(o,a),s.dirty&&(o.setData(new Uint8Array(r.data.buffer)),o.generateMipmap())):(r.data.bindFrame(e,o,a),o.generateMipmap()),s.dirty=!1}static _copyBits(e,t,i,a,s,r,o,l,h,u,c){let d=a*t+i,m=l*r+o;if(c){m-=r;for(let p=-1;p<=u;p++,d=((p+u)%u+a)*t+i,m+=r)for(let _=-1;_<=h;_++)s[m+_]=e[d+(_+h)%h]}else for(let p=0;p<u;p++){for(let _=0;_<h;_++)s[m+_]=e[d+_];d+=t,m+=r}}_copy(e){if(e.page>=this._mosaicPages.length)return;const t=this._mosaicPages[e.page],i=t.mosaicsData;if(!J(t.mosaicsData))throw new j("mapview-invalid-resource","unsuitable data type!");const a=e.spriteData,s=i.data;s&&a||console.error("Source or target images are uninitialized!"),Xe._copyBits(a,e.spriteSize[0],0,0,s,e.pageSize[0],e.rect.x+I,e.rect.y+I,e.spriteSize[0],e.spriteSize[1],e.repeat),t.dirty=!0}_allocateImage(e,t){e+=2*I,t+=2*I;const i=Math.max(e,t);if(this._maxItemSize&&this._maxItemSize<i){const s=2**Math.ceil(ut(e)),r=2**Math.ceil(ut(t)),o=new P(0,0,e,t);return this._mosaicPages.push({mosaicsData:{type:"static",data:new Uint32Array(s*r)},size:[s,r],dirty:!0,texture:void 0}),[o,this._mosaicPages.length-1,[s,r]]}const a=this._binPack.allocate(e,t);if(a.width<=0){const s=this._mosaicPages[this._currentPage];return!s.dirty&&J(s.mosaicsData)&&(s.mosaicsData.data=null),this._currentPage=this._mosaicPages.length,this._mosaicPages.push({mosaicsData:{type:"static",data:new Uint32Array(this._pageWidth*this._pageHeight)},size:[this._pageWidth,this._pageHeight],dirty:!0,texture:void 0}),this._binPack=new Ie(this._pageWidth,this._pageHeight),this._allocateImage(e,t)}return[a,this._currentPage,[this._pageWidth,this._pageHeight]]}dispose(){this._binPack=null;for(const e of this._mosaicPages){const t=e.texture;t&&t.dispose();const i=e.mosaicsData;J(i)||i.data.destroy()}this._mosaicPages=null,this._mosaicRects.clear()}}function Sn(n,e){return new Ye(n,{pixelFormat:De.RGBA,dataType:Ze.UNSIGNED_BYTE,width:e[0],height:e[1]},null)}function It(n){return L(n.frameDurations.reduce((e,t)=>e+t,0))}function Dn(n){const{width:e,height:t}=n;return{frameDurations:n.frameDurations.reverse(),getFrame:i=>{const a=n.frameDurations.length-1-i;return n.getFrame(a)},width:e,height:t}}function $n(n,e){const{width:t,height:i,getFrame:a}=n,s=e/It(n);return{frameDurations:n.frameDurations.map(r=>L(r*s)),getFrame:a,width:t,height:i}}function Cn(n,e){const{width:t,height:i,getFrame:a}=n,s=n.frameDurations.slice(),r=s.shift();return s.unshift(L(r+e)),{frameDurations:s,getFrame:a,width:t,height:i}}function dt(n,e){const{width:t,height:i,getFrame:a}=n,s=n.frameDurations.slice(),r=s.pop();return s.push(L(r+e)),{frameDurations:s,getFrame:a,width:t,height:i}}class In{constructor(e,t,i,a){this._animation=e,this._repeatType=i,this._onFrameData=a,this._direction=1,this._currentFrame=0,this.timeToFrame=this._animation.frameDurations[this._currentFrame];let s=0;for(;t>s;)s+=this.timeToFrame,this.nextFrame();const r=this._animation.getFrame(this._currentFrame);this._onFrameData(r)}nextFrame(){if(this._currentFrame+=this._direction,this._direction>0){if(this._currentFrame===this._animation.frameDurations.length)switch(this._repeatType){case V.None:this._currentFrame-=this._direction;break;case V.Loop:this._currentFrame=0;break;case V.Oscillate:this._currentFrame-=this._direction,this._direction=-1}}else if(this._currentFrame===-1)switch(this._repeatType){case V.None:this._currentFrame-=this._direction;break;case V.Loop:this._currentFrame=this._animation.frameDurations.length-1;break;case V.Oscillate:this._currentFrame-=this._direction,this._direction=1}this.timeToFrame=this._animation.frameDurations[this._currentFrame];const e=this._animation.getFrame(this._currentFrame);this._onFrameData(e)}}function Pn(n,e,t,i){let a,{repeatType:s}=e;if(s==null&&(s=V.Loop),e.reverseAnimation===!0&&(n=Dn(n)),e.duration!=null&&(n=$n(n,L(1e3*e.duration))),e.repeatDelay!=null){const r=1e3*e.repeatDelay;s===V.Loop?n=dt(n,L(r)):s===V.Oscillate&&(n=Cn(dt(n,L(r/2)),L(r/2)))}if(e.startTimeOffset!=null)a=L(1e3*e.startTimeOffset);else if(e.randomizeStartTime!=null){const r=pi(t),o=82749913,l=e.randomizeStartSeed!=null?e.randomizeStartSeed:o,h=_i(r,l);a=L(h*It(n))}else a=L(0);return new In(n,a,s,i)}function Fn(n,e,t,i){const a=e.playAnimation==null||e.playAnimation,s=Pn(n,e,t,i);let r,o=s.timeToFrame;function l(){r=a?setTimeout(()=>{s.nextFrame(),o=s.timeToFrame,l()},o):void 0}return l(),{remove:()=>{a&&clearTimeout(r)}}}const We=document.createElement("canvas"),we=We.getContext("2d");function Rn(n,e,t){We.width=e,We.height=t;const i=[],a=n.frameDurations.length;for(let s=0;s<a;s++){const r=n.getFrame(s);we.clearRect(0,0,e,t),r instanceof ImageData?we.drawImage(Ei(r),0,0,e,t):we.drawImage(r,0,0,e,t),i.push(we.getImageData(0,0,e,t))}return{width:e,height:t,frameDurations:n.frameDurations,getFrame:s=>i[s]}}class An{constructor(e,t,i,a){this._animation=e,this._frameData=null;const s=r=>{this._frameData=r,t.requestRender()};this.frameCount=this._animation.frameDurations.length,this.width=this._animation.width,this.height=this._animation.height,this._playHandle=Fn(this._animation,i,a,s)}destroy(){this._playHandle.remove()}bindFrame(e,t,i){e.bindTexture(t,i),me(this._frameData)||(t.updateData(0,I,I,this._frameData.width,this._frameData.height,this._frameData),this._frameData=null)}}function En(n){switch(n.type){case"esriSMS":return`${n.style}.${n.path}`;case"esriSLS":return`${n.style}.${n.cap}`;case"esriSFS":return`${n.style}`;case"esriPFS":case"esriPMS":return n.imageData?`${n.imageData}${n.width}${n.height}`:`${n.url}${n.width}${n.height}`;default:return"mosaicHash"in n?n.mosaicHash:JSON.stringify(n)}}const mt=Zt(),pt="arial-unicode-ms-regular",Ee=126,Pt=Mt.getLogger("esri.views.2d.engine.webgl.TextureManager");function _t(n,e){const t=Math.round(ie(e)*window.devicePixelRatio),i=t>=128?2:4;return Math.min(n,t*i)}const ke=(n,e,t)=>Pt.error(new j(n,e,t));class Qe{static fromMosaic(e,t){return new Qe(e,t.page,t.sdf)}constructor(e,t,i){this.mosaicType=e,this.page=t,this.sdf=i}}class Pa{constructor(e,t,i){this._requestRender=e,this.resourceManager=t,this._allowNonPowerOfTwo=i,this._invalidFontsMap=new Map,this._sdfConverter=new Tn(Ee),this._bindingInfos=new Array,this._hashToBindingIndex=new Map,this._ongoingRasterizations=new Map,this._imageRequestQueue=new Ht({concurrency:10,process:async(a,s)=>{Wt(s);try{return await xt(a,{responseType:"image",signal:s})}catch(r){throw Ke(r)?r:new j("mapview-invalid-resource",`Could not fetch requested resource at ${a}`,r)}}}),this._spriteMosaic=new Xe(2048,2048,500),this._glyphSource=new zn(`${jt.fontsUrl}/{fontstack}/{range}.pbf`),this._glyphMosaic=new bn(1024,1024,this._glyphSource),this._rasterizer=new dn(t)}dispose(){this._spriteMosaic.dispose(),this._glyphMosaic.dispose(),this._rasterizer.dispose(),this._sdfConverter.dispose(),this._spriteMosaic=null,this._glyphMosaic=null,this._sdfConverter=null,this._hashToBindingIndex.clear(),this._hashToBindingIndex=null,this._bindingInfos=null,this._ongoingRasterizations.clear(),this._ongoingRasterizations=null,this._imageRequestQueue.clear(),this._imageRequestQueue=null}get sprites(){return this._spriteMosaic}get glyphs(){return this._glyphMosaic}async rasterizeItem(e,t,i,a){if(me(e))return ke("mapview-null-resource","Unable to rasterize null resource"),null;switch(e.type){case"text":case"esriTS":{const s=await this._rasterizeText(e,i,a);return s.forEach(r=>this._setTextureBinding(ve.GLYPH,r)),{glyphMosaicItems:s}}default:{if(Mi(e))return ke("mapview-invalid-type",`MapView does not support symbol type: ${e.type}`,e),null;const s=await this._rasterizeSpriteSymbol(e,t,a);return ki(s)&&s&&this._setTextureBinding(ve.SPRITE,s),{spriteMosaicItem:s}}}}bindTextures(e,t,i,a=!1){if(i.textureBinding===0)return;const s=this._bindingInfos[i.textureBinding-1],r=s.page,o=a?qe.LINEAR_MIPMAP_LINEAR:qe.LINEAR;switch(s.mosaicType){case ve.SPRITE:{const l=this.sprites.getWidth(r),h=this.sprites.getHeight(r),u=pe(mt,l,h);return this._spriteMosaic.bind(e,o,r,rt),t.setUniform1i("u_texture",rt),void t.setUniform2fv("u_mosaicSize",u)}case ve.GLYPH:{const l=this.glyphs.width,h=this.glyphs.height,u=pe(mt,l,h);return this._glyphMosaic.bind(e,o,r,st),t.setUniform1i("u_texture",st),void t.setUniform2fv("u_mosaicSize",u)}default:Pt.error("mapview-texture-manager",`Cannot handle unknown type ${s.mosaicType}`)}}_hashMosaic(e,t){return 1|e<<1|(t.sdf?1:0)<<2|t.page<<3}_setTextureBinding(e,t){const i=this._hashMosaic(e,t);if(!this._hashToBindingIndex.has(i)){const a=Qe.fromMosaic(e,t),s=this._bindingInfos.length+1;this._hashToBindingIndex.set(i,s),this._bindingInfos.push(a)}t.textureBinding=this._hashToBindingIndex.get(i)}async _rasterizeText(e,t,i){let a,s;if("cim"in e){const l=e;a=l.fontName,s=l.text}else{const l=e;a=fi(l.font),s=l.text}const r=this._invalidFontsMap.has(a),o=t||zi(gi(s)[0]);try{return await this._glyphMosaic.getGlyphItems(r?pt:a,o,i)}catch{return ke("mapview-invalid-resource",`Couldn't find font ${a}. Falling back to Arial Unicode MS Regular`),this._invalidFontsMap.set(a,!0),this._glyphMosaic.getGlyphItems(pt,o,i)}}async _rasterizeSpriteSymbol(e,t,i){if(Ti(e))return;const a=En(e);if(this._spriteMosaic.has(a))return this._spriteMosaic.getSpriteItem(a);if(ot(e)||Si(e)&&!Di(e))return this._handleAsyncResource(a,e,i);const s=wi,r=this._rasterizer.rasterizeJSONResource(e,s);if(r){const{size:o,image:l,sdf:h,simplePattern:u,rasterizationScale:c}=r;return this._addItemToMosaic(a,o,{type:"static",data:l},ye(e),h,u,c)}return new j("TextureManager","unrecognized or null rasterized image")}async _handleAsyncResource(e,t,i){if(this._ongoingRasterizations.has(e))return this._ongoingRasterizations.get(e);let a;a=ot(t)?this._handleSVG(t,e,i):this._handleImage(t,e,i),this._ongoingRasterizations.set(e,a);try{await a,this._ongoingRasterizations.delete(e)}catch{this._ongoingRasterizations.delete(e)}return a}async _handleSVG(e,t,i){const a=[Ee,Ee],s=await this._sdfConverter.draw(e.path,i);return this._addItemToMosaic(t,a,{type:"static",data:new Uint32Array(s.buffer)},!1,!0,!0)}async _handleGIFOrPNG(e,t,i){const a=lt(e);await this.resourceManager.fetchResource(a,i);let s=this.resourceManager.getResource(a);if(me(s))return new j("mapview-invalid-resource",`Could not fetch requested resource at ${a}.`);let r=s.width,o=s.height;if(s instanceof HTMLImageElement){e.type==="esriPMS"&&(r=Math.round(_t(s.width,ht(e))),o=Math.round(s.height*(r/s.width)));const c="cim"in e?e.cim.colorSubstitutions:void 0,{size:d,sdf:m,image:p}=this._rasterizer.rasterizeImageResource(r,o,s,c);return this._addItemToMosaic(t,d,{type:"static",data:p},ye(e),m,!1)}this._allowNonPowerOfTwo||(r=Ve(s.width+2*I)-2*I,o=Ve(s.height+2*I)-2*I),r===s.width&&o===s.height||(s=Rn(s,r,o));const l=e.animatedSymbolProperties||{},h=e.objectId,u=new An(s,this._requestRender,l,h);return this._addItemToMosaic(t,[u.width,u.height],{type:"animated",data:u},ye(e),!1,!1)}async _handleImage(e,t,i){var s;if($i(e)||Ci(e))return this._handleGIFOrPNG(e,t,i);const a=lt(e);try{let r;const o=this.resourceManager.getResource(a);if(Y(o)&&o instanceof HTMLImageElement)r=o;else{const{data:p}=await this._imageRequestQueue.push(a,{...i});r=p}if(Ii(a)){if("width"in e&&"height"in e)r.width=ie(e.width),r.height=ie(e.height);else if("cim"in e){const p=e.cim;r.width=ie((s=p.width)!=null?s:p.scaleX*p.size),r.height=ie(p.size)}}if(!r.width||!r.height)return null;let l=r.width,h=r.height;e.type==="esriPMS"&&(l=Math.round(_t(r.width,ht(e))),h=Math.round(r.height*(l/r.width)));const u="cim"in e?e.cim.colorSubstitutions:void 0,{size:c,sdf:d,image:m}=this._rasterizer.rasterizeImageResource(l,h,r,u);return this._addItemToMosaic(t,c,{type:"static",data:m},ye(e),d,!1)}catch(r){if(!Ke(r))return new j("mapview-invalid-resource",`Could not fetch requested resource at ${a}. ${r.message}`)}}_addItemToMosaic(e,t,i,a,s,r,o){return this._spriteMosaic.addSpriteItem(e,t,i,a,s,r,o)}}const Fa={shaders:{vertexShader:F("stencil/stencil.vert"),fragmentShader:F("stencil/stencil.frag")},attributes:new Map([["a_pos",0]])},kn=n=>n.replace("-","_").toUpperCase(),ft=n=>`#define ${kn(n)}
`;function gt(n){return{attributes:new Map([["a_pos",0],["a_tex",1]]),shaders:{vertexShader:ft(n)+F("blend/blend.vert"),fragmentShader:ft(n)+F("blend/blend.frag")}}}const vt=Mt.getLogger("esri.views.2d.engine.webgl.effects.blendEffects.BlendEffect");class Ra{constructor(){this._size=[0,0]}dispose(e){this._backBufferTexture=et(this._backBufferTexture),this._quad=et(this._quad)}draw(e,t,i,a,s){const{context:r,drawPhase:o}=e;if(this._setupShader(r),a&&a!=="normal"&&o!==Pi.LABEL)return void this._drawBlended(e,t,i,a,s);const l=gt("normal"),h=r.programCache.acquire(l.shaders.vertexShader,l.shaders.fragmentShader,l.attributes);if(!h)return void vt.error(new j("mapview-BlendEffect",'Error creating shader program for blend mode "normal"'));r.useProgram(h),t.setSamplingMode(i),r.bindTexture(t,0),h.setUniform1i("u_layerTexture",0),h.setUniform1f("u_opacity",s),r.setBlendingEnabled(!0),r.setBlendFunction(Q.ONE,Q.ONE_MINUS_SRC_ALPHA);const u=this._quad;u.draw(),u.unbind(),h.dispose()}_drawBlended(e,t,i,a,s){const{context:r,state:o,pixelRatio:l,inFadeTransition:h}=e,{size:u}=o,c=r.getBoundFramebufferObject();let d,m;if(Y(c)){const f=c.descriptor;d=f.width,m=f.height}else d=Math.round(l*u[0]),m=Math.round(l*u[1]);this._createOrResizeTexture(e,d,m);const p=this._backBufferTexture;c.copyToTexture(0,0,d,m,0,0,p),r.setStencilTestEnabled(!1),r.setStencilWriteMask(0),r.setBlendingEnabled(!0),r.setDepthTestEnabled(!1),r.setDepthWriteEnabled(!1);const _=gt(a),v=r.programCache.acquire(_.shaders.vertexShader,_.shaders.fragmentShader,_.attributes);if(!v)return void vt.error(new j("mapview-BlendEffect",`Error creating shader program for blend mode ${a}`));r.useProgram(v),p.setSamplingMode(i),r.bindTexture(p,0),v.setUniform1i("u_backbufferTexture",0),t.setSamplingMode(i),r.bindTexture(t,1),v.setUniform1i("u_layerTexture",1),v.setUniform1f("u_opacity",s),v.setUniform1f("u_inFadeOpacity",h?1:0),r.setBlendFunction(Q.ONE,Q.ZERO);const y=this._quad;y.draw(),y.unbind(),v.dispose(),r.setBlendFunction(Q.ONE,Q.ONE_MINUS_SRC_ALPHA)}_setupShader(e){this._quad||(this._quad=new Ut(e,[-1,-1,1,-1,-1,1,1,1]))}_createOrResizeTexture(e,t,i){const{context:a}=e;this._backBufferTexture!==null&&t===this._size[0]&&i===this._size[1]||(this._backBufferTexture?this._backBufferTexture.resize(t,i):this._backBufferTexture=new Ye(a,{target:Fi.TEXTURE_2D,pixelFormat:De.RGBA,internalFormat:De.RGBA,dataType:Ze.UNSIGNED_BYTE,wrapMode:Ri.CLAMP_TO_EDGE,samplingMode:qe.LINEAR,flipped:!1,width:t,height:i}),this._size[0]=t,this._size[1]=i)}}const Aa={shaders:{vertexShader:F("highlight/textured.vert"),fragmentShader:F("highlight/highlight.frag")},attributes:new Map([["a_position",0],["a_texcoord",1]])},Ea={shaders:{vertexShader:F("highlight/textured.vert"),fragmentShader:F("highlight/blur.frag")},attributes:new Map([["a_position",0],["a_texcoord",1]])},E=je("esri-2d-profiler");class ka{constructor(e,t){if(this._events=new Yt,this._entries=new Map,this._timings=new Li(10),this._currentContainer=null,this._currentPass=null,this._currentBrush=null,this._currentSummary=null,!E)return;this._ext=Bi(e.gl,{}),this._debugOutput=t;const i=e.gl;if(this.enableCommandLogging){for(const a in i)if(typeof i[a]=="function"){const s=i[a],r=a.includes("draw");i[a]=(...o)=>(this._events.emit("command",{container:this._currentContainer,pass:this._currentPass,brush:this._currentBrush,method:a,args:o,isDrawCommand:r}),this._currentSummary&&(this._currentSummary.commands++,r&&this._currentSummary.drawCommands++),s.apply(i,o))}}}get enableCommandLogging(){return!(typeof E=="object"&&E.disableCommands)}recordContainerStart(e){E&&(this._currentContainer=e)}recordContainerEnd(){E&&(this._currentContainer=null)}recordPassStart(e){E&&(this._currentPass=e,this._initSummary())}recordPassEnd(){E&&(this._currentPass=null,this._emitSummary())}recordBrushStart(e){E&&(this._currentBrush=e)}recordBrushEnd(){E&&(this._currentBrush=null)}recordStart(e){if(E&&Y(this._ext)){if(this._entries.has(e)){const i=this._entries.get(e),a=this._ext.resultAvailable(i.query),s=this._ext.disjoint();if(a&&!s){const r=this._ext.getResult(i.query)/1e6;let o=0;if(Y(this._timings.enqueue(r))){const u=this._timings.entries,c=u.length;let d=0;for(const m of u)d+=m;o=d/c}const l=r.toFixed(2),h=o?o.toFixed(2):"--";this.enableCommandLogging?(console.groupCollapsed(`Frame report for ${e}, ${l} ms (${h} last 10 avg)
${i.commandsLen} Commands (${i.drawCommands} draw)`),console.log("RenderPass breakdown: "),console.table(i.summaries),console.log("Commands: ",i.commands),console.groupEnd()):console.log(`Frame report for ${e}, ${l} ms (${h} last 10 avg)`),this._debugOutput.innerHTML=`${l} (${h})`}for(const r of i.handles)r.remove();this._ext.deleteQuery(i.query),this._entries.delete(e)}const t={name:e,query:this._ext.createQuery(),commands:[],commandsLen:0,drawCommands:0,summaries:[],handles:[]};this.enableCommandLogging&&(t.handles.push(this._events.on("command",i=>{t.commandsLen++,t.commands.push(i),i.isDrawCommand&&t.drawCommands++})),t.handles.push(this._events.on("summary",i=>{t.summaries.push(i)}))),this._ext.beginTimeElapsed(t.query),this._entries.set(e,t)}}recordEnd(e){E&&Y(this._ext)&&this._entries.has(e)&&this._ext.endTimeElapsed()}_initSummary(){this.enableCommandLogging&&(this._currentSummary={container:this._currentContainer,pass:this._currentPass,drawCommands:0,commands:0})}_emitSummary(){this.enableCommandLogging&&this._currentSummary&&this._events.emit("summary",this._currentSummary)}}const be=2,O=1,ue=0,ce=1,de=2;class Ln{constructor(e,t,i){this._debugMap=new Map,this._width=e*i,this._height=t*i,this._pixelRatio=i;const a=Math.ceil(this._width/O),s=Math.ceil(this._height/O);this._cols=a,this._rows=s,this._cells=Oi.create(a*s)}insertMetrics(e){const t=this._hasCollision(e);return t===ue&&this._markMetrics(e),t}getCellId(e,t){return e+t*this._cols}has(e){return this._cells.has(e)}hasRange(e,t){return this._cells.hasRange(e,t)}set(e){this._cells.set(e)}setRange(e,t){this._cells.setRange(e,t)}_collide(e,t,i,a){const s=e-i/2,r=t-a/2,o=s+i,l=r+a;if(o<0||l<0||s>this._width||r>this._height)return ce;const h=k(Math.floor(s/O),0,this._cols),u=k(Math.floor(r/O),0,this._rows),c=k(Math.ceil(o/O),0,this._cols),d=k(Math.ceil(l/O),0,this._rows);for(let m=u;m<=d;m++)for(let p=h;p<=c;p++){const _=this.getCellId(p,m);if(this.has(_))return de}return ue}_mark(e,t,i,a,s){const r=e-i/2,o=t-a/2,l=r+i,h=o+a,u=k(Math.floor(r/O),0,this._cols),c=k(Math.floor(o/O),0,this._rows),d=k(Math.ceil(l/O),0,this._cols),m=k(Math.ceil(h/O),0,this._rows);for(let p=c;p<=m;p++)for(let _=u;_<=d;_++){const v=this.getCellId(_,p);this._debugMap.set(v,s),this.set(v)}return!1}_hasCollision(e){const t=e.id;let i=0,a=0;e.save();do{const s=e.boundsCount;i+=s;for(let r=0;r<s;r++){const o=e.boundsComputedAnchorX(r),l=e.boundsComputedAnchorY(r),h=(e.boundsWidth(r)+be)*this._pixelRatio,u=(e.boundsHeight(r)+be)*this._pixelRatio;switch(this._collide(o,l,h,u)){case de:return de;case ce:a++}}}while(e.peekId()===t&&e.next());return e.restore(),i===a?ce:ue}_markMetrics(e){const t=e.id;e.save();do{const i=e.boundsCount;for(let a=0;a<i;a++){const s=e.boundsComputedAnchorX(a),r=e.boundsComputedAnchorY(a),o=(e.boundsWidth(a)+be)*this._pixelRatio,l=(e.boundsHeight(a)+be)*this._pixelRatio;this._mark(s,r,o,l,e.id)}}while(e.peekId()===t&&e.next());e.restore()}}const Bn=Math.PI;function Ft(n,e){switch(e.transformationType){case H.Additive:return On(n,e);case H.Constant:return Un(e,n);case H.ClampedLinear:return Nn(n,e);case H.Proportional:return Vn(n,e);case H.Stops:return Gn(n,e);case H.RealWorldSize:return qn(n,e);case H.Identity:return n;case H.Unknown:return null}}function B(n,e){return typeof n=="number"?n:Ft(e,n)}function On(n,e){return n+(B(e.minSize,n)||e.minDataValue)}function Un(n,e){const t=n.stops;let i=t&&t.length&&t[0].size;return i==null&&(i=n.minSize),B(i,e)}function Nn(n,e){const t=e.minDataValue,i=e.maxDataValue,a=(n-t)/(i-t),s=B(e.minSize,n),r=B(e.maxSize,n);return n<=t?s:n>=i?r:s+a*(r-s)}function Vn(n,e){const t=n/e.minDataValue,i=B(e.minSize,n),a=B(e.maxSize,n);let s=null;return s=t*i,k(s,i,a)}function Gn(n,e){const[t,i,a]=Hn(n,e.cache.ipData);if(t===i)return B(e.stops[t].size,n);{const s=B(e.stops[t].size,n);return s+(B(e.stops[i].size,n)-s)*a}}function qn(n,e){const t=Xt[e.valueUnit],i=B(e.minSize,n),a=B(e.maxSize,n),{valueRepresentation:s}=e;let r=null;return r=s==="area"?2*Math.sqrt(n/Bn)/t:s==="radius"||s==="distance"?2*n/t:n/t,k(r,i,a)}function Hn(n,e){if(!e)return;let t=0,i=e.length-1;return e.some((a,s)=>n<a?(i=s,!0):(t=s,!1)),[t,i,(n-e[t])/(e[i]-e[t])]}const Le=254,xe=255,oe=0;function K(n,e){const t=[];n.forEachTile(i=>t.push(i)),t.sort((i,a)=>i.instanceId-a.instanceId),t.forEach(i=>{Y(i.labelMetrics)&&i.isReady&&e(i,i.labelMetrics.getCursor())})}function Wn(n){return n.layer&&(n.layer.type==="feature"||n.layer.type==="csv"||n.layer.type==="geojson"||n.layer.type==="ogc-feature"||n.layer.type==="stream"||n.layer.type==="subtype-group"||n.layer.type==="wfs")}function jn(n){return e=>ie(Ft(e,n))}function Zn(n){const e=n!=null&&"visualVariables"in n&&n.visualVariables;if(!e)return null;for(const t of e)if(t.type==="size")return jn(t);return null}function Yn(n){for(const e of n){const t="featureReduction"in e&&e.featureReduction&&"labelingInfo"in e.featureReduction?e.featureReduction:void 0,i=[...e.labelingInfo||[],...(t==null?void 0:t.labelingInfo)||[]];if(!(!e.labelsVisible||!i.length)&&i.some(a=>a.deconflictionStrategy==="none"))return!0}return!1}function Xn(n,e){var l;if(!Wn(e))return;const t=e.layer.type==="subtype-group"?e.layer.sublayers.items:[e.layer],i=e.layer.geometryType,a=!Yn(t),s={};if(e.layer.type!=="subtype-group"){if(((l=e.tileRenderer)==null?void 0:l.type)==="heatmap")return;const h=Zn(e.layer.renderer);s[0]=h}const r=e.tileRenderer;if(me(r))return;const o=e.layer.visible&&!e.suspended;n.push({tileRenderer:r,vvEvaluators:s,deconflictionEnabled:a,geometryType:i,visible:o})}class Qn{run(e,t,i){const a=[];for(let s=e.length-1;s>=0;s--)Xn(a,e[s]);this._transformMetrics(a),this._runCollision(a,t,i)}_runCollision(e,t,i){const[a,s]=t.state.size,r=new Ln(a,s,t.pixelRatio);for(const{tileRenderer:o,deconflictionEnabled:l,visible:h}of e){const u=o.featuresView.attributeView;l?h?(this._prepare(o),this._collideVisible(r,o,i),this._collideInvisible(r,o)):K(o,(c,d)=>{for(;d.nextId();)u.setLabelMinZoom(d.id,xe)}):K(o,(c,d)=>{for(;d.nextId();)u.setLabelMinZoom(d.id,oe),h&&r.insertMetrics(d)})}}_isFiltered(e,t,i){const a=t.getFilterFlags(e),s=!i.hasFilter||!!(a&bi),r=me(i.featureEffect)||i.featureEffect.excludedLabelsVisible||!!(a&xi);return!(s&&r)}_prepare(e){const t=e.featuresView.attributeView,i=new Set;K(e,(a,s)=>{for(;s.nextId();)if(!i.has(s.id)){if(i.add(s.id),this._isFiltered(s.id,t,e.layerView)){t.setLabelMinZoom(s.id,Le);continue}t.getLabelMinZoom(s.id)!==oe?t.setLabelMinZoom(s.id,xe):t.setLabelMinZoom(s.id,oe)}})}_collideVisible(e,t,i){const a=t.featuresView.attributeView,s=new Set;K(t,(r,o)=>{for(;o.nextId();)if(!s.has(o.id))if(r.key.level===i){if(a.getLabelMinZoom(o.id)===0)switch(e.insertMetrics(o)){case ce:break;case de:a.setLabelMinZoom(o.id,Le),s.add(o.id);break;case ue:a.setLabelMinZoom(o.id,oe),s.add(o.id)}}else a.setLabelMinZoom(o.id,Le)})}_collideInvisible(e,t){const i=t.featuresView.attributeView,a=new Set;K(t,(s,r)=>{for(;r.nextId();)if(!a.has(r.id)&&i.getLabelMinZoom(r.id)===xe)switch(e.insertMetrics(r)){case ce:break;case de:i.setLabelMinZoom(r.id,xe),a.add(r.id);break;case ue:i.setLabelMinZoom(r.id,oe),a.add(r.id)}})}_transformMetrics(e){for(const{tileRenderer:t,geometryType:i,vvEvaluators:a}of e)K(t,(s,r)=>{const o=t.featuresView.attributeView,l=s.transforms.labelMat2d;l[4]=Math.round(l[4]),l[5]=Math.round(l[5]);const h=i==="polyline";for(;r.next();){const u=r.boundsCount,c=r.anchorX,d=r.anchorY;let m=r.size;const p=a[0];if(Y(p)){const y=p(o.getVVSize(r.id));m=isNaN(y)||y==null||y===1/0?m:y}const _=r.directionX*(m/2),v=r.directionY*(m/2);for(let y=0;y<u;y++){let f=c,g=r.anchorY;if(h){let w=f+r.boundsX(y)+_,b=g+r.boundsY(y)+v;w=l[0]*w+l[2]*b+l[4],b=l[1]*w+l[3]*b+l[5],r.setBoundsComputedAnchorX(y,Math.floor(w)),r.setBoundsComputedAnchorY(y,Math.floor(b))}else{f=l[0]*c+l[2]*d+l[4],g=l[1]*c+l[3]*d+l[5];const w=f+r.boundsX(y)+_,b=g+r.boundsY(y)+v;r.setBoundsComputedAnchorX(y,w),r.setBoundsComputedAnchorY(y,b)}}}})}}const Jn=32;let Z=class extends Qt(ae){constructor(n){super(n),this._applyVisibilityPassThrottled=Jt(this._applyVisibilityPass,Jn,this),this.lastUpdateId=-1,this.updateRequested=!1,this.view=null}initialize(){this.collisionEngine=new Qn}destroy(){this.collisionEngine=null,this._applyVisibilityPassThrottled=Kt(this._applyVisibilityPassThrottled)}get updating(){return je("esri-2d-log-updating")&&console.log(`Updating LabelManager ${this.updateRequested}:
-> updateRequested: ${this.updateRequested}`),this.updateRequested}update(n){this._applyVisibilityPassThrottled(n)}viewChange(){this.requestUpdate()}requestUpdate(){var n;this.updateRequested||(this.updateRequested=!0,(n=this.view)==null||n.requestUpdate())}processUpdate(n){this._set("updateParameters",n),this.updateRequested&&(this.updateRequested=!1,this.update(n))}_applyVisibilityPass(n){const e=this.view;if(e)try{const t=e.featuresTilingScheme.getClosestInfoForScale(n.state.scale).level;this.collisionEngine.run(e.allLayerViews.items,n,t)}catch{}}};M([D()],Z.prototype,"updateRequested",void 0),M([D({readOnly:!0})],Z.prototype,"updateParameters",void 0),M([D()],Z.prototype,"updating",null),M([D()],Z.prototype,"view",void 0),Z=M([ne("esri.views.2d.layers.labels.LabelManager")],Z);const La=Z,Me="esri-zoom-box",ze={container:`${Me}__container`,overlay:`${Me}__overlay`,background:`${Me}__overlay-background`,box:`${Me}__outline`},Be={zoom:"Shift",counter:"Ctrl"};let le=class extends ae{constructor(n){super(n),this._container=null,this._overlay=null,this._backgroundShape=null,this._boxShape=null,this._box={x:0,y:0,width:0,height:0},this._rafId=null,this._handles=null,this._redraw=this._redraw.bind(this)}destroy(){this.view=null}set view(n){this._handles&&this._handles.forEach(e=>{e.remove()}),this._handles=null,this._destroyOverlay(),this._set("view",n),n&&(n.on("drag",[Be.zoom],e=>this._handleDrag(e,1),tt.INTERNAL),n.on("drag",[Be.zoom,Be.counter],e=>this._handleDrag(e,-1),tt.INTERNAL))}_start(){this._createContainer(),this._createOverlay(),this.navigation.begin()}_update(n,e,t,i){this._box.x=n,this._box.y=e,this._box.width=t,this._box.height=i,this._rafId||(this._rafId=requestAnimationFrame(this._redraw))}_end(n,e,t,i,a){const s=this.view,r=s.toMap(ei(n+.5*t,e+.5*i));let o=Math.max(t/s.width,i/s.height);a===-1&&(o=1/o),this._destroyOverlay(),this.navigation.end(),s.goTo({center:r,scale:s.scale*o})}_updateBox(n,e,t,i){const a=this._boxShape;a.setAttributeNS(null,"x",""+n),a.setAttributeNS(null,"y",""+e),a.setAttributeNS(null,"width",""+t),a.setAttributeNS(null,"height",""+i),a.setAttributeNS(null,"class",ze.box)}_updateBackground(n,e,t,i){this._backgroundShape.setAttributeNS(null,"d",this._toSVGPath(n,e,t,i,this.view.width,this.view.height))}_createContainer(){const n=document.createElement("div");n.className=ze.container,this.view.root.appendChild(n),this._container=n}_createOverlay(){const n=this.view.width,e=this.view.height,t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttributeNS(null,"d","M 0 0 L "+n+" 0 L "+n+" "+e+" L 0 "+e+" Z"),t.setAttributeNS(null,"class",ze.background);const i=document.createElementNS("http://www.w3.org/2000/svg","rect"),a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),a.setAttributeNS(null,"class",ze.overlay),a.appendChild(t),a.appendChild(i),this._container.appendChild(a),this._backgroundShape=t,this._boxShape=i,this._overlay=a}_destroyOverlay(){this._container&&this._container.parentNode&&this._container.parentNode.removeChild(this._container),this._container=this._backgroundShape=this._boxShape=this._overlay=null}_toSVGPath(n,e,t,i,a,s){const r=n+t,o=e+i;return"M 0 0 L "+a+" 0 L "+a+" "+s+" L 0 "+s+" ZM "+n+" "+e+" L "+n+" "+o+" L "+r+" "+o+" L "+r+" "+e+" Z"}_handleDrag(n,e){const t=n.x,i=n.y,a=n.origin.x,s=n.origin.y;let r,o,l,h;switch(t>a?(r=a,l=t-a):(r=t,l=a-t),i>s?(o=s,h=i-s):(o=i,h=s-i),n.action){case"start":this._start();break;case"update":this._update(r,o,l,h);break;case"end":this._end(r,o,l,h,e)}n.stopPropagation()}_redraw(){if(!this._rafId||(this._rafId=null,!this._overlay))return;const{x:n,y:e,width:t,height:i}=this._box;this._updateBox(n,e,t,i),this._updateBackground(n,e,t,i),this._rafId=requestAnimationFrame(this._redraw)}};M([D()],le.prototype,"navigation",void 0),M([D()],le.prototype,"view",null),le=M([ne("esri.views.2d.navigation.ZoomBox")],le);const Kn=le;class W{constructor(e){this._gain=e,this.lastValue=void 0,this.filteredDelta=void 0}update(e){if(this.hasLastValue()){const t=this.computeDelta(e);this._updateDelta(t)}this.lastValue=e}reset(){this.lastValue=void 0,this.filteredDelta=void 0}hasLastValue(){return this.lastValue!==void 0}hasFilteredDelta(){return this.filteredDelta!==void 0}computeDelta(e){return this.lastValue===void 0?NaN:e-this.lastValue}_updateDelta(e){this.filteredDelta!==void 0?this.filteredDelta=(1-this._gain)*this.filteredDelta+this._gain*e:this.filteredDelta=e}}class Je{constructor(e,t,i){this._initialVelocity=e,this._stopVelocity=t,this._friction=i,this._duration=Math.abs(Math.log(Math.abs(this._initialVelocity)/this._stopVelocity)/Math.log(1-this._friction))}get duration(){return this._duration}isFinished(e){return e>this.duration}get friction(){return this._friction}value(e){return this.valueFromInitialVelocity(this._initialVelocity,e)}valueDelta(e,t){const i=this.value(e);return this.value(e+t)-i}valueFromInitialVelocity(e,t){t=Math.min(t,this.duration);const i=1-this.friction;return e*(i**t-1)/Math.log(i)}}class ea extends Je{constructor(e,t,i,a,s){super(e,t,i),this._sceneVelocity=a,this.direction=s}value(e){return super.valueFromInitialVelocity(this._sceneVelocity,e)}}class ta{constructor(e=300,t=12,i=.84){this._minimumInitialVelocity=e,this._stopVelocity=t,this._friction=i,this.enabled=!0,this._time=new W(.6),this._screen=[new W(.4),new W(.4)],this._scene=[new W(.6),new W(.6),new W(.6)],this._tmpDirection=zt()}add(e,t,i){if(this.enabled){if(this._time.hasLastValue()&&this._time.computeDelta(i)<.015)return;this._screen[0].update(e[0]),this._screen[1].update(e[1]),this._scene[0].update(t[0]),this._scene[1].update(t[1]),this._scene[2].update(t[2]),this._time.update(i)}}reset(){this._screen[0].reset(),this._screen[1].reset(),this._scene[0].reset(),this._scene[1].reset(),this._scene[2].reset(),this._time.reset()}evaluateMomentum(){if(!this.enabled||!this._screen[0].hasFilteredDelta()||!this._time.hasFilteredDelta())return null;const e=this._screen[0].filteredDelta,t=this._screen[1].filteredDelta,i=e==null||t==null?0:Math.sqrt(e*e+t*t),a=this._time.filteredDelta,s=a==null||i==null?0:i/a;return Math.abs(s)<this._minimumInitialVelocity?null:this.createMomentum(s,this._stopVelocity,this._friction)}createMomentum(e,t,i){var r,o,l;ti(this._tmpDirection,(r=this._scene[0].filteredDelta)!=null?r:0,(o=this._scene[1].filteredDelta)!=null?o:0,(l=this._scene[2].filteredDelta)!=null?l:0);const a=ii(this._tmpDirection);a>0&&Tt(this._tmpDirection,this._tmpDirection,1/a);const s=this._time.filteredDelta;return new ea(e,t,i,s==null?0:a/s,this._tmpDirection)}}let ee=class extends ae{constructor(n){super(n),this.animationTime=0,this.momentumEstimator=new ta(500,6,.92),this.momentum=null,this.tmpMomentum=zt(),this.momentumFinished=!1,this.viewpoint=new Pe({targetGeometry:new Fe,scale:0,rotation:0}),this._previousDrag=null,St(()=>this.momentumFinished,()=>this.navigation.stop())}begin(n,e){this.navigation.begin(),this.momentumEstimator.reset(),this.addToEstimator(e),this._previousDrag=e}update(n,e){this.addToEstimator(e);let t=e.center.x,i=e.center.y;const a=this._previousDrag;t=a?a.center.x-t:-t,i=a?i-a.center.y:i,n.viewpoint=Se(this.viewpoint,n.viewpoint,[t||0,i||0]),this._previousDrag=e}end(n,e){this.addToEstimator(e);const t=n.navigation.momentumEnabled;this.momentum=t?this.momentumEstimator.evaluateMomentum():null,this.animationTime=0,this.momentum&&this.onAnimationUpdate(n),this._previousDrag=null,this.navigation.end()}addToEstimator(n){const e=n.center.x,t=n.center.y,i=ni(-e,t),a=ai(-e,t,0);this.momentumEstimator.add(i,a,.001*n.timestamp)}onAnimationUpdate(n){var e;(e=this.navigation.animationManager)==null||e.animateContinous(n.viewpoint,(t,i)=>{const{momentum:a,animationTime:s,tmpMomentum:r}=this,o=.001*i;if(!(this.momentumFinished=!a||a.isFinished(s))){const l=a.valueDelta(s,o);Tt(r,a.direction,l),Se(t,t,r),n.constraints.constrainByGeometry(t)}this.animationTime+=o})}stopMomentumNavigation(){this.momentum&&(this.momentumEstimator.reset(),this.momentum=null,this.navigation.stop())}};M([D()],ee.prototype,"momentumFinished",void 0),M([D()],ee.prototype,"viewpoint",void 0),M([D()],ee.prototype,"navigation",void 0),ee=M([ne("esri.views.2d.navigation.actions.Pan")],ee);const ia=ee;class Rt{constructor(e=2.5,t=.01,i=.95,a=12){this._minimumInitialVelocity=e,this._stopVelocity=t,this._friction=i,this._maxVelocity=a,this.enabled=!0,this.value=new W(.8),this.time=new W(.3)}add(e,t){if(this.enabled&&t!=null){if(this.time.hasLastValue()){if(this.time.computeDelta(t)<.01)return;if(this.value.hasFilteredDelta()){const i=this.value.computeDelta(e);this.value.filteredDelta*i<0&&this.value.reset()}}this.time.update(t),this.value.update(e)}}reset(){this.value.reset(),this.time.reset()}evaluateMomentum(){if(!this.enabled||!this.value.hasFilteredDelta()||!this.time.hasFilteredDelta())return null;let e=this.value.filteredDelta/this.time.filteredDelta;return e=k(e,-this._maxVelocity,this._maxVelocity),Math.abs(e)<this._minimumInitialVelocity?null:this.createMomentum(e,this._stopVelocity,this._friction)}createMomentum(e,t,i){return new Je(e,t,i)}}class na extends Rt{constructor(e=3,t=.01,i=.95,a=12){super(e,t,i,a)}add(e,t){const i=this.value.lastValue;if(i!=null){let a=e-i;for(;a>Math.PI;)a-=2*Math.PI;for(;a<-Math.PI;)a+=2*Math.PI;e=i+a}super.add(e,t)}}class aa extends Je{constructor(e,t,i){super(e,t,i)}value(e){const t=super.value(e);return Math.exp(t)}valueDelta(e,t){const i=super.value(e),a=super.value(e+t)-i;return Math.exp(a)}}class sa extends Rt{constructor(e=2.5,t=.01,i=.95,a=12){super(e,t,i,a)}add(e,t){super.add(Math.log(e),t)}createMomentum(e,t,i){return new aa(e,t,i)}}let te=class extends ae{constructor(n){super(n),this._animationTime=0,this._momentumFinished=!1,this._previousAngle=0,this._previousRadius=0,this._previousCenter=null,this._rotationMomentumEstimator=new na(.6,.15,.95),this._rotationDirection=1,this._startAngle=0,this._startRadius=0,this._updateTimestamp=null,this._zoomDirection=1,this._zoomMomentumEstimator=new sa,this._zoomOnly=null,this.zoomMomentum=null,this.rotateMomentum=null,this.viewpoint=new Pe({targetGeometry:new Fe,scale:0,rotation:0}),this.addHandles(St(()=>this._momentumFinished,()=>this.navigation.stop()))}begin(n,e){this.navigation.begin(),this._rotationMomentumEstimator.reset(),this._zoomMomentumEstimator.reset(),this._zoomOnly=null,this._previousAngle=this._startAngle=e.angle,this._previousRadius=this._startRadius=e.radius,this._previousCenter=e.center,this._updateTimestamp=null,n.constraints.rotationEnabled&&this.addToRotateEstimator(0,e.timestamp),this.addToZoomEstimator(e,1)}update(n,e){this._updateTimestamp===null&&(this._updateTimestamp=e.timestamp);const t=e.angle,i=e.radius,a=e.center,s=Math.abs(180*(t-this._startAngle)/Math.PI),r=Math.abs(i-this._startRadius),o=this._startRadius/i;if(this._previousRadius&&this._previousCenter){const l=i/this._previousRadius;let h=180*(t-this._previousAngle)/Math.PI;this._rotationDirection=h>=0?1:-1,this._zoomDirection=l>=1?1:-1,n.constraints.rotationEnabled?(this._zoomOnly===null&&e.timestamp-this._updateTimestamp>200&&(this._zoomOnly=r-s>0),this._zoomOnly===null||this._zoomOnly?h=0:this.addToRotateEstimator(t-this._startAngle,e.timestamp)):h=0,this.addToZoomEstimator(e,o),this.navigation.setViewpoint([a.x,a.y],1/l,h,[this._previousCenter.x-a.x,a.y-this._previousCenter.y])}this._previousAngle=t,this._previousRadius=i,this._previousCenter=a}end(n){this.rotateMomentum=this._rotationMomentumEstimator.evaluateMomentum(),this.zoomMomentum=this._zoomMomentumEstimator.evaluateMomentum(),this._animationTime=0,(this.rotateMomentum||this.zoomMomentum)&&this.onAnimationUpdate(n),this.navigation.end()}addToRotateEstimator(n,e){this._rotationMomentumEstimator.add(n,.001*e)}addToZoomEstimator(n,e){this._zoomMomentumEstimator.add(e,.001*n.timestamp)}canZoomIn(n){const e=n.scale,t=n.constraints.effectiveMaxScale;return t===0||e>t}canZoomOut(n){const e=n.scale,t=n.constraints.effectiveMinScale;return t===0||e<t}onAnimationUpdate(n){var e;(e=this.navigation.animationManager)==null||e.animateContinous(n.viewpoint,(t,i)=>{const a=!this.canZoomIn(n)&&this._zoomDirection>1||!this.canZoomOut(n)&&this._zoomDirection<1,s=!this.rotateMomentum||this.rotateMomentum.isFinished(this._animationTime),r=a||!this.zoomMomentum||this.zoomMomentum.isFinished(this._animationTime),o=.001*i;if(this._momentumFinished=s&&r,!this._momentumFinished){const l=this.rotateMomentum?Math.abs(this.rotateMomentum.valueDelta(this._animationTime,o))*this._rotationDirection*180/Math.PI:0;let h=this.zoomMomentum?Math.abs(this.zoomMomentum.valueDelta(this._animationTime,o)):1;const u=_e(),c=_e();if(this._previousCenter){pe(u,this._previousCenter.x,this._previousCenter.y),si(c,n.size,n.padding),ri(u,u,c);const{constraints:d,scale:m}=n,p=m*h;h<1&&!d.canZoomInTo(p)?(h=m/d.effectiveMaxScale,this.zoomMomentum=null,this.rotateMomentum=null):h>1&&!d.canZoomOutTo(p)&&(h=m/d.effectiveMinScale,this.zoomMomentum=null,this.rotateMomentum=null),oi(t,n.viewpoint,h,l,u,n.size),n.constraints.constrainByGeometry(t)}}this._animationTime+=o})}stopMomentumNavigation(){(this.rotateMomentum||this.zoomMomentum)&&(this.rotateMomentum&&(this._rotationMomentumEstimator.reset(),this.rotateMomentum=null),this.zoomMomentum&&(this._zoomMomentumEstimator.reset(),this.zoomMomentum=null),this.navigation.stop())}};M([D()],te.prototype,"_momentumFinished",void 0),M([D()],te.prototype,"viewpoint",void 0),M([D()],te.prototype,"navigation",void 0),te=M([ne("esri.views.2d.navigation.actions.Pinch")],te);const ra=te,Oe=_e(),yt=_e();let he=class extends ae{constructor(n){super(n),this._previousCenter=_e(),this.viewpoint=new Pe({targetGeometry:new Fe,scale:0,rotation:0})}begin(n,e){this.navigation.begin(),pe(this._previousCenter,e.center.x,e.center.y)}update(n,e){const{state:{size:t,padding:i}}=n;pe(Oe,e.center.x,e.center.y),li(yt,t,i),n.viewpoint=Ge(this.viewpoint,n.state.paddedViewState.viewpoint,hi(yt,this._previousCenter,Oe)),ui(this._previousCenter,Oe)}end(){this.navigation.end()}};M([D()],he.prototype,"viewpoint",void 0),M([D()],he.prototype,"navigation",void 0),he=M([ne("esri.views.2d.actions.Rotate")],he);const oa=he,Te=10,wt=1,Ue=new Pe({targetGeometry:new Fe}),Ne=[0,0],bt=250;let U=class extends ae{constructor(n){super(n),this._endTimer=null,this._lastEventTimestamp=null,this.animationManager=null,this.interacting=!1}initialize(){this.pan=new ia({navigation:this}),this.rotate=new oa({navigation:this}),this.pinch=new ra({navigation:this}),this.zoomBox=new Kn({view:this.view,navigation:this})}destroy(){this.pan=fe(this.pan),this.rotate=fe(this.rotate),this.pinch=fe(this.pinch),this.zoomBox=fe(this.zoomBox),this.animationManager=null}begin(){this._set("interacting",!0)}end(){this._lastEventTimestamp=performance.now(),this._startTimer(bt)}async zoom(n,e=this._getDefaultAnchor()){if(this.stop(),this.begin(),this.view.constraints.snapToZoom&&this.view.constraints.effectiveLODs)return n<1?this.zoomIn(e):this.zoomOut(e);this.setViewpoint(e,n,0,[0,0])}async zoomIn(n){const e=this.view,t=e.constraints.snapToNextScale(e.scale);return this._zoomToScale(t,n)}async zoomOut(n){const e=this.view,t=e.constraints.snapToPreviousScale(e.scale);return this._zoomToScale(t,n)}setViewpoint(n,e,t,i){this.begin(),this.view.state.viewpoint=this._scaleRotateTranslateViewpoint(this.view.viewpoint,n,e,t,i),this.end()}setViewpointImmediate(n,e=0,t=[0,0],i=this._getDefaultAnchor()){this.view.state.viewpoint=this._scaleRotateTranslateViewpoint(this.view.viewpoint,i,n,e,t)}continousRotateClockwise(){var e;const n=this.get("view.viewpoint");(e=this.animationManager)==null||e.animateContinous(n,t=>{Ge(t,t,-wt)})}continousRotateCounterclockwise(){var e;const n=this.get("view.viewpoint");(e=this.animationManager)==null||e.animateContinous(n,t=>{Ge(t,t,wt)})}resetRotation(){this.view.rotation=0}continousPanLeft(){this._continuousPan([-Te,0])}continousPanRight(){this._continuousPan([Te,0])}continousPanUp(){this._continuousPan([0,Te])}continousPanDown(){this._continuousPan([0,-Te])}stop(){var n;this.pan.stopMomentumNavigation(),(n=this.animationManager)==null||n.stop(),this.end(),this._endTimer!==null&&(clearTimeout(this._endTimer),this._endTimer=null,this._set("interacting",!1))}_continuousPan(n){var t;const e=this.view.viewpoint;(t=this.animationManager)==null||t.animateContinous(e,i=>{Se(i,i,n),this.view.constraints.constrainByGeometry(i)})}_startTimer(n){return this._endTimer!==null||(this._endTimer=setTimeout(()=>{var t;this._endTimer=null;const e=performance.now()-((t=this._lastEventTimestamp)!=null?t:0);e<bt?this._endTimer=this._startTimer(e):this._set("interacting",!1)},n)),this._endTimer}_getDefaultAnchor(){const{size:n,padding:{left:e,right:t,top:i,bottom:a}}=this.view;return Ne[0]=.5*(n[0]-t+e),Ne[1]=.5*(n[1]-a+i),Ne}async _zoomToScale(n,e=this._getDefaultAnchor()){const{view:t}=this,{constraints:i,scale:a,viewpoint:s,size:r,padding:o}=t,l=i.canZoomInTo(n),h=i.canZoomOutTo(n);if(!(n<a&&!l||n>a&&!h))return it(Ue,s,n/a,0,e,r,o),i.constrainByGeometry(Ue),t.goTo(Ue,{animate:!0})}_scaleRotateTranslateViewpoint(n,e,t,i,a){const{view:s}=this,{size:r,padding:o,constraints:l,scale:h,viewpoint:u}=s,c=h*t,d=l.canZoomInTo(c),m=l.canZoomOutTo(c);return(t<1&&!d||t>1&&!m)&&(t=1),Se(u,u,a),it(n,u,t,i,e,r,o),l.constrainByGeometry(n)}};M([D()],U.prototype,"animationManager",void 0),M([D({type:Boolean,readOnly:!0})],U.prototype,"interacting",void 0),M([D()],U.prototype,"pan",void 0),M([D()],U.prototype,"pinch",void 0),M([D()],U.prototype,"rotate",void 0),M([D()],U.prototype,"view",void 0),M([D()],U.prototype,"zoomBox",void 0),U=M([ne("esri.views.2d.navigation.MapViewNavigation")],U);const Ba=U,la={shaders:{vertexShader:F("magnifier/magnifier.vert"),fragmentShader:F("magnifier/magnifier.frag")},attributes:new Map([["a_pos",0]])};function Oa(n){return Ot(n,la)}export{ln as C,Pa as J,Ra as _,Ea as a,Ki as b,ka as c,Oa as d,Ia as e,la as f,$a as i,Ca as n,Fa as r,Aa as t,La as u,Ba as y};
