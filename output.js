//Thu Sep 19 2024 01:16:44 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("抖音极速");
const {
  log
} = console;
const Notify = 2;
let scriptVersion = "1.0.1";
const _0x23bb53 = function () {
  let _0x2003f1 = true;
  return function (_0x2cc14d, _0x1e9eb6) {
    const _0x717a95 = _0x2003f1 ? function () {
      if (_0x1e9eb6) {
        const _0x228e85 = _0x1e9eb6.apply(_0x2cc14d, arguments);
        _0x1e9eb6 = null;
        return _0x228e85;
      }
    } : function () {};
    _0x2003f1 = false;
    return _0x717a95;
  };
}();
const _0x48f222 = _0x23bb53(this, function () {
  const _0x524457 = function () {};
  const _0x59b948 = function () {
    let _0x42a40f;
    try {
      _0x42a40f = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x58ce71) {
      _0x42a40f = window;
    }
    return _0x42a40f;
  };
  const _0x598836 = _0x59b948();
  if (!_0x598836.console) {
    _0x598836.console = function (_0x548678) {
      const _0x5b9a2a = {
        log: _0x548678,
        warn: _0x548678,
        debug: _0x548678,
        info: _0x548678,
        error: _0x548678,
        exception: _0x548678,
        table: _0x548678,
        trace: _0x548678
      };
      return _0x5b9a2a;
    }(_0x524457);
  } else {
    _0x598836.console.log = _0x524457;
    _0x598836.console.warn = _0x524457;
    _0x598836.console.debug = _0x524457;
    _0x598836.console.info = _0x524457;
    _0x598836.console.error = _0x524457;
    _0x598836.console.exception = _0x524457;
    _0x598836.console.table = _0x524457;
    _0x598836.console.trace = _0x524457;
  }
});
_0x48f222();
let scriptVersionLatest = "";
let dyjsAPP = ($.isNode() ? process.env.dyjsAPP : $.getdata("dyjsAPP")) || "";
let dyjsAPPArr = [];
let dyjs = "";
let msg1 = "";
let msg2 = "";
let activityUrl = "https://api5-normal-c-hl.amemv.com/luckycat/aweme/v1/task";
let task_key = "";
let ad_rit = "";
let req_id = "";
let loginBack = 0;
let excitation_adBack = 0;
let search_excitationBack = 0;
let searchTimes = 0;
let read_novelBack = 0;
let read_novelNum = 0;
let signinBack = 0;
let signinVideoBack = 0;
let boxVideoBack = 0;
let submitStepBack = 0;
let coin = 0;
let cash = 0;
!(async () => {
  if (typeof $request !== "undefined") {
    await GetRewrite();
  } else {
    if (!(await Envs())) {
      return;
    } else {
      log("\n\n=============================================    \n脚本执行 - 北京时间(UTC+8)：" + new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 28800000).toLocaleString() + " \n=============================================\n");
      await poem();
      await getVersion();
      log("\n============ 当前版本：" + scriptVersion + "  最新版本：" + scriptVersionLatest + " ============");
      log("\n=================== 共找到 " + dyjsAPPArr.length + " 个账号 ===================");
      for (let _0x621ada = 0; _0x621ada < dyjsAPPArr.length; _0x621ada++) {
        let _0x5ccbeb = _0x621ada + 1;
        log("\n========= 开始【第 " + _0x5ccbeb + " 个账号】=========\n");
        dyjs = dyjsAPPArr[_0x621ada];
        await submitStep();
        await $.wait(randomInt(3000, 6000));
        if (submitStepBack) {
          await getStepReward();
          await $.wait(randomInt(3000, 6000));
        }
        await getTaskList();
        if (loginBack) {
          if (signinBack) {
            await $.wait(randomInt(3000, 6000));
            await getSigninInfo();
            await $.wait(randomInt(3000, 6000));
            await getSigninVideoReward();
            await $.wait(randomInt(3000, 6000));
          }
          await getWatchVideoReward();
          await $.wait(randomInt(3000, 6000));
          if (search_excitationBack) {
            await getSearchReward();
            await $.wait(randomInt(3000, 6000));
            while (searchTimes != 0) {
              await getSearchReward();
              await $.wait(randomInt(3000, 6000));
            }
          }
          if (read_novelBack) {
            await getReadNovelReward();
            await $.wait(randomInt(3000, 6000));
            while (read_novelNum) {
              await getReadNovelReward();
              await $.wait(randomInt(3000, 6000));
            }
          }
        }
        log("金币余额：" + coin + "，现金余额：" + cash);
        if (msg1 != "") {
          msg1 += "\n金币余额：" + coin + "，现金余额：" + cash;
        }
        msg2 += "\n金币余额：" + coin + "，现金余额：" + cash;
      }
      if (Notify == 2 && new Date().getHours() >= 23 && new Date().getMinutes() >= 40) {
        await SendMsg(msg2);
      }
    }
  }
})().catch(_0x410063 => log(_0x410063)).finally(() => $.done());
function getTaskList(_0x1205ed = 3000) {
  return new Promise(_0x4fe93b => {
    let _0xf4d763 = {
      url: activityUrl + "/page?aid=2329&device_platform=android&update_version_code=21040000",
      headers: {
        Host: "api5-normal-c-hl.amemv.com",
        cookie: "" + dyjs
      }
    };
    $.get(_0xf4d763, async (_0x5b0e16, _0x3da743, _0x558614) => {
      try {
        let _0x2e4f64 = JSON.parse(_0x558614);
        if (_0x2e4f64.err_no == 0) {
          coin = _0x2e4f64.data.income_data.amount1;
          cash = _0x2e4f64.data.income_data.amount2;
          cash = cash / 100;
          loginBack = 1;
          for (let _0x53d203 in _0x2e4f64.data.task_list) {
            if (_0x2e4f64.data.task_list[_0x53d203].profit_desc.indexOf("签到") > -1) {
              let _0x2b7e09 = JSON.parse(_0x2e4f64.data.task_list[_0x53d203].completed);
              if (!_0x2b7e09) {
                signinBack = 1;
              } else {
                signinBack = 0;
              }
            }
            if (_0x2e4f64.data.task_list[_0x53d203].name.indexOf("看广告赚金币") > -1) {
              let _0x34eba8 = JSON.parse(_0x2e4f64.data.task_list[_0x53d203].status_extra);
              if (!_0x34eba8.completed) {
                excitation_adBack = 1;
                task_key = _0x2e4f64.data.task_list[_0x53d203].key;
                ad_rit = _0x34eba8.ad_id;
                req_id = _0x34eba8.req_id;
              } else {
                excitation_adBack = 0;
              }
              if (_0x2e4f64.data.task_list[_0x53d203].action_desc.indexOf("明日再来") > -1) {
                excitation_adBack = 0;
                log("【领取视频奖励】今日已达上限");
              }
            }
            if (_0x2e4f64.data.task_list[_0x53d203].name.indexOf("搜索赚金币") > -1) {
              let _0x67d59 = JSON.parse(_0x2e4f64.data.task_list[_0x53d203].status_extra);
              if (_0x67d59.today_times != _0x67d59.times_every_day) {
                search_excitationBack = 1;
              } else {
                search_excitationBack = 0;
              }
            }
            if (_0x2e4f64.data.task_list[_0x53d203].name.indexOf("看小说赚金币") > -1) {
              let _0x2c5686 = JSON.parse(_0x2e4f64.data.task_list[_0x53d203].completed);
              if (!_0x2c5686) {
                read_novelBack = 1;
              } else {
                read_novelBack = 0;
              }
            }
          }
        } else {
          log("【获取任务列表】失败，原因是：" + _0x2e4f64.err_tips + "，退出");
        }
      } catch (_0x2c946f) {
        log(_0x2c946f);
      } finally {
        _0x4fe93b();
      }
    }, _0x1205ed);
  });
}
function getWatchVideoReward(_0x1047c0 = 3000) {
  return new Promise(_0x21ab1b => {
    let _0x49dee2 = {
      url: activityUrl + "/done/excitation_ad?aid=2329&device_platform=android&update_version_code=21040000",
      headers: {
        Host: "api5-normal-c-hl.amemv.com",
        Cookie: "" + dyjs
      },
      body: "{\"task_key\":\"" + task_key + "\",\"amount\":\"888\",\"ad_rit\":\"" + ad_rit + "\",\"ad_inspire\":\"{\"score_amount\":\"888\\\",\"req_id\":\"" + req_id + "\"}\",\"ad_alias_position\":\"task\",\"timeout\":4000}"
    };
    $.post(_0x49dee2, async (_0x455bbb, _0x5b4d9f, _0xffe6bd) => {
      try {
        let _0x405710 = JSON.parse(_0xffe6bd);
        if (_0x405710.err_no === 0 && _0x405710.data.hasOwnProperty("amount")) {
          log("【领取视频奖励】" + _0x405710.err_tips + "，获得：" + _0x405710.data.amount + "金币");
          msg1 += "\n【领取视频奖励】" + _0x405710.err_tips + "，获得：" + _0x405710.data.amount + "金币";
        } else {
          if (_0x405710.err_no === 10006 && _0x405710.err_tips.indexOf("已达到上限") > -1) {
            log("【领取视频奖励】今日已达上限");
            msg1 += "\n【领取视频奖励】今日已达上限";
          } else {
            log("【领取视频奖励】" + _0x405710.err_tips);
          }
        }
      } catch (_0x56ff00) {
        log(_0x56ff00);
      } finally {
        _0x21ab1b();
      }
    }, _0x1047c0);
  });
}
function getSearchReward(_0x4d33f4 = 3000) {
  return new Promise(_0x38e532 => {
    let _0x226c19 = {
      url: activityUrl + "/done/search_excitation?aid=2329&device_platform=android&update_version_code=21040000",
      headers: {
        Host: "api5-normal-c-hl.amemv.com",
        Cookie: "" + dyjs
      },
      body: ""
    };
    $.post(_0x226c19, async (_0x19b384, _0x37f7dc, _0x6912a1) => {
      try {
        let _0x14ae5e = JSON.parse(_0x6912a1);
        if (_0x14ae5e.err_no === 0 && _0x14ae5e.data.hasOwnProperty("amount")) {
          searchTimes = _0x14ae5e.data.daily_times;
          log("【领取搜索奖励】" + _0x14ae5e.err_tips + "，获得：" + _0x14ae5e.data.amount + "金币");
          msg1 += "\n【领取搜索奖励】" + _0x14ae5e.err_tips + "，获得：" + _0x14ae5e.data.amount + "金币";
        } else {
          log("【领取搜索奖励】" + _0x14ae5e.err_tips);
        }
      } catch (_0x201275) {
        log(_0x201275);
      } finally {
        _0x38e532();
      }
    }, _0x4d33f4);
  });
}
function getReadNovelReward(_0xd59ae2 = 3000) {
  return new Promise(_0x4850f0 => {
    let _0x42172c = {
      url: activityUrl + "/done/read_novel?aid=2329&device_platform=android&update_version_code=21040000",
      headers: {
        Host: "api5-normal-c-hl.amemv.com",
        Cookie: "" + dyjs
      },
      body: ""
    };
    $.post(_0x42172c, async (_0x3f32ef, _0x4e0489, _0x14074b) => {
      try {
        let _0x177703 = JSON.parse(_0x14074b);
        if (_0x177703.err_no === 0 && _0x177703.data.hasOwnProperty("score_amount")) {
          if (_0x177703.data.done_time != _0x177703.data.done_limit) {
            read_novelNum = 1;
          } else {
            read_novelNum = 0;
          }
          log("【领取第" + _0x177703.data.done_time + "次看小说奖励】" + _0x177703.err_tips + "，获得：" + _0x177703.data.score_amount + "金币");
          msg1 += "\n【领取第" + _0x177703.data.done_time + "次看小说奖励】" + _0x177703.err_tips + "，获得：" + _0x177703.data.score_amount + "金币";
        } else {
          log("【领取看小说奖励】" + _0x177703.err_tips);
        }
      } catch (_0x45825f) {
        log(_0x45825f);
      } finally {
        _0x4850f0();
      }
    }, _0xd59ae2);
  });
}
function submitStep(_0x43640e = 3000) {
  return new Promise(_0x2be7cc => {
    let _0x421487 = {
      url: activityUrl + "/walk/step_submit?aid=2329&device_platform=android&update_version_code=21040000",
      headers: {
        Accept: "*/*",
        Host: "api5-normal-c-hl.amemv.com",
        cookie: "" + dyjs,
        "Content-Type": "application/json"
      },
      body: "{\"step\":" + randomInt(12000, 13000) + ",\"submit_time\":" + (timestampS() - 20) + "}"
    };
    $.post(_0x421487, async (_0x1b09de, _0x17daf5, _0x5675d8) => {
      try {
        let _0x414d9f = JSON.parse(_0x5675d8);
        if (_0x414d9f.err_no === 0 && _0x414d9f.data.hasOwnProperty("today_step")) {
          submitStepBack = 1;
          log("【上传" + _0x414d9f.data.today_step + "步数】" + _0x414d9f.err_tips);
        } else {
          submitStepBack = 0;
          log("【上传步数】" + _0x414d9f.err_tips);
        }
      } catch (_0x281d6a) {
        log(_0x281d6a);
      } finally {
        _0x2be7cc();
      }
    }, _0x43640e);
  });
}
function getStepReward(_0x197202 = 3000) {
  return new Promise(_0x3c37f2 => {
    let _0x531741 = {
      url: activityUrl + "/walk/receive_step_reward?aid=2329&device_platform=android&update_version_code=21040000",
      headers: {
        Host: "api5-normal-c-hl.amemv.com",
        Cookie: "" + dyjs
      },
      body: ""
    };
    $.post(_0x531741, async (_0x4d9041, _0x43636d, _0x20562c) => {
      try {
        let _0x29e3a8 = JSON.parse(_0x20562c);
        if (_0x29e3a8.err_no === 0 && _0x29e3a8.data.hasOwnProperty("reward_amount")) {
          log("【领取步数奖励】" + _0x29e3a8.err_tips + "，获得：" + _0x29e3a8.data.reward_amount + "金币");
        } else {
          log("【领取步数奖励】" + _0x29e3a8.err_tips);
        }
      } catch (_0x5666cf) {
        log(_0x5666cf);
      } finally {
        _0x3c37f2();
      }
    }, _0x197202);
  });
}
function signin(_0x1a3baf = 3000) {
  return new Promise(_0x50c810 => {
    let _0x4017da = {
      url: activityUrl + "/done/sign_in?aid=2329&device_platform=android&update_version_code=21040000",
      headers: {
        Host: "api5-normal-c-hl.amemv.com",
        Cookie: "" + dyjs
      },
      body: "{}"
    };
    $.post(_0x4017da, async (_0x2dc43f, _0x223383, _0x2f3bdd) => {
      try {
        let _0x3db6a5 = JSON.parse(_0x2f3bdd);
        if (_0x3db6a5.err_no === 0 && _0x3db6a5.data.hasOwnProperty("amount")) {
          log("【签到】" + _0x3db6a5.err_tips + "，获得：" + _0x3db6a5.data.amount + "金币");
          msg1 += "\n【签到】" + _0x3db6a5.err_tips + "，获得：" + _0x3db6a5.data.amount + "金币";
        } else {
          log("【签到】" + _0x3db6a5.err_tips);
        }
      } catch (_0x8f7069) {
        log(_0x8f7069);
      } finally {
        _0x50c810();
      }
    }, _0x1a3baf);
  });
}
function getSigninInfo(_0x5afd1c = 3000) {
  return new Promise(_0x38e220 => {
    let _0x3ede45 = {
      url: activityUrl + "/sign_in/detail?aid=2329&device_platform=android&update_version_code=21040000",
      headers: {
        Host: "api5-normal-c-hl.amemv.com",
        Cookie: "" + dyjs
      }
    };
    $.get(_0x3ede45, async (_0x148c50, _0x3be060, _0x12c452) => {
      try {
        let _0x31871a = JSON.parse(_0x12c452);
        if (_0x31871a.err_no === 0 && _0x31871a.data.hasOwnProperty("excitation_ad_info")) {
          signinVideoBack = 1;
          task_key = _0x31871a.data.excitation_ad_info.task_key;
          ad_rit = _0x31871a.data.excitation_ad_info.ad_id;
          req_id = _0x31871a.data.excitation_ad_info.req_id;
        } else {
          signinVideoBack = 0;
          log("【获取签到详情】" + _0x31871a.err_tips);
        }
      } catch (_0x876c8e) {
        log(_0x876c8e);
      } finally {
        _0x38e220();
      }
    }, _0x5afd1c);
  });
}
function getSigninVideoReward(_0x1e53a5 = 3000) {
  return new Promise(_0x2d6a01 => {
    let _0x332169 = {
      url: activityUrl + "/done/excitation_ad_signin?aid=2329&device_platform=android&update_version_code=21040000",
      headers: {
        Host: "api5-normal-c-hl.amemv.com",
        Cookie: "" + dyjs
      },
      body: "{\"task_key\":\"" + task_key + "\",\"amount\":\"888\",\"ad_rit\":\"" + ad_rit + "\",\"ad_inspire\":\"{\"score_amount\":\"888\",\"amount\":\"\",\"req_id\":\"" + req_id + "\"}\",\"ad_alias_position\":\"check_in\",\"timeout\":4000}"
    };
    $.post(_0x332169, async (_0x53f4d9, _0x35be39, _0x22d019) => {
      try {
        let _0x292916 = JSON.parse(_0x22d019);
        if (_0x292916.err_no === 0 && _0x292916.data.hasOwnProperty("amount")) {
          log("【领取签到视频奖励】" + _0x292916.err_tips + "，获得：" + _0x292916.data.amount + "金币");
          msg1 += "\n【领取签到视频奖励】" + _0x292916.err_tips + "，获得：" + _0x292916.data.amount + "金币";
        } else {
          log("【领取签到视频奖励】" + _0x292916.err_tips);
        }
      } catch (_0x19cf26) {
        log(_0x19cf26);
      } finally {
        _0x2d6a01();
      }
    }, _0x1e53a5);
  });
}
function openBox(_0x30fbfa = 3000) {
  return new Promise(_0x3b58b4 => {
    let _0x4798f7 = {
      url: activityUrl + "/done/treasure_task?aid=2329&device_platform=android&update_version_code=21040000",
      headers: {
        Host: "api5-normal-c-hl.amemv.com",
        Cookie: "" + dyjs
      },
      body: "{}"
    };
    $.post(_0x4798f7, async (_0x5a7fe5, _0x36e756, _0x462576) => {
      try {
        let _0xfc3fda = JSON.parse(_0x462576);
        if (_0xfc3fda.err_no === 0 && _0xfc3fda.data.hasOwnProperty("amount")) {
          boxVideoBack = 1;
          task_key = _0xfc3fda.data.excitation_ad_info.task_key;
          ad_rit = _0xfc3fda.data.excitation_ad_info.ad_id;
          req_id = _0xfc3fda.data.excitation_ad_info.req_id;
          log("【开宝箱】" + _0xfc3fda.err_tips + "，获得：" + _0xfc3fda.data.amount + "金币");
          msg1 += "\n【开宝箱】" + _0xfc3fda.err_tips + "，获得：" + _0xfc3fda.data.amount + "金币";
        } else {
          log("【开宝箱】" + _0xfc3fda.err_tips);
          boxVideoBack = 0;
        }
      } catch (_0x57e6fd) {
        log(_0x57e6fd);
      } finally {
        _0x3b58b4();
      }
    }, _0x30fbfa);
  });
}
function getBoxVideoReward(_0x5048d7 = 3000) {
  return new Promise(_0x3df0ee => {
    let _0x5da688 = {
      url: activityUrl + "/done/excitation_ad_treasure_box?aid=2329&device_platform=android&update_version_code=21040000",
      headers: {
        Host: "api5-normal-c-hl.amemv.com",
        Cookie: "" + dyjs
      },
      body: "{\"task_key\":\"" + task_key + "\",\"amount\":\"888\",\"ad_rit\":\"" + ad_rit + "\",\"ad_inspire\":\"{\"score_amount\":\"888\",\"amount\":\"\",\"req_id\":\"" + req_id + "\"}\",\"ad_alias_position\":\"box\",\"timeout\":4000}"
    };
    $.post(_0x5da688, async (_0x4c821d, _0x5d3c9f, _0x19945c) => {
      try {
        let _0x12e223 = JSON.parse(_0x19945c);
        if (_0x12e223.err_no === 0 && _0x12e223.data.hasOwnProperty("amount")) {
          log("【领取开宝箱视频奖励】" + _0x12e223.err_tips + "，获得：" + _0x12e223.data.amount + "金币");
          msg1 += "\n【领取开宝箱视频奖励】" + _0x12e223.err_tips + "，获得：" + _0x12e223.data.amount + "金币";
        } else {
          log("【领取开宝箱视频奖励】" + _0x12e223.err_tips);
        }
      } catch (_0x208e95) {
        log(_0x208e95);
      } finally {
        _0x3df0ee();
      }
    }, _0x5048d7);
  });
}
async function GetRewrite() {
  if ($request.url.indexOf("v1/task/page") > -1) {
    const _0x13df0c = $request.headers.cookie;
    if (dyjsAPP) {
      if (dyjsAPP.indexOf(_0x13df0c) == -1) {
        dyjsAPP = dyjsAPP + "@" + _0x13df0c;
        $.setdata(dyjsAPP, "dyjsAPP");
        let _0x1e386d = dyjsAPP.split("@");
        $.msg("【" + $.name + "】" + (" 获取第" + _0x1e386d.length + "个 ck 成功: " + _0x13df0c + " ,不用请自行关闭重写!"));
      }
    } else {
      $.setdata(_0x13df0c, "dyjsAPP");
      $.msg("【" + $.name + "】" + (" 获取 ck 成功: " + _0x13df0c + " ,不用请自行关闭重写!"));
    }
  }
}
async function Envs() {
  if (dyjsAPP) {
    if (dyjsAPP.indexOf("@") != -1) {
      dyjsAPP.split("@").forEach(_0x513dcf => {
        dyjsAPPArr.push(_0x513dcf);
      });
    } else {
      if (dyjsAPP.indexOf("\n") != -1) {
        dyjsAPP.split("\n").forEach(_0x5bd78c => {
          dyjsAPPArr.push(_0x5bd78c);
        });
      } else {
        dyjsAPPArr.push(dyjsAPP);
      }
    }
  } else {
    log("\n 【" + $.name + "】：未填写变量 dyjsAPP");
    return;
  }
  return true;
}
async function SendMsg(_0x5a9d57) {
  if (!_0x5a9d57) {
    return;
  }
  if ($.isNode()) {
    var _0x1c489a = require("./sendNotify");
    await _0x1c489a.sendNotify($.name, _0x5a9d57);
  } else {
    $.msg(_0x5a9d57);
  }
}
function randomString(e) {
  e = e || 32;
  var t = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890",
    a = t.length,
    n = "";
  for (i = 0; i < e; i++) {
    n += t.charAt(Math.floor(Math.random() * a));
  }
  return n;
}
function randomInt(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
function timestampMs() {
  return new Date().getTime();
}
function timestampS() {
  return Date.parse(new Date()) / 1000;
}
function poem(timeout = 3000) {
  return new Promise(resolve => {
    let url = {
      url: `https://v1.jinrishici.com/all.json`
    };
    $.get(url, async (err, resp, data) => {
      try {
        data = JSON.parse(data);
        log(`${data.content}  \n————《${data.origin}》${data.author}`);
      } catch (e) {
        log(e, resp);
      } finally {
        resolve();
      }
    }, timeout);
  });
}
function modify() {
  fs.readFile("/ql/data/config/config.sh", "utf8", function (err, dataStr) {
    if (err) {
      return log("读取文件失败！" + err);
    } else {
      var result = dataStr.replace(/regular/g, string);
      fs.writeFile("/ql/data/config/config.sh", result, "utf8", function (err) {
        if (err) {
          return log(err);
        }
      });
    }
  });
}
function getVersion(timeout = 3000) {
  return new Promise(resolve => {
    let url = {
      url: `https://raw.gh.fakev.cn/LinYuanovo/scripts/main/dyjsb.js`
    };
    $.get(url, async (err, resp, data) => {
      try {
        scriptVersionLatest = data.match(/scriptVersion = "([\d\.]+)"/)[1];
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    }, timeout);
  });
}
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
      this.log("", `??${this.name}, 开始!`);
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
        let t = ["", "==============??系统通知??=============="];
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
      s ? this.log("", `??${this.name}, 错误!`, t.stack) : this.log("", `??${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `??${this.name}, 结束! ?? ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}