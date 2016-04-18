webpackJsonp([10], {
    27: function(n, e, r) {
        r(2), n.exports = function(n, e) {
            r.e(14, function(a) {
                a ? e() : n(r(48))
            })
        }
    },
    42: function(n, e, r) {
        "use strict";
        var a = r(4),
            i = r(44),
            t = r(1),
            l = r(19),
            o = l.AppGroup,
            s = "http://pinduoduo.b0.upaiyun.com/test/default.jpg",
            d = 5e3,
            u = 200,
            c = 1e3;
        n.exports = function() {
            var n = r(327),
                e = t.createNodeFromHTML(n),
                l = !1,
                p = null,
                m = null,
                g = null,
                p = avalon.define({
                    $id: "banner",
                    banners: [],
                    bannerHeight: "" + .546875 * Math.min(a(window).width(), 640) + "px",
                    currentBannerIndex: 0,
                    visible: !1,
                    show: function() {
                        p.visible = !0
                    },
                    clickBanner: function(n) {
                        return n == o.ForwardFunc ? void p[o.ForwardFunc]() : (n || p.banners.length > p.currentBannerIndex && p.banners[p.currentBannerIndex].forwardUrl.length > 0 && (n = p.banners[p.currentBannerIndex].forwardUrl), void(n && n.length > 0 && Navigation.forward(n)))
                    },
                    bannerRendered: function(n) {
                        var e = function(n) {
                            p.banners[n] && p.banners[n].imgUrl != p.banners[n].loadImgUrl && (p.banners[n].imgUrl = p.banners[n].loadImgUrl)
                        };
                        switch (n) {
                            case "add":
                            case "set":
                                m && m.destroy(), m = b(), t.call(g, !0), m.on("after", function(n) {
                                    p.currentBannerIndex = n, e(n), p.banners[n + 1] && p.banners[n + 1].imgUrl != p.banners[n + 1].loadImgUrl && setTimeout(function() {
                                        e(n + 1), e(n - 1)
                                    }, d - c)
                                }), "add" == n && (m.pause(), setTimeout(function() {
                                    m.play()
                                }, 1e3))
                        }
                    },
                    showDownloadNotification: function() {
                        event.stopPropagation();
                        var n = "该商品是APP专享团商品，请在APP中购买和参团。";
                        r(27)(function(e) {
                            e.load({
                                title: "APP专享团",
                                content: n
                            }, function() {
                                e.show()
                            })
                        })
                    }
                }),
                b = function() {
                    var n = a(".activity-banner").width();
                    return a("#index-slider li").css({
                        width: n
                    }).find("img").css({
                        width: n
                    }), i("index-slider", {
                        duration: u,
                        interval: d,
                        direction: 0,
                        autoplay: !0,
                        align: "center",
                        mousewheel: !1,
                        mouse: !0,
                        fullsize: !1
                    })
                },
                f = function() {
                    p && p.show()
                },
                h = function() {
                    null != p && p.hide()
                },
                v = function() {
                    m && m.play()
                },
                U = function(n, r, a) {
                    g = a;
                    for (var i = 0; i < n.length; i++) n[i].loadImgUrl = t.upaiyunCompress(n[i].imgUrl), n[i].imgUrl = s;
                    n[0] && (n[0].imgUrl = n[0].loadImgUrl), n[1] && (n[1].imgUrl = n[1].loadImgUrl), 0 == n.length && t.call(g, !0), p.banners = n, p.bannerHeight = r, l || (document.querySelector("#" + p.$id).appendChild(e), l = !0), avalon.scan(e)
                },
                w = function(n) {
                    U(n, p.bannerHeight)
                },
                x = function(n, e) {
                    n.loadImgUrl = t.upaiyunCompress(n.imgUrl), n.imgUrl = e > 1 ? s : n.loadImgUrl, p.banners.splice(e, 0, n)
                };
            return {
                load: U,
                show: f,
                hide: h,
                play: v,
                reload: w,
                loaded: function() {
                    return l
                },
                insert: x
            }
        }()
    },
    327: function(n, e) {
        n.exports = '<div ms-controller="banner" class="activity-banner" ms-if="banners.length>0" ms-css-height="bannerHeight">\n    <ul id="index-slider">\n        <li ms-repeat-banner="banners" data-repeat-rendered="bannerRendered">\n            <a ms-click="clickBanner(banner.forwardUrl)" ms-if="!banner.isInput">\n                <img ms-src="{{banner.imgUrl}}">\n            </a>\n            <div class="groupcode input-page"  ms-if="banner.isInput">\n                <img ms-src="{{banner.imgUrl}}">\n                <span class="input-area">\n                    <input type="text" ms-duplex="groupCode"/>\n                </span>\n                <span class="group-button" ms-click="joinSpecialGroup"></span>\n            </div>\n        </li>\n    </ul>\n    <div class="banner-focus">\n        <div class="banner-hd"><ul>\n                <li ms-repeat="banners" ms-class-on="$index==currentBannerIndex"></li>\n        </ul></div>\n    </div>\n</div>\n'
    }
});