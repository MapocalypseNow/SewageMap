import{v as o,Y as f,j as w,aN as p,aO as n,ee as y,L as _,B as V,D as v}from"./index.js";import{i as C}from"./utils.js";import{r as b}from"./GroupContainer.js";import{y as H,u as T}from"./LayerView.js";import{i as g}from"./GraphicContainer.js";import{o as d}from"./BaseGraphicContainer.js";import"./Utils2.js";import"./enums2.js";import"./enums.js";import"./Texture.js";import"./VertexElementDescriptor.js";import"./MaterialKey.js";import"./WGLContainer.js";import"./pixelUtils.js";import"./VertexArrayObject.js";import"./ProgramTemplate.js";import"./StyleDefinition.js";import"./config.js";import"./GeometryUtils2.js";import"./earcut.js";import"./ExpandedCIM.js";import"./BidiEngine.js";import"./Rect.js";import"./GeometryUtils.js";import"./floatRGBA.js";import"./normalizeUtilsSync.js";import"./projectionSupport.js";import"./json.js";import"./FeatureContainer.js";import"./TileContainer.js";import"./visualVariablesUtils.js";import"./visualVariablesUtils2.js";import"./Matcher.js";import"./tileUtils.js";import"./TileClipper.js";import"./Geometry.js";import"./devEnvironmentUtils.js";import"./schemaUtils.js";import"./createSymbolSchema.js";import"./util.js";import"./ComputedAttributeStorage.js";import"./centroid.js";import"./vec3f32.js";const m="sublayers",l="layerView",I=Object.freeze({remove(){},pause(){},resume(){}});let c=class extends H(T){constructor(){super(...arguments),this._highlightIds=new Map,this.container=new b}async fetchPopupFeatures(i){return Array.from(this.graphicsViews(),t=>t.hitTest(i).filter(e=>!!e.popupTemplate)).flat()}*graphicsViews(){o(this._graphicsViewsFeatureCollectionMap)?yield*this._graphicsViewsFeatureCollectionMap.keys():o(this._graphicsViews)?yield*this._graphicsViews:yield*[]}async hitTest(i,t){return Array.from(this.graphicsViews(),e=>{const r=e.hitTest(i);if(o(this._graphicsViewsFeatureCollectionMap)){const h=this._graphicsViewsFeatureCollectionMap.get(e);for(const s of r)!s.popupTemplate&&h.popupTemplate&&(s.popupTemplate=h.popupTemplate),s.sourceLayer=s.layer=this.layer}return r}).flat().map(e=>({type:"graphic",graphic:e,layer:this.layer,mapPoint:i}))}highlight(i){let t;return typeof i=="number"?t=[i]:i instanceof f?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(e=>e&&e.uid):w.isCollection(i)&&(t=i.map(e=>e&&e.uid).toArray()),t=t.filter(e=>e!=null),t.length?(this._addHighlight(t),{remove:()=>{this._removeHighlight(t)}}):I}update(i){for(const t of this.graphicsViews())t.processUpdate(i)}attach(){const i=this.view,t=()=>this.requestUpdate(),e=this.layer.featureCollections;if(o(e)&&e.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const r of e){const h=new g(this.view.featuresTilingScheme),s=new d({view:i,graphics:r.source,renderer:r.renderer,requestUpdateCallback:t,container:h});this._graphicsViewsFeatureCollectionMap.set(s,r),this.container.addChild(s.container),this.handles.add([p(()=>r.visible,a=>s.container.visible=a,n),p(()=>s.updating,()=>this.notifyChange("updating"),n)],l)}this._updateHighlight()}else o(this.layer.sublayers)&&this.handles.add(y(()=>this.layer.sublayers,"change",()=>this._createGraphicsViews(),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),m)}detach(){this._destroyGraphicsViews(),this.handles.remove(m)}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews())i.viewChange()}isUpdating(){for(const i of this.graphicsViews())if(i.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.handles.remove(l);for(const i of this.graphicsViews())i.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),_(this.layer.sublayers))return;const i=[],t=this.view,e=()=>this.requestUpdate();for(const r of this.layer.sublayers){const h=new C,s=new g(this.view.featuresTilingScheme);s.fadeTransitionEnabled=!0;const a=new d({view:t,graphics:r.graphics,requestUpdateCallback:e,container:s});this.handles.add([r.on("graphic-update",a.graphicUpdateHandler),p(()=>r.visible,u=>a.container.visible=u,n),p(()=>a.updating,()=>this.notifyChange("updating"),n)],l),h.addChild(a.container),this.container.addChild(h),i.push(a)}this._graphicsViews=i,this._updateHighlight()}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;e===0?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_updateHighlight(){const i=Array.from(this._highlightIds.keys());for(const t of this.graphicsViews())t.setHighlight(i)}};c=V([v("esri.views.2d.layers.MapNotesLayerView2D")],c);const fi=c;export{fi as default};