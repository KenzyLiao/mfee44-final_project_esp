import express from 'express'
import mydb from '##/configs/mydb.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    // 使用 Promise 包装数据库查询
    const [products] = await mydb.execute(`
      SELECT 
        p.id AS product_id, p.name, p.product_type, p.price, p.description, p.image, p.updated_at,
        g.product_id, g.brand_id, g.nib_id, g.material_id, g.color_id, g.stock, g.series,
        b.brand_id, b.brand_name,
        n.nib_id, n.nib_name,
        m.material_id, m.material_name,
        c.color_id, c.color_name, c.color_bg
      FROM 
        product AS p
        INNER JOIN general_product AS g ON p.id = g.product_id
        INNER JOIN brand AS b ON g.brand_id = b.brand_id
        INNER JOIN nib AS n ON g.nib_id = n.nib_id
        INNER JOIN material AS m ON g.material_id = m.material_id
        INNER JOIN color AS c ON g.color_id = c.color_id
      ORDER BY p.id
    `);

    res.send(products);
  } catch (err) {
    // 发生错误时返回 500 错误
    console.error('查詢資料錯誤:', err);
    return res.status(500).json({ status: 'error', message: '資料庫查詢失敗' });
  }
});

export default router