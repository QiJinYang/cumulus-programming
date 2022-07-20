module.exports = {
  // 表示当前⽬录即为根⽬录，ESLint 规则将被限制到该⽬录下
  root: true,
  // env 表示启⽤ ESLint 检测的环境
  env: {
    // 在 node 环境下启动 ESLint 检测
    node: true,
  },
  // ESLint 中基础配置需要继承的配置
  extends: ["plugin:vue/vue3-essential", "@vue/standard"],
  // 解析器
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    'space-before-function-paren': 'off',
    quotes: "error",
    quotes: "warn",
    quotes: "off",
  },
};
