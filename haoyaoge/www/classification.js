webpackJsonp([38],{0:function(t,n,e){"use strict";var o=e(4),i=e(1),a=e(5),r=e(3),u=e(11);i.prepare({requireLogin:!1,regEvents:{onSceneReturn:function(t){t=t||{},t.url&&a.reload(t.url)}}},function(){var t;i.getParameter("test");document.getElementsByTagName("body")[0].scrollTop=0;var n=function(){i.apiRequest("GET","operations",null,function(t){var n=t;s(n)},function(){r.hide()})},s=function(t){c(t),t.length<=0&&r.hide()},c=function(n){t=avalon.define({$id:"categories",data:{visible:!1},categoriesInfo:[],showSearchOption:!1,showSearchView:function(){e(33)(function(t){t.load("forward",function(){t.show()})})},catListReady:function(){document.getElementsByTagName("body")[0].scrollTop=0,t.data.visible=!0,r.hide(),o(".catImgLoading").scrollLoadList({attr:"data-url"}),l()},loadGoodsByCat:function(t,n){a.forward("catgoods.html?opt_id="+t+"&opt_type="+n),localStorage.removeItem("LAST_CAT_INDEX")}}),t.categoriesInfo=n,u.hasNewMsg(),t.showSearchOption=!0,avalon.scan(document.body)},l=function(){var t=o("#go-top"),n=t.parent(),e=2*n.height(),i="-25%",a="20%";t.click(function(){o("body").animate({scrollTop:0},{duration:300})}),t.css({bottom:i,opacity:0}),o(window).scroll(function(){o(window).scrollTop()<e?t.css({bottom:i,opacity:0}):t.css({bottom:a,opacity:1})})};o.fn.scrollLoadList=function(t){var n={attr:"data-url"},e=o.extend({},n,t||{});e.cache=[],o(this).each(function(){var t=this.nodeName.toLowerCase(),n=o(this).attr(e.attr);if(n){var i={obj:o(this),tag:t,url:n};e.cache.push(i)}});var a=function(){var t=o(window).scrollTop(),n=t+o(window).height();return o.each(e.cache,function(e,o){var a=o.obj,r=o.tag,u=i.upaiyunCompress(o.url);if(a){var s=a.offset().top,c=s+a.height();(s>t&&n>s||c>t&&n>c)&&("img"===r?a.attr("src",u):a.load(u),o.obj=null)}}),!1};a(),o(window).bind("scroll",a)},n(),e(12)(function(){})})},11:function(t,n,e){var o=e(1),i=e(6),a=e(8);e(10);t.exports=function(){var t=3e4,n=1,e={Open:0,Close:1,Authentication:2,Message:3},r=null,u=0,s={},c={},l=[],f=0,d=!1,p=void 0!==window.WebSocket,g=function(){return null!=r&&r.readyState==WebSocket.OPEN},h=function(){g()||null!=r&&r.readyState==WebSocket.CONNECTING||!p||(r=new WebSocket(i.pushDomain+"?"+o.buildQuery({access_token:a.getAccessToken(),role:"user"})),r.onopen=function(){setTimeout(function(){w(),m(e.Open)},50)},r.onclose=function(){setTimeout(function(){d=!1,m(e.Close)},50)},r.onerror=function(t){},r.onmessage=function(t){if(null!=t&&null!=t.data){var n=JSON.parse(t.data);if(null!=n){var o=n.response,i="ok"===n.result;if(!i&&null!=n.result,"auth"==o)return i&&(d=!0),m(e.Authentication,i);var a=n.request_id;if(null!=a){var r=c[a];null!=r&&setTimeout(function(){r(n)},50)}m(e.Message,n)}}})},v=function(t,n){if(null==n)return null;var e=u++;return s[e]={type:t,handler:n},e},m=function(t){for(var n=[],e=1;e<arguments.length;++e)n.push(arguments[e]);for(var o in s){var i=s[o];i.type==t&&setTimeout(function(){i.handler.apply(null,n)},50)}},w=function(t){if(p){var e=null;return"object"==typeof t&&(e=n++,t.request_id=e,l.push(t)),g()?(l.forEach(function(t){r.send(JSON.stringify(t))}),l=[]):h(),e}};return{isOpen:g,isSupport:p,hasAuthenticated:function(){return p?d:!1},onOpen:function(t){return v(e.Open,t)},onClose:function(t){return v(e.Close,t)},onAuthenticationResult:function(t){return p?v(e.Authentication,t):void 0},onMessage:function(t){return p?v(e.Message,t):void 0},unregister:function(t){delete s[t]},keepAlive:function(){if(p)if(g()){var n=Date.now();n-f>=t&&(w({cmd:"heartbeat"}),f=n)}else h()},send:function(t){p&&w(t)},request:function(t,n){if(p){var e=w(t);return null==e||null==n?e:void(c[e]=n)}},hasNewMsg:function(t,n){if(p&&a.hasAccessToken()){var e=JSON.parse(localStorage.getItem("LastPersonalMsg"))||{},i=e.key||0,r=e.time||0;if(0==i||t){var u=Date.now().toString(),s={key:i,time:r};if(3e4>u-r&&!t)return s.time=u,void localStorage.setItem("LastPersonalMsg",JSON.stringify(s));var l=0,f=w({cmd:"latest_conversations",page:1,size:20});c[f]=function(t){for(var e=t.conversations,i=document.querySelector("#footer_personal i"),a=0;a<e.length;a++)"read"!=e[a].status&&l++;null!=i&&0!=l&&i.classList.add("fb-badge1"),s.key=l,s.time=u,localStorage.setItem("LastPersonalMsg",JSON.stringify(s)),null!=n&&o.call(n,l)}}}},alertNotSupport:function(t){p||o.showAlert("您的系统版本不支持这个功能(Android系统版本至少为4.3)",function(){o.call(t)})}}}()},12:function(t,n,e){e(2),t.exports=function(t,n){e.e(6,function(o){o?n():t(e(15))})}},33:function(t,n,e){e(2),t.exports=function(t,n){e.e(13,function(o){o?n():t(e(51))})}}});