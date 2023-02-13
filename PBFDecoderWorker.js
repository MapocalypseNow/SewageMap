import{hu as d,t as c,f as p,dR as f,cU as y,cO as _,hv as m,hw as g,hx as P}from"./index.js";class C{constructor(t,s,e){this.uid=t,this.geometry=s,this.attributes=e,this.visible=!0,this.objectId=null,this.centroid=null}}class b{constructor(){this.exceededTransferLimit=!1,this.features=[],this.fields=[],this.hasM=!1,this.hasZ=!1,this.geometryType=null,this.objectIdFieldName=null,this.globalIdFieldName=null,this.geometryProperties=null,this.geohashFieldName=null,this.spatialReference=null,this.transform=null}}function G(i,t){return t}function l(i,t,s,e){switch(s){case 0:return h(i,t+e,0);case 1:return i.originPosition==="lowerLeft"?h(i,t+e,1):R(i,t+e,1)}}function u(i,t,s,e){return s===2?h(i,t,2):l(i,t,s,e)}function v(i,t,s,e){return s===2?h(i,t,3):l(i,t,s,e)}function M(i,t,s,e){return s===3?h(i,t,3):u(i,t,s,e)}function h({translate:i,scale:t},s,e){return i[e]+s*t[e]}function R({translate:i,scale:t},s,e){return i[e]-s*t[e]}class T{constructor(t){this._options=t,this.geometryTypes=["point","multipoint","polyline","polygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=G,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=class{}}createFeatureResult(){return new b}finishFeatureResult(t){if(this._options.applyTransform&&(t.transform=null),this._attributesConstructor=class{},this._coordinateBuffer=null,this._lengths.length=0,!t.hasZ)return;const s=d(t.geometryType,this._options.sourceSpatialReference,t.spatialReference);if(!c(s))for(const e of t.features)s(e.geometry)}createSpatialReference(){return new p}addField(t,s){t.fields.push(f.fromJSON(s));const e=t.fields.map(r=>r.name);this._attributesConstructor=function(){for(const r of e)this[r]=null}}addFeature(t,s){const e=this._options.maxStringAttributeLength?this._options.maxStringAttributeLength:0;if(e>0)for(const r in s.attributes){const o=s.attributes[r];typeof o=="string"&&o.length>e&&(s.attributes[r]="")}t.features.push(s)}addQueryGeometry(t,s){const{queryGeometry:e,queryGeometryType:r}=s,o=y(e.clone(),e,!1,!1,this._transform),a=_(o,r,!1,!1);let n=null;switch(r){case"esriGeometryPoint":n="point";break;case"esriGeometryPolygon":n="polygon";break;case"esriGeometryPolyline":n="polyline";break;case"esriGeometryMultipoint":n="multipoint"}a.type=n,t.queryGeometryType=r,t.queryGeometry=a}prepareFeatures(t){var s;switch(this._transform=(s=t.transform)!=null?s:null,this._options.applyTransform&&t.transform&&(this._applyTransform=this._deriveApplyTransform(t)),this._vertexDimension=2,t.hasZ&&this._vertexDimension++,t.hasM&&this._vertexDimension++,t.geometryType){case"point":this.addCoordinate=(e,r,o)=>this.addCoordinatePoint(e,r,o),this.createGeometry=e=>this.createPointGeometry(e);break;case"polygon":this.addCoordinate=(e,r,o)=>this._addCoordinatePolygon(e,r,o),this.createGeometry=e=>this._createPolygonGeometry(e);break;case"polyline":this.addCoordinate=(e,r,o)=>this._addCoordinatePolyline(e,r,o),this.createGeometry=e=>this._createPolylineGeometry(e);break;case"multipoint":this.addCoordinate=(e,r,o)=>this._addCoordinateMultipoint(e,r,o),this.createGeometry=e=>this._createMultipointGeometry(e);break;case"mesh":case"extent":break;default:m(t.geometryType)}}createFeature(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,new C(g(),null,new this._attributesConstructor)}allocateCoordinates(){const t=this._lengths.reduce((s,e)=>s+e,0);this._coordinateBuffer=new Float64Array(t*this._vertexDimension),this._coordinateBufferPtr=0}addLength(t,s){this._lengths.length===0&&(this._toAddInCurrentPath=s),this._lengths.push(s)}createPointGeometry(t){const s={type:"point",x:0,y:0,spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM};return s.hasZ&&(s.z=0),s.hasM&&(s.m=0),s}addCoordinatePoint(t,s,e){const r=this._transform?this._applyTransform(this._transform,s,e,0):s;if(r!=null)switch(e){case 0:t.x=r;break;case 1:t.y=r;break;case 2:t.hasZ?t.z=r:t.m=r;break;case 3:t.m=r}}_transformPathLikeValue(t,s){let e=0;return s<=1&&(e=this._previousCoordinate[s],this._previousCoordinate[s]+=t),this._transform?this._applyTransform(this._transform,t,s,e):t}_addCoordinatePolyline(t,s,e){this._dehydratedAddPointsCoordinate(t.paths,s,e)}_addCoordinatePolygon(t,s,e){this._dehydratedAddPointsCoordinate(t.rings,s,e)}_addCoordinateMultipoint(t,s,e){e===0&&t.points.push([]);const r=this._transformPathLikeValue(s,e);t.points[t.points.length-1].push(r)}_createPolygonGeometry(t){return{type:"polygon",rings:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createPolylineGeometry(t){return{type:"polyline",paths:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createMultipointGeometry(t){return{type:"multipoint",points:[],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_dehydratedAddPointsCoordinate(t,s,e){e===0&&this._toAddInCurrentPath--==0&&(t.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);const r=this._transformPathLikeValue(s,e),o=t[t.length-1],a=this._coordinateBuffer;if(a){if(e===0){const n=this._coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT;o.push(new Float64Array(a.buffer,n,this._vertexDimension))}a[this._coordinateBufferPtr++]=r}}_deriveApplyTransform(t){const{hasZ:s,hasM:e}=t;return s&&e?M:s?u:e?v:l}}class x{_parseFeatureQuery(t){var r;const s=P(t.buffer,new T(t.options)),e={...s,spatialReference:(r=s.spatialReference)==null?void 0:r.toJSON(),fields:s.fields?s.fields.map(o=>o.toJSON()):void 0};return Promise.resolve(e)}}function k(){return new x}export{k as default};
