import{a8 as s,aa as a}from"./vendor-445d19db.js";import{I as o}from"./enums-4ca4641f.js";import{t as d}from"./BaseGraphicContainer-dd7f4c14.js";import{_ as h}from"./enums-64ab819c.js";let e=class extends d{doRender(r){r.drawPhase===o.HIGHLIGHT&&super.doRender(r)}renderChildren(r){if(this.attributeView.update(),!this.children.some(n=>n.hasData))return;this.attributeView.bindTextures(r.context),super.renderChildren(r);const{painter:i}=r,t=i.effects.highlight;t.bind(r),r.context.setColorMask(!0,!0,!0,!0),r.context.clear(h.COLOR_BUFFER_BIT),this._renderChildren(r,t.defines.concat(["highlightAll"])),t.draw(r),t.unbind()}};e=s([a("esri.views.2d.layers.support.HighlightGraphicContainer")],e);const u=e;export{u as n};