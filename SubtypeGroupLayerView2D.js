import{e as d,j as u,az as y,aA as m,h,r as b,eq as c}from"./index.js";import g from"./FeatureLayerView2D.js";import"./Container.js";import"./definitions.js";import"./enums.js";import"./Texture.js";import"./LayerView.js";import"./schemaUtils.js";import"./color.js";import"./enums2.js";import"./VertexElementDescriptor.js";import"./utils.js";import"./MaterialKey.js";import"./visualVariablesUtils2.js";import"./createSymbolSchema.js";import"./ExpandedCIM.js";import"./BidiEngine.js";import"./GeometryUtils.js";import"./Rect.js";import"./floatRGBA.js";import"./util.js";import"./floorFilterUtils.js";import"./popupUtils.js";import"./RefreshableLayerView.js";function f(i,e){return!i.visible||i.minScale!==0&&e>i.minScale||i.maxScale!==0&&e<i.maxScale}let a=class extends g{initialize(){this.addHandles([y(()=>this.view.scale,()=>this._update(),m)],"constructor")}isUpdating(){var o;const i=this.layer.sublayers.some(p=>p.renderer!=null),e=this._commandsQueue.updating,s=this._updatingRequiredFieldsPromise!=null,t=!this._proxy||!this._proxy.isReady,r=this._pipelineIsUpdating,n=this.tileRenderer==null||((o=this.tileRenderer)==null?void 0:o.updating),l=i&&(e||s||t||r||n);return h("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${l}
  -> hasRenderer ${i}
  -> hasPendingCommand ${e}
  -> updatingRequiredFields ${s}
  -> updatingProxy ${t}
  -> updatingPipeline ${r}
  -> updatingTileRenderer ${n}
`),l}_injectOverrides(i){let e=super._injectOverrides(i);const s=this.view.scale,t=this.layer.sublayers.filter(n=>f(n,s)).map(n=>n.subtypeCode);if(!t.length)return e;e=b(e)?e:new c().toJSON();const r=`NOT ${this.layer.subtypeField} IN (${t.join(",")})`;return e.where=e.where?`(${e.where}) AND (${r})`:r,e}_setLayersForFeature(i){const e=this.layer.fieldsIndex.get(this.layer.subtypeField),s=i.attributes[e.name],t=this.layer.sublayers.find(r=>r.subtypeCode===s);i.layer=i.sourceLayer=t}_createSchemaConfig(){const i={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map(r=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:r.labelingInfo,labelsVisible:r.labelsVisible,renderer:r.renderer,subtypeCode:r.subtypeCode,orderBy:null}))},e=this.layer.sublayers.map(r=>r.subtypeCode).join(","),s=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${e})`:"1=2";let t=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return t+=s,{...super._createSchemaConfig(),...i,definitionExpression:t}}};a=d([u("esri.views.2d.layers.SubtypeGroupLayerView2D")],a);const G=a;export{G as default};
