import React from 'react'
import CartFlow from '@/components/myCart/cartFlow'
import OrderSummary from '@/components/myCart/orderSummary'
import SmallProductCart from '@/components/myCart/smallProductCart'
import SmallCourseCart from '@/components/myCart/smallCourseCart'
import OrderConfirmList from '@/components/myCart/orderConfirmList'

export default function Confirmation() {
  return (
    <>
      <CartFlow activeStep={2} />
      <div class="row">
        {/* 左邊 */}
        <div class="col-lg-7">
          <div className="mt-5">
            <OrderConfirmList />
            <div className="back-button col-lg-4 ms-auto mt-5">返回資料修改</div>
          </div>
        </div>
        {/* 右邊 */}
        <div class="col-lg-1 "></div>
        <div class="col-lg-4 mt-5">
          <div className="text-h4 mb-4">我的購物車</div>
          <SmallProductCart />
          <SmallCourseCart />
          <div className="my-5">
            <OrderSummary />
          </div>
          <div className="my-button1 my-3 ">付款</div>
        </div>
      </div>
      <style jsx>{`
        .back-button {
          display: flex;
       
          padding: 8.25px 0px 9.25px 0px;
          justify-content: center;
          align-items: center;
          flex-shrink: 0;
          border-radius: 37.5px;
          border: 1.125px solid var(--my-primary);
          font-size: $h6;
          font-weight: 400;
          color: var(--my-primary);
          cursor: pointer;

          &:hover {
            background-color: var(--my-gray);
            border-radius: 37.5px;
            color: var(--my-white);
          }
        }
      `}</style>
    </>
  )
}
