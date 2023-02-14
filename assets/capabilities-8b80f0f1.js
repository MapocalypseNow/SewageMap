import{t as n,r as x}from"./typedArrayUtil-bd69bba0.js";import{n as h,r as s,c as p}from"./context-util-7d5aeb56.js";let a,l;function C(t){const e=h(t);for(;e.length>1;){const o=c(e.shift());if(o.available)return o}return c(e.shift())}function c(t){switch(t){case s.WEBGL1:return m();case s.WEBGL2:return g()}}function m(){return a||(a=T()),a}function g(){return l||(l=S()),l}class E{constructor(){this.available=!1,this.majorPerformanceCaveat=!1,this.maxTextureSize=0,this.supportsVertexShaderSamplers=!1,this.supportsHighPrecisionFragment=!1,this.supportsElementIndexUint=!1,this.supportsStandardDerivatives=!1,this.supportsInstancedArrays=!1,this.supportsTextureFloat=!1,this.supportsTextureHalfFloat=!1,this.supportsColorBufferFloat=!1,this.supportsColorBufferFloatBlend=!1,this.supportsColorBufferHalfFloat=!1}}class B extends E{constructor(){super(...arguments),this.type=s.WEBGL1}}class F extends E{constructor(){super(...arguments),this.type=s.WEBGL2,this.supportsElementIndexUint=!0,this.supportsStandardDerivatives=!0,this.supportsInstancedArrays=!0,this.supportsTextureFloat=!0,this.supportsTextureHalfFloat=!0}}function _(t,e){var i;if(t===s.WEBGL1&&typeof WebGLRenderingContext>"u"||t===s.WEBGL2&&typeof WebGL2RenderingContext>"u")return null;const o=document.createElement("canvas");if(!o)return null;let r=p(o,t,{failIfMajorPerformanceCaveat:!0});if(n(r)&&(r=p(o,t),x(r)&&(e.majorPerformanceCaveat=!0)),n(r))return r;if(t===s.WEBGL1){const f=(i=r.getParameter(r.VERSION))==null?void 0:i.match(/^WebGL\s+([\d.]*)/);if(f){const d=parseFloat(f[1]);e.available=d>=.94}}else e.available=!0;e.maxTextureSize=r.getParameter(r.MAX_TEXTURE_SIZE),e.supportsVertexShaderSamplers=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS)>0;const u=r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT);return u&&(e.supportsHighPrecisionFragment=u.precision>0),r}function T(){const t=new B,e=_(s.WEBGL1,t);return n(e)||(t.supportsElementIndexUint=e.getExtension("OES_element_index_uint")!==null,t.supportsStandardDerivatives=e.getExtension("OES_standard_derivatives")!==null,t.supportsInstancedArrays=e.getExtension("ANGLE_instanced_arrays")!==null,t.supportsTextureFloat=e.getExtension("OES_texture_float")!==null,t.supportsTextureHalfFloat=e.getExtension("OES_texture_half_float")!==null,t.supportsColorBufferFloat=e.getExtension("WEBGL_color_buffer_float")!==null,t.supportsColorBufferFloatBlend=e.getExtension("EXT_float_blend")!==null,t.supportsColorBufferHalfFloat=e.getExtension("EXT_color_buffer_half_float")!==null),t}function S(){const t=new F,e=_(s.WEBGL2,t);return n(e)||(t.supportsColorBufferFloat=e.getExtension("EXT_color_buffer_float")!==null,t.supportsColorBufferFloatBlend=e.getExtension("EXT_float_blend")!==null,t.supportsColorBufferHalfFloat=t.supportsColorBufferFloat||e.getExtension("EXT_color_buffer_half_float")!==null),t}export{C as l};
