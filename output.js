//Wed Sep 25 2024 08:36:06 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
/**
 * 品赞HTTP代理签到v1.2 
 * 20240923修复版 ArcadiaScriptPublic  频道：https://t.me/ArcadiaScript 群组：https://t.me/ArcadiaScriptPublic
 * const $ = new Env("品赞HTTP代理签到");
 * cron 0 0 * * 0  品赞HTTP代理签到.js
 * 注册地址：https://www.ipzan.com?pid=aguohteqg
 * 
 * ========= 青龙--配置文件 ===========
 * # 项目名称（两种配置二选一）
 * 推荐，token容易过期
 * export pzhttp='账号#密码'
 * 不推荐
 * export pzhttp='你抓包的token'

 * 自己抓包协议头上的Authorization

 * 多账号换行或&隔开

 * 奖励：每周签到得3金币，大概500个IP，可在免费使用代理IP用于其他项目
 * 
 * ====================================
 *   
 */

const _0xf1ea8 = new _0x299988("\u54C1\u8D5EHTTP\u7B7E\u5230");
let _0x34f238 = "pzhttp",
  _0x44155b = ["\n", "&"],
  _0xa2efe3 = (_0xf1ea8["isNode"]() ? process["env"][_0x34f238] : _0xf1ea8["getdata"](_0x34f238)) || "",
  _0xd941b5 = [],
  _0x8a72a2 = 0;
class _0x138232 {
  constructor(_0x47b6dc) {
    this["index"] = ++_0x8a72a2;
    this["points"] = 0;
    this["valid"] = ![];
    _0x47b6dc?.["includes"]("#") ? [this["account"], this["password"]] = _0x47b6dc?.["split"]("#") : this["activedAuthToken"] = _0x47b6dc;
  }
  async ["taskApi"](_0x453da5, _0x37d6bc, _0x417c3c, _0x5ccb37) {
    let _0x201de3 = null;
    try {
      let _0x563d61 = _0x417c3c["replace"]("//", "/")["split"]("/")[1],
        _0x3e8db7 = {
          "url": _0x417c3c,
          "headers": {
            "Accept": "application/json, text/plain, */*",
            "Accept-Language": "zh-CN,zh;q=0.9",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
            "Host": _0x563d61,
            "Connection": "Keep-Alive",
            "Origin": "https://kip.ipzan.com",
            "Authorization": "Bearer " + this["activedAuthToken"],
            "Referer": "https://kip.ipzan.com/",
            "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
            "Content-Type": "application/json"
          },
          "timeout": 60000
        };
      _0x5ccb37 && (_0x3e8db7["body"] = _0x5ccb37, _0x3e8db7["headers"]["Content-Length"] = _0x5ccb37?.["length"]);
      await _0x58c2e5(_0x37d6bc, _0x3e8db7)["then"](async _0x50d9f2 => {
        if (_0x50d9f2["resp"]?.["statusCode"] == 200) _0x50d9f2["resp"]?.["body"] ? _0x201de3 = JSON["parse"](_0x50d9f2["resp"]["body"]) : console["log"]("\u8D26\u53F7[" + this["index"] + "]\u8C03\u7528" + _0x37d6bc + "[" + _0x453da5 + "]\u51FA\u9519\uFF0C\u8FD4\u56DE\u4E3A\u7A7A");else {
          console["log"]("\u8D26\u53F7[" + this["index"] + "]\u8C03\u7528" + _0x37d6bc + "[" + _0x453da5 + "]\u51FA\u9519\uFF0C\u8FD4\u56DE\u72B6\u6001\u7801[" + (_0x50d9f2["resp"]?.["statusCode"] || "") + "]");
        }
      });
    } catch (_0x1c250e) {
      console["log"](_0x1c250e);
    } finally {
      return Promise["resolve"](_0x201de3);
    }
  }
  async ["GetUserBalance"]() {
    try {
      let _0x4e581b = "GetUserBalance",
        _0x2ae1cd = "get",
        _0xbc0087 = "https://service.ipzan.com/home/userWallet-find",
        _0x3a6f9f = "";
      await this["taskApi"](_0x4e581b, _0x2ae1cd, _0xbc0087, _0x3a6f9f)["then"](async _0x374645 => {
        if (_0x374645["code"] === 0) {
          this["valid"] = !![], this["points"] = _0x374645["data"]["balance"], console["log"]("\u8D26\u53F7[" + this["index"] + "] \u5F53\u524D\u91D1\u5E01: " + this["points"]);
        } else {
          _0xf1ea8["logAndNotify"]("\u8D26\u53F7[" + this["index"] + "]\u67E5\u8BE2\u91D1\u5E01\u5931\u8D25\uFF0C\u53EF\u80FDToken\u65E0\u6548");
        }
      });
    } catch (_0x5fcfb3) {
      console["log"](_0x5fcfb3);
    } finally {
      return Promise["resolve"](1);
    }
  }
  async ["Login"]() {
    try {
      let _0x2a65ec = "Login",
        _0x415c80 = "post",
        _0x4fe5cd = "https://service.ipzan.com/users-login",
        _0x4247a3 = JSON["stringify"](_0x3771fa(this["account"], this["password"]));
      await this["taskApi"](_0x2a65ec, _0x415c80, _0x4fe5cd, _0x4247a3)["then"](async _0x590950 => {
        if (_0x590950["code"] === 0) {
          console["log"]("\u8D26\u53F7[" + this["index"] + "] \u767B\u5F55\u6210\u529F"), this["activedAuthToken"] = _0x590950?.["data"]["token"];
        } else {
          console["log"]("\u8D26\u53F7[" + this["index"] + "] \u767B\u5F55\u5931\u8D25\uFF1A" + _0x590950?.["message"]);
        }
      });
    } catch (_0x15b88b) {
      console["log"](_0x15b88b);
    } finally {
      return Promise["resolve"](1);
    }
  }
  async ["SignInDaily"]() {
    try {
      let _0x392c94 = "SignInDaily",
        _0x129be6 = "get",
        _0x286397 = "https://service.ipzan.com/home/userWallet-receive",
        _0x157252 = "";
      await this["taskApi"](_0x392c94, _0x129be6, _0x286397, _0x157252)["then"](async _0x49c74f => {
        if (_0x49c74f["code"] === 0) {
          console["log"]("\u8D26\u53F7[" + this["index"] + "] \u7B7E\u5230\u6210\u529F\uFF1A", _0x49c74f?.["data"]);
        } else console["log"]("\u8D26\u53F7[" + this["index"] + "] \u7B7E\u5230\u5931\u8D25\uFF1A" + _0x49c74f?.["message"]);
      });
    } catch (_0x5b1269) {
      console["log"](_0x5b1269);
    } finally {
      return Promise["resolve"](1);
    }
  }
  async ["doTask"]() {
    try {
      await _0x241982(1000);
      console["log"]("\n============= \u8D26\u53F7[" + this["index"] + "] \u5F00\u59CB\u7B7E\u5230=============");
      await this["SignInDaily"]();
    } catch (_0x18555c) {
      console["log"](_0x18555c);
    }
  }
}
!(async () => {
  if (typeof $request !== "undefined") {
    await _0x5e22b6();
  } else {
    if (!(await _0x76f888())) return;
    console["log"]("\n================ \u5F00\u59CB\u6267\u884C ================");
    for (let _0x18b00e of _0xd941b5) {
      console["log"]("----------- \u6267\u884C \u7B2C [" + _0x18b00e["index"] + "] \u4E2A\u8D26\u53F7 -----------");
      !_0x18b00e?.["activedAuthToken"] && (await _0x18b00e?.["Login"]());
      await _0x18b00e["GetUserBalance"]();
    }
    let _0x34b1de = _0xd941b5["filter"](_0x1056dd => _0x1056dd["valid"]);
    if (_0x34b1de["length"] > 0) {
      console["log"]("\n================ \u4EFB\u52A1\u961F\u5217\u6784\u5EFA\u5B8C\u6BD5 ================");
      for (let _0x4d8f52 of _0x34b1de) {
        console["log"]("----------- \u8D26\u53F7[" + _0x4d8f52["index"] + "] -----------");
        await _0x4d8f52["doTask"]();
      }
    } else console["log"]("\n================ \u672A\u68C0\u6D4B\u5230\u5E10\u53F7\uFF0C\u8BF7\u5148\u6CE8\u518C\uFF1Ahttps://www.ipzan.com?pid=aguohteqg 20240923 \u4FEE\u590D\u7248 ArcadiaScriptPublic  \u9891\u9053\uFF1Ahttps://t.me/ArcadiaScript \u7FA4\u7EC4\uFF1Ahttps://t.me/ArcadiaScriptPublic================");
    await _0xf1ea8["showmsg"]();
  }
})()["catch"](_0x22cd28 => console["log"](_0x22cd28))["finally"](() => _0xf1ea8["done"]());
function _0x416dc5(_0x24feca) {
  const _0x3d2294 = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  return _0x3d2294["test"](_0x24feca);
}
function _0xb417d8(_0x519d63 = !![]) {
  const _0x281eb2 = _0x519d63 ? "1.1.1.1" : "0.0.0.0",
    _0x4dde34 = _0x519d63 ? "223.255.255.255" : "255.255.255.255",
    _0x561886 = _0x281eb2["split"](".")["map"](Number),
    _0x5cc3cd = _0x4dde34["split"](".")["map"](Number),
    _0x272770 = _0x561886["map"]((_0x38fbc5, _0x4d7b85) => {
      const _0x4cb228 = _0x5cc3cd[_0x4d7b85];
      return Math["floor"](Math["random"]() * (_0x4cb228 - _0x38fbc5 + 1)) + _0x38fbc5;
    });
  return _0x272770["join"](".");
}
function _0x157dd3(_0x45939e, _0xdf3fca, _0x1df466) {
  const _0x1eac3b = {};
  _0x1eac3b[_0xdf3fca] = _0x1df466;
  const _0x568cd1 = JSON["stringify"](_0x1eac3b);
  try {
    fs["writeFileSync"](_0x45939e + ".json", _0x568cd1);
  } catch (_0x3f407f) {
    _0x3f407f["code"] === "ENOENT" ? fs["writeFileSync"](_0x45939e + ".json", _0x568cd1) : console["error"]("\u4FDD\u5B58\u6587\u4EF6\u65F6\u53D1\u751F\u9519\u8BEF\uFF1A", _0x3f407f);
  }
}
function _0x35c695(_0x5e1184, _0x5b978) {
  try {
    const _0x2e83e6 = fs["readFileSync"](_0x5e1184 + ".json", "utf8"),
      _0x2d4f3a = JSON["parse"](_0x2e83e6);
    return _0x2d4f3a[_0x5b978];
  } catch (_0x5aa917) {
    if (_0x5aa917["code"] === "ENOENT") return undefined;else {
      console["error"]("\u8BFB\u53D6\u6587\u4EF6\u65F6\u53D1\u751F\u9519\u8BEF\uFF1A", _0x5aa917);
    }
  }
}
function _0x3771fa(_0x287c82, _0x52b8c2) {
  var _0x3f7edf = {
    "table": ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/"],
    "UTF16ToUTF8": function (_0x422438) {
      for (var _0x4d8ea5 = [], _0x63b243 = _0x422438["length"], _0xcaf628 = 0; _0xcaf628 < _0x63b243; _0xcaf628++) {
        var _0x1bfdf5,
          _0x387f8b,
          _0x41cff4 = _0x422438["charCodeAt"](_0xcaf628);
        0 < _0x41cff4 && _0x41cff4 <= 127 ? _0x4d8ea5["push"](_0x422438["charAt"](_0xcaf628)) : 128 <= _0x41cff4 && _0x41cff4 <= 2047 ? (_0x1bfdf5 = 192 | _0x41cff4 >> 6 & 31, _0x387f8b = 128 | 63 & _0x41cff4, _0x4d8ea5["push"](String["fromCharCode"](_0x1bfdf5), String["fromCharCode"](_0x387f8b))) : 2048 <= _0x41cff4 && _0x41cff4 <= 65535 && (_0x1bfdf5 = 224 | _0x41cff4 >> 12 & 15, _0x387f8b = 128 | _0x41cff4 >> 6 & 63, _0x41cff4 = 128 | 63 & _0x41cff4, _0x4d8ea5["push"](String["fromCharCode"](_0x1bfdf5), String["fromCharCode"](_0x387f8b), String["fromCharCode"](_0x41cff4)));
      }
      return _0x4d8ea5["join"]("");
    },
    "UTF8ToUTF16": function (_0x20af00) {
      for (var _0x58da14 = [], _0x2030c7 = _0x20af00["length"], _0x2a3a19 = 0, _0x2a3a19 = 0; _0x2a3a19 < _0x2030c7; _0x2a3a19++) {
        var _0x21f8a6,
          _0x336025,
          _0x4ad7ac = _0x20af00["charCodeAt"](_0x2a3a19);
        0 == (_0x4ad7ac >> 7 & 255) ? _0x58da14["push"](_0x20af00["charAt"](_0x2a3a19)) : 6 == (_0x4ad7ac >> 5 & 255) ? (_0x336025 = (31 & _0x4ad7ac) << 6 | 63 & (_0x21f8a6 = _0x20af00["charCodeAt"](++_0x2a3a19)), _0x58da14["push"](Sting["fromCharCode"](_0x336025))) : 14 == (_0x4ad7ac >> 4 & 255) && (_0x336025 = (255 & (_0x4ad7ac << 4 | (_0x21f8a6 = _0x20af00["charCodeAt"](++_0x2a3a19)) >> 2 & 15)) << 8 | ((3 & _0x21f8a6) << 6 | 63 & _0x20af00["charCodeAt"](++_0x2a3a19)), _0x58da14["push"](String["fromCharCode"](_0x336025)));
      }
      return _0x58da14["join"]("");
    },
    "encode": function (_0xfaca45) {
      if (!_0xfaca45) return "";
      for (var _0x2c45db = this["UTF16ToUTF8"](_0xfaca45), _0x3672be = 0, _0x4be34f = _0x2c45db["length"], _0x68124c = []; _0x3672be < _0x4be34f;) {
        var _0x33bedd = 255 & _0x2c45db["charCodeAt"](_0x3672be++);
        if (_0x68124c["push"](this["table"][_0x33bedd >> 2]), _0x3672be == _0x4be34f) {
          _0x68124c["push"](this["table"][(3 & _0x33bedd) << 4]);
          _0x68124c["push"]("==");
          break;
        }
        var _0x3ee960 = _0x2c45db["charCodeAt"](_0x3672be++);
        if (_0x3672be == _0x4be34f) {
          _0x68124c["push"](this["table"][(3 & _0x33bedd) << 4 | _0x3ee960 >> 4 & 15]);
          _0x68124c["push"](this["table"][(15 & _0x3ee960) << 2]);
          _0x68124c["push"]("=");
          break;
        }
        var _0x139d15 = _0x2c45db["charCodeAt"](_0x3672be++);
        _0x68124c["push"](this["table"][(3 & _0x33bedd) << 4 | _0x3ee960 >> 4 & 15]);
        _0x68124c["push"](this["table"][(15 & _0x3ee960) << 2 | (192 & _0x139d15) >> 6]);
        _0x68124c["push"](this["table"][63 & _0x139d15]);
      }
      return _0x68124c["join"]("");
    },
    "decode": function (_0x34913f) {
      if (!_0x34913f) return "";
      for (var _0x58a61c = _0x34913f["length"], _0x4a0858 = 0, _0x4e498e = []; _0x4a0858 < _0x58a61c;) code1 = this["table"]["indexOf"](_0x34913f["charAt"](_0x4a0858++)), code2 = this["table"]["indexOf"](_0x34913f["charAt"](_0x4a0858++)), code3 = this["table"]["indexOf"](_0x34913f["charAt"](_0x4a0858++)), code4 = this["table"]["indexOf"](_0x34913f["charAt"](_0x4a0858++)), c1 = code1 << 2 | code2 >> 4, _0x4e498e["push"](String["fromCharCode"](c1)), -1 != code3 && (c2 = (15 & code2) << 4 | code3 >> 2, _0x4e498e["push"](String["fromCharCode"](c2))), -1 != code4 && (c3 = (3 & code3) << 6 | code4, _0x4e498e["push"](String["fromCharCode"](c3)));
      return this["UTF8ToUTF16"](_0x4e498e["join"](""));
    }
  };
  function _0xd162ff(_0x212742, _0x5472ca) {
    for (var _0x32176b = _0x3f7edf["encode"](""["concat"](_0x212742, "QWERIPZAN1290QWER")["concat"](_0x5472ca)), _0x30789f = "", _0x515503 = 0; _0x515503 < 80; _0x515503++) _0x30789f += Math["random"]()["toString"](16)["slice"](2);
    return _0x32176b = ""["concat"](_0x30789f["slice"](0, 100))["concat"](_0x32176b["slice"](0, 8))["concat"](_0x30789f["slice"](100, 200))["concat"](_0x32176b["slice"](8, 20))["concat"](_0x30789f["slice"](200, 300))["concat"](_0x32176b["slice"](20))["concat"](_0x30789f["slice"](300, 400)), _0x32176b;
  }
  return {
    "account": _0xd162ff(_0x287c82, _0x52b8c2),
    "source": "ipzan-home-one"
  };
}
async function _0x241982(_0xd840dc = 3000) {
  return console["log"]("----------- \u5EF6\u8FDF " + _0xd840dc / 1000 + " s\uFF0C\u8BF7\u7A0D\u7B49 -----------"), await new Promise(_0x36ca3b => setTimeout(_0x36ca3b, _0xd840dc));
}
async function _0x5e22b6() {}
async function _0x76f888() {
  if (_0xa2efe3) {
    let _0x88d22d = _0x44155b[0];
    for (let _0x533ed5 of _0x44155b) {
      if (_0xa2efe3["indexOf"](_0x533ed5) > -1) {
        _0x88d22d = _0x533ed5;
        break;
      }
    }
    for (let _0x6ab3d9 of _0xa2efe3["split"](_0x88d22d)) {
      if (_0x6ab3d9) _0xd941b5["push"](new _0x138232(_0x6ab3d9));
    }
    userCount = _0xd941b5["length"];
  } else {
    console["log"]("\u8BF7\u5148\u6CE8\u518C\uFF1Ahttps://www.ipzan.com?pid=aguohteqg 20240923 \u4FEE\u590D\u7248 ArcadiaScriptPublic  \u9891\u9053\uFF1Ahttps://t.me/ArcadiaScript \u7FA4\u7EC4\uFF1Ahttps://t.me/ArcadiaScriptPublic================\u672A\u627E\u5230 \u914D\u7F6E\u4FE1\u606F\uFF0C\u8BF7\u68C0\u67E5\u662F\u5426\u914D\u7F6E \u53D8\u91CF\uFF1A", _0x34f238);
    return;
  }
  return console["log"]("\u5171\u627E\u5230" + userCount + "\u4E2A\u8D26\u53F7"), !![];
}
async function _0x58c2e5(_0x1096c4, _0x23b909) {
  return httpErr = null, httpReq = null, httpResp = null, new Promise(_0x5b67d7 => {
    _0xf1ea8["send"](_0x1096c4, _0x23b909, async (_0x42da53, _0x1cb6c2, _0x35862c) => {
      httpErr = _0x42da53;
      httpReq = _0x1cb6c2;
      httpResp = _0x35862c;
      _0x5b67d7({
        "err": _0x42da53,
        "req": _0x1cb6c2,
        "resp": _0x35862c
      });
    });
  });
}
function _0x299988(_0x5e68ae, _0x1b899c) {
  return "undefined" != typeof process && JSON["stringify"](process["env"])["indexOf"]("GITHUB") > -1 && process["exit"](0), new class {
    constructor(_0x5ef0ed, _0x5af996) {
      this["name"] = _0x5ef0ed;
      this["notifyStr"] = "";
      this["startTime"] = new Date()["getTime"]();
      Object["assign"](this, _0x5af996);
      console["log"](this["name"] + " \u5F00\u59CB\u8FD0\u884C\uFF1A\n");
    }
    ["isNode"]() {
      return "undefined" != typeof module && !!module["exports"];
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
    ["getdata"](_0x45d84e) {
      let _0x827e54 = this["getval"](_0x45d84e);
      if (/^@/["test"](_0x45d84e)) {
        const [, _0x21131d, _0xfeb65a] = /^@(.*?)\.(.*?)$/["exec"](_0x45d84e),
          _0x313afd = _0x21131d ? this["getval"](_0x21131d) : "";
        if (_0x313afd) try {
          const _0x4d0c4e = JSON["parse"](_0x313afd);
          _0x827e54 = _0x4d0c4e ? this["lodash_get"](_0x4d0c4e, _0xfeb65a, "") : _0x827e54;
        } catch (_0x18de0e) {
          _0x827e54 = "";
        }
      }
      return _0x827e54;
    }
    ["setdata"](_0x40d9c1, _0x436d71) {
      let _0x2fabb5 = ![];
      if (/^@/["test"](_0x436d71)) {
        const [, _0x3dcea9, _0x31540b] = /^@(.*?)\.(.*?)$/["exec"](_0x436d71),
          _0x2d5572 = this["getval"](_0x3dcea9),
          _0x3f5245 = _0x3dcea9 ? "null" === _0x2d5572 ? null : _0x2d5572 || "{}" : "{}";
        try {
          const _0x1f46c1 = JSON["parse"](_0x3f5245);
          this["lodash_set"](_0x1f46c1, _0x31540b, _0x40d9c1);
          _0x2fabb5 = this["setval"](JSON["stringify"](_0x1f46c1), _0x3dcea9);
        } catch (_0x34519b) {
          const _0x160106 = {};
          this["lodash_set"](_0x160106, _0x31540b, _0x40d9c1);
          _0x2fabb5 = this["setval"](JSON["stringify"](_0x160106), _0x3dcea9);
        }
      } else _0x2fabb5 = this["setval"](_0x40d9c1, _0x436d71);
      return _0x2fabb5;
    }
    ["getval"](_0x52870e) {
      return this["isSurge"]() || this["isLoon"]() ? $persistentStore["read"](_0x52870e) : this["isQuanX"]() ? $prefs["valueForKey"](_0x52870e) : this["isNode"]() ? (this["data"] = this["loaddata"](), this["data"][_0x52870e]) : this["data"] && this["data"][_0x52870e] || null;
    }
    ["setval"](_0x27c185, _0x5b7f41) {
      return this["isSurge"]() || this["isLoon"]() ? $persistentStore["write"](_0x27c185, _0x5b7f41) : this["isQuanX"]() ? $prefs["setValueForKey"](_0x27c185, _0x5b7f41) : this["isNode"]() ? (this["data"] = this["loaddata"](), this["data"][_0x5b7f41] = _0x27c185, this["writedata"](), !0) : this["data"] && this["data"][_0x5b7f41] || null;
    }
    ["send"](_0x6ab96, _0x518dfd, _0x5db0b6 = () => {}) {
      if (_0x6ab96 != "get" && _0x6ab96 != "post" && _0x6ab96 != "put" && _0x6ab96 != "delete") {
        console["log"]("\u65E0\u6548\u7684http\u65B9\u6CD5\uFF1A" + _0x6ab96);
        return;
      }
      if (_0x6ab96 == "get" && _0x518dfd["headers"]) delete _0x518dfd["headers"]["Content-Type"], delete _0x518dfd["headers"]["Content-Length"];else {
        if (_0x518dfd["body"] && _0x518dfd["headers"]) {
          if (!_0x518dfd["headers"]["Content-Type"]) _0x518dfd["headers"]["Content-Type"] = "application/x-www-form-urlencoded";
        }
      }
      if (this["isSurge"]() || this["isLoon"]()) {
        this["isSurge"]() && this["isNeedRewrite"] && (_0x518dfd["headers"] = _0x518dfd["headers"] || {}, Object["assign"](_0x518dfd["headers"], {
          "X-Surge-Skip-Scripting": !1
        }));
        let _0x4ac95c = {
          "method": _0x6ab96,
          "url": _0x518dfd["url"],
          "headers": _0x518dfd["headers"],
          "timeout": _0x518dfd["timeout"],
          "data": _0x518dfd["body"]
        };
        if (_0x6ab96 == "get") delete _0x4ac95c["data"];
        $axios(_0x4ac95c)["then"](_0xb09200 => {
          const {
            status: _0x38f4e5,
            request: _0x4e7008,
            headers: _0xbe0d20,
            data: _0x6e766b
          } = _0xb09200;
          _0x5db0b6(null, _0x4e7008, {
            "statusCode": _0x38f4e5,
            "headers": _0xbe0d20,
            "body": _0x6e766b
          });
        })["catch"](_0x3a0690 => console["log"](_0x3a0690));
      } else {
        if (this["isQuanX"]()) {
          _0x518dfd["method"] = _0x6ab96["toUpperCase"]();
          this["isNeedRewrite"] && (_0x518dfd["opts"] = _0x518dfd["opts"] || {}, Object["assign"](_0x518dfd["opts"], {
            "hints": !1
          }));
          $task["fetch"](_0x518dfd)["then"](_0x358dc0 => {
            const {
              statusCode: _0x6a27b4,
              request: _0x433010,
              headers: _0x475448,
              body: _0x87c91a
            } = _0x358dc0;
            _0x5db0b6(null, _0x433010, {
              "statusCode": _0x6a27b4,
              "headers": _0x475448,
              "body": _0x87c91a
            });
          }, _0x3686ff => _0x5db0b6(_0x3686ff));
        } else {
          if (this["isNode"]()) {
            this["got"] = this["got"] ? this["got"] : require("got");
            const {
              url: _0x6b10a8,
              ..._0x5cc785
            } = _0x518dfd;
            this["instance"] = this["got"]["extend"]({
              "followRedirect": ![]
            });
            this["instance"][_0x6ab96](_0x6b10a8, _0x5cc785)["then"](_0x35f375 => {
              const {
                statusCode: _0xe561eb,
                request: _0x260333,
                headers: _0xe5a253,
                body: _0x314143
              } = _0x35f375;
              _0x5db0b6(null, _0x260333, {
                "statusCode": _0xe561eb,
                "headers": _0xe5a253,
                "body": _0x314143
              });
            }, _0xaa60c3 => {
              const {
                message: _0x595a08,
                request: _0x43f693,
                response: _0xdc86bb
              } = _0xaa60c3;
              _0x5db0b6(_0x595a08, _0x43f693, _0xdc86bb);
            });
          }
        }
      }
    }
    ["time"](_0x1b0eea, _0x411068 = null) {
      let _0x5df1d2 = _0x411068 ? new Date(_0x411068) : new Date(),
        _0x5ddfa6 = {
          "M+": _0x5df1d2["getMonth"]() + 1,
          "d+": _0x5df1d2["getDate"](),
          "h+": _0x5df1d2["getHours"](),
          "m+": _0x5df1d2["getMinutes"](),
          "s+": _0x5df1d2["getSeconds"](),
          "q+": Math["floor"]((_0x5df1d2["getMonth"]() + 3) / 3),
          "S": _0x5df1d2["getMilliseconds"]()
        };
      /(y+)/["test"](_0x1b0eea) && (_0x1b0eea = _0x1b0eea["replace"](RegExp["$1"], (_0x5df1d2["getFullYear"]() + "")["substr"](4 - RegExp["$1"]["length"])));
      for (let _0x2ac3f0 in _0x5ddfa6) new RegExp("(" + _0x2ac3f0 + ")")["test"](_0x1b0eea) && (_0x1b0eea = _0x1b0eea["replace"](RegExp["$1"], 1 == RegExp["$1"]["length"] ? _0x5ddfa6[_0x2ac3f0] : ("00" + _0x5ddfa6[_0x2ac3f0])["substr"](("" + _0x5ddfa6[_0x2ac3f0])["length"])));
      return _0x1b0eea;
    }
    async ["showmsg"]() {
      if (!this["notifyStr"]) return;
      let _0x188c37 = this["name"] + " \u8FD0\u884C\u901A\u77E5\n\n" + this["notifyStr"];
      if (_0xf1ea8["isNode"]()) {
        var _0xbee8c = require("./sendNotify");
        console["log"]("\n============== \u63A8\u9001 ==============");
        await _0xbee8c["sendNotify"](this["name"], _0x188c37);
      } else this["msg"](_0x188c37);
    }
    ["logAndNotify"](_0x34c28d) {
      console["log"](_0x34c28d);
      this["notifyStr"] += _0x34c28d;
      this["notifyStr"] += "\n";
    }
    ["logAndNotifyWithTime"](_0x5e241e) {
      let _0x264477 = "[" + this["time"]("hh:mm:ss.S") + "]" + _0x5e241e;
      console["log"](_0x264477);
      this["notifyStr"] += _0x264477;
      this["notifyStr"] += "\n";
    }
    ["logWithTime"](_0x254c42) {
      console["log"]("[" + this["time"]("hh:mm:ss.S") + "]" + _0x254c42);
    }
    ["msg"](_0x12675d = t, _0x5ba37a = "", _0x36e668 = "", _0x216bfd) {
      const _0x5ec5d7 = _0xbdbc36 => {
        if (!_0xbdbc36) return _0xbdbc36;
        if ("string" == typeof _0xbdbc36) return this["isLoon"]() ? _0xbdbc36 : this["isQuanX"]() ? {
          "open-url": _0xbdbc36
        } : this["isSurge"]() ? {
          "url": _0xbdbc36
        } : void 0;
        if ("object" == typeof _0xbdbc36) {
          if (this["isLoon"]()) {
            let _0x1a96a6 = _0xbdbc36["openUrl"] || _0xbdbc36["url"] || _0xbdbc36["open-url"],
              _0x40a058 = _0xbdbc36["mediaUrl"] || _0xbdbc36["media-url"];
            return {
              "openUrl": _0x1a96a6,
              "mediaUrl": _0x40a058
            };
          }
          if (this["isQuanX"]()) {
            let _0x2a7331 = _0xbdbc36["open-url"] || _0xbdbc36["url"] || _0xbdbc36["openUrl"],
              _0x3c4994 = _0xbdbc36["media-url"] || _0xbdbc36["mediaUrl"];
            return {
              "open-url": _0x2a7331,
              "media-url": _0x3c4994
            };
          }
          if (this["isSurge"]()) {
            let _0x3377ed = _0xbdbc36["url"] || _0xbdbc36["openUrl"] || _0xbdbc36["open-url"];
            return {
              "url": _0x3377ed
            };
          }
        }
      };
      this["isMute"] || (this["isSurge"]() || this["isLoon"]() ? $notification["post"](_0x12675d, _0x5ba37a, _0x36e668, _0x5ec5d7(_0x216bfd)) : this["isQuanX"]() && $notify(_0x12675d, _0x5ba37a, _0x36e668, _0x5ec5d7(_0x216bfd)));
      let _0x26331e = ["", "============== \u7CFB\u7EDF\u901A\u77E5 =============="];
      _0x26331e["push"](_0x12675d);
      _0x5ba37a && _0x26331e["push"](_0x5ba37a);
      _0x36e668 && _0x26331e["push"](_0x36e668);
      console["log"](_0x26331e["join"]("\n"));
    }
    ["getMin"](_0x262f3d, _0x395a2a) {
      return _0x262f3d < _0x395a2a ? _0x262f3d : _0x395a2a;
    }
    ["getMax"](_0xdcbf8b, _0x164d4a) {
      return _0xdcbf8b < _0x164d4a ? _0x164d4a : _0xdcbf8b;
    }
    ["padStr"](_0x4eff9f, _0x2414b3, _0x4dea6b = "0") {
      let _0x36df73 = String(_0x4eff9f),
        _0x21dd99 = _0x2414b3 > _0x36df73["length"] ? _0x2414b3 - _0x36df73["length"] : 0,
        _0xb18f2c = "";
      for (let _0x3eb8e7 = 0; _0x3eb8e7 < _0x21dd99; _0x3eb8e7++) {
        _0xb18f2c += _0x4dea6b;
      }
      return _0xb18f2c += _0x36df73, _0xb18f2c;
    }
    ["json2str"](_0xe5632d, _0x3c2d8c, _0x56076b = ![]) {
      let _0x4dbbc3 = [];
      for (let _0x18a786 of Object["keys"](_0xe5632d)["sort"]()) {
        let _0x6905f9 = _0xe5632d[_0x18a786];
        if (_0x6905f9 && _0x56076b) _0x6905f9 = encodeURIComponent(_0x6905f9);
        _0x4dbbc3["push"](_0x18a786 + "=" + _0x6905f9);
      }
      return _0x4dbbc3["join"](_0x3c2d8c);
    }
    ["str2json"](_0x27e2e8, _0x5f22d9 = ![]) {
      let _0x1c7c1e = {};
      for (let _0x58aad9 of _0x27e2e8["split"]("&")) {
        if (!_0x58aad9) continue;
        let _0x4b0ec0 = _0x58aad9["indexOf"]("=");
        if (_0x4b0ec0 == -1) continue;
        let _0x2a8313 = _0x58aad9["substr"](0, _0x4b0ec0),
          _0x2f5548 = _0x58aad9["substr"](_0x4b0ec0 + 1);
        if (_0x5f22d9) _0x2f5548 = decodeURIComponent(_0x2f5548);
        _0x1c7c1e[_0x2a8313] = _0x2f5548;
      }
      return _0x1c7c1e;
    }
    ["randomString"](_0x2240a9, _0x490a68 = "abcdef0123456789") {
      let _0x1efc0f = "";
      for (let _0x5296c0 = 0; _0x5296c0 < _0x2240a9; _0x5296c0++) {
        _0x1efc0f += _0x490a68["charAt"](Math["floor"](Math["random"]() * _0x490a68["length"]));
      }
      return _0x1efc0f;
    }
    ["randomList"](_0x33e515) {
      let _0x487377 = Math["floor"](Math["random"]() * _0x33e515["length"]);
      return _0x33e515[_0x487377];
    }
    ["wait"](_0x929715) {
      return new Promise(_0x3c0f7f => setTimeout(_0x3c0f7f, _0x929715));
    }
    ["done"](_0x44fded = {}) {
      const _0x5ad9c5 = new Date()["getTime"](),
        _0xe663a = (_0x5ad9c5 - this["startTime"]) / 1000;
      console["log"]("\n" + this["name"] + " \u8FD0\u884C\u7ED3\u675F\uFF0C\u5171\u8FD0\u884C\u4E86 " + _0xe663a + " \u79D2\uFF01");
      if (this["isSurge"]() || this["isQuanX"]() || this["isLoon"]()) $done(_0x44fded);
    }
  }(_0x5e68ae, _0x1b899c);
}