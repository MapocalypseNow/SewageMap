import{b as J}from"./asyncUtils-b47bdec8.js";import{s as K,a as d}from"./Error-8814705f.js";import{t as T,c as X,r as v,G as k}from"./typedArrayUtil-bd69bba0.js";import{y as A,w as L,E as Y}from"./promiseUtils-ec14a623.js";import{$ as g}from"./unitUtils-bc71b997.js";import{u as q,m as ee}from"./Polyline-98ddf509.js";import{w as D,M as te}from"./Extent-d21a2637.js";import{_ as I,r as $}from"./projection-462aeb9f.js";import{f as N,u as U,w as ie,c as ne,R as O}from"./aaBoundingRect-647e206b.js";import"./geometry-da69b92c.js";import"./string-cc430a78.js";import{t as W}from"./TileInfo-d1c5acd2.js";import"./cast-4943406f.js";import"./ensureType-9613b5f0.js";import"./nextTick-3ee5a785.js";import"./jsonMap-9318d50f.js";import"./preload-helper-6c8d3039.js";import"./mathUtils-daf59e84.js";import"./common-701a4199.js";import"./SimpleObservable-b403cd38.js";import"./mat4-62d5e6a4.js";import"./assets-2905a8db.js";import"./request-9ab300ca.js";import"./zscale-3fafe111.js";import"./typeUtils-98cd71e2.js";const z=K.getLogger("esri.layers.support.ElevationSampler");class Q{queryElevation(e){return oe(e.clone(),this)}on(){return ce}projectIfRequired(e,t){return B(e,t)}}class se extends Q{constructor(e,t,i){super(),this.tile=e,this.noDataValue=i;const n=e.tile.extent;this.extent=N(n,t.spatialReference),this.extent.zmin=e.zmin,this.extent.zmax=e.zmax,this._aaExtent=n;const s=g(t.spatialReference),o=t.lodAt(e.tile.level).resolution*s;this.demResolution={min:o,max:o}}get spatialReference(){return this.extent.spatialReference}contains(e){const t=this.projectIfRequired(e,this.spatialReference);return!T(t)&&this.containsAt(t.x,t.y)}containsAt(e,t){return ie(this._aaExtent,e,t)}elevationAt(e,t){if(!this.containsAt(e,t)){const i=this.extent,n=`${i.xmin}, ${i.ymin}, ${i.xmax}, ${i.ymax}`;return z.warn("#elevationAt()",`Point used to sample elevation (${e}, ${t}) is outside of the sampler extent (${n})`),this.noDataValue}return X(this.tile.sample(e,t),this.noDataValue)}}class G extends Q{constructor(e,t,i){let n;super(),typeof t=="number"?(this.noDataValue=t,n=null):(n=t,this.noDataValue=i),this.samplers=n?e.map(o=>new se(o,n,this.noDataValue)):e;const s=this.samplers[0];if(s){this.extent=s.extent.clone();const{min:o,max:l}=s.demResolution;this.demResolution={min:o,max:l};for(let a=1;a<this.samplers.length;a++){const c=this.samplers[a];this.extent.union(c.extent),this.demResolution.min=Math.min(this.demResolution.min,c.demResolution.min),this.demResolution.max=Math.max(this.demResolution.max,c.demResolution.max)}}else this.extent=N(U(),n.spatialReference),this.demResolution={min:0,max:0}}get spatialReference(){return this.extent.spatialReference}elevationAt(e,t){for(const i of this.samplers)if(i.containsAt(e,t))return i.elevationAt(e,t);return z.warn("#elevationAt()",`Point used to sample elevation (${e}, ${t}) is outside of the sampler`),this.noDataValue}}function oe(r,e){const t=B(r,e.spatialReference);if(!t)return null;switch(r.type){case"point":ae(r,t,e);break;case"polyline":le(r,t,e);break;case"multipoint":re(r,t,e)}return r}function B(r,e){if(T(r))return null;const t=r.spatialReference;if(t.equals(e))return r;const i=te(r,e);return i||z.error(`Cannot project geometry spatial reference (wkid:${t.wkid}) to elevation sampler spatial reference (wkid:${e.wkid})`),i}function ae(r,e,t){r.z=t.elevationAt(e.x,e.y)}function le(r,e,t){y.spatialReference=e.spatialReference;const i=r.hasM&&!r.hasZ;for(let n=0;n<r.paths.length;n++){const s=r.paths[n],o=e.paths[n];for(let l=0;l<s.length;l++){const a=s[l],c=o[l];y.x=c[0],y.y=c[1],i&&(a[3]=a[2]),a[2]=t.elevationAt(y.x,y.y)}}r.hasZ=!0}function re(r,e,t){y.spatialReference=e.spatialReference;const i=r.hasM&&!r.hasZ;for(let n=0;n<r.points.length;n++){const s=r.points[n],o=e.points[n];y.x=o[0],y.y=o[1],i&&(s[3]=s[2]),s[2]=t.elevationAt(y.x,y.y)}r.hasZ=!0}const y=new D,ce={remove(){}};class ue{constructor({values:e,width:t,height:i,noDataValue:n},s){this.pixelData=e,this.width=t,this.height=i,this.safeWidth=.99999999*(t-1),this.noDataValue=n,this.dx=(t-1)/(s[2]-s[0]),this.dy=(t-1)/(s[3]-s[1]),this.x0=s[0],this.y1=s[3]}}class Z{constructor(e,t=null){if(this.tile=e,this.zmin=0,this.zmax=0,v(t)&&v(e)){const i=e.extent;this._samplerData=new ue(t,i),this.zmin=t.minValue,this.zmax=t.maxValue}}sample(e,t){if(T(this._samplerData))return;const{safeWidth:i,width:n,pixelData:s,noDataValue:o,dx:l,dy:a,y1:c,x0:u}=this._samplerData,m=P(a*(c-t),0,i),p=P(l*(e-u),0,i),h=Math.floor(m),M=Math.floor(p),_=h*n+M,C=_+n,R=s[_],E=s[C],F=s[_+1],V=s[C+1];if(R!==o&&E!==o&&F!==o&&V!==o){const S=p-M,b=R+(F-R)*S;return b+(E+(V-E)*S-b)*(m-h)}}}function P(r,e,t){return r<e?e:r>t?t:r}class Le{async queryAll(e,t,i){if(!(e=i&&i.ignoreInvisibleLayers?e.filter(c=>c.visible):e.slice()).length)throw new d("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");const n=x.fromGeometry(t);let s=!1;i&&i.returnSampleInfo||(s=!0);const o={...w,...i,returnSampleInfo:!0},l=await this.query(e[e.length-1],n,o),a=await this._queryAllContinue(e,l,o);return a.geometry=a.geometry.export(),s&&delete a.sampleInfo,a}async query(e,t,i){if(!e)throw new d("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||!(t instanceof x)&&t.type!=="point"&&t.type!=="multipoint"&&t.type!=="polyline")throw new d("elevation-query:invalid-geometry","Only point, polyline and multipoint geometries can be used to query elevation");const n={...w,...i},s=new he(e,t.spatialReference,n),o=n.signal;return await e.load({signal:o}),await this._createGeometryDescriptor(s,t,o),await this._selectTiles(s,o),await this._populateElevationTiles(s,o),this._sampleGeometryWithElevation(s),this._createQueryResult(s,o)}async createSampler(e,t,i){if(!e)throw new d("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||t.type!=="extent")throw new d("elevation-query:invalid-extent","Invalid or undefined extent");const n={...w,...i};return this._createSampler(e,t,n)}async createSamplerAll(e,t,i){if(!(e=i&&i.ignoreInvisibleLayers?e.filter(o=>o.visible):e.slice()).length)throw new d("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");if(!t||t.type!=="extent")throw new d("elevation-query:invalid-extent","Invalid or undefined extent");const n={...w,...i,returnSampleInfo:!0},s=await this._createSampler(e[e.length-1],t,n);return this._createSamplerAllContinue(e,t,s,n)}async _createSampler(e,t,i,n){const s=i.signal;await e.load({signal:s});const o=t.spatialReference,l=e.tileInfo.spatialReference;o.equals(l)||(await I([{source:o,dest:l}],{signal:s}),t=$(t,l));const a=new pe(e,t,i,n);return await this._selectTiles(a,s),await this._populateElevationTiles(a,s),new G(a.elevationTiles,a.layer.tileInfo,a.options.noDataValue)}async _createSamplerAllContinue(e,t,i,n){if(e.pop(),!e.length)return i;const s=i.samplers.map(c=>ne(c.extent)),o=await this._createSampler(e[e.length-1],t,n,s);if(o.samplers.length===0)return i;const l=i.samplers.concat(o.samplers),a=new G(l,n.noDataValue);return this._createSamplerAllContinue(e,t,a,n)}async _queryAllContinue(e,t,i){const n=e.pop(),s=t.geometry.coordinates,o=t.sampleInfo;k(o);const l=[],a=[];for(let p=0;p<s.length;p++){const h=o[p];h.demResolution>=0?h.source||(h.source=n):e.length&&(l.push(s[p]),a.push(p))}if(!e.length||l.length===0)return t;const c=t.geometry.clone(l),u=await this.query(e[e.length-1],c,i),m=u.sampleInfo;if(!m)throw new Error("no sampleInfo");return a.forEach((p,h)=>{s[p].z=u.geometry.coordinates[h].z,o[p].demResolution=m[h].demResolution}),this._queryAllContinue(e,t,i)}async _createQueryResult(e,t){const i=await e.geometry.project(e.outSpatialReference,t);k(i);const n={geometry:i.export(),noDataValue:e.options.noDataValue};return e.options.returnSampleInfo&&(n.sampleInfo=this._extractSampleInfo(e)),e.geometry.coordinates.forEach(s=>{s.tile=null,s.elevationTile=null}),n}async _createGeometryDescriptor(e,t,i){let n;const s=e.layer.tileInfo.spatialReference;if(t instanceof x?n=await t.project(s,i):(await I([{source:t.spatialReference,dest:s}],{signal:i}),n=$(t,s)),!n)throw new d("elevation-query:spatial-reference-mismatch",`Cannot query elevation in '${t.spatialReference.wkid}' on an elevation service in '${s.wkid}'`);e.geometry=x.fromGeometry(n)}async _selectTiles(e,t){const i=e.options.demResolution;if(e.type==="geometry"&&this._preselectOutsideLayerExtent(e),typeof i=="number")this._selectTilesClosestResolution(e);else if(i==="finest-contiguous")await this._selectTilesFinestContiguous(e,t);else{if(i!=="auto")throw new d("elevation-query:invalid-dem-resolution",`Invalid dem resolution value '${i}', expected a number, "finest-contiguous" or "auto"`);await this._selectTilesAuto(e,t)}}_preselectOutsideLayerExtent(e){if(T(e.layer.fullExtent))return;const t=new Z(null);t.sample=()=>e.options.noDataValue,e.outsideExtentTile=t;const i=e.layer.fullExtent;e.geometry.coordinates.forEach(n=>{const s=n.x,o=n.y;(s<i.xmin||s>i.xmax||o<i.ymin||o>i.ymax)&&(n.elevationTile=t)})}_selectTilesClosestResolution(e){const t=e.layer.tileInfo,i=this._findNearestDemResolutionLODIndex(t,e.options.demResolution);e.selectTilesAtLOD(i)}_findNearestDemResolutionLODIndex(e,t){const i=t/g(e.spatialReference);let n=e.lods[0],s=0;for(let o=1;o<e.lods.length;o++){const l=e.lods[o];Math.abs(l.resolution-i)<Math.abs(n.resolution-i)&&(n=l,s=o)}return s}async _selectTilesFinestContiguous(e,t){const i=j(e.layer.tileInfo,e.options.minDemResolution);await this._selectTilesFinestContiguousAt(e,i,t)}async _selectTilesFinestContiguousAt(e,t,i){const n=e.layer;if(e.selectTilesAtLOD(t),t<0)return;const s=n.tilemapCache,o=e.getTilesToFetch();try{if(s)await A(Promise.all(o.map(l=>s.fetchAvailability(l.level,l.row,l.col,{signal:i}))),i);else if(await this._populateElevationTiles(e,i),!e.allElevationTilesFetched())throw e.clearElevationTiles(),new d("elevation-query:has-unavailable-tiles")}catch(l){L(l),await this._selectTilesFinestContiguousAt(e,t-1,i)}}async _populateElevationTiles(e,t){const i=e.getTilesToFetch(),n={},s=e.options.cache,o=e.options.noDataValue,l=i.map(async a=>{if(a.id==null)return;const c=`${e.layer.uid}:${a.id}:${o}`,u=v(s)?s.get(c):null,m=v(u)?u:await e.layer.fetchTile(a.level,a.row,a.col,{noDataValue:o,signal:t});v(s)&&s.put(c,m),n[a.id]=new Z(a,m)});await A(Y(l),t),e.populateElevationTiles(n)}async _selectTilesAuto(e,t){this._selectTilesAutoFinest(e),this._reduceTilesForMaximumRequests(e);const i=e.layer.tilemapCache;if(!i)return this._selectTilesAutoPrefetchUpsample(e,t);const n=e.getTilesToFetch(),s={},o=n.map(async l=>{const a=new W(null,0,0,0,U()),c=await J(i.fetchAvailabilityUpsample(l.level,l.row,l.col,a,{signal:t}));c.ok!==!1?l.id!=null&&(s[l.id]=a):L(c.error)});await A(Promise.all(o),t),e.remapTiles(s)}_reduceTilesForMaximumRequests(e){const t=e.layer.tileInfo;let i=0;const n={},s=a=>{a.id!=null&&(a.id in n?n[a.id]++:(n[a.id]=1,i++))},o=a=>{if(a.id==null)return;const c=n[a.id];c===1?(delete n[a.id],i--):n[a.id]=c-1};e.forEachTileToFetch(s,o);let l=!0;for(;l&&(l=!1,e.forEachTileToFetch(a=>{i<=e.options.maximumAutoTileRequests||(o(a),t.upsampleTile(a)&&(l=!0),s(a))},o),l););}_selectTilesAutoFinest(e){const t=j(e.layer.tileInfo,e.options.minDemResolution);e.selectTilesAtLOD(t,e.options.maximumAutoTileRequests)}async _selectTilesAutoPrefetchUpsample(e,t){const i=e.layer.tileInfo;await this._populateElevationTiles(e,t);let n=!1;e.forEachTileToFetch((s,o)=>{i.upsampleTile(s)?n=!0:o()}),n&&await this._selectTilesAutoPrefetchUpsample(e,t)}_sampleGeometryWithElevation(e){e.geometry.coordinates.forEach(t=>{const i=t.elevationTile;let n=e.options.noDataValue;if(i){const s=i.sample(t.x,t.y);v(s)?n=s:t.elevationTile=null}t.z=n})}_extractSampleInfo(e){const t=e.layer.tileInfo,i=g(t.spatialReference);return e.geometry.coordinates.map(n=>{let s=-1;return n.elevationTile&&n.elevationTile!==e.outsideExtentTile&&(s=t.lodAt(n.elevationTile.tile.level).resolution*i),{demResolution:s}})}}class x{export(){return this._exporter(this.coordinates,this.spatialReference)}clone(e){const t=new x;return t.geometry=this.geometry,t.spatialReference=this.spatialReference,t.coordinates=e||this.coordinates.map(i=>i.clone()),t._exporter=this._exporter,t}async project(e,t){if(this.spatialReference.equals(e))return this.clone();await I([{source:this.spatialReference,dest:e}],{signal:t});const i=new q({spatialReference:this.spatialReference,points:this.coordinates.map(l=>[l.x,l.y])}),n=$(i,e);if(!n)return null;const s=this.coordinates.map((l,a)=>{const c=l.clone(),u=n.points[a];return c.x=u[0],c.y=u[1],c}),o=this.clone(s);return o.spatialReference=e,o}static fromGeometry(e){const t=new x;if(t.geometry=e,t.spatialReference=e.spatialReference,e instanceof x)t.coordinates=e.coordinates.map(i=>i.clone()),t._exporter=(i,n)=>{const s=e.clone(i);return s.spatialReference=n,s};else switch(e.type){case"point":{const i=e,{hasZ:n,hasM:s}=i;t.coordinates=n&&s?[new f(i.x,i.y,i.z,i.m)]:n?[new f(i.x,i.y,i.z)]:s?[new f(i.x,i.y,null,i.m)]:[new f(i.x,i.y)],t._exporter=(o,l)=>e.hasM?new D(o[0].x,o[0].y,o[0].z,o[0].m,l):new D(o[0].x,o[0].y,o[0].z,l);break}case"multipoint":{const i=e,{hasZ:n,hasM:s}=i;t.coordinates=n&&s?i.points.map(o=>new f(o[0],o[1],o[2],o[3])):n?i.points.map(o=>new f(o[0],o[1],o[2])):s?i.points.map(o=>new f(o[0],o[1],null,o[2])):i.points.map(o=>new f(o[0],o[1])),t._exporter=(o,l)=>e.hasM?new q({points:o.map(a=>[a.x,a.y,a.z,a.m]),hasZ:!0,hasM:!0,spatiaReference:l}):new q(o.map(a=>[a.x,a.y,a.z]),l);break}case"polyline":{const i=e,n=[],s=[],{hasZ:o,hasM:l}=e;let a=0;for(const c of i.paths)if(s.push([a,a+c.length]),a+=c.length,o&&l)for(const u of c)n.push(new f(u[0],u[1],u[2],u[3]));else if(o)for(const u of c)n.push(new f(u[0],u[1],u[2]));else if(l)for(const u of c)n.push(new f(u[0],u[1],null,u[2]));else for(const u of c)n.push(new f(u[0],u[1]));t.coordinates=n,t._exporter=(c,u)=>{const m=e.hasM?c.map(h=>[h.x,h.y,h.z,h.m]):c.map(h=>[h.x,h.y,h.z]),p=s.map(h=>m.slice(h[0],h[1]));return new ee({paths:p,hasM:e.hasM,hasZ:!0,spatialReference:u})};break}}return t}}class f{constructor(e,t,i=null,n=null,s=null,o=null){this.x=e,this.y=t,this.z=i,this.m=n,this.tile=s,this.elevationTile=o}clone(){return new f(this.x,this.y,this.z,this.m)}}class H{constructor(e,t){this.layer=e,this.options=t}}class he extends H{constructor(e,t,i){super(e,i),this.outSpatialReference=t,this.type="geometry"}selectTilesAtLOD(e){if(e<0)this.geometry.coordinates.forEach(t=>{t.tile=null});else{const t=this.layer.tileInfo,i=t.lods[e].level;this.geometry.coordinates.forEach(n=>{n.tile=t.tileAt(i,n.x,n.y)})}}allElevationTilesFetched(){return!this.geometry.coordinates.some(e=>!e.elevationTile)}clearElevationTiles(){for(const e of this.geometry.coordinates)e.elevationTile!==this.outsideExtentTile&&(e.elevationTile=null)}populateElevationTiles(e){var t;for(const i of this.geometry.coordinates)!i.elevationTile&&((t=i.tile)!=null&&t.id)&&(i.elevationTile=e[i.tile.id])}remapTiles(e){var t;for(const i of this.geometry.coordinates){const n=(t=i.tile)==null?void 0:t.id;i.tile=n?e[n]:null}}getTilesToFetch(){var i;const e={},t=[];for(const n of this.geometry.coordinates){const s=n.tile;if(!s)continue;const o=(i=n.tile)==null?void 0:i.id;n.elevationTile||!o||e[o]||(e[o]=s,t.push(s))}return t}forEachTileToFetch(e){for(const t of this.geometry.coordinates)t.tile&&!t.elevationTile&&e(t.tile,()=>{t.tile=null})}}class pe extends H{constructor(e,t,i,n){super(e,i),this.type="extent",this.elevationTiles=[],this._candidateTiles=[],this._fetchedCandidates=new Set,this.extent=t.intersection(e.fullExtent),this.maskExtents=n}selectTilesAtLOD(e,t){const i=this._maximumLodForRequests(t),n=Math.min(i,e);n<0?this._candidateTiles.length=0:this._selectCandidateTilesCoveringExtentAt(n)}_maximumLodForRequests(e){const t=this.layer.tileInfo;if(!e)return t.lods.length-1;const i=this.extent;if(T(i))return-1;for(let n=t.lods.length-1;n>=0;n--){const s=t.lods[n],o=s.resolution*t.size[0],l=s.resolution*t.size[1];if(Math.ceil(i.width/o)*Math.ceil(i.height/l)<=e)return n}return-1}allElevationTilesFetched(){return this._candidateTiles.length===this.elevationTiles.length}clearElevationTiles(){this.elevationTiles.length=0,this._fetchedCandidates.clear()}populateElevationTiles(e){for(const t of this._candidateTiles){const i=t.id&&e[t.id];i&&(this._fetchedCandidates.add(t),this.elevationTiles.push(i))}}remapTiles(e){this._candidateTiles=this._uniqueNonOverlappingTiles(this._candidateTiles.map(t=>e[t.id]))}getTilesToFetch(){return this._candidateTiles}forEachTileToFetch(e,t){const i=this._candidateTiles;this._candidateTiles=[],i.forEach(n=>{if(this._fetchedCandidates.has(n))return void(t&&t(n));let s=!1;e(n,()=>s=!0),s?t&&t(n):this._candidateTiles.push(n)}),this._candidateTiles=this._uniqueNonOverlappingTiles(this._candidateTiles,t)}_uniqueNonOverlappingTiles(e,t){const i={},n=[];for(const o of e){const l=o.id;l&&!i[l]?(i[l]=o,n.push(o)):t&&t(o)}const s=n.sort((o,l)=>o.level-l.level);return s.filter((o,l)=>{for(let a=0;a<l;a++){const c=s[a].extent;if(c&&o.extent&&O(c,o.extent))return t&&t(o),!1}return!0})}_selectCandidateTilesCoveringExtentAt(e){this._candidateTiles.length=0;const t=this.extent;if(T(t))return;const i=this.layer.tileInfo,n=i.lods[e],s=i.tileAt(n.level,t.xmin,t.ymin),o=s.extent;if(T(o))return;const l=n.resolution*i.size[0],a=n.resolution*i.size[1],c=Math.ceil((t.xmax-o[0])/l),u=Math.ceil((t.ymax-o[1])/a);for(let m=0;m<u;m++)for(let p=0;p<c;p++){const h=new W(null,s.level,s.row-m,s.col+p);i.updateTileInfo(h),this._tileIsMasked(h)||this._candidateTiles.push(h)}}_tileIsMasked(e){return!!this.maskExtents&&this.maskExtents.some(t=>e.extent&&O(t,e.extent))}}function j(r,e=0){let t=r.lods.length-1;if(e>0){const i=e/g(r.spatialReference),n=r.lods.findIndex(s=>s.resolution<i);n===0?t=0:n>0&&(t=n-1)}return t}const w={maximumAutoTileRequests:20,noDataValue:0,returnSampleInfo:!1,demResolution:"auto",minDemResolution:0};export{Le as ElevationQuery,x as GeometryDescriptor,j as getFinestLodIndex};
