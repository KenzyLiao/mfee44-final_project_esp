import express from 'express'
import { createConnection } from '../configs/my-db.js'
const router = express.Router()
const connection = await createConnection()

router.get('/', async (req, res) => {
  const num = req.query.num || 3
  const [rows] = await connection.execute(
    `SELECT * FROM product WHERE product_type = 2 LIMIT ${num}`
  )

  res.send(rows)
})

router.get('/:id', async (req, res) => {
  if (isNaN(req.params.id)) {
    res.status(400).send({ message: 'Invalid ID' })
    return
  }
  if (req.params.id < 214 || req.params.id > 273) {
    res.status(404).send({ message: 'Not found' })
    return
  }
  const [rows] = await connection.execute(
    `SELECT * FROM product WHERE id = ${req.params.id}`
  )
  if (rows.length === 0) {
    res.status(404).send({ message: 'Course Not found' })
    return
  }
  res.status(200).send(rows)
})

export default router
