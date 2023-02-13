import{e as i,y as r,j as m,m as w,x as S,r as p,A as O,w as F,en as b,h as I,e8 as q,jn as N,iG as _,H as x,jo as j,f as J,bx as C,L as P,p as c,b as g}from"./index.js";let a=class extends w{constructor(e){super(e),this.type="csv",this.refresh=S(async t=>{await this.load();const{extent:o,timeExtent:n}=await this._connection.invoke("refresh",t);return o&&(this.sourceJSON.extent=o),n&&(this.sourceJSON.timeInfo.timeExtent=[n.start,n.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}})}load(e){const t=p(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;(e=this._connection)==null||e.close(),this._connection=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e,t={}){await this.load(t);const o=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return O.fromJSON(o)}async queryFeaturesJSON(e,t={}){return await this.load(t),this._connection.invoke("queryFeatures",e?e.toJSON():null,t)}async queryFeatureCount(e,t={}){return await this.load(t),this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)}async queryObjectIds(e,t={}){return await this.load(t),this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)}async queryExtent(e,t={}){await this.load(t);const o=await this._connection.invoke("queryExtent",e?e.toJSON():null,t);return{count:o.count,extent:F.fromJSON(o.extent)}}async querySnapping(e,t={}){return await this.load(t),this._connection.invoke("querySnapping",e,t)}async _startWorker(e){this._connection=await b("CSVSourceWorker",{strategy:I("feature-layers-workers")?"dedicated":"local",signal:e});const{url:t,delimiter:o,fields:n,latitudeField:u,longitudeField:d,spatialReference:l,timeInfo:h}=this.loadOptions,y=await this._connection.invoke("load",{url:t,customParameters:this.customParameters,parsingOptions:{delimiter:o,fields:n==null?void 0:n.map(v=>v.toJSON()),latitudeField:u,longitudeField:d,spatialReference:l==null?void 0:l.toJSON(),timeInfo:h==null?void 0:h.toJSON()}},{signal:e});this.locationInfo=y.locationInfo,this.sourceJSON=y.layerDefinition,this.delimiter=y.delimiter}};i([r()],a.prototype,"type",void 0),i([r()],a.prototype,"loadOptions",void 0),i([r()],a.prototype,"customParameters",void 0),i([r()],a.prototype,"locationInfo",void 0),i([r()],a.prototype,"sourceJSON",void 0),i([r()],a.prototype,"delimiter",void 0),a=i([m("esri.layers.graphics.sources.CSVSource")],a);function f(e,t){throw new g(t,`CSVLayer (title: ${e.title}, id: ${e.id}) cannot be saved to a portal item`)}let s=class extends x{constructor(...e){super(...e),this.geometryType="point",this.capabilities=j(!1,!1),this.delimiter=null,this.editingEnabled=!1,this.fields=null,this.latitudeField=null,this.locationType="coordinates",this.longitudeField=null,this.operationalLayerType="CSV",this.outFields=["*"],this.path=null,this.spatialReference=J.WGS84,this.source=null,this.type="csv"}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){const t=p(e)?e.signal:null,o=this.loadFromPortal({supportedTypes:["CSV"],supportsData:!1},e).catch(C).then(async()=>this.initLayerProperties(await this.createGraphicsSource(t)));return this.addResolvingPromise(o),Promise.resolve(this)}get isTable(){return this.loaded&&this.geometryType==null}readWebMapLabelsVisible(e,t){return t.showLabels!=null?t.showLabels:!!(t.layerDefinition&&t.layerDefinition.drawingInfo&&t.layerDefinition.drawingInfo.labelingInfo)}set url(e){if(!e)return void this._set("url",e);const t=P(e);this._set("url",t.path),t.query&&(this.customParameters={...this.customParameters,...t.query})}async createGraphicsSource(e){var o,n,u,d,l;const t=new a({loadOptions:{delimiter:this.delimiter,fields:this.fields,latitudeField:(o=this.latitudeField)!=null?o:void 0,longitudeField:(n=this.longitudeField)!=null?n:void 0,spatialReference:(u=this.spatialReference)!=null?u:void 0,timeInfo:(d=this.timeInfo)!=null?d:void 0,url:this.url},customParameters:(l=this.customParameters)!=null?l:void 0});return this._set("source",t),await t.load({signal:e}),this.read({locationInfo:t.locationInfo,columnDelimiter:t.delimiter},{origin:"service",url:this.parsedUrl}),t}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(c.from(e)||this.createQuery())).then(o=>{if(o!=null&&o.features)for(const n of o.features)n.layer=n.sourceLayer=this;return o})}queryObjectIds(e,t){return this.load().then(()=>this.source.queryObjectIds(c.from(e)||this.createQuery()))}queryFeatureCount(e,t){return this.load().then(()=>this.source.queryFeatureCount(c.from(e)||this.createQuery()))}queryExtent(e,t){return this.load().then(()=>this.source.queryExtent(c.from(e)||this.createQuery()))}read(e,t){super.read(e,t),t&&t.origin==="service"&&this.revert(["latitudeField","longitudeField"],"service")}write(e,t){return super.write(e,{...t,writeLayerSchema:!0})}clone(){throw new g("csv-layer:clone",`CSVLayer (title: ${this.title}, id: ${this.id}) cannot be cloned`)}async save(e){return f(this,"csv-layer:save")}async saveAs(e,t){return f(this,"csv-layer:save-as")}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return p(t)&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}_verifyFields(){}_verifySource(){}_hasMemorySource(){return!1}};i([r({readOnly:!0,json:{read:!1,write:!1}})],s.prototype,"capabilities",void 0),i([r({type:[","," ",";","|","	"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],s.prototype,"delimiter",void 0),i([r({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],s.prototype,"editingEnabled",void 0),i([r({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],s.prototype,"fields",void 0),i([r({type:Boolean,readOnly:!0})],s.prototype,"isTable",null),i([q("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],s.prototype,"readWebMapLabelsVisible",null),i([r({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],s.prototype,"latitudeField",void 0),i([r({type:["show","hide"]})],s.prototype,"listMode",void 0),i([r({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"locationType",void 0),i([r({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],s.prototype,"longitudeField",void 0),i([r({type:["CSV"]})],s.prototype,"operationalLayerType",void 0),i([r()],s.prototype,"outFields",void 0),i([r({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],s.prototype,"path",void 0),i([r({json:{read:!1},cast:null,type:a,readOnly:!0})],s.prototype,"source",void 0),i([r({json:{read:!1},value:"csv",readOnly:!0})],s.prototype,"type",void 0),i([r({json:{read:N,write:{isRequired:!0,ignoreOrigin:!0,writer:_}}})],s.prototype,"url",null),s=i([m("esri.layers.CSVLayer")],s);const D=s;export{D as default};
