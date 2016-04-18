webpackJsonp([6], {
    11: function(e, n, t) {
        var o = t(1),
            i = t(6),
            r = t(8);
        t(10);
        e.exports = function() {
            var e = 3e4,
                n = 1,
                t = {
                    Open: 0,
                    Close: 1,
                    Authentication: 2,
                    Message: 3
                },
                s = null,
                u = 0,
                a = {},
                l = {},
                c = [],
                f = 0,
                d = !1,
                p = void 0 !== window.WebSocket,
                v = function() {
                    return null != s && s.readyState == WebSocket.OPEN
                },
                g = function() {
                    v() || null != s && s.readyState == WebSocket.CONNECTING || !p || (s = new WebSocket(i.pushDomain + "?" + o.buildQuery({
                        access_token: r.getAccessToken(),
                        role: "user"
                    })), s.onopen = function() {
                        setTimeout(function() {
                            b(), h(t.Open)
                        }, 50)
                    }, s.onclose = function() {
                        setTimeout(function() {
                            d = !1, h(t.Close)
                        }, 50)
                    }, s.onerror = function(e) {}, s.onmessage = function(e) {
                        if (null != e && null != e.data) {
                            var n = JSON.parse(e.data);
                            if (null != n) {
                                var o = n.response,
                                    i = "ok" === n.result;
                                if (!i && null != n.result, "auth" == o) return i && (d = !0), h(t.Authentication, i);
                                var r = n.request_id;
                                if (null != r) {
                                    var s = l[r];
                                    null != s && setTimeout(function() {
                                        s(n)
                                    }, 50)
                                }
                                h(t.Message, n)
                            }
                        }
                    })
                },
                m = function(e, n) {
                    if (null == n) return null;
                    var t = u++;
                    return a[t] = {
                        type: e,
                        handler: n
                    }, t
                },
                h = function(e) {
                    for (var n = [], t = 1; t < arguments.length; ++t) n.push(arguments[t]);
                    for (var o in a) {
                        var i = a[o];
                        i.type == e && setTimeout(function() {
                            i.handler.apply(null, n)
                        }, 50)
                    }
                },
                b = function(e) {
                    if (p) {
                        var t = null;
                        return "object" == typeof e && (t = n++, e.request_id = t, c.push(e)), v() ? (c.forEach(function(e) {
                            s.send(JSON.stringify(e))
                        }), c = []) : g(), t
                    }
                };
            return {
                isOpen: v,
                isSupport: p,
                hasAuthenticated: function() {
                    return p ? d : !1
                },
                onOpen: function(e) {
                    return m(t.Open, e)
                },
                onClose: function(e) {
                    return m(t.Close, e)
                },
                onAuthenticationResult: function(e) {
                    return p ? m(t.Authentication, e) : void 0
                },
                onMessage: function(e) {
                    return p ? m(t.Message, e) : void 0
                },
                unregister: function(e) {
                    delete a[e]
                },
                keepAlive: function() {
                    if (p)
                        if (v()) {
                            var n = Date.now();
                            n - f >= e && (b({
                                cmd: "heartbeat"
                            }), f = n)
                        } else g()
                },
                send: function(e) {
                    p && b(e)
                },
                request: function(e, n) {
                    if (p) {
                        var t = b(e);
                        return null == t || null == n ? t : void(l[t] = n)
                    }
                },
                hasNewMsg: function(e, n) {
                    if (p && r.hasAccessToken()) {
                        var t = JSON.parse(localStorage.getItem("LastPersonalMsg")) || {},
                            i = t.key || 0,
                            s = t.time || 0;
                        if (0 == i || e) {
                            var u = Date.now().toString(),
                                a = {
                                    key: i,
                                    time: s
                                };
                            if (3e4 > u - s && !e) return a.time = u, void localStorage.setItem("LastPersonalMsg", JSON.stringify(a));
                            var c = 0,
                                f = b({
                                    cmd: "latest_conversations",
                                    page: 1,
                                    size: 20
                                });
                            l[f] = function(e) {
                                for (var t = e.conversations, i = document.querySelector("#footer_personal i"), r = 0; r < t.length; r++) "read" != t[r].status && c++;
                                null != i && 0 != c && i.classList.add("fb-badge1"), a.key = c, a.time = u, localStorage.setItem("LastPersonalMsg", JSON.stringify(a)), null != n && o.call(n, c)
                            }
                        }
                    }
                },
                alertNotSupport: function(e) {
                    p || o.showAlert("您的系统版本不支持这个功能(Android系统版本至少为4.3)", function() {
                        o.call(e)
                    })
                }
            }
        }()
    },
    15: function(e, n, t) {
        var o = t(1),
            i = t(11),
            r = t(5),
            s = 0;
        setTimeout(function() {
            var e = 5e3,
                n = t(340),
                s = o.createNodeFromHTML(n);
            document.body.appendChild(s);
            var u = avalon.define({
                $id: "notification",
                visible: !1,
                imageURL: "",
                message: "",
                groupOrderID: "",
                joinGroup: function() {
                    !u.visible || u.groupOrderID.length <= 0 || r.forward(r.GroupUrl + "?group_order_id=" + u.groupOrderID)
                }
            });
            avalon.scan(s), i.onMessage(function(n) {
                u.visible || "broadcast" != n.response || (n = n.message, null != n && (u.imageURL = n.image_url, u.message = n.content, u.groupOrderID = n.group_order_id || ""), u.visible = !0, setTimeout(function() {
                    u.visible = !1
                }, e))
            }), i.keepAlive(), ["click", "scroll", "touchmove", "touchstart"].forEach(function(e) {
                window.addEventListener(e, function() {
                    i.keepAlive()
                })
            })
        }, s)
    },
    340: function(e, n) {
        e.exports = '<div class="ws-for-push" ms-class="ws-for-push-show:visible" ms-controller="notification" ms-click="joinGroup" ms-if="visible">\n    <img ms-src="imageURL"/>\n    <span ms-text="message"></span>\n</div>\n'
    }
});