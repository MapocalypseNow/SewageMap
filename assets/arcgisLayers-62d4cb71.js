import{q as h,aA as w,I as S,r as L,eu as O,a3 as m,ev as P,F as T}from"./vendor-445d19db.js";import{a as c,r as g}from"./fetchService-e1991652.js";import{a as C}from"./lazyLayerLoader-97724470.js";async function A(e){var s;const l=(s=e.properties)==null?void 0:s.customParameters,r=await N(e.url,l),a={...e.properties,url:e.url};if(!r.sublayerIds)return r.layerOrTableId!=null&&(a.layerId=r.layerOrTableId,a.sourceJSON=r.sourceJSON),new r.Constructor(a);const n=new(await h(()=>import("./GroupLayer-7f07cddb.js"),["assets/GroupLayer-7f07cddb.js","assets/vendor-445d19db.js","assets/lazyLayerLoader-97724470.js"])).default({title:r.parsedUrl.title});return F(n,r,a),n}function b(e,l){return e?e.find(r=>r.id===l):null}function F(e,l,r){function a(n,s){const o={...r,layerId:n,sublayerTitleMode:"service-name"};return m(s)&&(o.sourceJSON=s),new l.Constructor(o)}l.sublayerIds.forEach(n=>{const s=a(n,b(l.sublayerInfos,n));e.add(s)}),l.tableIds.forEach(n=>{const s=a(n,b(l.tableInfos,n));e.tables.add(s)})}async function N(e,l){let r=w(e);if(S(r)&&(r=await U(e,l)),S(r))throw new L("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});const{serverType:a,sublayer:n}=r;let s;const o={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(a){case"MapServer":s=n!=null?"FeatureLayer":_(e,l).then(t=>t?"TileLayer":"MapImageLayer");break;case"ImageServer":s=c(e,{customParameters:l}).then(t=>{const y=t.tileInfo&&t.tileInfo.format;return t.tileInfo?(y==null?void 0:y.toUpperCase())!=="LERC"||t.cacheType&&t.cacheType.toLowerCase()!=="elevation"?"ImageryTileLayer":"ElevationLayer":"ImageryLayer"});break;case"SceneServer":s=c(r.url.path,{customParameters:l}).then(t=>{var y;if(t){if((t==null?void 0:t.layerType)==="Voxel")return"VoxelLayer";if(t!=null&&t.layers&&Array.isArray(t.layers)&&t.layers.length>0){const I={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"},p=(y=t.layers[0])==null?void 0:y.layerType;if(I[p]!=null)return I[p]}}return"SceneLayer"});break;default:s=o[a]}const u={FeatureLayer:!0,SceneLayer:!0},d=a==="FeatureServer",i={parsedUrl:r,Constructor:null,layerOrTableId:d?n:null,sublayerIds:null,tableIds:null},f=await s;if(u[f]&&n==null){const t=await J(e,a,l);d&&(i.sublayerInfos=t.layerInfos,i.tableInfos=t.tableInfos),t.layerIds.length+t.tableIds.length!==1?(i.sublayerIds=t.layerIds,i.tableIds=t.tableIds):d&&(i.layerOrTableId=t.layerIds[0]??t.tableIds[0],i.sourceJSON=t.layerInfos[0]??t.tableInfos[0])}return i.Constructor=await V(f),i}async function U(e,l){var u;const r=await c(e,{customParameters:l});let a=null,n=null;const s=r.type;if(s==="Feature Layer"||s==="Table"?(a="FeatureServer",n=r.id):s==="indexedVector"?a="VectorTileServer":r.hasOwnProperty("mapName")?a="MapServer":r.hasOwnProperty("bandCount")&&r.hasOwnProperty("pixelSizeX")?a="ImageServer":r.hasOwnProperty("maxRecordCount")&&r.hasOwnProperty("allowGeometryUpdates")?a="FeatureServer":r.hasOwnProperty("streamUrls")?a="StreamServer":v(r)?(a="SceneServer",n=r.id):r.hasOwnProperty("layers")&&v((u=r.layers)==null?void 0:u[0])&&(a="SceneServer"),!a)return null;const o=n!=null?O(e):null;return{title:m(o)&&r.name||P(e),serverType:a,sublayer:n,url:{path:m(o)?o.serviceUrl:T(e).path}}}function v(e){return(e==null?void 0:e.hasOwnProperty("store"))&&e.hasOwnProperty("id")&&typeof e.id=="number"}async function J(e,l,r){let a,n=!1;if(l==="FeatureServer"){const u=await g(e,{customParameters:r});n=!!u.layersJSON,a=u.layersJSON||u.serviceJSON}else a=await c(e,{customParameters:r});const s=a==null?void 0:a.layers,o=a==null?void 0:a.tables;return{layerIds:(s==null?void 0:s.map(u=>u.id).reverse())||[],tableIds:(o==null?void 0:o.map(u=>u.id).reverse())||[],layerInfos:n?s:[],tableInfos:n?o:[]}}async function V(e){return(0,C[e])()}async function _(e,l){return(await c(e,{customParameters:l})).tileInfo}export{A as fromUrl};
