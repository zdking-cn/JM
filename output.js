//Fri Aug 30 2024 01:54:14 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
if (mode) {
  activityUrl = "https://cjhy-isv.isvjcloud.com/mc/wxPointShopView/pointExgBeans?venderId=1000092950&giftId=83c141f7589348ada97081d92f79f511&giftType=4&beansLevel=";
  activityUrl = "https://cjhy-isv.isvjcloud.com/mc/wxPointShopView/pointExgBeans?venderId=1000015445&giftId=c8e4b16f96014fb3a53aa182627402c3&giftType=4&beansLevel=1";
  activityUrl = "https://cjhy-isv.isvjcloud.com/mc/wxPointShopView/pointExgShiWu?venderId=779565&giftId=a0ebbb463bf04473ae1da3ac017653be&giftType=3";
  activityUrl = "https://lzkj-isv.isvjcloud.com/prod/cc/interactsaas/index?activityType=10079&templateId=202209051007jfdh&activityId=1768977757201473538&nodeId=101001&prd=cjwx";
  activityUrl = "https://jinggeng-rc.isvjcloud.com/ql/front/exchangeActDetail?actId=9e8080c68e328c5e018e3668d9f42709&userId=10726683";
  activityUrl = "https://jinggeng-rc.isvjcloud.com/ql/front/exchangeActDetail?actId=9e8080268dca1acb018df35a01c36241&userId=1000377707";
  activityUrl = "https://lzkj-isv.isvjcloud.com/prod/cc/interactsaas/index?activityType=10079&templateId=202209051007jfdh&activityId=1770345652211335170&nodeId=101001&prd=cjwx";
  activityUrl = "https://cjhy-isv.isvjcloud.com/mc/wxPointShopView/pointExgZheKou?venderId=13355577&giftId=fe450dd0d7a74d24919549b43472824d&giftType=5";
  activityUrl = "https://cjhy-isv.isvjcloud.com/mc/wxPointShopView/pointExgShiWu?venderId=1000075343&giftId=48d9a075943c412390977c2e61d4f155&giftType=3";
  activityUrl = "https://jingyun-rc.isvjcloud.com/h5/pages/exchangePoint/exchangePoint?id=7b7db11b08b21348e9aeb2d4cc31ae7a&userId=1000080364&actForm=single";
  activityUrl = "https://lzkj-isv.isvjcloud.com/prod/cc/interactsaas/index?activityType=10079&templateId=202209051007jfdh618&activityId=1785215208127311873&nodeId=101001&prd=cjwx";
  activityUrl = "https://cjhy-isv.isvjcloud.com/mc/wxPointShopView/pointExgBeans?venderId=1000302822&giftId=7a3c49af66ff42bf8e2eb2c0c7b95cec&giftType=4";
  activityUrl = "https://cjhy-isv.isvjcloud.com/mc/wxPointShopView/pointExgBeans?venderId=1000302822&giftId=a573617872f541f9ac18436208e776c2&giftType=4";
  activityUrl = "https://jingyun-rc.isvjcloud.com/h5/pages/exchangeJDmarket/exchangeJDmarket?id=f0ec65ba8db5a7a913dddc892f9d5b9e&userId=1000307221&actForm=single";
  activityUrl = "https://jingyun-rc.isvjcloud.com/h5/pages/exchangePoint/exchangePoint?id=2ee25610cda5d58daff79c7a98178904&userId=1000007503&actForm=single";
  activityUrl = "https://lzkj-isv.isvjcloud.com/prod/cc/interaction/v2/30002/1001/?activityId=1806167396485083137&shopId=1000002836";
  activityUrl = "https://cjhy-isv.isvjcloud.com/mc/wxPointShopView/pointExgBeans?giftId=ceff70eef6da4b2c9f05f6baa286ea8f&venderId=12245920";
  activityUrl = "https://cjhy-isv.isvjcloud.com/mc/wxPointShopView/pointExgBeans?venderId=12353952&giftId=554bb9318dca47e29a592dfdf3ad46b2&giftType=4";
  activityUrl = "https://jinggeng-rc.isvjcloud.com/ql/front/exchangeActDetail?id=9e8080019121ee88019121fd6b510bfa&user_id=10315111";
}
const {
  RunMode: _0x1029d4,
  UserMode: _0x5b4a16,
  baseCommonEnv: _0x2189e4,
  baseCommonEnvKey: _0x49b6ee
} = require("./bear");
_0x2189e4.notPointDrawList = process.env?.["B_WX_NOT_POINT_DRAW_LIST"]?.["split"](/[@,&|]/) || [];
_0x2189e4.notPointDrawGiftNameList = process.env?.["B_WX_NOT_POINT_DRAW_GIFT_NAMES"]?.["split"](/[@,&|]/) || ["雨x伞", "加赠特权"];
_0x49b6ee.B_WX_NOT_POINT_DRAW_LIST = "__notPointDrawList__";
_0x49b6ee.B_WX_NOT_POINT_DRAW_GIFT_NAMES = "__notPointDrawGiftNameList__";
_0x1029d4.envInfo = {
  "name": "积分兑换beta",
  "runName": "jd_wx_pointDraw",
  "version": "2.0.6"
};
class _0x2059db extends _0x5b4a16 {
  constructor(_0x4460ab, _0x59b589) {
    super(_0x4460ab, _0x59b589);
    this.needPoint = null;
  }
  async ["receivePrize"](_0x106597 = {}) {
    let _0x316bbc = await this.v2Api("api/" + this.activityType + "/receivePrize", {
      "prizeNum": 1,
      "mobile": "",
      ..._0x106597
    });
    if (_0x316bbc && _0x316bbc.code === 200) {
      this.putMsg(_0x316bbc.data?.["msg"] || _0x316bbc.data);
      if (_0x316bbc.data?.["successNum"] > 0 && this.rightsType === 3) {
        let _0x1d16d3 = this.formatDate(Date.now(), "yyyy-MM-dd HH:mm:ss") + "," + this.rightsName + "," + this.pin + "," + this.address?.["phone"] + "," + this.address?.["address"] + "," + _0x1029d4.envInfo.name + "," + (this.shopId ?? this.venderId) + "," + this.activityUrl + "\n";
        this.appendFileSync("", "gifts.csv", _0x1d16d3);
      }
      return;
    }
    let _0x579191 = _0x316bbc.data?.["msg"] || _0x316bbc.data;
    this.putMsg(_0x579191);
    await this.wxStopSync(_0x579191);
    this.exit();
  }
  async ["hdbExchange"](_0x327aed, _0xc3b2d2 = true) {
    let _0x4879fa = await this.hdbApi("post" + this.activityType + "FrontAct", {
      "awardId": _0x327aed
    });
    if (_0x4879fa && _0x4879fa.succ) {
      if (_0x4879fa.result.succ) {
        this.putMsg(_0x4879fa.result?.["dmActivityLog"]?.["awardName"] || "空气");
        if (_0x4879fa.result?.["msg"]?.["includes"]("填写信息")) {
          this.addressId = _0x4879fa.result?.["dmActivityLog"]?.["id"];
          this.prizeName = _0x4879fa.result?.["dmActivityLog"]?.["awardName"];
          await this.saveAddress();
        }
        return;
      } else {
        this.putMsg(_0x4879fa.result?.["errorMsg"] || _0x4879fa.result?.["message"]);
        this.exit();
      }
    }
    let _0x57f45b = _0x4879fa?.["message"];
    if (_0x57f45b?.["includes"]("关注店铺") && _0xc3b2d2 && (await this.follow())) return await this.hdbExchange(_0x327aed, false);
    return this.putMsg(_0x57f45b), await this.wxStopSync(_0x57f45b), this.exit();
  }
  async ["userTask"]() {
    await this.isvObfuscator();
    await this.getDefenseUrls();
    if (this.mode === "v2") {
      await this.login();
      let _0x15e004 = await this.v2Api("api/" + this.activityType + "/getActivityInfo"),
        {
          detail: _0x5dae33,
          rightsName: _0x4e8d5f,
          rightsType: _0x196e9e
        } = _0x15e004?.["data"];
      this.rightsName = _0x4e8d5f;
      this.rightsType = _0x196e9e;
      if (/(券|权益已兑完)/.test(_0x4e8d5f)) return this.putMsg("垃圾活动"), this.stop();
      if (_0x5dae33) {
        return this.putMsg(_0x5dae33);
      }
      if (_0x196e9e === 3) {
        this.getAddress();
        if (!this.address) {
          this.putMsg("未配置地址或所有地址已达使用上限,退出填地址");
          return;
        }
        let _0x2d4ca8 = await this.v2Api("api/" + this.activityType + "/saveAddress", {
          "name": this.address.receiver,
          "tel": this.address.phone,
          "province": this.address.province,
          "city": this.address.city,
          "county": this.address.county,
          "addressDetail": this.address.address,
          "isDefault": false
        });
        this.putMsg(_0x2d4ca8.data?.["msg"] || _0x2d4ca8.data);
        let _0x18cc61 = await this.v2Api("api/" + this.activityType + "/getAddressList");
        for (let _0x530a09 of _0x18cc61?.["data"] || []) {
          if (_0x530a09.tel?.["includes"](this.address.phone)) {
            await this.receivePrize({
              "addressId": _0x530a09.id
            });
          }
          await this.v2Api("api/" + this.activityType + "/delAddress", {
            "id": _0x530a09.id
          });
        }
      } else await this.receivePrize();
      return;
    }
    if (this.mode === "hdb") {
      await this.login();
      await this.reportPVUV();
      await this.loadFrontAct();
      await this.loadFrontAward();
      let _0x4faebf = await this.hdbApi("getMyPoint"),
        _0x15a992 = _0x4faebf?.["result"] ?? 0;
      if (_0x15a992 <= 0) return this.putMsg("无积分"), this.exit();
      this.activityType = "PointExchange";
      this.activityUrl.includes("exchangeJDmarket") && (this.activityType = "PointLimitedTimeExchange");
      let _0x3d927e = await this.hdbApi("load" + this.activityType + "Awards", {
          "timeIndex": 0
        }),
        _0xc2f275 = _0x3d927e?.["result"]?.["awards"] ?? [];
      _0xc2f275 = _0xc2f275.filter(_0x43c65f => _0x43c65f?.["awardSurplusQuantity"] > 0);
      if (_0xc2f275.length === 0) return this.putMsg("垃圾或已领完"), this.stop();
      this.debug(_0xc2f275);
      _0xc2f275 = _0xc2f275.filter(_0x1e140c => _0x1e140c.awardSurplusQuantity > 0 && _0x15a992 >= _0x1e140c.pointNum && _0x1e140c.hasExchange === 0);
      this.debug(_0xc2f275);
      if (_0xc2f275.length === 0) return this.putMsg("无可兑换奖励"), this.exit();
      if (this.openCard === 0) await this.bindWithVender();
      for (let _0x5d8793 of _0xc2f275.reverse()) {
        this.debug(_0x5d8793);
        await this.hdbExchange(_0x5d8793.id);
      }
      return;
    }
    if (this.mode === "jinggeng") {
      this.userId = this.userId || this.getQueryString(this.activityUrl, "userId");
      this.activityId = this.activityId || this.getQueryString(this.activityUrl, "actId");
      if (!this.userId || !this.activityId) return this.putMsg("参数错误"), this.stop();
      await this.setMixNick();
      let _0x44d4f0 = await this.jinggengShopInfo(),
        _0x19e9a5 = _0x44d4f0("#actType", "body").attr("value");
      if (["JD_GOODS", "JD_COUPON", "JD_POINTTOBUY"].includes(_0x19e9a5)) {
        this.putMsg("垃圾或领完");
        this.stop();
        return;
      }
      let _0x47a4ce = parseInt(this.rule?.["match"](/(?<=每人可兑换)\d{1,2}/)?.[0] || "1");
      this.debug(_0x47a4ce);
      for (let _0x385826 = 0; _0x385826 < _0x47a4ce; _0x385826++) {
        let _0x49cc86 = await this.jinggengApi("postQlExchange");
        if (_0x49cc86 && _0x49cc86.succ) {
          let _0x29f982 = _0x49cc86.msg ?? "{}",
            _0x4828b7 = JSON.parse(_0x29f982);
          if (_0x4828b7?.["isSendSucc"]) {
            let _0x53a812 = _0x4828b7?.["drawAwardDto"]?.["awardName"];
            this.putMsg(_0x4828b7?.["drawAwardDto"]?.["awardDenomination"] + " " + _0x53a812);
            _0x4828b7?.["drawAwardDto"]?.["awardType"] === "JD_GOODS" && (this.addressId = _0x4828b7?.["drawAwardDto"]?.["actLogId"], this.prizeName = _0x53a812, await this.saveAddress());
          }
          await this.sleep(2000, 3000);
          continue;
        }
        this.putMsg(_0x49cc86?.["msg"] || "兑换失败");
        await this.wxStopSync(_0x49cc86?.["msg"]);
        return;
      }
      return;
    }
    if (["10079"].includes(this.activityType)) {
      await this.login();
      let _0x385d9f = await this.taskGet("api/pointsExchange/activity");
      this.debug(_0x385d9f);
      if (!_0x385d9f || _0x385d9f.resp_code !== 0) return this.putMsg(_0x385d9f?.["resp_msg"] || "查询失败"), await this.wxStopSync(_0x385d9f?.["resp_msg"]);
      let _0x28a413 = _0x385d9f.data.pointsExchangePrizeVos ?? [];
      _0x28a413 = _0x28a413.filter(_0x374ef1 => _0x374ef1.stock !== 0 && !_0x2189e4.notPointDrawGiftNameList.some(_0x19b073 => _0x374ef1.prizeName.includes(_0x19b073)));
      if (_0x28a413.length === 0) return this.putMsg("垃圾或领完"), this.stop();
      _0x28a413 = _0x28a413.filter(_0x137020 => _0x137020.status === 1);
      if (_0x28a413.length === 0) return this.putMsg("已兑换"), this.exit();
      let _0x51defa = _0x385d9f.data.myPoints;
      if (_0x51defa === 0) return this.putMsg("无积分");
      _0x28a413 = _0x28a413.filter(_0x3a27c8 => _0x51defa >= _0x3a27c8.num);
      if (_0x28a413.length === 0 || _0x51defa < _0x28a413[0].num) return this.putMsg("积分不足");
      if (["1005", "1006", "1002"].includes(this.joinCode)) {
        await this.getShopOpenCardInfo();
        await this.bindWithVender();
        if (this.canNotOpenCard) return this.putMsg(this.joinDes);
        await this.login(false);
      }
      for (let _0x2c51a5 of _0x28a413.reverse()) {
        let _0x160b60 = await this.lzkjApi("api/pointsExchange/exchange", {
          "prizeInfoId": _0x2c51a5.prizeInfoId,
          "status": 1
        });
        this.debug(_0x160b60);
        if (_0x160b60 && _0x160b60.resp_code === 0) {
          this.prizeName = _0x160b60.data?.["prizeName"];
          _0x51defa -= _0x2c51a5.num;
          _0x28a413 = _0x28a413.filter(_0x1ff5da => _0x51defa >= _0x1ff5da.num);
          this.putMsg(this.prizeName);
          this.addressId = _0x160b60.data?.["addressId"];
          _0x160b60.data?.["prizeType"] === 3 && (await this.saveAddress());
          return;
        }
        let _0x222726 = _0x160b60?.["resp_msg"] || "兑换失败";
        this.putMsg(_0x222726);
        await this.wxStopSync(_0x222726);
      }
      return;
    }
    if (!["pointExgBeans", "pointExgECard", "pointExgHb", "pointExgShiWu"].some(_0x3fb8e2 => this.activityUrl.includes(_0x3fb8e2))) return this.putMsg("暂不支持该行活动,请联系作者"), this.stop();
    this.activityId = this.getQueryString(this.activityUrl, "giftId");
    await this.wxCommonInfo();
    await this.getSimpleActInfoVo();
    if (this.index === 0) {
      await this.getShopInfo();
      if (this.shopName && [26, 128, 129].includes(this.activityType) && _0x2189e4.notPointDrawList.some(_0x2a6854 => this.shopName.includes(_0x2a6854))) {
        this.putMsg("已屏蔽");
        this.stop();
        return;
      }
    }
    this.defenseUrls.length === 0 ? await this.getMyPing() : await this.initPinToken();
    await this.accessLog();
    let _0x66c1a6 = await this.wxApi("mc/wxPointShop/getBuyerPoints", {
      "venderId": this.venderId,
      "buyerPin": this.secretPin
    });
    this.debug(_0x66c1a6);
    let _0x1dd054 = parseInt(_0x66c1a6?.["data"]?.["grade"] ?? 1),
      _0x2dcbb9 = parseInt(_0x66c1a6?.["data"]?.["buyerPoints"] ?? 0);
    if (_0x2dcbb9 <= 0) {
      this.putMsg("无积分");
      return;
    }
    if (_0x1dd054 === 1 && this.needPoint && this.needPoint > _0x2dcbb9) {
      return this.putMsg("积分不足");
    }
    let _0x4f9f2e, _0x30e785;
    if (this.activityUrl.includes("pointExgECard")) {
      _0x4f9f2e = "mc/equity/selectEquityForC";
      _0x30e785 = {
        "giftId": this.activityId,
        "venderId": this.venderId,
        "buyerPin": this.secretPin
      };
    } else {
      if (this.activityUrl.includes("pointExgHb")) _0x4f9f2e = "mc/hb/selectHbForC", _0x30e785 = {
        "giftId": this.activityId,
        "venderId": this.venderId,
        "buyerPin": this.secretPin
      };else {
        if (this.activityUrl.includes("pointExgShiWu")) {
          for (let _0x41612c of _0x2189e4.notPointDrawGiftNameList) {
            _0x5b4a16.activity.shopName.includes(_0x41612c) && (this.putMsg("已屏蔽"), this.stop());
          }
          _0x4f9f2e = "mc/shiWu/selectShiWu";
          _0x30e785 = {
            "giftId": this.activityId,
            "venderId": this.venderId
          };
        } else {
          if (this.activityUrl.includes("pointExgBeans")) {
            if (_0x5b4a16.activity.shopName.includes("同仁堂")) {
              this.putMsg("已屏蔽");
              this.stop();
              return;
            }
            _0x4f9f2e = "mc/beans/selectBeansForC";
            _0x30e785 = {
              "giftId": this.activityId,
              "venderId": this.venderId,
              "buyerPin": this.secretPin,
              "beansLevel": _0x1dd054
            };
          } else return this.putMsg("暂不支持该行活动,请联系作者"), this.stop();
        }
      }
    }
    let _0x34feac = await this.wxApi(_0x4f9f2e, _0x30e785);
    this.debug(_0x34feac);
    if (!_0x34feac || !_0x34feac.result) return this.putMsg(_0x34feac?.["errorMessage"] || "查询失败"), await this.wxStopSync(_0x34feac?.["errorMessage"]);
    let _0x32a3bc, _0x389100, _0x4674d8, _0x4f767a, _0x297c47, _0x41c492, _0x271c07, _0x43cff6;
    if (this.activityUrl.includes("pointExgShiWu")) {
      _0x32a3bc = _0x34feac.data?.["mcGiftBaseInfo"]?.["actrule"];
      _0x389100 = _0x34feac.data?.["mcGiftBaseInfo"]?.["upTime"];
      _0x4674d8 = _0x34feac.data?.["mcGiftBaseInfo"]?.["downTime"];
      _0x4f767a = _0x34feac.data?.["mcGiftBaseInfo"]?.["giftName"];
      _0x297c47 = _0x34feac.data?.["mcShiWu"];
      _0x41c492 = _0x34feac.data?.["mcGiftBaseInfo"]?.["num"] === _0x34feac.data?.["mcGiftBaseInfo"]?.["usedNum"];
      this.needPoint = _0x34feac.data?.["mcGiftBaseInfo"]["point" + _0x1dd054];
    } else {
      _0x32a3bc = _0x34feac.data?.["actrule"];
      _0x389100 = _0x34feac.data?.["upTime"];
      _0x4674d8 = _0x34feac.data?.["downTime"];
      _0x4f767a = _0x34feac.data?.["giftName"];
      _0x271c07 = _0x34feac.data?.["exgStyle"] ?? 0;
      let {
        oneLevel = 0,
        twoLevel = 0,
        threeLevel = 0
      } = _0x34feac.data;
      _0x43cff6 = [{
        "num": oneLevel,
        "grade": 1
      }, {
        "num": twoLevel,
        "grade": 2
      }, {
        "num": threeLevel,
        "grade": 3
      }];
      _0x43cff6 = _0x43cff6.filter(_0x4f5067 => _0x4f5067.num !== 0 && _0x4f5067.num);
      this.needPoint = _0x34feac.data["point" + _0x1dd054];
      _0x41c492 = _0x34feac.data?.["num"] === _0x34feac.data?.["usedNum"];
      _0x34feac.data?.["beansLevelCount"] > 0 && (this.needPoint = _0x34feac.data["point" + _0x1dd054] * _0x34feac.data?.["beansLevelCount"]);
    }
    _0x5b4a16.activity.startTime = _0x389100;
    _0x5b4a16.activity.endTime = _0x4674d8;
    if (_0x389100 && _0x389100 > this.timestamp()) return this.putMsg("未开始"), this.stop();
    if (_0x4674d8 && _0x4674d8 < this.timestamp()) {
      return this.putMsg("已结束"), await this.writeLongCacheByStop(), this.stop();
    }
    this.debug("needPoint", this.needPoint, _0x1dd054);
    if (!this.needPoint) return this.putMsg("等级不符"), this.exit();
    this.debug("needPoint", this.needPoint);
    if (_0x41c492) return this.putMsg("已抢光,明日再来"), this.stop();
    if (this.needPoint > _0x2dcbb9) return this.putMsg("积分:" + _0x2dcbb9 + ",需要:" + this.needPoint);
    for (let _0x260b16 of _0x2189e4.notPointDrawGiftNameList) {
      if (_0x4f767a.includes(_0x260b16)) {
        this.putMsg("已屏蔽");
        this.stop();
        return;
      }
    }
    if (this.activityUrl.includes("pointExgHb")) {
      let _0xff9c40 = await this.wxApi("mc/wxPointShop/exgHB", {
        "giftId": this.activityId,
        "venderId": this.venderId,
        "buyerPin": this.secretPin
      });
      return this.putMsg(_0xff9c40?.["errorMessage"] || "兑换成功");
    } else {
      if (this.activityUrl.includes("pointExgECard")) {
        let _0x495cd8 = await this.wxApi("mc/wxPointShop/exgECard", {
          "giftId": this.activityId,
          "venderId": this.venderId,
          "buyerPin": this.secretPin,
          "buyerNick": this.nickname
        });
        return this.putMsg(_0x495cd8?.["errorMessage"] || "兑换成功");
      } else {
        if (this.activityUrl.includes("pointExgShiWu")) {
          let _0x4e7dc3 = await this.wxApi("mc/wxPointShop/selectAddressList", {
            "venderId": this.venderId,
            "buyerPin": this.secretPin
          });
          if (_0x4e7dc3 && _0x4e7dc3.ok && _0x4e7dc3.count > 0) {
            for (let _0x4effee of _0x4e7dc3.data) {}
          }
          this.getAddress();
          if (!this.address) {
            this.putMsg("未配置地址或所有地址已达使用上限,退出填地址");
            return;
          }
          this.log("使用地址", this.address);
          let _0x38cad5 = await this.wxApi("mc/wxPointShop/saveAddress", {
            "venderId": this.venderId,
            "buyerPin": this.secretPin,
            "address": this.address.address,
            "city": this.address.city,
            "county": this.address.county,
            "province": this.address.province,
            "receiver": this.address.receiver,
            "receiverPhone": this.address.phone
          });
          if (!_0x38cad5 || !_0x38cad5.result) return this.putMsg(_0x38cad5?.["errorMessage"] || "保存地址失败");
          let _0x32033e = _0x38cad5.data.addressId;
          this.putMsg("已填地址");
          let _0x14cb04 = await this.wxApi("mc/wxPointShop/exgShiWu", {
            "buyerPin": this.secretPin,
            "buyerNick": this.nickname,
            "giftId": this.activityId,
            "venderId": this.venderId,
            "addressId": _0x32033e
          });
          if (_0x14cb04 && _0x14cb04.result) {
            let _0x2a08b2 = this.formatDate(Date.now(), "yyyy-MM-dd HH:mm:ss") + "," + _0x4f767a + "," + this.pin + "," + this.address?.["phone"] + "," + this.address?.["address"] + "," + _0x1029d4.envInfo.name + "," + (this.shopId ?? this.venderId) + "," + this.activityUrl + "\n";
            return this.appendFileSync("", "gifts.csv", _0x2a08b2), this.putMsg("兑换成功");
          }
          let _0x1b3bf9 = _0x14cb04?.["errorMessage"] || "兑换失败";
          this.putMsg(_0x1b3bf9);
          await this.wxStopSync(_0x1b3bf9);
          return;
        }
      }
    }
    let _0x2e0a8d = parseInt(_0x2dcbb9 / _0x34feac.data["point" + _0x1dd054]);
    if (_0x34feac.data?.["canExgByPeopDay"] && _0x2e0a8d > _0x34feac.data?.["canExgByPeopDay"]) _0x2e0a8d = _0x34feac.data?.["canExgByPeopDay"];
    let _0x4b57be = _0x34feac.data?.["beansLevelCount"];
    if (_0x2e0a8d < _0x4b57be) return this.putMsg("积分不足");
    _0x2e0a8d = _0x4b57be === 0 ? _0x2e0a8d : _0x4b57be;
    if (_0x271c07 === 1) {
      this.debug(_0x43cff6?.["filter"](_0x4b375c => _0x2dcbb9 >= _0x4b375c.num * _0x34feac.data["point" + _0x4b375c.grade])["sort"]((_0x1c18bf, _0x211527) => _0x211527 - _0x1c18bf));
      let _0xef9bba = _0x43cff6?.["filter"](_0x167570 => _0x2dcbb9 >= _0x167570.num * _0x34feac.data["point" + _0x167570.grade])?.["sort"]((_0x38c7e9, _0x28b845) => _0x28b845.num - _0x38c7e9.num)?.[0] ?? 0;
      _0x2e0a8d = _0xef9bba.num;
      _0x1dd054 = _0xef9bba.grade;
    }
    if (_0x2e0a8d <= 0) return this.putMsg("积分不足");
    let _0x5eea77 = await this.wxApi("mc/wxPointShop/exgBeans", {
      "buyerPin": this.secretPin,
      "buyerNick": this.nickname,
      "giftId": this.activityId,
      "venderId": this.venderId,
      "beansLevel": _0x1dd054,
      "exgBeanNum": _0x2e0a8d
    });
    if (_0x5eea77 && _0x5eea77.result) return this.putMsg(_0x2e0a8d + "京豆");
    let _0x445fb2 = _0x5eea77?.["errorMessage"] || "兑换失败";
    this.putMsg(_0x445fb2);
    await this.wxStopSync(_0x445fb2);
  }
}
_0x1029d4.activity = {
  "activityUrl": activityUrl
};
_0x1029d4.TaskClass = _0x2059db;
_0x1029d4.run({
  "whitelist": ["1-20000"],
  "main_thread": 3
});