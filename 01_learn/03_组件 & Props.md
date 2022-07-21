# 组件 & Props

* 组件

  * WHAT

    * 组件，从概念上类似于 JavaScript 函数。它接受任意的入参（即 “props”(道具、支柱)），并返回用于描述页面展示内容的 React 元素
    * 组件允许你将 UI 拆分为独立可复用的代码片段，并对每个片段进行独立构思。本指南旨在介绍组件的相关理念。你可以[参考详细组件 API](https://react.docschina.org/docs/react-component.html)

## 函数组件与 class 组件

* 组件

  * HOW

    * 定义组件最简单的方式就是编写 JavaScript 函数

      ``` js
      function Welcome(props) {
        return <h1>Hello， {props.name}</h1>
      }
      ```

      该函数是一个有效的 React 组件，因为它接收唯一带有数据的 “props”（代表属性）对象与并返回一个 React 元素。这类组件被称为“函数组件”，因为它本质上就是 JavaScript 函数

    * [ES6的class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)来定义组件

      ``` js
      class Welcome extends React.Component {
        render() {
          return <h1>Hello, {this.props.name}</h1>;
        }
      }
      ```

      上述两个组件在 React 里是等效的

## 渲染组件

* 渲染组件

  * WHAT
    * React 元素可以是用户自定义的组件
    * 当 React 元素为用户自定义组件时，它会将 JSX 所接收的属性（attributes）以及子组件（children）转换为单个对象传递给组件，这个对象被称之为 “props”

      即 props 作为参数，可以让自定义组件接收，props 传递的是 自定义标签的 attributes

  * HOW
    * 例子

      ``` js
      // 单网页写法
      function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
      }

      const root = ReactDOM.createRoot(document.getElementById('root'));
      const element = <Welcome name="Sara" />;
      root.render(element);
      ```

      ``` js
      // react 组件写法
      function Welcome(props) {
        return <h1>Hello, {props.name} !</h1>;
      }

      const element = <Welcome name="Sara" />

      function HelloSara() {
        return element;
      }

      export default HelloSara;
      ```

    * 上面例子发生了什么
      1. 我们调用 root.render() 函数，并传入 &lt;Welcome name="Sara" /&gt; 作为参数
      2. React 调用 Welcome 组件，并将 {name: 'Sara'} 作为 props 传入
      3. Welcome 组件将 &lt;h1&gt;Hello, Sara&lt;/h1&gt; 元素作为返回值
      4. React DOM 将 DOM 高效地更新为 &lt;h1&gt;Hello, Sara&lt;/h1&gt;
  
  * ATTENTION
    * 组件名称必须以大写字母开头

      >React 会将以小写字母开头的组件视为原生 DOM 标签。例如，&lt;div /&gt; 代表 HTML 的 div 标签，而 &lt;Welcome /&gt; 则代表一个组件，并且需在作用域内使用 Welcome\
      >你可以在[深入 JSX](https://react.docschina.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized) 中了解更多关于此规范的原因

## 组合组件

* 组合组件

  * WHAT
    * 组件可以在其输出中引用其他组件。这就可以让我们用同一组件来抽象出任意层次的细节。按钮，表单，对话框，甚至整个屏幕的内容：在 React 应用程序中，这些通常都会以组件的形式表示

  * HOW
    * 例子

      ``` js
      // 单网页写法
      function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
      }

      function App() {
        return (
          <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
          </div>
        );
      }
      ```

  * ATTENTION
    * 通常来说，每个新的 React 应用程序的顶层组件都是 App 组件。但是，如果你将 React 集成到现有的应用程序中，你可能需要使用像 Button 这样的小组件，并自下而上地将这类组件逐步应用到视图层的每一处

## 提取组件

* 提取组件

  * HOW
    * 将组件拆分为根小的组件，例如下面的 Comment 组件

      ``` js
      // 单页面
      function Comment(props) {
        return (
          <div className="Comment">
            <div className="UserInfo">
              <img className="Avatar"
                src={props.author.avatarUrl}
                alt={props.author.name}
              />
              <div className="UserInfo-name">
                {props.author.name}
              </div>
            </div>
            <div className="Comment-text">
              {props.text}
            </div>
            <div className="Comment-date">
              {formatDate(props.date)}
            </div>
          </div>
        );
      }
      ```

      ``` js
      // react 组件
      function formatDate(date) {
        return date.toLocaleDateString();
      }

      const comment = {
        date: new Date(),
        text: "I hope you enjoy learning React!",
        author: {
          name: 'Hello Kitty',
          avatarUrl: 'http://placekitten.com/g/64/64'
        }
      }

      function Comment(props) {
        return (
          <div className="Comment">
            <div className="UserInfo">
              <img
                className="Avatar"
                src={props.author.avatarUrl}
                alt={props.author.name} />
              <div className="UserInfo-name">
                {props.author.name}
              </div>
              <div className="Comment-text">
                {props.text}
              </div>
              <div className="Comment-date">
                {formatDate(props.date)}
              </div>
            </div>
          </div>
        )
      }

      function getComment() {
        return <Comment date={comment.date} text={comment.text} author={comment.author} />
      }

      export default getComment;
      ```

    * 该组件用于描述一个社交媒体网站上的评论功能，它接收 author（对象），text （字符串）以及 date（日期）作为 props
    * 该组件由于嵌套的关系，变得难以维护，且很难复用它的各个部分。因此，让我们从中提取一些组件出来

    * 