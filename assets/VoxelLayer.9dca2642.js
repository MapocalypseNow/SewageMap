import{gf as we,gl as de,hI as Ve,kI as he,aI as me,aA as Pe,fg as D,iV as $,iW as z,B as t,C as o,dc as Y,D as v,dd as g,iR as Be,iw as j,bT as B,j as c,ed as H,aQ as K,kJ as Q,a8 as G,a2 as je,k as $e,cv as ke,b3 as ze,gk as Ee,kK as Oe,a$ as oe,kL as Ce,kM as We,gn as Je,dh as Ue,di as Ge,dj as Ke,iu as Qe,dk as Xe,iG as Ye,jr as He,v as T,bD as Ze,s as re,w as Ie,iB as et,j2 as tt,dq as it,dn as ve,b as ot}from"./index.2901469c.js";import{N as rt}from"./SceneService.d4a3c71b.js";import{g as st}from"./persistable.a5195422.js";import{v as se,y as nt}from"./quat.8819a4b0.js";import{e as te}from"./quatf64.4ae3e6f1.js";import"./originUtils.2d0aad75.js";import"./multiOriginJSONSupportUtils.38b69b9c.js";import"./resourceUtils.b37acdb6.js";import"./mat3f64.6d32a1d7.js";const f=Pe(),ge=te(),fe=te(),be=te(),Re=new Float64Array([0,0,1]),lt=new Float64Array([0,1,0]),at=new Float64Array([1,0,0]);function k(e){we(f,e),de(f,f);const i=Math.atan2(f[1],f[0]),r=se(te(),Re,-i);Ve(f,f,r);const s=-1*Math.atan2(f[2],f[0]);return[he(i)+270,he(s)+90]}function Z(e,i){return se(fe,Re,me(e-270)),se(be,lt,me(i-90)),nt(ge,fe,be),we(f,at),Ve(f,f,ge),de(f,f),[f[0],f[1],f[2]]}let I=class extends D(g){constructor(e){super(e),this.enabled=!0,this.label="",this.normal=null,this.point=null}get orientation(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[e,i]=k(this.normal);return $.normalize(z(e),0,!0)}set orientation(e){const i=Z(e,this.tilt);this._set("normal",i),this._set("orientation",e)}get tilt(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[e,i]=k(this.normal);return $.normalize(z(i),0,!0)}set tilt(e){const i=Z(this.orientation,e);this._set("normal",i),this._set("tilt",e)}};t([o({type:Boolean,json:{write:!0}})],I.prototype,"enabled",void 0),t([o({type:String,json:{write:!0}})],I.prototype,"label",void 0),t([o({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),Y(e=>$.normalize(z(e),0,!0))],I.prototype,"orientation",null),t([o({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),Y(e=>$.normalize(z(e),0,!0))],I.prototype,"tilt",null),t([o({type:[Number],json:{write:!0}})],I.prototype,"normal",void 0),t([o({type:[Number],json:{write:!0}})],I.prototype,"point",void 0),I=t([v("esri.layers.voxel.VoxelSlice")],I);const ee=I;let b=class extends D(g){constructor(){super(...arguments),this.enabled=!0,this.href=null,this.id=null,this.label="",this.normal=null,this.point=null,this.sizeInPixel=null,this.slices=null,this.timeId=0,this.variableId=null}get orientation(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[e,i]=k(this.normal);return $.normalize(z(e),0,!0)}get tilt(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[e,i]=k(this.normal);return $.normalize(z(i),0,!0)}};t([o({type:Boolean,json:{default:!0,write:!0}})],b.prototype,"enabled",void 0),t([o({type:String,json:{origins:{service:{read:Be}},write:{enabled:!0,isRequired:!0}}}),st({origins:["web-scene"],type:"resource",prefix:"sections",compress:!0})],b.prototype,"href",void 0),t([o({type:j,json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"id",void 0),t([o({type:String,json:{write:!0}})],b.prototype,"label",void 0),t([o({type:Number,clonable:!1,readOnly:!0,range:{min:0,max:360}})],b.prototype,"orientation",null),t([o({type:Number,clonable:!1,readOnly:!0,range:{min:0,max:360}})],b.prototype,"tilt",null),t([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"normal",void 0),t([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"point",void 0),t([o({type:[j],json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"sizeInPixel",void 0),t([o({type:[ee],json:{write:!0}})],b.prototype,"slices",void 0),t([o({type:j,json:{default:0,write:!0}})],b.prototype,"timeId",void 0),t([o({type:j,json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"variableId",void 0),b=t([v("esri.layers.voxel.VoxelSection")],b);const ne=b;let O=class extends g{constructor(){super(...arguments),this.diffuseFactor=.5,this.specularFactor=.5}};t([o({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],O.prototype,"diffuseFactor",void 0),t([o({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],O.prototype,"specularFactor",void 0),O=t([v("esri.layers.voxel.VoxelSimpleShading")],O);const Ne=O;let R=class extends g{constructor(){super(...arguments),this.continuity=null,this.hasNoData=!1,this.noData=0,this.offset=0,this.scale=1,this.type=null}};t([o({type:["discrete","continuous"],json:{write:!0}})],R.prototype,"continuity",void 0),t([o({type:Boolean,json:{write:!0}})],R.prototype,"hasNoData",void 0),t([o({type:Number,json:{write:!0}})],R.prototype,"noData",void 0),t([o({type:Number,json:{write:!0}})],R.prototype,"offset",void 0),t([o({type:Number,json:{write:!0}})],R.prototype,"scale",void 0),t([o({type:String,json:{write:{enabled:!0,isRequired:!0}}})],R.prototype,"type",void 0),R=t([v("esri.layers.voxel.VoxelFormat")],R);const Se=R;let V=class extends g{constructor(){super(...arguments),this.id=null,this.description="",this.name=null,this.originalFormat=null,this.renderingFormat=null,this.unit="",this.volumeId=0,this.type=null}};t([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],V.prototype,"id",void 0),t([o({type:String,json:{write:!0}})],V.prototype,"description",void 0),t([o({type:String,json:{write:{enabled:!0,isRequired:!0}}})],V.prototype,"name",void 0),t([o({type:Se,json:{write:!0}})],V.prototype,"originalFormat",void 0),t([o({type:Se,json:{write:{enabled:!0,isRequired:!0}}})],V.prototype,"renderingFormat",void 0),t([o({type:String,json:{write:!0}})],V.prototype,"unit",void 0),t([o({type:Number,json:{write:!0}})],V.prototype,"volumeId",void 0),t([o({type:["stc-hot-spot-results","stc-cluster-outlier-results","stc-estimated-bin","generic-nearest-interpolated"],json:{write:!0}})],V.prototype,"type",void 0),V=t([v("esri.layers.voxel.VoxelVariable")],V);const pt=V;let F=class extends D(g){constructor(){super(...arguments),this.color=B.fromArray([0,0,0,0]),this.value=0,this.enabled=!0,this.label="",this.colorLocked=!0}};t([o({type:B,json:{type:[j],write:{enabled:!0,isRequired:!0}}})],F.prototype,"color",void 0),t([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],F.prototype,"value",void 0),t([o({type:Boolean,json:{default:!0,write:!0}})],F.prototype,"enabled",void 0),t([o({type:String,json:{write:!0}})],F.prototype,"label",void 0),t([o({type:Boolean,json:{default:!1}})],F.prototype,"colorLocked",void 0),F=t([v("esri.layers.voxel.VoxelIsosurface")],F);const Ae=F;let C=class extends D(g){constructor(){super(...arguments),this.color=null,this.position=0}};t([o({type:B,json:{type:[j],write:{enabled:!0,isRequired:!0}}})],C.prototype,"color",void 0),t([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],C.prototype,"position",void 0),C=t([v("esri.layers.voxel.VoxelColorStop")],C);const le=C;let W=class extends D(g){constructor(){super(...arguments),this.opacity=1,this.position=0}};t([o({type:Number,json:{name:"alpha",write:{enabled:!0,isRequired:!0}}})],W.prototype,"opacity",void 0),t([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],W.prototype,"position",void 0),W=t([v("esri.layers.voxel.VoxelOpacityStop")],W);const ae=W;let J=class extends D(g){constructor(){super(...arguments),this.enabled=!1,this.range=null}};t([o({type:Boolean,json:{default:!1,write:!0}})],J.prototype,"enabled",void 0),t([o({type:[Number],json:{write:!0}})],J.prototype,"range",void 0),J=t([v("esri.layers.voxel.VoxelRangeFilter")],J);const ut=J;var w;(function(e){e[e.Color=1]="Color",e[e.Alpha=2]="Alpha",e[e.Both=3]="Both"})(w||(w={}));let N=class extends D(g){constructor(e){super(e),this.interpolation=null,this.stretchRange=null,this.rangeFilter=null,this._colorMapSize=256,this.colorStops=new(c.ofType(le)),this.opacityStops=new(c.ofType(ae))}set colorStops(e){this._set("colorStops",H(e,this._get("colorStops"),c.ofType(le)))}set opacityStops(e){this._set("opacityStops",H(e,this._get("opacityStops"),c.ofType(ae)))}getPreviousNext(e,i,r){let s=e;for(;--s>0&&i[s].type!==r&&i[s].type!==w.Both;);let n=e;const l=i.length;for(;++n<l&&i[n].type!==r&&i[n].type!==w.Both;);return[s,n]}get rasterizedTransferFunction(){const e=[];if(this.colorStops.length<2)return e;const i=[],r=[],s=1e-5;for(const a of this.colorStops){if(!a.color)return e;r.push({color:{r:a.color.r,g:a.color.g,b:a.color.b,a:Math.round(255*(1-a.color.a))},position:a.position,type:w.Color})}if(this.opacityStops.length===0)for(const a of r)i.push({color:a.color,position:a.position});else{for(const u of this.opacityStops){const d=K(u.position,0,1),h=Math.round(255*K(1-u.opacity,0,1));let y=!1;for(const m of r)if(m.type===w.Color&&Math.abs(m.position-d)<s){m.color.a=h,m.type=w.Both,y=!0;break}y||r.push({color:{r:0,g:0,b:0,a:h},position:u.position,type:w.Alpha})}r.sort((u,d)=>u.position<d.position?-1:1);const a=r.length;for(let u=0;u<a;++u){const d=r[u];if(d.type!==w.Both)if(d.type===w.Color){const[h,y]=this.getPreviousNext(u,r,w.Alpha);if(h!==-1&&y!==a){const m=(d.position-r[h].position)/(r[y].position-r[h].position);d.color.a=Math.round(Q(r[h].color.a,r[y].color.a,m))}else d.color.a=h!==-1?r[h].color.a:r[y].color.a}else{const[h,y]=this.getPreviousNext(u,r,w.Color);if(h!==-1&&y!==a){const m=(d.position-r[h].position)/(r[y].position-r[h].position),E=r[h].color,_e=r[y].color;["r","g","b"].forEach(ie=>{d.color[ie]=Math.round(Q(E[ie],_e[ie],m))})}else["r","g","b"].forEach(h!==-1?m=>{d.color[m]=r[h][m]}:m=>{d.color[m]=r[y][m]})}}for(const u of r)i.push({color:u.color,position:u.position})}i[0].position=0,i[i.length-1].position=1;let n=0,l=1;for(let a=0;a<this._colorMapSize;++a){const u=a/this._colorMapSize;for(;u>i[l].position;)n=l++;const d=(u-i[n].position)/(i[l].position-i[n].position),h=i[n].color,y=i[l].color,m=new B;["r","g","b"].forEach(E=>{m[E]=Math.round(Q(h[E],y[E],d))}),m.a=K(1-Q(h.a,y.a,d)/255,0,1),e.push(m)}return e}getColorForContinuousDataValue(e,i){const r=this.rasterizedTransferFunction;if(this.colorStops.length<2||!Array.isArray(this.stretchRange)||this.stretchRange.length<2||r.length<256)return null;let s=this.stretchRange[0],n=this.stretchRange[1];if(s>n){const a=s;s=n,n=a}e=K(e,s,n);const l=r[Math.round((e-s)/(n-s)*(this._colorMapSize-1))].clone();return i||(l.a=1),l}};t([o({type:["linear","nearest"],json:{write:!0}})],N.prototype,"interpolation",void 0),t([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],N.prototype,"stretchRange",void 0),t([o({type:c.ofType(le),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.colorStops&&this.colorStops.length>0}}}}})],N.prototype,"colorStops",null),t([o({type:c.ofType(ae),json:{read:{source:"alphaStops"},write:{enabled:!0,target:"alphaStops",overridePolicy(){return{enabled:!!this.opacityStops&&this.opacityStops.length>0}}}}})],N.prototype,"opacityStops",null),t([o({type:ut,json:{write:!0}})],N.prototype,"rangeFilter",void 0),t([o({type:[B],clonable:!1,json:{read:!1}})],N.prototype,"rasterizedTransferFunction",null),N=t([v("esri.layers.voxel.VoxelTransferFunctionStyle")],N);const ct=N;let _=class extends D(g){constructor(){super(...arguments),this.color=B.fromArray([0,0,0,0]),this.value=0,this.enabled=!0,this.label=""}};t([o({type:B,json:{type:[j],write:{enabled:!0,isRequired:!0}}})],_.prototype,"color",void 0),t([o({type:j,json:{write:{enabled:!0,isRequired:!0}}})],_.prototype,"value",void 0),t([o({type:Boolean,json:{default:!0,write:!0}})],_.prototype,"enabled",void 0),t([o({type:String,json:{write:!0}})],_.prototype,"label",void 0),_=t([v("esri.layers.voxel.VoxelUniqueValue")],_);const qe=_;var pe;let L=pe=class extends g{constructor(e){super(e),this.variableId=0,this.label="",this.transferFunction=null,this.uniqueValues=null,this.isosurfaces=null,this.uniqueValues=new(c.ofType(qe)),this.isosurfaces=new(c.ofType(Ae))}clone(){return new pe({variableId:this.variableId,label:this.label,transferFunction:G(this.transferFunction),uniqueValues:G(this.uniqueValues),isosurfaces:G(this.isosurfaces)})}};t([o({type:j,json:{write:{enabled:!0,isRequired:!0}}})],L.prototype,"variableId",void 0),t([o({type:String,json:{write:!0}})],L.prototype,"label",void 0),t([o({type:ct,json:{write:{enabled:!0,overridePolicy(){return{enabled:!this.uniqueValues||this.uniqueValues.length<1}}}}})],L.prototype,"transferFunction",void 0),t([o({type:c.ofType(qe),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.uniqueValues&&this.uniqueValues.length>0}}}}})],L.prototype,"uniqueValues",void 0),t([o({type:c.ofType(Ae),json:{write:{enabled:!0,overridePolicy(){const e=!this.uniqueValues||this.uniqueValues.length<1,i=!!this.isosurfaces&&this.isosurfaces.length>0;return{enabled:e&&i}}}}})],L.prototype,"isosurfaces",void 0),L=pe=t([v("esri.layers.voxel.VoxelVariableStyle")],L);const De=L;let X=class extends g{constructor(){super(...arguments),this.values=null}};t([o({type:[Number],json:{write:!0}})],X.prototype,"values",void 0),X=t([v("esri.layers.voxel.VoxelIrregularSpacing")],X);const yt=X;let U=class extends g{constructor(){super(...arguments),this.scale=1,this.offset=0}};t([o({type:Number,json:{write:!0}})],U.prototype,"scale",void 0),t([o({type:Number,json:{write:!0}})],U.prototype,"offset",void 0),U=t([v("esri.layers.voxel.VoxelRegularSpacing")],U);const dt=U;let S=class extends g{constructor(){super(...arguments),this.irregularSpacing=null,this.isPositiveUp=!0,this.isWrappedDateLine=!1,this.label=null,this.name=null,this.quantity=null,this.regularSpacing=null,this.size=0,this.unit=null}get isRegular(){return(this.irregularSpacing==null||this.irregularSpacing===void 0)&&this.regularSpacing!==null}getRange(){var e;return this.isRegular?[this.regularSpacing.offset,this.regularSpacing.offset+this.regularSpacing.scale*(this.size-1)]:Array.isArray((e=this.irregularSpacing)==null?void 0:e.values)&&this.irregularSpacing.values.length>1?[this.irregularSpacing.values[0],this.irregularSpacing.values[this.irregularSpacing.values.length-1]]:[0,0]}};t([o({type:yt,json:{write:!0}})],S.prototype,"irregularSpacing",void 0),t([o({type:Boolean,json:{write:!0}})],S.prototype,"isPositiveUp",void 0),t([o({type:Boolean,json:{write:!0}})],S.prototype,"isWrappedDateLine",void 0),t([o({type:String,json:{write:!0}})],S.prototype,"label",void 0),t([o({type:String,json:{write:!0}})],S.prototype,"name",void 0),t([o({type:String,json:{write:!0}})],S.prototype,"quantity",void 0),t([o({type:dt,json:{write:!0}})],S.prototype,"regularSpacing",void 0),t([o({type:Number,json:{write:!0}})],S.prototype,"size",void 0),t([o({type:String,json:{write:!0}})],S.prototype,"unit",void 0),t([o({type:Boolean,json:{read:!1}})],S.prototype,"isRegular",null),S=t([v("esri.layers.voxel.VoxelDimension")],S);const ht=S,Te="esri.layers.voxel.VoxelVolume",xe=je.getLogger(Te);let x=class extends g{constructor(e){super(e),this.id=0,this.dimensions=null,this.spatialReference=$e.WGS84}get zDimension(){if(!this.dimensions||!Array.isArray(this.dimensions)||this.dimensions.length!==4)return-1;for(let e=2;e<4;++e)if(this.dimensions[e].size>0)return e;return-1}get isValid(){return!!this.dimensions&&!!Array.isArray(this.dimensions)&&this.dimensions.length===4&&!(this.dimensions[0].size<1||this.dimensions[1].size<1)&&!(this.zDimension===-1||this.dimensions[this.zDimension].size<1)}get originInLayerSpace3D(){if(!this.isValid||this.volumeType==="xyt")return[0,0,0];const e=this.dimensions[0].getRange(),i=this.dimensions[1].getRange(),r=this.dimensions[2],s=r.isRegular?r.getRange():[0,r.size];return[e[0],i[0],s[0]]}get voxelSizeInLayerSpaceSigned(){if(!this.isValid||this.volumeType==="xyt")return[0,0,0];const e=this.dimensions[0].getRange(),i=this.dimensions[1].getRange(),r=this.dimensions[2],s=r.isRegular?r.getRange():[0,r.size],n=[this.sizeInVoxels[0],this.sizeInVoxels[1],this.sizeInVoxels[2]];for(let l=0;l<3;++l)n[l]<2?n[l]=1:n[l]-=1;return r.isRegular&&!r.isPositiveUp&&(n[2]*=-1),[(e[1]-e[0])/n[0],(i[1]-i[0])/n[1],(s[1]-s[0])/n[2]]}get volumeType(){if(this.isValid){const e=this.dimensions[2].size>0,i=this.dimensions[3].size>0;if(!e&&i)return"xyt";if(e&&i)return"xyzt"}return"xyz"}get sizeInVoxels(){if(!this.isValid)return[0,0,0];const e=this.zDimension;return[this.dimensions[0].size,this.dimensions[1].size,this.dimensions[e].size]}computeVoxelSpaceLocation(e){var s,n,l;if(!this.isValid)return[0,0,0];if(this.volumeType==="xyt")return xe.error("computeVoxelSpacePosition cannot be used with XYT volumes."),[0,0,0];if(!ke(this.spatialReference,e.spatialReference))return xe.error("pos argument should have the same spatial reference as the VoxelLayer."),[0,0,0];const i=ze(e.x,e.y,(s=e.z)!=null?s:0);Ee(i,i,this.originInLayerSpace3D),Oe(i,i,this.voxelSizeInLayerSpaceSigned);const r=this.dimensions[this.zDimension];if(!r.isRegular&&Array.isArray((n=r.irregularSpacing)==null?void 0:n.values)&&r.irregularSpacing.values.length>1){const a=(l=e.z)!=null?l:0,u=r.irregularSpacing.values,d=r.isPositiveUp?1:-1,h=u.reduce((y,m)=>Math.abs(d*m-a)<Math.abs(d*y-a)?m:y);for(let y=0;y<u.length;++y)if(u[y]===h){i[2]=y;break}}return[i[0],i[1],i[2]]}computeLayerSpaceLocation(e){var s;if(!this.isValid)return new oe({x:0,y:0,spatialReference:this.spatialReference});const i=Ce(e);if(We(i,i,this.voxelSizeInLayerSpaceSigned),Je(i,i,this.originInLayerSpace3D),this.volumeType==="xyt")return new oe({x:i[0],y:i[1],spatialReference:this.spatialReference});const r=this.dimensions[this.zDimension];return r.isRegular||Array.isArray((s=r.irregularSpacing)==null?void 0:s.values)&&(e[2]<0?i[2]=r.irregularSpacing.values[0]:e[2]<r.irregularSpacing.values.length?i[2]=r.irregularSpacing.values[e[2]]:i[2]=r.irregularSpacing.values[r.irregularSpacing.values.length-1],r.isPositiveUp||(i[2]*=-1)),new oe({x:i[0],y:i[1],z:i[2],spatialReference:this.spatialReference})}};t([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],x.prototype,"id",void 0),t([o({type:[ht],json:{write:{enabled:!0,isRequired:!0}}})],x.prototype,"dimensions",void 0),t([o({type:$e,json:{read:{enabled:!1}}})],x.prototype,"spatialReference",void 0),t([o({type:Number,json:{read:!1}})],x.prototype,"zDimension",null),t([o({type:[Boolean],json:{read:!1}})],x.prototype,"isValid",null),t([o({type:[Number],json:{read:!1}})],x.prototype,"originInLayerSpace3D",null),t([o({type:[Number],json:{read:!1}})],x.prototype,"voxelSizeInLayerSpaceSigned",null),t([o({type:["xyz","xyzt","xyt"],json:{read:{enabled:!1}}})],x.prototype,"volumeType",null),t([o({type:[Number],json:{read:!1}})],x.prototype,"sizeInVoxels",null),x=t([v(Te)],x);const Fe=x;var ue;let P=ue=class extends g{constructor(){super(...arguments),this.apronWidth=1,this.brickSize=[32,32,32],this.maxLodLevel=0,this.nodeSize=[4,4,4]}isValid(){const e=new ue;return e.apronWidth===this.apronWidth&&e.maxLodLevel===this.maxLodLevel&&!!this.brickSize&&!!this.nodeSize&&!(!Array.isArray(this.brickSize)||!Array.isArray(this.nodeSize))&&this.brickSize.length===3&&this.nodeSize.length===3&&this.brickSize[0]===32&&this.brickSize[1]===32&&this.brickSize[2]===32&&this.nodeSize[0]===4&&this.nodeSize[1]===4&&this.nodeSize[2]===4}};t([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],P.prototype,"apronWidth",void 0),t([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],P.prototype,"brickSize",void 0),t([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],P.prototype,"maxLodLevel",void 0),t([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],P.prototype,"nodeSize",void 0),P=ue=t([v("esri.layers.voxel.VoxelVolumeIndex")],P);const mt=P;let A=class extends D(g){constructor(e){super(e),this.enabled=!0,this.label="",this.normal=null,this.point=null}get orientation(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[e,i]=k(this.normal);return $.normalize(z(e),0,!0)}set orientation(e){const i=Z(e,this.tilt);this._set("normal",i),this._set("orientation",e)}get tilt(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[e,i]=k(this.normal);return $.normalize(z(i),0,!0)}set tilt(e){const i=Z(this.orientation,e);this._set("normal",i),this._set("tilt",e)}};t([o({type:Boolean,json:{default:!0,write:!0}})],A.prototype,"enabled",void 0),t([o({type:String,json:{write:!0}})],A.prototype,"label",void 0),t([o({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),Y(e=>$.normalize(z(e),0,!0))],A.prototype,"orientation",null),t([o({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),Y(e=>$.normalize(z(e),0,!0))],A.prototype,"tilt",null),t([o({type:[Number],json:{write:!0}})],A.prototype,"normal",void 0),t([o({type:[Number],json:{write:!0}})],A.prototype,"point",void 0),A=t([v("esri.layers.voxel.VoxelDynamicSection")],A);const ce=A;var ye;let q=ye=class extends g{constructor(e){super(e),this.volumeId=0,this.verticalExaggeration=1,this.exaggerationMode="scale-height",this.verticalOffset=0,this.slices=new(c.ofType(ee)),this.dynamicSections=new(c.ofType(ce))}set slices(e){this._set("slices",H(e,this._get("slices"),c.ofType(ee)))}set dynamicSections(e){this._set("dynamicSections",H(e,this._get("dynamicSections"),c.ofType(ce)))}clone(){return new ye({volumeId:this.volumeId,verticalExaggeration:this.verticalExaggeration,exaggerationMode:this.exaggerationMode,verticalOffset:this.verticalOffset,slices:G(this.slices),dynamicSections:G(this.dynamicSections)})}};t([o({type:j,json:{write:{enabled:!0,isRequired:!0}}})],q.prototype,"volumeId",void 0),t([o({type:Number,json:{default:1,write:!0}})],q.prototype,"verticalExaggeration",void 0),t([o({type:["scale-position","scale-height"],json:{default:"scale-height",write:!0}})],q.prototype,"exaggerationMode",void 0),t([o({type:Number,json:{default:0,write:!0}})],q.prototype,"verticalOffset",void 0),t([o({type:c.ofType(ee),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.slices&&this.slices.length>0}}}}})],q.prototype,"slices",null),t([o({type:c.ofType(ce),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.dynamicSections&&this.dynamicSections.length>0}}}}})],q.prototype,"dynamicSections",null),q=ye=t([v("esri.layers.voxel.VoxelVolumeStyle")],q);const Le=q,Me="esri.layers.VoxelLayer",M=je.getLogger(Me);let p=class extends rt(Ue(Ge(Ke(Qe(Xe(Ye(ot))))))){constructor(e){super(e),this.serviceRoot="",this.popupEnabled=!0,this.operationalLayerType="Voxel",this.legendEnabled=!0,this.title=null,this.sections=null,this.currentVariableId=0,this.volumeStyles=null,this.renderMode="volume",this.variableStyles=null,this.enableSlices=!0,this.enableSections=!0,this.enableDynamicSections=!0,this.enableIsosurfaces=!0,this.shading=new Ne,this.opacity=1,this.variables=new c,this.volumes=new c,this.index=null,this.minScale=0,this.maxScale=0,this.type="voxel",this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.fullExtent=null,this.volumeStyles=new(c.ofType(Le)),this.variableStyles=new(c.ofType(De)),this.sections=new(c.ofType(ne))}set url(e){this._set("url",He(e,M))}load(e){const i=T(e)?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(Ze).then(()=>this._fetchService(i)).then(()=>this.serviceRoot=this.url);return this.addResolvingPromise(r),Promise.resolve(this)}read(e,i){super.read(e,i);for(const r of this.volumes)r.spatialReference=this.spatialReference}readVersion(e,i){return super.parseVersionString(e)}validateLayer(e){if(e.layerType&&e.layerType!==this.operationalLayerType)throw new re("voxel-layer:layer-type-not-supported","VoxelLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor)||this.version.major<3)throw new re("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"});if(this.version.major>3)throw new re("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"})}readFullExtent(e,i,r){if(e!=null&&typeof e=="object"){const s=Ie.fromJSON(e,r);if(s.zmin===0&&s.zmax===0&&Array.isArray(i.volumes)){const n=Fe.fromJSON(i.volumes[0]);if(n.isValid&&n.volumeType!=="xyt"){const l=n.dimensions[2];if(l.isRegular){let a=l.regularSpacing.offset,u=l.regularSpacing.offset+l.regularSpacing.scale*(l.size-1);if(a>u){const d=a;a=u,u=d}s.zmin=a,s.zmax=u}}}return s}return null}getConfiguration(){const e={layerType:this.operationalLayerType,version:this.version.versionString,name:this.title,spatialReference:this.spatialReference,fullExtent:this.fullExtent,volumes:this.volumes.toJSON(),variables:this.variables.toJSON(),index:this.index.toJSON(),sections:this.getSections(),style:{volumeStyles:this.getVolumeStyles(),currentVariableId:this.currentVariableId,renderMode:this.renderMode,variableStyles:this.getVariableStyles(),enableSections:this.enableSections,enableDynamicSections:this.enableDynamicSections,enableIsosurfaces:this.enableIsosurfaces,enableSlices:this.enableSlices,shading:this.shading}};return e.index&&this.index.isValid()?JSON.stringify(e):""}getVariableStyle(e){let i=-1;if(i=T(e)?e:this.currentVariableId,!this.variableStyles||i===-1)return null;const r=this.variableStyles.findIndex(s=>s.variableId===i);return r<0?null:this.variableStyles.getItemAt(r)}getVariable(e){let i=-1;if(i=T(e)?e:this.currentVariableId,!this.variables||i===-1)return null;const r=this.variables.findIndex(s=>s.id===i);return r<0?null:this.variables.getItemAt(r)}getVolume(e){const i=this.getVariable(e);return T(i)?this.volumes.find(({id:r})=>r===i.volumeId):null}getVolumeStyle(e){const i=this.getVariable(e);return T(i)?this.volumeStyles.find(({volumeId:r})=>r===i.volumeId):null}getColorForContinuousDataValue(e,i,r){const s=this.getVariable(e);if(!T(s)||s.renderingFormat.continuity!=="continuous"||!this.variableStyles)return null;const n=this.variableStyles.findIndex(a=>a.variableId===e);if(n<0)return null;const l=this.variableStyles.getItemAt(n);return l.transferFunction?l.transferFunction.getColorForContinuousDataValue(i,r):null}getSections(){const e=[];for(const i of this.sections)e.push(new ne({enabled:i.enabled,href:i.href,id:i.id,label:i.label,normal:i.normal,point:i.point,sizeInPixel:i.sizeInPixel,slices:i.slices,timeId:i.timeId,variableId:i.variableId}));return e}getVariableStyles(){const e=[];for(const i of this.variableStyles){const r=this._getVariable(i);if(T(r)){const s=i.clone();s.isosurfaces.length>4&&(s.isosurfaces=s.isosurfaces.slice(0,3),M.error("A maximum of 4 isosurfaces are supported for Voxel Layers."));for(const n of s.isosurfaces)if(n.colorLocked){const l=this.getColorForContinuousDataValue(s.variableId,n.value,!1);l===null||l.equals(n.color)||(n.color=l)}if(r.renderingFormat.continuity==="continuous")(s.transferFunction===null||s.transferFunction.colorStops.length<2)&&M.error(`VoxelVariableStyle for variable ${r.id} is invalid. At least 2 color stops are required in the transferFunction for continuous Voxel Layer variables.`),s.transferFunction!==null&&(Array.isArray(s.transferFunction.stretchRange)&&s.transferFunction.stretchRange.length===2||(M.error(`VoxelVariableStyle for variable ${r.id} is invalid. The stretchRange of the transferFunction for continuous Voxel Layer variables must be of the form [minimumDataValue, maximumDataValue].`),s.transferFunction.stretchRange=[0,1],s.transferFunction.colorStops.removeAll()));else if(r.renderingFormat.continuity==="discrete")if(i.uniqueValues.length===0)M.error(`VoxelVariableStyle for variable ${r.id} is invalid. Unique values are required for discrete Voxel Layer variables.`);else for(const n of i.uniqueValues)n.label!==null&&n.label!==void 0||n.value===null||n.value===void 0||(n.label=n.value.toString());e.push(s)}else M.error(`VoxelVariable ID=${i.variableId} doesn't exist, VoxelVariableStyle for this VoxelVariable will be ignored.`)}return e}getVolumeStyles(){const e=[];for(const i of this.volumeStyles){const r=this._getVolumeFromVolumeId(i.volumeId);if(T(r)){const s=i.clone();for(const n of s.slices)this._isPlaneValid(n,[0,1,r.zDimension],r.dimensions)||(n.enabled=!1,n.label="invalid");for(const n of s.dynamicSections)this._isPlaneValid(n,[0,1,r.zDimension],r.dimensions)||(n.enabled=!1,n.label="invalid");e.push(s)}else M.error(`VoxelVolume ID=${i.volumeId} doesn't exist, VoxelVolumeStyle for this VoxelVolume will be ignored.`)}return e}_getVariable(e){const i=e.variableId;for(const r of this.variables)if(r.id===i)return r;return null}_getVolumeFromVolumeId(e){for(const i of this.volumes)if(i.id===e)return i;return null}_isPlaneValid(e,i,r){if(!e.point||!Array.isArray(e.point)||e.point.length!==3||!e.normal||!Array.isArray(e.normal)||e.normal.length!==3)return!1;for(let l=0;l<3;++l){const a=e.point[l];if(a<0||a>=r[i[l]].size)return!1}const s=ze(e.normal[0],e.normal[1],e.normal[2]);de(s,s);const n=1e-6;return!(Math.abs(s[0])+Math.abs(s[1])+Math.abs(s[2])<n)&&(e.normal[0]=s[0],e.normal[1]=s[1],e.normal[2]=s[2],!0)}};t([o(et)],p.prototype,"popupEnabled",void 0),t([o({type:["Voxel"]})],p.prototype,"operationalLayerType",void 0),t([o(tt)],p.prototype,"legendEnabled",void 0),t([o({json:{write:!0}})],p.prototype,"title",void 0),t([o(it)],p.prototype,"url",null),t([o({type:c.ofType(ne),json:{origins:{"web-scene":{name:"layerDefinition.sections",write:!0}}}})],p.prototype,"sections",void 0),t([o({type:j,json:{origins:{"web-scene":{name:"layerDefinition.style.currentVariableId",write:{enabled:!0,isRequired:!0,ignoreOrigin:!0}},service:{name:"style.currentVariableId"}}}})],p.prototype,"currentVariableId",void 0),t([o({type:c.ofType(Le),json:{origins:{"web-scene":{name:"layerDefinition.style.volumeStyles",write:!0},service:{name:"style.volumeStyles"}}}})],p.prototype,"volumeStyles",void 0),t([o({type:["volume","surfaces"],json:{origins:{"web-scene":{name:"layerDefinition.style.renderMode",write:!0},service:{name:"style.renderMode"}}}})],p.prototype,"renderMode",void 0),t([o({type:c.ofType(De),json:{origins:{"web-scene":{name:"layerDefinition.style.variableStyles",write:!0},service:{name:"style.variableStyles"}}}})],p.prototype,"variableStyles",void 0),t([o({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableSlices",write:!0},service:{name:"style.enableSlices"}}}})],p.prototype,"enableSlices",void 0),t([o({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableSections",write:!0},service:{name:"style.enableSections"}}}})],p.prototype,"enableSections",void 0),t([o({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableDynamicSections",write:!0},service:{name:"style.enableDynamicSections"}}}})],p.prototype,"enableDynamicSections",void 0),t([o({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableIsosurfaces",write:!0},service:{name:"style.enableIsosurfaces"}}}})],p.prototype,"enableIsosurfaces",void 0),t([o({type:Ne,json:{origins:{"web-scene":{name:"layerDefinition.style.shading",write:!0},service:{name:"style.shading"}}}})],p.prototype,"shading",void 0),t([o({type:["show","hide"]})],p.prototype,"listMode",void 0),t([o({type:Number,range:{min:0,max:1},nonNullable:!0,json:{read:!1,write:!1,origins:{"web-scene":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],p.prototype,"opacity",void 0),t([o({type:c.ofType(pt)})],p.prototype,"variables",void 0),t([o({type:c.ofType(Fe)})],p.prototype,"volumes",void 0),t([o({type:mt})],p.prototype,"index",void 0),t([o({type:Number,json:{name:"layerDefinition.minScale",read:!1,write:!1,origins:{service:{read:!1,write:!1}}}})],p.prototype,"minScale",void 0),t([o({type:Number,json:{name:"layerDefinition.maxScale",read:!1,write:!1,origins:{service:{read:!1,write:!1}}}})],p.prototype,"maxScale",void 0),t([o({json:{read:!1},readOnly:!0})],p.prototype,"type",void 0),t([o({readOnly:!0,json:{name:"serviceVersion"}})],p.prototype,"version",void 0),t([ve("service","version")],p.prototype,"readVersion",null),t([o({type:Ie})],p.prototype,"fullExtent",void 0),t([ve("service","fullExtent",["fullExtent"])],p.prototype,"readFullExtent",null),p=t([v(Me)],p);const $t=p;export{$t as default};
