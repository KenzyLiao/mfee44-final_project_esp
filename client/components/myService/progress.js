import React from 'react'

export default function Progress() {
  return (
    <>
      <div
        className="progress mt-4 mx-auto w-75"
        role="progressbar"
        aria-label="Basic example"
        aria-valuenow={0}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="progress-bar" style={{ width: '0%' }} />
      </div>
    </>
  )
}
