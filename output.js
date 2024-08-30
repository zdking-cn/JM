//Fri Aug 30 2024 09:03:53 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
if (mode) {
  activityUrl = "https://cjhy-isv.isvjcloud.com/mc/wxMcLevelAndBirthGifts/activity?activityId=d651133fe1e74bb3823dc745d571a185";
  activityUrl = "https://cjhy-isv.isvjcloud.com/mc/wxMcLevelAndBirthGifts/activity?activityId=25386dcd16b34b14ba50b5c6c5c5b0f4";
  activityUrl = "https://cjhy-isv.isvjcloud.com/mc/wxMcLevelAndBirthGifts/activity?activityId=ee8648bca1ae492cacc43dcf8ae294d7";
  activityUrl = "https://cjhy-isv.isvjcloud.com/mc/wxMcLevelAndBirthGifts/activity?activityId=b741377f23a048a08b64999b08cbd7aa";
  activityUrl = "https://cjhy-isv.isvjcloud.com/mc/wxMcLevelAndBirthGifts/activity?activityId=b1cd3698edad47698573bad5742356f6";
  activityUrl = "https://lzkj-isv.isvjd.com/prod/cc/interaction/v2/20002/1001/?shopId=1000309923&activityId=1762435679669395458";
  activityUrl = "https://cjhy-isv.isvjcloud.com/mc/wxMcLevelAndBirthGifts/activity?activityId=d9f1239d4c4e40a49bf9930f11ed11a6";
  activityUrl = "https://cjhy-isv.isvjcloud.com/mc/wxMcLevelAndBirthGifts/activity?activityId=3c4e7a9f91fd48b5b9250f4dd15ef3e0";
  activityUrl = "https://cjhy-isv.isvjcloud.com/mc/wxMcLevelAndBirthGifts/activity?activityId=1551087f866b4ad69054347af290c6ab";
  activityUrl = "https://cjhy-isv.isvjcloud.com/mc/wxMcLevelAndBirthGifts/activity?activityId=7eab52c6fa3640c18e2ca8abf39dbd4a";
  activityUrl = "https://cjhydz-isv.isvjcloud.com/mc/wxMcLevelAndBirthGifts/haier/activity?activityId=80da786553fa4fefb4ea880a9b8cb71e";
  activityUrl = "https://cjhy-isv.isvjcloud.com/mc/wxMcLevelAndBirthGifts/activity?activityId=6d93438452b04f2784422e8c8d4b0f61";
  activityUrl = "https://cjhy-isv.isvjcloud.com/mc/wxMcLevelAndBirthGifts/activity?activityId=e22b8e9178cd496797d22280c2d7d637";
}
const {
  RunMode: _0x5883a7,
  UserMode: _0x472847,
  baseCommonEnv: _0x2885ee,
  baseCommonEnvKey: _0x1540f7
} = require("./bear");
_0x2885ee.beanNum = parseInt(process.env?.["B_WX_LEVEL_BIRTH_BEAN_NUM"] || 10);
_0x1540f7.B_WX_LEVEL_BIRTH_BEAN_NUM = "beanNum";
_0x2885ee.receiveMode = parseInt(process.env.B_WX_LEVEL_BIRTH_RECEIVE_MODE || 0);
_0x2885ee.cjRetryCount = parseInt(process.env.B_WX_LEVEL_BIRTH_RETRY_COUNT || 3);
_0x1540f7.B_WX_LEVEL_BIRTH_RECEIVE_MODE = "receiveMode";
_0x1540f7.B_WX_LEVEL_BIRTH_RETRY_COUNT = "cjRetryCount";
_0x5883a7.envInfo = {
  "name": "等级/生日礼包beta",
  "runName": "jd_wx_levelBirth",
  "version": "2.0.1"
};
class _0xa05f4e extends _0x472847 {
  constructor(_0x9bfc8e, _0x416306) {
    super(_0x9bfc8e, _0x416306);
    this.level = 0;
    this.openedCard = false;
  }
  async ["saveBirthDay"]() {
    let _0x5efd03 = this.formatDate(Date.now(), "yyyy-MM-dd"),
      _0x39c1f6 = await this.wxApi("mc/wxMcLevelAndBirthGifts/saveBirthDay", {
        "venderId": this.venderId,
        "pin": this.secretPin,
        "birthDay": _0x5efd03
      });
    if (_0x39c1f6 && _0x39c1f6.result) {
      this.log("设置生日" + _0x5efd03 + "成功");
      return;
    }
    let _0x525398 = _0x39c1f6?.["errorMessage"] || "设置生日失败";
    this.log(_0x525398);
  }
  async ["sendBirthGifts"](_0x17fdfd = 0) {
    let _0x17a979 = await this.wxApi("mc/wxMcLevelAndBirthGifts/sendBirthGifts", {
      "activityId": this.activityId,
      "venderId": this.venderId,
      "pin": this.secretPin,
      "level": this.level
    });
    this.debug(_0x17a979);
    if (_0x17a979 && _0x17a979.result) {
      let _0x485c63 = [];
      if (_0x17a979.data?.["birthdayData"]) for (let _0x6bd370 of _0x17a979.data.birthdayData) {
        _0x6bd370.name && _0x485c63.push(_0x6bd370.beanNum + "个" + _0x6bd370.name);
      }
      _0x485c63.length > 0 ? this.putMsg(_0x485c63.join(",")) : this.putMsg("没有获得奖品");
      return;
    }
    let _0x1fcb51 = _0x17a979?.["errorMessage"] || _0x17a979?.["data"]?.["birthdayError"] || "领取生日礼包失败";
    if (_0x1fcb51.includes("奖品已领完") && _0x17fdfd <= _0x2885ee.cjRetryCount) {
      return this.debug(_0x1fcb51), await this.sendBirthGifts(_0x17fdfd + 1);
    }
    this.putMsg(_0x1fcb51);
    await this.wxStopSync(_0x1fcb51);
  }
  async ["sendLevelGifts"]() {
    let _0x34890d = await this.wxApi("mc/wxMcLevelAndBirthGifts/sendLevelGifts", {
      "activityId": this.activityId,
      "venderId": this.venderId,
      "pin": this.secretPin,
      "level": this.level
    });
    this.debug(_0x34890d);
    if (_0x34890d && _0x34890d.result) {
      let _0x16eb42 = [];
      if (_0x34890d.data?.["birthdayData"]) for (let _0x4ee0c3 of _0x34890d.data.birthdayData) {
        _0x4ee0c3.name && _0x16eb42.push(_0x4ee0c3.beanNum + "个" + _0x4ee0c3.name);
      }
      if (_0x16eb42.length > 0) {
        this.putMsg(_0x16eb42.join(","));
      } else {
        this.putMsg("没有获得奖品");
      }
      return;
    }
    let _0x966c17 = _0x34890d?.["errorMessage"] || _0x34890d?.["data"]?.["levelError"] || "领取等级礼包失败";
    this.putMsg(_0x966c17);
    await this.wxStopSync(_0x966c17);
  }
  async ["userTask"]() {
    await this.isvObfuscator();
    if (this.mode === "v2") {
      await this.login();
      let _0x2d5b2a = await this.v2Api("api/" + this.activityType + "/getActivityInfo");
      this.debug(_0x2d5b2a);
      if (!_0x2d5b2a && !_0x2d5b2a.code === 200) {
        this.putMsg("获取活动信息失败");
        return;
      }
      if (_0x2d5b2a?.["data"]?.["remark"]?.["includes"]("已经领取") || _0x2d5b2a?.["data"]?.["status"] === 4) {
        this.putMsg("已领取");
        return;
      }
      let _0x51fa65 = await this.v2Api("api/" + this.activityType + "/birthday", {
        "birthday": this.formatDate(Date.now(), "yyyy/MM/dd")
      });
      this.debug(_0x51fa65);
      let _0x270bdd = await this.v2Api("api/" + this.activityType + "/receivePrize");
      this.debug(_0x270bdd);
      let _0xe952ff = await this.v2Api("api/" + this.activityType + "/myPrizes");
      this.debug(_0xe952ff);
      if (_0xe952ff && _0xe952ff.code === 200) {
        this.putMsg(_0xe952ff.data.map(_0x5c86bf => "" + _0x5c86bf.prizeName).join(",") || "空气");
        return;
      }
      this.putMsg("领取失败");
      return;
    }
    await this.getDefenseUrls();
    await this.wxCommonInfo();
    await this.getSimpleActInfoVo();
    this.defenseUrls.length === 0 ? await this.getMyPing() : await this.initPinToken();
    await this.accessLog();
    let _0x2f8164 = await this.wxApi("mc/new/brandCard/common/shopAndBrand/getOpenCardInfo", {
      "venderId": this.venderId,
      "buyerPin": this.secretPin,
      "activityType": 103
    });
    this.debug(_0x2f8164);
    if (_0x2f8164 && _0x2f8164.result) this.openedCard = _0x2f8164.data.openedCard;else {
      let _0x2f0c92 = _0x2f8164?.["errorMessage"] || "获取开卡信息失败";
      this.log(_0x2f0c92);
    }
    let _0x4349aa = await this.wxApi("mc/wxMcLevelAndBirthGifts/getMemberLevel", {
      "venderId": this.venderId,
      "pin": this.secretPin
    });
    this.debug(_0x4349aa);
    if (_0x4349aa && _0x4349aa.result) this.level = _0x4349aa.data.level;else {
      let _0x214163 = _0x4349aa?.["errorMessage"] || "获取会员等级失败";
      this.log(_0x214163);
    }
    let _0xa94c23 = await this.activityContent({
      "level": 1
    });
    this.debug(_0xa94c23);
    if (_0xa94c23 && _0xa94c23.result) {
      let _0x253371 = JSON.parse(_0xa94c23.data?.["content"]).filter(_0x499131 => [4, 6, 7, 9, 13, 14, 15, 16].includes(_0x499131.type) && (_0x2885ee.receiveMode === 1 ? _0x499131.name == "京豆" : true));
      if (_0x253371.length === 0) {
        this.putMsg("垃圾或领完");
        this.stop();
        return;
      }
      _0x253371 = _0x253371.sort((_0x35a217, _0x9534f4) => _0x35a217.drawLevel - _0x9534f4.drawLevel);
      if (_0xa94c23.data.isReceived === 0) {
        let _0x2e60b6 = !this.openedCard && _0x253371.filter(_0xe0747 => _0xe0747.beanNum >= _0x2885ee.beanNum && _0xe0747.name == "京豆" && _0xe0747.drawLevel == 1).length > 0;
        if (_0x2e60b6) {
          await this.getShopOpenCardInfo();
          await this.bindWithVender();
          if (this.canNotOpenCard) return;
          this.level = 1;
        }
        this.debug(this.activityType);
        if (_0x253371[0]?.["drawLevel"] > this.level) return this.putMsg("等级不够"), this.exit();
        if (this.activityType === 103) {
          if (!_0x253371.some(_0x15af44 => _0x2885ee.receiveMode === 1 ? _0x15af44.name == "京豆" && _0x15af44.drawLevel == this.level : true)) return this.putMsg("无京豆,退出领取"), this.exit();
          await this.saveBirthDay();
          await this.sendBirthGifts();
        } else {
          if ([104, 119].includes(this.activityType)) {
            if (_0x253371[0]?.["drawLevel"] > this.level) return this.putMsg("等级不够"), this.exit();
            await this.sendLevelGifts();
          }
        }
      } else this.putMsg("已领取");
      return;
    }
    let _0x61a783 = _0xa94c23?.["errorMessage"] || "获取活动信息失败";
    this.putMsg(_0x61a783);
    await this.wxStopSync(_0x61a783);
  }
}
_0x5883a7.activity = {
  "activityUrl": activityUrl
};
_0x5883a7.TaskClass = _0xa05f4e;
_0x5883a7.run({
  "whitelist": ["1-20"],
  "main_thread": 3
});