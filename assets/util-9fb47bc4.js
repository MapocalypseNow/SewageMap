import{s as i}from"./jsonMap-9318d50f.js";const l=new i({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch",mesh:"mesh"});function m(e){return l.toJSON(e)}function s(e){const{bandCount:t,attributeTable:n,colormap:r,pixelType:o}=e.rasterInfo;return t===1&&(n!=null||r!=null||o==="u8"||o==="s8")}export{m as e,s as r};
