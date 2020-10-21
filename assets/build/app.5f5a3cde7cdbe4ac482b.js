!function(e){function t(t){for(var o,s,i=t[0],u=t[1],c=t[2],d=0,p=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);for(l&&l(t);p.length;)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={0:0},a=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/assets/build/";var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=u;a.push([4,1]),n()}({25:function(e,t,n){"use strict";function o(e,t,n,o,r,a,s){try{var i=e[a](s),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(o,r)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var s=e.apply(t,n);function i(e){o(s,r,a,i,u,"next",e)}function u(e){o(s,r,a,i,u,"throw",e)}i(void 0)}))}}var a=n(26),s=n(27),i=document.querySelector("#js-upload-container"),u=document.querySelector("#js-support-alert");function c(){i.innerHTML='\n    <div class="heading">Select a file you want to upload:</div>\n    <input type="file" id="js-file-input" />\n  ';var e=i.querySelector("#js-file-input");e.addEventListener("change",(function(){var t=e.files[0];if(t){console.log("demo: selected file",t);var n={endpoint:"https://tusd.tusdemo.net/files/",metadata:{filename:t.name,filetype:t.type},addRequestId:!0};(function(e){return l.apply(this,arguments)})(new s.Upload(t,n)).catch((function(e){console.error(e)}))}}))}function l(){return(l=r(regeneratorRuntime.mark((function e(t){var n,o,r,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.findPreviousUploads();case 2:if(n=e.sent,o=Date.now()-108e5,0!==(n=n.map((function(e){return e.creationTime=new Date(e.creationTime),e})).filter((function(e){return e.creationTime>o})).sort((function(e,t){return t.creationTime-e.creationTime}))).length){e.next=7;break}return e.abrupt("return",d(t));case 7:r=a(n[0].creationTime),i.innerHTML='\n    <div class="heading">You already started uploading this file '.concat(r,'. Do you want to resume this upload?</div>\n    <button data-resume="0" class="button button-primary">Yes, resume</button>\n    <button data-resume="false">No, start over</button>\n  '),s=i.querySelectorAll("button[data-resume]"),Array.from(s).forEach((function(e){e.addEventListener("click",(function(e){var o=e.target.getAttribute("data-resume"),r=parseInt(o,10);isNaN(r)||t.resumeFromPreviousUpload(n[r]),d(t)}))}));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){i.innerHTML='\n    <div class="heading">The upload is running:</div>\n    <div class="upload-row">\n      <div class="progress indeterminate">\n        <div class="progress-bar"></div>\n      </div>\n      <button id="js-upload-toggle">Pause</button>\n    </div>\n    <div class="upload-text-progress" id="js-upload-text-progress"></div>\n  ';var t=i.querySelector(".progress"),n=i.querySelector(".progress-bar"),o=i.querySelector("#js-upload-toggle"),r=i.querySelector("#js-upload-text-progress"),a=i.querySelector(".heading"),s=!0;o.addEventListener("click",(function(){s?(e.abort(),s=!1,o.textContent="Resume",a.textContent="The upload is paused:",t.classList.add("paused")):(e.start(),s=!0,o.textContent="Pause",a.textContent="The upload is running:",t.classList.remove("paused"))})),e.options.onError=function(t){if(console.log("demo: error",t),t.originalRequest){var n="The upload was interrupted by a network failure or server error. Usually, this failure will disappear by retrying the upload. If the error does not disappear, please contact us.\n\nDetails: ".concat(t,"\n\nDo you want to retry the upload?");if(window.confirm(n))return void e.start()}else window.alert("Failed because: "+t);c()},e.options.onProgress=function(e,o){var a=(e/o*100).toFixed(2)+"%";t.classList.remove("indeterminate"),n.style.width=a,console.log("demo: progress",e,o,a),r.textContent="Uploaded ".concat(p(e)," of ").concat(p(o)," (").concat(a,")")},e.options.onSuccess=function(){!function(e){i.innerHTML='\n    <div class="heading">The upload is complete!</div>\n\n    <a href="'.concat(e.url,'" target="_blank" class="button button-primary">\n      Download ').concat(e.file.name," (").concat(p(e.file.size),')\n    </a>\n    <br />\n    or\n    <a href="#" id="js-reset-demo">Upload another file</a>\n  '),i.querySelector("#js-reset-demo").addEventListener("click",(function(e){e.preventDefault(),c()}))}(e)},e.start()}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";var n=1024,o=t<0?0:t,r=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],a=Math.floor(Math.log(e)/Math.log(n));return parseFloat((e/Math.pow(n,a)).toFixed(o))+" "+r[a]}s.isSupported||u.classList.remove("hidden"),i?c():console.log("demo: Container not found on this page. Aborting upload-demo.js")},4:function(e,t,n){e.exports=n(5)},43:function(e,t,n){"use strict";var o=["Location","Tus-Resumable","Upload-Offset","Upload-Length","Upload-Metadata"],r=XMLHttpRequest.prototype.open,a=XMLHttpRequest.prototype.setRequestHeader,s=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.open=function(e,t){this._requestDetails={id:Math.round(1e9*Math.random()),method:e.toUpperCase(),url:t,headers:[],time:null,bodySize:null,isTusRequest:!1};for(var n=arguments.length,o=new Array(n>2?n-2:0),a=2;a<n;a++)o[a-2]=arguments[a];r.apply(this,[e,t].concat(o))},XMLHttpRequest.prototype.setRequestHeader=function(e,t){"tus-resumable"===e.toLowerCase()&&(this._requestDetails.isTusRequest=!0),this._requestDetails.headers.push("".concat(e,": ").concat(t)),a.call(this,e,t)},XMLHttpRequest.prototype.send=function(e){var t,n=this;this._requestDetails.isTusRequest?(null!==e&&(this._requestDetails.bodySize=e.size),this._requestDetails.time=new Date,this.addEventListener("load",(function(){var e,t,r;n._responseDetails={status:n.status+" "+n.statusText,headers:[],time:new Date},o.forEach((function(e){var t=n.getResponseHeader(e);null!==t&&n._responseDetails.headers.push("".concat(e,": ").concat(t))})),t=(e=n)._requestDetails,r=e._responseDetails,$(".http-element[data-request-id=".concat(t.id,"] .http-response")).html('\n  <div class="http-desc"><b>Response</b> (received at '.concat(r.time.toLocaleTimeString(),')</div>\n  <div class="http-paragraph">\n    ').concat(r.status,"<br />\n    ").concat(r.headers.join("<br />"),"\n  </div>\n  "))})),s.call(this,e),t=this._requestDetails,$(".http-traffic-list").append('\n  <div class="http-element" data-request-id="'.concat(t.id,'">\n    <div class="http-method-url"><span class="http-method">').concat(t.method,"</span> ").concat(t.url,'</div>\n    <div class="http-block">\n      <div class="http-desc"><b>Request</b> (sent at ').concat(t.time.toLocaleTimeString(),')</div>\n      <div class="http-paragraph">\n        ').concat(t.headers.join("<br />"),"\n        <br />\n        ").concat(t.bodySize?"[Binary body with ".concat(t.bodySize," bytes]"):"[No body sent]",'\n      </div>\n    </div>\n    <div class="http-block http-response">\n      <div class="http-desc"><b>Response</b> (not yet received)</div>\n    </div>\n  </div>\n  '))):s.call(this,e)},$((function(){}))},44:function(e,t,n){},5:function(e,t,n){"use strict";var o=n(1);window.jQuery=o,window.$=o,n(6),n(44)},6:function(e,t,n){"use strict";n(7);var o,r=(o=n(8))&&o.__esModule?o:{default:o};n(9),n(10),n(11),n(12),n(13),n(14),n(15),n(16),n(17),n(18),n(19),n(20),n(21),n(22),n(23),n(24),n(25),n(43),function(e){var t={navToggler:function(){var t=e(".header .toggler"),n=e(".nav-container");t.click((function(){return n.toggleClass("open")})),e(document).click((function(){n.hasClass("open")||n.removeClass("open")}))},versionSelector:function(){var t=e("#js-version-select");t.change((function(){window.location.href=t.val()}))}};e(document).ready((function(){t.navToggler(),t.versionSelector(),e(".on-the-githubs").onthegithubs()}))}(jQuery),r.default.highlightAll()}});
//# sourceMappingURL=app.5f5a3cde7cdbe4ac482b.js.map