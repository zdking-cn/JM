//Thu Sep 19 2024 00:43:48 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("酷狗音乐");
let status;
status = (status = $.getval("kugoustatus") || "1") > 1 ? "" + status : "";
let kgyyArr = [];
let kgyy = ($.isNode() ? process.env.kgyy : $.getdata("kgyy")) || "";
let uuid = "",
  dfid = "",
  token = "",
  userid = "",
  taskid = "",
  mid = "",
  kugousign = "";
let rwid = ["1", "6", "9", "11", "21", "22", "23", "29", "31", "34", "35", "36", "37", "38", "39", "43", "45", "46", "1101", "1105", "1107"];
!(async () => {
  if (typeof $request !== "undefined") {
    await kugouck();
  } else {
    kgyyArr = kgyy.split("@");
    console.log("------------- 共" + kgyyArr.length + "个账号-------------\n");
    for (let _0x138a39 = 0; _0x138a39 < kgyyArr.length; _0x138a39++) {
      kgyy = kgyyArr[_0x138a39];
      $.index = _0x138a39 + 1;
      console.log("\n开始【酷狗音乐" + $.index + "】");
      token = kgyy.match(/token=(\w+)/)[1];
      uuid = kgyy.match(/uuid=(\w+)/)[1];
      dfid = kgyy.match(/dfid=(\w+)/)[1];
      userid = kgyy.match(/userid=(\w+)/)[1];
      mid = kgyy.match(/mid=(\w+)/)[1];
      for (let _0x2d5513 = 0; _0x2d5513 < rwid.length; _0x2d5513++) {
        console.log("\n酷狗音乐执行任务ID:" + rwid[_0x2d5513]);
        taskid = rwid[_0x2d5513];
        await $.wait(500);
        await kugourw();
      }
    }
  }
})().catch(_0x58b30d => $.logErr(_0x58b30d)).finally(() => $.done());
function kugouck() {
  if ($request.url.indexOf("article/list") > -1) {
    const _0x144ba3 = JSON.stringify($request.body);
    if (_0x144ba3) $.setdata(_0x144ba3, "kgyy" + status);
    $.log(_0x144ba3);
    $.msg($.name, "", "" + ("" + status) + "token获取成功！");
  }
}
function kugourw(_0x5cc88d = 0) {
  return new Promise(_0x28bd91 => {
    let _0x570374 = Math.round(new Date().getTime() / 1000).toString();
    kugousign = md5("OIlwieks28dk2k092lksi2UIkpappid=1005clienttime=" + _0x570374 + "clientver=11109dfid=" + dfid + "from=clientmid=" + mid + "token=" + token + "userid=" + userid + "uuid=" + uuid + "{\"taskid\":" + taskid + ",\"user_label\":{\"val6\":3456,\"val5\":0,\"val4\":0,\"val3\":0,\"val2\":128,\"val1\":4224}}OIlwieks28dk2k092lksi2UIkp");
    let _0x114269 = {
      "url": "https://gateway.kugou.com/mstc/musicsymbol/v1/task/submit?dfid=" + dfid + "&signature=" + kugousign + "&appid=1005&mid=" + mid + "&clientver=11109&from=client&clienttime=" + _0x570374 + "&uuid=" + uuid + "&userid=" + userid + "&token=" + token,
      "headers": JSON.parse("{\"Host\":\"gateway.kugou.com\",\"kg-thash\":\"3d6790c\",\"accept-encoding\":\"gzip, deflate\",\"user-agent\":\"Android10-AndroidPhone-11109-47-0-MusicalNoteProtocol-wifi\",\"kg-rc\":\"1\",\"kg-fake\":\"" + userid + "\",\"kg-rf\":\"0080d6f1\",\"content-type\":\"application/json; charset=utf-8\"}"),
      "body": "{\"taskid\":" + taskid + ",\"user_label\":{\"val6\":3456,\"val5\":0,\"val4\":0,\"val3\":0,\"val2\":128,\"val1\":4224}}"
    };
    $.post(_0x114269, async (_0x3788ff, _0x3e8019, _0x4a85ad) => {
      try {
        const _0x2e4c00 = JSON.parse(_0x4a85ad);
        if (_0x2e4c00.errcode == 0) {
          $.log("\n酷狗音乐【任务ID" + taskid + "】获得:" + _0x2e4c00.data.awards.coins + "狗狗币");
          await $.wait(10000);
          await kugourw();
        } else {
          $.log("\n酷狗音乐【任务ID" + taskid + "】:" + _0x2e4c00.error);
        }
      } catch (_0x4d8573) {} finally {
        _0x28bd91();
      }
    }, _0x5cc88d);
  });
}
function md5(_0x13b5d3) {
  function _0x34c170(_0x13b5d3, _0x34c170) {
    return _0x13b5d3 << _0x34c170 | _0x13b5d3 >>> 32 - _0x34c170;
  }
  function _0x2ae3d3(_0x13b5d3, _0x34c170) {
    var _0x2ae3d3, _0x418618, _0x4e9408, _0x2cdd67, _0x5b4d6f;
    return _0x4e9408 = 2147483648 & _0x13b5d3, _0x2cdd67 = 2147483648 & _0x34c170, _0x2ae3d3 = 1073741824 & _0x13b5d3, _0x418618 = 1073741824 & _0x34c170, _0x5b4d6f = (1073741823 & _0x13b5d3) + (1073741823 & _0x34c170), _0x2ae3d3 & _0x418618 ? 2147483648 ^ _0x5b4d6f ^ _0x4e9408 ^ _0x2cdd67 : _0x2ae3d3 | _0x418618 ? 1073741824 & _0x5b4d6f ? 3221225472 ^ _0x5b4d6f ^ _0x4e9408 ^ _0x2cdd67 : 1073741824 ^ _0x5b4d6f ^ _0x4e9408 ^ _0x2cdd67 : _0x5b4d6f ^ _0x4e9408 ^ _0x2cdd67;
  }
  function _0x2391c0(_0x13b5d3, _0x34c170, _0x2ae3d3) {
    return _0x13b5d3 & _0x34c170 | ~_0x13b5d3 & _0x2ae3d3;
  }
  function _0x5159ff(_0x13b5d3, _0x34c170, _0x2ae3d3) {
    return _0x13b5d3 & _0x2ae3d3 | _0x34c170 & ~_0x2ae3d3;
  }
  function _0x2c2387(_0x13b5d3, _0x34c170, _0x2ae3d3) {
    return _0x13b5d3 ^ _0x34c170 ^ _0x2ae3d3;
  }
  function _0x4d1448(_0x13b5d3, _0x34c170, _0x2ae3d3) {
    return _0x34c170 ^ (_0x13b5d3 | ~_0x2ae3d3);
  }
  function _0x1038f4(_0x13b5d3, _0x5159ff, _0x2c2387, _0x4d1448, _0x1038f4, _0x33d63e, _0x226f86) {
    return _0x13b5d3 = _0x2ae3d3(_0x13b5d3, _0x2ae3d3(_0x2ae3d3(_0x2391c0(_0x5159ff, _0x2c2387, _0x4d1448), _0x1038f4), _0x226f86)), _0x2ae3d3(_0x34c170(_0x13b5d3, _0x33d63e), _0x5159ff);
  }
  function _0x24d961(_0x13b5d3, _0x2391c0, _0x2c2387, _0x4d1448, _0x1038f4, _0x24d961, _0x52ad3e) {
    return _0x13b5d3 = _0x2ae3d3(_0x13b5d3, _0x2ae3d3(_0x2ae3d3(_0x5159ff(_0x2391c0, _0x2c2387, _0x4d1448), _0x1038f4), _0x52ad3e)), _0x2ae3d3(_0x34c170(_0x13b5d3, _0x24d961), _0x2391c0);
  }
  function _0x1db9b5(_0x13b5d3, _0x2391c0, _0x5159ff, _0x4d1448, _0x1038f4, _0x24d961, _0x1db9b5) {
    return _0x13b5d3 = _0x2ae3d3(_0x13b5d3, _0x2ae3d3(_0x2ae3d3(_0x2c2387(_0x2391c0, _0x5159ff, _0x4d1448), _0x1038f4), _0x1db9b5)), _0x2ae3d3(_0x34c170(_0x13b5d3, _0x24d961), _0x2391c0);
  }
  function _0x306e0b(_0x13b5d3, _0x2391c0, _0x5159ff, _0x2c2387, _0x1038f4, _0x24d961, _0x1db9b5) {
    return _0x13b5d3 = _0x2ae3d3(_0x13b5d3, _0x2ae3d3(_0x2ae3d3(_0x4d1448(_0x2391c0, _0x5159ff, _0x2c2387), _0x1038f4), _0x1db9b5)), _0x2ae3d3(_0x34c170(_0x13b5d3, _0x24d961), _0x2391c0);
  }
  function _0x48224e(_0x13b5d3) {
    for (var _0x34c170, _0x2ae3d3 = _0x13b5d3.length, _0x2391c0 = _0x2ae3d3 + 8, _0x5159ff = (_0x2391c0 - _0x2391c0 % 64) / 64, _0x2c2387 = 16 * (_0x5159ff + 1), _0x4d1448 = new Array(_0x2c2387 - 1), _0x1038f4 = 0, _0x24d961 = 0; _0x2ae3d3 > _0x24d961;) {
      _0x34c170 = (_0x24d961 - _0x24d961 % 4) / 4;
      _0x1038f4 = _0x24d961 % 4 * 8;
      _0x4d1448[_0x34c170] = _0x4d1448[_0x34c170] | _0x13b5d3.charCodeAt(_0x24d961) << _0x1038f4;
      _0x24d961++;
    }
    return _0x34c170 = (_0x24d961 - _0x24d961 % 4) / 4, _0x1038f4 = _0x24d961 % 4 * 8, _0x4d1448[_0x34c170] = _0x4d1448[_0x34c170] | 128 << _0x1038f4, _0x4d1448[_0x2c2387 - 2] = _0x2ae3d3 << 3, _0x4d1448[_0x2c2387 - 1] = _0x2ae3d3 >>> 29, _0x4d1448;
  }
  function _0x45f78e(_0x13b5d3) {
    var _0x34c170,
      _0x2ae3d3,
      _0x2391c0 = "",
      _0x5159ff = "";
    for (_0x2ae3d3 = 0; 3 >= _0x2ae3d3; _0x2ae3d3++) {
      _0x34c170 = _0x13b5d3 >>> 8 * _0x2ae3d3 & 255;
      _0x5159ff = "0" + _0x34c170.toString(16);
      _0x2391c0 += _0x5159ff.substr(_0x5159ff.length - 2, 2);
    }
    return _0x2391c0;
  }
  function _0x3f1553(_0x13b5d3) {
    _0x13b5d3 = _0x13b5d3.replace(/\r\n/g, "\n");
    for (var _0x34c170 = "", _0x2ae3d3 = 0; _0x2ae3d3 < _0x13b5d3.length; _0x2ae3d3++) {
      var _0x2391c0 = _0x13b5d3.charCodeAt(_0x2ae3d3);
      128 > _0x2391c0 ? _0x34c170 += String.fromCharCode(_0x2391c0) : _0x2391c0 > 127 && 2048 > _0x2391c0 ? (_0x34c170 += String.fromCharCode(_0x2391c0 >> 6 | 192), _0x34c170 += String.fromCharCode(63 & _0x2391c0 | 128)) : (_0x34c170 += String.fromCharCode(_0x2391c0 >> 12 | 224), _0x34c170 += String.fromCharCode(_0x2391c0 >> 6 & 63 | 128), _0x34c170 += String.fromCharCode(63 & _0x2391c0 | 128));
    }
    return _0x34c170;
  }
  var _0x2ed4b5,
    _0x47f185,
    _0x34036f,
    _0x18fc4d,
    _0x42d30a,
    _0x1e07e0,
    _0x1e1be1,
    _0x9b3aee,
    _0x31eb8f,
    _0x2464a9 = [],
    _0x534bd9 = 7,
    _0x88305c = 12,
    _0x7a056c = 17,
    _0x527c59 = 22,
    _0x923d98 = 5,
    _0x37f1f2 = 9,
    _0x5d07c0 = 14,
    _0x434801 = 20,
    _0x5b25da = 4,
    _0x38b1dc = 11,
    _0x351fd2 = 16,
    _0xf8c010 = 23,
    _0x2e8808 = 6,
    _0x2f8708 = 10,
    _0x184ea7 = 15,
    _0x4a1690 = 21;
  for (_0x13b5d3 = _0x3f1553(_0x13b5d3), _0x2464a9 = _0x48224e(_0x13b5d3), _0x1e07e0 = 1732584193, _0x1e1be1 = 4023233417, _0x9b3aee = 2562383102, _0x31eb8f = 271733878, _0x2ed4b5 = 0; _0x2ed4b5 < _0x2464a9.length; _0x2ed4b5 += 16) {
    _0x47f185 = _0x1e07e0;
    _0x34036f = _0x1e1be1;
    _0x18fc4d = _0x9b3aee;
    _0x42d30a = _0x31eb8f;
    _0x1e07e0 = _0x1038f4(_0x1e07e0, _0x1e1be1, _0x9b3aee, _0x31eb8f, _0x2464a9[_0x2ed4b5 + 0], _0x534bd9, 3614090360);
    _0x31eb8f = _0x1038f4(_0x31eb8f, _0x1e07e0, _0x1e1be1, _0x9b3aee, _0x2464a9[_0x2ed4b5 + 1], _0x88305c, 3905402710);
    _0x9b3aee = _0x1038f4(_0x9b3aee, _0x31eb8f, _0x1e07e0, _0x1e1be1, _0x2464a9[_0x2ed4b5 + 2], _0x7a056c, 606105819);
    _0x1e1be1 = _0x1038f4(_0x1e1be1, _0x9b3aee, _0x31eb8f, _0x1e07e0, _0x2464a9[_0x2ed4b5 + 3], _0x527c59, 3250441966);
    _0x1e07e0 = _0x1038f4(_0x1e07e0, _0x1e1be1, _0x9b3aee, _0x31eb8f, _0x2464a9[_0x2ed4b5 + 4], _0x534bd9, 4118548399);
    _0x31eb8f = _0x1038f4(_0x31eb8f, _0x1e07e0, _0x1e1be1, _0x9b3aee, _0x2464a9[_0x2ed4b5 + 5], _0x88305c, 1200080426);
    _0x9b3aee = _0x1038f4(_0x9b3aee, _0x31eb8f, _0x1e07e0, _0x1e1be1, _0x2464a9[_0x2ed4b5 + 6], _0x7a056c, 2821735955);
    _0x1e1be1 = _0x1038f4(_0x1e1be1, _0x9b3aee, _0x31eb8f, _0x1e07e0, _0x2464a9[_0x2ed4b5 + 7], _0x527c59, 4249261313);
    _0x1e07e0 = _0x1038f4(_0x1e07e0, _0x1e1be1, _0x9b3aee, _0x31eb8f, _0x2464a9[_0x2ed4b5 + 8], _0x534bd9, 1770035416);
    _0x31eb8f = _0x1038f4(_0x31eb8f, _0x1e07e0, _0x1e1be1, _0x9b3aee, _0x2464a9[_0x2ed4b5 + 9], _0x88305c, 2336552879);
    _0x9b3aee = _0x1038f4(_0x9b3aee, _0x31eb8f, _0x1e07e0, _0x1e1be1, _0x2464a9[_0x2ed4b5 + 10], _0x7a056c, 4294925233);
    _0x1e1be1 = _0x1038f4(_0x1e1be1, _0x9b3aee, _0x31eb8f, _0x1e07e0, _0x2464a9[_0x2ed4b5 + 11], _0x527c59, 2304563134);
    _0x1e07e0 = _0x1038f4(_0x1e07e0, _0x1e1be1, _0x9b3aee, _0x31eb8f, _0x2464a9[_0x2ed4b5 + 12], _0x534bd9, 1804603682);
    _0x31eb8f = _0x1038f4(_0x31eb8f, _0x1e07e0, _0x1e1be1, _0x9b3aee, _0x2464a9[_0x2ed4b5 + 13], _0x88305c, 4254626195);
    _0x9b3aee = _0x1038f4(_0x9b3aee, _0x31eb8f, _0x1e07e0, _0x1e1be1, _0x2464a9[_0x2ed4b5 + 14], _0x7a056c, 2792965006);
    _0x1e1be1 = _0x1038f4(_0x1e1be1, _0x9b3aee, _0x31eb8f, _0x1e07e0, _0x2464a9[_0x2ed4b5 + 15], _0x527c59, 1236535329);
    _0x1e07e0 = _0x24d961(_0x1e07e0, _0x1e1be1, _0x9b3aee, _0x31eb8f, _0x2464a9[_0x2ed4b5 + 1], _0x923d98, 4129170786);
    _0x31eb8f = _0x24d961(_0x31eb8f, _0x1e07e0, _0x1e1be1, _0x9b3aee, _0x2464a9[_0x2ed4b5 + 6], _0x37f1f2, 3225465664);
    _0x9b3aee = _0x24d961(_0x9b3aee, _0x31eb8f, _0x1e07e0, _0x1e1be1, _0x2464a9[_0x2ed4b5 + 11], _0x5d07c0, 643717713);
    _0x1e1be1 = _0x24d961(_0x1e1be1, _0x9b3aee, _0x31eb8f, _0x1e07e0, _0x2464a9[_0x2ed4b5 + 0], _0x434801, 3921069994);
    _0x1e07e0 = _0x24d961(_0x1e07e0, _0x1e1be1, _0x9b3aee, _0x31eb8f, _0x2464a9[_0x2ed4b5 + 5], _0x923d98, 3593408605);
    _0x31eb8f = _0x24d961(_0x31eb8f, _0x1e07e0, _0x1e1be1, _0x9b3aee, _0x2464a9[_0x2ed4b5 + 10], _0x37f1f2, 38016083);
    _0x9b3aee = _0x24d961(_0x9b3aee, _0x31eb8f, _0x1e07e0, _0x1e1be1, _0x2464a9[_0x2ed4b5 + 15], _0x5d07c0, 3634488961);
    _0x1e1be1 = _0x24d961(_0x1e1be1, _0x9b3aee, _0x31eb8f, _0x1e07e0, _0x2464a9[_0x2ed4b5 + 4], _0x434801, 3889429448);
    _0x1e07e0 = _0x24d961(_0x1e07e0, _0x1e1be1, _0x9b3aee, _0x31eb8f, _0x2464a9[_0x2ed4b5 + 9], _0x923d98, 568446438);
    _0x31eb8f = _0x24d961(_0x31eb8f, _0x1e07e0, _0x1e1be1, _0x9b3aee, _0x2464a9[_0x2ed4b5 + 14], _0x37f1f2, 3275163606);
    _0x9b3aee = _0x24d961(_0x9b3aee, _0x31eb8f, _0x1e07e0, _0x1e1be1, _0x2464a9[_0x2ed4b5 + 3], _0x5d07c0, 4107603335);
    _0x1e1be1 = _0x24d961(_0x1e1be1, _0x9b3aee, _0x31eb8f, _0x1e07e0, _0x2464a9[_0x2ed4b5 + 8], _0x434801, 1163531501);
    _0x1e07e0 = _0x24d961(_0x1e07e0, _0x1e1be1, _0x9b3aee, _0x31eb8f, _0x2464a9[_0x2ed4b5 + 13], _0x923d98, 2850285829);
    _0x31eb8f = _0x24d961(_0x31eb8f, _0x1e07e0, _0x1e1be1, _0x9b3aee, _0x2464a9[_0x2ed4b5 + 2], _0x37f1f2, 4243563512);
    _0x9b3aee = _0x24d961(_0x9b3aee, _0x31eb8f, _0x1e07e0, _0x1e1be1, _0x2464a9[_0x2ed4b5 + 7], _0x5d07c0, 1735328473);
    _0x1e1be1 = _0x24d961(_0x1e1be1, _0x9b3aee, _0x31eb8f, _0x1e07e0, _0x2464a9[_0x2ed4b5 + 12], _0x434801, 2368359562);
    _0x1e07e0 = _0x1db9b5(_0x1e07e0, _0x1e1be1, _0x9b3aee, _0x31eb8f, _0x2464a9[_0x2ed4b5 + 5], _0x5b25da, 4294588738);
    _0x31eb8f = _0x1db9b5(_0x31eb8f, _0x1e07e0, _0x1e1be1, _0x9b3aee, _0x2464a9[_0x2ed4b5 + 8], _0x38b1dc, 2272392833);
    _0x9b3aee = _0x1db9b5(_0x9b3aee, _0x31eb8f, _0x1e07e0, _0x1e1be1, _0x2464a9[_0x2ed4b5 + 11], _0x351fd2, 1839030562);
    _0x1e1be1 = _0x1db9b5(_0x1e1be1, _0x9b3aee, _0x31eb8f, _0x1e07e0, _0x2464a9[_0x2ed4b5 + 14], _0xf8c010, 4259657740);
    _0x1e07e0 = _0x1db9b5(_0x1e07e0, _0x1e1be1, _0x9b3aee, _0x31eb8f, _0x2464a9[_0x2ed4b5 + 1], _0x5b25da, 2763975236);
    _0x31eb8f = _0x1db9b5(_0x31eb8f, _0x1e07e0, _0x1e1be1, _0x9b3aee, _0x2464a9[_0x2ed4b5 + 4], _0x38b1dc, 1272893353);
    _0x9b3aee = _0x1db9b5(_0x9b3aee, _0x31eb8f, _0x1e07e0, _0x1e1be1, _0x2464a9[_0x2ed4b5 + 7], _0x351fd2, 4139469664);
    _0x1e1be1 = _0x1db9b5(_0x1e1be1, _0x9b3aee, _0x31eb8f, _0x1e07e0, _0x2464a9[_0x2ed4b5 + 10], _0xf8c010, 3200236656);
    _0x1e07e0 = _0x1db9b5(_0x1e07e0, _0x1e1be1, _0x9b3aee, _0x31eb8f, _0x2464a9[_0x2ed4b5 + 13], _0x5b25da, 681279174);
    _0x31eb8f = _0x1db9b5(_0x31eb8f, _0x1e07e0, _0x1e1be1, _0x9b3aee, _0x2464a9[_0x2ed4b5 + 0], _0x38b1dc, 3936430074);
    _0x9b3aee = _0x1db9b5(_0x9b3aee, _0x31eb8f, _0x1e07e0, _0x1e1be1, _0x2464a9[_0x2ed4b5 + 3], _0x351fd2, 3572445317);
    _0x1e1be1 = _0x1db9b5(_0x1e1be1, _0x9b3aee, _0x31eb8f, _0x1e07e0, _0x2464a9[_0x2ed4b5 + 6], _0xf8c010, 76029189);
    _0x1e07e0 = _0x1db9b5(_0x1e07e0, _0x1e1be1, _0x9b3aee, _0x31eb8f, _0x2464a9[_0x2ed4b5 + 9], _0x5b25da, 3654602809);
    _0x31eb8f = _0x1db9b5(_0x31eb8f, _0x1e07e0, _0x1e1be1, _0x9b3aee, _0x2464a9[_0x2ed4b5 + 12], _0x38b1dc, 3873151461);
    _0x9b3aee = _0x1db9b5(_0x9b3aee, _0x31eb8f, _0x1e07e0, _0x1e1be1, _0x2464a9[_0x2ed4b5 + 15], _0x351fd2, 530742520);
    _0x1e1be1 = _0x1db9b5(_0x1e1be1, _0x9b3aee, _0x31eb8f, _0x1e07e0, _0x2464a9[_0x2ed4b5 + 2], _0xf8c010, 3299628645);
    _0x1e07e0 = _0x306e0b(_0x1e07e0, _0x1e1be1, _0x9b3aee, _0x31eb8f, _0x2464a9[_0x2ed4b5 + 0], _0x2e8808, 4096336452);
    _0x31eb8f = _0x306e0b(_0x31eb8f, _0x1e07e0, _0x1e1be1, _0x9b3aee, _0x2464a9[_0x2ed4b5 + 7], _0x2f8708, 1126891415);
    _0x9b3aee = _0x306e0b(_0x9b3aee, _0x31eb8f, _0x1e07e0, _0x1e1be1, _0x2464a9[_0x2ed4b5 + 14], _0x184ea7, 2878612391);
    _0x1e1be1 = _0x306e0b(_0x1e1be1, _0x9b3aee, _0x31eb8f, _0x1e07e0, _0x2464a9[_0x2ed4b5 + 5], _0x4a1690, 4237533241);
    _0x1e07e0 = _0x306e0b(_0x1e07e0, _0x1e1be1, _0x9b3aee, _0x31eb8f, _0x2464a9[_0x2ed4b5 + 12], _0x2e8808, 1700485571);
    _0x31eb8f = _0x306e0b(_0x31eb8f, _0x1e07e0, _0x1e1be1, _0x9b3aee, _0x2464a9[_0x2ed4b5 + 3], _0x2f8708, 2399980690);
    _0x9b3aee = _0x306e0b(_0x9b3aee, _0x31eb8f, _0x1e07e0, _0x1e1be1, _0x2464a9[_0x2ed4b5 + 10], _0x184ea7, 4293915773);
    _0x1e1be1 = _0x306e0b(_0x1e1be1, _0x9b3aee, _0x31eb8f, _0x1e07e0, _0x2464a9[_0x2ed4b5 + 1], _0x4a1690, 2240044497);
    _0x1e07e0 = _0x306e0b(_0x1e07e0, _0x1e1be1, _0x9b3aee, _0x31eb8f, _0x2464a9[_0x2ed4b5 + 8], _0x2e8808, 1873313359);
    _0x31eb8f = _0x306e0b(_0x31eb8f, _0x1e07e0, _0x1e1be1, _0x9b3aee, _0x2464a9[_0x2ed4b5 + 15], _0x2f8708, 4264355552);
    _0x9b3aee = _0x306e0b(_0x9b3aee, _0x31eb8f, _0x1e07e0, _0x1e1be1, _0x2464a9[_0x2ed4b5 + 6], _0x184ea7, 2734768916);
    _0x1e1be1 = _0x306e0b(_0x1e1be1, _0x9b3aee, _0x31eb8f, _0x1e07e0, _0x2464a9[_0x2ed4b5 + 13], _0x4a1690, 1309151649);
    _0x1e07e0 = _0x306e0b(_0x1e07e0, _0x1e1be1, _0x9b3aee, _0x31eb8f, _0x2464a9[_0x2ed4b5 + 4], _0x2e8808, 4149444226);
    _0x31eb8f = _0x306e0b(_0x31eb8f, _0x1e07e0, _0x1e1be1, _0x9b3aee, _0x2464a9[_0x2ed4b5 + 11], _0x2f8708, 3174756917);
    _0x9b3aee = _0x306e0b(_0x9b3aee, _0x31eb8f, _0x1e07e0, _0x1e1be1, _0x2464a9[_0x2ed4b5 + 2], _0x184ea7, 718787259);
    _0x1e1be1 = _0x306e0b(_0x1e1be1, _0x9b3aee, _0x31eb8f, _0x1e07e0, _0x2464a9[_0x2ed4b5 + 9], _0x4a1690, 3951481745);
    _0x1e07e0 = _0x2ae3d3(_0x1e07e0, _0x47f185);
    _0x1e1be1 = _0x2ae3d3(_0x1e1be1, _0x34036f);
    _0x9b3aee = _0x2ae3d3(_0x9b3aee, _0x18fc4d);
    _0x31eb8f = _0x2ae3d3(_0x31eb8f, _0x42d30a);
  }
  var _0x34907a = _0x45f78e(_0x1e07e0) + _0x45f78e(_0x1e1be1) + _0x45f78e(_0x9b3aee) + _0x45f78e(_0x31eb8f);
  return _0x34907a.toLowerCase();
}
_0xodh = "jsjiami.com.v6";
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
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
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
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t));
      } catch {}
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
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          a = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(a, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
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
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e;
        } catch (t) {
          e = "";
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            this.ckjar.setCookieSync(s, null);
            e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else if (this.isQuanX()) {
        t.method = "POST";
        this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
          hints: !1
        }));
        $task.fetch(t).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o);
        }, t => e(t));
      } else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o);
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body);
        });
      }
    }
    time(t) {
      let e = {
        "M+": new Date().getMonth() + 1,
        "d+": new Date().getDate(),
        "H+": new Date().getHours(),
        "m+": new Date().getMinutes(),
        "s+": new Date().getSeconds(),
        "q+": Math.floor((new Date().getMonth() + 3) / 3),
        S: new Date().getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (new Date().getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
      let h = ["", "==============📣系统通知📣=============="];
      h.push(e);
      s && h.push(s);
      i && h.push(i);
      console.log(h.join("\n"));
      this.logs = this.logs.concat(h);
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}