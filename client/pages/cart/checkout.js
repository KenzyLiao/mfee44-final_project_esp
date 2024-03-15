import React, { useEffect, useState } from 'react'

import CheckoutProcessForm from '@/components/myCart/checkoutProcessForm/checkoutProcessForm'

import OrderSummary from '@/components/myCart/orderSummary'
import SmallProductCart from '@/components/myCart/smallProductCart'
import SmallCourseCart from '@/components/myCart/smallCourseCart'
import ShippingRule from '@/components/myCart/shippingRule'

// //勾子context
import { useCart } from '@/hooks/user-cart'
import { useCheckout } from '@/hooks/use-checkout'

export default function Checkout() {
  const { cartCourse, cartGeneral, formatPrice } = useCart()

  const {
    formData,
    countries,
    townships,
    postcodes,
    rawTotalPrice,
    totalPrice,
    selectCoupon,
  } = useCheckout()

  return (
    <>
      <div className="row">
        {/* 左邊 */}
        <div className="col-lg-7">
          <CheckoutProcessForm
            countries={countries}
            townships={townships}
            postcodes={postcodes}
            selectCoupon={selectCoupon}
          />
        </div>
        {/* 右邊 */}
        <div className="col-lg-1 "></div>
        <div className="col-lg-4 mt-5">
          <div className=" mb-5">
            <OrderSummary
              boolean={false}
              totalPrice={totalPrice}
              rawTotalPrice={rawTotalPrice}
              formatPrice={formatPrice}
              shippingFee={formData.shippingFee}
            />
          </div>
          <div className="text-h4 mb-4 ">我的購物車</div>
          <SmallProductCart
            cartGeneral={cartGeneral}
            formatPrice={formatPrice}
          />
          <SmallCourseCart cartCourse={cartCourse} formatPrice={formatPrice} />
          <div className="my-5">
            <ShippingRule />
          </div>
          {/* <div className="my-button1 my-3 ">下一步</div> */}
        </div>
      </div>
      <style jsx>{`
        .OrderSummary-container {
          position: sticky;
          top: 20%;
          left: 50%;
        }
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
      `}</style>
    </>
  )
}
