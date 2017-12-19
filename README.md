# vue-admin

为了保证依赖升级问题，采用yarn管理版本。

## 使用

```
git clone https://github.com/jiangtao/vue-admin.git // 从仓库上拉取代码
cd vue-admin
yarn install                                        // 安装依赖
yarn start [port]                                   // 启动项目，参数 port 代表端口，默认是 8080
```

## 依赖

vue, vuex, axios

## 前端服务器配置

### 端口配置

```
打开 webpack.dev.conf.js 文件，找到 port 字段，默认是 8080
修改为任意端口，重新 npm start 即可用新的端口访问前端服务器
```

### 代理配置

```

打开 webpack.dev.conf.js 文件，找到 server 字段，在此字段上添加一个新字段

proxy: {
    host: '',
    match: /^/
}

host 为接口的主机名
match 为正则表达式

Example:

server: {
    port: 8080,
    proxy: {
        host: '192.168.1.226:8089',
        match: /^\/api\//
    }
}

当请求地址: http://localhost:8080/api/login 时
如果配置了代理，那么代理会自动转发到: http://192.168.1.226:8089/login 上
```

## 目录结构

```
/vue-admin
├── node_modules // 项目依赖包
├─┬ src
│ ├── components // 组件
│ ├── pages // 页面
│ ├── router // 路由
│ ├── utils // 工具
│ ├── App.vue // 主文件
│ └── entry.js // 启动文件，给 webpack 使用
├── index.html // 承载各页面的容器
├── package.json // 项目配置文件
├── webpack.dev.conf.js // webpack 开发环境规则
├── webpack.test.conf.js // webpack 测试环境规则
└── webpack.prod.conf.js // webpack 生产环境规则
└── webpack.dll.conf.js // webpack dll依赖规则，用于生成dll依赖，减少
```
## 编译优化

项目中已经使用 webpack dll做了依赖规整，提升编译优化速度，若依赖需要版本变化，请重新执行 dll打包

```bash
yarn run dll
```

然后测试环境/线上环境 运行

```bash
yarn run test  // 测试环境
yarn run build // 线上环境
```
