!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("prop-types"),require("react")):"function"==typeof define&&define.amd?define(["prop-types","react"],r):"object"==typeof exports?exports["your-library-name"]=r(require("prop-types"),require("react")):e["your-library-name"]=r(e.PropTypes,e.React)}(window,function(e,r){return function(e){var r={};function n(o){if(r[o])return r[o].exports;var t=r[o]={i:o,l:!1,exports:{}};return e[o].call(t.exports,t,t.exports,n),t.l=!0,t.exports}return n.m=e,n.c=r,n.d=function(e,r,o){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)n.d(o,t,function(r){return e[r]}.bind(null,t));return o},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="/",n(n.s=15)}([function(r,n){r.exports=e},function(e,r){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,r){e.exports=function(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}},function(e,n){e.exports=r},function(e,r,n){"use strict";n.r(r);var o=n(5),t=n.n(o),i=n(6),a=n.n(i),l=n(7),c=n.n(l),u=n(8),s=n.n(u),f=n(9),d=n.n(f),p=n(10),m=n.n(p),y=n(11),b=n.n(y),g=n(1),h=n.n(g),v=n(2),S=n.n(v),O=n(3),L=n.n(O),E=n(0),w=n.n(E),x=function(e){function r(e){var n;return c()(this,r),n=d()(this,m()(r).call(this,e)),S()(h()(h()(n)),"lazyLoad",function(e){n.observer?e.forEach(function(e){e.isIntersecting&&(n.loadMainImg(),n.observer.unobserve(n.img))}):!1===n.isActive&&(n.isActive=!0,setTimeout(function(){n.img.getBoundingClientRect().top<=window.innerHeight&&0<=n.img.getBoundingClientRect().bottom&&"none"!==getComputedStyle(n.img).display&&(document.removeEventListener("scroll",n.lazyLoad),window.removeEventListener("resize",n.lazyLoad),window.removeEventListener("orientationchange",n.lazyLoad),n.loadMainImg()),n.isActive=!1},200))}),S()(h()(h()(n)),"handleImgRef",function(e){n.img=e}),S()(h()(h()(n)),"handleLoad",function(e){var r=n.props,o=r.onPlaceholderLoad,t=r.onLoad,i=r.loadAfterPlaceholderEnd,a=r.useObserverFallback;n.isMainImgLoading?t(e):(o(e),!i&&("IntersectionObserver"in window||a)||n.loadMainImg())}),S()(h()(h()(n)),"handleError",function(e){var r=n.props,o=r.onPlaceholderError,t=r.onError,i=r.loadAfterPlaceholderEnd;n.isMainImgLoading?t(e):(o(e),i&&n.loadMainImg())}),S()(h()(h()(n)),"loadMainImg",function(){var e=n.props,r=e.src,o=e.srcSet,t=e.className,i=e.onLoad,a=e.onError;n.img&&(r||o)&&(n.isMainImgLoading=!0,n.img.onLoad=i,n.img.onError=a,n.img.src=r,n.img.srcSet=o,n.img.className=t)}),n.img=null,n.observer=null,n.isActive=!1,n.isMainImgLoading=!1,n}return b()(r,e),s()(r,[{key:"componentDidMount",value:function(){this.img&&("IntersectionObserver"in window?(this.observer=new IntersectionObserver(this.lazyLoad),this.observer.observe(this.img)):this.img.getBoundingClientRect().top<=window.innerHeight&&0<=this.img.getBoundingClientRect().bottom&&"none"!==getComputedStyle(this.img).display?this.loadMainImg():(document.addEventListener("scroll",this.lazyLoad),window.addEventListener("resize",this.lazyLoad),window.addEventListener("orientationchange",this.lazyLoad)))}},{key:"render",value:function(){var e=this.props,r=e.placeholderSrc,n=e.placeholderSrcSet,o=e.placeholderClassName,i=(e.onPlaceholderLoad,e.onPlaceholderError,e.src),l=e.srcSet,c=(e.className,e.onLoad,e.onError,e.loadAfterPlaceholderEnd,e.useObserverFallback,a()(e,["placeholderSrc","placeholderSrcSet","placeholderClassName","onPlaceholderLoad","onPlaceholderError","src","srcSet","className","onLoad","onError","loadAfterPlaceholderEnd","useObserverFallback"]));return r||n||i||l?L.a.createElement("img",t()({},c,{src:r,srcSet:n,className:o,onLoad:this.handleLoad,onError:this.handleError,ref:this.handleImgRef})):null}}]),r}(O.Component);S()(x,"propTypes",{placeholderSrc:w.a.string,placeholderSrcSet:w.a.string,placeholderClassName:w.a.string,onPlaceholderLoad:w.a.func,onPlaceholderError:w.a.func,src:w.a.string,srcSet:w.a.string,className:w.a.string,onLoad:w.a.func,onError:w.a.func,loadAfterPlaceholderEnd:w.a.bool,useObserverFallback:w.a.bool}),S()(x,"defaultProps",{placeholderSrc:null,placeholderSrcSet:null,placeholderClassName:"",onPlaceholderLoad:function(){},onPlaceholderError:function(){},src:null,srcSet:null,className:"",onLoad:function(){},onError:function(){},loadAfterPlaceholderEnd:!1,useObserverFallback:!0}),r.default=x},function(e,r){function n(){return e.exports=n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},n.apply(this,arguments)}e.exports=n},function(e,r,n){var o=n(12);e.exports=function(e,r){if(null==e)return{};var n,t,i=o(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],0<=r.indexOf(n)||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}},function(e,r){e.exports=function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}},function(e,r){function n(e,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,r,o){return r&&n(e.prototype,r),o&&n(e,o),e}},function(e,r,n){var o=n(13),t=n(1);e.exports=function(e,r){return!r||"object"!==o(r)&&"function"!=typeof r?t(e):r}},function(e,r){function n(r){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(r)}e.exports=n},function(e,r,n){var o=n(14);e.exports=function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&o(e,r)}},function(e,r){e.exports=function(e,r){if(null==e)return{};var n,o,t={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],0<=r.indexOf(n)||(t[n]=e[n]);return t}},function(e,r){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(r){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=o=function(e){return n(e)}:e.exports=o=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},o(r)}e.exports=o},function(e,r){function n(r,o){return e.exports=n=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},n(r,o)}e.exports=n},function(e,r,n){e.exports=n(16)},function(e,r,n){"use strict";n.r(r);var o=n(4);n.d(r,"LazyLoadImg",function(){return o.default}),n.d(r,"default",function(){return o.default})}])});