import React, { useEffect, useState } from 'react'
import CardGroup from '@/components/course/card-group.js'
import FilterBar from '@/components/course/filter-bar'

export default function CoursePage() {
  const [filterType, setFilterType] = useState('')
  const [filterState, setFilterState] = useState('')
  const [data, setData] = useState([])

  let fetchUrl = 'http://localhost:3005/api/course/overview?'
  if (filterType === '文字') {
    fetchUrl += '&type=1'
  } else if (filterType === '繪畫') {
    fetchUrl += '&type=2'
  }
  if (filterState === '最熱門') {
    fetchUrl += '&state=1'
  } else if (filterState === '依價格') {
    fetchUrl += '&state=2'
  } else if (filterState === '依時間') {
    fetchUrl += '&state=3'
  }
  console.log('filterType:', filterType)
  console.log('filterState:', filterState)
  console.log('fetchUrl:', fetchUrl)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(fetchUrl)
        const data = await response.json()
        setData(data)
      } catch (error) {
        console.error('Error:', error)
      }
    }
    fetchData()
  }, [fetchUrl])
  return (
    <>
      <FilterBar
        setFilterType={setFilterType}
        setFilterState={setFilterState}
      />
      {Array.from({ length: 1 }).map((_, i) => (
        <div className="mb-5" key={i}>
          <CardGroup data={data} />
        </div>
      ))}
    </>
  )
}
