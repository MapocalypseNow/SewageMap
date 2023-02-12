import{O as K,b0 as D,d_ as U,bf as W,d6 as g,k as v,d$ as X,bU as Y,e0 as ee,r as x,s as d,ct as I,e1 as $,e2 as te,bD as L,M as A,bC as O,E as se,dA as Q,e3 as ie,e4 as q,e5 as ne,e6 as Z}from"./index.js";const M=K.getLogger("esri.layers.support.ElevationSampler");class B{queryElevation(e){return oe(e.clone(),this)}on(){return ue}projectIfRequired(e,t){return H(e,t)}}class ae extends B{get spatialReference(){return this.extent.spatialReference}constructor(e,t,s){super(),this.tile=e,this.noDataValue=s;const i=e.tile.extent;this.extent=U(i,t.spatialReference),this.extent.zmin=e.zmin,this.extent.zmax=e.zmax,this._aaExtent=i;const a=g(t.spatialReference),n=t.lodAt(e.tile.level).resolution*a;this.demResolution={min:n,max:n}}contains(e){const t=this.projectIfRequired(e,this.spatialReference);return!v(t)&&this.containsAt(t.x,t.y)}containsAt(e,t){return X(this._aaExtent,e,t)}elevationAt(e,t){if(!this.containsAt(e,t)){const s=this.extent,i=`${s.xmin}, ${s.ymin}, ${s.xmax}, ${s.ymax}`;return M.warn("#elevationAt()",`Point used to sample elevation (${e}, ${t}) is outside of the sampler extent (${i})`),this.noDataValue}return Y(this.tile.sample(e,t),this.noDataValue)}}class G extends B{get spatialReference(){return this.extent.spatialReference}constructor(e,t,s){let i;super(),typeof t=="number"?(this.noDataValue=t,i=null):(i=t,this.noDataValue=s),this.samplers=i?e.map(n=>new ae(n,i,this.noDataValue)):e;const a=this.samplers[0];if(a){this.extent=a.extent.clone();const{min:n,max:l}=a.demResolution;this.demResolution={min:n,max:l};for(let o=1;o<this.samplers.length;o++){const r=this.samplers[o];this.extent.union(r.extent),this.demResolution.min=Math.min(this.demResolution.min,r.demResolution.min),this.demResolution.max=Math.max(this.demResolution.max,r.demResolution.max)}}else this.extent=U(W(),i.spatialReference),this.demResolution={min:0,max:0}}elevationAt(e,t){for(const s of this.samplers)if(s.containsAt(e,t))return s.elevationAt(e,t);return M.warn("#elevationAt()",`Point used to sample elevation (${e}, ${t}) is outside of the sampler`),this.noDataValue}}function oe(c,e){const t=H(c,e.spatialReference);if(!t)return null;switch(c.type){case"point":le(c,t,e);break;case"polyline":re(c,t,e);break;case"multipoint":ce(c,t,e)}return c}function H(c,e){if(v(c))return null;const t=c.spatialReference;if(t.equals(e))return c;const s=ee(c,e);return s||M.error(`Cannot project geometry spatial reference (wkid:${t.wkid}) to elevation sampler spatial reference (wkid:${e.wkid})`),s}function le(c,e,t){c.z=t.elevationAt(e.x,e.y)}function re(c,e,t){y.spatialReference=e.spatialReference;const s=c.hasM&&!c.hasZ;for(let i=0;i<c.paths.length;i++){const a=c.paths[i],n=e.paths[i];for(let l=0;l<a.length;l++){const o=a[l],r=n[l];y.x=r[0],y.y=r[1],s&&(o[3]=o[2]),o[2]=t.elevationAt(y.x,y.y)}}c.hasZ=!0}function ce(c,e,t){y.spatialReference=e.spatialReference;const s=c.hasM&&!c.hasZ;for(let i=0;i<c.points.length;i++){const a=c.points[i],n=e.points[i];y.x=n[0],y.y=n[1],s&&(a[3]=a[2]),a[2]=t.elevationAt(y.x,y.y)}c.hasZ=!0}const y=new D,ue={remove(){}};class he{constructor(e,t){this.data=e,this.safeWidth=.99999999*(e.width-1),this.dx=(e.width-1)/(t[2]-t[0]),this.dy=(e.width-1)/(t[3]-t[1]),this.x0=t[0],this.y1=t[3]}}class j{constructor(e,t=null){if(this.tile=e,x(t)&&x(e)){const s=e.extent;this._samplerData=new he(t,s)}}get zmin(){return x(this._samplerData)?this._samplerData.data.minValue:0}get zmax(){return x(this._samplerData)?this._samplerData.data.maxValue:0}sample(e,t){if(v(this._samplerData))return;const{safeWidth:s,data:i,dx:a,dy:n,y1:l,x0:o}=this._samplerData,{width:r,values:u,noDataValue:m}=i,p=P(n*(l-t),0,s),h=P(a*(e-o),0,s),C=Math.floor(p),F=Math.floor(h),_=C*r+F,b=_+r,R=u[_],E=u[b],z=u[_+1],S=u[b+1];if(R!==m&&E!==m&&z!==m&&S!==m){const V=h-F,k=R+(z-R)*V;return k+(E+(S-E)*V-k)*(p-C)}}}function P(c,e,t){return c<e?e:c>t?t:c}class de{async queryAll(e,t,s){if(!(e=s&&s.ignoreInvisibleLayers?e.filter(r=>r.visible):e.slice()).length)throw new d("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");const i=T.fromGeometry(t);let a=!1;s&&s.returnSampleInfo||(a=!0);const n={...w,...s,returnSampleInfo:!0},l=await this.query(e[e.length-1],i,n),o=await this._queryAllContinue(e,l,n);return o.geometry=o.geometry.export(),a&&delete o.sampleInfo,o}async query(e,t,s){if(!e)throw new d("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||!(t instanceof T)&&t.type!=="point"&&t.type!=="multipoint"&&t.type!=="polyline")throw new d("elevation-query:invalid-geometry","Only point, polyline and multipoint geometries can be used to query elevation");const i={...w,...s},a=new pe(e,t.spatialReference,i),n=i.signal;return await e.load({signal:n}),await this._createGeometryDescriptor(a,t,n),await this._selectTiles(a,n),await this._populateElevationTiles(a,n),this._sampleGeometryWithElevation(a),this._createQueryResult(a,n)}async createSampler(e,t,s){if(!e)throw new d("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||t.type!=="extent")throw new d("elevation-query:invalid-extent","Invalid or undefined extent");const i={...w,...s};return this._createSampler(e,t,i)}async createSamplerAll(e,t,s){if(!(e=s&&s.ignoreInvisibleLayers?e.filter(n=>n.visible):e.slice()).length)throw new d("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");if(!t||t.type!=="extent")throw new d("elevation-query:invalid-extent","Invalid or undefined extent");const i={...w,...s,returnSampleInfo:!0},a=await this._createSampler(e[e.length-1],t,i);return this._createSamplerAllContinue(e,t,a,i)}async _createSampler(e,t,s,i){const a=s.signal;await e.load({signal:a});const n=t.spatialReference,l=e.tileInfo.spatialReference;n.equals(l)||(await I([{source:n,dest:l}],{signal:a}),t=$(t,l));const o=new me(e,t,s,i);return await this._selectTiles(o,a),await this._populateElevationTiles(o,a),new G(o.elevationTiles,o.layer.tileInfo,o.options.noDataValue)}async _createSamplerAllContinue(e,t,s,i){if(e.pop(),!e.length)return s;const a=s.samplers.map(r=>te(r.extent)),n=await this._createSampler(e[e.length-1],t,i,a);if(n.samplers.length===0)return s;const l=s.samplers.concat(n.samplers),o=new G(l,i.noDataValue);return this._createSamplerAllContinue(e,t,o,i)}async _queryAllContinue(e,t,s){const i=e.pop(),a=t.geometry.coordinates,n=t.sampleInfo;L(n);const l=[],o=[];for(let p=0;p<a.length;p++){const h=n[p];h.demResolution>=0?h.source||(h.source=i):e.length&&(l.push(a[p]),o.push(p))}if(!e.length||l.length===0)return t;const r=t.geometry.clone(l),u=await this.query(e[e.length-1],r,s),m=u.sampleInfo;if(!m)throw new Error("no sampleInfo");return o.forEach((p,h)=>{a[p].z=u.geometry.coordinates[h].z,n[p].demResolution=m[h].demResolution}),this._queryAllContinue(e,t,s)}async _createQueryResult(e,t){const s=await e.geometry.project(e.outSpatialReference,t);L(s);const i={geometry:s.export(),noDataValue:e.options.noDataValue};return e.options.returnSampleInfo&&(i.sampleInfo=this._extractSampleInfo(e)),e.geometry.coordinates.forEach(a=>{a.tile=null,a.elevationTile=null}),i}async _createGeometryDescriptor(e,t,s){let i;const a=e.layer.tileInfo.spatialReference;if(t instanceof T?i=await t.project(a,s):(await I([{source:t.spatialReference,dest:a}],{signal:s}),i=$(t,a)),!i)throw new d("elevation-query:spatial-reference-mismatch",`Cannot query elevation in '${t.spatialReference.wkid}' on an elevation service in '${a.wkid}'`);e.geometry=T.fromGeometry(i)}async _selectTiles(e,t){const s=e.options.demResolution;if(e.type==="geometry"&&this._preselectOutsideLayerExtent(e),typeof s=="number")this._selectTilesClosestResolution(e);else if(s==="finest-contiguous")await this._selectTilesFinestContiguous(e,t);else{if(s!=="auto")throw new d("elevation-query:invalid-dem-resolution",`Invalid dem resolution value '${s}', expected a number, "finest-contiguous" or "auto"`);await this._selectTilesAuto(e,t)}}_preselectOutsideLayerExtent(e){if(v(e.layer.fullExtent))return;const t=new j(null);t.sample=()=>e.options.noDataValue,e.outsideExtentTile=t;const s=e.layer.fullExtent;e.geometry.coordinates.forEach(i=>{const a=i.x,n=i.y;(a<s.xmin||a>s.xmax||n<s.ymin||n>s.ymax)&&(i.elevationTile=t)})}_selectTilesClosestResolution(e){const t=e.layer.tileInfo,s=this._findNearestDemResolutionLODIndex(t,e.options.demResolution);e.selectTilesAtLOD(s)}_findNearestDemResolutionLODIndex(e,t){const s=t/g(e.spatialReference);let i=e.lods[0],a=0;for(let n=1;n<e.lods.length;n++){const l=e.lods[n];Math.abs(l.resolution-s)<Math.abs(i.resolution-s)&&(i=l,a=n)}return a}async _selectTilesFinestContiguous(e,t){const s=N(e.layer.tileInfo,e.options.minDemResolution);await this._selectTilesFinestContiguousAt(e,s,t)}async _selectTilesFinestContiguousAt(e,t,s){const i=e.layer;if(e.selectTilesAtLOD(t),t<0)return;const a=i.tilemapCache,n=e.getTilesToFetch();try{if(a)await A(Promise.all(n.map(l=>a.fetchAvailability(l.level,l.row,l.col,{signal:s}))),s);else if(await this._populateElevationTiles(e,s),!e.allElevationTilesFetched())throw e.clearElevationTiles(),new d("elevation-query:has-unavailable-tiles")}catch(l){O(l),await this._selectTilesFinestContiguousAt(e,t-1,s)}}async _populateElevationTiles(e,t){const s=e.getTilesToFetch(),i={},a=e.options.cache,n=e.options.noDataValue,l=s.map(async o=>{if(o.id==null)return;const r=`${e.layer.uid}:${o.id}:${n}`,u=x(a)?a.get(r):null,m=x(u)?u:await e.layer.fetchTile(o.level,o.row,o.col,{noDataValue:n,signal:t});x(a)&&a.put(r,m),i[o.id]=new j(o,m)});await A(se(l),t),e.populateElevationTiles(i)}async _selectTilesAuto(e,t){this._selectTilesAutoFinest(e),this._reduceTilesForMaximumRequests(e);const s=e.layer.tilemapCache;if(!s)return this._selectTilesAutoPrefetchUpsample(e,t);const i=e.getTilesToFetch(),a={},n=i.map(async l=>{const o=new Q(null,0,0,0,W()),r=await ie(s.fetchAvailabilityUpsample(l.level,l.row,l.col,o,{signal:t}));r.ok!==!1?l.id!=null&&(a[l.id]=o):O(r.error)});await A(Promise.all(n),t),e.remapTiles(a)}_reduceTilesForMaximumRequests(e){const t=e.layer.tileInfo;let s=0;const i={},a=o=>{o.id!=null&&(o.id in i?i[o.id]++:(i[o.id]=1,s++))},n=o=>{if(o.id==null)return;const r=i[o.id];r===1?(delete i[o.id],s--):i[o.id]=r-1};e.forEachTileToFetch(a,n);let l=!0;for(;l&&(l=!1,e.forEachTileToFetch(o=>{s<=e.options.maximumAutoTileRequests||(n(o),t.upsampleTile(o)&&(l=!0),a(o))},n),l););}_selectTilesAutoFinest(e){const t=N(e.layer.tileInfo,e.options.minDemResolution);e.selectTilesAtLOD(t,e.options.maximumAutoTileRequests)}async _selectTilesAutoPrefetchUpsample(e,t){const s=e.layer.tileInfo;await this._populateElevationTiles(e,t);let i=!1;e.forEachTileToFetch((a,n)=>{s.upsampleTile(a)?i=!0:n()}),i&&await this._selectTilesAutoPrefetchUpsample(e,t)}_sampleGeometryWithElevation(e){e.geometry.coordinates.forEach(t=>{const s=t.elevationTile;let i=e.options.noDataValue;if(s){const a=s.sample(t.x,t.y);x(a)?i=a:t.elevationTile=null}t.z=i})}_extractSampleInfo(e){const t=e.layer.tileInfo,s=g(t.spatialReference);return e.geometry.coordinates.map(i=>{let a=-1;return i.elevationTile&&i.elevationTile!==e.outsideExtentTile&&(a=t.lodAt(i.elevationTile.tile.level).resolution*s),{demResolution:a}})}}class T{export(){return this._exporter(this.coordinates,this.spatialReference)}clone(e){const t=new T;return t.geometry=this.geometry,t.spatialReference=this.spatialReference,t.coordinates=e||this.coordinates.map(s=>s.clone()),t._exporter=this._exporter,t}async project(e,t){if(this.spatialReference.equals(e))return this.clone();await I([{source:this.spatialReference,dest:e}],{signal:t});const s=new q({spatialReference:this.spatialReference,points:this.coordinates.map(l=>[l.x,l.y])}),i=$(s,e);if(!i)return null;const a=this.coordinates.map((l,o)=>{const r=l.clone(),u=i.points[o];return r.x=u[0],r.y=u[1],r}),n=this.clone(a);return n.spatialReference=e,n}static fromGeometry(e){const t=new T;if(t.geometry=e,t.spatialReference=e.spatialReference,e instanceof T)t.coordinates=e.coordinates.map(s=>s.clone()),t._exporter=(s,i)=>{const a=e.clone(s);return a.spatialReference=i,a};else switch(e.type){case"point":{const s=e,{hasZ:i,hasM:a}=s;t.coordinates=i&&a?[new f(s.x,s.y,s.z,s.m)]:i?[new f(s.x,s.y,s.z)]:a?[new f(s.x,s.y,null,s.m)]:[new f(s.x,s.y)],t._exporter=(n,l)=>e.hasM?new D(n[0].x,n[0].y,n[0].z,n[0].m,l):new D(n[0].x,n[0].y,n[0].z,l);break}case"multipoint":{const s=e,{hasZ:i,hasM:a}=s;t.coordinates=i&&a?s.points.map(n=>new f(n[0],n[1],n[2],n[3])):i?s.points.map(n=>new f(n[0],n[1],n[2])):a?s.points.map(n=>new f(n[0],n[1],null,n[2])):s.points.map(n=>new f(n[0],n[1])),t._exporter=(n,l)=>e.hasM?new q({points:n.map(o=>[o.x,o.y,o.z,o.m]),hasZ:!0,hasM:!0,spatiaReference:l}):new q(n.map(o=>[o.x,o.y,o.z]),l);break}case"polyline":{const s=e,i=[],a=[],{hasZ:n,hasM:l}=e;let o=0;for(const r of s.paths)if(a.push([o,o+r.length]),o+=r.length,n&&l)for(const u of r)i.push(new f(u[0],u[1],u[2],u[3]));else if(n)for(const u of r)i.push(new f(u[0],u[1],u[2]));else if(l)for(const u of r)i.push(new f(u[0],u[1],null,u[2]));else for(const u of r)i.push(new f(u[0],u[1]));t.coordinates=i,t._exporter=(r,u)=>{const m=e.hasM?r.map(h=>[h.x,h.y,h.z,h.m]):r.map(h=>[h.x,h.y,h.z]),p=a.map(h=>m.slice(h[0],h[1]));return new ne({paths:p,hasM:e.hasM,hasZ:!0,spatialReference:u})};break}}return t}}class f{constructor(e,t,s=null,i=null,a=null,n=null){this.x=e,this.y=t,this.z=s,this.m=i,this.tile=a,this.elevationTile=n}clone(){return new f(this.x,this.y,this.z,this.m)}}class J{constructor(e,t){this.layer=e,this.options=t}}class pe extends J{constructor(e,t,s){super(e,s),this.outSpatialReference=t,this.type="geometry"}selectTilesAtLOD(e){if(e<0)this.geometry.coordinates.forEach(t=>{t.tile=null});else{const t=this.layer.tileInfo,s=t.lods[e].level;this.geometry.coordinates.forEach(i=>{i.tile=t.tileAt(s,i.x,i.y)})}}allElevationTilesFetched(){return!this.geometry.coordinates.some(e=>!e.elevationTile)}clearElevationTiles(){for(const e of this.geometry.coordinates)e.elevationTile!==this.outsideExtentTile&&(e.elevationTile=null)}populateElevationTiles(e){var t;for(const s of this.geometry.coordinates)!s.elevationTile&&((t=s.tile)==null?void 0:t.id)&&(s.elevationTile=e[s.tile.id])}remapTiles(e){var t;for(const s of this.geometry.coordinates){const i=(t=s.tile)==null?void 0:t.id;s.tile=i?e[i]:null}}getTilesToFetch(){var s;const e={},t=[];for(const i of this.geometry.coordinates){const a=i.tile;if(!a)continue;const n=(s=i.tile)==null?void 0:s.id;i.elevationTile||!n||e[n]||(e[n]=a,t.push(a))}return t}forEachTileToFetch(e){for(const t of this.geometry.coordinates)t.tile&&!t.elevationTile&&e(t.tile,()=>{t.tile=null})}}class me extends J{constructor(e,t,s,i){super(e,s),this.type="extent",this.elevationTiles=[],this._candidateTiles=[],this._fetchedCandidates=new Set,this.extent=t.intersection(e.fullExtent),this.maskExtents=i}selectTilesAtLOD(e,t){const s=this._maximumLodForRequests(t),i=Math.min(s,e);i<0?this._candidateTiles.length=0:this._selectCandidateTilesCoveringExtentAt(i)}_maximumLodForRequests(e){const t=this.layer.tileInfo;if(!e)return t.lods.length-1;const s=this.extent;if(v(s))return-1;for(let i=t.lods.length-1;i>=0;i--){const a=t.lods[i],n=a.resolution*t.size[0],l=a.resolution*t.size[1];if(Math.ceil(s.width/n)*Math.ceil(s.height/l)<=e)return i}return-1}allElevationTilesFetched(){return this._candidateTiles.length===this.elevationTiles.length}clearElevationTiles(){this.elevationTiles.length=0,this._fetchedCandidates.clear()}populateElevationTiles(e){for(const t of this._candidateTiles){const s=t.id&&e[t.id];s&&(this._fetchedCandidates.add(t),this.elevationTiles.push(s))}}remapTiles(e){this._candidateTiles=this._uniqueNonOverlappingTiles(this._candidateTiles.map(t=>e[t.id]))}getTilesToFetch(){return this._candidateTiles}forEachTileToFetch(e,t){const s=this._candidateTiles;this._candidateTiles=[],s.forEach(i=>{if(this._fetchedCandidates.has(i))return void(t&&t(i));let a=!1;e(i,()=>a=!0),a?t&&t(i):this._candidateTiles.push(i)}),this._candidateTiles=this._uniqueNonOverlappingTiles(this._candidateTiles,t)}_uniqueNonOverlappingTiles(e,t){const s={},i=[];for(const n of e){const l=n.id;l&&!s[l]?(s[l]=n,i.push(n)):t&&t(n)}const a=i.sort((n,l)=>n.level-l.level);return a.filter((n,l)=>{for(let o=0;o<l;o++){const r=a[o].extent;if(r&&n.extent&&Z(r,n.extent))return t&&t(n),!1}return!0})}_selectCandidateTilesCoveringExtentAt(e){this._candidateTiles.length=0;const t=this.extent;if(v(t))return;const s=this.layer.tileInfo,i=s.lods[e],a=s.tileAt(i.level,t.xmin,t.ymin),n=a.extent;if(v(n))return;const l=i.resolution*s.size[0],o=i.resolution*s.size[1],r=Math.ceil((t.xmax-n[0])/l),u=Math.ceil((t.ymax-n[1])/o);for(let m=0;m<u;m++)for(let p=0;p<r;p++){const h=new Q(null,a.level,a.row-m,a.col+p);s.updateTileInfo(h),this._tileIsMasked(h)||this._candidateTiles.push(h)}}_tileIsMasked(e){return!!this.maskExtents&&this.maskExtents.some(t=>e.extent&&Z(t,e.extent))}}function N(c,e=0){let t=c.lods.length-1;if(e>0){const s=e/g(c.spatialReference),i=c.lods.findIndex(a=>a.resolution<s);i===0?t=0:i>0&&(t=i-1)}return t}const w={maximumAutoTileRequests:20,noDataValue:0,returnSampleInfo:!1,demResolution:"auto",minDemResolution:0};export{de as ElevationQuery,T as GeometryDescriptor,N as getFinestLodIndex};
