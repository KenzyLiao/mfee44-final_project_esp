import React from 'react'

export default function StoreInfo() {
  return (
    <>
      <div>
        <ul>
          <li>
            <h5>店名</h5>
            <span>地址</span>
          </li>
          <li>
            <h5>店名</h5>
            <span>地址</span>
          </li>
          <li>
            <h5>店名</h5>
            <span>地址</span>
          </li>
          <li>
            <h5>店名</h5>
            <span>地址</span>
          </li>
          <li>
            <h5>店名</h5>
            <span>地址</span>
          </li>
        </ul>
      </div>
      <style jsx>{`
        li {
          list-style-type: none;
          list-style-image: url('placeholder.png');
          border-bottom: 1px solid black;
        }
      `}</style>
    </>
  )
}
