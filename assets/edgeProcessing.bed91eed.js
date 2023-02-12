import{n as It}from"./deduplicate.1f581eb3.js";import{T as _}from"./InterleavedLayout.2a4091f1.js";import{O as u}from"./VertexAttribute.42396f25.js";import{C as D}from"./enums.2d9e6f64.js";import{t as ht}from"./VertexElementDescriptor.1fdca6da.js";import{eJ as nt,gd as At,ge as Ot,aC as W,gf as ot,gg as X,gh as St,gi as wt,gj as ft,gk as rt,gl as ut,gm as Tt,aA as E,bZ as Et,gn as vt}from"./index.eddec14a.js";function J(t,e=0){const o=t.stride;return t.fieldNames.filter(s=>{const r=t.fields.get(s).optional;return!(r&&r.glPadding)}).map(s=>{const r=t.fields.get(s),c=r.constructor.ElementCount,g=$t(r.constructor.ElementType),a=r.offset,p=!(!r.optional||!r.optional.glNormalized);return new ht(s,c,g,a,o,p,e)})}function $t(t){const e=Pt[t];if(e)return e;throw new Error("BufferType not supported in WebGL")}const Pt={u8:D.UNSIGNED_BYTE,u16:D.UNSIGNED_SHORT,u32:D.UNSIGNED_INT,i8:D.BYTE,i16:D.SHORT,i32:D.INT,f32:D.FLOAT},yt=_().vec3f(u.POSITION).u16(u.COMPONENTINDEX).u16(u.U16PADDING),Dt=_().vec2u8(u.SIDENESS);J(Dt);const gt=_().vec3f(u.POSITION0).vec3f(u.POSITION1).u16(u.COMPONENTINDEX).u8(u.VARIANTOFFSET,{glNormalized:!0}).u8(u.VARIANTSTROKE).u8(u.VARIANTEXTENSION,{glNormalized:!0}).u8(u.U8PADDING,{glPadding:!0}).u16(u.U16PADDING,{glPadding:!0}),z=gt.clone().vec3f(u.NORMAL),K=gt.clone().vec3f(u.NORMALA).vec3f(u.NORMALB);u.POSITION0,u.POSITION1,u.COMPONENTINDEX,u.VARIANTOFFSET,u.VARIANTSTROKE,u.VARIANTEXTENSION,u.NORMAL,u.NORMALA,u.NORMALB,u.SIDENESS;const V=-1;var st;function Vt(t,e,o,s=Ft){const r=t.vertices.position,c=t.vertices.componentIndex,g=nt(s.anglePlanar),a=nt(s.angleSignificantEdge),p=Math.cos(a),l=Math.cos(g),f=k.edge,I=f.position0,h=f.position1,d=f.faceNormal0,v=f.faceNormal1,A=_t(t),$=xt(t),n=$.length/4,i=e.allocate(n);let m=0;const N=n,O=o.allocate(N);let T=0,P=0,S=0;const Z=At(0,n),F=new Float32Array(n);Ot(F,(L,w,x)=>{r.getVec($[4*w+0],I),r.getVec($[4*w+1],h),x[w]=Tt(I,h)}),Z.sort((L,w)=>F[w]-F[L]);const Q=new Array,tt=new Array;for(let L=0;L<n;L++){const w=Z[L],x=F[w],G=$[4*w+0],dt=$[4*w+1],M=$[4*w+2],U=$[4*w+3],et=U===V;if(r.getVec(G,I),r.getVec(dt,h),et)W(d,A[3*M+0],A[3*M+1],A[3*M+2]),ot(v,d),f.componentIndex=c.get(G),f.cosAngle=X(d,v);else{if(W(d,A[3*M+0],A[3*M+1],A[3*M+2]),W(v,A[3*U+0],A[3*U+1],A[3*U+2]),f.componentIndex=c.get(G),f.cosAngle=X(d,v),Mt(f,l))continue;f.cosAngle<-.9999&&ot(v,d)}P+=x,S++,et||Lt(f,p)?(e.write(i,m++,f),Q.push(x)):Rt(f,g)&&(o.write(O,T++,f),tt.push(x))}const Nt=new Float32Array(Q.reverse()),pt=new Float32Array(tt.reverse());return{regular:{instancesData:e.trim(i,m),lodInfo:{lengths:Nt}},silhouette:{instancesData:o.trim(O,T),lodInfo:{lengths:pt}},averageEdgeLength:P/S}}function Lt(t,e){return t.cosAngle<e}function Mt(t,e){return t.cosAngle>e}function Rt(t,e){const o=St(t.cosAngle),s=k.fwd,r=k.ortho;return wt(s,t.position1,t.position0),o*(X(ft(r,t.faceNormal0,t.faceNormal1),s)>0?-1:1)>e}function xt(t){const e=t.faces.length/3,o=t.faces,s=t.neighbors;let r=0;for(let a=0;a<e;a++){const p=s[3*a+0],l=s[3*a+1],f=s[3*a+2],I=o[3*a+0],h=o[3*a+1],d=o[3*a+2];r+=p===V||I<h?1:0,r+=l===V||h<d?1:0,r+=f===V||d<I?1:0}const c=new Int32Array(4*r);let g=0;for(let a=0;a<e;a++){const p=s[3*a+0],l=s[3*a+1],f=s[3*a+2],I=o[3*a+0],h=o[3*a+1],d=o[3*a+2];(p===V||I<h)&&(c[g++]=I,c[g++]=h,c[g++]=a,c[g++]=p),(l===V||h<d)&&(c[g++]=h,c[g++]=d,c[g++]=a,c[g++]=l),(f===V||d<I)&&(c[g++]=d,c[g++]=I,c[g++]=a,c[g++]=f)}return c}function _t(t){const e=t.faces.length/3,o=t.vertices.position,s=t.faces,r=H.v0,c=H.v1,g=H.v2,a=new Float32Array(3*e);for(let p=0;p<e;p++){const l=s[3*p+0],f=s[3*p+1],I=s[3*p+2];o.getVec(l,r),o.getVec(f,c),o.getVec(I,g),rt(c,c,r),rt(g,g,r),ft(r,c,g),ut(r,r),a[3*p+0]=r[0],a[3*p+1]=r[1],a[3*p+2]=r[2]}return a}(function(t){t[t.SOLID=0]="SOLID",t[t.SKETCH=1]="SKETCH"})(st||(st={}));const k={edge:{position0:E(),position1:E(),faceNormal0:E(),faceNormal1:E(),componentIndex:0,cosAngle:0},ortho:E(),fwd:E()},H={v0:E(),v1:E(),v2:E()},Ft={anglePlanar:4,angleSignificantEdge:35};function it(t,e,o){const s=e/3,r=new Uint32Array(o+1),c=new Uint32Array(o+1),g=(n,i)=>{n<i?r[n+1]++:c[i+1]++};for(let n=0;n<s;n++){const i=t[3*n],m=t[3*n+1],N=t[3*n+2];g(i,m),g(m,N),g(N,i)}let a=0,p=0;for(let n=0;n<o;n++){const i=r[n+1],m=c[n+1];r[n+1]=a,c[n+1]=p,a+=i,p+=m}const l=new Uint32Array(6*s),f=r[o],I=(n,i,m)=>{if(n<i){const N=r[n+1]++;l[2*N]=i,l[2*N+1]=m}else{const N=c[i+1]++;l[2*f+2*N]=n,l[2*f+2*N+1]=m}};for(let n=0;n<s;n++){const i=t[3*n],m=t[3*n+1],N=t[3*n+2];I(i,m,n),I(m,N,n),I(N,i,n)}const h=(n,i)=>{const m=2*n,N=i-n;for(let O=1;O<N;O++){const T=l[m+2*O],P=l[m+2*O+1];let S=O-1;for(;S>=0&&l[m+2*S]>T;S--)l[m+2*S+2]=l[m+2*S],l[m+2*S+3]=l[m+2*S+1];l[m+2*S+2]=T,l[m+2*S+3]=P}};for(let n=0;n<o;n++)h(r[n],r[n+1]),h(f+c[n],f+c[n+1]);const d=new Int32Array(3*s),v=(n,i)=>n===t[3*i]?0:n===t[3*i+1]?1:n===t[3*i+2]?2:-1,A=(n,i)=>{const m=v(n,i);d[3*i+m]=-1},$=(n,i,m,N)=>{const O=v(n,i);d[3*i+O]=N;const T=v(m,N);d[3*N+T]=i};for(let n=0;n<o;n++){let i=r[n];const m=r[n+1];let N=c[n];const O=c[n+1];for(;i<m&&N<O;){const T=l[2*i],P=l[2*f+2*N];T===P?($(n,l[2*i+1],P,l[2*f+2*N+1]),i++,N++):T<P?(A(n,l[2*i+1]),i++):(A(P,l[2*f+2*N+1]),N++)}for(;i<m;)A(n,l[2*i+1]),i++;for(;N<O;)A(l[2*f+2*N],l[2*f+2*N+1]),N++}return d}class mt{updateSettings(e){this.settings=e,this._edgeHashFunction=e.reducedPrecision?Ct:Ut}write(e,o,s){const r=this._edgeHashFunction(s);b.seed=r;const c=b.getIntRange(0,255),g=b.getIntRange(0,this.settings.variants-1),a=.7,p=b.getFloat(),l=255*(.5*bt(-(1-Math.min(p/a,1))+Math.max(0,p-a)/(1-a),1.2)+.5);e.position0.setVec(o,s.position0),e.position1.setVec(o,s.position1),e.componentIndex.set(o,s.componentIndex),e.variantOffset.set(o,c),e.variantStroke.set(o,g),e.variantExtension.set(o,l)}trim(e,o){return e.slice(0,o)}}const Y=new Float32Array(6),B=new Uint32Array(Y.buffer),y=new Uint32Array(1);function Ut(t){const e=Y;e[0]=t.position0[0],e[1]=t.position0[1],e[2]=t.position0[2],e[3]=t.position1[0],e[4]=t.position1[1],e[5]=t.position1[2],y[0]=5381;for(let o=0;o<B.length;o++)y[0]=31*y[0]+B[o];return y[0]}function Ct(t){const e=Y;e[0]=R(t.position0[0]),e[1]=R(t.position0[1]),e[2]=R(t.position0[2]),e[3]=R(t.position1[0]),e[4]=R(t.position1[1]),e[5]=R(t.position1[2]),y[0]=5381;for(let o=0;o<B.length;o++)y[0]=31*y[0]+B[o];return y[0]}const ct=1e4;function R(t){return Math.round(t*ct)/ct}function bt(t,e){const o=t<0?-1:1;return Math.abs(t)**e*o}class j{constructor(){this._commonWriter=new mt}updateSettings(e){this._commonWriter.updateSettings(e)}allocate(e){return z.createBuffer(e)}write(e,o,s){this._commonWriter.write(e,o,s),vt(C,s.faceNormal0,s.faceNormal1),ut(C,C),e.normal.setVec(o,C)}trim(e,o){return this._commonWriter.trim(e,o)}}j.Layout=z,j.glLayout=J(z,1);class q{constructor(){this._commonWriter=new mt}updateSettings(e){this._commonWriter.updateSettings(e)}allocate(e){return K.createBuffer(e)}write(e,o,s){this._commonWriter.write(e,o,s),e.normalA.setVec(o,s.faceNormal0),e.normalB.setVec(o,s.faceNormal1)}trim(e,o){return this._commonWriter.trim(e,o)}}q.Layout=K,q.glLayout=J(K,1);const C=E(),b=new Et;function jt(t){const e=Bt(t.data,t.skipDeduplicate,t.indices,t.indicesLength);return at.updateSettings(t.writerSettings),lt.updateSettings(t.writerSettings),Vt(e,at,lt)}function Bt(t,e,o,s){if(e){const g=it(o,s,t.count);return new Gt(o,s,g,t)}const r=It(t.buffer,t.stride/4,{originalIndices:o,originalIndicesLength:s}),c=it(r.indices,s,r.uniqueCount);return{faces:r.indices,facesLength:r.indices.length,neighbors:c,vertices:yt.createView(r.buffer)}}class Gt{constructor(e,o,s,r){this.faces=e,this.facesLength=o,this.neighbors=s,this.vertices=r}}const at=new j,lt=new q,qt=_().vec3f(u.POSITION0).vec3f(u.POSITION1),Jt=_().vec3f(u.POSITION0).vec3f(u.POSITION1).u16(u.COMPONENTINDEX).u16(u.U16PADDING,{glPadding:!0});export{yt as A,qt as a,jt as f,Vt as h,Jt as m,Bt as u};