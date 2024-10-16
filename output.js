//Wed Oct 16 2024 08:22:35 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var md5 = require("md5");
const request = require("request");
var authorization = "";
var qmParams = "";
var oldReadTime = null;
var oldListenerTime = null;
function getSign(_0x117a11) {
  const _0x1ec6a4 = "d3dGiJc651gSQ8w1";
  var _0x1db394 = md5(_0x117a11 + _0x1ec6a4);
  return _0x1db394;
}
function getHeaderSign() {
  var _0x19c2d2 = "AUTHORIZATION=" + authorization + "app-version=71720application-id=com.kmxs.readerchannel=qm-ucsd_lfis-white=0net-env=1platform=androidqm-params=" + qmParams + "reg=1942772753";
  return getSign(_0x19c2d2);
}
function getQmCks() {
  var _0x466dc3 = [];
  if (process.env.qmreadck) {
    if (process.env.qmreadck.indexOf("&") > -1) {
      _0x466dc3 = process.env.qmreadck.split("&");
    } else {
      if (process.env.qmreadck.indexOf("\n") > -1) {
        _0x466dc3 = process.env.qmreadck.split("\n");
      } else {
        _0x466dc3 = [process.env.qmreadck];
      }
    }
  }
  return _0x466dc3;
}
function getAllTaskId() {
  const _0x88fe65 = {
    Host: "xiaoshuo.wtzw.com",
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (Linux; Android 11; Pixel 4 XL Build/RQ3A.211001.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.58 Mobile Safari/537.36 webviewversion/71720 webviewpackagename/com.kmxs.reader",
    accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "net-env": "1",
    "qm-uaf": "20230328-445101613",
    "qm-it": "1679284583",
    channel: "qm-ucsd_lf",
    "qm-ii": "1942772753",
    "is-white": "0",
    platform: "android",
    "app-version": "71720",
    "qm-params": qmParams,
    "no-permiss": "3",
    reg: "1942772753",
    "application-id": "com.kmxs.reader",
    authorization: authorization,
    "x-requested-with": "com.kmxs.reader",
    "sec-fetch-site": "none",
    "sec-fetch-mode": "navigate",
    "sec-fetch-user": "?1",
    "sec-fetch-dest": "document",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
  };
  const _0x1ff760 = {
    url: "https://xiaoshuo.wtzw.com/app-h5/freebook/welfare-center?type=1&open_push=1&in_home_page=1",
    headers: _0x88fe65
  };
  return new Promise(_0x22b370 => {
    request(_0x1ff760, (_0x26faea, _0x1b394a, _0x5c4905) => {
      if (!_0x26faea && _0x1b394a.statusCode == 200) {
        var _0x3a3c2b = /task_id:".*?"/g;
        let _0x18a55f = _0x5c4905.match(_0x3a3c2b);
        _0x22b370(_0x18a55f);
      } else {
        _0x22b370(null);
      }
    });
  });
}
function reportTime(_0x1eeeae, _0x5edb5e) {
  const _0x219e2d = {
    "net-env": "1",
    channel: "qm-ucsd_lf",
    "is-white": "0",
    platform: "android",
    "app-version": "71720",
    reg: "1942772753",
    "application-id": "com.kmxs.reader",
    AUTHORIZATION: authorization,
    "qm-params": qmParams,
    sign: getHeaderSign(),
    "QM-uaf": "20230321-445101613",
    "QM-it": "1679284583",
    "QM-ii": "1942772753",
    "no-permiss": "3",
    "User-Agent": "webviewversion/0",
    "Content-Type": "application/x-www-form-urlencoded"
  };
  const _0x42da65 = {
    url: _0x1eeeae,
    headers: _0x219e2d,
    method: "POST",
    body: _0x5edb5e
  };
  return new Promise(_0xf0f17b => {
    request(_0x42da65, (_0x3bacb5, _0xbc6dfd, _0x26932f) => {
      if (!_0x3bacb5 && _0xbc6dfd.statusCode == 200) {
        const _0x5c89cf = JSON.parse(_0x26932f);
        _0xf0f17b(_0x5c89cf);
      } else {
        _0xf0f17b(null);
      }
    });
  });
}
function readOrListenerReward(_0x562005, _0x1af58e) {
  const _0x22d19a = {
    Host: "api-gw.wtzw.com",
    "User-Agent": "Mozilla/5.0 (Linux; Android 11; Pixel 4 XL Build/RQ3A.211001.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.57 Mobile Safari/537.36 webviewversion/71720 webviewpackagename/com.kmxs.reader",
    platform: "android",
    "app-version": "71720",
    channel: "qm-ucsd_lf",
    "application-id": "com.kmxs.reader",
    Origin: "https://xiaoshuo.wtzw.com",
    authorization: authorization,
    "qm-params": qmParams,
    Referer: "https://xiaoshuo.wtzw.com/",
    "content-type": "application/json;charset=UTF-8"
  };
  const _0x3dbcf3 = {
    install_app_list: ""
  };
  const _0x4cbe7f = {
    params: _0x3dbcf3
  };
  const _0x47b65c = {
    task_id: _0x562005,
    type_prefix: _0x1af58e,
    axiosConfig: _0x4cbe7f
  };
  const _0x210c99 = {
    url: "https://api-gw.wtzw.com/welf/h5/v1/task/reward?t=" + new Date().getTime() + "&install_app_list=",
    headers: _0x22d19a,
    method: "POST",
    body: JSON.stringify(_0x47b65c)
  };
  return new Promise(_0x37e5ef => {
    request(_0x210c99, (_0x463f3c, _0x1fab7, _0x348be0) => {
      if (!_0x463f3c && _0x1fab7.statusCode == 200) {
        const _0x1da37c = JSON.parse(_0x348be0);
        if (_0x1da37c.reward) {
          console.log("阅读赚金币：获得" + _0x1da37c.reward + "金币");
        }
        _0x37e5ef(_0x1da37c);
      } else {
        _0x37e5ef(null);
      }
    });
  });
}
async function reportReadTime(_0xc62708) {
  try {
    var _0x5c5691 = 0;
    if (oldReadTime) {
      _0x5c5691 = 1;
    }
    const _0x144c5f = "bi=" + _0xc62708 + "&bt=0&rrn=" + _0x5c5691 + "&st=" + oldReadTime;
    const _0x3b231f = _0x144c5f.replaceAll("&", "");
    var _0x2340d8 = _0x144c5f + "&sign=" + getSign(_0x3b231f);
    const _0x500624 = await reportTime("https://api-sc.wtzw.com/api/v4/timing-reward/report", _0x2340d8);
    oldReadTime = _0x500624.data.st;
    if (!_0x500624.data.tntrd) {
      console.log("阅读：阅读任务已完成");
      return _0x500624;
    }
    const _0x27f666 = _0x500624.data.tntrd.split("|");
    const _0x5d1e1f = _0x27f666[0];
    const _0x420fea = _0x27f666[1];
    if (_0x5c5691 == 0) {
      console.log("阅读：当前阅读时间", _0x5d1e1f / 60, "分钟");
    } else {
      console.log("阅读：阅读时长上传成功，当前阅读时间", _0x5d1e1f / 60, "分钟", "下次可领取阅读奖励的时间:", _0x420fea / 60, "分");
    }
    return _0x500624;
  } catch (_0x56bea1) {
    console.log("阅读：" + _0x56bea1);
  }
}
async function reportListenerTime(_0x1c1a78) {
  try {
    var _0x1930f5 = 0;
    if (oldListenerTime) {
      _0x1930f5 = 1;
    }
    const _0x4dcf03 = "bi=" + _0x1c1a78 + "&bt=0&rrn=" + _0x1930f5 + "&st=" + oldListenerTime;
    const _0x4fa05a = _0x4dcf03.replaceAll("&", "");
    var _0x372d73 = _0x4dcf03 + "&sign=" + getSign(_0x4fa05a);
    const _0x21862b = await reportTime("https://api-sc.wtzw.com/api/v4/timing-reward/report-with-album", _0x372d73);
    oldListenerTime = _0x21862b.data.st;
    if (!_0x21862b.data.tntrd) {
      console.log("听书：听书任务已完成");
      return _0x21862b;
    }
    const _0x46c8ab = _0x21862b.data.tntrd.split("|");
    const _0x3b93e5 = _0x46c8ab[0];
    const _0x1f8dfc = _0x46c8ab[1];
    if (_0x1930f5 == 0) {
      console.log("听书：当前听书时间", _0x3b93e5 / 60, "分钟");
    } else {
      console.log("听书：听书时长上传成功，当前听书时间", _0x3b93e5 / 60, "分钟", "下次可领取听书奖励的时间:", _0x1f8dfc / 60, "分");
    }
    return _0x21862b;
  } catch (_0x42615a) {
    console.log("阅读：" + _0x42615a);
  }
}
async function wait(_0x52db0a) {
  return new Promise(_0x53d312 => {
    setTimeout(() => {
      _0x53d312();
    }, _0x52db0a);
  });
}
async function start() {
  const _0x5e2862 = getQmCks();
  for (let _0x3cc949 = 0; _0x3cc949 < _0x5e2862.length; _0x3cc949++) {
    console.log("账号【", _0x3cc949 + 1, "】开始刷时长");
    const _0x39b5cc = _0x5e2862[_0x3cc949];
    const _0x10cda8 = _0x39b5cc.split("#");
    authorization = _0x10cda8[0];
    qmParams = _0x10cda8[1];
    var _0x4ef9ae = false;
    while (!_0x4ef9ae) {
      for (let _0x5bdede = 0; _0x5bdede < 2; _0x5bdede++) {
        if (_0x5bdede % 2 == 0) {
          oldListenerTime = null;
          oldReadTime = null;
        }
        await reportListenerTime(14262);
        await wait(10000);
        const _0x4ff311 = await reportReadTime(115849);
        if (!_0x4ff311 || !_0x4ff311.data.tntrd) {
          const _0x1d01bf = await getAllTaskId();
          for (let _0x2dff84 = 0; _0x2dff84 < _0x1d01bf.length; _0x2dff84++) {
            const _0x185a34 = _0x1d01bf[_0x2dff84];
            var _0x2e311c = /[0-9]+/g;
            let _0x436b27 = _0x185a34.match(_0x2e311c)[0];
            await readOrListenerReward(_0x436b27, "task");
            await wait(200);
            await readOrListenerReward(_0x436b27, "video");
          }
          _0x4ef9ae = true;
          console.log("======= 所有刷时长任务完成，已自动领取所有金币奖励 =======");
          break;
        }
        await wait(20000);
      }
    }
  }
  process.exit(0);
}
start();
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
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
      this.log("", `🔔${this.name}, 开始!`);
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
      if (i) {
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
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
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
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) {
        return s;
      }
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
        if (r) {
          try {
            const t = JSON.parse(r);
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
      } else {
        s = this.setval(t, e);
      }
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
            s && this.ckjar.setCookieSync(s, null);
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
      } else {
        if (this.isQuanX()) {
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
        } else {
          if (this.isNode()) {
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
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) {
          return t;
        }
        if ("string" == typeof t) {
          return this.isLoon() ? t : this.isQuanX() ? {
            "open-url": t
          } : this.isSurge() ? {
            url: t
          } : void 0;
        }
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
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}