webpackJsonp([4],{304:function(e,o,t){"use strict";var i=t(1),n=t(7),s=t(3);e.exports=function(){var e=t(324),o=i.createNodeFromHTML(e),a=!1,l=null,d={Refresh:"refresh",Wait:"wait"},c=["多多粉们太热情了，服务器需要休息一下，请稍后重试~","多多体力还没有回复，请稍后重试~"],r={Refresh:"刷新",Wait:"{0} s"},u=null!=localStorage.getItem(n.LocalStorageKey.ShowAlertDelayLoad)?1:0;i.saveToLocalStorage(n.LocalStorageKey.ShowAlertDelayLoad,"1");var b=function(e){l=avalon.define({$id:"alert_delay_load",visible:!1,desc:c[u],buttonLabel:0>=e?r.Refresh:i.format(r.Wait,e),buttonStyle:0>=e?d.Refresh:d.Wait,seconds:e,show:function(){l.visible=!0,i.ui.disableScroll()},hide:function(){l.visible=!1,i.ui.enableScroll()},clickRefresh:function(){event.stopPropagation(),l.seconds>0||(l.visible=!1,i.ui.enableScroll(),Navigation.reload())}})},f=function(){--l.seconds<=0?l.buttonLabel=r.Refresh:(l.buttonLabel=i.format(r.Wait,l.seconds),setTimeout(f,1e3)),l.buttonStyle=l.seconds<=0?d.Refresh:d.Wait,s.hide()},v=function(){l&&l.show()},h=function(){l&&l.hide()},m=function(e){e=e||{},a?l.seconds=e.seconds||0:(document.body.appendChild(o),a=!0,b(e.seconds||0),avalon.scan(o),f()),v(),s.hide()};return{load:m,show:v,hide:h}}()},324:function(e,o){e.exports='<div ms-controller="alert_delay_load" ms-visible="visible">\n    <div class="bg-fill"></div>\n    <div id="delay-load">\n        <img class="head-icon" src="http://pinduoduo.b0.upaiyun.com/jsalert/delay_load_icon.png">\n        <div class="desc" ms-text="desc"></div>\n        <div ms-class="button {{buttonStyle}}" ms-text="buttonLabel" ms-click="clickRefresh()"></div>\n    </div>\n</div>\n'}});