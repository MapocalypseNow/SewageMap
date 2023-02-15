import{a as W}from"./vec33-28f8f792.js";import{s as ce,r as fe,c as de,e as le}from"./types-e1c0a5bf.js";import{di as Z,$ as pe,lU as ee,P as te,U as me,dP as ye,bm as he,s as Y,F as Te,h_ as xe,lV as _e,dj as be,f8 as we,h9 as ge,lP as Se,lW as Ee,hm as Ie,g4 as Ae,i7 as q,K as z,M as Oe,lK as Ue}from"./vendor-f61b19da.js";import{e as re,r as ne}from"./mat4f64-3d813481.js";import{D as j,L as V,C as l,E as N}from"./enums-64ab819c.js";import{r as se}from"./Version-fea5100e.js";import{x as Re}from"./quat-430c5228.js";import{e as Ne}from"./quatf64-7fd38d64.js";import{B as Be,g as Ce,d as Me,i as H,c as K,u as oe,x as ve,L as Le,O as $e,E as Fe,F as Pe,w as De,q as Ge,A as je,V as Ve}from"./BufferView-5bc6b457.js";function ke(n,e,t){if(n.count!==e.count)return void W.error("source and destination buffers need to have the same number of elements");const s=n.count,r=t[0],o=t[1],a=t[2],f=t[3],i=t[4],u=t[5],c=t[6],d=t[7],m=t[8],h=t[9],T=t[10],p=t[11],y=t[12],w=t[13],g=t[14],b=t[15],x=n.typedBuffer,S=n.typedBufferStride,_=e.typedBuffer,A=e.typedBufferStride;for(let U=0;U<s;U++){const O=U*S,C=U*A,M=_[C],v=_[C+1],L=_[C+2],$=_[C+3];x[O]=r*M+i*v+m*L+y*$,x[O+1]=o*M+u*v+h*L+w*$,x[O+2]=a*M+c*v+T*L+g*$,x[O+3]=f*M+d*v+p*L+b*$}}function He(n,e,t){if(n.count!==e.count)return void W.error("source and destination buffers need to have the same number of elements");const s=n.count,r=t[0],o=t[1],a=t[2],f=t[3],i=t[4],u=t[5],c=t[6],d=t[7],m=t[8],h=n.typedBuffer,T=n.typedBufferStride,p=e.typedBuffer,y=e.typedBufferStride;for(let w=0;w<s;w++){const g=w*T,b=w*y,x=p[b],S=p[b+1],_=p[b+2],A=p[b+3];h[g]=r*x+f*S+c*_,h[g+1]=o*x+i*S+d*_,h[g+2]=a*x+u*S+m*_,h[g+3]=A}}function Ye(n,e){const t=Math.min(n.count,e.count),s=n.typedBuffer,r=n.typedBufferStride,o=e.typedBuffer,a=e.typedBufferStride;for(let f=0;f<t;f++){const i=f*r,u=f*a,c=o[u],d=o[u+1],m=o[u+2],h=c*c+d*d+m*m;if(h>0){const T=1/Math.sqrt(h);s[i]=T*c,s[i+1]=T*d,s[i+2]=T*m}}}function ze(n,e,t){const s=Math.min(n.count,e.count),r=n.typedBuffer,o=n.typedBufferStride,a=e.typedBuffer,f=e.typedBufferStride;for(let i=0;i<s;i++){const u=i*o,c=i*f;r[u]=t*a[c],r[u+1]=t*a[c+1],r[u+2]=t*a[c+2],r[u+3]=t*a[c+3]}}function qe(n,e,t){const s=Math.min(n.count,e.count),r=n.typedBuffer,o=n.typedBufferStride,a=e.typedBuffer,f=e.typedBufferStride;for(let i=0;i<s;i++){const u=i*o,c=i*f;r[u]=a[c]>>t,r[u+1]=a[c+1]>>t,r[u+2]=a[c+2]>>t,r[u+3]=a[c+3]>>t}}Object.freeze(Object.defineProperty({__proto__:null,transformMat4:ke,transformMat3:He,normalize:Ye,scale:ze,shiftRight:qe},Symbol.toStringTag,{value:"Module"}));function Ke(n,e,t){const s=n.typedBuffer,r=n.typedBufferStride,o=e.typedBuffer,a=e.typedBufferStride,f=t?t.count:e.count;let i=(t&&t.dstIndex?t.dstIndex:0)*r,u=(t&&t.srcIndex?t.srcIndex:0)*a;for(let c=0;c<f;++c){for(let d=0;d<9;++d)s[i+d]=o[u+d];i+=r,u+=a}}Object.freeze(Object.defineProperty({__proto__:null,copy:Ke},Symbol.toStringTag,{value:"Module"}));function Je(n,e,t){const s=n.typedBuffer,r=n.typedBufferStride,o=e.typedBuffer,a=e.typedBufferStride,f=t?t.count:e.count;let i=(t&&t.dstIndex?t.dstIndex:0)*r,u=(t&&t.srcIndex?t.srcIndex:0)*a;for(let c=0;c<f;++c){for(let d=0;d<16;++d)s[i+d]=o[u+d];i+=r,u+=a}}Object.freeze(Object.defineProperty({__proto__:null,copy:Je},Symbol.toStringTag,{value:"Module"}));function Xe(n,e,t){const s=n.typedBuffer,r=n.typedBufferStride,o=e.typedBuffer,a=e.typedBufferStride,f=t?t.count:e.count;let i=(t&&t.dstIndex?t.dstIndex:0)*r,u=(t&&t.srcIndex?t.srcIndex:0)*a;for(let c=0;c<f;++c)s[i]=o[u],i+=r,u+=a}function D(n,e){const t=n.count;e||(e=new n.TypedArrayConstructor(t));for(let s=0;s<t;s++)e[s]=n.get(s);return e}Object.freeze(Object.defineProperty({__proto__:null,copy:Xe,makeDense:D},Symbol.toStringTag,{value:"Module"}));function ae(n,e,t){const s=n.typedBuffer,r=n.typedBufferStride,o=e.typedBuffer,a=e.typedBufferStride,f=t?t.count:e.count;let i=(t&&t.dstIndex?t.dstIndex:0)*r,u=(t&&t.srcIndex?t.srcIndex:0)*a;for(let c=0;c<f;++c)s[i]=o[u],s[i+1]=o[u+1],i+=r,u+=a}function Qe(n,e,t){const s=n.typedBuffer,r=n.typedBufferStride,o=e.typedBuffer,a=e.typedBufferStride,f=t?t.count:e.count;let i=(t&&t.dstIndex?t.dstIndex:0)*r,u=(t&&t.srcIndex?t.srcIndex:0)*a;if(ce(e.elementType)){const c=fe(e.elementType);if(de(e.elementType))for(let d=0;d<f;++d)s[i]=Math.max(o[u]/c,-1),s[i+1]=Math.max(o[u+1]/c,-1),i+=r,u+=a;else for(let d=0;d<f;++d)s[i]=o[u]/c,s[i+1]=o[u+1]/c,i+=r,u+=a}else ae(n,e,t);return n}function We(n,e,t,s){const r=n.typedBuffer,o=n.typedBufferStride,a=(s==null?void 0:s.count)??n.count;let f=((s==null?void 0:s.dstIndex)??0)*o;for(let i=0;i<a;++i)r[f]=e,r[f+1]=t,f+=o}Object.freeze(Object.defineProperty({__proto__:null,copy:ae,normalizeIntegerBuffer:Qe,fill:We},Symbol.toStringTag,{value:"Module"}));function Ze(n,e,t){const s=n.typedBuffer,r=n.typedBufferStride,o=e.typedBuffer,a=e.typedBufferStride,f=t?t.count:e.count;let i=(t&&t.dstIndex?t.dstIndex:0)*r,u=(t&&t.srcIndex?t.srcIndex:0)*a;for(let c=0;c<f;++c)s[i]=o[u],s[i+1]=o[u+1],s[i+2]=o[u+2],s[i+3]=o[u+3],i+=r,u+=a}function et(n,e,t,s,r,o){const a=n.typedBuffer,f=n.typedBufferStride,i=(o==null?void 0:o.count)??n.count;let u=((o==null?void 0:o.dstIndex)??0)*f;for(let c=0;c<i;++c)a[u]=e,a[u+1]=t,a[u+2]=s,a[u+3]=r,u+=f}Object.freeze(Object.defineProperty({__proto__:null,copy:Ze,fill:et},Symbol.toStringTag,{value:"Module"}));function Lt(n,e){return new n(new ArrayBuffer(e*n.ElementCount*le(n.ElementType)))}let $t=class{constructor(e){this._streamDataRequester=e}async loadJSON(e,t){return this._load("json",e,t)}async loadBinary(e,t){return Z(e)?(pe(t),ee(e)):this._load("binary",e,t)}async loadImage(e,t){return this._load("image",e,t)}async _load(e,t,s){if(te(this._streamDataRequester))return(await me(t,{responseType:tt[e]})).data;const r=await ye(this._streamDataRequester.request(t,e,s));if(r.ok===!0)return r.value;throw he(r.error),new Y("",`Request for resource failed: ${r.error}`)}};const tt={image:"image",binary:"array-buffer",json:"json"};let rt=class{error(e){throw new Y("gltf-loader-error",e)}errorUnsupported(e){throw new Y("gltf-loader-unsupported-feature",e)}errorUnsupportedIf(e,t){e&&this.errorUnsupported(t)}assert(e,t){e||this.error(t)}warn(e){Te.getLogger("esri.views.3d.glTF").warn(e)}warnUnsupported(e){this.warn("[Unsupported Feature] "+e)}warnUnsupportedIf(e,t){e&&this.warnUnsupported(t)}};function nt(n={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,colorTextureTransform:null,normalTextureTransform:null,occlusionTextureTransform:null,emissiveTextureTransform:null,metallicRoughnessTextureTransform:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...n}}function st(n,e={}){return{data:n,parameters:{wrap:{s:j.REPEAT,t:j.REPEAT,...e.wrap},noUnpackFlip:!0,mipmap:!1,...e}}}let J=class{constructor(e){this._data=e,this._offset4=0,this._dataUint32=new Uint32Array(this._data,0,Math.floor(this._data.byteLength/4))}readUint32(){const e=this._offset4;return this._offset4+=1,this._dataUint32[e]}readUint8Array(e){const t=4*this._offset4;return this._offset4+=e/4,new Uint8Array(this._data,t,e)}remainingBytes(){return this._data.byteLength-4*this._offset4}};var B,X;(function(n){n.SCALAR="SCALAR",n.VEC2="VEC2",n.VEC3="VEC3",n.VEC4="VEC4",n.MAT2="MAT2",n.MAT3="MAT3",n.MAT4="MAT4"})(B||(B={})),function(n){n[n.ARRAY_BUFFER=34962]="ARRAY_BUFFER",n[n.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(X||(X={}));const ie={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},ot={pbrMetallicRoughness:ie,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},at={ESRI_externalColorMixMode:"tint"},Q=(n={})=>{const e={...ie,...n.pbrMetallicRoughness},t=it({...at,...n.extras});return{...ot,...n,pbrMetallicRoughness:e,extras:t}};function it(n){switch(n.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:xe(n.ESRI_externalColorMixMode),n.ESRI_externalColorMixMode="tint"}return n}const ut={magFilter:V.LINEAR,minFilter:V.LINEAR_MIPMAP_LINEAR,wrapS:j.REPEAT,wrapT:j.REPEAT},ct=n=>({...ut,...n});function ft(n){let e,t;return n.replace(/^(.*\/)?([^/]*)$/,(s,r,o)=>(e=r||"",t=o||"","")),{dirPart:e,filePart:t}}const F={MAGIC:1179937895,CHUNK_TYPE_JSON:1313821514,CHUNK_TYPE_BIN:5130562,MIN_HEADER_LENGTH:20};class E{constructor(e,t,s,r,o){this._context=e,this._errorContext=t,this.uri=s,this.json=r,this._glbBuffer=o,this._bufferLoaders=new Map,this._textureLoaders=new Map,this._textureCache=new Map,this._materialCache=new Map,this._nodeParentMap=new Map,this._nodeTransformCache=new Map,this._baseUri=ft(this.uri).dirPart,this._checkVersionSupported(),this._checkRequiredExtensionsSupported(),t.errorUnsupportedIf(r.scenes==null,"Scenes must be defined."),t.errorUnsupportedIf(r.meshes==null,"Meshes must be defined"),t.errorUnsupportedIf(r.nodes==null,"Nodes must be defined."),this._computeNodeParents()}static async load(e,t,s,r){if(Z(s)){const f=be(s);if(f&&f.mediaType!=="model/gltf-binary")try{const u=JSON.parse(f.isBase64?atob(f.data):f.data);return new E(e,t,s,u)}catch{}const i=ee(s);if(E._isGLBData(i))return this._fromGLBData(e,t,s,i)}if(s.endsWith(".gltf")){const f=await e.loadJSON(s,r);return new E(e,t,s,f)}const o=await e.loadBinary(s,r);if(E._isGLBData(o))return this._fromGLBData(e,t,s,o);const a=await e.loadJSON(s,r);return new E(e,t,s,a)}static _isGLBData(e){if(e==null)return!1;const t=new J(e);return t.remainingBytes()>=4&&t.readUint32()===F.MAGIC}static async _fromGLBData(e,t,s,r){const o=await E._parseGLBData(t,r);return new E(e,t,s,o.json,o.binaryData)}static async _parseGLBData(e,t){const s=new J(t);e.assert(s.remainingBytes()>=12,"GLB binary data is insufficiently large.");const r=s.readUint32(),o=s.readUint32(),a=s.readUint32();e.assert(r===F.MAGIC,"Magic first 4 bytes do not fit to expected GLB value."),e.assert(t.byteLength>=a,"GLB binary data is smaller than header specifies."),e.errorUnsupportedIf(o!==2,"An unsupported GLB container version was detected. Only version 2 is supported.");let f,i,u=0;for(;s.remainingBytes()>=8;){const c=s.readUint32(),d=s.readUint32();u===0?(e.assert(d===F.CHUNK_TYPE_JSON,"First GLB chunk must be JSON."),e.assert(c>=0,"No JSON data found."),f=await ht(s.readUint8Array(c))):u===1?(e.errorUnsupportedIf(d!==F.CHUNK_TYPE_BIN,"Second GLB chunk expected to be BIN."),i=s.readUint8Array(c)):e.warnUnsupported("More than 2 GLB chunks detected. Skipping."),u+=1}return f||e.error("No GLB JSON chunk detected."),{json:f,binaryData:i}}async getBuffer(e,t){const s=this.json.buffers[e],r=this._errorContext;if(s.uri==null)return r.assert(this._glbBuffer!=null,"GLB buffer not present"),this._glbBuffer;const o=await this._getBufferLoader(e,t);return r.assert(o.byteLength===s.byteLength,"Buffer byte lengths should match."),o}async _getBufferLoader(e,t){const s=this._bufferLoaders.get(e);if(s)return s;const r=this.json.buffers[e].uri,o=this._context.loadBinary(this._resolveUri(r),t).then(a=>new Uint8Array(a));return this._bufferLoaders.set(e,o),o}async getAccessor(e,t){const s=this._errorContext;s.errorUnsupportedIf(!this.json.accessors,"Accessors missing.");const r=this.json.accessors[e];s.errorUnsupportedIf((r==null?void 0:r.bufferView)==null,"Some accessor does not specify a bufferView."),s.errorUnsupportedIf(r.type in[B.MAT2,B.MAT3,B.MAT4],`AttributeType ${r.type} is not supported`);const o=this.json.bufferViews[r.bufferView],a=await this.getBuffer(o.buffer,t),f=pt[r.type],i=mt[r.componentType],u=f*i,c=o.byteStride||u;return{raw:a.buffer,byteStride:c,byteOffset:a.byteOffset+(o.byteOffset||0)+(r.byteOffset||0),entryCount:r.count,isDenselyPacked:c===u,componentCount:f,componentByteSize:i,componentType:r.componentType,min:r.min,max:r.max,normalized:!!r.normalized}}async getIndexData(e,t){if(e.indices==null)return;const s=await this.getAccessor(e.indices,t);if(s.isDenselyPacked)switch(s.componentType){case l.UNSIGNED_BYTE:return new Uint8Array(s.raw,s.byteOffset,s.entryCount);case l.UNSIGNED_SHORT:return new Uint16Array(s.raw,s.byteOffset,s.entryCount);case l.UNSIGNED_INT:return new Uint32Array(s.raw,s.byteOffset,s.entryCount)}else switch(s.componentType){case l.UNSIGNED_BYTE:return D(this._wrapAccessor(Me,s));case l.UNSIGNED_SHORT:return D(this._wrapAccessor(Ce,s));case l.UNSIGNED_INT:return D(this._wrapAccessor(Be,s))}}async getPositionData(e,t){const s=this._errorContext;s.errorUnsupportedIf(e.attributes.POSITION==null,"No POSITION vertex data found.");const r=await this.getAccessor(e.attributes.POSITION,t);return s.errorUnsupportedIf(r.componentType!==l.FLOAT,"Expected type FLOAT for POSITION vertex attribute, but found "+l[r.componentType]),s.errorUnsupportedIf(r.componentCount!==3,"POSITION vertex attribute must have 3 components, but found "+r.componentCount.toFixed()),this._wrapAccessor(H,r)}async getNormalData(e,t){const s=this._errorContext;s.assert(e.attributes.NORMAL!=null,"No NORMAL vertex data found.");const r=await this.getAccessor(e.attributes.NORMAL,t);return s.errorUnsupportedIf(r.componentType!==l.FLOAT,"Expected type FLOAT for NORMAL vertex attribute, but found "+l[r.componentType]),s.errorUnsupportedIf(r.componentCount!==3,"NORMAL vertex attribute must have 3 components, but found "+r.componentCount.toFixed()),this._wrapAccessor(H,r)}async getTangentData(e,t){const s=this._errorContext;s.assert(e.attributes.TANGENT!=null,"No TANGENT vertex data found.");const r=await this.getAccessor(e.attributes.TANGENT,t);return s.errorUnsupportedIf(r.componentType!==l.FLOAT,"Expected type FLOAT for TANGENT vertex attribute, but found "+l[r.componentType]),s.errorUnsupportedIf(r.componentCount!==4,"TANGENT vertex attribute must have 4 components, but found "+r.componentCount.toFixed()),new K(r.raw,r.byteOffset,r.byteStride,r.byteOffset+r.byteStride*r.entryCount)}async getTextureCoordinates(e,t){const s=this._errorContext;s.assert(e.attributes.TEXCOORD_0!=null,"No TEXCOORD_0 vertex data found.");const r=await this.getAccessor(e.attributes.TEXCOORD_0,t);return s.errorUnsupportedIf(r.componentCount!==2,"TEXCOORD_0 vertex attribute must have 2 components, but found "+r.componentCount.toFixed()),r.componentType===l.FLOAT?this._wrapAccessor(oe,r):(s.errorUnsupportedIf(!r.normalized,"Integer component types are only supported for a normalized accessor for TEXCOORD_0."),yt(r))}async getVertexColors(e,t){const s=this._errorContext;s.assert(e.attributes.COLOR_0!=null,"No COLOR_0 vertex data found.");const r=await this.getAccessor(e.attributes.COLOR_0,t);if(s.errorUnsupportedIf(r.componentCount!==4&&r.componentCount!==3,"COLOR_0 attribute must have 3 or 4 components, but found "+r.componentCount.toFixed()),r.componentCount===4){if(r.componentType===l.FLOAT)return this._wrapAccessor(K,r);if(r.componentType===l.UNSIGNED_BYTE)return this._wrapAccessor(ve,r);if(r.componentType===l.UNSIGNED_SHORT)return this._wrapAccessor(Le,r)}else if(r.componentCount===3){if(r.componentType===l.FLOAT)return this._wrapAccessor(H,r);if(r.componentType===l.UNSIGNED_BYTE)return this._wrapAccessor($e,r);if(r.componentType===l.UNSIGNED_SHORT)return this._wrapAccessor(Fe,r)}s.errorUnsupported("Unsupported component type for COLOR_0 attribute: "+l[r.componentType])}hasPositions(e){return e.attributes.POSITION!==void 0}hasNormals(e){return e.attributes.NORMAL!==void 0}hasVertexColors(e){return e.attributes.COLOR_0!==void 0}hasTextureCoordinates(e){return e.attributes.TEXCOORD_0!==void 0}hasTangents(e){return e.attributes.TANGENT!==void 0}async getMaterial(e,t,s){var o,a,f,i,u,c,d,m,h,T;let r=e.material?this._materialCache.get(e.material):void 0;if(!r){const p=e.material!=null?Q(this.json.materials[e.material]):Q(),y=p.pbrMetallicRoughness,w=this.hasVertexColors(e),g=this.getTexture(y.baseColorTexture,t),b=this.getTexture(p.normalTexture,t),x=s?this.getTexture(p.occlusionTexture,t):void 0,S=s?this.getTexture(p.emissiveTexture,t):void 0,_=s?this.getTexture(y.metallicRoughnessTexture,t):void 0,A=e.material!=null?e.material:-1;r={alphaMode:p.alphaMode,alphaCutoff:p.alphaCutoff,color:y.baseColorFactor,doubleSided:!!p.doubleSided,colorTexture:await g,normalTexture:await b,name:p.name,id:A,occlusionTexture:await x,emissiveTexture:await S,emissiveFactor:p.emissiveFactor,metallicFactor:y.metallicFactor,roughnessFactor:y.roughnessFactor,metallicRoughnessTexture:await _,hasVertexColors:w,ESRI_externalColorMixMode:p.extras.ESRI_externalColorMixMode,colorTextureTransform:(a=(o=y==null?void 0:y.baseColorTexture)==null?void 0:o.extensions)==null?void 0:a.KHR_texture_transform,normalTextureTransform:(i=(f=p.normalTexture)==null?void 0:f.extensions)==null?void 0:i.KHR_texture_transform,occlusionTextureTransform:(c=(u=p.occlusionTexture)==null?void 0:u.extensions)==null?void 0:c.KHR_texture_transform,emissiveTextureTransform:(m=(d=p.emissiveTexture)==null?void 0:d.extensions)==null?void 0:m.KHR_texture_transform,metallicRoughnessTextureTransform:(T=(h=y==null?void 0:y.metallicRoughnessTexture)==null?void 0:h.extensions)==null?void 0:T.KHR_texture_transform}}return r}async getTexture(e,t){if(!e)return;this._errorContext.errorUnsupportedIf((e.texCoord||0)!==0,"Only TEXCOORD with index 0 is supported.");const s=e.index,r=this._errorContext,o=this.json.textures[s],a=ct(o.sampler!=null?this.json.samplers[o.sampler]:{});r.errorUnsupportedIf(o.source==null,"Source is expected to be defined for a texture.");const f=this.json.images[o.source],i=await this._loadTextureImageData(s,o,t);return we(this._textureCache,s,()=>{const u=d=>d===33071||d===33648||d===10497,c=d=>(r.error(`Unexpected TextureSampler WrapMode: ${d}. Using default REPEAT(10497).`),10497);return{data:i,wrapS:u(a.wrapS)?a.wrapS:c(a.wrapS),wrapT:u(a.wrapT)?a.wrapT:c(a.wrapT),minFilter:a.minFilter,name:f.name,id:s}})}getNodeTransform(e){if(e===void 0)return lt;let t=this._nodeTransformCache.get(e);if(!t){const s=this.getNodeTransform(this._getNodeParent(e)),r=this.json.nodes[e];r.matrix?t=ge(re(),s,r.matrix):r.translation||r.rotation||r.scale?(t=ne(s),r.translation&&Se(t,t,r.translation),r.rotation&&(P[3]=Re(P,r.rotation),Ee(t,t,P[3],P)),r.scale&&Ie(t,t,r.scale)):t=s,this._nodeTransformCache.set(e,t)}return t}_wrapAccessor(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)}_resolveUri(e){return Ae(e,this._baseUri)}_getNodeParent(e){return this._nodeParentMap.get(e)}_checkVersionSupported(){const e=se.parse(this.json.asset.version,"glTF");dt.validate(e)}_checkRequiredExtensionsSupported(){const e=this.json,t=this._errorContext;e.extensionsRequired&&e.extensionsRequired.length!==0&&t.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}_computeNodeParents(){this.json.nodes.forEach((e,t)=>{e.children&&e.children.forEach(s=>{this._nodeParentMap.set(s,t)})})}async _loadTextureImageData(e,t,s){const r=this._textureLoaders.get(e);if(r)return r;const o=this._createTextureLoader(t,s);return this._textureLoaders.set(e,o),o}async _createTextureLoader(e,t){const s=this.json.images[e.source];if(s.uri)return this._context.loadImage(this._resolveUri(s.uri),t);const r=this._errorContext;r.errorUnsupportedIf(s.bufferView==null,"Image bufferView must be defined."),r.errorUnsupportedIf(s.mimeType==null,"Image mimeType must be defined.");const o=this.json.bufferViews[s.bufferView],a=await this.getBuffer(o.buffer,t);return r.errorUnsupportedIf(o.byteStride!=null,"byteStride not supported for image buffer"),Tt(new Uint8Array(a.buffer,a.byteOffset+(o.byteOffset||0),o.byteLength),s.mimeType)}async getLoadedBuffersSize(){if(this._glbBuffer)return this._glbBuffer.byteLength;const e=await q(Array.from(this._bufferLoaders.values())),t=await q(Array.from(this._textureLoaders.values()));return e.reduce((s,r)=>s+((r==null?void 0:r.byteLength)??0),0)+t.reduce((s,r)=>s+(r?r.width*r.height*4:0),0)}}const dt=new se(2,0,"glTF"),lt=_e(re(),Math.PI/2),P=Ne(),pt={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},mt={[l.BYTE]:1,[l.UNSIGNED_BYTE]:1,[l.SHORT]:2,[l.UNSIGNED_SHORT]:2,[l.FLOAT]:4,[l.UNSIGNED_INT]:4};function yt(n){switch(n.componentType){case l.BYTE:return new Ve(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount);case l.UNSIGNED_BYTE:return new je(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount);case l.SHORT:return new Ge(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount);case l.UNSIGNED_SHORT:return new De(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount);case l.UNSIGNED_INT:return new Pe(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount);case l.FLOAT:return new oe(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount)}}async function ht(n){return new Promise((e,t)=>{const s=new Blob([n]),r=new FileReader;r.onload=()=>{const o=r.result;e(JSON.parse(o))},r.onerror=o=>{t(o)},r.readAsText(s)})}async function Tt(n,e){return new Promise((t,s)=>{const r=new Blob([n],{type:e}),o=URL.createObjectURL(r),a=new Image,f=()=>{URL.revokeObjectURL(o),"decode"in a?a.decode().then(()=>t(a),()=>t(a)).then(u):(t(a),u())},i=c=>{URL.revokeObjectURL(o),s(c),u()},u=()=>{a.removeEventListener("load",f),a.removeEventListener("error",i)};a.addEventListener("load",f),a.addEventListener("error",i),a.src=o})}let xt=0;async function Gt(n,e,t={},s=!0){const r=await E.load(n,G,e,t),o="gltf_"+xt++,a={lods:[],materials:new Map,textures:new Map,meta:_t(r)},f=!(!r.json.asset.extras||r.json.asset.extras.ESRI_type!=="symbolResource"),i=new Map;await bt(r,async(c,d,m,h)=>{const T=i.get(m)??0;i.set(m,T+1);const p=c.mode!==void 0?c.mode:N.TRIANGLES,y=p===N.TRIANGLES||p===N.TRIANGLE_STRIP||p===N.TRIANGLE_FAN?p:null;if(te(y))return void G.warnUnsupported("Unsupported primitive mode ("+N[p]+"). Skipping primitive.");if(!r.hasPositions(c))return void G.warn("Skipping primitive without POSITION vertex attribute.");const w=r.getPositionData(c,t),g=r.getMaterial(c,t,s),b=r.hasNormals(c)?r.getNormalData(c,t):null,x=r.hasTangents(c)?r.getTangentData(c,t):null,S=r.hasTextureCoordinates(c)?r.getTextureCoordinates(c,t):null,_=r.hasVertexColors(c)?r.getVertexColors(c,t):null,A=r.getIndexData(c,t),U={transform:ne(d),attributes:{position:await w,normal:b?await b:null,texCoord0:S?await S:null,color:_?await _:null,tangent:x?await x:null},indices:await A,primitiveType:y,material:gt(a,await g,o)};let O=null;z(a.meta)&&z(a.meta.ESRI_lod)&&a.meta.ESRI_lod.metric==="screenSpaceRadius"&&(O=a.meta.ESRI_lod.thresholds[m]),a.lods[m]=a.lods[m]||{parts:[],name:h,lodThreshold:O},a.lods[m].parts[T]=U});for(const c of a.lods)c.parts=c.parts.filter(d=>!!d);const u=await r.getLoadedBuffersSize();return{model:a,meta:{isEsriSymbolResource:f,uri:r.uri},customMeta:{},size:u}}function _t(n){const e=n.json;let t=null;return e.nodes.forEach(s=>{const r=s.extras;z(r)&&(r.ESRI_proxyEllipsoid||r.ESRI_lod)&&(t=r)}),t}async function bt(n,e){const t=n.json,s=t.scenes[t.scene||0].nodes,r=s.length>1,o=[];for(const f of s){const i=t.nodes[f];o.push(a(f,0)),wt(i)&&!r&&i.extensions.MSFT_lod.ids.forEach((u,c)=>a(u,c+1))}async function a(f,i){const u=t.nodes[f],c=n.getNodeTransform(f);if(G.warnUnsupportedIf(u.weights!=null,"Morph targets are not supported."),u.mesh!=null){const d=t.meshes[u.mesh];for(const m of d.primitives)o.push(e(m,c,i,d.name))}for(const d of u.children||[])o.push(a(d,i))}await Promise.all(o)}function wt(n){return n.extensions&&n.extensions.MSFT_lod&&Array.isArray(n.extensions.MSFT_lod.ids)}function gt(n,e,t){const s=o=>{const a=`${t}_tex_${o&&o.id}${o&&o.name?"_"+o.name:""}`;if(o&&!n.textures.has(a)){const f=st(o.data,{wrap:{s:o.wrapS,t:o.wrapT},mipmap:St.includes(o.minFilter),noUnpackFlip:!0});n.textures.set(a,f)}return a},r=`${t}_mat_${e.id}_${e.name}`;if(!n.materials.has(r)){const o=nt({color:[e.color[0],e.color[1],e.color[2]],opacity:e.color[3],alphaMode:e.alphaMode,alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,colorMixMode:e.ESRI_externalColorMixMode,textureColor:e.colorTexture?s(e.colorTexture):void 0,textureNormal:e.normalTexture?s(e.normalTexture):void 0,textureOcclusion:e.occlusionTexture?s(e.occlusionTexture):void 0,textureEmissive:e.emissiveTexture?s(e.emissiveTexture):void 0,textureMetallicRoughness:e.metallicRoughnessTexture?s(e.metallicRoughnessTexture):void 0,emissiveFactor:[e.emissiveFactor[0],e.emissiveFactor[1],e.emissiveFactor[2]],colorTextureTransform:e.colorTextureTransform,normalTextureTransform:e.normalTextureTransform,occlusionTextureTransform:e.occlusionTextureTransform,emissiveTextureTransform:e.emissiveTextureTransform,metallicRoughnessTextureTransform:e.metallicRoughnessTextureTransform,metallicFactor:e.metallicFactor,roughnessFactor:e.roughnessFactor});n.materials.set(r,o)}return r}const G=new rt,St=[V.LINEAR_MIPMAP_LINEAR,V.LINEAR_MIPMAP_NEAREST],k=1024;function jt(n){if(Array.isArray(n)){if(n.length<k)return n;for(const e of n)if(e>=65536)return new Uint32Array(n);return new Uint16Array(n)}if(n.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return n;for(const e of n)if(e>=65536)return n;return new Uint16Array(n)}function Et(n){const e=3*n;return e<=k?new Array(e):e<=65536?new Uint16Array(e):new Uint32Array(e)}let I=(()=>{const n=new Uint32Array(131072);for(let e=0;e<n.length;++e)n[e]=e;return n})();const ue=[0],R=(()=>{const n=new Uint16Array(65536);for(let e=0;e<n.length;++e)n[e]=e;return n})();function It(n){if(n===1)return ue;if(n<k)return Array.from(new Uint16Array(R.buffer,0,n));if(n<R.length)return new Uint16Array(R.buffer,0,n);if(n>I.length){const e=Math.max(2*I.length,n);I=new Uint32Array(e);for(let t=0;t<I.length;t++)I[t]=t}return new Uint32Array(I.buffer,0,n)}function Vt(n){if(n===1)return ue;if(n<k)return Array.from(new Uint16Array(R.buffer,0,n));if(n<R.length)return new Uint16Array(R.slice(0,n));if(n>I.length){const e=new Uint32Array(n);for(let t=0;t<e.length;t++)e[t]=t;return e}return new Uint32Array(I.slice(0,n))}function kt(n,e=It){return typeof n=="number"?e(n):Oe(n)||Ue(n)?new Uint32Array(n):n}function Ht(n){const e=typeof n=="number"?n:n.length;if(e<3)return[];const t=e-2,s=Et(t);if(typeof n=="number"){let r=0;for(let o=0;o<t;o+=1)o%2==0?(s[r++]=o,s[r++]=o+1,s[r++]=o+2):(s[r++]=o+1,s[r++]=o,s[r++]=o+2)}else{let r=0;for(let o=0;o<t;o+=1)if(o%2==0){const a=n[o],f=n[o+1],i=n[o+2];s[r++]=a,s[r++]=f,s[r++]=i}else{const a=n[o+1],f=n[o],i=n[o+2];s[r++]=a,s[r++]=f,s[r++]=i}}return s}function Yt(n){const e=typeof n=="number"?n:n.length;if(e<3)return new Uint16Array(0);const t=e-2,s=t<=65536?new Uint16Array(3*t):new Uint32Array(3*t);if(typeof n=="number"){let r=0;for(let o=0;o<t;++o)s[r++]=0,s[r++]=o+1,s[r++]=o+2;return s}{const r=n[0];let o=n[1],a=0;for(let f=0;f<t;++f){const i=n[f+2];s[a++]=r,s[a++]=o,s[a++]=i,o=i}return s}}const zt=2.1;export{$t as a,He as b,Qe as c,ze as d,Ze as e,Ht as f,kt as g,Ye as h,Yt as i,We as j,qe as k,Vt as l,Gt as m,jt as n,zt as o,Lt as r,et as t,It as u};
