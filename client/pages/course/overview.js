import React, { useEffect, useState } from 'react'
import CardGroup from '@/components/course/card-group.js'
import FilterBar from '@/components/course/filter-bar'

export default function CoursePage() {
  const [filterType, setFilterType] = useState('')
  const [filterState, setFilterState] = useState('')
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3005/api/course/')
        const data = await response.json()
        setData(data)
      } catch (error) {
        console.error('Error:', error)
      }
    }

    fetchData()
  }, [])
  console.log(filterState)
  return (
    <>
      <FilterBar
        setFilterType={setFilterType}
        setFilterState={setFilterState}
      />
      {Array.from({ length: 5 }).map((_, i) => (
        <div className="mb-5" key={i}>
          <CardGroup data={data} />
        </div>
      ))}
    </>
  )
}
