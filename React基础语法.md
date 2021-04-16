# React基础语法

## 特点

1. 声明式设计
2. 高效，采用虚拟DOM来实现DOM渲染，最大限度的减少DOM的操作。
3. 灵活，跟其他库灵活搭配使用
4. JSX，JS语法的扩展
5. 组件化，模块化，2016之前大型项目常用React
6. 单向数据流，没有实现数据的双向绑定
### 关于虚拟DOM
- 虚拟DOM是React内部在使用，所以较轻，最终会被React渲染为真实DOM,呈现在页面上

## 1. react的三大属性

### 属性1：state

1. 定义： state是组件对象中最重要的属性，值是一个对象(可以包含多个数组，有点像vue中的data属性),可通过更新组件的state来更新对应的页面显示
2. 操作state通常要经历三个状态 

```js
//1) 初始化状态:
constructor (props) {
   super(props)
   this.state = {
        stateProp1 : value1,
        stateProp2 : value2
   }
}
//2) 读取某个状态值
this.state.statePropertyName
//3) 更新状态---->组件界面更新
this.setState({
stateProp1 : value1,
stateProp2 : value2
})
```

### 属性2：props

	1.  作用： 从组件外向组件内传递变化的数据（只读）
	
	2.  例子(**React.PropTypes 在 React v15.5 版本后已经移到了** **prop-types** **库。**)

```js
//1）内部读取某个属性值
this.props.propertyName
//2) 对props中的属性值进行类型限制和必要性限制
方法一：新版本中已经被弃用
Person组件名：
Person.propTypes={
       name: React.PropTypes.string.isRequired,
       age:React.PropTypes.number.isRequired
}
方法二：
需要用到prop-types.js文件
Person.propTypes={
    name:PropTypes.string.isRequired
}
//3）扩展属性：对象的所有属性通过props传递
<Person {...person} />   //默认传递了所有属性
//4)默认属性值
Person.defaultProps = {
     name:"Mary"
}
//5)组件类的构造函数，
constructor(props){
     super(props)
    console.log(props)//里面存放所有属性
}
// 现阶段
class Person ... {
	static propTypes = {
       name: PropTypes.string.isRequired,
       age: PropTypes.number.isRequired
    },
    static defaultProps = {
     name:"Mary"
    }
}
```

### 属性3：ref

- 1. 作用： 通过ref获取到组件特定的标签对象，进行读取相关数据
  2. 例子

```js
//ref使用方式一：
<input type="text" ref="content"/>
//调用
<button onClick={getContent}>获取</button>

getContent() {
    alert(this.refs.content)
}
//ref使用方式二：
<input type="text" ref={input=>this.input=input}/>
//input=>this.input=input 的含义是将当前的input 赋值给组件里面的input
```

## 2. 创建组件方式

```js
//函数模式
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
//class形式
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

## 3. 事件处理

     1）通过onXxx属性指定组件的事件处理函数
    
     2）React中的事件是通过事件委托方式处理的（委托给组件最外层的元素）
    
     3）通过event.target可以得到发生事件的DOM元素

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div id="obj1"></div>
    <script type="text/javascript" src="./js/react.development.js"></script>
    <script type="text/javascript" src="./js/react-dom.development.js"></script>
    <script type="text/javascript" src="./js/prop-types.js"></script>
    <script type="text/javascript" src="./js/babel.min.js"></script>
    <script type="text/babel">
        class MyComponent extends React.Component{
            constructor(props){
            	super(props)
                     //给处理函数强制绑定this
            	this.handleClick=this.handleClick.bind(this)
            	this.handleBlur = this.handleBlur.bind(this)
            }
            handleClick(){
                alert(this.input.value)
            }
            handleBlur(event){
              alert(event.target.value)
            }
            render(){
                return (
                      <div>
                          <input type="text" ref="content"/>
                          <input type="text" ref={input=>this.input=input}/>
                          <button onClick={this.handleClick}>点击按钮</button>
                          <input  type="text" placeholder="请输入数据" onBlur={this.handleBlur} />
                      </div>
                )
            }
        }
        ReactDOM.render(<MyComponent />, document.getElementById("obj1"))
    </script>
</body>
</html>
```

## 4.  生命周期
React的生命周期从广义上分为三个阶段：挂载、渲染、卸载

因此可以把React的生命周期分为两类：挂载卸载过程和更新过程。

## 5. 挂载卸载过程

### 1.1.constructor()

	constructor()中完成了React数据的初始化，它接受两个参数：props和context，当想在函数内部使用这两个参数时，需使用super()传入这两个参数。
	注意：只要使用了constructor()就必须写super(),否则会导致this指向错误。

### 1.2.componentWillMount()

componentWillMount()一般用的比较少，它更多的是在服务端渲染时使用。它代表的过程是组件已经经历了constructor()初始化数据后，但是还未渲染DOM时。

### 1.3.componentDidMount()

组件第一次渲染完成，此时dom节点已经生成，可以在这里调用ajax请求，返回数据setState后组件会重新渲染

### 1.4.componentWillUnmount ()

在此处完成组件的卸载和数据的销毁。

1. clear你在组建中所有的setTimeout,setInterval
2. 移除所有组建中的监听 removeEventListener
3. 有时候我们会碰到这个warning:

```js
Can only update a mounted or mounting component. This usually      means you called setState() on an unmounted component. This is a   no-op. Please check the code for the undefined component.
```

原因：因为你在组件中的ajax请求返回setState,而你组件销毁的时候，请求还未完成，因此会报warning

解决方法：

```js
componentDidMount() {
    this.isMount === true
    axios.post().then((res) => {
    this.isMount && this.setState({   // 增加条件ismount为true时
      aaa:res
    })
})
}
componentWillUnmount() {
    this.isMount === false
}
```

## 6. props传参传函数

```js
//Father.jsx
render() {
        return(
            <div>
                <button onClick={this.btnClick}>点击</button>
                <Test msg={this.state.msg} btnClick={this.btnClick}/>
            </div>
        )
 }
    btnClick(val) {
        let msg = this.state.msg + val
        console.log(val)
        this.setState({
            msg
        })
    }
}
//child.jsx
render() {
        return (
            <div>
                {this.props.msg}
                <button onClick={this.btnSend}>child1</button>
 				<button onClick={()=>this.props.btnClick(1)}>child2</button>
            </div>
        )
    }
    btnSend = () => {
        this.props.btnClick(1)
    }
```
## 7. 代理

- 配置单个代理 

```js
//package.json
  "proxy": "http://localhost:3000"
```

- 配置多个代理， 新建 `setupProxy.js`与`App.js`同级

```js
// 此写法只适用 http-proxy-middleware 为 0.x版本
const proxy = require('http-proxy-middleware');
/*
 * 代理：因为浏览器的同源政策导致请求的数据无法返回到自身,通过代理的形式
 */
module.exports = function (app) {
    app.use(
        proxy('/api1', {//遇见api1前缀的请求，就会触发代理
            target: 'http://localhost:3000',
            changeOrigin: true, //控制服务器收到的请求头中Host
            pathRewrite: {'^/api1': ''} //重写路径
        }),
        proxy('/api2', {//遇见api1前缀的请求，就会触发代理
            target: 'http://localhost:3002',
            changeOrigin: true, //控制服务器收到的请求头中Host
            pathRewrite: {'^/api2': ''} //重写路径
        }),
    )
}
```

## 8. 连续解构赋值

```}
//render
return (
	<input ref={v => this.keyWordElement = v} />
)
//end
const { keyWordElement: {value}} = this
console.log(value)
console.log(keyWordElement) //报错， 未定义

//
let obj = {a: {b: {c: 1} } }
const {a: {b: {c} } } = obj
console.log(c)
```

## 9. 路由(web)

#### 文档学习

```
https://react-router.docschina.org/web/example/basic
```

#### 安装

```js
npm i react-router-dom --save
```

#### 使用(`BrowserRouter`, `Link`, `Route`  `NavLink`)

```jsx
// index.jsx
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
      <BrowserRouter>
          <App />
      </BrowserRouter>,
  document.getElementById('root')
)

//RouterTest.jsx
import { Route, Link, NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";
export default class RouterTest extends Component {
    render() {
        return (
            <div>
                <Link to="/home">Home</Link>
                <Link to="/about">about</Link>
                <NavLink  activeClassName="activeClassName" to="/home">Home</NavLink>
                <NavLink activeClassName="activeClassName" to="/about">about</NavLink>
                <Route path='/home' component={Home}/>
                <Route path='/about' component={About}/>
            </div>
        )
    }
}
// NavLink相较于Link 多了一个active的样式，默认为active， 或者可以通过activeClassName修改默认的class样式
```

#### 使用Switch

渲染与该地址匹配的第一个子节点 `<Route>` 或者 `<Redirect>`。

**这与仅使用一堆 `<Route>` 有什么区别？**

`<Switch>` 的独特之处在于它专门呈现路由。相比之下，与位置匹配的每个 `<Route>` 都已包含方式呈现。请考虑以下代码

```jsx
<Route path="/about" component={About}/>
<Route path="/:user" component={User}/>
<Route component={NoMatch}/>
```

如果 URL 是 `/about` ， 那么 `<About>` ， `<User>` ， `<NoMatch>`将全部渲染，因为他们都与路径匹配。这是通过设计实现的，允许我们以多种方式将 `<Route>` 组合到应用程序中，类似侧边栏（sidebars）和面包屑导航（breadcrumbs）， bootstrap 标签等等，但是有时候我们只想选择一条 `<Route>` 进行渲染，如果我们在 `/about` ，我们又不想匹配 `/:user` （或者显示404）。以下是如何使用 `Switch` 执行此操作:

```jsx
import { Switch, Route } from 'react-router'
<Switch>
  <Route exact path="/" component={Home}/>
  <Route path="/about" component={About}/>
  <Route path="/:user" component={User}/>
  <Route component={NoMatch}/>
</Switch>
```

现在，如果我们在 `/about` ，`<Switch>` 将开始查找匹配的 `<Route>` ，`<Route path="/about”/><Switch>` 将停止查找匹配项并渲染 `<About>` ，同样，如果是 `/Michael` ，则 `< User >` 将渲染。

这对于动画过渡效果也很有用，因为匹配的 `<Route>` 被渲染到与前一个位置相同的位置。

#### 路径问题(history模式)

**问题** ：plublic文件夹 相当于根路径，当我们在`index.html`文件中，通过相对路径引入css文件 `<link rel="stylesheet" href="./css/test.css"/>`。此时，如果跳转到页面中没有定义的页面时刷新页面， css文件会找不到，并且发出警告。

**解决方法**

- 改为Hash模式，在Hash模式下，获取文件不会考虑`#`之后的所有数据
- 将路径改为`<link rel="stylesheet" href="/css/test.css"/>`全局路径（**常用**）
- 将路径改为`<link rel="stylesheet" href="%PUBLIC_URL%/css/test.css"/>`路径

#### 模糊匹配与严格匹配

- 模糊匹配: `Route`要的一个都不能少
- 严格匹配：`Route`定义的path路径必须跟`Link`一致，`exact`字段。严格匹配不要随便开启。需要再开，有时会导致无法匹配二级路由

#### Redirect

- 当匹配的路径无法匹配不上 时，通过`Redirect`重定向到所写的路径

```JSX
<Route path="/home" component={Home}></Route>
<Redirect to="/Home"></Redirect>
```

#### 嵌套路由

