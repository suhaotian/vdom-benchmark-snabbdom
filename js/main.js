!function e(t,n,r){function i(a,s){if(!n[a]){if(!t[a]){var l="function"==typeof require&&require;if(!s&&l)return l(a,!0);if(o)return o(a,!0);var d=new Error("Cannot find module '"+a+"'");throw d.code="MODULE_NOT_FOUND",d}var u=n[a]={exports:{}};t[a][0].call(u.exports,function(e){var n=t[a][1][e];return i(n?n:e)},u,u.exports,e,t,n,r)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(e,t,n){"use strict";function r(e){var t,n,i=[];for(n=0;n<e.length;++n)t=e[n],null!==t.children?i.push(l("div",{key:t.key},r(t.children))):i.push(l("span",{key:t.key},t.key));return i}function i(e,t,n){this.container=e,this.a=t,this.b=n,this.vnode=null}var o=e("vdom-benchmark-base"),a=e("snabbdom/snabbdom"),s=a.init([]),l=e("snabbdom/h"),d="snabbdom",u="0.1.0";i.prototype.setUp=function(){},i.prototype.tearDown=function(){s(this.vnode,l("div"))},i.prototype.render=function(){var e=document.createElement("div");this.vnode=s(e,l("div",r(this.a))),this.container.appendChild(e)},i.prototype.update=function(){this.vnode=s(this.vnode,l("div",r(this.b)))},document.addEventListener("DOMContentLoaded",function(e){o(d,u,i)},!1)},{"snabbdom/h":2,"snabbdom/snabbdom":5,"vdom-benchmark-base":9}],2:[function(e,t,n){function r(e,t){if(e.ns="http://www.w3.org/2000/svg",void 0!==t)for(var n=0;n<t.length;++n)r(t[n].data,t[n].children)}var i=e("./vnode"),o=e("./is");t.exports=function(e,t,n){var a,s,l,d={};if(3===arguments.length?(d=t,o.array(n)?a=n:o.primitive(n)&&(s=n)):2===arguments.length&&(o.array(t)?a=t:o.primitive(t)?s=t:d=t),o.array(a))for(l=0;l<a.length;++l)o.primitive(a[l])&&(a[l]=i(void 0,void 0,void 0,a[l]));return"s"===e[0]&&"v"===e[1]&&"g"===e[2]&&r(d,a),i(e,d,a,s,void 0)}},{"./is":4,"./vnode":6}],3:[function(e,t,n){function r(e){return document.createElement(e)}function i(e,t){return document.createElementNS(e,t)}function o(e){return document.createTextNode(e)}function a(e,t,n){e.insertBefore(t,n)}function s(e,t){e.removeChild(t)}function l(e,t){e.appendChild(t)}function d(e){return e.parentElement}function u(e){return e.nextSibling}function c(e){return e.tagName}function h(e,t){e.textContent=t}t.exports={createElement:r,createElementNS:i,createTextNode:o,appendChild:l,removeChild:s,insertBefore:a,parentNode:d,nextSibling:u,tagName:c,setTextContent:h}},{}],4:[function(e,t,n){t.exports={array:Array.isArray,primitive:function(e){return"string"==typeof e||"number"==typeof e}}},{}],5:[function(e,t,n){"use strict";function r(e){return void 0===e}function i(e){return void 0!==e}function o(e,t){return e.key===t.key&&e.sel===t.sel}function a(e,t,n){var r,o,a={};for(r=t;n>=r;++r)o=e[r].key,i(o)&&(a[o]=r);return a}function s(e,t){function n(e){return l(t.tagName(e).toLowerCase(),{},[],void 0,e)}function s(e,n){return function(){if(0===--n){var r=t.parentNode(e);t.removeChild(r,e)}}}function p(e,n){var r,o,a=e.data;i(a)&&(i(r=a.hook)&&i(r=r.init)&&r(e),i(r=a.vnode)&&(o=e,e=r));var s,l=e.children,u=e.sel;if(i(u)){var h=u.indexOf("#"),f=u.indexOf(".",h),m=h>0?h:u.length,v=f>0?f:u.length,g=-1!==h||-1!==f?u.slice(0,Math.min(m,v)):u;if(s=e.elm=i(a)&&i(r=a.ns)?t.createElementNS(r,g):t.createElement(g),v>m&&(s.id=u.slice(m+1,v)),f>0&&(s.className=u.slice(v+1).replace(/\./g," ")),d.array(l))for(r=0;r<l.length;++r)t.appendChild(s,p(l[r],n));else d.primitive(e.text)&&t.appendChild(s,t.createTextNode(e.text));for(r=0;r<x.create.length;++r)x.create[r](c,e);r=e.data.hook,i(r)&&(r.create&&r.create(c,e),r.insert&&n.push(e))}else s=e.elm=t.createTextNode(e.text);return i(o)&&(o.elm=e.elm),e.elm}function f(e,n,r,i,o,a){for(;o>=i;++i)t.insertBefore(e,p(r[i],a),n)}function m(e){var t,n,r=e.data;if(i(r)){for(i(t=r.hook)&&i(t=t.destroy)&&t(e),t=0;t<x.destroy.length;++t)x.destroy[t](e);if(i(t=e.children))for(n=0;n<e.children.length;++n)m(e.children[n]);i(t=r.vnode)&&m(t)}}function v(e,n,r,o){for(;o>=r;++r){var a,l,d,u=n[r];if(i(u))if(i(u.sel)){for(m(u),l=x.remove.length+1,d=s(u.elm,l),a=0;a<x.remove.length;++a)x.remove[a](u,d);i(a=u.data)&&i(a=a.hook)&&i(a=a.remove)?a(u,d):d()}else t.removeChild(e,u.elm)}}function g(e,n,i,s){for(var l,d,u,c,h=0,m=0,g=n.length-1,w=n[0],b=n[g],x=i.length-1,_=i[0],C=i[x];g>=h&&x>=m;)r(w)?w=n[++h]:r(b)?b=n[--g]:o(w,_)?(y(w,_,s),w=n[++h],_=i[++m]):o(b,C)?(y(b,C,s),b=n[--g],C=i[--x]):o(w,C)?(y(w,C,s),t.insertBefore(e,w.elm,t.nextSibling(b.elm)),w=n[++h],C=i[--x]):o(b,_)?(y(b,_,s),t.insertBefore(e,b.elm,w.elm),b=n[--g],_=i[++m]):(r(l)&&(l=a(n,h,g)),d=l[_.key],r(d)?(t.insertBefore(e,p(_,s),w.elm),_=i[++m]):(u=n[d],y(u,_,s),n[d]=void 0,t.insertBefore(e,u.elm,w.elm),_=i[++m]));h>g?(c=r(i[x+1])?null:i[x+1].elm,f(e,c,i,m,x,s)):m>x&&v(e,n,h,g)}function y(e,n,a){var s,l;if(i(s=n.data)&&i(l=s.hook)&&i(s=l.prepatch)&&s(e,n),i(s=e.data)&&i(s=s.vnode)&&(e=s),i(s=n.data)&&i(s=s.vnode))return y(e,s,a),void(n.elm=s.elm);var d=n.elm=e.elm,u=e.children,c=n.children;if(e!==n){if(!o(e,n)){var h=t.parentNode(e.elm);return d=p(n,a),t.insertBefore(h,d,e.elm),void v(h,[e],0,0)}if(i(n.data)){for(s=0;s<x.update.length;++s)x.update[s](e,n);s=n.data.hook,i(s)&&i(s=s.update)&&s(e,n)}r(n.text)?i(u)&&i(c)?u!==c&&g(d,u,c,a):i(c)?(i(e.text)&&t.setTextContent(d,""),f(d,null,c,0,c.length-1,a)):i(u)?v(d,u,0,u.length-1):i(e.text)&&t.setTextContent(d,""):e.text!==n.text&&t.setTextContent(d,n.text),i(l)&&i(s=l.postpatch)&&s(e,n)}}var w,b,x={};for(r(t)&&(t=u),w=0;w<h.length;++w)for(x[h[w]]=[],b=0;b<e.length;++b)void 0!==e[b][h[w]]&&x[h[w]].push(e[b][h[w]]);return function(e,i){var a,s,l,d=[];for(a=0;a<x.pre.length;++a)x.pre[a]();for(r(e.sel)&&(e=n(e)),o(e,i)?y(e,i,d):(s=e.elm,l=t.parentNode(s),p(i,d),null!==l&&(t.insertBefore(l,i.elm,t.nextSibling(s)),v(l,[e],0,0))),a=0;a<d.length;++a)d[a].data.hook.insert(d[a]);for(a=0;a<x.post.length;++a)x.post[a]();return i}}var l=e("./vnode"),d=e("./is"),u=e("./htmldomapi.js"),c=l("",{},[],void 0,void 0),h=["create","update","remove","destroy","pre","post"];t.exports={init:s}},{"./htmldomapi.js":3,"./is":4,"./vnode":6}],6:[function(e,t,n){t.exports=function(e,t,n,r,i){var o=void 0===t?void 0:t.key;return{sel:e,data:t,children:n,text:r,elm:i,key:o}}},{}],7:[function(e,t,n){"use strict";function r(){this.running=!1,this.impl=null,this.tests=null,this.reportCallback=null,this.enableTests=!1,this.container=document.createElement("div"),this._runButton=document.getElementById("RunButton"),this._iterationsElement=document.getElementById("Iterations"),this._reportElement=document.createElement("pre"),document.body.appendChild(this.container),document.body.appendChild(this._reportElement);var e=this;this._runButton.addEventListener("click",function(t){if(t.preventDefault(),!e.running){var n=parseInt(e._iterationsElement.value);0>=n&&(n=10),e.run(n)}},!1),this.ready(!0)}var i=e("./executor");r.prototype.ready=function(e){e?this._runButton.disabled="":this._runButton.disabled="true"},r.prototype.run=function(e){var t=this;this.running=!0,this.ready(!1),new i(t.impl,t.container,t.tests,1,function(){new i(t.impl,t.container,t.tests,e,function(e){t._reportElement.textContent=JSON.stringify(e,null," "),t.running=!1,t.ready(!0),null!=t.reportCallback&&t.reportCallback(e)},void 0,!1).start()},void 0,this.enableTests).start()},t.exports=r},{"./executor":8}],8:[function(e,t,n){"use strict";function r(e){var t,n,i,o,a,s=[];for(i=0;i<e.length;i++)if(a=e[i],null!==a.children){for(o=document.createElement("div"),n=r(a.children),t=0;t<n.length;t++)o.appendChild(n[t]);s.push(o)}else o=document.createElement("span"),o.textContent=a.key.toString(),s.push(o);return s}function i(e,t,n){for(var i=document.createElement("div"),o=document.createElement("div"),a=r(t),s=0;s<a.length;s++)o.appendChild(a[s]);i.appendChild(o),i.innerHTML!==n.innerHTML&&(console.log("error in test: "+e),console.log("container.innerHTML:"),console.log(n.innerHTML),console.log("should be:"),console.log(i.innerHTML))}function o(e,t,n,r,i,o,a){void 0===o&&(o=null),this.impl=e,this.container=t,this.tests=n,this.iterations=r,this.cb=i,this.iterCb=o,this.enableTests=a,this._currentTest=0,this._currentIter=0,this._renderSamples=[],this._updateSamples=[],this._result=[],this._tasksCount=n.length*r,this._iter=this.iter.bind(this)}o.prototype.start=function(){this._iter()},o.prototype.finished=function(){this.cb(this._result)},o.prototype.progress=function(){if(0===this._currentTest&&0===this._currentIter)return 0;var e=this.tests;return(this._currentTest*e.length+this._currentIter)/(e.length*this.iterataions)},o.prototype.iter=function(){null!=this.iterCb&&this.iterCb(this);var e=this.tests;if(this._currentTest<e.length){var t=e[this._currentTest];if(this._currentIter<this.iterations){var n,r,o,a;n=new this.impl(this.container,t.data.a,t.data.b),n.setUp(),r=window.performance.now(),n.render(),o=window.performance.now()-r,this.enableTests&&i(t.name+"render()",t.data.a,this.container),r=window.performance.now(),n.update(),a=window.performance.now()-r,this.enableTests&&i(t.name+"update()",t.data.b,this.container),n.tearDown(),this._renderSamples.push(o),this._updateSamples.push(a),this._currentIter++}else this._result.push({name:t.name+" render()",data:this._renderSamples.slice(0)}),this._result.push({name:t.name+" update()",data:this._updateSamples.slice(0)}),this._currentTest++,this._currentIter=0,this._renderSamples=[],this._updateSamples=[];setTimeout(this._iter,0)}else this.finished()},t.exports=o},{}],9:[function(e,t,n){"use strict";function r(e,t){var n=document.createElement("script");n.src=e,n.onload=function(){s.tests=window.generateBenchmarkData().units,s.ready(!0)},document.head.appendChild(n)}function i(e,t,n,r){window.addEventListener("message",function(i){var o=i.data,a=o.type;"tests"===a?(s.tests=o.data,s.reportCallback=function(i){e.postMessage({type:"report",data:{name:t,version:n,samples:i},id:r},"*")},s.ready(!0),e.postMessage({type:"ready",data:null,id:r},"*")):"run"===a&&s.run(o.data.iterations)},!1),e.postMessage({type:"init",data:null,id:r},"*")}function o(e,t,n){var o=function(e){if(""==e)return{};for(var t={},n=0;n<e.length;++n){var r=e[n].split("=",2);1==r.length?t[r[0]]="":t[r[0]]=decodeURIComponent(r[1].replace(/\+/g," "))}return t}(window.location.search.substr(1).split("&"));void 0!==o.name&&(e=o.name),void 0!==o.version&&(t=o.version);var a=o.type;void 0!==o.test&&(s.enableTests=!0,console.log("tests enabled"));var l;if("iframe"===a)l=o.id,void 0===l&&(l=null),i(window.parent,e,t,l);else if("window"===a)null!=window.opener?(l=o.id,void 0===l&&(l=null),i(window.opener,e,t,l)):console.log("Failed to initialize: opener window is NULL");else{var d=o.data;void 0!==d?r(d):console.log("Failed to initialize: cannot load tests data")}s.impl=n}var a=e("./benchmark"),s=new a;if("undefined"==typeof window.performance&&(window.performance={}),!window.performance.now){var l=Date.now();performance.timing&&performance.timing.navigationStart&&(l=performance.timing.navigationStart),window.performance.now=function(){return Date.now()-l}}t.exports=o},{"./benchmark":7}]},{},[1]);
//# sourceMappingURL=main.js.map
