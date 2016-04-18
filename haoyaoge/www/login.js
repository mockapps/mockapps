webpackJsonp([59], {
    0: function(e, o, n) {
        "use strict";
        n(78);
        var i = n(4),
            t = n(1),
            r = n(6),
            a = n(7),
            s = n(10),
            c = n(3),
            u = n(8);
        t.prepare({
            requireLogin: !1,
            disablePullReload: !0,
            regEvents: {
                onSceneReturn: function() {
                    var e = t.getParameter("from");
                    e && Navigation.reload(e)
                }
            }
        }, function() {
            var e = "发送验证码",
                o = "重新发送({0})",
                n = "请输入正确的手机号码",
                l = "请输入正确的验证码",
                f = "请先阅读并同意拼好货服务协议",
                h = {
                    SUCCESS: "发送成功",
                    FAILED: "发送失败"
                },
                d = {
                    SUCCESS: "登录成功",
                    FAILED: "登录失败"
                },
                g = "MobileCD",
                p = "版本信息： V",
                v = avalon.define({
                    $id: "login",
                    wechatLoginVisible: !1,
                    qqLoginVisible: !1,
                    weiboLoginVisible: !1,
                    phoneLoginVisible: !0,
                    telephone: "",
                    verificationCode: "",
                    verificationCodeMessage: e,
                    verificationCodeRequestButtonEnabled: !0,
                    errorMessage: "",
                    agreementChecked: !0,
                    versionInfo: "",
                    loginBoxTop: .9 * Math.min(i(window).width(), 640) + "px",
                    loginBoxHeight: i(window).height() - .9 * Math.min(i(window).width(), 640) + "px",
                    showPhoneLogin: function() {
                        i("#first").fadeOut(400), i(".container").animate({
                            top: "0%"
                        }, {
                            duration: 300
                        })
                    },
                    hidePhoneLogin: function(e) {
                        return e && (e.preventDefault(), e.stopPropagation()), i("#first").fadeIn(300), i(".container").animate({
                            top: "100%"
                        }, {
                            duration: 300
                        }), !1
                    },
                    clearError: function() {
                        v.errorMessage = ""
                    },
                    requestVerificationCode: function() {
                        v.verificationCodeRequestButtonEnabled && v.checkPhoneNumber_(v.telephone) && (t.apiRequest("POST", "mobile/code/request", {
                            mobile: v.telephone,
                            shop_id: r.shop.shopID,
                            app_id: r.AppID.SMS
                        }, function() {
                            t.showToast(h.SUCCESS)
                        }, function() {
                            t.showToast(h.FAILED)
                        }, !0, !0, !0), t.saveToLocalStorage(g, JSON.stringify({
                            expireTime: ((new Date).getTime() + 6e4).toString(),
                            telephone: v.telephone
                        })), C(60))
                    },
                    showTerms: function() {
                        Navigation.forward("terms.html")
                    },
                    phoneLogin: function(e) {
                        return e && (e.preventDefault(), e.stopPropagation()), v.checkPhoneNumber_(v.telephone) && v.checkVerificationCode_(v.verificationCode) && v.checkAgreement_() ? (v.login(a.AuthorizationType.SMS), !1) : !1
                    },
                    login: function(e) {
                        c.show(), setTimeout(function() {
                            c.hide()
                        }, 3e3);
                        var o = function(o) {
                            u.login(e, o, function() {
                                t.showToast(d.SUCCESS), c.hide()
                            }, function() {
                                setTimeout(function() {
                                    t.showToast(d.FAILED)
                                }, 1e3), c.hide()
                            })
                        };
                        e == a.AuthorizationType.SMS ? o({
                            mobile: v.telephone,
                            code: v.verificationCode
                        }) : u.authenticate(e, function(e) {
                            o(e)
                        })
                    },
                    checkPhoneNumber_: function(e) {
                        var o = /(^1)\d{10}$/;
                        return o.test(e) ? !0 : (v.errorMessage = n, !1)
                    },
                    checkVerificationCode_: function(e) {
                        return null == e || e.length <= 0 ? (v.errorMessage = l, !1) : !0
                    },
                    checkAgreement_: function() {
                        return v.agreementChecked ? !0 : (v.errorMessage = f, !1)
                    }
                });
            if (c.hide(), avalon.scan(document.body), t.isNativePlatform()) {
                t.isCurrentVersionInReview() || (v.wechatLoginVisible = !0);
                var m = t.getAppVersion();
                v.versionInfo = p + m, (s.Current == s.IOS && m >= "1.1.0" || s.Current == s.Android && m >= "1.0.8") && (v.weiboLoginVisible = !0), (s.Current == s.IOS && m >= "1.1.0" || s.Current == s.Android && m >= "1.1.0") && (v.qqLoginVisible = !0)
            }
            var C = function(n) {
                    v.verificationCodeRequestButtonEnabled = !1;
                    var i = n;
                    v.verificationCodeMessage = t.format(o, i);
                    var r = window.setInterval(function() {
                        --i <= 0 ? (window.clearInterval(r), v.verificationCodeMessage = e, v.verificationCodeRequestButtonEnabled = !0, t.saveToLocalStorage(g, null)) : v.verificationCodeMessage = t.format(o, i)
                    }, 1e3)
                },
                S = function() {
                    var e = JSON.parse(localStorage.getItem(g)) || {};
                    if (e.telephone && e.expireTime) {
                        v.telephone = e.telephone;
                        var o = (new Date).getTime(),
                            n = parseInt((parseFloat(e.expireTime, 10) - parseFloat(o, 10)) / 1e3, 10);
                        n > 0 ? C(n) : t.saveToLocalStorage(g, null)
                    }
                };
            S()
        })
    },
    78: function(e, o) {}
});
