import{aC as s,aD as t,aE as h,b as l,a2 as d,G as o}from"./vendor-8855e047.js";const y=r=>{let e=class extends r{initialize(){this.handles.add(l(()=>this.layer,"refresh",i=>{this.doRefresh(i.dataChanged).catch(a=>{d(a)||o.getLogger(this.declaredClass).error(a)})}),"RefreshableLayerView")}};return s([t()],e.prototype,"layer",void 0),e=s([h("esri.layers.mixins.RefreshableLayerView")],e),e};export{y as i};