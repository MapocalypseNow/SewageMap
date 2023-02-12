import{M as se,B as ce,N as ue,C as fe,f as we,V as pe,_ as I,t as l,e as s,a as _,o as de,s as $,D as m,b as L,k as p,j as S,A as E,F as v,m as he,u as ge,w as h,J as F,Y as B,E as j,c as M,P as ye,Z as R,r as d,W as Q,K as N,Q as me,X as G,d as ve,g as be,h as ee,i as Se,l as q,n as X,p as xe}from"./arcadeUtils.ce22dab4.js";import{registerFunctions as Ie}from"./geomasync.5355adbc.js";import{k as ne,e6 as Z}from"./index.2901469c.js";import"./number.ccbb18e7.js";import"./geometryEngineAsync.01488c97.js";function H(n){return n&&typeof n.then=="function"}const P=100;async function J(n,e){const t=[];for(let r=0;r<e.arguments.length;r++)t.push(await c(n,e.arguments[r]));return t}async function x(n,e,t){return e.preparsed===!0?t(n,null,e.arguments):t(n,e,await J(n,e))}class Fe extends Se{constructor(e,t){super(),this.definition=null,this.context=null,this.definition=e,this.context=t}createFunction(e){return(...t)=>{const r={spatialReference:this.context.spatialReference,console:this.context.console,lrucache:this.context.lrucache,exports:this.context.exports,libraryResolver:this.context.libraryResolver,interceptor:this.context.interceptor,localScope:{},depthCounter:{depth:e.depthCounter+1},globalScope:this.context.globalScope};if(r.depthCounter.depth>64)throw new l(e,s.MaximumCallDepth,null);return D(this.definition,r,t,null)}}call(e,t){return k(e,t,(r,o,i)=>{const a={spatialReference:e.spatialReference,services:e.services,console:e.console,libraryResolver:e.libraryResolver,exports:e.exports,lrucache:e.lrucache,interceptor:e.interceptor,localScope:{},abortSignal:e.abortSignal,globalScope:e.globalScope,depthCounter:{depth:e.depthCounter.depth+1}};if(a.depthCounter.depth>64)throw new l(e,s.MaximumCallDepth,t);return D(this.definition,a,i,t)})}marshalledCall(e,t,r,o){return o(e,t,async(i,a,u)=>{const f={spatialReference:e.spatialReference,globalScope:r.globalScope,depthCounter:{depth:e.depthCounter.depth+1},libraryResolver:e.libraryResolver,exports:e.exports,console:e.console,abortSignal:e.abortSignal,lrucache:e.lrucache,interceptor:e.interceptor,localScope:{}};return u=u.map(w=>!v(w)||w instanceof q?w:X(w,e,o)),X(await D(this.definition,f,u,t),r,o)})}}class C extends xe{constructor(e){super(e)}async global(e){const t=this.executingContext.globalScope[e.toLowerCase()];if(t.valueset||(t.value=await c(this.executingContext,t.node),t.valueset=!0),v(t.value)&&!(t.value instanceof q)){const r=new q;r.fn=t.value,r.parameterEvaluator=k,r.context=this.executingContext,t.value=r}return t.value}setGlobal(e,t){if(v(t))throw new l(null,s.AssignModuleFunction,null);this.executingContext.globalScope[e.toLowerCase()]={value:t,valueset:!0,node:null}}hasGlobal(e){return this.executingContext.exports[e]===void 0&&(e=e.toLowerCase()),this.executingContext.exports[e]!==void 0}async loadModule(e){let t=e.spatialReference;t==null&&(t=new ne({wkid:102100})),this.moduleScope=ie({},e.customfunctions),this.executingContext={spatialReference:t,services:e.services,libraryResolver:new $(e.libraryResolver._moduleSingletons,this.source.syntax.loadedModules),exports:{},abortSignal:e.abortSignal===void 0||e.abortSignal===null?{aborted:!1}:e.abortSignal,globalScope:this.moduleScope,console:e.console?e.console:le,lrucache:e.lrucache,interceptor:e.interceptor,localScope:null,depthCounter:{depth:1}},await c(this.executingContext,this.source.syntax)}}async function k(n,e,t){if(e.preparsed===!0){const o=t(n,null,e.arguments);return H(o),o}const r=t(n,e,await J(n,e));return H(r),r}async function c(n,e,t){if(e.breakpoint&&t!==!0)return await e.breakpoint(),c(n,e,!0);try{switch(e==null?void 0:e.type){case"VariableDeclarator":return await Ue(n,e);case"ImportDeclaration":return await qe(n,e);case"ExportNamedDeclaration":return await Te(n,e);case"VariableDeclaration":return await re(n,e,0);case"BlockStatement":case"Program":return await Ke(n,e);case"FunctionDeclaration":return await Ge(n,e);case"ReturnStatement":return await De(n,e);case"IfStatement":return await Pe(n,e);case"ExpressionStatement":return await je(n,e);case"UpdateExpression":return await Ee(n,e);case"AssignmentExpression":return await Be(n,e);case"ForStatement":return await Ne(n,e);case"WhileStatement":return await Ae(n,e);case"ForInStatement":return await Oe(n,e);case"BreakStatement":return S;case"EmptyStatement":return p;case"ContinueStatement":return E;case"TemplateElement":return await Xe(n,e);case"TemplateLiteral":return await He(n,e);case"Identifier":return await Y(n,e);case"MemberExpression":return await Ve(n,e);case"Literal":return e.value;case"CallExpression":return await Qe(n,e);case"UnaryExpression":return await We(n,e);case"BinaryExpression":return await Je(n,e);case"LogicalExpression":return await Ye(n,e);case"ArrayExpression":return await _e(n,e);case"ObjectExpression":return await Ce(n,e);case"Property":return await Re(n,e);default:throw new l(n,s.Unrecognised,e)}}catch(r){throw ge(n,e,r)}}async function Ce(n,e){const t=[];for(let a=0;a<e.properties.length;a++)t[a]=await c(n,e.properties[a]);const r={},o=new Map;for(let a=0;a<t.length;a++){const u=t[a];if(v(u.value))throw new l(n,s.NoFunctionInDictionary,e);if(h(u.key)===!1)throw new l(n,s.KeyMustBeString,e);let f=u.key.toString();const w=f.toLowerCase();o.has(w)?f=o.get(w):o.set(w,f),u.value===p?r[f]=null:r[f]=u.value}const i=new F(r);return i.immutable=!1,i}async function Re(n,e){const t=await c(n,e.value);return e.key.type==="Identifier"?{key:e.key.name,value:t}:{key:await c(n,e.key),value:t}}async function Ae(n,e){const t={testResult:!0,lastAction:p};if(t.testResult=await c(n,e.test),t.testResult===!1)return p;if(t.testResult!==!0)throw new l(n,s.BooleanConditionRequired,e);for(;t.testResult===!0&&(t.lastAction=await c(n,e.body),t.lastAction!==S)&&!(t.lastAction instanceof m);)if(t.testResult=await c(n,e.test),t.testResult!==!0&&t.testResult!==!1)throw new l(n,s.BooleanConditionRequired,e);return t.lastAction instanceof m?t.lastAction:p}async function z(n,e,t){const r=await c(n,e.body);return t.lastAction=r,t.lastAction===S||t.lastAction instanceof m?(t.testResult=!1,t):(e.update!==null&&await c(n,e.update),t)}async function Me(n,e,t){var r;if(e.test!==null){const o=await c(n,e.test);if(((r=n.abortSignal)==null?void 0:r.aborted)===!0)throw new l(n,s.Cancelled,e);if(t.testResult=o,t.testResult===!1)return t;if(t.testResult!==!0)throw new l(n,s.BooleanConditionRequired,e);return z(n,e,t)}return z(n,e,t)}function O(n,e,t,r,o,i){try{Me(n,e,t).then(()=>{try{t.testResult===!0?++i>P?(i=0,setTimeout(()=>{O(n,e,t,r,o,i)},0)):O(n,e,t,r,o,i):t.lastAction instanceof m?r(t.lastAction):r(p)}catch(a){o(a)}},a=>{o(a)})}catch(a){o(a)}}function Ne(n,e){try{return e.init!==null?c(n,e.init).then(()=>new Promise((t,r)=>{O(n,e,{testResult:!0,lastAction:p},o=>{t(o)},o=>{r(o)},0)})):new Promise((t,r)=>{O(n,e,{testResult:!0,lastAction:p},o=>{t(o)},o=>{r(o)},0)})}catch(t){return Promise.reject(t)}}function T(n,e,t,r,o,i,a,u,f,w){try{if(r<=i)return void u(p);o.value=a==="k"?t[i]:i,c(n,e.body).then(y=>{try{y instanceof m?u(y):y===S?u(p):++w>P?(w=0,setTimeout(()=>{T(n,e,t,r,o,i+1,a,u,f,w)},0)):T(n,e,t,r,o,i+1,a,u,f,w)}catch(K){f(K)}},y=>{f(y)})}catch(y){f(y)}}function U(n,e,t,r,o,i,a,u,f){try{if(t.length()<=o)return void a(p);r.value=i==="k"?t.get(o):o,c(n,e.body).then(w=>{w instanceof m?a(w):w===S?a(p):++f>P?(f=0,setTimeout(()=>{U(n,e,t,r,o+1,i,a,u,f)},0)):U(n,e,t,r,o+1,i,a,u,f)},w=>{u(w)})}catch(w){u(w)}}function V(n,e,t,r,o,i){try{if(i===void 0&&(i="i"),t.length===0)return void r.resolve(p);T(n,e,t,t.length,o,0,i,a=>{r.resolve(a)},a=>{r.reject(a)},0)}catch(a){r.reject(a)}}function ke(n,e,t,r,o,i){try{if(i===void 0&&(i="i"),t.length===0)return void r.resolve(p);U(n,e,t,o,0,i,a=>{r.resolve(a)},a=>{r.reject(a)},0)}catch(a){r.reject(a)}}function Le(n,e,t,r,o){try{V(n,e,t.keys(),r,o,"k")}catch(i){r.reject(i)}}function W(n,e,t,r,o,i,a,u){try{n.next().then(f=>{try{if(f===null)i(p);else{const w=ee.createFromGraphicLikeObject(f.geometry,f.attributes,r);w._underlyingGraphic=f,o.value=w,c(e,t.body).then(y=>{try{y===S?i(p):y instanceof m?i(y):++u>P?(u=0,setTimeout(()=>{W(n,e,t,r,o,i,a,u)},0)):W(n,e,t,r,o,i,a,u)}catch(K){a(K)}},y=>{a(y)})}}catch(w){a(w)}},f=>{a(f)})}catch(f){a(f)}}async function Oe(n,e){return new Promise((t,r)=>{c(n,e.right).then(o=>{try{let i=null;i=e.left.type==="VariableDeclaration"?c(n,e.left):Promise.resolve(),i.then(()=>{try{let a="";if(e.left.type==="VariableDeclaration"){const f=e.left.declarations[0].id;f.type==="Identifier"&&(a=f.name)}else e.left.type==="Identifier"&&(a=e.left.name);if(!a)throw new l(n,s.InvalidIdentifier,e);a=a.toLowerCase();let u=null;if(n.localScope!=null&&n.localScope[a]!==void 0&&(u=n.localScope[a]),u===null&&n.globalScope[a]!==void 0&&(u=n.globalScope[a]),u===null)return void r(new l(n,s.InvalidIdentifier,e));B(o)||h(o)?V(n,e,o,{reject:r,resolve:t},u):j(o)?ke(n,e,o,{reject:r,resolve:t},u):o instanceof F||M(o)?Le(n,e,o,{reject:r,resolve:t},u):ye(o)?W(o.iterator(n.abortSignal),n,e,o,u,f=>{t(f)},f=>{r(f)},0):V(n,e,[],{reject:r,resolve:t},u)}catch(a){r(a)}},r)}catch(i){r(i)}},r)})}async function Ee(n,e){const t=e.argument;if(t.type==="MemberExpression"){const i={t:null},a=await c(n,t.object);let u=null;i.t=a,t.computed===!0?u=await c(n,t.property):t.property.type==="Identifier"&&(u=t.property.name);const f=i.t;let w;if(B(f)){if(!R(u))throw new l(n,s.ArrayAccessorMustBeNumber,e);if(u<0&&(u=f.length+u),u<0||u>=f.length)throw new l(n,s.OutOfBounds,e);w=d(f[u]),f[u]=e.operator==="++"?w+1:w-1}else if(f instanceof F){if(h(u)===!1)throw new l(n,s.KeyAccessorMustBeString,e);if(f.hasField(u)!==!0)throw new l(n,s.FieldNotFound,e,{key:u});w=d(f.field(u)),f.setField(u,e.operator==="++"?w+1:w-1)}else if(f instanceof C){if(h(u)===!1)throw new l(n,s.ModuleAccessorMustBeString,e);if(f.hasGlobal(u)!==!0)throw new l(n,s.ModuleExportNotFound,e);w=d(await f.global(u)),f.setGlobal(u,e.operator==="++"?w+1:w-1)}else{if(!M(f))throw j(f)?new l(n,s.Immutable,e):new l(n,s.InvalidParameter,e);if(h(u)===!1)throw new l(n,s.KeyAccessorMustBeString,e);if(f.hasField(u)!==!0)throw new l(n,s.FieldNotFound,e,{key:u});w=d(f.field(u)),f.setField(u,e.operator==="++"?w+1:w-1)}return e.prefix===!1?w:e.operator==="++"?w+1:w-1}const r=e.argument.type==="Identifier"?e.argument.name.toLowerCase():"";if(!r)throw new l(n,s.InvalidIdentifier,e);let o;if(n.localScope!=null&&n.localScope[r]!==void 0)return o=d(n.localScope[r].value),n.localScope[r]={value:e.operator==="++"?o+1:o-1,valueset:!0,node:e},e.prefix===!1?o:e.operator==="++"?o+1:o-1;if(n.globalScope[r]!==void 0)return o=d(n.globalScope[r].value),n.globalScope[r]={value:e.operator==="++"?o+1:o-1,valueset:!0,node:e},e.prefix===!1?o:e.operator==="++"?o+1:o-1;throw new l(n,s.InvalidIdentifier,e)}function b(n,e,t,r,o){switch(e){case"=":return n===p?null:n;case"/=":return d(t)/d(n);case"*=":return d(t)*d(n);case"-=":return d(t)-d(n);case"+=":return h(t)||h(n)?N(t)+N(n):d(t)+d(n);case"%=":return d(t)%d(n);default:throw new l(o,s.UnsupportedOperator,r)}}async function Be(n,e){const t=e.left;if(t.type==="MemberExpression"){const o=await c(n,e.right),i=await c(n,t.object);let a=null;if(t.computed===!0)a=await c(n,t.property);else{if(t.property.type!=="Identifier")throw new l(n,s.InvalidIdentifier,e);a=t.property.name}if(B(i)){if(!R(a))throw new l(n,s.ArrayAccessorMustBeNumber,e);if(a<0&&(a=i.length+a),a<0||a>i.length)throw new l(n,s.OutOfBounds,e);if(a===i.length){if(e.operator!=="=")throw new l(n,s.OutOfBounds,e);i[a]=b(o,e.operator,i[a],e,n)}else i[a]=b(o,e.operator,i[a],e,n)}else if(i instanceof F){if(h(a)===!1)throw new l(n,s.KeyAccessorMustBeString,e);if(i.hasField(a)===!0)i.setField(a,b(o,e.operator,i.field(a),e,n));else{if(e.operator!=="=")throw new l(n,s.FieldNotFound,e,{key:a});i.setField(a,b(o,e.operator,null,e,n))}}else if(i instanceof C){if(h(a)===!1)throw new l(n,s.KeyAccessorMustBeString,e);if(i.hasGlobal(a)!==!0)throw new l(n,s.ModuleExportNotFound,e);i.setGlobal(a,b(o,e.operator,await i.global(a),e,n))}else{if(!M(i))throw j(i)?new l(n,s.Immutable,e):new l(n,s.InvalidParameter,e);if(h(a)===!1)throw new l(n,s.KeyAccessorMustBeString,e);if(i.hasField(a)===!0)i.setField(a,b(o,e.operator,i.field(a),e,n));else{if(e.operator!=="=")throw new l(n,s.FieldNotFound,e,{key:a});i.setField(a,b(o,e.operator,null,e,n))}}return p}const r=t.name.toLowerCase();if(n.localScope!=null&&n.localScope[r]!==void 0){const o=await c(n,e.right);return n.localScope[r]={value:b(o,e.operator,n.localScope[r].value,e,n),valueset:!0,node:e.right},p}if(n.globalScope[r]!==void 0){const o=await c(n,e.right);return n.globalScope[r]={value:b(o,e.operator,n.globalScope[r].value,e,n),valueset:!0,node:e.right},p}throw new l(n,s.InvalidIdentifier,e)}async function je(n,e){if(e.expression.type==="AssignmentExpression")return c(n,e.expression);if(e.expression.type==="CallExpression"){const r=await c(n,e.expression);return r===p?p:new L(r)}const t=await c(n,e.expression);return t===p?p:new L(t)}async function Pe(n,e){const t=await c(n,e.test);if(t===!0)return c(n,e.consequent);if(t===!1)return e.alternate!==null?c(n,e.alternate):p;throw new l(n,s.BooleanConditionRequired,e)}async function Ke(n,e){return te(n,e,0)}async function te(n,e,t){if(t>=e.body.length)return p;const r=await c(n,e.body[t]);return r instanceof m||r===S||r===E||t===e.body.length-1?r:te(n,e,t+1)}async function De(n,e){if(e.argument===null)return new m(p);const t=await c(n,e.argument);return new m(t)}async function Ge(n,e){const t=e.id.name.toLowerCase();return n.globalScope[t]={valueset:!0,node:null,value:new Fe(e,n)},p}async function qe(n,e){var i,a;const t=e.specifiers[0].local.name.toLowerCase(),r=n.libraryResolver.loadLibrary(t);let o=null;return(i=n.libraryResolver._moduleSingletons)!=null&&i.has(r.uri)?o=n.libraryResolver._moduleSingletons.get(r.uri):(o=new C(r),await o.loadModule(n),(a=n.libraryResolver._moduleSingletons)==null||a.set(r.uri,o)),n.globalScope[t]={value:o,valueset:!0,node:e},p}async function Te(n,e){if(await c(n,e.declaration),e.declaration.type==="FunctionDeclaration")n.exports[e.declaration.id.name.toLowerCase()]="function";else if(e.declaration.type==="VariableDeclaration")for(const t of e.declaration.declarations)n.exports[t.id.name.toLowerCase()]="variable";return p}async function re(n,e,t){return t>=e.declarations.length?p:(await c(n,e.declarations[t]),t===e.declarations.length-1||await re(n,e,t+1),p)}async function Ue(n,e){let t=null;if(t=e.init===null?null:await c(n,e.init),n.localScope!==null){if(t===p&&(t=null),e.id.type!=="Identifier")throw new l(n,s.InvalidIdentifier,e);const o=e.id.name.toLowerCase();return n.localScope!=null&&(n.localScope[o]={value:t,valueset:!0,node:e.init}),p}if(e.id.type!=="Identifier")throw new l(n,s.InvalidIdentifier,e);const r=e.id.name.toLowerCase();return t===p&&(t=null),n.globalScope[r]={value:t,valueset:!0,node:e.init},p}async function Ve(n,e){const t=await c(n,e.object);if(t===null)throw new l(n,s.MemberOfNull,e);if(e.computed===!1){if(e.property.type==="Identifier"){if(t instanceof F||M(t))return t.field(e.property.name);if(t instanceof Z)return Q(t,e.property.name,n,e);if(t instanceof C){if(!t.hasGlobal(e.property.name))throw new l(n,s.InvalidIdentifier,e);return t.global(e.property.name)}throw new l(n,s.InvalidMemberAccessKey,e)}throw new l(n,s.InvalidMemberAccessKey,e)}let r=await c(n,e.property);if(t instanceof F||M(t)){if(h(r))return t.field(r);throw new l(n,s.InvalidMemberAccessKey,e)}if(t instanceof C){if(h(r))return t.global(r);throw new l(n,s.InvalidMemberAccessKey,e)}if(t instanceof Z){if(h(r))return Q(t,r,n,e);throw new l(n,s.InvalidMemberAccessKey,e)}if(B(t)){if(R(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=t.length+r),r>=t.length||r<0)throw new l(n,s.OutOfBounds,e);return t[r]}throw new l(n,s.InvalidMemberAccessKey,e)}if(j(t)){if(R(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=t.length()+r),r>=t.length()||r<0)throw new l(n,s.OutOfBounds,e);return t.get(r)}throw new l(n,s.InvalidMemberAccessKey,e)}if(h(t)){if(R(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=t.length+r),r>=t.length||r<0)throw new l(n,s.OutOfBounds,e);return t[r]}throw new l(n,s.InvalidMemberAccessKey,e)}throw new l(n,s.InvalidMemberAccessKey,e)}async function We(n,e){const t=await c(n,e.argument);if(I(t)){if(e.operator==="!")return!t;if(e.operator==="-")return-1*d(t);if(e.operator==="+")return 1*d(t);if(e.operator==="~")return~d(t);throw new l(n,s.UnsupportedUnaryOperator,e)}if(e.operator==="-")return-1*d(t);if(e.operator==="+")return 1*d(t);if(e.operator==="~")return~d(t);throw new l(n,s.UnsupportedUnaryOperator,e)}async function _e(n,e){const t=[];for(let r=0;r<e.elements.length;r++)t.push(await c(n,e.elements[r]));for(let r=0;r<t.length;r++){if(v(t[r]))throw new l(n,s.NoFunctionInArray,e);t[r]===p&&(t[r]=null)}return t}async function Je(n,e){const t=[];t[0]=await c(n,e.left),t[1]=await c(n,e.right);const r=t[0],o=t[1];switch(e.operator){case"|":case"<<":case">>":case">>>":case"^":case"&":return ve(d(r),d(o),e.operator);case"==":return G(r,o);case"!=":return!G(r,o);case"<":case">":case"<=":case">=":return me(r,o,e.operator);case"+":return h(r)||h(o)?N(r)+N(o):d(r)+d(o);case"-":return d(r)-d(o);case"*":return d(r)*d(o);case"/":return d(r)/d(o);case"%":return d(r)%d(o);default:throw new l(n,s.UnsupportedOperator,e)}}async function Ye(n,e){const t=await c(n,e.left);let r=null;if(!I(t))throw new l(n,s.LogicalExpressionOnlyBoolean,e);switch(e.operator){case"||":if(t===!0)return t;if(r=await c(n,e.right),I(r))return r;throw new l(n,s.LogicExpressionOrAnd,e);case"&&":if(t===!1)return t;if(r=await c(n,e.right),I(r))return r;throw new l(n,s.LogicExpressionOrAnd,e);default:throw new l(n,s.LogicExpressionOrAnd,e)}}async function Y(n,e){const t=e.name.toLowerCase();if(n.localScope!=null&&n.localScope[t]!==void 0){const r=n.localScope[t];if(r.valueset===!0)return r.value;if(r.d!==null)return r.d;r.d=c(n,r.node);const o=await r.d;return r.value=o,r.valueset=!0,o}if(n.globalScope[t]!==void 0){const r=n.globalScope[t];if(r.valueset===!0)return r.value;if(r.d!==null)return r.d;r.d=c(n,r.node);const o=await r.d;return r.value=o,r.valueset=!0,o}throw new l(n,s.InvalidIdentifier,e)}async function Qe(n,e){if(e.callee.type==="MemberExpression"){const t=await c(n,e.callee.object);if(!(t instanceof C))throw new l(n,s.FuncionNotFound,e);const r=e.callee.computed===!1?e.callee.property.name:await c(n,e.callee.property);if(!t.hasGlobal(r))throw new l(n,s.FuncionNotFound,e);const o=await t.global(r);if(!v(o))throw new l(n,s.CallNonFunction,e);return o.call(n,e)}if(e.callee.type!=="Identifier")throw new l(n,s.FuncionNotFound,e);if(n.localScope!=null&&n.localScope[e.callee.name.toLowerCase()]!==void 0){const t=n.localScope[e.callee.name.toLowerCase()];if(v(t.value))return t.value.call(n,e);throw new l(n,s.CallNonFunction,e)}if(n.globalScope[e.callee.name.toLowerCase()]!==void 0){const t=n.globalScope[e.callee.name.toLowerCase()];if(v(t.value))return t.value.call(n,e);throw new l(n,s.CallNonFunction,e)}throw new l(n,s.FuncionNotFound,e)}async function Xe(n,e){return e.value?e.value.cooked:""}function Ze(n,e,t){if(v(n))throw new l(e,s.NoFunctionInTemplateLiteral,t);return n}async function He(n,e){const t=[];for(let i=0;i<e.expressions.length;i++){const a=await c(n,e.expressions[i]);t[i]=N(a)}let r="",o=0;for(const i of e.quasis)r+=i.value?i.value.cooked:"",i.tail===!1&&(r+=t[o]?Ze(t[o],n,e):"",o++);return r}const g={};async function oe(n,e,t,r){const o=await c(n,e.arguments[t]);if(G(o,r))return c(n,e.arguments[t+1]);const i=e.arguments.length-t;return i===1?c(n,e.arguments[t]):i===2?null:i===3?c(n,e.arguments[t+2]):oe(n,e,t+2,r)}async function ae(n,e,t,r){if(r===!0)return c(n,e.arguments[t+1]);if(e.arguments.length-t===3)return c(n,e.arguments[t+2]);const o=await c(n,e.arguments[t+2]);if(I(o)===!1)throw new l(n,s.ModuleExportNotFound,e.arguments[t+2]);return ae(n,e,t+2,o)}async function D(n,e,t,r){const o=n.body;if(t.length!==n.params.length)throw new l(e,s.WrongNumberOfParameters,null);for(let a=0;a<t.length;a++){const u=n.params[a];u.type==="Identifier"&&e.localScope!=null&&(e.localScope[u.name.toLowerCase()]={d:null,value:t[a],valueset:!0,node:null})}const i=await c(e,o);if(i instanceof m)return i.value;if(i===S)throw new l(e,s.UnexpectedToken,r);if(i===E)throw new l(e,s.UnexpectedToken,r);return i instanceof L?i.value:i}se(g,x),ce(g,x),ue(g,x),fe(g,x),we(g,x),Ie({functions:g,compiled:!1,signatures:null,evaluateIdentifier:null,mode:"async",standardFunction:x,standardFunctionAsync:k}),g.iif=async function(n,e){pe(e.arguments===null?[]:e.arguments,3,3,n,e);const t=await c(n,e.arguments[0]);if(I(t)===!1)throw new l(n,s.BooleanConditionRequired,e);return c(n,t?e.arguments[1]:e.arguments[2])},g.decode=async function(n,e){if(e.arguments.length<2)throw new l(n,s.WrongNumberOfParameters,e);if(e.arguments.length===2)return c(n,e.arguments[1]);if((e.arguments.length-1)%2==0)throw new l(n,s.WrongNumberOfParameters,e);return oe(n,e,1,await c(n,e.arguments[0]))},g.when=async function(n,e){if(e.arguments.length<3)throw new l(n,s.WrongNumberOfParameters,e);if(e.arguments.length%2==0)throw new l(n,s.WrongNumberOfParameters,e);const t=await c(n,e.arguments[0]);if(I(t)===!1)throw new l(n,s.BooleanConditionRequired,e.arguments[0]);return ae(n,e,0,t)};const ze={fixSpatialReference:be,parseArguments:J,standardFunction:x,standardFunctionAsync:k,evaluateIdentifier:Y};for(const n in g)g[n]={value:new _(g[n]),valueset:!0,node:null};const A=function(){};function ie(n,e){const t=new A;n==null&&(n={}),e==null&&(e={});const r=new F({newline:`
`,tab:"	",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});r.immutable=!1,t.textformatting={value:r,valueset:!0,node:null};for(const o in e)t[o]={value:new _(e[o]),native:!0,valueset:!0,node:null};for(const o in n)n[o]&&n[o].declaredClass==="esri.Graphic"?t[o]={value:ee.createFromGraphic(n[o]),valueset:!0,node:null}:t[o]={value:n[o],valueset:!0,node:null};return t}function le(n){console.log(n)}A.prototype=g,A.prototype.infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null},A.prototype.pi={value:Math.PI,valueset:!0,node:null};const an=ze;function $e(n){const e={mode:"async",compiled:!1,functions:{},signatures:[],standardFunction:x,standardFunctionAsync:k,evaluateIdentifier:Y};for(let t=0;t<n.length;t++)n[t].registerFunctions(e);for(const t in e.functions)g[t]={value:new _(e.functions[t]),valueset:!0,node:null},A.prototype[t]=g[t];for(let t=0;t<e.signatures.length;t++)de(e.signatures[t],"async")}async function ln(n,e){let t=e.spatialReference;t==null&&(t=new ne({wkid:102100}));let r=null;n.usesModules&&(r=new $(new Map,n.loadedModules));const o=ie(e.vars,e.customfunctions),i={spatialReference:t,services:e.services,exports:{},libraryResolver:r,abortSignal:e.abortSignal===void 0||e.abortSignal===null?{aborted:!1}:e.abortSignal,globalScope:o,console:e.console?e.console:le,lrucache:e.lrucache,interceptor:e.interceptor,localScope:null,depthCounter:{depth:1}};let a=await c(i,n);if(a instanceof m&&(a=a.value),a instanceof L&&(a=a.value),a===p&&(a=null),a===S)throw new l(i,s.IllegalResult,null);if(a===E)throw new l(i,s.IllegalResult,null);if(v(a))throw new l(i,s.IllegalResult,null);return a}$e([he]);export{ln as executeScript,$e as extend,an as functionHelper};
