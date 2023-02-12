import{B as t,C as s,D as d,dd as q,Z as A,e6 as O,w as V,bi as x,j as C,ed as I,s as N,aN as y,dw as h,ee as U,aT as j,bz as L,ef as M,aJ as T,aV as _,a2 as E,bX as P}from"./index.2901469c.js";import{i as D}from"./utils.4edbb65b.js";let v=class extends q{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};t([s({readOnly:!0})],v.prototype,"version",null),v=t([d("esri.views.layers.support.ClipArea")],v);const R=v;var w;let l=w=class extends R{constructor(e){super(e),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new w({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};t([s({type:[Number,String],json:{write:!0}})],l.prototype,"left",void 0),t([s({type:[Number,String],json:{write:!0}})],l.prototype,"right",void 0),t([s({type:[Number,String],json:{write:!0}})],l.prototype,"top",void 0),t([s({type:[Number,String],json:{write:!0}})],l.prototype,"bottom",void 0),l=w=t([d("esri.views.layers.support.ClipRect")],l);const k=l;var b;const z={base:O,key:"type",typeMap:{extent:V,polygon:x}};let g=b=class extends R{constructor(e){super(e),this.type="geometry",this.geometry=null}clone(){var e,r;return new b({geometry:(r=(e=this.geometry)==null?void 0:e.clone())!=null?r:null})}commitVersionProperties(){this.commitProperty("geometry")}};t([s({types:z,json:{read:A,write:!0}})],g.prototype,"geometry",void 0),g=b=t([d("esri.views.layers.support.Geometry")],g);const B=g;let m=class extends R{constructor(e){super(e),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};t([s({type:[[[Number]]],json:{write:!0}})],m.prototype,"path",void 0),m=t([d("esri.views.layers.support.Path")],m);const F=m,f=C.ofType({key:"type",base:null,typeMap:{rect:k,path:F,geometry:B}}),J=e=>{let r=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new f,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1}initialize(){var p,u,S,$;const i=(u=(p=this.view)==null?void 0:p.spatialReferenceLocked)!=null?u:!0;((S=this.view)==null?void 0:S.spatialReference)&&i&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new N("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new D),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.handles.add([y(()=>this.suspended,a=>{this.container&&(this.container.visible=!a),this.view&&!a&&this.updateRequested&&this.view.requestUpdate()},h),y(()=>{var a,c;return(c=(a=this.layer)==null?void 0:a.opacity)!=null?c:1},a=>{this.container&&(this.container.opacity=a)},h),y(()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal",a=>{this.container&&(this.container.blendMode=a)},h),y(()=>this.layer&&"effect"in this.layer?this.layer.effect:null,a=>{this.container&&(this.container.effect=a)},h),U(()=>this.clips,"change",()=>{this.container&&(this.container.clips=this.clips)},h),y(()=>{var a;return{scale:(a=this.view)==null?void 0:a.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}},({scale:a})=>{const c=a&&this.isVisibleAtScale(a);c!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",c)},h)]),($=this.view)!=null&&$.whenLayerView?this.view.whenLayerView(this.layer).then(a=>{a===this&&this.processAttach()},()=>{}):this.when().then(()=>{this.processAttach()},()=>{}))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){var o;const i=(o=this.view)==null?void 0:o.spatialReference;return i==null||this.supportsSpatialReference(i)}get updating(){var i;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!((i=this.updatingHandles)!=null&&i.updating))}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.detach(),this.updateRequested=!1)}isVisibleAtScale(i){const o=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!o)return!0;const{minScale:p,maxScale:u}=o;return(p===0||i<=p)&&(u===0||i>=u)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(i){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",i),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(i))):this.updateRequested=!1}hitTest(i,o){return Promise.resolve(null)}supportsSpatialReference(i){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const i=super.getSuspendInfo(),o=!this.spatialReferenceSupported,p=this.visibleAtCurrentScale;return o&&(i.spatialReferenceNotSupported=o),p&&(i.outsideScaleRange=p),i}};return t([s()],r.prototype,"attached",void 0),t([s({type:f,set(i){const o=I(i,this._get("clips"),f);this._set("clips",o)}})],r.prototype,"clips",void 0),t([s()],r.prototype,"container",void 0),t([s()],r.prototype,"moving",void 0),t([s({readOnly:!0})],r.prototype,"spatialReferenceSupported",null),t([s({readOnly:!0})],r.prototype,"updateParameters",void 0),t([s()],r.prototype,"updateRequested",void 0),t([s()],r.prototype,"updating",null),t([s()],r.prototype,"view",void 0),t([s({readOnly:!0})],r.prototype,"visibleAtCurrentScale",void 0),r=t([d("esri.views.2d.layers.LayerView2D")],r),r};let n=class extends j(L(M(T.EventedMixin(_)))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch(e=>{if(e.name!=="layerview:create-error"){const r=this.layer&&this.layer.id||"no id",i=this.layer&&this.layer.title||"no title";E.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${r}')`,e)}})}get fullOpacity(){return P(this.get("layer.opacity"),1)*P(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&((e=this.layer)==null?void 0:e.legendEnabled)===!0}get updating(){var e;return!(!((e=this.updatingHandles)!=null&&e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return((e=this.layer)==null?void 0:e.visible)===!0}set visible(e){this._overrideIfSome("visible",e)}canResume(){var e,r,i;return this.visible&&((e=this.layer)==null?void 0:e.loaded)&&!((r=this.parent)!=null&&r.suspended)&&((i=this.view)==null?void 0:i.ready)||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{},r=this;return r.view&&r.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};t([s()],n.prototype,"fullOpacity",null),t([s()],n.prototype,"layer",void 0),t([s()],n.prototype,"parent",void 0),t([s({readOnly:!0})],n.prototype,"suspended",null),t([s({readOnly:!0})],n.prototype,"suspendInfo",null),t([s({readOnly:!0})],n.prototype,"legendEnabled",null),t([s({type:Boolean,readOnly:!0})],n.prototype,"updating",null),t([s({readOnly:!0})],n.prototype,"updatingProgress",null),t([s()],n.prototype,"visible",null),t([s()],n.prototype,"view",void 0),n=t([d("esri.views.layers.LayerView")],n);const X=n;export{X as u,J as y};
