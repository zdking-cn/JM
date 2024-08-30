//Fri Aug 30 2024 09:00:58 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
if (mode) {
  activityUrl = "https://lzkj-isv.isvjd.com/wxShopGift/activity?activityId=48c48940394147bc9aecfc313970952d";
  activityUrl = "https://lzkj-isv.isvjd.com/wxShopGift/activity?activityId=6d1a4409036b462e915e3a29c5c97c01";
  activityUrl = "https://lzkj-isv.isvjcloud.com/prod/cc/interactsaas/index?activityType=10058&templateId=7498bc9d-0be3-480d-ae9d-59b8a074566a&activityId=1735146557846773761&nodeId=101001&giftType=1&isGiftTrue=true&prd=cjwx";
  activityUrl = "https://gzsl-isv.isvjcloud.com/wuxian/mobileForApp/dist/views/pages/newShopGiftBag.html?activityType=JRCX_183&activityId=1000337645";
  activityUrl = "https://gzsl-isv.isvjcloud.com/wuxian/mobileForApp/dist/views/pages/shopGiftBag.html?activityType=JRCX_44&activityId=1000118676";
  activityUrl = "https://lzkj-isv.isvjcloud.com/prod/cc/interactsaas/index?activityType=10058&templateId=7498bc9d-0be3-480d-ae9d-59b8a074566a&activityId=1791015101848346625&nodeId=101001&giftType=1&isGiftTrue=true&prd=cjwx";
  activityUrl = "https://txzj-isv.isvjcloud.com/shop_gift?code=b0U0MjlrRkhNNEV3dWc4aWJn";
  activityUrl = "https://txzj-isv.isvjcloud.com/shop_gift?code=OWt0dHBFaENNdGN3dWc0bmFB";
  activityUrl = "https://yq-hd-rc.isvjcloud.com/popup?venderId=1000001825&activityId=10000012021&activityType=14";
  activityUrl = "https://yq-hd-rc.isvjcloud.com/popup?venderId=1000001825&activityId=10000012021&activityType=14";
  activityUrl = "https://jingyun-rc.isvjcloud.com/h5/pages/splitLuckyBag/splitLuckyBag?id=1e26371318bd0e5e2870f7559f4ec9e3&userId=1000116702";
  activityUrl = "https://yq-hd-rc.isvjcloud.com/popup?venderId=16122976&activityId=10000013504&activityType=14";
  activityUrl = "https://yq-hd-rc.isvjcloud.com/popup?venderId=10178786&activityId=10000008125&activityType=15";
  activityUrl = "https://yq-hd-rc.isvjcloud.com/popup?venderId=16122976&activityId=10000013504&activityType=14";
  activityUrl = "https://yq-hd-rc.isvjcloud.com/popup?venderId=1000000142&activityId=10000013768&activityType=14";
  activityUrl = "https://lzkj-isv.isvjcloud.com/prod/cc/interactsaas/index?activityType=10058&templateId=0abfbe80-230f-4b3c-8ddf-f48a05151103&activityId=1815219298818842626&nodeId=101001&giftType=1&isGiftTrue=true&prd=cjwx";
}
const {
  RunMode: _0x2e7de3,
  UserMode: _0xf89e2b
} = require("./bear");
_0x2e7de3.envInfo = {
  "name": "无线关注beta",
  "runName": "jd_wx_shopGift",
  "version": "2.0.4"
};
class _0x148d02 extends _0xf89e2b {
  constructor(_0x4df5df, _0x4f1ec3) {
    super(_0x4df5df, _0x4f1ec3);
  }
  async ["userTask"]() {
    await this.hitCache();
    await this.isvObfuscator();
    if (this.mode === "hdb") {
      await this.login();
      await this.reportPVUV();
      let _0x4adde9 = true;
      while (_0x4adde9) {
        let _0x3bb08f = await this.hdbApi("postSplitLuckyBagFrontAct");
        this.debug(_0x3bb08f);
        if (_0x3bb08f && _0x3bb08f.succ) {
          if (_0x3bb08f.result.succ) {
            this.putMsg(_0x3bb08f.result?.["dmActivityLog"]?.["awardName"] || "空气");
            if (_0x3bb08f.result?.["msg"]?.["includes"]("填写信息")) this.addressId = _0x3bb08f.result?.["dmActivityLog"]?.["id"], this.prizeName = _0x3bb08f.result?.["dmActivityLog"]?.["awardName"], await this.saveAddress();else {
              this.putMsg(_0x3bb08f.result?.["errorMsg"] || _0x3bb08f.result?.["message"]);
            }
          }
          await this.writeLongCache();
          return;
        }
        let _0x319780 = _0x3bb08f.message || "领取失败";
        if (_0x319780.includes("关注") && _0x4adde9) {
          _0x4adde9 = false;
          await this.hdbApi("reportActionLog", {
            "actionType": "favouriteShop"
          });
          continue;
        }
        _0x319780.includes("已经参加") && (await this.writeLongCache());
        await this.wxStopSync(_0x319780);
        this.putMsg(_0x319780);
        return;
      }
      return;
    }
    if (this.mode === "yqhd") {
      this.venderId = this.getQueryString(this.activityUrl, "venderId");
      this.activityType = this.getQueryString(this.activityUrl, "activityType");
      if (!this.activityType || !["14", "15"].includes(this.activityType)) return this.putMsg("活动链接错误"), this.stop();
      let _0x38d01c = await this.taskGet("jd-hd-h5/login", {
        "venderId": this.venderId,
        "access_token": this.isvToken,
        "source": 1
      });
      this.debug(_0x38d01c);
      let _0x4c798e = await this.taskPost("jd-hd-h5/giftBag/accept?id=" + this.activityId, {
        "id": this.activityId
      });
      this.log(_0x4c798e);
      let _0x4da7f2 = _0x4c798e.message || "领取失败";
      this.putMsg(_0x4da7f2);
      await this.wxStopSync(_0x4da7f2);
      return;
    }
    if (this.mode === "txzj") {
      if (!this.activityId) return this.putMsg("活动链接错误"), this.stop();
      let _0x2afb2a = await this.taskPost("front/jd_store_user_info", {
        "token": this.isvToken
      });
      if (!_0x2afb2a || _0x2afb2a.code !== "success") {
        let _0x342bd9 = _0x2afb2a.msg || "获取用户信息失败";
        return this.putMsg(_0x342bd9), await this.wxStopSync(_0x342bd9);
      }
      let _0x34b2b3 = await this.taskGet(this.activityUrl),
        _0x304f84 = this.textToHtml(_0x34b2b3),
        _0xa4913e = _0x304f84(".animated").attr("data-code");
      if (!_0xa4913e) return this.putMsg("活动已结束"), await this.writeLongCacheByStop(), this.stop();
      let _0x5551c0 = await this.taskPost("shop_gift/send_prize", {
        "code": _0xa4913e
      });
      this.debug(_0x5551c0);
      if (_0x5551c0 && _0x5551c0.code === "success") {
        this.putMsg("领取成功");
        await this.writeLongCache();
        return;
      }
      let _0x572492 = _0x5551c0?.["msg"] || "领取失败";
      this.putMsg(_0x572492);
      await this.wxStopSync(_0x572492);
      return;
    }
    await this.getDefenseUrls();
    if (this.mode === "gzsl") {
      let _0x39524f = await this.gzslApi("getShopGiftActivity", {
        "venderId": this.activityId
      });
      if (_0x39524f?.["status"] != "1") {
        let _0x4daf11 = _0x39524f?.["msg"] || "获取礼包信息失败";
        this.putMsg(_0x4daf11);
        await this.wxStopSync(_0x4daf11);
        return;
      }
      let _0x458c70 = _0x39524f?.["activity"] || {};
      this.shopId = _0x458c70.shopId;
      this.venderId = _0x458c70.venderId;
      this.rule = _0x458c70.rule;
      this.shopName = _0x458c70.detail;
      let _0x543780 = _0x458c70.prizes || [],
        {
          startTime: _0x4bd9e9,
          endTime: _0xd91b2a
        } = _0x458c70;
      _0xf89e2b.activity.shopId = this.shopId;
      _0xf89e2b.activity.venderId = this.shopId;
      _0xf89e2b.activity.shopName = this.shopName;
      _0xf89e2b.activity.startTime = _0x4bd9e9;
      _0xf89e2b.activity.endTime = _0xd91b2a;
      if (_0x4bd9e9 && _0x4bd9e9 > this.timestamp()) {
        this.putMsg("活动未开始");
        this.stop();
        return;
      }
      if (_0xd91b2a && _0xd91b2a < this.timestamp()) {
        this.putMsg("活动已结束");
        await this.writeLongCacheByStop();
        this.stop();
        return;
      }
      _0x543780 = _0x543780.filter(_0x3e7d3a => !["2"].includes(_0x3e7d3a.source));
      if (_0x543780.length === 0) {
        this.putMsg("垃圾或领完");
        this.stop();
        return;
      }
      let _0x3ce40e = await this.gzslApi("getShopGiftPrize", {}, true);
      _0x3ce40e?.["status"] === "1" ? (this.putMsg("领取成功"), await this.writeLongCache()) : (this.putMsg(_0x3ce40e?.["msg"] || "领取失败"), await this.wxStopSync(_0x3ce40e?.["msg"]));
      return;
    }
    if (["10058"].includes(this.activityType)) {
      await this.login();
      let _0x44ddee = await this.lzkjApi("api/shopGift/shopGiftMain"),
        _0x1ed6fb = await this.lzkjApi("api/shopGift/drawShopGift", {
          "flag": true,
          "memberUser": _0x44ddee?.["data"]?.["memberUser"] || 0,
          "name": "",
          "visitor": "",
          "position": ""
        });
      this.debug(_0x1ed6fb);
      if (_0x1ed6fb && _0x1ed6fb.resp_code === 0) {
        _0x1ed6fb.data ? (this.putMsg("领取成功"), await this.writeLongCache()) : this.putMsg(_0x1ed6fb.resp_msg || "空气");
        return;
      }
      let _0x2f46fe = _0x1ed6fb?.["resp_msg"] || "领取失败";
      if (_0x2f46fe.includes("已经领取过")) {
        await this.writeLongCache();
      }
      this.putMsg(_0x2f46fe);
      await this.wxStopSync(_0x2f46fe);
      return;
    }
    await this.wxCommonInfo();
    await this.getSimpleActInfoVo();
    this.defenseUrls.length === 0 ? await this.getMyPing() : await this.initPinToken();
    await this.accessLog();
    let _0x395b79 = await this.activityContent({
      "buyerPin": this.secretPin
    });
    if (!_0x395b79?.["result"] || !_0x395b79?.["data"]) {
      this.putMsg(_0x395b79?.["errorMessage"]);
      return;
    }
    let _0x198b1d = await this.wxApi("wxShopGift/draw", {
      "activityId": this.activityId,
      "buyerPin": this.secretPin,
      "hasFollow": true
    });
    this.debug(_0x198b1d);
    if (_0x198b1d && _0x198b1d.result) {
      this.putMsg("领取成功");
      await this.writeLongCache();
    } else {
      let _0x4278b4 = _0x198b1d?.["errorMessage"];
      this.putMsg(_0x4278b4);
      await this.wxStopSync(_0x4278b4);
      return;
    }
  }
}
_0x2e7de3.activity = {
  "activityUrl": activityUrl
};
_0x2e7de3.TaskClass = _0x148d02;
_0x2e7de3.run({
  "whitelist": ["1-20"],
  "main_thread": 3
});