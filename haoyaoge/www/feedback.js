webpackJsonp([61],{0:function(o,e,t){"use strict";t(75);var n=t(4),r=t(1),a=t(5),i=t(3),s=(t(18),t(13));r.prepare({requireLogin:!0},function(){var o=avalon.define({$id:"root",feedbackMsg:"",submit:function(){var e=o.feedbackMsg.trim();if(0==e.length)return void r.showToast("您还没有填写任何反馈哦 ^_^");var t={content:e};r.apiRequest("POST","feedback",t,function(o){return 1!=o?void r.showToast("提交失败，请重试"):(r.showToast("感谢您对昊幺哥的支持和反馈，我们会努力改进！"),void setTimeout(function(){a.back()},1500))},function(o){r.showAlert(s.messageFromCode(o))})},gotoOrder:function(){a.forward("orders.html")}});avalon.scan(),i.hide(),n(".feedback-text").focus()})},75:function(o,e){}});