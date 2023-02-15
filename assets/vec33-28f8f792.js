import{F as O}from"./vendor-f61b19da.js";const j=O.getLogger("esri.views.3d.support.buffer.math");function z(t,r,e){if(t.count!==r.count)return void j.error("source and destination buffers need to have the same number of elements");const s=t.count,n=e[0],d=e[1],f=e[2],i=e[4],o=e[5],u=e[6],c=e[8],a=e[9],l=e[10],p=e[12],B=e[13],M=e[14],g=t.typedBuffer,h=t.typedBufferStride,m=r.typedBuffer,v=r.typedBufferStride;for(let y=0;y<s;y++){const S=y*h,b=y*v,_=m[b],x=m[b+1],I=m[b+2];g[S]=n*_+i*x+c*I+p,g[S+1]=d*_+o*x+a*I+B,g[S+2]=f*_+u*x+l*I+M}}function $(t,r,e){if(t.count!==r.count)return void j.error("source and destination buffers need to have the same number of elements");const s=t.count,n=e[0],d=e[1],f=e[2],i=e[3],o=e[4],u=e[5],c=e[6],a=e[7],l=e[8],p=t.typedBuffer,B=t.typedBufferStride,M=r.typedBuffer,g=r.typedBufferStride;for(let h=0;h<s;h++){const m=h*B,v=h*g,y=M[v],S=M[v+1],b=M[v+2];p[m]=n*y+i*S+c*b,p[m+1]=d*y+o*S+a*b,p[m+2]=f*y+u*S+l*b}}function P(t,r,e){const s=Math.min(t.count,r.count),n=t.typedBuffer,d=t.typedBufferStride,f=r.typedBuffer,i=r.typedBufferStride;for(let o=0;o<s;o++){const u=o*d,c=o*i;n[u]=e*f[c],n[u+1]=e*f[c+1],n[u+2]=e*f[c+2]}}function T(t,r){const e=Math.min(t.count,r.count),s=t.typedBuffer,n=t.typedBufferStride,d=r.typedBuffer,f=r.typedBufferStride;for(let i=0;i<e;i++){const o=i*n,u=i*f,c=d[u],a=d[u+1],l=d[u+2],p=c*c+a*a+l*l;if(p>0){const B=1/Math.sqrt(p);s[o]=B*c,s[o+1]=B*a,s[o+2]=B*l}}}function q(t,r,e){const s=Math.min(t.count,r.count),n=t.typedBuffer,d=t.typedBufferStride,f=r.typedBuffer,i=r.typedBufferStride;for(let o=0;o<s;o++){const u=o*d,c=o*i;n[u]=f[c]>>e,n[u+1]=f[c+1]>>e,n[u+2]=f[c+2]>>e}}Object.freeze(Object.defineProperty({__proto__:null,transformMat4:z,transformMat3:$,scale:P,normalize:T,shiftRight:q},Symbol.toStringTag,{value:"Module"}));function w(t,r,e){const s=t.typedBuffer,n=t.typedBufferStride,d=r.typedBuffer,f=r.typedBufferStride,i=e?e.count:r.count;let o=(e&&e.dstIndex?e.dstIndex:0)*n,u=(e&&e.srcIndex?e.srcIndex:0)*f;for(let c=0;c<i;++c)s[o]=d[u],s[o+1]=d[u+1],s[o+2]=d[u+2],o+=n,u+=f}function F(t,r,e,s,n){const d=t.typedBuffer,f=t.typedBufferStride,i=(n==null?void 0:n.count)??t.count;let o=((n==null?void 0:n.dstIndex)??0)*f;for(let u=0;u<i;++u)d[o]=r,d[o+1]=e,d[o+2]=s,o+=f}Object.freeze(Object.defineProperty({__proto__:null,copy:w,fill:F},Symbol.toStringTag,{value:"Module"}));export{j as a,F as b,w as e,P as f,q as n,T as o,$ as r,z as t};
