# JSX

## JSX 简介

* What

  * JSX 是 JavaScript 的语法扩展
  * 既有 模板语言（标签），也具有 JavaScript 的 全部功能

* Why

  * 让渲染逻辑本质（js）与其他UI（html、css）逻辑内在耦合
  * JSX 和 UI 放一起，会在视觉上有辅助作用

* How

  * 例子(在 JSX 中嵌入表达式)
  
    * 声明一个名为 name 的变量，然后在 JSX 中使用它，并将它包裹在大括号中

      ``` js
      const name = 'John Perez';
      const element = <h1>Hello， {name}</h1>;

      ReactDOM.render(
        element,
        document.getElementById('root')
      );
      ```

    * 在 JSX 语法中，可以在大括号{}内放置任何 JavaScript 表达式

      /src/FormatName.js

      ``` js
      function formatName(user) {
        return user.firstName + ' ' + user.lastName;
      };

      const user = {
        firstName: 'Harper',
        lastName: 'Perez'
      };

      const element = (
        <h1>
          Hello, {formatName(user)}!
        </h1>
      )

      function FormatName() {
        return ( 
          element
        )
      }

      export default FormatName;
      ```

  * 例子（JSX 也是一个表达式）

    * 在编译之后，JSX 表达式会被转为普通 JavaScript 函数调用，并且对其取值后得到 JavaScript 对象（也就是说，你可以在 if 语句和 for 循环的代码块中使用 JSX，将 JSX 赋值给变量，把 JSX 当作参数传入，以及从函数中返回 JSX）

      /src/FormatName.js

      ``` js
      function formatName(user) {
        return user.firstName + ' ' + user.lastName;
      };

      const user = {
        firstName: 'Harper',
        lastName: 'Perez'
      };

      const element = (
        <h1>
          Hello, {formatName(user)}!
        </h1>
      )

      function FormatName() {
        return ( 
          element
        )
      }

      export default FormatName;
      ```

    * 例子（JSX 特定属性）

    