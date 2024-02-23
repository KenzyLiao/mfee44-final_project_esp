import React from 'react'
import CardGroup from '@/components/course/card-group.js'
import FilterBar from '@/components/course/filter-bar'

export default function CoursePage() {
  return (
    <>
      <FilterBar />
      {Array.from({ length: 5 }).map((_, i) => (
        <div className="mb-5" key={i}>
          <CardGroup />
        </div>
      ))}
    </>
  )
}
