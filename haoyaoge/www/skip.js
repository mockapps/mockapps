webpackJsonp([71],[function(e,t,r){"use strict";var o=r(1),a=r(5);r(3);o.prepare({requireLogin:!1},function(){var e=localStorage.getItem("LASTGROUPORDERID");if(e&&e.length>0)return localStorage.setItem("LASTGROUPORDERID",""),void a.reset(a.GroupUrl+"?group_order_id="+e);var t=localStorage.getItem("LASTGOODSID");return t&&t.length>0?(localStorage.setItem("LASTGOODSID",""),void a.reset("goods.html?goods_id="+t)):void a.reset("index.html")})}]);