import{mh as a,f as m,G as l,dP as h}from"./vendor.f8a4aecc.js";import{n as p}from"./BitmapTileContainer.343d5d22.js";import{o as d}from"./BaseTileRenderer.49c4a5b8.js";import"./Bitmap.f76d382c.js";import"./Container.edf2e803.js";import"./definitions.1d569ae6.js";import"./enums.3c1fa5b5.js";import"./Texture.1db32977.js";import"./TileContainer.65e93271.js";import"./color.1638605e.js";import"./enums.9a5c29c3.js";import"./VertexElementDescriptor.5da9dfe9.js";import"./WGLContainer.65e67344.js";import"./VertexArrayObject.e7a7b75d.js";import"./ProgramTemplate.6a189101.js";import"./MaterialKey.04e0f9bd.js";import"./utils.370c18a5.js";import"./StyleDefinition.dc47b5d4.js";import"./config.86ceb802.js";import"./GeometryUtils.ccd3b111.js";import"./earcut.a219bf29.js";class c{constructor(){this.gradient=null,this.height=512,this.intensities=null,this.width=512}render(i){a(i,512,this.intensities,this.gradient,this.minDensity,this.maxDensity)}}let o=class extends d{constructor(t){super(t),this._intensityInfo={minDensity:0,maxDensity:0},this.type="heatmap",this.featuresView={attributeView:{initialize:()=>{},requestUpdate:()=>{}},requestRender:()=>{}},this._container=new p(t.tileInfoView)}createTile(t){const i=this._container.createTile(t);return this.tileInfoView.getTileCoords(i.bitmap,t),i.bitmap.resolution=this.tileInfoView.getTileResolution(t),i}onConfigUpdate(){const t=this.layer.renderer;if(t.type==="heatmap"){const{minDensity:i,maxDensity:s,colorStops:r}=t;this._intensityInfo.minDensity=i,this._intensityInfo.maxDensity=s,this._gradient=h(r),this.tiles.forEach(n=>{const e=n.bitmap.source;e&&(e.minDensity=i,e.maxDensity=s,e.gradient=this._gradient,n.bitmap.invalidateTexture())})}}hitTest(){return Promise.resolve([])}install(t){t.addChild(this._container)}uninstall(t){this._container.removeAllChildren(),t.removeChild(this._container)}disposeTile(t){this._container.removeChild(t),t.destroy()}supportsRenderer(t){return t&&t.type==="heatmap"}onTileData(t){const i=this.tiles.get(t.tileKey);if(!i)return;const s=t.intensityInfo,{minDensity:r,maxDensity:n}=this._intensityInfo,e=i.bitmap.source||new c;e.intensities=s&&s.matrix||null,e.minDensity=r,e.maxDensity=n,e.gradient=this._gradient,i.bitmap.source=e,this._container.addChild(i),this._container.requestRender(),this.requestUpdate()}onTileError(t){console.error(t)}lockGPUUploads(){}unlockGPUUploads(){}fetchResource(t,i){return console.error(t),Promise.reject()}};o=m([l("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],o);const E=o;export{E as default};
