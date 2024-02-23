import React from 'react'

export default function TimeFilter() {
  return (
    <>
      <input className="chooseTime" type="time" />
      ~
      <input className="chooseTime" type="time" />
      <style jsx>{`
        .chooseTime {
          min-width: 126px;
        }
      `}</style>
    </>
  )
}
