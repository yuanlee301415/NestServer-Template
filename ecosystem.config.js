module.exports = {
  apps : [{
    script: 'dist/main.js', // 入口文件
    name: "NestServerTemplate", // pm2 列表中显示的项目名称
    env: { // 启动环境
      NODE_ENV: "production", // 环境:production
      NAME: "NestServerTemplate", // 项目源码中使用的环境变量-NAME(项目名称)
      PORT: 10301 // 项目源码中使用的环境变量-PORT(监听端口号)
    }
  }]
};