import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules'
import Image from 'next/image'
import styles from './productcarousel.module.scss'

export default function Carousel() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <div className={styles['product-carousel-container']}>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Autoplay, FreeMode, Navigation, Thumbs]}
        className={`${styles.mySwiper2} ${styles['product__carousel']}`}
      >
        <SwiperSlide>
          <div className={styles['swiper-slide-image-container']}>
            <Image
              src="/images/product/slide/t1.jpg"
              alt="Product 1"
              width={800}
              height={300}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles['swiper-slide-image-container']}>
            <Image
              src="/images/product/slide/t2.jpg"
              alt="Product 2"
              width={800}
              height={300}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles['swiper-slide-image-container']}>
            <Image
              src="/images/product/slide/t3.jpg"
              alt="Product 3"
              width={800}
              height={300}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles['swiper-slide-image-container']}>
            <Image
              src="/images/product/slide/t4.jpg"
              alt="Product 4"
              width={800}
              height={300}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles['swiper-slide-image-container']}>
            <Image
              src="/images/product/slide/t5.jpg"
              alt="Product 5"
              width={800}
              height={300}
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={`${styles.mySwiper} ${styles['product__carousel']}`}
      >
        <SwiperSlide>
          <Image
            src="/images/product/slide/t1.jpg"
            alt="Thumbnail 1"
            width={200}
            height={150}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/product/slide/t2.jpg"
            alt="Thumbnail 2"
            width={200}
            height={150}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/product/slide/t3.jpg"
            alt="Thumbnail 3"
            width={200}
            height={150}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/product/slide/t4.jpg"
            alt="Thumbnail 4"
            width={200}
            height={150}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/product/slide/t5.jpg"
            alt="Thumbnail 5"
            width={200}
            height={150}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
