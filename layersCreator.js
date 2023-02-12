import{E as G,t as m,x as f,j as M}from"./index.js";import{a as L}from"./lazyLayerLoader.js";import{selectLayerClassPath as A}from"./portalLayers.js";import"./layersLoader.js";import"./fetchService.js";import"./jsonContext.js";function v(e){return p(e,"notes")}function w(e){return p(e,"markup")}function b(e){return p(e,"route")}function p(e,r){return!(!e.layerType||e.layerType!=="ArcGISFeatureLayer")&&e.featureCollectionType===r}async function W(e,r,y){if(!r)return;const t=[];for(const a of r){const i=D(a,y);a.layerType==="GroupLayer"?t.push(E(i,a,y)):t.push(i)}const n=await G(t);for(const a of n)a.value&&e.add(a.value)}const F={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"VoxelLayer",LineOfSightLayer:"LineOfSightLayer"},C={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},O={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",ArcGISSceneServiceLayer:"SceneLayer",DefaultTileLayer:"TileLayer"},V={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},B={ArcGISFeatureLayer:"FeatureLayer"},h={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};async function D(e,r){return U(await x(e,r),e,r)}async function U(e,r,y){const t=new e;return t.read(r,y.context),t.type==="group"&&T(r)&&await R(t,r,y.context),await m(t,y.context),t}async function x(e,r){var o;const y=r.context,t=k(y);let n=e.layerType||e.type;!n&&r&&r.defaultLayerType&&(n=r.defaultLayerType);const a=t[n];let i=a?L[a]:L.UnknownLayer;if(g(e)){const c=y==null?void 0:y.portal;if(e.itemId){const l=new f({id:e.itemId,portal:c});await l.load();const s=(await A(l)).className||"UnknownLayer";i=L[s]}}else n==="ArcGISFeatureLayer"?v(e)||w(e)?i=L.MapNotesLayer:b(e)?i=L.RouteLayer:T(e)&&(i=L.GroupLayer):e.wmtsInfo&&e.wmtsInfo.url&&e.wmtsInfo.layerIdentifier?i=L.WMTSLayer:n==="WFS"&&((o=e.wfsInfo)==null?void 0:o.version)!=="2.0.0"&&(i=L.UnsupportedLayer);return i()}function T(e){var r,y,t;return e.layerType!=="ArcGISFeatureLayer"||g(e)?!1:((t=(y=(r=e.featureCollection)==null?void 0:r.layers)==null?void 0:y.length)!=null?t:0)>1}function g(e){return e.type==="Feature Collection"}function k(e){let r;if(e.origin==="web-scene")switch(e.layerContainerType){case"basemap":r=O;break;case"ground":r=C;break;default:r=F}else switch(e.layerContainerType){case"basemap":r=h;break;case"tables":r=B;break;default:r=V}return r}async function E(e,r,y){const t=new M,n=W(t,Array.isArray(r.layers)?r.layers:[],y),a=await e;if(await n,a.type==="group")return a.layers.addMany(t),a}async function R(e,r,y){var c;const t=L.FeatureLayer,n=await t(),a=r.featureCollection,i=a==null?void 0:a.showLegend,o=(c=a==null?void 0:a.layers)==null?void 0:c.map((l,s)=>{var I,d;const S=new n;S.read(l,y);const u={...y,ignoreDefaults:!0};return S.read({id:`${e.id}-sublayer-${s}`,visibility:(d=(I=r.visibleLayers)==null?void 0:I.includes(s))!=null?d:!0},u),i!=null&&S.read({showLegend:i},u),S});e.layers.addMany(o!=null?o:[])}export{W as populateOperationalLayers};
