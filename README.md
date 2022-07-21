# Learn React

## 创建新的 React 应用

### 安装

* 全局安装 create-react-app

``` sh
sudo npm install -g create-react-app
```

* 查看npm 全局安装的包

``` sh
npm list -g --depth 0
```

### WARN

* 如果出现

``` sh
npm WARN deprecated tar@2.2.2: This version of tar is no longer supported, and will not receive security updates. Please upgrade asap.
```

* 解决方法

``` sh
# asap 尽快，升级就是了
sudo npm install -g tar 
```

### 创建应用

* Create React App

``` sh
npx create-react-app learn-react-app
cd learn-react-app
npm start
```

### Hello World

* 备份 index.js

``` sh
mv index.js index-backup.js
```

* 创建空白 index.js

``` sh
nvim index.js
```

* 添加内容

``` javascript

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App form './App';
import HelloWorld from './HelloWorld';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/** <App /> **/}
    <HelloWorld />
  </React.StrictMode>
);

reportWebVitals();

```

* 创建 HelloWorld.js

``` js

function HelloWorld() {
  return (
    <h1>
      Hello World!
    </h1>
  )
}

export default HelloWorld;

```

* 网址

* http://localhost:3000/

### JSX

* 想要使用 JSX 就需要添加 babel