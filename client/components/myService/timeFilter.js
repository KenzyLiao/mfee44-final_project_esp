import React from 'react'

export default function TimeFilter() {
  return (
    <>
      <input className="choose-time" type="time" />
      ~
      <input className="choose-time" type="time" />
      <style jsx>{`
        .choose-time {
          min-width: 126px;
        }
      `}</style>
    </>
  )
}
