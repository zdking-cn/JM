//Wed Aug 14 2024 03:10:29 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const jdCookie = require("./jdCookie"),
  notify = require("./utils/Rebels_sendJDNotify"),
  common = require("./utils/Rebels_jdCommon.js"),
  getToken = require("./utils/Rebels_Token.js"),
  {
    lzdz1_savePrize
  } = require("./utils/Rebels_savePrize.js"),
  hotbreak = process.env.jd_opencard_break === "true",
  isNotify = process.env.jd_opencard_notify === "true";
let domains = "https://mybbphdyh-2357-dz.isvjcloud.com",
  myCard = [];
$.selectedCardUuid = "";
const tasklist = {
  1: "[孕检]",
  2: "[0-3岁]",
  3: "[3-6岁]",
  4: "[6-12岁]"
};
let cookie = "",
  activityCookie = "";
const cookiesArr = Object.keys(jdCookie).map(_0x16aea3 => jdCookie[_0x16aea3]).filter(_0x4c4cc9 => _0x4c4cc9);
!cookiesArr[0] && ($.msg($.name, "【提示】请先获取Cookie"), process.exit(1));
!(async () => {
  console.log("开卡类活动不会自动运行，请自行测试是否有水");
  authorCodeList = await getAuthorCodeList("http://code.257999.xyz/jd_lzdz1_mybbphdyh.json");
  if (authorCodeList) {
    console.log("\n服务状态正常，活动获取成功");
    $.authorCode = authorCodeList[random(0, authorCodeList.length)];
  } else {
    let _0x514e7e = [""];
    $.authorCode = _0x514e7e[random(0, _0x514e7e.length)];
    console.log("\n服务状态异常，请检查网络是否正常\n");
  }
  $.activityId = "dz6c1cb6fb4ecebcade3602aa7e734";
  $.shareUuid = $.authorCode;
  $.activityUrl = "https://mybbphdyh-2357-dz.isvjcloud.com//m/1000001934/" + $.activityId + "/?shareUuid=" + $.shareUuid;
  notify.config({
    title: $.name
  });
  console.log("\n仅查找账号[1]缺少的卡片，账号[1]每天只能接受一次");
  for (let _0x54517a = 0; _0x54517a < 1; _0x54517a++) {
    $.index = _0x54517a + 1;
    cookie = cookiesArr[_0x54517a];
    originCookie = cookiesArr[_0x54517a];
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
  if (myCard.length > 0) {
    for (let _0xa9aa72 = cookiesArr.length - 1; _0xa9aa72 >= 0; _0xa9aa72--) {
      $.index = cookiesArr.length - _0xa9aa72;
      cookie = cookiesArr[_0xa9aa72];
      originCookie = cookiesArr[_0xa9aa72];
      common.setCookie(cookie);
      $.UserName = decodeURIComponent(common.getCookieValue(cookie, "pt_pin"));
      $.UA = common.genUA($.UserName);
      $.message = notify.create($.index, $.UserName);
      $.nickName = "";
      console.log("\n******开始【京东账号】" + ($.nickName || $.UserName) + "******\n");
      await mian();
      common.unsetCookie();
      if ($.outFlag || $.runEnd) {
        break;
      }
      await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
    }
  }
  if ($.selectedCardUuid) {
    for (let _0x32d132 = 0; _0x32d132 < 1; _0x32d132++) {
      $.index = _0x32d132 + 1;
      cookie = cookiesArr[_0x32d132];
      originCookie = cookiesArr[_0x32d132];
      common.setCookie(cookie);
      $.UserName = decodeURIComponent(common.getCookieValue(cookie, "pt_pin"));
      $.UA = common.genUA($.UserName);
      $.message = notify.create($.index, $.UserName);
      $.nickName = "";
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "******\n");
      await give();
      common.unsetCookie();
      if ($.outFlag || $.activityEnd) {
        break;
      }
      await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
    }
  }
  isNotify && notify.getMessage() && (notify.appendContent("\n"), await notify.push());
})().catch(_0x676835 => $.logErr(_0x676835)).finally(() => $.done());
async function run() {
  try {
    await information();
    if ($.index === 1) {
      const _0x416163 = $.time("yyyy-MM-dd HH:mm", $.startTime),
        _0x2b6a65 = $.time("yyyy-MM-dd HH:mm", $.endTime);
      console.log(($.activityName && "活动名称：#" + $.activityName + "\n") + "活动ID：" + $.activityId);
      console.log("开始时间：" + _0x416163 + "\n结束时间：" + _0x2b6a65 + "\n");
      const _0xfd0e2f = Date.now();
      if ($.startTime && _0xfd0e2f < $.startTime) {
        console.log("活动将在 " + _0x416163 + " 开始，晚点再来吧~");
        $.activityEnd = true;
        return;
      }
      if ($.endTime && _0xfd0e2f > $.endTime) {
        console.log("活动已于 " + _0x2b6a65 + " 结束，下次早点来吧~");
        $.activityEnd = true;
        return;
      }
    }
    await takePostRequest("getHasCard");
    await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
    if ($.hasCardList && $.hasCardList.length > 0) {
      console.log("\n已有卡片:");
      $.hasCardList.forEach(_0x5239b5 => console.log(_0x5239b5.cardName + "  " + _0x5239b5.hasNum));
      const _0x8939ee = $.hasCardList.filter(_0x448ac8 => _0x448ac8.hasNum === 0 && !_0x448ac8.cardName.includes("万能") && !_0x448ac8.cardName.includes("轻松")).map(_0x4fd472 => _0x4fd472.cardName);
      if (_0x8939ee.length > 0) {
        const _0x6f826a = _0x8939ee[0];
        console.log("\n不可合成，还缺少 [" + _0x8939ee.join(", ") + "] 卡片");
        console.log("缺少的第一张卡片是: " + _0x6f826a);
        myCard.push(_0x6f826a);
      }
    }
  } catch (_0x44d96a) {
    console.log(_0x44d96a);
  }
}
async function mian() {
  try {
    await information();
    await takePostRequest("getHasCard");
    await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
    if ($.hasCardList && $.hasCardList.length > 0) {
      const _0x4db604 = $.hasCardList.find(_0x139441 => _0x139441.hasNum >= 1 && myCard.includes(_0x139441.cardName));
      if (_0x4db604) {
        console.log("找到符合条件的参数:");
        $.selectedCardUuid = _0x4db604.cardUuid[0];
        console.log(_0x4db604.cardName + "," + $.selectedCardUuid);
        $.runEnd = true;
        return;
      } else {
        console.log("没有找到符合条件的参数");
      }
    }
    if ($.index % 5 == 0) {
      await $.wait(parseInt(Math.random() * 5000 + 15000, 10));
    }
  } catch (_0x45e133) {
    console.log(_0x45e133);
  }
}
async function give() {
  try {
    await information();
    await takePostRequest("initOpenCard");
    await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
    await takePostRequest("getHasCard");
    await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
    if ($.hasCardList && $.hasCardList.length > 0) {
      console.log("\n已有卡片:");
      $.hasCardList.forEach(_0x3a0c1d => console.log(_0x3a0c1d.cardName + "  " + _0x3a0c1d.hasNum));
      const _0x380841 = $.hasCardList.filter(_0x59c1e7 => _0x59c1e7.hasNum === 0 && !_0x59c1e7.cardName.includes("万能") && !_0x59c1e7.cardName.includes("轻松")).map(_0x36f61b => _0x36f61b.cardName);
      _0x380841.length > 0 ? console.log("\n不可合成，还缺少 [" + _0x380841.join(", ") + "] 卡片") : (await takePostRequest("synthesisCard"), await $.wait(parseInt(Math.random() * 1000 + 1000, 10)));
    }
  } catch (_0x877146) {
    console.log(_0x877146);
  }
}
async function information() {
  try {
    $.skipRun = false;
    $.hasEnd = true;
    $.drawStop = false;
    $.endTime = 0;
    $.Token = "";
    $.Pin = "";
    $.venderId = "";
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
  } catch (_0x3186ee) {
    console.log(_0x3186ee);
  }
}
async function takePostRequest(_0x2a79cf) {
  if ($.outFlag) {
    return;
  }
  let _0x5aed12 = "",
    _0x22aced = null,
    _0x5333fe = "POST";
  switch (_0x2a79cf) {
    case "init":
      _0x5aed12 = domains + "/dingzhi/taskact/common/init";
      _0x22aced = "activityId=" + $.activityId + "&dzActivityType=0&adSource=&pin=";
      break;
    case "getMyCidPing":
      _0x5aed12 = domains + "/customer/getMyCidPing";
      _0x22aced = "activityId=" + $.activityId + "&token=" + $.Token + "&fromType=APP_shopGift&userId=" + $.venderId + "&pin=";
      break;
    case "accessLogWithAD":
      _0x5aed12 = domains + "/common/accessLogWithAD";
      _0x22aced = "venderId=" + $.venderId + "&code=99&pin=" + encodeURIComponent($.Pin) + "&activityId=" + $.activityId + "&pageUrl=" + encodeURIComponent($.activityUrl) + "&subType=app&adSource=";
      break;
    case "drawContent":
      _0x5aed12 = domains + "/dingzhi/taskact/common/drawContent";
      _0x22aced = "activityId=" + $.activityId + "&pin=" + encodeURIComponent($.Pin);
      break;
    case "activityContent":
      _0x5aed12 = domains + "/dingzhi/mybbp/active/activityContent";
      _0x22aced = "activityId=" + $.activityId + "&pin=" + encodeURIComponent($.Pin) + "&pinImg=" + encodeURIComponent("https://img10.360buyimg.com/imgzone/jfs/t1/7020/27/13511/6142/5c5138d8E4df2e764/5a1216a3a5043c5d.png") + "&nick=" + encodeURIComponent($.nickname) + "&cjyxPin=&cjhyPin=&shareUuid=" + $.shareUuid;
      break;
    case "initOpenCard":
      _0x5aed12 = domains + "/dingzhi/mybbp/active/initOpenCard";
      _0x22aced = "activityId=" + $.activityId + "&pin=" + encodeURIComponent($.Pin) + "&actorUuid=" + $.actorUuid + "&shareUuid=" + $.shareUuid + "&cardUuid=" + $.selectedCardUuid;
      break;
    case "chooseType":
      _0x5aed12 = domains + "/dingzhi/mybbp/active/chooseType";
      _0x22aced = "activityId=" + $.activityId + "&pin=" + encodeURIComponent($.Pin) + "&actorUuid=" + $.actorUuid + "&shareUuid=" + $.shareUuid + "&type=" + $.chooseType;
      break;
    case "startVisitTask":
      _0x5aed12 = domains + "/dingzhi/common/visitTask/startVisitTask";
      _0x22aced = "activityId=" + $.activityId + "&pin=" + encodeURIComponent($.Pin) + "&actorUuid=" + $.actorUuid + "&shareUuid=" + $.shareUuid + "&taskType=" + $.taskType + "&taskValue=" + $.taskValue;
      break;
    case "saveTask":
      _0x5aed12 = domains + "/dingzhi/mybbp/active/saveTask";
      _0x22aced = "activityId=" + $.activityId + "&pin=" + encodeURIComponent($.Pin) + "&actorUuid=" + $.actorUuid + "&shareUuid=" + $.shareUuid + "&taskType=" + $.taskType + "&taskValue=" + $.taskValue;
      if ($.taskType === 12) {
        _0x22aced += "&taskUuid=" + $.taskUuid;
      }
      break;
    case "tsService":
      _0x5aed12 = domains + "/dingzhi/mybbp/active/tsService";
      _0x22aced = "activityId=" + $.activityId + "&actorUuid=" + $.actorUuid + "&pin=" + encodeURIComponent($.Pin);
      break;
    case "getHasCard":
      _0x5aed12 = domains + "/dingzhi/mybbp/active/getHasCard";
      _0x22aced = "activityId=" + $.activityId + "&actorUuid=" + $.actorUuid + "&pin=" + encodeURIComponent($.Pin);
      break;
    case "synthesisCard":
      _0x5aed12 = domains + "/dingzhi/mybbp/active/synthesisCard";
      _0x22aced = "activityId=" + $.activityId + "&actorUuid=" + $.actorUuid + "&pin=" + encodeURIComponent($.Pin);
      break;
    case "startDraw":
      _0x5aed12 = domains + "/dingzhi/mybbp/active/startDraw";
      _0x22aced = "activityId=" + $.activityId + "&actorUuid=" + $.actorUuid + "&pin=" + encodeURIComponent($.Pin);
      break;
    case "jdDraw":
      _0x5aed12 = domains + "/dingzhi/mybbp/active/jdDraw";
      _0x22aced = "activityId=" + $.activityId + "&actorUuid=" + $.actorUuid + "&pin=" + encodeURIComponent($.Pin);
      break;
    default:
      console.log("错误" + _0x2a79cf);
  }
  const _0x2d0e61 = {
    url: _0x5aed12,
    method: _0x5333fe,
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
    data: _0x22aced,
    timeout: 20000
  };
  _0x5333fe === "GET" && (delete _0x2d0e61.body, delete _0x2d0e61.headers["Content-Type"]);
  const _0x3945ad = 5;
  let _0x486e1a = 0,
    _0x3bf16e = null,
    _0x8a8a65 = false;
  while (_0x486e1a < _0x3945ad) {
    _0x486e1a > 0 && (await $.wait(1000));
    const _0x34f09d = await common.request(_0x2d0e61);
    if (!_0x34f09d.success) {
      _0x3bf16e = _0x2a79cf + " 请求失败 ➜ " + _0x34f09d.error;
      _0x486e1a++;
      _0x34f09d.status && [403, 493].includes(_0x34f09d.status) && (_0x8a8a65 = true);
      continue;
    }
    if (["accessLog", "accessLogWithAD"].includes(_0x2a79cf)) {
      break;
    }
    if (!_0x34f09d.data && !["drawContent"].includes(_0x2a79cf)) {
      _0x3bf16e = _0x2a79cf + " 请求失败 ➜ 无响应数据";
      _0x486e1a++;
      continue;
    }
    const _0x447852 = common.getResponseCookie(_0x34f09d, activityCookie);
    let _0x474908 = "";
    switch (_0x2a79cf) {
      case "getMyCidPing":
        _0x474908 = common.getCookieValue(_0x447852, "LZ_AES_PIN");
        _0x474908 ? $.LZ_AES_PIN = _0x474908 : (console.log("获取 LZ_AES_PIN 失败！"), $.skipRun = true);
        break;
    }
    ["getMyCidPing", "getGoodsInfo", "startDraw"].includes(_0x2a79cf) && (activityCookie = _0x447852);
    _0x474908 = common.getCookieValue(activityCookie, "LZ_AES_PIN");
    !_0x474908 && $.LZ_AES_PIN && (activityCookie += "LZ_AES_PIN=" + $.LZ_AES_PIN + "; ");
    const _0x1f1bb1 = common.getCookieValue(activityCookie, "LZ_TOKEN_KEY");
    !_0x1f1bb1 && $.LZ_TOKEN_KEY && (activityCookie += "LZ_TOKEN_KEY=" + $.LZ_TOKEN_KEY + "; ");
    const _0x15093b = common.getCookieValue(activityCookie, "LZ_TOKEN_VALUE");
    !_0x15093b && $.LZ_TOKEN_VALUE && (activityCookie += "LZ_TOKEN_VALUE=" + $.LZ_TOKEN_VALUE + "; ");
    await handleResponse(_0x2a79cf, _0x34f09d.data);
    _0x8a8a65 = false;
    break;
  }
  _0x486e1a >= _0x3945ad && (console.log(_0x3bf16e), _0x8a8a65 && !hotbreak && ($.outFlag = true));
}
async function handleResponse(_0x314a76, _0x40dfd7) {
  try {
    switch (_0x314a76) {
      case "init":
        if (_0x40dfd7.result && _0x40dfd7.result === true) {
          $.shopId = _0x40dfd7.data?.["shopId"];
          $.venderId = _0x40dfd7.data?.["venderId"];
          $.startTime = _0x40dfd7.data?.["startTime"];
          $.endTime = _0x40dfd7.data?.["endTime"];
          $.activityType = _0x40dfd7.data?.["activityType"];
        } else {
          _0x40dfd7.errorMessage ? console.log("" + (_0x40dfd7.errorMessage || "")) : console.log("❓" + _0x314a76 + " " + JSON.stringify(_0x40dfd7));
        }
        break;
      case "getMyCidPing":
        if (_0x40dfd7.result && _0x40dfd7.result === true) {
          if (_0x40dfd7.data && typeof _0x40dfd7.data?.["secretPin"] != "undefined") {
            $.Pin = _0x40dfd7.data?.["secretPin"];
          }
          if (_0x40dfd7.data && typeof _0x40dfd7.data?.["nickname"] != "undefined") {
            $.nickname = _0x40dfd7.data?.["nickname"];
          }
        } else {
          _0x40dfd7.errorMessage ? console.log("" + (_0x40dfd7.errorMessage || "")) : console.log("❓" + _0x314a76 + " " + JSON.stringify(_0x40dfd7));
        }
        break;
      case "activityContent":
        if (_0x40dfd7.result && _0x40dfd7.result === true) {
          $.activityContent = _0x40dfd7.data;
          $.activityName = _0x40dfd7.data?.["activityName"] || "";
          $.endTime = _0x40dfd7.data?.["endTime"] || _0x40dfd7.data?.["activityVo"] && _0x40dfd7.data?.["activityVo"]?.["endTime"] || _0x40dfd7.data?.["activity"]?.["endTime"] || 0;
          $.hasEnd = _0x40dfd7.data.hasEnd || false;
          $.score = _0x40dfd7.data.score || 0;
          $.score2 = _0x40dfd7.data.score2 || 0;
          $.openCard = _0x40dfd7.data.openCard || false;
          $.guafenStatus = _0x40dfd7.data.guafenStatus || false;
          $.actorUuid = _0x40dfd7.data.actorUuid || 0;
        } else {
          _0x40dfd7.errorMessage ? console.log("" + (_0x40dfd7.errorMessage || "")) : console.log("❓" + _0x314a76 + " " + JSON.stringify(_0x40dfd7));
        }
        break;
      case "initOpenCard":
        if (_0x40dfd7.result && _0x40dfd7.result === true) {
          $.openList = _0x40dfd7.data.openInfo || [];
          $.showCardRecordList = _0x40dfd7.data.showCardRecordList || [];
          $.allOpenCard = _0x40dfd7.data.allOpenCard || _0x40dfd7.data.isOpenCardStatus || false;
          $.openCardBean = _0x40dfd7.data.openCardBean || 0;
          $.assistStatus = _0x40dfd7.data.assistStatus || 0;
          $.cardStatus = _0x40dfd7.data.cardStatus || 0;
          if ($.openCardBean) {
            console.log("> 开卡获得:" + $.openCardBean + "京豆🐶");
          }
          if ($.showCardRecordList && $.showCardRecordList.length > 0) {
            console.log("获得卡片: " + $.showCardRecordList.map(_0xe0be61 => _0xe0be61.cardName).join(", "));
          }
          $.assistStatus === 1 && console.log("助力成功 ✅");
          $.cardStatus === 1 ? console.log("接受赠送卡片成功 ✅") : console.log("接受赠送卡片失败");
        } else {
          _0x40dfd7.errorMessage ? console.log("" + (_0x40dfd7.errorMessage || "")) : console.log("❓" + _0x314a76 + " " + JSON.stringify(_0x40dfd7));
        }
        break;
      case "chooseType":
        if (_0x40dfd7.result && _0x40dfd7.result === true) {
          $.addSku = _0x40dfd7.data.addSku || false;
          $.toMainActive = _0x40dfd7.data.toMainActive || false;
          $.viewVideo = _0x40dfd7.data.viewVideo || [];
          $.shareNum = _0x40dfd7.data.shareNum || 0;
          console.log(tasklist[$.chooseType] + "任务已邀请[" + $.shareNum + "/5]个好友助力");
        } else {
          _0x40dfd7.errorMessage ? $.chooseTypeMsg = _0x40dfd7.errorMessage || "" : console.log("❓" + _0x314a76 + " " + JSON.stringify(_0x40dfd7));
        }
        break;
      case "tsService":
        if (_0x40dfd7.result && _0x40dfd7.result === true) {
          $.allList = _0x40dfd7.data.allList || [];
        } else {
          _0x40dfd7.errorMessage ? console.log("" + (_0x40dfd7.errorMessage || "")) : console.log("❓" + _0x314a76 + " " + JSON.stringify(_0x40dfd7));
        }
        break;
      case "getHasCard":
        if (_0x40dfd7.result && _0x40dfd7.result === true) {
          $.hasCardList = _0x40dfd7.data.hasCardList || [];
          $.drawNumJd = _0x40dfd7.data.drawNumJd || 0;
          $.drawNum = _0x40dfd7.data.drawNum || 0;
        } else {
          _0x40dfd7.errorMessage ? console.log("" + (_0x40dfd7.errorMessage || "")) : console.log("❓" + _0x314a76 + " " + JSON.stringify(_0x40dfd7));
        }
        break;
      case "synthesisCard":
        if (_0x40dfd7.result && _0x40dfd7.result === true) {
          console.log("满足合成，合成成功");
        } else {
          _0x40dfd7.errorMessage ? console.log("" + (_0x40dfd7.errorMessage || "")) : console.log("❓" + _0x314a76 + " " + JSON.stringify(_0x40dfd7));
        }
        break;
      case "startVisitTask":
        if (_0x40dfd7.result && _0x40dfd7.result === true) {
          $.taskUuid = _0x40dfd7.data.taskUuid;
        } else {
          _0x40dfd7.errorMessage ? console.log("" + (_0x40dfd7.errorMessage || "")) : console.log("❓" + _0x314a76 + " " + JSON.stringify(_0x40dfd7));
        }
        break;
      case "saveTask":
        if (_0x40dfd7.result && _0x40dfd7.result === true) {
          let _0x3b3913 = "完成" + $.taskname + "任务";
          _0x40dfd7?.["data"]?.["addBeanNum"] > 0 && (_0x3b3913 += ",获得" + (_0x40dfd7?.["data"]?.["addBeanNum"] || 0) + "京豆");
          _0x40dfd7?.["data"]?.["sendCardRecordList"] && _0x40dfd7?.["data"]?.["sendCardRecordList"]["length"] > 0 && (_0x3b3913 += ",获得卡片[" + (_0x40dfd7?.["data"]?.["sendCardRecordList"][0]["cardName"] || "") + "]");
          console.log(_0x3b3913);
        } else {
          _0x40dfd7.errorMessage ? console.log("" + (_0x40dfd7.errorMessage || "")) : console.log("❓" + _0x314a76 + " " + JSON.stringify(_0x40dfd7));
        }
        break;
      case "jdDraw":
        if (_0x40dfd7.result && _0x40dfd7.result === true) {
          _0x40dfd7.data.drawStatus ? console.log("抽奖获得: " + JSON.stringify(_0x40dfd7)) : console.log("抽奖获得: 空气");
        } else {
          _0x40dfd7.errorMessage ? console.log("" + (_0x40dfd7.errorMessage || "")) : console.log("❓" + _0x314a76 + " " + JSON.stringify(_0x40dfd7));
        }
        break;
      case "startDraw":
        if (_0x40dfd7.result && _0x40dfd7.result === true) {
          if (_0x40dfd7.data?.["wdsrvo"]?.["drawOk"]) {
            const _0x4a72d7 = _0x40dfd7.data?.["wdsrvo"]["drawInfo"];
            if (_0x4a72d7) {
              switch (_0x4a72d7.type) {
                case 6:
                  $.prize.push("🎉 " + _0x4a72d7.name + " 🐶");
                  break;
                case 7:
                  const _0x5b4eaa = domains + "/dingzhi/mybbp/active/saveAddress",
                    _0x2838f9 = _0x4a72d7.addressId,
                    _0x459394 = _0x4a72d7.drawName;
                  console.log(_0x4a72d7);
                  $.prize.push("🎉 恭喜获得实物,奖品名称：" + _0x459394);
                  const _0x1ceb3f = {
                      baseUrl: domains,
                      saveAddressurl: _0x5b4eaa,
                      uuid: $.actorUuid,
                      cookie: activityCookie,
                      ua: $.UA,
                      activityId: $.activityId,
                      activityType: 99,
                      venderId: $.venderId,
                      secretPin: $.Pin,
                      prizeName: _0x459394,
                      itemsId: _0x2838f9,
                      activityUrl: $.activityUrl
                    },
                    _0x550042 = await lzdz1_savePrize(_0x1ceb3f);
                  _0x550042 && (await notify.sendNotify($.name + "中奖通知", "【京东账号" + $.index + "】" + $.nickName + "\n抽中实物 " + _0x459394 + "，已成功自动登记收货地址\n\n" + $.activityUrl));
                  break;
                case 8:
                  $.prize.push("🗑️ 专享价");
                  break;
                case 9:
                  $.prize.push("🗑️ " + _0x4a72d7.name + " 🎟️");
                  break;
                case 13:
                case 14:
                case 15:
                  $.prize.push("🎉 恭喜获得" + _0x4a72d7.name + " 🎁");
                  await notify.sendNotify($.name + "中奖通知", "【京东账号" + $.index + "】" + $.nickName + "\n抽中 " + _0x4a72d7.name + "\n\n" + $.activityUrl);
                  break;
                case 16:
                  $.prize.push("🎉 " + _0x4a72d7.priceInfo + " 🧧");
                  break;
                default:
                  _0x4a72d7.name.includes("券") ? $.prize.push("🗑️ 优惠券") : $.prize.push("获得：" + _0x4a72d7.name);
                  break;
              }
            }
          } else {
            $.prize.push("💨 空气");
          }
        } else {
          _0x40dfd7.errorMessage ? ($.drawError = _0x40dfd7.errorMessage, ["未开始", "结束", "不存在", "不在"].some(_0x25470d => $.drawError.includes(_0x25470d)) && ($.activityEnd = true), $.prize.push($.drawError)) : console.log("❓" + _0x314a76 + " " + JSON.stringify(_0x40dfd7));
        }
        break;
      case "accessLogWithAD":
      case "drawContent":
        break;
      default:
        console.log(_0x314a76 + "-> " + _0x40dfd7);
    }
    typeof _0x40dfd7 == "object" && _0x40dfd7.errorMessage && _0x40dfd7.errorMessage.indexOf("火爆") > -1 && ($.hotFlag = true);
  } catch (_0xb0dab0) {
    console.log(_0xb0dab0);
  }
}
async function getCk() {
  $.skipRun = true;
  const _0x46a6c3 = {
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
    _0x3b9a40 = 3;
  let _0x3942fd = 0,
    _0x3ea863 = null,
    _0x1fc60f = false;
  while (_0x3942fd < _0x3b9a40) {
    _0x3942fd > 0 && (await $.wait(1000));
    const _0x1b7550 = await common.request(_0x46a6c3);
    if (!_0x1b7550.success) {
      _0x3ea863 = "getCk ➜ " + _0x1b7550.error;
      _0x3942fd++;
      _0x1b7550.status && [403, 493].includes(_0x1b7550.status) && (_0x1fc60f = true);
      continue;
    }
    if (!_0x1b7550.data) {
      _0x3ea863 = "getCk ➜ 无响应数据";
      _0x3942fd++;
      continue;
    }
    activityCookie = common.getResponseCookie(_0x1b7550);
    let _0x27bf3b = "",
      _0x59f89d = "";
    _0x27bf3b = common.getCookieValue(activityCookie, "LZ_TOKEN_KEY");
    _0x59f89d = common.getCookieValue(activityCookie, "LZ_TOKEN_VALUE");
    _0x27bf3b && ($.LZ_TOKEN_KEY = _0x27bf3b);
    _0x59f89d && ($.LZ_TOKEN_VALUE = _0x59f89d);
    $.skipRun = false;
    break;
  }
  _0x3942fd >= _0x3b9a40 && (console.log(_0x3ea863), _0x1fc60f && !hotbreak && ($.outFlag = true));
}
async function getAuthorCodeList(_0xd3661) {
  const _0x4c3a1e = await common.request({
      url: _0xd3661,
      method: "GET",
      headers: {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88"
      },
      proxy: null,
      debug: false,
      timeout: 30000
    }),
    _0x3a1a53 = _0x4c3a1e.data;
  return _0x3a1a53;
}
function random(_0x37bca8, _0x54aec1) {
  return Math.floor(Math.random() * (_0x54aec1 - _0x37bca8)) + _0x37bca8;
}