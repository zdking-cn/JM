//Sat Oct 26 2024 13:57:26 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("大潮");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(a6) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a9) {
      return typeof a9;
    } : function (a9) {
      return a9 && "function" == typeof Symbol && a9.constructor === Symbol && a9 !== Symbol.prototype ? "symbol" : typeof a9;
    };
    return b(a6);
  }
  function c(a6, a7) {
    var a9 = "undefined" != typeof Symbol && a6[Symbol.iterator] || a6["@@iterator"];
    if (!a9) {
      if (Array.isArray(a6) || (a9 = d(a6)) || a7 && a6 && "number" == typeof a6.length) {
        a9 && (a6 = a9);
        var aa = 0,
          ab = function () {};
        return {
          s: ab,
          n: function () {
            var ah = {
              done: !0
            };
            return aa >= a6.length ? ah : {
              done: !1,
              value: a6[aa++]
            };
          },
          e: function (ah) {
            throw ah;
          },
          f: ab
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var ac,
      ad = !0,
      ae = !1;
    return {
      s: function () {
        a9 = a9.call(a6);
      },
      n: function () {
        var ai = a9.next();
        ad = ai.done;
        return ai;
      },
      e: function (ai) {
        ae = !0;
        ac = ai;
      },
      f: function () {
        try {
          ad || null == a9.return || a9.return();
        } finally {
          if (ae) {
            throw ac;
          }
        }
      }
    };
  }
  function d(a6, a7) {
    if (a6) {
      if ("string" == typeof a6) {
        return f(a6, a7);
      }
      var a9 = {}.toString.call(a6).slice(8, -1);
      "Object" === a9 && a6.constructor && (a9 = a6.constructor.name);
      return "Map" === a9 || "Set" === a9 ? Array.from(a6) : "Arguments" === a9 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a9) ? f(a6, a7) : void 0;
    }
  }
  function f(a6, a7) {
    (null == a7 || a7 > a6.length) && (a7 = a6.length);
    for (var a8 = 0, a9 = Array(a7); a8 < a7; a8++) {
      a9[a8] = a6[a8];
    }
    return a9;
  }
  function g() {
    'use strict';

    g = function () {
      return a8;
    };
    var a7,
      a8 = {},
      a9 = Object.prototype,
      aa = a9.hasOwnProperty,
      ab = Object.defineProperty || function (aD, aE, aF) {
        aD[aE] = aF.value;
      },
      ac = "function" == typeof Symbol ? Symbol : {},
      ad = ac.iterator || "@@iterator",
      ae = ac.asyncIterator || "@@asyncIterator",
      af = ac.toStringTag || "@@toStringTag";
    function ag(aD, aE, aF) {
      var aG = {
        value: aF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(aD, aE, aG);
      return aD[aE];
    }
    try {
      ag({}, "");
    } catch (aE) {
      ag = function (aF, aG, aH) {
        return aF[aG] = aH;
      };
    }
    function ah(aG, aH, aI, aJ) {
      var aK = aH && aH.prototype instanceof ao ? aH : ao,
        aL = Object.create(aK.prototype),
        aM = new aB(aJ || []);
      ab(aL, "_invoke", {
        value: ax(aG, aI, aM)
      });
      return aL;
    }
    function ai(aG, aH, aI) {
      try {
        return {
          type: "normal",
          arg: aG.call(aH, aI)
        };
      } catch (aM) {
        var aJ = {};
        aJ.type = "throw";
        aJ.arg = aM;
        return aJ;
      }
    }
    a8.wrap = ah;
    var aj = "suspendedStart",
      ak = "suspendedYield",
      al = "executing",
      am = "completed",
      an = {};
    function ao() {}
    function ap() {}
    function aq() {}
    var ar = {};
    ag(ar, ad, function () {
      return this;
    });
    var as = Object.getPrototypeOf,
      at = as && as(as(aC([])));
    at && at !== a9 && aa.call(at, ad) && (ar = at);
    aq.prototype = ao.prototype = Object.create(ar);
    var au = aq.prototype;
    function av(aG) {
      ["next", "throw", "return"].forEach(function (aI) {
        ag(aG, aI, function (aL) {
          return this._invoke(aI, aL);
        });
      });
    }
    function aw(aG, aH) {
      function aL(aM, aN, aO, aP) {
        var aR = ai(aG[aM], aG, aN);
        if ("throw" !== aR.type) {
          var aS = aR.arg,
            aT = aS.value;
          return aT && "object" == b(aT) && aa.call(aT, "__await") ? aH.resolve(aT.__await).then(function (aV) {
            aL("next", aV, aO, aP);
          }, function (aV) {
            aL("throw", aV, aO, aP);
          }) : aH.resolve(aT).then(function (aV) {
            aS.value = aV;
            aO(aS);
          }, function (aV) {
            return aL("throw", aV, aO, aP);
          });
        }
        aP(aR.arg);
      }
      var aJ;
      ab(this, "_invoke", {
        value: function (aM, aN) {
          function aQ() {
            return new aH(function (aT, aU) {
              aL(aM, aN, aT, aU);
            });
          }
          return aJ = aJ ? aJ.then(aQ, aQ) : aQ();
        }
      });
    }
    function ax(aG, aH, aI) {
      var aK = aj;
      return function (aM, aN) {
        if (aK === al) {
          throw Error("Generator is already running");
        }
        if (aK === am) {
          if ("throw" === aM) {
            throw aN;
          }
          var aP = {
            value: a7,
            done: !0
          };
          return aP;
        }
        for (aI.method = aM, aI.arg = aN;;) {
          var aQ = aI.delegate;
          if (aQ) {
            var aR = ay(aQ, aI);
            if (aR) {
              if (aR === an) {
                continue;
              }
              return aR;
            }
          }
          if ("next" === aI.method) {
            aI.sent = aI._sent = aI.arg;
          } else {
            if ("throw" === aI.method) {
              if (aK === aj) {
                throw aK = am, aI.arg;
              }
              aI.dispatchException(aI.arg);
            } else {
              "return" === aI.method && aI.abrupt("return", aI.arg);
            }
          }
          aK = al;
          var aS = ai(aG, aH, aI);
          if ("normal" === aS.type) {
            if (aK = aI.done ? am : ak, aS.arg === an) {
              continue;
            }
            var aT = {};
            aT.value = aS.arg;
            aT.done = aI.done;
            return aT;
          }
          "throw" === aS.type && (aK = am, aI.method = "throw", aI.arg = aS.arg);
        }
      };
    }
    function ay(aG, aH) {
      var aN = aH.method,
        aO = aG.iterator[aN];
      if (aO === a7) {
        aH.delegate = null;
        "throw" === aN && aG.iterator.return && (aH.method = "return", aH.arg = a7, ay(aG, aH), "throw" === aH.method) || "return" !== aN && (aH.method = "throw", aH.arg = new TypeError("The iterator does not provide a '" + aN + "' method"));
        return an;
      }
      var aL = ai(aO, aG.iterator, aH.arg);
      if ("throw" === aL.type) {
        aH.method = "throw";
        aH.arg = aL.arg;
        aH.delegate = null;
        return an;
      }
      var aM = aL.arg;
      return aM ? aM.done ? (aH[aG.resultName] = aM.value, aH.next = aG.nextLoc, "return" !== aH.method && (aH.method = "next", aH.arg = a7), aH.delegate = null, an) : aM : (aH.method = "throw", aH.arg = new TypeError("iterator result is not an object"), aH.delegate = null, an);
    }
    function az(aG) {
      var aH = {};
      aH.tryLoc = aG[0];
      var aI = aH;
      1 in aG && (aI.catchLoc = aG[1]);
      2 in aG && (aI.finallyLoc = aG[2], aI.afterLoc = aG[3]);
      this.tryEntries.push(aI);
    }
    function aA(aG) {
      var aH = aG.completion || {};
      aH.type = "normal";
      delete aH.arg;
      aG.completion = aH;
    }
    function aB(aG) {
      var aI = {
        tryLoc: "root"
      };
      this.tryEntries = [aI];
      aG.forEach(az, this);
      this.reset(!0);
    }
    function aC(aG) {
      if (aG || "" === aG) {
        var aI = aG[ad];
        if (aI) {
          return aI.call(aG);
        }
        if ("function" == typeof aG.next) {
          return aG;
        }
        if (!isNaN(aG.length)) {
          var aJ = -1,
            aK = function aM() {
              for (; ++aJ < aG.length;) {
                if (aa.call(aG, aJ)) {
                  aM.value = aG[aJ];
                  aM.done = !1;
                  return aM;
                }
              }
              aM.value = a7;
              aM.done = !0;
              return aM;
            };
          return aK.next = aK;
        }
      }
      throw new TypeError(b(aG) + " is not iterable");
    }
    ap.prototype = aq;
    ab(au, "constructor", {
      value: aq,
      configurable: !0
    });
    ab(aq, "constructor", {
      value: ap,
      configurable: !0
    });
    ap.displayName = ag(aq, af, "GeneratorFunction");
    a8.isGeneratorFunction = function (aG) {
      var aH = "function" == typeof aG && aG.constructor;
      return !!aH && (aH === ap || "GeneratorFunction" === (aH.displayName || aH.name));
    };
    a8.mark = function (aG) {
      Object.setPrototypeOf ? Object.setPrototypeOf(aG, aq) : (aG.__proto__ = aq, ag(aG, af, "GeneratorFunction"));
      aG.prototype = Object.create(au);
      return aG;
    };
    a8.awrap = function (aG) {
      var aI = {
        __await: aG
      };
      return aI;
    };
    av(aw.prototype);
    ag(aw.prototype, ae, function () {
      return this;
    });
    a8.AsyncIterator = aw;
    a8.async = function (aG, aH, aI, aJ, aK) {
      void 0 === aK && (aK = Promise);
      var aM = new aw(ah(aG, aH, aI, aJ), aK);
      return a8.isGeneratorFunction(aH) ? aM : aM.next().then(function (aN) {
        return aN.done ? aN.value : aM.next();
      });
    };
    av(au);
    ag(au, af, "Generator");
    ag(au, ad, function () {
      return this;
    });
    ag(au, "toString", function () {
      return "[object Generator]";
    });
    a8.keys = function (aG) {
      var aI = Object(aG),
        aJ = [];
      for (var aK in aI) aJ.push(aK);
      aJ.reverse();
      return function aM() {
        for (; aJ.length;) {
          var aP = aJ.pop();
          if (aP in aI) {
            aM.value = aP;
            aM.done = !1;
            return aM;
          }
        }
        aM.done = !0;
        return aM;
      };
    };
    a8.values = aC;
    aB.prototype = {
      constructor: aB,
      reset: function (aG) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = a7, this.done = !1, this.delegate = null, this.method = "next", this.arg = a7, this.tryEntries.forEach(aA), !aG) {
          for (var aI in this) "t" === aI.charAt(0) && aa.call(this, aI) && !isNaN(+aI.slice(1)) && (this[aI] = a7);
        }
      },
      stop: function () {
        this.done = !0;
        var aG = this.tryEntries[0].completion;
        if ("throw" === aG.type) {
          throw aG.arg;
        }
        return this.rval;
      },
      dispatchException: function (aG) {
        if (this.done) {
          throw aG;
        }
        var aH = this;
        function aN(aO, aP) {
          aK.type = "throw";
          aK.arg = aG;
          aH.next = aO;
          aP && (aH.method = "next", aH.arg = a7);
          return !!aP;
        }
        for (var aI = this.tryEntries.length - 1; aI >= 0; --aI) {
          var aJ = this.tryEntries[aI],
            aK = aJ.completion;
          if ("root" === aJ.tryLoc) {
            return aN("end");
          }
          if (aJ.tryLoc <= this.prev) {
            var aL = aa.call(aJ, "catchLoc"),
              aM = aa.call(aJ, "finallyLoc");
            if (aL && aM) {
              if (this.prev < aJ.catchLoc) {
                return aN(aJ.catchLoc, !0);
              }
              if (this.prev < aJ.finallyLoc) {
                return aN(aJ.finallyLoc);
              }
            } else {
              if (aL) {
                if (this.prev < aJ.catchLoc) {
                  return aN(aJ.catchLoc, !0);
                }
              } else {
                if (!aM) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < aJ.finallyLoc) {
                  return aN(aJ.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (aG, aH) {
        for (var aJ = this.tryEntries.length - 1; aJ >= 0; --aJ) {
          var aK = this.tryEntries[aJ];
          if (aK.tryLoc <= this.prev && aa.call(aK, "finallyLoc") && this.prev < aK.finallyLoc) {
            var aL = aK;
            break;
          }
        }
        aL && ("break" === aG || "continue" === aG) && aL.tryLoc <= aH && aH <= aL.finallyLoc && (aL = null);
        var aM = aL ? aL.completion : {};
        aM.type = aG;
        aM.arg = aH;
        return aL ? (this.method = "next", this.next = aL.finallyLoc, an) : this.complete(aM);
      },
      complete: function (aG, aH) {
        if ("throw" === aG.type) {
          throw aG.arg;
        }
        "break" === aG.type || "continue" === aG.type ? this.next = aG.arg : "return" === aG.type ? (this.rval = this.arg = aG.arg, this.method = "return", this.next = "end") : "normal" === aG.type && aH && (this.next = aH);
        return an;
      },
      finish: function (aG) {
        for (var aI = this.tryEntries.length - 1; aI >= 0; --aI) {
          var aJ = this.tryEntries[aI];
          if (aJ.finallyLoc === aG) {
            this.complete(aJ.completion, aJ.afterLoc);
            aA(aJ);
            return an;
          }
        }
      },
      catch: function (aG) {
        for (var aJ = this.tryEntries.length - 1; aJ >= 0; --aJ) {
          var aK = this.tryEntries[aJ];
          if (aK.tryLoc === aG) {
            var aL = aK.completion;
            if ("throw" === aL.type) {
              var aM = aL.arg;
              aA(aK);
            }
            return aM;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (aG, aH, aI) {
        this.delegate = {
          iterator: aC(aG),
          resultName: aH,
          nextLoc: aI
        };
        "next" === this.method && (this.arg = a7);
        return an;
      }
    };
    return a8;
  }
  function h(a6, a7, a8, a9, aa, ab, ac) {
    try {
      var af = a6[ab](ac),
        ag = af.value;
    } catch (aj) {
      return void a8(aj);
    }
    af.done ? a7(ag) : Promise.resolve(ag).then(a9, aa);
  }
  function i(a6) {
    return function () {
      var a9 = this,
        aa = arguments;
      return new Promise(function (ab, ac) {
        var ad = a6.apply(a9, aa);
        function ae(ag) {
          h(ad, ab, ac, ae, af, "next", ag);
        }
        function af(ag) {
          h(ad, ab, ac, ae, af, "throw", ag);
        }
        ae(void 0);
      });
    };
  }
  var j = ($.isNode() ? process.env.DaChao : $.getdata("DaChao")) || "",
    k = ($.isNode() ? process.env.OCR_SERVER : $.getdata("OCR_SERVER")) || "https://ddddocr.xzxxn7.live",
    l = void 0;
  window = {};
  var m = "",
    n = "",
    o = "",
    p = "",
    q = "94",
    r = "",
    s = "10048",
    t = "",
    u = "",
    v = "",
    w = "",
    x = "",
    y = "",
    z = "",
    A = "",
    B = "",
    C = "";
  function D() {
    return E.apply(this, arguments);
  }
  function E() {
    E = i(g().mark(function a8() {
      var aa, ab, ac, ad, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, ba, bb, bc, bd, be, bf, bg, bh;
      return g().wrap(function (bi) {
        for (;;) {
          switch (bi.prev = bi.next) {
            case 0:
              if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), j) {
                bi.next = 6;
                break;
              }
              console.log("先去boxjs填写账号密码");
              bi.next = 5;
              return a4("先去boxjs填写账号密码");
            case 5:
              return bi.abrupt("return");
            case 6:
              bi.next = 8;
              return a2();
            case 8:
              l = bi.sent;
              aa = j.split(" ");
              ab = c(aa);
              bi.prev = 11;
              ab.s();
            case 13:
              if ((ac = ab.n()).done) {
                bi.next = 309;
                break;
              }
              ad = ac.value;
              console.log("随机生成UA");
              af = a1();
              w = af.ua;
              x = af.commonUa;
              y = af.uuid;
              console.log(w);
              console.log(x);
              t = ad.split("&")[0];
              u = ad.split("&")[1];
              v = ad.split("&")[2];
              console.log("用户：".concat(t, "开始任务"));
              console.log("获取sessionId");
              bi.next = 29;
              return L("/api/account/init");
            case 29:
              ag = bi.sent;
              p = ag.data.session.id;
              console.log(p);
              console.log("获取signature_key");
              bi.next = 35;
              return F("/web/init?client_id=".concat(s));
            case 35:
              ah = bi.sent;
              m = ah.data.client.signature_key;
              console.log(m);
              console.log("获取code");
              bi.next = 41;
              return H("/web/oauth/credential_auth");
            case 41:
              if (ai = bi.sent, ai.data) {
                bi.next = 45;
                break;
              }
              console.log(ai.message);
              return bi.abrupt("continue", 307);
            case 45:
              aj = ai.data.authorization_code.code;
              console.log(aj);
              console.log("登录");
              bi.next = 50;
              return L("/api/zbtxz/login", "check_token=&code=".concat(aj, "&token=&type=-1&union_id="));
            case 50:
              ak = bi.sent;
              console.log("登录成功");
              r = ak.data.session.account_id;
              p = ak.data.session.id;
              console.log("————————————");
              console.log("有缘对对碰");
              al = 0;
            case 57:
              if (!(al < 5)) {
                bi.next = 67;
                break;
              }
              bi.next = 60;
              return T("/open/xxdtest/dailyMatch/controller.php", "type=105&score=100");
            case 60:
              if (am = bi.sent, console.log(am), 1 == am.status) {
                bi.next = 64;
                break;
              }
              return bi.abrupt("break", 67);
            case 64:
              al++;
              bi.next = 57;
              break;
            case 67:
              bi.next = 69;
              return J("/api/user_mumber/account_detail");
            case 69:
              an = bi.sent;
              ao = Math.round(new Date().getTime() / 1000).toString();
              bi.next = 73;
              return P("/memberhy/tm/signature", {
                accountId: r,
                signature: CryptoJS.SHA256(" &id&mobile&nick_name&&".concat(ao, "&&KO>N<O5&3^L1%23YH0H1#G91*2H")).toString(),
                mobile: "1",
                sessionId: p,
                login: "1",
                user: {
                  realName: "",
                  image_url: an.data.rst.image_url,
                  nick_name: an.data.rst.nick_name,
                  is_face_verify: 0,
                  idcard: "",
                  id: r
                },
                timestamp: ao,
                sign: "xsb_hn"
              });
            case 73:
              ap = bi.sent;
              z = JSON.stringify({
                id: ap.id,
                black: 0,
                btoken: ap.btoken,
                expire: ap.expire,
                token: ap.token,
                source: "xsb_hn",
                mobile: ap.mobile,
                mark: ap.mark,
                mtoken: ap.mtoken,
                stoken: ap.stoken,
                nick_name: encodeURI(ap.nick_name),
                avatar: ap.avatar
              });
              bi.next = 77;
              return N("/lotteryhy/designh5/client/activity/7ca9b5b985df4858726af59b2933d5eb");
            case 77:
              aq = bi.sent;
              console.log("拥有".concat(aq.response.remain_counts, "次抽奖"));
              ar = 0;
            case 80:
              if (!(ar < aq.response.remain_counts)) {
                bi.next = 88;
                break;
              }
              bi.next = 83;
              return P("/lotteryhy/api/client/cj/awd/drw/7ca9b5b985df4858726af59b2933d5eb", {});
            case 83:
              as = bi.sent;
              as.award_name ? (console.log("抽奖获得：".concat(as.award_name)), n += "用户：".concat(t, " 抽奖获得：").concat(as.award_name, "\n")) : (console.log(JSON.stringify(as)), n += "用户：".concat(t, " 抽奖获得：").concat(as.error_message, "\n"));
            case 85:
              ar++;
              bi.next = 80;
              break;
            case 88:
              bi.next = 90;
              return N("/lotteryhy/api/client/cj/my/prize/info/7ca9b5b985df4858726af59b2933d5eb?page=1&count=100");
            case 90:
              at = bi.sent;
              au = c(at.data);
              bi.prev = 92;
              au.s();
            case 94:
              if ((av = au.n()).done) {
                bi.next = 110;
                break;
              }
              if (aw = av.value, 3 != aw.prize_type || 2 == aw.status) {
                bi.next = 108;
                break;
              }
              if (console.log("奖品：".concat(aw.prize_content, " code：").concat(aw.prize_info.code)), !v) {
                bi.next = 107;
                break;
              }
              var bk = {};
              bk.code = aw.prize_info.code;
              ax = "";
              bi.next = 102;
              return R("/lotteryhy/api/client/cj/send/pak", bk);
            case 102:
              ay = bi.sent;
              ay.success ? (console.log("领取成功"), ax = "领取成功") : (console.log(ay.error_message), ax = ay.error_message);
              o += "用户：".concat(t, " 奖品：").concat(aw.prize_content, " 领取结果：").concat(ax, "\n");
              bi.next = 108;
              break;
            case 107:
              o += "用户：".concat(t, " 微信领取链接：https://m.aihoge.com/lottery/rotor/drawRedPacket?CHECK_CODE=").concat(aw.prize_info.code, "\n");
            case 108:
              bi.next = 94;
              break;
            case 110:
              bi.next = 115;
              break;
            case 112:
              bi.prev = 112;
              bi.t0 = bi.catch(92);
              au.e(bi.t0);
            case 115:
              bi.prev = 115;
              au.f();
              return bi.finish(115);
            case 118:
              if (console.log("————————————"), console.log("获取id"), C) {
                bi.next = 130;
                break;
              }
              bi.next = 123;
              return J("/api/myPage/list");
            case 123:
              az = bi.sent;
              aA = /\/h5\?mark=sign@designh5&tid=([a-zA-Z0-9]+)/;
              aB = JSON.stringify(az).match(aA);
              aB && (C = aB[1]);
              aA = /\/h5\?mark=news-read@designh5&tid=([a-zA-Z0-9]+)/;
              aB = JSON.stringify(az).match(aA);
              aB && (B = aB[1]);
            case 130:
              if (B && C) {
                bi.next = 133;
                break;
              }
              console.log("获取id失败");
              return bi.abrupt("continue", 307);
            case 133:
              console.log("签到id：".concat(C));
              console.log("阅读id：".concat(B));
              ao = Math.round(new Date().getTime() / 1000).toString();
              bi.next = 138;
              return P("/memberhy/tm/signature", {
                accountId: r,
                signature: CryptoJS.SHA256(" &id&mobile&nick_name&&".concat(ao, "&&KO>N<O5&3^L1%23YH0H1#G91*2H")).toString(),
                mobile: "1",
                sessionId: p,
                login: "1",
                user: {
                  realName: "",
                  image_url: an.data.rst.image_url,
                  nick_name: an.data.rst.nick_name,
                  is_face_verify: 0,
                  idcard: "",
                  id: r
                },
                timestamp: ao,
                sign: "xsb_hn"
              });
            case 138:
              ap = bi.sent;
              z = JSON.stringify({
                id: ap.id,
                black: 0,
                btoken: ap.btoken,
                expire: ap.expire,
                token: ap.token,
                source: "xsb_hn",
                mobile: ap.mobile,
                mark: ap.mark,
                mtoken: ap.mtoken,
                stoken: ap.stoken,
                nick_name: encodeURI(ap.nick_name),
                avatar: ap.avatar
              });
              console.log("开始签到");
              aC = new (l.loadJSEncrypt())();
              aC.setPublicKey("-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0G25Cq2HxQQ+gX9H2dzb6sbRtHzD8JbHRmOrAFzaWI2kdzbPuga4ZlqxOAyoAm8ucIAeKD4joUn+dN1wYC03qCgloNU21KUJUls/Htp2RwxpmoncSIAOZvSQQ6Kl3vLPYlG6GetwYYN83sG85K+3w4D89hBGHuYqKQyQsUvntxi5UVoNfo674QsCvqxHxZAuEXKoEagzUoSu8gWrDTuhRK4aQcDpnCslwKycaO63UBvfTlBG0Jc7sqzXxapTArbqaA58XCM8dRIZdp7DR/V7qucn/PwIOGJrOu09/cjndwIpeki8HXa9rvgWwiwZCy289vgRoxzIcLrQJ2oC1MK2RwIDAQAB-----END PUBLIC KEY-----");
              aD = aC.encrypt(JSON.stringify({
                activity_id: C,
                timestamp: Math.round(new Date().getTime() / 1000).toString()
              }));
              bi.next = 146;
              return P("/signhy/client/actSign/actSign", {
                params: aD
              });
            case 146:
              aE = bi.sent;
              0 == aE.error_code ? console.log("签到成功") : console.log(aE.error_message);
              bi.next = 150;
              return N("/signhy/client/actSign/getRelationCjList?activity_id=".concat(C));
            case 150:
              aF = bi.sent;
              aG = c(aF.response);
              bi.prev = 152;
              aG.s();
            case 154:
              if ((aH = aG.n()).done) {
                bi.next = 199;
                break;
              }
              aI = aH.value;
              console.log("活动：".concat(aI.title));
              console.log("拥有".concat(aI.draw_num, "次抽奖"));
              aJ = 0;
            case 159:
              if (!(aJ < aI.draw_num)) {
                bi.next = 167;
                break;
              }
              bi.next = 162;
              return P("/lotteryhy/api/client/cj/awd/drw/".concat(aI.hashid), {});
            case 162:
              aK = bi.sent;
              aK.award_name ? (console.log("抽奖获得：".concat(aK.award_name)), n += "用户：".concat(t, " 抽奖获得：").concat(aK.award_name, "\n")) : (console.log(JSON.stringify(aK)), n += "用户：".concat(t, " 抽奖获得：").concat(aK.error_message, "\n"));
            case 164:
              aJ++;
              bi.next = 159;
              break;
            case 167:
              bi.next = 169;
              return N("/lotteryhy/api/client/cj/my/prize/info/".concat(aI.hashid, "?page=1&count=100"));
            case 169:
              aL = bi.sent;
              aM = c(aL.data);
              bi.prev = 171;
              aM.s();
            case 173:
              if ((aN = aM.n()).done) {
                bi.next = 189;
                break;
              }
              if (aO = aN.value, 3 != aO.prize_type || 2 == aO.status) {
                bi.next = 187;
                break;
              }
              if (console.log("奖品：".concat(aO.prize_content, " code：").concat(aO.prize_info.code)), !v) {
                bi.next = 186;
                break;
              }
              var bl = {};
              bl.code = aO.prize_info.code;
              aP = "";
              bi.next = 181;
              return R("/lotteryhy/api/client/cj/send/pak", bl);
            case 181:
              aQ = bi.sent;
              aQ.success ? (console.log("领取成功"), aP = "领取成功") : (console.log(aQ.error_message), aP = aQ.error_message);
              o += "用户：".concat(t, " 奖品：").concat(aO.prize_content, " 领取结果：").concat(aP, "\n");
              bi.next = 187;
              break;
            case 186:
              o += "用户：".concat(t, " 微信领取链接：https://m.aihoge.com/lottery/rotor/drawRedPacket?CHECK_CODE=").concat(aO.prize_info.code, "\n");
            case 187:
              bi.next = 173;
              break;
            case 189:
              bi.next = 194;
              break;
            case 191:
              bi.prev = 191;
              bi.t1 = bi.catch(171);
              aM.e(bi.t1);
            case 194:
              bi.prev = 194;
              aM.f();
              return bi.finish(194);
            case 197:
              bi.next = 154;
              break;
            case 199:
              bi.next = 204;
              break;
            case 201:
              bi.prev = 201;
              bi.t2 = bi.catch(152);
              aG.e(bi.t2);
            case 204:
              bi.prev = 204;
              aG.f();
              return bi.finish(204);
            case 207:
              console.log("————————————");
              console.log("阅读抽奖");
              console.log("滑块验证");
              bi.next = 212;
              return N("/newshy/api/client/news/getTnCode?t=".concat(Math.random()));
            case 212:
              aR = bi.sent;
              bi.next = 215;
              return V("".concat(k, "/crop"), {
                image: aR.img,
                y_coordinate: 150
              });
            case 215:
              if (aS = bi.sent, aS) {
                bi.next = 221;
                break;
              }
              console.log("ddddocr服务异常");
              bi.next = 220;
              return a4("ddddocr服务异常");
            case 220:
              return bi.abrupt("continue", 307);
            case 221:
              var bm = {};
              bm.slidingImage = aS.slidingImage;
              bm.backImage = aS.backImage;
              bi.next = 223;
              return V("".concat(k, "/slideComparison"), bm);
            case 223:
              if (aT = bi.sent, aT) {
                bi.next = 229;
                break;
              }
              console.log("ddddocr服务异常");
              bi.next = 228;
              return a4("ddddocr服务异常");
            case 228:
              return bi.abrupt("continue", 307);
            case 229:
              console.log(aT);
              aU = aR.request_id;
              aV = aT.result;
              bi.next = 234;
              return N("/newshy/api/client/news/list/".concat(B));
            case 234:
              aW = bi.sent;
              aX = c(aW.data[0].information_content_data[0].data);
              bi.prev = 236;
              aX.s();
            case 238:
              if ((aY = aX.n()).done) {
                bi.next = 254;
                break;
              }
              for (aZ = aY.value, console.log("文章：".concat(aZ.title)), b0 = aZ.link.split("?")[1], b1 = {}, b2 = b0.split("&"), b3 = 0, b4 = b2.length; b3 < b4; b3++) {
                b5 = b2[b3].split("=");
                b1[b5[0]] = b5[1];
              }
              b6 = new (l.loadJSEncrypt())();
              b6.setPublicKey("-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0G25Cq2HxQQ+gX9H2dzb6sbRtHzD8JbHRmOrAFzaWI2kdzbPuga4ZlqxOAyoAm8ucIAeKD4joUn+dN1wYC03qCgloNU21KUJUls/Htp2RwxpmoncSIAOZvSQQ6Kl3vLPYlG6GetwYYN83sG85K+3w4D89hBGHuYqKQyQsUvntxi5UVoNfo674QsCvqxHxZAuEXKoEagzUoSu8gWrDTuhRK4aQcDpnCslwKycaO63UBvfTlBG0Jc7sqzXxapTArbqaA58XCM8dRIZdp7DR/V7qucn/PwIOGJrOu09/cjndwIpeki8HXa9rvgWwiwZCy289vgRoxzIcLrQJ2oC1MK2RwIDAQAB-----END PUBLIC KEY-----");
              b7 = b6.encrypt(JSON.stringify({
                news_id: B,
                item_id: aZ.item_id,
                request_id: aU,
                timestamp: Math.round(new Date().getTime() / 1000).toString(),
                tn_x: aV
              }));
              bi.next = 250;
              return P("/newshy/api/client/news/readArticle", {
                params: b7
              });
            case 250:
              b8 = bi.sent;
              console.log("阅读：".concat(null == b8 ? void 0 : b8.success));
            case 252:
              bi.next = 238;
              break;
            case 254:
              bi.next = 259;
              break;
            case 256:
              bi.prev = 256;
              bi.t3 = bi.catch(236);
              aX.e(bi.t3);
            case 259:
              bi.prev = 259;
              aX.f();
              return bi.finish(259);
            case 262:
              A = aW.data[0].draw.activity_id;
              console.log("抽奖id：".concat(A));
              bi.next = 266;
              return N("/lotteryhy/designh5/client/activity/".concat(A));
            case 266:
              b9 = bi.sent;
              console.log("拥有".concat(b9.response.remain_counts, "次抽奖"));
              ba = 0;
            case 269:
              if (!(ba < b9.response.remain_counts)) {
                bi.next = 277;
                break;
              }
              bi.next = 272;
              return P("/lotteryhy/api/client/cj/awd/drw/".concat(A), {});
            case 272:
              bb = bi.sent;
              bb.award_name ? (console.log("抽奖获得：".concat(bb.award_name)), n += "用户：".concat(t, " 抽奖获得：").concat(bb.award_name, "\n")) : (console.log(JSON.stringify(bb)), n += "用户：".concat(t, " 抽奖获得：").concat(bb.error_message, "\n"));
            case 274:
              ba++;
              bi.next = 269;
              break;
            case 277:
              bi.next = 279;
              return N("/lotteryhy/api/client/cj/my/prize/info/".concat(A, "?page=1&count=100"));
            case 279:
              bc = bi.sent;
              bd = c(bc.data);
              bi.prev = 281;
              bd.s();
            case 283:
              if ((be = bd.n()).done) {
                bi.next = 299;
                break;
              }
              if (bf = be.value, 3 != bf.prize_type || 2 == bf.status) {
                bi.next = 297;
                break;
              }
              if (console.log("奖品：".concat(bf.prize_content, " code：").concat(bf.prize_info.code)), !v) {
                bi.next = 296;
                break;
              }
              var bn = {};
              bn.code = bf.prize_info.code;
              bg = "";
              bi.next = 291;
              return R("/lotteryhy/api/client/cj/send/pak", bn);
            case 291:
              bh = bi.sent;
              bh.success ? (console.log("领取成功"), bg = "领取成功") : (console.log(bh.error_message), bg = bh.error_message);
              o += "用户：".concat(t, " 奖品：").concat(bf.prize_content, " 领取结果：").concat(bg, "\n");
              bi.next = 297;
              break;
            case 296:
              o += "用户：".concat(t, " 微信领取链接：https://m.aihoge.com/lottery/rotor/drawRedPacket?CHECK_CODE=").concat(bf.prize_info.code, "\n");
            case 297:
              bi.next = 283;
              break;
            case 299:
              bi.next = 304;
              break;
            case 301:
              bi.prev = 301;
              bi.t4 = bi.catch(281);
              bd.e(bi.t4);
            case 304:
              bi.prev = 304;
              bd.f();
              return bi.finish(304);
            case 307:
              bi.next = 13;
              break;
            case 309:
              bi.next = 314;
              break;
            case 311:
              bi.prev = 311;
              bi.t5 = bi.catch(11);
              ab.e(bi.t5);
            case 314:
              bi.prev = 314;
              ab.f();
              return bi.finish(314);
            case 317:
              if (!n) {
                bi.next = 320;
                break;
              }
              bi.next = 320;
              return a4(n);
            case 320:
              if (!o) {
                bi.next = 323;
                break;
              }
              bi.next = 323;
              return a4(o);
            case 323:
            case "end":
              return bi.stop();
          }
        }
      }, a8, null, [[11, 311, 314, 317], [92, 112, 115, 118], [152, 201, 204, 207], [171, 191, 194, 197], [236, 256, 259, 262], [281, 301, 304, 307]]);
    }));
    return E.apply(this, arguments);
  }
  function F(a6) {
    return G.apply(this, arguments);
  }
  function G() {
    G = i(g().mark(function a7(a8) {
      return g().wrap(function (aa) {
        for (;;) {
          switch (aa.prev = aa.next) {
            case 0:
              return aa.abrupt("return", new Promise(function (ac) {
                var ae = {
                  url: "https://passport.tmuyun.com".concat(a8),
                  headers: {
                    Connection: "Keep-Alive",
                    "Cache-Control": "no-cache",
                    "X-REQUEST-ID": Z(),
                    "Accept-Encoding": "gzip",
                    "user-agent": w
                  }
                };
                $.get(ae, function () {
                  var ag = i(g().mark(function ah(ai, aj, ak) {
                    return g().wrap(function (al) {
                      for (;;) {
                        switch (al.prev = al.next) {
                          case 0:
                            try {
                              ai ? (console.log("".concat(JSON.stringify(ai))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ac(JSON.parse(ak));
                            } catch (am) {
                              $.logErr(am, aj);
                            } finally {
                              ac();
                            }
                          case 1:
                          case "end":
                            return al.stop();
                        }
                      }
                    }, ah);
                  }));
                  return function (ai, aj, ak) {
                    return ag.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return aa.stop();
          }
        }
      }, a7);
    }));
    return G.apply(this, arguments);
  }
  function H(a6) {
    return I.apply(this, arguments);
  }
  function I() {
    I = i(g().mark(function a7(a8) {
      var aa;
      return g().wrap(function (ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              aa = X();
              return ab.abrupt("return", new Promise(function (ac) {
                var ae = {
                  url: "https://passport.tmuyun.com".concat(a8),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-REQUEST-ID": aa.uuid,
                    "X-SIGNATURE": aa.signature,
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    "Accept-Encoding": "gzip",
                    "user-agent": w
                  },
                  body: aa.body
                };
                $.post(ae, function () {
                  var ag = i(g().mark(function ah(ai, aj, ak) {
                    return g().wrap(function (am) {
                      for (;;) {
                        switch (am.prev = am.next) {
                          case 0:
                            try {
                              ai ? (console.log("".concat(JSON.stringify(ai))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ac(JSON.parse(ak));
                            } catch (an) {
                              $.logErr(an, aj);
                            } finally {
                              ac();
                            }
                          case 1:
                          case "end":
                            return am.stop();
                        }
                      }
                    }, ah);
                  }));
                  return function (ai, aj, ak) {
                    return ag.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ab.stop();
          }
        }
      }, a7);
    }));
    return I.apply(this, arguments);
  }
  function J(a6) {
    return K.apply(this, arguments);
  }
  function K() {
    K = i(g().mark(function a7(a8) {
      var aa;
      return g().wrap(function (ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              aa = Y(a8);
              return ab.abrupt("return", new Promise(function (ad) {
                var ae = {
                  url: "https://vapp.tmuyun.com".concat(a8),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": aa.time,
                    "X-SESSION-ID": p,
                    "X-REQUEST-ID": aa.uuid,
                    "X-SIGNATURE": aa.signature,
                    "X-TENANT-ID": q,
                    "X-ACCOUNT-ID": r,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": x
                  }
                };
                $.get(ae, function () {
                  var ag = i(g().mark(function ah(ai, aj, ak) {
                    return g().wrap(function (al) {
                      for (;;) {
                        switch (al.prev = al.next) {
                          case 0:
                            if (al.prev = 0, !ai) {
                              al.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ai)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            al.next = 9;
                            break;
                          case 6:
                            al.next = 8;
                            return $.wait(2000);
                          case 8:
                            ad(JSON.parse(ak));
                          case 9:
                            al.next = 14;
                            break;
                          case 11:
                            al.prev = 11;
                            al.t0 = al.catch(0);
                            $.logErr(al.t0, aj);
                          case 14:
                            al.prev = 14;
                            ad();
                            return al.finish(14);
                          case 17:
                          case "end":
                            return al.stop();
                        }
                      }
                    }, ah, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ai, aj, ak) {
                    return ag.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ab.stop();
          }
        }
      }, a7);
    }));
    return K.apply(this, arguments);
  }
  function L(a6, a7) {
    return M.apply(this, arguments);
  }
  function M() {
    M = i(g().mark(function a6(a7, a8) {
      var aa;
      return g().wrap(function (ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              aa = Y(a7);
              return ab.abrupt("return", new Promise(function (ad) {
                var af = {
                  url: "https://vapp.tmuyun.com".concat(a7),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": aa.time,
                    "X-SESSION-ID": p,
                    "X-REQUEST-ID": aa.uuid,
                    "X-SIGNATURE": aa.signature,
                    "X-TENANT-ID": q,
                    "X-ACCOUNT-ID": r,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": x
                  },
                  body: a8
                };
                $.post(af, function () {
                  var ag = i(g().mark(function ah(ai, aj, ak) {
                    return g().wrap(function (am) {
                      for (;;) {
                        switch (am.prev = am.next) {
                          case 0:
                            if (am.prev = 0, !ai) {
                              am.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ai)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            am.next = 9;
                            break;
                          case 6:
                            am.next = 8;
                            return $.wait(2000);
                          case 8:
                            ad(JSON.parse(ak));
                          case 9:
                            am.next = 14;
                            break;
                          case 11:
                            am.prev = 11;
                            am.t0 = am.catch(0);
                            $.logErr(am.t0, aj);
                          case 14:
                            am.prev = 14;
                            ad();
                            return am.finish(14);
                          case 17:
                          case "end":
                            return am.stop();
                        }
                      }
                    }, ah, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ai, aj, ak) {
                    return ag.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ab.stop();
          }
        }
      }, a6);
    }));
    return M.apply(this, arguments);
  }
  function N(a6) {
    return O.apply(this, arguments);
  }
  function O() {
    O = i(g().mark(function a7(a8) {
      return g().wrap(function (aa) {
        for (;;) {
          switch (aa.prev = aa.next) {
            case 0:
              return aa.abrupt("return", new Promise(function (ab) {
                var ad = {
                  url: "https://m.aihoge.com/api".concat(a8),
                  headers: {
                    Connection: "keep-alive",
                    "X-DEVICE-SIGN": "xsb_hn",
                    "X-CLIENT-VERSION": "1314",
                    accept: "application/json, text/plain, */*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_hn;xsb_hn;14.1.6;native_app;6.11.0",
                    "HTTP-X-H5-VERSION": "1",
                    member: z,
                    Limit: B,
                    sessionId: p,
                    "X-DEVICE-ID": "000",
                    accountId: r,
                    "x-requested-with": "com.hoge.android.app.dachao",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    Referer: "https://m.aihoge.com/h5?mark=news-read@designh5&tid=".concat(B, "&path=index&isNeedLogin=true"),
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  }
                };
                $.get(ad, function () {
                  var af = i(g().mark(function ag(ah, ai, aj) {
                    return g().wrap(function (al) {
                      for (;;) {
                        switch (al.prev = al.next) {
                          case 0:
                            if (al.prev = 0, !ah) {
                              al.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ah)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            al.next = 9;
                            break;
                          case 6:
                            al.next = 8;
                            return $.wait(2000);
                          case 8:
                            ab(JSON.parse(aj));
                          case 9:
                            al.next = 14;
                            break;
                          case 11:
                            al.prev = 11;
                            al.t0 = al.catch(0);
                            $.logErr(al.t0, ai);
                          case 14:
                            al.prev = 14;
                            ab();
                            return al.finish(14);
                          case 17:
                          case "end":
                            return al.stop();
                        }
                      }
                    }, ag, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ah, ai, aj) {
                    return af.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return aa.stop();
          }
        }
      }, a7);
    }));
    return O.apply(this, arguments);
  }
  function P(a6, a7) {
    return Q.apply(this, arguments);
  }
  function Q() {
    Q = i(g().mark(function a7(a8, a9) {
      return g().wrap(function (ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              return ab.abrupt("return", new Promise(function (ad) {
                var af = {
                  url: "https://m.aihoge.com/api".concat(a8),
                  headers: {
                    Connection: "keep-alive",
                    "X-DEVICE-SIGN": "xsb_hn",
                    "X-CLIENT-VERSION": "1314",
                    "Content-Type": "application/json;charset=UTF-8",
                    accept: "application/json, text/plain, */*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_hn;xsb_hn;14.1.6;native_app;6.11.0",
                    "HTTP-X-H5-VERSION": "1",
                    member: z,
                    Limit: B,
                    sessionId: p,
                    "X-DEVICE-ID": "000",
                    accountId: r,
                    "x-requested-with": "com.hoge.android.app.dachao",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    Referer: "https://m.aihoge.com/h5?mark=news-read@designh5&tid=".concat(B, "&path=index&isNeedLogin=true"),
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: JSON.stringify(a9)
                };
                $.post(af, function () {
                  var ah = i(g().mark(function ai(aj, ak, al) {
                    return g().wrap(function (am) {
                      for (;;) {
                        switch (am.prev = am.next) {
                          case 0:
                            if (am.prev = 0, !aj) {
                              am.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aj)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            am.next = 9;
                            break;
                          case 6:
                            am.next = 8;
                            return $.wait(2000);
                          case 8:
                            ad(JSON.parse(al));
                          case 9:
                            am.next = 14;
                            break;
                          case 11:
                            am.prev = 11;
                            am.t0 = am.catch(0);
                            $.logErr(am.t0, ak);
                          case 14:
                            am.prev = 14;
                            ad();
                            return am.finish(14);
                          case 17:
                          case "end":
                            return am.stop();
                        }
                      }
                    }, ai, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aj, ak, al) {
                    return ah.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ab.stop();
          }
        }
      }, a7);
    }));
    return Q.apply(this, arguments);
  }
  function R(a6, a7) {
    return S.apply(this, arguments);
  }
  function S() {
    S = i(g().mark(function a8(a9, aa) {
      return g().wrap(function (ac) {
        for (;;) {
          switch (ac.prev = ac.next) {
            case 0:
              return ac.abrupt("return", new Promise(function (ad) {
                var af = {
                  url: "https://m.aihoge.com/api".concat(a9),
                  headers: {
                    Connection: "keep-alive",
                    "X-DEVICE-SIGN": "wechat",
                    "X-CLIENT-VERSION": "1314",
                    "Content-Type": "application/json;charset=UTF-8",
                    accept: "application/json, text/plain, */*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_hn;xsb_hn;14.1.6;native_app;6.11.0",
                    "HTTP-X-H5-VERSION": "1",
                    member: v,
                    Limit: "default",
                    "X-DEVICE-ID": "000",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: JSON.stringify(aa)
                };
                $.post(af, function () {
                  var ah = i(g().mark(function ai(aj, ak, al) {
                    return g().wrap(function (am) {
                      for (;;) {
                        switch (am.prev = am.next) {
                          case 0:
                            if (am.prev = 0, !aj) {
                              am.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aj)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            am.next = 9;
                            break;
                          case 6:
                            am.next = 8;
                            return $.wait(2000);
                          case 8:
                            ad(JSON.parse(al));
                          case 9:
                            am.next = 14;
                            break;
                          case 11:
                            am.prev = 11;
                            am.t0 = am.catch(0);
                            $.logErr(am.t0, ak);
                          case 14:
                            am.prev = 14;
                            ad();
                            return am.finish(14);
                          case 17:
                          case "end":
                            return am.stop();
                        }
                      }
                    }, ai, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aj, ak, al) {
                    return ah.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ac.stop();
          }
        }
      }, a8);
    }));
    return S.apply(this, arguments);
  }
  function T(a6, a7) {
    return U.apply(this, arguments);
  }
  function U() {
    U = i(g().mark(function a7(a8, a9) {
      return g().wrap(function (aa) {
        for (;;) {
          switch (aa.prev = aa.next) {
            case 0:
              return aa.abrupt("return", new Promise(function (ac) {
                var ae = {
                  url: "https://active.hndachao.cn".concat(a8),
                  headers: {
                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    accept: "application/json, text/javascript, */*; q=0.01",
                    "x-requested-with": "XMLHttpRequest",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_hn;xsb_hn;14.1.6;native_app;6.11.0",
                    origin: "https://active.hndachao.cn",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    referer: "https://active.hndachao.cn/open/xxdtest/dailyMatch/bookflip.php",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    cookie: "dachaogo={\"openid\":\"".concat(r, "\",\"platform\":3}")
                  },
                  body: a9
                };
                $.post(ae, function () {
                  var af = i(g().mark(function ag(ah, ai, aj) {
                    return g().wrap(function (al) {
                      for (;;) {
                        switch (al.prev = al.next) {
                          case 0:
                            if (al.prev = 0, !ah) {
                              al.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ah)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            al.next = 9;
                            break;
                          case 6:
                            al.next = 8;
                            return $.wait(2000);
                          case 8:
                            ac(JSON.parse(aj));
                          case 9:
                            al.next = 14;
                            break;
                          case 11:
                            al.prev = 11;
                            al.t0 = al.catch(0);
                            $.logErr(al.t0, ai);
                          case 14:
                            al.prev = 14;
                            ac();
                            return al.finish(14);
                          case 17:
                          case "end":
                            return al.stop();
                        }
                      }
                    }, ag, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ah, ai, aj) {
                    return af.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return aa.stop();
          }
        }
      }, a7);
    }));
    return U.apply(this, arguments);
  }
  function V(a6, a7) {
    return W.apply(this, arguments);
  }
  function W() {
    W = i(g().mark(function a7(a8, a9) {
      return g().wrap(function (ac) {
        for (;;) {
          switch (ac.prev = ac.next) {
            case 0:
              return ac.abrupt("return", new Promise(function (af) {
                var ah = {
                  "Content-Type": "application/json"
                };
                var ai = {
                  url: a8,
                  headers: ah,
                  body: JSON.stringify(a9)
                };
                $.post(ai, function (aj, ak, al) {
                  try {
                    aj ? (console.log("".concat(JSON.stringify(aj))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : af(JSON.parse(al));
                  } catch (am) {
                    $.logErr(am, ak);
                  } finally {
                    af();
                  }
                });
              }));
            case 1:
            case "end":
              return ac.stop();
          }
        }
      }, a7);
    }));
    return W.apply(this, arguments);
  }
  function X() {
    var aa = new (l.loadJSEncrypt())();
    aa.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    u = aa.encrypt(u);
    var ac = Z(),
      ad = "client_id=".concat(s, "&password=").concat(u, "&phone_number=").concat(t),
      ae = "post%%/web/oauth/credential_auth?".concat(ad, "%%").concat(ac, "%%");
    ad = "client_id=".concat(s, "&password=").concat(encodeURIComponent(u), "&phone_number=").concat(t);
    CryptoJS = l.createCryptoJS();
    var a8 = CryptoJS.HmacSHA256(ae, m),
      a9 = CryptoJS.enc.Hex.stringify(a8);
    var ab = {};
    ab.uuid = ac;
    ab.signature = a9;
    ab.body = ad;
    return ab;
  }
  function Y(a6) {
    var a7 = Z(),
      a8 = Date.now();
    a6.indexOf("?") > 0 && (a6 = a6.substring(0, a6.indexOf("?")));
    CryptoJS = l.createCryptoJS();
    var a9 = CryptoJS.SHA256("".concat(a6, "&&").concat(p, "&&").concat(a7, "&&").concat(a8, "&&FR*r!isE5W&&").concat(q)).toString(),
      aa = {
        uuid: a7,
        time: a8,
        signature: a9
      };
    return aa;
  }
  function Z() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a7) {
      var a8 = 16 * Math.random() | 0,
        a9 = "x" === a7 ? a8 : 3 & a8 | 8;
      return a9.toString(16);
    });
  }
  function a0(a6) {
    return a6[Math.floor(Math.random() * a6.length)];
  }
  function a1() {
    var a6 = "14.1.6",
      a7 = Z(),
      a8 = a0(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]),
      a9 = "Xiaomi " + a8,
      aa = "Android",
      ab = "".concat(aa.toUpperCase(), ";").concat("11", ";").concat(s, ";").concat(a6, ";1.0;null;").concat(a8),
      ac = "".concat(a6, ";").concat(a7, ";").concat(a9, ";").concat(aa, ";").concat("11", ";").concat("6.11.0"),
      ad = {
        ua: ab,
        commonUa: ac,
        uuid: a7
      };
    return ad;
  }
  function a2() {
    return a3.apply(this, arguments);
  }
  function a3() {
    a3 = i(g().mark(function a7() {
      var a8;
      return g().wrap(function a9(aa) {
        for (;;) {
          switch (aa.prev = aa.next) {
            case 0:
              if (a8 = $.getdata("Utils_Code") || "", !a8 || !Object.keys(a8).length) {
                aa.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(a8);
              return aa.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return aa.abrupt("return", new Promise(function () {
                var ae = i(g().mark(function af(ag) {
                  return g().wrap(function ai(aj) {
                    for (;;) {
                      switch (aj.prev = aj.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (ak) {
                            $.setdata(ak, "Utils_Code");
                            eval(ak);
                            console.log("✅ Utils加载成功, 请继续");
                            ag(creatUtils());
                          });
                        case 1:
                        case "end":
                          return aj.stop();
                      }
                    }
                  }, af);
                }));
                return function (ag) {
                  return ae.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return aa.stop();
          }
        }
      }, a7);
    }));
    return a3.apply(this, arguments);
  }
  function a4(a6) {
    return a5.apply(this, arguments);
  }
  function a5() {
    a5 = i(g().mark(function a7(a8) {
      return g().wrap(function (a9) {
        for (;;) {
          switch (a9.prev = a9.next) {
            case 0:
              if (!$.isNode()) {
                a9.next = 5;
                break;
              }
              a9.next = 3;
              return notify.sendNotify($.name, a8);
            case 3:
              a9.next = 6;
              break;
            case 5:
              $.msg($.name, "", a8);
            case 6:
            case "end":
              return a9.stop();
          }
        }
      }, a7);
    }));
    return a5.apply(this, arguments);
  }
  i(g().mark(function a6() {
    return g().wrap(function (a8) {
      for (;;) {
        switch (a8.prev = a8.next) {
          case 0:
            a8.next = 2;
            return D();
          case 2:
          case "end":
            return a8.stop();
        }
      }
    }, a6);
  }))().catch(function (a7) {
    $.log(a7);
  }).finally(function () {
    $.done({});
  });
})();
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, o) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.logLevels = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      this.logLevelPrefixs = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevel = "info";
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null, ...s) {
      try {
        return JSON.stringify(t, ...s);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      if (this.getdata(t)) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let o = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        o = o ? 1 * o : 20;
        o = e && e.timeout ? e.timeout : o;
        const [r, a] = i.split("@"),
          n = {
            url: `http://${a}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: o
            },
            headers: {
              "X-Key": r,
              Accept: "*/*"
            },
            timeout: o
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          o = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(e, o) : this.fs.writeFileSync(t, o);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let o = t;
      for (const t of i) if (o = Object(o)[t], void 0 === o) {
        return s;
      }
      return o;
    }
    lodash_set(t, e, s) {
      Object(t) !== t || (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s);
      return t;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          o = s ? this.getval(s) : "";
        if (o) {
          try {
            const t = JSON.parse(o);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, o] = /^@(.*?)\.(.*?)$/.exec(e),
          r = this.getval(i),
          a = i ? "null" === r ? null : r || "{}" : "{}";
        try {
          const e = JSON.parse(a);
          this.lodash_set(e, o, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const r = {};
          this.lodash_set(r, o, t);
          s = this.setval(JSON.stringify(r), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[t];
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          this.data = this.loaddata();
          this.data[e] = t;
          this.writedata();
          return !0;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.cookie && void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient.get(t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let s = require("iconv-lite");
          this.initGotEnv(t);
          this.got(t).on("redirect", (t, e) => {
            try {
              if (t.headers["set-cookie"]) {
                const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                s && this.ckjar.setCookieSync(s, null);
                e.cookieJar = this.ckjar;
              }
            } catch (t) {
              this.logErr(t);
            }
          }).then(t => {
            const {
                statusCode: i,
                statusCode: o,
                headers: r,
                rawBody: a
              } = t,
              n = s.decode(a, this.encoding);
            e(null, {
              status: i,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: i,
              response: o
            } = t;
            e(i, o, o && s.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient[s](t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let i = require("iconv-lite");
          this.initGotEnv(t);
          const {
            url: o,
            ...r
          } = t;
          this.got[s](o, r).then(t => {
            const {
                statusCode: s,
                statusCode: o,
                headers: r,
                rawBody: a
              } = t,
              n = i.decode(a, this.encoding);
            e(null, {
              status: s,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: s,
              response: o
            } = t;
            e(s, o, o && i.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let i = t[s];
        null != i && "" !== i && ("object" == typeof i && (i = JSON.stringify(i)), e += `${s}=${i}&`);
      }
      e = e.substring(0, e.length - 1);
      return e;
    }
    msg(e = t, s = "", i = "", o = {}) {
      const r = t => {
        const {
          $open: e,
          $copy: s,
          $media: i,
          $mediaMime: o
        } = t;
        switch (typeof t) {
          case void 0:
            return t;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: t
                };
              case "Loon":
              case "Shadowrocket":
                return t;
              case "Quantumult X":
                return {
                  "open-url": t
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  const r = {};
                  let a = t.openUrl || t.url || t["open-url"] || e;
                  a && Object.assign(r, {
                    action: "open-url",
                    url: a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  if (n && Object.assign(r, {
                    action: "clipboard",
                    text: n
                  }), i) {
                    let t, e, s;
                    if (i.startsWith("http")) {
                      t = i;
                    } else {
                      if (i.startsWith("data:")) {
                        const [t] = i.split(";"),
                          [, o] = i.split(",");
                        e = o;
                        s = t.replace("data:", "");
                      } else {
                        e = i;
                        s = (t => {
                          const e = {
                            JVBERi0: "application/pdf",
                            R0lGODdh: "image/gif",
                            R0lGODlh: "image/gif",
                            iVBORw0KGgo: "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var s in e) if (0 === t.indexOf(s)) {
                            return e[s];
                          }
                          return null;
                        })(i);
                      }
                    }
                    Object.assign(r, {
                      "media-url": t,
                      "media-base64": e,
                      "media-base64-mime": o ?? s
                    });
                  }
                  Object.assign(r, {
                    "auto-dismiss": t["auto-dismiss"],
                    sound: t.sound
                  });
                  return r;
                }
              case "Loon":
                {
                  const s = {};
                  let o = t.openUrl || t.url || t["open-url"] || e;
                  o && Object.assign(s, {
                    openUrl: o
                  });
                  let r = t.mediaUrl || t["media-url"];
                  i?.startsWith("http") && (r = i);
                  r && Object.assign(s, {
                    mediaUrl: r
                  });
                  console.log(JSON.stringify(s));
                  return s;
                }
              case "Quantumult X":
                {
                  const o = {};
                  let r = t["open-url"] || t.url || t.openUrl || e;
                  r && Object.assign(o, {
                    "open-url": r
                  });
                  let a = t["media-url"] || t.mediaUrl;
                  i?.startsWith("http") && (a = i);
                  a && Object.assign(o, {
                    "media-url": a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  n && Object.assign(o, {
                    "update-pasteboard": n
                  });
                  console.log(JSON.stringify(o));
                  return o;
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(e, s, i, r(o));
            break;
          case "Quantumult X":
            $notify(e, s, i, r(o));
            break;
          case "Node.js":
            break;
        }
      }
      if (!this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    debug(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.debug}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    info(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.info}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    warn(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.warn}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    error(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.error}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.map(t => t ?? String(t)).join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, e, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, e, void 0 !== t.message ? t.message : t, t.stack);
          break;
      }
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(t, e);
}