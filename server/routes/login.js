import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import db from '../configs/mydb.js'

const router = express.Router()

router.post('/', async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' })
  }

  try {
    const query = 'SELECT user_id, email, password FROM users WHERE email = ?'
    const [results] = await db.execute(query, [email])

    if (results.length === 0) {
      return res.status(401).json({ error: 'User not found.' })
    }

    const user = results[0]
    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials.' })
    }

    const token = jwt.sign({ user_id: user.user_id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    })
    res.status(200).json({ token })
  } catch (error) {
    console.error('Login error:', error) // Log the error for debugging purposes
    res.status(500).json({ error: 'Error on the server.' })
  }
})

export default router
