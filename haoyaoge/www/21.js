webpackJsonp([21],{314:function(e,i,n){var o=n(4),m=n(1),t=n(5),s=n(40),c=n(18),d=n(8);e.exports=function(){var e=n(343),i=m.createNodeFromHTML(e),r=!1,l="http://pinduoduo.b0.upaiyun.com/test/default_square.jpg",a=Math.min(o(window).width(),640);if(d.hasAccessToken()){var u=localStorage.getItem("LIKEDATA");u=JSON.parse(u)||{};var h=u.id||[],f=u.time,g=!1;0==f&&(g=!0)}var v=!0,p=[],_=null,k=function(e,i,n,o){null==o&&(o=1),_=avalon.define({$id:"recommend",recommendList:[],recommend_head_visible:!0,lines:o,recommendHeight:Math.max(.52*a*o+30,205*o)+"px",recommendImgHeight:.28*a+"px",recommendMarginTop:n+"px"}),_.recommend_head_visible=i,0==i&&(_.recommendHeight=Math.max(.5*a*o+10,180*o)+"px");for(var m=0;m<e.length;m++){var t=e[m].goods_id;e[m].price=parseFloat(e[m].price/100).toFixed(2),d.hasAccessToken()&&h.indexOf(t)>-1?e[m].islike=!0:e[m].islike=!1,m>=3*o&&(p.push(e[m].thumb_url),e[m].thumb_url=l)}_.recommendList=e,avalon.scan(),T(o)},b=function(e){var i=_.recommendList[e].goods_id;t.forward("goods.html?goods_id="+i)},T=function(e){var i=3*e;o("#recommend .bd li").each(function(e){o("#recommend .bd li").slice(e*i,e*i+i).wrapAll("<ul></ul>")}),s({slideCell:"#recommend",titCell:".hd ul",effect:"left",autoPlay:!1,autoPage:!0,startFun:function(e){e>0&&o(".recommend_img img").each(function(n){Math.floor(n/i)==e&&l==o(this)[0].src&&o(this).attr("src",p[n-i])})}}),o(".recommend_img").each(function(e){o(this).bind("click",function(){b(e)})}),o(".recommend_title").each(function(e){o(this).bind("click",function(){b(e)})}),o(".like_click").each(function(e){o(this).bind("click",function(){var i=o(this).find(".recommend_like"),n=_.recommendList[e].goods_id,s=_.recommendList[e].islike;if(u=localStorage.getItem("LIKEDATA"),u=JSON.parse(u)||{},h=u.id||[],f=u.time,!d.hasAccessToken()){var r="goods.html?goods_id="+n+"&like_flag=true";t.reload("login.html?from="+encodeURIComponent(r))}v&&(s?(v=!1,m.apiRequest("POST","favorite/unlike/"+n,n,function(o){u.time=o,_.recommendList[e].islike=!1,i.removeClass("liked"),h.splice(h.indexOf(n),1),u.id=h,localStorage.setItem("LIKEDATA",JSON.stringify(u)),setTimeout(function(){v=!0},1e3)},null)):(v=!1,m.apiRequest("POST","favorite/like/"+n,n,function(o){u.time=o,_.recommendList[e].islike=!0,i.addClass("liked"),g?(c.show("已加入收藏,可在您的个人中心查看",{showDuration:1e3,center:!0}),g=!1):c.show("已加入收藏",{showDuration:500,center:!0}),h.push(n),u.id=h,localStorage.setItem("LIKEDATA",JSON.stringify(u)),setTimeout(function(){v=!0},1e3)},null)))})})},x=function(e,n,m,t,s){r||(n.before?o(n.position).before(i):o(n.position).after(i),r=!0),k(e,m,t,s)};return{load:x}}()},343:function(e,i){e.exports='<div ms-controller="recommend" id="recommend" ms-css-height="recommendHeight" ms-css-margin-top="recommendMarginTop">\n    <div class="recommend_head" ms-if="recommend_head_visible">你可能还喜欢</div>\n    <div class="hd"><ul></ul></div>\n    <div class="bd">\n        <li ms-repeat-recommend="recommendList" ms-class="recommend_li: lines > 1">\n            <div class="recommend_img"><img ms-src="{{recommend.thumb_url}}" ms-css-height="recommendImgHeight"></div>\n            <div class="recommend_title" ms-text="recommend.goods_name"></div>\n            <div class="recommend_price">￥<span ms-text="recommend.price"></span></div>\n            <div class="like_click">\n                <div class="recommend_like" ms-class-liked="recommend.islike"></div>\n            </div>\n        </li>\n    </div>\n</div>'}});