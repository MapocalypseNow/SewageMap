import{d9 as c,dJ as d,c2 as u,h as p}from"./vendor.f8a4aecc.js";import{r as g}from"./Container.edf2e803.js";import{T as o}from"./color.1638605e.js";import{c as f,h as m,x as y}from"./WGLContainer.65e67344.js";class P extends g{constructor(e,t,s,a,i,n,h=i,l=n){super(),this.triangleCountReportedInDebug=0,this.triangleCount=0,this.texture=null,this.key=new c(e),this.resolution=t,this.x=s,this.y=a,this.width=i,this.height=n,this.rangeX=h,this.rangeY=l}destroy(){this.texture&&(this.texture.dispose(),this.texture=null)}setTransform(e){const t=this.resolution/(e.resolution*e.pixelRatio),s=this.transforms.tileMat3,[a,i]=e.toScreenNoRotation([0,0],[this.x,this.y]),n=this.width/this.rangeX*t,h=this.height/this.rangeY*t;d(s,n,0,0,0,h,0,a,i,1),u(this.transforms.dvs,e.displayViewMat3,s)}}const w=(r,e)=>r.key.level-e.key.level!=0?r.key.level-e.key.level:r.key.row-e.key.row!=0?r.key.row-e.key.row:r.key.col-e.key.col;class v extends f{constructor(e){super(),this._tileInfoView=e}get requiresDedicatedFBO(){return!1}renderChildren(e){this.sortChildren(w),this.setStencilReference(e),super.renderChildren(e)}createRenderParams(e){const{state:t}=e,s=super.createRenderParams(e);return s.requiredLevel=this._tileInfoView.getClosestInfoForScale(t.scale).level,s.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(t.scale),s}prepareRenderPasses(e){const t=super.prepareRenderPasses(e);return t.push(e.registerRenderPass({name:"stencil",brushes:[m],drawPhase:o.DEBUG|o.MAP|o.HIGHLIGHT,target:()=>this.getStencilTarget()})),p("esri-tiles-debug")&&t.push(e.registerRenderPass({name:"tileInfo",brushes:[y],drawPhase:o.DEBUG,target:()=>this.children})),t}getStencilTarget(){return this.children}setStencilReference(e){let t=1;for(const s of this.children)s.stencilRef=t++}}export{v as i,P as r};
