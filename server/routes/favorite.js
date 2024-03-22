import express from 'express'
import mydb from '##/configs/mydb.js'
import authenticate from '../middlewares/Myauthenticate.js'

const router = express.Router()

router.get('/', authenticate, async (req, res) => {
  try {
    const userId = req.user.user_id

    // 查询用户收藏的产品 ID，并按创建时间排序
    const [favorites] = await mydb.execute(
      'SELECT product_id FROM favorite WHERE user_id = ? ORDER BY created_at DESC',
      [userId]
    )
    const productIds = favorites.map((favorite) => favorite.product_id)

    if (productIds.length === 0) {
      // 如果用户没有收藏任何产品，则直接返回空数组
      return res.send({ favorites: [], products: [] })
    }

    // 构建逗号分隔的参数列表字符串，用于 IN 子句
    const placeholders = productIds.map(() => '?').join(',')

    // 查询收藏的产品的名称、图片和价格
    const [products] = await mydb.execute(
      `SELECT p.id, p.name, p.image, p.price FROM product p WHERE p.id IN (${placeholders})`,
      productIds
    )

    // 将收藏的产品和对应的产品信息合并到一个对象中，并发送响应
    res.send({ favorites, products })
  } catch (err) {
    console.error('查询数据错误:', err)
    return res.status(500).json({ status: 'error', message: '数据库查询失败' })
  }
})

export default router
