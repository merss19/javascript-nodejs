var head=function(e){function t(n){if(i[n])return i[n].exports;var o=i[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n=window.webpackJsonp_name_;window.webpackJsonp_name_=function(i,s){for(var r,a,l=0,c=[];l<i.length;l++)a=i[l],o[a]&&c.push.apply(c,o[a]),o[a]=0;for(r in s)e[r]=s[r];for(n&&n(i,s);c.length;)c.shift().call(null,t)};var i={},o={1:0};return t.e=function(e,n){if(0===o[e])return n.call(null,t);if(void 0!==o[e])o[e].push(n);else{o[e]=[n];var i=document.getElementsByTagName("head")[0],s=document.createElement("script");s.type="text/javascript",s.charset="utf-8",s.async=!0,s.src=t.p+""+e+".6ff800173c47413876df.js",i.appendChild(s)}},t.m=e,t.c=i,t.p="/js/",t(0)}([function(e,t,n){n(34),t.init=n(18),t.login=n(30),n(31),t.Modal=n(7),t.fontTest=n(27),t.resizeOnload=n(16),n(29),n(33),n(32),n(28),window.Spinner=n(8)},,function(){var e={matches:Element.prototype.matchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector,remove:function(){var e=this.parentNode;return e?e.removeChild(this):void 0}};for(var t in e)Element.prototype[t]||(Element.prototype[t]=e[t]);try{new CustomEvent("IE has CustomEvent, but doesn't support constructor")}catch(n){window.CustomEvent=function(e,t){var n;return t=t||{bubbles:!1,cancelable:!1,detail:void 0},n=document.createEvent("CustomEvent"),n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n},CustomEvent.prototype=Object.create(window.Event.prototype)}},,,,function(e,t,n){n(2),e.exports=function(e,t){for(;e;){if(e.matches(t))return e;e=e.parentElement}return null}},function(e){function t(){this.render(),this.onClick=this.onClick.bind(this),this.onDocumentKeyDown=this.onDocumentKeyDown.bind(this),this.elem.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onDocumentKeyDown)}t.prototype.render=function(){document.body.insertAdjacentHTML("beforeEnd",'<div class="modal"><div class="modal-dialog"></div></div>'),this.elem=document.body.lastChild,this.contentElem=this.elem.lastChild},t.prototype.onClick=function(e){e.target.classList.contains("close-button")&&this.remove()},t.prototype.onDocumentKeyDown=function(e){27==e.keyCode&&(e.preventDefault(),this.remove())},t.prototype.showOverlay=function(){this.contentElem.classList.add("modal-overlay")},t.prototype.hideOverlay=function(){this.contentElem.classList.remove("modal-overlay")},t.prototype.setContent=function(e){"string"==typeof e?this.contentElem.innerHTML=e:(this.contentElem.innerHTML="",this.contentElem.appendChild(e));var t=this.contentElem.querySelector("[autofocus]");t&&t.focus()},t.prototype.remove=function(){document.body.removeChild(this.elem),document.removeEventListener("keydown",this.onDocumentKeyDown)},e.exports=t},function(e){function t(e){if(e=e||{},this.elem=e.elem,this.size=e.size||"medium",this.class=e.class?" "+e.class:"",this.elemClass=e.elemClass,"medium"!=this.size&&"small"!=this.size)throw new Error("Unsupported size: "+this.size);this.elem||(this.elem=document.createElement("div"))}t.prototype.start=function(){this.elemClass&&this.elem.classList.toggle(this.elemClass),this.elem.insertAdjacentHTML("beforeend",'<span class="spinner spinner_active spinner_'+this.size+this.class+'"><span class="spinner__dot spinner__dot_1"></span><span class="spinner__dot spinner__dot_2"></span><span class="spinner__dot spinner__dot_3"></span></span>')},t.prototype.stop=function(){this.elem.removeChild(this.elem.querySelector(".spinner")),this.elemClass&&this.elem.classList.toggle(this.elemClass)},e.exports=t},,,,function(e){function t(e,t){function n(){return s?(i=arguments,void(o=this)):(e.apply(this,arguments),s=!0,void setTimeout(function(){s=!1,i&&(n.apply(o,i),i=o=null)},t))}var i,o,s=!1;return n}e.exports=t},function(e,t,n){function i(e){e=e||document;var t=Math.max(e.body.scrollHeight,e.documentElement.scrollHeight,e.body.offsetHeight,e.documentElement.offsetHeight,e.body.clientHeight,e.documentElement.clientHeight);return e.documentElement.scrollWidth>e.documentElement.clientWidth&&(o||(o=s()),t+=o),t}var o,s=n(14);e.exports=i},function(e){function t(){var e=document.createElement("div");if(e.style.cssText="visibility:hidden;height:100px",!document.body)throw new Error("getScrollbarHeight called to early: no document.body");document.body.appendChild(e);var t=e.offsetWidth;e.style.overflow="scroll";var n=document.createElement("div");n.style.width="100%",e.appendChild(n);var i=n.offsetWidth;return e.parentNode.removeChild(e),t-i}e.exports=t},function(e,t,n){function i(e,t){function n(e,n){clearTimeout(i),t(e,n)}var i=setTimeout(function(){t(new Error("timeout"))},500);try{(e.contentDocument||e.contentWindow.document).body}catch(r){o(e,n)}if(!e.offsetWidth){var a=e.cloneNode(!0);return a.name="",a.style.height="50px",a.style.position="absolute",a.style.display="block",a.style.top="10000px",a.onload=function(){var t=s(this.contentDocument);e.style.display="block",a.remove(),n(null,t)},void document.body.appendChild(a)}e.style.display="block",e.style.height="1px";var l=s(e.contentDocument);e.style.height="",n(null,l)}function o(){throw new Error("Not implemented yet")}var s=n(13);i.async=function(e,t){setTimeout(function(){i(e,t)},0)},e.exports=i},function(e,t,n){var i=n(15),o=n(6),s=n(12),r=[];t.iframe=function(e){function t(){i.async(e,function(t,n){t&&console.error(t),n&&(e.style.height=n+"px")})}t()},t.codeTabs=function(e){function t(){var t=o(e,".code-tabs"),n=(o(e,"[data-code-tabs-content]"),t.querySelector("[data-code-tabs-switches]")),i=n.firstElementChild;i.offsetWidth>n.offsetWidth?t.classList.add("code-tabs_scroll"):t.classList.remove("code-tabs_scroll")}t(),r.push(t)},window.addEventListener("resize",s(function(){r.forEach(function(e){e()})},200))},,function(e){function t(e){i[e]?i[e]():o[e]=!0}function n(e,t){o[e]?t():i[e]=t}var i={},o={};e.exports={whenReady:t,addHandler:n}},,,,,,,function(e){function t(){return n?"initial":i?"onload":o?"click":null}var n=!0,i=!1,o=!1;document.addEventListener("DOMContentLoaded",function(){setTimeout(function(){n=!1},2e3)}),document.addEventListener("click",function(){o=!0,setTimeout(function(){o=!1},50)}),window.onload=function(){i=!0,setTimeout(function(){i=!1},200)},e.exports=t},,function(e){e.exports=function(){function e(){n!=t.offsetWidth?document.body.classList.remove("no-icons"):setTimeout(e,100)}var t=document.createElement("span");document.body.appendChild(t),t.className="font-test",t.style.fontFamily="serif";var n=t.offsetWidth;t.style.fontFamily="",e()}},function(e,t,n){var i,o=n(6);document.addEventListener("mouseover",function(e){var t=o(e.target,"[data-add-class-on-hover]");t&&(i=t,t.classList.add("hover"))}),document.addEventListener("touchend",function(){setTimeout(function(){i&&(i.classList.remove("hover"),i=null)},500)}),document.addEventListener("mouseout",function(e){var t=o(e.target,"[data-add-class-on-hover]");t!=i&&(i.classList.remove("hover"),i=null)})},function(e,t,n){function i(){u&&console.log.apply(console,arguments)}function o(){i("compactifySidebar");var e=document.querySelector(".sidebar"),t=e.querySelector(".sidebar__content"),n=e.querySelector(".sidebar__inner"),o=e.classList.contains("sidebar_sticky-footer"),s=e.classList.contains("sidebar_compact");if(s){var r;r=o?t.lastElementChild.getBoundingClientRect().top-t.lastElementChild.previousElementSibling.getBoundingClientRect().bottom:t.getBoundingClientRect().bottom-t.lastElementChild.getBoundingClientRect().bottom,i("decompact?",r),r>150&&e.classList.remove("sidebar_compact")}else i(n.scrollHeight,n.clientHeight),n.scrollHeight>n.clientHeight&&(i("compact!"),e.classList.add("sidebar_compact"))}function s(){var e=document.querySelector(".sitetoolbar");if(!e)return void i("no sitetoolbar");var t=e.offsetHeight,n=document.querySelector(".sidebar");n&&(n.style.top=Math.max(e.getBoundingClientRect().bottom,0)+"px",o()),r();var s=l();if(i("scrollCause",s),null!==s)return i("browser scroll"),void(c=window.pageYOffset);var a=window.pageYOffset>c?"down":"up";"up"==a&&window.pageYOffset>t+20&&window.pageYOffset+document.documentElement.clientHeight<document.documentElement.scrollHeight-60?document.body.classList.add("page_bottom-nav"):document.body.classList.remove("page_bottom-nav"),c=window.pageYOffset}function r(){var e=document.documentElement.clientWidth<=d,t=document.querySelector('meta[name="viewport"]').content;t=t.replace(/user-scalable=\w+/,"user-scalable="+(e?"yes":"no")),document.querySelector('meta[name="viewport"]').content=t}var a,l=n(25),c=0,u=!1,d=840;!function(){function e(){i("onWindowScrollAndResizeThrottled",a),a||(a=window.requestAnimationFrame(function(){s(),a=null}))}window.addEventListener("scroll",e),window.addEventListener("resize",e),document.addEventListener("DOMContentLoaded",e)}()},function(e,t,n){function i(){var e=new s,t=new r;e.setContent(t.elem),t.start(),n.e(2,function(){e.remove();var t=n(17).AuthModal;new t},0)}var o=n(18),s=n(7),r=n(8);o.addHandler("login",function(){var e=document.querySelector(".sitetoolbar__login");e.onclick=function(e){e.preventDefault(),i()}}),e.exports=i},function(e){function t(){var e=document.createElement("form");e.innerHTML='<input type="hidden" name="_csrf" value="'+window.csrf+'">',e.method="POST",e.action="/auth/logout",document.body.appendChild(e),e.submit()}document.addEventListener("click",function(e){e.target.hasAttribute("data-action-user-logout")&&(e.preventDefault(),t())}),e.exports=t},function(e,t,n){function i(e){if(!~["INPUT","TEXTAREA","SELECT"].indexOf(document.activeElement.tagName)&&e[r+"Key"]){var t=null;switch(e.keyCode){case 37:t="prev";break;case 39:t="next";break;default:return}var n=document.querySelector('link[rel="'+t+'"]');n&&(document.location=n.href,e.preventDefault())}}function o(){var e,t=r[0].toUpperCase()+r.slice(1),n=document.querySelector('link[rel="next"]');n&&(e=document.querySelector('a[href="'+n.getAttribute("href")+'"] .page__nav-text-shortcut'),e.innerHTML=t+' + <span class="page__nav-text-arr">→</span>');var i=document.querySelector('link[rel="prev"]');i&&(e=document.querySelector('a[href="'+i.getAttribute("href")+'"] .page__nav-text-shortcut'),e.innerHTML=t+' + <span class="page__nav-text-arr">←</span>')}var s=n(37),r=~navigator.userAgent.toLowerCase().indexOf("mac os x")?"ctrl":"alt";s(document,{onRight:function(){var e=document.querySelector('link[rel="prev"]');e&&(document.location=e.href)},onLeft:function(){var e=document.querySelector('link[rel="next"]');e&&(document.location=e.href)}}),document.addEventListener("keydown",i),document.addEventListener("DOMContentLoaded",o)},function(){document.addEventListener("click",function(e){void 0!==e.target.dataset.sidebarToggle&&(document.querySelector(".page").classList.toggle("page_sidebar_on"),document.querySelector(".page").classList.contains("page_sidebar_on")?delete localStorage.noSidebar:localStorage.noSidebar=1)})},function(){document.addEventListener("click",function(e){for(var t=e.target;t;){if(t.className.match(/_unready\b/))return void e.preventDefault();t=t.parentElement}}),document.addEventListener("submit",function(e){e.target.className.match(/_unready\b/)&&event.preventDefault()})},,,function(e){function t(e,t){t=t||{};var n,i,o,s,r,a=t.onRight||function(){},l=t.onLeft||function(){},c=t.tolerance||100,u=t.threshold||150,d=t.allowedTime||500;e.addEventListener("touchstart",function(e){var t=e.changedTouches[0];o=0,n=t.pageX,i=t.pageY,r=Date.now()},!1),e.addEventListener("touchend",function(e){var t=e.changedTouches[0];o=t.pageX-n,s=Date.now()-r,Math.abs(t.pageY-i)>c||s>d||(o>u&&a(e),-u>o&&l(e))},!1)}e.exports=t}]);