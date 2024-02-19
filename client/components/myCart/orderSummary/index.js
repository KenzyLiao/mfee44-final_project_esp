import React from 'react'
import ShippingRule from './shippingRule'

export default function OrderSummary() {
  return (
    <>
      <div className="order-container my-auto ">
        <div className="d-flex justify-content-between my-2 text-my-black">
          <div className="text-h5">小計</div>
          <div className="text-h6">NT$88,888</div>
        </div>
        <div className=" d-flex justify-content-between my-2 text-my-black">
          <div className="text-h5">運費</div>
          <div className="text-h6">NT$888</div>
        </div>
        <div className="d-flex justify-content-between my-2 text-my-black">
          <div className="text-h5">優惠折扣</div>
          <div className="text-h6 text-my-notice">-NT$888</div>
        </div>
        <div className="d-flex justify-content-between mt-4 text-my-black">
          <div className="text-h5">總額</div>
          <div className="text-h6">NT$88,888</div>
        </div>
      </div>
      <ShippingRule />
      <style jsx>{`
        .order-container {
          background-color: var(--my-white);
          padding: 10px;
          border-radius: 10px;
        }
      `}</style>
    </>
  )
}
