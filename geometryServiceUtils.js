import{B as l,C as c,D as S,dd as d,z as m,il as h,i as w,f4 as R,U as v,im as J,au as u,s as f,a as N}from"./index.js";let a=class extends d{constructor(r){super(r),this.geometries=null,this.outSpatialReference=null,this.transformation=null,this.transformForward=null}toJSON(){const r=this.geometries.map(o=>o.toJSON()),t=this.geometries[0],e={};return e.outSR=this.outSpatialReference.wkid||JSON.stringify(this.outSpatialReference.toJSON()),e.inSR=t.spatialReference.wkid||JSON.stringify(t.spatialReference.toJSON()),e.geometries=JSON.stringify({geometryType:m(t),geometries:r}),this.transformation&&(e.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),this.transformForward!=null&&(e.transformForward=this.transformForward),e}};l([c()],a.prototype,"geometries",void 0),l([c({json:{read:{source:"outSR"}}})],a.prototype,"outSpatialReference",void 0),l([c()],a.prototype,"transformation",void 0),l([c()],a.prototype,"transformForward",void 0),a=l([S("esri.rest.support.ProjectParameters")],a);const p=a,O=h(p);async function j(r,t,e){t=O(t);const o=w(r),n={...o.query,f:"json",...t.toJSON()},i=t.outSpatialReference,s=m(t.geometries[0]),g=R(n,e);return v(o.path+"/project",g).then(({data:{geometries:y}})=>J(y,s,i))}async function $(r=null,t){var n,i;if(u.geometryServiceUrl)return u.geometryServiceUrl;if(!r)throw new f("internal:geometry-service-url-not-configured");let e;e="portal"in r?r.portal||N.getDefault():r,await e.load({signal:t});const o=(i=(n=e.helperServices)==null?void 0:n.geometry)==null?void 0:i.url;if(!o)throw new f("internal:geometry-service-url-not-configured");return o}async function U(r,t,e=null,o){const n=await $(e,o),i=new p;i.geometries=[r],i.outSpatialReference=t;const s=await j(n,i,{signal:o});if(s&&Array.isArray(s)&&s.length===1)return s[0];throw new f("internal:geometry-service-projection-failed")}export{$ as getGeometryServiceURL,U as projectGeometry};
