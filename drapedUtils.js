import{w as m,v as h,d8 as p}from"./index.js";function u(e,n){return n?"xoffset"in n&&n.xoffset?Math.max(e,Math.abs(n.xoffset)):"yoffset"in n&&n.yoffset?Math.max(e,Math.abs(n.yoffset||0)):e:e}function b(e){let n=0,t=0;for(let s=0;s<e.length;s++){const r=e[s].size;typeof r=="number"&&(n+=r,t++)}return n/t}function c(e,n){return typeof e=="number"?e:e&&e.stops&&e.stops.length?b(e.stops):n}function M(e,n){if(!n)return e;const t=n.filter(i=>i.type==="size").map(i=>{const{maxSize:f,minSize:o}=i;return(c(f,e)+c(o,e))/2});let s=0;const r=t.length;if(r===0)return e;for(let i=0;i<r;i++)s+=t[i];const a=Math.floor(s/r);return Math.max(a,e)}function d(e){var r;const n=e&&e.renderer,t=(e&&e.event&&e.event.pointerType)==="touch"?9:6;if(!n)return t;const s="visualVariables"in n?M(t,n.visualVariables):t;if(n.type==="simple")return u(s,n.symbol);if(n.type==="unique-value"){let a=s;return(r=n.uniqueValueInfos)==null||r.forEach(i=>{a=u(a,i.symbol)}),a}if(n.type==="class-breaks"){let a=s;return n.classBreakInfos.forEach(i=>{a=u(a,i.symbol)}),a}return n.type==="dot-density"||n.type,s}function z(e,n,t,s=new m){let r;if(t.type==="2d")r=n*t.resolution;else if(t.type==="3d"){const x=t.overlayPixelSizeInMapUnits(e),l=t.basemapSpatialReference;r=h(l)&&!l.equals(t.spatialReference)?p(l)/p(t.spatialReference):n*x}const a=e.x-r,i=e.y-r,f=e.x+r,o=e.y+r,{spatialReference:y}=t;return s.xmin=Math.min(a,f),s.ymin=Math.min(i,o),s.xmax=Math.max(a,f),s.ymax=Math.max(i,o),s.spatialReference=y,s}new m;export{z as a,d as s};
