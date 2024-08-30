//Fri Aug 30 2024 09:01:51 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
if (mode) {
  followShopArgv = "650767_655224";
  followShopArgv = "https://shop.m.jd.com/?shopId=650767";
  followShopArgv = "https://shop.m.jd.com/?venderId=650767";
  followShopArgv = "https://shop.m.jd.com/?shopId=650767&venderId=650767";
  followShopArgv = "1000083882_1000083882";
  followShopArgv = "https://shop.m.jd.com/shop/home?shopId=158274";
  followShopArgv = "https://shop.m.jd.com/shop/home?shopId=10075479&venderId=10211994";
  followShopArgv = "https://shop.m.jd.com/?shopId=793730";
  followShopArgv = "https://shop.m.jd.com/?shopId=11597512";
  followShopArgv = "https://shop.m.jd.com/?venderId=11880163";
  followShopArgv = "https://shop.m.jd.com/?shopId=1000477636";
  followShopArgv = "https://shop.m.jd.com/?venderId=10028122";
  followShopArgv = "https://shop.m.jd.com/shop/home?shopId=12318705";
  followShopArgv = "https://shop.m.jd.com/?shopId=13797188&venderId=13797188";
}
const {
  RunMode: lllIlIi1,
  UserMode: IIiIIIii
} = require("./bear");
lllIlIi1.envInfo = {
  "name": "关注有礼beta",
  "runName": "jd_follow_shop",
  "version": "1.0.3"
};
class iIIiIiil extends IIiIIIii {
  constructor(lIiIi1I, I1I1i1I1) {
    super(lIiIi1I, I1I1i1I1);
    this.retryCount = 1;
    this.proxyRetryCount = 1;
    this.otherHeaders = {
      "User-Agent": this.ua.jd4,
      "jdgs": "-3107",
      "x-referer-package": "com.360buy.jdmobile",
      "x-rp-client": "ios_4.0.0"
    };
  }
  ["removeLastCharacterIfAmpersand"](liI1ilii) {
    const i1i11 = liI1ilii.charAt(liI1ilii.length - 1);
    return i1i11 === "&" ? liI1ilii.slice(0, -1) : liI1ilii;
  }
  async ["userTask"]() {
    if (this.followShopArgv?.["startsWith"]("http")) this.shopId = this.getQueryString(this.followShopArgv, "shopId"), this.venderId = this.getQueryString(this.followShopArgv, "venderId");else {
      if (this.followShopArgv.includes("_")) {
        let iliillI1 = this.followShopArgv.split("_");
        this.shopId = iliillI1[0];
        this.venderId = iliillI1[1];
      } else {
        if (/^\d+$/.test(this.followShopArgv)) {
          this.venderId = this.followShopArgv;
        } else {
          this.putMsg("参数错误");
          this.stop();
          return;
        }
      }
    }
    !this.shopId && !this.venderId && (this.putMsg("参数错误"), this.stop());
    let i1lI11II = "https://shop.m.jd.com/?" + (this.shopId ? "shopId=" + this.shopId + "&" : "") + (this.venderId ? "venderId=" + this.venderId : "");
    lllIlIi1.activity.activityUrl = this.removeLastCharacterIfAmpersand(i1lI11II);
    await this.getShopInfo();
    this.shopId && (this.shopId = this.shopId.toString());
    this.venderId && (this.venderId = this.venderId.toString());
    let l1IlIil = {
      "source": "app-shop",
      "sourceRpc": "shop_app_home_home"
    };
    this.shopId && (l1IlIil.shopId = this.shopId);
    this.venderId && (l1IlIil.venderId = this.venderId);
    this.debug(l1IlIil);
    let liII1Il = await this.jd_api({
      "api": "client.action",
      "method": "post",
      "data": {},
      "body": l1IlIil,
      "functionId": "getShopHomeActivityInfo",
      "sign": true,
      "jdje": true
    });
    this.debug(liII1Il);
    if (!liII1Il || liII1Il.code !== "0") {
      if (liII1Il?.["message"]?.["includes"]("不匹配")) return this.putMsg(liII1Il.message), this.stop();
      this.putMsg(liII1Il ? JSON.stringify(liII1Il) : "获取活动信息失败");
      return;
    }
    let lili1Il = liII1Il.result;
    lili1Il?.["followed"] && (await this.unfollow());
    if (lili1Il?.["shopGifts"]?.["some"](iIillI1l => iIillI1l?.["rearWord"]["includes"]("京豆"))) {
      let iiill11I = {
        "activityId": lili1Il?.["activityId"],
        "follow": 0,
        "sourceRpc": "shop_app_home_window"
      };
      iiill11I.shopId = this.shopId || this.venderId;
      iiill11I.venderId = this.venderId || this.shopId;
      this.debug(iiill11I);
      let i11iIIii = await this.jd_api({
        "api": "client.action",
        "method": "post",
        "data": {},
        "body": iiill11I,
        "functionId": "drawShopGift",
        "sign": true,
        "jdje": true
      });
      this.debug(i11iIIii);
      if (i11iIIii && i11iIIii.code === "0") {
        let i1IilII1 = i11iIIii.result,
          Ili = i1IilII1?.["alreadyReceivedGifts"]?.["map"](iillllI1 => "" + iillllI1?.["rearWord"] + iillllI1?.["redWord"])["join"](",");
        this.putMsg(Ili);
        return;
      }
      this.putMsg(i11iIIii ? JSON.stringify(i11iIIii) : "领取失败");
    }
  }
}
lllIlIi1.activity = {
  "followShopArgv": followShopArgv
};
lllIlIi1.TaskClass = iIIiIiil;
lllIlIi1.run({
  "whitelist": ["1-20"],
  "main_thread": 3
});