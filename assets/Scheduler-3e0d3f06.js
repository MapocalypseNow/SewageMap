import{j as w,e as m,m as G,y as b,n as v,N as I,M as R,d,t as Q}from"./cast-4943406f.js";import{s as B}from"./Error-8814705f.js";import{h as M,r as H}from"./typedArrayUtil-bd69bba0.js";import{p as y,a as g,C as Y,$}from"./promiseUtils-ec14a623.js";import{l as V,h as x,f as q}from"./reactiveUtils-3389689f.js";import{e as j}from"./SimpleObservable-b403cd38.js";import"./ensureType-9613b5f0.js";let p=class{constructor(n){this._observable=new j,this._value=n}get(){return w(this._observable),this._value}set(n){n!==this._value&&(this._value=n,this._observable.notify())}};class W{constructor(){this._tasks=new Array,this._running=new p(!1)}get length(){return this._tasks.length}get running(){return this._running.get()}destroy(){this.cancelAll()}runTask(n){for(;!n.done&&this._process(n);)n.madeProgress()}push(n,a,_){return this._running.set(!0),new Promise((h,t)=>this._tasks.push(new S(h,t,n,a,_)))}unshift(n,a,_){return this._running.set(!0),new Promise((h,t)=>this._tasks.unshift(new S(h,t,n,a,_)))}_process(n){var _;if(this._tasks.length===0)return!1;const a=this._tasks.shift();try{const h=y(a.signal);if(h&&!a.abortCallback)a.reject(g());else{const t=h?(_=a.abortCallback)==null?void 0:_.call(a,g()):a.callback(n);Y(t)?t.then(a.resolve,a.reject):a.resolve(t)}}catch(h){a.reject(h)}return this._running.set(this._tasks.length>0),!0}cancelAll(){const n=g();for(const a of this._tasks)if(a.abortCallback){const _=a.abortCallback(n);a.resolve(_)}else a.reject(n);this._tasks.length=0,this._running.set(!1)}}class S{constructor(n,a,_,h,t){this.resolve=n,this.reject=a,this.callback=_,this.signal=h,this.abortCallback=t}}let T=class extends G{constructor(){super(...arguments),this.SCHEDULER_LOG_SLOW_TASKS=!1,this.FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES=!1}};m([b()],T.prototype,"SCHEDULER_LOG_SLOW_TASKS",void 0),m([b()],T.prototype,"FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES",void 0),T=m([v("esri.views.support.DebugFlags")],T);const X=new T;var o;(function(s){s[s.ANIMATING=0]="ANIMATING",s[s.INTERACTING=1]="INTERACTING",s[s.IDLE=2]="IDLE"})(o||(o={}));var r;(function(s){s.RESOURCE_CONTROLLER="schedule",s.SLIDE="slide",s.STREAM_DATA_LOADER="stream loader",s.ELEVATION_QUERY="elevation query",s.TERRAIN_SURFACE="terrain",s.SURFACE_GEOMETRY_UPDATES="surface geometry updates",s.GRAPHICS_CORE="Graphics3D",s.I3S_CONTROLLER="I3S",s.POINT_CLOUD_LAYER="point cloud",s.FEATURE_TILE_FETCHER="feature fetcher",s.OVERLAY="overlay",s.STAGE="stage",s.GRAPHICS_DECONFLICTOR="graphics deconflictor",s.FILTER_VISIBILITY="Graphics3D filter visibility",s.SCALE_VISIBILITY="Graphics3D scale visibility",s.FRUSTUM_VISIBILITY="Graphics3D frustum visibility",s.POINT_OF_INTEREST_FREQUENT="POI frequent",s.POINT_OF_INTEREST_INFREQUENT="POI infrequent",s.LABELER="labeler",s.FEATURE_QUERY_ENGINE="feature query",s.FEATURE_TILE_TREE="feature tile tree",s.FEATURE_TILE_TREE_ACTIVE="fast feature tile tree",s.ELEVATION_ALIGNMENT="elevation alignment",s.TEXT_TEXTURE_ATLAS="text texture atlas",s.TEXTURE_UNLOAD="texture unload",s.LINE_OF_SIGHT_TOOL="line of sight tool",s.LINE_OF_SIGHT_TOOL_INTERACTIVE="interactive line of sight tool",s.ELEVATION_PROFILE="elevation profile",s.SNAPPING="snapping",s.SHADOW_ACCUMULATOR="shadow accumulator",s.CLOUDS_GENERATOR="cloud generator",s[s.TEST_PRIO=1]="TEST_PRIO"})(r||(r={}));const l=0,L=new Map([[r.RESOURCE_CONTROLLER,l],[r.SLIDE,l],[r.STREAM_DATA_LOADER,l],[r.ELEVATION_QUERY,l],[r.TERRAIN_SURFACE,1],[r.SURFACE_GEOMETRY_UPDATES,1],[r.GRAPHICS_CORE,2],[r.I3S_CONTROLLER,2],[r.POINT_CLOUD_LAYER,2],[r.FEATURE_TILE_FETCHER,2],[r.OVERLAY,4],[r.STAGE,4],[r.GRAPHICS_DECONFLICTOR,4],[r.FILTER_VISIBILITY,4],[r.SCALE_VISIBILITY,4],[r.FRUSTUM_VISIBILITY,4],[r.CLOUDS_GENERATOR,4],[r.POINT_OF_INTEREST_FREQUENT,6],[r.POINT_OF_INTEREST_INFREQUENT,30],[r.LABELER,8],[r.FEATURE_QUERY_ENGINE,8],[r.FEATURE_TILE_TREE,16],[r.FEATURE_TILE_TREE_ACTIVE,l],[r.ELEVATION_ALIGNMENT,12],[r.TEXT_TEXTURE_ATLAS,12],[r.TEXTURE_UNLOAD,12],[r.LINE_OF_SIGHT_TOOL,16],[r.LINE_OF_SIGHT_TOOL_INTERACTIVE,l],[r.SNAPPING,l],[r.SHADOW_ACCUMULATOR,30]]),f=32;function k(s){return L.has(s)?L.get(s):typeof s=="number"?s:1}const N=d(6.5),O=d(1),K=d(30),U=d(1e3/30),C=d(100),P=.9;var A,c;(function(s){class n{constructor(){this._updating=new p(!0),this._microTaskQueued=!1,this._frameNumber=0,this.performanceInfo={total:new I("total"),tasks:new Map},this._frameTaskTimes=new Map,this._budget=new _,this._state=o.INTERACTING,this._tasks=new R,this._runQueue=new R,this._load=0,this._idleStateCallbacks=new R,this._idleUpdatesStartFired=!1,this._maxReschedule=f,this._forceTask=!1,this._debug=!1,this._debugHandle=V(()=>X.SCHEDULER_LOG_SLOW_TASKS,i=>this._debug=i,x);for(const i of Object.keys(r))this.performanceInfo.tasks.set(r[i],new I(r[i]));const t=this;this._test={FRAME_SAFETY_BUDGET:N,INTERACTING_BUDGET:U,IDLE_BUDGET:C,get availableBudget(){return t._budget.budget},usedBudget:0,getBudget:()=>t._budget,setBudget:i=>t._budget=i,updateTask:i=>this._updateTask(i),getState:i=>this._getState(i),getRuntime:i=>this._getRuntime(i),frameTaskTimes:this._frameTaskTimes,resetRuntimes:()=>this._resetRuntimes(),getRunning:()=>this._getRunning()}}get updating(){return this._updating.get()}set updating(t){this._updating.set(t)}destroy(){this._tasks.toArray().forEach(t=>t.remove()),this._tasks.clear(),M(this._debugHandle),this._microTaskQueued=!1,this._updating.set(!1)}activate(){this._budget.done||this._microTaskQueued||(this._microTaskQueued=!0,queueMicrotask(()=>{this._microTaskQueued&&(this._microTaskQueued=!1,this._budget.done||(this._maxReschedule=f,this._schedule(),this.frame()))}))}registerTask(t,i){const e=k(t),u=new a(this,t,i,e);return this._tasks.push(u),this.performanceInfo.tasks.has(t)||this.performanceInfo.tasks.set(t,new I(t)),u}registerIdleStateCallbacks(t,i){const e={idleBegin:t,idleEnd:i};this._idleStateCallbacks.push(e),this.state===o.IDLE&&this._idleUpdatesStartFired&&e.idleBegin();const u=this;return{remove:()=>this._removeIdleStateCallbacks(e),set idleBegin(E){u._idleUpdatesStartFired&&(e.idleEnd(),u._state===o.IDLE&&E()),e.idleBegin=E},set idleEnd(E){e.idleEnd=E}}}get load(){return this._load}set state(t){this._state!==t&&(this._state=t,this.state!==o.IDLE&&this._idleUpdatesStartFired&&(this._idleUpdatesStartFired=!1,this._idleStateCallbacks.forAll(i=>i.idleEnd())))}get state(){return this._state}updateBudget(t){this._test.usedBudget=0,++this._frameNumber;let i=N,e=t.frameDuration,u=O;switch(this.state){case o.IDLE:i=d(0),e=d(Math.max(C,t.frameDuration)),u=K;break;case o.INTERACTING:e=d(Math.max(U,t.frameDuration));case o.ANIMATING:}return e=d(e-t.elapsedFrameTime-i),this.state!==o.IDLE&&e<O&&!this._forceTask?(this._forceTask=!0,!1):(e=d(Math.max(e,u)),this._budget.reset(e,this.state),this._maxReschedule=f,this._updateLoad(),this._schedule())}frame(){switch(this._forceTask=!1,this._microTaskQueued=!1,this.state){case o.IDLE:this._idleUpdatesStartFired||(this._idleUpdatesStartFired=!0,this._idleStateCallbacks.forAll(t=>t.idleBegin())),this._runIdle();break;case o.INTERACTING:this._runInteracting();break;default:this._runAnimating()}this._test.usedBudget=this._budget.elapsed}stopFrame(){this._budget.reset(d(0),this._state),this._budget.madeProgress()}_removeIdleStateCallbacks(t){this._idleUpdatesStartFired&&t.idleEnd(),this._idleStateCallbacks.removeUnordered(t)}removeTask(t){this._tasks.removeUnordered(t),this._runQueue.removeUnordered(t)}_updateTask(t){this._tasks.forAll(i=>{i.name===t&&i.setPriority(t)})}_getState(t){if(this._runQueue.some(e=>e.name===t))return c.SCHEDULED;let i=c.IDLE;return this._tasks.forAll(e=>{e.name===t&&e.needsUpdate&&(e.schedulePriority<=1?i=c.READY:i!==c.READY&&(i=c.WAITING))}),i}_getRuntime(t){let i=0;return this._tasks.forAll(e=>{e.name===t&&(i+=e.runtime)}),i}_resetRuntimes(){this._tasks.forAll(t=>t.runtime=0)}_getRunning(){const t=new Map;if(this._tasks.forAll(e=>{e.needsUpdate&&t.set(e.name,(t.get(e.name)||0)+1)}),t.size===0)return null;let i="";return t.forEach((e,u)=>{i+=e>1?` ${e}x ${u}`:` ${u}`}),i}_runIdle(){this._run()}_runInteracting(){this._run()}_runAnimating(){this._run()}_updateLoad(){const t=this._tasks.reduce((i,e)=>e.needsUpdate?++i:i,0);this._load=this._load*P+t*(1-P)}_schedule(){if(this._maxReschedule<=0)return!1;for(this._runQueue.filterInPlace(t=>!!t.needsUpdate||(t.schedulePriority=t.basePriority,!1)),this._tasks.forAll(t=>{t.basePriority===l&&t.needsUpdate&&!this._runQueue.includes(t)&&this._runQueue.unshift(t)});this._runQueue.length===0;){let t=!1,i=0;if(this._tasks.forAll(e=>{e.needsUpdate&&e.schedulePriority!==0&&e.basePriority!==l&&(!e.task.runOncePerFrame||e.lastFrameRun!==this._frameNumber)&&(t=!0,i=Math.max(i,e.basePriority),e.schedulePriority===1?(e.schedulePriority=0,this._runQueue.push(e)):--e.schedulePriority)}),!t)return this._updating.set(!1),!1;--this._maxReschedule}return this._updating.set(!0),!0}_run(){const t=this._budget.now();this._startFrameTaskTimes();do for(;this._runQueue.length>0;){const i=this._budget.now(),e=this._runQueue.pop();this._budget.resetProgress();try{e.task.runTask(this._budget)}catch(E){B.getLogger("esri.views.support.Scheduler").error(`Exception in task "${e.name}"`,E)}e.schedulePriority=e.basePriority,e.lastFrameRun=this._frameNumber;const u=this._budget.now()-i;if(e.runtime+=u,this._frameTaskTimes.set(e.priority,this._frameTaskTimes.get(e.priority)+u),this._debug&&this._budget.elapsed>2*this._budget.budget&&console.log("Task",e.name,"used",this._budget.elapsed,"of max",this._budget.budget,"ms"),this._budget.remaining<=0)return this._updating.set(this._tasks.some(E=>E.needsUpdate)),void this._recordFrameTaskTimes(this._budget.now()-t)}while(this._schedule());this._updating.set(this._tasks.some(i=>i.needsUpdate)),this._recordFrameTaskTimes(this._budget.now()-t)}_startFrameTaskTimes(){for(const t of Object.keys(r))this._frameTaskTimes.set(r[t],0)}_recordFrameTaskTimes(t){this._frameTaskTimes.forEach((i,e)=>this.performanceInfo.tasks.get(e).record(i)),this.performanceInfo.total.record(t)}get test(){return this._test}}s.Scheduler=n;class a{constructor(t,i,e,u){this._scheduler=t,this.name=i,this._basePriority=u,this.lastFrameRun=0,this.runtime=0,this._queue=new W,this._handles=new Q,this.schedulePriority=this._basePriority,this._task=new p(H(e)?e:this._queue),this._handles.add(q(()=>this.task.running,()=>t.activate()))}get task(){return this._task.get()}get updating(){return this._queue.running}remove(){this.processQueue(D),this._scheduler.removeTask(this),this.schedule=F.schedule,this.reschedule=F.reschedule,this._handles.destroy()}get basePriority(){return this._basePriority}setPriority(t){this.name=t;const i=k(t);this._basePriority!==l&&this.schedulePriority===0||(this.schedulePriority=i),this._basePriority=i}get priority(){return this.name}set priority(t){this.setPriority(t)}get needsUpdate(){return this.updating||this.task.running}schedule(t,i,e){return this._queue.push(t,i,e)}reschedule(t,i,e){return this._queue.unshift(t,i,e)}processQueue(t){this._queue.runTask(t)}}class _{constructor(){this._begin=typeof performance<"u"?performance.now():0,this._budget=0,this._state=o.IDLE,this._done=!1,this._enabled=!0}run(t){return!this.done&&(t()===!0&&this.madeProgress(),!0)}get done(){return this._done}get budget(){return this._budget}madeProgress(){this._done=this.elapsed>=this._budget&&this._enabled}get state(){return this._state}get enabled(){return this._enabled}set enabled(t){this._enabled=t}reset(t,i){this._begin=this.now(),this._budget=t,this._state=i,this._done=!1}get remaining(){return Math.max(this._budget-this.elapsed,0)}now(){return performance.now()}get elapsed(){return performance.now()-this._begin}resetProgress(){this._done=!1}get hasProgressed(){return this._done}}s.Budget=_})(A||(A={})),function(s){s.SCHEDULED="s",s.READY="r",s.WAITING="w",s.IDLE="i"}(c||(c={}));const D=(()=>{const s=new A.Budget;return s.enabled=!1,s})();class z{remove(){}processQueue(){}schedule(n,a,_){try{if(y(a)){const h=g();return _?Promise.resolve(_(h)):Promise.reject(h)}return $(n(D))}catch(h){return Promise.reject(h)}}reschedule(n,a,_){return this.schedule(n,a,_)}}const F=new z;export{D as F,r as I,p as t,F as y};
