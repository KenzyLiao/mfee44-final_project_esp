import React from 'react'
import CardGroup from '@/components/course/card_group.js'
import CardGroupTitle from '@/components/course/card-group-title.js'
export default function CoursePage() {
  const data = [
    {
      title:"熱門課程",
      subTitle:"每周優質推薦"
    },
    {
      title:"興趣課程",
      subTitle:"推薦您可能喜歡的課程"
    },
    {
      title:"最新課程",
      subTitle: "最新上架課程"
    }
  ]
  return (<>
    <div>課程首頁</div>
    {data.map((item, idx) => (
      <div className='mb-5'>
        <CardGroupTitle key={idx} {...item}/>
        <CardGroup />
      </div>
    ))}
    
  </>)
}
