import express from 'express'
import cookieParser from 'cookie-parser'

const router = express.Router()

// 使用 cookie-parser 中间件来解析 HTTP 请求中的 cookie
router.use(cookieParser())

// 创建处理登出请求的路由
router.post('/', (req, res) => {
  // 清除名为 'authToken' 的 HttpOnly cookie
  // 确保设置此 cookie 的选项与设置 token 时的选项一致，尤其是 path 和 domain
  res.clearCookie('authToken', { path: '/' })
  return res.status(200).json({ message: '您已成功登出。' })
})

export default router
