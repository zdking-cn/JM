//Tue Aug 13 2024 06:58:03 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const jdCookie = require("./jdCookie"),
  notify = require("./utils/Rebels_sendJDNotify"),
  common = require("./utils/Rebels_jdCommon"),
  {
    H5st,
    jsTk
  } = require("./utils/Rebels_H");
let turnlinkId = "CDv-TaCmVcD0sxAI_HE2RQ",
  superlinkId = "aE-1vg6_no2csxgXFuv3Kg",
  taskThreads = process.env.jd_wyw__threads || "1";
const runInterval = process.env.jd_wyw__interval || "2000",
  isNotify = (process.env.jd_wyw_notify || process.env.jd_wyw_Notify) === "true",
  pinFilter = (process.env.jd_wyw_pinFilter || "").split("@");
let turnNum = process.env.jd_wyw_turnnum || "50",
  errMsgPin = [],
  shareCodes = [],
  needRemoveCodes = [],
  cookiesArr = Object.keys(jdCookie).map(_0x32b59c => jdCookie[_0x32b59c]).filter(_0x2b1712 => _0x2b1712);
!cookiesArr[0] && ($.msg($.name, "【提示】请先获取Cookie"), process.exit(1));
!(async () => {
  notify.config({
    title: $.name
  });
  await Main();
  isNotify && notify.getMessage() && (await notify.push());
})().catch(_0x38bab2 => $.logErr(_0x38bab2)).finally(() => $.done());
async function Main() {
  try {
    try {
      const _0x4bcc08 = parseInt(taskThreads);
      _0x4bcc08 > 0 && _0x4bcc08 !== 1 && (taskThreads = _0x4bcc08);
    } catch {
      taskThreads = 1;
    }
    taskThreads = Math.min(taskThreads, 1);
    $.waitTime = null;
    if (runInterval) {
      try {
        const _0x546a06 = parseInt(runInterval);
        _0x546a06 >= 0 && ($.waitTime = _0x546a06);
      } catch {
        console.log("⚠ 自定义运行间隔时长设置错误");
      }
    }
    console.log("==========" + $.name + "变量开启状态==========");
    console.log("活动入口: APP-我的-更多工具-玩一玩");
    console.log("代理开关: [" + common.getProxyStatus() + "]");
    console.log("通知推送: [" + (isNotify ? "开启" : "关闭") + "]");
    console.log("账号过滤: [" + pinFilter.join(", ") + "]");
    console.log("==========" + $.name + "变量状态结束==========");
    console.log("");
    $.needRemoveCookieIndex = [];
    await common.concTask(taskThreads, cookiesArr, taskFnc);
    $.hasPrintActInfo = false;
    $.runEnd = false;
    $.needRemoveCookieIndex.length > 0 && (cookiesArr = cookiesArr.filter((_0x2449fb, _0x39b18c) => !$.needRemoveCookieIndex.includes(_0x39b18c + 1)), $.needRemoveCookieIndex = []);
    const _0x491f7a = notify.getMessage();
    _0x491f7a && console.log("\n📣 运行结果\n" + _0x491f7a.replace(/：/g, " ➜ "));
    if (errMsgPin.length > 0) {
      let _0xc28e65 = "\n以下账号可能是火爆，请加入黑名单\nexport jd_wyw_pinFilter=\"" + errMsgPin.join("&") + "\"";
      console.log(_0xc28e65);
    }
  } catch (_0x3bf545) {
    console.log("❌ 脚本运行遇到了错误\n" + _0x3bf545);
  }
}
async function taskFnc(_0x5dea30, _0x3d425a) {
  if ($.runEnd) {
    return {
      runEnd: true
    };
  }
  const _0x193d45 = decodeURIComponent(common.getCookieValue(_0x5dea30, "pt_pin"));
  function _0x4fe1c9(_0xacfee1, _0x489401) {
    if (_0xacfee1.length <= 4) {
      return _0xacfee1;
    } else {
      const _0x55455a = _0xacfee1.slice(0, 2),
        _0x2d0b7d = _0xacfee1.slice(-2),
        _0x45659e = Math.max(_0x489401 - _0x55455a.length - _0x2d0b7d.length, 0),
        _0x5cdffe = "*".repeat(_0x45659e);
      return _0x55455a + _0x5cdffe + _0x2d0b7d;
    }
  }
  const _0x4ee995 = decodeURIComponent(_0x193d45),
    _0x21b4f7 = _0x4fe1c9(_0x4ee995, 6),
    _0x3fa960 = "【账号" + _0x3d425a + "】" + _0x21b4f7 + "：",
    _0x2e3d0d = notify.create(_0x3d425a, _0x193d45);
  if (pinFilter.length > 0 && (pinFilter.includes(_0x193d45) || pinFilter.includes(encodeURIComponent(_0x193d45)))) {
    _0x2e3d0d.fix("已设置跳过运行当前账号");
    console.log(_0x2e3d0d.getInlineContent());
    $.needRemoveCookieIndex.push(_0x3d425a);
    return;
  }
  const _0x3b4792 = await common.getLoginStatus(_0x5dea30);
  if (!_0x3b4792 && typeof _0x3b4792 === "boolean") {
    console.log(_0x3fa960 + "账号无效");
    _0x2e3d0d.fix("账号无效");
    $.needRemoveCookieIndex.push(_0x3d425a);
    return;
  }
  const _0x38d224 = common.genUA(_0x193d45),
    _0x474cdf = common.genUuid("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
  let _0xa5f8dd = false,
    _0x2f64cd = false,
    _0x168238 = false,
    _0x334aaf = false,
    _0x40da5c,
    _0x2c8870,
    _0x3569dc,
    _0x2b833d,
    _0x59ef2c,
    _0x35ce35,
    _0x20743a,
    _0x1b981c,
    _0x4a62bd,
    _0x254354,
    _0x5af0fd;
  const {
    jsToken: _0x4b9f70
  } = await jsTk(_0x38d224, "https://pro.m.jd.com/mall/active/3fcyrvLZALNPWCEDRvaZJVrzek8v/index.html");
  await _0x4bcad7("wanyiwan_home");
  await $.wait(parseInt($.waitTime * 1 + 1000, 10));
  if (_0x40da5c && _0x40da5c.isLogin) {
    const _0x3100b0 = _0x40da5c.signBoard.status || 0,
      _0x1e05f2 = _0x40da5c.signBoard.signedDays || 0,
      _0x27b2f0 = _0x40da5c.score || 0;
    console.log(_0x3fa960 + "当前有" + _0x27b2f0 + "奖票");
    _0x2e3d0d.insert("有" + _0x27b2f0 + "奖票");
    _0x40da5c.popWindows && _0x40da5c.popWindows.length > 0 && console.log(_0x3fa960 + "首次进入活动，赠送" + _0x40da5c.popWindows[0].getScore + "奖票");
    _0x3100b0 === 0 && (console.log(_0x3fa960 + "今日还未打卡，已打卡" + _0x1e05f2 + "天，去打卡"), await _0x4bcad7("wanyiwan_sign"), await $.wait(parseInt($.waitTime * 1 + 1000, 10)));
    if (_0x168238) {
      return;
    }
    await _0x4bcad7("wanyiwan_task_list");
    if (_0x2b833d) {
      let _0x3a1b08 = false;
      for (let _0x5134b8 of _0x2b833d.taskList || []) {
        let _0x40edbb = _0x5134b8.taskDetail;
        _0x2c8870 = _0x5134b8;
        const _0x1386bd = _0x5134b8.status || 0,
          _0x8397a6 = _0x5134b8.taskType || 0,
          _0x154548 = _0x5134b8.finishTimes || 0,
          _0xa1d956 = _0x5134b8.maxTimes || 0;
        if (_0x1386bd === 3) {
          continue;
        }
        switch (_0x1386bd) {
          case 1:
            {
              switch (_0x8397a6) {
                case 1:
                  _0x40edbb = _0x40edbb.filter(_0x9692d6 => _0x9692d6.status === 1);
                  for (let _0x54c9c5 = _0x154548; _0x54c9c5 < _0xa1d956; _0x54c9c5++) {
                    _0x3a1b08 = true;
                    _0x4a62bd = 1;
                    _0x3569dc = _0x40edbb.pop();
                    await $.wait(parseInt($.waitTime * 1 + 1000, 10));
                    await _0x4bcad7("wanyiwan_do_task");
                    if (_0x168238) {
                      break;
                    }
                    await $.wait(parseInt(_0x5134b8.limitTime * 1000 + 1500, 10));
                    _0x4a62bd = 0;
                    await _0x4bcad7("wanyiwan_do_task");
                    await $.wait(parseInt($.waitTime * 1 + 1000, 10));
                    await _0x4bcad7("wanyiwan_task_receive_award");
                    await $.wait(parseInt($.waitTime * 1 + 1000, 10));
                  }
                  break;
                case 3:
                  break;
                case 4:
                  for (let _0x129240 = _0x154548; _0x129240 < _0xa1d956; _0x129240++) {
                    _0x3a1b08 = true;
                    _0x4a62bd = 0;
                    await $.wait(parseInt($.waitTime * 1 + 1000, 10));
                    await _0x4bcad7("wanyiwan_do_task");
                    if (_0x168238) {
                      break;
                    }
                    await $.wait(parseInt($.waitTime * 1 + 1500, 10));
                    await _0x4bcad7("wanyiwan_task_receive_award");
                    await $.wait(parseInt($.waitTime * 1 + 1500, 10));
                  }
                  break;
                case 5:
                  for (let _0x27f292 = _0x154548; _0x27f292 < _0xa1d956; _0x27f292++) {
                    _0x3a1b08 = true;
                    let _0x2ccb03 = _0x40edbb[0].itemId;
                    if (!shareCodes.includes(_0x2ccb03)) {
                      shareCodes.push(_0x2ccb03);
                      if (shareCodes.length >= 2) {
                        for (let _0x2845c1 of shareCodes) {
                          _0x5af0fd = _0x2845c1;
                          await $.wait(parseInt($.waitTime * 1 + 1000, 10));
                          await _0x4bcad7("wanyiwan_assist");
                          if (_0xa5f8dd) {
                            break;
                          }
                          await $.wait(parseInt($.waitTime * 1 + 2500, 10));
                        }
                      }
                    }
                  }
                  break;
              }
              break;
            }
          case 2:
            {
              for (let _0x542c16 = 0; _0x542c16 < _0x154548; _0x542c16++) {
                await _0x4bcad7("wanyiwan_task_receive_award");
                await $.wait(parseInt($.waitTime * 1 + 1000, 10));
              }
              break;
            }
          default:
            console.log(_0x3fa960 + "任务 \"" + _0x5134b8.title + "\" 状态未知：" + _0x5134b8.taskStatus);
            break;
        }
        if (needRemoveCodes.length > 0) {
          for (let _0x3331bc of needRemoveCodes) {
            shareCodes.includes(_0x3331bc) && shareCodes.splice(shareCodes.indexOf(_0x3331bc), 1);
          }
        }
        if (_0x168238) {
          break;
        }
        await $.wait(parseInt($.waitTime * 1 + 1000, 10));
      }
      if (_0x3a1b08) {
        if (_0x168238) {
          return;
        }
        await _0x4bcad7("wanyiwan_task_list");
        await $.wait(parseInt($.waitTime * 1 + 1000, 10));
        for (let _0x3b05c5 of _0x2b833d.taskList || []) {
          _0x2c8870 = _0x3b05c5;
          const _0x2b79e9 = _0x3b05c5.status || 0;
          if (_0x2b79e9 === 2) {
            for (let _0x360a89 = 0; _0x360a89 < finishTimes; _0x360a89++) {
              await _0x4bcad7("wanyiwan_task_receive_award");
              await $.wait(parseInt($.waitTime * 1 + 500, 10));
            }
          }
        }
      }
    }
    if (_0x168238) {
      return;
    }
  }
  if ($.runEnd) {
    return {
      runEnd: true
    };
  }
  await $.wait(parseInt($.waitTime * 1 + 2000, 10));
  async function _0x25edd1(_0xa47bfa, _0x1c1ded) {
    try {
      let _0x149cb0 = "";
      switch (_0xa47bfa) {
        case "wanyiwan_home":
          _0x1c1ded.code == 0 && _0x1c1ded.data ? _0x1c1ded.data.bizCode === 0 ? _0x40da5c = _0x1c1ded.data.result : (_0x149cb0 = common.getErrorMsg(_0x1c1ded.data), console.log(_0x3fa960 + "进入首页失败：" + _0x149cb0), ["火爆"].some(_0x80aab => _0x149cb0.includes(_0x80aab)) && (errMsgPin.push(_0x193d45), _0x168238 = true)) : (_0x149cb0 = common.getErrorMsg(_0x1c1ded), console.log(_0x3fa960 + "进入首页失败：" + _0x149cb0));
          break;
        case "wanyiwan_sign":
          _0x1c1ded.code == 0 && _0x1c1ded.data ? _0x1c1ded.data.bizCode === 0 ? console.log(_0x3fa960 + "打卡成功，已打卡" + _0x1c1ded.data.result.signedDays + "天，获得" + _0x1c1ded.data.result.getScore + "奖票") : (_0x149cb0 = common.getErrorMsg(_0x1c1ded.data), console.log(_0x3fa960 + "打卡失败：" + _0x149cb0), ["失败", "糟糕", "火爆", "无法打卡"].some(_0x330e98 => _0x149cb0.includes(_0x330e98)) && (errMsgPin.push(_0x193d45), _0x168238 = true)) : (_0x149cb0 = common.getErrorMsg(_0x1c1ded), console.log(_0x3fa960 + "打卡失败：" + _0x149cb0));
          break;
        case "wanyiwan_task_list":
          _0x1c1ded.code == 0 && _0x1c1ded.data ? _0x1c1ded.data.bizCode === 0 ? _0x2b833d = _0x1c1ded.data.result : (_0x149cb0 = common.getErrorMsg(_0x1c1ded.data), console.log(_0x3fa960 + "任务列表失败：" + _0x149cb0)) : (_0x149cb0 = common.getErrorMsg(_0x1c1ded), console.log(_0x3fa960 + "任务列表失败：" + _0x149cb0));
          break;
        case "wanyiwan_point_record":
        case "wanyiwan_point_record":
          if (_0x1c1ded.code == 0 && _0x1c1ded.data) {
            if (!(_0x1c1ded.data.bizCode === 0)) {
              _0x149cb0 = common.getErrorMsg(_0x1c1ded.data);
              console.log(_0x3fa960 + "任务列表失败：" + _0x149cb0);
            }
          } else {
            _0x149cb0 = common.getErrorMsg(_0x1c1ded);
            console.log(_0x3fa960 + "任务列表失败：" + _0x149cb0);
          }
          break;
        case "wanyiwan_exchange_page":
          _0x1c1ded.code == 0 && _0x1c1ded.data ? _0x1c1ded.data.bizCode === 0 ? _0x59ef2c = _0x1c1ded.data.result : (_0x149cb0 = common.getErrorMsg(_0x1c1ded.data), console.log(_0x3fa960 + "兑换列表失败：" + _0x149cb0)) : (_0x149cb0 = common.getErrorMsg(_0x1c1ded), console.log(_0x3fa960 + "兑换列表失败：" + _0x149cb0));
          break;
        case "wanyiwan_do_task":
          _0x254354 = _0x4a62bd === 0 ? "完成" : "开始";
          if (_0x1c1ded.code == 0 && _0x1c1ded.data) {
            if (!(_0x1c1ded.data.bizCode === 0)) {
              _0x149cb0 = common.getErrorMsg(_0x1c1ded.data);
              console.log(_0x3fa960 + "[" + _0x2c8870.title + "]任务" + _0x254354 + "失败：" + _0x149cb0);
              ["用户较多", "火爆", "暂时无法"].some(_0x32801f => _0x149cb0.includes(_0x32801f)) && (_0x168238 = true);
            }
          } else {
            _0x149cb0 = common.getErrorMsg(_0x1c1ded);
            console.log(_0x3fa960 + "[" + _0x2c8870.title + "]任务" + _0x254354 + "失败：" + _0x149cb0);
            ["用户较多", "火爆", "暂时无法"].some(_0xbcd292 => _0x149cb0.includes(_0xbcd292)) && (_0x168238 = true);
          }
          break;
        case "wanyiwan_task_receive_award":
          _0x1c1ded.code == 0 && _0x1c1ded.data ? _0x1c1ded.data.bizCode === 0 ? console.log(_0x3fa960 + "领取[" + _0x2c8870.title + "]任务奖励" + (_0x1c1ded.data.result.rewardCount || 0) + "奖票") : (_0x149cb0 = common.getErrorMsg(_0x1c1ded.data), console.log(_0x3fa960 + "领取[" + _0x2c8870.title + "]任务奖励失败：" + _0x149cb0)) : (_0x149cb0 = common.getErrorMsg(_0x1c1ded), console.log(_0x3fa960 + "领取[" + _0x2c8870.title + "]任务奖励失败：" + _0x149cb0));
          break;
        case "wanyiwan_assist":
          if (_0x1c1ded.code == 0) {
            const _0x33b745 = _0x1c1ded.data.bizCode;
            switch (_0x33b745) {
              case 0:
                console.log(_0x3fa960 + "助力[" + _0x5af0fd.substring(0, 10) + "]成功 ✅ ");
                _0xa5f8dd = true;
                break;
              case -102:
                _0xa5f8dd = true;
                break;
              case -107:
                _0xa5f8dd = true;
                break;
              case -8002:
                break;
              case -8003:
                _0xa5f8dd = true;
                break;
              case -8005:
                console.log(_0x3fa960 + "助力[" + _0x5af0fd.substring(0, 10) + "]失败：助力已满");
                needRemoveCodes.push(_0x5af0fd);
                break;
              case -8006:
                _0xa5f8dd = true;
                break;
              case -8008:
                _0xa5f8dd = true;
                break;
              default:
                console.log(_0x3fa960 + "助力[" + _0x5af0fd.substring(0, 10) + "]状态未知：" + _0x1c1ded.data.bizMsg + "[" + _0x33b745 + "]");
                break;
            }
          } else {
            _0x149cb0 = common.getErrorMsg(_0x1c1ded);
            console.log(_0x3fa960 + "助力失败：" + _0x149cb0);
            _0xa5f8dd = true;
          }
          break;
        case "turnHappyHome":
          _0x1c1ded.code == 0 ? _0x1c1ded.success ? _0x35ce35 = _0x1c1ded.data : (_0x149cb0 = common.getErrorMsg(_0x1c1ded.data), console.log(_0x3fa960 + "翻翻乐首页失败：" + _0x149cb0)) : (_0x149cb0 = common.getErrorMsg(_0x1c1ded), console.log(_0x3fa960 + "翻翻乐首页失败：" + _0x149cb0));
          break;
        case "turnHappyDouble":
          if (_0x1c1ded.code == 0) {
            if (_0x1c1ded.success) {
              const _0x453561 = _0x1c1ded.data.leftTime,
                _0x40d5bc = Math.floor(_0x453561 / 1000),
                _0x5f3934 = _0x1c1ded.data.rewardState,
                _0x150775 = _0x1c1ded.data.changeTimes,
                _0x5bbdd3 = _0x1c1ded.data.rewardValue,
                _0x53063e = Math.floor(_0x40d5bc / 3600),
                _0x191cb9 = Math.floor(_0x40d5bc % 3600 / 60),
                _0x1bab44 = _0x40d5bc % 60,
                _0x308184 = _0x53063e.toString().padStart(2, "0") + ":" + _0x191cb9.toString().padStart(2, "0") + ":" + _0x1bab44.toString().padStart(2, "0");
              switch (_0x5f3934) {
                case 0:
                  console.log(_0x3fa960 + "现在可以参加翻倍玩法啦~");
                  break;
                case 1:
                  console.log(_0x3fa960 + "翻倍第" + _0x150775 + "次成功，累计" + _0x5bbdd3 + "奖票");
                  break;
                case 2:
                  console.log(_0x3fa960 + "翻倍奖励已领取，赢得" + _0x5bbdd3 + "奖票，" + _0x308184 + "后可再次参与");
                  break;
                case 3:
                  console.log(_0x3fa960 + "翻倍第" + _0x150775 + "次失败，损失" + turnNum + "奖票，" + _0x308184 + "后可再次参与");
                  _0x2e3d0d.insert("翻倍损失" + turnNum + "奖票");
                  _0x2f64cd = true;
                  break;
                default:
                  console.log(_0x3fa960 + "状态未知：" + _0x5f3934);
                  break;
              }
            } else {
              _0x149cb0 = common.getErrorMsg(_0x1c1ded.data);
              console.log(_0x3fa960 + "翻翻乐首页失败：" + _0x149cb0);
            }
          } else {
            _0x149cb0 = common.getErrorMsg(_0x1c1ded);
            console.log(_0x3fa960 + "翻翻乐首页失败：" + _0x149cb0);
          }
          break;
        case "turnHappyReceive":
          _0x1c1ded.code == 0 ? _0x1c1ded.success ? (console.log(_0x3fa960 + "见好就收，结束翻倍，赢得" + _0x1c1ded.data.rewardValue + "奖票"), _0x2e3d0d.insert("翻倍赢得" + _0x1c1ded.data.rewardValue + "奖票")) : (_0x149cb0 = common.getErrorMsg(_0x1c1ded.data), console.log(_0x3fa960 + "翻倍领取失败：" + _0x149cb0)) : (_0x149cb0 = common.getErrorMsg(_0x1c1ded), console.log(_0x3fa960 + "翻倍领取失败：" + _0x149cb0));
          break;
        case "turnHappyDetailList":
          _0x1c1ded.code == 0 ? _0x1c1ded.success && _0x1c1ded.data ? _0x1b981c = _0x1c1ded.data.result : (_0x149cb0 = common.getErrorMsg(_0x1c1ded.data), console.log(_0x3fa960 + "翻倍领取失败：" + _0x149cb0)) : (_0x149cb0 = common.getErrorMsg(_0x1c1ded), console.log(_0x3fa960 + "翻倍领取失败：" + _0x149cb0));
          break;
        case "superRedBagHome":
          _0x1c1ded.code == 0 ? _0x1c1ded.success ? _0x20743a = _0x1c1ded.data : (_0x149cb0 = common.getErrorMsg(_0x1c1ded.data), console.log(_0x3fa960 + "摇一摇首页失败：" + _0x149cb0)) : (_0x149cb0 = common.getErrorMsg(_0x1c1ded), console.log(_0x3fa960 + "摇一摇首页失败：" + _0x149cb0));
          break;
        case "superRedBagDraw":
          if (_0x1c1ded.code == 0) {
            if (_0x1c1ded.success) {
              if (_0x1c1ded.data && _0x1c1ded.data.shakeLeftTime > 0) {
                if (_0x1c1ded.data && _0x1c1ded.data.prizeDrawVo) {
                  const _0x6f606b = _0x1c1ded.data.prizeDrawVo.prizeType;
                  switch (_0x6f606b) {
                    case 0:
                      console.log(_0x3fa960 + "空气");
                      break;
                    case 1:
                      console.log(_0x3fa960 + "获得" + _0x1c1ded.data.prizeDrawVo.prizeConfigName + "(满" + _0x1c1ded.data.prizeDrawVo.useLimit + "减" + _0x1c1ded.data.prizeDrawVo.amount + ")");
                      break;
                    case 2:
                      console.log(_0x3fa960 + "收入" + _0x1c1ded.data.prizeDrawVo.amount + "红包");
                      break;
                    case 4:
                      console.log(_0x3fa960 + "收入" + _0x1c1ded.data.prizeDrawVo.amount + "现金");
                      break;
                    case 24:
                      console.log(_0x3fa960 + "收入" + _0x1c1ded.data.prizeDrawVo.amount + _0x1c1ded.data.prizeDrawVo.prizeConfigName);
                      break;
                    default:
                      console.log(_0x3fa960 + "未知奖品：" + _0x1c1ded.data.prizeDrawVo.prizeConfigName + "(" + _0x6f606b + ")");
                      break;
                  }
                } else {
                  console.log(_0x3fa960 + "空气");
                }
              } else {
                _0x334aaf = true;
              }
            } else {
              _0x149cb0 = common.getErrorMsg(_0x1c1ded.data);
              console.log("摇一摇失败：" + _0x149cb0);
            }
          } else {
            _0x149cb0 = common.getErrorMsg(_0x1c1ded);
            console.log("摇一摇失败：" + _0x149cb0);
          }
          break;
        case "worldCupGuessHome":
          _0x1c1ded.code == 0 ? _0x1c1ded.success ? _0x1c1ded.data.resultPopInfo && _0x1c1ded.data.resultPopInfo.linkPrizeNum && console.log(_0x3fa960 + "竞猜成功，挣了" + _0x1c1ded.data.resultPopInfo.winTotal + "奖票") : (_0x149cb0 = common.getErrorMsg(_0x1c1ded.data), console.log(_0x3fa960 + "竞猜失败：" + _0x149cb0)) : (_0x149cb0 = common.getErrorMsg(_0x1c1ded), console.log(_0x3fa960 + "竞猜失败：" + _0x149cb0));
          break;
      }
    } catch (_0x109374) {
      console.log("❌ 未能正确处理 " + _0xa47bfa + " 请求响应 " + (_0x109374.message || _0x109374));
    }
  }
  async function _0x4bcad7(_0x458f10) {
    if ($.runEnd) {
      return;
    }
    let _0x1bba74 = "",
      _0x5bc838 = null,
      _0x3e5172 = null,
      _0x2ccae5 = "POST",
      _0xf61c08 = {},
      _0x491b75 = {};
    switch (_0x458f10) {
      case "wanyiwan_home":
        _0x491b75 = {
          appId: "c81ad",
          functionId: _0x458f10,
          appid: "signed_wh5",
          clientVersion: common.getLatestAppVersion(),
          client: "apple",
          body: {
            outsite: 0,
            firstCall: 1,
            version: 1,
            lbsSwitch: false
          },
          version: "4.7",
          ua: _0x38d224,
          t: true,
          bu1: "lite_0.1.5",
          tokenCache: false
        };
        _0xf61c08 = await H5st.getH5st(_0x491b75);
        _0x1bba74 = "https://api.m.jd.com/client.action";
        _0x5bc838 = _0xf61c08.paramsData;
        break;
      case "wanyiwan_sign":
        _0x491b75 = {
          appId: "d12dd",
          functionId: _0x458f10,
          appid: "signed_wh5",
          clientVersion: common.getLatestAppVersion(),
          client: "apple",
          body: {
            version: 1
          },
          version: "4.7",
          ua: _0x38d224,
          t: true,
          bu1: "lite_0.1.5",
          tokenCache: false
        };
        _0xf61c08 = await H5st.getH5st(_0x491b75);
        _0x1bba74 = "https://api.m.jd.com/client.action";
        _0x5bc838 = _0xf61c08.paramsData;
        break;
      case "wanyiwan_task_list":
        _0x1bba74 = "https://api.m.jd.com/client.action";
        _0x5bc838 = {
          functionId: _0x458f10,
          body: JSON.stringify({
            version: 1,
            lbsSwitch: false
          }),
          appid: "signed_wh5"
        };
        break;
      case "wanyiwan_point_record":
      case "wanyiwan_award_record":
        _0x1bba74 = "https://api.m.jd.com/client.action";
        _0x5bc838 = {
          functionId: _0x458f10,
          body: JSON.stringify({
            pageNum: 1,
            version: 1
          }),
          appid: "signed_wh5"
        };
        break;
      case "wanyiwan_exchange_page":
        _0x1bba74 = "https://api.m.jd.com/client.action";
        _0x5bc838 = {
          functionId: _0x458f10,
          body: JSON.stringify({
            version: 1
          }),
          appid: "signed_wh5",
          t: Date.now(),
          clientVersion: common.getLatestAppVersion(),
          client: "apple"
        };
        break;
      case "wanyiwan_do_task":
        _0x491b75 = {
          appId: "89db2",
          functionId: _0x458f10,
          appid: "signed_wh5",
          clientVersion: common.getLatestAppVersion(),
          client: "apple",
          body: {
            itemId: _0x3569dc?.["itemId"] || "",
            taskType: _0x2c8870.taskType,
            assignmentId: _0x2c8870.encryptAssignmentId,
            actionType: _0x4a62bd ?? "",
            version: 1
          },
          version: "4.7",
          ua: _0x38d224,
          t: true,
          bu1: "lite_0.1.5",
          tokenCache: false
        };
        _0x2c8870.taskType !== 1 && (delete _0x491b75.body.itemId, delete _0x491b75.body.actionType);
        _0xf61c08 = await H5st.getH5st(_0x491b75);
        _0x1bba74 = "https://api.m.jd.com/client.action";
        _0x5bc838 = _0xf61c08.paramsData;
        break;
      case "wanyiwan_task_receive_award":
        _0x1bba74 = "https://api.m.jd.com/client.action";
        _0x5bc838 = {
          functionId: _0x458f10,
          appid: "signed_wh5",
          body: JSON.stringify({
            taskType: 1,
            assignmentId: _0x2c8870.encryptAssignmentId,
            version: 1
          }),
          client: "apple",
          clientVersion: common.getLatestAppVersion(),
          t: Date.now(),
          h5st: null
        };
        break;
      case "wanyiwan_assist":
        _0x491b75 = {
          appId: "ba505",
          functionId: _0x458f10,
          appid: "signed_wh5",
          clientVersion: common.getLatestAppVersion(),
          client: "apple",
          body: {
            inviteCode: _0x5af0fd,
            version: 1
          },
          version: "4.7",
          ua: _0x38d224,
          t: true,
          bu1: "lite_0.1.5",
          tokenCache: false
        };
        _0xf61c08 = await H5st.getH5st(_0x491b75);
        _0x1bba74 = "https://api.m.jd.com/client.action";
        _0x5bc838 = _0xf61c08.paramsData;
        break;
      case "turnHappyHome":
        _0x491b75 = {
          appId: "ba505",
          functionId: _0x458f10,
          appid: "activities_platform",
          clientVersion: common.getLatestAppVersion(),
          client: "apple",
          body: {
            linkId: turnlinkId
          },
          version: "4.7",
          ua: _0x38d224,
          t: true,
          bu1: "lite_0.1.5",
          tokenCache: false
        };
        _0xf61c08 = await H5st.getH5st(_0x491b75);
        _0x1bba74 = "https://api.m.jd.com/api";
        _0x5bc838 = _0xf61c08.paramsData;
        break;
      case "turnHappyDouble":
        _0x491b75 = {
          appId: "614f1",
          functionId: _0x458f10,
          appid: "activities_platform",
          clientVersion: common.getLatestAppVersion(),
          client: "apple",
          body: {
            linkId: turnlinkId,
            turnNum: turnNum
          },
          version: "4.7",
          ua: _0x38d224,
          t: true,
          bu1: "lite_0.1.5",
          tokenCache: false
        };
        _0xf61c08 = await H5st.getH5st(_0x491b75);
        _0x1bba74 = "https://api.m.jd.com/api";
        _0x5bc838 = _0xf61c08.paramsData;
        break;
      case "turnHappyReceive":
        _0x491b75 = {
          appId: "25fac",
          functionId: _0x458f10,
          appid: "activities_platform",
          clientVersion: common.getLatestAppVersion(),
          client: "apple",
          body: {
            linkId: turnlinkId
          },
          version: "4.7",
          ua: _0x38d224,
          t: true,
          bu1: "lite_0.1.5",
          tokenCache: false
        };
        _0xf61c08 = await H5st.getH5st(_0x491b75);
        _0x1bba74 = "https://api.m.jd.com/api";
        _0x5bc838 = _0xf61c08.paramsData;
        break;
      case "turnHappyDetailList":
        _0x1bba74 = "https://api.m.jd.com/api";
        _0x5bc838 = {
          functionId: _0x458f10,
          body: JSON.stringify({
            linkId: turnlinkId,
            pageNum: 1,
            pageSize: 30
          }),
          appid: "activities_platform",
          t: Date.now(),
          clientVersion: common.getLatestAppVersion(),
          client: "apple",
          h5st: null
        };
        break;
      case "superRedBagHome":
        _0x491b75 = {
          appId: "5be1b",
          functionId: _0x458f10,
          appid: "activity_platform_se",
          clientVersion: common.getLatestAppVersion(),
          client: "apple",
          body: {
            linkId: superlinkId
          },
          version: "4.7",
          ua: _0x38d224,
          t: true
        };
        _0xf61c08 = await H5st.getH5st(_0x491b75);
        _0x1bba74 = "https://api.m.jd.com/api";
        _0x5bc838 = _0xf61c08.paramsData;
        break;
      case "superRedBagDraw":
        _0x491b75 = {
          appId: "89cfe",
          functionId: _0x458f10,
          appid: "activity_platform_se",
          clientVersion: common.getLatestAppVersion(),
          client: "apple",
          body: {
            linkId: superlinkId
          },
          version: "4.7",
          ua: _0x38d224,
          t: true
        };
        _0xf61c08 = await H5st.getH5st(_0x491b75);
        _0x1bba74 = "https://api.m.jd.com/api";
        _0x5bc838 = _0xf61c08.paramsData;
        break;
      case "worldCupGuessHome":
        _0x491b75 = {
          appId: "49bbc",
          functionId: _0x458f10,
          appid: "activities_platform",
          clientVersion: common.getLatestAppVersion(),
          client: "apple",
          body: {
            linkId: "Y-rvrlRieX6qg8YqJLwPKg",
            balance: 0
          },
          version: "4.7",
          ua: _0x38d224,
          t: true
        };
        _0xf61c08 = await H5st.getH5st(_0x491b75);
        _0x1bba74 = "https://api.m.jd.com/api";
        _0x5bc838 = _0xf61c08.paramsData;
        break;
      default:
        console.log("❌ 未知请求 " + _0x458f10);
        return;
    }
    const _0x4c82ab = {
      rfs: "0000",
      openudid: _0x474cdf,
      screen: "430*932",
      osVersion: common.getLatestIOSVersion(),
      build: common.getLatestAppBuildVersion(),
      d_brand: "iPhone",
      d_model: "iPhone16,2",
      partner: ""
    };
    _0x4b9f70 && (common["x-api-eid-token"] = _0x4b9f70);
    _0x5bc838 && Object.assign(_0x5bc838, _0x4c82ab);
    _0x3e5172 && Object.assign(_0x3e5172, _0x4c82ab);
    const _0x4a8d6b = {
      url: _0x1bba74,
      method: _0x2ccae5,
      headers: {
        origin: "https://prodev.m.jd.com",
        Referer: "https://pro.m.jd.com/mall/active/3fcyrvLZALNPWCEDRvaZJVrzek8v/index.html",
        "User-Agent": _0x38d224,
        Cookie: _0x5dea30,
        "content-type": "application/x-www-form-urlencoded",
        accept: "application/json, text/plain, */*",
        "x-rp-client": "h5_1.0.0"
      },
      params: _0x3e5172,
      data: _0x5bc838,
      timeout: 30000
    };
    _0x2ccae5 === "GET" && (delete _0x4a8d6b.data, delete _0x4a8d6b.headers["Content-Type"]);
    const _0x4cca5f = 1;
    let _0x210ec1 = 0,
      _0x4466f7 = null;
    while (_0x210ec1 < _0x4cca5f) {
      _0x210ec1 > 0 && (await $.wait(1000));
      const _0x530742 = await common.request(_0x4a8d6b);
      if (!_0x530742.success) {
        _0x4466f7 = "🚫 " + _0x458f10 + " 请求失败 ➜ " + _0x530742.error;
        _0x210ec1++;
        continue;
      }
      if (!_0x530742.data) {
        _0x4466f7 = "🚫 " + _0x458f10 + " 请求失败 ➜ 无响应数据";
        _0x210ec1++;
        continue;
      }
      await _0x25edd1(_0x458f10, _0x530742.data);
      break;
    }
    _0x210ec1 >= _0x4cca5f && console.log(_0x4466f7);
  }
}