import React from 'react'

export default function QuantityButton() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div className="quantity-selector">
          <button className="btn">-</button>
          <div className="my-auto">1</div>
          <button className="btn">+</button>
        </div>
      </div>
      <style jsx>{`
        .quantity-selector {
          justify-content: space-between;
          border-radius: 37.5px;
          border: 0.75px solid var(--notice, #ff0083);
          box-shadow: 3px 3px 3px 0px rgba(255, 255, 255, 0.1) inset,
            -3px -3px 3px 0px rgba(0, 0, 0, 0.1) inset;
          display: flex;
          gap: 20px;
          font-size: 16px;
          color: var(--my-black);
          font-weight: 900;
          white-space: nowrap;
          text-align: center;
          transition: all 0.5s;
          &:hover {
            color: var(--my-white);
            background-color: var(--my-notice);
          }
          & > button {
            font-size: 14px;
          }
        }
        @media (max-width: 991px) {
          .quantity-selector {
            white-space: initial;
          }
        }
      `}</style>
    </>
  )
}
