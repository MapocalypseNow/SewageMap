import{s as l,O as D,a1 as $}from"./index.js";import{O as U}from"./VertexAttribute.js";function V(){const e=new Float32Array(4);return e[3]=1,e}function k(e){const t=new Float32Array(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function Y(e,t,r,i){const o=new Float32Array(4);return o[0]=e,o[1]=t,o[2]=r,o[3]=i,o}function X(e,t){return new Float32Array(e,t,4)}Object.freeze(Object.defineProperty({__proto__:null,clone:k,create:V,createView:X,fromValues:Y},Symbol.toStringTag,{value:"Module"}));const d=!0,m={identifierOffset:0,identifierLength:10,versionOffset:10,checksumOffset:12,byteCount:16};function F(e,t,r){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,r+m.identifierOffset,m.identifierLength)),version:t.getUint16(r+m.versionOffset,d),checksum:t.getUint32(r+m.checksumOffset,d)}}const y={sizeLo:0,sizeHi:4,minX:8,minY:16,minZ:24,maxX:32,maxY:40,maxZ:48,errorX:56,errorY:64,errorZ:72,count:80,reserved:84,byteCount:88};function Z(e,t){return{sizeLo:e.getUint32(t+y.sizeLo,d),sizeHi:e.getUint32(t+y.sizeHi,d),minX:e.getFloat64(t+y.minX,d),minY:e.getFloat64(t+y.minY,d),minZ:e.getFloat64(t+y.minZ,d),maxX:e.getFloat64(t+y.maxX,d),maxY:e.getFloat64(t+y.maxY,d),maxZ:e.getFloat64(t+y.maxZ,d),errorX:e.getFloat64(t+y.errorX,d),errorY:e.getFloat64(t+y.errorY,d),errorZ:e.getFloat64(t+y.errorZ,d),count:e.getUint32(t+y.count,d),reserved:e.getUint32(t+y.reserved,d)}}function ee(e){const t=new DataView(e,0);let r=0;const{identifier:i,version:o}=F(e,t,r);if(r+=m.byteCount,i!=="LEPCC     ")throw new l("lepcc-decode-error","Bad identifier");if(o>1)throw new l("lepcc-decode-error","Unknown version");const n=Z(t,r);if(r+=y.byteCount,n.sizeHi*2**32+n.sizeLo!==e.byteLength)throw new l("lepcc-decode-error","Bad size");const s=new Float64Array(3*n.count),f=[],a=[],u=[],c=[];if(r=O(e,r,f),r=O(e,r,a),r=O(e,r,u),r=O(e,r,c),r!==e.byteLength)throw new l("lepcc-decode-error","Bad length");let w=0,g=0;for(let b=0;b<f.length;b++){g+=f[b];let v=0;for(let C=0;C<a[b];C++){v+=u[w];const S=c[w];s[3*w]=Math.min(n.maxX,n.minX+2*n.errorX*v),s[3*w+1]=Math.min(n.maxY,n.minY+2*n.errorY*g),s[3*w+2]=Math.min(n.maxZ,n.minZ+2*n.errorZ*S),w++}}return{errorX:n.errorX,errorY:n.errorY,errorZ:n.errorZ,result:s}}function O(e,t,r){const i=[];t=M(e,t,i);const o=[];for(let n=0;n<i.length;n++){o.length=0,t=M(e,t,o);for(let s=0;s<o.length;s++)r.push(o[s]+i[n])}return t}function M(e,t,r){const i=new DataView(e,t),o=i.getUint8(0),n=31&o,s=!!(32&o),f=(192&o)>>6;let a=0;if(f===0)a=i.getUint32(1,d),t+=5;else if(f===1)a=i.getUint16(1,d),t+=3;else{if(f!==2)throw new l("lepcc-decode-error","Bad count type");a=i.getUint8(1),t+=2}if(s)throw new l("lepcc-decode-error","LUT not implemented");const u=Math.ceil(a*n/8),c=new Uint8Array(e,t,u);let w=0,g=0,b=0;const v=-1>>>32-n;for(let C=0;C<a;C++){for(;g<n;)w|=c[b]<<g,g+=8,b+=1;r[C]=w&v,w>>>=n,g-=n,g+n>32&&(w|=c[b-1]>>8-g)}return t+b}const p={sizeLo:0,sizeHi:4,count:8,colorMapCount:12,lookupMethod:14,compressionMethod:15,byteCount:16};function H(e,t){return{sizeLo:e.getUint32(t+p.sizeLo,d),sizeHi:e.getUint32(t+p.sizeHi,d),count:e.getUint32(t+p.count,d),colorMapCount:e.getUint16(t+p.colorMapCount,d),lookupMethod:e.getUint8(t+p.lookupMethod),compressionMethod:e.getUint8(t+p.compressionMethod)}}function _(e){const t=new DataView(e,0);let r=0;const{identifier:i,version:o}=F(e,t,r);if(r+=m.byteCount,i!=="ClusterRGB")throw new l("lepcc-decode-error","Bad identifier");if(o>1)throw new l("lepcc-decode-error","Unknown version");const n=H(t,r);if(r+=p.byteCount,n.sizeHi*2**32+n.sizeLo!==e.byteLength)throw new l("lepcc-decode-error","Bad size");if((n.lookupMethod===2||n.lookupMethod===1)&&n.compressionMethod===0){if(3*n.colorMapCount+n.count+r!==e.byteLength||n.colorMapCount>256)throw new l("lepcc-decode-error","Bad count");const s=new Uint8Array(e,r,3*n.colorMapCount),f=new Uint8Array(e,r+3*n.colorMapCount,n.count),a=new Uint8Array(3*n.count);for(let u=0;u<n.count;u++){const c=f[u];a[3*u]=s[3*c],a[3*u+1]=s[3*c+1],a[3*u+2]=s[3*c+2]}return a}if(n.lookupMethod===0&&n.compressionMethod===0){if(3*n.count+r!==e.byteLength||n.colorMapCount!==0)throw new l("lepcc-decode-error","Bad count");return new Uint8Array(e,r).slice()}if(n.lookupMethod<=2&&n.compressionMethod===1){if(r+3!==e.byteLength||n.colorMapCount!==1)throw new l("lepcc-decode-error","Bad count");const s=t.getUint8(r),f=t.getUint8(r+1),a=t.getUint8(r+2),u=new Uint8Array(3*n.count);for(let c=0;c<n.count;c++)u[3*c]=s,u[3*c+1]=f,u[3*c+2]=a;return u}throw new l("lepcc-decode-error","Bad method "+n.lookupMethod+","+n.compressionMethod)}const h={sizeLo:0,sizeHi:4,count:8,scaleFactor:12,bitsPerPoint:14,reserved:15,byteCount:16};function j(e,t){return{sizeLo:e.getUint32(t+h.sizeLo,d),sizeHi:e.getUint32(t+h.sizeHi,d),count:e.getUint32(t+h.count,d),scaleFactor:e.getUint16(t+h.scaleFactor,d),bitsPerPoint:e.getUint8(t+h.bitsPerPoint),reserved:e.getUint8(t+h.reserved)}}function N(e){const t=new DataView(e,0);let r=0;const{identifier:i,version:o}=F(e,t,r);if(r+=m.byteCount,i!=="Intensity ")throw new l("lepcc-decode-error","Bad identifier");if(o>1)throw new l("lepcc-decode-error","Unknown version");const n=j(t,r);if(r+=h.byteCount,n.sizeHi*2**32+n.sizeLo!==e.byteLength)throw new l("lepcc-decode-error","Bad size");const s=new Uint16Array(n.count);if(n.bitsPerPoint===8){if(n.count+r!==e.byteLength)throw new l("lepcc-decode-error","Bad size");const f=new Uint8Array(e,r,n.count);for(let a=0;a<n.count;a++)s[a]=f[a]*n.scaleFactor}else if(n.bitsPerPoint===16){if(2*n.count+r!==e.byteLength)throw new l("lepcc-decode-error","Bad size");const f=new Uint16Array(e,r,n.count);for(let a=0;a<n.count;a++)s[a]=f[a]*n.scaleFactor}else{const f=[];if(M(e,r,f)!==e.byteLength)throw new l("lepcc-decode-error","Bad size");for(let a=0;a<n.count;a++)s[a]=f[a]*n.scaleFactor}return s}const z=D.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function R(e,t,r){let i="",o=0;for(;o<r;){const n=e[t+o];if(n<128)i+=String.fromCharCode(n),o++;else if(n>=192&&n<224){if(o+1>=r)throw new l("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const s=(31&n)<<6|63&e[t+o+1];i+=String.fromCharCode(s),o+=2}else if(n>=224&&n<240){if(o+2>=r)throw new l("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const s=(15&n)<<12|(63&e[t+o+1])<<6|63&e[t+o+2];i+=String.fromCharCode(s),o+=3}else{if(!(n>=240&&n<248))throw new l("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(o+3>=r)throw new l("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const s=(7&n)<<18|(63&e[t+o+1])<<12|(63&e[t+o+2])<<6|63&e[t+o+3];if(s>=65536){const f=55296+(s-65536>>10),a=56320+(1023&s);i+=String.fromCharCode(f,a)}else i+=String.fromCharCode(s);o+=4}}}return i}function T(e,t){const r={byteOffset:0,byteCount:0,fields:Object.create(null)};let i=0;for(let o=0;o<t.length;o++){const n=t[o],s=n.valueType||n.type,f=J[s];r.fields[n.property]=f(e,i),i+=I[s].BYTES_PER_ELEMENT}return r.byteCount=i,r}function G(e,t,r){return E(e,t,r).map(i=>{const o=i?Date.parse(i):null;return o&&!Number.isNaN(o)?o:null})}function E(e,t,r){const i=[];let o,n,s=0;for(n=0;n<e;n+=1){if(o=t[n],o>0){if(i.push(R(r,s,o-1)),r[s+o-1]!==0)throw new l("string-array-error","Invalid string array: missing null termination.")}else i.push(null);s+=o}return i}function L(e,t){return new I[t.valueType](e,t.byteOffset,t.count*t.valuesPerElement)}function W(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}function q(e,t,r){var s,f;const i=t.header!=null?T(e,t.header):{byteOffset:0,byteCount:0,fields:{count:r}},o={header:i,byteOffset:i.byteCount,byteCount:0,entries:Object.create(null)};let n=i.byteCount;for(let a=0;a<t.ordering.length;a++){const u=t.ordering[a],c=$(t[u]);if(c.count=(s=i.fields.count)!=null?s:0,c.valueType==="String"){if(c.byteOffset=n,c.byteCount=i.fields[u+"ByteCount"],c.encoding!=="UTF-8")throw new l("unsupported-encoding","Unsupported String encoding.",{encoding:c.encoding});if(c.timeEncoding&&c.timeEncoding!=="ECMA_ISO8601")throw new l("unsupported-time-encoding","Unsupported time encoding.",{timeEncoding:c.timeEncoding})}else{if(!x(c.valueType))throw new l("unsupported-value-type","Unsupported binary valueType",{valueType:c.valueType});{const w=A(c.valueType);n+=n%w!=0?w-n%w:0,c.byteOffset=n,c.byteCount=w*c.valuesPerElement*c.count}}n+=(f=c.byteCount)!=null?f:0,o.entries[u]=c}return o.byteCount=n-o.byteOffset,o}function P(e,t,r){if(t!==e&&z.error(`Invalid ${r} buffer size
 expected: ${e}, actual: ${t})`),t<e)throw new l("buffer-too-small","Binary buffer is too small",{expectedSize:e,actualSize:t})}function te(e,t){const r=T(e,t&&t.header);let i=r.byteCount;const o={isDraco:!1,header:r,byteOffset:r.byteCount,byteCount:0,vertexAttributes:{}},n=r.fields,s=n.vertexCount!=null?n.vertexCount:n.count;for(const u of t.ordering){if(!t.vertexAttributes[u])continue;const c={...t.vertexAttributes[u],byteOffset:i,count:s},w=B[u]?B[u]:"_"+u;o.vertexAttributes[w]=c,i+=A(c.valueType)*c.valuesPerElement*s}const f=n.faceCount;if(t.faces&&f){o.faces={};for(const u of t.ordering){if(!t.faces[u])continue;const c={...t.faces[u],byteOffset:i,count:f};o.faces[u]=c,i+=A(c.valueType)*c.valuesPerElement*f}}const a=n.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&a){o.featureAttributes={};for(const u of t.featureAttributeOrder){if(!t.featureAttributes[u])continue;const c={...t.featureAttributes[u],byteOffset:i,count:a};o.featureAttributes[u]=c,i+=(c.valueType==="UInt64"?8:A(c.valueType))*c.valuesPerElement*a}}return P(i,e.byteLength,"geometry"),o.byteCount=i-o.byteOffset,o}const B={position:U.POSITION,normal:U.NORMAL,color:U.COLOR,uv0:U.UV0,region:U.UVREGION};function ne(e,t,r){if(e.encoding==="lepcc-rgb")return _(t);if(e.encoding==="lepcc-intensity")return N(t);if(e.encoding!=null&&e.encoding!=="")throw new l("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");e["attributeByteCounts "]&&!e.attributeByteCounts&&(z.warn("Warning: Trailing space in 'attributeByteCounts '."),e.attributeByteCounts=e["attributeByteCounts "]),e.ordering[0]==="ObjectIds"&&e.hasOwnProperty("objectIds")&&(z.warn("Warning: Case error in objectIds"),e.ordering[0]="objectIds");const i=q(t,e,r);P(i.byteOffset+i.byteCount,t.byteLength,"attribute");const o=i.entries.attributeValues||i.entries.objectIds;if(o){if(o.valueType==="String"){const n=i.entries.attributeByteCounts,s=L(t,n),f=W(t,o);return o.timeEncoding?G(n.count,s,f):E(n.count,s,f)}return L(t,o)}throw new l("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const I={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},J={Float32:(e,t)=>new DataView(e,0).getFloat32(t,!0),Float64:(e,t)=>new DataView(e,0).getFloat64(t,!0),UInt8:(e,t)=>new DataView(e,0).getUint8(t),Int8:(e,t)=>new DataView(e,0).getInt8(t),UInt16:(e,t)=>new DataView(e,0).getUint16(t,!0),Int16:(e,t)=>new DataView(e,0).getInt16(t,!0),UInt32:(e,t)=>new DataView(e,0).getUint32(t,!0),Int32:(e,t)=>new DataView(e,0).getInt32(t,!0)};function x(e){return I.hasOwnProperty(e)}function A(e){return x(e)?I[e].BYTES_PER_ELEMENT:0}export{ne as I,ee as c,V as e,L as l,k as r,te as w};
