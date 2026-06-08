const express = require("express")
const cors = require("cors")
const path = require('path')   // 添加这行
const fs = require('fs')       
const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// 实现登录功能:
// 模拟数据 (相当于模拟从数据库中拿到的账号和密码)
let mockData = [
    {username: "admin", psw: "111111"},
    {username: "张三", psw: "222222"},
     {username: "冯佳盈", psw: "246230330"}
]

// 客户端向/api/data目标地址发起GET请求 (要数据), 后端服务器把数据传送给客户端
app.get("/api/data", (req, res)=>{
    // json功能1: 将mockData数组转化为json格式发送给客户端 (相当于调用JSON.stringify(mockData))
    // json功能2: 自动设置Content-type字段为application/json;charset=UTF-8, 相当于告诉客户端这是一个json数据
    res.json(mockData)
})

// generateToken方法生成token
const generateToken = (user) => {
    return "mock_token_" + user.username + Date.now()
}

// 实现功能: 登录页面点击"登录"按钮, 提交表单的用户名密码, 然后将用户输入的用户名和密码与数据库中的数据进行
// 如果匹配失败则返回对应的状态码和提示, 若匹配成功则返回客户端"登录成功"
app.post("/api/data", (req, res)=>{
    // 登录时的数据 (用户名和密码) 放在请求体里, 然后发送到后端服务器
    // 解构:
    let {username, psw} = req.body
    // 登录需要执行的逻辑:
    // 1 验证用户是否在数据库中存在, 若不存在则提示"用户不存在"
    // 数组名.find() 用于查找数组中第一个满足条件的元素, 返回第一个元素 (找到) 或undefined (没找到)
    // 把mockData数组中的元素一个一个拿出来命名为user1,
    // 校验user1.username(数据库中的数据)与username (请求体中的数据: 浏览器的登陆页面中的表单的用户名中)
    const user = mockData.find(user1 => user1.username === username)
    if(!user){
        // 在数据库中没找到用户 user=undefined
        return res.status(401).json({error: "用户不存在"}) // 给客户端发送提示信息
    }
    // 2 若数据库中存在该用户, 验证密码, 若不一致提示"密码错误"
    // user.psw表示数据库中的用户密码  psw表示客户端提交的需要验证的密码
    if(user.psw != psw){
        return res.status(401).json({error: "密码错误"})
    }
    // 3 若数据库中存在该用户且密码正确，则提示"登录成功"
// 登录成功后需要为该用户提供token (令牌: 身份信息凭证, 由服务器签发并在客户端存储, 用于证明用户身份)
const token = generateToken(user)
res.json({
    message: "登录成功",
    user: {
        username: user.username,
        psw: user.psw
    },
    token: token
})
})

app.listen(PORT, ()=>{
console.log("服务器启动在" + PORT + "端口了！！");

})
app.get("/register", (req, res)=>{
    // 拼接register.html的完整文件路径
    let filePath = path.join(__dirname, "views", "register.html")
    // 同步读取html文件内容
    let content = fs.readFileSync(filePath, "utf-8")
    // 把读取到的页面内容发送给浏览器渲染
    res.send(content)
})