! function(e) {
    function n(t) {
        if (o[t]) return o[t].exports;
        var i = o[t] = {
            exports: {},
            id: t,
            loaded: !1
        };
        return e[t].call(i.exports, i, i.exports, n), i.loaded = !0, i.exports
    }
    var t = window.webpackJsonp;
    window.webpackJsonp = function(a, r) {
        for (var s, l, c = 0, u = []; c < a.length; c++) l = a[c], i[l] && u.push.apply(u, i[l]), i[l] = 0;
        for (s in r) e[s] = r[s];
        for (t && t(a, r); u.length;) u.shift().call(null, n);
        return r[0] ? (o[0] = 0, n(0)) : void 0
    };
    var o = {},
        i = {
            16: 0
        };
    return n.e = function(e, t) {
        if (0 === i[e]) return t.call(null, n);
        if (void 0 !== i[e]) i[e].push(t);
        else {
            i[e] = [t];
            var o = document.getElementsByTagName("head")[0],
                a = document.createElement("script");
            a.type = "text/javascript", a.charset = "utf-8", a.async = !0, a.src = n.p + "" + ({
                29: "bundle",
                30: "common",
                31: "vender",
                32: "index",
                33: "goods",
                34: "order",
                35: "haitao",
                36: "group",
                37: "orders",
                38: "classification",
                39: "rank",
                40: "subject",
                41: "catgoods",
                42: "mylottery",
                43: "mall_page",
                44: "suggestion",
                45: "faq",
                46: "personal",
                47: "complaint_result",
                48: "chat_list",
                49: "chat_detail",
                50: "search_result",
                51: "newbee_gift",
                52: "order_checkout",
                53: "page",
                54: "terms",
                55: "spike",
                56: "mall_coupons",
                57: "lottery_list",
                58: "lottery",
                59: "login",
                60: "likes",
                61: "feedback",
                62: "coupon_receive",
                63: "coupon_event_newyear",
                64: "coupon_event",
                65: "complaint",
                66: "deal_made",
                67: "coupon_share",
                68: "alipay_callback",
                69: "groups",
                70: "tuan_rule",
                71: "skip",
                72: "shipping_hint",
                73: "post_sale",
                74: "goods_skip",
                75: "goods_comments",
                76: "exclusive_group",
                77: "coupons",
                78: "coupon_share_page",
                79: "coupon_send",
                80: "complaint_guide",
                81: "comments",
                82: "card",
                83: "addresses",
                84: "address"
            }[e] || e) + ".js", o.appendChild(a)
        }
    }, n.m = e, n.c = o, n.p = "", n.s = i, n(0)
}({
    0: function(e, n, t) {
        t(6), t(10), t(28), t(3), t(38), t(18), t(300), e.exports = t(9)
    },
    3: function(e, n, t) {
        "use strict";
        t(88);
        var o = t(9),
            i = t(10),
            a = document.createElement("div");
        a.innerHTML = t(97);
        var r = a.firstChild;
        document.body.appendChild(r), e.exports = {
            show: function() {
                i.isModuleVersion ? o.callNative("JSUIControl", "showLoading") : r.style.display = "block"
            },
            hide: function() {
                i.isModuleVersion ? o.callNative("JSUIControl", "hideLoading") : r.style.display = "none"
            }
        }
    },
    6: function(e, n, t) {
        var o = t(28);
        e.exports = {
            shop: {
                shopID: 2,
                name: "昊幺哥",
                logo: "http://pinduoduo.b0.upaiyun.com/base/logo.jpg",
                weChatTimelineShareDisabled: !0
            },
            apiDomain: "http://10.15.4.151:9000/mock/",
             //apiDomain: "http://apiv2.yangkeduo.com/",
            //apiDomainNew: "http://apiv2.yangkeduo.com/",
            apiDomainNew: "http://10.15.4.151:9000/mock/",

            loggingURL: "http://10.15.4.151:9000/t.gif",
            pushDomain: "ws://ws.yangkeduo.com/",
            AppID: {
                WeChat: 4,
                SMS: 5,
                AliPay: 6,
                QQ: 12,
                Weibo: 11,
                AliPayWeb: 9,
                QQConnect: 13
            },
            ApiKey: {
                WeChat: "",
                Weibo: "",
                QQConnect: "",
                BaiduStatistics: "091f8ad9fb2b7ee325f325c8b1704453"
            },
            RedirectURI: {
                Weibo: "http://mobile.yangkeduo.com/wboauth_callback.html",
                QQConnect: "http://mobile.yangkeduo.com/qqoauth_callback.html"
            },
            shareDomains: function() {
                var e = {};
                return e[o.WeChatSession] = "http://mobile.yangkeduo.com/", e[o.WeChatTimeline] = "http://mobile.yangkeduo.com/", e[o.Weibo] = "http://mobile.yangkeduo.com/", e[o.QQChatSession] = "http://mobile.yangkeduo.com/", e[o.QQZone] = "http://mobile.yangkeduo.com/", e[o.TencentWeibo] = "http://mobile.yangkeduo.com/", e[o.WeChatSessionApp] = "http://mobile.yangkeduo.com/", e[o.WeChatTimelineImage] = "http://mobile.yangkeduo.com/", e
            }()
        }
    },
    9: function(e, n) {
        e.exports = window.pinbridge = function() {
            var e = 0,
                n = {};
            return {
                callNative: function(t, o, i, a, r) {
                    i = i || {};
                    var s = e;
                    e += 1, n[s] = {
                        success: a,
                        error: r
                    };
                    var l = "pinbridge:///request?t=" + t + "&m=" + o + "&p=" + encodeURIComponent(JSON.stringify(i)) + "&c=" + s;
                    "undefined" != typeof pinbridgeex ? alert(l) : this.loadURL(l, o)
                },
                loadURL: function(e, n) {
                    var t = navigator.userAgent || navigator.vendor || window.opera;
                    if (null != t.match(/phh_android_version/i)) return void alert(e);
                    var o = document.createElement("iframe");
                    o.setAttribute("src", e), o.setAttribute("style", "display:none;"), o.setAttribute("height", "0px"), o.setAttribute("width", "0px"), o.setAttribute("frameborder", "0"), document.body.appendChild(o), o.parentNode.removeChild(o), o = null
                },
                callback: function(e, t, o) {
                    o || (o = {});
                    var i = n[e];
                    delete n[e], i && (0 === t && i.success ? i.success(o) : 0 !== t && i.error && i.error(o))
                },
                callbackFromNative: function(e, n, t) {
                    this.callback(e, n, t)
                }
            }
        }()
    },
    10: function(e, n) {
        "use strict";
        var t = {
            Unknown: "unknown",
            IOS: "ios",
            Android: "android",
            WeChat: "wechat",
            Weibo: "weibo",
            QQ: "qq"
        };
        t.isModuleVersion = !1, t.Current = function() {
            var e = navigator.userAgent || navigator.vendor || window.opera,
                n = function(e) {
                    var n = "phh_" + e + "_version/",
                        t = navigator.userAgent.toLowerCase(),
                        o = t.indexOf(n);
                    if (0 > o) return null;
                    var i = t.indexOf(" ", o);
                    return 0 > i && (i = t.length), t.substring(o + n.length, i)
                };
            return null != e.match(/phh_ios_version/i) ? (t.isModuleVersion = n(t.IOS) > "1.1.2", t.IOS) : null != e.match(/phh_android_version/i) ? (t.isModuleVersion = n(t.Android) > "1.1.2", t.Android) : null != e.match(/MicroMessenger/i) ? (document.write('<script src="//res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>'), t.WeChat) : null != e.match(/Weibo/i) ? t.Weibo : null != e.match(/(QQ\/[\d\.]+\s+)|Qzone/i) ? t.QQ : t.Unknown
        }(), e.exports = t
    },
    18: function(e, n, t) {
        "use strict";
        t(90);
        var o = document.createElement("div");
        o.innerHTML = t(98);
        var i = o.firstChild;
        document.body.appendChild(i), e.exports = {
            show: function(e, n) {
                var t = this,
                    o = document.querySelector(".pin-toast-container"),
                    i = document.querySelector(".pin-toast");
                if (null != i) {
                    ("undefined" == typeof n || null == n) && (n = {});
                    var r = n.center || !1;
                    r && (o.style.bottom = "50%");
                    var s = n.showDuration || 2e3,
                        l = 0;
                    s > 0 && n.countDown ? (l = Math.floor(s / 1e3), i.innerHTML = e + "<br/>" + l) : i.innerHTML = e, i.style.display = "block", i.style.opacity = 0, a.fadeIn(i, {
                        duration: 300,
                        complete: function() {
                            s >= 0 && setTimeout(function() {
                                t.hide(function() {
                                    null != n.complete && n.complete()
                                })
                            }, s);
                            var o = function() {
                                0 >= l || setTimeout(function() {
                                    l--, i.innerHTML = e + "<br/>" + l, o()
                                }, 1e3)
                            };
                            o()
                        }
                    })
                }
            },
            hide: function(e) {
                var n = document.querySelector(".pin-toast");
                null != n && a.fadeOut(n, {
                    duration: 300,
                    complete: function() {
                        n.style.display = "none", null != e && e()
                    }
                })
            }
        };
        var a = {
            fadeIn: function(e, n) {
                ("undefined" == typeof n || null == n) && (n = {});
                var t = 0;
                this.animate_({
                    duration: n.duration,
                    step: function(n) {
                        t += n, e.style.opacity = t
                    },
                    complete: n.complete
                })
            },
            fadeOut: function(e, n) {
                ("undefined" == typeof n || null == n) && (n = {});
                var t = 1;
                this.animate_({
                    duration: n.duration,
                    step: function(n) {
                        t -= n, e.style.opacity = t
                    },
                    complete: n.complete
                })
            },
            animate_: function(e) {
                var n = this;
                ("undefined" == typeof e || null == e) && (e = {}), null == e.duration && (e.duration = 300), null == e.easing && (e.easing = function(e) {
                    return n.easing_.linear(e)
                }), e.lastProgress = e.easing(0);
                var t = Date.now(),
                    o = setInterval(function() {
                        var n = Date.now() - t,
                            i = e.easing(Math.min(1, n / e.duration)),
                            a = i - e.lastProgress;
                        null != e.step && e.step(a), i >= 1 && (clearInterval(o), null != e.complete && e.complete()), e.lastProgress = i
                    }, 1e3 / 24)
            },
            easing_: {
                linear: function(e) {
                    return e
                }
            }
        }
    },
    28: function(e, n) {
        e.exports = {
            WeChatSession: 1,
            WeChatTimeline: 2,
            Weibo: 3,
            QQChatSession: 4,
            QQZone: 5,
            TencentWeibo: 6,
            WeChatSessionApp: 7,
            WeChatTimelineImage: 8
        }
    },
    38: function(e, n, t) {
        "use strict";
        var o = function() {
            var e = function(e) {
                var n = {
                    "#footer_home": ["index.html", !1, !1],
                    "#footer_rank": ["rank.html", !1, !1],
                    "#footer_oversea": ["haitao.html", !1, !0],
                    "#footer_class": ["classification.html", !1, !1],
                    "#footer_personal": ["personal.html", !1, !1]
                };
                for (var t in n) {
                    var o = document.querySelector(t);
                    null != o && e(o, n[t])
                }
            };
            return {
                LastViewOverseaDateKey: "LastViewOverseaDate",
                enable: function(n) {
                    e(function(e, t) {
                        e.onclick = function() {
                            event && event.preventDefault(), t[2] && localStorage.setItem("LastViewOverseaDate", (new Date).getDate().toString()), null == n ? location.href = t[0] : n.apply(null, t)
                        }
                    })
                },
                disable: function() {
                    e(function(e) {
                        e.onclick = null
                    })
                }
            }
        }();
        e.exports = o;
        (function() {
            var e = function() {
                    var e = location.href;
                    if (e.indexOf("/login.html") >= 0) return "";
                    if ("/" == location.pathname) return "home";
                    if (e.indexOf("referrer=haitao") >= 0) return "oversea";
                    var n = {
                        home: ["index", "subject"],
                        rank: ["rank"],
                        oversea: ["haitao"],
                        "class": ["classification", "catgoods"],
                        personal: ["personal", "orders", "groups", "mylottery", "likes", "coupons", "addresses", "suggestion", "faq", "coupon_send", "feedback"]
                    };
                    for (var t in n)
                        for (var o = n[t], i = 0; i < o.length; i++)
                            if (e.indexOf("/" + o[i] + ".html") >= 0) return t;
                    return ""
                },
                n = e();
            if (0 != n.length) {
                var i = t(96),
                    a = document.createElement("footer");
                if (a.innerHTML = i, document.body.appendChild(a), document.getElementById("footer_" + n).className = "nav-controller active", localStorage.getItem(o.LastViewOverseaDateKey) != (new Date).getDate().toString()) {
                    var r = document.querySelector("#footer_oversea i");
                    null != r && null != r.classList && r.classList.add("fb-badge")
                }
            }
        })()
    },
    69: function(e, n) {},
    76: function(e, n) {},
    88: function(e, n) {},
    90: function(e, n) {},
    96: function(e, n) {
        e.exports = '<ul class="footer">\n    <li><a id="footer_home" class="nav-controller"><i class="fb fb-home"></i>首页</a></li>\n    <li><a id="footer_rank" class="nav-controller"><i class="fb fb-rank"></i>热榜</a></li>\n    <li><a id="footer_class" class="nav-controller"><i class="fb fb-class"></i>搜索</a></li>\n    <li><a id="footer_personal" class="nav-controller"><i class="fb fb-user"></i>个人中心</a></li>\n</ul>\n'
    },
    97: function(e, n) {
        e.exports = '<div class="pin-spinner">\n<div class="pin-spinner-container pin-spinner-container1">\n    <div class="pin-spinner-circle1"></div>\n    <div class="pin-spinner-circle2"></div>\n    <div class="pin-spinner-circle3"></div>\n    <div class="pin-spinner-circle4"></div>\n</div>\n<div class="pin-spinner-container pin-spinner-container2">\n    <div class="pin-spinner-circle1"></div>\n    <div class="pin-spinner-circle2"></div>\n    <div class="pin-spinner-circle3"></div>\n    <div class="pin-spinner-circle4"></div>\n</div>\n<div class="pin-spinner-container pin-spinner-container3">\n    <div class="pin-spinner-circle1"></div>\n    <div class="pin-spinner-circle2"></div>\n    <div class="pin-spinner-circle3"></div>\n    <div class="pin-spinner-circle4"></div>\n</div>\n</div>\n'
    },
    98: function(e, n) {
        e.exports = '<div class="pin-toast-container">\n    <div class="pin-toast"></div>\n</div>\n'
    },
    300: function(e, n, t) {
        "use strict";
        t(69), t(76);
        var o = t(6),
            i = t(10);
        window.onerror = function(e, n, a, r, s) {
            if (e = e || "", !("string" == typeof e && e.indexOf("WebSocket is not defined") > 0)) {
                var l = localStorage.getItem("AccessToken") || "";
                r = r || window.event && window.event.errorCharacter || 0;
                var c = {
                        msg: e,
                        url: location.href,
                        path: n,
                        line: a,
                        col: r,
                        access_token: l,
                        error: s
                    },
                    u = function(e) {
                        if (!(null == o.loggingURL || o.loggingURL.length <= 0))
                            if (i.isModuleVersion) {
                                var n = t(9);
                                n.callNative("JSNetwork", "request", {
                                    method: "POST",
                                    url: o.loggingURL,
                                    headers: {
                                        "Content-Type": "application/json;charset=UTF-8"
                                    },
                                    data: null == c ? "" : JSON.stringify(c)
                                })
                            } else try {
                                var a;
                                if (!window.XMLHttpRequest) return;
                                a = new XMLHttpRequest, a.open("POST", o.loggingURL, !0), a.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), a.send(JSON.stringify(c))
                            } catch (r) {}
                    };
                setTimeout(function() {
                    u(function(e) {})
                }, 0)
            }
        };
        var a = t(3),
            r = t(38);
        document.title = o.shop.name + "商城", a.show();
        var s = JSON.parse(localStorage.getItem("LastPersonalMsg")) || {},
            l = s.key || 0;
        if (0 != l) {
            var c = document.querySelector("#footer_personal i");
            null != c && c.classList.add("fb-badge1")
        }
        r.enable()
    }
});
