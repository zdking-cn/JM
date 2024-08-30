//Fri Aug 30 2024 09:04:48 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
if (mode) {
  activityUrl = "https://lzkj-isv.isvjcloud.com/prod/cc/interactsaas/index?activityType=10069&templateId=ac8b6564-aa35-4ba5-aa62-55b0ce61b5d01&activityId=1719974616209104898&nodeId=101001&prd=cjwx";
  activityUrl = "https://lzkj-isv.isvjcloud.com/prod/cc/interactsaas/index?activityType=10053&templateId=20210804190900gzspyl011&activityId=1718891863502409730&nodeId=101001053&prd=cjwx";
  activityUrl = "https://cjhy-isv.isvjcloud.com/wxShopFollowActivity/activity?activityId=92406df13eae4203b77d7a567c398326";
  activityUrl = "https://jinggeng-isv.isvjcloud.com/ql/front/showFavoriteShop?id=9e8080a78b83db8f018b854284f27565&user_id=10028198";
  activityUrl = "https://lzkj-isv.isvjcloud.com/prod/cc/interactsaas/index?activityType=10069&activityId=1723989742404182018&templateId=ac8b6564-aa35-4ba5-aa62-55b0ce61b5d01&nodeId=101001&prd=cjwx";
  activityUrl = "https://jinggeng-isv.isvjcloud.com/ql/front/showFavoriteShop?id=9e8080a784add0d20184c74e8f0659f5&user_id=11179724";
  activityUrl = "https://lzkj-isv.isvjcloud.com/prod/cc/interactsaas/index?activityType=10053&templateId=20210804190900gzspyl011&activityId=1717457082637680641&nodeId=101001053&prd=cjwx";
  activityUrl = "https://lzkj-isv.isvjcloud.com/prod/cc/interaction/v1/index?activityType=10069&templateId=b60a7f97-84ed-445b-a2e2-9709da4a4d34&activityId=1775495796115959810&nodeId=101001&prd=crm";
  activityUrl = "https://lzkj-isv.isvjcloud.com/prod/cc/interactsaas/index?activityType=10069&activityId=1784882497144164354&templateId=100690240314gzdpyl&nodeId=101001&prd=cjwx";
  activityUrl = "https://lzkj-isv.isvjcloud.com/prod/cc/interactsaas/index?activityType=10069&activityId=1789105869322571777&templateId=ac8b6564-aa35-4ba5-aa62-55b0ce61b5d01&nodeId=101001&prd=cjwx";
  activityUrl = "https://lzkj-isv.isvjcloud.com/prod/cc/interactsaas/index?activityType=10053&templateId=20210804190900gzspyl011&activityId=1784868708096520194&prd=cjwx";
  activityUrl = "https://lzkj-isv.isvjcloud.com/prod/cc/interactsaas/index?activityType=10053&templateId=20210804190900gzspyl011&activityId=1790921705410519042&nodeId=101001053&prd=cjwx";
  activityUrl = "https://gzsl-isv.isvjcloud.com/wuxian/mobileForApp/dist2/views/pages/followGift.html?activityId=13745_1718969447733";
  activityUrl = "https://gzsl-isv.isvjcloud.com/wuxian/mobileForApp/dist2/views/pages/followGift.html?activityId=13745";
  activityUrl = "https://gzsl-isv.isvjcloud.com/wuxian/user/contact/13781";
}
const {
  RunMode: _0x5d71da,
  UserMode: _0x32cea1,
  baseCommonEnv: _0x286864,
  baseCommonEnvKey: _0x26d17a
} = require("./bear");
_0x286864.openCardBeanNum = parseInt(process.env.B_WX_FOLLOW_DRAW_BEAN_NUM || "2");
_0x26d17a.B_WX_FOLLOW_DRAW_BEAN_NUM = "openCardBeanNum";
_0x5d71da.envInfo = {
  "name": "关注抽奖beta",
  "runName": "jd_wx_followDraw",
  "version": "2.0.2"
};
class _0x1f9609 extends _0x32cea1 {
  constructor(_0x4dc88, _0x184434) {
    super(_0x4dc88, _0x184434);
    this.errCount = 0;
  }
  async ["getActivityContentOnly"]() {}
  async ["lzkjTaskToDo"](_0x9b026b, _0x31c879, _0x3d4dd3 = "", _0x494433 = 0) {
    let _0x4b601c = await this.lzkjApi(_0x9b026b, {
      "taskId": _0x31c879,
      "skuId": _0x3d4dd3
    });
    this.debug(_0x4b601c);
    if (_0x4b601c && _0x4b601c.resp_code === 0) {
      let _0x16d463 = _0x4b601c.data?.["canSend"];
      switch (_0x16d463) {
        case undefined:
          break;
        case 4:
          return this.putMsg("今日奖品已发完"), this.stop();
        case 5:
          return this.putMsg("活动奖品已发完"), this.stop();
        case 9:
          _0x494433++, this.log("活动人气爆棚", "retry:" + _0x494433);
          if (_0x494433 > 10) return this.putMsg("活动人气爆棚"), this.exit();
          return await this.lzkjTaskToDo(_0x31c879, _0x3d4dd3, _0x494433);
        default:
          this.putMsg("canSend:" + _0x16d463);
          break;
      }
      if (!(_0x4b601c.data.result === undefined || _0x4b601c.data.result === "undefined")) {
        return this.putMsg(_0x4b601c.data?.["prizeName"]), await this.writeLongCache(), this.exit();
      }
      return;
    }
    let _0x46975e = _0x4b601c?.["resp_msg"];
    this.putMsg(_0x46975e);
    if (_0x46975e && _0x46975e.includes("会员等级不足")) return this.exit();
    await this.wxStopSync(_0x46975e);
    this.errCount++;
    if (this.errCount > 3) return this.exit();
  }
  async ["contactWare"](_0x3818e7 = "", _0x5dab6a = true) {
    let _0x419902 = await this.gzslApi("contactWare", {
      "skuId": _0x3818e7
    });
    if (_0x419902?.["status"] === -3 && _0x5dab6a) return await this.follow(), await this.contactWare(_0x3818e7, false);
    if (_0x419902?.["sendCoupon"]) this.putMsg("垃圾券");else {
      if (_0x419902?.["sendPoints"]) {
        this.putMsg(_0x419902.sendPoints + "积分");
      }
    }
  }
  async ["userTask"]() {
    await this.hitCache();
    await this.isvObfuscator();
    if (this.mode === "gzsl") {
      await this.hitCache();
      this.activityId = this.activityUrl.includes("contactWare") || this.activityUrl.includes("contact") ? this.activityUrl.match(/(contactWare|contact)\/(\d+)/)[2] : this.activityId.split("_")[0];
      let _0x17e5ba = "getFollowActivity";
      (this.activityUrl.includes("contactWare") || this.activityUrl.includes("followPro")) && (_0x17e5ba = "getFollowWareActivity", this.activityId = this.activityId.match(/(contactWare|contact)\/(\d+)/)[2]);
      await this.hitCache();
      this.debug(_0x17e5ba, this.activityId);
      let _0x4f6ecf = await this.gzslApi(_0x17e5ba, {
        "venderId": this.activityId
      });
      this.debug(_0x4f6ecf);
      if (_0x4f6ecf?.["status"] != "1") {
        let _0x557173 = _0x4f6ecf?.["msg"] || "获取礼包信息失败";
        this.putMsg(_0x557173);
        await this.wxStopSync(_0x557173);
        return;
      }
      let _0x1fe3e1 = _0x4f6ecf?.["activity"] || {};
      this.shopId = _0x1fe3e1.shopId;
      this.venderId = _0x1fe3e1.venderId;
      this.rule = _0x1fe3e1.rule;
      this.shopName = _0x1fe3e1.detail;
      let {
        startTime: _0x22a660,
        endTime: _0x3df11e
      } = _0x1fe3e1;
      _0x32cea1.activity.shopId = this.shopId;
      _0x32cea1.activity.venderId = this.shopId;
      _0x32cea1.activity.shopName = this.shopName;
      _0x32cea1.activity.startTime = _0x22a660;
      _0x32cea1.activity.endTime = _0x3df11e;
      if (_0x22a660 && _0x22a660 > this.timestamp()) {
        this.putMsg("活动未开始");
        this.stop();
        return;
      }
      if (_0x3df11e && _0x3df11e < this.timestamp()) {
        this.putMsg("活动已结束");
        await this.writeLongCacheByStop();
        this.stop();
        return;
      }
      if (this.activityUrl.includes("followPro") || this.activityUrl.includes("contactWare")) {
        let _0x1ef650 = Math.max(_0x4f6ecf?.["pointsNeed"], _0x4f6ecf?.["couponNeed"], 0),
          _0x3210d6 = _0x4f6ecf?.["wareList"]?.["filter"](_0x105e57 => _0x105e57.isFollow == "true")?.["length"] || 0,
          _0x161214 = _0x4f6ecf?.["wareList"]?.["filter"](_0x26682e => _0x26682e.isFollow == "false") || [];
        for (let _0x1343f7 of _0x161214) {
          if (_0x3210d6 >= _0x1ef650) break;
          await this.contactWare(_0x1343f7.skuId);
          count++;
        }
      } else {
        let _0x1dffb3 = _0x4f6ecf?.["isContact"];
        if (_0x1dffb3) return await this.writeLongCache(), this.putMsg("已领取");
        let _0x2cb1f7 = await this.gzslApi("contact");
        this.debug(_0x2cb1f7);
        if (_0x2cb1f7 && _0x2cb1f7.status === "1") {
          if (_0x2cb1f7.sendCoupon) this.putMsg("垃圾券"), await this.writeLongCacheByStop();else {
            if (_0x2cb1f7.sendPoints) {
              this.putMsg(_0x2cb1f7.sendPoints + "积分");
            } else {
              this.putMsg("空气");
            }
          }
          await this.writeLongCache();
          return;
        }
        let _0xd2ddc5 = _0x2cb1f7?.["msg"] || "领取失败";
        this.putMsg(_0xd2ddc5);
        await this.wxStopSync(_0xd2ddc5);
      }
      return;
    }
    if (this.mode === "jinggeng") {
      await this.setMixNick();
      await this.jinggengShopInfo();
      let _0x1cc3da = await this.jinggengApi("postFavoriteShop");
      this.debug(_0x1cc3da);
      if (_0x1cc3da && _0x1cc3da.succ) {
        let _0x3f7a7c = _0x1cc3da.msg ?? "{}",
          _0x127097 = JSON.parse(_0x3f7a7c);
        if (_0x127097?.["actLogDto"]?.["remark"]) {
          this.putMsg(_0x127097?.["actLogDto"]?.["remark"]);
          return;
        }
      } else {
        let _0x2a0d23 = _0x1cc3da?.["msg"] || "抽奖失败";
        this.putMsg(_0x2a0d23);
        await this.wxStopSync(_0x2a0d23);
      }
      return;
    }
    await this.getDefenseUrls();
    if (["10053", "10069"].includes(this.activityType)) {
      await this.login();
      if (["1005", "1006", "1002"].includes(this.joinCode)) {
        if (!(this.prizeList && this.prizeList.some(_0x3a11e3 => _0x3a11e3.prizeType === 1 && _0x3a11e3.beanNum >= _0x286864.openCardBeanNum))) return this.putMsg(this.joinDes);
        await this.getShopOpenCardInfo();
        await this.bindWithVender();
        if (this.canNotOpenCard) return this.putMsg(this.joinDes);
        await this.login(false);
      }
      if (this.type === "lkFollowShop") {
        await this.unfollow();
        let _0x3c8193 = await this.taskGet("api/task/" + this.type + "/getUserFollowInfo");
        this.debug(_0x3c8193);
        if (_0x3c8193 && _0x3c8193.resp_code === 0) {
          if (_0x3c8193.data.followShop) {
            let _0x75ca82 = await this.taskGet("api/task/" + this.type + "/saveFollowInfo?actType=" + this.activityType);
            this.debug(_0x75ca82);
            if (_0x75ca82 && _0x75ca82.resp_code === 0) {
              this.putMsg(_0x75ca82.data?.["prizeName"] || "空气");
              await this.writeLongCache();
              return;
            }
            let _0x2a53a3 = _0x75ca82?.["resp_msg"] || "关注店铺失败";
            this.putMsg(_0x2a53a3);
            return;
          } else {
            this.putMsg("此活动只针对新关注店铺用户~");
            await this.writeLongCache();
          }
        } else {
          let _0x4f2290 = _0x3c8193?.["resp_msg"] || "获取关注信息失败";
          this.putMsg(_0x4f2290);
        }
        return;
      }
      if (this.type === "followGoods") {
        let _0x23cdbc = await this.lzkjApi("api/task/" + this.type + "/getFollowGoods");
        if (_0x23cdbc && _0x23cdbc.resp_code === 0) {
          this.taskId = _0x23cdbc.data?.[0]?.["taskId"];
          let _0x2f4236 = _0x23cdbc.data?.[0]?.["completeCount"] || 0,
            _0x39a3d7 = _0x23cdbc.data?.[0]?.["finishNum"] || 0,
            _0x229e1f = _0x23cdbc.data?.[0]?.["oneClickFollowPurchase"] || 1,
            _0x173a97 = _0x23cdbc.data?.[0]?.["status"] || 0,
            _0x354396 = _0x23cdbc.data?.[0]?.["skuInfoVO"] || [];
          _0x354396 = _0x354396.filter(_0x24835a => _0x24835a.status === 0);
          if (_0x2f4236 >= _0x39a3d7 || _0x173a97 === 1) {
            this.putMsg("已领取");
            await this.writeLongCache();
            return;
          }
          if (_0x229e1f === 0) await this.lzkjTaskToDo("api/task/" + this.type + "/followGoods", this.taskId);else {
            for (let _0xaef7d5 of _0x354396) {
              await this.lzkjTaskToDo("api/task/" + this.type + "/followGoods", this.taskId, _0xaef7d5.skuId);
            }
          }
        } else {
          let _0x71184b = _0x23cdbc?.["resp_msg"] || "获取关注商品信息失败";
          this.log(_0x71184b);
        }
      }
      return;
    }
    await this.wxCommonInfo();
    await this.getSimpleActInfoVo();
    this.index === 0 && (await this.getShopInfo());
    this.defenseUrls.length === 0 ? await this.getMyPing() : await this.initPinToken();
    await this.accessLog();
    let _0x5b85e3 = await this.wxApi("wxShopFollowActivity/activityContentOnly", {
      "activityId": this.activityId,
      "pin": this.secretPin
    });
    this.debug(_0x5b85e3);
    if (_0x5b85e3 && _0x5b85e3.result) {
      let _0x5e9fed = _0x5b85e3.data.hasFollow ?? false,
        _0xa6a44b = _0x5b85e3.data.canDrawTimes ?? 1,
        _0x5cb767 = _0x5b85e3.data.startTime ?? 0,
        _0x5d6e2d = _0x5b85e3.data.endTime ?? 0;
      _0x32cea1.activity.startTime = _0x5cb767;
      _0x32cea1.activity.endTime = _0x5d6e2d;
      const _0x1c1e93 = this.formatDate(_0x5cb767, "yyyy-MM-dd HH:mm:ss") + "至" + this.formatDate(_0x5d6e2d, "yyyy-MM-dd HH:mm:ss");
      _0x32cea1.activity.timeStr = _0x1c1e93;
      if (_0x5cb767 && _0x5cb767 > Date.now()) {
        this.putMsg("活动未开始");
        _0x32cea1.activity.noStart = true;
        this.stop();
        return;
      }
      if (_0x5d6e2d && _0x5d6e2d < Date.now()) {
        this.putMsg("活动已结束");
        await this.writeLongCacheByStop();
        this.stop();
        return;
      }
      if (_0xa6a44b === 0) {
        this.putMsg("无抽奖次数");
        await this.writeLongCache();
        return;
      }
      _0x5e9fed && (await this.unfollow());
      if (this.domain.includes("cjhy")) await this.follow();else {
        let _0x322e77 = await this.wxApi("wxShopFollowActivity/follow", {
          "activityId": this.activityId,
          "pin": this.secretPin
        });
        this.debug(_0x322e77);
        if (!(_0x322e77 && _0x322e77.result)) {
          let _0x415826 = _0x322e77?.["errorMessage"] || "关注店铺失败";
          this.putMsg(_0x415826);
          return;
        }
      }
      await this.getPrize(true);
    }
  }
}
_0x5d71da.activity = {
  "activityUrl": activityUrl
};
_0x5d71da.TaskClass = _0x1f9609;
_0x5d71da.run({
  "whitelist": ["1-20"],
  "main_thread": 3
});