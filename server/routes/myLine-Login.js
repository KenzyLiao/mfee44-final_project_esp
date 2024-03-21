import express from 'express'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import mydb from '../configs/mydb.js'

const router = express.Router()

const CHANNEL_ID = process.env.LINE_CHANNEL_ID
const CHANNEL_SECRET = process.env.LINE_CHANNEL_SECRET
const REDIRECT_URI = process.env.LINE_LOGIN_CALLBACK_URL
const LINE_TOKEN_ENDPOINT = 'https://api.line.me/oauth2/v2.1/token'
const LINE_PROFILE_ENDPOINT = 'https://api.line.me/v2/profile'
const JWT_SECRET = process.env.JWT_SECRET

router.get('/', async (req, res) => {
  const code = req.query.code
  if (!code) {
    return res.status(400).send('授權碼缺失。')
  }

  try {
    const tokenResponse = await axios.post(
      LINE_TOKEN_ENDPOINT,
      new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: REDIRECT_URI,
        client_id: CHANNEL_ID,
        client_secret: CHANNEL_SECRET,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    )

    const accessToken = tokenResponse.data.access_token

    const profileResponse = await axios.get(LINE_PROFILE_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })

    const { userId, displayName } = profileResponse.data

    await mydb.query(
      'INSERT INTO users (line_id, firstname, auth_provider) VALUES (?, ?, "line") ON DUPLICATE KEY UPDATE firstname = ?',
      [userId, displayName, displayName] //
    )

    const tokenPayload = {
      line_id: userId,
      firstname: displayName,
    }

    const token = jwt.sign(tokenPayload, JWT_SECRET, {
      expiresIn: '1h',
    })

    // 将JWT设置到HttpOnly cookie中
    res.cookie('authToken', token, {
      httpOnly: true,
      secure: true,
      maxAge: 3600000,
    })

    // 重定向到前端的某个路由
    res.redirect('http://localhost:3000/member/profile')
  } catch (error) {
    console.error('LINE 登入過程出錯:', error)
    res.status(500).send('內部伺服器錯誤')
  }
})

export default router
