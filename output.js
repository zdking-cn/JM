//Fri Aug 30 2024 09:13:46 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
mode && (activityUrl = "https://lzkj-isv.isvjcloud.com/wxSecond/activity/c8943bae199447c6911d488be4b453c4?activityId=c8943bae199447c6911d488be4b453c4", activityUrl = "https://lzkj-isv.isvjcloud.com/prod/cc/interactsaas/index?activityType=10035&templateId=2023120701dmpss&activityId=1803664460989202434&nodeId=101001&prd=cjwx", activityUrl = "https://lzkj-isv.isvjcloud.com/prod/cc/interactsaas/index?activityType=10035&templateId=2021062190900dmpss011&activityId=1810940065104728066&nodeId=101001&prd=cjwx");
const {
  RunMode: _0x22ac5b,
  UserMode: _0x2fca3c
} = require("./bear");
_0x22ac5b.envInfo = {
  "name": "读秒手速beta",
  "runName": "jd_wx_secondDraw",
  "version": "2.0.0"
};
class _0x15faab extends _0x2fca3c {
  constructor(_0x21ffea, _0x8b77d3) {
    super(_0x21ffea, _0x8b77d3);
    this.lzkjOpenCard = true;
  }
  async ["userTask"]() {
    await this.isvObfuscator();
    await this.getDefenseUrls();
    if (this.mode === "100") {
      await this.login();
      let _0x21e987 = await this.lzkjApi("api/task/dmpss/activity", {
        "shareUserId": ""
      });
      this.debug(_0x21e987);
      await this.lzkjTask(_0x21e987?.["data"]?.["taskActivityInfoVO"]?.["taskList"]);
      _0x21e987 = await this.lzkjApi("api/task/dmpss/activity", {
        "shareUserId": ""
      });
      let _0x418a58 = _0x21e987.data.challengeSecond,
        _0x27b277 = _0x21e987.data.challengeMilliSecond,
        _0x8062b4 = _0x418a58 + "." + _0x27b277,
        _0x165adb = _0x21e987.data.dayChance || 0,
        _0x26b342 = _0x21e987.data.pubKey,
        _0x40026f = _0x21e987.data.roomId;
      if (_0x165adb === 0) {
        this.putMsg("无游戏次数");
        return;
      }
      while (_0x165adb-- > 0) {
        let _0x297280 = await this.lzkjApi("api/task/dmpss/startGame", {
            "roomId": _0x40026f
          }),
          _0x29735f = _0x297280.data,
          _0x184dcb = _0x40026f + "," + _0x29735f;
        const _0x5acaa3 = this.rsaEncrypt(_0x26b342, {
          "encryptionScheme": "pkcs1"
        }, {
          "id": _0x184dcb,
          "score": _0x8062b4
        });
        let _0x4d60f0 = await this.lzkjApi("api/task/dmpss/draw", {
          "result": _0x5acaa3
        });
        this.debug(_0x4d60f0);
        if (_0x4d60f0?.["data"]?.["isDraw"]) {
          this.putMsg(_0x4d60f0.data.prizeName);
          _0x4d60f0.data.prizeType == 3 && (this.addressId = _0x4d60f0.data.addressId, this.prizeName = _0x4d60f0.data.prizeName, await this.saveAddress());
          _0x4d60f0.data.prizeType == 7 && this.putMsg(JSON.parse(_0x4d60f0.data?.["prizeJson"] || {})?.["cardNumber"] || "");
        } else this.putMsg("空气");
        _0x21e987 = await this.lzkjApi("api/task/dmpss/activity", {
          "shareUserId": ""
        });
        _0x40026f = _0x21e987.data.roomId;
      }
      return;
    }
    await this.wxCommonInfo();
    await this.getSimpleActInfoVo();
    await this.accessLog();
    this.index === 0 && (await this.getShopInfo());
    let _0x6e924c = await this.wxApi("wxSecond/getData", {
      "activityId": this.activityId,
      "pin": this.secretPin
    });
    this.debug(_0x6e924c);
    if (!_0x6e924c || !_0x6e924c.result) {
      let _0xcffd36 = _0x6e924c?.["errorMessage"] || "获取数据失败";
      this.putMsg(_0xcffd36);
      await this.wxStopSync(_0xcffd36);
      return;
    }
    let {
        score: _0x3e3a22,
        secondActive: _0x13844f,
        brushBane: _0x19ad3e,
        bid: _0x38249e,
        uuid: _0x11f476,
        prizeList: _0x13080e
      } = this.activityInfo,
      _0x2a2cd0 = _0x13844f?.["startTime"] || 0,
      _0x43c510 = _0x13844f?.["endTime"] || 0,
      _0x5108a8 = _0x13844f?.["targetTime"] || 0;
    _0x2fca3c.activity.startTime = _0x2a2cd0;
    _0x2fca3c.activity.endTime = _0x43c510;
    if (_0x2a2cd0 && _0x2a2cd0 > this.timestamp()) {
      this.log("活动未开始");
      this.stop();
      return;
    }
    if (_0x43c510 && _0x43c510 < this.timestamp()) {
      this.log("活动已结束");
      await this.writeLongCacheByStop();
      this.stop();
      return;
    }
    _0x13080e = _0x13080e?.["filter"](_0x1b8305 => [6, 7, 9, 13, 14, 15, 16].includes(_0x1b8305.type)) ?? [];
    if (_0x13080e.length === 0) {
      this.log("垃圾或领完");
      this.stop();
      return;
    }
    let _0x4b2726 = await this.wxApi("wxSecond/getTaskDay", {
      "activityId": this.activityId,
      "pin": this.secretPin,
      "uuid": _0x11f476
    });
    if (_0x4b2726 && _0x4b2726.result) {
      let _0x38022 = _0x4b2726.data || [];
      for (let _0x33d391 of _0x38022) {
        let _0x5e3a46 = _0x33d391.taskType;
        for (let _0x1d60a0 = 0; _0x1d60a0 < _0x33d391.dayMaxNumber && _0x33d391.finishNumber === 0; _0x1d60a0++) {
          if ([2, 5].includes(_0x5e3a46)) {
            let _0x373e16 = _0x33d391.activityTaskGoods.slice(_0x1d60a0 * _0x33d391.commodity, _0x1d60a0 * _0x33d391.commodity + _0x33d391.commodity).filter(_0x52947b => _0x52947b.complete === 0);
            for (let _0x5b8ab6 of _0x373e16) {
              let _0x128e74 = await this.wxApi("wxSecond/finishTask", {
                "activityId": this.activityId,
                "pin": this.secretPin,
                "uuid": _0x11f476,
                "taskType": _0x5e3a46,
                "skuId": _0x5b8ab6.skuId
              });
              this.debug(_0x128e74);
              getTaskGoods && getTaskGoods.result && (_0x3e3a22 += _0x128e74.data?.["score"] ?? 0);
              await this.sleep(500);
            }
            await this.sleep(500);
          }
        }
        await this.sleep(500);
      }
    }
    let _0x1f23c6 = await this.wxApi("wxSecond/getTask", {
      "activityId": this.activityId,
      "pin": this.secretPin,
      "uuid": _0x11f476
    });
    if (_0x1f23c6 && _0x1f23c6.result) {
      let _0x463346 = _0x1f23c6.data || [];
      for (let _0xa6f7a5 of _0x463346) {
        let _0x3522cf = _0xa6f7a5.taskType;
        if ([3].includes(_0x3522cf)) {
          for (let _0x1ea313 = 0; _0x1ea313 < _0xa6f7a5.dayMaxNumber && _0xa6f7a5.finishNumber === 0; _0x1ea313++) {
            let _0x531a29 = await this.wxApi("wxSecond/finishTask", {
              "activityId": this.activityId,
              "pin": this.secretPin,
              "uuid": _0x11f476,
              "taskType": _0x3522cf,
              "skuId": good.skuId
            });
            this.debug(_0x531a29);
            _0x531a29 && _0x531a29.result && (_0x3e3a22 += _0x531a29.data?.["score"] ?? 0);
            await this.sleep(500);
          }
        }
        if ([12].includes(_0x3522cf)) for (let _0x29cbda = 0; _0x29cbda < _0xa6f7a5.dayMaxNumber && _0xa6f7a5.finishNumber === 0; _0x29cbda++) {
          let _0x45c420 = await this.wxApi("wxSecond/finishTask", {
            "activityId": this.activityId,
            "pin": this.secretPin,
            "uuid": _0x11f476,
            "taskType": _0x3522cf,
            "skuId": ""
          });
          this.debug(_0x45c420);
          if (_0x45c420 && _0x45c420.result) {
            _0x3e3a22 += _0x45c420.data?.["score"] ?? 0;
          }
          await this.sleep(500);
        }
        await this.sleep(500);
      }
    }
    if (_0x3e3a22 === 0) {
      this.log("无次数");
      return;
    }
    _0x3e3a22 = Math.min(_0x3e3a22, 7);
    while (_0x3e3a22-- > 0) {
      let _0x9f4a8a = await this.wxApi("wxSecond/checkAuth", {
        "activityId": this.activityId,
        "pin": this.secretPin,
        "brushBane": _0x19ad3e,
        "bid": _0x38249e
      });
      this.debug(_0x9f4a8a);
      if (!_0x9f4a8a || !_0x9f4a8a.result) {
        let _0x5aa523 = _0x9f4a8a?.["errorMessage"] || "获取数据失败";
        this.putMsg(_0x5aa523);
        await this.wxStopSync(_0x5aa523);
        return;
      }
      let _0x44ae85 = _0x9f4a8a.data?.["brushResult"],
        _0xee0925 = await this.wxApi("wxSecond/start", {
          "activityId": this.activityId,
          "pin": this.secretPin,
          "brushBane": _0x19ad3e,
          "bid": _0x38249e,
          "uuid": _0x11f476,
          "seconds": _0x5108a8,
          "brushResult": _0x44ae85
        });
      this.debug(_0xee0925);
      if (_0xee0925 && _0xee0925.result) {
        this.putMsg(_0xee0925.data?.["draw"]?.["name"] || "空气");
        (_0xee0925.data?.["type"] === 7 || _0xee0925.data?.["drawInfoType"] === 7) && _0xee0925.data.needWriteAddress === "y" && (this.addressId = _0xee0925.data.addressId, this.prizeName = _0xee0925.data?.["draw"]?.["name"], await this.addAddress());
        continue;
      }
      let _0x59efbb = _0xee0925?.["errorMessage"] || "游戏失败";
      this.putMsg(_0x59efbb);
      await this.wxStopSync(_0x59efbb);
    }
  }
}
_0x22ac5b.activity = {
  "activityUrl": activityUrl
};
_0x22ac5b.TaskClass = _0x15faab;
_0x22ac5b.run({
  "whitelist": ["1-20"],
  "main_thread": 3
});