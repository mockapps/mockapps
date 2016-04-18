webpackJsonp([9], {
    29: function(o, t, s) {
        var e = s(4),
            i = s(1),
            n = s(7),
            l = s(5),
            a = s(18),
            d = s(8);
        o.exports = function() {
            "use strict";
            var o = s(336),
                t = {
                    HIDE: {
                        bottom: "-64px",
                        opacity: "0.0"
                    },
                    SHOW: {
                        bottom: "64px",
                        opacity: "1.0"
                    }
                },
                r = {},
                c = {},
                u = null,
                g = {},
                m = "goods_list",
                p = m,
                _ = {
                    SHOW: "pullUp_show",
                    HIDE: "pullUp_hide"
                },
                f = {
                    DEFAULT: "正在玩命的加载...",
                    NO_MORE_GOODS: "没有更多的商品了..."
                },
                h = {
                    ON: "loading-spin",
                    OFF: "loading-stop"
                },
                v = 100,
                b = Math.min(e(window).width(), 640),
                L = b - 12,
                w = .34 * b,
                I = function() {
                    var o = e(window).height() / e(window).width();
                    return 1 > o ? 1 / o : o
                },
                D = Math.floor(5 * I()),
                S = 10,
                T = !1,
                x = {},
                O = null,
                j = {},
                k = [],
                y = "",
                R = !0,
                U = !1,
                N = !1,
                G = {
                    PNG: "like.png",
                    GIF: "like.gif"
                },
                E = {
                    PNG: "unlike.png",
                    GIF: "unlike.gif"
                },
                F = "http://pinduoduo.b0.upaiyun.com/test/default_square.jpg",
                C = !1,
                H = function(o) {
                    return "http://pinduoduo.b0.upaiyun.com/like/" + o
                },
                B = function() {
                    null == x[p] && (x[p] = avalon.define({
                        $id: p,
                        visible: !1,
                        goodsList: [],
                        currentList: [],
                        topButtonBottom: t.HIDE.bottom,
                        topButtonOpacity: t.HIDE.opacity,
                        imgHeight: "" + .46875 * (b - 22) + "px",
                        loadingClass: _.SHOW,
                        loadingTxt: f.DEFAULT,
                        loadingRotateClass: h.ON,
                        waitForGoodsLoading: !1,
                        goTopClass: "go_top_" + p,
                        shortenDoing: !1,
                        imgLoadingClass: "imgLoading_" + p,
                        isReady: !1,
                        showLogoFlag: N,
                        recommendHeight: .34 * b + 138 + "px",
                        subjectImgHeight: w + "px",
                        subjectImgWidth: w + "px",
                        priceWidth: Math.min(.4 * e(window).width() + 27, 220) + "px",
                        show: function() {
                            x[p].visible = !0, z()
                        },
                        hide: function() {
                            x[p].visible = !1
                        },
                        goodsListReady: function() {
                            x[p].isReady || (x[p].isReady = !0, i.call(u, !0), u = null)
                        },
                        selectGoods: function(o) {
                            if (o) {
                                var t = g.notRecordScroll ? {} : {
                                        sp: e(document).scrollTop().toString(),
                                        goods_id: o
                                    },
                                    s = i.buildURL(t);
                                l.replaceURL(s, function() {
                                    var t = "goods.html?goods_id=" + o;
                                    g.mallID && (t += "&mall_id=" + g.mallID), l.forward(t)
                                })
                            }
                            i.call(g.selectGoods)
                        },
                        isSoldOut: function(o) {
                            return o != n.SkuStatus.OnSale
                        },
                        gotoMall: function(o, t) {
                            if (event.stopPropagation(), t) {
                                var s = g.notRecordScroll ? {} : {
                                        sp: e(document).scrollTop().toString(),
                                        goods_id: t
                                    },
                                    n = i.buildURL(s);
                                l.replaceURL(n, function() {
                                    var t = "mall_page.html?mall_id=" + o;
                                    l.forward(t)
                                })
                            }
                            i.call(g.gotoMall)
                        },
                        forwardSubjects: function(o, t) {
                            var s = x[p].currentList[t].nearestGoodsID;
                            if (s) {
                                var n = g.notRecordScroll ? {} : {
                                        sp: e(document).scrollTop().toString(),
                                        goods_id: s,
                                        subject_scroll: t + "_" + e(".subject_scroll_" + t).scrollLeft()
                                    },
                                    a = i.buildURL(n);
                                l.replaceURL(a, function() {
                                    var t = "subject.html?subject_id=" + o;
                                    l.forward(t)
                                })
                            }
                        },
                        forwardGoods: function(o, t) {
                            var s = x[p].currentList[t].nearestGoodsID;
                            if (s) {
                                var n = g.notRecordScroll ? {} : {
                                        sp: e(document).scrollTop().toString(),
                                        goods_id: s,
                                        subject_scroll: t + "_" + e(".subject_scroll_" + t).scrollLeft()
                                    },
                                    a = i.buildURL(n);
                                l.replaceURL(a, function() {
                                    var t = "goods.html?goods_id=" + o;
                                    l.forward(t)
                                })
                            }
                            i.call(g.forwardGoods)
                        },
                        onSubjectScroll: function(o) {
                            var t = x[p].currentList[o];
                            if (t)
                                for (var s = document.querySelector("." + t.scrollClass), i = 0; i < t.goodsList.length; i++)
                                    if (s) {
                                        var n = s.getElementsByTagName("img")[i],
                                            l = e(n).offset().left < L && e(n).offset().left + w > 0;
                                        t.goodsList[i].thumbUrl != t.goodsList[i].loadUrl && l && (t.goodsList[i].thumbUrl = t.goodsList[i].loadUrl)
                                    }
                        },
                        showGoodsLoading: function() {
                            var o = x[p].currentList.length;
                            o < x[p].goodsList.length && !x[p].waitForGoodsLoading ? (x[p].loadingClass = _.SHOW, x[p].waitForGoodsLoading = !0, x[p].loadingTxt = f.DEFAULT, x[p].loadingRotateClass = h.ON, setTimeout(function() {
                                x[p].loadingRotateClass = h.OFF, x[p].waitForGoodsLoading = !1, x[p].currentList = x[p].currentList.concat(x[p].goodsList.slice(o, S + o))
                            }, v)) : o >= x[p].goodsList.length && (x[p].loadingClass = _.HIDE, x[p].loadingTxt = f.NO_MORE_GOODS, x[p].loadingRotateClass = h.OFF)
                        },
                        shortenList: function() {
                            x[p].currentList.length <= D || (x[p].currentList = x[p].goodsList.slice(0, D))
                        },
                        goodsLike: function(o) {
                            if (event.stopPropagation(), d.hasAccessToken()) {
                                if (!R) return;
                                o.islike ? (R = !1, i.apiRequest("POST", "favorite/unlike/" + o.goodsID, o.goodsID, function(t) {
                                    j.time = t, o.islike = !1, o.likeImg = H(E.PNG), k.splice(k.indexOf(o.goodsID), 1), j.id = k, localStorage.setItem("LIKEDATA", JSON.stringify(j)), setTimeout(function() {
                                        R = !0
                                    }, 500)
                                }, null)) : (R = !1, i.apiRequest("POST", "favorite/like/" + o.goodsID, o.goodsID, function(t) {
                                    j.time = t, o.islike = !0, o.likeImg = H(G.PNG), k.push(o.goodsID), j.id = k, localStorage.setItem("LIKEDATA", JSON.stringify(j)), U ? (a.show("已加入收藏,可在您的个人中心查看", {
                                        showDuration: 1e3,
                                        center: !0
                                    }), U = !1) : a.show("已加入收藏", {
                                        showDuration: 500,
                                        center: !0
                                    }), setTimeout(function() {
                                        R = !0
                                    }, 1e3)
                                }, null))
                            } else {
                                var t = encodeURIComponent("goods.html?goods_id=" + o.goodsID + "&like_flag=true");
                                l.forward("login.html?from=" + t)
                            }
                        }
                    }))
                },
                P = function(o, t) {
                    if (null != x[p]) {
                        var s = function(o) {
                                for (var t = [], s = 0; s < o.length; s++) {
                                    var e = o[s];
                                    t[s] = {
                                        goodsID: e.goods_id,
                                        goodsName: e.goods_name,
                                        loadUrl: e.hd_thumb_url || e.thumb_url,
                                        thumbUrl: F,
                                        price: (parseFloat(e.price, 10) / 100).toFixed(2)
                                    }, t[s].thumbUrl = 3 > s ? t[s].loadUrl : F
                                }
                                return t
                            },
                            e = function(o) {
                                for (var t = [], e = 0; e < o.length; e++) {
                                    var i = o[e];
                                    i.goods_list = i.goods_list || [], 0 != i.goods_list.length && t.push({
                                        isSubject: !0,
                                        subjectID: i.subject_id,
                                        subjectName: i.subject,
                                        goodsList: s(i.goods_list),
                                        position: parseInt(i.position || 0, 10)
                                    })
                                }
                                return t
                            },
                            l = e(t);
                        l.sort(function(o, t) {
                            return o.position - t.position
                        }), C = l.length > 0;
                        for (var a = 0, d = [], r = 0; r < o.length; r++) {
                            var c = o[r];
                            c.goods_id == O.goodsID && (O.itemIndex = r);
                            try {
                                c.list_desc = JSON.parse(c.list_desc)
                            } catch (u) {
                                c.list_desc = []
                            }
                            for (var g = 0; g < c.list_desc.length; g++) 0 == c.list_desc[g].replace(/\s/g, "").length && (c.list_desc[g] = "");
                            var m = k.indexOf(c.goods_id) < 0 ? !1 : !0,
                                v = H(m ? G.PNG : E.PNG);
                            d.push({
                                goodsID: c.goods_id,
                                imgUrl: i.upaiyunCompress(c.image_url),
                                goodsName: c.goods_name,
                                marketPrice: (c.market_price / 100).toFixed(2),
                                salePrice: (c.group.price / 100).toFixed(2),
                                status: n.SkuStatus.OnSale,
                                eventDesc: c.group.customer_num + "人团",
                                discount: (Math.round(100 * c.group.price / c.market_price) / 10).toFixed(1),
                                imgText: c.list_desc || {},
                                islike: m,
                                likeImg: v,
                                sellerImgUrl: i.upaiyunCompress(c.logo, "mall"),
                                mallID: c.mall_id
                            });
                            for (var b = d[d.length - 1].goodsID; a < l.length && 0 == l[a].position;) l[a].nearestGoodsID = b, l[a].scrollClass = "subject_scroll_" + d.length, d.splice(0, 0, l[a]), a++;
                            for (; a < l.length && r + 1 == l[a].position;) l[a].nearestGoodsID = b, l[a].scrollClass = "subject_scroll_" + d.length, d.push(l[a]), a++
                        }
                        x[p].goodsList = d;
                        var L = D;
                        !A() && O.currentID == p && O.itemIndex >= 0 && (L = O.itemIndex + S), x[p].currentList = x[p].goodsList.slice(0, L), x[p].goodsList.length <= D && (x[p].loadingClass = _.HIDE, x[p].loadingTxt = f.NO_MORE_GOODS, x[p].loadingRotateClass = h.OFF)
                    }
                },
                A = function() {
                    var o = O.sp - e(window).height();
                    return o <= e(document).scrollTop()
                },
                W = function(o, t) {
                    P(o, t), 0 == o.length && x[p].goodsListReady()
                },
                M = function(t, s, n) {
                    function l() {
                        j = localStorage.getItem("LIKEDATA"), j = JSON.parse(j) || {}, k = j.id || [], y = j.time, y != _ ? (y = _, j.time = _, i.apiRequest("GET", "favorite/goods", null, function(o) {
                            var t = [];
                            o = o.goods_list;
                            for (var s = 0; s < o.length; s++) t.push(o[s].goods_id);
                            k = t, j.id = t, localStorage.setItem("LIKEDATA", JSON.stringify(j)), h.resolve()
                        }, function() {
                            h.resolve()
                        }, !1, !1, !0)) : h.resolve()
                    }
                    t.showLogoFlag && (N = !0);
                    var a = t.goods_list || [],
                        _ = t.favorite_update_time,
                        f = t.home_recommend_subjects || [];
                    if (0 == _ && (U = !0), g = n || {}, p = g.id || m, null == O && (O = {
                            currentID: p,
                            sp: parseFloat(i.getParameter("sp") || 0),
                            itemIndex: -1,
                            goodsID: i.getParameter("goods_id"),
                            subjectScroll: i.getParameter("subject_scroll")
                        }), T = g.isIndex || !1, T || (D = S), null == r[p] && (r[p] = i.createNodeFromHTML(i.format(o, p))), u = s, B(), d.hasAccessToken()) {
                        var h = e.Deferred();
                        l(), e.when(h).done(function() {
                            W(a, f)
                        })
                    } else i.saveToLocalStorage("LIKEDATA", null), W(a, f);
                    c[p] ? i.call(u, !0) : (c[p] = !0, document.getElementById(p).appendChild(r[p]), avalon.scan(r[p]))
                },
                q = function() {
                    var o = 2 * e(window).height();
                    for (var s in x) x[s].topButtonBottom = t.HIDE.bottom, x[s].topButtonOpacity = t.HIDE.opacity;
                    e(window).scrollTop() >= o && (x[p].topButtonBottom = t.SHOW.bottom, x[p].topButtonOpacity = t.SHOW.opacity)
                },
                J = function() {
                    return null != e("#load_more") && e("#load_more").offset() ? e(window).scrollTop() + 2 * e(window).height() > e("#load_more").offset().top : !1
                },
                $ = function() {
                    return e(window).scrollTop() < 2 * e(window).height()
                },
                K = function() {
                    for (var o = e(window).scrollTop(), t = e(window).height(), s = Math.max(o - t, 0), i = o + 2 * t, n = document.querySelectorAll(".tuan_g") || [], l = 0; l < n.length; l++) {
                        var a = n[l].offsetTop;
                        if (a >= s && i >= a) {
                            var d = n[l].getElementsByTagName("img")[0];
                            d && d.dataset.url && d.src != d.dataset.url && (d.src = d.dataset.url)
                        }
                    }
                    q(), J() && x[p].showGoodsLoading(), x[p].currentList.length > 0 && $() && x[p].shortenList()
                },
                z = function() {
                    var o = e(".go-top");
                    o.unbind("click"), o.click(function() {
                        event && event.preventDefault(), document.getElementsByTagName("body")[0].scrollTop = 0
                    }), e(window).bind("scroll", K)
                },
                Q = function(o) {
                    if (null != x[p] && x[p].show(), null != O) {
                        if (O.sp > 0 && O.currentID == p ? (document.getElementsByTagName("body")[0].scrollTop = O.sp, O.sp = 0, O.itemIndex = -1) : (document.getElementsByTagName("body")[0].scrollTop = 0, K()), O.subjectScroll) {
                            var t = O.subjectScroll.split("_");
                            if (2 == t.length) {
                                var s = t[0],
                                    n = t[1];
                                e(".subject_scroll_" + s) && e(".subject_scroll_" + s).scrollLeft(n)
                            }
                            O.subjetScroll = null
                        }
                        l.replaceURL(i.buildURL({
                            sp: null,
                            goods_id: null,
                            subject_scroll: null
                        }))
                    }
                    setTimeout(function() {
                        i.call(o)
                    }, 0)
                },
                V = function() {
                    null != x[p] && x[p].hide()
                };
            return {
                load: M,
                show: Q,
                hide: V
            }
        }()
    },
    336: function(o, t) {
        o.exports = '<div ms-controller="{0}">\n<div class="goods-list-wrapper" ms-visible="visible">\n    <div ms-repeat-item="currentList" ms-click="selectGoods(item.goodsID)" data-repeat-rendered="goodsListReady"> \n        <div class ="tuan_recommend" ms-css-height="recommendHeight" ms-if="item.isSubject">\n            <div class="tuan_recommend_head" ms-text="item.subjectName" ms-click="forwardSubjects(item.subjectID, $index)"></div>\n            <div class="tuan_read_more" ms-click="forwardSubjects(item.subjectID, $index)"><span>查看更多</span><img src="assets/img/home_arrow-0417024bbe.png"></div>\n            <div class="tuan_bd" ms-scroll="onSubjectScroll($index)" ms-class={{item.scrollClass}}>\n                <ul class="tuan_recommend_ul">\n                    <li ms-repeat-goods="item.goodsList" ms-click="forwardGoods(goods.goodsID, $outer.$index)">\n                        <img ms-src="goods.thumbUrl" ms-data-url="goods.loadUrl" class="tuan_recommand_forward" ms-css-height="subjectImgHeight" ms-css-width="subjectImgWidth">\n                        <div class="tuan_recommend_title" ms-css-width="subjectImgWidth" ms-text="goods.goodsName"></div>\n                        <div class="tuan_recommend_price">￥<span ms-text="goods.price"></span></div>\n                    </li>\n                </ul>\n            </div>\n            <div class="fugai"></div>\n        </div>\n        <div class="tuan_g" ms-if="!item.isSubject">\n            <i ms-class="sale-out:isSoldOut(item.status)"></i>\n            <div class="tuan_g_img">\n                <img src="http://pinduoduo.b0.upaiyun.com/test/default.jpg"  ms-data-url="item.imgUrl" ms-class="{{imgLoadingClass}}" ms-css-height="imgHeight">\n                <div class="tuan_g_img_text">\n                    <div class="tuan_g_img_item" ms-repeat="item.imgText">\n                        <div class="tuan_g_img_round" ms-if="el.length > 0"></div>\n                        <div class="tuan_img_text_border" ms-if="el.length > 0"><span ms-text="el"></span></div>\n                    </div>\n                </div>\n            </div>\n            <div class="tuan_g_info">\n                <p class="tuan_g_name" ms-text="item.goodsName"></p>\n            </div>\n            <div class="tuan_g_core">\n                <div class="tuan_g_core_img">\n                    <img src="assets/img/tuan_g_core-4935ae4c83.png" />\n                </div>\n                <div class="tuan_g_price" ms-css-width="priceWidth" ms-class="price-big: parseInt(priceWidth) > 170">\n                    <span ms-text="item.eventDesc" ms-class="eventDesc-small: item.eventDesc.length > 5"></span>\n                    <b ms-class="price-small:item.salePrice.length>6">￥{{item.salePrice}}\n                    </b>\n                </div>\n                <div class="tuan_g_btn">{{item.goodsID == 884 ? "详情" : "去开团"}}</div>\n            </div>\n            <div class="like goods_list_like">\n                <img ms-src="item.likeImg">\n                <div ms-click="goodsLike(item)" class="like_click_button"></div>\n            </div>\n        </div>\n    </div>\n    <div id="load_more" ms-class="{{loadingClass}}">\n        <div class="center" ms-if="loadingClass==\'pullUp_show\'">\n            <span>\n                <img ms-class="img_rotate {{loadingRotateClass}}" src="assets/img/pull_loading-1e493b5612.png"/>\n            </span>\n            <span class="orders_text" ms-text="loadingTxt"></span>\n        </div>\n    </div>\n</div>\n<div class="go-top" ms-class="{{goTopClass}}" ms-css-bottom="topButtonBottom" ms-css-opacity="topButtonOpacity"><span>顶部</span></div>\n</div>\n'
    }
});