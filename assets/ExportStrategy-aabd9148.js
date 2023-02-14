import{e as m,y as d,n as z,m as b}from"./cast-4943406f.js";import"./string-cc430a78.js";import{x as v,f as S,w as E,E as W}from"./promiseUtils-ec14a623.js";import"./typedArrayUtil-bd69bba0.js";import"./ensureType-9613b5f0.js";import{u as $,f as P}from"./aaBoundingRect-647e206b.js";import{b as H}from"./Extent-d21a2637.js";import{j as N}from"./TileInfo-d1c5acd2.js";import{R as q}from"./Bitmap-1884319c.js";import{h as T}from"./TileStore-293c55d0.js";import{e as C}from"./TileKey-75a33c7e.js";const I=Math.PI/180;function B(e){return e*I}function O(e,i){const r=B(i.rotation),t=Math.abs(Math.cos(r)),s=Math.abs(Math.sin(r)),[o,n]=i.size;return e[0]=Math.round(n*s+o*t),e[1]=Math.round(n*t+o*s),e}function U(e,i,r,t){const[s,o]=i,[n,a]=t,l=.5*r;return e[0]=s-l*n,e[1]=o-l*a,e[2]=s+l*n,e[3]=o+l*a,e}const u=$(),c=[0,0],w=new C(0,0,0,0),x={container:null,fetchSource:null,requestUpdate:null,imageMaxWidth:2048,imageMaxHeight:2048,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1};let h=class extends b{constructor(e){super(e),this._imagePromise=null,this.bitmaps=[],this.hidpi=x.hidpi,this.imageMaxWidth=x.imageMaxWidth,this.imageMaxHeight=x.imageMaxHeight,this.imageRotationSupported=x.imageRotationSupported,this.imageNormalizationSupported=x.imageNormalizationSupported,this.update=v(async(i,r)=>{if(S(r),!i.stationary||this.destroyed)return;const t=i.state,s=H(t.spatialReference),o=this.hidpi?i.pixelRatio:1,n=this.imageNormalizationSupported&&t.worldScreenWidth&&t.worldScreenWidth<t.size[0];n?(c[0]=t.worldScreenWidth,c[1]=t.size[1]):this.imageRotationSupported?(c[0]=t.size[0],c[1]=t.size[1]):O(c,t);const a=Math.floor(c[0]*o)>this.imageMaxWidth||Math.floor(c[1]*o)>this.imageMaxHeight,l=s&&(t.extent.xmin<s.valid[0]||t.extent.xmax>s.valid[1]),f=!this.imageNormalizationSupported&&l,y=!a&&!f,M=this.imageRotationSupported?t.rotation:0,_=this.container.children.slice();if(y){const p=n?t.paddedViewState.center:t.center;this._imagePromise&&console.error("Image promise was not defined!"),this._imagePromise=this._singleExport(t,c,p,t.resolution,M,o,r)}else{let p=Math.min(this.imageMaxWidth,this.imageMaxHeight);f&&(p=Math.min(t.worldScreenWidth,p)),this._imagePromise=this._tiledExport(t,p,o,r)}try{const p=await this._imagePromise;S(r);const R=[];if(this._imagePromise=null,this.destroyed)return;this.bitmaps=p??[];for(const g of _)p.includes(g)||R.push(g.fadeOut().then(()=>{g.remove(),g.destroy()}));for(const g of p)R.push(g.fadeIn());await Promise.all(R)}catch(p){this._imagePromise=null,E(p)}},5e3),this.updateExports=v(async i=>{const r=[];for(const t of this.container.children){if(!t.visible||!t.stage)return;r.push(i(t).then(()=>{t.invalidateTexture(),t.requestRender()}))}this._imagePromise=W(r).then(()=>this._imagePromise=null),await this._imagePromise})}destroy(){this.bitmaps.forEach(e=>e.destroy()),this.bitmaps=[]}get updating(){return!this.destroyed&&this._imagePromise!==null}async _export(e,i,r,t,s,o){const n=await this.fetchSource(e,Math.floor(i*s),Math.floor(r*s),{rotation:t,pixelRatio:s,signal:o});S(o);const a=new q(null,{immutable:!0,requestRenderOnSourceChangedEnabled:!0});return a.x=e.xmin,a.y=e.ymax,a.resolution=e.width/i,a.rotation=t,a.pixelRatio=s,a.opacity=0,this.container.addChild(a),await a.setSourceAsync(n,o),S(o),a}async _singleExport(e,i,r,t,s,o,n){U(u,r,t,i);const a=P(u,e.spatialReference);return[await this._export(a,i[0],i[1],s,o,n)]}_tiledExport(e,i,r,t){const s=N.create({size:i,spatialReference:e.spatialReference,scales:[e.scale]}),o=new T(s),n=o.getTileCoverage(e);if(!n)return null;const a=[];return n.forEach((l,f,y,M)=>{w.set(l,f,y,0),o.getTileBounds(u,w);const _=P(u,e.spatialReference);a.push(this._export(_,i,i,0,r,t).then(p=>(M!==0&&(w.set(l,f,y,M),o.getTileBounds(u,w),p.x=u[0],p.y=u[3]),p)))}),Promise.all(a)}};m([d()],h.prototype,"_imagePromise",void 0),m([d()],h.prototype,"bitmaps",void 0),m([d()],h.prototype,"container",void 0),m([d()],h.prototype,"fetchSource",void 0),m([d()],h.prototype,"hidpi",void 0),m([d()],h.prototype,"imageMaxWidth",void 0),m([d()],h.prototype,"imageMaxHeight",void 0),m([d()],h.prototype,"imageRotationSupported",void 0),m([d()],h.prototype,"imageNormalizationSupported",void 0),m([d()],h.prototype,"requestUpdate",void 0),m([d()],h.prototype,"updating",null),h=m([z("esri.views.2d.layers.support.ExportStrategy")],h);const X=h;export{X as v};
