import{kW as a,B as m,D as l,bS as h}from"./index.js";import{n as p}from"./BitmapTileContainer.js";import{o as d}from"./BaseTileRenderer.js";import"./Bitmap.js";import"./utils.js";import"./Utils2.js";import"./enums2.js";import"./enums.js";import"./Texture.js";import"./VertexElementDescriptor.js";import"./MaterialKey.js";import"./TileContainer.js";import"./WGLContainer.js";import"./pixelUtils.js";import"./VertexArrayObject.js";import"./ProgramTemplate.js";import"./StyleDefinition.js";import"./config.js";import"./GeometryUtils2.js";import"./earcut.js";class c{constructor(){this.gradient=null,this.height=512,this.width=512}render(i){a(i,512,this.intensities,this.gradient,this.minDensity,this.maxDensity)}}let o=class extends d{constructor(t){super(t),this._intensityInfo={minDensity:0,maxDensity:0},this.type="heatmap",this.featuresView={attributeView:{initialize:()=>{},requestUpdate:()=>{}},requestRender:()=>{}},this._container=new p(t.tileInfoView)}createTile(t){const i=this._container.createTile(t);return this.tileInfoView.getTileCoords(i.bitmap,t),i.bitmap.resolution=this.tileInfoView.getTileResolution(t),i}onConfigUpdate(){const t=this.layer.renderer;if(t.type==="heatmap"){const{minDensity:i,maxDensity:s,colorStops:r}=t;this._intensityInfo.minDensity=i,this._intensityInfo.maxDensity=s,this._gradient=h(r),this.tiles.forEach(n=>{const e=n.bitmap.source;e&&(e.minDensity=i,e.maxDensity=s,e.gradient=this._gradient,n.bitmap.invalidateTexture())})}}hitTest(){return Promise.resolve([])}install(t){t.addChild(this._container)}uninstall(t){this._container.removeAllChildren(),t.removeChild(this._container)}disposeTile(t){this._container.removeChild(t),t.destroy()}supportsRenderer(t){return t&&t.type==="heatmap"}onTileData(t){const i=this.tiles.get(t.tileKey);if(!i)return;const s=t.intensityInfo,{minDensity:r,maxDensity:n}=this._intensityInfo,e=i.bitmap.source||new c;e.intensities=s&&s.matrix||null,e.minDensity=r,e.maxDensity=n,e.gradient=this._gradient,i.bitmap.source=e,this._container.addChild(i),this._container.requestRender(),this.requestUpdate()}onTileError(t){console.error(t)}lockGPUUploads(){}unlockGPUUploads(){}fetchResource(t,i){return console.error(t),Promise.reject()}};o=m([l("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],o);const E=o;export{E as default};