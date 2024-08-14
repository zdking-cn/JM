//Wed Aug 14 2024 03:27:31 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const jdCookie = require("./jdCookie"),
  notify = require("./utils/Rebels_sendJDNotify"),
  common = require("./utils/Rebels_jdCommon.js"),
  getToken = require("./utils/Rebels_Token.js"),
  {
    lzdz1_savePrize
  } = require("./utils/Rebels_savePrize.js"),
  opencard_draw = "true",
  hotbreak = process.env.jd_opencard_break === "true",
  isNotify = process.env.jd_opencard_notify === "true";
let domains = "https://mybbphdyh-2357-dz.isvjcloud.com";
const tasklist = {
  1: "[孕检]",
  2: "[0-3岁]",
  3: "[3-6岁]",
  4: "[6-12岁]"
};
let cookie = "",
  activityCookie = "",
  originCookie = "";
const cookiesArr = Object.keys(jdCookie).map(_0x54b844 => jdCookie[_0x54b844]).filter(_0x339ed9 => _0x339ed9);
!cookiesArr[0] && ($.msg($.name, "【提示】请先获取Cookie"), process.exit(1));
!(async () => {
  console.log("开卡类活动不会自动运行，请自行测试是否有水");
  authorCodeList = await getAuthorCodeList("http://code.257999.xyz/jd_lzdz1_mybbphdyh.json");
  if (authorCodeList) {
    console.log("\n服务状态正常，活动获取成功");
    $.authorCode = authorCodeList[random(0, authorCodeList.length)];
  } else {
    let _0x30b3f7 = [""];
    $.authorCode = _0x30b3f7[random(0, _0x30b3f7.length)];
    console.log("\n服务状态异常，请检查网络是否正常\n");
  }
  $.activityId = "dz6c1cb6fb4ecebcade3602aa7e734";
  $.shareUuid = $.authorCode;
  $.activityUrl = "https://mybbphdyh-2357-dz.isvjcloud.com//m/1000001934/" + $.activityId + "/?shareUuid=" + $.shareUuid;
  notify.config({
    title: $.name
  });
  for (let _0x312fb7 = 0; _0x312fb7 < cookiesArr.length; _0x312fb7++) {
    $.index = _0x312fb7 + 1;
    cookie = cookiesArr[_0x312fb7];
    originCookie = cookiesArr[_0x312fb7];
    common.setCookie(cookie);
    $.UserName = decodeURIComponent(common.getCookieValue(cookie, "pt_pin"));
    $.UA = common.genUA($.UserName);
    $.message = notify.create($.index, $.UserName);
    $.nickName = "";
    console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "******\n");
    await run();
    common.unsetCookie();
    if ($.outFlag || $.activityEnd) {
      break;
    }
    await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
  }
  isNotify && notify.getMessage() && (notify.appendContent("\n"), await notify.push());
})().catch(_0x880bc2 => $.logErr(_0x880bc2)).finally(() => $.done());
async function run() {
  try {
    $.skipRun = false;
    $.hasEnd = true;
    $.drawStop = false;
    $.endTime = 0;
    $.Token = "";
    $.Pin = "";
    $.venderId = "";
    $.cardUuid = "";
    $.Token = await getToken(cookie, domains);
    if ($.Token == "") {
      console.log("缺少必要参数，请重新运行");
      return;
    }
    await getCk();
    if (activityCookie == "") {
      console.log("缺少必要参数，请重新运行");
      return;
    }
    if ($.outFlag) {
      console.log("IP被限制（493）\n");
      return;
    }
    await takePostRequest("init");
    if ($.venderId == "") {
      console.log("缺少必要参数，请重新运行");
      return;
    }
    await $.wait(500);
    await takePostRequest("getMyCidPing");
    if (!$.Pin) {
      console.log("获取用户信息失败，请重新运行");
      return;
    }
    await $.wait(500);
    await takePostRequest("accessLogWithAD");
    await $.wait(500);
    await takePostRequest("activityContent");
    if ($.hotFlag) {
      return;
    }
    if (!$.actorUuid) {
      console.log("获取不到[actorUuid]退出执行，请重新执行");
      return;
    }
    await takePostRequest("drawContent");
    if ($.index === 1) {
      const _0x9c9360 = $.time("yyyy-MM-dd HH:mm", $.startTime),
        _0x234383 = $.time("yyyy-MM-dd HH:mm", $.endTime);
      console.log(($.activityName && "活动名称：#" + $.activityName + "\n") + "活动ID：" + $.activityId);
      console.log("开始时间：" + _0x9c9360 + "\n结束时间：" + _0x234383 + "\n");
      const _0x2697ed = Date.now();
      if ($.startTime && _0x2697ed < $.startTime) {
        console.log("活动将在 " + _0x9c9360 + " 开始，晚点再来吧~");
        $.activityEnd = true;
        return;
      }
      if ($.endTime && _0x2697ed > $.endTime) {
        console.log("活动已于 " + _0x234383 + " 结束，下次早点来吧~");
        $.activityEnd = true;
        return;
      }
    }
    console.log("助力码：" + $.actorUuid);
    for (let _0x2d081d = 1; _0x2d081d <= 4; _0x2d081d++) {
      $.addSku = false;
      $.toMainActive = false;
      $.viewVideo = [];
      $.chooseType = _0x2d081d;
      $.chooseTypeMsg = "";
      await takePostRequest("chooseType");
      if (["已完成", "未完成"].some(_0x58e24f => $.chooseTypeMsg.includes(_0x58e24f))) {
        continue;
      }
      $.openList = [];
      $.allOpenCard = false;
      await takePostRequest("initOpenCard");
      if ($.allOpenCard == false) {
        console.log("开卡任务");
        for (o of $.openList) {
          $.openCard = false;
          if (o.openStatus == false) {
            $.joinVenderId = o.venderId;
            const _0x2851b5 = await common.joinShopMember($.joinVenderId);
            if (_0x2851b5) {
              console.log("加入店铺会员成功");
              await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
              await takePostRequest("activityContent");
            } else {
              console.log("加入店铺会员失败，跳过此账号");
              break;
            }
            await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
            await takePostRequest("activityContent");
            await takePostRequest("initOpenCard");
            await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
          }
        }
      } else {
        console.log("已全部开卡");
      }
      !$.addSku && ($.taskname = "一键加购", $.taskType = 2, $.taskValue = 2, await takePostRequest("saveTask"), await $.wait(parseInt(Math.random() * 1000 + 1000, 10)));
      for (let _0x362372 of $.toMainActiveList) {
        _0x362372.status === "0" && ($.taskname = _0x362372.name, $.taskType = 12, $.taskValue = _0x362372.value, await takePostRequest("startVisitTask"), await $.wait(parseInt(Math.random() * 1000 + 15000, 10)), await takePostRequest("saveTask"), await $.wait(parseInt(Math.random() * 1000 + 1000, 10)));
      }
      if ($.viewVideo.length < 3) {
        $.allList = [];
        await takePostRequest("tsService");
        let _0x350b2f = 0;
        for (let _0x12beea of $.allList) {
          if (_0x350b2f >= 3) {
            break;
          }
          $.taskname = "去浏览" + _0x12beea.skuName;
          $.taskType = 31;
          $.taskValue = _0x12beea.skuId;
          await takePostRequest("startVisitTask");
          await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
          await takePostRequest("saveTask");
          await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
          _0x350b2f++;
        }
      }
      await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
    }
    await takePostRequest("getHasCard");
    await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
    if ($.hasCardList && $.hasCardList.length > 0) {
      console.log("\n已有卡片:");
      $.hasCardList.forEach(_0x102b70 => console.log(_0x102b70.cardName + "  " + _0x102b70.hasNum));
      const _0x13fe55 = $.hasCardList.filter(_0x4aaecc => _0x4aaecc.hasNum === 0 && !_0x4aaecc.cardName.includes("万能") && !_0x4aaecc.cardName.includes("轻松")).map(_0x5ad43f => _0x5ad43f.cardName);
      _0x13fe55.length > 0 ? console.log("\n不可合成，还缺少 [" + _0x13fe55.join(", ") + "] 卡片") : (await takePostRequest("synthesisCard"), await $.wait(parseInt(Math.random() * 1000 + 1000, 10)), await takePostRequest("getHasCard"), await $.wait(parseInt(Math.random() * 1000 + 1000, 10)));
    }
    console.log("\n可以抽奖" + $.drawNum + "次");
    $.drawNum === 1 && opencard_draw && (await takePostRequest("startDraw"), await $.wait(parseInt(Math.random() * 1000 + 1000, 10)));
    if ($.outFlag) {
      console.log("IP被限制（493）\n");
      return;
    }
    $.index == 1 && ($.shareUuid = $.actorUuid, console.log("\n后面的号都会助力 -> " + $.shareUuid));
    if ($.index % 5 == 0) {
      await $.wait(parseInt(Math.random() * 5000 + 15000, 10));
    }
  } catch (_0x4ab4d4) {
    console.log(_0x4ab4d4);
  }
}
async function takePostRequest(_0x269672) {
  if ($.outFlag) {
    return;
  }
  let _0x94a679 = "",
    _0x232baa = null,
    _0x47727f = "POST";
  switch (_0x269672) {
    case "init":
      _0x94a679 = domains + "/dingzhi/taskact/common/init";
      _0x232baa = "activityId=" + $.activityId + "&dzActivityType=0&adSource=&pin=";
      break;
    case "getMyCidPing":
      _0x94a679 = domains + "/customer/getMyCidPing";
      _0x232baa = "activityId=" + $.activityId + "&token=" + $.Token + "&fromType=APP_shopGift&userId=" + $.venderId + "&pin=";
      break;
    case "accessLogWithAD":
      _0x94a679 = domains + "/common/accessLogWithAD";
      _0x232baa = "venderId=" + $.venderId + "&code=99&pin=" + encodeURIComponent($.Pin) + "&activityId=" + $.activityId + "&pageUrl=" + encodeURIComponent($.activityUrl) + "&subType=app&adSource=";
      break;
    case "drawContent":
      _0x94a679 = domains + "/dingzhi/taskact/common/drawContent";
      _0x232baa = "activityId=" + $.activityId + "&pin=" + encodeURIComponent($.Pin);
      break;
    case "activityContent":
      _0x94a679 = domains + "/dingzhi/mybbp/active/activityContent";
      _0x232baa = "activityId=" + $.activityId + "&pin=" + encodeURIComponent($.Pin) + "&pinImg=" + encodeURIComponent("https://img10.360buyimg.com/imgzone/jfs/t1/7020/27/13511/6142/5c5138d8E4df2e764/5a1216a3a5043c5d.png") + "&nick=" + encodeURIComponent($.nickname) + "&cjyxPin=&cjhyPin=&shareUuid=" + $.shareUuid;
      break;
    case "initOpenCard":
      _0x94a679 = domains + "/dingzhi/mybbp/active/initOpenCard";
      _0x232baa = "activityId=" + $.activityId + "&pin=" + encodeURIComponent($.Pin) + "&actorUuid=" + $.actorUuid + "&shareUuid=" + $.shareUuid + "&cardUuid=" + $.cardUuid;
      break;
    case "chooseType":
      _0x94a679 = domains + "/dingzhi/mybbp/active/chooseType";
      _0x232baa = "activityId=" + $.activityId + "&pin=" + encodeURIComponent($.Pin) + "&actorUuid=" + $.actorUuid + "&shareUuid=" + $.shareUuid + "&type=" + $.chooseType;
      break;
    case "startVisitTask":
      _0x94a679 = domains + "/dingzhi/common/visitTask/startVisitTask";
      _0x232baa = "activityId=" + $.activityId + "&pin=" + encodeURIComponent($.Pin) + "&actorUuid=" + $.actorUuid + "&shareUuid=" + $.shareUuid + "&taskType=" + $.taskType + "&taskValue=" + $.taskValue;
      break;
    case "saveTask":
      _0x94a679 = domains + "/dingzhi/mybbp/active/saveTask";
      _0x232baa = "activityId=" + $.activityId + "&pin=" + encodeURIComponent($.Pin) + "&actorUuid=" + $.actorUuid + "&shareUuid=" + $.shareUuid + "&taskType=" + $.taskType + "&taskValue=" + $.taskValue;
      if ($.taskType === 12) {
        _0x232baa += "&taskUuid=" + $.taskUuid;
      }
      break;
    case "tsService":
      _0x94a679 = domains + "/dingzhi/mybbp/active/tsService";
      _0x232baa = "activityId=" + $.activityId + "&actorUuid=" + $.actorUuid + "&pin=" + encodeURIComponent($.Pin);
      break;
    case "getHasCard":
      _0x94a679 = domains + "/dingzhi/mybbp/active/getHasCard";
      _0x232baa = "activityId=" + $.activityId + "&actorUuid=" + $.actorUuid + "&pin=" + encodeURIComponent($.Pin);
      break;
    case "synthesisCard":
      _0x94a679 = domains + "/dingzhi/mybbp/active/synthesisCard";
      _0x232baa = "activityId=" + $.activityId + "&actorUuid=" + $.actorUuid + "&pin=" + encodeURIComponent($.Pin);
      break;
    case "startDraw":
      _0x94a679 = domains + "/dingzhi/mybbp/active/startDraw";
      _0x232baa = "activityId=" + $.activityId + "&actorUuid=" + $.actorUuid + "&pin=" + encodeURIComponent($.Pin);
      break;
    case "jdDraw":
      _0x94a679 = domains + "/dingzhi/mybbp/active/jdDraw";
      _0x232baa = "activityId=" + $.activityId + "&actorUuid=" + $.actorUuid + "&pin=" + encodeURIComponent($.Pin);
      break;
    default:
      console.log("错误" + _0x269672);
  }
  const _0x4bfad4 = {
    url: _0x94a679,
    method: _0x47727f,
    headers: {
      Accept: "application/json",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-cn",
      Connection: "keep-alive",
      "Content-Type": "application/x-www-form-urlencoded",
      Cookie: activityCookie,
      "User-Agent": $.UA,
      "X-Requested-With": "XMLHttpRequest",
      Origin: "https://mybbphdyh-2357-dz.isvjcloud.com",
      Referer: domains
    },
    data: _0x232baa,
    timeout: 20000
  };
  _0x47727f === "GET" && (delete _0x4bfad4.body, delete _0x4bfad4.headers["Content-Type"]);
  const _0x6d0ea7 = 5;
  let _0x4ea36b = 0,
    _0x961fa5 = null,
    _0xe99970 = false;
  while (_0x4ea36b < _0x6d0ea7) {
    _0x4ea36b > 0 && (await $.wait(1000));
    const _0x218f5e = await common.request(_0x4bfad4);
    if (!_0x218f5e.success) {
      _0x961fa5 = _0x269672 + " 请求失败 ➜ " + _0x218f5e.error;
      _0x4ea36b++;
      _0x218f5e.status && [403, 493].includes(_0x218f5e.status) && (_0xe99970 = true);
      continue;
    }
    if (["accessLog", "accessLogWithAD"].includes(_0x269672)) {
      break;
    }
    if (!_0x218f5e.data && !["drawContent"].includes(_0x269672)) {
      _0x961fa5 = _0x269672 + " 请求失败 ➜ 无响应数据";
      _0x4ea36b++;
      continue;
    }
    const _0x57cc2c = common.getResponseCookie(_0x218f5e, activityCookie);
    let _0x184dab = "";
    switch (_0x269672) {
      case "getMyCidPing":
        _0x184dab = common.getCookieValue(_0x57cc2c, "LZ_AES_PIN");
        _0x184dab ? $.LZ_AES_PIN = _0x184dab : (console.log("获取 LZ_AES_PIN 失败！"), $.skipRun = true);
        break;
    }
    ["getMyCidPing", "getGoodsInfo", "startDraw"].includes(_0x269672) && (activityCookie = _0x57cc2c);
    _0x184dab = common.getCookieValue(activityCookie, "LZ_AES_PIN");
    !_0x184dab && $.LZ_AES_PIN && (activityCookie += "LZ_AES_PIN=" + $.LZ_AES_PIN + "; ");
    const _0x203192 = common.getCookieValue(activityCookie, "LZ_TOKEN_KEY");
    !_0x203192 && $.LZ_TOKEN_KEY && (activityCookie += "LZ_TOKEN_KEY=" + $.LZ_TOKEN_KEY + "; ");
    const _0x44523b = common.getCookieValue(activityCookie, "LZ_TOKEN_VALUE");
    !_0x44523b && $.LZ_TOKEN_VALUE && (activityCookie += "LZ_TOKEN_VALUE=" + $.LZ_TOKEN_VALUE + "; ");
    await handleResponse(_0x269672, _0x218f5e.data);
    _0xe99970 = false;
    break;
  }
  _0x4ea36b >= _0x6d0ea7 && (console.log(_0x961fa5), _0xe99970 && !hotbreak && ($.outFlag = true));
}
async function handleResponse(_0x672436, _0x1c00b9) {
  try {
    switch (_0x672436) {
      case "init":
        if (_0x1c00b9.result && _0x1c00b9.result === true) {
          $.shopId = _0x1c00b9.data?.["shopId"];
          $.venderId = _0x1c00b9.data?.["venderId"];
          $.startTime = _0x1c00b9.data?.["startTime"];
          $.endTime = _0x1c00b9.data?.["endTime"];
          $.activityType = _0x1c00b9.data?.["activityType"];
        } else {
          _0x1c00b9.errorMessage ? console.log("" + (_0x1c00b9.errorMessage || "")) : console.log("❓" + _0x672436 + " " + JSON.stringify(_0x1c00b9));
        }
        break;
      case "getMyCidPing":
        if (_0x1c00b9.result && _0x1c00b9.result === true) {
          if (_0x1c00b9.data && typeof _0x1c00b9.data?.["secretPin"] != "undefined") {
            $.Pin = _0x1c00b9.data?.["secretPin"];
          }
          if (_0x1c00b9.data && typeof _0x1c00b9.data?.["nickname"] != "undefined") {
            $.nickname = _0x1c00b9.data?.["nickname"];
          }
        } else {
          _0x1c00b9.errorMessage ? console.log("" + (_0x1c00b9.errorMessage || "")) : console.log("❓" + _0x672436 + " " + JSON.stringify(_0x1c00b9));
        }
        break;
      case "activityContent":
        if (_0x1c00b9.result && _0x1c00b9.result === true) {
          $.activityContent = _0x1c00b9.data;
          $.activityName = _0x1c00b9.data?.["activityName"] || "";
          $.endTime = _0x1c00b9.data?.["endTime"] || _0x1c00b9.data?.["activityVo"] && _0x1c00b9.data?.["activityVo"]?.["endTime"] || _0x1c00b9.data?.["activity"]?.["endTime"] || 0;
          $.hasEnd = _0x1c00b9.data.hasEnd || false;
          $.score = _0x1c00b9.data.score || 0;
          $.score2 = _0x1c00b9.data.score2 || 0;
          $.openCard = _0x1c00b9.data.openCard || false;
          $.guafenStatus = _0x1c00b9.data.guafenStatus || false;
          $.actorUuid = _0x1c00b9.data.actorUuid || 0;
        } else {
          _0x1c00b9.errorMessage ? console.log("" + (_0x1c00b9.errorMessage || "")) : console.log("❓" + _0x672436 + " " + JSON.stringify(_0x1c00b9));
        }
        break;
      case "initOpenCard":
        if (_0x1c00b9.result && _0x1c00b9.result === true) {
          $.openList = _0x1c00b9.data.openInfo || [];
          $.showCardRecordList = _0x1c00b9.data.showCardRecordList || [];
          $.allOpenCard = _0x1c00b9.data.allOpenCard || _0x1c00b9.data.isOpenCardStatus || false;
          $.openCardBean = _0x1c00b9.data.openCardBean || 0;
          $.assistStatus = _0x1c00b9.data.assistStatus || 0;
          if ($.openCardBean) {
            console.log("> 开卡获得:" + $.openCardBean + "京豆🐶");
          }
          if ($.showCardRecordList && $.showCardRecordList.length > 0) {
            console.log("获得卡片: " + $.showCardRecordList.map(_0xefc3e8 => _0xefc3e8.cardName).join(", "));
          }
          $.assistStatus === 1 && console.log("助力成功 ✅");
        } else {
          _0x1c00b9.errorMessage ? console.log("" + (_0x1c00b9.errorMessage || "")) : console.log("❓" + _0x672436 + " " + JSON.stringify(_0x1c00b9));
        }
        break;
      case "chooseType":
        if (_0x1c00b9.result && _0x1c00b9.result === true) {
          $.addSku = _0x1c00b9.data.addSku || false;
          $.toMainActive = _0x1c00b9.data.toMainActive || false;
          $.toMainActiveList = _0x1c00b9.data.toMainActiveList || [];
          $.viewVideo = _0x1c00b9.data.viewVideo || [];
          $.shareNum = _0x1c00b9.data.shareNum || 0;
          console.log(tasklist[$.chooseType] + "任务已邀请[" + $.shareNum + "/5]个好友助力");
        } else {
          _0x1c00b9.errorMessage ? $.chooseTypeMsg = _0x1c00b9.errorMessage || "" : console.log("❓" + _0x672436 + " " + JSON.stringify(_0x1c00b9));
        }
        break;
      case "tsService":
        if (_0x1c00b9.result && _0x1c00b9.result === true) {
          $.allList = _0x1c00b9.data.allList || [];
        } else {
          _0x1c00b9.errorMessage ? console.log("" + (_0x1c00b9.errorMessage || "")) : console.log("❓" + _0x672436 + " " + JSON.stringify(_0x1c00b9));
        }
        break;
      case "getHasCard":
        if (_0x1c00b9.result && _0x1c00b9.result === true) {
          $.hasCardList = _0x1c00b9.data.hasCardList || [];
          $.drawNumJd = _0x1c00b9.data.drawNumJd || 0;
          $.drawNum = _0x1c00b9.data.drawNum || 0;
        } else {
          _0x1c00b9.errorMessage ? console.log("" + (_0x1c00b9.errorMessage || "")) : console.log("❓" + _0x672436 + " " + JSON.stringify(_0x1c00b9));
        }
        break;
      case "synthesisCard":
        if (_0x1c00b9.result && _0x1c00b9.result === true) {
          console.log("满足合成，合成成功");
        } else {
          _0x1c00b9.errorMessage ? console.log("" + (_0x1c00b9.errorMessage || "")) : console.log("❓" + _0x672436 + " " + JSON.stringify(_0x1c00b9));
        }
        break;
      case "startVisitTask":
        if (_0x1c00b9.result && _0x1c00b9.result === true) {
          $.taskUuid = _0x1c00b9.data.taskUuid;
        } else {
          _0x1c00b9.errorMessage ? console.log("" + (_0x1c00b9.errorMessage || "")) : console.log("❓" + _0x672436 + " " + JSON.stringify(_0x1c00b9));
        }
        break;
      case "saveTask":
        if (_0x1c00b9.result && _0x1c00b9.result === true) {
          let _0x3a0825 = "完成" + $.taskname + "任务";
          _0x1c00b9?.["data"]?.["addBeanNum"] > 0 && (_0x3a0825 += ",获得" + (_0x1c00b9?.["data"]?.["addBeanNum"] || 0) + "京豆");
          _0x1c00b9?.["data"]?.["sendCardRecordList"] && _0x1c00b9?.["data"]?.["sendCardRecordList"]["length"] > 0 && (_0x3a0825 += ",获得卡片[" + (_0x1c00b9?.["data"]?.["sendCardRecordList"][0]["cardName"] || "") + "]");
          console.log(_0x3a0825);
        } else {
          _0x1c00b9.errorMessage ? console.log("" + (_0x1c00b9.errorMessage || "")) : console.log("❓" + _0x672436 + " " + JSON.stringify(_0x1c00b9));
        }
        break;
      case "jdDraw":
        if (_0x1c00b9.result && _0x1c00b9.result === true) {
          _0x1c00b9.data.drawStatus ? console.log("抽奖获得: " + JSON.stringify(_0x1c00b9)) : console.log("抽奖获得: 空气");
        } else {
          _0x1c00b9.errorMessage ? console.log("" + (_0x1c00b9.errorMessage || "")) : console.log("❓" + _0x672436 + " " + JSON.stringify(_0x1c00b9));
        }
        break;
      case "startDraw":
        if (_0x1c00b9.result && _0x1c00b9.result === true) {
          if (_0x1c00b9.data?.["wdsrvo"]?.["drawOk"]) {
            const _0x5f04ae = _0x1c00b9.data?.["wdsrvo"]["drawInfo"];
            if (_0x5f04ae) {
              switch (_0x5f04ae.type) {
                case 6:
                  console.log("🎉 " + _0x5f04ae.name + " 🐶");
                  break;
                case 7:
                  const _0xfc2259 = domains + "/dingzhi/mybbp/active/saveAddress",
                    _0x1d3297 = _0x5f04ae.addressId,
                    _0x4b6bb6 = _0x5f04ae.drawName;
                  console.log(_0x5f04ae);
                  console.log("🎉 恭喜获得实物,奖品名称：" + _0x4b6bb6);
                  const _0x180499 = {
                      baseUrl: domains,
                      saveAddressurl: _0xfc2259,
                      uuid: $.actorUuid,
                      cookie: activityCookie,
                      ua: $.UA,
                      activityId: $.activityId,
                      activityType: 99,
                      venderId: $.venderId,
                      secretPin: $.Pin,
                      prizeName: _0x4b6bb6,
                      itemsId: _0x1d3297,
                      activityUrl: $.activityUrl
                    },
                    _0x34078e = await lzdz1_savePrize(_0x180499);
                  _0x34078e && (await notify.sendNotify($.name + "中奖通知", "【京东账号" + $.index + "】" + $.nickName + "\n抽中实物 " + _0x4b6bb6 + "，已成功自动登记收货地址\n\n" + $.activityUrl));
                  break;
                case 8:
                  console.log("🗑️ 专享价");
                  break;
                case 9:
                  console.log("🗑️ " + _0x5f04ae.name + " 🎟️");
                  break;
                case 13:
                case 14:
                case 15:
                  console.log("🎉 恭喜获得" + _0x5f04ae.name + " 🎁");
                  await notify.sendNotify($.name + "中奖通知", "【京东账号" + $.index + "】" + $.nickName + "\n抽中 " + _0x5f04ae.name + "\n\n" + $.activityUrl);
                  break;
                case 16:
                  console.log("🎉 " + _0x5f04ae.priceInfo + " 🧧");
                  break;
                default:
                  _0x5f04ae.name.includes("券") ? console.log("🗑️ 优惠券") : console.log("获得：" + _0x5f04ae.name);
                  break;
              }
            }
          } else {
            console.log("💨 空气");
          }
        } else {
          _0x1c00b9.errorMessage ? ($.drawError = _0x1c00b9.errorMessage, ["未开始", "结束", "不存在", "不在"].some(_0xf9f079 => $.drawError.includes(_0xf9f079)) && ($.activityEnd = true), console.log($.drawError)) : console.log("❓" + _0x672436 + " " + JSON.stringify(_0x1c00b9));
        }
        break;
      case "accessLogWithAD":
      case "drawContent":
        break;
      default:
        console.log(_0x672436 + "-> " + _0x1c00b9);
    }
    typeof _0x1c00b9 == "object" && _0x1c00b9.errorMessage && _0x1c00b9.errorMessage.indexOf("火爆") > -1 && ($.hotFlag = true);
  } catch (_0x389819) {
    console.log(_0x389819);
  }
}
async function getCk() {
  $.skipRun = true;
  const _0x3e0607 = {
      url: "https://lzdz1-isv.isvjd.com/wxCommonInfo/token",
      method: "GET",
      headers: {
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9",
        Connection: "keep-alive",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "cross-site",
        Referer: domains,
        "User-Agent": $.UA
      },
      timeout: 30000
    },
    _0x235ea3 = 3;
  let _0x1d87e6 = 0,
    _0xd77bd0 = null,
    _0x1032e7 = false;
  while (_0x1d87e6 < _0x235ea3) {
    _0x1d87e6 > 0 && (await $.wait(1000));
    const _0x5131d0 = await common.request(_0x3e0607);
    if (!_0x5131d0.success) {
      _0xd77bd0 = "getCk ➜ " + _0x5131d0.error;
      _0x1d87e6++;
      _0x5131d0.status && [403, 493].includes(_0x5131d0.status) && (_0x1032e7 = true);
      continue;
    }
    if (!_0x5131d0.data) {
      _0xd77bd0 = "getCk ➜ 无响应数据";
      _0x1d87e6++;
      continue;
    }
    activityCookie = common.getResponseCookie(_0x5131d0);
    let _0x16a097 = "",
      _0x1add2a = "";
    _0x16a097 = common.getCookieValue(activityCookie, "LZ_TOKEN_KEY");
    _0x1add2a = common.getCookieValue(activityCookie, "LZ_TOKEN_VALUE");
    _0x16a097 && ($.LZ_TOKEN_KEY = _0x16a097);
    _0x1add2a && ($.LZ_TOKEN_VALUE = _0x1add2a);
    $.skipRun = false;
    break;
  }
  _0x1d87e6 >= _0x235ea3 && (console.log(_0xd77bd0), _0x1032e7 && !hotbreak && ($.outFlag = true));
}
async function getAuthorCodeList(_0x407053) {
  const _0x235522 = await common.request({
      url: _0x407053,
      method: "GET",
      headers: {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88"
      },
      proxy: null,
      debug: false,
      timeout: 30000
    }),
    _0x533103 = _0x235522.data;
  return _0x533103;
}
function random(_0x2b32a3, _0x2c4186) {
  return Math.floor(Math.random() * (_0x2c4186 - _0x2b32a3)) + _0x2b32a3;
}