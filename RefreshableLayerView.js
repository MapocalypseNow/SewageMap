import{e as s,y as t,j as h,e3 as l,ae as d,D as o}from"./index.js";const y=r=>{let e=class extends r{initialize(){this.handles.add(l(()=>this.layer,"refresh",i=>{this.doRefresh(i.dataChanged).catch(a=>{d(a)||o.getLogger(this.declaredClass).error(a)})}),"RefreshableLayerView")}};return s([t()],e.prototype,"layer",void 0),e=s([h("esri.layers.mixins.RefreshableLayerView")],e),e};export{y as i};
