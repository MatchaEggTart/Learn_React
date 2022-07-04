# Learn React

## 创建新的 React 应用

### 安装

* 全局安装 create-react-app

``` shell
sudo npm install -g create-react-app
```

* 查看npm 全局安装的包

``` shell
npm list -g --depth 0
```

### WARN

* 如果出现

``` shell
npm WARN deprecated tar@2.2.2: This version of tar is no longer supported, and will not receive security updates. Please upgrade asap.
```

* 解决方法

``` shell
# asap 尽快，升级就是了
sudo npm install -g tar 
```

### 创建应用

* Create React App

``` shell
npx create-react-app learn-react-app
cd learn-react-app
npm start
```

### Hello World

* 备份 index.js

``` shell
mv index.js index_backup.js
```

* 创建空白 index.js

``` shell
nvim index.js
```

* 添加内容

``` javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```
