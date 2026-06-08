"冯佳盈+24级软件三班+246230330"
//引入express框架构建后端服务器
const express=require("express")
//处理浏览器跨域问题，引入cors
const cors=require("cors")
//创建项目实例对象
const app = express()
//设置端口号
const PORT = 3000
// 需提前引入依赖模块
const path = require('path')
const fs = require('fs')
const { SourceTextModule } = require("vm")
const { log } = require("console")
// 把cors注册到当前项目实例对象里
app.use(cors())

// 注: 前端传来的请求体80%都是json类型(看网络请求中content-type=application/json;charset=UTF-8), 后端处理
// js格式: username: "张三", age: 18   json格式: {"username": "张三", "age": "18"}
// 解析客户端传来的请求的json类型, 转化为js类型
app.use(express.json())

// 解析URL编码的请求体 (如: URL?page=1&size=20)
// extended默认为false, 表示接收的值为字符串或数组, extended设置为true时表示url可以是任意类型
app.use(express.urlencoded({extended: true}))


// HTTP常用请求方法: get查询/获取数据  post创建/提交数据到后端服务器上
// app.get(要处理的请求路径地址, 执行的回调函数) 当浏览器访问地址时, 执行对应的回调函数
// req表示http请求对象 (客户端发送的请求信息封装到req对象里)
// res表示http响应对象 (服务器向客户端发送的响应数据封装到res对象里)
app.get("/", (req, res)=>{
    console.log(1111) // 打印了的, 但浏览器一直在转圈
    console.log("请求头信息: ", req.headers)
    console.log("获取当前HTTP请求方法: ", req.method) // GET
    console.log("获取当前请求的URL路径:", req.url) // /
    console.log("获取当前客户端的IP地址:", req.ip) // ::1
    // [::1]:3000 远程地址  [::1]表示IPv6的本地回环地址=IPv4的127.0.0.1
    // 解决浏览器打圈问题: 给浏览器响应
    res.send("helloworld") // 把"helloworld"发送给客户端
    // res.status() 设置状态码 .....
})

app.get("/list", (req, res)=>{
    console.log(2222)

    // 实现: http://localhost:3000/list?page=1&size=10, 获取当前浏览器传来的get请求参数
    // ?page=1&size=10 查询字符串参数
    console.log(req.query) // { page: '1', size: '10' }

    // 解构拿数据
    let { page, size } = req.query

    // 执行逻辑: 利用这两个数据查询数据库, 处理数据库返回的数据, 然后再send到浏览器
    res.send(`
        <p><strong>姓名：</strong>冯佳盈</p>
        <p><strong>班级：</strong>24级软件三班</p>
        <p><strong>学号：</strong>246230330</p>
        <hr>
        <p>这是list页面，当前第${page}页，每页${size}条信息</p>
        <p>数据内容：....(数据库中取得的数据)</p>
    `)
        
    
})



// 注册页面接口：访问/register时，后端返回注册html页面给浏览器客户端
app.get("/register", (req, res)=>{
    //实现功能：把register页面数据传送到当前url下
    // 拼接register.html的完整文件路径 _dirname表示当前项目路径
    let filePath = path.join(__dirname, "views", "register.html")
    // 同步读取html文件内容，编码为utf-8避免中文乱码
    let content = fs.readFileSync(filePath, "utf-8")
    // 把读取到的页面内容发送给浏览器渲染
    res.send(content)
})

app.post("/register", (req, res)=>{
    // 用户点击提交按钮后就会执行这里的代码
    console.log("用户把数据提交过来了")

    // 客户端提交的数据在请求体里
    console.log("请求体: ", req.body) // { username: '1', email: '1', password: '1', repwd: '1' }

    // 解构获取数据
    let { username, email, password, repwd } = req.body

    // 注册逻辑（步骤说明）
    // 1 验证参数是否为空, 如果为空则返回注册失败
    // 2 查询数据库, 看提交的username是否被注册, 若被注册则返回注册失败（msg:当前用户名已存在, 请重新注册）
    // 3 校验邮箱是否为真实邮箱, 若不是则返回注册失败
    // 4 验证password和repwd是否一致, 若不一致则返回注册失败
    // 5 把提交的数据存在数据库中, 同时返回注册成功

    res.send("注册成功")
})

// 启动服务器
// 访问当前后端服务器: http://localhost:3000
// 监听端口号是否被启动, 启动后express后端服务器就开启了
// app.listen(端口号, 监听端口号被启动后执行的回调函数)
app.listen(PORT, ()=>{
    console.log("服务器启动在" + PORT + "端口了！！");
})



