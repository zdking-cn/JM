//Wed Aug 07 2024 03:09:31 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const bdy_0x4c5955 = require("crypto-js"),
  bdy_0x272356 = require("got"),
  bdy_0x438335 = process.env.SIGN_URL ? process.env.SIGN_URL : "";
bdy_0x438335 ? console.log("🈯当前使用指定sign：" + bdy_0x438335 + "\n") : console.log("♻️当前使用内置sign(推荐)，自定义变量SIGN_URL\n");
function bdy_0x301aec(_0x4f12b2 = "") {
  return _0x4f12b2;
}
function bdy_0x4a5889(_0x2530d2) {
  let _0x3bdd0e = [];
  for (let _0x211d81 of _0x2530d2.split("")) {
    let _0x4653be = _0x211d81.charCodeAt();
    _0x3bdd0e = _0x3bdd0e.concat([(_0x4653be & 128) >> 7, (_0x4653be & 64) >> 6, (_0x4653be & 32) >> 5, (_0x4653be & 16) >> 4, (_0x4653be & 8) >> 3, (_0x4653be & 4) >> 2, (_0x4653be & 2) >> 1, _0x4653be & 1]);
  }
  return _0x3bdd0e;
}
function bdy_0x1ca07d(_0x3a6b77) {
  let _0x1cd03c = Array.from({
    length: parseInt(_0x3a6b77.length / 8)
  }).map(_0x2a766c => 0);
  for (let _0x3c71b4 in _0x1cd03c) {
    _0x1cd03c[_0x3c71b4] = _0x3a6b77[_0x3c71b4 * 8] << 7 | _0x3a6b77[_0x3c71b4 * 8 + 1] << 6 | _0x3a6b77[_0x3c71b4 * 8 + 2] << 5 | _0x3a6b77[_0x3c71b4 * 8 + 3] << 4 | _0x3a6b77[_0x3c71b4 * 8 + 4] << 3 | _0x3a6b77[_0x3c71b4 * 8 + 5] << 2 | _0x3a6b77[_0x3c71b4 * 8 + 6] << 1 | _0x3a6b77[_0x3c71b4 * 8 + 7];
  }
  return bdy_0x301aec(_0x1cd03c);
}
function bdy_0xd9231a(_0x539ff6) {
  let _0x4579a2 = [55, 146, 68, 104, 165, 61, 204, 127, 187, 15, 217, 136, 238, 154, 233, 90],
    _0x3ab02a = "80306f4370b39fd5630ad0529f77adb6";
  const _0xa24908 = {
    length: _0x539ff6.length
  };
  let _0x5524d0 = Array.from(_0xa24908).map(_0x127eb3 => 0),
    _0x124256,
    _0x1d968e,
    _0x5c9cb3,
    _0x135e56;
  for (i in _0x5524d0) {
    _0x124256 = _0x539ff6[i].charCodeAt();
    _0x5c9cb3 = _0x4579a2[i & 15];
    _0x135e56 = _0x3ab02a[i & 7].charCodeAt();
    _0x124256 = _0x5c9cb3 ^ _0x124256;
    _0x124256 = _0x124256 ^ _0x135e56;
    _0x124256 = _0x124256 + _0x5c9cb3;
    _0x5c9cb3 = _0x5c9cb3 ^ _0x124256;
    _0x1d968e = _0x3ab02a[i & 7].charCodeAt();
    _0x5c9cb3 = _0x5c9cb3 ^ _0x1d968e;
    _0x5524d0[i] = _0x5c9cb3 & 255;
  }
  return bdy_0x301aec(_0x5524d0);
}
function bdy_0x2dffbe(_0x6d754) {
  let _0x56b84d = [[0, 0], [1, 4], [2, 61], [3, 15], [4, 56], [5, 40], [6, 6], [7, 59], [8, 62], [9, 58], [10, 17], [11, 2], [12, 12], [13, 8], [14, 32], [15, 60], [16, 13], [17, 45], [18, 34], [19, 14], [20, 36], [21, 21], [22, 22], [23, 39], [24, 23], [25, 25], [26, 26], [27, 20], [28, 1], [29, 33], [30, 46], [31, 55], [32, 35], [33, 24], [34, 57], [35, 19], [36, 53], [37, 37], [38, 38], [39, 5], [40, 30], [41, 41], [42, 42], [43, 18], [44, 47], [45, 27], [46, 9], [47, 44], [48, 51], [49, 7], [50, 49], [51, 63], [52, 28], [53, 43], [54, 54], [55, 52], [56, 31], [57, 10], [58, 29], [59, 11], [60, 3], [61, 16], [62, 50], [63, 48]],
    _0xa45f17 = bdy_0x4a5889(_0x6d754),
    _0x5a98a7 = Array.from({
      length: _0xa45f17.length
    }).map(_0x3631d4 => 0);
  for (let _0x5a1d24 in _0x5a98a7) {
    _0x5a98a7[_0x56b84d[_0x5a1d24][1]] = _0xa45f17[_0x56b84d[_0x5a1d24][0]];
  }
  return bdy_0x1ca07d(_0x5a98a7);
}
switch (bdy_0x438335) {
  case "nb":
    const bdy_0x4c53dc = {
      nb: nb
    };
    _0xf1f6le = bdy_0x4c53dc;
    break;
}
function bdy_0x259925(_0x2f84b6) {
  let _0x427e74 = [[0, 6, 0, 1], [1, 4, 1, 0], [2, 5, 0, 1], [3, 0, 0, 1], [4, 2, 0, 1], [5, 3, 0, 1], [6, 1, 1, 0], [7, 7, 0, 1]],
    _0x39975b = bdy_0x4a5889(_0x2f84b6),
    _0x834387 = [0, 0, 0, 0, 0, 0, 0, 0];
  for (var _0x1538ff in _0x834387) {
    _0x39975b[_0x1538ff] == 0 ? _0x834387[_0x427e74[_0x1538ff][1]] = _0x427e74[_0x1538ff][2] : _0x834387[_0x427e74[_0x1538ff][1]] = _0x427e74[_0x1538ff][3];
  }
  return bdy_0x1ca07d(_0x834387);
}
function bdy_0x137a01(_0x50fc12) {
  let _0x307c23 = [];
  for (let _0x419525 = 0; _0x419525 < _0x50fc12.length; _0x419525 += 8) {
    let _0x315448 = _0x50fc12.slice(_0x419525, _0x419525 + 8);
    _0x315448.length == 1 ? _0x307c23 = _0x307c23.concat(bdy_0x259925(_0x315448)) : _0x307c23 = _0x307c23.concat(bdy_0x2dffbe(_0x315448));
  }
  return _0x307c23;
}
function bdy_0x2e353d(_0x4c4b08, _0x5d07e5, _0x59a6d7) {
  let _0x3e821f = [0, 1, 2];
  _0x59a6d7 == 1 && (_0x3e821f = [1, 2, 0]);
  _0x59a6d7 == 2 && (_0x3e821f = [2, 0, 1]);
  let _0xc8522a = _0x3e821f[_0x5d07e5];
  if (_0xc8522a == 0) {
    return bdy_0x137a01(_0x4c4b08);
  }
  if (_0xc8522a == 2) {
    return bdy_0xd9231a(_0x4c4b08);
  }
}
function bdy_0x242103(_0x27b9ae) {
  let _0x3dfecd = "",
    _0xc7c4ba = [],
    _0x52d7b5 = "";
  const _0x4c8114 = "KLMNOPQRSTABCDEFGHIJUVWXYZabcdopqrstuvwxefghijklmnyz0123456789+/";
  for (let _0x222908 = 0; _0x222908 < _0x27b9ae.length; _0x222908++) {
    _0x3dfecd += ("00000000" + _0x27b9ae.charCodeAt(_0x222908).toString(2)).slice(-8);
  }
  for (let _0x38993c = 0; _0x38993c < _0x3dfecd.length; _0x38993c += 6) {
    _0xc7c4ba.push("000000" + _0x3dfecd.substr(_0x38993c, 6));
  }
  for (let _0x486491 = 0; _0x486491 < _0xc7c4ba.length; _0x486491++) {
    _0x52d7b5 += _0x4c8114[parseInt(_0xc7c4ba[_0x486491], 2)];
  }
  if (_0x52d7b5.length % 4 == 2) {
    _0x52d7b5 += "==";
  } else {
    _0x52d7b5.length % 4 == 3 && (_0x52d7b5 += "=");
  }
  return _0x52d7b5;
}
function bdy_0x5eb08d(_0x20fe9a, _0x1fe3a2) {
  return Math.floor(Math.random() * (_0x1fe3a2 - _0x20fe9a + 1)) + _0x20fe9a;
}
function bdy_0x55ce3b(_0x2255ad) {
  let _0x335fb4 = {
    hdid: "JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw=",
    ts: Date.now(),
    ridx: -1,
    cipher: {
      area: bdy_0x242103("0_0_0_0"),
      d_model: bdy_0x242103("iPhone"),
      wifiBssid: bdy_0x242103(_0x2255ad.substr(0, 8)),
      osVersion: "CJS=",
      d_brand: "WQvrb21f",
      screen: bdy_0x242103(bdy_0x5eb08d(393, 450) + "_" + bdy_0x5eb08d(800, 900)),
      uuid: bdy_0x242103(_0x2255ad),
      aid: bdy_0x242103(_0x2255ad),
      openudid: bdy_0x242103(_0x2255ad)
    },
    ciphertype: 5,
    version: "1.2.0",
    appname: "com.360buy.jdmobile"
  };
  return encodeURIComponent(JSON.stringify(_0x335fb4));
}
function bdy_0x2e9b86(_0x569eb8 = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx") {
  var _0x908980 = new Date().getTime();
  typeof performance !== "undefined" && typeof performance.now === "function" && (_0x908980 += performance.now());
  var _0x2f2989 = _0x569eb8.replace(/[xy]/g, function (_0x2dd793) {
    var _0x68e48d = (_0x908980 + Math.random() * 16) % 16 | 0;
    _0x908980 = Math.floor(_0x908980 / 16);
    return (_0x2dd793 == "x" ? _0x68e48d : _0x68e48d & 3 | 8).toString(16);
  });
  return _0x2f2989;
}
async function bdy_0x17e86f(_0x5e19b7, _0x5a7f18, _0x1c8094, _0x4cb5bb) {
  if (bdy_0x438335 != "" && _0x4cb5bb == undefined) {
    const _0x28d827 = {
      fn: _0x5e19b7,
      body: _0x5a7f18
    };
    const _0x3df867 = {
      limit: 1,
      methods: ["GET", "POST"]
    };
    const _0x4e52b0 = {
      beforeRetry: [(_0x3479fe, _0x3aa0cb) => {
        _0x3aa0cb;
      }]
    };
    const _0x257717 = {
      request: 30000
    };
    const _0x49d0fc = {
      json: _0x28d827,
      retry: _0x3df867,
      hooks: _0x4e52b0,
      timeout: _0x257717
    };
    let _0x464815 = await bdy_0x272356.post(bdy_0x438335, _0x49d0fc).json().catch(_0x2566e0 => {
      console.log(_0x2566e0.message);
      console.log("指定sign获取失败,请检查！\n");
      return "";
    });
    if (_0x464815?.["body"]) {
      return _0x464815?.["body"];
    } else {
      if (_0x464815?.["data"]?.["convertUrl"]) {
        return _0x464815?.["data"]?.["convertUrl"];
      }
    }
  } else {
    let _0x40e2e5 = "android",
      _0x491010 = _0x1c8094 || "11.0.2",
      _0x5b3857 = [[0, 2], [1, 1], [2, 0]],
      _0x3b6f58,
      _0x240fc6;
    [_0x3b6f58, _0x240fc6] = _0x5b3857[Math.floor(Math.random() * _0x5b3857.length)];
    let _0x3d8528 = "1" + _0x3b6f58 + _0x240fc6,
      _0x3b3874 = new Date().getTime();
    _0x5a7f18 = typeof _0x5a7f18 == "string" ? _0x5a7f18 : JSON.stringify(_0x5a7f18);
    let _0x47834d = new Buffer.from(_0x5a7f18).toString("latin1"),
      _0x292b70 = bdy_0x2e9b86(),
      _0x53fd55 = bdy_0x55ce3b(_0x292b70),
      _0x46dd06 = "functionId=" + _0x5e19b7 + "&body=" + _0x47834d + "&uuid=" + _0x292b70 + "&client=" + _0x40e2e5 + "&clientVersion=" + _0x491010 + "&st=" + _0x3b3874 + "&sv=" + _0x3d8528,
      _0x26558b = bdy_0x2e353d(_0x46dd06, _0x3b6f58, _0x240fc6),
      _0x5d7a74 = new Buffer.from(_0x26558b).toString("base64"),
      _0x55c323 = bdy_0x4c5955.MD5(_0x5d7a74).toString();
    return "clientVersion=" + _0x491010 + "&client=" + _0x40e2e5 + "&networkType=wifi&ef=1&ep=" + _0x53fd55 + "&st=" + _0x3b3874 + "&sign=" + _0x55c323 + "&sv=" + _0x3d8528 + "&body=" + encodeURIComponent(_0x5a7f18);
  }
}
async function bdy_0x198362(_0x45cd12, _0x567489, _0x336f01) {
  const _0x335dfb = {
    fn: _0x45cd12,
    body: _0x567489
  };
  let _0x3cb06e = "";
  _0x336f01 && (_0x335dfb.ver = _0x336f01);
  const _0xe4d6cb = {
    limit: 1,
    methods: ["GET", "POST"]
  };
  const _0x19484f = {
    request: 30000
  };
  _0x3cb06e = await bdy_0x272356.post("https://6dy.jdpro.site/sign", {
    json: _0x335dfb,
    retry: _0xe4d6cb,
    hooks: {
      beforeRetry: [(_0x17feb2, _0x580e81) => {
        _0x580e81;
      }]
    },
    timeout: _0x19484f
  }).json().catch(async _0x51936c => {
    console.log("获取失败\n");
  });
  return _0x3cb06e.body;
}
async function bdy_0xbd60e8(_0x3b25ca, _0x538433) {
  const _0x2a341d = {
    fn: _0x3b25ca,
    body: _0x538433
  };
  const _0x25183a = {
    limit: 1,
    methods: ["GET", "POST"]
  };
  const _0x3601f9 = {
    request: 30000
  };
  let _0x719d7e = await bdy_0x272356.post("http://api.nolanstore.cc/sign", {
    json: _0x2a341d,
    retry: _0x25183a,
    hooks: {
      beforeRetry: [(_0x353f89, _0x25a813) => {
        _0x25a813;
      }]
    },
    timeout: _0x3601f9
  }).json().catch(_0x1e905d => {
    console.log(_0x1e905d.message);
    console.log("sign获取失败,请检查网络！\n");
  });
  return _0x719d7e.body;
}
const bdy_0x32707b = {
  getbody: bdy_0x17e86f,
  getbody2: bdy_0xbd60e8,
  getbody3: bdy_0x198362
};
module.exports = bdy_0x32707b;