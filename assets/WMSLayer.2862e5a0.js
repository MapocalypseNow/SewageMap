import{bz as Oe,ee as k,eG as P,aN as ye,w as A,il as Re,j as Q,B as a,C as u,dn as F,dc as $e,D as he,iy as Le,s as Pe,k as O,f as Ae,L,N as Ue,it as _e,jb as Me,iv as je,iu as Te,di as Ce,dj as qe,dk as Be,fe as Ve,v as I,bD as ke,e_ as ne,U as G,dR as We,kO as De,cv as Ge,S as Xe,eC as He,Y as Je,dJ as ze,au as Qe,a8 as Ye,f1 as X,j2 as Ke,iw as Ze,dq as et,b as tt,kP as rt}from"./index.2901469c.js";import{o as J}from"./crsUtils.daf46943.js";import{l as se}from"./ExportWMSImageParameters.262b5556.js";var q;let nt=0,y=q=class extends Oe(Le){constructor(e){super(e),this.dimensions=null,this.fullExtents=null,this.legendUrl=null,this.legendEnabled=!0,this.layer=null,this.maxScale=0,this.minScale=0,this.parent=null,this.popupEnabled=!1,this.queryable=!1,this.sublayers=null,this.spatialReferences=null,this.addHandles([k(()=>this.sublayers,"after-add",({item:r})=>{r.parent=this,r.layer=this.layer},P),k(()=>this.sublayers,"after-remove",({item:r})=>{r.layer=r.parent=null},P),ye(()=>this.sublayers,(r,n)=>{if(n)for(const t of n)t.layer=t.parent=null;if(r)for(const t of r)t.parent=this,t.layer=this.layer},P)])}get description(){return this._get("description")}set description(e){this._set("description",e)}get fullExtent(){return this._get("fullExtent")}set fullExtent(e){this._set("fullExtent",e)}readExtent(e,r){return(e=r.extent)?A.fromJSON(e):null}get id(){const e=this._get("id");return e!=null?e:nt++}set id(e){this._set("id",e)}readLegendUrl(e,r){var n,t;return(t=(n=r==null?void 0:r.legendUrl)!=null?n:r==null?void 0:r.legendURL)!=null?t:null}get effectiveScaleRange(){const{minScale:e,maxScale:r}=this;return{minScale:e,maxScale:r}}get name(){return this._get("name")}set name(e){this._set("name",e)}castSublayers(e){return Re(Q.ofType(q),e)}get title(){return this._get("title")}set title(e){this._set("title",e)}get visible(){return this._get("visible")}set visible(e){this._setAndNotifyLayer("visible",e)}clone(){var r,n,t;const e=new q;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent.clone()),this.hasOwnProperty("fullExtents")&&(e.fullExtents=(n=(r=this.fullExtents)==null?void 0:r.map(s=>s.clone()))!=null?n:null),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("legendEnabled")&&(e.legendEnabled=this.legendEnabled),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("name")&&(e.name=this.name),this.hasOwnProperty("parent")&&(e.parent=this.parent),this.hasOwnProperty("queryable")&&(e.queryable=this.queryable),this.hasOwnProperty("sublayers")&&(e.sublayers=this.sublayers&&this.sublayers.map(s=>s.clone())),this.hasOwnProperty("spatialReferences")&&(e.spatialReferences=(t=this.spatialReferences)==null?void 0:t.map(s=>s)),this.hasOwnProperty("visible")&&(e.visible=this.visible),this.hasOwnProperty("title")&&(e.title=this.title),e}_setAndNotifyLayer(e,r){const n=this.layer;this._get(e)!==r&&(this._set(e,r),n&&n.emit("wms-sublayer-update",{propertyName:e,id:this.id}))}};a([u()],y.prototype,"description",null),a([u({readOnly:!0})],y.prototype,"dimensions",void 0),a([u({value:null})],y.prototype,"fullExtent",null),a([F("fullExtent",["extent"])],y.prototype,"readExtent",null),a([u()],y.prototype,"fullExtents",void 0),a([u({type:Number,json:{write:{enabled:!1,overridePolicy:()=>({ignoreOrigin:!0,enabled:!0})}}})],y.prototype,"id",null),a([u({type:String,json:{origins:{"web-document":{read:{source:["legendUrl","legendURL"]},write:{target:"legendUrl",ignoreOrigin:!0}}},read:{source:"legendURL"},write:{ignoreOrigin:!0}}})],y.prototype,"legendUrl",void 0),a([F(["web-document"],"legendUrl")],y.prototype,"readLegendUrl",null),a([u({value:!0,type:Boolean,json:{read:{source:"showLegend"},write:{target:"showLegend"},origins:{"web-map":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],y.prototype,"legendEnabled",void 0),a([u()],y.prototype,"layer",void 0),a([u()],y.prototype,"maxScale",void 0),a([u()],y.prototype,"minScale",void 0),a([u({readOnly:!0})],y.prototype,"effectiveScaleRange",null),a([u({type:String,value:null,json:{read:{source:"name"},write:{ignoreOrigin:!0}}})],y.prototype,"name",null),a([u()],y.prototype,"parent",void 0),a([u({type:Boolean,json:{read:{source:"showPopup"},write:{ignoreOrigin:!0,target:"showPopup"}}})],y.prototype,"popupEnabled",void 0),a([u({type:Boolean,json:{write:{ignoreOrigin:!0}}})],y.prototype,"queryable",void 0),a([u()],y.prototype,"sublayers",void 0),a([$e("sublayers")],y.prototype,"castSublayers",null),a([u({type:[Number],json:{read:{source:"spatialReferences"}}})],y.prototype,"spatialReferences",void 0),a([u({type:String,value:null,json:{write:{ignoreOrigin:!0}}})],y.prototype,"title",null),a([u({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"}}})],y.prototype,"visible",null),y=q=a([he("esri.layers.support.WMSSublayer")],y);const z=y,C={84:4326,83:4269,27:4267};function st(e){if(!e)return null;const r={idCounter:-1};typeof e=="string"&&(e=new DOMParser().parseFromString(e,"text/xml"));const n=e.documentElement;if(n.nodeName==="ServiceExceptionReport"){const w=Array.prototype.slice.call(n.childNodes).map(U=>U.textContent).join(`\r
`);throw new Pe("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",w)}const t=b("Capability",n),s=b("Service",n),l=b("Request",t);if(!t||!s||!l)return null;const o=b("Layer",t);if(!o)return null;const f=n.nodeName==="WMS_Capabilities"||n.nodeName==="WMT_MS_Capabilities"?n.getAttribute("version"):"1.3.0",i=v("Title",s,"")||v("Name",s,""),p=v("AccessConstraints",s,""),m=/^none$/i.test(p)?"":p,c=v("Abstract",s,""),g=parseInt(v("MaxWidth",s,"5000"),10),x=parseInt(v("MaxHeight",s,"5000"),10),E=ae(l,"GetMap"),S=ie(l,"GetMap"),h=M(o,f,r);let Y,W=0;if(Array.prototype.slice.call(t.childNodes).forEach(w=>{w.nodeName==="Layer"&&(W===0?Y=w:(W===1&&h.name&&(h.name="",h.sublayers.push(M(Y,f,r))),h.sublayers.push(M(w,f,r))),W++)}),!h)return null;let N,j;const ve=h.fullExtents;if(N=h.sublayers,N||(N=[]),N.length===0&&N.push(h),j=h.extent,!j){const w=new A(N[0].extent);h.extent=w.toJSON(),j=h.extent}const Se=h.spatialReferences.length>0?h.spatialReferences:ge(h),K=ie(l,"GetFeatureInfo"),Ee=K?ae(l,"GetFeatureInfo"):null,Z=be(N),Ne=h.minScale||0,Ie=h.maxScale||0,ee=h.dimensions,Fe=Z.reduce((w,U)=>w.concat(U.dimensions),[]),te=ee.concat(Fe).filter(we);let re=null;if(te.length){const w=te.map(U=>{const{extent:D}=U;return ot(D)?D.map(T=>T.getTime()):D.map(T=>[T.min.getTime(),T.max.getTime()])}).flat(2);re={startTimeField:null,endTimeField:null,trackIdField:null,timeExtent:[Math.min(...w),Math.max(...w)]}}return{copyright:m,description:c,dimensions:ee,extent:j,fullExtents:ve,featureInfoFormats:Ee,featureInfoUrl:K,mapUrl:S,maxWidth:g,maxHeight:x,maxScale:Ie,minScale:Ne,layers:Z,spatialReferences:Se,supportedImageFormatTypes:E,timeInfo:re,title:i,version:f}}function it(e){const r=e.filter(n=>n.popupEnabled&&n.name&&n.queryable);return r.length?r.map(({name:n})=>n).join():null}function ge(e){if(e.spatialReferences.length>0)return e.spatialReferences;if(e.sublayers)for(const r of e.sublayers){const n=ge(r);if(n.length>0)return n}return[]}function be(e){var n;let r=[];for(const t of e)r.push(t),(n=t.sublayers)!=null&&n.length&&(r=r.concat(be(t.sublayers)),delete t.sublayers);return r}function B(e,r,n){var t;return(t=r.getAttribute(e))!=null?t:n}function at(e,r,n,t){const s=b(e,n);return s?B(r,s,t):t}function b(e,r){for(let n=0;n<r.childNodes.length;n++){const t=r.childNodes[n];if(xe(t)&&t.nodeName===e)return t}return null}function V(e,r){const n=[];for(let t=0;t<r.childNodes.length;t++){const s=r.childNodes[t];xe(s)&&s.nodeName===e&&n.push(s)}return n}function v(e,r,n){const t=b(e,r);return t?t.textContent:n}function _(e,r,n){if(!e)return null;const t=parseFloat(e.getAttribute("minx")),s=parseFloat(e.getAttribute("miny")),l=parseFloat(e.getAttribute("maxx")),o=parseFloat(e.getAttribute("maxy"));let f,i,p,m;n?(f=isNaN(s)?-Number.MAX_VALUE:s,i=isNaN(t)?-Number.MAX_VALUE:t,p=isNaN(o)?Number.MAX_VALUE:o,m=isNaN(l)?Number.MAX_VALUE:l):(f=isNaN(t)?-Number.MAX_VALUE:t,i=isNaN(s)?-Number.MAX_VALUE:s,p=isNaN(l)?Number.MAX_VALUE:l,m=isNaN(o)?Number.MAX_VALUE:o);const c=new O({wkid:r});return new A({xmin:f,ymin:i,xmax:p,ymax:m,spatialReference:c})}function ie(e,r){const n=b(r,e);if(n){const t=b("DCPType",n);if(t){const s=b("HTTP",t);if(s){const l=b("Get",s);if(l){let o=at("OnlineResource","xlink:href",l,null);if(o)return o.indexOf("&")===o.length-1&&(o=o.substring(0,o.length-1)),ut(o,["service","request"])}}}}return null}function ae(e,r){const n=V("Operation",e);if(!n.length)return V("Format",b(r,e)).map(({textContent:s})=>s);const t=[];for(const s of n)if(s.getAttribute("name")===r){const l=V("Format",s);for(const{textContent:o}of l)t.push(o)}return t}function oe(e,r,n){const t=b(r,e);if(!t)return n;const{textContent:s}=t;if(s==null||s==="")return n;const l=Number(s);return isNaN(l)?n:l}function M(e,r,n){if(!e)return null;const t={id:n.idCounter++,fullExtents:[],parentLayerId:null,queryable:e.getAttribute("queryable")==="1",spatialReferences:[],sublayers:null},s=b("LatLonBoundingBox",e),l=b("EX_GeographicBoundingBox",e);let o=null;s&&(o=_(s,4326)),l&&(o=new A(0,0,0,0,new O({wkid:4326})),o.xmin=parseFloat(v("westBoundLongitude",l,"0")),o.ymin=parseFloat(v("southBoundLatitude",l,"0")),o.xmax=parseFloat(v("eastBoundLongitude",l,"0")),o.ymax=parseFloat(v("northBoundLatitude",l,"0"))),s||l||(o=new A(-180,-90,180,90,new O({wkid:4326}))),t.minScale=oe(e,"MaxScaleDenominator",0),t.maxScale=oe(e,"MinScaleDenominator",0);const f=["1.0.0","1.1.0","1.1.1"].includes(r)?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach(i=>{if(i.nodeName==="Name")t.name=i.textContent||"";else if(i.nodeName==="Title")t.title=i.textContent||"";else if(i.nodeName==="Abstract")t.description=i.textContent||"";else if(i.nodeName==="BoundingBox"){const p=i.getAttribute(f);if(p&&p.indexOf("EPSG:")===0){const c=parseInt(p.substring(5),10);c===0||isNaN(c)||o||(o=r==="1.3.0"?_(i,c,J(c)):_(i,c))}const m=p&&p.indexOf(":");if(m&&m>-1){let c=parseInt(p.substring(m+1,p.length),10);c===0||isNaN(c)||(c=C[c]?C[c]:c);const g=r==="1.3.0"?_(i,c,J(c)):_(i,c);t.fullExtents.push(g)}}else if(i.nodeName===f)i.textContent.split(" ").forEach(p=>{const m=p.includes(":")?parseInt(p.split(":")[1],10):parseInt(p,10);if(m!==0&&!isNaN(m)){const c=C[m]?C[m]:m;t.spatialReferences.includes(c)||t.spatialReferences.push(c)}});else if(i.nodeName!=="Style"||t.legendURL){if(i.nodeName==="Layer"){const p=M(i,r,n);p&&(p.parentLayerId=t.id,t.sublayers||(t.sublayers=[]),t.sublayers.push(p))}}else{const p=b("LegendURL",i);if(p){const m=b("OnlineResource",p);m&&(t.legendURL=m.getAttribute("xlink:href"))}}}),t.extent=o==null?void 0:o.toJSON(),t.dimensions=V("Dimension",e).filter(i=>i.getAttribute("name")&&i.getAttribute("units")&&i.textContent).map(i=>{const p=i.getAttribute("name"),m=i.getAttribute("units"),c=i.textContent,g=i.getAttribute("unitSymbol"),x=i.getAttribute("default"),E=B("default",i,"0")!=="0",S=B("nearestValue",i,"0")!=="0",h=B("current",i,"0")!=="0";return we({name:p,units:m})?{name:"time",units:"ISO8601",extent:pe(c),default:pe(x),multipleValues:E,nearestValue:S,current:h}:lt({name:p,units:m})?{name:"elevation",units:m,extent:le(c),unitSymbol:g,default:le(x),multipleValues:E,nearestValue:S}:{name:p,units:m,extent:ue(c),unitSymbol:g,default:ue(x),multipleValues:E,nearestValue:S}}),t}function ot(e){return Array.isArray(e)&&e.length>0&&e[0]instanceof Date}function xe(e){return e.nodeType===Node.ELEMENT_NODE}function lt(e){return/^elevation$/i.test(e.name)&&/^(epsg|crs):\d+$/i.test(e.units)}function we(e){return/^time$/i.test(e.name)&&/^iso8601$/i.test(e.units)}function ut(e,r){const n=[],t=Ae(e);for(const s in t.query)t.query.hasOwnProperty(s)&&(r.includes(s.toLowerCase())||n.push(s+"="+t.query[s]));return t.path+(n.length?"?"+n.join("&"):"")}function le(e){if(!e)return null;const r=e.includes("/"),n=e.split(",");return r?n.map(t=>{const s=t.split("/");return s.length<2?null:{min:parseFloat(s[0]),max:parseFloat(s[1]),resolution:s.length>=3&&s[2]!=="0"?parseFloat(s[2]):void 0}}).filter(t=>t):n.map(t=>parseFloat(t))}function ue(e){if(!e)return null;const r=e.includes("/"),n=e.split(",");return r?n.map(t=>{const s=t.split("/");return s.length<2?null:{min:s[0],max:s[1],resolution:s.length>=3&&s[2]!=="0"?s[2]:void 0}}).filter(t=>t):n}function pe(e){if(!e)return null;const r=e.includes("/"),n=e.split(",");return r?n.map(t=>{const s=t.split("/");return s.length<2?null:{min:new Date(s[0]),max:new Date(s[1]),resolution:s.length>=3&&s[2]!=="0"?pt(s[2]):void 0}}).filter(t=>t):n.map(t=>new Date(t))}function pt(e){const r=/(?:p(\d+y|\d+(?:.|,)\d+y)?(\d+m|\d+(?:.|,)\d+m)?(\d+d|\d+(?:.|,)\d+d)?)?(?:t(\d+h|\d+(?:.|,)\d+h)?(\d+m|\d+(?:.|,)\d+m)?(\d+s|\d+(?:.|,)\d+s)?)?/i,n=e.match(r);return n?{years:R(n[1]),months:R(n[2]),days:R(n[3]),hours:R(n[4]),minutes:R(n[5]),seconds:R(n[6])}:null}function R(e){if(!e)return 0;const r=/(?:\d+(?:.|,)\d+|\d+)/,n=e.match(r);if(!n)return 0;const t=n[0].replace(",",".");return Number(t)}function $(e){return e.toISOString().replace(/\.[0-9]{3}/,"")}const ce=new Set([102100,3857,102113,900913]),ct=new Set([3395,54004]);function dt(e,r){let n=e.wkid;return L(r)?n:(!r.includes(n)&&e.latestWkid&&(n=e.latestWkid),ce.has(n)?r.find(t=>ce.has(t))||r.find(t=>ct.has(t))||102100:n)}const H=new Ue({bmp:"image/bmp",gif:"image/gif",jpg:"image/jpeg",png:"image/png",svg:"image/svg+xml"},{ignoreUnknown:!1});function de(e){return e==="text/html"}function me(e){return e==="text/plain"}let d=class extends _e(Me(je(Te(Ce(qe(Be(tt))))))){constructor(...e){super(...e),this.allSublayers=new Ve({getCollections:()=>[this.sublayers],getChildrenFunction:r=>r.sublayers}),this.customParameters=null,this.customLayerParameters=null,this.copyright=null,this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.featureInfoFormats=null,this.featureInfoUrl=null,this.fetchFeatureInfoFunction=null,this.imageFormat=null,this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.legendEnabled=!0,this.mapUrl=null,this.isReference=null,this.operationalLayerType="WMS",this.spatialReference=null,this.spatialReferences=null,this.sublayers=null,this.type="wms",this.url=null,this.version=null,this.addHandles([k(()=>this.sublayers,"after-add",({item:r})=>{r.parent=r.layer=this},P),k(()=>this.sublayers,"after-remove",({item:r})=>{r.layer=r.parent=null},P),ye(()=>this.sublayers,(r,n)=>{if(n)for(const t of n)t.layer=t.parent=null;if(r)for(const t of r)t.parent=t.layer=this},P)])}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}load(e){const r=I(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]},e).catch(ke).then(()=>this._fetchService(r))),Promise.resolve(this)}readFullExtentFromItemOrMap(e,r){const n=r.extent;return n?new A({xmin:n[0][0],ymin:n[0][1],xmax:n[1][0],ymax:n[1][1]}):null}writeFullExtent(e,r){r.extent=[[e.xmin,e.ymin],[e.xmax,e.ymax]]}get featureInfoFormat(){var e,r;return L(this.featureInfoFormats)?null:(r=(e=this.featureInfoFormats.find(de))!=null?e:this.featureInfoFormats.find(me))!=null?r:null}set featureInfoFormat(e){I(e)?(de(e)||me(e))&&this._override("featureInfoFormat",e):(this.revert("featureInfoFormat","service"),this._clearOverride("featureInfoFormat"))}readImageFormat(e,r){const n=r.supportedImageFormatTypes;return n&&n.includes("image/png")?"image/png":n&&n[0]}readSpatialReferenceFromItemOrDocument(e,r){return new O(r.spatialReferences[0])}writeSpatialReferences(e,r){var t;const n=(t=this.spatialReference)==null?void 0:t.wkid;e&&n?(r.spatialReferences=e.filter(s=>s!==n),r.spatialReferences.unshift(n)):r.spatialReferences=e}readSublayersFromItemOrMap(e,r,n){return fe(r.layers,n,r.visibleLayers)}readSublayers(e,r,n){return fe(r.layers,n)}writeSublayers(e,r,n,t){var o,f;r.layers=[];const s=new Map,l=e.flatten(({sublayers:i})=>i);for(const i of l)if(typeof((o=i.parent)==null?void 0:o.id)=="number"){const p=s.get(i.parent.id);p!=null?p.push(i.id):s.set(i.parent.id,[i.id])}for(const i of l){const p={sublayer:i,...t},m=i.write({parentLayerId:typeof((f=i.parent)==null?void 0:f.id)=="number"?i.parent.id:-1},p);if(s.has(i.id)&&(m.sublayerIds=s.get(i.id)),!i.sublayers&&i.name){const c=i.write({},p);delete c.id,r.layers.push(c)}}r.visibleLayers=l.filter(({visible:i,sublayers:p})=>i&&!p).map(({name:i})=>i).toArray()}createExportImageParameters(e,r,n,t){var S;const s=(S=t==null?void 0:t.pixelRatio)!=null?S:1,l=ne({extent:e,width:r})*s,o=new se({layer:this,scale:l}),{xmin:f,ymin:i,xmax:p,ymax:m,spatialReference:c}=e,g=dt(c,this.spatialReferences),x=this.version==="1.3.0"&&J(g)?`${i},${f},${m},${p}`:`${f},${i},${p},${m}`,E=o.toJSON();return{bbox:x,[this.version==="1.3.0"?"crs":"srs"]:isNaN(g)?void 0:"EPSG:"+g,...E}}async fetchImage(e,r,n,t){var m,c;const s=this.mapUrl,l=this.createExportImageParameters(e,r,n,t);if(!l.layers){const g=document.createElement("canvas");return g.width=r,g.height=n,g}const o=(m=t==null?void 0:t.timeExtent)==null?void 0:m.start,f=(c=t==null?void 0:t.timeExtent)==null?void 0:c.end,i=I(o)&&I(f)?o.getTime()===f.getTime()?$(o):`${$(o)}/${$(f)}`:void 0,p={responseType:"image",query:this._mixCustomParameters({width:r,height:n,...l,time:i,...this.refreshParameters}),signal:t==null?void 0:t.signal};return G(s!=null?s:"",p).then(g=>g.data)}async fetchImageBitmap(e,r,n,t){var c,g;const s=this.mapUrl,l=this.createExportImageParameters(e,r,n,t);if(!l.layers){const x=document.createElement("canvas");return x.width=r,x.height=n,x}const o=(c=t==null?void 0:t.timeExtent)==null?void 0:c.start,f=(g=t==null?void 0:t.timeExtent)==null?void 0:g.end,i=I(o)&&I(f)?o.getTime()===f.getTime()?$(o):`${$(o)}/${$(f)}`:void 0,p={responseType:"blob",query:this._mixCustomParameters({width:r,height:n,...l,time:i,...this.refreshParameters}),signal:t==null?void 0:t.signal},m=await G(s!=null?s:"",p).then(x=>x.data);return createImageBitmap(m)}fetchFeatureInfo(e,r,n,t,s){const l=ne({extent:e,width:r}),o=new se({layer:this,scale:l}),f=it(o.visibleSublayers);if(L(this.featureInfoUrl)||L(f))return Promise.resolve([]);if(L(this.fetchFeatureInfoFunction)&&L(this.featureInfoFormat))return Promise.resolve([]);const i=this.version==="1.3.0"?{I:t,J:s}:{x:t,y:s},p={query_layers:f,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:r,height:n,...i},m={...this.createExportImageParameters(e,r,n),...p},c=this._mixCustomParameters(m);return I(this.fetchFeatureInfoFunction)?this.fetchFeatureInfoFunction(c):this._defaultFetchFeatureInfoFunction(We(this.featureInfoUrl,c))}findSublayerById(e){return this.allSublayers.find(r=>r.id===e)}findSublayerByName(e){return this.allSublayers.find(r=>r.name===e)}serviceSupportsSpatialReference(e){return De(this.url)||this.spatialReferences!=null&&this.spatialReferences.some(r=>{const n=r===900913?O.WebMercator:new O({wkid:r});return Ge(n,e)})}_defaultFetchFeatureInfoFunction(e){const r=document.createElement("iframe");r.src=Xe(e),r.style.border="none",r.style.margin="0",r.style.width="100%",r.setAttribute("sandbox","");const n=new He({title:this.title,content:r}),t=new Je({sourceLayer:this,popupTemplate:n});return Promise.resolve([t])}async _fetchService(e){var r;if(!this.resourceInfo){const{path:n,query:t}=(r=this.parsedUrl)!=null?r:{};t!=null&&t.service&&(t.SERVICE=t.service,delete t.service),t!=null&&t.request&&(t.REQUEST=t.request,delete t.request);const{data:s}=await G(n!=null?n:"",{query:{SERVICE:"WMS",REQUEST:"GetCapabilities",...t,...this.customParameters},responseType:"xml",signal:e});this.resourceInfo=st(s)}if(this.parsedUrl){const n=new ze(this.parsedUrl.path),{httpsDomains:t}=Qe.request;n.scheme!=="https"||n.port&&n.port!=="443"||!n.host||t.includes(n.host)||t.push(n.host)}this.read(this.resourceInfo,{origin:"service"})}_mixCustomParameters(e){if(!this.customLayerParameters&&!this.customParameters)return e;const r={...this.customParameters,...this.customLayerParameters};for(const n in r)e[n.toLowerCase()]=r[n];return e}};function mt(e,r){return e.some(n=>{for(const t in n)if(rt(n,t,null,r))return!0;return!1})}function fe(e,r,n){e=e!=null?e:[];const t=new Map;e.every(l=>l.id==null)&&(e=Ye(e)).forEach((l,o)=>l.id=o);for(const l of e){const o=new z;o.read(l,r),n&&!n.includes(o.name)&&(o.visible=!1),t.set(o.id,o)}const s=[];for(const l of e){const o=l.id!=null?t.get(l.id):null;if(o)if(l.parentLayerId!=null&&l.parentLayerId>=0){const f=t.get(l.parentLayerId);if(!f)continue;f.sublayers||(f.sublayers=new Q),f.sublayers.push(o)}else s.push(o)}return s}a([u({readOnly:!0})],d.prototype,"allSublayers",void 0),a([u({json:{type:Object,write:!0}})],d.prototype,"customParameters",void 0),a([u({json:{type:Object,write:!0}})],d.prototype,"customLayerParameters",void 0),a([u({type:String,json:{write:!0}})],d.prototype,"copyright",void 0),a([u()],d.prototype,"description",void 0),a([u({readOnly:!0})],d.prototype,"dimensions",void 0),a([u({json:{type:[[Number]],read:{source:"extent"},write:{target:"extent"},origins:{"web-document":{write:{ignoreOrigin:!0}},"portal-item":{write:{ignoreOrigin:!0}}}}})],d.prototype,"fullExtent",void 0),a([F(["web-document","portal-item"],"fullExtent",["extent"])],d.prototype,"readFullExtentFromItemOrMap",null),a([X(["web-document","portal-item"],"fullExtent",{extent:{type:[[Number]]}})],d.prototype,"writeFullExtent",null),a([u()],d.prototype,"fullExtents",void 0),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],d.prototype,"featureInfoFormat",null),a([u({type:[String],readOnly:!0})],d.prototype,"featureInfoFormats",void 0),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],d.prototype,"featureInfoUrl",void 0),a([u()],d.prototype,"fetchFeatureInfoFunction",void 0),a([u({type:String,json:{origins:{"web-document":{default:"image/png",type:H.jsonValues,read:{reader:H.read,source:"format"},write:{writer:H.write,target:"format"}}}}})],d.prototype,"imageFormat",void 0),a([F("imageFormat",["supportedImageFormatTypes"])],d.prototype,"readImageFormat",null),a([u({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],d.prototype,"imageMaxHeight",void 0),a([u({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],d.prototype,"imageMaxWidth",void 0),a([u()],d.prototype,"imageTransparency",void 0),a([u(Ke)],d.prototype,"legendEnabled",void 0),a([u({type:["show","hide","hide-children"]})],d.prototype,"listMode",void 0),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],d.prototype,"mapUrl",void 0),a([u({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],d.prototype,"isReference",void 0),a([u({type:["WMS"]})],d.prototype,"operationalLayerType",void 0),a([u()],d.prototype,"resourceInfo",void 0),a([u({type:O,json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],d.prototype,"spatialReference",void 0),a([F(["web-document","portal-item"],"spatialReference",["spatialReferences"])],d.prototype,"readSpatialReferenceFromItemOrDocument",null),a([u({type:[Ze],json:{read:!1,origins:{service:{read:!0},"web-document":{read:!1,write:{ignoreOrigin:!0}},"portal-item":{read:!1,write:{ignoreOrigin:!0}}}}})],d.prototype,"spatialReferences",void 0),a([X(["web-document","portal-item"],"spatialReferences")],d.prototype,"writeSpatialReferences",null),a([u({type:Q.ofType(z),json:{write:{target:"layers",overridePolicy(e,r,n){if(mt(this.allSublayers,n))return{ignoreOrigin:!0}}}}})],d.prototype,"sublayers",void 0),a([F(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],d.prototype,"readSublayersFromItemOrMap",null),a([F("service","sublayers",["layers"])],d.prototype,"readSublayers",null),a([X("sublayers",{layers:{type:[z]},visibleLayers:{type:[String]}})],d.prototype,"writeSublayers",null),a([u({json:{read:!1},readOnly:!0,value:"wms"})],d.prototype,"type",void 0),a([u(et)],d.prototype,"url",void 0),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],d.prototype,"version",void 0),d=a([he("esri.layers.WMSLayer")],d);const gt=d;export{gt as default};
