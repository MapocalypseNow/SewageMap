import{ak as o,a6 as s,al as a,am as i}from"./vendor-128d427e.js";async function c(n){const t=n.spatialReference;if(t.isWGS84)return n.clone();if(t.isWebMercator)return o(n);const e=s.WGS84;return await a(t,e),i(n,e)}function u(n,t){if(!f(n,t)){const e=n.typeKeywords;e?e.push(t):n.typeKeywords=[t]}}function f(n,t){var e;return!!((e=n.typeKeywords)!=null&&e.includes(t))}function p(n,t){const e=n.typeKeywords;if(e){const r=e.indexOf(t);r>-1&&e.splice(r,1)}}async function y(n){const t=n.clone().normalize();let e;if(t.length>1)for(const r of t)e?r.width>e.width&&(e=r):e=r;else e=t[0];return c(e)}const A={DEVELOPER_BASEMAP:"DeveloperBasemap",JSAPI:"ArcGIS API for JavaScript",METADATA:"Metadata",MULTI_LAYER:"Multilayer",SINGLE_LAYER:"Singlelayer",TABLE:"Table"};export{y as a,p as c,A as f,u as i,f as s};
