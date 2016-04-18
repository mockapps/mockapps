webpackJsonp([12], {
    50: function(n, i, t) {
        "use strict";
        var e = t(4),
            o = t(1),
            r = Math.ceil(Math.min(e(window).width(), 640) / 85),
            a = "http://pinduoduo.b0.upaiyun.com/test/default_square.jpg",
            c = new Date,
            l = c.getMonth() + 1 + "_" + c.getDate(),
            s = "-75",
            u = e(window).width(),
            d = e(window).height(),
            m = 300;
        n.exports = function() {
            var n = t(341),
                i = o.createNodeFromHTML(n),
                c = !1,
                p = null,
                f = null,
                p = avalon.define({
                    $id: "quick-entrance",
                    visible: !1,
                    quickEntrance: [],
                    show: function() {
                        p.visible = !0
                    },
                    quickEntranceRendered: function(n) {
                        o.call(f)
                    },
                    goQuickEntrance: function(n) {
                        n.showTip && (localStorage.setItem(n.key, l), n.showTip = !1), "index_gift" != n.key || o.isNativePlatform() ? Navigation.forward(n.forwardUrl) : t(322)(function(n) {
                            n.load(function() {
                                n.show()
                            })
                        })
                    },
                    onHorizonScroll: function() {
                        for (var n = function(n) {
                                return n >= s && u >= n
                            }, i = document.querySelectorAll(".quick-entrance-cube") || [], t = 0; t < i.length; t++) {
                            var o = i[t].getElementsByTagName("img")[0];
                            if (n(e(o).offset().left)) {
                                var r = p.quickEntrance[t];
                                r.loadImgUrl != r.imgUrl && (r.imgUrl = r.loadImgUrl)
                            }
                        }
                    }
                }),
                g = function() {
                    if (p) {
                        p.show();
                        var n = function(n) {
                                if (n = parseInt(n || "0", 10), d > n) {
                                    for (var t = 0; t < p.quickEntrance.length; t++) {
                                        var o = p.quickEntrance[t];
                                        r > t && o.loadImgUrl != o.imgUrl && (o.imgUrl = o.loadImgUrl)
                                    }
                                    e(window).unbind("scroll", i)
                                }
                            },
                            i = function() {
                                n(e(document).scrollTop())
                            };
                        e(window).bind("scroll", i), setTimeout(function() {
                            n(o.getParameter("sp") || "0")
                        }, m)
                    }
                },
                v = function() {
                    p && p.hide()
                },
                h = function(n, t) {
                    f = t, n = n || [], n.length > 0 && null != n[0].priority && n.sort(function(n, i) {
                        return n.priority - i.priority
                    });
                    for (var e = 0; e < n.length; e++) {
                        var o = n[e];
                        if (o.key) {
                            var r = localStorage.getItem(o.key) || "";
                            o.showTip = l != r
                        }
                        o.loadImgUrl = o.imgUrl, o.imgUrl = a
                    }
                    p.quickEntrance = n, c || (document.querySelector("#" + p.$id).appendChild(i), c = !0), avalon.scan(i)
                };
            return {
                load: h,
                show: g,
                hide: v
            }
        }()
    },
    322: function(n, i, t) {
        t(2), n.exports = function(n, i) {
            t.e(86, function(e) {
                e ? i() : n(t(354))
            })
        }
    },
    341: function(n, i) {
        n.exports = '<ul class="quick-entrance-wrapper" ms-controller="quick-entrance" ms-visible="visible" ms-scroll="onHorizonScroll()">\n    <li ms-repeat-item="quickEntrance" data-repeat-rendered="quickEntranceRendered" ms-if-loop="item.show">\n    <div class="quick-entrance-cube" ms-click="goQuickEntrance(item)">\n        <img ms-src="item.imgUrl">\n        <div class="new-tip" ms-if="item.showTip&&item.spClass!=\'sp-haitao\'">\n            <img src="http://pinduoduo.b0.upaiyun.com/activity/activity_new_tip.png">\n        </div>\n        <!--\n                <div class="black_friday-tip" ms-if="item.showTip&&item.spClass==\'sp-haitao\'">\n                    <img src="http://pinduoduo.b0.upaiyun.com/activity/tip_555.png">\n                </div>\n                -->\n        <div class="cube-text">\n            <span ms-class="{{item.spClass}}" ms-text="item.name"></span>\n        </div>\n    </div>\n    </li>\n</ul>\n'
    }
});