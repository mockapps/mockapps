webpackJsonp([32], {
    0: function(n, t, o) {
        "use strict";
        var e = o(1);
        e.setupRecord(), e.addRecord("recordTime");
        var i = o(3),
            r = o(7),
            a = o(6),
            u = o(13),
            s = o(11),
            l = o(19);
        e.prepare({
            requireLogin: !1,
            shareInfo: {
                forceShareToWeChatTimeline: !0
            },
            regEvents: {
                onSceneReturn: function(n) {
                    n = n || {}, n.url && Navigation.reload(n.url)
                }
            }
        }, function() {
            e.addRecord("prepareCallback");
            var n = null,
                t = {},
                p = {
                    APP: {
                        imgUrl: "http://pinduoduo.b0.upaiyun.com/base/app_banner.png",
                        forwardUrl: "download.html?src=weixin&campaign=gzh&cid=sybanner",
                        show: !e.isNativePlatform(),
                        isInput: !1
                    },
                    ACTIVITY: {
                        imgUrl: "http://pinduoduo.b0.upaiyun.com/assetfile/banner_base.png",
                        forwardUrl: "http://mp.weixin.qq.com/s?__biz=MzIxNzA1NDEyNQ==&mid=404496271&idx=1&sn=47393699251ff68fc82bf5f299bbf118",
                        show: !1,
                        isInput: !1
                    },
                    GROUP_APP: {
                        imgUrl: "http://pinduoduo.b0.upaiyun.com/activity/app_group_banner_new.jpg",
                        forwardUrl: function(n) {
                            return Navigation.GroupUrl + "?is_group_app=1&group_order_id=" + n
                        },
                        show: !1,
                        isInput: !0
                    },
                    GROUP_NOT_APP: {
                        imgUrl: t.NotAppBanner,
                        forwardUrl: t.ForwardFunc,
                        show: !1,
                        isInput: !1
                    },
                    DOUBLE_11: {
                        imgUrl: "http://pinduoduo.b0.upaiyun.com/activity/20151111.png",
                        forwardUrl: "",
                        show: !1,
                        isInput: !1
                    },
                    BLACK_FRIDAY: {
                        imgUrl: "http://pinduoduo.b0.upaiyun.com/activity/black_friday_banner_555.png",
                        forwardUrl: "haitao.html",
                        show: !1,
                        isInput: !1
                    },
                    SHIPPING_HINT: {
                        imgUrl: "http://pinduoduo.b0.upaiyun.com/activity/shipping_hint_banner_new.jpg",
                        forwardUrl: "shipping_hint.html",
                        show: !1,
                        isInput: !1
                    }
                },
                c = [{
                    name: "秒杀",
                    imgUrl: "http://pinduoduo.b0.upaiyun.com/activity/spike.png",
                    forwardUrl: "spike.html",
                    showTip: !1,
                    key: "index_spike",
                    priority: 1,
                    spClass: "",
                    show: !0
                }, {
                    name: "抽奖",
                    imgUrl: "http://pinduoduo.b0.upaiyun.com/activity/lottery.png",
                    forwardUrl: "lottery.html",
                    showTip: !1,
                    key: "index_lottery",
                    priority: 2,
                    spClass: "",
                    show: !0
                }, {
                    name: "新人礼包",
                    imgUrl: "http://pinduoduo.b0.upaiyun.com/activity/newbie_gift_icon.png",
                    forwardUrl: "newbee_gift.html",
                    showTip: !1,
                    key: "index_gift",
                    priority: 3,
                    spClass: "",
                    show: !0
                }, {
                    name: "食品",
                    imgUrl: "http://pinduoduo.b0.upaiyun.com/activity/cat_2.png",
                    forwardUrl: "catgoods.html?opt_id=1&opt_type=1&all=true",
                    showTip: !1,
                    priority: 5,
                    spClass: "",
                    show: !0
                }, {
                    name: "服饰箱包",
                    imgUrl: "http://pinduoduo.b0.upaiyun.com/activity/cat_1.png",
                    forwardUrl: "catgoods.html?opt_id=14&opt_type=1&all=true",
                    showTip: !1,
                    priority: 6,
                    spClass: "",
                    show: !0
                }, {
                    name: "家居生活",
                    imgUrl: "http://pinduoduo.b0.upaiyun.com/activity/cat_3.png",
                    forwardUrl: "catgoods.html?opt_id=15&opt_type=1&all=true",
                    showTip: !1,
                    priority: 7,
                    spClass: "",
                    show: !0
                }, {
                    name: "母婴",
                    imgUrl: "http://pinduoduo.b0.upaiyun.com/activity/cat_77.png",
                    forwardUrl: "catgoods.html?opt_id=4&opt_type=1&all=true",
                    showTip: !1,
                    priority: 8,
                    spClass: "",
                    show: !0
                }],
                d = localStorage.getItem("LastGroupID");
            if (d && d.length > 0) return localStorage.setItem("LastGroupID", ""), void Navigation.forward(Navigation.GroupUrl + "?group_order_id=" + d);
            var f = new Date,
                h = f.getMonth() + 1 + "_" + f.getDate(),
                g = function(i) {
                    if (!(i.length <= 0)) {
                        var r = i[0],
                            a = parseInt(f.getTime() / 1e3, 10);
                        if (t = {
                                IsStart: a >= r.start_time && a <= r.end_time,
                                GoodsID: r.goods_id,
                                GroupID: r.group_id,
                                Hint: r.desc || "",
                                GoodsImg: r.thumb_url,
                                NotAppBanner: r.banner || ""
                            }, t.IsStart)
                            if (e.isNativePlatform()) o(53)(function(n) {
                                n.load(t, function(t) {
                                    t && n.show()
                                })
                            });
                            else if (t.NotAppBanner.length > 0) {
                            var u = {
                                imgUrl: t.NotAppBanner,
                                forwardUrl: l.AppGroup.ForwardFunc,
                                show: !0,
                                isInput: !1
                            };
                            n && n.insert(u, 0), p.GROUP_NOT_APP = u
                        }
                    }
                },
                m = function() {
                    y(), w(), b(), _(), avalon.scan(document.getElementById("index-content")), s.hasNewMsg()
                },
                _ = function() {
                    o(32)(function(n) {
                        n.load(c, function() {
                            n.show()
                        })
                    })
                },
                w = function() {
                    var n = null,
                        t = null,
                        r = function() {
                            null != n && null != t && n.load(t, function(t) {
                                t && (n.show(), v.goodsListReady("add"))
                            }, {
                                isIndex: !0
                            })
                        },
                        a = function(n) {
                            return n || {}
                        },
                        u = "v2/goods";
                    e.apiRequest("GET", u, null, function(n) {
                        g(n.mobile_app_groups || []), e.addRecord("goodsApiResponse"), t = a(n), r()
                    }, function() {
                        i.hide()
                    }), o(16)(function(t) {
                        n = t, r()
                    }, function() {})
                },
                v = null,
                y = function() {
                    null == v && (v = avalon.define({
                        $id: "root",
                        bannerHeight: "" + .546875 * Math.min(window.innerWidth, 640) + "px",
                        bannerComplete: !1,
                        goodsComplete: !1,
                        show: "hidden",
                        isApp: e.isNativePlatform(),
                        isAppGroupStart: t.IsStart,
                        showNewYearMessage: function() {
                            o(58)(function(n) {
                                n.load(function() {
                                    n.show()
                                })
                            })
                        },
                        goSubject: function(n) {
                            Navigation.forward("subject.html?subject_id=" + n)
                        },
                        goodsListReady: function(t) {
                            "add" == t && (v.goodsComplete = !0, v.show = "visible", e.addRecord("showGoodsList"), i.hide()), ("banner" != t || v.goodsComplete) && v.bannerComplete && (v.goodsComplete = !0, n && n.play(), U())
                        },
                        clickDouble12: function() {
                            i.show();
                            var n = r.DOUBLE_12_DATA.COUPON_BATCH_IDS;
                            2 != a.shop.shopID && (n = r.DOUBLE_12_DATA.COUPON_BATCH_IDS_TEST);
                            var t = function() {
                                for (var t = "coupon_batch/is_taken", o = 0; o < n.length; o++) t += (o > 0 ? "&" : "?") + "batch_ids[]=" + n[o];
                                return t
                            };
                            e.apiRequest("GET", t(), null, function(n) {
                                i.hide(), 1 != n.result ? Navigation.forward("coupon_event.html") : e.showToast(u.CouponTaken.message)
                            }, function() {
                                i.hide()
                            })
                        }
                    }))
                },
                b = function() {
                    var t = function(n) {
                            n = n || [];
                            var t = [];
                            null != p.GROUP_APP && p.GROUP_APP.show && t.push(p.GROUP_APP), null != p.GROUP_NOT_APP && p.GROUP_NOT_APP.show && t.push(p.GROUP_NOT_APP);
                            for (var o = 0; o < n.length; o++) {
                                var e = n[o];
                                t.push({
                                    imgUrl: e.imgUrl,
                                    forwardUrl: "subject.html?subject_id=" + e.subjectID,
                                    show: !0,
                                    isInput: !1
                                }), 0 == o && null != p.DOUBLE_11 && p.DOUBLE_11.show && t.push(p.DOUBLE_11)
                            }
                            return p.APP.show && t.push(p.APP), t
                        },
                        i = [];
                    v.bannerComplete = !0, v.goodsListReady("banner"), o(20)(function(o) {
                        n = o, i = t(r), n.load(i, v.bannerHeight, function(t) {
                            t && n.show()
                        })
                    });
                    var r = null,
                        a = function(n) {
                            for (var t = [], o = 0; o < n.length; o++) {
                                var e = n[o];
                                t.push({
                                    subjectID: e.subject_id || 1,
                                    imgUrl: e.home_banner
                                })
                            }
                            return t
                        };
                    e.apiRequest("GET", "subjects", null, function(o) {
                        r = a(o), n && n.loaded() && (i = t(r), n.reload(i))
                    }, function() {
                        r = []
                    })
                };
            m(), o(12)(function() {});
            var U = function() {
                if (null != localStorage.getItem("AccessToken") && localStorage.getItem("index_tz") != h) {
                    var n = "coupons/free?";
                    e.apiRequest("GET", n, null, function(n) {
                        n.list = n.list || [], 0 != n.list.length && localStorage.getItem("index_tz") != h && o(67)(function(t) {
                            t.load(n.list)
                        })
                    }, function() {}, !1, !1, !0)
                }
            }
        })
    },
    11: function(n, t, o) {
        var e = o(1),
            i = o(6),
            r = o(8);
        o(10);
        n.exports = function() {
            var n = 3e4,
                t = 1,
                o = {
                    Open: 0,
                    Close: 1,
                    Authentication: 2,
                    Message: 3
                },
                a = null,
                u = 0,
                s = {},
                l = {},
                p = [],
                c = 0,
                d = !1,
                f = void 0 !== window.WebSocket,
                h = function() {
                    return null != a && a.readyState == WebSocket.OPEN
                },
                g = function() {
                    h() || null != a && a.readyState == WebSocket.CONNECTING || !f || (a = new WebSocket(i.pushDomain + "?" + e.buildQuery({
                        access_token: r.getAccessToken(),
                        role: "user"
                    })), a.onopen = function() {
                        setTimeout(function() {
                            w(), _(o.Open)
                        }, 50)
                    }, a.onclose = function() {
                        setTimeout(function() {
                            d = !1, _(o.Close)
                        }, 50)
                    }, a.onerror = function(n) {}, a.onmessage = function(n) {
                        if (null != n && null != n.data) {
                            var t = JSON.parse(n.data);
                            if (null != t) {
                                var e = t.response,
                                    i = "ok" === t.result;
                                if (!i && null != t.result, "auth" == e) return i && (d = !0), _(o.Authentication, i);
                                var r = t.request_id;
                                if (null != r) {
                                    var a = l[r];
                                    null != a && setTimeout(function() {
                                        a(t)
                                    }, 50)
                                }
                                _(o.Message, t)
                            }
                        }
                    })
                },
                m = function(n, t) {
                    if (null == t) return null;
                    var o = u++;
                    return s[o] = {
                        type: n,
                        handler: t
                    }, o
                },
                _ = function(n) {
                    for (var t = [], o = 1; o < arguments.length; ++o) t.push(arguments[o]);
                    for (var e in s) {
                        var i = s[e];
                        i.type == n && setTimeout(function() {
                            i.handler.apply(null, t)
                        }, 50)
                    }
                },
                w = function(n) {
                    if (f) {
                        var o = null;
                        return "object" == typeof n && (o = t++, n.request_id = o, p.push(n)), h() ? (p.forEach(function(n) {
                            a.send(JSON.stringify(n))
                        }), p = []) : g(), o
                    }
                };
            return {
                isOpen: h,
                isSupport: f,
                hasAuthenticated: function() {
                    return f ? d : !1
                },
                onOpen: function(n) {
                    return m(o.Open, n)
                },
                onClose: function(n) {
                    return m(o.Close, n)
                },
                onAuthenticationResult: function(n) {
                    return f ? m(o.Authentication, n) : void 0
                },
                onMessage: function(n) {
                    return f ? m(o.Message, n) : void 0
                },
                unregister: function(n) {
                    delete s[n]
                },
                keepAlive: function() {
                    if (f)
                        if (h()) {
                            var t = Date.now();
                            t - c >= n && (w({
                                cmd: "heartbeat"
                            }), c = t)
                        } else g()
                },
                send: function(n) {
                    f && w(n)
                },
                request: function(n, t) {
                    if (f) {
                        var o = w(n);
                        return null == o || null == t ? o : void(l[o] = t)
                    }
                },
                hasNewMsg: function(n, t) {
                    if (f && r.hasAccessToken()) {
                        var o = JSON.parse(localStorage.getItem("LastPersonalMsg")) || {},
                            i = o.key || 0,
                            a = o.time || 0;
                        if (0 == i || n) {
                            var u = Date.now().toString(),
                                s = {
                                    key: i,
                                    time: a
                                };
                            if (3e4 > u - a && !n) return s.time = u, void localStorage.setItem("LastPersonalMsg", JSON.stringify(s));
                            var p = 0,
                                c = w({
                                    cmd: "latest_conversations",
                                    page: 1,
                                    size: 20
                                });
                            l[c] = function(n) {
                                for (var o = n.conversations, i = document.querySelector("#footer_personal i"), r = 0; r < o.length; r++) "read" != o[r].status && p++;
                                null != i && 0 != p && i.classList.add("fb-badge1"), s.key = p, s.time = u, localStorage.setItem("LastPersonalMsg", JSON.stringify(s)), null != t && e.call(t, p)
                            }
                        }
                    }
                },
                alertNotSupport: function(n) {
                    f || e.showAlert("您的系统版本不支持这个功能(Android系统版本至少为4.3)", function() {
                        e.call(n)
                    })
                }
            }
        }()
    },
    12: function(n, t, o) {
        o(2), n.exports = function(n, t) {
            o.e(6, function(e) {
                e ? t() : n(o(15))
            })
        }
    },
    16: function(n, t, o) {
        o(2), n.exports = function(n, t) {
            o.e(9, function(e) {
                e ? t() : n(o(29))
            })
        }
    },
    20: function(n, t, o) {
        o(2), n.exports = function(n, t) {
            o.e(10, function(e) {
                e ? t() : n(o(42))
            })
        }
    },
    32: function(n, t, o) {
        o(2), n.exports = function(n, t) {
            o.e(12, function(e) {
                e ? t() : n(o(50))
            })
        }
    },
    53: function(n, t, o) {
        o(2), n.exports = function(n, t) {
            o.e(17, function(e) {
                e ? t() : n(o(305))
            })
        }
    },
    58: function(n, t, o) {
        o(2), n.exports = function(n, t) {
            o.e(24, function(e) {
                e ? t() : n(o(310))
            })
        }
    },
    67: function(n, t, o) {
        o(2), n.exports = function(n, t) {
            o.e(18, function(e) {
                e ? t() : n(o(320))
            })
        }
    }
});