import{f as a,g as s,G as j,P as k,l as d,es as c,q,fN as w,bx as A,r as p,aC as h,fO as x,fP as z,b5 as m,c2 as $,fQ as b,dJ as f,aA as E}from"./vendor.f8a4aecc.js";import{a as G}from"./normalizeUtilsSync.58e80e7c.js";import{e as u}from"./mat3f64.9180efcb.js";let n=class extends k{constructor(e){super(e)}get bounds(){const e=this.coords;return d(e)||d(e.extent)?null:c(e.extent)}get coords(){var o;const e=(o=q(this.element.georeference))==null?void 0:o.coords;return w(e,this.spatialReference).geometry}get normalizedCoords(){return A.fromJSON(G(this.coords))}get normalizedBounds(){const e=p(this.normalizedCoords)?this.normalizedCoords.extent:null;return p(e)?c(e):null}};a([s()],n.prototype,"spatialReference",void 0),a([s()],n.prototype,"element",void 0),a([s()],n.prototype,"bounds",null),a([s()],n.prototype,"coords",null),a([s()],n.prototype,"normalizedCoords",null),a([s()],n.prototype,"normalizedBounds",null),n=a([j("esri.layers.support.MediaElementView")],n);const t=E(),l=u(),i=u(),y=u();function D(e,o,r){return h(t,o[0],o[1],1),x(t,t,z(l,r)),t[2]===0?m(e,t[0],t[1]):m(e,t[0]/t[2],t[1]/t[2])}function F(e,o,r){return g(i,o[0],o[1],o[2],o[3],o[4],o[5],o[6],o[7]),g(y,r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7]),$(e,b(i,i),y),e[8]!==0&&(e[0]/=e[8],e[1]/=e[8],e[2]/=e[8],e[3]/=e[8],e[4]/=e[8],e[5]/=e[8],e[6]/=e[8],e[7]/=e[8],e[8]/=e[8]),e}function g(e,o,r,C,v,B,J,N,O){f(e,o,C,B,r,v,J,1,1,1),h(t,N,O,1),b(l,e);const[P,R,S]=x(t,t,z(l,l));return f(l,P,0,0,0,R,0,0,0,S),$(e,l,e)}export{D as h,F as j,n as u};
