import{s as e,b as s,a}from"./Error-8814705f.js";import{G as o}from"./request-9ab300ca.js";const r=e.getLogger("esri.assets");function h(t){if(!s.assetsPath)throw r.errorOnce("The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50"),new a("assets:path-not-set","config.assetsPath is not set");return o(s.assetsPath,t)}export{h as a};
