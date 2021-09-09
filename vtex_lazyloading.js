/*! lozad.js - v1.16.0 - 2020-09-06
* https://github.com/ApoorvSaxena/lozad.js
* Copyright (c) 2020 Apoorv Saxena; Licensed MIT */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.lozad=e()}(this,function(){"use strict";
/**
   * Detect IE browser
   * @const {boolean}
   * @private
   */var g="undefined"!=typeof document&&document.documentMode,f={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var e=t.querySelector("img"),r=!1;null===e&&(e=document.createElement("img"),r=!0),g&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(e.alt=t.getAttribute("data-alt")),r&&t.append(e)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){for(var a=t.children,o=void 0,i=0;i<=a.length-1;i++)(o=a[i].getAttribute("data-src"))&&(a[i].src=o);t.load()}t.getAttribute("data-poster")&&(t.poster=t.getAttribute("data-poster")),t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"));var n=",";if(t.getAttribute("data-background-delimiter")&&(n=t.getAttribute("data-background-delimiter")),t.getAttribute("data-background-image"))t.style.backgroundImage="url('"+t.getAttribute("data-background-image").split(n).join("'),url('")+"')";else if(t.getAttribute("data-background-image-set")){var d=t.getAttribute("data-background-image-set").split(n),u=d[0].substr(0,d[0].indexOf(" "))||d[0];// Substring before ... 1x
u=-1===u.indexOf("url(")?"url("+u+")":u,1===d.length?t.style.backgroundImage=u:t.setAttribute("style",(t.getAttribute("style")||"")+"background-image: "+u+"; background-image: -webkit-image-set("+d+"); background-image: image-set("+d+")")}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};function A(t){t.setAttribute("data-loaded",!0)}var m=function(t){return"true"===t.getAttribute("data-loaded")},v=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t)};return function(){var r,a,o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},e=Object.assign({},f,t),i=e.root,n=e.rootMargin,d=e.threshold,u=e.load,g=e.loaded,s=void 0;"undefined"!=typeof window&&window.IntersectionObserver&&(s=new IntersectionObserver((r=u,a=g,function(t,e){t.forEach(function(t){(0<t.intersectionRatio||t.isIntersecting)&&(e.unobserve(t.target),m(t.target)||(r(t.target),A(t.target),a(t.target)))})}),{root:i,rootMargin:n,threshold:d}));for(var c,l=v(o,i),b=0;b<l.length;b++)(c=l[b]).getAttribute("data-placeholder-background")&&(c.style.background=c.getAttribute("data-placeholder-background"));return{observe:function(){for(var t=v(o,i),e=0;e<t.length;e++)m(t[e])||(s?s.observe(t[e]):(u(t[e]),A(t[e]),g(t[e])))},triggerLoad:function(t){m(t)||(u(t),A(t),g(t))},observer:s}}});


var _vtex_lazyloading = {
  container: '.shelf-image-container',
  width:208,
  height:208,
  init: function () {
    _vtex_lazyloading.set.imgs();
    _vtex_lazyloading.observe();
  },
  set: {
    imgs: function () {
      var _src, _img;
      jQuery(_vtex_lazyloading.container + ":not('._vtex_lazy_applied')").each(function (ndx, item) {
        _src = jQuery(item).find('noscript').text().match(/src="(.*?)"/)[1];
        if (_src != "") {
          _img = jQuery("<img/>", {
            "data-src": _src
          }).addClass('_lazy').addClass('_lazy-' + ndx).attr("height", _vtex_lazyloading.height).attr("width", _vtex_lazyloading.width);
          jQuery(item).addClass("_vtex_lazy_applied").prepend(_img);
        }
      });
      _vtex_lazyloading.img.check();
      _vtex_lazyloading.set.event.scroll();
    },
    event: {
      scroll: function () {
        jQuery(document).scroll(function () {
          _vtex_lazyloading.img.check();
          lozad('.lozad', {
                    load: function(target) {
                            target.src = target.dataset.src;
                            target.onload = function() {
                                target.classList.add('fadein');
                            }
                    }
            }).observe();
        });
      }
    }
  },
  img: {
    is_visible: function (e) {
    	if(e.length > 0){
    		var rect = e[0].getBoundingClientRect();
    	return (rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth);	
    	}else{
    		_vtex_lazyloading.init();
    	}
    },
    check: function () {
      var _current_img, _src;
      jQuery(_vtex_lazyloading.container + ":not('._loaded')").each(function (ndx, item) {
        _current_img = jQuery(item).find("img");
        if (_vtex_lazyloading.img.is_visible(_current_img)) {
          _src = jQuery(_current_img).attr("data-src");
          jQuery(_current_img).attr("data-src", _src).addClass("lozad");
          jQuery(item).addClass("_loaded");
        }
      });
    }
  },
	observe: function(){
    	lozad('.lozad', {
		    load: function(target) {
		            target.src = target.dataset.src;
		            target.onload = function() {
		                target.classList.add('fadein');
		            }
		    }
		}).observe();
    }
};

jQuery(document).ready(function () {
	_vtex_lazyloading.init();
  
  
  if($("body").hasClass("home")){
  	setInterval(function(){
  		_vtex_lazyloading.init();
  		
  	},1500)
  }
  
  if($("body").hasClass("catalog")){
  	setInterval(function(){
  		_vtex_lazyloading.init();
  		
  	},1500)
  }
});
