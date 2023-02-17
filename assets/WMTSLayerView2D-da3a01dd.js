import{fn as w,fo as g,fp as I,aH as S,dy as f,be as h,dv as d,ax as v,a8 as n,a9 as m,aa as T}from"./vendor-445d19db.js";import{t as x,n as y}from"./imageUtils-b3620f70.js";import{y as V,u as M}from"./LayerView-2f4bfb36.js";import{i as q}from"./RefreshableLayerView-10331e5a.js";import"./BitmapTileContainer-f310c073.js";import"./Bitmap-3ffc06b2.js";import"./utils-6396d15b.js";import"./enums-4ca4641f.js";import"./MaterialKey-5504317a.js";import"./Utils-cdacad72.js";import"./enums-8bf08d0c.js";import"./enums-64ab819c.js";import"./Texture-a2352f23.js";import"./VertexElementDescriptor-2925c6af.js";import"./TileContainer-9841958d.js";import"./WGLContainer-7f535211.js";import"./pixelUtils-9c524314.js";import"./VertexArrayObject-2a5c5453.js";import"./ProgramTemplate-c51bbb20.js";import"./StyleDefinition-3c6a4c69.js";import"./config-1337d16e.js";import"./GeometryUtils-c093d234.js";import"./earcut-58237617.js";const R=[102113,102100,3857,3785,900913],b=[0,0];let a=class extends q(x(V(M))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this._tileRequests=new Map,this.layer=null}get tileMatrixSet(){const e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(e.id!==this.layer.activeLayer.tileMatrixSetId&&(this.layer.activeLayer.tileMatrixSetId=e.id),e):null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume()}attach(){if(!this.tileMatrixSet)return;const{tileInfo:e}=this.tileMatrixSet;this._tileInfoView=new w(e),this._fetchQueue=new g({tileInfoView:this._tileInfoView,concurrency:16,process:(t,i)=>this.fetchTile(t,i)}),this._tileStrategy=new I({cachePolicy:"keep",resampling:!0,acquireTile:t=>this.acquireTile(t),releaseTile:t=>this.releaseTile(t),tileInfoView:this._tileInfoView}),this.handles.add(S(()=>{var t,i;return[(i=(t=this.layer)==null?void 0:t.activeLayer)==null?void 0:i.styleId,this.tileMatrixSet]},()=>this._refresh()),this.declaredClass),super.attach()}detach(){var e,t;super.detach(),this.handles.remove(this.declaredClass),(e=this._tileStrategy)==null||e.destroy(),(t=this._fetchQueue)==null||t.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",()=>e.destroy()),this.requestUpdate()}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(b,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}async doRefresh(){!this.attached||this.updateRequested||this.suspended||this._refresh()}isUpdating(){var e;return((e=this._fetchQueue)==null?void 0:e.updating)??!1}async fetchTile(e,t={}){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:s,resamplingLevel:o=0}=t;if(!i)return this._fetchImage(e,s);const r=new f(0,0,0,0);let u;try{await i.fetchAvailabilityUpsample(e.level,e.row,e.col,r,{signal:s}),u=await this._fetchImage(r,s)}catch(l){if(h(l))throw l;if(o<3){const c=this._tileInfoView.getTileParentId(e.id);if(c){const p=new f(c),_=await this.fetchTile(p,{...t,resamplingLevel:o+1});return y(this._tileInfoView,_,p,e)}}throw l}return y(this._tileInfoView,u,r,e)}canResume(){const e=super.canResume();return e&&this.tileMatrixSet!==null}supportsSpatialReference(e){return this.layer.activeLayer.tileMatrixSets.some(t=>d(t.tileInfo.spatialReference,e))}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",()=>this.requestUpdate())}catch(t){h(t)||v.getLogger(this.declaredClass).error(t)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})}_refresh(){this._fetchQueue.reset(),this._tileStrategy.tiles.forEach(e=>{if(!e.bitmap.source)return;const t={id:e.key.id,fulfilled:!1,promise:this._fetchQueue.push(e.key).then(i=>{e.bitmap.source=i}).catch(i=>{h(i)||(e.bitmap.source=null)}).finally(()=>{e.requestRender(),t.fulfilled=!0})};this._tileRequests.set(e,t)})}_getTileMatrixSetBySpatialReference(e){const t=this.view.spatialReference;if(!e.tileMatrixSets)return null;let i=e.tileMatrixSets.find(s=>d(s.tileInfo.spatialReference,t));return!i&&t.isWebMercator&&(i=e.tileMatrixSets.find(s=>R.includes(s.tileInfo.spatialReference.wkid))),i}};n([m()],a.prototype,"_fetchQueue",void 0),n([m({readOnly:!0})],a.prototype,"tileMatrixSet",null),a=n([T("esri.views.2d.layers.WMTSLayerView2D")],a);const Z=a;export{Z as default};