import{f as r,y as o,eH as g,A as m,ef as l,aj as d,O as u,aE as c}from"./index.js";import{a as y}from"./BitmapContainer.js";import{f,u as x}from"./LayerView.js";import{a as w}from"./BaseGraphicContainer.js";import{n as v}from"./HighlightGraphicContainer.js";import{v as H}from"./ExportStrategy.js";import{c as _}from"./ExportImageParameters.js";import{i as I}from"./RefreshableLayerView.js";import{S as V,a as P}from"./drapedUtils.js";import"./WGLContainer.js";import"./definitions.js";import"./VertexArrayObject.js";import"./Texture.js";import"./enums.js";import"./VertexElementDescriptor.js";import"./color.js";import"./enums2.js";import"./ProgramTemplate.js";import"./MaterialKey.js";import"./utils.js";import"./StyleDefinition.js";import"./config.js";import"./GeometryUtils2.js";import"./Container.js";import"./earcut.js";import"./ExpandedCIM.js";import"./BidiEngine.js";import"./GeometryUtils.js";import"./Rect.js";import"./floatRGBA.js";import"./normalizeUtilsSync.js";import"./projectionSupport.js";import"./json.js";import"./FeatureContainer.js";import"./TileContainer.js";import"./visualVariablesUtils.js";import"./visualVariablesUtils2.js";import"./Matcher.js";import"./tileUtils.js";import"./TurboLine.js";import"./devEnvironmentUtils.js";import"./schemaUtils.js";import"./createSymbolSchema.js";import"./util.js";import"./ComputedAttributeStorage.js";import"./ArcadeDate.js";import"./executionError.js";import"./arcadeTimeUtils.js";import"./centroid.js";import"./vec3f32.js";import"./Bitmap.js";import"./floorFilterUtils.js";import"./sublayerUtils.js";import"./popupUtils.js";const U=t=>{let e=class extends t{initialize(){this.exportImageParameters=new _({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){var i,a;return(a=(i=this.view)==null?void 0:i.floors)!=null?a:null}get exportImageVersion(){var i;return(i=this.exportImageParameters)==null||i.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}canResume(){var i;return!!super.canResume()&&!((i=this.timeExtent)!=null&&i.isEmpty)}};return r([o()],e.prototype,"exportImageParameters",void 0),r([o({readOnly:!0})],e.prototype,"floors",null),r([o({readOnly:!0})],e.prototype,"exportImageVersion",null),r([o()],e.prototype,"layer",void 0),r([o()],e.prototype,"suspended",void 0),r([o(g)],e.prototype,"timeExtent",void 0),e=r([m("esri.views.layers.MapImageLayerView")],e),e};let s=class extends U(I(f(x))){constructor(){super(...arguments),this._highlightGraphics=new l,this._updateHash=""}fetchPopupFeatures(t,e){return this._popupHighlightHelper.fetchPopupFeatures(t,e)}update(t){const e=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==e&&(this._updateHash=e,this.strategy.update(t).catch(i=>{d(i)||u.getLogger(this.declaredClass).error(i)}),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t)}attach(){const{imageMaxWidth:t,imageMaxHeight:e,version:i}=this.layer,a=i>=10.3,n=i>=10;this._bitmapContainer=new y,this.container.addChild(this._bitmapContainer),this._highlightView=new w({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new v(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new V({createFetchPopupFeaturesQueryGeometry:(p,h)=>P(p,h,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(p,h)=>{this._highlightView.graphicUpdateHandler({graphic:p,property:h})},layerView:this,updatingHandles:this.updatingHandles}),this.strategy=new H({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:e,imageRotationSupported:a,imageNormalizationSupported:n,hidpi:!0}),this.addAttachHandles(c(()=>this.exportImageVersion,()=>this.requestUpdate())),this.requestUpdate()}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,i,a){return this.layer.fetchImage(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...a})}fetchImageBitmap(t,e,i,a){return this.layer.fetchImageBitmap(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...a})}highlight(t){return this._popupHighlightHelper.highlight(t)}};r([o()],s.prototype,"strategy",void 0),r([o()],s.prototype,"updating",void 0),s=r([m("esri.views.2d.layers.MapImageLayerView2D")],s);const Ct=s;export{Ct as default};
