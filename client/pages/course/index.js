import React from 'react'
import CardGroup from '@/components/course/card-group.js'
import CardGroupTitle from '@/components/course/card-group-title.js'
export default function CoursePage() {
  const data = [
    {
      title:"我的課程",
      subTitle:"新的一天持續學習"
    },
    {
      title:"興趣課程",
      subTitle:"推薦您可能喜歡"
    },
    {
      title:"熱門課程",
      subTitle: "跟許多人一起學習"
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
