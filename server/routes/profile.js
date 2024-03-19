import express from 'express'
import jwt from 'jsonwebtoken'
import db from '../configs/mydb.js'
import { format } from 'date-fns-tz'

// 引入認證中間件
import authenticate from '../middlewares/Myauthenticate.js'

const router = express.Router()

// 使用中間件
router.use(authenticate)

router.get('/', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]
    if (!token) {
      return res.status(401).json({ message: '缺少令牌' })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const userId = decoded.user_id

    const query =
      'SELECT user_id, email, title, lastname, firstname, phone, birthdate FROM users WHERE user_id = ?'

    const [results, fields] = await db.query(query, [userId])
    if (results.length === 0) {
      return res.status(404).json({ message: '找不到用户' })
    }

    const user = results[0]

    // 將資料庫中的 UTC 時間轉換為用戶所在時區的時間
    if (user.birthdate) {
      const utcBirthdate = new Date(user.birthdate) // 假設資料庫中的生日是以 UTC 存儲的
      const userTimezone = 'Asia/Taipei' // 用戶所在的時區，這裡假設為台北時區
      const formattedBirthdate = format(utcBirthdate, 'yyyy-MM-dd', {
        timeZone: userTimezone,
      })
      user.birthdate = formattedBirthdate
    }

    res.json(user)
  } catch (error) {
    console.error('處理請求時出現錯誤:', error)
    res.status(500).json({ message: '伺服器內部錯誤' })
  }
})

export default router
