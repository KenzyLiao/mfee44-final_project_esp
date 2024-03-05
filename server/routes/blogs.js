import express from 'express'
const router = express.Router()

// 資料庫使用
import sequelize from '#configs/db.js'
const { Blog } = sequelize.models

// 檢查空物件, 轉換req.params為數字
import { getIdParam } from '#db-helpers/db-tool.js'

// GET - 得到所有資料
router.get('/', async function (req, res) {
  // findAll是回傳所有資料
  const posts = await Blog.findAll()

  // 標準回傳JSON
  return res.json({ status: 'success', data: { posts } })
})

// GET - 得到單筆資料(注意，有動態參數時要寫在GET區段最後面)
router.get('/:id', async function (req, res) {
  // 轉為數字
  const id = getIdParam(req)

  // 使用SQL
  const post = await sequelize.query('SELECT * FROM `blog` WHERE id=?', {
    logging: console.log,
    replacements: [id],
    type: Blog.SELECT,
  })

  // 標準回傳JSON
  return res.json({ status: 'success', data: post })
})

export default router
