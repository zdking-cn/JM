//Wed Sep 18 2024 14:18:17 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x4364c4 = new _0x4db68f("联通云盘抽奖"),
  _0x35a4ef = 1,
  _0x28e781 = 0,
  {
    v4: _0x4b9c03
  } = require("uuid"),
  _0x94eac9 = require("crypto"),
  _0x39905c = _0x4b9c03();
let _0x4ea26d = process.env.chinaUnicomCookie,
  _0x1d9f44 = "",
  _0x3946e3 = "";
ckArr = _0x4ea26d.split("&");
_0x3f360d("【debug】 这是你的账号数组:\n " + ckArr);
!(async () => {
  ckArr = _0x4ea26d.split("&");
  await _0x5d126d();
  for (let _0x3afe8b = 0; _0x3afe8b < ckArr.length; _0x3afe8b++) {
    let _0x464b76 = _0x3afe8b + 1;
    console.log("------------- 开始【第 " + _0x464b76 + " 个账号】-------------");
    _0x3946e3 = ckArr[_0x3afe8b].split("&");
    _0x3f360d("【debug】 这是你第 " + _0x464b76 + " 账号信息:\n " + _0x3946e3);
    await _0x34bc6b();
    await _0x4364c4.wait(1 * 2000);
    if (num1 == 1) {
      console.log("当前online过期，跳过...");
      continue;
    }
    customDateString = _0x479ea5();
    await _0x28b39c();
    const _0x5c5306 = require("axios");
    let _0x54606c = {
      "method": "GET",
      "url": "https://m.client.10010.com/mobileService/openPlatform/openPlatLineNew.htm?appName=shouting&clientid=1001000003&to_url=https://panservice.mail.wo.cn/h5/activitymobile/turn-template?activityId%3D6",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@11.0400}",
        "Cookie": "PvSessionId=" + customDateString + "" + _0x39905c + ";c_mobile=" + num1 + "; c_version=iphone_c@11.0400; city=036|" + cityCode + "|90063345|-99;devicedId=" + _0x39905c + "; ecs_token=" + ecs_token + ";t3_token=" + t3_token + ""
      },
      "maxRedirects": 0
    };
    await _0x5c5306.request(_0x54606c).catch(_0x3e37a3 => {
      wenb = _0x3e37a3.request.res.rawHeaders[13];
      ticket1 = wenb.match(/ticket=([^&]+)/);
      ticket = ticket1[1];
    });
    console.log("" + num1 + "抽奖");
    await _0x4364c4.wait(1 * 1000);
    req = Math.floor(89999 * Math.random()) + 100000;
    sjc13 = Math.round(new Date().getTime()).toString();
    const _0x43046 = "HandheldHallAutoLogin" + sjc13 + "" + req + "100002",
      _0x523942 = _0x94eac9.createHash("md5");
    _0x523942.update(_0x43046);
    md5Hash = _0x523942.digest("hex");
    await _0x965441();
    await _0x8ff2e9();
    await _0x5c4d1f();
    await _0x258f89();
  }
  await _0xd30150(_0x1d9f44);
})().catch(_0x27ac8e => _0x4364c4.logErr(_0x27ac8e)).finally(() => _0x4364c4.done());
async function _0x965441() {
  let _0x58a65a = {
      "url": "https://panservice.mail.wo.cn/wohome/dispatcher",
      "headers": {
        "Connection": "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        "accessToken": "",
        "Content-Type": "application/json",
        "client-Id": "1001000003",
        "Origin": "https://panservice.mail.wo.cn",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@11.0602}",
        "access-token": "",
        "Host": "panservice.mail.wo.cn",
        "X-YP-Client-Id": "1001000003",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept": "application/json, text/plain, */*"
      },
      "body": "{\"header\": {\"key\": \"HandheldHallAutoLogin\",\"resTime\": " + sjc13 + ",\"reqSeq\": " + req + ",\"channel\": \"100002\",\"version\": \"\",\"sign\": \"" + md5Hash + "\"},\"body\": {\"clientId\": \"1001000003\",\"ticket\": \"" + ticket + "\"}}"
    },
    _0xf7bce4 = await _0x4eff7b(_0x58a65a, "token");
  token = _0xf7bce4.RSP.DATA.token;
}
async function _0x8ff2e9() {
  let _0x4e265c = {
      "url": "https://panservice.mail.wo.cn/wohome/v1/lottery",
      "headers": {
        "Connection": "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        "Content-Type": "application/json",
        "Origin": "https://panservice.mail.wo.cn",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) LianTongYunPan/2.2.8 (iPhone; iOS 16.3.1)",
        "Client-Id": "10086",
        "Access-Token": token,
        "Host": "panservice.mail.wo.cn",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept": "application/json, text/plain, */*"
      },
      "body": "{\"bizKey\": \"newLottery\",\"bizObject\": {\"lottery\": {\"activityId\": \"mcGM6BOC2/XPOJnsZQYjNw==\",\"type\": 3}}}"
    },
    _0x695bee = await _0x4eff7b(_0x4e265c, "ll");
  try {
    if (_0x695bee.result.prizeName === null) {
      console.log("已经抽过奖了");
    } else qgid = _0x695bee.result.prizeName, console.log("本次运行获得：" + qgid);
  } catch (_0x1c495b) {}
}
async function _0x5c4d1f() {
  let _0x1f9e1b = {
      "url": "https://panservice.mail.wo.cn/activity/v1/times?activityId=gAV4huOZ9VWPxSBWKUxZsQ%3D%3D",
      "headers": {
        "Connection": "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        "clientId": "1001000165",
        "source-type": "woapi",
        "X-YP-Access-Token": token,
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) LianTongYunPan/2.2.8 (iPhone; iOS 16.3.1)",
        "token": token,
        "Host": "panservice.mail.wo.cn",
        "X-YP-Client-Id": "1001000165",
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9"
      }
    },
    _0x4ee3ac = await _0x5a5fb4(_0x1f9e1b, "ll");
  try {
    if (_0x4ee3ac.DATA.times > 0) {
      for (var _0x53eb63 = 0; _0x53eb63 < _0x4ee3ac.DATA.times; _0x53eb63++) {
        await _0xa5c237();
        await _0x4364c4.wait(1 * 1000);
      }
      await _0x59ac3f();
      await _0x4364c4.wait(1 * 1000);
      await _0xa5c237();
      await _0x4364c4.wait(1 * 1000);
    } else console.log("本月已经砸过金蛋了");
  } catch (_0x596878) {}
}
async function _0xa5c237() {
  let _0x294e6b = {
      "url": "https://panservice.mail.wo.cn/wohome/v1/lottery",
      "headers": {
        "Connection": "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) LianTongYunPan/2.2.8 (iPhone; iOS 16.3.1)",
        "Client-Id": "1001000235",
        "Access-Token": token,
        "Host": "panservice.mail.wo.cn",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept": "application/json, text/plain, */*"
      },
      "body": "{\"bizKey\": \"newLottery\",\"bizObject\": {\"lottery\": {\"activityId\": \"gAV4huOZ9VWPxSBWKUxZsQ==\",\"type\": 3}}}"
    },
    _0x1ab021 = await _0x4eff7b(_0x294e6b, "ll");
  try {
    _0x1ab021.result.prizeName === null ? console.log("已经砸完金蛋了") : (qgid = _0x1ab021.result.prizeName, console.log("砸金蛋获得：" + qgid));
  } catch (_0xf80682) {}
}
async function _0x59ac3f() {
  let _0x4f107c = {
    "url": "https://panservice.mail.wo.cn/wohome/open/v1/woFileTransfer",
    "headers": {
      "Connection": "keep-alive",
      "Accept-Encoding": "gzip, deflate, br",
      "Content-Type": "application/json",
      "Origin": "https://panservice.mail.wo.cn",
      "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) LianTongYunPan/2.2.8 (iPhone; iOS 16.3.1)",
      "Client-Id": "1001000235",
      "Access-Token": token,
      "Host": "panservice.mail.wo.cn",
      "Accept-Language": "zh-CN,zh-Hans;q=0.9",
      "Accept": "application/json, text/plain, */*"
    },
    "body": "{\n  \"clientId\": \"1001000235\",\n  \"activityId\": \"gAV4huOZ9VWPxSBWKUxZsQ==\",\n  \"fileName\": \"一闪一闪亮晶晶\",\n  \"usedCount\": \"1800+\",\n  \"fileSize\": \"2173604300\",\n  \"fileUniqueValue\": \"P6SpjnIyU2Fz1PAv6iVzrj5xCV6fEyUJHEr1RtTbNVObsRzZs6njDQ==\",\n  \"fileDetailLink\": \"mY4D7v2FId7ytLBD3r1AVS+wHvHIg8LhyntboS5TxI251Bd1LYIbE2f+l44xKmtac9HgJ0XA96F9h+3Q6P4SlBAlBKm5XWr+hJ96TBTriuUfkOcos8xP+UmG2YBkQO6CCvmcDku12im+666Vu9rJZMmcp6EMGo4QO/mGCLlsIydnr08ibor48535nSxwgO6g5hiKDb1kkK0=\"\n}"
  };
}
async function _0x258f89() {
  let _0x33918c = {
      "url": "https://panservice.mail.wo.cn/wohome/v1/lottery",
      "headers": {
        "Connection": "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) LianTongYunPan/2.2.8 (iPhone; iOS 16.3.1)",
        "Client-Id": "10086",
        "Access-Token": token,
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9"
      },
      "body": "{\"bizKey\": \"newLottery\",\"bizObject\": {\"lottery\": {\"activityId\": \"6\",\"type\": 3}}}"
    },
    _0x213e15 = await _0x4eff7b(_0x33918c, "ll");
  try {
    if (_0x213e15.result.id === null) console.log("转盘已经抽过奖了");else {
      qgid = _0x213e15.result.prizeName;
      console.log("转盘获得：" + qgid);
    }
  } catch (_0x363b90) {}
}
async function _0x34bc6b() {
  let _0xe0b271 = {
      "url": "https://m.client.10010.com/mobileService/onLine.htm",
      "headers": {
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "*/*",
        "Host": "m.client.10010.com",
        "User-Agent": "ChinaUnicom.x CFNetwork iOS/16.3.1 unicom{version:iphone_c@11.0700}",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9"
      },
      "body": "deviceModel=iPhone&step=background&token_online=" + _0x3946e3 + "&version=iphone_c%4011.0700"
    },
    _0x4c4997 = await _0x4eff7b(_0xe0b271, "获取");
  try {
    t3_token = _0x4c4997.t3_token;
    private_token = _0x4c4997.private_token;
    ecs_token = _0x4c4997.ecs_token;
    num1 = _0x4c4997.list[0].num;
    cityCode = _0x4c4997.list[0].cityCode;
  } catch (_0x2aaa5a) {
    num1 = "1";
  }
}
async function _0x249f94() {
  let _0x580057 = {
      "url": "https://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko)"
      }
    },
    _0x6ef724 = await _0x5a5fb4(_0x580057, "获取网络时间");
  try {
    shijian = _0x6ef724.data.t;
  } catch (_0x13e544) {}
}
async function _0x5d126d() {
  let _0x3cd5dc = {
      "url": "https://gitee.com/kele2233/genxin/raw/master/ydid.json",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.43(0x18002b2d) NetType/WIFI Language/zh_CN"
      }
    },
    _0x1f806f = await _0x5a5fb4(_0x3cd5dc, "ll");
  hqsjc = _0x1f806f.ymsjc;
  gong = _0x1f806f.gong;
  dqsjc = Math.round(new Date().getTime() / 1000).toString();
  hqsjc > dqsjc ? (console.log("公告：" + _0x1f806f.gh), console.log("当前版本1.1，最新版本" + _0x1f806f.fwbbh), console.log("当前脚本有效期至" + _0x11f3a8(hqsjc))) : (console.error(gong), process.exit());
}
async function _0x28b39c() {
  let _0x5f55ff = {
      "url": "https://activity.10010.com/sixPalaceGridTurntableLottery/signin/daySign",
      "headers": {
        "Accept": "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate, br",
        "Cookie": "PvSessionId=" + customDateString + "" + _0x39905c + ";c_mobile=" + num1 + "; c_version=iphone_c@11.0400; city=036|" + cityCode + "|90063345|-99;devicedId=" + _0x39905c + "; ecs_token=" + ecs_token + ";t3_token=" + t3_token + "",
        "Content-Type": "application/x-www-form-urlencoded",
        "Host": "activity.10010.com",
        "Connection": "keep-alive",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@11.0700}",
        "Referer": "https://img.client.10010.com/",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9"
      },
      "body": "shareCl=&shareCode="
    },
    _0x45b62a = await _0x4eff7b(_0x5f55ff, "签到");
  if (_0x45b62a.code == "0000") {
    console.log("签到成功获得" + _0x45b62a.data.redSignMessage);
  } else console.log(_0x45b62a.desc);
}
async function _0x2550b6(_0x7292a9, _0x3e2118) {
  return new Promise(_0x8500f8 => {
    let _0x4e2453 = [];
    if (_0x7292a9) {
      if (_0x7292a9.indexOf("@") !== -1) _0x7292a9.split("@").forEach(_0x4e0e8b => {
        _0x4e2453.push(_0x4e0e8b);
      });else _0x7292a9.indexOf("\n") !== -1 ? _0x7292a9.split("\n").forEach(_0xec9234 => {
        _0x4e2453.push(_0xec9234);
      }) : _0x4e2453.push(_0x7292a9);
      _0x8500f8(_0x4e2453);
    } else console.log("\n 【" + _0x4364c4.name + "】：未填写变量 " + _0x3e2118);
  });
}
async function _0xd30150(_0x4476da) {
  if (!_0x4476da) return;
  if (_0x35a4ef > 0) {
    if (_0x4364c4.isNode()) {
      let _0x290fc0 = require("./sendNotify");
      await _0x290fc0.sendNotify(_0x4364c4.name, _0x4476da);
    } else {
      _0x4364c4.msg(_0x4476da);
    }
  } else console.log(_0x4476da);
}
function _0x43a079(_0xd4d624) {
  _0xd4d624 = _0xd4d624 || 32;
  let _0x10fde9 = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890",
    _0x3cafb3 = _0x10fde9.length,
    _0x418c73 = "";
  for (i = 0; i < _0xd4d624; i++) _0x418c73 += _0x10fde9.charAt(Math.floor(Math.random() * _0x3cafb3));
  return _0x418c73;
}
let _0xfeb24 = "";
function _0x50087c(_0x5c2a18) {
  _0xfeb24 = _0x5c2a18;
}
function _0x363a4c(_0x26fb89) {
  if (_0xfeb24 === _0x26fb89) console.log("Reached mark " + _0x26fb89);else {
    console.log("Invalid mark: " + _0x26fb89);
  }
}
function _0x11f3a8(_0x3114ba) {
  var _0x51d5cc = new Date(_0x3114ba * 1000);
  var _0x5d645b = _0x51d5cc.getFullYear();
  var _0x51dc5e = String(_0x51d5cc.getMonth() + 1).padStart(2, "0");
  var _0x3cc692 = String(_0x51d5cc.getDate()).padStart(2, "0");
  var _0x3b7655 = String(_0x51d5cc.getHours()).padStart(2, "0");
  var _0x245081 = String(_0x51d5cc.getMinutes()).padStart(2, "0");
  var _0x47e3ff = String(_0x51d5cc.getSeconds()).padStart(2, "0");
  var _0x1eb5d6 = _0x5d645b + "-" + _0x51dc5e + "-" + _0x3cc692 + " " + _0x3b7655 + ":" + _0x245081 + ":" + _0x47e3ff;
  return _0x1eb5d6;
}
function _0x269f4a(_0x54baec, _0x50bec2) {
  return Math.round(Math.random() * (_0x50bec2 - _0x54baec) + _0x54baec);
}
function _0x2cad51() {
  const _0xa0496 = new Date(),
    _0x3ceb5c = _0xa0496.getHours(),
    _0x10cd8f = new Date(_0xa0496.getFullYear(), _0xa0496.getMonth(), _0xa0496.getDate(), _0x3ceb5c + 1, 0, 0, 0);
  return _0x10cd8f.getTime();
}
function _0x2c2a45() {
  const _0x9fb7af = new Date(),
    _0xdda3e9 = _0x9fb7af.getMinutes(),
    _0x334443 = new Date(_0x9fb7af.getFullYear(), _0x9fb7af.getMonth(), _0x9fb7af.getDate(), _0x9fb7af.getHours(), _0xdda3e9 === 0 ? 1 : _0xdda3e9 + 1, 0, 0);
  if (_0x334443.getMinutes() === 0 && _0x334443.getHours() !== _0x9fb7af.getHours()) {
    _0x334443.setDate(_0x9fb7af.getDate() + (_0x334443.getHours() === 0 ? 1 : 0));
  }
  return _0x334443.getTime();
}
function _0x546159() {
  return Math.round(new Date().getTime()).toString();
}
function _0x479ea5() {
  const _0x36e9cc = new Date(),
    _0x476dab = String(_0x36e9cc.getFullYear()).padStart(4, "0"),
    _0x41f6a4 = String(_0x36e9cc.getMonth() + 1).padStart(2, "0"),
    _0x4bef12 = String(_0x36e9cc.getDate()).padStart(2, "0"),
    _0x474da1 = String(_0x36e9cc.getHours()).padStart(2, "0"),
    _0x1a6ad4 = String(_0x36e9cc.getMinutes()).padStart(2, "0"),
    _0x395d1e = String(_0x36e9cc.getSeconds()).slice(0, 2);
  return _0x476dab + _0x41f6a4 + _0x4bef12 + _0x474da1 + _0x1a6ad4 + _0x395d1e;
}
function _0x5be206() {
  return Math.round(new Date().getTime() / 1000).toString();
}
function _0x1a81e7() {
  let _0xd9c19a = new Date();
  return h = _0xd9c19a.getHours(), h;
}
function _0x22356e() {
  let _0x4c1dd5 = new Date();
  return m = _0x4c1dd5.getMinutes(), m;
}
function _0xc7a664(_0x24085a = 3 * 1000) {
  return new Promise(_0x2112c6 => {
    let _0x467a40 = {
      "url": "https://keai.icu/apiwyy/api"
    };
    _0x4364c4.get(_0x467a40, async (_0x58f7b7, _0x2e03fe, _0x3ab6d9) => {
      try {
        _0x3ab6d9 = JSON.parse(_0x3ab6d9);
        console.log("\n 【网抑云时间】: " + _0x3ab6d9.content + "  by--" + _0x3ab6d9.music);
      } catch (_0x28d1fe) {
        _0x4364c4.logErr(_0x28d1fe, _0x2e03fe);
      } finally {
        _0x2112c6();
      }
    }, _0x24085a);
  });
}
async function _0x5a5fb4(_0x5f3d01, _0x560012, _0x17b2ed = 3 * 1000) {
  return new Promise(_0x4cb89c => {
    let _0x3103cb = _0x5f3d01;
    if (!_0x560012) {
      let _0xc78ee1 = arguments.callee.toString(),
        _0x596d66 = /function\s*(\w*)/i,
        _0x48ca05 = _0x596d66.exec(_0xc78ee1);
      _0x560012 = _0x48ca05[1];
    }
    _0x28e781 && (console.log("\n 【debug】=============== 这是 " + _0x560012 + " 请求 url ==============="), console.log(_0x3103cb));
    _0x4364c4.get(_0x3103cb, async (_0x230185, _0x2d0de2, _0x396399) => {
      try {
        if (_0x28e781) {
          console.log("\n\n 【debug】===============这是 " + _0x560012 + " 返回data==============");
          console.log(_0x396399);
          console.log("======");
          console.log(JSON.parse(_0x396399));
        }
        let _0x570012 = JSON.parse(_0x396399);
        _0x4cb89c(_0x570012);
      } catch (_0x432b3a) {
        console.log(_0x230185, _0x2d0de2);
      } finally {
        _0x4cb89c();
      }
    }, _0x17b2ed);
  });
}
async function _0x4eff7b(_0x11d137, _0x5038a8, _0xac4379 = 2 * 100) {
  return new Promise(_0x13faaa => {
    let _0x1dd35d = _0x11d137;
    if (!_0x5038a8) {
      let _0x1758a1 = arguments.callee.toString(),
        _0x542f76 = /function\s*(\w*)/i,
        _0x2736c1 = _0x542f76.exec(_0x1758a1);
      _0x5038a8 = _0x2736c1[1];
    }
    _0x28e781 && (console.log("\n 【debug】=============== 这是 " + _0x5038a8 + " 请求 url ==============="), console.log(_0x1dd35d));
    _0x4364c4.post(_0x1dd35d, async (_0x5e692b, _0x4664cf, _0x3882d1) => {
      try {
        if (_0x28e781) {
          console.log("\n\n 【debug】===============这是 " + _0x5038a8 + " 返回data==============");
          console.log(_0x3882d1);
          console.log("======");
          console.log(JSON.parse(_0x3882d1));
        }
        let _0x380fae = JSON.parse(_0x3882d1);
        _0x13faaa(_0x380fae);
      } catch (_0x4ded36) {} finally {
        _0x13faaa();
      }
    }, _0xac4379);
  });
}
function _0x3f360d(..._0x2a0c9e) {
  _0x28e781 && console.log(..._0x2a0c9e);
}
function _0xfb377(_0x167453) {
  function _0x468427(_0x589a5a, _0x2c5708) {
    return _0x589a5a << _0x2c5708 | _0x589a5a >>> 32 - _0x2c5708;
  }
  function _0x494300(_0x9cea0b, _0x2c9a39) {
    var _0x2fb01d, _0x517e7c, _0x4d5e12, _0x348aad, _0x2800d2;
    return _0x4d5e12 = 2147483648 & _0x9cea0b, _0x348aad = 2147483648 & _0x2c9a39, _0x2fb01d = 1073741824 & _0x9cea0b, _0x517e7c = 1073741824 & _0x2c9a39, _0x2800d2 = (1073741823 & _0x9cea0b) + (1073741823 & _0x2c9a39), _0x2fb01d & _0x517e7c ? 2147483648 ^ _0x2800d2 ^ _0x4d5e12 ^ _0x348aad : _0x2fb01d | _0x517e7c ? 1073741824 & _0x2800d2 ? 3221225472 ^ _0x2800d2 ^ _0x4d5e12 ^ _0x348aad : 1073741824 ^ _0x2800d2 ^ _0x4d5e12 ^ _0x348aad : _0x2800d2 ^ _0x4d5e12 ^ _0x348aad;
  }
  function _0x543b3c(_0x5d4afb, _0x30e562, _0x53cea9) {
    return _0x5d4afb & _0x30e562 | ~_0x5d4afb & _0x53cea9;
  }
  function _0x561c7a(_0x3f5e89, _0x40ed1f, _0x670b3a) {
    return _0x3f5e89 & _0x670b3a | _0x40ed1f & ~_0x670b3a;
  }
  function _0x2a9120(_0x508a36, _0x3f8d1b, _0x868410) {
    return _0x508a36 ^ _0x3f8d1b ^ _0x868410;
  }
  function _0x393dd2(_0x4c6475, _0x145ba0, _0x125985) {
    return _0x145ba0 ^ (_0x4c6475 | ~_0x125985);
  }
  function _0x59de74(_0x4125a9, _0x234260, _0x7350e2, _0x1134be, _0x405c4a, _0x5ac651, _0x5aa5e0) {
    return _0x4125a9 = _0x494300(_0x4125a9, _0x494300(_0x494300(_0x543b3c(_0x234260, _0x7350e2, _0x1134be), _0x405c4a), _0x5aa5e0)), _0x494300(_0x468427(_0x4125a9, _0x5ac651), _0x234260);
  }
  function _0xdd7673(_0x5704a0, _0x3fb2c3, _0x5da7e4, _0x26af4d, _0x5cc4b0, _0x53292c, _0x32df27) {
    return _0x5704a0 = _0x494300(_0x5704a0, _0x494300(_0x494300(_0x561c7a(_0x3fb2c3, _0x5da7e4, _0x26af4d), _0x5cc4b0), _0x32df27)), _0x494300(_0x468427(_0x5704a0, _0x53292c), _0x3fb2c3);
  }
  function _0xa33269(_0xfc4722, _0x5a76fa, _0x4376b5, _0x50b016, _0x3a7fd0, _0x588236, _0x479bf4) {
    return _0xfc4722 = _0x494300(_0xfc4722, _0x494300(_0x494300(_0x2a9120(_0x5a76fa, _0x4376b5, _0x50b016), _0x3a7fd0), _0x479bf4)), _0x494300(_0x468427(_0xfc4722, _0x588236), _0x5a76fa);
  }
  function _0x39e3f5(_0x3ac586, _0x21395d, _0xbef085, _0x660a3d, _0x49120a, _0x5ac777, _0x36bbcb) {
    return _0x3ac586 = _0x494300(_0x3ac586, _0x494300(_0x494300(_0x393dd2(_0x21395d, _0xbef085, _0x660a3d), _0x49120a), _0x36bbcb)), _0x494300(_0x468427(_0x3ac586, _0x5ac777), _0x21395d);
  }
  function _0x36097a(_0x12a7fa) {
    for (var _0x229ab2, _0x2c8906 = _0x12a7fa.length, _0x32741e = _0x2c8906 + 8, _0x20c9cf = (_0x32741e - _0x32741e % 64) / 64, _0x159f63 = 16 * (_0x20c9cf + 1), _0x4b8282 = new Array(_0x159f63 - 1), _0x3ce34f = 0, _0x34e05a = 0; _0x2c8906 > _0x34e05a;) _0x229ab2 = (_0x34e05a - _0x34e05a % 4) / 4, _0x3ce34f = _0x34e05a % 4 * 8, _0x4b8282[_0x229ab2] = _0x4b8282[_0x229ab2] | _0x12a7fa.charCodeAt(_0x34e05a) << _0x3ce34f, _0x34e05a++;
    return _0x229ab2 = (_0x34e05a - _0x34e05a % 4) / 4, _0x3ce34f = _0x34e05a % 4 * 8, _0x4b8282[_0x229ab2] = _0x4b8282[_0x229ab2] | 128 << _0x3ce34f, _0x4b8282[_0x159f63 - 2] = _0x2c8906 << 3, _0x4b8282[_0x159f63 - 1] = _0x2c8906 >>> 29, _0x4b8282;
  }
  function _0x5558a5(_0x3b71c0) {
    var _0x28936f,
      _0x12ea27,
      _0x18a4a8 = "",
      _0xb2c3ee = "";
    for (_0x12ea27 = 0; 3 >= _0x12ea27; _0x12ea27++) _0x28936f = _0x3b71c0 >>> 8 * _0x12ea27 & 255, _0xb2c3ee = "0" + _0x28936f.toString(16), _0x18a4a8 += _0xb2c3ee.substr(_0xb2c3ee.length - 2, 2);
    return _0x18a4a8;
  }
  function _0x1a6f76(_0x240387) {
    _0x240387 = _0x240387.replace(/\r\n/g, "\n");
    for (var _0x5bac10 = "", _0x198f67 = 0; _0x198f67 < _0x240387.length; _0x198f67++) {
      var _0x304b00 = _0x240387.charCodeAt(_0x198f67);
      128 > _0x304b00 ? _0x5bac10 += String.fromCharCode(_0x304b00) : _0x304b00 > 127 && 2048 > _0x304b00 ? (_0x5bac10 += String.fromCharCode(_0x304b00 >> 6 | 192), _0x5bac10 += String.fromCharCode(63 & _0x304b00 | 128)) : (_0x5bac10 += String.fromCharCode(_0x304b00 >> 12 | 224), _0x5bac10 += String.fromCharCode(_0x304b00 >> 6 & 63 | 128), _0x5bac10 += String.fromCharCode(63 & _0x304b00 | 128));
    }
    return _0x5bac10;
  }
  var _0x75b175,
    _0x347425,
    _0x4bf4a0,
    _0x62eeb7,
    _0x17b7fa,
    _0x25c140,
    _0x56e227,
    _0x1dc64f,
    _0x36f0d1,
    _0x420f67 = [],
    _0xbf5997 = 7,
    _0x1c25b3 = 12,
    _0x56a8e0 = 17,
    _0x4202fa = 22,
    _0x61096c = 5,
    _0x2f91ff = 9,
    _0x1e7d5d = 14,
    _0x463911 = 20,
    _0x37fa83 = 4,
    _0x96f475 = 11,
    _0x562f70 = 16,
    _0x3b1ff0 = 23,
    _0x5a53de = 6,
    _0x53bbab = 10,
    _0x115e50 = 15,
    _0x2260e0 = 21;
  for (_0x167453 = _0x1a6f76(_0x167453), _0x420f67 = _0x36097a(_0x167453), _0x25c140 = 1732584193, _0x56e227 = 4023233417, _0x1dc64f = 2562383102, _0x36f0d1 = 271733878, _0x75b175 = 0; _0x75b175 < _0x420f67.length; _0x75b175 += 16) _0x347425 = _0x25c140, _0x4bf4a0 = _0x56e227, _0x62eeb7 = _0x1dc64f, _0x17b7fa = _0x36f0d1, _0x25c140 = _0x59de74(_0x25c140, _0x56e227, _0x1dc64f, _0x36f0d1, _0x420f67[_0x75b175 + 0], _0xbf5997, 3614090360), _0x36f0d1 = _0x59de74(_0x36f0d1, _0x25c140, _0x56e227, _0x1dc64f, _0x420f67[_0x75b175 + 1], _0x1c25b3, 3905402710), _0x1dc64f = _0x59de74(_0x1dc64f, _0x36f0d1, _0x25c140, _0x56e227, _0x420f67[_0x75b175 + 2], _0x56a8e0, 606105819), _0x56e227 = _0x59de74(_0x56e227, _0x1dc64f, _0x36f0d1, _0x25c140, _0x420f67[_0x75b175 + 3], _0x4202fa, 3250441966), _0x25c140 = _0x59de74(_0x25c140, _0x56e227, _0x1dc64f, _0x36f0d1, _0x420f67[_0x75b175 + 4], _0xbf5997, 4118548399), _0x36f0d1 = _0x59de74(_0x36f0d1, _0x25c140, _0x56e227, _0x1dc64f, _0x420f67[_0x75b175 + 5], _0x1c25b3, 1200080426), _0x1dc64f = _0x59de74(_0x1dc64f, _0x36f0d1, _0x25c140, _0x56e227, _0x420f67[_0x75b175 + 6], _0x56a8e0, 2821735955), _0x56e227 = _0x59de74(_0x56e227, _0x1dc64f, _0x36f0d1, _0x25c140, _0x420f67[_0x75b175 + 7], _0x4202fa, 4249261313), _0x25c140 = _0x59de74(_0x25c140, _0x56e227, _0x1dc64f, _0x36f0d1, _0x420f67[_0x75b175 + 8], _0xbf5997, 1770035416), _0x36f0d1 = _0x59de74(_0x36f0d1, _0x25c140, _0x56e227, _0x1dc64f, _0x420f67[_0x75b175 + 9], _0x1c25b3, 2336552879), _0x1dc64f = _0x59de74(_0x1dc64f, _0x36f0d1, _0x25c140, _0x56e227, _0x420f67[_0x75b175 + 10], _0x56a8e0, 4294925233), _0x56e227 = _0x59de74(_0x56e227, _0x1dc64f, _0x36f0d1, _0x25c140, _0x420f67[_0x75b175 + 11], _0x4202fa, 2304563134), _0x25c140 = _0x59de74(_0x25c140, _0x56e227, _0x1dc64f, _0x36f0d1, _0x420f67[_0x75b175 + 12], _0xbf5997, 1804603682), _0x36f0d1 = _0x59de74(_0x36f0d1, _0x25c140, _0x56e227, _0x1dc64f, _0x420f67[_0x75b175 + 13], _0x1c25b3, 4254626195), _0x1dc64f = _0x59de74(_0x1dc64f, _0x36f0d1, _0x25c140, _0x56e227, _0x420f67[_0x75b175 + 14], _0x56a8e0, 2792965006), _0x56e227 = _0x59de74(_0x56e227, _0x1dc64f, _0x36f0d1, _0x25c140, _0x420f67[_0x75b175 + 15], _0x4202fa, 1236535329), _0x25c140 = _0xdd7673(_0x25c140, _0x56e227, _0x1dc64f, _0x36f0d1, _0x420f67[_0x75b175 + 1], _0x61096c, 4129170786), _0x36f0d1 = _0xdd7673(_0x36f0d1, _0x25c140, _0x56e227, _0x1dc64f, _0x420f67[_0x75b175 + 6], _0x2f91ff, 3225465664), _0x1dc64f = _0xdd7673(_0x1dc64f, _0x36f0d1, _0x25c140, _0x56e227, _0x420f67[_0x75b175 + 11], _0x1e7d5d, 643717713), _0x56e227 = _0xdd7673(_0x56e227, _0x1dc64f, _0x36f0d1, _0x25c140, _0x420f67[_0x75b175 + 0], _0x463911, 3921069994), _0x25c140 = _0xdd7673(_0x25c140, _0x56e227, _0x1dc64f, _0x36f0d1, _0x420f67[_0x75b175 + 5], _0x61096c, 3593408605), _0x36f0d1 = _0xdd7673(_0x36f0d1, _0x25c140, _0x56e227, _0x1dc64f, _0x420f67[_0x75b175 + 10], _0x2f91ff, 38016083), _0x1dc64f = _0xdd7673(_0x1dc64f, _0x36f0d1, _0x25c140, _0x56e227, _0x420f67[_0x75b175 + 15], _0x1e7d5d, 3634488961), _0x56e227 = _0xdd7673(_0x56e227, _0x1dc64f, _0x36f0d1, _0x25c140, _0x420f67[_0x75b175 + 4], _0x463911, 3889429448), _0x25c140 = _0xdd7673(_0x25c140, _0x56e227, _0x1dc64f, _0x36f0d1, _0x420f67[_0x75b175 + 9], _0x61096c, 568446438), _0x36f0d1 = _0xdd7673(_0x36f0d1, _0x25c140, _0x56e227, _0x1dc64f, _0x420f67[_0x75b175 + 14], _0x2f91ff, 3275163606), _0x1dc64f = _0xdd7673(_0x1dc64f, _0x36f0d1, _0x25c140, _0x56e227, _0x420f67[_0x75b175 + 3], _0x1e7d5d, 4107603335), _0x56e227 = _0xdd7673(_0x56e227, _0x1dc64f, _0x36f0d1, _0x25c140, _0x420f67[_0x75b175 + 8], _0x463911, 1163531501), _0x25c140 = _0xdd7673(_0x25c140, _0x56e227, _0x1dc64f, _0x36f0d1, _0x420f67[_0x75b175 + 13], _0x61096c, 2850285829), _0x36f0d1 = _0xdd7673(_0x36f0d1, _0x25c140, _0x56e227, _0x1dc64f, _0x420f67[_0x75b175 + 2], _0x2f91ff, 4243563512), _0x1dc64f = _0xdd7673(_0x1dc64f, _0x36f0d1, _0x25c140, _0x56e227, _0x420f67[_0x75b175 + 7], _0x1e7d5d, 1735328473), _0x56e227 = _0xdd7673(_0x56e227, _0x1dc64f, _0x36f0d1, _0x25c140, _0x420f67[_0x75b175 + 12], _0x463911, 2368359562), _0x25c140 = _0xa33269(_0x25c140, _0x56e227, _0x1dc64f, _0x36f0d1, _0x420f67[_0x75b175 + 5], _0x37fa83, 4294588738), _0x36f0d1 = _0xa33269(_0x36f0d1, _0x25c140, _0x56e227, _0x1dc64f, _0x420f67[_0x75b175 + 8], _0x96f475, 2272392833), _0x1dc64f = _0xa33269(_0x1dc64f, _0x36f0d1, _0x25c140, _0x56e227, _0x420f67[_0x75b175 + 11], _0x562f70, 1839030562), _0x56e227 = _0xa33269(_0x56e227, _0x1dc64f, _0x36f0d1, _0x25c140, _0x420f67[_0x75b175 + 14], _0x3b1ff0, 4259657740), _0x25c140 = _0xa33269(_0x25c140, _0x56e227, _0x1dc64f, _0x36f0d1, _0x420f67[_0x75b175 + 1], _0x37fa83, 2763975236), _0x36f0d1 = _0xa33269(_0x36f0d1, _0x25c140, _0x56e227, _0x1dc64f, _0x420f67[_0x75b175 + 4], _0x96f475, 1272893353), _0x1dc64f = _0xa33269(_0x1dc64f, _0x36f0d1, _0x25c140, _0x56e227, _0x420f67[_0x75b175 + 7], _0x562f70, 4139469664), _0x56e227 = _0xa33269(_0x56e227, _0x1dc64f, _0x36f0d1, _0x25c140, _0x420f67[_0x75b175 + 10], _0x3b1ff0, 3200236656), _0x25c140 = _0xa33269(_0x25c140, _0x56e227, _0x1dc64f, _0x36f0d1, _0x420f67[_0x75b175 + 13], _0x37fa83, 681279174), _0x36f0d1 = _0xa33269(_0x36f0d1, _0x25c140, _0x56e227, _0x1dc64f, _0x420f67[_0x75b175 + 0], _0x96f475, 3936430074), _0x1dc64f = _0xa33269(_0x1dc64f, _0x36f0d1, _0x25c140, _0x56e227, _0x420f67[_0x75b175 + 3], _0x562f70, 3572445317), _0x56e227 = _0xa33269(_0x56e227, _0x1dc64f, _0x36f0d1, _0x25c140, _0x420f67[_0x75b175 + 6], _0x3b1ff0, 76029189), _0x25c140 = _0xa33269(_0x25c140, _0x56e227, _0x1dc64f, _0x36f0d1, _0x420f67[_0x75b175 + 9], _0x37fa83, 3654602809), _0x36f0d1 = _0xa33269(_0x36f0d1, _0x25c140, _0x56e227, _0x1dc64f, _0x420f67[_0x75b175 + 12], _0x96f475, 3873151461), _0x1dc64f = _0xa33269(_0x1dc64f, _0x36f0d1, _0x25c140, _0x56e227, _0x420f67[_0x75b175 + 15], _0x562f70, 530742520), _0x56e227 = _0xa33269(_0x56e227, _0x1dc64f, _0x36f0d1, _0x25c140, _0x420f67[_0x75b175 + 2], _0x3b1ff0, 3299628645), _0x25c140 = _0x39e3f5(_0x25c140, _0x56e227, _0x1dc64f, _0x36f0d1, _0x420f67[_0x75b175 + 0], _0x5a53de, 4096336452), _0x36f0d1 = _0x39e3f5(_0x36f0d1, _0x25c140, _0x56e227, _0x1dc64f, _0x420f67[_0x75b175 + 7], _0x53bbab, 1126891415), _0x1dc64f = _0x39e3f5(_0x1dc64f, _0x36f0d1, _0x25c140, _0x56e227, _0x420f67[_0x75b175 + 14], _0x115e50, 2878612391), _0x56e227 = _0x39e3f5(_0x56e227, _0x1dc64f, _0x36f0d1, _0x25c140, _0x420f67[_0x75b175 + 5], _0x2260e0, 4237533241), _0x25c140 = _0x39e3f5(_0x25c140, _0x56e227, _0x1dc64f, _0x36f0d1, _0x420f67[_0x75b175 + 12], _0x5a53de, 1700485571), _0x36f0d1 = _0x39e3f5(_0x36f0d1, _0x25c140, _0x56e227, _0x1dc64f, _0x420f67[_0x75b175 + 3], _0x53bbab, 2399980690), _0x1dc64f = _0x39e3f5(_0x1dc64f, _0x36f0d1, _0x25c140, _0x56e227, _0x420f67[_0x75b175 + 10], _0x115e50, 4293915773), _0x56e227 = _0x39e3f5(_0x56e227, _0x1dc64f, _0x36f0d1, _0x25c140, _0x420f67[_0x75b175 + 1], _0x2260e0, 2240044497), _0x25c140 = _0x39e3f5(_0x25c140, _0x56e227, _0x1dc64f, _0x36f0d1, _0x420f67[_0x75b175 + 8], _0x5a53de, 1873313359), _0x36f0d1 = _0x39e3f5(_0x36f0d1, _0x25c140, _0x56e227, _0x1dc64f, _0x420f67[_0x75b175 + 15], _0x53bbab, 4264355552), _0x1dc64f = _0x39e3f5(_0x1dc64f, _0x36f0d1, _0x25c140, _0x56e227, _0x420f67[_0x75b175 + 6], _0x115e50, 2734768916), _0x56e227 = _0x39e3f5(_0x56e227, _0x1dc64f, _0x36f0d1, _0x25c140, _0x420f67[_0x75b175 + 13], _0x2260e0, 1309151649), _0x25c140 = _0x39e3f5(_0x25c140, _0x56e227, _0x1dc64f, _0x36f0d1, _0x420f67[_0x75b175 + 4], _0x5a53de, 4149444226), _0x36f0d1 = _0x39e3f5(_0x36f0d1, _0x25c140, _0x56e227, _0x1dc64f, _0x420f67[_0x75b175 + 11], _0x53bbab, 3174756917), _0x1dc64f = _0x39e3f5(_0x1dc64f, _0x36f0d1, _0x25c140, _0x56e227, _0x420f67[_0x75b175 + 2], _0x115e50, 718787259), _0x56e227 = _0x39e3f5(_0x56e227, _0x1dc64f, _0x36f0d1, _0x25c140, _0x420f67[_0x75b175 + 9], _0x2260e0, 3951481745), _0x25c140 = _0x494300(_0x25c140, _0x347425), _0x56e227 = _0x494300(_0x56e227, _0x4bf4a0), _0x1dc64f = _0x494300(_0x1dc64f, _0x62eeb7), _0x36f0d1 = _0x494300(_0x36f0d1, _0x17b7fa);
  var _0x40612b = _0x5558a5(_0x25c140) + _0x5558a5(_0x56e227) + _0x5558a5(_0x1dc64f) + _0x5558a5(_0x36f0d1);
  return _0x40612b.toLowerCase();
}
function _0x4db68f(_0xe4a965, _0x33d706) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x2a0df0 {
    constructor(_0x499f6d) {
      this.env = _0x499f6d;
    }
    ["send"](_0x2dad6d, _0x2f7170 = "GET") {
      _0x2dad6d = "string" == typeof _0x2dad6d ? {
        "url": _0x2dad6d
      } : _0x2dad6d;
      let _0x350bea = this.get;
      return "POST" === _0x2f7170 && (_0x350bea = this.post), new Promise((_0x4fc2c0, _0xf8566d) => {
        _0x350bea.call(this, _0x2dad6d, (_0x1d64a4, _0x932382, _0x2390cb) => {
          _0x1d64a4 ? _0xf8566d(_0x1d64a4) : _0x4fc2c0(_0x932382);
        });
      });
    }
    ["get"](_0x34b515) {
      return this.send.call(this.env, _0x34b515);
    }
    ["post"](_0x23e33a) {
      return this.send.call(this.env, _0x23e33a, "POST");
    }
  }
  return new class {
    constructor(_0x2eaf90, _0x4defe2) {
      this.name = _0x2eaf90;
      this.http = new _0x2a0df0(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x4defe2);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    ["isNode"]() {
      return "undefined" != typeof module && !!module.exports;
    }
    ["isQuanX"]() {
      return "undefined" != typeof $task;
    }
    ["isSurge"]() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    ["isLoon"]() {
      return "undefined" != typeof $loon;
    }
    ["toObj"](_0x5d596e, _0x5bd500 = null) {
      try {
        return JSON.parse(_0x5d596e);
      } catch {
        return _0x5bd500;
      }
    }
    ["toStr"](_0x1e21fb, _0x26b6c2 = null) {
      try {
        return JSON.stringify(_0x1e21fb);
      } catch {
        return _0x26b6c2;
      }
    }
    ["getjson"](_0x53645a, _0x188871) {
      let _0x58868b = _0x188871;
      const _0x55a492 = this.getdata(_0x53645a);
      if (_0x55a492) try {
        _0x58868b = JSON.parse(this.getdata(_0x53645a));
      } catch {}
      return _0x58868b;
    }
    ["setjson"](_0x465a52, _0x559f4b) {
      try {
        return this.setdata(JSON.stringify(_0x465a52), _0x559f4b);
      } catch {
        return !1;
      }
    }
    ["getScript"](_0x2a1374) {
      return new Promise(_0x1a11eb => {
        this.get({
          "url": _0x2a1374
        }, (_0x400790, _0x43f56b, _0x175515) => _0x1a11eb(_0x175515));
      });
    }
    ["runScript"](_0xb05645, _0xe4e6fc) {
      return new Promise(_0x56594f => {
        let _0x3a8358 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x3a8358 = _0x3a8358 ? _0x3a8358.replace(/\n/g, "").trim() : _0x3a8358;
        let _0x15e145 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x15e145 = _0x15e145 ? 1 * _0x15e145 : 20;
        _0x15e145 = _0xe4e6fc && _0xe4e6fc.timeout ? _0xe4e6fc.timeout : _0x15e145;
        const [_0x4e8f26, _0x9c13d5] = _0x3a8358.split("@"),
          _0x349113 = {
            "url": "http://" + _0x9c13d5 + "/v1/scripting/evaluate",
            "body": {
              "script_text": _0xb05645,
              "mock_type": "cron",
              "timeout": _0x15e145
            },
            "headers": {
              "Accept": "*/*"
            }
          };
        this.post(_0x349113, (_0x2edbe9, _0x2b73b5, _0x21d70e) => _0x56594f(_0x21d70e));
      }).catch(_0x2117c3 => this.logErr(_0x2117c3));
    }
    ["loaddata"]() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x1995d4 = this.path.resolve(this.dataFile),
          _0x26170a = this.path.resolve(process.cwd(), this.dataFile),
          _0x13087e = this.fs.existsSync(_0x1995d4),
          _0x2248a8 = !_0x13087e && this.fs.existsSync(_0x26170a);
        if (!_0x13087e && !_0x2248a8) return {};
        {
          const _0x25b6a9 = _0x13087e ? _0x1995d4 : _0x26170a;
          try {
            return JSON.parse(this.fs.readFileSync(_0x25b6a9));
          } catch (_0xd4467b) {
            return {};
          }
        }
      }
    }
    ["writedata"]() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x40a22a = this.path.resolve(this.dataFile),
          _0x310701 = this.path.resolve(process.cwd(), this.dataFile),
          _0x499e00 = this.fs.existsSync(_0x40a22a),
          _0x4e242a = !_0x499e00 && this.fs.existsSync(_0x310701),
          _0x42bc99 = JSON.stringify(this.data);
        _0x499e00 ? this.fs.writeFileSync(_0x40a22a, _0x42bc99) : _0x4e242a ? this.fs.writeFileSync(_0x310701, _0x42bc99) : this.fs.writeFileSync(_0x40a22a, _0x42bc99);
      }
    }
    ["lodash_get"](_0xee3534, _0x3d4c0e, _0x4b0177) {
      const _0x2deeb8 = _0x3d4c0e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x529f15 = _0xee3534;
      for (const _0x44ea1e of _0x2deeb8) if (_0x529f15 = Object(_0x529f15)[_0x44ea1e], void 0 === _0x529f15) return _0x4b0177;
      return _0x529f15;
    }
    ["lodash_set"](_0x5614ba, _0x26f7ba, _0xe7f3ee) {
      return Object(_0x5614ba) !== _0x5614ba ? _0x5614ba : (Array.isArray(_0x26f7ba) || (_0x26f7ba = _0x26f7ba.toString().match(/[^.[\]]+/g) || []), _0x26f7ba.slice(0, -1).reduce((_0x3a20a9, _0x1e594f, _0x10016a) => Object(_0x3a20a9[_0x1e594f]) === _0x3a20a9[_0x1e594f] ? _0x3a20a9[_0x1e594f] : _0x3a20a9[_0x1e594f] = Math.abs(_0x26f7ba[_0x10016a + 1]) >> 0 == +_0x26f7ba[_0x10016a + 1] ? [] : {}, _0x5614ba)[_0x26f7ba[_0x26f7ba.length - 1]] = _0xe7f3ee, _0x5614ba);
    }
    ["getdata"](_0x42e1ec) {
      let _0x4674cb = this.getval(_0x42e1ec);
      if (/^@/.test(_0x42e1ec)) {
        const [, _0xa92423, _0x564ac9] = /^@(.*?)\.(.*?)$/.exec(_0x42e1ec),
          _0x306036 = _0xa92423 ? this.getval(_0xa92423) : "";
        if (_0x306036) try {
          const _0x5d322d = JSON.parse(_0x306036);
          _0x4674cb = _0x5d322d ? this.lodash_get(_0x5d322d, _0x564ac9, "") : _0x4674cb;
        } catch (_0x41d25e) {
          _0x4674cb = "";
        }
      }
      return _0x4674cb;
    }
    ["setdata"](_0x2424ac, _0x2d3a72) {
      let _0x49e812 = false;
      if (/^@/.test(_0x2d3a72)) {
        const [, _0x55e7d6, _0x4dd258] = /^@(.*?)\.(.*?)$/.exec(_0x2d3a72),
          _0x4a5675 = this.getval(_0x55e7d6),
          _0x3f0c05 = _0x55e7d6 ? "null" === _0x4a5675 ? null : _0x4a5675 || "{}" : "{}";
        try {
          const _0x4a04e7 = JSON.parse(_0x3f0c05);
          this.lodash_set(_0x4a04e7, _0x4dd258, _0x2424ac);
          _0x49e812 = this.setval(JSON.stringify(_0x4a04e7), _0x55e7d6);
        } catch (_0x4b4fa3) {
          const _0x13000e = {};
          this.lodash_set(_0x13000e, _0x4dd258, _0x2424ac);
          _0x49e812 = this.setval(JSON.stringify(_0x13000e), _0x55e7d6);
        }
      } else _0x49e812 = this.setval(_0x2424ac, _0x2d3a72);
      return _0x49e812;
    }
    ["getval"](_0x261275) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x261275) : this.isQuanX() ? $prefs.valueForKey(_0x261275) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x261275]) : this.data && this.data[_0x261275] || null;
    }
    ["setval"](_0x15bc93, _0x4035f3) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x15bc93, _0x4035f3) : this.isQuanX() ? $prefs.setValueForKey(_0x15bc93, _0x4035f3) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x4035f3] = _0x15bc93, this.writedata(), !0) : this.data && this.data[_0x4035f3] || null;
    }
    ["initGotEnv"](_0x371a50) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x371a50 && (_0x371a50.headers = _0x371a50.headers ? _0x371a50.headers : {}, void 0 === _0x371a50.headers.Cookie && void 0 === _0x371a50.cookieJar && (_0x371a50.cookieJar = this.ckjar));
    }
    ["get"](_0x569615, _0x535e6a = () => {}) {
      _0x569615.headers && (delete _0x569615.headers["Content-Type"], delete _0x569615.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x569615.headers = _0x569615.headers || {}, Object.assign(_0x569615.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(_0x569615, (_0x1fd21b, _0x2e3587, _0x3115e6) => {
        !_0x1fd21b && _0x2e3587 && (_0x2e3587.body = _0x3115e6, _0x2e3587.statusCode = _0x2e3587.status);
        _0x535e6a(_0x1fd21b, _0x2e3587, _0x3115e6);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x569615.opts = _0x569615.opts || {}, Object.assign(_0x569615.opts, {
        "hints": !1
      })), $task.fetch(_0x569615).then(_0x4d3d93 => {
        const {
          statusCode: _0x31137c,
          statusCode: _0xb999b0,
          headers: _0x15c496,
          body: _0x32f298
        } = _0x4d3d93;
        _0x535e6a(null, {
          "status": _0x31137c,
          "statusCode": _0xb999b0,
          "headers": _0x15c496,
          "body": _0x32f298
        }, _0x32f298);
      }, _0x1bc53a => _0x535e6a(_0x1bc53a))) : this.isNode() && (this.initGotEnv(_0x569615), this.got(_0x569615).on("redirect", (_0x2dfca8, _0x5e0c18) => {
        try {
          if (_0x2dfca8.headers["set-cookie"]) {
            const _0x50f0e5 = _0x2dfca8.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x50f0e5 && this.ckjar.setCookieSync(_0x50f0e5, null);
            _0x5e0c18.cookieJar = this.ckjar;
          }
        } catch (_0xb1c310) {
          this.logErr(_0xb1c310);
        }
      }).then(_0x2bd2a2 => {
        const {
          statusCode: _0x266caa,
          statusCode: _0x43ed56,
          headers: _0x2abb6c,
          body: _0x6e85f3
        } = _0x2bd2a2;
        _0x535e6a(null, {
          "status": _0x266caa,
          "statusCode": _0x43ed56,
          "headers": _0x2abb6c,
          "body": _0x6e85f3
        }, _0x6e85f3);
      }, _0x4e1f73 => {
        const {
          message: _0x382249,
          response: _0xb85cba
        } = _0x4e1f73;
        _0x535e6a(_0x382249, _0xb85cba, _0xb85cba && _0xb85cba.body);
      }));
    }
    ["post"](_0x16eb21, _0x1c4e41 = () => {}) {
      if (_0x16eb21.body && _0x16eb21.headers && !_0x16eb21.headers["Content-Type"] && (_0x16eb21.headers["Content-Type"] = "application/json;charset=utf-8"), _0x16eb21.headers && delete _0x16eb21.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (_0x16eb21.headers = _0x16eb21.headers || {}, Object.assign(_0x16eb21.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(_0x16eb21, (_0x48cfab, _0x1cabdb, _0x2a6a84) => {
        !_0x48cfab && _0x1cabdb && (_0x1cabdb.body = _0x2a6a84, _0x1cabdb.statusCode = _0x1cabdb.status);
        _0x1c4e41(_0x48cfab, _0x1cabdb, _0x2a6a84);
      });else {
        if (this.isQuanX()) _0x16eb21.method = "POST", this.isNeedRewrite && (_0x16eb21.opts = _0x16eb21.opts || {}, Object.assign(_0x16eb21.opts, {
          "hints": !1
        })), $task.fetch(_0x16eb21).then(_0x3d0b7f => {
          const {
            statusCode: _0x69cca8,
            statusCode: _0x426b42,
            headers: _0x56fffa,
            body: _0x44fc08
          } = _0x3d0b7f;
          _0x1c4e41(null, {
            "status": _0x69cca8,
            "statusCode": _0x426b42,
            "headers": _0x56fffa,
            "body": _0x44fc08
          }, _0x44fc08);
        }, _0x5bb65c => _0x1c4e41(_0x5bb65c));else {
          if (this.isNode()) {
            this.initGotEnv(_0x16eb21);
            const {
              url: _0x5ef433,
              ..._0x5f1a5a
            } = _0x16eb21;
            this.got.post(_0x5ef433, _0x5f1a5a).then(_0x2ead61 => {
              const {
                statusCode: _0x5d1b40,
                statusCode: _0x5be152,
                headers: _0x1908fc,
                body: _0x2b905f
              } = _0x2ead61;
              _0x1c4e41(null, {
                "status": _0x5d1b40,
                "statusCode": _0x5be152,
                "headers": _0x1908fc,
                "body": _0x2b905f
              }, _0x2b905f);
            }, _0x1ff7dc => {
              const {
                message: _0x5de212,
                response: _0x32641f
              } = _0x1ff7dc;
              _0x1c4e41(_0x5de212, _0x32641f, _0x32641f && _0x32641f.body);
            });
          }
        }
      }
    }
    ["time"](_0x487382, _0x4ba6ec = null) {
      const _0x5870df = _0x4ba6ec ? new Date(_0x4ba6ec) : new Date();
      let _0x3036b1 = {
        "M+": _0x5870df.getMonth() + 1,
        "d+": _0x5870df.getDate(),
        "H+": _0x5870df.getHours(),
        "m+": _0x5870df.getMinutes(),
        "s+": _0x5870df.getSeconds(),
        "q+": Math.floor((_0x5870df.getMonth() + 3) / 3),
        "S": _0x5870df.getMilliseconds()
      };
      /(y+)/.test(_0x487382) && (_0x487382 = _0x487382.replace(RegExp.$1, (_0x5870df.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x2ee3e0 in _0x3036b1) new RegExp("(" + _0x2ee3e0 + ")").test(_0x487382) && (_0x487382 = _0x487382.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x3036b1[_0x2ee3e0] : ("00" + _0x3036b1[_0x2ee3e0]).substr(("" + _0x3036b1[_0x2ee3e0]).length)));
      return _0x487382;
    }
    ["msg"](_0xfef3c0 = _0xe4a965, _0x2ebaae = "", _0x49fb56 = "", _0x4c2250) {
      const _0x2d3fb9 = _0xf2b496 => {
        if (!_0xf2b496) return _0xf2b496;
        if ("string" == typeof _0xf2b496) return this.isLoon() ? _0xf2b496 : this.isQuanX() ? {
          "open-url": _0xf2b496
        } : this.isSurge() ? {
          "url": _0xf2b496
        } : void 0;
        if ("object" == typeof _0xf2b496) {
          if (this.isLoon()) {
            let _0x5a41ea = _0xf2b496.openUrl || _0xf2b496.url || _0xf2b496["open-url"],
              _0x1f09f4 = _0xf2b496.mediaUrl || _0xf2b496["media-url"];
            return {
              "openUrl": _0x5a41ea,
              "mediaUrl": _0x1f09f4
            };
          }
          if (this.isQuanX()) {
            let _0x3f337f = _0xf2b496["open-url"] || _0xf2b496.url || _0xf2b496.openUrl,
              _0x41b4c8 = _0xf2b496["media-url"] || _0xf2b496.mediaUrl;
            return {
              "open-url": _0x3f337f,
              "media-url": _0x41b4c8
            };
          }
          if (this.isSurge()) {
            let _0x41978f = _0xf2b496.url || _0xf2b496.openUrl || _0xf2b496["open-url"];
            return {
              "url": _0x41978f
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0xfef3c0, _0x2ebaae, _0x49fb56, _0x2d3fb9(_0x4c2250)) : this.isQuanX() && $notify(_0xfef3c0, _0x2ebaae, _0x49fb56, _0x2d3fb9(_0x4c2250))), !this.isMuteLog) {
        let _0x20523d = ["", "==============📣系统通知📣=============="];
        _0x20523d.push(_0xfef3c0);
        _0x2ebaae && _0x20523d.push(_0x2ebaae);
        _0x49fb56 && _0x20523d.push(_0x49fb56);
        console.log(_0x20523d.join("\n"));
        this.logs = this.logs.concat(_0x20523d);
      }
    }
    ["log"](..._0x4229f9) {
      _0x4229f9.length > 0 && (this.logs = [...this.logs, ..._0x4229f9]);
      console.log(_0x4229f9.join(this.logSeparator));
    }
    ["logErr"](_0x55dfdd, _0xe0f9bf) {
      const _0x4aee12 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x4aee12 ? this.log("", "❗️" + this.name + ", 错误!", _0x55dfdd.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x55dfdd);
    }
    ["wait"](_0x38ed9e) {
      return new Promise(_0x4987e0 => setTimeout(_0x4987e0, _0x38ed9e));
    }
    ["done"](_0x3d06bb = {}) {
      const _0x186c73 = new Date().getTime(),
        _0x41c4ef = (_0x186c73 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x41c4ef + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x3d06bb);
    }
  }(_0xe4a965, _0x33d706);
}