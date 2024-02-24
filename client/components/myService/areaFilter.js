import React from 'react'

export default function AreaFilter() {
  return (
    <>
      <div
        className="btn-group"
        role="group"
        aria-label="Basic checkbox toggle button group"
      >
        <input type="checkbox" className="btn-check px-0" id="btn-check-n" />
        <label className="btn px-0 btn-outline-primary" htmlFor="btn-check-n">
          北
        </label>
      </div>
      <div
        className="btn-group"
        role="group"
        aria-label="Basic checkbox toggle button group"
      >
        <input type="checkbox" className="btn-check px-0" id="btn-check-m" />
        <label className="btn px-0 btn-outline-primary" htmlFor="btn-check-m">
          中
        </label>
      </div>
      <div
        className="btn-group"
        role="group"
        aria-label="Basic checkbox toggle button group"
      >
        <input type="checkbox" className="btn-check px-0" id="btn-check-s" />
        <label className="btn px-0 btn-outline-primary" htmlFor="btn-check-s">
          南
        </label>
      </div>
      <style jsx>{`
        .btn-group {
          min-width: 60px;
          margin-inline:5px;
        }
      `}</style>
    </>
  )
}
