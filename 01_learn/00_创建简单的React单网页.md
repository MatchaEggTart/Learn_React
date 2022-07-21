# 创建简单的React单网页

## 创建 html

* html 例子

  ``` html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <!-- 加载 React。-->
      <!-- 注意: 部署时，将 "development.js" 替换为 "production.min.js"。-->
      <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
      <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>

      <!-- 加载 Bable，使用JSX -->
      <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  </head>
  <body>
      <div id="root"></div>
      
      <!-- 加载我们的 React 组件。-->
      <script type="text/babel" src="test.js"></script>
  </body>
  </html>
  ```

* 引入 react 插件

  ``` html
  <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
  ```

* 引入 babel
  * 如果不引入 babel，是无法使用 JSX

  ``` html
  <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  ```

* 创建 DOM 根节点

  ``` html
  <body>
    <div id="root"></div>
  </body>
  ```

* 引入我们写好的 JS 文件
  * 如果使用 JSX，就必须将 type="text/javascript" 改成 type="text/babel"

  ``` html
  <script type="text/babel" src="test.js"></script>
  ```

## 创建 js 文件

* js 例子

  ``` js
  function tick() {
      const element = (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {new Date().toLocaleTimeString()}.</h2>
          aa
        </div>
      );
      // highlight-next-line
      ReactDOM.render(element, document.getElementById('root'));
    }
    
    setInterval(tick, 1000);
  ```
