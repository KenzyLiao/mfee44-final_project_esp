import express from 'express'
import { createConnection } from '../configs/my-db.js'
const router = express.Router()
const connection = await createConnection()

router.get('/', async (req, res) => {
  const num = req.query.num || 3
  const [rows] = await connection.execute(
    `SELECT product.*, course_product.*, course_category.category_name, course_teacher.name AS teacher_name
    FROM product  
    JOIN course_product ON product.id = course_product.product_id 
    JOIN course_category ON course_product.category_id = course_category.id
    JOIN course_teacher ON course_product.teacher_id = course_teacher.id
    WHERE product.product_type = 2
    AND product.valid = 1 
    LIMIT ${num}`
  )
  res.send(rows)
})

router.get('/:id', async (req, res) => {
  if (isNaN(Number(req.params.id))) {
    res.status(400).send({ message: 'Invalid ID' })
    return
  }
  if (req.params.id < 214 || req.params.id > 273) {
    res.status(404).send({ message: 'Not found' })
    return
  }
  const [rows] = await connection.execute(
    `SELECT product.*, course_product.*, course_category.category_name, course_teacher.name AS teacher_name, course_teacher.image AS teacher_image,course_teacher.introduction AS teacher_introduction
    FROM product  
    JOIN course_product ON product.id = course_product.product_id 
    JOIN course_category ON course_product.category_id = course_category.id
    JOIN course_teacher ON course_product.teacher_id = course_teacher.id
    WHERE product.product_type = 2
    AND product.valid = 1 
    AND product.id = ${req.params.id}`
  )
  const [rows2] = await connection.execute(
    `SELECT * FROM course_units WHERE course_id = ${req.params.id}`
  )
  rows[0].units = rows2
  for (const unit of rows[0].units) {
    const [rows3] = await connection.execute(
      `SELECT * FROM course_sub_units WHERE unit_id = ${unit.id}`
    )
    unit.sub_units = rows3
  }
  if (rows.length === 0) {
    res.status(404).send({ message: 'Course Not found' })
    return
  }
  res.status(200).send(rows)
})

export default router
