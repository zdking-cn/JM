//Tue Dec 03 2024 08:38:31 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function () {
  process.env.NODE_OPTIONS = "--max-old-space-size=4096 --openssl-legacy-provider";
  process.env.NODE_OPTIONS += " --tls-cipher-list=DEFAULT@SECLEVEL=0";
  const {
    DOMParser: _0x5904d7
  } = require("xmldom");
  delete __filename;
  delete __dirname;
  var _0x76e90b = new _0x5904d7({
    "locator": {},
    "errorHandler": {
      "warning": function (_0xf85c30) {},
      "error": function (_0x24b518) {},
      "fatalError": function (_0x4de8f8) {}
    }
  });
  const _0x18f850 = _0x1ea0c2("电信营业厅"),
    _0x5391a9 = require("got"),
    _0x572832 = require("path"),
    {
      exec: _0x3b7a7d
    } = require("child_process"),
    _0x3c2399 = require("fs"),
    _0x120ca9 = require("crypto-js"),
    _0x37ace6 = "chinaTelecom",
    _0x11185c = /[\n\&\@]/,
    _0x57676f = [_0x37ace6 + "Account"],
    _0x2de762 = 30000,
    _0x438ae8 = 3,
    _0x445414 = _0x37ace6 + "Rpc",
    _0x28303b = process.env[_0x445414],
    _0x5dc8d2 = 6.02,
    _0x1f2fb9 = "chinaTelecom",
    _0x49a5ad = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
    _0x19a65e = "JinDouMall";
  let _0x1a24bb = {};
  const _0x7d33ac = "./chinaTelecom_cache.json",
    _0x3a56a9 = "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1",
    _0x400e16 = "34d7cb0bcdf07523",
    _0xa00d80 = "1234567`90koiuyhgtfrdews",
    _0xbc0a8e = "\0\0\0\0\0\0\0\0",
    _0x405b17 = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBkLT15ThVgz6/NOl6s8GNPofdWzWbCkWnkaAm7O2LjkM1H7dMvzkiqdxU02jamGRHLX/ZNMCXHnPcW/sDhiFCBN18qFvy8g6VYb9QtroI09e176s+ZCtiv7hbin2cCTj99iUpnEloZm19lwHyo69u5UMiPMpq0/XKBO8lYhN/gwIDAQAB",
    _0x11efb7 = "-----BEGIN PUBLIC KEY-----\n" + _0x405b17 + "\n-----END PUBLIC KEY-----",
    _0x2f5d3a = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+ugG5A8cZ3FqUKDwM57GM4io6JGcStivT8UdGt67PEOihLZTw3P7371+N47PrmsCpnTRzbTgcupKtUv8ImZalYk65dU8rjC/ridwhw9ffW2LBwvkEnDkkKKRi2liWIItDftJVBiWOh17o6gfbPoNrWORcAdcbpk2L+udld5kZNwIDAQAB",
    _0x224ba9 = "-----BEGIN PUBLIC KEY-----\n" + _0x2f5d3a + "\n-----END PUBLIC KEY-----",
    _0x432ca6 = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDIPOHtjs6p4sTlpFvrx+ESsYkEvyT4JB/dcEbU6C8+yclpcmWEvwZFymqlKQq89laSH4IxUsPJHKIOiYAMzNibhED1swzecH5XLKEAJclopJqoO95o8W63Euq6K+AKMzyZt1SEqtZ0mXsN8UPnuN/5aoB3kbPLYpfEwBbhto6yrwIDAQAB",
    _0x57ce4a = "-----BEGIN PUBLIC KEY-----\n" + _0x432ca6 + "\n-----END PUBLIC KEY-----",
    _0x30ee11 = require("node-rsa");
  let _0x271acc = new _0x30ee11(_0x11efb7);
  const _0x2a9ea7 = {
    "encryptionScheme": "pkcs1"
  };
  _0x271acc.setOptions(_0x2a9ea7);
  let _0x4bac0d = new _0x30ee11(_0x224ba9);
  const _0x59ec46 = {
    "encryptionScheme": "pkcs1"
  };
  _0x4bac0d.setOptions(_0x59ec46);
  let _0x30942d = new _0x30ee11(_0x57ce4a);
  const _0x17383d = {
    "encryptionScheme": "pkcs1"
  };
  _0x30942d.setOptions(_0x17383d);
  const _0x2a9cd3 = [202201, 202202, 202203],
    _0x31852c = 5;
  function _0x17bc67(_0x2792c9, _0xacb534, _0x3615f9, _0x5883a5, _0x2daf98, _0x5f1c59) {
    return _0x120ca9[_0x2792c9].encrypt(_0x120ca9.enc.Utf8.parse(_0x5883a5), _0x120ca9.enc.Utf8.parse(_0x2daf98), {
      "mode": _0x120ca9.mode[_0xacb534],
      "padding": _0x120ca9.pad[_0x3615f9],
      "iv": _0x120ca9.enc.Utf8.parse(_0x5f1c59)
    }).ciphertext.toString(_0x120ca9.enc.Hex);
  }
  function _0x3da5ba(_0x66e7ca, _0x4968c4, _0xfd302b, _0x7294c3, _0x26760e, _0x19c2d8) {
    return _0x120ca9[_0x66e7ca].decrypt({
      "ciphertext": _0x120ca9.enc.Hex.parse(_0x7294c3)
    }, _0x120ca9.enc.Utf8.parse(_0x26760e), {
      "mode": _0x120ca9.mode[_0x4968c4],
      "padding": _0x120ca9.pad[_0xfd302b],
      "iv": _0x120ca9.enc.Utf8.parse(_0x19c2d8)
    }).toString(_0x120ca9.enc.Utf8);
  }
  function _0x52d011() {
    try {
      _0x3c2399.writeFileSync(_0x7d33ac, JSON.stringify(_0x1a24bb, null, 4), "utf-8");
    } catch (_0x206a1a) {
      console.log("保存缓存出错");
    }
  }
  function _0x43855a() {
    try {
      _0x1a24bb = JSON.parse(_0x3c2399.readFileSync(_0x7d33ac, "utf-8"));
    } catch (_0x42c7ad) {
      console.log("读取缓存出错, 新建一个token缓存");
      _0x52d011();
    }
  }
  let _0x2c5597 = 0,
    _0x52f61c = 0;
  function _0x508a25() {
    _0x52f61c = 1;
    process.on("SIGTERM", () => {
      _0x52f61c = 2;
      process.exit(0);
    });
    const _0x63974c = _0x572832.basename(process.argv[1]),
      _0x43ce1f = ["bash", "timeout", "grep"];
    let _0x30b7bc = ["ps afx"];
    _0x30b7bc.push("grep " + _0x63974c);
    _0x30b7bc = _0x30b7bc.concat(_0x43ce1f.map(_0x14eef0 => "grep -v \"" + _0x14eef0 + " \""));
    _0x30b7bc.push("wc -l");
    const _0x4c5da2 = _0x30b7bc.join("|"),
      _0x474bf5 = () => {
        _0x3b7a7d(_0x4c5da2, (_0x4aa822, _0x376101, _0x12b348) => {
          if (_0x4aa822 || _0x12b348) return;
          _0x2c5597 = parseInt(_0x376101.trim(), 10);
        });
        if (_0x52f61c == 1) {
          setTimeout(_0x474bf5, 2000);
        }
      };
    _0x474bf5();
  }
  class _0x5b7804 {
    constructor() {
      this.index = _0x18f850.userIdx++;
      this.name = "";
      this.valid = false;
      const _0x548e1d = {
          "limit": 0
        },
        _0x4fedd7 = {
          "Connection": "keep-alive"
        },
        _0x5204fc = {
          "retry": _0x548e1d,
          "timeout": _0x2de762,
          "followRedirect": false,
          "ignoreInvalidCookies": true,
          "headers": _0x4fedd7
        };
      this.got = _0x5391a9.extend(_0x5204fc);
      _0x52f61c == 0 && _0x508a25();
    }
    ["log"](_0x3fa021, _0x1804ee = {}) {
      var _0x437287 = "",
        _0x511bc9 = _0x18f850.userCount.toString().length;
      this.index && (_0x437287 += "账号[" + _0x18f850.padStr(this.index, _0x511bc9) + "]");
      this.name && (_0x437287 += "[" + this.name.slice(0, 3) + "****" + this.name.slice(-4) + "]");
      _0x18f850.log(_0x437287 + _0x3fa021, _0x1804ee);
    }
    ["get_rscode"](_0x32d719, _0x514850, _0x1a9dfd, _0x191d6e) {
      let _0x3af41d = "\n    null_function = function () {}\n    content=\"" + _0x32d719 + "\";\n    tsID=\"" + _0x191d6e + "\"\n    delete __dirname \n    delete __filename \n    ActiveXObject = undefined;\n    \n    Window = null_function\n    window = self = parent = top = globalThis;\n    addEventListener = null_function\n    \n    attachEvent = null_function\n    navigator = {}\n    \n    HTMLCollection = []\n    HTMLCollection.length = 0\n    div = {\n        getElementsByTagName() {\n            return HTMLCollection\n        },\n        innerHTML: '',\n    \n    }\n    getAttribute = function () {\n        if (arguments[0] == 'r') {\n            return 'm'\n        }\n    }\n    meta = {\n        content: \"text/html; charset=utf-8\",\n        http_Equiv: \"Content-Type\",\n        id:tsID,\n        getAttribute: function (arg) {\n            if (arg === 'r') {\n                return 'm'\n            }\n        },\n        parentNode: {\n            removeChild: function () {}\n        }\n    }\n    getElementsByTagNameObj = {}\n    metav={\n        id:tsID,\n        content:content,\n        r:\"m\",\n        getAttribute: function (arg) {\n            if (arg === 'r') {\n                return 'm'\n            }\n        },\n        parentNode: {\n            removeChild: null_function\n        }\n    }\n    \n    documentElement = {\n        addEventListener: addEventListener\n    }\n    document = {\n        characterSet: 'UTF-8',\n        charset: 'UTF-8',\n        createElement() {\n            if (arguments[0] === 'div') {\n                return div\n            }\n            return {}\n        },\n        getElementsByTagName: function (arg) {\n            if (arg === 'script') {\n                return {}\n            }\n            if (arg === 'base') {\n                return {length: 0}\n            }\n        },\n        documentElement: documentElement,\n        addEventListener: addEventListener,\n        attachEvent: attachEvent,\n        getElementById: function () {\n            if (arguments[0] === tsID) {\n                return metav\n            }\n            if (arguments[0] == 'root-hammerhead-shadow-ui') {\n                return null\n            }\n            return {}\n        },\n        appendChild:null_function,\n        removeChild: null_function\n    }\n    location={\n        \"href\": \"https://\",\n        \"origin\": \"\",\n        \"protocol\": \"\",\n        \"host\": \"\",\n        \"hostname\": \"\",\n        \"port\": \"\",\n        \"pathname\": \"\",\n        \"search\": \"\",\n        \"hash\": \"\"\n    }\n    //setTimeout = null_function\n    setInterval = null_function\n    " + _0x514850 + "\n    " + _0x1a9dfd + "\n    function getck() {\n        return document.cookie\n    }\n    return {getck};\n    ";
      const _0x401bb1 = new Function(_0x3af41d),
        _0x32a236 = _0x401bb1(),
        _0x23c3ae = _0x32a236.getck();
      return this.rsFun = _0x401bb1, this.getrsCk = _0x23c3ae, _0x401bb1;
    }
    async ["parseCookies"](_0x46c6da, _0x489740) {
      let _0x243cd0 = {},
        _0x330151 = _0x46c6da.split(";");
      return _0x330151.forEach(_0x532659 => {
        _0x532659 = _0x532659.trim();
        if (_0x532659.includes("=")) {
          let [_0x54cba8, _0x47033e] = _0x532659.split("=", 2);
          !_0x54cba8.toLowerCase().includes("path") && !_0x54cba8.toLowerCase().includes("expires") && !_0x54cba8.toLowerCase().includes("secure") && !_0x54cba8.toLowerCase().includes("samesite") && (_0x243cd0[_0x54cba8] = _0x47033e);
        }
      }), _0x489740 && (_0x243cd0.yiUIIlbdQT3fO = _0x489740.split("=")[1]), _0x243cd0;
    }
    async ["request"](_0x548652) {
      let _0x11c190 = _0x548652?.["ckvalue"] || "";
      const _0xfaf55f = ["ECONNRESET", "EADDRINUSE", "ENOTFOUND", "EAI_AGAIN"],
        _0x45f212 = ["TimeoutError"],
        _0x3124d1 = ["EPROTO"],
        _0x2e93b0 = [];
      var _0x10826a = null,
        _0x3b1e85 = 0,
        _0x40a1dc = _0x548652.fn || _0x548652.url;
      let _0x8792fe = _0x18f850.get(_0x548652, "valid_code", _0x2e93b0);
      _0x548652.method = _0x548652?.["method"]?.["toUpperCase"]() || "GET";
      _0x548652?.["ckvalue"] && (_0x548652.headers = _0x548652?.["headers"] || {
        "Cookie": "yiUIIlbdQT3fP=" + (_0x11c190.yiUIIlbdQT3fP || "") + "; yiUIIlbdQT3fO=" + (_0x11c190.yiUIIlbdQT3fO || "")
      });
      let _0x19e5ad, _0x288a38;
      while (_0x3b1e85 < _0x438ae8) {
        try {
          _0x3b1e85++;
          _0x19e5ad = "";
          _0x288a38 = "";
          let _0x74f460 = null,
            _0x25e0ac = _0x548652?.["timeout"] || this.got?.["defaults"]?.["options"]?.["timeout"]?.["request"] || _0x2de762,
            _0x314fd6 = false,
            _0x5014ad = Math.max(this.index - 2, 0),
            _0x420841 = Math.min(Math.max(this.index - 3, 1), 3),
            _0x501d45 = Math.min(Math.max(this.index - 4, 1), 4),
            _0x43391a = _0x5014ad * _0x420841 * _0x501d45 * 400,
            _0x41e3ea = _0x5014ad * _0x420841 * _0x501d45 * 1800,
            _0x18cd04 = _0x43391a + Math.floor(Math.random() * _0x41e3ea),
            _0x1f85fd = _0x2c5597 * (_0x2c5597 - 1) * 2000,
            _0x3c6d56 = (_0x2c5597 - 1) * (_0x2c5597 - 1) * 2000,
            _0x30753f = _0x1f85fd + Math.floor(Math.random() * _0x3c6d56),
            _0xac7643 = Math.max(_0x18f850.userCount - 2, 0),
            _0x5df42a = Math.max(_0x18f850.userCount - 3, 0),
            _0xb2b9b4 = _0xac7643 * 200,
            _0x58c514 = _0x5df42a * 400,
            _0xf027f1 = _0xb2b9b4 + Math.floor(Math.random() * _0x58c514);
          await new Promise(async _0x2640a9 => {
            setTimeout(() => {
              _0x314fd6 = true;
              _0x2640a9();
            }, _0x25e0ac);
            let _0xf36715 = _0x2640a9?.["ckvalue"] || "";
            _0x548652?.["ckvalue"] && (_0x548652.headers = _0x548652?.["headers"] || {
              "Cookie": "yiUIIlbdQT3fP=" + (_0xf36715.yiUIIlbdQT3fP || "") + "; yiUIIlbdQT3fO=" + (_0xf36715.yiUIIlbdQT3fO || "")
            });
            try {
              const _0x46b688 = await this.got(_0x548652);
              _0x10826a = _0x46b688;
            } catch (_0xc5c11e) {
              if (_0xc5c11e.response?.["statusCode"] == 412) {
                const {
                    contentCODE: _0x25ddcc,
                    tsCODE: _0x5e3ea5,
                    srcAttribute: _0x2c6858,
                    tsID: _0x510e
                  } = _0x18f850.get(_0xc5c11e, "resoultCode", _0xc5c11e.response?.["statusCode"]),
                  _0x36d0e2 = {
                    "fn": "getrs",
                    "method": "get",
                    "url": "https://wapside.189.cn:9001" + _0x2c6858
                  };
                let {
                    result: _0x29a54e,
                    statusCode: _0x356a12
                  } = await this.request(_0x36d0e2),
                  _0x539464 = "";
                if (_0xc5c11e.response && _0xc5c11e.response.headers) {
                  const _0x5987fe = _0xc5c11e.response.headers["set-cookie"];
                  if (Array.isArray(_0x5987fe)) {
                    _0x539464 = _0x5987fe.map(_0x46ce0e => _0x46ce0e.split(";")[0]).join("; ");
                  }
                }
                this.get_rscode(_0x25ddcc, _0x5e3ea5, _0x29a54e, _0x510e);
                let _0x4ed019 = this.getrsCk;
                _0x4ed019 = this.rsFun().getck();
                _0xf36715 = await this.parseCookies(_0x4ed019, _0x539464);
                if (_0xf36715) {
                  _0x548652.headers = {
                    "Cookie": "yiUIIlbdQT3fP=" + (_0xf36715.yiUIIlbdQT3fP || "") + "; yiUIIlbdQT3fO=" + (_0xf36715.yiUIIlbdQT3fO || "")
                  };
                  try {
                    const _0x3a0305 = await this.got(_0x548652);
                    _0x10826a = _0x3a0305;
                  } catch (_0x46d197) {
                    _0x74f460 = _0x46d197;
                    _0x10826a = _0x46d197.response;
                    _0x19e5ad = _0x46d197.response?.["code"] || "";
                    _0x288a38 = _0x46d197.response?.["name"] || "";
                    console.log(_0x19e5ad, "Retry failed");
                  }
                }
              } else {
                _0x74f460 = _0xc5c11e;
                _0x10826a = _0xc5c11e.response;
                _0x19e5ad = _0xc5c11e.response?.["code"] || "";
                _0x288a38 = _0xc5c11e.response?.["name"] || "";
                console.log(_0x19e5ad, "检测到412,开始获取rscode");
              }
            }
            _0x2640a9();
          });
          if (_0x314fd6) this.log("[" + _0x40a1dc + "]请求超时(" + _0x25e0ac / 1000 + "秒)，重试第" + _0x3b1e85 + "次");else {
            if (_0x3124d1.includes(_0x19e5ad)) {
              this.log("[" + _0x40a1dc + "]请求错误[" + _0x19e5ad + "][" + _0x288a38 + "]");
              _0x74f460?.["message"] && console.log(_0x74f460.message);
              break;
            } else {
              if (_0x45f212.includes(_0x288a38)) this.log("[" + _0x40a1dc + "]请求错误[" + _0x19e5ad + "][" + _0x288a38 + "]，重试第" + _0x3b1e85 + "次");else {
                if (_0xfaf55f.includes(_0x19e5ad)) this.log("[" + _0x40a1dc + "]请求错误[" + _0x19e5ad + "][" + _0x288a38 + "]，重试第" + _0x3b1e85 + "次");else {
                  if (_0x10826a?.["statusCode"] == 412) break;
                  let _0xa59bec = _0x10826a?.["statusCode"] || "",
                    _0xcbdbd5 = _0xa59bec / 100 | 0;
                  if (_0xa59bec) {
                    _0xcbdbd5 > 3 && !_0x8792fe.includes(_0xa59bec) && (_0xa59bec ? this.log("请求[" + _0x40a1dc + "]返回[" + _0xa59bec + "]") : this.log("请求[" + _0x40a1dc + "]错误[" + _0x19e5ad + "][" + _0x288a38 + "]"));
                    if (_0xcbdbd5 <= 4) {
                      break;
                    }
                  } else this.log("请求[" + _0x40a1dc + "]错误[" + _0x19e5ad + "][" + _0x288a38 + "]");
                }
              }
            }
          }
        } catch (_0x44161c) {
          _0x44161c.name == "TimeoutError" ? this.log("[" + _0x40a1dc + "]请求超时，重试第" + _0x3b1e85 + "次") : this.log("[" + _0x40a1dc + "]请求错误(" + _0x44161c.message + ")，重试第" + _0x3b1e85 + "次");
        }
      }
      const _0xd4f050 = {
        "statusCode": _0x19e5ad || -1,
        "headers": null,
        "result": null
      };
      if (_0x10826a == null) return Promise.resolve(_0xd4f050);
      let {
        statusCode: _0x58c1ad,
        headers: _0x1e9567,
        body: _0x3d5d86
      } = _0x10826a;
      if (_0x3d5d86) {
        try {
          _0x3d5d86 = JSON.parse(_0x3d5d86);
        } catch {}
      }
      const _0x52b51a = {
        "statusCode": _0x58c1ad,
        "headers": _0x1e9567,
        "result": _0x3d5d86
      };
      return Promise.resolve(_0x52b51a);
    }
  }
  let _0x521761 = _0x5b7804;
  try {
    let _0x48662d = require("./LocalBasic");
    _0x521761 = _0x48662d;
  } catch {}
  let _0x188f85 = new _0x521761(_0x18f850);
  class _0x4b65d4 extends _0x521761 {
    constructor(_0x1f31b8) {
      super(_0x18f850);
      let _0x35e7b7 = _0x1f31b8.split("#");
      this.name = _0x35e7b7[0];
      this.passwd = _0x35e7b7?.[1] || "";
      this.uuid = [_0x18f850.randomPattern("xxxxxxxx"), _0x18f850.randomPattern("xxxx"), _0x18f850.randomPattern("4xxx"), _0x18f850.randomPattern("xxxx"), _0x18f850.randomPattern("xxxxxxxxxxxx")];
      this.can_feed = true;
      this.jml_tokenFlag = "";
      this.mall_token = "";
    }
    ["load_token"]() {
      let _0x194c80 = false;
      return _0x1a24bb[this.name] && (this.userId = _0x1a24bb[this.name].userId, this.token = _0x1a24bb[this.name].token, this.log("读取到缓存token"), _0x194c80 = true), _0x194c80;
    }
    ["encode_phone"]() {
      let _0x48d0b9 = this.name.split("");
      for (let _0x20da7d in _0x48d0b9) {
        _0x48d0b9[_0x20da7d] = String.fromCharCode(_0x48d0b9[_0x20da7d].charCodeAt(0) + 2);
      }
      return _0x48d0b9.join("");
    }
    ["encode_aes"](_0xc83597) {
      return _0x17bc67("AES", "ECB", "Pkcs7", _0xc83597, _0x400e16, 0);
    }
    ["get_mall_headers"]() {
      return {
        "Content-Type": "application/json;charset=utf-8",
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "Authorization": this.mall_token ? "Bearer " + this.mall_token : "",
        "X-Requested-With": "XMLHttpRequest"
      };
    }
    async ["rsCk"](_0x2394b2, _0x2daed4) {
      const _0x5db6eb = await rs(_0x2394b2, _0x2daed4);
      console.log(_0x5db6eb);
    }
    async ["login"](_0x35e545 = {}) {
      let _0x42b691 = false;
      try {
        let _0x1c31d0 = _0x18f850.time("yyyyMMddhhmmss"),
          _0x25d1e7 = "iPhone 14 15.4." + this.uuid.slice(0, 2).join("") + this.name + _0x1c31d0 + this.passwd + "0$$$0.",
          _0x5d1ea8 = {
            "fn": "login",
            "method": "post",
            "url": "https://appgologin.189.cn:9031/login/client/userLoginNormal",
            "json": {
              "headerInfos": {
                "code": "userLoginNormal",
                "timestamp": _0x1c31d0,
                "broadAccount": "",
                "broadToken": "",
                "clientType": "#9.6.1#channel50#iPhone 14 Pro Max#",
                "shopId": "20002",
                "source": "110003",
                "sourcePassword": "Sid98s",
                "token": "",
                "userLoginName": this.name
              },
              "content": {
                "attach": "test",
                "fieldData": {
                  "loginType": "4",
                  "accountType": "",
                  "loginAuthCipherAsymmertric": _0x271acc.encrypt(_0x25d1e7, "base64"),
                  "deviceUid": this.uuid.slice(0, 3).join(""),
                  "phoneNum": this.encode_phone(),
                  "isChinatelecom": "0",
                  "systemVersion": "15.4.0",
                  "authentication": this.passwd
                }
              }
            }
          },
          {
            result: _0x571163,
            statusCode: _0x31b897
          } = await this.request(_0x5d1ea8),
          _0xd8b9c7 = _0x18f850.get(_0x571163?.["responseData"], "resultCode", -1);
        if (_0xd8b9c7 == "0000") {
          let {
            userId = "",
            token = ""
          } = _0x571163?.["responseData"]?.["data"]?.["loginSuccessResult"] || {};
          this.userId = userId;
          this.token = token;
          this.log("使用服务密码登录成功");
          _0x1a24bb[this.name] = {
            "token": token,
            "userId": userId,
            "t": Date.now()
          };
          _0x52d011();
          _0x42b691 = true;
        } else {
          let _0x38d15f = _0x571163?.["msg"] || _0x571163?.["responseData"]?.["resultDesc"] || _0x571163?.["headerInfos"]?.["reason"] || "";
          this.log("服务密码登录失败[" + _0xd8b9c7 + "]: " + _0x38d15f);
        }
      } catch (_0x4cd51a) {
        console.log(_0x4cd51a);
      } finally {
        return _0x42b691;
      }
    }
    async ["get_ticket"](_0x567888 = {}) {
      let _0x4603ea = "";
      try {
        let _0x28c621 = "\n            <Request>\n                <HeaderInfos>\n                    <Code>getSingle</Code>\n                    <Timestamp>" + _0x18f850.time("yyyyMMddhhmmss") + "</Timestamp>\n                    <BroadAccount></BroadAccount>\n                    <BroadToken></BroadToken>\n                    <ClientType>#9.6.1#channel50#iPhone 14 Pro Max#</ClientType>\n                    <ShopId>20002</ShopId>\n                    <Source>110003</Source>\n                    <SourcePassword>Sid98s</SourcePassword>\n                    <Token>" + this.token + "</Token>\n                    <UserLoginName>" + this.name + "</UserLoginName>\n                </HeaderInfos>\n                <Content>\n                    <Attach>test</Attach>\n                    <FieldData>\n                        <TargetId>" + _0x17bc67("TripleDES", "CBC", "Pkcs7", this.userId, _0xa00d80, _0xbc0a8e) + "</TargetId>\n                        <Url>4a6862274835b451</Url>\n                    </FieldData>\n                </Content>\n            </Request>";
        const _0x133d26 = {
          "fn": "get_ticket",
          "method": "post",
          "url": "https://appgologin.189.cn:9031/map/clientXML",
          "body": _0x28c621
        };
        let {
          result: _0x4e75ca,
          statusCode: _0x55be78
        } = await this.request(_0x133d26);
        if (_0x4e75ca) {
          let _0x4fc07c = _0x4e75ca.match(/\<Ticket\>(\w+)\<\/Ticket\>/);
          if (_0x4fc07c) {
            let _0x2d15da = _0x4fc07c[1];
            _0x4603ea = _0x3da5ba("TripleDES", "CBC", "Pkcs7", _0x2d15da, _0xa00d80, _0xbc0a8e);
            this.ticket = _0x4603ea;
          }
        }
        !_0x4603ea && (!_0x567888.retry && (await this.login()) ? (_0x567888.retry = true, _0x4603ea = await this.get_ticket(_0x567888)) : (this.log("没有获取到ticket[" + _0x55be78 + "]: "), _0x4e75ca && this.log(": " + JSON.stringify(_0x4e75ca))));
      } catch (_0x1c24ae) {
        console.log(_0x1c24ae);
      } finally {
        return _0x4603ea;
      }
    }
    async ["get_sign"](_0x3663e8 = {}) {
      let _0x226274 = this.rsCkk,
        _0x59ded7 = this.getrsCk;
      _0x59ded7 = this.rsFun().getck();
      _0x59ded7 && _0x226274 && (_0x226274 = await this.parseCookies(_0x59ded7, _0x226274));
      let _0xb620bd = false;
      try {
        const _0x27e39c = {
            "ticket": this.ticket
          },
          _0x26186c = {
            "ckvalue": _0x226274,
            "fn": "login",
            "method": "get",
            "url": "https://wapside.189.cn:9001/jt-sign/ssoHomLogin",
            "searchParams": _0x27e39c
          };
        let {
            result: _0x47d211,
            statusCode: _0x579a9b
          } = await this.request(_0x26186c),
          _0x23cdca = _0x18f850.get(_0x47d211, "resoultCode", _0x579a9b);
        _0x23cdca == 0 ? (_0xb620bd = _0x47d211?.["sign"], this.sign = _0xb620bd, this.got = this.got.extend({
          "headers": {
            "sign": this.sign
          }
        })) : this.log("获取sign失败[" + _0x23cdca + "]: " + _0x47d211);
      } catch (_0x19a4e8) {
        console.log(_0x19a4e8);
      } finally {
        return _0xb620bd;
      }
    }
    async ["get_rsValue"](_0xb877f7 = {}) {
      let _0x893a68 = false;
      try {
        const _0x1997f0 = {
          "fn": "login",
          "method": "get",
          "url": _0xb877f7
        };
        let {
          result: _0x2d896e,
          statusCode: _0x74ee05,
          headers: _0x482f44
        } = await this.request(_0x1997f0);
        const {
            contentCODE: _0x94cf8a,
            tsCODE: _0x435a3d,
            srcAttribute: _0x5e94c0,
            tsID: _0x3bb6ac
          } = _0x18f850.get(_0x2d896e, "resoultCode", _0x74ee05),
          _0x247cb8 = {
            "fn": "getrs",
            "method": "get",
            "url": "https://wapside.189.cn:9001" + _0x5e94c0
          };
        let {
            result: _0x1e5802,
            statusCode: _0x1e3879
          } = await this.request(_0x247cb8),
          _0x3ec8f2 = "";
        if (_0x482f44 && _0x482f44["set-cookie"]) {
          const _0x302e92 = _0x482f44["set-cookie"];
          Array.isArray(_0x302e92) && (_0x3ec8f2 = _0x302e92.map(_0x276584 => _0x276584.split(";")[0]).join("; "));
        }
        this.get_rscode(_0x94cf8a, _0x435a3d, _0x1e5802, _0x3bb6ac);
        this.rsCkk = _0x3ec8f2;
      } catch (_0xe36e6c) {
        console.log(_0xe36e6c);
      } finally {
        return _0x893a68;
      }
    }
    async ["get_rs"](_0x523d0f = {}) {
      ck = await rs();
      console.log(ck);
    }
    ["encrypt_para"](_0x352d81) {
      let _0x586bb2 = typeof _0x352d81 == "string" ? _0x352d81 : JSON.stringify(_0x352d81);
      return _0x4bac0d.encrypt(_0x586bb2, "hex");
    }
    async ["userCoinInfo"](_0x11ec79 = false, _0x25ac3b = {}) {
      let _0x5165b3 = this.rsCkk,
        _0x5622ca = this.getrsCk;
      _0x5622ca = this.rsFun().getck();
      _0x5165b3 = await this.parseCookies(_0x5622ca, _0x5165b3);
      try {
        const _0x450a0e = {
          "phone": this.name
        };
        let _0x1b5d06 = {
            "ckvalue": _0x5165b3,
            "fn": "userCoinInfo",
            "method": "post",
            "url": "https://wapside.189.cn:9001/jt-sign/api/home/userCoinInfo",
            "json": {
              "para": this.encrypt_para(_0x450a0e)
            }
          },
          {
            result: _0x5e7b52,
            statusCode: _0x116fe8
          } = await this.request(_0x1b5d06),
          _0x200ef1 = _0x18f850.get(_0x5e7b52, "resoultCode", _0x116fe8);
        if (_0x200ef1 == 0) {
          this.coin = _0x5e7b52?.["totalCoin"] || 0;
          if (_0x11ec79) {
            const _0xecb916 = {
              "notify": true
            };
            this.log("金豆余额: " + this.coin, _0xecb916);
            if (_0x5e7b52.amountEx) {
              let _0x27f81a = _0x18f850.time("yyyy-MM-dd", _0x5e7b52.expireDate);
              const _0x3d76a4 = {
                "notify": true
              };
              _0x18f850.log("-- [" + _0x27f81a + "]将过期" + _0x5e7b52.amountEx + "金豆", _0x3d76a4);
            }
          }
        } else {
          let _0x1f0f96 = _0x5e7b52?.["msg"] || _0x5e7b52?.["resoultMsg"] || _0x5e7b52?.["error"] || "";
          this.log("查询账户金豆余额错误[" + _0x200ef1 + "]: " + _0x1f0f96);
        }
      } catch (_0x5a79ef) {
        console.log(_0x5a79ef);
      }
    }
    async ["userStatusInfo"](_0x11208d = {}) {
      let _0x764c1f = this.rsCkk,
        _0x1e40b0 = this.getrsCk;
      _0x1e40b0 = this.rsFun().getck();
      _0x764c1f = await this.parseCookies(_0x1e40b0, _0x764c1f);
      try {
        const _0x16b3fc = {
          "phone": this.name
        };
        let _0x22169d = {
          "ckvalue": _0x764c1f,
          "fn": "userStatusInfo",
          "method": "post",
          "url": "https://wapside.189.cn:9001/jt-sign/api/home/userStatusInfo",
          "json": {
            "para": this.encrypt_para(_0x16b3fc)
          }
        };
        {
          let {
              result: _0x2432a6,
              statusCode: _0x25860f
            } = await this.request(_0x18f850.copy(_0x22169d)),
            _0x5d330c = _0x18f850.get(_0x2432a6, "resoultCode", _0x25860f);
          if (_0x5d330c == 0) {
            let {
              isSign: _0x4cf7f6
            } = _0x2432a6?.["data"];
            _0x4cf7f6 ? this.log("今天已签到") : await this.doSign();
          } else {
            let _0x215596 = _0x2432a6?.["msg"] || _0x2432a6?.["resoultMsg"] || _0x2432a6?.["error"] || "";
            this.log("查询账户签到状态错误[" + _0x5d330c + "]: " + _0x215596);
          }
        }
        {
          let {
              result: _0x151842,
              statusCode: _0x4fa060
            } = await this.request(_0x18f850.copy(_0x22169d)),
            _0x50f5db = _0x18f850.get(_0x151842, "resoultCode", _0x4fa060);
          if (_0x50f5db == 0) {
            let {
              continuousDay: _0x291d48,
              signDay: _0xebc9f9,
              isSeven: _0xafe944
            } = _0x151842?.["data"];
            this.log("已签到" + _0xebc9f9 + "天, 连签" + _0x291d48 + "天");
            _0xafe944 && (await this.exchangePrize());
          } else {
            let _0x5ee1e6 = _0x151842?.["msg"] || _0x151842?.["resoultMsg"] || _0x151842?.["error"] || "";
            this.log("查询账户签到状态错误[" + _0x50f5db + "]: " + _0x5ee1e6);
          }
        }
      } catch (_0x240fa0) {
        console.log(_0x240fa0);
      }
    }
    async ["continueSignDays"](_0x5b704b = {}) {
      let _0x4d48c8 = this.rsCkk,
        _0x1d689a = this.getrsCk;
      _0x1d689a = this.rsFun().getck();
      _0x4d48c8 = await this.parseCookies(_0x1d689a, _0x4d48c8);
      try {
        const _0x56de81 = {
          "phone": this.name
        };
        let _0xee548d = {
            "ckvalue": _0x4d48c8,
            "fn": "continueSignDays",
            "method": "post",
            "url": "https://wapside.189.cn:9001/jt-sign/webSign/continueSignDays",
            "json": {
              "para": this.encrypt_para(_0x56de81)
            }
          },
          {
            result: _0x46f83c,
            statusCode: _0x3eb402
          } = await this.request(_0xee548d),
          _0x4c49fd = _0x18f850.get(_0x46f83c, "resoultCode", _0x3eb402);
        if (_0x4c49fd == 0) {
          this.log("抽奖连签天数: " + (_0x46f83c?.["continueSignDays"] || 0) + "天");
          if (_0x46f83c?.["continueSignDays"] == 15) {
            const _0xb3a3e3 = {
              "type": "15"
            };
            await this.exchangePrize(_0xb3a3e3);
          } else {
            if (_0x46f83c?.["continueSignDays"] == 28) {
              const _0x37d832 = {
                "type": "28"
              };
              await this.exchangePrize(_0x37d832);
            }
          }
        } else {
          let _0x90cd3d = _0x46f83c?.["msg"] || _0x46f83c?.["resoultMsg"] || _0x46f83c?.["error"] || "";
          this.log("查询抽奖连签天数错误[" + _0x4c49fd + "]: " + _0x90cd3d);
        }
      } catch (_0x3f6006) {
        console.log(_0x3f6006);
      }
    }
    async ["continueSignRecords"](_0x50d4b5 = {}) {
      let _0x47c021 = this.rsCkk,
        _0x884505 = this.getrsCk;
      _0x884505 = this.rsFun().getck();
      _0x47c021 = await this.parseCookies(_0x884505, _0x47c021);
      try {
        const _0xa6259e = {
          "phone": this.name
        };
        let _0x4f9d2a = {
            "ckvalue": _0x47c021,
            "fn": "continueSignRecords",
            "method": "post",
            "url": "https://wapside.189.cn:9001/jt-sign/webSign/continueSignRecords",
            "json": {
              "para": this.encrypt_para(_0xa6259e)
            }
          },
          {
            result: _0x3f90bb,
            statusCode: _0x17f6d4
          } = await this.request(_0x4f9d2a),
          _0x2b2938 = _0x18f850.get(_0x3f90bb, "resoultCode", _0x17f6d4);
        if (_0x2b2938 == 0) {
          if (_0x3f90bb?.["continue15List"]?.["length"]) {
            const _0x436ea3 = {
              "type": "15"
            };
            await this.exchangePrize(_0x436ea3);
          }
          if (_0x3f90bb?.["continue28List"]?.["length"]) {
            const _0x52003e = {
              "type": "28"
            };
            await this.exchangePrize(_0x52003e);
          }
        } else {
          let _0x1f4115 = _0x3f90bb?.["msg"] || _0x3f90bb?.["resoultMsg"] || _0x3f90bb?.["error"] || "";
          this.log("查询连签抽奖状态错误[" + _0x2b2938 + "]: " + _0x1f4115);
        }
      } catch (_0x1529b7) {
        console.log(_0x1529b7);
      }
    }
    async ["doSign"](_0x516190 = {}) {
      let _0x43ac33 = this.rsCkk,
        _0x44e6f7 = this.getrsCk;
      _0x44e6f7 = this.rsFun().getck();
      _0x43ac33 = await this.parseCookies(_0x44e6f7, _0x43ac33);
      try {
        let _0x5e9300 = {
            "phone": this.name,
            "date": Date.now(),
            "sysType": "20002"
          },
          _0x32fce5 = {
            "ckvalue": _0x43ac33,
            "fn": "doSign",
            "method": "post",
            "url": "https://wapside.189.cn:9001/jt-sign/webSign/sign",
            "json": {
              "encode": this.encode_aes(JSON.stringify(_0x5e9300))
            }
          },
          {
            result: _0x4cf5b2,
            statusCode: _0x83c142
          } = await this.request(_0x32fce5),
          _0x4ab363 = _0x18f850.get(_0x4cf5b2, "resoultCode", _0x83c142);
        if (_0x4ab363 == 0) {
          let _0x1d96c0 = _0x18f850.get(_0x4cf5b2?.["data"], "code", -1);
          if (_0x1d96c0 == 1) {
            const _0x33a03c = {
              "notify": true
            };
            this.log("签到成功，获得" + (_0x4cf5b2?.["data"]?.["coin"] || 0) + "金豆", _0x33a03c);
            await this.userStatusInfo();
          } else {
            const _0x702ec9 = {
              "notify": true
            };
            this.log("签到失败[" + _0x1d96c0 + "]: " + _0x4cf5b2.data.msg, _0x702ec9);
          }
        } else {
          let _0x324e19 = _0x4cf5b2?.["msg"] || _0x4cf5b2?.["resoultMsg"] || _0x4cf5b2?.["error"] || "";
          this.log("签到错误[" + _0x4ab363 + "]: " + _0x324e19);
        }
      } catch (_0x3e045d) {
        console.log(_0x3e045d);
      }
    }
    async ["exchangePrize"](_0x2021d2 = {}) {
      let _0x48f818 = this.rsCkk,
        _0x154110 = this.getrsCk;
      _0x154110 = this.rsFun().getck();
      _0x48f818 = await this.parseCookies(_0x154110, _0x48f818);
      try {
        let _0x6b0397 = _0x18f850.pop(_0x2021d2, "type", "7");
        const _0x5120eb = {
          "phone": this.name,
          "type": _0x6b0397
        };
        let _0x4990d8 = {
            "ckvalue": _0x48f818,
            "fn": "exchangePrize",
            "method": "post",
            "url": "https://wapside.189.cn:9001/jt-sign/webSign/exchangePrize",
            "json": {
              "para": this.encrypt_para(_0x5120eb)
            }
          },
          {
            result: _0x5bbe8e,
            statusCode: _0x1f22ac
          } = await this.request(_0x4990d8),
          _0x37750e = _0x18f850.get(_0x5bbe8e, "resoultCode", _0x1f22ac);
        if (_0x37750e == 0) {
          let _0x5444eb = _0x18f850.get(_0x5bbe8e?.["prizeDetail"], "code", -1);
          if (_0x5444eb == 0) {
            const _0x401d61 = {
              "notify": true
            };
            this.log("连签" + _0x6b0397 + "天抽奖: " + _0x5bbe8e?.["prizeDetail"]?.["biz"]?.["winTitle"], _0x401d61);
          } else {
            let _0x17c00e = _0x5bbe8e?.["prizeDetail"]?.["err"] || "";
            const _0x56067c = {
              "notify": true
            };
            this.log("连签" + _0x6b0397 + "天抽奖失败[" + _0x5444eb + "]: " + _0x17c00e, _0x56067c);
          }
        } else {
          let _0x29ef78 = _0x5bbe8e?.["msg"] || _0x5bbe8e?.["resoultMsg"] || _0x5bbe8e?.["error"] || "";
          this.log("连签" + _0x6b0397 + "天抽奖错误[" + _0x37750e + "]: " + _0x29ef78);
        }
      } catch (_0x55ddfe) {
        console.log(_0x55ddfe);
      }
    }
    async ["homepage"](_0x2c03f1, _0x370b96 = {}) {
      let _0x1e06d2 = this.rsCkk,
        _0x1921c6 = this.getrsCk;
      _0x1921c6 = this.rsFun().getck();
      _0x1e06d2 = await this.parseCookies(_0x1921c6, _0x1e06d2);
      try {
        const _0x3c6ca7 = {
          "phone": this.name,
          "shopId": "20001",
          "type": _0x2c03f1
        };
        let _0xfd7b05 = {
            "ckvalue": _0x1e06d2,
            "fn": "homepage",
            "method": "post",
            "url": "https://wapside.189.cn:9001/jt-sign/webSign/homepage",
            "json": {
              "para": this.encrypt_para(_0x3c6ca7)
            }
          },
          {
            result: _0x2238be,
            statusCode: _0x508014
          } = await this.request(_0xfd7b05),
          _0x373c08 = _0x18f850.get(_0x2238be, "resoultCode", _0x508014);
        if (_0x373c08 == 0) {
          let _0x26b296 = _0x18f850.get(_0x2238be?.["data"]?.["head"], "code", -1);
          if (_0x26b296 == 0) for (let _0x1f11b0 of _0x2238be?.["data"]?.["biz"]?.["adItems"] || []) {
            if (["0", "1"].includes(_0x1f11b0?.["taskState"])) switch (_0x1f11b0.contentOne) {
              case "3":
                {
                  _0x1f11b0?.["rewardId"] && (await this.receiveReward(_0x1f11b0));
                  break;
                }
              case "5":
                {
                  await this.openMsg(_0x1f11b0);
                  break;
                }
              case "6":
                {
                  await this.sharingGetGold();
                  break;
                }
              case "10":
              case "13":
                {
                  !this.xtoken && (await this.get_usercode());
                  this.xtoken && (await this.watchLiveInit());
                  break;
                }
              case "18":
                {
                  await this.polymerize(_0x1f11b0);
                  break;
                }
              default:
                {
                  break;
                }
            }
          } else {
            let _0x11dddd = _0x2238be?.["data"]?.["head"]?.["err"] || "";
            this.log("获取任务列表失败[" + _0x26b296 + "]: " + _0x11dddd);
          }
        } else {
          this.log("获取任务列表错误[" + _0x373c08 + "]");
        }
      } catch (_0x1bf2fe) {
        console.log(_0x1bf2fe);
      }
    }
    async ["receiveReward"](_0x30d320, _0x520abe = {}) {
      let _0x15bf22 = this.rsCkk,
        _0x22de72 = this.getrsCk;
      _0x22de72 = this.rsFun().getck();
      _0x15bf22 = await this.parseCookies(_0x22de72, _0x15bf22);
      try {
        let _0x1c5358 = _0x30d320?.["title"]?.["split"](" ")?.[0];
        const _0x3e9de6 = {
          "phone": this.name,
          "rewardId": _0x30d320?.["rewardId"] || ""
        };
        let _0x8ed7ca = {
            "ckvalue": _0x15bf22,
            "fn": "receiveReward",
            "method": "post",
            "url": "https://wapside.189.cn:9001/jt-sign/paradise/receiveReward",
            "json": {
              "para": this.encrypt_para(_0x3e9de6)
            }
          },
          {
            result: _0x36d854,
            statusCode: _0x517f2c
          } = await this.request(_0x8ed7ca),
          _0x453599 = _0x18f850.get(_0x36d854, "resoultCode", _0x517f2c);
        if (_0x453599 == 0) this.log("领取任务[" + _0x1c5358 + "]奖励成功: " + _0x36d854?.["resoultMsg"]);else {
          let _0x3077ea = _0x36d854?.["msg"] || _0x36d854?.["resoultMsg"] || _0x36d854?.["error"] || "";
          this.log("领取任务[" + _0x1c5358 + "]奖励错误[" + _0x453599 + "]: " + _0x3077ea);
        }
      } catch (_0x1c4ce2) {
        console.log(_0x1c4ce2);
      }
    }
    async ["openMsg"](_0x43c210, _0x58f2e6 = {}) {
      let _0x5e9ec9 = this.rsCkk,
        _0x2d5f46 = this.getrsCk;
      _0x2d5f46 = this.rsFun().getck();
      _0x5e9ec9 = await this.parseCookies(_0x2d5f46, _0x5e9ec9);
      try {
        let _0x36a94f = _0x43c210?.["title"]?.["split"](" ")?.[0];
        const _0x1e9bbe = {
          "phone": this.name
        };
        let _0x1ab9c2 = {
            "ckvalue": _0x5e9ec9,
            "fn": "openMsg",
            "method": "post",
            "url": "https://wapside.189.cn:9001/jt-sign/paradise/openMsg",
            "json": {
              "para": this.encrypt_para(_0x1e9bbe)
            }
          },
          {
            result: _0x38459f,
            statusCode: _0x34714a
          } = await this.request(_0x1ab9c2),
          _0x30091e = _0x18f850.get(_0x38459f, "resoultCode", _0x34714a);
        if (_0x30091e == 0) this.log("完成任务[" + _0x36a94f + "]成功: " + _0x38459f?.["resoultMsg"]);else {
          let _0x1520d8 = _0x38459f?.["msg"] || _0x38459f?.["resoultMsg"] || _0x38459f?.["error"] || "";
          this.log("完成任务[" + _0x36a94f + "]错误[" + _0x30091e + "]: " + _0x1520d8);
        }
      } catch (_0x14e80d) {
        console.log(_0x14e80d);
      }
    }
    async ["polymerize"](_0x5ad6c9, _0x10f1b1 = {}) {
      let _0x3e9e36 = this.rsCkk,
        _0x4fc857 = this.getrsCk;
      _0x4fc857 = this.rsFun().getck();
      _0x3e9e36 = await this.parseCookies(_0x4fc857, _0x3e9e36);
      try {
        let _0x1b394f = _0x5ad6c9?.["title"]?.["split"](" ")?.[0];
        const _0xff1e85 = {
          "phone": this.name,
          "jobId": _0x5ad6c9.taskId
        };
        let _0xdfd4ec = {
            "ckvalue": _0x3e9e36,
            "fn": "polymerize",
            "method": "post",
            "url": "https://wapside.189.cn:9001/jt-sign/webSign/polymerize",
            "json": {
              "para": this.encrypt_para(_0xff1e85)
            }
          },
          {
            result: _0x46a83d,
            statusCode: _0x21ac25
          } = await this.request(_0xdfd4ec),
          _0xf35e75 = _0x18f850.get(_0x46a83d, "resoultCode", _0x21ac25);
        if (_0xf35e75 == 0) this.log("完成任务[" + _0x1b394f + "]成功: " + _0x46a83d?.["resoultMsg"]);else {
          let _0x306e81 = _0x46a83d?.["msg"] || _0x46a83d?.["resoultMsg"] || _0x46a83d?.["error"] || "";
          this.log("完成任务[" + _0x1b394f + "]错误[" + _0xf35e75 + "]: " + _0x306e81);
        }
      } catch (_0x34f9e8) {
        console.log(_0x34f9e8);
      }
    }
    async ["food"](_0x4055c3, _0x555415 = {}) {
      let _0x380e95 = this.rsCkk,
        _0x3ec510 = this.getrsCk;
      _0x3ec510 = this.rsFun().getck();
      _0x380e95 = await this.parseCookies(_0x3ec510, _0x380e95);
      try {
        const _0x50fe6e = {
          "phone": this.name
        };
        let _0x41dc35 = {
            "ckvalue": _0x380e95,
            "fn": "food",
            "method": "post",
            "url": "https://wapside.189.cn:9001/jt-sign/paradise/food",
            "json": {
              "para": this.encrypt_para(_0x50fe6e)
            }
          },
          {
            result: _0x1879da,
            statusCode: _0x49bef9
          } = await this.request(_0x41dc35),
          _0x5537bb = _0x18f850.get(_0x1879da, "resoultCode", _0x49bef9);
        if (_0x5537bb == 0) {
          this.log("第" + _0x4055c3 + "次喂食: " + (_0x1879da?.["resoultMsg"] || "成功"));
          if (_0x1879da?.["levelUp"]) {
            let _0x5c11d1 = _0x1879da?.["currLevelRightList"][0]?.["level"];
            const _0x19424c = {
              "notify": true
            };
            this.log("宠物已升级到[LV." + _0x5c11d1 + "], 获得: " + _0x1879da?.["currLevelRightList"][0]?.["righstName"], _0x19424c);
          }
        } else {
          let _0x63af20 = _0x1879da?.["msg"] || _0x1879da?.["resoultMsg"] || _0x1879da?.["error"] || "";
          this.log("第" + _0x4055c3 + "次喂食失败[" + _0x5537bb + "]: " + _0x63af20);
          _0x63af20?.["includes"]("最大喂食次数") && (this.can_feed = false);
        }
      } catch (_0x1d87f5) {
        console.log(_0x1d87f5);
      }
    }
    async ["getParadiseInfo"](_0x5328f9 = {}) {
      let _0x4fbf55 = this.rsCkk,
        _0x92a5a1 = this.getrsCk;
      _0x92a5a1 = this.rsFun().getck();
      _0x4fbf55 = await this.parseCookies(_0x92a5a1, _0x4fbf55);
      try {
        const _0x1fbcf6 = {
          "phone": this.name
        };
        let _0x50d5d8 = {
          "ckvalue": _0x4fbf55,
          "fn": "getParadiseInfo",
          "method": "post",
          "url": "https://wapside.189.cn:9001/jt-sign/paradise/getParadiseInfo",
          "json": {
            "para": this.encrypt_para(_0x1fbcf6)
          }
        };
        {
          let {
              result: _0x3e024a,
              statusCode: _0x153077
            } = await this.request(_0x50d5d8),
            _0x309075 = _0x18f850.get(_0x3e024a, "resoultCode", _0x153077);
          if (_0x309075 == 0) {
            let _0x319591 = _0x3e024a?.["userInfo"]?.["levelInfoMap"];
            this.level = _0x319591?.["level"];
            for (let _0x287a16 = 1; _0x287a16 <= 10 && this.can_feed; _0x287a16++) {
              await this.food(_0x287a16);
            }
          } else {
            let _0x48339b = _0x3e024a?.["msg"] || _0x3e024a?.["resoultMsg"] || _0x3e024a?.["error"] || "";
            this.log("查询宠物等级失败[" + _0x309075 + "]: " + _0x48339b);
            return;
          }
        }
        {
          _0x4fbf55 = this.rsCkk;
          _0x92a5a1 = this.getrsCk;
          _0x92a5a1 = this.rsFun().getck();
          _0x4fbf55 = await this.parseCookies(_0x92a5a1, _0x4fbf55);
          let _0x452619 = {
              "ckvalue": _0x4fbf55,
              "fn": "getParadiseInfo",
              "method": "post",
              "url": "https://wapside.189.cn:9001/jt-sign/paradise/getParadiseInfo",
              "json": {
                "para": this.encrypt_para(_0x1fbcf6)
              }
            },
            {
              result: _0x54c3f4,
              statusCode: _0x4a3faa
            } = await this.request(_0x452619),
            _0x334a8c = _0x18f850.get(_0x54c3f4, "resoultCode", _0x4a3faa);
          if (_0x334a8c == 0) {
            let _0x331e1c = _0x54c3f4?.["userInfo"]?.["levelInfoMap"];
            this.level = _0x331e1c?.["level"];
            const _0x4230d0 = {
              "notify": true
            };
            this.log("宠物等级[Lv." + _0x331e1c?.["level"] + "], 升级进度: " + _0x331e1c?.["growthValue"] + "/" + _0x331e1c?.["fullGrowthCoinValue"], _0x4230d0);
          } else {
            let _0x491e51 = _0x54c3f4?.["msg"] || _0x54c3f4?.["resoultMsg"] || _0x54c3f4?.["error"] || "";
            this.log("查询宠物等级失败[" + _0x334a8c + "]: " + _0x491e51);
            return;
          }
        }
      } catch (_0x22aa85) {
        console.log(_0x22aa85);
      }
    }
    async ["getLevelRightsList"](_0x4734c4 = {}) {
      let _0x2c6ca1 = this.rsCkk,
        _0x167e78 = this.getrsCk;
      _0x167e78 = this.rsFun().getck();
      _0x2c6ca1 = await this.parseCookies(_0x167e78, _0x2c6ca1);
      try {
        const _0xc564d6 = {
          "phone": this.name
        };
        let _0x1cafc3 = {
            "ckvalue": _0x2c6ca1,
            "fn": "getLevelRightsList",
            "method": "post",
            "url": "https://wapside.189.cn:9001/jt-sign/paradise/getLevelRightsList",
            "json": {
              "para": this.encrypt_para(_0xc564d6)
            }
          },
          {
            result: _0x13ee92,
            statusCode: _0x128986
          } = await this.request(_0x1cafc3);
        if (_0x13ee92?.["currentLevel"]) {
          let _0x2dcd7f = _0x13ee92?.["currentLevel"] || 6,
            _0x214aaa = false,
            _0x405af7 = "V" + _0x2dcd7f;
          for (let _0x45482a of _0x13ee92[_0x405af7] || []) {
            let _0x8ba7ac = _0x45482a?.["righstName"] || "";
            if (this.coin < _0x45482a.costCoin) {
              continue;
            }
            (_0x8ba7ac?.["match"](/\d+元话费/) || _0x8ba7ac?.["match"](/专享\d+金豆/)) && (await this.getConversionRights(_0x45482a, _0x214aaa)) && (_0x214aaa = true);
          }
        } else {
          let _0x2bdd8d = _0x13ee92?.["msg"] || _0x13ee92?.["resoultMsg"] || _0x13ee92?.["error"] || "";
          this.log("查询宠物兑换权益失败: " + _0x2bdd8d);
        }
      } catch (_0x49a2f7) {
        console.log(_0x49a2f7);
      }
    }
    async ["getConversionRights"](_0x7cde09, _0x52ba4c, _0x32ed89 = {}) {
      let _0x1dd44c = this.rsCkk,
        _0x385783 = this.getrsCk;
      _0x385783 = this.rsFun().getck();
      _0x1dd44c = await this.parseCookies(_0x385783, _0x1dd44c);
      let _0x46917c = false;
      try {
        let _0x103638 = _0x7cde09?.["righstName"] || "";
        const _0x33ff2e = {
          "phone": this.name,
          "rightsId": _0x7cde09.id,
          "receiveCount": _0x7cde09.receiveType
        };
        let _0xa4d0d9 = {
            "ckvalue": _0x1dd44c,
            "fn": "getConversionRights",
            "method": "post",
            "url": "https://wapside.189.cn:9001/jt-sign/paradise/getConversionRights",
            "json": {
              "para": this.encrypt_para(_0x33ff2e)
            }
          },
          {
            result: _0x4403bb,
            statusCode: _0x443303
          } = await this.request(_0xa4d0d9),
          _0x5c4808 = _0x18f850.get(_0x4403bb, "code", _0x18f850.get(_0x4403bb, "resoultCode", _0x443303));
        if (_0x5c4808 == 200) {
          !(_0x4403bb?.["rightsStatus"]?.["includes"]("已兑换") || _0x4403bb?.["rightsStatus"]?.["includes"]("已领取")) && (_0x46917c = true, _0x52ba4c && (await _0x18f850.wait(3000)), await this.conversionRights(_0x7cde09));
        } else {
          let _0x231545 = _0x4403bb?.["msg"] || _0x4403bb?.["resoultMsg"] || _0x4403bb?.["error"] || "";
          this.log("查询权益[" + _0x103638 + "]失败[" + _0x5c4808 + "]: " + _0x231545);
        }
      } catch (_0x1eb681) {
        console.log(_0x1eb681);
      } finally {
        return _0x46917c;
      }
    }
    async ["conversionRights"](_0x4330bf, _0x48e9b8 = {}) {
      let _0x29973c = this.rsCkk,
        _0x1dbae3 = this.getrsCk;
      _0x1dbae3 = this.rsFun().getck();
      _0x29973c = await this.parseCookies(_0x1dbae3, _0x29973c);
      try {
        let _0x4bd5c0 = _0x4330bf?.["righstName"] || "";
        const _0xacd566 = {
          "phone": this.name,
          "rightsId": _0x4330bf.id
        };
        let _0x4e0b0c = {
            "ckvalue": _0x29973c,
            "fn": "conversionRights",
            "method": "post",
            "url": "https://wapside.189.cn:9001/jt-sign/paradise/conversionRights",
            "json": {
              "para": this.encrypt_para(_0xacd566)
            }
          },
          {
            result: _0x7749ed,
            statusCode: _0x41204c
          } = await this.request(_0x4e0b0c),
          _0x2d7274 = _0x18f850.get(_0x7749ed, "resoultCode", _0x41204c);
        if (_0x2d7274 == 0) this.log("兑换权益[" + _0x4bd5c0 + "]成功");else {
          let _0x2ebc4a = _0x7749ed?.["msg"] || _0x7749ed?.["resoultMsg"] || _0x7749ed?.["error"] || "";
          this.log("兑换权益[" + _0x4bd5c0 + "]失败[" + _0x2d7274 + "]: " + _0x2ebc4a);
        }
      } catch (_0x116eb6) {
        console.log(_0x116eb6);
      }
    }
    async ["get_usercode"](_0xad816f = {}) {
      let _0x1f1e8d = this.rsCkk,
        _0x23256c = this.getrsCk;
      _0x23256c = this.rsFun().getck();
      _0x1f1e8d = await this.parseCookies(_0x23256c, _0x1f1e8d);
      try {
        const _0x4cb167 = {
          "ckvalue": _0x1f1e8d,
          "fn": "get_usercode",
          "method": "get",
          "url": "https://xbk.189.cn/xbkapi/api/auth/jump",
          "searchParams": {}
        };
        _0x4cb167.searchParams.userID = this.ticket;
        _0x4cb167.searchParams.version = "9.3.3";
        _0x4cb167.searchParams.type = "room";
        _0x4cb167.searchParams.l = "renwu";
        let {
            statusCode: _0x5cfcdd,
            headers: _0x3a493a
          } = await this.request(_0x4cb167),
          _0x5f3e47 = _0x3a493a?.["location"]?.["match"](/usercode=(\w+)/);
        _0x5f3e47 ? await this.codeToken(_0x5f3e47[1]) : this.log("获取code失败[" + _0x5cfcdd + "]");
      } catch (_0x436eb8) {
        console.log(_0x436eb8);
      }
    }
    async ["codeToken"](_0x3614a3, _0x23caa7 = {}) {
      let _0x4fb30a = this.rsCkk,
        _0x283a20 = this.getrsCk;
      _0x283a20 = this.rsFun().getck();
      _0x4fb30a = await this.parseCookies(_0x283a20, _0x4fb30a);
      try {
        const _0x3a9999 = {
            "usercode": _0x3614a3
          },
          _0x149f77 = {
            "ckvalue": _0x4fb30a,
            "fn": "codeToken",
            "method": "post",
            "url": "https://xbk.189.cn/xbkapi/api/auth/userinfo/codeToken",
            "json": _0x3a9999
          };
        let {
            result: _0xc9eaaa,
            statusCode: _0x2ddb2b
          } = await this.request(_0x149f77),
          _0x2a0c34 = _0x18f850.get(_0xc9eaaa, "code", -1);
        if (_0x2a0c34 == 0) this.xtoken = _0xc9eaaa?.["data"]?.["token"], this.got = this.got.extend({
          "headers": {
            "Authorization": "Bearer " + _0x30942d.encrypt(this.xtoken, "base64")
          }
        });else {
          let _0x307945 = _0xc9eaaa?.["msg"] || _0xc9eaaa?.["resoultMsg"] || _0xc9eaaa?.["error"] || _0xc9eaaa?.["msg"] || "";
          this.log("获取token失败[" + _0x2a0c34 + "]: " + _0x307945);
        }
      } catch (_0x1abf66) {
        console.log(_0x1abf66);
      }
    }
    async ["watchLiveInit"](_0x1d6431 = {}) {
      let _0x3742ea = this.rsCkk,
        _0x54ad34 = this.getrsCk;
      _0x54ad34 = this.rsFun().getck();
      _0x3742ea = await this.parseCookies(_0x54ad34, _0x3742ea);
      try {
        let _0x5d8b29 = Math.floor(Math.random() * 1000) + 1000;
        const _0x2ea141 = {
            "period": 1,
            "liveId": _0x5d8b29
          },
          _0x5a2169 = {
            "ckvalue": _0x3742ea,
            "fn": "watchLiveInit",
            "method": "post",
            "url": "https://xbk.189.cn/xbkapi/lteration/liveTask/index/watchLiveInit",
            "json": _0x2ea141
          };
        let {
            result: _0x56be14,
            statusCode: _0x116bf7
          } = await this.request(_0x5a2169),
          _0xcb83d1 = _0x18f850.get(_0x56be14, "code", -1);
        if (_0xcb83d1 == 0) {
          await _0x18f850.wait(15000);
          await this.watchLive(_0x5d8b29, _0x56be14?.["data"]);
        } else {
          let _0x2c00c9 = _0x56be14?.["msg"] || _0x56be14?.["resoultMsg"] || _0x56be14?.["error"] || _0x56be14?.["msg"] || "";
          this.log("开始观看直播[" + _0x5d8b29 + "]失败[" + _0xcb83d1 + "]: " + _0x2c00c9);
        }
      } catch (_0x3e4c7a) {
        console.log(_0x3e4c7a);
      }
    }
    async ["watchLive"](_0x3442e2, _0x56ddcc, _0x3737c7 = {}) {
      let _0x8c4775 = this.rsCkk,
        _0x1c5500 = this.getrsCk;
      _0x1c5500 = this.rsFun().getck();
      _0x8c4775 = await this.parseCookies(_0x1c5500, _0x8c4775);
      try {
        const _0x5e97ec = {
            "period": 1,
            "liveId": _0x3442e2,
            "key": _0x56ddcc
          },
          _0x40ec9a = {
            "ckvalue": _0x8c4775,
            "fn": "watchLive",
            "method": "post",
            "url": "https://xbk.189.cn/xbkapi/lteration/liveTask/index/watchLive",
            "json": _0x5e97ec
          };
        let {
            result: _0x40784c,
            statusCode: _0x586f90
          } = await this.request(_0x40ec9a),
          _0xf96c9f = _0x18f850.get(_0x40784c, "code", -1);
        if (_0xf96c9f == 0) this.log("观看直播[" + _0x3442e2 + "]成功"), await this.watchLiveInit();else {
          let _0x417299 = _0x40784c?.["msg"] || _0x40784c?.["resoultMsg"] || _0x40784c?.["error"] || _0x40784c?.["msg"] || "";
          this.log("观看直播[" + _0x3442e2 + "]失败[" + _0xf96c9f + "]: " + _0x417299);
        }
      } catch (_0x17f001) {
        console.log(_0x17f001);
      }
    }
    async ["watchVideo"](_0x187b30, _0x83f15e = {}) {
      let _0x3ce413 = this.rsCkk,
        _0x46ab2a = this.getrsCk;
      _0x46ab2a = this.rsFun().getck();
      _0x3ce413 = await this.parseCookies(_0x46ab2a, _0x3ce413);
      try {
        const _0x725d07 = {
            "articleId": _0x187b30
          },
          _0x529cba = {
            "ckvalue": _0x3ce413,
            "fn": "watchVideo",
            "method": "post",
            "url": "https://xbk.189.cn/xbkapi/lteration/liveTask/index/watchVideo",
            "json": _0x725d07
          };
        let {
            result: _0x33d548,
            statusCode: _0x50aba7
          } = await this.request(_0x529cba),
          _0x2b39d7 = _0x18f850.get(_0x33d548, "code", -1);
        if (_0x2b39d7 == 0) this.log("观看短视频[" + _0x187b30 + "]成功");else {
          let _0x39475f = _0x33d548?.["msg"] || _0x33d548?.["resoultMsg"] || _0x33d548?.["error"] || _0x33d548?.["msg"] || "";
          this.log("观看短视频[" + _0x187b30 + "]失败[" + _0x2b39d7 + "]: " + _0x39475f);
        }
      } catch (_0x3c4619) {
        console.log(_0x3c4619);
      }
    }
    async ["like"](_0x81f111, _0x41049e = {}) {
      let _0x3a81ce = this.rsCkk,
        _0x3ec1d7 = this.getrsCk;
      _0x3ec1d7 = this.rsFun().getck();
      _0x3a81ce = await this.parseCookies(_0x3ec1d7, _0x3a81ce);
      try {
        const _0x200ffd = {
            "account": this.name,
            "liveId": _0x81f111
          },
          _0x2b53ab = {
            "ckvalue": _0x3a81ce,
            "fn": "like",
            "method": "post",
            "url": "https://xbk.189.cn/xbkapi/lteration/room/like",
            "json": _0x200ffd
          };
        let {
            result: _0x36328b,
            statusCode: _0x293b2c
          } = await this.request(_0x2b53ab),
          _0x211a64 = _0x18f850.get(_0x36328b, "code", -1);
        if (_0x211a64 == 0) this.log("点赞直播间[" + _0x81f111 + "]成功");else {
          let _0x37ecb3 = _0x36328b?.["msg"] || _0x36328b?.["resoultMsg"] || _0x36328b?.["error"] || _0x36328b?.["msg"] || "";
          this.log("点赞直播间[" + _0x81f111 + "]失败[" + _0x211a64 + "]: " + _0x37ecb3);
        }
      } catch (_0x4adc6e) {
        console.log(_0x4adc6e);
      }
    }
    async ["sharingGetGold"](_0x512957 = {}) {
      let _0xd91342 = this.rsCkk,
        _0x360ab7 = this.getrsCk;
      _0x360ab7 = this.rsFun().getck();
      _0xd91342 = await this.parseCookies(_0x360ab7, _0xd91342);
      try {
        let _0x233113 = {
            "ckvalue": _0xd91342,
            "fn": "sharingGetGold",
            "method": "post",
            "url": "https://appfuwu.189.cn:9021/query/sharingGetGold",
            "json": {
              "headerInfos": {
                "code": "sharingGetGold",
                "timestamp": _0x18f850.time("yyyyMMddhhmmss"),
                "broadAccount": "",
                "broadToken": "",
                "clientType": "#9.6.1#channel50#iPhone 14 Pro Max#",
                "shopId": "20002",
                "source": "110003",
                "sourcePassword": "Sid98s",
                "token": this.token,
                "userLoginName": this.name
              },
              "content": {
                "attach": "test",
                "fieldData": {
                  "shareSource": "3",
                  "userId": this.userId,
                  "account": this.encode_phone()
                }
              }
            }
          },
          {
            result: _0x721cf5,
            statusCode: _0x3bdfbf
          } = await this.request(_0x233113),
          _0x1c3698 = _0x18f850.get(_0x721cf5?.["responseData"], "resultCode", -1);
        if (_0x1c3698 == "0000") this.log("分享成功");else {
          let _0x5c20c8 = _0x721cf5?.["msg"] || _0x721cf5?.["responseData"]?.["resultDesc"] || _0x721cf5?.["error"] || _0x721cf5?.["msg"] || "";
          this.log("分享失败[" + _0x1c3698 + "]: " + _0x5c20c8);
        }
      } catch (_0x4dbdd3) {
        console.log(_0x4dbdd3);
      }
    }
    async ["month_jml_preCost"](_0x281272 = {}) {
      let _0xf569e6 = this.rsCkk,
        _0x50de7c = this.getrsCk;
      _0x50de7c = this.rsFun().getck();
      _0xf569e6 = await this.parseCookies(_0x50de7c, _0xf569e6);
      try {
        let _0x1c9388 = {
            "ckvalue": _0xf569e6,
            "fn": "month_jml_preCost",
            "method": "post",
            "url": "https://wapside.189.cn:9001/jt-sign/short/message/preCost",
            "json": {
              "phone": this.encode_aes(this.name),
              "activityCode": "shortMesssge"
            }
          },
          {
            result: _0xca8a79,
            statusCode: _0x3b87d9
          } = await this.request(_0x1c9388),
          _0x23330a = _0x18f850.get(_0xca8a79, "resoultCode", _0x3b87d9);
        if (_0x23330a == 0) {
          let _0x1014bf = _0xca8a79?.["data"]?.["resoultMsg"] || "领取成功";
          this.jml_tokenFlag = _0xca8a79?.["resoultMsg"];
          await this.month_jml_userCost(_0x1014bf);
          await this.month_jml_receive();
          await this.month_jml_getCount();
          await this.month_jml_refresh();
        } else {
          let _0x4ce8e1 = _0xca8a79?.["msg"] || _0xca8a79?.["resoultMsg"] || _0xca8a79?.["error"] || "";
          this.log("每月见面礼登录失败[" + _0x23330a + "]: " + _0x4ce8e1);
        }
      } catch (_0x163eb8) {
        console.log(_0x163eb8);
      }
    }
    async ["month_jml_userCost"](_0x3cf1e6, _0x54559e = {}) {
      let _0x4c7448 = this.rsCkk,
        _0x5b8a12 = this.getrsCk;
      _0x5b8a12 = this.rsFun().getck();
      _0x4c7448 = await this.parseCookies(_0x5b8a12, _0x4c7448);
      try {
        let _0x668dbf = {
            "ckvalue": _0x4c7448,
            "fn": "month_jml_userCost",
            "method": "post",
            "url": "https://wapside.189.cn:9001/jt-sign/short/message/userCost",
            "json": {
              "phone": this.encode_aes(this.name),
              "activityCode": "shortMesssge",
              "flag": this.jml_tokenFlag
            }
          },
          {
            result: _0x3a38b1,
            statusCode: _0xea77c0
          } = await this.request(_0x668dbf),
          _0x5b2d0b = _0x18f850.get(_0x3a38b1, "resoultCode", _0xea77c0);
        if (_0x5b2d0b == 0) {
          let _0x5bc709 = _0x3a38b1?.["data"]?.["map"](_0x506a22 => "[" + _0x506a22.pizeName + "]") || [];
          this.log("见面礼" + _0x3cf1e6 + ": " + _0x5bc709.join(", "));
        } else {
          let _0x4f5a45 = _0x3a38b1?.["msg"] || _0x3a38b1?.["resoultMsg"] || _0x3a38b1?.["error"] || "";
          this.log("领取每月见面礼失败[" + _0x5b2d0b + "]: " + _0x4f5a45);
        }
      } catch (_0x196300) {
        console.log(_0x196300);
      }
    }
    async ["month_jml_receive"](_0x1b1332 = {}) {
      let _0x550818 = this.rsCkk,
        _0x5da502 = this.getrsCk;
      _0x5da502 = this.rsFun().getck();
      _0x550818 = await this.parseCookies(_0x5da502, _0x550818);
      try {
        const _0x3c6c3b = {
          "phone": this.name,
          "flag": this.jml_tokenFlag
        };
        let _0x758743 = {
            "ckvalue": _0x550818,
            "fn": "month_jml_receive",
            "method": "post",
            "url": "https://wapside.189.cn:9001/jt-sign/lottery/receive",
            "json": {
              "para": this.encrypt_para(_0x3c6c3b)
            }
          },
          {
            result: _0x133010,
            statusCode: _0x5e364b
          } = await this.request(_0x758743),
          _0x5e9838 = _0x18f850.get(_0x133010, "code", -1);
        if (_0x5e9838 == 0) this.log("领取APP抽奖次数成功");else {
          let _0x1055d0 = _0x133010?.["msg"] || _0x133010?.["resoultMsg"] || _0x133010?.["error"] || "";
          this.log("领取APP抽奖次数失败[" + _0x5e9838 + "]: " + _0x1055d0);
        }
      } catch (_0x22c414) {
        console.log(_0x22c414);
      }
    }
    async ["month_jml_getCount"](_0xae3eea = {}) {
      let _0x53326b = this.rsCkk,
        _0x2d8ee4 = this.getrsCk;
      _0x2d8ee4 = this.rsFun().getck();
      _0x53326b = await this.parseCookies(_0x2d8ee4, _0x53326b);
      try {
        const _0x5e4cdb = {
          "phone": this.name,
          "flag": this.jml_tokenFlag
        };
        let _0x5d7497 = {
            "ckvalue": _0x53326b,
            "fn": "month_jml_getCount",
            "method": "post",
            "url": "https://wapside.189.cn:9001/jt-sign/lottery/getCount",
            "json": {
              "para": this.encrypt_para(_0x5e4cdb)
            }
          },
          {
            result: _0xf3e7c3,
            statusCode: _0x23d930
          } = await this.request(_0x5d7497),
          _0x1fe334 = _0x18f850.get(_0xf3e7c3, "code", -1);
        if (_0x1fe334 == 0) {
          let _0x4cc89d = _0xf3e7c3?.["video"]?.["map"](_0x2812d5 => _0x2812d5.videoType) || [],
            _0x119b01 = _0x2a9cd3.filter(_0x40af7e => !_0x4cc89d.includes(_0x40af7e)),
            _0x1e9b5c = false;
          for (let _0x345f8 of _0x119b01) {
            if (_0x1e9b5c) {
              let _0x902ec5 = Math.floor(Math.random() * 5000) + 3000;
              await _0x18f850.wait(_0x902ec5);
            }
            await this.month_jml_addVideoCount(_0x345f8);
            _0x1e9b5c = true;
          }
        } else {
          let _0x46e1f3 = _0xf3e7c3?.["msg"] || _0xf3e7c3?.["resoultMsg"] || _0xf3e7c3?.["error"] || "";
          this.log("查询看视频得抽奖机会次数失败[" + _0x1fe334 + "]: " + _0x46e1f3);
        }
      } catch (_0x1c3f7e) {
        console.log(_0x1c3f7e);
      }
    }
    async ["month_jml_addVideoCount"](_0x4ee9e0, _0x48040a = {}) {
      let _0x128f84 = this.rsCkk,
        _0x243a97 = this.getrsCk;
      _0x243a97 = this.rsFun().getck();
      _0x128f84 = await this.parseCookies(_0x243a97, _0x128f84);
      try {
        const _0x3048cc = {
          "phone": this.name,
          "videoType": _0x4ee9e0,
          "flag": this.jml_tokenFlag
        };
        let _0x21023d = {
            "ckvalue": _0x128f84,
            "fn": "month_jml_addVideoCount",
            "method": "post",
            "url": "https://wapside.189.cn:9001/jt-sign/lottery/addVideoCount",
            "json": {
              "para": this.encrypt_para(_0x3048cc)
            }
          },
          {
            result: _0x3b08a2,
            statusCode: _0x4bdcc6
          } = await this.request(_0x21023d),
          _0x47a9fa = _0x18f850.get(_0x3b08a2, "code", -1);
        if (_0x47a9fa == 0) this.log("看视频[" + _0x4ee9e0 + "]得抽奖机会成功");else {
          let _0x3ee7b2 = _0x3b08a2?.["msg"] || _0x3b08a2?.["resoultMsg"] || _0x3b08a2?.["error"] || "";
          this.log("看视频[" + _0x4ee9e0 + "]得抽奖机会失败[" + _0x47a9fa + "]: " + _0x3ee7b2);
        }
      } catch (_0xf3eaf5) {
        console.log(_0xf3eaf5);
      }
    }
    async ["month_jml_refresh"](_0x576da9 = {}) {
      let _0x3f7687 = this.rsCkk,
        _0x408ea8 = this.getrsCk;
      _0x408ea8 = this.rsFun().getck();
      _0x3f7687 = await this.parseCookies(_0x408ea8, _0x3f7687);
      try {
        const _0x393694 = {
          "phone": this.name,
          "flag": this.jml_tokenFlag
        };
        let _0x38303c = {
            "ckvalue": _0x3f7687,
            "fn": "month_jml_refresh",
            "method": "post",
            "url": "https://wapside.189.cn:9001/jt-sign/lottery/refresh",
            "json": {
              "para": this.encrypt_para(_0x393694)
            }
          },
          {
            result: _0x1fcda9,
            statusCode: _0x4b3349
          } = await this.request(_0x38303c),
          _0x3a07b1 = _0x18f850.get(_0x1fcda9, "code", -1);
        if (_0x3a07b1 == -1) {
          let _0x422e0a = _0x1fcda9?.["rNumber"] || 0;
          this.log("可以抽奖" + _0x422e0a + "次");
          let _0x2aa5a9 = false;
          while (_0x422e0a-- > 0) {
            if (_0x2aa5a9) {
              let _0xbf68d5 = Math.floor(Math.random() * 5000) + 3000;
              await _0x18f850.wait(_0xbf68d5);
            }
            await this.month_jml_lotteryRevice();
            _0x2aa5a9 = true;
          }
        } else {
          let _0x34323e = _0x1fcda9?.["msg"] || _0x1fcda9?.["resoultMsg"] || _0x1fcda9?.["error"] || "";
          this.log("查询抽奖次数失败[" + _0x3a07b1 + "]: " + _0x34323e);
        }
      } catch (_0x52cdba) {
        console.log(_0x52cdba);
      }
    }
    async ["month_jml_lotteryRevice"](_0x1fdcca = {}) {
      let _0x8ae9ce = this.rsCkk,
        _0x3a0815 = this.getrsCk;
      _0x3a0815 = this.rsFun().getck();
      _0x8ae9ce = await this.parseCookies(_0x3a0815, _0x8ae9ce);
      try {
        const _0x2fa376 = {
          "phone": this.name,
          "flag": this.jml_tokenFlag
        };
        let _0xf6c80d = {
            "ckvalue": _0x8ae9ce,
            "fn": "month_jml_lotteryRevice",
            "method": "post",
            "url": "https://wapside.189.cn:9001/jt-sign/lottery/lotteryRevice",
            "json": {
              "para": this.encrypt_para(_0x2fa376)
            }
          },
          {
            result: _0x3f1beb,
            statusCode: _0x37933e
          } = await this.request(_0xf6c80d),
          _0x224ec6 = _0x18f850.get(_0x3f1beb, "code", -1);
        if (_0x224ec6 == 0) {
          let {
            rname: _0x1b9753,
            id: _0x132dc2
          } = _0x3f1beb;
          const _0x5d7774 = {
            "notify": true
          };
          this.log("每月见面礼抽奖: " + _0x1b9753, _0x5d7774);
        } else {
          let _0x1f227b = _0x3f1beb?.["msg"] || _0x3f1beb?.["resoultMsg"] || _0x3f1beb?.["error"] || "";
          this.log("每月见面礼抽奖失败[" + _0x224ec6 + "]: " + _0x1f227b);
        }
      } catch (_0x256e70) {
        console.log(_0x256e70);
      }
    }
    async ["rpc_request"](_0x34e896, _0x238a67 = "get", _0x360866 = null) {
      const _0x554213 = new Error(),
        _0x551491 = _0x554213.stack,
        _0x4a9a24 = _0x551491.split("\n"),
        _0x5db502 = _0x4a9a24?.[2]?.["match"](/UserClass\.(\w+)/)?.[1] || "rpc";
      let _0x35d0d8 = {
        "fn": _0x5db502,
        "method": "post",
        "url": _0x28303b,
        "json": {
          "key": _0x19a65e,
          "method": _0x238a67,
          "url": _0x34e896.toString(),
          "headers": this.get_mall_headers(),
          "data": JSON.stringify(_0x360866)
        }
      };
      return await this.request(_0x35d0d8);
    }
    async ["auth_login"](_0x4501df = {}) {
      let _0x3c9833 = false;
      try {
        let _0x80e692 = this.ticket,
          _0x3616df = new URL("https://wapact.189.cn:9001/unified/user/login"),
          _0x529e1f = {
            "ticket": _0x80e692,
            "backUrl": encodeURIComponent("https://wapact.189.cn:9001/JinDouMall/JinDouMall_luckDraw.html?ticket=" + _0x80e692),
            "platformCode": "P201010301",
            "loginType": 2
          },
          {
            result: _0x208825,
            statusCode: _0x1e13c0
          } = await this.rpc_request(_0x3616df, "POST", _0x529e1f),
          _0x199d02 = _0x18f850.get(_0x208825, "code", _0x1e13c0);
        if (_0x199d02 == 0) {
          let {
            token: _0xb59ab3,
            sessionId: _0x70de47
          } = _0x208825?.["biz"];
          this.mall_token = _0xb59ab3;
          _0x3c9833 = true;
        } else {
          let _0x44d4ff = _0x18f850.get(_0x208825, "message", "");
          this.log("商城登录失败[" + _0x199d02 + "]: " + _0x44d4ff);
        }
      } catch (_0x19c036) {
        console.log(_0x19c036);
      } finally {
        return _0x3c9833;
      }
    }
    async ["queryInfo"](_0x538247 = {}) {
      let _0x4d98d1 = this.rsCkk,
        _0x28971c = this.getrsCk;
      _0x28971c = this.rsFun().getck();
      _0x4d98d1 = await this.parseCookies(_0x28971c, _0x4d98d1);
      try {
        let _0x33d7eb = new URL("https://wapact.189.cn:9001/gateway/golden/api/queryInfo");
        _0x33d7eb.searchParams.append("_", Date.now().toString());
        let {
            result: _0x11cbc9,
            statusCode: _0x18f8bb
          } = await this.rpc_request(_0x33d7eb),
          _0x53b90d = _0x18f850.get(_0x11cbc9, "code", _0x18f8bb);
        if (_0x53b90d == 0) {
          this.coin = _0x11cbc9?.["biz"]?.["amountTotal"] || this.coin;
          await this.queryTurnTable();
        } else {
          let _0x180694 = _0x18f850.get(_0x11cbc9, "message", "");
          this.log("查询商城状态失败[" + _0x53b90d + "]: " + _0x180694);
        }
      } catch (_0x5f1e69) {
        console.log(_0x5f1e69);
      }
    }
    async ["queryTurnTable"](_0x3b993c = {}) {
      try {
        let _0x466721 = new URL("https://wapact.189.cn:9001/gateway/golden/api/queryTurnTable");
        _0x466721.searchParams.append("userType", "1");
        _0x466721.searchParams.append("_", Date.now().toString());
        let {
            result: _0x1eb87b,
            statusCode: _0x44c3c1
          } = await this.rpc_request(_0x466721),
          _0x4700c9 = _0x18f850.get(_0x1eb87b, "code", _0x44c3c1);
        if (_0x4700c9 == 0) {
          let _0x3fb564 = _0x1eb87b?.["biz"]?.["xiaoHaoCount"] || 20,
            _0x702d0c = _0x1eb87b?.["biz"]?.["wzTurntable"]?.["code"] || "";
          _0x702d0c ? await this.lottery_check(_0x702d0c, _0x3fb564) : this.log("没有获取到转盘抽奖ID");
        } else {
          let _0x349004 = _0x18f850.get(_0x1eb87b, "message", "");
          this.log("获取转盘抽奖活动失败[" + _0x4700c9 + "]: " + _0x349004);
        }
      } catch (_0x59d804) {
        console.log(_0x59d804);
      }
    }
    async ["lottery_check"](_0x2738c4, _0x3f2c65, _0x53e68f = {}) {
      try {
        let _0x1d5677 = new URL("https://wapact.189.cn:9001/gateway/stand/detail/check");
        _0x1d5677.searchParams.append("activityId", _0x2738c4);
        _0x1d5677.searchParams.append("_", Date.now().toString());
        let {
            result: _0x49ca61,
            statusCode: _0x50f635
          } = await this.rpc_request(_0x1d5677),
          _0x2eaa35 = _0x18f850.get(_0x49ca61, "code", _0x50f635);
        if (_0x2eaa35 == 0) {
          let _0x2d450 = _0x49ca61?.["biz"]?.["resultInfo"]?.["chanceCount"] || 0;
          this.log("转盘可以抽奖" + _0x2d450 + "次, 消耗金豆" + _0x3f2c65 + "/" + this.coin);
          let _0x31718e = false;
          while (_0x2d450-- > 0 && this.coin >= _0x3f2c65) {
            _0x31718e && (await _0x18f850.wait(3000));
            _0x31718e = true;
            await this.lottery_do(_0x2738c4, _0x3f2c65);
          }
        } else {
          let _0x49b551 = _0x18f850.get(_0x49ca61, "message", "");
          this.log("查询转盘抽奖次数失败[" + _0x2eaa35 + "]: " + _0x49b551);
        }
      } catch (_0x57fda7) {
        console.log(_0x57fda7);
      }
    }
    async ["lottery_do"](_0x22934b, _0x3ef71b = {}) {
      try {
        let _0x43763a = new URL("https://wapact.189.cn:9001/gateway/golden/api/lottery");
        const _0x519348 = {
          "activityId": _0x22934b
        };
        let {
            result: _0x41c363,
            statusCode: _0x5a1598
          } = await this.rpc_request(_0x43763a, "POST", _0x519348),
          _0x529b23 = _0x18f850.get(_0x41c363, "code", _0x5a1598);
        if (_0x529b23 == 0) {
          this.coin = _0x41c363?.["biz"]?.["amountTotal"] || this.coin - xiaoHaoCount;
          let _0xfc857b = _0x41c363?.["biz"]?.["resultCode"],
            _0x530dfa = "";
          switch (_0xfc857b) {
            case "0":
              {
                let _0x103d12 = _0x41c363?.["biz"]?.["resultInfo"]?.["winTitle"] || "空气";
                const _0x5a1f44 = {
                  "notify": true
                };
                this.log("转盘抽奖: " + _0x103d12, _0x5a1f44);
                return;
              }
            case "412":
              {
                _0x530dfa = "抽奖次数已达上限";
                break;
              }
            case "413":
            case "420":
              {
                _0x530dfa = "金豆不足";
                break;
              }
            default:
              {
                this.log(": " + JSON.stringify(_0x41c363));
                _0x530dfa = "未知原因";
                break;
              }
          }
          this.log("转盘抽奖失败[" + _0xfc857b + "]: " + _0x530dfa);
        } else {
          let _0xc418dc = _0x18f850.get(_0x41c363, "message", "");
          this.log("转盘抽奖错误[" + _0x529b23 + "]: " + _0xc418dc);
        }
      } catch (_0x2f6951) {
        console.log(_0x2f6951);
      }
    }
    async ["userTask"]() {
      const _0x2efeba = {
        "notify": true
      };
      let _0x111eb3 = this.name;
      _0x18f850.log("\n======= 账号[" + this.index + "][" + _0x111eb3.slice(0, 3) + "****" + _0x111eb3.slice(-4) + "] =======", _0x2efeba);
      if (!this.load_token() && !(await this.login())) {
        return;
      }
      if (!(await this.get_ticket())) return;
      await this.get_rsValue("https://wapact.189.cn:9001/unified/user/login");
      if (!(await this.get_sign())) {
        console.log("info");
        return;
      }
      await this.get_ticket();
      await this.userCoinInfo();
      await this.getLevelRightsList();
      await this.month_jml_preCost();
      await this.userStatusInfo();
      await this.continueSignRecords();
      await this.homepage("hg_qd_zrwzjd");
      await this.getParadiseInfo();
      _0x28303b && (await this.userLotteryTask());
      await this.userCoinInfo(true);
    }
    async ["userLotteryTask"]() {
      if (!(await this.auth_login())) {
        return;
      }
      await this.queryInfo();
    }
  }
  !(async () => {
    _0x18f850.read_env(_0x4b65d4);
    _0x43855a();
    for (let _0x56ccf5 of _0x18f850.userList) {
      await _0x56ccf5.userTask();
    }
  })().catch(_0x29377e => _0x18f850.log(_0x29377e)).finally(() => _0x18f850.exitNow());
  async function _0x4f8b22(_0x22d420 = 0) {
    let _0x278369 = [];
    try {
      const _0x541bca = {
        "fn": "auth",
        "method": "get",
        "url": _0x49a5ad,
        "timeout": 20000
      };
      let {
        statusCode: _0x32485f,
        result: _0x3851ba
      } = await _0x188f85.request(_0x541bca);
      if (_0x32485f != 200) {
        return _0x22d420++ < _0x31852c && (_0x278369 = await _0x4f8b22(_0x22d420)), _0x278369;
      }
      if (_0x3851ba?.["code"] == 0) {
        _0x3851ba = JSON.parse(_0x3851ba.data.file.data);
        if (_0x3851ba?.["commonNotify"] && _0x3851ba.commonNotify.length > 0) {
          const _0x1397ed = {
            "notify": true
          };
          _0x18f850.log(_0x3851ba.commonNotify.join("\n") + "\n", _0x1397ed);
        }
        _0x3851ba?.["commonMsg"] && _0x3851ba.commonMsg.length > 0 && _0x18f850.log(_0x3851ba.commonMsg.join("\n") + "\n");
        if (_0x3851ba[_0x1f2fb9]) {
          let _0x6a4fb7 = _0x3851ba[_0x1f2fb9];
          _0x6a4fb7.status == 0 ? _0x5dc8d2 >= _0x6a4fb7.version ? (_0x278369 = true, _0x18f850.log(_0x6a4fb7.msg[_0x6a4fb7.status]), _0x18f850.log(_0x6a4fb7.updateMsg), _0x18f850.log("现在运行的脚本版本是：" + _0x5dc8d2 + "，最新脚本版本：" + _0x6a4fb7.latestVersion)) : _0x18f850.log(_0x6a4fb7.versionMsg) : _0x18f850.log(_0x6a4fb7.msg[_0x6a4fb7.status]);
        } else _0x18f850.log(_0x3851ba.errorMsg);
      } else _0x22d420++ < _0x31852c && (_0x278369 = await _0x4f8b22(_0x22d420));
    } catch (_0x5d766b) {
      _0x18f850.log(_0x5d766b);
    } finally {
      return _0x278369;
    }
  }
  function _0x1ea0c2(_0x4e0f6f) {
    return new class {
      constructor(_0x618768) {
        this.name = _0x618768;
        this.startTime = Date.now();
        const _0x40d6d9 = {
          "time": true
        };
        this.log("[" + this.name + "]开始运行\n", _0x40d6d9);
        this.notifyStr = [];
        this.notifyFlag = true;
        this.userIdx = 0;
        this.userList = [];
        this.userCount = 0;
        this.default_timestamp_len = 13;
        this.default_wait_interval = 1000;
        this.default_wait_limit = 3600000;
        this.default_wait_ahead = 0;
      }
      ["log"](_0xb90cf4, _0x4c1548 = {}) {
        const _0x5b57bb = {
          "console": true
        };
        Object.assign(_0x5b57bb, _0x4c1548);
        if (_0x5b57bb.time) {
          let _0x3905ac = _0x5b57bb.fmt || "hh:mm:ss";
          _0xb90cf4 = "[" + this.time(_0x3905ac) + "]" + _0xb90cf4;
        }
        _0x5b57bb.notify && this.notifyStr.push(_0xb90cf4);
        _0x5b57bb.console && console.log(_0xb90cf4);
      }
      ["get"](_0xdf11d3, _0x4df708, _0x4c4392 = "") {
        let _0x4ea503 = _0x4c4392;
        if (_0x4ea503 === 412) {
          let _0x1ae1cf = _0x76e90b.parseFromString(_0xdf11d3, "application/xml");
          _0x1ae1cf == undefined && (_0x1ae1cf = _0x76e90b.parseFromString(_0xdf11d3.response.body, "application/xml"));
          const _0x1c471c = _0x1ae1cf.getElementsByTagName("meta")[1]?.["getAttribute"]("content"),
            _0x1b7647 = _0x1ae1cf.getElementsByTagName("meta")[1]?.["getAttribute"]("id"),
            _0x2bf9ef = _0x1ae1cf.getElementsByTagName("script"),
            _0x4a0bbb = Array.from(_0x2bf9ef).find(_0x1145b1 => {
              const _0x40079e = _0x1145b1.textContent || _0x1145b1.text;
              return _0x40079e.includes("$_ts=window['$_ts']");
            }),
            _0x51ea68 = Array.from(_0x2bf9ef).find(_0x192b3e => _0x192b3e.getAttribute("src"));
          if (_0x4a0bbb && _0x51ea68) {
            const _0x4cd430 = _0x4a0bbb.textContent || _0x4a0bbb.text,
              _0x3da131 = _0x51ea68.getAttribute("src");
            return {
              "contentCODE": _0x1c471c,
              "tsCODE": _0x4cd430,
              "srcAttribute": _0x3da131,
              "tsID": _0x1b7647
            };
          }
          return {
            "contentCODE": null,
            "tsCODE": null,
            "srcAttribute": null
          };
        }
        return _0xdf11d3?.["hasOwnProperty"](_0x4df708) && (_0x4ea503 = _0xdf11d3[_0x4df708]), _0x4ea503;
      }
      ["pop"](_0x39f5bd, _0x2ced33, _0x1a838f = "") {
        let _0x568fa5 = _0x1a838f;
        return _0x39f5bd?.["hasOwnProperty"](_0x2ced33) && (_0x568fa5 = _0x39f5bd[_0x2ced33], delete _0x39f5bd[_0x2ced33]), _0x568fa5;
      }
      ["copy"](_0x184a24) {
        return Object.assign({}, _0x184a24);
      }
      ["read_env"](_0xc8b956) {
        let _0x186060 = _0x57676f.map(_0x3b834f => process.env[_0x3b834f]);
        for (let _0x36f241 of _0x186060.filter(_0x1ccb2d => !!_0x1ccb2d)) {
          for (let _0x11a96e of _0x36f241.split(_0x11185c).filter(_0x8f3980 => !!_0x8f3980)) {
            if (this.userList.includes(_0x11a96e)) continue;
            this.userList.push(new _0xc8b956(_0x11a96e));
          }
        }
        this.userCount = this.userList.length;
        if (!this.userCount) {
          const _0x20b6c3 = {
            "notify": true
          };
          return this.log("未找到变量，请检查变量" + _0x57676f.map(_0x610765 => "[" + _0x610765 + "]").join("或"), _0x20b6c3), false;
        }
        return this.log("共找到" + this.userCount + "个账号"), true;
      }
      ["time"](_0x457921, _0x5ee665 = null) {
        let _0xa2af17 = _0x5ee665 ? new Date(_0x5ee665) : new Date(),
          _0x1e7ca4 = {
            "M+": _0xa2af17.getMonth() + 1,
            "d+": _0xa2af17.getDate(),
            "h+": _0xa2af17.getHours(),
            "m+": _0xa2af17.getMinutes(),
            "s+": _0xa2af17.getSeconds(),
            "q+": Math.floor((_0xa2af17.getMonth() + 3) / 3),
            "S": this.padStr(_0xa2af17.getMilliseconds(), 3)
          };
        /(y+)/.test(_0x457921) && (_0x457921 = _0x457921.replace(RegExp.$1, (_0xa2af17.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (let _0x5899b7 in _0x1e7ca4) new RegExp("(" + _0x5899b7 + ")").test(_0x457921) && (_0x457921 = _0x457921.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x1e7ca4[_0x5899b7] : ("00" + _0x1e7ca4[_0x5899b7]).substr(("" + _0x1e7ca4[_0x5899b7]).length)));
        return _0x457921;
      }
      async ["showmsg"]() {
        if (!this.notifyFlag) return;
        if (!this.notifyStr.length) return;
        var _0x55984c = require("./sendNotify");
        this.log("\n============== 推送 ==============");
        await _0x55984c.sendNotify(this.name, this.notifyStr.join("\n"));
      }
      ["padStr"](_0x353ac8, _0x510f93, _0x510c77 = {}) {
        let _0x5de291 = _0x510c77.padding || "0",
          _0x30fae1 = _0x510c77.mode || "l",
          _0x57e5a9 = String(_0x353ac8),
          _0x201a5f = _0x510f93 > _0x57e5a9.length ? _0x510f93 - _0x57e5a9.length : 0,
          _0x312180 = "";
        for (let _0x546fad = 0; _0x546fad < _0x201a5f; _0x546fad++) {
          _0x312180 += _0x5de291;
        }
        return _0x30fae1 == "r" ? _0x57e5a9 = _0x57e5a9 + _0x312180 : _0x57e5a9 = _0x312180 + _0x57e5a9, _0x57e5a9;
      }
      ["json2str"](_0x5e0de6, _0x27463c, _0x3ecef9 = false) {
        let _0x338f46 = [];
        for (let _0x390569 of Object.keys(_0x5e0de6).sort()) {
          let _0x5b0357 = _0x5e0de6[_0x390569];
          _0x5b0357 && _0x3ecef9 && (_0x5b0357 = encodeURIComponent(_0x5b0357));
          _0x338f46.push(_0x390569 + "=" + _0x5b0357);
        }
        return _0x338f46.join(_0x27463c);
      }
      ["str2json"](_0x49c4dd, _0x4cc49f = false) {
        let _0x3c3653 = {};
        for (let _0x34e236 of _0x49c4dd.split("&")) {
          if (!_0x34e236) {
            continue;
          }
          let _0x23c6fc = _0x34e236.indexOf("=");
          if (_0x23c6fc == -1) continue;
          let _0x200e0b = _0x34e236.substr(0, _0x23c6fc),
            _0x101ff1 = _0x34e236.substr(_0x23c6fc + 1);
          _0x4cc49f && (_0x101ff1 = decodeURIComponent(_0x101ff1));
          _0x3c3653[_0x200e0b] = _0x101ff1;
        }
        return _0x3c3653;
      }
      ["randomPattern"](_0x373f88, _0x3d1621 = "abcdef0123456789") {
        let _0x398838 = "";
        for (let _0x2496d6 of _0x373f88) {
          if (_0x2496d6 == "x") {
            _0x398838 += _0x3d1621.charAt(Math.floor(Math.random() * _0x3d1621.length));
          } else {
            _0x2496d6 == "X" ? _0x398838 += _0x3d1621.charAt(Math.floor(Math.random() * _0x3d1621.length)).toUpperCase() : _0x398838 += _0x2496d6;
          }
        }
        return _0x398838;
      }
      ["randomUuid"]() {
        return this.randomPattern("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
      }
      ["randomString"](_0x412a85, _0x4cf5e3 = "abcdef0123456789") {
        let _0x36cb3c = "";
        for (let _0xd22518 = 0; _0xd22518 < _0x412a85; _0xd22518++) {
          _0x36cb3c += _0x4cf5e3.charAt(Math.floor(Math.random() * _0x4cf5e3.length));
        }
        return _0x36cb3c;
      }
      ["randomList"](_0xf0c65b) {
        let _0x2005de = Math.floor(Math.random() * _0xf0c65b.length);
        return _0xf0c65b[_0x2005de];
      }
      ["wait"](_0x7705fc) {
        return new Promise(_0x3cd661 => setTimeout(_0x3cd661, _0x7705fc));
      }
      async ["exitNow"]() {
        await this.showmsg();
        let _0x31e1f7 = Date.now(),
          _0x1b3c66 = (_0x31e1f7 - this.startTime) / 1000;
        this.log("");
        const _0x5a3ef5 = {
          "time": true
        };
        this.log("[" + this.name + "]运行结束，共运行了" + _0x1b3c66 + "秒", _0x5a3ef5);
        process.exit(0);
      }
      ["normalize_time"](_0x3e03d1, _0x53d889 = {}) {
        let _0x15f864 = _0x53d889.len || this.default_timestamp_len;
        _0x3e03d1 = _0x3e03d1.toString();
        let _0x5ceba7 = _0x3e03d1.length;
        while (_0x5ceba7 < _0x15f864) {
          _0x3e03d1 += "0";
        }
        return _0x5ceba7 > _0x15f864 && (_0x3e03d1 = _0x3e03d1.slice(0, 13)), parseInt(_0x3e03d1);
      }
      async ["wait_until"](_0x439ca1, _0x12964f = {}) {
        let _0x49730a = _0x12964f.logger || this,
          _0x1f0e39 = _0x12964f.interval || this.default_wait_interval,
          _0x388791 = _0x12964f.limit || this.default_wait_limit,
          _0x1ee84f = _0x12964f.ahead || this.default_wait_ahead;
        if (typeof _0x439ca1 == "string" && _0x439ca1.includes(":")) {
          if (_0x439ca1.includes("-")) _0x439ca1 = new Date(_0x439ca1).getTime();else {
            let _0x1b0711 = this.time("yyyy-MM-dd ");
            _0x439ca1 = new Date(_0x1b0711 + _0x439ca1).getTime();
          }
        }
        let _0x21a11e = this.normalize_time(_0x439ca1) - _0x1ee84f,
          _0x3317a1 = this.time("hh:mm:ss.S", _0x21a11e),
          _0x1eb59b = Date.now();
        _0x1eb59b > _0x21a11e && (_0x21a11e += 86400000);
        let _0x504a7b = _0x21a11e - _0x1eb59b;
        if (_0x504a7b > _0x388791) {
          const _0x4f5e09 = {
            "time": true
          };
          _0x49730a.log("离目标时间[" + _0x3317a1 + "]大于" + _0x388791 / 1000 + "秒,不等待", _0x4f5e09);
        } else {
          const _0x33d55b = {
            "time": true
          };
          _0x49730a.log("离目标时间[" + _0x3317a1 + "]还有" + _0x504a7b / 1000 + "秒,开始等待", _0x33d55b);
          while (_0x504a7b > 0) {
            let _0x5c4a0c = Math.min(_0x504a7b, _0x1f0e39);
            await this.wait(_0x5c4a0c);
            _0x1eb59b = Date.now();
            _0x504a7b = _0x21a11e - _0x1eb59b;
          }
          const _0x1ca8a3 = {
            "time": true
          };
          _0x49730a.log("已完成等待", _0x1ca8a3);
        }
      }
      async ["wait_gap_interval"](_0x1d2883, _0x358c57) {
        let _0xc38188 = Date.now() - _0x1d2883;
        _0xc38188 < _0x358c57 && (await this.wait(_0x358c57 - _0xc38188));
      }
    }(_0x4e0f6f);
  }
})();