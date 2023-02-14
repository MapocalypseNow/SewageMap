import{$ as P,a9 as T,l as w,A as g,eh as C,r as m,ei as F,Q as N,ej as h}from"./vendor.f8a4aecc.js";import{t as d,r as J}from"./fetchService.23f516dd.js";import{a as U}from"./lazyLayerLoader.ae9d2d83.js";const V={FeatureLayer:!0,SceneLayer:!0};async function z(r){var t;const l=(t=r.properties)==null?void 0:t.customParameters,e=await x(r.url,l),a={...r.properties,url:r.url};if(!e.sublayerIds)return e.layerOrTableId!=null&&(a.layerId=e.layerOrTableId,a.sourceJSON=e.sourceJSON),new e.Constructor(a);const s=new(await P(()=>import("./GroupLayer.0a883680.js"),["assets/GroupLayer.0a883680.js","assets/vendor.f8a4aecc.js","assets/lazyLayerLoader.ae9d2d83.js"])).default({title:e.parsedUrl.title});return _(s,e,a),s}function O(r,l){return r?r.find(e=>e.id===l):null}function _(r,l,e){function a(s,t){const u={...e,layerId:s,sublayerTitleMode:"service-name"};return m(t)&&(u.sourceJSON=t),new l.Constructor(u)}l.sublayerIds.forEach(s=>{const t=a(s,O(l.sublayerInfos,s));r.add(t)}),l.tableIds.forEach(s=>{const t=a(s,O(l.tableInfos,s));r.tables.add(t)})}async function x(r,l){var f,p,I,b,S,v;let e=T(r);if(w(e)&&(e=await E(r,l)),w(e))throw new g("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:r});const{serverType:a,sublayer:s}=e;let t;const u={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(a){case"MapServer":s!=null?t="FeatureLayer":t=await R(r,l)?"TileLayer":"MapImageLayer";break;case"ImageServer":{const n=await d(r,{customParameters:l}),{tileInfo:i,cacheType:y}=n;t=i?((f=i==null?void 0:i.format)==null?void 0:f.toUpperCase())!=="LERC"||y&&y.toLowerCase()!=="elevation"?"ImageryTileLayer":"ElevationLayer":"ImageryLayer";break}case"SceneServer":{const n=await d(e.url.path,{customParameters:l});if(t="SceneLayer",n){const i=n==null?void 0:n.layers;if((n==null?void 0:n.layerType)==="Voxel")t="VoxelLayer";else if(i!=null&&i.length){const y=(p=i[0])==null?void 0:p.layerType;y!=null&&h[y]!=null&&(t=h[y])}}break}default:t=u[a]}const o=a==="FeatureServer",c={parsedUrl:e,Constructor:null,layerOrTableId:o?s:void 0,sublayerIds:null,tableIds:null};if(V[t]&&s==null){const n=await M(r,a,l);o&&(c.sublayerInfos=n.layerInfos,c.tableInfos=n.tableInfos),n.layerIds.length+n.tableIds.length!==1?(c.sublayerIds=n.layerIds,c.tableIds=n.tableIds):o&&(c.layerOrTableId=(I=n.layerIds[0])!=null?I:n.tableIds[0],c.sourceJSON=(v=(b=n.layerInfos)==null?void 0:b[0])!=null?v:(S=n.tableInfos)==null?void 0:S[0])}return c.Constructor=await k(t),c}async function E(r,l){var o,c;const e=await d(r,{customParameters:l});let a=null,s=null;const t=e.type;if(t==="Feature Layer"||t==="Table"?(a="FeatureServer",s=(o=e.id)!=null?o:null):t==="indexedVector"?a="VectorTileServer":e.hasOwnProperty("mapName")?a="MapServer":e.hasOwnProperty("bandCount")&&e.hasOwnProperty("pixelSizeX")?a="ImageServer":e.hasOwnProperty("maxRecordCount")&&e.hasOwnProperty("allowGeometryUpdates")?a="FeatureServer":e.hasOwnProperty("streamUrls")?a="StreamServer":L(e)?(a="SceneServer",s=e.id):e.hasOwnProperty("layers")&&L((c=e.layers)==null?void 0:c[0])&&(a="SceneServer"),!a)return null;const u=s!=null?C(r):null;return{title:m(u)&&e.name||F(r),serverType:a,sublayer:s,url:{path:m(u)?u.serviceUrl:N(r).path}}}function L(r){return r!=null&&r.hasOwnProperty("store")&&r.hasOwnProperty("id")&&typeof r.id=="number"}async function M(r,l,e){let a,s=!1;if(l==="FeatureServer"){const o=await J(r,{customParameters:e});s=!!o.layersJSON,a=o.layersJSON||o.serviceJSON}else a=await d(r,{customParameters:e});const t=a==null?void 0:a.layers,u=a==null?void 0:a.tables;return{layerIds:(t==null?void 0:t.map(o=>o.id).reverse())||[],tableIds:(u==null?void 0:u.map(o=>o.id).reverse())||[],layerInfos:s?t:[],tableInfos:s?u:[]}}async function k(r){return(0,U[r])()}async function R(r,l){return(await d(r,{customParameters:l})).tileInfo}export{z as fromUrl};
