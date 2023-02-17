import{i4 as g,i5 as p,i3 as y,gP as w,i6 as I,du as f,I as h,q as _}from"./vendor-445d19db.js";class b{constructor(){this.code=null,this.description=null}}class v{constructor(t){this.error=new b,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=t}}function d(e){return new v(e)}class q{constructor(t){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=t}}function j(e){return new q(e)}const l=new Set;function F(e,t,n,m=!1,u){l.clear();for(const r in n){const i=e.get(r);if(!i)continue;const a=n[r],s=P(i,a);if(s!==a&&u&&u.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:i,originalValue:a,sanitizedValue:s}}),l.add(i.name),i&&(m||i.editable)){const c=g(i,s);if(c)return d(p(c,i,s));t[i.name]=s}}for(const r of(e==null?void 0:e.requiredFields)??[])if(!l.has(r.name))return d(`missing required field "${r.name}"`);return null}function P(e,t){let n=t;return typeof t=="string"&&y(e)?n=parseFloat(t):t!=null&&w(e)&&typeof t!="string"&&(n=String(t)),I(n)}let o;function G(e,t){if(!e||!f(t))return e;if("rings"in e||"paths"in e){if(h(o))throw new TypeError("geometry engine not loaded");return o.simplify(t,e)}return e}async function E(){return h(o)&&(o=await _(()=>import("./geometryEngineJSON-a45b7108.js"),["assets/geometryEngineJSON-a45b7108.js","assets/geometryEngineBase-3dd302e0.js","assets/geometryEngineJSON-45c195fe.js","assets/json-48e3ea08.js"])),o}async function S(e,t){!f(e)||t!=="esriGeometryPolygon"&&t!=="esriGeometryPolyline"||await E()}export{d as a,j as f,G as g,F as m,S as w};
