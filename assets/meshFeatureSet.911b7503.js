import{f as p,g as d,jm as yt,eS as xt,eR as wt,G as ee,e1 as xe,jn as Ge,jo as vt,eQ as Te,cb as et,r as c,a2 as $,ft as W,ae as I,hc as $t,eC as At,jp as N,aA as M,Z as Oe,$ as pe,bh as _,jq as bt,jr as Tt,ij as Mt,dq as Rt,av as Ct,l as he,A as Me,h9 as _e,hh as tt,ho as nt,fO as fe,h8 as Ft,aC as rt,h7 as ge,iP as Lt,hg as Dt,js as ot,bf as st,ba as It,m as Ot,eN as _t,eB as jt,aT as Et,w as Re,bx as Pt,bl as ve,Y as St,D as Nt,E as zt}from"./vendor.f8a4aecc.js";import{r as we,b as Wt,x as kt,M as je,j as Ee,a as Pe,R as Se,h as Ne,L as ze,_ as Ut,c as se,v as Ce,g as Fe,d as Gt,e as ce,f as me}from"./georeference.16e88713.js";import{r as Ht}from"./earcut.a219bf29.js";import{r as He}from"./deduplicate.6249260b.js";import{e as We}from"./mat3f64.9180efcb.js";import{e as at}from"./mat4f64.3068072d.js";import{c as ke}from"./spatialReferenceEllipsoidUtils.6df09b40.js";var Z;const $e=new WeakMap;let Bt=0,O=Z=class extends xe{constructor(e){super(e),this.wrap="repeat"}get url(){return this._get("url")||null}set url(e){this._set("url",e),e&&this._set("data",null)}get data(){return this._get("data")||null}set data(e){this._set("data",e),e&&this._set("url",null)}writeData(e,t,n,r){if(e instanceof HTMLImageElement){const o={type:"image-element",src:Ge(e.src,r),crossOrigin:e.crossOrigin};t[n]=o}else if(e instanceof HTMLCanvasElement){const o=e.getContext("2d").getImageData(0,0,e.width,e.height),s={type:"canvas-element",imageData:this._encodeImageData(o)};t[n]=s}else if(e instanceof HTMLVideoElement){const o={type:"video-element",src:Ge(e.src,r),autoplay:e.autoplay,loop:e.loop,muted:e.muted,crossOrigin:e.crossOrigin,preload:e.preload};t[n]=o}else if(e instanceof ImageData){const o={type:"image-data",imageData:this._encodeImageData(e)};t[n]=o}}readData(e){switch(e.type){case"image-element":{const t=new Image;return t.src=e.src,t.crossOrigin=e.crossOrigin,t}case"canvas-element":{const t=this._decodeImageData(e.imageData),n=document.createElement("canvas");return n.width=t.width,n.height=t.height,n.getContext("2d").putImageData(t,0,0),n}case"image-data":return this._decodeImageData(e.imageData);case"video-element":{const t=document.createElement("video");return t.src=e.src,t.crossOrigin=e.crossOrigin,t.autoplay=e.autoplay,t.loop=e.loop,t.muted=e.muted,t.preload=e.preload,t}default:return}}get transparent(){const e=this.data,t=this.url;if(e instanceof HTMLCanvasElement)return this._imageDataContainsTransparent(e.getContext("2d").getImageData(0,0,e.width,e.height));if(e instanceof ImageData)return this._imageDataContainsTransparent(e);if(t){const n=t.substr(t.length-4,4).toLowerCase(),r=t.substr(0,15).toLocaleLowerCase();if(n===".png"||r==="data:image/png;")return!0}return!1}set transparent(e){this._overrideIfSome("transparent",e)}get contentHash(){const e=typeof this.wrap=="string"?this.wrap:typeof this.wrap=="object"?`${this.wrap.horizontal}/${this.wrap.vertical}`:"",t=(n="")=>`d:${n},t:${this.transparent},w:${e}`;return this.url!=null?t(this.url):this.data!=null?this.data instanceof HTMLImageElement||this.data instanceof HTMLVideoElement?t(this.data.src):($e.has(this.data)||$e.set(this.data,++Bt),t($e.get(this.data))):t()}clone(){const e={url:this.url,data:this.data,wrap:this._cloneWrap()};return new Z(e)}cloneWithDeduplication(e){const t=e.get(this);if(t)return t;const n=this.clone();return e.set(this,n),n}_cloneWrap(){return typeof this.wrap=="string"?this.wrap:{horizontal:this.wrap.horizontal,vertical:this.wrap.vertical}}_encodeImageData(e){let t="";for(let n=0;n<e.data.length;n++)t+=String.fromCharCode(e.data[n]);return{data:btoa(t),width:e.width,height:e.height}}_decodeImageData(e){const t=atob(e.data),n=new Uint8ClampedArray(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return vt(n,e.width,e.height)}_imageDataContainsTransparent(e){for(let t=3;t<e.data.length;t+=4)if(e.data[t]!==255)return!0;return!1}static from(e){return typeof e=="string"?new Z({url:e}):e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof ImageData||e instanceof HTMLVideoElement?new Z({data:e}):Te(Z,e)}};p([d({type:String,json:{write:yt}})],O.prototype,"url",null),p([d({json:{write:{overridePolicy(){return{enabled:!this.url}}}}}),d()],O.prototype,"data",null),p([xt("data")],O.prototype,"writeData",null),p([wt("data")],O.prototype,"readData",null),p([d({type:Boolean,json:{write:{overridePolicy(){return{enabled:this._isOverridden("transparent")}}}}})],O.prototype,"transparent",null),p([d({json:{write:!0}})],O.prototype,"wrap",void 0),p([d({readOnly:!0})],O.prototype,"contentHash",null),O=Z=p([ee("esri.geometry.support.MeshTexture")],O);const oe=O;var Le;let L=Le=class extends xe{constructor(e){super(e),this.color=null,this.colorTexture=null,this.normalTexture=null,this.alphaMode="auto",this.alphaCutoff=.5,this.doubleSided=!0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(e,t){const n=c(e)?e.get(this):null;if(n)return n;const r=new Le(this.clonePropertiesWithDeduplication(t));return c(e)&&e.set(this,r),r}clonePropertiesWithDeduplication(e){return{color:c(this.color)?this.color.clone():null,colorTexture:c(this.colorTexture)?this.colorTexture.cloneWithDeduplication(e):null,normalTexture:c(this.normalTexture)?this.normalTexture.cloneWithDeduplication(e):null,alphaMode:this.alphaMode,alphaCutoff:this.alphaCutoff,doubleSided:this.doubleSided,colorTextureTransform:c(this.colorTextureTransform)?this.colorTextureTransform:null,normalTextureTransform:c(this.normalTextureTransform)?this.normalTextureTransform:null}}};p([d({type:et,json:{write:!0}})],L.prototype,"color",void 0),p([d({type:oe,json:{write:!0}})],L.prototype,"colorTexture",void 0),p([d({type:oe,json:{write:!0}})],L.prototype,"normalTexture",void 0),p([d({nonNullable:!0,json:{write:!0}})],L.prototype,"alphaMode",void 0),p([d({nonNullable:!0,json:{write:!0}})],L.prototype,"alphaCutoff",void 0),p([d({nonNullable:!0,json:{write:!0}})],L.prototype,"doubleSided",void 0),p([d()],L.prototype,"colorTextureTransform",void 0),p([d()],L.prototype,"normalTextureTransform",void 0),L=Le=p([ee("esri.geometry.support.MeshMaterial")],L);const Ue=L;var De;let F=De=class extends Ue{constructor(e){super(e),this.emissiveColor=null,this.emissiveTexture=null,this.occlusionTexture=null,this.metallic=1,this.roughness=1,this.metallicRoughnessTexture=null}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(e,t){const n=c(e)?e.get(this):null;if(n)return n;const r=new De(this.clonePropertiesWithDeduplication(t));return c(e)&&e.set(this,r),r}clonePropertiesWithDeduplication(e){return{...super.clonePropertiesWithDeduplication(e),emissiveColor:c(this.emissiveColor)?this.emissiveColor.clone():null,emissiveTexture:c(this.emissiveTexture)?this.emissiveTexture.cloneWithDeduplication(e):null,occlusionTexture:c(this.occlusionTexture)?this.occlusionTexture.cloneWithDeduplication(e):null,metallic:this.metallic,roughness:this.roughness,metallicRoughnessTexture:c(this.metallicRoughnessTexture)?this.metallicRoughnessTexture.cloneWithDeduplication(e):null,occlusionTextureTransform:c(this.occlusionTextureTransform)?this.occlusionTextureTransform:null,emissiveTextureTransform:c(this.emissiveTextureTransform)?this.emissiveTextureTransform:null,metallicRoughnessTextureTransform:c(this.metallicRoughnessTextureTransform)?this.metallicRoughnessTextureTransform:null}}};p([d({type:et,json:{write:!0}})],F.prototype,"emissiveColor",void 0),p([d({type:oe,json:{write:!0}})],F.prototype,"emissiveTexture",void 0),p([d({type:oe,json:{write:!0}})],F.prototype,"occlusionTexture",void 0),p([d({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],F.prototype,"metallic",void 0),p([d({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],F.prototype,"roughness",void 0),p([d({type:oe,json:{write:!0}})],F.prototype,"metallicRoughnessTexture",void 0),p([d()],F.prototype,"occlusionTextureTransform",void 0),p([d()],F.prototype,"emissiveTextureTransform",void 0),p([d()],F.prototype,"metallicRoughnessTextureTransform",void 0),F=De=p([ee("esri.geometry.support.MeshMaterialMetallicRoughness")],F);const Vt=F;var ue;const it="esri.geometry.support.MeshVertexAttributes",U=$.getLogger(it);let T=ue=class extends xe{constructor(e){super(e),this.color=null,this.position=new Float64Array(0),this.uv=null,this.normal=null,this.tangent=null}castColor(e){return Y(e,Uint8Array,[Uint8ClampedArray],{loggerTag:".color=",stride:4},U)}castPosition(e){return e&&e instanceof Float32Array&&U.warn(".position=","Setting position attribute from a Float32Array may cause precision problems. Consider storing data in a Float64Array or a regular number array"),Y(e,Float64Array,[Float32Array],{loggerTag:".position=",stride:3},U)}castUv(e){return Y(e,Float32Array,[Float64Array],{loggerTag:".uv=",stride:2},U)}castNormal(e){return Y(e,Float32Array,[Float64Array],{loggerTag:".normal=",stride:3},U)}castTangent(e){return Y(e,Float32Array,[Float64Array],{loggerTag:".tangent=",stride:4},U)}clone(){const e={position:I(this.position),uv:I(this.uv),normal:I(this.normal),tangent:I(this.tangent),color:I(this.color)};return new ue(e)}clonePositional(){const e={position:I(this.position),normal:I(this.normal),tangent:I(this.tangent),uv:this.uv,color:this.color};return new ue(e)}};function Ae(e,t,n,r){const{loggerTag:o,stride:s}=t;return e.length%s!=0?(r.error(o,`Invalid array length, expected a multiple of ${s}`),new n([])):e}function Y(e,t,n,r,o){if(!e)return e;if(e instanceof t)return Ae(e,r,t,o);for(const s of n)if(e instanceof s)return Ae(new t(e),r,t,o);if(Array.isArray(e))return Ae(new t(e),r,t,o);{const s=n.map(a=>`'${a.name}'`);return o.error(`Failed to set property, expected one of ${s}, but got ${e.constructor.name}`),new t([])}}function te(e,t,n){t[n]=Zt(e)}function Zt(e){const t=new Array(e.length);for(let n=0;n<e.length;n++)t[n]=e[n];return t}p([d({json:{write:te}})],T.prototype,"color",void 0),p([W("color")],T.prototype,"castColor",null),p([d({nonNullable:!0,json:{write:te}})],T.prototype,"position",void 0),p([W("position")],T.prototype,"castPosition",null),p([d({json:{write:te}})],T.prototype,"uv",void 0),p([W("uv")],T.prototype,"castUv",null),p([d({json:{write:te}})],T.prototype,"normal",void 0),p([W("normal")],T.prototype,"castNormal",null),p([d({json:{write:te}})],T.prototype,"tangent",void 0),p([W("tangent")],T.prototype,"castTangent",null),T=ue=p([ee(it)],T);var re;const lt="esri.geometry.support.MeshComponent",Yt=$.getLogger(lt);let j=re=class extends xe{static from(e){return Te(re,e)}constructor(e){super(e),this.faces=null,this.material=null,this.shading="source",this.trustSourceNormals=!1}castFaces(e){return Y(e,Uint32Array,[Uint16Array],{loggerTag:".faces=",stride:3},Yt)}castMaterial(e){return Te(e&&typeof e=="object"&&("metallic"in e||"roughness"in e||"metallicRoughnessTexture"in e)?Vt:Ue,e)}clone(){return new re({faces:I(this.faces),shading:this.shading,material:I(this.material),trustSourceNormals:this.trustSourceNormals})}cloneWithDeduplication(e,t){const n={faces:I(this.faces),shading:this.shading,material:this.material?this.material.cloneWithDeduplication(e,t):null,trustSourceNormals:this.trustSourceNormals};return new re(n)}};p([d({json:{write:!0}})],j.prototype,"faces",void 0),p([W("faces")],j.prototype,"castFaces",null),p([d({type:Ue,json:{write:!0}})],j.prototype,"material",void 0),p([W("material")],j.prototype,"castMaterial",null),p([d({type:String,json:{write:!0}})],j.prototype,"shading",void 0),p([d({type:Boolean})],j.prototype,"trustSourceNormals",void 0),j=re=p([ee(lt)],j);const Q=j;function ct(e,t=!1){return e<=$t?t?new Array(e).fill(0):new Array(e):new Float64Array(e)}function Jt(e,t,n){return Array.isArray(e)?e.slice(t,t+n):e.subarray(t,t+n)}function Xt(e){const t=Qt(e.rings,e.hasZ,de.CCW_IS_HOLE),n=new Array;let r=0,o=0;for(const i of t.polygons){const l=i.count,u=i.index,f=Jt(t.position,3*u,3*l),m=i.holeIndices.map(g=>g-u),h=new Uint32Array(Ht(f,m,3));n.push({position:f,faces:h}),r+=f.length,o+=h.length}const s=qt(n,r,o),a=Array.isArray(s.position)?He(s.position,3,{originalIndices:s.faces}):He(s.position.buffer,6,{originalIndices:s.faces});return s.position=new Float64Array(a.buffer),s.faces=a.indices,s}function qt(e,t,n){if(e.length===1)return e[0];const r=ct(t),o=new Uint32Array(n);let s=0,a=0,i=0;for(const l of e){for(let u=0;u<l.position.length;u++)r[s++]=l.position[u];for(let u=0;u<l.faces.length;u++)o[a++]=l.faces[u]+i;i=s/3}return{position:r,faces:o}}function Qt(e,t,n){const r=e.length,o=new Array(r),s=new Array(r),a=new Array(r);let i=0,l=0,u=0,f=0;for(let g=0;g<r;++g)f+=e[g].length;const m=ct(3*f);let h=0;for(let g=r-1;g>=0;g--){const y=e[g],C=n===de.CCW_IS_HOLE&&Kt(y);if(C&&r!==1)o[i++]=y;else{let v=y.length;for(let x=0;x<i;++x)v+=o[x].length;const A={index:h,pathLengths:new Array(i+1),count:v,holeIndices:new Array(i)};A.pathLengths[0]=y.length,y.length>0&&(a[u++]={index:h,count:y.length}),h=C?ae(y,y.length-1,-1,m,h,y.length,t):ae(y,0,1,m,h,y.length,t);for(let x=0;x<i;++x){const b=o[x];A.holeIndices[x]=h,A.pathLengths[x+1]=b.length,b.length>0&&(a[u++]={index:h,count:b.length}),h=ae(b,0,1,m,h,b.length,t)}i=0,A.count>0&&(s[l++]=A)}}for(let g=0;g<i;++g){const y=o[g];y.length>0&&(a[u++]={index:h,count:y.length}),h=ae(y,0,1,m,h,y.length,t)}return s.length=l,a.length=u,{position:m,polygons:s,outlines:a}}function ae(e,t,n,r,o,s,a){o*=3;for(let i=0;i<s;++i){const l=e[t];r[o++]=l[0],r[o++]=l[1],r[o++]=a?l[2]:0,t+=n}return o/3}function Kt(e){return!At(e,!1,!1)}var de;(function(e){e[e.NONE=0]="NONE",e[e.CCW_IS_HOLE=1]="CCW_IS_HOLE"})(de||(de={}));const Ie=$.getLogger("esri.geometry.support.meshUtils.centerAt");function en(e,t,n){var o;if(!e.vertexAttributes||!e.vertexAttributes.position)return;const r=(o=n==null?void 0:n.origin)!=null?o:e.origin;c(e.transform)?((n==null?void 0:n.geographic)!=null&&n.geographic!==e.transform.geographic&&Ie.warn(`Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${e.transform.geographic}) is not supported`),tn(e.transform,t,r)):we(e.spatialReference,n)?nn(e,t,r):rn(e,t,r)}function tn(e,t,n){const r=t.x-n.x,o=t.y-n.y,s=t.hasZ&&n.hasZ?t.z-n.z:0,a=e.origin;e.origin=[a[0]+r,a[1]+o,a[2]+s]}function nn(e,t,n){const r=Wt(e.vertexAttributes,n,{geographic:!0}),{position:o,normal:s,tangent:a}=kt(r,t,{geographic:!0});e.vertexAttributes.position=o,e.vertexAttributes.normal=s,e.vertexAttributes.tangent=a,e.vertexAttributesChanged()}function rn(e,t,n){const r=an,o=sn;if(N(t,o,e.spatialReference)){if(!N(n,r,e.spatialReference)){const s=e.origin;r[0]=s.x,r[1]=s.y,r[2]=s.z,Ie.error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}).`)}on(e.vertexAttributes.position,o,r),e.vertexAttributesChanged()}else Ie.error(`Failed to project centerAt location (wkid:${t.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid})`)}function on(e,t,n){if(e)for(let r=0;r<e.length;r+=3)for(let o=0;o<3;o++)e[r+o]+=t[o]-n[o]}const sn=M(),an=M();async function ln(e,t,n){const{loadGLTFMesh:r}=await Oe(pe(()=>import("./loadGLTFMesh.e2759058.js"),["assets/loadGLTFMesh.e2759058.js","assets/vendor.f8a4aecc.js","assets/mat3f64.9180efcb.js","assets/BufferView.f85a6ea0.js","assets/vec33.15e9228c.js","assets/DefaultMaterial_COLOR_GAMMA.ce02cd85.js","assets/types.bf551170.js","assets/mat4f64.3068072d.js","assets/enums.3c1fa5b5.js","assets/Version.cb16e629.js","assets/quat.405f2e8c.js","assets/quatf64.1dc83f1c.js","assets/resourceUtils.cd9a6317.js","assets/basicInterfaces.67cafc7c.js","assets/Indices.ce4e4e13.js","assets/georeference.16e88713.js","assets/spatialReferenceEllipsoidUtils.6df09b40.js","assets/earcut.a219bf29.js","assets/deduplicate.6249260b.js"]),n),o=await ut(t,n),s=r(new _({x:0,y:0,z:0,spatialReference:e.spatialReference}),o.url,{resolveFile:cn(o),useTransform:!0,signal:c(n)?n.signal:null});s.then(()=>o.dispose(),()=>o.dispose());const{vertexAttributes:a,components:i}=await s;e.vertexAttributes=a,e.components=i}function cn(e){const t=bt(e.url);return n=>{var s;const r=Tt(n,t,t),o=r?r.replace(/^ *\.\//,""):null;return(s=o?e.files.get(o):null)!=null?s:n}}async function ut(e,t){return e instanceof Blob?K.fromBlob(e):typeof e=="string"?new K(e):Array.isArray(e)?un(e,t):pn(e,t)}async function un(e,t){const n=new Map;let r=null;const o=await Mt(e.map(async a=>({name:a.name,source:await ut(a instanceof Blob?a:a.source,t)}))),s=[];for(const a of o)a&&(Rt(t)?a.source.dispose():s.push(a));Ct(t);for(const{name:a,source:i}of s)(he(r)||/\.(gltf|glb)/i.test(a))&&(r=i.url),n.set(a,i.url),i.files&&i.files.forEach((l,u)=>n.set(u,l));if(he(r))throw new Me("mesh-load-external:missing-files","Missing files to load external mesh source");return new K(r,()=>s.forEach(({source:a})=>a.dispose()),n)}async function pn(e,t){const{default:n}=await Oe(pe(()=>import("./vendor.f8a4aecc.js").then(o=>o.mL),[]),t),r=typeof e.multipart[0]=="string"?await Promise.all(e.multipart.map(async o=>(await n(o,{responseType:"array-buffer"})).data)):e.multipart;return K.fromBlob(new Blob(r))}class K{constructor(t,n=()=>{},r=new Map){this.url=t,this.dispose=n,this.files=r}static fromBlob(t){const n=URL.createObjectURL(t);return new K(n,()=>URL.revokeObjectURL(n))}}function hn(e,t,n){e.vertexAttributes&&e.vertexAttributes.position&&(c(e.transform)?((n==null?void 0:n.geographic)!=null&&n.geographic!==e.transform.geographic&&$.getLogger("esri.geometry.support.meshUtils.offset").warn(`Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${e.transform.geographic}) is not supported`),fn(e.transform,t)):we(e.spatialReference,n)?gn(e,t):mn(e,t))}function fn(e,t){const n=e.origin;e.origin=_e(M(),n,t)}function gn(e,t){const n=e.spatialReference,r=e.vertexAttributes.position,o=e.vertexAttributes.normal,s=e.vertexAttributes.tangent,a=new Float64Array(r.length),i=c(o)?new Float32Array(o.length):null,l=c(s)?new Float32Array(s.length):null,u=e.extent.center,f=dn;tt(n,[u.x,u.y,u.z],Be,ke(n)),nt(Ve,Be),fe(f,t,Ve),je(r,n,a),c(o)&&c(i)&&Ee(o,r,a,n,i),c(s)&&c(l)&&Pe(s,r,a,n,l),pt(a,f),Se(a,r,n),c(o)&&c(i)&&Ne(i,r,a,n,o),c(s)&&c(l)&&ze(l,r,a,n,s),e.vertexAttributesChanged()}function mn(e,t){pt(e.vertexAttributes.position,t),e.vertexAttributesChanged()}function pt(e,t){if(e)for(let n=0;n<e.length;n+=3)for(let r=0;r<3;r++)e[n+r]+=t[r]}const dn=M(),Be=at(),Ve=We();function yn(){const{faceDescriptions:e,faceVertexOffsets:t,uvScales:n}=Mn,r=4*e.length,o=new Float64Array(3*r),s=new Float32Array(3*r),a=new Float32Array(2*r),i=new Uint32Array(2*e.length*3);let l=0,u=0,f=0,m=0;for(let h=0;h<e.length;h++){const g=e[h],y=l/3;for(const v of t)i[m++]=y+v;const C=g.corners;for(let v=0;v<4;v++){const A=C[v];let x=0;a[f++]=.25*n[v][0]+g.uvOrigin[0],a[f++]=g.uvOrigin[1]-.25*n[v][1];for(let b=0;b<3;b++)g.axis[b]!==0?(o[l++]=.5*g.axis[b],s[u++]=g.axis[b]):(o[l++]=.5*A[x++],s[u++]=0)}}return{position:o,normal:s,uv:a,faces:i}}function xn(e,t){const n=e.components[0],r=n.faces,o=Rn[t],s=6*o,a=new Array(6),i=new Array(r.length-6);let l=0,u=0;for(let f=0;f<r.length;f++)f>=s&&f<s+6?a[l++]=r[f]:i[u++]=r[f];if(c(e.vertexAttributes.uv)){const f=new Float32Array(e.vertexAttributes.uv),m=4*o*2,h=[0,1,1,1,1,0,0,0];for(let g=0;g<h.length;g++)f[m+g]=h[g];e.vertexAttributes.uv=f}return e.components=[new Q({faces:a,material:n.material}),new Q({faces:i})],e}function wn(e=0){const t=Math.round(8*2**e),n=2*t,r=(t-1)*(n+1)+2*n,o=new Float64Array(3*r),s=new Float32Array(3*r),a=new Float32Array(2*r),i=new Uint32Array(3*((t-1)*n*2));let l=0,u=0,f=0,m=0;for(let h=0;h<=t;h++){const g=h/t*Math.PI+.5*Math.PI,y=Math.cos(g),C=Math.sin(g);w[2]=C;const v=h===0||h===t,A=v?n-1:n;for(let x=0;x<=A;x++){const b=x/A*2*Math.PI;w[0]=-Math.sin(b)*y,w[1]=Math.cos(b)*y;for(let E=0;E<3;E++)o[l]=.5*w[E],s[l]=w[E],++l;a[u++]=(x+(v?.5:0))/n,a[u++]=h/t,h!==0&&x!==n&&(h!==t&&(i[f++]=m,i[f++]=m+1,i[f++]=m-n),h!==1&&(i[f++]=m,i[f++]=m-n,i[f++]=m-n-1)),m++}}return{position:o,normal:s,uv:a,faces:i}}function vn(e=0){const n=Math.round(16*2**e),r=(5-1)*(n+1)+2*n,o=new Float64Array(3*r),s=new Float32Array(3*r),a=new Float32Array(2*r),i=new Uint32Array(3*(4*n));let l=0,u=0,f=0,m=0,h=0;for(let g=0;g<=5;g++){const y=g===0||g===5,C=g<=1||g>=5-1,v=g===2||g===4,A=y?n-1:n;for(let x=0;x<=A;x++){const b=x/A*2*Math.PI,E=y?0:.5;w[0]=E*Math.sin(b),w[1]=E*-Math.cos(b),w[2]=g<=2?.5:-.5;for(let k=0;k<3;k++)o[l++]=w[k],s[u++]=C?k===2?g<=1?1:-1:0:k===2?0:w[k]/E;a[f++]=(x+(y?.5:0))/n,a[f++]=g<=1?1*g/3:g<=3?1*(g-2)/3+1/3:1*(g-4)/3+2/3,v||g===0||x===n||(g!==5&&(i[m++]=h,i[m++]=h+1,i[m++]=h-n),g!==1&&(i[m++]=h,i[m++]=h-n,i[m++]=h-n-1)),h++}}return{position:o,normal:s,uv:a,faces:i}}function $n(e,t){const n=typeof t=="number"?t:t!=null?t.width:1,r=typeof t=="number"?t:t!=null?t.height:1;switch(e){case"up":case"down":return{width:n,depth:r};case"north":case"south":return{width:n,height:r};case"east":case"west":return{depth:n,height:r}}}function An(e){const t=ne.facingAxisOrderSwap[e],n=ne.position,r=ne.normal,o=new Float64Array(n.length),s=new Float32Array(r.length);let a=0;for(let i=0;i<4;i++){const l=a;for(let u=0;u<3;u++){const f=t[u],m=Math.abs(f)-1,h=f>=0?1:-1;o[a]=n[l+m]*h,s[a]=r[l+m]*h,a++}}return{position:o,normal:s,uv:new Float32Array(ne.uv),faces:new Uint32Array(ne.faces),isPlane:!0}}const G=1,H=2,B=3,ne={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[B,G,H],west:[-B,-G,H],north:[-G,B,H],south:[G,-B,H],up:[G,H,B],down:[G,-H,-B]}};function ie(e,t,n){e.isPlane||bn(e),Tn(e,n==null?void 0:n.size);const{vertexAttributes:r,transform:o}=Ut(e,t,n);return{vertexAttributes:new T({...r,uv:e.uv}),transform:o,components:[new Q({faces:e.faces,material:n&&n.material||null})],spatialReference:t.spatialReference}}function bn(e){for(let t=0;t<e.position.length;t+=3)e.position[t+2]+=.5}function Tn(e,t){if(t==null)return;const n=typeof t=="number"?[t,t,t]:[t.width!=null?t.width:1,t.depth!=null?t.depth:1,t.height!=null?t.height:1];P[0]=n[0],P[4]=n[1],P[8]=n[2];for(let r=0;r<e.position.length;r+=3){for(let o=0;o<3;o++)w[o]=e.position[r+o];fe(w,w,P);for(let o=0;o<3;o++)e.position[r+o]=w[o]}if(n[0]!==n[1]||n[1]!==n[2]){P[0]=1/n[0],P[4]=1/n[1],P[8]=1/n[2];for(let r=0;r<e.normal.length;r+=3){for(let o=0;o<3;o++)w[o]=e.normal[r+o];fe(w,w,P),Ft(w,w);for(let o=0;o<3;o++)e.normal[r+o]=w[o]}}}const Mn={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},Rn={south:0,east:1,north:2,west:3,up:4,down:5},w=M(),P=We(),ht=$.getLogger("esri.geometry.support.meshUtils.rotate");function Cn(e,t,n){var o,s;if(!e.vertexAttributes||!e.vertexAttributes.position||t[3]===0)return;const r=e.spatialReference;if(c(e.transform)){(n==null?void 0:n.geographic)!=null&&n.geographic!==e.transform.geographic&&ht.warn(`Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${e.transform.geographic}) is not supported`);const a=(o=n==null?void 0:n.origin)!=null?o:e.transform.getOriginPoint(r);Fn(e.transform,t,a)}else{const a=(s=n==null?void 0:n.origin)!=null?s:e.origin;we(e.spatialReference,n)?Ln(e,t,a):Dn(e,t,a)}}function Fn(e,t,n){const r=rt(J,n.x,n.y,n.z),o=ge(J,r,e.origin);e.applyLocalInverse(o,Ze),e.rotation=Ce(e.rotation,t,se()),e.applyLocalInverse(o,o),ge(o,o,Ze),e.translation=_e(M(),e.translation,o)}function Ln(e,t,n){const r=e.spatialReference,o=ke(r),s=ft;N(n,s,o)||N(e.origin,s,o);const a=e.vertexAttributes.position,i=e.vertexAttributes.normal,l=e.vertexAttributes.tangent,u=new Float64Array(a.length),f=c(i)?new Float32Array(i.length):null,m=c(l)?new Float32Array(l.length):null;tt(o,s,ye,o),nt(Je,ye);const h=Ye;fe(Fe(Ye),Fe(t),Je),h[3]=t[3],je(a,r,u),c(i)&&c(f)&&Ee(i,a,u,r,f),c(l)&&c(m)&&Pe(l,a,u,r,m),q(u,h,3,s),Se(u,a,r),c(i)&&c(f)&&(q(f,h,3),Ne(f,a,u,r,i)),c(l)&&c(m)&&(q(m,h,4),ze(m,a,u,r,l)),e.vertexAttributesChanged()}function Dn(e,t,n){const r=ft;if(!N(n,r,e.spatialReference)){const o=e.origin;r[0]=o.x,r[1]=o.y,r[2]=o.z,ht.error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}).`)}q(e.vertexAttributes.position,t,3,r),q(e.vertexAttributes.normal,t,3),q(e.vertexAttributes.tangent,t,4),e.vertexAttributesChanged()}function q(e,t,n,r=ot){if(!he(e)){Lt(ye,Gt(t),Fe(t));for(let o=0;o<e.length;o+=n){for(let s=0;s<3;s++)J[s]=e[o+s]-r[s];Dt(J,J,ye);for(let s=0;s<3;s++)e[o+s]=J[s]+r[s]}}}const J=M(),Ze=M(),Ye=se(),ye=at(),Je=We(),ft=M(),gt=$.getLogger("esri.geometry.support.meshUtils.scale");function In(e,t,n){var o;if(!e.vertexAttributes||!e.vertexAttributes.position)return;const r=e.spatialReference;if(c(e.transform)){(n==null?void 0:n.geographic)!=null&&n.geographic!==e.transform.geographic&&gt.warn(`Specifying the 'geographic' parameter (${n.geographic}) different from the Mesh transform setting (${e.transform.geographic}) is not supported`);const s=(o=n==null?void 0:n.origin)!=null?o:e.transform.getOriginPoint(r);On(e.transform,t,s)}else{const s=we(e.spatialReference,n),a=n&&n.origin||e.origin;s?_n(e,t,a):jn(e,t,a)}}function On(e,t,n){const r=rt(X,n.x,n.y,n.z),o=ge(X,r,e.origin);e.applyLocalInverse(o,Xe);const s=st(M(),e.scale,t);e.scale=s,e.applyLocalInverse(o,o),ge(o,o,Xe),e.translation=_e(M(),e.translation,o)}function _n(e,t,n){const r=e.spatialReference,o=ke(r),s=dt;N(n,s,o)||N(e.origin,s,o);const a=e.vertexAttributes.position,i=e.vertexAttributes.normal,l=e.vertexAttributes.tangent,u=new Float64Array(a.length),f=c(i)?new Float32Array(i.length):null,m=c(l)?new Float32Array(l.length):null;je(a,r,u),c(i)&&c(f)&&Ee(i,a,u,r,f),c(l)&&c(m)&&Pe(l,a,u,r,m),mt(u,t,s),Se(u,a,r),c(i)&&c(f)&&Ne(f,a,u,r,i),c(l)&&c(m)&&ze(m,a,u,r,l),e.vertexAttributesChanged()}function jn(e,t,n){const r=dt;if(!N(n,r,e.spatialReference)){const o=e.origin;r[0]=o.x,r[1]=o.y,r[2]=o.z,gt.error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}).`)}mt(e.vertexAttributes.position,t,r),e.vertexAttributesChanged()}function mt(e,t,n=ot){if(e)for(let r=0;r<e.length;r+=3){for(let o=0;o<3;o++)X[o]=e[r+o]-n[o];st(X,X,t);for(let o=0;o<3;o++)e[r+o]=X[o]+n[o]}}const X=M(),Xe=M(),dt=M();var D;const z="esri.geometry.Mesh";let R=D=class extends It(Ot.LoadableMixin(_t(jt))){constructor(e){super(e),this.components=null,this.transform=null,this.external=null,this.hasZ=!0,this.hasM=!1,this.vertexAttributes=new T,this.type="mesh"}initialize(){(he(this.external)||this.vertexAttributes.position.length)&&(this.loadStatus="loaded"),this.when(()=>{this.handles.add(Et(()=>{var e;return{vertexAttributes:this.vertexAttributes,components:(e=this.components)==null?void 0:e.map(t=>t.clone())}},()=>this._set("external",null),{once:!0,sync:!0}))})}get hasExtent(){return!this.loaded&&c(this.external)&&c(this.external.extent)||this.loaded&&this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0)}get _boundingInfo(){const e=this.vertexAttributes.position,t=this.spatialReference;if(e.length===0||this.components&&this.components.length===0)return{extent:new Re({xmin:0,ymin:0,zmin:0,xmax:0,ymax:0,zmax:0,spatialReference:t}),center:new _({x:0,y:0,z:0,spatialReference:t})};const n=c(this.transform)?this.transform.project(e,t):e;let r=1/0,o=1/0,s=1/0,a=-1/0,i=-1/0,l=-1/0,u=0,f=0,m=0;const h=n.length,g=1/(h/3);let y=0;for(;y<h;){const C=n[y++],v=n[y++],A=n[y++];r=Math.min(r,C),o=Math.min(o,v),s=Math.min(s,A),a=Math.max(a,C),i=Math.max(i,v),l=Math.max(l,A),u+=g*C,f+=g*v,m+=g*A}return{extent:new Re({xmin:r,ymin:o,zmin:s,xmax:a,ymax:i,zmax:l,spatialReference:t}),center:new _({x:u,y:f,z:m,spatialReference:t})}}get anchor(){if(c(this.transform))return this.transform.getOriginPoint(this.spatialReference);const e=this._boundingInfo;return new _({x:e.center.x,y:e.center.y,z:e.extent.zmin,spatialReference:this.spatialReference})}get origin(){return c(this.transform)?this.transform.getOriginPoint(this.spatialReference):this._boundingInfo.center}get extent(){return!this.loaded&&c(this.external)&&c(this.external.extent)?this.external.extent.clone():this._boundingInfo.extent}addComponent(e){this.loaded?(this.components||(this.components=[]),this.components.push(Q.from(e)),this.notifyChange("components")):$.getLogger(this.declaredClass).error("addComponent()","Mesh must be loaded before applying operations")}removeComponent(e){if(this.loaded){if(this.components){const t=this.components.indexOf(e);if(t!==-1)return this.components.splice(t,1),void this.notifyChange("components")}$.getLogger(this.declaredClass).error("removeComponent()","Provided component is not part of the list of components")}else $.getLogger(this.declaredClass).error("removeComponent()","Mesh must be loaded before applying operations")}rotate(e,t,n,r){return ce(be.x,e,V),ce(be.y,t,qe),ce(be.z,n,Qe),Ce(V,qe,V),Ce(V,Qe,V),Cn(this,V,r),this}offset(e,t,n,r){return this.loaded?(le[0]=e,le[1]=t,le[2]=n,hn(this,le,r),this):($.getLogger(this.declaredClass).error("offset()","Mesh must be loaded before applying operations"),this)}scale(e,t){return this.loaded?(In(this,e,t),this):($.getLogger(this.declaredClass).error("scale()","Mesh must be loaded before applying operations"),this)}centerAt(e,t){return this.loaded?(en(this,e,t),this):($.getLogger(this.declaredClass).error("centerAt()","Mesh must be loaded before applying operations"),this)}load(e){return c(this.external)&&this.addResolvingPromise(ln(this,this.external.source,e)),Promise.resolve(this)}updateExternalSource(e){this._set("external",e)}clone(){let e=null;if(this.components){const n=new Map,r=new Map;e=this.components.map(o=>o.cloneWithDeduplication(n,r))}const t={components:e,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes.clone(),transform:c(this.transform)?this.transform.clone():null,external:c(this.external)?{source:this.external.source,extent:c(this.external.extent)?this.external.extent.clone():null}:null};return new D(t)}vertexAttributesChanged(){this.notifyChange("vertexAttributes")}async toBinaryGLTF(e){const t=pe(()=>import("./gltfexport.7a934cfa.js"),["assets/gltfexport.7a934cfa.js","assets/vendor.f8a4aecc.js","assets/quat.405f2e8c.js","assets/mat3f64.9180efcb.js","assets/quatf64.1dc83f1c.js","assets/georeference.16e88713.js","assets/mat4f64.3068072d.js","assets/spatialReferenceEllipsoidUtils.6df09b40.js","assets/BufferView.f85a6ea0.js","assets/vec33.15e9228c.js","assets/enums.3c1fa5b5.js","assets/imageutils.5a0097f3.js","assets/resourceUtils.cd9a6317.js","assets/basicInterfaces.67cafc7c.js","assets/earcut.a219bf29.js","assets/deduplicate.6249260b.js","assets/Indices.ce4e4e13.js"]),n=this.load(),r=await Promise.all([t,n]),{toBinaryGLTF:o}=r[0];return o(this,e)}static createBox(e,t){if(!(e instanceof _))return $.getLogger(z).error(".createBox()","expected location to be a Point instance"),null;const n=new D(ie(yn(),e,t));return t&&t.imageFace&&t.imageFace!=="all"?xn(n,t.imageFace):n}static createSphere(e,t){return e instanceof _?new D(ie(wn(t&&t.densificationFactor||0),e,t)):($.getLogger(z).error(".createSphere()","expected location to be a Point instance"),null)}static createCylinder(e,t){return e instanceof _?new D(ie(vn(t&&t.densificationFactor||0),e,t)):($.getLogger(z).error(".createCylinder()","expected location to be a Point instance"),null)}static createPlane(e,t){var o;if(!(e instanceof _))return $.getLogger(z).error(".createPlane()","expected location to be a Point instance"),null;const n=(o=t==null?void 0:t.facing)!=null?o:"up",r=$n(n,t==null?void 0:t.size);return new D(ie(An(n),e,{...t,size:r}))}static createFromPolygon(e,t){var r;if(!(e instanceof Pt))return $.getLogger(z).error(".createFromPolygon()","expected polygon to be a Polygon instance"),null;const n=Xt(e);return new D({vertexAttributes:new T({position:n.position}),components:[new Q({faces:n.faces,shading:"flat",material:(r=t==null?void 0:t.material)!=null?r:null})],spatialReference:e.spatialReference})}static async createFromGLTF(e,t,n){if(!(e instanceof _))throw $.getLogger(z).error(".createfromGLTF()","expected location to be a Point instance"),new Me("invalid-input","Expected location to be a Point instance");const{loadGLTFMesh:r}=await Oe(pe(()=>import("./loadGLTFMesh.e2759058.js"),["assets/loadGLTFMesh.e2759058.js","assets/vendor.f8a4aecc.js","assets/mat3f64.9180efcb.js","assets/BufferView.f85a6ea0.js","assets/vec33.15e9228c.js","assets/DefaultMaterial_COLOR_GAMMA.ce02cd85.js","assets/types.bf551170.js","assets/mat4f64.3068072d.js","assets/enums.3c1fa5b5.js","assets/Version.cb16e629.js","assets/quat.405f2e8c.js","assets/quatf64.1dc83f1c.js","assets/resourceUtils.cd9a6317.js","assets/basicInterfaces.67cafc7c.js","assets/Indices.ce4e4e13.js","assets/georeference.16e88713.js","assets/spatialReferenceEllipsoidUtils.6df09b40.js","assets/earcut.a219bf29.js","assets/deduplicate.6249260b.js"]),n);return new D(await r(e,t,n))}static createWithExternalSource(e,t,n){var a,i,l,u;const r=(a=n==null?void 0:n.extent)!=null?a:null,o=(l=(i=n==null?void 0:n.transform)==null?void 0:i.clone())!=null?l:new me;o.origin=[e.x,e.y,(u=e.z)!=null?u:0];const s=e.spatialReference;return new D({external:{source:t,extent:r},transform:o,spatialReference:s})}static createIncomplete(e,t){var s,a,i;const n=(a=(s=t==null?void 0:t.transform)==null?void 0:s.clone())!=null?a:new me;n.origin=[e.x,e.y,(i=e.z)!=null?i:0];const r=e.spatialReference,o=new D({transform:n,spatialReference:r});return o.addResolvingPromise(Promise.reject(new Me("mesh-incomplete","Mesh resources are not complete"))),o}};p([d({type:[Q],json:{write:!0}})],R.prototype,"components",void 0),p([d({type:me,json:{write:!0}})],R.prototype,"transform",void 0),p([d({constructOnly:!0})],R.prototype,"external",void 0),p([d({readOnly:!0})],R.prototype,"hasExtent",null),p([d({readOnly:!0})],R.prototype,"_boundingInfo",null),p([d({readOnly:!0})],R.prototype,"anchor",null),p([d({readOnly:!0})],R.prototype,"origin",null),p([d({readOnly:!0,json:{read:!1}})],R.prototype,"extent",null),p([d({readOnly:!0,json:{read:!1,write:!0,default:!0}})],R.prototype,"hasZ",void 0),p([d({readOnly:!0,json:{read:!1,write:!0,default:!1}})],R.prototype,"hasM",void 0),p([d({type:T,nonNullable:!0,json:{write:!0}})],R.prototype,"vertexAttributes",void 0),R=D=p([ee(z)],R);const be={x:ve(1,0,0),y:ve(0,1,0),z:ve(0,0,1)},V=se(),qe=se(),Qe=se(),le=M(),Ke=R;function En(e,t,n){var f;const r=n.features;n.features=[],delete n.geometryType;const o=St.fromJSON(n);if(o.geometryType="mesh",!n.assetMaps)return o;const s=Wn(t,n.assetMaps),a=(f=o.spatialReference)!=null?f:Nt.WGS84,i=n.globalIdFieldName,{outFields:l}=e,u=c(l)&&l.length>0?Pn(l.includes("*")?null:new Set(l)):()=>({});for(const m of r){const h=Sn(m,i,a,t,s);c(h)&&o.features.push(new zt({geometry:h,attributes:u(m)}))}return o}function Pn(e){return({attributes:t})=>{if(!t)return{};if(!e)return t;for(const n in t)e.has(n)||delete t[n];return t}}function Sn(e,t,n,r,o){const s=e.attributes[t],a=o.get(s);if(a==null||a.status===S.FAILED||a.url==null)return null;const i=Nn(e,n,r),l=Re.fromJSON(e.geometry);l.spatialReference=n;const u=zn(e.attributes,r,a.projectVertices);return a.status===S.PENDING?Ke.createIncomplete(i,{extent:l,transform:u}):Ke.createWithExternalSource(i,[{name:a.name,source:a.url}],{extent:l,transform:u})}function Nn({attributes:e},t,{transformFieldRoles:n}){return new _({x:e[n.originX],y:e[n.originY],z:e[n.originZ],spatialReference:t})}function zn(e,{transformFieldRoles:t},n){return new me({translation:[e[t.translationX],-e[t.translationZ],e[t.translationY]],rotation:ce([e[t.rotationX],e[t.rotationZ],e[t.rotationY]],e[t.rotationDeg]),scale:[e[t.scaleX],e[t.scaleY],e[t.scaleZ]],geographic:n})}var S;function Wn(e,t){const n=new Map;for(const r of t){const o=r.parentGlobalId;if(o==null)continue;const s=r.assetName,a=r.assetURL,i=r.conversionStatus;let l=n.get(o);if(l==null)switch(l={name:s,status:S.FAILED,url:a,projectVertices:kn(r.flags).projectVertices},n.set(o,l),i){case"COMPLETED":case"SUBMITTED":l.status=S.COMPLETED;break;case"INPROGRESS":l.status=S.PENDING;break;default:l.status=S.FAILED}else console.warn(`Multiple asset parts not expected. Ignoring additional parts. conflicting assetname: ${r.assetName}`)}return n}function kn(e){return{projectVertices:e.includes("PROJECT_VERTICES")}}(function(e){e[e.FAILED=0]="FAILED",e[e.PENDING=1]="PENDING",e[e.COMPLETED=2]="COMPLETED"})(S||(S={}));const Jn=Object.freeze(Object.defineProperty({__proto__:null,meshFeatureSetFromJSON:En},Symbol.toStringTag,{value:"Module"}));export{Jn as a,Vt as c,Q as g,oe as m,T as p};
