// myProduct.js

import express from 'express'
import sequelize from './../configs/db.js'

const router = express.Router()

router.get('/products', async (req, res) => {
  try {
    const query = `
      SELECT 
        p.product_id, p.name, p.product_type, p.price, p.description, p.image, p.created_at, p.updated_at, p.valid,
        g.brand_id, g.nib_id, g.material_id, g.color_id, g.stock, g.series,
        c.color_name,
        b.brand_name,
        n.nib_name,
        m.material_name
      FROM 
        product AS p
        INNER JOIN general_product AS g ON p.product_id = g.product_id
        INNER JOIN color AS c ON g.color_id = c.color_id
        INNER JOIN brand AS b ON g.brand_id = b.brand_id
        INNER JOIN nib AS n ON g.nib_id = n.nib_id
        INNER JOIN material AS m ON g.material_id = m.material_id
    `
    const [rows] = await sequelize.execute(query)
    res.json(rows)
  } catch (error) {
    console.error('Error executing query:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

export default router
