import{m as l,fg as m,K as a,at as u,P as _,as as c,aB as n,aC as d,aD as w}from"./vendor-f61b19da.js";import{b as y,h as f,O as k,g as v,f as M,a as I,D as V}from"./Stop-922aff9a.js";import{y as G,u as F}from"./LayerView-db230c5b.js";import{i as C}from"./GraphicContainer-e4fd1e04.js";import{o as H}from"./BaseGraphicContainer-8fd74117.js";import"./utils-073a76a7.js";import"./enums-4ca4641f.js";import"./MaterialKey-6fc95429.js";import"./Utils-823f2fe9.js";import"./definitions-315e9606.js";import"./enums-64ab819c.js";import"./Texture-a45928bd.js";import"./VertexElementDescriptor-2925c6af.js";import"./ExpandedCIM-387e7205.js";import"./BidiEngine-836b7ef6.js";import"./Rect-ea14f53a.js";import"./GeometryUtils-eebff0a0.js";import"./floatRGBA-51b72951.js";import"./normalizeUtilsSync-20aebf4d.js";import"./projectionSupport-d522253e.js";import"./json-48e3ea08.js";import"./VertexArrayObject-336b55d9.js";import"./FeatureContainer-d2ba38b3.js";import"./TileContainer-ef5effe6.js";import"./WGLContainer-78c0e7a1.js";import"./pixelUtils-e7c1af11.js";import"./ProgramTemplate-0eca8760.js";import"./StyleDefinition-beb706e3.js";import"./config-1337d16e.js";import"./GeometryUtils-c093d234.js";import"./earcut-58237617.js";import"./visualVariablesUtils-69d25540.js";import"./visualVariablesUtils-9b7ef877.js";import"./Matcher-341f1577.js";import"./tileUtils-f4264142.js";import"./TileClipper-5d3dda2e.js";import"./Geometry-daada628.js";import"./devEnvironmentUtils-5002a058.js";import"./schemaUtils-bf9f517f.js";import"./createSymbolSchema-59778335.js";import"./rendererUtils-ca5f4ebc.js";import"./util-b2f998f9.js";import"./ComputedAttributeStorage-f8b84bd3.js";import"./FeatureSetReader-d42fce40.js";import"./centroid-7bcd4b03.js";import"./vec3f32-4322908d.js";const b=Object.freeze({remove(){},pause(){},resume(){}}),U=["route-info","direction-line","direction-point","polygon-barrier","polyline-barrier","point-barrier","stop"],h={graphic:null,property:null,oldValue:null,newValue:null};function g(t){return t instanceof y||t instanceof f||t instanceof k||t instanceof v||t instanceof M||t instanceof I||t instanceof V}function A(t){return l.isCollection(t)&&t.length&&g(t.getItemAt(0))}function $(t){return Array.isArray(t)&&t.length&&g(t[0])}let o=class extends G(F){constructor(){super(...arguments),this._graphics=new l,this._highlightIds=new Map,this._networkFeatureMap=new Map,this._networkGraphicMap=new Map}get _routeItems(){return new m({getCollections:()=>a(this.layer)&&!this.destroyed?[a(this.layer.routeInfo)?new l([this.layer.routeInfo]):null,this.layer.directionLines,this.layer.directionPoints,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.pointBarriers,this.layer.stops]:[]})}initialize(){this.updatingHandles.addOnCollectionChange(()=>this._routeItems,t=>this._routeItemsChanged(t),u)}destroy(){var t;this.handles.removeAll(),this.updatingHandles.removeAll(),this._networkFeatureMap.clear(),this._networkGraphicMap.clear(),this._graphics.removeAll(),(t=this._get("_routeItems"))==null||t.destroy()}attach(){this._createGraphicsView()}detach(){this._destroyGraphicsView()}async fetchPopupFeatures(t){return this._graphicsView.hitTest(t).filter(e=>!!e.popupTemplate)}highlight(t){let e;e=g(t)?[this._getNetworkFeatureUid(t)]:$(t)?t.map(r=>this._getNetworkFeatureUid(r)):A(t)?t.map(r=>this._getNetworkFeatureUid(r)).toArray():[t.uid];const i=e.filter(a);return i.length?(this._addHighlight(i),{remove:()=>this._removeHighlight(i)}):b}async hitTest(t,e){if(this.suspended)return null;const i=this._graphicsView.hitTest(t).filter(a).map(s=>this._networkGraphicMap.get(s));if(!i.length)return null;const{layer:r}=this;return i.reverse().map(s=>({type:"route",layer:r,mapPoint:t,networkFeature:s}))}isUpdating(){return this._graphicsView.updating}moveStart(){}moveEnd(){}update(t){this._graphicsView.processUpdate(t)}viewChange(){this._graphicsView.viewChange()}_addHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e);this._highlightIds.set(e,i+1)}else this._highlightIds.set(e,1);this._updateHighlight()}_createGraphic(t){const e=t.toGraphic();return e.layer=this.layer,e.sourceLayer=this.layer,e}_createGraphicsView(){const t=this.view,e=()=>this.requestUpdate(),i=new C(t.featuresTilingScheme);this._graphicsView=new H({container:i,graphics:this._graphics,requestUpdateCallback:e,view:t}),this.container.addChild(i),this._updateHighlight()}_destroyGraphicsView(){this.container.removeChild(this._graphicsView.container),this._graphicsView.destroy()}_getDrawOrder(t){const e=this._networkGraphicMap.get(t);return U.indexOf(e.type)}_getNetworkFeatureUid(t){return this._networkFeatureMap.has(t)?this._networkFeatureMap.get(t).uid:null}_removeHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e)-1;i===0?this._highlightIds.delete(e):this._highlightIds.set(e,i)}this._updateHighlight()}_routeItemsChanged(t){if(t.removed.length){this._graphics.removeMany(t.removed.map(e=>{const i=this._networkFeatureMap.get(e);return this._networkFeatureMap.delete(e),this._networkGraphicMap.delete(i),i}));for(const e of t.removed)this.handles.remove(e)}if(t.added.length){this._graphics.addMany(t.added.map(e=>{const i=this._createGraphic(e);return _(i.symbol)?null:(this._networkFeatureMap.set(e,i),this._networkGraphicMap.set(i,e),i)}).filter(a));for(const e of t.added)this.handles.add([c(()=>e.geometry,(i,r)=>{this._updateGraphic(e,"geometry",i,r)}),c(()=>e.symbol,(i,r)=>{this._updateGraphic(e,"symbol",i,r)})],e);this._graphics.sort((e,i)=>this._getDrawOrder(e)-this._getDrawOrder(i))}}_updateGraphic(t,e,i,r){if(!this._networkFeatureMap.has(t)){const p=this._createGraphic(t);return this._networkFeatureMap.set(t,p),this._networkGraphicMap.set(p,t),void this._graphics.add(p)}const s=this._networkFeatureMap.get(t);s[e]=i,h.graphic=s,h.property=e,h.oldValue=r,h.newValue=i,this._graphicsView.graphicUpdateHandler(h)}_updateHighlight(){const t=Array.from(this._highlightIds.keys());this._graphicsView.setHighlight(t)}};n([d()],o.prototype,"_graphics",void 0),n([d()],o.prototype,"_routeItems",null),o=n([w("esri.views.2d.layers.RouteLayerView2D")],o);const Gt=o;export{Gt as default};
