import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Navigation } from 'swiper/modules'

const ProductCard = () => {
  const [favorites, setFavorites] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await fetch('http://localhost:3005/api/favorite', {
          credentials: 'include',
        })
        const data = await response.json()
        setFavorites(data.favorites)
        setProducts(data.products)
      } catch (error) {
        console.error('Error fetching favorites:', error)
      }
    }

    fetchFavorites()
  }, [])

  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={2}
      navigation
      modules={[Navigation]}
      direction="horizontal"
    >
      {products.map((product, index) => (
        <SwiperSlide key={index}>
          <div
            className="card border-0 "
            style={{
              width: '100%',
              height: 'auto',
              margin: '0 10px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div
              className="card border-0 shadow"
              style={{
                width: '180px',
                height: '280px',
                display: 'inline-block',
              }}
            >
              <Link
                href={`/product/${product.id}`}
                as={`/product/${product.id}`}
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <div>
                  <img
                    src={`/images/myProduct/${product.image}`}
                    className="card-img-top"
                    alt={product.name}
                    style={{
                      width: '100%',
                      height: '100%', // 使用百分比高度以确保图片在容器内完全显示
                      objectFit: 'contain', // 使用contain以确保图片完全显示在容器内
                      minHeight: '180px', // 设置最小高度，以适应较矮的图片
                    }}
                  />
                  <div className="card-body no-space-x">
                    <p
                      className="text-h4 mb-5"
                      style={{
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 2,
                        overflow: 'hidden',
                      }}
                    >
                      {product.name}
                    </p>
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '3%',
                        left: '5%',
                      }}
                    >
                      <span className="text-my-notice text-h5">
                        ${product.price}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ProductCard
