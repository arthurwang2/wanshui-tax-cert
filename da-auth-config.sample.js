// 示例：复制为 da-auth-config.js，或用同目录下的 set-da-password.html 在浏览器中生成。
// 真实 da-auth-config.js 已列入 .gitignore，请勿把含真实哈希的文件推到公开仓库。
//
// disabled: true 时等同于关闭访问门（不校验密码）。
window.__DA_AUTH_CONFIG__ = {
  disabled: true,
  v: 1,
  iterations: 100000,
  saltB64: '',
  hashB64: ''
};
