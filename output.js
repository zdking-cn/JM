//Sat Oct 26 2024 22:37:28 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("移动心愿金"),
  notify = $.isNode() ? require("./sendNotify") : "",
  notifyFlag = 0,
  debug = 0;
let msg = "";
const ckName = "xyjck";
let userCookie = ($.isNode() ? process.env[ckName] : $.getdata()) || "";
let maxConcurrency = 3;
class UserInfo {
  constructor(_0x204c0e) {
    var [_0x204c0e, _0x285dbf] = _0x204c0e.split("#");
    this.auth_code = _0x204c0e;
    this.rewardName = _0x285dbf;
    this.sidValue = null;
    this.signResult = [];
    this.headers = {
      "Accept-Charset": "UTF-8",
      "referer": "https://6460749742196442.h5app.10086.cn/6460749742196442/1.0.119.883/index.html#pages/qwhdmark/views/home/index",
      "login-check": "1",
      "x-requested-with": "XMLHttpRequest",
      "User-Agent": "",
      "Host": "wx.10086.cn",
      "Connection": "Keep-Alive",
      "Cookie": "",
      "content-type": "application/json;charset=UTF-8",
      "Accept": "*/*"
    };
  }
  async ["run"]() {
    try {
      await this.refreshToken();
      await $.wait(500);
      await this.sign_in();
      for (const _0x1003ea of [{
        "name": "app任务",
        "user_agent": "Mozilla/5.0 (Linux; U; Android 11; zh-CN; M2012K10C Build/RP1A.200720.011) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/69.0.3497.100 UWS/3.22.2.57 Mobile Safari/537.36 UCBS/3.22.2.57_221124174200 AlipayDefined AriverApp(mPaaSClient/10.2.8) MiniProgram  leadeon/8.9.0/CMCCIT/tinyApplet"
      }, {
        "name": "微信公众号任务",
        "user_agent": "Mozilla/5.0 (Linux; Android 11; M2012K10C Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5197 MMWEBSDK/20230202 MMWEBID/2612 MicroMessenger/8.0.33.2320(0x28002135) WeChat/arm64 Weixin NetType/5G Language/zh_CN ABI/arm64"
      }, {
        "name": "微信小程序任务",
        "user_agent": "Mozilla/5.0 (Linux; Android 11; M2012K10C Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5197 MMWEBSDK/20230202 MMWEBID/2612 MicroMessenger/8.0.33.2320(0x28002135) WeChat/arm64 Weixin NetType/4G Language/zh_CN ABI/arm64 miniProgram/wx43aab19a93a3a6f2"
      }, {
        "name": "支付宝小程序任务",
        "user_agent": "Mozilla/5.0 (Linux; U; Android 11; zh-CN; M2012K10C Build/RP1A.200720.011) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/69.0.3497.100 UWS/3.22.2.59 Mobile Safari/537.36 UCBS/3.22.2.59_230213152242 NebulaSDK/1.8.100112 Nebula AlipayDefined(nt:3G,ws:393|0|2.75) AliApp(AP/10.3.86.8000) AlipayClient/10.3.86.8000 Language/zh-Hans useStatusBar/true isConcaveScreen/true Region/CNAriver/1.0.0 MiniProgram APXWebView"
      }]) "app任务" == _0x1003ea.name ? console.log("---暂时关闭APP任务---") : (this.headers["User-Agent"] = _0x1003ea.user_agent, console.log("\n========" + _0x1003ea.name + "========"), await this.getTaskList(), await $.wait(5000));
      await $.wait(500);
      await this.userInfo();
    } catch (_0x41c27d) {
      console.error("运行出错:", _0x41c27d.message);
    }
  }
  async ["refreshToken"]() {
    try {
      var _0x3d2c14,
        _0x5cc425,
        _0x2396ff = (await $.request({
          "url": "https://wx.10086.cn/qwhdsso/login?dlwmh=true&actUrl=https%3A%2F%2Fwx.10086.cn%2Fqwhdhub%2Fqwhdmark%2F1021122301%3Fys%3D01m31JH202212120885%26ystitle%3D%25F0%259F%258E%2581%25E7%25AD%25BE%25E5%2588%25B0%25E9%25A2%2586%25E8%25AF%259D%25E8%25B4%25B9",
          "method": "GET",
          "headers": {
            "Host": "wx.10086.cn",
            "Connection": "Keep-Alive",
            "User-Agent": "Mozilla/5.0 (Linux; U; Android 11; zh-CN; M2012K10C Build/RP1A.200720.011) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/69.0.3497.100 UWS/3.22.2.59 Mobile Safari/537.36 UCBS/3.22.2.59_230213152242 NebulaSDK/1.8.100112 Nebula AlipayDefined(nt:3G,ws:393|0|2.75) AliApp(AP/10.3.86.8000) AlipayClient/10.3.86.8000 Language/zh-Hans useStatusBar/true isConcaveScreen/true Region/CNAriver/1.0.0 MiniProgram APXWebView",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
            "Accept-Encoding": "gzip",
            "Upgrade-Insecure-Requests": "1"
          }
        })).request.res.responseUrl.match(/sid%3D([^&]*)/);
      _0x2396ff ? (this.sidValue = _0x2396ff[1], _0x3d2c14 = {
        "url": "https://wx.online-cmcc.cn/qwhdsso/alipay?auth_code=" + this.auth_code + "&sid=" + this.sidValue + "&app_id=2016041101287271&source=alipay_wallet&scope=auth_base&state=init",
        "method": "GET",
        "headers": {
          "Host": "wx.online-cmcc.cn",
          "Connection": "Keep-Alive",
          "User-Agent": "Mozilla/5.0 (Linux; U; Android 11; zh-CN; M2012K10C Build/RP1A.200720.011) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/69.0.3497.100 UWS/3.22.2.59 Mobile Safari/537.36 UCBS/3.22.2.59_230213152242 NebulaSDK/1.8.100112 Nebula AlipayDefined(nt:3G,ws:393|0|2.75) AliApp(AP/10.3.86.8000) AlipayClient/10.3.86.8000 Language/zh-Hans useStatusBar/true isConcaveScreen/true Region/CNAriver/1.0.0 MiniProgram APXWebView",
          "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
          "Accept-Encoding": "gzip,deflate",
          "Upgrade-Insecure-Requests": "1"
        }
      }, _0x5cc425 = await $.request(_0x3d2c14), await $.wait(500), this.headers.Cookie = _0x5cc425.headers["set-cookie"]) : console.log("未找到sid参数");
      await $.wait(500);
    } catch (_0xba6c18) {
      console.log("刷新令牌出错:", _0xba6c18.message);
    }
  }
  async ["sign_in"]() {
    try {
      var _0xfbbe91,
        _0x309a6b,
        _0x5089eb = {
          "url": "https://wx.10086.cn/qwhdhub/api/mark/info/prizeInfo",
          "method": "POST",
          "headers": this.headers,
          "data": {}
        },
        _0x3a64df = (await $.request(_0x5089eb)).data;
      "SUCCESS" !== _0x3a64df.code ? (this.signResult.push(_0x3a64df.msg), console.log(_0x3a64df.msg)) : _0x3a64df.data.todayMarked ? (this.signResult.push("今日已签到"), console.log("今日已签到")) : (await $.wait(500), _0xfbbe91 = {
        "url": "https://wx.10086.cn/qwhdhub/api/mark/do/mark",
        "method": "POST",
        "headers": this.headers,
        "data": {}
      }, _0x309a6b = (await $.request(_0xfbbe91)).data, "SUCCESS" !== _0x309a6b.code ? (this.signResult.push(_0x309a6b.msg), console.log(_0x309a6b.msg)) : (this.signResult.push("签到成功"), console.log("签到成功")));
    } catch (_0x23c757) {
      this.signResult.push("签到失败，错误信息：" + _0x23c757.message);
      console.log("签到失败", _0x23c757);
    }
  }
  async ["getTaskList"]() {
    try {
      var _0x535324,
        _0x264086 = {
          "url": "https://wx.10086.cn/qwhdhub/api/mark/task/taskList",
          "method": "POST",
          "headers": this.headers,
          "data": {}
        },
        _0x20e34b = (await $.request(_0x264086)).data;
      "SUCCESS" !== _0x20e34b.code ? console.log(_0x20e34b.msg) : (_0x535324 = _0x20e34b.data.tasks, console.log("-----每日任务-----"), await this.processTaskByType(_0x535324, "1", maxConcurrency), console.log("-----每周任务-----"), await this.processTaskByType(_0x535324, "2", maxConcurrency), console.log("-----每月任务-----"), await this.processTaskByType(_0x535324, "3", maxConcurrency));
    } catch (_0x54d380) {
      console.error(_0x54d380.message);
    }
  }
  async ["processTaskByType"](_0x172b90, _0x36a92f, _0x230430) {
    const _0x3fa699 = [];
    var _0x458249 = async (_0x1d927f, _0x2ef070, _0x1d3524) => {
      try {
        _0x2ef070 ? 2 == _0x2ef070 ? console.log("已领取:[" + _0x1d3524 + "]") : 1 == _0x2ef070 && (console.log("去领取:[" + _0x1d3524 + "]"), await this.doTask(_0x1d927f, _0x2ef070)) : (console.log("去完成:[" + _0x1d3524 + "]"), await this.doTask(_0x1d927f, _0x2ef070));
      } finally {
        _0x3fa699.splice(_0x3fa699.indexOf(_0x1d927f), 1);
      }
    };
    for (const _0x577460 of _0x172b90.filter(_0x38d1e8 => _0x38d1e8.taskType === _0x36a92f)) {
      var {
          taskName: _0x295262,
          taskId: _0x4d8444,
          status: _0x25d842
        } = _0x577460,
        _0x4d8444 = _0x458249(_0x4d8444, _0x25d842, _0x295262);
      _0x3fa699.push(_0x4d8444);
      _0x3fa699.length >= _0x230430 && (await Promise.race(_0x3fa699));
    }
    await Promise.all(_0x3fa699);
  }
  async ["doTask"](_0x247e93, _0x5aee35) {
    try {
      if (!_0x5aee35) {
        var _0x392b7a = {
            "url": "https://wx.10086.cn/qwhdhub/api/mark/task/taskInfo",
            "method": "POST",
            "headers": this.headers,
            "data": {
              "taskId": _0x247e93
            }
          },
          _0x19603f = (await $.request(_0x392b7a)).data;
        if ("SUCCESS" !== _0x19603f.code) return void console.log(_0x19603f.msg);
        var _0x25dcfc = _0x19603f.data.taskType,
          _0x547af7 = (await $.wait(5000), {
            "url": "https://wx.10086.cn/qwhdhub/api/mark/task/finishTask",
            "method": "POST",
            "headers": this.headers,
            "data": {
              "taskId": _0x247e93,
              "taskType": _0x25dcfc
            }
          }),
          _0x4ce790 = (await $.request(_0x547af7)).data;
        if ("SUCCESS" !== _0x4ce790.code) return void console.log(_0x4ce790.msg);
      }
      var _0x26f0f0,
        _0x499293 = {
          "url": "https://wx.10086.cn/qwhdhub/api/mark/task/getTaskAward",
          "method": "POST",
          "headers": this.headers,
          "data": {
            "taskId": _0x247e93
          }
        },
        _0x6566a9 = (await $.request(_0x499293)).data;
      "SUCCESS" !== _0x6566a9.code ? console.log(_0x6566a9.msg) : (_0x26f0f0 = _0x6566a9.data.awardNum, console.log("领取" + _0x26f0f0 + "心愿值"));
    } catch (_0x14254c) {
      console.log("出错了:", _0x14254c.message);
    }
  }
  async ["userInfo"]() {
    try {
      var _0x248c07,
        _0x290cc1,
        _0x5b7b8a,
        _0x268117,
        _0xb91d97 = {
          "url": "https://wx.10086.cn/qwhdhub/api/mark/task/getExchangeList",
          "method": "POST",
          "headers": this.headers,
          "data": {
            "channel": "app"
          }
        },
        _0x3cf59a = (await $.request(_0xb91d97)).data;
      "SUCCESS" !== _0x3cf59a.code ? console.log(_0x3cf59a.msg) : (_0x248c07 = parseFloat(_0x3cf59a.data.currentFee), console.log("\n当前用户剩余:" + _0x248c07 + "心愿金"), this.rewardName ? (_0x290cc1 = _0x3cf59a.data.prizes.find(_0x348e8c => _0x348e8c.name === this.rewardName)) ? ({
        cost: _0x5b7b8a,
        id: _0x268117
      } = _0x290cc1, _0x248c07 <= _0x5b7b8a ? console.log("当前心愿金不足") : (console.log("去兑换奖品: " + this.rewardName), await this.exchange(_0x268117))) : console.log("未找到对应奖品") : console.log("当前用户未开启兑换"));
    } catch (_0xbaac32) {
      console.log("查询出错了:", _0xbaac32.message);
    }
  }
  async ["exchange"](_0x5025f2) {
    try {
      var _0x25f20b,
        _0x52f674,
        _0x12499e,
        _0x518562 = {
          "url": "https://wx.10086.cn/qwhdhub/api/mark/task/checkStock",
          "method": "POST",
          "headers": this.headers,
          "data": {
            "prizeId": _0x5025f2
          }
        },
        _0x1fa24e = (await $.request(_0x518562)).data;
      "SUCCESS" !== _0x1fa24e.code ? console.log(_0x1fa24e.msg) : 0 === (_0x25f20b = _0x1fa24e.data.stock) ? console.log("当前库存为0，请明天再来兑换!") : (console.log("当前库存数量:" + _0x25f20b), _0x52f674 = {
        "url": "https://wx.10086.cn/qwhdhub/api/mark/task/exchange",
        "method": "POST",
        "headers": this.headers,
        "data": {
          "prizeId": _0x5025f2
        }
      }, _0x12499e = (await $.request(_0x52f674)).data, "SUCCESS" !== _0x12499e.code ? console.log(_0x12499e.msg) : console.log("兑换成功，请记得去使用哦!"));
    } catch (_0x8768cd) {
      console.log("兑换出错了:", _0x8768cd.message);
    }
  }
}
function randomInt(_0x4e12d5, _0x47bddf) {
  return Math.floor(Math.random() * (_0x47bddf - _0x4e12d5 + 1) + _0x4e12d5);
}
async function SendMsg(_0x9759a5) {
  _0x9759a5 && (0 < notifyFlag ? $.isNode() ? await notify.sendNotify($.name, _0x9759a5) : $.msg(_0x9759a5) : console.log(_0x9759a5));
}
function Env(_0x2fc673) {
  const _0x375867 = require("axios"),
    _0x3e4203 = {
      "name": _0x2fc673,
      "startTime": new Date().getTime(),
      "isNode": function () {
        return "undefined" != typeof module && "object" == typeof module.exports;
      },
      "request": async function (_0xece825, _0x20e0b2 = 5000, _0x358eb7 = 3) {
        let _0x514eb2 = 0;
        for (; _0x514eb2 < _0x358eb7;) try {
          var _0xeb4eca = {
              ..._0xece825,
              "timeout": _0x20e0b2
            },
            _0x188538 = await _0x375867(_0xeb4eca);
          return debug && console.log(_0x188538.data), _0x188538;
        } catch (_0x263b35) {
          if (++_0x514eb2 === _0x358eb7) throw new Error("请求失败，已达到最大重试次数");
          "ECONNABORTED" === _0x263b35.code ? console.log("请求超时，正在重试...") : _0x263b35.response ? console.log("服务器返回错误，正在重试...") : console.log("网络错误，正在重试...");
        }
      },
      "toObj": function (_0x2bbf85, _0x1b89e8 = null) {
        try {
          return JSON.parse(_0x2bbf85);
        } catch {
          return _0x1b89e8;
        }
      },
      "toStr": function (_0x10ca8f, _0xf335b0 = null) {
        try {
          return JSON.stringify(_0x10ca8f);
        } catch {
          return _0xf335b0;
        }
      },
      "logs": [],
      "log": function (..._0x1857a2) {
        _0x3e4203.logs = [..._0x3e4203.logs, ..._0x1857a2];
        console.log(_0x1857a2.join("\n"));
      },
      "logErr": function (_0xd74d39, _0x41124a) {
        _0x3e4203.log("", "❗️" + _0x3e4203.name + ", 错误!", _0xd74d39);
      },
      "wait": function (_0x2b986c) {
        return new Promise(_0x3b7e6f => setTimeout(_0x3b7e6f, _0x2b986c));
      },
      "done": function () {
        var _0x34846f = (new Date().getTime() - _0x3e4203.startTime) / 1000;
        return console.log("", "🔔" + _0x3e4203.name + ", 结束, 共运行了" + _0x34846f.toFixed(2) + " 秒");
      }
    };
  return _0x3e4203;
}
(async () => {
  if (userCookie) {
    var _0xa20068,
      _0x3bf95c,
      _0xf8870a = userCookie.split("@");
    console.log("移动心愿金共获取到" + _0xf8870a.length + "个账号");
    for ([_0xa20068, _0x3bf95c] of _0xf8870a.entries()) {
      console.log("\n======== ▷ 第 " + (_0xa20068 + 1) + " 个账号 ◁ ========");
      var _0x29d6a2 = new UserInfo(_0x3bf95c);
      await _0x29d6a2.run();
      console.log("\n随机等待5-10s进行下一个账号");
      await $.wait(randomInt(5000, 10000));
      msg += "\n======== ▷ 第 " + (_0xa20068 + 1) + " 个运行结果 ◁ ========\n" + _0x29d6a2.signResult.join("\n") + "\n";
    }
    await SendMsg(msg);
  } else console.log("未填写变量 xyjck");
})().catch(_0x3d4e7d => $.log(_0x3d4e7d)).finally(() => $.done());