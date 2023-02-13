import{a as Do}from"./devEnvironmentUtils.js";import{t as G,r as f,lB as Fo,lC as zo,lD as nr,ai as lt,bI as Xr,gy as Vo,ft as Mi,a$ as Pe,gJ as zt,hZ as pr,ah as N,hY as Bo,hw as Oi,gt as Ce,aU as br,gs as Pi,aj as K,gv as ce,aV as ve,lE as Go,gC as at,bP as Uo,D as Sr,b as wr,aL as $e,eX as Bt,b3 as Kt,i5 as Yt,_ as Ot,d3 as Ho,bN as ko,ab as Gt,aN as Wo,k3 as Kr,d5 as jo,hS as mt,lF as ft,ac as Yr,lG as qo,aH as Xo,aI as Ko,a4 as $i,gx as Zr,hv as Ye,au as Yo,fn as Be,dQ as Zo,ln as Jo,e_ as Qo,lH as ea,lI as ta,gu as yr,aB as ra,aa as ia,hT as Jr,lJ as Li,lK as Ri,a9 as Qr,a as At,iK as Ar,lL as vr,lM as oa,e as x,gw as oe,i4 as Zt,gn as aa,lN as gr,go as na,gp as sa,f6 as la,h as ca,lO as da,dM as Ei,U as ua,bx as Ni,lp as ei,lP as Ii,k9 as Ut,fz as ha,gP as ti,gB as ma,lo as ri}from"./index.js";import{e as Jt}from"./mat3f64.js";import{o as Ht,r as fa,e as Cr}from"./mat4f64.js";import{c as kt,x as Ct,u as Di,i as tt,L as pa,O as ii,E as va}from"./BufferView.js";import{t as ga,r as xa,f as oi,e as Ta}from"./vec33.js";import{m as _a,n as ba,o as Ze,r as He,a as Sa,b as wa,c as ai,e as ya,t as Aa,i as Ca,f as Ma,d as Oa}from"./DefaultMaterial_COLOR_GAMMA.js";import{t as sr}from"./resourceUtils2.js";import{t as Pa}from"./NestedMap.js";import{r as Fi}from"./Version.js";import{t as zi}from"./requestImageUtils.js";import{r as Se,s as Je}from"./Attribute.js";import{t as $a,D as lr,c as pt,N as xr,a as Le,u as X,n as Re,e as Pt}from"./basicInterfaces.js";import{s as j,v as La}from"./Util2.js";import{s as Vi,R as Bi}from"./sphere.js";import{o as ni,n as Ra}from"./Indices.js";import{O as h}from"./VertexAttribute.js";import{o as s,n as Qt,W as Mr,_ as Or,a as nt,c as Ea,A as Na,h as Ia,l as Da,b as Fa,d as za,S as Va}from"./OrderIndependentTransparency.js";import{u as ye,P as Ue,L as We,C as ue,F as Ba,D as Qe,M as si,G as li,Y as Ga,V as Ua,E as _t,I as Ee,O as se}from"./enums.js";import{E as Oe,a as Ha}from"./Texture.js";import{_ as ka,f as Wa,E as ja,x as qa,n as Xa}from"./VertexArrayObject.js";import{t as he}from"./VertexElementDescriptor.js";import{T as Ka}from"./InterleavedLayout.js";import{r as Ya,n as Za}from"./vec3f32.js";import{S as Ja}from"./quat.js";import{e as Qa}from"./quatf64.js";import{o as en,r as tn}from"./doublePrecisionUtils.js";function vt(t){if(G(t))return null;const e=f(t.offset)?t.offset:Fo,r=f(t.rotation)?t.rotation:0,i=f(t.scale)?t.scale:zo,o=nr(1,0,0,0,1,0,e[0],e[1],1),a=nr(Math.cos(r),-Math.sin(r),0,Math.sin(r),Math.cos(r),0,0,0,1),n=nr(i[0],0,0,0,i[1],0,0,0,1),l=lt();return Xr(l,a,n),Xr(l,o,l),l}class rn{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class on{constructor(e,r,i){this.name=e,this.lodThreshold=r,this.pivotOffset=i,this.stageResources=new rn,this.numberOfVertices=0}}function an(t){if(t.length<Vo)return Array.from(t);if(Array.isArray(t))return Float64Array.from(t);switch(t.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(t);case 2:return Uint16Array.from(t);case 4:return Float32Array.from(t);default:return Float64Array.from(t)}}class Pr{constructor(e,r,i,o){this.primitiveIndices=e,this._numIndexPerPrimitive=r,this.indices=i,this.position=o,this._children=void 0,j(e.length>=1),j(i.length%this._numIndexPerPrimitive==0),j(i.length>=e.length*this._numIndexPerPrimitive),j(o.size===3||o.size===4);const{data:a,size:n}=o,l=e.length;let d=n*i[this._numIndexPerPrimitive*e[0]];Ge.clear(),Ge.push(d);const c=Pe(a[d],a[d+1],a[d+2]),u=zt(c);for(let p=0;p<l;++p){const g=this._numIndexPerPrimitive*e[p];for(let b=0;b<this._numIndexPerPrimitive;++b){d=n*i[g+b],Ge.push(d);let _=a[d];c[0]=Math.min(_,c[0]),u[0]=Math.max(_,u[0]),_=a[d+1],c[1]=Math.min(_,c[1]),u[1]=Math.max(_,u[1]),_=a[d+2],c[2]=Math.min(_,c[2]),u[2]=Math.max(_,u[2])}}this.bbMin=c,this.bbMax=u;const m=pr(N(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(u[0]-c[0],u[1]-c[1]),u[2]-c[2]);let v=this.radius*this.radius;for(let p=0;p<Ge.length;++p){d=Ge.getItemAt(p);const g=a[d]-m[0],b=a[d+1]-m[1],_=a[d+2]-m[2],w=g*g+b*b+_*_;if(w<=v)continue;const V=Math.sqrt(w),R=.5*(V-this.radius);this.radius=this.radius+R,v=this.radius*this.radius;const O=R/V;m[0]+=g*O,m[1]+=b*O,m[2]+=_*O}this.center=m,Ge.clear()}getChildren(){if(this._children||Bo(this.bbMin,this.bbMax)<=1)return this._children;const e=pr(N(),this.bbMin,this.bbMax,.5),r=this.primitiveIndices.length,i=new Uint8Array(r),o=new Array(8);for(let c=0;c<8;++c)o[c]=0;const{data:a,size:n}=this.position;for(let c=0;c<r;++c){let u=0;const m=this._numIndexPerPrimitive*this.primitiveIndices[c];let v=n*this.indices[m],p=a[v],g=a[v+1],b=a[v+2];for(let _=1;_<this._numIndexPerPrimitive;++_){v=n*this.indices[m+_];const w=a[v],V=a[v+1],R=a[v+2];w<p&&(p=w),V<g&&(g=V),R<b&&(b=R)}p<e[0]&&(u|=1),g<e[1]&&(u|=2),b<e[2]&&(u|=4),i[c]=u,++o[u]}let l=0;for(let c=0;c<8;++c)o[c]>0&&++l;if(l<2)return;const d=new Array(8);for(let c=0;c<8;++c)d[c]=o[c]>0?new Uint32Array(o[c]):void 0;for(let c=0;c<8;++c)o[c]=0;for(let c=0;c<r;++c){const u=i[c];d[u][o[u]++]=this.primitiveIndices[c]}this._children=new Array;for(let c=0;c<8;++c)d[c]!==void 0&&this._children.push(new Pr(d[c],this._numIndexPerPrimitive,this.indices,this.position));return this._children}static prune(){Ge.prune()}}const Ge=new Mi({deallocator:null});class $r{constructor(){this.id=Oi()}unload(){}}var Ae;(function(t){t[t.Layer=0]="Layer",t[t.Object=1]="Object",t[t.Mesh=2]="Mesh",t[t.Line=3]="Line",t[t.Point=4]="Point",t[t.Material=5]="Material",t[t.Texture=6]="Texture",t[t.COUNT=7]="COUNT"})(Ae||(Ae={}));function nn(t){return t?{p0:zt(t.p0),p1:zt(t.p1),p2:zt(t.p2)}:{p0:N(),p1:N(),p2:N()}}function sn(t,e,r){return Ce(cr,e,t),Ce(ci,r,t),br(Pi(cr,cr,ci))/2}new Vi(La);new Vi(()=>nn());const cr=N(),ci=N();function ln(t,e,r){if(!t||!e)return!1;const{size:i,data:o}=t;K(r,0,0,0),K(ne,0,0,0);let a=0,n=0;for(let l=0;l<e.length-2;l+=3){const d=e[l+0]*i,c=e[l+1]*i,u=e[l+2]*i;K(q,o[d+0],o[d+1],o[d+2]),K(we,o[c+0],o[c+1],o[c+2]),K(Et,o[u+0],o[u+1],o[u+2]);const m=sn(q,we,Et);m?(ce(q,q,we),ce(q,q,Et),ve(q,q,1/3*m),ce(r,r,q),a+=m):(ce(ne,ne,q),ce(ne,ne,we),ce(ne,ne,Et),n+=3)}return(n!==0||a!==0)&&(a!==0?(ve(r,r,1/a),!0):n!==0&&(ve(r,ne,1/n),!0))}function cn(t,e,r){if(!t||!e)return!1;const{size:i,data:o}=t;K(r,0,0,0);let a=-1,n=0;for(let l=0;l<e.length;l++){const d=e[l]*i;a!==d&&(r[0]+=o[d+0],r[1]+=o[d+1],r[2]+=o[d+2],n++),a=d}return n>1&&ve(r,r,1/n),n>0}function dn(t,e,r,i){if(!t)return!1;K(i,0,0,0),K(ne,0,0,0);let o=0,a=0;const{size:n,data:l}=t,d=e?e.length-1:l.length/n-1,c=d+(r?2:0);for(let u=0;u<c;u+=2){const m=u<d?u:d,v=u<d?u+1:0,p=(e?e[m]:m)*n,g=(e?e[v]:v)*n;q[0]=l[p],q[1]=l[p+1],q[2]=l[p+2],we[0]=l[g],we[1]=l[g+1],we[2]=l[g+2],ve(q,ce(q,q,we),.5);const b=Go(q,we);b>0?(ce(i,i,ve(q,q,b)),o+=b):o===0&&(ce(ne,ne,q),a++)}return o!==0?(ve(i,i,1/o),!0):a!==0&&(ve(i,ne,1/a),!0)}const q=N(),we=N(),Et=N(),ne=N();class un{constructor(e){this.channel=e,this.id=Oi()}}function hn(t,e){return G(t)&&(t=[]),t.push(e),t}function mn(t,e){if(G(t))return null;const r=t.filter(i=>i!==e);return r.length===0?null:r}class er extends $r{constructor(e,r,i=[],o=null,a=Ae.Mesh,n=null,l=-1){super(),this.material=e,this.mapPositions=o,this.type=a,this.objectAndLayerIdColor=n,this.edgeIndicesLength=l,this.visible=!0,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[d,c]of r)c&&this._vertexAttributes.set(d,{...c});if(i==null||i.length===0){const d=fn(this._vertexAttributes),c=ni(d);this.edgeIndicesLength=this.edgeIndicesLength<0?d:this.edgeIndicesLength;for(const u of this._vertexAttributes.keys())this._indices.set(u,c)}else for(const[d,c]of i)c&&(this._indices.set(d,Ra(c)),d===h.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(d).length:this.edgeIndicesLength))}instantiate(e={}){const r=new er(e.material||this.material,[],void 0,this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._vertexAttributes.forEach((i,o)=>{i.exclusive=!1,r._vertexAttributes.set(o,i)}),this._indices.forEach((i,o)=>r._indices.set(o,i)),r._boundingInfo=this._boundingInfo,r.transformation=e.transformation||this.transformation,r}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){let r=this._vertexAttributes.get(e);return r&&!r.exclusive&&(r={...r,exclusive:!0,data:an(r.data)},this._vertexAttributes.set(e,r)),r}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get faceCount(){return this.indexCount/3}get boundingInfo(){return G(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return!!(this.type===Ae.Mesh?this._computeAttachmentOriginTriangles(e):this.type===Ae.Line?this._computeAttachmentOriginLines(e):this._computeAttachmentOriginPoints(e))&&(f(this._transformation)&&at(e,e,this._transformation),!0)}_computeAttachmentOriginTriangles(e){const r=this.indices.get(h.POSITION),i=this.vertexAttributes.get(h.POSITION);return ln(i,r,e)}_computeAttachmentOriginLines(e){const r=this.vertexAttributes.get(h.POSITION),i=this.indices.get(h.POSITION);return dn(r,i,i&&pn(this.material.parameters,r,i),e)}_computeAttachmentOriginPoints(e){const r=this.indices.get(h.POSITION),i=this.vertexAttributes.get(h.POSITION);return cn(i,r,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get(h.POSITION),r=this.vertexAttributes.get(h.POSITION);if(!e||e.length===0||!r)return null;const i=this.type===Ae.Mesh?3:1;j(e.length%i==0,"Indexing error: "+e.length+" not divisible by "+i);const o=ni(e.length/i);return new Pr(o,i,e,r)}get transformation(){return Uo(this._transformation,Ht)}set transformation(e){this._transformation=e&&e!==Ht?fa(e):null}get shaderTransformation(){return f(this._shaderTransformer)?this._shaderTransformer(this.transformation):this.transformation}get shaderTransformer(){return this._shaderTransformer}set shaderTransformer(e){this._shaderTransformer=e}get hasVolatileTransformation(){return f(this._shaderTransformer)}addHighlight(){const e=new un($a.Highlight);return this.highlights=hn(this.highlights,e),e}removeHighlight(e){this.highlights=mn(this.highlights,e)}}function fn(t){const e=t.values().next().value;return e==null?0:e.data.length/e.size}function pn(t,e,r){return!(!("isClosed"in t)||!t.isClosed)&&(r?r.length>2:e.data.length>6)}function Lr(t,e=!0){t.attributes.add(h.POSITION,"vec2"),e&&t.varyings.add("uv","vec2"),t.vertex.code.add(s`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${e?s`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}var z;(function(t){t[t.Pass=0]="Pass",t[t.Draw=1]="Draw"})(z||(z={}));class J{constructor(e,r,i,o,a=null){this.name=e,this.type=r,this.arraySize=a,this.bind={[z.Pass]:null,[z.Draw]:null},f(i)&&f(o)&&(this.bind[i]=o)}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}}class te extends J{constructor(e,r){super(e,"vec4",z.Pass,(i,o,a)=>i.setUniform4fv(e,r(o,a)))}}const Gi=Sr.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class Ui{constructor(){this._includedModules=new Map}include(e,r){if(this._includedModules.has(e)){const i=this._includedModules.get(e);if(i!==r){Gi.error("Trying to include shader module multiple times with different sets of options.");const o=new Set;for(const a of Object.keys(i))i[a]!==e[a]&&o.add(a);for(const a of Object.keys(e))i[a]!==e[a]&&o.add(a);o.forEach(a=>console.error(`  ${a}: current ${i[a]} new ${e[a]}`))}}else this._includedModules.set(e,r),e(this.builder,r)}}class $t extends Ui{constructor(){super(...arguments),this.vertex=new di,this.fragment=new di,this.attributes=new xn,this.varyings=new Tn,this.extensions=new st,this.constants=new U}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const r=this.extensions.generateSource(e),i=this.attributes.generateSource(e),o=this.varyings.generateSource(),a=e==="vertex"?this.vertex:this.fragment,n=a.uniforms.generateSource(),l=a.code.generateSource(),d=e==="vertex"?bn:_n,c=this.constants.generateSource().concat(a.constants.generateSource());return`
${r.join(`
`)}

${d}

${c.join(`
`)}

${n.join(`
`)}

${i.join(`
`)}

${o.join(`
`)}

${l.join(`
`)}`}generateBind(e,r){const i=new Map;this.vertex.uniforms.entries.forEach(n=>{const l=n.bind[e];f(l)&&i.set(n.name,l)}),this.fragment.uniforms.entries.forEach(n=>{const l=n.bind[e];f(l)&&i.set(n.name,l)});const o=Array.from(i.values()),a=o.length;return(n,l,d)=>{for(let c=0;c<a;++c)o[c](r,n,l,d)}}}class vn{constructor(){this._entries=new Map}add(e){if(!Array.isArray(e))return this._add(e);for(const r of e)this._add(r)}get(e){return this._entries.get(e)}_add(e){if(G(e))Gi.error(`Trying to add null Uniform from ${new Error().stack}.`);else{if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new wr(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}}generateSource(){return Array.from(this._entries.values()).map(e=>f(e.arraySize)?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`)}get entries(){return Array.from(this._entries.values())}}class gn{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class di extends Ui{constructor(){super(...arguments),this.uniforms=new vn,this.code=new gn,this.constants=new U}get builder(){return this}}class xn{constructor(){this._entries=new Array}add(e,r){this._entries.push([e,r])}generateSource(e){return e==="fragment"?[]:this._entries.map(r=>`attribute ${r[1]} ${r[0]};`)}}class Tn{constructor(){this._entries=new Array}add(e,r){this._entries.push([e,r])}generateSource(){return this._entries.map(e=>`varying ${e[1]} ${e[0]};`)}}class st{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const r=e==="vertex"?st.ALLOWLIST_VERTEX:st.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(i=>r.includes(i)).map(i=>`#extension ${i} : enable`)}}st.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],st.ALLOWLIST_VERTEX=[];class U{constructor(){this._entries=new Set}add(e,r,i){let o="ERROR_CONSTRUCTOR_STRING";switch(r){case"float":o=U._numberToFloatStr(i);break;case"int":o=U._numberToIntStr(i);break;case"bool":o=i.toString();break;case"vec2":o=`vec2(${U._numberToFloatStr(i[0])},                            ${U._numberToFloatStr(i[1])})`;break;case"vec3":o=`vec3(${U._numberToFloatStr(i[0])},                            ${U._numberToFloatStr(i[1])},                            ${U._numberToFloatStr(i[2])})`;break;case"vec4":o=`vec4(${U._numberToFloatStr(i[0])},                            ${U._numberToFloatStr(i[1])},                            ${U._numberToFloatStr(i[2])},                            ${U._numberToFloatStr(i[3])})`;break;case"ivec2":o=`ivec2(${U._numberToIntStr(i[0])},                             ${U._numberToIntStr(i[1])})`;break;case"ivec3":o=`ivec3(${U._numberToIntStr(i[0])},                             ${U._numberToIntStr(i[1])},                             ${U._numberToIntStr(i[2])})`;break;case"ivec4":o=`ivec4(${U._numberToIntStr(i[0])},                             ${U._numberToIntStr(i[1])},                             ${U._numberToIntStr(i[2])},                             ${U._numberToIntStr(i[3])})`;break;case"mat2":case"mat3":case"mat4":o=`${r}(${Array.prototype.map.call(i,a=>U._numberToFloatStr(a)).join(", ")})`}return this._entries.add(`const ${r} ${e} = ${o};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const _n=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp sampler2D;
#else
  precision mediump float;
  precision mediump sampler2D;
#endif`,bn=`precision highp float;
precision highp sampler2D;`,Rr="Size",tr="InvSize";function rt(t,e,r=!1,i=0){if(t.hasWebGL2Context){const o=s`vec2(textureSize(${e}, ${s.int(i)}))`;return r?"(1.0 / "+o+")":o}return r?e+tr:e+Rr}function Sn(t,e,r,i=null,o=0){if(t.hasWebGL2Context)return s`texelFetch(${e}, ivec2(${r}), ${s.int(o)})`;let a=s`texture2D(${e}, ${r} * `;return a+=i?s`(${i}))`:s`${e+tr})`,a}class de extends J{constructor(e,r){super(e,"vec2",z.Pass,(i,o,a)=>i.setUniform2fv(e,r(o,a)))}}var Y;(function(t){t[t.None=0]="None",t[t.Size=1]="Size",t[t.InvSize=2]="InvSize"})(Y||(Y={}));class ie extends J{constructor(e,r){super(e,"sampler2D",z.Pass,(i,o,a)=>i.bindTexture(e,r(o,a)))}}function je(t,e,r=Y.None){const i=[new ie(t,e)];if(r&Y.Size){const o=t+Rr;i.push(new de(o,(a,n)=>{const l=e(a,n);return f(l)?$e(ui,l.descriptor.width,l.descriptor.height):Bt}))}if(r&Y.InvSize){const o=t+tr;i.push(new de(o,(a,n)=>{const l=e(a,n);return f(l)?$e(ui,1/l.descriptor.width,1/l.descriptor.height):Bt}))}return i}const ui=Kt();class Hi extends Qt{constructor(){super(...arguments),this.color=Yt(1,1,1,1)}}function wn(){const t=new $t;return t.include(Lr),t.fragment.uniforms.add([new ie("tex",e=>e.texture),new te("uColor",e=>e.color)]),t.fragment.code.add(s`void main() {
vec4 texColor = texture2D(tex, uv);
gl_FragColor = texColor * uColor;
}`),t}Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:Hi,build:wn},Symbol.toStringTag,{value:"Module"}));function yn(){if(G(dr)){const t=e=>Ho(`esri/libs/basisu/${e}`);dr=Ot(()=>import("./basis_transcoder.js"),["basis_transcoder.js","_commonjsHelpers.js"]).then(e=>e.b).then(({default:e})=>e({locateFile:t}).then(r=>(r.initializeBasis(),delete r.then,r)))}return dr}let dr;var ke;(function(t){t[t.ETC1_RGB=0]="ETC1_RGB",t[t.ETC2_RGBA=1]="ETC2_RGBA",t[t.BC1_RGB=2]="BC1_RGB",t[t.BC3_RGBA=3]="BC3_RGBA",t[t.BC4_R=4]="BC4_R",t[t.BC5_RG=5]="BC5_RG",t[t.BC7_M6_RGB=6]="BC7_M6_RGB",t[t.BC7_M5_RGBA=7]="BC7_M5_RGBA",t[t.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",t[t.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",t[t.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",t[t.ATC_RGB=11]="ATC_RGB",t[t.ATC_RGBA=12]="ATC_RGBA",t[t.FXT1_RGB=17]="FXT1_RGB",t[t.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",t[t.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",t[t.ETC2_EAC_R11=20]="ETC2_EAC_R11",t[t.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",t[t.RGBA32=13]="RGBA32",t[t.RGB565=14]="RGB565",t[t.BGR565=15]="BGR565",t[t.RGBA4444=16]="RGBA4444"})(ke||(ke={}));let me=null,Nt=null;async function ki(){return G(Nt)&&(Nt=yn(),me=await Nt),Nt}function An(t,e){if(G(me))return t.byteLength;const r=new me.BasisFile(new Uint8Array(t)),i=ji(r)?Wi(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),e):0;return r.close(),r.delete(),i}function Cn(t,e){if(G(me))return t.byteLength;const r=new me.KTX2File(new Uint8Array(t)),i=qi(r)?Wi(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),e):0;return r.close(),r.delete(),i}function Wi(t,e,r,i,o){const a=ka(e?ye.COMPRESSED_RGBA8_ETC2_EAC:ye.COMPRESSED_RGB8_ETC2),n=o&&t>1?(4**t-1)/(3*4**(t-1)):1;return Math.ceil(r*i*a*n)}function ji(t){return t.getNumImages()>=1&&!t.isUASTC()}function qi(t){return t.getFaces()>=1&&t.isETC1S()}async function Mn(t,e,r){G(me)&&(me=await ki());const i=new me.BasisFile(new Uint8Array(r));if(!ji(i))return null;i.startTranscoding();const o=Xi(t,e,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),(a,n)=>i.getImageTranscodedSizeInBytes(0,a,n),(a,n,l)=>i.transcodeImage(l,0,a,n,0,0));return i.close(),i.delete(),o}async function On(t,e,r){G(me)&&(me=await ki());const i=new me.KTX2File(new Uint8Array(r));if(!qi(i))return null;i.startTranscoding();const o=Xi(t,e,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),(a,n)=>i.getImageTranscodedSizeInBytes(a,0,0,n),(a,n,l)=>i.transcodeImage(l,a,0,0,n,0,-1,-1));return i.close(),i.delete(),o}function Xi(t,e,r,i,o,a,n,l){const{compressedTextureETC:d,compressedTextureS3TC:c}=t.capabilities,[u,m]=d?i?[ke.ETC2_RGBA,ye.COMPRESSED_RGBA8_ETC2_EAC]:[ke.ETC1_RGB,ye.COMPRESSED_RGB8_ETC2]:c?i?[ke.BC3_RGBA,ye.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[ke.BC1_RGB,ye.COMPRESSED_RGB_S3TC_DXT1_EXT]:[ke.RGBA32,Ue.RGBA],v=e.hasMipmap?r:Math.min(1,r),p=[];for(let w=0;w<v;w++)p.push(new Uint8Array(n(w,u))),l(w,u,p[w]);const g=p.length>1,b=g?We.LINEAR_MIPMAP_LINEAR:We.LINEAR,_={...e,samplingMode:b,hasMipmap:g,internalFormat:m,width:o,height:a};return new Oe(t,_,{type:"compressed",levels:p})}const gt=Sr.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),Pn=542327876,$n=131072,Ln=4;function Er(t){return t.charCodeAt(0)+(t.charCodeAt(1)<<8)+(t.charCodeAt(2)<<16)+(t.charCodeAt(3)<<24)}function Rn(t){return String.fromCharCode(255&t,t>>8&255,t>>16&255,t>>24&255)}const En=Er("DXT1"),Nn=Er("DXT3"),In=Er("DXT5"),Dn=31,Fn=0,zn=1,Vn=2,Bn=3,Gn=4,Un=7,Hn=20,kn=21;function Wn(t,e,r){var l;const{textureData:i,internalFormat:o,width:a,height:n}=ko(jn(r,(l=e.hasMipmap)!=null?l:!1));return e.samplingMode=i.levels.length>1?We.LINEAR_MIPMAP_LINEAR:We.LINEAR,e.hasMipmap=i.levels.length>1,e.internalFormat=o,e.width=a,e.height=n,new Oe(t,e,i)}function jn(t,e){const r=new Int32Array(t,0,Dn);if(r[Fn]!==Pn)return gt.error("Invalid magic number in DDS header"),null;if(!(r[Hn]&Ln))return gt.error("Unsupported format, must contain a FourCC code"),null;const i=r[kn];let o,a;switch(i){case En:o=8,a=ye.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case Nn:o=16,a=ye.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case In:o=16,a=ye.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return gt.error("Unsupported FourCC code:",Rn(i)),null}let n=1,l=r[Gn],d=r[Bn];(3&l)==0&&(3&d)==0||(gt.warn("Rounding up compressed texture size to nearest multiple of 4."),l=l+3&-4,d=d+3&-4);const c=l,u=d;let m,v;r[Vn]&$n&&e!==!1&&(n=Math.max(1,r[Un])),n===1||Gt(l)&&Gt(d)||(gt.warn("Ignoring mipmaps of non power of two sized compressed texture."),n=1);let p=r[zn]+4;const g=[];for(let b=0;b<n;++b)v=(l+3>>2)*(d+3>>2)*o,m=new Uint8Array(t,p,v),g.push(m),p+=v,l=Math.max(1,l>>1),d=Math.max(1,d>>1);return{textureData:{type:"compressed",levels:g},internalFormat:a,width:c,height:u}}const Lt=new Map([[h.POSITION,0],[h.NORMAL,1],[h.UV0,2],[h.COLOR,3],[h.SIZE,4],[h.TANGENT,4],[h.AUXPOS1,5],[h.SYMBOLCOLOR,5],[h.AUXPOS2,6],[h.FEATUREATTRIBUTE,6],[h.INSTANCEFEATUREATTRIBUTE,6],[h.INSTANCECOLOR,7],[h.OBJECTANDLAYERIDCOLOR,7],[h.OBJECTANDLAYERIDCOLOR_INSTANCED,7],[h.MODEL,8],[h.MODELNORMAL,12],[h.MODELORIGINHI,11],[h.MODELORIGINLO,15]]);new he(h.POSITION,3,ue.FLOAT,0,12);new he(h.POSITION,3,ue.FLOAT,0,20),new he(h.UV0,2,ue.FLOAT,12,20);new he(h.POSITION,3,ue.FLOAT,0,32),new he(h.NORMAL,3,ue.FLOAT,12,32),new he(h.UV0,2,ue.FLOAT,24,32);new he(h.POSITION,3,ue.FLOAT,0,16),new he(h.COLOR,4,ue.UNSIGNED_BYTE,12,16);const qn=[new he(h.POSITION,2,ue.FLOAT,0,8)],Xn=[new he(h.POSITION,2,ue.FLOAT,0,16),new he(h.UV0,2,ue.FLOAT,8,16)];class Kn extends Wa{}function Yn(t,e=qn,r=Lt,i=-1,o=1){let a=null;return e===Xn?a=new Float32Array([i,i,0,0,o,i,1,0,i,o,0,1,o,o,1,1]):a=new Float32Array([i,i,o,i,i,o,o,o]),new Kn(t,r,{geometry:e},{geometry:ja.createVertex(t,Ba.STATIC_DRAW,a)})}class it extends $r{constructor(e,r){super(),this._data=e,this.type=Ae.Texture,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new Wo,this._passParameters=new Hi,this.params=r||{},this.params.mipmap=this.params.mipmap!==!1,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:Qe.REPEAT,t:Qe.REPEAT},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||lr.STRETCH,this.estimatedTexMemRequired=it._estimateTexMemRequired(this._data,this.params),this._startPreload()}_startPreload(){const e=this._data;G(e)||(e instanceof HTMLVideoElement?this._startPreloadVideoElement(e):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!(Kr(e.src)||e.preload==="auto"&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const r=!e.paused;if(e.src=e.src,r&&e.autoplay){const i=()=>{e.removeEventListener("canplay",i),e.play()};e.addEventListener("canplay",i)}}}_startPreloadImageElement(e){jo(e.src)||Kr(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static _getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static _estimateTexMemRequired(e,r){if(G(e))return 0;if(mt(e)||ft(e))return r.encoding===pt.KTX2_ENCODING?Cn(e,!!r.mipmap):r.encoding===pt.BASIS_ENCODING?An(e,!!r.mipmap):e.byteLength;const{width:i,height:o}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?it._getDataDimensions(e):r;return(r.mipmap?4/3:1)*i*o*(r.components||4)||0}dispose(){this._data=void 0}get width(){return this.params.width}get height(){return this.params.height}_createDescriptor(e){var r;return{target:si.TEXTURE_2D,pixelFormat:Ue.RGBA,dataType:li.UNSIGNED_BYTE,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?We.LINEAR_MIPMAP_LINEAR:We.LINEAR,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:(r=this.params.maxAnisotropy)!=null?r:this.params.mipmap?e.parameters.maxMaxAnisotropy:1}}get glTexture(){return this._glTexture}load(e,r){if(f(this._glTexture))return this._glTexture;if(f(this._loadingPromise))return this._loadingPromise;const i=this._data;return G(i)?(this._glTexture=new Oe(e,this._createDescriptor(e),null),this._glTexture):typeof i=="string"?this._loadFromURL(e,r,i):i instanceof Image?this._loadFromImageElement(e,r,i):i instanceof HTMLVideoElement?this._loadFromVideoElement(e,r,i):i instanceof ImageData||i instanceof HTMLCanvasElement?this._loadFromImage(e,i,r):(mt(i)||ft(i))&&this.params.encoding===pt.DDS_ENCODING?(this._data=void 0,this._loadFromDDSData(e,i)):(mt(i)||ft(i))&&this.params.encoding===pt.KTX2_ENCODING?(this._data=void 0,this._loadFromKTX2(e,i)):(mt(i)||ft(i))&&this.params.encoding===pt.BASIS_ENCODING?(this._data=void 0,this._loadFromBasis(e,i)):ft(i)?this._loadFromPixelData(e,i):mt(i)?this._loadFromPixelData(e,new Uint8Array(i)):null}get requiresFrameUpdates(){return this._data instanceof HTMLVideoElement}frameUpdate(e,r,i){if(!(this._data instanceof HTMLVideoElement)||G(this._glTexture)||this._data.readyState<bt.HAVE_CURRENT_DATA||i===this._data.currentTime)return i;if(f(this._powerOfTwoStretchInfo)){const{framebuffer:o,vao:a,sourceTexture:n}=this._powerOfTwoStretchInfo;n.setData(this._data),this._drawStretchedTexture(e,r,o,a,n,this._glTexture)}else{const{videoWidth:o,videoHeight:a}=this._data,{width:n,height:l}=this._glTexture.descriptor;o!==n||a!==l?this._glTexture.updateData(0,0,0,Math.min(o,n),Math.min(a,l),this._data):this._glTexture.setData(this._data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.params.updateCallback&&this.params.updateCallback(),this._data.currentTime}_loadFromDDSData(e,r){return this._glTexture=Wn(e,this._createDescriptor(e),r),this._glTexture}_loadFromKTX2(e,r){return this._loadAsync(()=>On(e,this._createDescriptor(e),r).then(i=>(this._glTexture=i,i)))}_loadFromBasis(e,r){return this._loadAsync(()=>Mn(e,this._createDescriptor(e),r).then(i=>(this._glTexture=i,i)))}_loadFromPixelData(e,r){j(this.params.width>0&&this.params.height>0);const i=this._createDescriptor(e);return i.pixelFormat=this.params.components===1?Ue.LUMINANCE:this.params.components===3?Ue.RGB:Ue.RGBA,i.width=this.params.width,i.height=this.params.height,this._glTexture=new Oe(e,i,r),this._glTexture}_loadFromURL(e,r,i){return this._loadAsync(async o=>{const a=await zi(i,{signal:o});return Yr(o),this._loadFromImage(e,a,r)})}_loadFromImageElement(e,r,i){return i.complete?this._loadFromImage(e,i,r):this._loadAsync(async o=>{const a=await qo(i,i.src,!1,o);return Yr(o),this._loadFromImage(e,a,r)})}_loadFromVideoElement(e,r,i){return i.readyState>=bt.HAVE_CURRENT_DATA?this._loadFromImage(e,i,r):this._loadFromVideoElementAsync(e,r,i)}_loadFromVideoElementAsync(e,r,i){return this._loadAsync(o=>new Promise((a,n)=>{const l=()=>{i.removeEventListener("loadeddata",d),i.removeEventListener("error",c),Yo(u)},d=()=>{i.readyState>=bt.HAVE_CURRENT_DATA&&(l(),a(this._loadFromImage(e,i,r)))},c=m=>{l(),n(m||new wr("Failed to load video"))};i.addEventListener("loadeddata",d),i.addEventListener("error",c);const u=Xo(o,()=>c(Ko()))}))}_loadFromImage(e,r,i){const o=it._getDataDimensions(r);this.params.width=o.width,this.params.height=o.height;const a=this._createDescriptor(e);return a.pixelFormat=this.params.components===3?Ue.RGB:Ue.RGBA,!this._requiresPowerOfTwo(e,a)||Gt(o.width)&&Gt(o.height)?(a.width=o.width,a.height=o.height,this._glTexture=new Oe(e,a,r),this._glTexture):(this._glTexture=this._makePowerOfTwoTexture(e,r,o,a,i),this._glTexture)}_loadAsync(e){const r=new AbortController;this._loadingController=r;const i=e(r.signal);this._loadingPromise=i;const o=()=>{this._loadingController===r&&(this._loadingController=null),this._loadingPromise===i&&(this._loadingPromise=null)};return i.then(o,o),i}_requiresPowerOfTwo(e,r){const i=Qe.CLAMP_TO_EDGE,o=typeof r.wrapMode=="number"?r.wrapMode===i:r.wrapMode.s===i&&r.wrapMode.t===i;return e.type===$i.WEBGL1&&(r.hasMipmap||!o)}_makePowerOfTwoTexture(e,r,i,o,a){const{width:n,height:l}=i,d=Zr(n),c=Zr(l);let u;switch(o.width=d,o.height=c,this.params.powerOfTwoResizeMode){case lr.PAD:o.textureCoordinateScaleFactor=[n/d,l/c],u=new Oe(e,o),u.updateData(0,0,0,n,l,r);break;case lr.STRETCH:case null:case void 0:u=this._stretchToPowerOfTwo(e,r,o,a());break;default:Ye(this.params.powerOfTwoResizeMode)}return o.hasMipmap&&u.generateMipmap(),u}_stretchToPowerOfTwo(e,r,i,o){const a=new Oe(e,i),n=new qa(e,{colorTarget:Ga.TEXTURE,depthStencilTarget:Ua.NONE},a),l=new Oe(e,{target:si.TEXTURE_2D,pixelFormat:i.pixelFormat,dataType:li.UNSIGNED_BYTE,wrapMode:Qe.CLAMP_TO_EDGE,samplingMode:We.LINEAR,flipped:!!i.flipped,maxAnisotropy:8,preMultiplyAlpha:i.preMultiplyAlpha},r),d=Yn(e),c=e.getBoundFramebufferObject();return this._drawStretchedTexture(e,o,n,d,l,a),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:d,sourceTexture:l,framebuffer:n}:(d.dispose(!0),l.dispose(),n.detachColorTexture(),n.dispose()),e.bindFramebuffer(c),a}_drawStretchedTexture(e,r,i,o,a,n){this._passParameters.texture=a,e.bindFramebuffer(i);const l=e.getViewport();e.setViewport(0,0,n.descriptor.width,n.descriptor.height),e.bindTechnique(r,this._passParameters,null),e.bindVAO(o),e.drawArrays(_t.TRIANGLE_STRIP,0,Xa(o,"geometry")),e.bindFramebuffer(null),e.setViewport(l.x,l.y,l.width,l.height),this._passParameters.texture=null}unload(){if(f(this._powerOfTwoStretchInfo)){const{framebuffer:e,vao:r,sourceTexture:i}=this._powerOfTwoStretchInfo;r.dispose(!0),i.dispose(),e.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null}if(f(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),f(this._loadingController)){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}var bt;(function(t){t[t.HAVE_NOTHING=0]="HAVE_NOTHING",t[t.HAVE_METADATA=1]="HAVE_METADATA",t[t.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",t[t.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",t[t.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"})(bt||(bt={}));var A;(function(t){t[t.Color=0]="Color",t[t.Depth=1]="Depth",t[t.Normal=2]="Normal",t[t.Shadow=3]="Shadow",t[t.ShadowHighlight=4]="ShadowHighlight",t[t.ShadowExcludeHighlight=5]="ShadowExcludeHighlight",t[t.Highlight=6]="Highlight",t[t.Alpha=7]="Alpha",t[t.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",t[t.COUNT=9]="COUNT"})(A||(A={}));function Zn(t,e){const r=t.fragment;switch(r.code.add(s`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),e.doubleSidedMode){case re.None:r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case re.View:r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case re.WindingOrder:r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:Ye(e.doubleSidedMode);case re.COUNT:}}var re;(function(t){t[t.None=0]="None",t[t.View=1]="View",t[t.WindingOrder=2]="WindingOrder",t[t.COUNT=3]="COUNT"})(re||(re={}));var Q;function ot(t,e){switch(e.textureCoordinateType){case Q.Default:return t.attributes.add(h.UV0,"vec2"),t.varyings.add("vuv0","vec2"),void t.vertex.code.add(s`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case Q.Compressed:return t.attributes.add(h.UV0,"vec2"),t.varyings.add("vuv0","vec2"),void t.vertex.code.add(s`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case Q.Atlas:return t.attributes.add(h.UV0,"vec2"),t.varyings.add("vuv0","vec2"),t.attributes.add(h.UVREGION,"vec4"),t.varyings.add("vuvRegion","vec4"),void t.vertex.code.add(s`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:Ye(e.textureCoordinateType);case Q.None:return void t.vertex.code.add(s`void forwardTextureCoordinates() {}`);case Q.COUNT:return}}(function(t){t[t.None=0]="None",t[t.Default=1]="Default",t[t.Atlas=2]="Atlas",t[t.Compressed=3]="Compressed",t[t.COUNT=4]="COUNT"})(Q||(Q={}));function Jn(t){t.extensions.add("GL_EXT_shader_texture_lod"),t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(s`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}function Ki(t,e){switch(t.include(ot,e),t.fragment.code.add(s`
  struct TextureLookupParameter {
    vec2 uv;
    ${e.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),e.textureCoordinateType){case Q.Default:case Q.Compressed:return void t.fragment.code.add(s`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return texture2D(texture, params.uv);
}`);case Q.Atlas:return t.include(Jn),void t.fragment.code.add(s`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return textureAtlasLookup(texture, params.size, params.uv, vuvRegion);
}`);default:Ye(e.textureCoordinateType);case Q.None:case Q.COUNT:return}}class fe extends J{constructor(e,r){super(e,"vec3",z.Draw,(i,o,a,n)=>i.setUniform3fv(e,r(o,a,n)))}}class Z extends J{constructor(e,r){super(e,"vec3",z.Pass,(i,o,a)=>i.setUniform3fv(e,r(o,a)))}}class Tr extends J{constructor(e,r){super(e,"vec2",z.Draw,(i,o,a,n)=>i.setUniform2fv(e,r(o,a,n)))}}class Yi extends J{constructor(e,r){super(e,"sampler2D",z.Draw,(i,o,a)=>i.bindTexture(e,r(o,a)))}}function Vt(t,e,r=Y.None){const i=[new Yi(t,e)];if(r&Y.Size){const o=t+Rr;i.push(new Tr(o,(a,n)=>{const l=e(a,n);return f(l)?$e(hi,l.descriptor.width,l.descriptor.height):Bt}))}if(r&Y.InvSize){const o=t+tr;i.push(new Tr(o,(a,n)=>{const l=e(a,n);return f(l)?$e(hi,1/l.descriptor.width,1/l.descriptor.height):Bt}))}return i}const hi=Kt();class Qn{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}ensureTechnique(e,r){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(this._output,r),this._technique),this._technique}ensureResources(e){return xr.LOADED}}class es extends Qn{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId,r=>this._texture=r),this._acquire(e.normalTextureId,r=>this._textureNormal=r),this._acquire(e.emissiveTextureId,r=>this._textureEmissive=r),this._acquire(e.occlusionTextureId,r=>this._textureOcclusion=r),this._acquire(e.metallicRoughnessTextureId,r=>this._textureMetallicRoughness=r)}dispose(){this._texture=Be(this._texture),this._textureNormal=Be(this._textureNormal),this._textureEmissive=Be(this._textureEmissive),this._textureOcclusion=Be(this._textureOcclusion),this._textureMetallicRoughness=Be(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return this._numLoading===0?xr.LOADED:xr.LOADING}get textureBindParameters(){return new ts(f(this._texture)?this._texture.glTexture:null,f(this._textureNormal)?this._textureNormal.glTexture:null,f(this._textureEmissive)?this._textureEmissive.glTexture:null,f(this._textureOcclusion)?this._textureOcclusion.glTexture:null,f(this._textureMetallicRoughness)?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){(G(this._texture)||e!==this._texture.id)&&(this._texture=Be(this._texture),this._textureId=e,this._acquire(this._textureId,r=>this._texture=r))}_acquire(e,r){if(G(e))return void r(null);const i=this._textureRepository.acquire(e);if(Zo(i))return++this._numLoading,void i.then(o=>{if(this._disposed)return Be(o),void r(null);r(o)}).finally(()=>--this._numLoading);r(i)}}class ts extends Qt{constructor(e=null,r=null,i=null,o=null,a=null){super(),this.texture=e,this.textureNormal=r,this.textureEmissive=i,this.textureOcclusion=o,this.textureMetallicRoughness=a}}Ya(0,.6,.2);var E;(function(t){t[t.Disabled=0]="Disabled",t[t.Normal=1]="Normal",t[t.Schematic=2]="Schematic",t[t.Water=3]="Water",t[t.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",t[t.Terrain=5]="Terrain",t[t.TerrainWithWater=6]="TerrainWithWater",t[t.COUNT=7]="COUNT"})(E||(E={}));function Zi(t,e){const r=t.fragment,i=e.hasMetallicRoughnessTexture||e.hasEmissionTexture||e.hasOcclusionTexture;if(e.pbrMode===E.Normal&&i&&t.include(Ki,e),e.pbrMode!==E.Schematic)if(e.pbrMode!==E.Disabled){if(e.pbrMode===E.Normal){r.code.add(s`vec3 mrr;
vec3 emission;
float occlusion;`);const o=e.supportsTextureAtlas?e.hasWebGL2Context?Y.None:Y.Size:Y.None,a=e.pbrTextureBindType;e.hasMetallicRoughnessTexture&&(r.uniforms.add(a===z.Pass?je("texMetallicRoughness",n=>n.textureMetallicRoughness,o):Vt("texMetallicRoughness",n=>n.textureMetallicRoughness,o)),r.code.add(s`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),e.hasEmissionTexture&&(r.uniforms.add(a===z.Pass?je("texEmission",n=>n.textureEmissive,o):Vt("texEmission",n=>n.textureEmissive,o)),r.code.add(s`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),e.hasOcclusionTexture?(r.uniforms.add(a===z.Pass?je("texOcclusion",n=>n.textureOcclusion,o):Vt("texOcclusion",n=>n.textureOcclusion,o)),r.code.add(s`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(s`float getBakedOcclusion() { return 1.0; }`),r.uniforms.add(a===z.Pass?[new Z("emissionFactor",n=>n.emissiveFactor),new Z("mrrFactors",n=>n.mrrFactors)]:[new fe("emissionFactor",n=>n.emissiveFactor),new fe("mrrFactors",n=>n.mrrFactors)]),r.code.add(s`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${i?s`vtc.uv = vuv0;`:""}
      ${e.hasMetallicRoughnessTextureTransform?s`vtc.uv = metallicRoughnessUV;`:""}
      ${e.hasMetallicRoughnessTexture?e.supportsTextureAtlas?s`
                vtc.size = ${rt(e,"texMetallicRoughness")};
                applyMetallnessAndRoughness(vtc);`:s`applyMetallnessAndRoughness(vtc);`:""}
      ${e.hasEmissiveTextureTransform?s`vtc.uv = emissiveUV;`:""}
      ${e.hasEmissionTexture?e.supportsTextureAtlas?s`
                vtc.size = ${rt(e,"texEmission")};
                applyEmission(vtc);`:s`applyEmission(vtc);`:""}
      ${e.hasOcclusionTextureTransform?s`vtc.uv = occlusionUV;`:""}
      ${e.hasOcclusionTexture?e.supportsTextureAtlas?s`
                vtc.size = ${rt(e,"texOcclusion")};
                applyOcclusion(vtc);`:s`applyOcclusion(vtc);`:""}
    }
  `)}}else r.code.add(s`float getBakedOcclusion() { return 1.0; }`);else r.code.add(s`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function rs(t){return Math.abs(t*t*t)}function is(t,e,r){const i=r.parameters,o=r.paddingPixelsOverride;return xt.scale=Math.min(i.divisor/(e-i.offset),1),xt.factor=rs(t),xt.minPixelSize=i.minPixelSize,xt.paddingPixels=o,xt}function os(t,e){return t===0?e.minPixelSize:e.minPixelSize*(1+2*e.paddingPixels/t)}function as(t,e){return Math.max(Jo(t*e.scale,t,e.factor),os(t,e))}function ns(t,e,r,i){return as(t,is(e,r,i))}const xt={scale:0,factor:0,minPixelSize:0,paddingPixels:0},It=Qo();function ss(t,e,r,i,o,a){if(t.visible)if(t.boundingInfo){j(t.type===Ae.Mesh);const n=e.tolerance;Ji(t.boundingInfo,r,i,n,o,a)}else{const n=t.indices.get(h.POSITION),l=t.vertexAttributes.get(h.POSITION);eo(r,i,0,n.length/3,n,l,void 0,o,a)}}const ls=N();function Ji(t,e,r,i,o,a){if(G(t))return;const n=ds(e,r,ls);if(ea(It,t.bbMin),ta(It,t.bbMax),f(o)&&o.applyToAabb(It),us(It,e,n,i)){const{primitiveIndices:l,indices:d,position:c}=t,u=l?l.length:d.length/3;if(u>gs){const m=t.getChildren();if(m!==void 0){for(const v of m)Ji(v,e,r,i,o,a);return}}eo(e,r,0,u,d,c,l,o,a)}}const Qi=N();function eo(t,e,r,i,o,a,n,l,d){if(n)return cs(t,e,r,i,o,a,n,l,d);const{data:c,stride:u}=a,m=t[0],v=t[1],p=t[2],g=e[0]-m,b=e[1]-v,_=e[2]-p;for(let w=r,V=3*r;w<i;++w){let R=u*o[V++],O=c[R++],I=c[R++],M=c[R];R=u*o[V++];let P=c[R++],$=c[R++],L=c[R];R=u*o[V++];let C=c[R++],F=c[R++],y=c[R];f(l)&&([O,I,M]=l.applyToVertex(O,I,M,w),[P,$,L]=l.applyToVertex(P,$,L,w),[C,F,y]=l.applyToVertex(C,F,y,w));const D=P-O,B=$-I,k=L-M,W=C-O,ge=F-I,xe=y-M,Ie=b*xe-ge*_,ct=_*W-xe*g,dt=g*ge-W*b,le=D*Ie+B*ct+k*dt;if(Math.abs(le)<=Number.EPSILON)continue;const ae=m-O,De=v-I,Fe=p-M,pe=ae*Ie+De*ct+Fe*dt;if(le>0){if(pe<0||pe>le)continue}else if(pe>0||pe<le)continue;const Te=De*k-B*Fe,ut=Fe*D-k*ae,ht=ae*B-D*De,ze=g*Te+b*ut+_*ht;if(le>0){if(ze<0||pe+ze>le)continue}else if(ze>0||pe+ze<le)continue;const Ve=(W*Te+ge*ut+xe*ht)/le;Ve>=0&&d(Ve,to(D,B,k,W,ge,xe,Qi),w,!1)}}function cs(t,e,r,i,o,a,n,l,d){const{data:c,stride:u}=a,m=t[0],v=t[1],p=t[2],g=e[0]-m,b=e[1]-v,_=e[2]-p;for(let w=r;w<i;++w){const V=n[w];let R=3*V,O=u*o[R++],I=c[O++],M=c[O++],P=c[O];O=u*o[R++];let $=c[O++],L=c[O++],C=c[O];O=u*o[R];let F=c[O++],y=c[O++],D=c[O];f(l)&&([I,M,P]=l.applyToVertex(I,M,P,w),[$,L,C]=l.applyToVertex($,L,C,w),[F,y,D]=l.applyToVertex(F,y,D,w));const B=$-I,k=L-M,W=C-P,ge=F-I,xe=y-M,Ie=D-P,ct=b*Ie-xe*_,dt=_*ge-Ie*g,le=g*xe-ge*b,ae=B*ct+k*dt+W*le;if(Math.abs(ae)<=Number.EPSILON)continue;const De=m-I,Fe=v-M,pe=p-P,Te=De*ct+Fe*dt+pe*le;if(ae>0){if(Te<0||Te>ae)continue}else if(Te>0||Te<ae)continue;const ut=Fe*W-k*pe,ht=pe*B-W*De,ze=De*k-B*Fe,Ve=g*ut+b*ht+_*ze;if(ae>0){if(Ve<0||Te+Ve>ae)continue}else if(Ve>0||Te+Ve<ae)continue;const qr=(ge*ut+xe*ht+Ie*ze)/ae;qr>=0&&d(qr,to(B,k,W,ge,xe,Ie,Qi),V,!1)}}const mi=N(),fi=N();function to(t,e,r,i,o,a,n){return K(mi,t,e,r),K(fi,i,o,a),Pi(n,mi,fi),yr(n,n),n}function ds(t,e,r){return K(r,1/(e[0]-t[0]),1/(e[1]-t[1]),1/(e[2]-t[2]))}function us(t,e,r,i){return hs(t,e,r,i,1/0)}function hs(t,e,r,i,o){const a=(t[0]-i-e[0])*r[0],n=(t[3]+i-e[0])*r[0];let l=Math.min(a,n),d=Math.max(a,n);const c=(t[1]-i-e[1])*r[1],u=(t[4]+i-e[1])*r[1];if(d=Math.min(d,Math.max(c,u)),d<0||(l=Math.max(l,Math.min(c,u)),l>d))return!1;const m=(t[2]-i-e[2])*r[2],v=(t[5]+i-e[2])*r[2];return d=Math.min(d,Math.max(m,v)),!(d<0)&&(l=Math.max(l,Math.min(m,v)),!(l>d)&&l<o)}function ms(t,e,r,i,o){let a=(r.screenLength||0)*t.pixelRatio;f(o)&&(a=ns(a,i,e,o));const n=a*Math.tan(.5*t.fovY)/(.5*t.fullHeight);return ra(n*e,r.minWorldLength||0,r.maxWorldLength!=null?r.maxWorldLength:1/0)}function ro(t,e){const r=e?ro(e):{};for(const i in t){let o=t[i];o&&o.forEach&&(o=ps(o)),o==null&&i in r||(r[i]=o)}return r}function fs(t,e){let r=!1;for(const i in e){const o=e[i];o!==void 0&&(Array.isArray(o)?t[i]===null?(t[i]=o.slice(),r=!0):ia(t[i],o)&&(r=!0):t[i]!==o&&(r=!0,t[i]=o))}return r}function ps(t){const e=[];return t.forEach(r=>e.push(r)),e}const vs={multiply:1,ignore:2,replace:3,tint:4},gs=1e3;class xs extends $r{constructor(e,r){super(),this.type=Ae.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=Lt,this._pp0=Pe(0,0,1),this._pp1=Pe(0,0,0),this._parameters=ro(e,r),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e,r=!0){fs(this._parameters,e)&&(this.validateParameters(this._parameters),r&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&(this.renderOccluded&e.renderOccludedMask)!=0}isVisibleForOutput(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){f(this.repository)&&this.repository.materialChanged(this)}intersectDraped(e,r,i,o,a,n){return this._pp0[0]=this._pp1[0]=o[0],this._pp0[1]=this._pp1[1]=o[1],this.intersect(e,r,i,this._pp0,this._pp1,a)}}var _r;(function(t){t[t.Occlude=1]="Occlude",t[t.Transparent=2]="Transparent",t[t.OccludeAndTransparent=4]="OccludeAndTransparent",t[t.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",t[t.Opaque=16]="Opaque"})(_r||(_r={}));var et;(function(t){t[t.INTEGRATED_MESH=0]="INTEGRATED_MESH",t[t.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",t[t.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",t[t.TRANSPARENT_MATERIAL=3]="TRANSPARENT_MATERIAL",t[t.TRANSPARENT_TERRAIN=4]="TRANSPARENT_TERRAIN",t[t.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=5]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",t[t.OCCLUDED_TERRAIN=6]="OCCLUDED_TERRAIN",t[t.OCCLUDER_MATERIAL=7]="OCCLUDER_MATERIAL",t[t.TRANSPARENT_OCCLUDER_MATERIAL=8]="TRANSPARENT_OCCLUDER_MATERIAL",t[t.OCCLUSION_PIXELS=9]="OCCLUSION_PIXELS",t[t.POSTPROCESSING_ENVIRONMENT_OPAQUE=10]="POSTPROCESSING_ENVIRONMENT_OPAQUE",t[t.POSTPROCESSING_ENVIRONMENT_TRANSPARENT=11]="POSTPROCESSING_ENVIRONMENT_TRANSPARENT",t[t.LASERLINES=12]="LASERLINES",t[t.LASERLINES_CONTRAST_CONTROL=13]="LASERLINES_CONTRAST_CONTROL",t[t.HUD_MATERIAL=14]="HUD_MATERIAL",t[t.LABEL_MATERIAL=15]="LABEL_MATERIAL",t[t.LINE_CALLOUTS=16]="LINE_CALLOUTS",t[t.LINE_CALLOUTS_HUD_DEPTH=17]="LINE_CALLOUTS_HUD_DEPTH",t[t.DRAPED_MATERIAL=18]="DRAPED_MATERIAL",t[t.DRAPED_WATER=19]="DRAPED_WATER",t[t.VOXEL=20]="VOXEL",t[t.MAX_SLOTS=21]="MAX_SLOTS"})(et||(et={}));class Ts{constructor(e=0){this.componentLocalOriginLength=0,this._tmpVertex=N(),this._mbs=Bi(),this._obb={center:N(),halfSize:Za(),quaternion:null},this._totalOffset=0,this._offset=0,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}applyToVertex(e,r,i){const o=e,a=r,n=i+this.componentLocalOriginLength,l=this._totalOffset/Math.sqrt(o*o+a*a+n*n);return this._tmpVertex[0]=e+o*l,this._tmpVertex[1]=r+a*l,this._tmpVertex[2]=i+n*l,this._tmpVertex}applyToAabb(e){const r=e[0],i=e[1],o=e[2]+this.componentLocalOriginLength,a=e[3],n=e[4],l=e[5]+this.componentLocalOriginLength,d=r*a<0?0:Math.min(Math.abs(r),Math.abs(a)),c=i*n<0?0:Math.min(Math.abs(i),Math.abs(n)),u=o*l<0?0:Math.min(Math.abs(o),Math.abs(l)),m=Math.sqrt(d*d+c*c+u*u);if(m<this._totalOffset)return e[0]-=r<0?this._totalOffset:0,e[1]-=i<0?this._totalOffset:0,e[2]-=o<0?this._totalOffset:0,e[3]+=a>0?this._totalOffset:0,e[4]+=n>0?this._totalOffset:0,e[5]+=l>0?this._totalOffset:0,e;const v=Math.max(Math.abs(r),Math.abs(a)),p=Math.max(Math.abs(i),Math.abs(n)),g=Math.max(Math.abs(o),Math.abs(l)),b=Math.sqrt(v*v+p*p+g*g),_=this._totalOffset/b,w=this._totalOffset/m;return e[0]+=r*(r>0?_:w),e[1]+=i*(i>0?_:w),e[2]+=o*(o>0?_:w),e[3]+=a*(a<0?_:w),e[4]+=n*(n<0?_:w),e[5]+=l*(l<0?_:w),e}applyToMbs(e){const r=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),i=this._totalOffset/r;return this._mbs[0]=e[0]+e[0]*i,this._mbs[1]=e[1]+e[1]*i,this._mbs[2]=e[2]+e[2]*i,this._mbs[3]=e[3]+e[3]*this._totalOffset/r,this._mbs}applyToObb(e){const r=e.center,i=this._totalOffset/Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]);this._obb.center[0]=r[0]+r[0]*i,this._obb.center[1]=r[1]+r[1]*i,this._obb.center[2]=r[2]+r[2]*i,Jr(this._obb.halfSize,e.halfSize,e.quaternion),ce(this._obb.halfSize,this._obb.halfSize,e.center);const o=this._totalOffset/Math.sqrt(this._obb.halfSize[0]*this._obb.halfSize[0]+this._obb.halfSize[1]*this._obb.halfSize[1]+this._obb.halfSize[2]*this._obb.halfSize[2]);return this._obb.halfSize[0]+=this._obb.halfSize[0]*o,this._obb.halfSize[1]+=this._obb.halfSize[1]*o,this._obb.halfSize[2]+=this._obb.halfSize[2]*o,Ce(this._obb.halfSize,this._obb.halfSize,e.center),Ja(vi,e.quaternion),Jr(this._obb.halfSize,this._obb.halfSize,vi),this._obb.halfSize[0]*=this._obb.halfSize[0]<0?-1:1,this._obb.halfSize[1]*=this._obb.halfSize[1]<0?-1:1,this._obb.halfSize[2]*=this._obb.halfSize[2]<0?-1:1,this._obb.quaternion=e.quaternion,this._obb}}class _s{constructor(e=0){this.offset=e,this.sphere=Bi(),this.tmpVertex=N()}applyToVertex(e,r,i){const o=this.objectTransform.transform;let a=o[0]*e+o[4]*r+o[8]*i+o[12],n=o[1]*e+o[5]*r+o[9]*i+o[13],l=o[2]*e+o[6]*r+o[10]*i+o[14];const d=this.offset/Math.sqrt(a*a+n*n+l*l);a+=a*d,n+=n*d,l+=l*d;const c=this.objectTransform.inverse;return this.tmpVertex[0]=c[0]*a+c[4]*n+c[8]*l+c[12],this.tmpVertex[1]=c[1]*a+c[5]*n+c[9]*l+c[13],this.tmpVertex[2]=c[2]*a+c[6]*n+c[10]*l+c[14],this.tmpVertex}applyToMinMax(e,r){const i=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*i,e[1]+=e[1]*i,e[2]+=e[2]*i;const o=this.offset/Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]);r[0]+=r[0]*o,r[1]+=r[1]*o,r[2]+=r[2]*o}applyToAabb(e){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const i=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*i,e[4]+=e[4]*i,e[5]+=e[5]*i,e}applyToBoundingSphere(e){const r=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),i=this.offset/r;return this.sphere[0]=e[0]+e[0]*i,this.sphere[1]=e[1]+e[1]*i,this.sphere[2]=e[2]+e[2]*i,this.sphere[3]=e[3]+e[3]*this.offset/r,this.sphere}}const pi=new _s;function bs(t){return f(t)?(pi.offset=t,pi):null}new Ts;const vi=Qa();function Ss(t,e,r,i){const o=r.typedBuffer,a=r.typedBufferStride,n=t.length;i*=a;for(let l=0;l<n;++l){const d=2*t[l];o[i]=e[d],o[i+1]=e[d+1],i+=a}}function io(t,e,r,i,o){const a=r.typedBuffer,n=r.typedBufferStride,l=t.length;if(i*=n,o==null||o===1)for(let d=0;d<l;++d){const c=3*t[d];a[i]=e[c],a[i+1]=e[c+1],a[i+2]=e[c+2],i+=n}else for(let d=0;d<l;++d){const c=3*t[d];for(let u=0;u<o;++u)a[i]=e[c],a[i+1]=e[c+1],a[i+2]=e[c+2],i+=n}}function oo(t,e,r,i,o=1){const a=r.typedBuffer,n=r.typedBufferStride,l=t.length;if(i*=n,o===1)for(let d=0;d<l;++d){const c=4*t[d];a[i]=e[c],a[i+1]=e[c+1],a[i+2]=e[c+2],a[i+3]=e[c+3],i+=n}else for(let d=0;d<l;++d){const c=4*t[d];for(let u=0;u<o;++u)a[i]=e[c],a[i+1]=e[c+1],a[i+2]=e[c+2],a[i+3]=e[c+3],i+=n}}function ws(t,e,r,i,o,a=1){if(!r)return void io(t,e,i,o,a);const n=i.typedBuffer,l=i.typedBufferStride,d=t.length,c=r[0],u=r[1],m=r[2],v=r[4],p=r[5],g=r[6],b=r[8],_=r[9],w=r[10],V=r[12],R=r[13],O=r[14];o*=l;let I=0,M=0,P=0;const $=Li(r)?L=>{I=e[L]+V,M=e[L+1]+R,P=e[L+2]+O}:L=>{const C=e[L],F=e[L+1],y=e[L+2];I=c*C+v*F+b*y+V,M=u*C+p*F+_*y+R,P=m*C+g*F+w*y+O};if(a===1)for(let L=0;L<d;++L)$(3*t[L]),n[o]=I,n[o+1]=M,n[o+2]=P,o+=l;else for(let L=0;L<d;++L){$(3*t[L]);for(let C=0;C<a;++C)n[o]=I,n[o+1]=M,n[o+2]=P,o+=l}}function ys(t,e,r,i,o,a=1){if(!r)return void io(t,e,i,o,a);const n=r,l=i.typedBuffer,d=i.typedBufferStride,c=t.length,u=n[0],m=n[1],v=n[2],p=n[4],g=n[5],b=n[6],_=n[8],w=n[9],V=n[10],R=!Ri(n),O=1e-6,I=1-O;o*=d;let M=0,P=0,$=0;const L=Li(n)?C=>{M=e[C],P=e[C+1],$=e[C+2]}:C=>{const F=e[C],y=e[C+1],D=e[C+2];M=u*F+p*y+_*D,P=m*F+g*y+w*D,$=v*F+b*y+V*D};if(a===1)if(R)for(let C=0;C<c;++C){L(3*t[C]);const F=M*M+P*P+$*$;if(F<I&&F>O){const y=1/Math.sqrt(F);l[o]=M*y,l[o+1]=P*y,l[o+2]=$*y}else l[o]=M,l[o+1]=P,l[o+2]=$;o+=d}else for(let C=0;C<c;++C)L(3*t[C]),l[o]=M,l[o+1]=P,l[o+2]=$,o+=d;else for(let C=0;C<c;++C){if(L(3*t[C]),R){const F=M*M+P*P+$*$;if(F<I&&F>O){const y=1/Math.sqrt(F);M*=y,P*=y,$*=y}}for(let F=0;F<a;++F)l[o]=M,l[o+1]=P,l[o+2]=$,o+=d}}function As(t,e,r,i,o,a=1){if(!r)return void oo(t,e,i,o,a);const n=r,l=i.typedBuffer,d=i.typedBufferStride,c=t.length,u=n[0],m=n[1],v=n[2],p=n[4],g=n[5],b=n[6],_=n[8],w=n[9],V=n[10],R=!Ri(n),O=1e-6,I=1-O;if(o*=d,a===1)for(let M=0;M<c;++M){const P=4*t[M],$=e[P],L=e[P+1],C=e[P+2],F=e[P+3];let y=u*$+p*L+_*C,D=m*$+g*L+w*C,B=v*$+b*L+V*C;if(R){const k=y*y+D*D+B*B;if(k<I&&k>O){const W=1/Math.sqrt(k);y*=W,D*=W,B*=W}}l[o]=y,l[o+1]=D,l[o+2]=B,l[o+3]=F,o+=d}else for(let M=0;M<c;++M){const P=4*t[M],$=e[P],L=e[P+1],C=e[P+2],F=e[P+3];let y=u*$+p*L+_*C,D=m*$+g*L+w*C,B=v*$+b*L+V*C;if(R){const k=y*y+D*D+B*B;if(k<I&&k>O){const W=1/Math.sqrt(k);y*=W,D*=W,B*=W}}for(let k=0;k<a;++k)l[o]=y,l[o+1]=D,l[o+2]=B,l[o+3]=F,o+=d}}function Cs(t,e,r,i,o,a=1){const n=i.typedBuffer,l=i.typedBufferStride,d=t.length;if(o*=l,r!==e.length||r!==4)if(a!==1)if(r!==4)for(let c=0;c<d;++c){const u=3*t[c];for(let m=0;m<a;++m)n[o]=e[u],n[o+1]=e[u+1],n[o+2]=e[u+2],n[o+3]=255,o+=l}else for(let c=0;c<d;++c){const u=4*t[c];for(let m=0;m<a;++m)n[o]=e[u],n[o+1]=e[u+1],n[o+2]=e[u+2],n[o+3]=e[u+3],o+=l}else{if(r===4){for(let c=0;c<d;++c){const u=4*t[c];n[o]=e[u],n[o+1]=e[u+1],n[o+2]=e[u+2],n[o+3]=e[u+3],o+=l}return}for(let c=0;c<d;++c){const u=3*t[c];n[o]=e[u],n[o+1]=e[u+1],n[o+2]=e[u+2],n[o+3]=255,o+=l}}else{n[o]=e[0],n[o+1]=e[1],n[o+2]=e[2],n[o+3]=e[3];const c=new Uint32Array(i.typedBuffer.buffer,i.start),u=l/4,m=c[o/=4];o+=u;const v=d*a;for(let p=1;p<v;++p)c[o]=m,o+=u}}function Ms(t,e,r,i,o=1){const a=e.typedBuffer,n=e.typedBufferStride;if(i*=n,o===1)for(let l=0;l<r;++l)a[i]=t[0],a[i+1]=t[1],a[i+2]=t[2],a[i+3]=t[3],i+=n;else for(let l=0;l<r;++l)for(let d=0;d<o;++d)a[i]=t[0],a[i+1]=t[1],a[i+2]=t[2],a[i+3]=t[3],i+=n}function Os(t,e,r,i,o,a){for(const n of e.fieldNames){const l=t.vertexAttributes.get(n),d=t.indices.get(n);if(l&&d)switch(n){case h.POSITION:{j(l.size===3);const c=o.getField(n,tt);j(!!c,`No buffer view for ${n}`),c&&ws(d,l.data,r,c,a);break}case h.NORMAL:{j(l.size===3);const c=o.getField(n,tt);j(!!c,`No buffer view for ${n}`),c&&ys(d,l.data,i,c,a);break}case h.UV0:{j(l.size===2);const c=o.getField(n,Di);j(!!c,`No buffer view for ${n}`),c&&Ss(d,l.data,c,a);break}case h.COLOR:case h.SYMBOLCOLOR:{j(l.size===3||l.size===4);const c=o.getField(n,Ct);j(!!c,`No buffer view for ${n}`),c&&Cs(d,l.data,l.size,c,a);break}case h.TANGENT:{j(l.size===4);const c=o.getField(n,kt);j(!!c,`No buffer view for ${n}`),c&&As(d,l.data,i,c,a);break}case h.PROFILERIGHT:case h.PROFILEUP:case h.PROFILEVERTEXANDNORMAL:case h.FEATUREVALUE:{j(l.size===4);const c=o.getField(n,kt);j(!!c,`No buffer view for ${n}`),c&&oo(d,l.data,c,a)}}else if(n===h.OBJECTANDLAYERIDCOLOR&&f(t.objectAndLayerIdColor)){const c=t.indices.get(h.POSITION);if(j(!!c,`No buffer view for ${n}`),c){const u=c.length,m=o.getField(n,Ct);Ms(t.objectAndLayerIdColor,m,u,a)}}}}class Ps{constructor(e){this.vertexBufferLayout=e}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(h.POSITION).length}write(e,r,i,o,a){Os(i,this.vertexBufferLayout,e,r,o,a)}}function $s(t){const e=s`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;t.vertex.code.add(e)}function rr(t,e){switch(e.normalType){case H.CompressedAttribute:t.include($s),t.attributes.add(h.NORMALCOMPRESSED,"vec2"),t.vertex.code.add(s`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`);break;case H.Attribute:t.attributes.add(h.NORMAL,"vec3"),t.vertex.code.add(s`vec3 normalModel() {
return normal;
}`);break;case H.ScreenDerivative:t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(s`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:Ye(e.normalType);case H.COUNT:case H.Ground:}}var H;(function(t){t[t.Attribute=0]="Attribute",t[t.CompressedAttribute=1]="CompressedAttribute",t[t.Ground=2]="Ground",t[t.ScreenDerivative=3]="ScreenDerivative",t[t.COUNT=4]="COUNT"})(H||(H={}));function Nr(t){t.attributes.add(h.POSITION,"vec3"),t.vertex.code.add(s`vec3 positionModel() { return position; }`)}function ao({code:t},e){e.doublePrecisionRequiresObfuscation?t.add(s`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):t.add(s`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}class no extends J{constructor(e,r){super(e,"mat3",z.Draw,(i,o,a)=>i.setUniformMatrix3fv(e,r(o,a)))}}class Ne extends J{constructor(e,r){super(e,"mat3",z.Pass,(i,o,a)=>i.setUniformMatrix3fv(e,r(o,a)))}}class qe extends J{constructor(e,r){super(e,"mat4",z.Pass,(i,o,a)=>i.setUniformMatrix4fv(e,r(o,a)))}}function so(t,e){t.include(Nr);const r=t.vertex;r.include(ao,e),t.varyings.add("vPositionWorldCameraRelative","vec3"),t.varyings.add("vPosition_view","vec3"),r.uniforms.add([new Z("transformWorldFromViewTH",i=>i.transformWorldFromViewTH),new Z("transformWorldFromViewTL",i=>i.transformWorldFromViewTL),new Ne("transformViewFromCameraRelativeRS",i=>i.transformViewFromCameraRelativeRS),new qe("transformProjFromView",i=>i.transformProjFromView),new no("transformWorldFromModelRS",i=>i.transformWorldFromModelRS),new fe("transformWorldFromModelTH",i=>i.transformWorldFromModelTH),new fe("transformWorldFromModelTL",i=>i.transformWorldFromModelTL)]),r.code.add(s`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(s`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${e.spherical?s`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:s`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),t.fragment.uniforms.add(new Z("transformWorldFromViewTL",i=>i.transformWorldFromViewTL)),r.code.add(s`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),t.fragment.code.add(s`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class Ls extends Qt{constructor(){super(...arguments),this.transformWorldFromViewTH=N(),this.transformWorldFromViewTL=N(),this.transformViewFromCameraRelativeRS=Jt(),this.transformProjFromView=Cr()}}function lo(t,e){switch(e.normalType){case H.Attribute:case H.CompressedAttribute:t.include(rr,e),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("vNormalView","vec3"),t.vertex.uniforms.add([new no("transformNormalGlobalFromModel",r=>r.transformNormalGlobalFromModel),new Ne("transformNormalViewFromGlobal",r=>r.transformNormalViewFromGlobal)]),t.vertex.code.add(s`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case H.Ground:t.include(so,e),t.varyings.add("vNormalWorld","vec3"),t.vertex.code.add(s`
        void forwardNormal() {
          vNormalWorld = ${e.spherical?s`normalize(vPositionWorldCameraRelative);`:s`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case H.ScreenDerivative:t.vertex.code.add(s`void forwardNormal() {}`);break;default:Ye(e.normalType);case H.COUNT:}}class Rs extends Ls{constructor(){super(...arguments),this.transformNormalViewFromGlobal=Jt()}}const Es=.1,Ir=.001;class ir{constructor(e,r){this._module=e,this._loadModule=r}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}class Dr{constructor(e,r,i){this.release=i,this.initializeConfiguration(e,r),this._configuration=r.snapshot(),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}destroy(){this._program=Qr(this._program),this._pipeline=this._configuration=null}reload(e){Qr(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}bindPipelineState(e,r=null,i){e.setPipelineState(this.getPipelineState(r,i))}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return _t.TRIANGLES}getPipelineState(e,r){return this._pipeline}initializeConfiguration(e,r){}}class Fr{constructor(e,r,i){this._context=e,this._locations=i,this._textures=new Map,this._freeTextureUnits=new Mi({deallocator:null}),this._glProgram=e.programCache.acquire(r.generate("vertex"),r.generate("fragment"),i),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=r.generateBind(z.Pass,this),this.bindDraw=r.generateBind(z.Draw,this),this._fragmentUniforms=Ha()?r.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get compiled(){return this._glProgram.compiled}setUniform1b(e,r){this._glProgram.setUniform1i(e,r?1:0)}setUniform1i(e,r){this._glProgram.setUniform1i(e,r)}setUniform1f(e,r){this._glProgram.setUniform1f(e,r)}setUniform2fv(e,r){this._glProgram.setUniform2fv(e,r)}setUniform3fv(e,r){this._glProgram.setUniform3fv(e,r)}setUniform4fv(e,r){this._glProgram.setUniform4fv(e,r)}setUniformMatrix3fv(e,r){this._glProgram.setUniformMatrix3fv(e,r)}setUniformMatrix4fv(e,r){this._glProgram.setUniformMatrix4fv(e,r)}setUniform1fv(e,r){this._glProgram.setUniform1fv(e,r)}setUniform1iv(e,r){this._glProgram.setUniform1iv(e,r)}setUniform2iv(e,r){this._glProgram.setUniform3iv(e,r)}setUniform3iv(e,r){this._glProgram.setUniform3iv(e,r)}setUniform4iv(e,r){this._glProgram.setUniform4iv(e,r)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,r){if(G(r)||r.glName==null){const o=this._textures.get(e);return o&&(this._context.bindTexture(null,o.unit),this._freeTextureUnit(o),this._textures.delete(e)),null}let i=this._textures.get(e);return i==null?(i=this._allocTextureUnit(r),this._textures.set(e,i)):i.texture=r,this._context.useProgram(this),this.setUniform1i(e,i.unit),this._context.bindTexture(r,i.unit),i.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach((e,r)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(r,e.unit)}),f(this._fragmentUniforms)&&this._fragmentUniforms.forEach(e=>{e.type!=="sampler2D"&&e.type!=="samplerCube"||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)})}_allocTextureUnit(e){return{texture:e,unit:this._freeTextureUnits.length===0?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}Ee.LESS;Ee.ALWAYS;const Ns={mask:255},Is={function:{func:Ee.ALWAYS,ref:Le.OutlineVisualElementMask,mask:Le.OutlineVisualElementMask},operation:{fail:se.KEEP,zFail:se.KEEP,zPass:se.ZERO}},Ds={function:{func:Ee.ALWAYS,ref:Le.OutlineVisualElementMask,mask:Le.OutlineVisualElementMask},operation:{fail:se.KEEP,zFail:se.KEEP,zPass:se.REPLACE}};Ee.EQUAL,Le.OutlineVisualElementMask,Le.OutlineVisualElementMask,se.KEEP,se.KEEP,se.KEEP;Ee.NOTEQUAL,Le.OutlineVisualElementMask,Le.OutlineVisualElementMask,se.KEEP,se.KEEP,se.KEEP;function gi(t){t.varyings.add("linearDepth","float")}function co(t){t.vertex.uniforms.add(new de("nearFar",(e,r)=>r.camera.nearFar))}function uo(t){t.vertex.code.add(s`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function ho(t,e){const{vertex:r}=t;switch(e.output){case A.Color:if(e.receiveShadows)return gi(t),void r.code.add(s`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case A.Depth:case A.Shadow:case A.ShadowHighlight:case A.ShadowExcludeHighlight:return t.include(so,e),gi(t),co(t),uo(t),void r.code.add(s`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(s`void forwardLinearDepth() {}`)}function mo(t){t.vertex.code.add(s`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function Xe(t,e){Fs(t,e,[new fe("slicePlaneOrigin",(r,i)=>zs(e,r,i)),new fe("slicePlaneBasis1",(r,i)=>{var o;return xi(e,r,i,(o=At(i.slicePlane))==null?void 0:o.basis1)}),new fe("slicePlaneBasis2",(r,i)=>{var o;return xi(e,r,i,(o=At(i.slicePlane))==null?void 0:o.basis2)})])}function Fs(t,e,r){if(!e.hasSlicePlane){const n=s`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return e.hasSliceInVertexProgram&&t.vertex.code.add(n),void t.fragment.code.add(n)}t.extensions.add("GL_OES_standard_derivatives"),e.hasSliceInVertexProgram&&t.vertex.uniforms.add(r),t.fragment.uniforms.add(r);const i=s`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,o=s`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,a=e.hasSliceHighlight?s`
        ${o}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:s`#define highlightSlice(_color_, _pos_) (_color_)`;e.hasSliceInVertexProgram&&t.vertex.code.add(i),t.fragment.code.add(i),t.fragment.code.add(a)}function fo(t,e,r){return t.instancedDoublePrecision?K(Vs,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):e.slicePlaneLocalOrigin}function po(t,e){return f(t)?Ce(Wt,e.origin,t):e.origin}function vo(t,e,r){return t.hasSliceTranslatedView?f(e)?vr(Bs,r.camera.viewMatrix,e):r.camera.viewMatrix:null}function zs(t,e,r){if(G(r.slicePlane))return Ar;const i=fo(t,e,r),o=po(i,r.slicePlane),a=vo(t,i,r);return f(a)?at(Wt,o,a):o}function xi(t,e,r,i){if(G(i)||G(r.slicePlane))return Ar;const o=fo(t,e,r),a=po(o,r.slicePlane),n=vo(t,o,r);return f(n)?(ce(Tt,i,a),at(Wt,a,n),at(Tt,Tt,n),Ce(Tt,Tt,Wt)):i}const Vs=N(),Wt=N(),Tt=N(),Bs=Cr();function St(t,e){if(uo(t),e.hasModelTransformation)return t.vertex.code.add(s`vec4 transformPositionWithDepth(mat4 proj, mat4 view, mat4 model, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * (model * vec4(pos, 1.0));
depth = calculateLinearDepth(nearFar, eye.z);
return proj * eye;
}`),void t.vertex.code.add(s`vec4 transformPosition(mat4 proj, mat4 view, mat4 model, vec3 pos) {
return proj * (view * (model * vec4(pos, 1.0)));
}`);t.vertex.code.add(s`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),t.vertex.code.add(s`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}class Gs extends J{constructor(e,r){super(e,"mat4",z.Draw,(i,o,a)=>i.setUniformMatrix4fv(e,r(o,a)))}}function Mt(t,e){e.instancedDoublePrecision?t.constants.add("cameraPosition","vec3",Ar):t.uniforms.add(new fe("cameraPosition",(r,i)=>K(go,i.camera.viewInverseTransposeMatrix[3]-r.origin[0],i.camera.viewInverseTransposeMatrix[7]-r.origin[1],i.camera.viewInverseTransposeMatrix[11]-r.origin[2])))}function wt(t,e){if(!e.instancedDoublePrecision)return void t.uniforms.add([new qe("proj",(i,o)=>o.camera.projectionMatrix),new Gs("view",(i,o)=>vr(Ti,o.camera.viewMatrix,i.origin)),new fe("localOrigin",i=>i.origin)]);const r=i=>K(go,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]);t.uniforms.add([new qe("proj",(i,o)=>o.camera.projectionMatrix),new qe("view",(i,o)=>vr(Ti,o.camera.viewMatrix,r(o))),new Z("localOrigin",(i,o)=>r(o))])}const Ti=oa(),go=N();function Us(t){t.uniforms.add(new qe("viewNormal",(e,r)=>r.camera.viewInverseTransposeMatrix))}class xo extends Qt{constructor(){super(),this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map(()=>0):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,r={key:this.key};for(const i of e)r[i]=this[i];return r}}function T(t={}){return(e,r)=>{var i,o;if(e._parameterNames=(i=e._parameterNames)!=null?i:[],e._parameterNames.push(r),t.constValue!=null)Object.defineProperty(e,r,{get:()=>t.constValue});else{const a=e._parameterNames.length-1,n=t.count||2,l=Math.ceil(Math.log2(n)),d=(o=e._parameterBits)!=null?o:[0];let c=0;for(;d[c]+l>16;)c++,c>=d.length&&d.push(0);e._parameterBits=d;const u=d[c],m=(1<<l)-1<<u;d[c]+=l,Object.defineProperty(e,r,{get(){return this[a]},set(v){if(this[a]!==v&&(this[a]=v,this._keyDirty=!0,this._parameterBits[c]=this._parameterBits[c]&~m|+v<<u&m,typeof v!="number"&&typeof v!="boolean"))throw new Error("Configuration value for "+r+" must be boolean or number, got "+typeof v)}})}}}class Hs extends xo{constructor(){super(...arguments),this.instancedDoublePrecision=!1}}function To(t,e){e.instanced&&e.instancedDoublePrecision&&(t.attributes.add(h.MODELORIGINHI,"vec3"),t.attributes.add(h.MODELORIGINLO,"vec3"),t.attributes.add(h.MODEL,"mat3"),t.attributes.add(h.MODELNORMAL,"mat3"));const r=t.vertex;e.instancedDoublePrecision&&(r.include(ao,e),r.uniforms.add(new fe("viewOriginHi",(i,o)=>en(K(Dt,o.camera.viewInverseTransposeMatrix[3],o.camera.viewInverseTransposeMatrix[7],o.camera.viewInverseTransposeMatrix[11]),Dt))),r.uniforms.add(new fe("viewOriginLo",(i,o)=>tn(K(Dt,o.camera.viewInverseTransposeMatrix[3],o.camera.viewInverseTransposeMatrix[7],o.camera.viewInverseTransposeMatrix[11]),Dt)))),r.code.add(s`
    vec3 calculateVPos() {
      ${e.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `),r.code.add(s`
    vec3 subtractOrigin(vec3 _pos) {
      ${e.instancedDoublePrecision?s`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),r.code.add(s`
    vec3 dpNormal(vec4 _normal) {
      ${e.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `),e.output===A.Normal&&(Us(r),r.code.add(s`
    vec3 dpNormalView(vec4 _normal) {
      ${e.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `)),e.hasVertexTangents&&r.code.add(s`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${e.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `)}x([T()],Hs.prototype,"instancedDoublePrecision",void 0);const Dt=N();function ks(t){t.vertex.code.add(s`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${s.int(Se.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${s.int(Se.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${s.int(Se.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${s.int(Se.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}class _o extends J{constructor(e,r){super(e,"int",z.Pass,(i,o,a)=>i.setUniform1i(e,r(o,a)))}}function bo(t,e){e.hasSymbolColors?(t.include(ks),t.attributes.add(h.SYMBOLCOLOR,"vec4"),t.varyings.add("colorMixMode","mediump float"),t.vertex.code.add(s`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(t.fragment.uniforms.add(new _o("colorMixMode",r=>vs[r.colorMixMode])),t.vertex.code.add(s`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function So(t,e){e.hasVertexColors?(t.attributes.add(h.COLOR,"vec4"),t.varyings.add("vColor","vec4"),t.vertex.code.add(s`void forwardVertexColor() { vColor = color; }`),t.vertex.code.add(s`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):t.vertex.code.add(s`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}function Ws(t){t.vertex.code.add(s`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),t.vertex.code.add(s`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),t.vertex.code.add(s`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),t.vertex.code.add(s`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),t.vertex.code.add(s`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),t.vertex.code.add(s`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),t.vertex.code.add(s`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function js(t){t.uniforms.add(new te("screenSizePerspectiveAlignment",e=>qs(e.screenSizePerspectiveAlignment||e.screenSizePerspective)))}function qs(t){return oe(Xs,t.parameters.divisor,t.parameters.offset,t.parameters.minPixelSize,t.paddingPixelsOverride)}const Xs=Zt();function wo(t,e){const r=t.vertex;e.hasVerticalOffset?(Ys(r),e.hasScreenSizePerspective&&(t.include(Ws),js(r),Mt(t.vertex,e)),r.code.add(s`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${e.spherical?s`vec3 worldNormal = normalize(worldPos + localOrigin);`:s`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${e.hasScreenSizePerspective?s`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:s`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(s`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const Ks=Zt();function Ys(t){t.uniforms.add(new te("verticalOffset",(e,r)=>{const{minWorldLength:i,maxWorldLength:o,screenLength:a}=e.verticalOffset,n=Math.tan(.5*r.camera.fovY)/(.5*r.camera.fullViewport[3]),l=r.camera.pixelRatio||1;return oe(Ks,a*l,n,i,o)}))}function Zs(t,e){const r=e.output===A.ObjectAndLayerIdColor,i=e.objectAndLayerIdColorInstanced;r&&(t.varyings.add("objectAndLayerIdColorVarying","vec4"),i?t.attributes.add(h.OBJECTANDLAYERIDCOLOR_INSTANCED,"vec4"):t.attributes.add(h.OBJECTANDLAYERIDCOLOR,"vec4")),t.vertex.code.add(s`
     void forwardObjectAndLayerIdColor() {
      ${r?i?s`objectAndLayerIdColorVarying = objectAndLayerIdColor_instanced * 0.003921568627451;`:s`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:s``} }`),t.fragment.code.add(s`
      void outputObjectAndLayerIdColor() {
        ${r?s`gl_FragColor = objectAndLayerIdColorVarying;`:s``} }`)}function zr(t){t.code.add(s`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}function Js(t,e){switch(t.fragment.include(zr),e.output){case A.Shadow:case A.ShadowHighlight:case A.ShadowExcludeHighlight:t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(s`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`);break;case A.Depth:t.fragment.code.add(s`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}}const Qs=Yt(1,1,0,1),el=Yt(1,0,1,1);function tl(t,e){t.fragment.uniforms.add(je("depthTex",(r,i)=>i.highlightDepthTexture,e.hasWebGL2Context?Y.None:Y.InvSize)),t.fragment.constants.add("occludedHighlightFlag","vec4",Qs).add("unoccludedHighlightFlag","vec4",el),t.fragment.code.add(s`
    void outputHighlight() {
      vec3 fragCoord = gl_FragCoord.xyz;

      float sceneDepth = ${Sn(e,"depthTex","fragCoord.xy")}.x;
      if (fragCoord.z > sceneDepth + 5e-7) {
        gl_FragColor = occludedHighlightFlag;
      }
      else {
        gl_FragColor = unoccludedHighlightFlag;
      }
    }
  `)}class rl extends J{constructor(e,r,i){super(e,"vec4",z.Pass,(o,a,n)=>o.setUniform4fv(e,r(a,n)),i)}}class il extends J{constructor(e,r,i){super(e,"float",z.Pass,(o,a,n)=>o.setUniform1fv(e,r(a,n)),i)}}const ur=8;function yt(t,e){e.hasVvInstancing&&(e.vvSize||e.vvColor)&&t.attributes.add(h.INSTANCEFEATUREATTRIBUTE,"vec4");const r=t.vertex;e.vvSize?(r.uniforms.add(new Z("vvSizeMinSize",i=>i.vvSizeMinSize)),r.uniforms.add(new Z("vvSizeMaxSize",i=>i.vvSizeMaxSize)),r.uniforms.add(new Z("vvSizeOffset",i=>i.vvSizeOffset)),r.uniforms.add(new Z("vvSizeFactor",i=>i.vvSizeFactor)),r.uniforms.add(new Ne("vvSymbolRotationMatrix",i=>i.vvSymbolRotationMatrix)),r.uniforms.add(new Z("vvSymbolAnchor",i=>i.vvSymbolAnchor)),r.code.add(s`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(s`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${e.hasVvInstancing?s`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(s`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),e.vvColor?(r.constants.add("vvColorNumber","int",ur),e.hasVvInstancing&&r.uniforms.add([new il("vvColorValues",i=>i.vvColorValues,ur),new rl("vvColorColors",i=>i.vvColorColors,ur)]),r.code.add(s`
      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${e.hasVvInstancing?s`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):r.code.add(s`vec4 vvColor() { return vec4(1.0); }`)}function ol(t){t.fragment.code.add(s`
    #define discardOrAdjustAlpha(color) { if (color.a < ${s.float(Ir)}) { discard; } }
  `)}class ee extends J{constructor(e,r){super(e,"float",z.Pass,(i,o,a)=>i.setUniform1f(e,r(o,a)))}}function Ke(t,e){al(t,e,new ee("textureAlphaCutoff",r=>r.textureAlphaCutoff))}function al(t,e,r){const i=t.fragment;switch(e.alphaDiscardMode!==X.Mask&&e.alphaDiscardMode!==X.MaskBlend||i.uniforms.add(r),e.alphaDiscardMode){case X.Blend:return t.include(ol);case X.Opaque:i.code.add(s`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case X.Mask:i.code.add(s`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case X.MaskBlend:t.fragment.code.add(s`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function yo(t,e){const{vertex:r,fragment:i}=t,o=e.hasModelTransformation;o&&r.uniforms.add(new qe("model",n=>f(n.modelTransformation)?n.modelTransformation:Ht));const a=e.hasColorTexture&&e.alphaDiscardMode!==X.Opaque;switch(e.output){case A.Depth:case A.Shadow:case A.ShadowHighlight:case A.ShadowExcludeHighlight:case A.ObjectAndLayerIdColor:wt(r,e),t.include(St,e),t.include(ot,e),t.include(yt,e),t.include(Js,e),t.include(Xe,e),t.include(Zs,e),co(t),t.varyings.add("depth","float"),a&&i.uniforms.add(new ie("tex",n=>n.texture)),r.code.add(s`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPositionWithDepth(proj, view, ${o?"model,":""} vpos, nearFar, depth);
            forwardTextureCoordinates();
            forwardObjectAndLayerIdColor();
          }
        `),t.include(Ke,e),i.code.add(s`
          void main(void) {
            discardBySlice(vpos);
            ${a?s`
                    vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${e.output===A.ObjectAndLayerIdColor?s`outputObjectAndLayerIdColor();`:s`outputDepth(depth);`}
          }
        `);break;case A.Normal:wt(r,e),t.include(St,e),t.include(rr,e),t.include(lo,e),t.include(ot,e),t.include(yt,e),a&&i.uniforms.add(new ie("tex",n=>n.texture)),t.varyings.add("vPositionView","vec3"),r.code.add(s`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            ${e.normalType===H.Attribute?s`
            vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${o?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),t.include(Xe,e),t.include(Ke,e),i.code.add(s`
          void main() {
            discardBySlice(vpos);
            ${a?s`
                    vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${e.normalType===H.ScreenDerivative?s`
                vec3 normal = screenDerivativeNormal(vPositionView);`:s`
                vec3 normal = normalize(vNormalWorld);
                if (gl_FrontFacing == false) normal = -normal;`}
            gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
          }
        `);break;case A.Highlight:wt(r,e),t.include(St,e),t.include(ot,e),t.include(yt,e),a&&i.uniforms.add(new ie("tex",n=>n.texture)),r.code.add(s`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${o?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),t.include(Xe,e),t.include(Ke,e),t.include(tl,e),i.code.add(s`
          void main() {
            discardBySlice(vpos);
            ${a?s`
                    vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}function nl(t,e){const r=t.fragment;if(e.hasVertexTangents?(t.attributes.add(h.TANGENT,"vec4"),t.varyings.add("vTangent","vec4"),e.doubleSidedMode===re.WindingOrder?r.code.add(s`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(s`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(t.extensions.add("GL_OES_standard_derivatives"),r.code.add(s`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),e.textureCoordinateType!==Q.None){t.include(Ki,e);const i=e.supportsTextureAtlas?e.hasWebGL2Context?Y.None:Y.Size:Y.None;r.uniforms.add(e.pbrTextureBindType===z.Pass?je("normalTexture",o=>o.textureNormal,i):Vt("normalTexture",o=>o.textureNormal,i)),r.code.add(s`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${e.supportsTextureAtlas?s`vtc.size = ${rt(e,"normalTexture")};`:""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `)}}function Vr(t){t.include(zr),t.code.add(s`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}const hr=4;function sl(){const t=new $t,e=t.fragment;t.include(Lr);const r=(hr+1)/2,i=1/(2*r*r);return e.include(Vr),e.uniforms.add([new ie("depthMap",o=>o.depthTexture),new Yi("tex",o=>o.colorTexture),new Tr("blurSize",o=>o.blurSize),new ee("projScale",(o,a)=>{const n=aa(a.camera.eye,a.camera.center);return n>5e4?Math.max(0,o.projScale-(n-5e4)):o.projScale}),new de("nearFar",(o,a)=>a.camera.nearFar)]),e.code.add(s`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture2D(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${s.float(i)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.code.add(s`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${s.int(hr)}; r <= ${s.int(hr)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      gl_FragColor = vec4(b / w_total);
    }
  `),t}const ll=Object.freeze(Object.defineProperty({__proto__:null,build:sl},Symbol.toStringTag,{value:"Module"}));class Br extends Dr{initializeProgram(e){return new Fr(e.rctx,Br.shader.get().build(),Lt)}initializePipeline(){return Mr({colorWrite:Or})}}Br.shader=new ir(ll,()=>Ot(()=>import("./SSAOBlur.glsl.js"),["SSAOBlur.glsl.js","index.js","assets/index.45a801fc.css","OrderIndependentTransparency.js","enums.js","basicInterfaces.js","VertexAttribute.js","devEnvironmentUtils.js","mat3f64.js","mat4f64.js","BufferView.js","vec33.js","DefaultMaterial_COLOR_GAMMA.js","types.js","Version.js","quat.js","quatf64.js","resourceUtils2.js","Indices.js","NestedMap.js","requestImageUtils.js","Attribute.js","Util2.js","sphere.js","Texture.js","VertexArrayObject.js","VertexElementDescriptor.js","InterleavedLayout.js","vec3f32.js","doublePrecisionUtils.js"]));function cl(t){t.fragment.uniforms.add(new te("projInfo",(e,r)=>dl(r))),t.fragment.uniforms.add(new de("zScale",(e,r)=>Ao(r))),t.fragment.code.add(s`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function dl(t){const e=t.camera.projectionMatrix;return e[11]===0?oe(_i,2/(t.camera.fullWidth*e[0]),2/(t.camera.fullHeight*e[5]),(1+e[12])/e[0],(1+e[13])/e[5]):oe(_i,-2/(t.camera.fullWidth*e[0]),-2/(t.camera.fullHeight*e[5]),(1-e[8])/e[0],(1-e[9])/e[5])}const _i=Zt();function Ao(t){return t.camera.projectionMatrix[11]===0?$e(bi,0,1):$e(bi,1,0)}const bi=Kt(),Si=16;function ul(){const t=new $t,e=t.fragment;return t.include(Lr),e.include(Vr),t.include(cl),e.uniforms.add(new ee("radius",(r,i)=>Co(i.camera))),e.code.add(s`vec3 sphere[16];
void fillSphere() {
sphere[0] = vec3(0.186937, 0.0, 0.0);
sphere[1] = vec3(0.700542, 0.0, 0.0);
sphere[2] = vec3(-0.864858, -0.481795, -0.111713);
sphere[3] = vec3(-0.624773, 0.102853, -0.730153);
sphere[4] = vec3(-0.387172, 0.260319, 0.007229);
sphere[5] = vec3(-0.222367, -0.642631, -0.707697);
sphere[6] = vec3(-0.01336, -0.014956, 0.169662);
sphere[7] = vec3(0.122575, 0.1544, -0.456944);
sphere[8] = vec3(-0.177141, 0.85997, -0.42346);
sphere[9] = vec3(-0.131631, 0.814545, 0.524355);
sphere[10] = vec3(-0.779469, 0.007991, 0.624833);
sphere[11] = vec3(0.308092, 0.209288,0.35969);
sphere[12] = vec3(0.359331, -0.184533, -0.377458);
sphere[13] = vec3(0.192633, -0.482999, -0.065284);
sphere[14] = vec3(0.233538, 0.293706, -0.055139);
sphere[15] = vec3(0.417709, -0.386701, 0.442449);
}
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn-bias, 0.0);
}`),e.code.add(s`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),e.uniforms.add([new de("nearFar",(r,i)=>i.camera.nearFar),new ie("normalMap",r=>r.normalTexture),new ie("depthMap",r=>r.depthTexture),new de("zScale",(r,i)=>Ao(i)),new ee("projScale",r=>r.projScale),new ie("rnm",r=>r.noiseTexture),new de("rnmScale",(r,i)=>$e(wi,i.camera.fullWidth/At(r.noiseTexture).descriptor.width,i.camera.fullHeight/At(r.noiseTexture).descriptor.height)),new ee("intensity",r=>r.intensity),new de("screenSize",(r,i)=>$e(wi,i.camera.fullWidth,i.camera.fullHeight))]),e.code.add(s`
    void main(void) {
      fillSphere();
      vec3 fres = normalize((texture2D(rnm, uv * rnmScale).xyz * 2.0) - vec3(1.0));
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth>nearFar.y || -currentPixelDepth<nearFar.x) {
        gl_FragColor = vec4(0.0);
        return;
      }

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy,currentPixelDepth);

      // get the normal of current fragment
      vec4 norm4 = texture2D(normalMap, uv);
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;
      bool isTerrain = norm4.w<0.5;

      float sum = .0;
      vec3 tapPixelPos;

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${s.int(Si)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        //don't use current or very nearby samples
        if ( abs(offset.x)<2.0 || abs(offset.y)<2.0) continue;

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        if (isTerrain) {
          bool isTerrainTap = texture2D(normalMap, tcTap).w<0.5;
          if (isTerrainTap) {
            continue;
          }
        }

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum+= aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${s.int(Si)}),0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4)/2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;
      gl_FragColor = vec4(A);
    }
  `),t}function Co(t){return Math.max(10,20*t.computeRenderPixelSizeAtDist(Math.abs(4*t.relativeElevation)))}const wi=Kt(),hl=Object.freeze(Object.defineProperty({__proto__:null,build:ul,getRadius:Co},Symbol.toStringTag,{value:"Module"}));class Gr extends Dr{initializeProgram(e){return new Fr(e.rctx,Gr.shader.get().build(),Lt)}initializePipeline(){return Mr({colorWrite:Or})}}Gr.shader=new ir(hl,()=>Ot(()=>import("./SSAO.glsl.js"),["SSAO.glsl.js","index.js","assets/index.45a801fc.css","OrderIndependentTransparency.js","enums.js","basicInterfaces.js","VertexAttribute.js","devEnvironmentUtils.js","mat3f64.js","mat4f64.js","BufferView.js","vec33.js","DefaultMaterial_COLOR_GAMMA.js","types.js","Version.js","quat.js","quatf64.js","resourceUtils2.js","Indices.js","NestedMap.js","requestImageUtils.js","Attribute.js","Util2.js","sphere.js","Texture.js","VertexArrayObject.js","VertexElementDescriptor.js","InterleavedLayout.js","vec3f32.js","doublePrecisionUtils.js"]));const ml=2;function Ur(t,e){const r=t.fragment;e.receiveAmbientOcclusion?(r.uniforms.add(je("ssaoTex",(i,o)=>o.ssaoHelper.colorTexture,e.hasWebGL2Context?Y.None:Y.InvSize)),r.constants.add("blurSizePixelsInverse","float",1/ml),r.code.add(s`
      float evaluateAmbientOcclusionInverse() {
        vec2 ssaoTextureSizeInverse = ${rt(e,"ssaoTex",!0)};
        return texture2D(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).a;
      }

      float evaluateAmbientOcclusion() {
        return 1.0 - evaluateAmbientOcclusionInverse();
      }
    `)):r.code.add(s`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function fl(t,e){const r=t.fragment,i=e.lightingSphericalHarmonicsOrder!==void 0?e.lightingSphericalHarmonicsOrder:2;i===0?(r.uniforms.add(new Z("lightingAmbientSH0",(o,a)=>K(yi,a.lighting.sh.r[0],a.lighting.sh.g[0],a.lighting.sh.b[0]))),r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):i===1?(r.uniforms.add([new te("lightingAmbientSH_R",(o,a)=>oe(_e,a.lighting.sh.r[0],a.lighting.sh.r[1],a.lighting.sh.r[2],a.lighting.sh.r[3])),new te("lightingAmbientSH_G",(o,a)=>oe(_e,a.lighting.sh.g[0],a.lighting.sh.g[1],a.lighting.sh.g[2],a.lighting.sh.g[3])),new te("lightingAmbientSH_B",(o,a)=>oe(_e,a.lighting.sh.b[0],a.lighting.sh.b[1],a.lighting.sh.b[2],a.lighting.sh.b[3]))]),r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):i===2&&(r.uniforms.add([new Z("lightingAmbientSH0",(o,a)=>K(yi,a.lighting.sh.r[0],a.lighting.sh.g[0],a.lighting.sh.b[0])),new te("lightingAmbientSH_R1",(o,a)=>oe(_e,a.lighting.sh.r[1],a.lighting.sh.r[2],a.lighting.sh.r[3],a.lighting.sh.r[4])),new te("lightingAmbientSH_G1",(o,a)=>oe(_e,a.lighting.sh.g[1],a.lighting.sh.g[2],a.lighting.sh.g[3],a.lighting.sh.g[4])),new te("lightingAmbientSH_B1",(o,a)=>oe(_e,a.lighting.sh.b[1],a.lighting.sh.b[2],a.lighting.sh.b[3],a.lighting.sh.b[4])),new te("lightingAmbientSH_R2",(o,a)=>oe(_e,a.lighting.sh.r[5],a.lighting.sh.r[6],a.lighting.sh.r[7],a.lighting.sh.r[8])),new te("lightingAmbientSH_G2",(o,a)=>oe(_e,a.lighting.sh.g[5],a.lighting.sh.g[6],a.lighting.sh.g[7],a.lighting.sh.g[8])),new te("lightingAmbientSH_B2",(o,a)=>oe(_e,a.lighting.sh.b[5],a.lighting.sh.b[6],a.lighting.sh.b[7],a.lighting.sh.b[8]))]),r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),e.pbrMode!==E.Normal&&e.pbrMode!==E.Schematic||r.code.add(s`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const yi=N(),_e=Zt();function Hr(t){t.uniforms.add(new Z("mainLightDirection",(e,r)=>r.lighting.mainLight.direction))}function or(t){t.uniforms.add(new Z("mainLightIntensity",(e,r)=>r.lighting.mainLight.intensity))}function pl(t,e){e.useLegacyTerrainShading?t.uniforms.add(new ee("lightingFixedFactor",(r,i)=>i.lighting.noonFactor*(1-i.lighting.globalFactor))):t.constants.add("lightingFixedFactor","float",0)}function Ai(t,e){const r=t.fragment;Hr(r),or(r),pl(r,e),r.code.add(s`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}function vl(t){const e=t.fragment.code;e.add(s`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.add(s`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.add(s`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function Mo(t){t.vertex.code.add(s`const float PI = 3.141592653589793;`),t.fragment.code.add(s`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}function kr(t,e){const r=t.fragment.code;t.include(Mo),e.pbrMode!==E.Normal&&e.pbrMode!==E.Schematic&&e.pbrMode!==E.Terrain&&e.pbrMode!==E.TerrainWithWater||(r.add(s`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(s`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),e.pbrMode!==E.Normal&&e.pbrMode!==E.Schematic||(t.include(vl),r.add(s`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(s`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(s`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(s`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}class gl extends J{constructor(e,r){super(e,"bool",z.Pass,(i,o,a)=>i.setUniform1b(e,r(o,a)))}}const xl=.4;function Wr(t){t.constants.add("ambientBoostFactor","float",xl)}function jr(t){t.uniforms.add(new ee("lightingGlobalFactor",(e,r)=>r.lighting.globalFactor))}function Oo(t,e){const r=t.fragment;switch(t.include(Ur,e),e.pbrMode!==E.Disabled&&t.include(kr,e),t.include(fl,e),t.include(Mo),r.code.add(s`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${e.pbrMode===E.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),Wr(r),jr(r),Hr(r),r.code.add(s`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${e.spherical?s`normalize(vPosWorld)`:s`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),or(r),r.code.add(s`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),e.pbrMode){case E.Disabled:case E.WaterOnIntegratedMesh:case E.Water:t.include(Ai,e),r.code.add(s`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case E.Normal:case E.Schematic:r.code.add(s`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(s`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),e.useFillLights?r.uniforms.add(new gl("hasFillLights",(i,o)=>o.enableFillLights)):r.constants.add("hasFillLights","bool",!1),r.code.add(s`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add([new ee("lightingSpecularStrength",(i,o)=>o.lighting.mainLight.specularStrength),new ee("lightingEnvironmentStrength",(i,o)=>o.lighting.mainLight.environmentStrength)]),r.code.add(s`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(s`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${e.pbrMode===E.Schematic?s`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:s`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case E.Terrain:case E.TerrainWithWater:t.include(Ai,e),r.code.add(s`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluateTerrainLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:Ye(e.pbrMode);case E.COUNT:}}function jt(t,e){e.hasMultipassTerrain&&(t.fragment.include(Vr),t.fragment.uniforms.add(new ie("terrainDepthTexture",(r,i)=>i.multipassTerrain.linearDepthTexture)),t.fragment.uniforms.add(new de("nearFar",(r,i)=>i.camera.nearFar)),t.fragment.uniforms.add(new de("inverseViewport",(r,i)=>i.inverseViewport)),t.fragment.code.add(s`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${e.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `))}class Tl extends J{constructor(e,r,i){super(e,"mat4",z.Draw,(o,a,n)=>o.setUniformMatrix4fv(e,r(a,n)),i)}}class _l extends J{constructor(e,r,i){super(e,"mat4",z.Pass,(o,a,n)=>o.setUniformMatrix4fv(e,r(a,n)),i)}}function Po(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new _l("shadowMapMatrix",(r,i)=>i.shadowMap.getShadowMapMatrices(r.origin),4)),Lo(t,e))}function $o(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new Tl("shadowMapMatrix",(r,i)=>i.shadowMap.getShadowMapMatrices(r.origin),4)),Lo(t,e))}function Lo(t,e){const r=t.fragment;r.include(zr),r.uniforms.add([...je("shadowMapTex",(i,o)=>o.shadowMap.depthTexture,e.hasWebGL2Context?Y.None:Y.Size),new _o("numCascades",(i,o)=>o.shadowMap.numCascades),new te("cascadeDistances",(i,o)=>o.shadowMap.cascadeDistances)]),r.code.add(s`
    int chooseCascade(float depth, out mat4 mat) {
      vec4 distance = cascadeDistances;

      // choose correct cascade
      int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;

      mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];

      return i;
    }

    vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
      vec4 lv = mat * vec4(_vpos, 1.0);
      lv.xy /= lv.w;
      return 0.5 * lv.xyz + vec3(0.5);
    }

    vec2 cascadeCoordinates(int i, vec3 lvpos) {
      return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
    }

    float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
      return rgba2float(texture2D(_depthTex, uv));
    }

    float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
      return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
    }

    float filterShadow(vec2 uv, vec3 lvpos, float textureSize, sampler2D _depthTex) {
      float halfPixelSize = 0.5 / textureSize;

      // filter, offset by half pixels
      vec2 st = fract((vec2(halfPixelSize) + uv) * textureSize);

      float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
      float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);

      return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
    }

    float readShadowMap(const in vec3 _vpos, float _linearDepth) {
      mat4 mat;
      int i = chooseCascade(_linearDepth, mat);

      if (i >= numCascades) { return 0.0; }

      vec3 lvpos = lightSpacePosition(_vpos, mat);

      // vertex completely outside? -> no shadow
      if (lvpos.z >= 1.0) { return 0.0; }
      if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }

      // calc coord in cascade texture
      vec2 uv = cascadeCoordinates(i, lvpos);

      vec2 textureSize = ${rt(e,"shadowMapTex")};

      return filterShadow(uv, lvpos, textureSize.x, shadowMapTex);
    }
  `)}function bl(t){t.vertex.uniforms.add(new Ne("colorTextureTransformMatrix",e=>f(e.colorTextureTransformMatrix)?e.colorTextureTransformMatrix:lt())),t.varyings.add("colorUV","vec2"),t.vertex.code.add(s`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Sl(t){t.vertex.uniforms.add(new Ne("normalTextureTransformMatrix",e=>f(e.normalTextureTransformMatrix)?e.normalTextureTransformMatrix:lt())),t.varyings.add("normalUV","vec2"),t.vertex.code.add(s`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function wl(t){t.vertex.uniforms.add(new Ne("emissiveTextureTransformMatrix",e=>f(e.emissiveTextureTransformMatrix)?e.emissiveTextureTransformMatrix:lt())),t.varyings.add("emissiveUV","vec2"),t.vertex.code.add(s`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function yl(t){t.vertex.uniforms.add(new Ne("occlusionTextureTransformMatrix",e=>f(e.occlusionTextureTransformMatrix)?e.occlusionTextureTransformMatrix:lt())),t.varyings.add("occlusionUV","vec2"),t.vertex.code.add(s`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Al(t){t.vertex.uniforms.add(new Ne("metallicRoughnessTextureTransformMatrix",e=>f(e.metallicRoughnessTextureTransformMatrix)?e.metallicRoughnessTextureTransformMatrix:lt())),t.varyings.add("metallicRoughnessUV","vec2"),t.vertex.code.add(s`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Cl(t){t.code.add(s`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function qt(t){t.include(Cl),t.code.add(s`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${s.int(Se.Multiply)}) {
        return allMixed;
      }
      if (mode == ${s.int(Se.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${s.int(Se.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${s.int(Se.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${s.int(Se.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}function Ml(t){const e=new $t,{vertex:r,fragment:i,varyings:o}=e;return wt(r,t),e.include(Nr),o.add("vpos","vec3"),e.include(yt,t),e.include(To,t),e.include(wo,t),t.hasColorTextureTransform&&e.include(bl),t.output!==A.Color&&t.output!==A.Alpha||(t.hasNormalTextureTransform&&e.include(Sl),t.hasEmissionTextureTransform&&e.include(wl),t.hasOcclusionTextureTransform&&e.include(yl),t.hasMetallicRoughnessTextureTransform&&e.include(Al),Mt(r,t),e.include(rr,t),e.include(St,t),t.normalType===H.Attribute&&t.offsetBackfaces&&e.include(mo),e.include(nl,t),e.include(lo,t),t.instancedColor&&e.attributes.add(h.INSTANCECOLOR,"vec4"),o.add("localvpos","vec3"),e.include(ot,t),e.include(ho,t),e.include(bo,t),e.include(So,t),r.uniforms.add(new te("externalColor",a=>a.externalColor)),o.add("vcolorExt","vec4"),t.hasMultipassTerrain&&o.add("depth","float"),t.hasModelTransformation&&r.uniforms.add(new qe("model",a=>f(a.modelTransformation)?a.modelTransformation:Ht)),r.code.add(s`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${t.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${s.float(Ir)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${t.normalType===H.Attribute?s`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${t.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${t.hasModelTransformation?"model,":""} vpos);
          ${t.normalType===H.Attribute&&t.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${t.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        ${t.hasColorTextureTransform?s`forwardColorUV();`:""}
        ${t.hasNormalTextureTransform?s`forwardNormalUV();`:""}
        ${t.hasEmissionTextureTransform?s`forwardEmissiveUV();`:""}
        ${t.hasOcclusionTextureTransform?s`forwardOcclusionUV();`:""}
        ${t.hasMetallicRoughnessTextureTransform?s`forwardMetallicRoughnessUV();`:""}
      }
    `)),t.output===A.Alpha&&(e.include(Xe,t),e.include(Ke,t),e.include(jt,t),i.uniforms.add([new ee("opacity",a=>a.opacity),new ee("layerOpacity",a=>a.layerOpacity)]),t.hasColorTexture&&i.uniforms.add(new ie("tex",a=>a.texture)),i.include(qt),i.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${t.hasColorTexture?s`
                vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        ${t.hasVertexColors?s`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        gl_FragColor = vec4(opacity_);
      }
    `)),t.output===A.Color&&(e.include(Xe,t),e.include(Oo,t),e.include(Ur,t),e.include(Ke,t),e.include(t.instancedDoublePrecision?Po:$o,t),e.include(jt,t),Mt(i,t),i.uniforms.add([r.uniforms.get("localOrigin"),new Z("ambient",a=>a.ambient),new Z("diffuse",a=>a.diffuse),new ee("opacity",a=>a.opacity),new ee("layerOpacity",a=>a.layerOpacity)]),t.hasColorTexture&&i.uniforms.add(new ie("tex",a=>a.texture)),e.include(Zi,t),e.include(kr,t),i.include(qt),e.include(Zn,t),Wr(i),jr(i),or(i),i.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${t.hasColorTexture?s`
                vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${t.normalType===H.ScreenDerivative?s`
                vec3 normal = screenDerivativeNormal(localvpos);`:s`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${t.pbrMode===E.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${t.receiveShadows?"readShadowMap(vpos, linearDepth)":t.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${t.hasVertexColors?s`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${t.hasNormalTexture?s`
                mat3 tangentSpace = ${t.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);`:s`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${t.spherical?s`normalize(posWorld);`:s`vec3(0.0, 0.0, 1.0);`}

        ${t.snowCover?s`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${t.pbrMode===E.Normal||t.pbrMode===E.Schematic?s`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${t.snowCover?s`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:s`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.transparencyPassType===nt.Color?s`gl_FragColor = premultiplyAlpha(gl_FragColor);`:""}
      }
    `)),e.include(yo,t),e}const Ol=Object.freeze(Object.defineProperty({__proto__:null,build:Ml},Symbol.toStringTag,{value:"Module"}));class Pl extends Rs{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=Pe(0,1,.5),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=Re.Back,this.emissiveFactor=Pe(0,0,0),this.instancedDoublePrecision=!1,this.normalType=H.Attribute,this.receiveSSAO=!0,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=Pe(.2,.2,.2),this.diffuse=Pe(.8,.8,.8),this.externalColor=Yt(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=N(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSizeEnabled=!1,this.vvSizeMinSize=[1,1,1],this.vvSizeMaxSize=[100,100,100],this.vvSizeOffset=[0,0,0],this.vvSizeFactor=[1,1,1],this.vvSizeValue=[1,1,1],this.vvColorEnabled=!1,this.vvColorValues=[0,0,0,0,0,0,0,0],this.vvColorColors=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],this.vvSymbolAnchor=[0,0,0],this.vvSymbolRotationMatrix=Jt(),this.vvOpacityEnabled=!1,this.vvOpacityValues=[],this.vvOpacityOpacities=[],this.transparent=!1,this.writeDepth=!0,this.customDepthTest=Pt.Less,this.textureAlphaMode=X.Blend,this.textureAlphaCutoff=Es,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=_r.Occlude}}class Rt extends Dr{initializeConfiguration(e,r){r.hasWebGL2Context=e.rctx.type===$i.WEBGL2,r.spherical=e.viewingMode===gr.Global,r.doublePrecisionRequiresObfuscation=e.rctx.driverTest.doublePrecisionRequiresObfuscation.result,r.textureCoordinateType=r.hasColorTexture||r.hasMetallicRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture?Q.Default:Q.None,r.objectAndLayerIdColorInstanced=r.instanced}initializeProgram(e){return this._initializeProgram(e,Rt.shader)}_initializeProgram(e,r){return new Fr(e.rctx,r.get().build(this.configuration),Lt)}_convertDepthTestFunction(e){return e===Pt.Lequal?Ee.LEQUAL:Ee.LESS}_makePipeline(e,r){const i=this.configuration,o=e===nt.NONE,a=e===nt.FrontFace;return Mr({blending:i.output!==A.Color&&i.output!==A.Alpha||!i.transparent?null:o?Ea:Na(e),culling:$l(i)?Ia(i.cullFace):null,depthTest:{func:Da(e,this._convertDepthTestFunction(i.customDepthTest))},depthWrite:(o||a)&&i.writeDepth?Fa:null,colorWrite:Or,stencilWrite:i.hasOccludees?Ns:null,stencilTest:i.hasOccludees?r?Ds:Is:null,polygonOffset:o||a?null:za(i.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,r){return r?this._occludeePipelineState:super.getPipelineState(e,r)}}function $l(t){return t.cullFace!==Re.None||!t.hasSlicePlane&&!t.transparent&&!t.doubleSidedMode}Rt.shader=new ir(Ol,()=>Ot(()=>import("./DefaultMaterial.glsl.js"),["DefaultMaterial.glsl.js","mat4f64.js","mat3f64.js","vec3f32.js","index.js","assets/index.45a801fc.css","OrderIndependentTransparency.js","enums.js","basicInterfaces.js","VertexAttribute.js","Attribute.js","VertexArrayObject.js","Texture.js","devEnvironmentUtils.js","BufferView.js","vec33.js","DefaultMaterial_COLOR_GAMMA.js","types.js","Version.js","quat.js","quatf64.js","resourceUtils2.js","Indices.js","NestedMap.js","requestImageUtils.js","Util2.js","sphere.js","VertexElementDescriptor.js","InterleavedLayout.js","doublePrecisionUtils.js"]));class Me extends xo{constructor(){super(...arguments),this.hasWebGL2Context=!1}}x([T({constValue:!0})],Me.prototype,"hasSliceHighlight",void 0),x([T({constValue:!1})],Me.prototype,"hasSliceInVertexProgram",void 0),x([T({constValue:!1})],Me.prototype,"instancedDoublePrecision",void 0),x([T({constValue:!1})],Me.prototype,"useLegacyTerrainShading",void 0),x([T({constValue:!1})],Me.prototype,"hasModelTransformation",void 0),x([T({constValue:z.Pass})],Me.prototype,"pbrTextureBindType",void 0),x([T()],Me.prototype,"hasWebGL2Context",void 0);class S extends Me{constructor(){super(...arguments),this.output=A.Color,this.alphaDiscardMode=X.Opaque,this.doubleSidedMode=re.None,this.pbrMode=E.Disabled,this.cullFace=Re.None,this.transparencyPassType=nt.NONE,this.normalType=H.Attribute,this.textureCoordinateType=Q.None,this.customDepthTest=Pt.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}x([T({count:A.COUNT})],S.prototype,"output",void 0),x([T({count:X.COUNT})],S.prototype,"alphaDiscardMode",void 0),x([T({count:re.COUNT})],S.prototype,"doubleSidedMode",void 0),x([T({count:E.COUNT})],S.prototype,"pbrMode",void 0),x([T({count:Re.COUNT})],S.prototype,"cullFace",void 0),x([T({count:nt.COUNT})],S.prototype,"transparencyPassType",void 0),x([T({count:H.COUNT})],S.prototype,"normalType",void 0),x([T({count:Q.COUNT})],S.prototype,"textureCoordinateType",void 0),x([T({count:Pt.COUNT})],S.prototype,"customDepthTest",void 0),x([T()],S.prototype,"spherical",void 0),x([T()],S.prototype,"hasVertexColors",void 0),x([T()],S.prototype,"hasSymbolColors",void 0),x([T()],S.prototype,"hasVerticalOffset",void 0),x([T()],S.prototype,"hasSlicePlane",void 0),x([T()],S.prototype,"hasSliceHighlight",void 0),x([T()],S.prototype,"hasColorTexture",void 0),x([T()],S.prototype,"hasMetallicRoughnessTexture",void 0),x([T()],S.prototype,"hasEmissionTexture",void 0),x([T()],S.prototype,"hasOcclusionTexture",void 0),x([T()],S.prototype,"hasNormalTexture",void 0),x([T()],S.prototype,"hasScreenSizePerspective",void 0),x([T()],S.prototype,"hasVertexTangents",void 0),x([T()],S.prototype,"hasOccludees",void 0),x([T()],S.prototype,"hasMultipassTerrain",void 0),x([T()],S.prototype,"hasModelTransformation",void 0),x([T()],S.prototype,"offsetBackfaces",void 0),x([T()],S.prototype,"vvSize",void 0),x([T()],S.prototype,"vvColor",void 0),x([T()],S.prototype,"receiveShadows",void 0),x([T()],S.prototype,"receiveAmbientOcclusion",void 0),x([T()],S.prototype,"textureAlphaPremultiplied",void 0),x([T()],S.prototype,"instanced",void 0),x([T()],S.prototype,"instancedColor",void 0),x([T()],S.prototype,"objectAndLayerIdColorInstanced",void 0),x([T()],S.prototype,"instancedDoublePrecision",void 0),x([T()],S.prototype,"doublePrecisionRequiresObfuscation",void 0),x([T()],S.prototype,"writeDepth",void 0),x([T()],S.prototype,"transparent",void 0),x([T()],S.prototype,"enableOffset",void 0),x([T()],S.prototype,"cullAboveGround",void 0),x([T()],S.prototype,"snowCover",void 0),x([T()],S.prototype,"hasColorTextureTransform",void 0),x([T()],S.prototype,"hasEmissionTextureTransform",void 0),x([T()],S.prototype,"hasNormalTextureTransform",void 0),x([T()],S.prototype,"hasOcclusionTextureTransform",void 0),x([T()],S.prototype,"hasMetallicRoughnessTextureTransform",void 0),x([T({constValue:!0})],S.prototype,"hasVvInstancing",void 0),x([T({constValue:!1})],S.prototype,"useCustomDTRExponentForWater",void 0),x([T({constValue:!1})],S.prototype,"supportsTextureAtlas",void 0),x([T({constValue:!0})],S.prototype,"useFillLights",void 0);function Ll(t){const e=new $t,{vertex:r,fragment:i,varyings:o}=e;return wt(r,t),e.include(Nr),o.add("vpos","vec3"),e.include(yt,t),e.include(To,t),e.include(wo,t),t.output!==A.Color&&t.output!==A.Alpha||(Mt(e.vertex,t),e.include(rr,t),e.include(St,t),t.offsetBackfaces&&e.include(mo),t.instancedColor&&e.attributes.add(h.INSTANCECOLOR,"vec4"),o.add("vNormalWorld","vec3"),o.add("localvpos","vec3"),t.hasMultipassTerrain&&o.add("depth","float"),e.include(ot,t),e.include(ho,t),e.include(bo,t),e.include(So,t),r.uniforms.add(new te("externalColor",a=>a.externalColor)),o.add("vcolorExt","vec4"),r.code.add(s`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${t.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${s.float(Ir)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${t.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${t.hasMultipassTerrain?s`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),t.output===A.Alpha&&(e.include(Xe,t),e.include(Ke,t),e.include(jt,t),i.uniforms.add([new ee("opacity",a=>a.opacity),new ee("layerOpacity",a=>a.layerOpacity)]),t.hasColorTexture&&i.uniforms.add(new ie("tex",a=>a.texture)),i.include(qt),i.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.hasMultipassTerrain?s`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${t.hasColorTexture?s`
                vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        ${t.hasVertexColors?s`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        gl_FragColor = vec4(opacity_);
      }
    `)),t.output===A.Color&&(e.include(Xe,t),e.include(Oo,t),e.include(Ur,t),e.include(Ke,t),e.include(t.instancedDoublePrecision?Po:$o,t),e.include(jt,t),Mt(e.fragment,t),Hr(i),Wr(i),jr(i),i.uniforms.add([r.uniforms.get("localOrigin"),r.uniforms.get("view"),new Z("ambient",a=>a.ambient),new Z("diffuse",a=>a.diffuse),new ee("opacity",a=>a.opacity),new ee("layerOpacity",a=>a.layerOpacity)]),t.hasColorTexture&&i.uniforms.add(new ie("tex",a=>a.texture)),e.include(Zi,t),e.include(kr,t),i.include(qt),e.extensions.add("GL_OES_standard_derivatives"),or(i),i.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.hasMultipassTerrain?s`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${t.hasColorTexture?s`
                vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${t.pbrMode===E.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${t.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":t.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${t.hasVertexColors?s`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${t.snowCover?s`albedo = mix(albedo, vec3(1), 0.9);`:s``}
        ${s`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${t.pbrMode===E.Normal||t.pbrMode===E.Schematic?t.spherical?s`vec3 normalGround = normalize(vpos + localOrigin);`:s`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:s``}
        ${t.pbrMode===E.Normal||t.pbrMode===E.Schematic?s`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${t.snowCover?s`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:s`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.transparencyPassType===nt.Color?s`gl_FragColor = premultiplyAlpha(gl_FragColor);`:s``}
      }
    `)),e.include(yo,t),e}const Rl=Object.freeze(Object.defineProperty({__proto__:null,build:Ll},Symbol.toStringTag,{value:"Module"}));class ar extends Rt{initializeConfiguration(e,r){super.initializeConfiguration(e,r),r.hasMetallicRoughnessTexture=!1,r.hasEmissionTexture=!1,r.hasOcclusionTexture=!1,r.hasNormalTexture=!1,r.hasModelTransformation=!1,r.normalType=H.Attribute,r.doubleSidedMode=re.WindingOrder,r.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,ar.shader)}}ar.shader=new ir(Rl,()=>Ot(()=>import("./RealisticTree.glsl.js"),["RealisticTree.glsl.js","mat3f64.js","mat4f64.js","vec3f32.js","index.js","assets/index.45a801fc.css","OrderIndependentTransparency.js","enums.js","basicInterfaces.js","VertexAttribute.js","Attribute.js","VertexArrayObject.js","Texture.js","devEnvironmentUtils.js","BufferView.js","vec33.js","DefaultMaterial_COLOR_GAMMA.js","types.js","Version.js","quat.js","quatf64.js","resourceUtils2.js","Indices.js","NestedMap.js","requestImageUtils.js","Util2.js","sphere.js","VertexElementDescriptor.js","InterleavedLayout.js","doublePrecisionUtils.js"]));class Xt extends xs{constructor(e){super(e,Il),this.supportsEdges=!0,this._configuration=new S,this._vertexBufferLayout=Dl(this.parameters)}isVisibleForOutput(e){return e!==A.Shadow&&e!==A.ShadowExcludeHighlight&&e!==A.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||e.layerOpacity===0)return!1;const{instanced:r,hasVertexColors:i,hasSymbolColors:o,vvColorEnabled:a}=e,n=f(r)&&r.includes("color"),l=e.colorMixMode==="replace",d=e.opacity>0,c=e.externalColor&&e.externalColor[3]>0;return i&&(n||a||o)?!!l||d:i?l?c:d:n||a||o?!!l||d:l?c:d}getConfiguration(e,r){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=!!this.parameters.instanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=this.parameters.vvSizeEnabled,this._configuration.hasVerticalOffset=f(this.parameters.verticalOffset),this._configuration.hasScreenSizePerspective=f(this.parameters.screenSizePerspective),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,f(this.parameters.customDepthTest)&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?Re.None:this.parameters.cullFace,this._configuration.hasMultipassTerrain=r.multipassTerrain.enabled,this._configuration.cullAboveGround=r.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=f(this.parameters.modelTransformation),e!==A.Color&&e!==A.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=re.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&this.parameters.doubleSidedType==="normal"?re.View:this.parameters.doubleSided&&this.parameters.doubleSidedType==="winding-order"?re.WindingOrder:re.None,this._configuration.instancedColor=f(this.parameters.instanced)&&this.parameters.instanced.includes("color"),this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=!!r.ssaoHelper.active&&this.parameters.receiveSSAO,this._configuration.vvColor=this.parameters.vvColorEnabled,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?E.Schematic:E.Normal:E.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=r.transparencyPassType,this._configuration.enableOffset=r.camera.relativeElevation<Va,this._configuration.snowCover=this.hasSnowCover(r),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return f(e.weather)&&e.weatherVisible&&e.weather.type==="snowy"&&e.weather.snowCover==="enabled"}intersect(e,r,i,o,a,n){if(f(this.parameters.verticalOffset)){const l=i.camera;K(fr,r[12],r[13],r[14]);let d=null;switch(i.viewingMode){case gr.Global:d=yr(Ci,fr);break;case gr.Local:d=na(Ci,Vl)}let c=0;const u=Ce(Bl,fr,l.eye),m=br(u),v=ve(u,u,1/m);let p=null;this.parameters.screenSizePerspective&&(p=sa(d,v)),c+=ms(l,m,this.parameters.verticalOffset,p!=null?p:0,this.parameters.screenSizePerspective),ve(d,d,c),la(mr,d,i.transform.inverseRotation),o=Ce(Fl,o,mr),a=Ce(zl,a,mr)}ss(e,i,o,a,bs(i.verticalOffset),n)}requiresSlot(e,r){return r===A.Color||r===A.Alpha||r===A.Depth||r===A.Normal||r===A.Shadow||r===A.ShadowHighlight||r===A.ShadowExcludeHighlight||r===A.Highlight||r===A.ObjectAndLayerIdColor?e===(this.parameters.transparent?this.parameters.writeDepth?et.TRANSPARENT_MATERIAL:et.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:et.OPAQUE_MATERIAL)||e===et.DRAPED_MATERIAL:!1}createGLMaterial(e){return new El(e)}createBufferWriter(){return new Ps(this._vertexBufferLayout)}}class El extends es{constructor(e){super({...e,...e.material.parameters})}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){this._output!==A.Color&&this._output!==A.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e));const r=this._material.parameters;this.updateTexture(r.textureId);const i=e.camera.viewInverseTransposeMatrix;return K(r.origin,i[3],i[7],i[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(r.treeRendering?ar:Rt,e)}}class Nl extends Pl{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}}const Il=new Nl;function Dl(t){const e=Ka().vec3f(h.POSITION).vec3f(h.NORMAL),r=t.textureId||t.normalTextureId||t.metallicRoughnessTextureId||t.emissiveTextureId||t.occlusionTextureId;return t.hasVertexTangents&&e.vec4f(h.TANGENT),r&&e.vec2f(h.UV0),t.hasVertexColors&&e.vec4u8(h.COLOR),t.hasSymbolColors&&e.vec4u8(h.SYMBOLCOLOR),ca("enable-feature:objectAndLayerId-rendering")&&e.vec4u8(h.OBJECTANDLAYERIDCOLOR),e}const Fl=N(),zl=N(),Vl=Pe(0,0,1),Ci=N(),mr=N(),fr=N(),Bl=N(),be=Sr.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function Gl(t,e){var a;const r=await Ul(t,e),i=await ql((a=r.textureDefinitions)!=null?a:{},e);let o=0;for(const n in i)if(i.hasOwnProperty(n)){const l=i[n];o+=l!=null&&l.image?l.image.width*l.image.height*4:0}return{resource:r,textures:i,size:o+da(r)}}async function Ul(t,e){const r=f(e)&&e.streamDataRequester;if(r)return Hl(t,r,e);const i=await Ei(ua(t,At(e)));if(i.ok===!0)return i.value.data;Ni(i.error),Ro(i.error)}async function Hl(t,e,r){const i=await Ei(e.request(t,"json",r));if(i.ok===!0)return i.value;Ni(i.error),Ro(i.error.details.url)}function Ro(t){throw new wr("",`Request for object resource failed: ${t}`)}function kl(t){const e=t.params,r=e.topology;let i=!0;switch(e.vertexAttributes||(be.warn("Geometry must specify vertex attributes"),i=!1),e.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const a=e.faces;if(a){if(e.vertexAttributes)for(const n in e.vertexAttributes){const l=a[n];l&&l.values?(l.valueType!=null&&l.valueType!=="UInt32"&&(be.warn(`Unsupported indexed geometry indices type '${l.valueType}', only UInt32 is currently supported`),i=!1),l.valuesPerElement!=null&&l.valuesPerElement!==1&&(be.warn(`Unsupported indexed geometry values per element '${l.valuesPerElement}', only 1 is currently supported`),i=!1)):(be.warn(`Indexed geometry does not specify face indices for '${n}' attribute`),i=!1)}}else be.warn("Indexed geometries must specify faces"),i=!1;break}default:be.warn(`Unsupported topology '${r}'`),i=!1}t.params.material||(be.warn("Geometry requires material"),i=!1);const o=t.params.vertexAttributes;for(const a in o)o[a].values||(be.warn("Geometries with externally defined attributes are not yet supported"),i=!1);return i}function Wl(t,e){var g;const r=new Array,i=new Array,o=new Array,a=new Pa,n=t.resource,l=Fi.parse(n.version||"1.0","wosr");Kl.validate(l);const d=n.model.name,c=n.model.geometries,u=(g=n.materialDefinitions)!=null?g:{},m=t.textures;let v=0;const p=new Map;for(let b=0;b<c.length;b++){const _=c[b];if(!kl(_))continue;const w=Xl(_),V=_.params.vertexAttributes,R=[];for(const y in V){const D=V[y],B=D.values;R.push([y,new Je(B,D.valuesPerElement,!0)])}const O=[];if(_.params.topology!=="PerAttributeArray"){const y=_.params.faces;for(const D in y)O.push([D,y[D].values])}const I=w.texture,M=m&&m[I];if(M&&!p.has(I)){const{image:y,params:D}=M,B=new it(y,D);i.push(B),p.set(I,B)}const P=p.get(I),$=P?P.id:void 0,L=w.material;let C=a.get(L,I);if(G(C)){const y=u[L.substring(L.lastIndexOf("/")+1)].params;y.transparency===1&&(y.transparency=0);const D=M&&M.alphaChannelUsage,B=y.transparency>0||D==="transparency"||D==="maskAndTransparency",k=M?Eo(M.alphaChannelUsage):void 0,W={ambient:ei(y.diffuse),diffuse:ei(y.diffuse),opacity:1-(y.transparency||0),transparent:B,textureAlphaMode:k,textureAlphaCutoff:.33,textureId:$,initTextureTransparent:!0,doubleSided:!0,cullFace:Re.None,colorMixMode:y.externalColorMixMode||"tint",textureAlphaPremultiplied:!!M&&!!M.params.preMultiplyAlpha};f(e)&&e.materialParamsMixin&&Object.assign(W,e.materialParamsMixin),C=new Xt(W),a.set(L,I,C)}o.push(C);const F=new er(C,R,O);v+=O.position?O.position.length:0,r.push(F)}return{engineResources:[{name:d,stageResources:{textures:i,materials:o,geometries:r},pivotOffset:n.model.pivotOffset,numberOfVertices:v,lodThreshold:null}],referenceBoundingBox:jl(r)}}function jl(t){const e=Ii();return t.forEach(r=>{const i=r.boundingInfo;f(i)&&(Ut(e,i.bbMin),Ut(e,i.bbMax))}),e}async function ql(t,e){const r=[];for(const a in t){const n=t[a],l=n.images[0].data;if(!l){be.warn("Externally referenced texture data is not yet supported");continue}const d=n.encoding+";base64,"+l,c="/textureDefinitions/"+a,u=n.channels==="rgba"?n.alphaChannelUsage||"transparency":"none",m={noUnpackFlip:!0,wrap:{s:Qe.REPEAT,t:Qe.REPEAT},preMultiplyAlpha:Eo(u)!==X.Opaque},v=f(e)&&e.disableTextures?Promise.resolve(null):zi(d,e);r.push(v.then(p=>({refId:c,image:p,params:m,alphaChannelUsage:u})))}const i=await Promise.all(r),o={};for(const a of i)o[a.refId]=a;return o}function Eo(t){switch(t){case"mask":return X.Mask;case"maskAndTransparency":return X.MaskBlend;case"none":return X.Opaque;default:return X.Blend}}function Xl(t){const e=t.params;return{id:1,material:e.material,texture:e.texture,region:e.texture}}const Kl=new Fi(1,2,"wosr");async function Yl(t,e){const r=No(Do(t));if(r.fileType==="wosr"){const m=await(e.cache?e.cache.loadWOSR(r.url,e):Gl(r.url,e)),{engineResources:v,referenceBoundingBox:p}=Wl(m,e);return{lods:v,referenceBoundingBox:p,isEsriSymbolResource:!1,isWosr:!0}}const i=await(e.cache?e.cache.loadGLTF(r.url,e,!!e.usePBR):_a(new ba(e.streamDataRequester),r.url,e,e.usePBR)),o=ha(i.model.meta,"ESRI_proxyEllipsoid"),a=i.meta.isEsriSymbolResource&&f(o)&&i.meta.uri.includes("/RealisticTrees/");a&&!i.customMeta.esriTreeRendering&&(i.customMeta.esriTreeRendering=!0,tc(i,o));const n=!!e.usePBR,l=i.meta.isEsriSymbolResource?{usePBR:n,isSchematic:!1,treeRendering:a,mrrFactors:[0,1,.2]}:{usePBR:n,isSchematic:!1,treeRendering:!1,mrrFactors:[0,1,.5]},d={...e.materialParamsMixin,treeRendering:a},{engineResources:c,referenceBoundingBox:u}=Io(i,l,d,e.skipHighLods&&r.specifiedLodIndex==null?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:r.specifiedLodIndex});return{lods:c,referenceBoundingBox:u,isEsriSymbolResource:i.meta.isEsriSymbolResource,isWosr:!1}}function No(t){const e=t.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return e?{fileType:"gltf",url:e[1],specifiedLodIndex:e[4]!=null?Number(e[4]):null}:t.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:t,specifiedLodIndex:null}:{fileType:"unknown",url:t,specifiedLodIndex:null}}function Io(t,e,r,i){const o=t.model,a=new Array,n=new Map,l=new Map,d=o.lods.length,c=Ii();return o.lods.forEach((u,m)=>{const v=i.skipHighLods===!0&&(d>1&&m===0||d>3&&m===1)||i.skipHighLods===!1&&i.singleLodIndex!=null&&m!==i.singleLodIndex;if(v&&m!==0)return;const p=new on(u.name,u.lodThreshold,[0,0,0]);u.parts.forEach(g=>{const b=v?new Xt({}):Zl(o,g,p,e,r,n,l),{geometry:_,vertexCount:w}=Jl(g,f(b)?b:new Xt({})),V=_.boundingInfo;f(V)&&m===0&&(Ut(c,V.bbMin),Ut(c,V.bbMax)),f(b)&&(p.stageResources.geometries.push(_),p.numberOfVertices+=w)}),v||a.push(p)}),{engineResources:a,referenceBoundingBox:c}}function Zl(t,e,r,i,o,a,n){const l=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),d=t.materials.get(e.material),c=f(e.attributes.texCoord0),u=f(e.attributes.normal);if(G(d))return null;const m=Ql(d.alphaMode);if(!a.has(l)){if(c){const O=(I,M=!1)=>{if(f(I)&&!n.has(I)){const P=t.textures.get(I);if(f(P)){const $=P.data;n.set(I,new it(sr($)?$.data:$,{...P.parameters,preMultiplyAlpha:!sr($)&&M,encoding:sr($)&&f($.encoding)?$.encoding:void 0}))}}};O(d.textureColor,m!==X.Opaque),O(d.textureNormal),O(d.textureOcclusion),O(d.textureEmissive),O(d.textureMetallicRoughness)}const p=d.color[0]**(1/Ze),g=d.color[1]**(1/Ze),b=d.color[2]**(1/Ze),_=d.emissiveFactor[0]**(1/Ze),w=d.emissiveFactor[1]**(1/Ze),V=d.emissiveFactor[2]**(1/Ze),R=f(d.textureColor)&&c?n.get(d.textureColor):null;a.set(l,new Xt({...i,transparent:m===X.Blend,customDepthTest:Pt.Lequal,textureAlphaMode:m,textureAlphaCutoff:d.alphaCutoff,diffuse:[p,g,b],ambient:[p,g,b],opacity:d.opacity,doubleSided:d.doubleSided,doubleSidedType:"winding-order",cullFace:d.doubleSided?Re.None:Re.Back,hasVertexColors:!!e.attributes.color,hasVertexTangents:!!e.attributes.tangent,normalType:u?H.Attribute:H.ScreenDerivative,castShadows:!0,receiveSSAO:!0,textureId:f(R)?R.id:void 0,colorMixMode:d.colorMixMode,normalTextureId:f(d.textureNormal)&&c?n.get(d.textureNormal).id:void 0,textureAlphaPremultiplied:f(R)&&!!R.params.preMultiplyAlpha,occlusionTextureId:f(d.textureOcclusion)&&c?n.get(d.textureOcclusion).id:void 0,emissiveTextureId:f(d.textureEmissive)&&c?n.get(d.textureEmissive).id:void 0,metallicRoughnessTextureId:f(d.textureMetallicRoughness)&&c?n.get(d.textureMetallicRoughness).id:void 0,emissiveFactor:[_,w,V],mrrFactors:[d.metallicFactor,d.roughnessFactor,i.mrrFactors[2]],isSchematic:!1,colorTextureTransformMatrix:vt(d.colorTextureTransform),normalTextureTransformMatrix:vt(d.normalTextureTransform),occlusionTextureTransformMatrix:vt(d.occlusionTextureTransform),emissiveTextureTransformMatrix:vt(d.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:vt(d.metallicRoughnessTextureTransform),...o}))}const v=a.get(l);if(r.stageResources.materials.push(v),c){const p=g=>{f(g)&&r.stageResources.textures.push(n.get(g))};p(d.textureColor),p(d.textureNormal),p(d.textureOcclusion),p(d.textureEmissive),p(d.textureMetallicRoughness)}return v}function Jl(t,e){const r=t.attributes.position.count,i=ec(t.indices||r,t.primitiveType),o=He(tt,r);ga(o,t.attributes.position,t.transform);const a=[[h.POSITION,new Je(o.typedBuffer,o.elementCount,!0)]],n=[[h.POSITION,i]];if(f(t.attributes.normal)){const l=He(tt,r);ti(Ft,t.transform),xa(l,t.attributes.normal,Ft),a.push([h.NORMAL,new Je(l.typedBuffer,l.elementCount,!0)]),n.push([h.NORMAL,i])}if(f(t.attributes.tangent)){const l=He(kt,r);ti(Ft,t.transform),Sa(l,t.attributes.tangent,Ft),a.push([h.TANGENT,new Je(l.typedBuffer,l.elementCount,!0)]),n.push([h.TANGENT,i])}if(f(t.attributes.texCoord0)){const l=He(Di,r);wa(l,t.attributes.texCoord0),a.push([h.UV0,new Je(l.typedBuffer,l.elementCount,!0)]),n.push([h.UV0,i])}if(f(t.attributes.color)){const l=He(Ct,r);if(t.attributes.color.elementCount===4)t.attributes.color instanceof kt?ai(l,t.attributes.color,255):t.attributes.color instanceof Ct?ya(l,t.attributes.color):t.attributes.color instanceof pa&&ai(l,t.attributes.color,1/256);else{Aa(l,255,255,255,255);const d=new ii(l.buffer,0,4);t.attributes.color instanceof tt?oi(d,t.attributes.color,255):t.attributes.color instanceof ii?Ta(d,t.attributes.color):t.attributes.color instanceof va&&oi(d,t.attributes.color,1/256)}a.push([h.COLOR,new Je(l.typedBuffer,l.elementCount,!0)]),n.push([h.COLOR,i])}return{geometry:new er(e,a,n),vertexCount:r}}const Ft=Jt();function Ql(t){switch(t){case"BLEND":return X.Blend;case"MASK":return X.Mask;case"OPAQUE":case null:case void 0:return X.Opaque}}function ec(t,e){switch(e){case _t.TRIANGLES:return Oa(t);case _t.TRIANGLE_STRIP:return Ma(t);case _t.TRIANGLE_FAN:return Ca(t)}}function tc(t,e){for(let r=0;r<t.model.lods.length;++r){const i=t.model.lods[r];for(const o of i.parts){const a=o.attributes.normal;if(G(a))return;const n=o.attributes.position,l=n.count,d=N(),c=N(),u=N(),m=He(Ct,l),v=He(tt,l),p=ma(Cr(),o.transform);for(let g=0;g<l;g++){n.getVec(g,c),a.getVec(g,d),at(c,c,o.transform),Ce(u,c,e.center),ri(u,u,e.radius);const b=u[2],_=br(u),w=Math.min(.45+.55*_*_,1);ri(u,u,e.radius),p!==null&&at(u,u,p),yr(u,u),r+1!==t.model.lods.length&&t.model.lods.length>1&&pr(u,u,d,b>-1?.2:Math.min(-4*b-3.8,1)),v.setVec(g,u),m.set(g,0,255*w),m.set(g,1,255*w),m.set(g,2,255*w),m.set(g,3,255)}o.attributes.normal=v,o.attributes.color=m}}}const Pc=Object.freeze(Object.defineProperty({__proto__:null,fetch:Yl,gltfToEngineResources:Io,parseUrl:No},Symbol.toStringTag,{value:"Module"}));export{Ll as I,Ml as Q,sl as c,ul as d,Pc as o,Co as p};
