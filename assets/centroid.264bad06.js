import{L as G}from"./index.2901469c.js";function P(n,r){return n?r?4:3:r?3:2}function x(n,r,o,l,s){if(G(r)||!r.lengths.length)return null;const u=(s==null?void 0:s.originPosition)==="upperLeft"?-1:1;n.lengths.length&&(n.lengths.length=0),n.coords.length&&(n.coords.length=0);const t=n.coords,N=[],e=o?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:i,coords:E}=r,F=P(o,l);let b=0;for(const I of i){const c=O(e,E,b,I,o,l,u);c&&N.push(c),b+=I*F}if(N.sort((I,c)=>{let T=u*I[2]-u*c[2];return T===0&&o&&(T=I[4]-c[4]),T}),N.length){let I=6*N[0][2];t[0]=N[0][0]/I,t[1]=N[0][1]/I,o&&(I=6*N[0][4],t[2]=I!==0?N[0][3]/I:0),(t[0]<e[0]||t[0]>e[1]||t[1]<e[2]||t[1]>e[3]||o&&(t[2]<e[4]||t[2]>e[5]))&&(t.length=0)}if(!t.length){const I=r.lengths[0]?S(E,0,i[0],o,l):null;if(!I)return null;t[0]=I[0],t[1]=I[1],o&&I.length>2&&(t[2]=I[2])}return n}function O(n,r,o,l,s,u,t=1){const N=P(s,u);let e=o,i=o+N,E=0,F=0,b=0,I=0,c=0;for(let _=0,V=l-1;_<V;_++,e+=N,i+=N){const h=r[e],m=r[e+1],f=r[e+2],g=r[i],p=r[i+1],A=r[i+2];let Y=h*p-g*m;I+=Y,E+=(h+g)*Y,F+=(m+p)*Y,s&&(Y=h*A-g*f,b+=(f+A)*Y,c+=Y),h<n[0]&&(n[0]=h),h>n[1]&&(n[1]=h),m<n[2]&&(n[2]=m),m>n[3]&&(n[3]=m),s&&(f<n[4]&&(n[4]=f),f>n[5]&&(n[5]=f))}if(I*t>0&&(I*=-1),c*t>0&&(c*=-1),!I)return null;const T=[E,F,.5*I];return s&&(T[3]=b,T[4]=.5*c),T}function S(n,r,o,l,s){const u=P(l,s);let t=r,N=r+u,e=0,i=0,E=0,F=0;for(let b=0,I=o-1;b<I;b++,t+=u,N+=u){const c=n[t],T=n[t+1],_=n[t+2],V=n[N],h=n[N+1],m=n[N+2],f=l?a(c,T,_,V,h,m):d(c,T,V,h);if(f)if(e+=f,l){const g=L(c,T,_,V,h,m);i+=f*g[0],E+=f*g[1],F+=f*g[2]}else{const g=q(c,T,V,h);i+=f*g[0],E+=f*g[1]}}return e>0?l?[i/e,E/e,F/e]:[i/e,E/e]:o>0?l?[n[r],n[r+1],n[r+2]]:[n[r],n[r+1]]:null}function d(n,r,o,l){const s=o-n,u=l-r;return Math.sqrt(s*s+u*u)}function a(n,r,o,l,s,u){const t=l-n,N=s-r,e=u-o;return Math.sqrt(t*t+N*N+e*e)}function q(n,r,o,l){return[n+.5*(o-n),r+.5*(l-r)]}function L(n,r,o,l,s,u){return[n+.5*(l-n),r+.5*(s-r),o+.5*(u-o)]}export{x as e};
