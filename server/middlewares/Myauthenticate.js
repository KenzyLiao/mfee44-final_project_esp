import jsonwebtoken from 'jsonwebtoken'

// 後端：從Authorization頭獲取token
export default function authenticate(req, res, next) {
  const authHeader = req.headers.authorization
  const token = authHeader && authHeader.split(' ')[1] // Bearer TOKEN_HERE

  if (!token) {
    return res.status(401).json({
      status: 'error',
      message: '授權失敗，沒有訪問令牌',
    })
  }

  jsonwebtoken.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({
        status: 'error',
        message: '無效的訪問令牌',
      })
    }

    req.user = user
    next()
  })
}
