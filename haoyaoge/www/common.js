webpackJsonp([30], {
    0: function(e, t, n) {
        n(1), n(7), n(13), n(5), n(24), n(41), n(46), n(8), n(19), e.exports = n(45)
    },
    1: function(e, t, n) {
        var r = n(4),
            o = n(6),
            i = n(7),
            a = n(10),
            l = n(28),
            u = n(38),
            s = n(18),
            c = n(13),
            d = n(25),
            f = function() {
                var e = !1,
                    t = null,
                    p = null,
                    h = null,
                    m = function(e) {
                        var t = navigator.userAgent.toLowerCase(),
                            n = t.indexOf(e);
                        if (0 > n) return null;
                        var r = t.indexOf(" ", n);
                        return 0 > r && (r = t.length), t.substring(n + e.length, r)
                    },
                    g = function(e, t) {
                        var n = null,
                            r = Math.random().toString().substring(2),
                            i = Date.now().toString(),
                            a = function() {
                                null != window.wx && null != n && (wx.config({
                                    debug: !1,
                                    appId: o.ApiKey.WeChat,
                                    timestamp: i,
                                    nonceStr: r,
                                    signature: n,
                                    jsApiList: ["showMenuItems", "hideMenuItems", "onMenuShareAppMessage", "onMenuShareTimeline", "onMenuShareQQ", "onMenuShareQZone", "onMenuShareWeibo", "addCard", "previewImage", "editAddress", "chooseImage", "uploadImage", "getLocation"]
                                }), wx.ready(function() {
                                    wx.showMenuItems({
                                        menuList: ["menuItem:share:appMessage", "menuItem:share:timeline", "menuItem:share:qq", "menuItem:share:QZone", "menuItem:share:weiboApp"]
                                    });
                                    var n = ["menuItem:favorite", "menuItem:openWithSafari", "menuItem:share:email"],
                                        r = o.shop.weChatTimelineShareDisabled;
                                    null != r && r && !e && n.push("menuItem:share:timeline"), wx.hideMenuItems({
                                        menuList: n
                                    }), window.wxReady = !0, f.call(t, !0), "function" == typeof window.wxAfterReady && (window.wxAfterReady(), window.wxAfterReady = null)
                                }), wx.error(function(e) {
                                    f.call(t, !1)
                                }))
                            },
                            l = "weixin/jsapi/signature?" + f.buildQuery({
                                noncestr: r,
                                timestamp: i,
                                url: location.href.split("#")[0]
                            });
                        f.apiRequest("GET", l, null, function(e) {
                            n = e.signature, a()
                        })
                    };
                return {
                    prepare_: function(e, r) {
                        var o = this,
                            a = n(8),
                            l = a.hasAccessToken();
                        u.enable(function(e, t) {
                            var r = n(5);
                            o.isEmbeddedBrowser() || l || !t ? r.reset(e) : r.forward("login.html?from=" + encodeURIComponent(e))
                        }), null == e && (e = {});
                        var d = function() {
                                o.call(r), n(66)(function() {})
                            },
                            p = function() {
                                if (o.isNativePlatform()) {
                                    var e = n(9),
                                        r = function(e) {
                                            t = e || {}, d()
                                        };
                                    e.callNative("JSMeta", "get", null, function(e) {
                                        r(e)
                                    }, function() {
                                        r()
                                    }, !0)
                                } else d()
                            },
                            h = function() {
                                var t = e.shareInfo || {};
                                o.isWeChatPlatform() ? (p(), g(t.forceShareToWeChatTimeline, function(e) {
                                    e && !t.noDefaultShare && o.prepareShare(t)
                                })) : o.isNativePlatform() ? (o.prepareShare(t), p()) : p()
                            };
                        if (!e.requireLogin && f.isWeChatPlatform() && (e.requireLogin = !0), l || !e.requireLogin) h();
                        else if (o.isEmbeddedBrowser()) {
                            var m = function() {
                                return o.isWeChatPlatform() ? i.AuthorizationType.WeChat : o.isWeiboPlatform() ? i.AuthorizationType.Weibo : o.isQQPlatform() ? i.AuthorizationType.QQ : void 0
                            }();
                            a.login(m, null, h, function(e) {
                                s.show(c.messageFromCode(e))
                            })
                        } else a.login()
                    },
                    prepare: function(t, r) {
                        var o = this;
                        if (!e) {
                            e = !0;
                            var l = o.getCookieByName(i.CookieKey.AccessToken),
                                u = document.querySelector("#access-token-save");
                            if (u) {
                                var s = {};
                                l = u.dataset.at || "", s[i.CookieKey.AccessToken] = l.length > 0 ? l : null, o.setCookie(s)
                            }
                            var c = localStorage.getItem("AccessToken") || "";
                            if (l.length > 0 && c != l && o.saveToLocalStorage("AccessToken", l), 0 == l.length && o.saveToLocalStorage("AccessToken", null), p = o.parseQuery(location.search), a.isModuleVersion) {
                                var d = n(45);
                                d.loadAccessToken(function() {
                                    o.prepare_(t, r)
                                }), d.registerSceneNotification(t.regEvents), d.setupPullReload(t.disablePullReload)
                            } else o.prepare_(t, r);
                            o.changeTitle(t.title || document.title)
                        }
                    },
                    prepareShare: function(e, t) {
                        var n = this;
                        n.isWeChatPlatform() && !window.wxReady ? window.wxAfterReady = function() {
                            n.prepareShare_(e, t)
                        } : n.prepareShare_(e, t)
                    },
                    prepareShare_: function(e, t) {
                        var r = this,
                            a = o.shop.name + "商城",
                            u = "风靡全国的拼团商城，优质商品新鲜直供，快来一起" + o.shop.name + "吧",
                            s = o.shop.logo,
                            c = "index.html";
                        if (e = e || {}, (null == e.title || e.title.length <= 0) && (e.title = a), (null == e.message || e.message.length <= 0) && (e.message = u), null == e.thumbnailURL || e.thumbnailURL.length <= 0) e.thumbnailURL = s;
                        else {
                            var d = i.WaterMark.Default;
                            null != e.waterMark && e.waterMark.length >= 0 && (d = e.waterMark), e.thumbnailURL += d
                        }
                        if ((null == e.shareURL || e.shareURL.length <= 0) && (e.shareURL = c), (null == e.timelineMessage || e.timelineMessage.length <= 0) && (e.timelineMessage = e.message), e.shareURL = r.buildURL({
                                code: null,
                                from: null,
                                isappinstalled: null,
                                at: null
                            }, f.fullURL(e.shareURL)), r.isWeChatPlatform()) {
                            if (null == window.wx) return r.call(t, !1);
                            wx.onMenuShareAppMessage({
                                title: e.title,
                                desc: e.message,
                                imgUrl: e.thumbnailURL,
                                link: r.buildURL(null, e.shareURL, o.shareDomains[l.WeChatSession]),
                                type: "link"
                            }), wx.onMenuShareTimeline({
                                title: e.timelineMessage,
                                imgUrl: e.thumbnailURL,
                                link: r.buildURL(null, e.shareURL, o.shareDomains[l.WeChatTimeline])
                            }), wx.onMenuShareQQ({
                                title: e.title,
                                desc: e.message,
                                imgUrl: e.thumbnailURL,
                                link: r.buildURL(null, e.shareURL, o.shareDomains[l.QQChatSession])
                            }), wx.onMenuShareQZone({
                                title: e.title,
                                desc: e.message,
                                imgUrl: e.thumbnailURL,
                                link: r.buildURL(null, e.shareURL, o.shareDomains[l.QQZone])
                            }), wx.onMenuShareWeibo({
                                title: e.title,
                                desc: e.message,
                                imgUrl: e.thumbnailURL,
                                link: r.buildURL(null, e.shareURL, o.shareDomains[l.TencentWeibo])
                            }), r.call(t, !0)
                        } else r.isWeiboPlatform() || r.isQQPlatform() ? (r.changeTitle(e.title), r.call(t, !0)) : r.isNativePlatform() ? n(22)(function(n) {
                            n.prepareShare(e), r.call(t, !0)
                        }, function() {
                            r.call(t, !1)
                        }) : r.call(t, !0)
                    },
                    compareVersion: function(e, t) {
                        for (var n = function(e) {
                                var t = [];
                                return null == e || e.length <= 0 ? t : (e.split(".").forEach(function(e) {
                                    t.push(parseInt(e))
                                }), t)
                            }, r = n(e), o = n(t), i = Math.max(r.length, o.length), a = 0; i > a; ++a) {
                            var l = parseInt(r[a] || "0"),
                                u = parseInt(o[a] || "0");
                            if (l != u) return l - u
                        }
                        return 0
                    },
                    getMinimumSupportedVersion: function() {
                        return t.min_version
                    },
                    isCurrentVersionInReview: function() {
                        var e = this.getAppVersion(),
                            n = t.in_review_version;
                        return a.Current == a.IOS && 0 == this.compareVersion(e, n)
                    },
                    getParameters: function() {
                        return JSON.parse(JSON.stringify(p))
                    },
                    getParameter: function(e) {
                        return null == p ? null : p[e]
                    },
                    parseQuery: function(e) {
                        if (null == e || e.length <= 0) return {};
                        "?" == e[0] && (e = e.substring(1));
                        for (var t = {}, n = e.split("&"), r = 0; r < n.length; ++r) {
                            var o = n[r].split("=");
                            if (null != o[0] && o[0].length > 0) {
                                var i = o[1] || "";
                                t[decodeURIComponent(o[0])] = decodeURIComponent(i)
                            }
                        }
                        return t
                    },
                    buildQuery: function() {
                        for (var e = {}, t = 0; t < arguments.length; ++t) {
                            var n = arguments[t];
                            for (var r in n) {
                                var o = n[r];
                                null != r && null != o && (e[encodeURIComponent(r)] = encodeURIComponent(o))
                            }
                        }
                        var i = "";
                        for (var r in e) i.length > 0 && (i += "&"), i += r + "=" + e[r];
                        return i
                    },
                    buildURL: function(e, t, n) {
                        var r = document.createElement("a");
                        if (r.href = t || location.href, null != n) {
                            var o = r;
                            r = document.createElement("a"), r.href = n, o.pathname.length > 0 && (r.pathname = o.pathname, a.isModuleVersion && (r.pathname = this.fullURL(o.pathname))), o.search.length > 0 && (r.search = o.search), o.hash.length > 0 && (r.hash = o.hash)
                        }
                        var i = this.parseQuery(r.search);
                        for (key in e) {
                            var l = e[key];
                            null == l ? delete i[key] : i[key] = l
                        }
                        var u = this.buildQuery(i);
                        return u.length > 0 ? r.search = u : r.search = "", r.href
                    },
                    fullURL: function(e) {
                        if (a.isModuleVersion) {
                            e = e || location.href;
                            for (var t = e.indexOf(".html"); t >= 0 && "/" != e.substr(t, 1);) t--;
                            return e.substring(t + ("/" == e.substr(t, 1) ? 1 : 0))
                        }
                        var n = location.href;
                        window.history.replaceState(null, "", e);
                        var r = location.href;
                        return window.history.replaceState(null, "", n), r
                    },
                    createNodeFromHTML: function(e) {
                        var t = document.createElement("div");
                        return t.innerHTML = e, t.firstChild
                    },
                    objectForKey: function(e, t, n) {
                        if (null == e) return n;
                        for (var r = t.split("."), o = e, i = 0; i < r.length; ++i)
                            if (o = o[r[i]], null == o) return n;
                        return o
                    },
                    call: function(e) {
                        if (null != e) {
                            for (var t = [], n = 1; n < arguments.length; ++n) t.push(arguments[n]);
                            e.apply(this, t)
                        }
                    },
                    format: function(e) {
                        for (var t = [], n = 1; n < arguments.length; ++n) t.push(arguments[n]);
                        return e.replace(/{(\d+)}/g, function(e, n) {
                            return t[n] || e
                        })
                    },
                    saveToLocalStorage: function(e, t) {
                        null != e && (null == t ? localStorage.removeItem(e) : localStorage.setItem(e, t))
                    },
                    showToast: function(e, t) {
                        if (!(e.length <= 0)) {
                            var r = this;
                            if (r.isNativePlatform()) {
                                var o = n(9);
                                o.callNative("JSAlert", "toast", {
                                    message: e
                                })
                            } else s.show(e, t)
                        }
                    },
                    showAlert: function(e, t, r, o, i) {
                        var l = this;
                        if (a.isModuleVersion) {
                            var u = n(9);
                            return void u.callNative("JSAlert", "showAlert", {
                                text: e,
                                title: o || "",
                                ok_label: r || "确定"
                            }, t)
                        }
                        setTimeout(function() {
                            alert(e), l.call(t)
                        }, 0)
                    },
                    showConfirm: function(e, t, r, o, i, l) {
                        var u = this;
                        if (a.isModuleVersion) {
                            var s = n(9);
                            return void s.callNative("JSAlert", "showAlert", {
                                text: e,
                                title: l || "",
                                ok_label: o || "确定",
                                cancel_label: i || "取消"
                            }, function(e) {
                                0 == e.index ? u.call(t) : u.call(r)
                            })
                        }
                        setTimeout(function() {
                            confirm(e) ? u.call(t) : u.call(r)
                        }, 0)
                    },
                    showJSAlert: function(e, t, r, o, i) {
                        setTimeout(function() {
                            n(59)(function(n) {
                                n.load({
                                    type: e,
                                    confirmCallback: t,
                                    cancelCallback: r,
                                    hideCallback: o,
                                    options: i
                                })
                            }, function() {})
                        }, 0)
                    },
                    selectImageInNative: function(e) {
                        var t = this.getAppVersion();
                        this.isNativePlatform() && t.length > 0 && t > "1.1.2" && n(64)(function(t) {
                            t.load(function(t) {
                                t.length > 0 && f.call(e, t)
                            }), t.show()
                        }, function() {})
                    },
                    animate: function(e, t, n, r) {
                        for (var o = this, i = 0, a = function() {
                                ++i >= e.length && o.call(r)
                            }, l = 0; l < e.length; ++l) e[l].stop().animate(t[l], {
                            duration: n,
                            done: function() {
                                a()
                            }
                        })
                    },
                    apiRequest: function(e, t, i, l, u, s, c, d) {
                        var f = n(8),
                            p = this;
                        if (!p.delayLoad()) {
                            var m = null;
                            null != s && s || (m = function(e) {
                                e.setRequestHeader("AccessToken", f.getAccessToken())
                            });
                            var g = function(e) {
                                    if (null == e) return 0;
                                    var t = e.error_code;
                                    return null == t ? null : "number" == typeof t ? t : parseInt(t, 10)
                                },
                                v = function(e) {
                                    var t = g(e);
                                    null == t ? p.call(l, e) : (null != d && d || p.call(h, t, e), p.call(u, t, e))
                                },
                                S = function(e) {
                                    var t = null,
                                        n = 0;
                                    null != e && (t = e.responseJSON, n = g(t)), null != d && d || p.call(h, n, t), p.call(u, n, t)
                                };
                            if (a.isModuleVersion) {
                                i = {
                                    method: e,
                                    url: o.apiDomain + t,
                                    headers: {
                                        "Content-Type": "application/json;charset=UTF-8",
                                        Referer: "file:///" + p.fullURL(location.href)
                                    },
                                    data: null == i ? "" : JSON.stringify(i)
                                }, null != s && s || (i.headers.AccessToken = f.getAccessToken() || "");
                                var y = n(9);
                                return void y.callNative("JSNetwork", "request", i, function(e) {
                                    var t = null;
                                    try {
                                        var n = (parseInt(e.status, 10), decodeURIComponent(e.response));
                                        "string" == typeof n && (t = JSON.parse(n))
                                    } catch (r) {
                                        p.logError("error: " + JSON.stringify(r)), t = {
                                            error_code: 0
                                        }
                                    }
                                    v(t)
                                }, function(e, t) {
                                    p.call(u, e, t)
                                })
                            }
                            r.ajax({
                                type: e,
                                url: o.apiDomain + t,
                                contentType: null == i ? "application/x-www-form-urlencoded;charset=UTF-8" : "application/json;charset=UTF-8",
                                data: null == i ? null : JSON.stringify(i),
                                dataType: "json",
                                xhrFields: {
                                    withCredentials: !0
                                },
                                beforeSend: m,
                                success: function(e) {
                                    v(e)
                                },
                                error: function(e) {
                                    S(e)
                                }
                            })
                        }
                    },
                    delayLoad: function(e) {
                        var t = Date.now();
                        if (null == e) {
                            var n = localStorage.getItem(i.LocalStorageKey.DelayLoadTimestamp);
                            null != n && (n = parseInt(n, 10), n > t && (e = parseInt((n - t) / 1e3, 10)))
                        }
                        return null == e ? !1 : (u.disable(), this.saveToLocalStorage(i.LocalStorageKey.DelayLoadTimestamp, Math.floor(t + 1e3 * e).toString()), this.showDelayLoad(e), !0)
                    },
                    showDelayLoad: function(e) {
                        n(52)(function(t) {
                            t.load({
                                seconds: e
                            })
                        })
                    },
                    setDefaultRequestFailedHandler: function(e) {
                        h = e
                    },
                    isWeChatPlatform: function() {
                        return a.Current == a.WeChat
                    },
                    isWeiboPlatform: function() {
                        return a.Current == a.Weibo
                    },
                    isQQPlatform: function() {
                        return a.Current == a.QQ
                    },
                    isNativePlatform: function() {
                        return a.Current == a.IOS || a.Current == a.Android
                    },
                    isEmbeddedBrowser: function() {
                        return this.isWeChatPlatform() || this.isWeiboPlatform() || this.isQQPlatform()
                    },
                    getAppVersion: function() {
                        var e = m("phh_" + a.Current + "_version/");
                        return null == e && (e = ""), e
                    },
                    getAppBuild: function() {
                        var e = m("phh_" + a.Current + "_build/");
                        return null === e && (e = ""), e
                    },
                    isWeChatPayAvailable: function() {
                        return f.isWeChatPlatform() || f.isNativePlatform()
                    },
                    isAliPayAvailable: function() {
                        var e = this.getAppVersion();
                        return f.isWeChatPlatform() ? !1 : a.Current == a.IOS && "1.0.7" > e ? !1 : a.Current == a.Android && "1.0.4" > e ? !1 : !0
                    },
                    upaiyunCompress: function(e, t) {
                        if (e = e || "", t = t || "750", e.indexOf("upaiyun.com") > 0) {
                            if (e.indexOf("!") >= 0) return e;
                            e += e.indexOf("weishoptest") > 0 ? "!640" : "!" + t
                        }
                        return e
                    },
                    viewImages: function(e, t, r) {
                        ("undefined" == typeof r || null == r) && (r = {});
                        var o = r.ViewNotWechatInteraface || !1;
                        return t = t || [e], null == window.wx || o ? void n(68)(function(n) {
                            n.load(e, t)
                        }, function() {}) : void wx.previewImage({
                            urls: t,
                            current: e
                        })
                    },
                    changeTitle: function(e) {
                        if (e = e || o.shop.name + "商城", document.title = e, this.isNativePlatform() && a.isModuleVersion) {
                            var t = n(9);
                            return void t.callNative("JSUIControl", "setTitle", {
                                title: e
                            })
                        }
                        if (f.isEmbeddedBrowser()) var i = r('<iframe src="/favicon.ico" style="display:none"></iframe>').on("load", function() {
                            setTimeout(function() {
                                i.off("load").remove()
                            }, 0)
                        }).appendTo(r("body"))
                    },
                    addTimeStampForUrl: function(e) {
                        var t = {
                            ts: (new Date).getTime()
                        };
                        return f.buildURL(t, e)
                    },
                    needAccessToken: function(e) {
                        e = e || location.href;
                        for (var t = ["group2", "group3", "group4", "group5", "groups", "orders", "order", "personal", "like", "order_checkout"], n = 0; n < t.length; n++)
                            if (e.indexOf(t[n] + ".html")) return !0;
                        return !1
                    },
                    addMallCS: function(e) {
                        e = parseInt(e);
                        var t = i.Mall.PddMall.indexOf(e) >= 0;
                        t || i.Mall.PddMall.push(e)
                    },
                    checkMallCS: function(e, t) {
                        var r = n(5);
                        e = parseInt(e);
                        var o = !t.noToast,
                            a = i.Mall.PddMall.indexOf(e) >= 0;
                        if (!a) return o && f.showToast(i.Mall.NoCS), !1;
                        if (t.go) {
                            var l = {
                                mall_id: e
                            };
                            null != t.goodsID && (l.goods_id = t.goodsID), null != t.orderSN && (l.order_sn = t.orderSN), r.forward("chat_detail.html?" + f.buildQuery(l))
                        }
                        return !0
                    },
                    logError: function(e, t, i) {
                        null == o.loggingURL || o.loggingURL.length <= 0 || setTimeout(function() {
                            var l = {
                                msg: e,
                                url: location.href,
                                path: "",
                                line: 0,
                                col: 0,
                                access_token: localStorage.getItem("AccessToken") || "",
                                error: t
                            };
                            if (a.isModuleVersion) {
                                var u = n(9);
                                u.callNative("JSNetwork", "request", {
                                    method: "POST",
                                    url: o.loggingURL,
                                    headers: {
                                        "Content-Type": "application/json;charset=UTF-8"
                                    },
                                    data: null == l ? "" : JSON.stringify(l)
                                })
                            } else r.ajax({
                                type: "POST",
                                url: o.loggingURL,
                                contentType: "application/json;charset=UTF-8",
                                data: JSON.stringify(l),
                                dataType: "json",
                                hrFields: {
                                    withCredentials: !0
                                },
                                success: i,
                                error: i
                            })
                        }, 0)
                    },
                    setupRecord: function() {
                        var e = ["string", "number"];
                        window.record = {}, setTimeout(function() {
                            var t = (window.performance || {}).timing || {};
                            for (var n in t) {
                                var r = t[n];
                                e.indexOf(typeof n) >= 0 && e.indexOf(typeof r) >= 0 && (window.record[n] = r)
                            }
                            f.logError("record", {
                                value: window.record,
                                type: "timing"
                            })
                        }, 1e4)
                    },
                    addRecord: function(e) {
                        "object" != typeof window.record && (window.record = {}), window.record[e] = (new Date).getTime()
                    },
                    replaceGoodsTpl: function(e, t) {
                        e = e || "";
                        for (var n = ["price", "num"], r = 0; r < n.length; r++) {
                            var o = n[r],
                                i = new RegExp("%" + o, "g");
                            e.indexOf("%" + o) >= 0 && t[o] && (e = e.replace(i, t[o]))
                        }
                        return e
                    },
                    recommendRecord: function(e) {
                        null == o.loggingURL || o.loggingURL.length <= 0 || setTimeout(function() {
                            r.ajax({
                                type: "POST",
                                url: o.loggingURL,
                                contentType: "application/json;charset=UTF-8",
                                data: JSON.stringify(e),
                                dataType: "json",
                                hrFields: {
                                    withCredentials: !0
                                }
                            })
                        }, 0)
                    },
                    getCookies: function() {
                        for (var e = (document.cookie || "").split("; "), t = {}, n = 0; n < e.length; n++) {
                            var r = e[n].indexOf("="),
                                o = e[n].substring(0, r),
                                i = e[n].substring(r + 1);
                            t[o] || (t[o] = []), t[o].push(i)
                        }
                        return t
                    },
                    getCookieByName: function(e) {
                        var t = "",
                            n = this.getCookies();
                        for (var r in n)
                            if (r == e) {
                                t = n[r][0];
                                break
                            }
                        return t
                    },
                    setCookie: function(e) {
                        var t = this.getCookies();
                        for (var n in e) {
                            var r = e[n],
                                o = n + "=",
                                i = new Date;
                            if (r) i.setTime(i.getTime() + 864e7), o += r + "; expires=" + i.toGMTString(), document.cookie = o;
                            else {
                                i.setTime(i.getTime() - 1);
                                var a = "; expires=" + i.toGMTString();
                                if (t[n])
                                    for (var l = 0; l < t[n].length; l++) document.cookie = o + t[n][l] + a;
                                else document.cookie = o + a
                            }
                        }
                    },
                    compressImage: function(e, t) {
                        var n = this;
                        if (void 0 != e && void 0 != t && null != e && null != t) {
                            var r = new Image;
                            r.src = e, r.onload = function() {
                                d.EXIF.getData(r, function() {
                                    d.EXIF.getAllTags(this), Orientation = d.EXIF.getTag(this, "Orientation");
                                    var e = r.width,
                                        o = r.height,
                                        i = e / o;
                                    (e > 800 || o > 1200) && (e = parseInt(800), o = parseInt(e / i), o > 1200 && (o = parseInt(1200), e = parseInt(o * i)));
                                    var a = document.createElement("canvas"),
                                        l = a.getContext("2d");
                                    a.width = e, a.height = o, l.drawImage(r, 0, 0, e, o);
                                    var u = null;
                                    if (void 0 != Orientation && null != Orientation && "" != Orientation && 1 != Orientation) switch (Orientation) {
                                        case 6:
                                            n.rotateImg(this, "left", a, e, o);
                                            break;
                                        case 8:
                                            n.rotateImg(this, "right", a, e, o);
                                            break;
                                        case 3:
                                            n.rotateImg(this, "right", a, e, o), n.rotateImg(this, "right", a, e, o)
                                    }
                                    u = a.toDataURL("image/jpeg", .1), n.call(t, u)
                                })
                            }
                        }
                    },
                    rotateImg: function(e, t, n, r, o) {
                        var i = 0,
                            a = 3;
                        if (null != e) {
                            var o = o,
                                r = r,
                                l = 2;
                            null == l && (l = i), "right" == t ? (l++, l > a && (l = i)) : (l--, i > l && (l = a));
                            var u = 90 * l * Math.PI / 180,
                                s = n.getContext("2d");
                            switch (l) {
                                case 0:
                                    n.width = r, n.height = o, s.drawImage(e, 0, 0, r, o);
                                    break;
                                case 1:
                                    n.width = o, n.height = r, s.rotate(u), s.drawImage(e, 0, -o, r, o);
                                    break;
                                case 2:
                                    n.width = r, n.height = o, s.rotate(u), s.drawImage(e, -r, -o, r, o);
                                    break;
                                case 3:
                                    n.width = o, n.height = r, s.rotate(u), s.drawImage(e, -r, 0, r, o)
                            }
                        }
                    },
                    getLocation: function(e) {
                        var t = this;
                        t.isWeChatPlatform() ? wx.getLocation({
                            type: "wgs84",
                            success: function(t) {
                                e(t)
                            }
                        }) : e("null")
                    },
                    getPasteboard: function(e) {
                        var t = this,
                            r = n(9);
                        r.callNative("JSStorage", "getPasteboard", null, function(n) {
                            t.call(e, n)
                        }, function() {
                            t.call(e)
                        })
                    },
                    setPasteboard: function(e, t) {
                        var r = n(9);
                        r.callNative("JSStorage", "setPasteboard", {
                            text: e
                        }, function() {}, function() {})
                    }
                }
            }();
        e.exports = f,
            function() {
                var e = n(13),
                    t = n(8),
                    r = function(n, r) {
                        if (n == e.AuthenticationFailed.code) t.login();
                        else if (n == e.APIServiceBusy.code) {
                            var o = null;
                            null != r && (o = r.error_sec), o = null == o ? 60 : parseInt(o, 10), f.delayLoad(o)
                        } else f.showToast(e.messageFromCode(n))
                    };
                f.setDefaultRequestFailedHandler(r);
                var o = n(9),
                    i = o.callNative;
                o.callNative = function(e, t, n, o, a, l) {
                    i.call(this, e, t, n, o, function(e) {
                        var t = null;
                        null != e && (t = e.error_code), null == t && (t = 0), (null == l || !l) && t > 0 && r(t, e), f.call(a, t, e)
                    })
                }
            }(), n(302)
    },
    2: function(e, t, n) {
        function r() {
            function e(e) {
                var t = r.lastChild;
                return "SCRIPT" !== t.tagName ? void("undefined" != typeof console && console.warn && console.warn("Script is not a script", t)) : void(t.onload = t.onerror = function() {
                    t.onload = t.onerror = null, setTimeout(e, 0)
                })
            }
            var t, r = document.querySelector("head"),
                o = n.e,
                i = n.s;
            n.e = function(n, r) {
                var a = !1,
                    l = !0,
                    u = function(e) {
                        r && (r(e), r = null)
                    };
                return !i && t && t[n] ? void u(!0) : (o(n, function() {
                    a || (a = !0, l ? setTimeout(function() {
                        u()
                    }) : u())
                }), void(a || (l = !1, e(function() {
                    a || (a = !0, i ? i[n] = void 0 : (t || (t = {}), t[n] = !0), u(!0))
                }))))
            }
        }
        r()
    },
    5: function(e, t, n) {
        var r = n(1),
            o = n(9),
            i = n(10);
        e.exports = window.Navigation = {
            GroupUrl: "group5.html",
            GoodsUrl: "goods2.html",
            home: function(e) {
                this.reset("index.html", e)
            },
            reset: function(e, t) {
                var n = this;
                e = r.addTimeStampForUrl(e), r.isNativePlatform() ? o.callNative("JSNavigation", "reset", {
                    url: r.fullURL(e)
                }, function() {
                    n.reload(e, t)
                }, function() {
                    n.reload(e, t)
                }) : (location.href = e, r.call(t))
            },
            reload: function(e, t) {
                e = r.addTimeStampForUrl(e);
                try {
                    history.replaceState(null, "", e)
                } catch (n) {}
                location.href = e, r.call(t)
            },
            back: function(e, t, n) {
                r.isNativePlatform() ? null == e ? o.callNative("JSNavigation", "back", {}, t, function() {}) : o.callNative("JSNavigation", "back", {
                    url: r.fullURL(e)
                }, t, function() {}) : (null == e || n ? history.back() : location.href = e, r.call(t))
            },
            forward: function(e, t) {
                e = r.addTimeStampForUrl(e), r.isNativePlatform() ? (e = r.fullURL(e), o.callNative("JSNavigation", "forward", {
                    url: e,
                    type: "web",
                    props: {
                        url: e
                    }
                }, t, function() {})) : (location.href = e, r.call(t))
            },
            forwardMenuPage: function(e, t) {
                i.isModuleVersion && o.callNative("JSNavigation", "forward", {
                    type: "menuPage",
                    props: {
                        pages: e
                    }
                }, t, function() {})
            },
            replaceURL: function(e, t) {
                try {
                    history.replaceState(null, "", e)
                } catch (n) {}
                r.call(t)
            }
        }
    },
    7: function(e, t) {
        e.exports = {
            AuthorizationType: {
                SMS: 1,
                Weibo: 2,
                WeChat: 3,
                QQ: 4
            },
            PaymentType: {
                AliPay: 1,
                WeChat: 2
            },
            GroupStatus: {
                OnGoing: 0,
                Success: 1,
                Failed: 2
            },
            GroupRole: {
                NotInGroup: 0,
                Member: 1,
                Lead: 2
            },
            RegionType: {
                Province: "1",
                City: "2",
                District: "3"
            },
            Region: {
                China: "1"
            },
            AddressClass: {
                Default: "1",
                Common: "0"
            },
            OrderStatus: {
                Unconfirmed: "0",
                Confirmed: "1",
                Cancelled: "2"
            },
            PaymentStatus: {
                Unpayed: "0",
                Payed: "2",
                RefundApplied: "3",
                Refunded: "4"
            },
            ShipmentStatus: {
                Unshipped: "0",
                Shipping: "1",
                Received: "2"
            },
            rateStatus: {
                rateEnable: "1",
                rateUnable: "0"
            },
            OrderCombinedStatus: {
                Unpayed: 0,
                Unconfirmed: 1,
                Confirmed: 2,
                Shipping: 3,
                Received: 4,
                Cancelled: 5,
                UnshippedRefunding: 6,
                UnshippedRefunded: 7,
                ShippingRefunding: 8,
                ShippingRefunded: 9,
                Expired: 10,
                UnconfirmedRefunding: 11,
                UnconfirmedRefunded: 12
            },
            SkuStatus: {
                OnSale: "ONSALE",
                InStock: "INSTOCK",
                Unavailable: "UNAVAILABLE"
            },
            WaterMark: {
                Default: "!share",
                Transparent: "!transparent",
                None: ""
            },
            Mall: {
                NoCS: "此商家暂未开启在线客服功能",
                NoCSOnline: {
                    NormalMall: "当前没有在线客服，在线客服的服务时间是9:00~20:00。您的话将会变成留言",
                    DefaultMall: "在线客服的服务时间是9:00~18:00。您的话将会变成留言"
                },
                PddMall: [1, 11],
                ServiceStart: 9,
                ServiceEnd: {
                    NormalMall: 20,
                    DefaultMall: 18
                }
            },
            GoodsType: {
                DEFAULT: 1,
                IMPORTS: 2,
                OVERSEAS_TRANSSHIP: 3,
                OVERSEAS_DM: 4
            },
            EVENT_TYPE: {
                DEFAULT: 0,
                LUCKY_DRAW: 1,
                SPIKE: 2,
                TZMD: 3,
                GET_EXTRA_FOR_FREE: 4
            },
            OrderType: {
                All: 0,
                PendingPay: 1,
                Shipping: 2,
                Collecting: 3,
                Evaluating: 4
            },
            OrderDesc: {
                Received: "已签收"
            },
            ForceContactBound: 5,
            OFFICIAL_MALL_ID: {
                Online: 606,
                Hutaojie: 40,
                Weipin: 16
            },
            PROBLEM_TYPE_DESC: {
                1: "未收到货",
                2: "水果破损腐烂",
                3: "商品少发漏发发错",
                4: "商品与描述不一致",
                5: "退款过程遇到问题",
                0: "其他"
            },
            CookieKey: {
                AccessToken: "PDDAccessToken"
            },
            LocalStorageKey: {
                AccessToken: "AccessToken",
                ShowAlertDelayLoad: "ShowAlertDelayLoad",
                DelayLoadTimestamp: "DelayLoadTimestamp",
                UID: "0e4f9612e0fbe579"
            },
            AlertType: {
                Alert: {},
                Confirm: {
                    ConfirmShipment: "confirm_shipment",
                    ConfirmAppGroup: "confirm_app_group"
                }
            }
        }
    },
    8: function(e, t, n) {
        var r = n(1),
            o = n(6),
            i = n(7),
            a = n(5),
            l = n(9);
        e.exports = {
            getAccessToken: function() {
                return localStorage.getItem("AccessToken")
            },
            hasAccessToken: function() {
                return null != this.getAccessToken()
            },
            setAccessToken: function(e) {
                r.saveToLocalStorage("AccessToken", e);
                var t = {};
                t[i.CookieKey.AccessToken] = e, r.setCookie(t)
            },
            setAccessTokenOnNative: function(e) {
                r.isNativePlatform() && l.callNative("JSStorage", "setSecure", {
                    key: "__ACCESS_TOKEN__",
                    value: e
                })
            },
            setWeixinInfo: function(e) {
                r.saveToLocalStorage("weixinInfo", e)
            },
            setCustomerUID: function(e) {
                r.saveToLocalStorage("searchUID", e)
            },
            getAvatarURL: function(e) {
                return null == e || "" == e ? o.shop.logo : "/0" == e.substr(-2) ? e.slice(0, -1) + "132" : e
            },
            authenticate: function(e, t, n) {
                var r = function() {
                    return e == i.AuthorizationType.Weibo ? o.RedirectURI.Weibo : void 0
                }();
                l.callNative("JSLogin", "authenticate", {
                    type: e,
                    redirect_uri: r
                }, t, n, !0)
            },
            login: function(e, t, n, u) {
                var s = this,
                    c = function() {
                        switch (e) {
                            case i.AuthorizationType.SMS:
                                return o.AppID.SMS;
                            case i.AuthorizationType.Weibo:
                                return o.AppID.Weibo;
                            case i.AuthorizationType.WeChat:
                                return o.AppID.WeChat;
                            case i.AuthorizationType.QQ:
                                return r.isNativePlatform() ? o.AppID.QQ : o.AppID.QQConnect;
                            default:
                                return r.isWeChatPlatform() ? o.AppID.WeChat : 0
                        }
                    }(),
                    d = function(e) {
                        var t = e.access_token,
                            n = JSON.stringify(e.weixin);
                        if (s.setWeixinInfo(n), s.setAccessToken(t), s.setAccessTokenOnNative(t), !r.isEmbeddedBrowser()) {
                            l.callNative("PDDTrace", "checkpoint");
                            var o = r.getParameter("from");
                            null == o ? a.home() : a.reload(o)
                        }
                    },
                    f = function(e) {
                        r.apiRequest("POST", "login", e, function(e) {
                            d(e), r.call(n)
                        }, function(e) {
                            r.call(u, e)
                        }, !0)
                    };
                s.logout(function() {
                    if (r.isEmbeddedBrowser()) {
                        var n = r.getParameter("code"),
                            l = r.buildURL({});
                        if (null == n || n.length <= 0) return void(r.isWeChatPlatform() ? location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?" + r.buildQuery({
                            response_type: "code",
                            scope: "snsapi_base",
                            appid: o.ApiKey.WeChat,
                            redirect_uri: l
                        }) + "#wechat_redirect" : r.isWeiboPlatform() ? location.href = "https://api.weibo.com/oauth2/authorize?" + r.buildQuery({
                            response_type: "code",
                            client_id: o.ApiKey.Weibo,
                            redirect_uri: o.RedirectURI.Weibo,
                            state: l,
                            display: "mobile",
                            forcelogin: !1,
                            language: "zh"
                        }) : r.isQQPlatform() && (location.href = "https://graph.qq.com/oauth2.0/authorize?" + r.buildQuery({
                            response_type: "code",
                            client_id: o.ApiKey.QQConnect,
                            redirect_uri: o.RedirectURI.QQConnect + "?" + r.buildQuery({
                                refer: l
                            }),
                            scope: "get_user_info",
                            display: "mobile"
                        })));
                        a.replaceURL(l);
                        var u = {
                            code: n,
                            app_id: c
                        };
                        r.isWeiboPlatform() ? u.redirect_uri = o.RedirectURI.Weibo : r.isQQPlatform() && (u.redirect_uri = o.RedirectURI.QQConnect), f(u)
                    } else {
                        if (null == t) return a.reload("login.html?from=" + encodeURIComponent(location.href));
                        var u = {
                            app_id: c
                        };
                        e == i.AuthorizationType.WeChat ? u.code = t.auth_code : e == i.AuthorizationType.Weibo ? (u.access_token = t.access_token, u.uid = t.uid) : e == i.AuthorizationType.QQ ? (u.access_token = t.access_token, u.open_id = t.open_id) : e == i.AuthorizationType.SMS && (u.mobile = t.mobile, u.code = t.code), f(u)
                    }
                })
            },
            logout: function(e) {
                this.setAccessToken(null), this.setAccessTokenOnNative(null), this.setWeixinInfo(null), this.setCustomerUID(null), r.saveToLocalStorage(i.LocalStorageKey.UID), r.isNativePlatform() ? l.callNative("JSLogin", "logout", null, function() {
                    r.call(e)
                }, function() {
                    r.call(e)
                }) : r.call(e)
            }
        }
    },
    13: function(e, t) {
        var n = {
                40000: "错误的请求地址或方法",
                40001: "非法会话或会话已过期",
                40002: "服务器忙碌中，请稍等",
                40003: "错误的请求参数",
                40004: "微信登录失败",
                40005: "请求还在处理中",
                40006: "手机登录验证码错误",
                40100: "暂未开通该开放平台",
                41001: "商品不存在",
                41002: "商品已下架",
                41003: "商品已售罄",
                41004: "商品不在同一商店",
                41005: "该商品当前不在抽奖活动时间",
                41006: "商品不在可售区域",
                42001: "团已满",
                42002: "团不存在",
                42003: "团已过期",
                42004: "超过每人购买次数限制",
                43001: "用户不存在",
                43002: "地址错误",
                43004: "身份证号不存在",
                43005: "姓名和身份证号不一致",
                43006: "对不起，您无法获取或更新身份证号",
                43007: "对不起，您已用完当前最大验证次数，请24小时后再试",
                43010: "该地址已存在",
                43011: "该地址无法导入",
                43013: "一小时内不能重复提交",
                44001: "优惠券已使用",
                44002: "优惠券不存在",
                44003: "优惠券没有达到最小使用金额",
                44004: "优惠券已过期",
                44005: "优惠券不属于用户",
                44006: "优惠券已废弃",
                44007: "优惠券暂未到使用时间",
                44008: "优惠券不能在该分类使用",
                44010: "优惠券已经抢完了，下次早点来哦",
                44011: "您已经领过该优惠券",
                44015: "不是团长不能使用团长免单优惠券",
                45001: "订单不存在",
                45002: "订单不属于该用户",
                45003: "订单不能取消",
                45004: "订单商品不一致",
                45005: "订单已经收货",
                45006: "订单还未发货",
                45007: "海淘订单没有提交身份证",
                45008: "订单已支付",
                45009: "支付繁忙，请重试",
                45010: "订单正在支付中",
                45011: "未找到物流单号",
                45020: "对不起，您只能评价自己的订单",
                45021: "对不起，确认收货后才能评价",
                45022: "对不起，您已经评价过",
                46001: "团订单不存在",
                46002: "无法重复参团",
                48001: "图片格式错误",
                48002: "图片大小超过限制",
                50000: "内部服务器错误",
                45012: "手机充值号码为空",
                45013: "手机充值号码不支持",
                45014: "手机充值商品不存在",
                45016: "获取快递信息失败，请重试"
            },
            r = function() {
                var e = {};
                for (var t in n) e[t] = {
                    code: parseInt(t, 10),
                    message: n[t]
                };
                return e
            }();
        e.exports = {
            AuthenticationFailed: r[40001],
            APIServiceBusy: r[40002],
            ItemRemoved: r[41002],
            OutOfStock: r[41003],
            AddressUnreachable: r[41006],
            NoCouponLeft: r[44010],
            CouponTaken: r[44011],
            PersonalInfoNoID: r[45007],
            OrderPayed: r[45008],
            GroupInvalid: r[46001],
            OverBuyLimit: r[42004],
            NoNameIDBefore: r[43006],
            PrepayBusy: r[45009],
            OrderPaying: r[45010],
            GroupCompleted: r[42001],
            messageFromCode: function(e) {
                var t = r[e];
                return null == t && null != e && (t = r[e.toString()]), null == t ? (window.onerror("api_error", location.href, 0, 0, "error_code: " + (e || "0")), "") : t.message
            }
        }
    },
    19: function(e, t) {
        "use strict";
        var n = {
            BLACK_FRIDAY_DATA: {
                SUBJECT_ID: 15,
                COUPON_BATCH_IDS: [9227, 9228, 9229, 9230, 9231, 9232, 9233, 9234, 9235, 9236, 9237, 9238, 9239, 9240, 9241, 9242, 9243, 9244, 9245, 9246, 9247, 9248, 9249, 9250, 9251, 9252, 9253, 9254, 9255],
                COUPON_BATCH_IDS_TEST: [67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95]
            },
            DOUBLE_12_DATA: {
                COUPON_BATCH_IDS: [9322, 9323, 9324, 9325, 9326, 9327, 9328, 9329],
                COUPON_BATCH_IDS_TEST: [99, 100, 101, 102, 103, 104, 105, 106]
            },
            NEW_YEAR_DATA: {
                START_TIME: "2016/3/14 00:00:00",
                END_TIME: "2016/3/18 23:59:59",
                COUPON_BATCH_IDS: [10798, 10799, 10800, 10801, 10802, 10803],
                COUPON_BATCH_IDS_TEST: [9444, 9445, 9446, 9447, 9448, 9449]
            },
            NEWBEE_GIFT_DATA: {
                COUPON_BATCH_IDS: [10751, 10752, 10753, 10754, 10755, 10756],
                COUPON_BATCH_IDS_TEST: [9439, 9440, 9441, 9442, 9443, 9444]
            }
        };
        (function() {
            var e = (new Date).getTime(),
                t = e > parseFloat(new Date("2016/2/24 18:00:00").getTime(), 10) && e < parseFloat(new Date("2016/3/1 18:00:00").getTime(), 10),
                r = e > parseFloat(new Date("2016/2/24 12:00:00").getTime(), 10),
                o = e > parseFloat(new Date("2016/2/24 18:00:00").getTime(), 10),
                i = 15074,
                a = 15436,
                l = 36860,
                u = 37584,
                s = {
                    IsStart: t && (o ? !0 : !r),
                    IsNewStart: o,
                    isOldEnd: r,
                    GoodsID: o ? a : r ? 0 : i,
                    GroupID: o ? u : r ? 0 : l,
                    Hint: o ? "5元榴莲APP专享团进行中，限量200份" : "2.99元脐橙APP专享团进行中，限量10000份",
                    ForwardFunc: "showDownloadNotification"
                };
            s.GoodsImg = "http://pinduoduo.b0.upaiyun.com/activity/app_group_goods_" + s.GoodsID + ".jpg", s.NotAppBanner = "http://pinduoduo.b0.upaiyun.com/activity/app_group_banner_not_" + s.GoodsID + ".jpg", n.AppGroup = s
        })();
        e.exports = n
    },
    22: function(e, t, n) {
        n(2), e.exports = function(e, t) {
            n.e(0, function(r) {
                r ? t() : e(n(317))
            })
        }
    },
    24: function(e, t, n) {
        var r = n(7);
        e.exports = function() {
            var e = function(e, t, n) {
                    if (t == r.PaymentStatus.Unpayed) return e == r.OrderStatus.Cancelled ? r.OrderCombinedStatus.Cancelled : r.OrderCombinedStatus.Unpayed;
                    if (t == r.PaymentStatus.Payed)
                        if (n == r.ShipmentStatus.Unshipped) {
                            if (e == r.OrderStatus.Unconfirmed) return r.OrderCombinedStatus.Unconfirmed;
                            if (e == r.OrderStatus.Confirmed) return r.OrderCombinedStatus.Confirmed
                        } else {
                            if (n == r.ShipmentStatus.Shipping) return r.OrderCombinedStatus.Shipping;
                            if (n == r.ShipmentStatus.Received) return r.OrderCombinedStatus.Received
                        }
                    else if (t == r.PaymentStatus.RefundApplied) {
                        if (e == r.OrderStatus.Unconfirmed) return r.OrderCombinedStatus.UnconfirmedRefunding;
                        if (n == r.ShipmentStatus.Unshipped) return r.OrderCombinedStatus.UnshippedRefunding;
                        if (n == r.ShipmentStatus.Shipping || n == r.ShipmentStatus.Received) return r.OrderCombinedStatus.ShippingRefunding
                    } else if (t == r.PaymentStatus.Refunded) return e == r.OrderStatus.Unconfirmed ? r.OrderCombinedStatus.UnconfirmedRefunded : n == r.ShipmentStatus.Unshipped ? r.OrderCombinedStatus.UnshippedRefunded : r.OrderCombinedStatus.ShippingRefunded;
                    return null
                },
                t = function(e) {
                    switch (e) {
                        case r.OrderCombinedStatus.Unpayed:
                            return "待支付";
                        case r.OrderCombinedStatus.Unconfirmed:
                            return "已支付，未确认";
                        case r.OrderCombinedStatus.Confirmed:
                            return "已确认，待发货";
                        case r.OrderCombinedStatus.Shipping:
                            return "配送中";
                        case r.OrderCombinedStatus.Received:
                            return "已签收";
                        case r.OrderCombinedStatus.Cancelled:
                            return "交易已取消";
                        case r.OrderCombinedStatus.UnshippedRefunding:
                            return "未发货退款处理中";
                        case r.OrderCombinedStatus.UnshippedRefunded:
                            return "未发货退款成功";
                        case r.OrderCombinedStatus.ShippingRefunding:
                            return "已发货退款处理中";
                        case r.OrderCombinedStatus.ShippingRefunded:
                            return "已发货退款成功";
                        case r.OrderCombinedStatus.Expired:
                            return "组团失败";
                        case r.OrderCombinedStatus.UnconfirmedRefunding:
                            return "未成团退款处理中";
                        case r.OrderCombinedStatus.UnconfirmedRefunded:
                            return "未成团退款成功";
                        default:
                            return ""
                    }
                },
                n = function(n, r, o) {
                    return t(e(n, r, o))
                };
            return {
                getOrderCombinedStatus: e,
                getOrderCombinedStatusDescription: t,
                getOrderStatusDescription: n
            }
        }()
    },
    41: function(e, t, n) {
        e.exports = window.pinnotification = function() {
            var e = {},
                t = {},
                r = 1;
            return {
                register: function(o, i, a, l) {
                    var u = function() {
                        null != a && a()
                    };
                    if (null == i) return u();
                    var s = r++,
                        c = function() {
                            e[o][s] = i, t[s] = o, u()
                        };
                    return null == e[o] ? (e[o] = {}, n(9).callNative("JSNotification", "register", {
                        name: o
                    }, function() {
                        c()
                    }, l)) : c(), s
                },
                unregister: function(r, o, i) {
                    var a = function() {
                            null != o && o()
                        },
                        l = t[r],
                        u = e[l];
                    if (null == u) return a();
                    delete u[r], delete t[r];
                    var s = 0;
                    for (var c in u) u.hasOwnProperty(c) && s++;
                    0 >= s && (delete e[l], n(9).callNative("JSNotification", "unregister", {
                        name: l
                    }, o, i))
                },
                send: function(e, t, r, o) {
                    n(9).callNative("JSNotification", "send", {
                        name: e,
                        payload: t
                    }, r, o)
                },
                message: function(t, n) {
                    var r = e[t];
                    if (null != r)
                        for (var o in r) r[o](n)
                }
            }
        }()
    },
    45: function(e, t, n) {
        var r = n(7),
            o = n(10),
            i = n(1);
        e.exports = {
            setRightBarButtons: function(e) {
                if (i.isNativePlatform() && o.isModuleVersion) {
                    e = e || {
                        buttons: [{
                            icon: 1,
                            action: "Navigation.reload()"
                        }, {
                            icon: 2,
                            action: "Share.show()"
                        }]
                    };
                    var t = n(9);
                    t.callNative("JSUIControl", "setRightBarButtons", e)
                }
            },
            loadAccessToken: function(e) {
                var t = function(t) {
                        t = t || {};
                        var r = n(8),
                            o = t.value || "null";
                        ("null" == o || 0 == o.length) && (o = null), r.setAccessToken(o), i.call(e)
                    },
                    r = n(9);
                r.callNative("JSStorage", "getSecure", {
                    key: "__ACCESS_TOKEN__"
                }, function(e) {
                    t(e)
                }, function() {
                    t()
                })
            },
            checkInviteCode: function(e) {
                return e = e.trim(), e.match(/^[a-z0-9]{4}$/) ? e : null
            },
            joinAppGroup: function(e, t) {
                var n = {},
                    o = function() {
                        var t = function() {
                                i.showToast("您的专享码有误！")
                            },
                            r = function() {
                                if (0 == a) return void t();
                                i.logError("app_group_code", "forward_" + a);
                                var e = Navigation.GroupUrl + "?is_group_app=1&group_order_id=" + a;
                                Navigation.forward(e)
                            },
                            o = function() {
                                var t = parseInt(e, 16).toString();
                                if (15 != t.length) return 0;
                                var n = parseInt(t.substring(0, 6), 10);
                                if (160119 > n || n > 160123) return 0;
                                var r = parseInt(t.substring(6, 11), 10);
                                return r > 86400 ? 0 : t
                            },
                            a = 0;
                        if (4 != e.length) {
                            var a = o();
                            return void r()
                        }
                        i.apiRequest("GET", "group_order/app/code?group_id=" + n.GroupID + "&invite_code=" + e, null, function(e) {
                            a = e.group_order_id || 0, r()
                        }, function() {
                            t()
                        }, !0, !1, !0)
                    };
                i.apiRequest("GET", "v2/goods?page=1&size=1", null, function(e) {
                    var a = (e.mobile_app_groups || [])[0];
                    if (a) {
                        var l = parseInt((new Date).getTime() / 1e3, 10);
                        n = {
                            IsStart: l >= a.start_time && l <= a.end_time,
                            GoodsID: a.goods_id,
                            GroupID: a.group_id,
                            GoodsImg: a.thumb_url,
                            GoodsName: a.goods_name || "APP专享团"
                        }, n.IsStart && i.showJSAlert(r.AlertType.Confirm.ConfirmAppGroup, o, null, null, {
                            imgUrl: n.GoodsImg,
                            descData: n.GoodsName,
                            showCallback: t
                        })
                    }
                })
            },
            registerSceneNotification: function(e) {
                var t = this,
                    r = function() {
                        i.getPasteboard(function(e) {
                            e = e || {};
                            var n = e.text || "";
                            if (n.length > 0) {
                                var r = t.checkInviteCode(n);
                                r && (i.logError("app_group_code", a + ": show_" + r), t.joinAppGroup(r, function() {
                                    i.setPasteboard("")
                                }))
                            }
                        })
                    },
                    o = n(41),
                    a = o.register("onApplicationResume", r);
                r(), e = e || {}, o.register("onSceneLeave", function() {
                    o.unregister(a), i.call(e.onSceneLeave)
                }), o.register("onSceneReturn", function(t) {
                    a = o.register("onApplicationResume", r, function(e) {}, function(e) {}), i.call(e.onSceneReturn, t)
                });
                for (var l in e) - 1 == ["onSceneLeave", "onSceneReturn"].indexOf(l) && o.register(l, function() {
                    i.call(e[l])
                })
            },
            setupPullReload: function(e) {
                n(9).callNative("JSUIControl", e ? "disablePullReload" : "enablePullReload")
            }
        }
    },
    46: function(e, t) {
        "use strict";
        var n = 1048576,
            r = "rectangle",
            o = "text",
            i = "qrcode",
            a = "share_title",
            l = "share_image";
        e.exports = {
            Group: {
                max_size: n,
                width: 750,
                height: 800,
                items: [{
                    x: 0,
                    y: .5625,
                    width: 1,
                    height: .4375,
                    source: r,
                    fill: 16053240
                }, {
                    x: 0,
                    y: 0,
                    width: 1,
                    height: .44,
                    source: l
                }, {
                    x: .03067,
                    y: .4625,
                    width: .93867,
                    height: .12,
                    source: a,
                    font_size: 10,
                    font_color: 1250067,
                    bold_font: !1
                }, {
                    x: .36667,
                    y: .60875,
                    width: .26667,
                    height: .25,
                    source: i
                }, {
                    x: .24,
                    y: .875,
                    width: .52,
                    height: .05,
                    source: o,
                    data: "长按二维码识别即可参团！",
                    font_size: 10,
                    font_color: 16711725,
                    bold_font: !0,
                    alignment_center: !0
                }]
            },
            ListDescription: [{
                x: .66,
                y: .1,
                width: .34,
                height: .05,
                source: o,
                font_size: 8,
                font_color: 10263708
            }, {
                x: .66,
                y: .1725,
                width: .34,
                height: .05,
                source: o,
                font_size: 8,
                font_color: 10263708
            }, {
                x: .66,
                y: .24375,
                width: .34,
                height: .05,
                source: o,
                font_size: 8,
                font_color: 10263708
            }]
        }
    },
    52: function(e, t, n) {
        n(2), e.exports = function(e, t) {
            n.e(4, function(r) {
                r ? t() : e(n(304))
            })
        }
    },
    59: function(e, t, n) {
        n(2), e.exports = function(e, t) {
            n.e(1, function(r) {
                r ? t() : e(n(311))
            })
        }
    },
    64: function(e, t, n) {
        n(2), e.exports = function(e, t) {
            n.e(3, function(r) {
                r ? t() : e(n(316))
            })
        }
    },
    66: function(e, t, n) {
        n(2), e.exports = function(e, t) {
            n.e(5, function(r) {
                r ? t() : e(n(319))
            })
        }
    },
    68: function(e, t, n) {
        n(2), e.exports = function(e, t) {
            n.e(2, function(r) {
                r ? t() : e(n(321))
            })
        }
    },
    302: function(e, t, n) {
        function r() {
            function e(e) {
                if (l && l.length && e)
                    for (; e;) {
                        if (e.id && -1 != l.indexOf(e.id)) return !0;
                        e = e.parentNode
                    }
                return !1
            }

            function t(t) {
                e(t.target) || t.preventDefault()
            }

            function r(e) {
                if (l && e)
                    if ("string" == typeof e) l.push(e);
                    else if ("object" == typeof e) {
                    var t = function(e) {
                        return "function" == typeof Array.isArray ? Array.isArray(e) : "[object Array]" === Object.prototype.toString.call(e)
                    }(e);
                    if (t)
                        for (var n = 0; n < e.length; n++) r(e);
                    else e.id && "string" == typeof e.id && l.push(e.id)
                }
            }

            function o() {
                l = [];
                for (var e = 0; e < arguments.length; e++) r(arguments[e]);
                null === a && (a = document.body.style.overflow, document.body.style.overflow = "hidden", document.body.addEventListener("touchmove", t, !1))
            }

            function i() {
                null !== a && (document.body.style.overflow = a, a = null, document.body.removeEventListener("touchmove", t, !1))
            }
            var a = null,
                l = null,
                u = n(1);
            u.ui = {
                disableScroll: o,
                enableScroll: i
            }
        }
        r(), e.exports = {}
    }
});