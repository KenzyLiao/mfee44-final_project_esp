import React from 'react'
import CartFlow from '@/components/myCart/cartFlow'
import OrderSummary from '@/components/myCart/orderSummary'
import SmallProductCart from '@/components/myCart/smallProductCart'
import SmallCourseCart from '@/components/myCart/smallCourseCart'
import OrderConfirmList from '@/components/myCart/orderConfirmList'
import ShippingRule from '@/components/myCart/shippingRule'

// //勾子context
import { useCart } from '@/hooks/user-cart'

export default function Confirmation() {
  const { rawTotalPrice, totalPrice, cartCourse, cartGeneral, formatPrice } =
    useCart()
  return (
    <>
      <div className="row">
        {/* 左邊 */}
        <div className="col-lg-7">
          <div className="mt-5">
            <OrderConfirmList />
            <div className="back-button col-lg-4 ms-auto mt-5">
              返回資料修改
            </div>
          </div>
        </div>
        {/* 右邊 */}
        <div className="col-lg-1 "></div>
        <div className="col-lg-4 mt-5">
          <div className="OrderSummary-container mb-5">
            <OrderSummary
              text="付款"
              boolean={true}
              totalPrice={totalPrice}
              rawTotalPrice={rawTotalPrice}
              formatPrice={formatPrice}
            />
          </div>
          <div className="text-h4 mb-4">我的購物車</div>
          <SmallProductCart
            cartGeneral={cartGeneral}
            formatPrice={formatPrice}
          />
          <SmallCourseCart cartCourse={cartCourse} formatPrice={formatPrice} />
          <div className="my-5">
            <ShippingRule />
          </div>
          <div className="my-button1 my-3 rwd-button">付款</div>
        </div>
      </div>
      <style jsx>{`
        .rwd-button {
          display: none;
        }
        @media (max-width: 991px) {
          .OrderSummary-container {
            position: static;
            top: 0&;
            left: 0;
          }
          .rwd-button {
            display: flex;
          }
        }
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
