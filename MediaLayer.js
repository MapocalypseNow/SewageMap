import{f as r,A as v,je as Ie,k as l,fj as Z,O as G,y as a,b0 as h,jd as ye,u as ge,aQ as W,s as q,r as L,n as N,aY as B,kj as be,dq as D,eq as oe,kk as A,kl as ce,bg as re,b8 as I,G as Me,at as J,w as ie,gz as Ee,au as Le,km as Se,g as Pe,U as ee,cH as Oe,iH as pe,da as ve,jY as xe,jX as Ce,jU as Te,jW as Ve,kn as He,a7 as Ue,V as ke,j as te,em as We,aV as Ae,aS as Ge,aE as Ne,ah as Be,ej as ze,ct as Fe,cv as qe,e1 as Je,e2 as Ye,fi as De,iO as Ke,iP as Qe,dk as Xe,dm as Ze,dy as et,d as tt}from"./index.js";import{h as S,j as nt,u as st}from"./perspectiveUtils.js";import{t as ot,e as ne}from"./mat3f64.js";import{t as rt}from"./resourceExtension.js";import{o as it}from"./BoundsStore.js";import"./normalizeUtilsSync.js";import"./PooledRBush.js";let se=class extends Ie{projectOrWarn(e,t){if(l(e))return e;const{geometry:s,pending:n}=Z(e,t);return n?null:n||s?s:(G.getLogger(this.declaredClass).warn("geometry could not be projected to the spatial reference",{georeference:this,geometry:e,sourceSpatialReference:e.spatialReference,targetSpatialReference:t}),null)}};se=r([v("esri.layers.support.GeoreferenceBase")],se);const K=se,Q=ne(),u=I();let z=class extends Me{constructor(){super(...arguments),this.sourcePoint=null,this.mapPoint=null}};r([a()],z.prototype,"sourcePoint",void 0),r([a({type:h})],z.prototype,"mapPoint",void 0),z=r([v("esri.layers.support.ControlPoint")],z);let g=class extends ye(K){constructor(e){super(e),this.controlPoints=null,this.height=0,this.type="control-points",this.width=0}readControlPoints(e,t){const s=ge.fromJSON(t.spatialReference),n=ot(...t.coefficients,1);return e.map(o=>(W(u,o.x,o.y),S(u,u,n),{sourcePoint:o,mapPoint:new h({x:u[0],y:u[1],spatialReference:s})}))}writeControlPoints(e,t,s,n){if(l(this.transform)){const o=new q("web-document-write:invalid-georeference","Invalid 'controlPoints', 'width', 'height' configuration.",{layer:n==null?void 0:n.layer,georeference:this});n!=null&&n.messages?n.messages.push(o):G.getLogger(this.declaredClass).error(o.name,o.message)}else L(e)&&m(e[0])&&(t.controlPoints=e.map(o=>{const i=N(o.sourcePoint);return{x:i.x,y:i.y}}),t.spatialReference=e[0].mapPoint.spatialReference.toJSON(),t.coefficients=this.transform.slice(0,8))}get coords(){if(l(this.controlPoints))return null;const e=this._updateTransform(Q);if(l(e)||!m(this.controlPoints[0]))return null;const t=this.controlPoints[0].mapPoint.spatialReference;return ut(e,this.width,this.height,t)}set coords(e){if(l(this.controlPoints)||!m(this.controlPoints[0]))return;const t=this.controlPoints[0].mapPoint.spatialReference;if(e=this.projectOrWarn(e,t),l(e))return;const{width:s,height:n}=this,{rings:[[o,i,c,p]]}=e,d={sourcePoint:B(0,n),mapPoint:new h({x:o[0],y:o[1],spatialReference:t})},y={sourcePoint:B(0,0),mapPoint:new h({x:i[0],y:i[1],spatialReference:t})},P={sourcePoint:B(s,0),mapPoint:new h({x:c[0],y:c[1],spatialReference:t})},b={sourcePoint:B(s,n),mapPoint:new h({x:p[0],y:p[1],spatialReference:t})};m(d)&&m(y)&&m(P)&&m(b)&&(ue(Q,d,y,P,b),this.controlPoints=N(this.controlPoints).map(({sourcePoint:x})=>(W(u,x.x,x.y),S(u,u,Q),{sourcePoint:x,mapPoint:new h({x:u[0],y:u[1],spatialReference:t})})))}get inverseTransform(){return l(this.transform)?null:be(ne(),this.transform)}get transform(){return this._updateTransform()}toMap(e){if(l(e)||l(this.transform)||l(this.controlPoints)||!m(this.controlPoints[0]))return null;W(u,e.x,e.y);const t=this.controlPoints[0].mapPoint.spatialReference;return S(u,u,this.transform),new h({x:u[0],y:u[1],spatialReference:t})}toSource(e){if(l(e)||l(this.inverseTransform)||l(this.controlPoints)||!m(this.controlPoints[0]))return null;const t=this.controlPoints[0].mapPoint.spatialReference;return e=e.normalize(),e=Z(e,t).geometry,l(e)?null:(W(u,e.x,e.y),S(u,u,this.inverseTransform),B(u[0],u[1]))}_updateTransform(e){const{controlPoints:t,width:s,height:n}=this;if(l(t)||!(s>0)||!(n>0))return null;const[o,i,c,p]=t;if(!m(o))return null;const d=o.mapPoint.spatialReference,y=this._projectControlPoint(i,d),P=this._projectControlPoint(c,d),b=this._projectControlPoint(p,d);if(!y.valid||!P.valid||!b.valid||!m(y.controlPoint))return null;l(e)&&(e=ne());let x=null;return x=m(P.controlPoint)&&m(b.controlPoint)?ue(e,o,y.controlPoint,P.controlPoint,b.controlPoint):m(P.controlPoint)?lt(e,o,y.controlPoint,P.controlPoint):at(e,o,y.controlPoint),x.every(je=>je===0)?null:x}_projectControlPoint(e,t){if(!m(e))return{valid:!0,controlPoint:e};const{sourcePoint:s,mapPoint:n}=e,{geometry:o,pending:i}=Z(n,t);return i?{valid:!1,controlPoint:null}:i||o?{valid:!0,controlPoint:{sourcePoint:s,mapPoint:o}}:(G.getLogger(this.declaredClass).warn("map point could not be projected to the spatial reference",{georeference:this,controlPoint:e,sourceSpatialReference:n.spatialReference,targetSpatialReference:t}),{valid:!1,controlPoint:null})}};function m(e){return L(e)&&L(e.sourcePoint)&&L(e.mapPoint)}r([a({type:[z],json:{write:{allowNull:!1,isRequired:!0}}})],g.prototype,"controlPoints",void 0),r([D("controlPoints")],g.prototype,"readControlPoints",null),r([oe("controlPoints")],g.prototype,"writeControlPoints",null),r([a()],g.prototype,"coords",null),r([a({json:{write:!0}})],g.prototype,"height",void 0),r([a({readOnly:!0})],g.prototype,"inverseTransform",null),r([a({readOnly:!0})],g.prototype,"transform",null),r([a({json:{write:!0}})],g.prototype,"width",void 0),g=r([v("esri.layers.support.ControlPointsGeoreference")],g);const w=I(),R=I(),T=I(),O=I(),$=I(),_=I(),V=I(),C=I(),Y=Math.PI/2;function j(e,t,s){W(e,s.sourcePoint.x,s.sourcePoint.y),W(t,s.mapPoint.x,s.mapPoint.y)}function at(e,t,s){return j(w,$,t),j(R,_,s),A(T,R,w,Y),A(O,w,R,Y),A(V,_,$,-Y),A(C,$,_,-Y),ae(e,w,R,T,O,$,_,V,C)}function lt(e,t,s,n){return j(w,$,t),j(R,_,s),j(T,V,n),ce(O,w,R,.5),A(O,T,O,Math.PI),ce(C,$,_,.5),A(C,V,C,Math.PI),ae(e,w,R,T,O,$,_,V,C)}function ue(e,t,s,n,o){return j(w,$,t),j(R,_,s),j(T,V,n),j(O,C,o),ae(e,w,R,T,O,$,_,V,C)}const ct=new Array(8).fill(0),pt=new Array(8).fill(0);function de(e,t,s,n,o){return e[0]=t[0],e[1]=t[1],e[2]=s[0],e[3]=s[1],e[4]=n[0],e[5]=n[1],e[6]=o[0],e[7]=o[1],e}function ae(e,t,s,n,o,i,c,p,d){return nt(e,de(ct,t,s,n,o),de(pt,i,c,p,d))}function ut(e,t,s,n){const o=J(0,s),i=J(0,0),c=J(t,0),p=J(t,s);return S(o,o,e),S(i,i,e),S(c,c,e),S(p,p,e),new re({rings:[[o,i,c,p,o]],spatialReference:n})}const we=g;let M=class extends K{constructor(e){super(e),this.bottomLeft=null,this.bottomRight=null,this.topLeft=null,this.topRight=null,this.type="corners"}get coords(){let{topLeft:e,topRight:t,bottomLeft:s,bottomRight:n}=this;if(l(e)||l(t)||l(s)||l(n))return null;const o=e.spatialReference;return t=this.projectOrWarn(t,o),s=this.projectOrWarn(s,o),n=this.projectOrWarn(n,o),l(t)||l(s)||l(n)?null:new re({rings:[[[s.x,s.y],[e.x,e.y],[t.x,t.y],[n.x,n.y],[s.x,s.y]]],spatialReference:o})}set coords(e){const{topLeft:t}=this;if(l(t))return;const s=t.spatialReference;if(e=this.projectOrWarn(e,s),l(e))return;const{rings:[[n,o,i,c]]}=e;this.bottomLeft=new h({x:n[0],y:n[1],spatialReference:s}),this.topLeft=new h({x:o[0],y:o[1],spatialReference:s}),this.topRight=new h({x:i[0],y:i[1],spatialReference:s}),this.bottomRight=new h({x:c[0],y:c[1],spatialReference:s})}};r([a()],M.prototype,"coords",null),r([a({type:h})],M.prototype,"bottomLeft",void 0),r([a({type:h})],M.prototype,"bottomRight",void 0),r([a({type:h})],M.prototype,"topLeft",void 0),r([a({type:h})],M.prototype,"topRight",void 0),M=r([v("esri.layers.support.CornersGeoreference")],M);const dt=M;let H=class extends K{constructor(e){super(e),this.extent=null,this.rotation=0,this.type="extent-and-rotation"}get coords(){if(l(this.extent))return null;const{xmin:e,ymin:t,xmax:s,ymax:n,spatialReference:o}=this.extent;let i;if(this.rotation){const{x:c,y:p}=this.extent.center,d=he(c,p,this.rotation);i=[d(e,t),d(e,n),d(s,n),d(s,t)],i.push(i[0])}else i=[[e,t],[e,n],[s,n],[s,t],[e,t]];return new re({rings:[i],spatialReference:o})}set coords(e){if(l(e)||l(this.extent))return;const t=this.extent.spatialReference;if(e=this.projectOrWarn(e,t),l(e)||l(e.extent))return;const{rings:[[s,n,o]],extent:{center:{x:i,y:c}}}=e,p=Ee(Math.PI/2-Math.atan2(n[1]-s[1],n[0]-s[0])),d=he(i,c,-p),[y,P]=d(s[0],s[1]),[b,x]=d(o[0],o[1]);this.extent=new ie({xmin:y,ymin:P,xmax:b,ymax:x,spatialReference:t}),this.rotation=p}};function he(e,t,s){const n=Le(s),o=Math.cos(n),i=Math.sin(n);return(c,p)=>[o*(c-e)+i*(p-t)+e,o*(p-t)-i*(c-e)+t]}r([a()],H.prototype,"coords",null),r([a({type:ie})],H.prototype,"extent",void 0),r([a({type:Number})],H.prototype,"rotation",void 0),H=r([v("esri.layers.support.ExtentAndRotationGeoreference")],H);const ht=H,mt={key:"type",base:K,typeMap:{"control-points":we,corners:dt,"extent-and-rotation":ht}};let U=class extends Se(ye(Pe)){constructor(){super(...arguments),this.georeference=null,this.opacity=1}readGeoreference(e){return we.fromJSON(e)}};r([a({types:mt,json:{write:!0}})],U.prototype,"georeference",void 0),r([D("georeference")],U.prototype,"readGeoreference",null),r([a()],U.prototype,"opacity",void 0),U=r([v("esri.layers.support.MediaElementBase")],U);const le=U;let E=class extends le{constructor(e){super(e),this.content=null,this.image=null,this.type="image",this.image=null}load(){const e=this.image;if(typeof e=="string"){const t=ee(e,{responseType:"image"}).then(({data:s})=>{this._set("content",s)});this.addResolvingPromise(t)}else if(e instanceof HTMLImageElement){const t=e.decode().then(()=>{this._set("content",e)});this.addResolvingPromise(t)}else e?this._set("content",e):this.addResolvingPromise(Promise.reject(new q("image-element:invalid-image-type","Invalid image type",{image:e})));return Promise.resolve(this)}readImage(e,t,s){return Oe(t.url,s)}writeImage(e,t,s,n){if(l(e))return;const o=n==null?void 0:n.portalItem,i=n==null?void 0:n.resources;if(!o||!i)return void(typeof e=="string"&&(t[s]=pe(e,n)));const c=typeof e!="string"||ve(e)||xe(e)?null:e;if(c){if(Ce(c)==null)return void(t[s]=c);const p=pe(c,{...n,verifyItemRelativeUrls:n&&n.verifyItemRelativeUrls?{writtenUrls:n.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},Te.NO);if(o&&p&&!Ve(p))return i.toKeep.push({resource:o.resourceFromPath(p),compress:!1}),void(t[s]=p)}t[s]="<pending>",i.pendingOperations.push($e(e).then(p=>{const d=yt(p,o);t[s]=d.itemRelativeUrl,i.toAdd.push({resource:d,content:p,compress:!1,finish:y=>{this.image=y.url}})}))}};r([a({readOnly:!0})],E.prototype,"content",void 0),r([a({json:{name:"url",type:String}})],E.prototype,"image",void 0),r([D("image",["url"])],E.prototype,"readImage",null),r([oe("image")],E.prototype,"writeImage",null),r([a({readOnly:!0,json:{name:"mediaType"}})],E.prototype,"type",void 0),E=r([v("esri.layers.support.ImageElement")],E);const Re=E;async function $e(e){if(typeof e=="string"){if(xe(e)){const{data:t}=await ee(e,{responseType:"blob"});return t}return ve(e)?He(e):$e((await ee(e,{responseType:"image"})).data)}return new Promise(t=>ft(e).toBlob(t))}function ft(e){if(e instanceof HTMLCanvasElement)return e;const t=e instanceof HTMLImageElement?e.naturalWidth:e.width,s=e instanceof HTMLImageElement?e.naturalHeight:e.height,n=document.createElement("canvas"),o=n.getContext("2d");return n.width=t,n.height=s,e instanceof HTMLImageElement?o.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&o.putImageData(e,0,0),n}function yt(e,t){const s=Ue(),n=`${ke("media",s)}.${rt(e)}`;return t.resourceFromPath(n)}let F=class extends le{constructor(e){super(e),this.content=null,this.type="video"}load(){const e=this.video;if(typeof e=="string"){const t=document.createElement("video");t.src=e,t.crossOrigin="anonymous",t.autoplay=!0,t.muted=!0,t.loop=!0,this.addResolvingPromise(this._loadVideo(t).then(()=>{this._set("content",t)}))}else e instanceof HTMLVideoElement?this.addResolvingPromise(this._loadVideo(e).then(()=>{this._set("content",e)})):this.addResolvingPromise(Promise.reject(new q("video-element:invalid-video-type","Invalid video type",{video:e})));return Promise.resolve(this)}set video(e){this.loadStatus==="not-loaded"?this._set("video",e):G.getLogger(this.declaredClass).error("#video","video cannot be changed after the element is loaded.")}_loadVideo(e){return new Promise((t,s)=>{e.oncanplay=()=>{e.oncanplay=null,e.play().then(t,s)},e.crossOrigin!=="anonymous"&&(e.crossOrigin="anonymous",e.src=e.src)})}};r([a({readOnly:!0})],F.prototype,"content",void 0),r([a()],F.prototype,"video",null),F=r([v("esri.layers.support.VideoElement")],F);const _e=F,gt={key:"type",defaultKeyValue:"image",base:le,typeMap:{image:Re,video:_e}},me=te.ofType(gt);let k=class extends Pe.LoadableMixin(We(Ae(Ge.EventedAccessor))){constructor(e){super(e),this._index=new it,this._elementViewsMap=new Map,this._elementsIndexes=new Map,this._elementsChangedHandler=t=>{for(const n of t.removed){const o=this._elementViewsMap.get(n);this._elementViewsMap.delete(n),this._index.delete(o),this.handles.remove(o),o.destroy(),this.notifyChange("fullExtent")}const{spatialReference:s}=this;for(const n of t.added){if(this._elementViewsMap.get(n))continue;const o=new st({spatialReference:s,element:n});this._elementViewsMap.set(n,o);const i=Ne(()=>o.coords,()=>this._updateIndexForElement(o,!1));this._updateIndexForElement(o,!0),this.handles.add(i,o)}this._elementsIndexes.clear(),this.elements.forEach((n,o)=>this._elementsIndexes.set(n,o)),this.emit("refresh")},this.elements=new me}async load(e){if(Be(e),!this.spatialReference){const t=this.elements.find(s=>L(s.georeference)&&L(s.georeference.coords));this._set("spatialReference",t?N(N(t.georeference).coords).spatialReference:ge.WGS84)}return this._elementsChangedHandler({added:this.elements.items,removed:[]}),this.handles.add(this.elements.on("change",this._elementsChangedHandler)),this}destroy(){this._index.clear(),this._elementViewsMap.clear(),this._elementsIndexes.clear()}set elements(e){this._set("elements",ze(e,this._get("elements"),me))}get fullExtent(){if(this.loadStatus==="not-loaded")return null;const e=this._index.fullBounds;return l(e)?null:new ie({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:this.spatialReference})}set spatialReference(e){this.loadStatus==="not-loaded"?this._set("spatialReference",e):G.getLogger(this.declaredClass).error("#spatialReference","spatialReference cannot be changed after the source is loaded.")}async queryElements(e,t){await this.load(),await Fe(e.spatialReference,this.spatialReference,null,t);const s=qe(e.spatialReference,this.spatialReference)?e:Je(e,this.spatialReference);if(!s)return[];const n=s.normalize(),o=[];for(const i of n)this._index.forEachInBounds(Ye(i),({normalizedCoords:c,element:p})=>{L(c)&&De(i,c)&&o.push(p)});return o.sort((i,c)=>this._elementsIndexes.get(i)-this._elementsIndexes.get(c)),o}_updateIndexForElement(e,t){const s=e.normalizedBounds,n=this._index.has(e),o=L(s);this._index.delete(e),o&&this._index.set(e,s),this.notifyChange("fullExtent"),t||(n!==o?this.emit("refresh"):this.emit("change",{element:e.element}))}};r([a()],k.prototype,"elements",null),r([a({readOnly:!0})],k.prototype,"fullExtent",null),r([a()],k.prototype,"spatialReference",null),k=r([v("esri.layers.support.LocalMediaElementSource")],k);const X=k;function fe(e){return typeof e=="object"&&e!=null&&"type"in e}let f=class extends Ke(Qe(Xe(Ze(tt)))){constructor(e){super(e),this.effectiveSource=null,this.copyright=null,this.operationalLayerType="MediaLayer",this.spatialReference=null,this.type="media",this.source=new X}load(e){const t=this.source;if(!t)return this.addResolvingPromise(Promise.reject(new q("media-layer:source-missing","Set 'MediaLayer.source' before loading the layer."))),Promise.resolve(this);const s=fe(t)?new X({elements:new te([t])}):t;this._set("effectiveSource",s),this.spatialReference&&(s.spatialReference=this.spatialReference);const n=s.load(e).then(()=>{this.spatialReference=s.spatialReference});return this.addResolvingPromise(n),Promise.resolve(this)}destroy(){var e,t;(e=N(this.effectiveSource))==null||e.destroy(),(t=N(this.source))==null||t.destroy()}get fullExtent(){return this.loaded?this.effectiveSource.fullExtent:null}set source(e){this.loadStatus==="not-loaded"?this._set("source",e):G.getLogger(this.declaredClass).error("#source","source cannot be changed after the layer is loaded.")}castSource(e){return e?Array.isArray(e)||e instanceof te?new X({elements:e}):e:null}readSource(e,t,s){const n=t.mediaType==="image"?new Re:t.mediaType==="video"?new _e:null;return n==null||n.read(t,s),n}writeSource(e,t,s,n){var o;e&&fe(e)&&e.type==="image"?e.write(t,n):n!=null&&n.messages&&((o=n==null?void 0:n.messages)==null||o.push(new q("media-layer:unsupported-source","source must be an 'ImageElement'")))}};r([a({readOnly:!0})],f.prototype,"effectiveSource",void 0),r([a({type:String})],f.prototype,"copyright",void 0),r([a({readOnly:!0})],f.prototype,"fullExtent",null),r([a({type:["MediaLayer"]})],f.prototype,"operationalLayerType",void 0),r([a({type:["show","hide"]})],f.prototype,"listMode",void 0),r([a({nonNullable:!0,json:{write:{enabled:!0,allowNull:!1}}})],f.prototype,"source",null),r([et("source")],f.prototype,"castSource",null),r([D("source",["url"])],f.prototype,"readSource",null),r([oe("source")],f.prototype,"writeSource",null),r([a()],f.prototype,"spatialReference",void 0),r([a({readOnly:!0})],f.prototype,"type",void 0),f=r([v("esri.layers.MediaLayer")],f);const jt=f;export{jt as default};