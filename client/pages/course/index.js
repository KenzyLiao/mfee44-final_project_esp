import React, { useRef, useState } from 'react'
import CourseCarousel from '@/components/course/course-carousel.js'
import CardGroup from '@/components/course/card-group.js'
import CardGroupTitle from '@/components/course/card-group-title.js'
export default function CoursePage() {
  const data = [
    {
      title: '我的課程',
      subTitle: '新的一天持續學習',
    },
    {
      title: '興趣課程',
      subTitle: '推薦您可能喜歡',
    },
    {
      title: '熱門課程',
      subTitle: '跟許多人一起學習',
    },
  ]
  // const prev = document.querySelector('.swiper-button-prev')
  // prev.classList.add('text-primary')
  // const next = document.querySelector('.swiper-button-next')
  // next.classList.add('text-primary')
  return (
    <>
      <div>課程首頁</div>
      <div className="mb-5">
        <CourseCarousel />
      </div>

      {data.map((item, idx) => (
        <div className="mb-5" key={idx}>
          <CardGroupTitle {...item} />
          <CardGroup />
        </div>
      ))}
    </>
  )
}
