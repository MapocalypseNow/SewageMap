import{G as t}from"./geometryEngineBase.js";import{hydratedAdapter as i}from"./hydrated.js";import"./index.js";function a(e){return Array.isArray(e)?e[0].spatialReference:e&&e.spatialReference}function g(e){return t.extendedSpatialReferenceInfo(e)}function m(e,n){return t.clip(i,a(e),e,n)}function h(e,n){return t.cut(i,a(e),e,n)}function w(e,n){return t.contains(i,a(e),e,n)}function R(e,n){return t.crosses(i,a(e),e,n)}function x(e,n,r){return t.distance(i,a(e),e,n,r)}function y(e,n){return t.equals(i,a(e),e,n)}function S(e,n){return t.intersects(i,a(e),e,n)}function A(e,n){return t.touches(i,a(e),e,n)}function D(e,n){return t.within(i,a(e),e,n)}function L(e,n){return t.disjoint(i,a(e),e,n)}function T(e,n){return t.overlaps(i,a(e),e,n)}function V(e,n,r){return t.relate(i,a(e),e,n,r)}function v(e){return t.isSimple(i,a(e),e)}function z(e){return t.simplify(i,a(e),e)}function H(e,n=!1){return t.convexHull(i,a(e),e,n)}function I(e,n){return t.difference(i,a(e),e,n)}function J(e,n){return t.symmetricDifference(i,a(e),e,n)}function N(e,n){return t.intersect(i,a(e),e,n)}function O(e,n=null){return t.union(i,a(e),e,n)}function b(e,n,r,s,c,o){return t.offset(i,a(e),e,n,r,s,c,o)}function j(e,n,r,s=!1){return t.buffer(i,a(e),e,n,r,s)}function q(e,n,r,s,c,o){return t.geodesicBuffer(i,a(e),e,n,r,s,c,o)}function B(e,n,r=!0){return t.nearestCoordinate(i,a(e),e,n,r)}function C(e,n){return t.nearestVertex(i,a(e),e,n)}function E(e,n,r,s){return t.nearestVertices(i,a(e),e,n,r,s)}function f(e){var n,r;return"xmin"in e?"center"in e?e.center:null:"x"in e?e:"extent"in e&&(r=(n=e.extent)==null?void 0:n.center)!=null?r:null}function P(e,n,r){if(e==null)throw new u;const s=e.spatialReference;if((r=r!=null?r:f(e))==null)throw new u;const c=e.constructor.fromJSON(t.rotate(e,n,r));return c.spatialReference=s,c}function G(e,n){if(e==null)throw new u;const r=e.spatialReference;if((n=n!=null?n:f(e))==null)throw new u;const s=e.constructor.fromJSON(t.flipHorizontal(e,n));return s.spatialReference=r,s}function $(e,n){if(e==null)throw new u;const r=e.spatialReference;if((n=n!=null?n:f(e))==null)throw new u;const s=e.constructor.fromJSON(t.flipVertical(e,n));return s.spatialReference=r,s}function k(e,n,r,s){return t.generalize(i,a(e),e,n,r,s)}function F(e,n,r){return t.densify(i,a(e),e,n,r)}function K(e,n,r,s=0){return t.geodesicDensify(i,a(e),e,n,r,s)}function M(e,n){return t.planarArea(i,a(e),e,n)}function Q(e,n){return t.planarLength(i,a(e),e,n)}function U(e,n,r){return t.geodesicArea(i,a(e),e,n,r)}function W(e,n,r){return t.geodesicLength(i,a(e),e,n,r)}function X(e,n){return t.intersectLinesToPoints(i,a(e),e,n)}function Y(e,n){t.changeDefaultSpatialReferenceTolerance(e,n)}function Z(e){t.clearDefaultSpatialReferenceTolerance(e)}class u extends Error{constructor(){super("Illegal Argument Exception")}}export{j as buffer,Y as changeDefaultSpatialReferenceTolerance,Z as clearDefaultSpatialReferenceTolerance,m as clip,w as contains,H as convexHull,R as crosses,h as cut,F as densify,I as difference,L as disjoint,x as distance,y as equals,g as extendedSpatialReferenceInfo,G as flipHorizontal,$ as flipVertical,k as generalize,U as geodesicArea,q as geodesicBuffer,K as geodesicDensify,W as geodesicLength,N as intersect,X as intersectLinesToPoints,S as intersects,v as isSimple,B as nearestCoordinate,C as nearestVertex,E as nearestVertices,b as offset,T as overlaps,M as planarArea,Q as planarLength,V as relate,P as rotate,z as simplify,J as symmetricDifference,A as touches,O as union,D as within};
