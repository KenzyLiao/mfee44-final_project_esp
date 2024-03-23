import React, { useState, useEffect } from 'react'
import FavIcon from '@/components/myProduct/fav-icon' // 請確保 FavIcon 的路徑正確
import Link from 'next/link'
import { motion } from 'framer-motion'

const ProductFigure = ({ pid, image, brand, name, price, order }) => {
  const formattedPrice = price.toLocaleString()
  const [isHovered, setIsHovered] = useState(false)
  const [favorites, setFavorites] = useState([]) // 保存最爱列表的状态

  const fetchFavorites = async () => {
    try {
      const response = await fetch('http://localhost:3005/api/favorite', {
        credentials: 'include',
      })
      const data = await response.json()
      const productIds = data.favorites.map((item) => item.product_id)

      setFavorites(productIds)
    } catch (error) {
      console.error('Error fetching favorites:', error)
    }
  }

  // 模拟从服务器获取最爱列表的数据
  useEffect(() => {
    fetchFavorites() // 调用获取最爱列表数据的函数
  }, []) // 空依赖数组确保只在组件挂载时执行

  useEffect(() => {
    const handleScroll = () => {
      // 處理滾動事件
    }

    window.addEventListener('scroll', handleScroll)

    // 清理函數
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []) // 依賴陣列

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        type: 'spring',
        stiffness: 100,
        delay: order * 0.3,
        ease: 'easeInOut',
      }}
      viewport={{ once: true }}
      className="card border-0 shadow"
      style={{
        width: '100%',
        position: 'relative', // 添加相對位置
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        transition: 'transform 0.3s ease',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 放置 FavIcon 在右上角 */}
      <div style={{ position: 'absolute', top: '5%', left: '5%', zIndex: 1 }}>
        <FavIcon id={pid} favorites={favorites} setFavorites={setFavorites} />
      </div>
      <Link
        href={`/product/${pid}`}
        as={`/product/${pid}`}
        style={{ textDecoration: `none` }}
      >
        <img
          src={image}
          className="card-img-top"
          alt={name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div className="card-body no-space-x">
          <p className="text-p">{brand}</p>
          <p
            className="text-h4 mb-5"
            style={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
              overflow: 'hidden',
            }}
            v
          >
            {name}
          </p>
          <div style={{ position: 'absolute', bottom: '3%', left: '5%' }}>
            <span className="text-my-notice text-h5">${formattedPrice}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default ProductFigure
