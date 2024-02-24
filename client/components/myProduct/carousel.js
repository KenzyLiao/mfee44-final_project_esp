import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules'

export default function Carousel() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <>
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
        className="mySwiper2"
      >
        <SwiperSlide>
          <div style={{ width: '100%', height: '100%' }}>
            <Image
              src="/images/product/slide/t1.jpg"
              alt="Slide 1"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ width: '100%', height: '100%' }}>
            <Image
              src="/images/product/slide/t2.jpg"
              alt="Slide 2"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ width: '100%', height: '100%' }}>
            <Image
              src="/images/product/slide/t3.jpg"
              alt="Slide 3"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ width: '100%', height: '100%' }}>
            <Image
              src="/images/product/slide/t4.jpg"
              alt="Slide 4"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ width: '100%', height: '100%' }}>
            <Image
              src="/images/product/slide/t5.jpg"
              alt="Slide 5"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
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
        className="mySwiper"
      >
        <SwiperSlide>
          <div style={{ width: '100%', height: '100%' }}>
            <Image
              src="/images/product/slide/t1.jpg"
              alt="Thumbnail 1"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ width: '100%', height: '100%' }}>
            <Image
              src="/images/product/slide/t2.jpg"
              alt="Thumbnail 2"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ width: '100%', height: '100%' }}>
            <Image
              src="/images/product/slide/t3.jpg"
              alt="Thumbnail 3"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ width: '100%', height: '100%' }}>
            <Image
              src="/images/product/slide/t4.jpg"
              alt="Thumbnail 4"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ width: '100%', height: '100%' }}>
            <Image
              src="/images/product/slide/t5.jpg"
              alt="Thumbnail 5"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
