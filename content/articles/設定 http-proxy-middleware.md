---
draft: false
url: setting-up-http-proxy-middleware
tags:
  - 前端
  - 筆記
---

今天同事問我他遇到前端設定 API proxy 搞不定，於是我只好翻出好久以前自己做的紀錄來處理。

https://www.youtube.com/?gl=TW&tab=w1
<!--more-->
...

## 先貼一下標準範例

```javascript
// javascript

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api', createProxyMiddleware({ target: 'http://www.example.org', changeOrigin: true }));
app.listen(3000);

// http://localhost:3000/api/foo/bar -> http://www.example.org/api/foo/bar
```

從上面的程式碼可以歸納出以下步驟:
1. 首先你需要起一個 node server (範例中使用 Express.js)
2. 從 http-proxy-middleware 解構出 `createProxyMiddleware`
3. 對你要轉換的路由 (範例中藥轉換的路徑是 `/api`)，將 `createProxyMiddleware` 帶入一些選項之後套用到 Express 的路由上
4. 對外持續監聽某一個 port，等待轉發

## http-proxy-middleware 幾個常見的選項
target:

目標 host

changeOrigin:

需不需要轉來源(通常用在要跨域的情況下，所以給 true)

pathRewrite:

改寫路徑，如下的寫法，會將你 /old-path 的 request 都轉給 /new-path
'^/api/old-path': '/api/new-path'

## 參考:

https://www.npmjs.com/package/http-proxy-middleware#http-proxy-middleware-options