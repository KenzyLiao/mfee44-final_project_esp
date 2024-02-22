import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper'

// 初始化 Swiper 插件
SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay])

const ProductCarousel = () => {
  // 设定轮播图的初始状态
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <div className="product-carousel-container">
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        spaceBetween={10}
        navigation={true}
        modules={[Autoplay, Navigation, Pagination, Scrollbar]}
        className="mySwiper2 product__carousel"
      >
        <SwiperSlide>
          <div className="swiper-slide-image-container">
            <img src="/images/product/slide/t1.jpg" alt="Product 1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-image-container">
            <img src="/images/product/slide/t2.jpg" alt="Product 2" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-image-container">
            <img src="/images/product/slide/t3.jpg" alt="Product 3" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-image-container">
            <img src="/images/product/slide/t4.jpg" alt="Product 4" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-image-container">
            <img src="/images/product/slide/t5.jpg" alt="Product 5" />
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Scrollbar]}
        className="mySwiper product__carousel"
      >
        <SwiperSlide>
          <img src="/images/product/slide/t1.jpg" alt="Thumbnail 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/product/slide/t2.jpg" alt="Thumbnail 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/product/slide/t3.jpg" alt="Thumbnail 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/product/slide/t4.jpg" alt="Thumbnail 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/product/slide/t5.jpg" alt="Thumbnail 5" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ProductCarousel
