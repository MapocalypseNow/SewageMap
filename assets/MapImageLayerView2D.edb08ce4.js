import{f as r,g as o,f8 as g,G as m,eG as l,ax as d,a2 as u,aT as c}from"./vendor.f8a4aecc.js";import{a as y}from"./BitmapContainer.167170d1.js";import{f,u as x}from"./LayerView.caf62521.js";import{a as w}from"./BaseGraphicContainer.a6b12718.js";import{n as v}from"./HighlightGraphicContainer.f53d6e92.js";import{v as _}from"./ExportStrategy.0d559821.js";import{c as H}from"./ExportImageParameters.d30e5688.js";import{i as I}from"./RefreshableLayerView.7d0750c4.js";import{S as V,a as P}from"./drapedUtils.59b86331.js";import"./WGLContainer.65e67344.js";import"./definitions.1d569ae6.js";import"./VertexArrayObject.e7a7b75d.js";import"./Texture.1db32977.js";import"./enums.3c1fa5b5.js";import"./VertexElementDescriptor.5da9dfe9.js";import"./color.1638605e.js";import"./enums.9a5c29c3.js";import"./ProgramTemplate.6a189101.js";import"./MaterialKey.04e0f9bd.js";import"./utils.370c18a5.js";import"./StyleDefinition.dc47b5d4.js";import"./config.86ceb802.js";import"./GeometryUtils.ccd3b111.js";import"./Container.edf2e803.js";import"./earcut.a219bf29.js";import"./ExpandedCIM.4718187a.js";import"./BidiEngine.f5b8c89f.js";import"./GeometryUtils.6fd53e6d.js";import"./Rect.e8e4d18d.js";import"./floatRGBA.751864de.js";import"./normalizeUtilsSync.58e80e7c.js";import"./projectionSupport.258a3ed3.js";import"./json.5152e73f.js";import"./FeatureContainer.abc30b30.js";import"./TileContainer.65e93271.js";import"./visualVariablesUtils.3cee809d.js";import"./visualVariablesUtils.fe2e172f.js";import"./Matcher.117df6ef.js";import"./tileUtils.dbdde791.js";import"./TurboLine.12a96cfa.js";import"./schemaUtils.a040cae2.js";import"./createSymbolSchema.11788a82.js";import"./util.05d7e1cf.js";import"./ComputedAttributeStorage.480bcf13.js";import"./ArcadeDate.026fbded.js";import"./executionError.c4c51b90.js";import"./arcadeTimeUtils.13859c15.js";import"./centroid.9e8a0f0b.js";import"./vec3f32.4d8dc001.js";import"./Bitmap.f76d382c.js";import"./floorFilterUtils.4de71259.js";import"./sublayerUtils.ac353a39.js";import"./popupUtils.f65f9528.js";const U=t=>{let e=class extends t{initialize(){this.exportImageParameters=new H({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){var i,a;return(a=(i=this.view)==null?void 0:i.floors)!=null?a:null}get exportImageVersion(){var i;return(i=this.exportImageParameters)==null||i.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}canResume(){var i;return!!super.canResume()&&!((i=this.timeExtent)!=null&&i.isEmpty)}};return r([o()],e.prototype,"exportImageParameters",void 0),r([o({readOnly:!0})],e.prototype,"floors",null),r([o({readOnly:!0})],e.prototype,"exportImageVersion",null),r([o()],e.prototype,"layer",void 0),r([o()],e.prototype,"suspended",void 0),r([o(g)],e.prototype,"timeExtent",void 0),e=r([m("esri.views.layers.MapImageLayerView")],e),e};let s=class extends U(I(f(x))){constructor(){super(...arguments),this._highlightGraphics=new l,this._updateHash=""}fetchPopupFeatures(t,e){return this._popupHighlightHelper.fetchPopupFeatures(t,e)}update(t){const e=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==e&&(this._updateHash=e,this.strategy.update(t).catch(i=>{d(i)||u.getLogger(this.declaredClass).error(i)}),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t)}attach(){const{imageMaxWidth:t,imageMaxHeight:e,version:i}=this.layer,a=i>=10.3,n=i>=10;this._bitmapContainer=new y,this.container.addChild(this._bitmapContainer),this._highlightView=new w({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new v(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new V({createFetchPopupFeaturesQueryGeometry:(p,h)=>P(p,h,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(p,h)=>{this._highlightView.graphicUpdateHandler({graphic:p,property:h})},layerView:this,updatingHandles:this.updatingHandles}),this.strategy=new _({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:e,imageRotationSupported:a,imageNormalizationSupported:n,hidpi:!0}),this.addAttachHandles(c(()=>this.exportImageVersion,()=>this.requestUpdate())),this.requestUpdate()}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,i,a){return this.layer.fetchImage(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...a})}fetchImageBitmap(t,e,i,a){return this.layer.fetchImageBitmap(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...a})}highlight(t){return this._popupHighlightHelper.highlight(t)}};r([o()],s.prototype,"strategy",void 0),r([o()],s.prototype,"updating",void 0),s=r([m("esri.views.2d.layers.MapImageLayerView2D")],s);const Ut=s;export{Ut as default};
