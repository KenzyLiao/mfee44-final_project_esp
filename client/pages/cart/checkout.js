import React from 'react'
import CartFlow from '@/components/myCart/cartFlow/cartFlow'
import CheckoutProcessForm from '@/components/myCart/checkoutProcessForm/checkoutProcessForm'
import OrderSummary from '@/components/myCart/orderSummary'
import SmallProductCart from '@/components/myCart/smallProductCart/smallProductCart'
import SmallCourseCart from '@/components/myCart/smallCourseCart/smallCourseCart'

export default function Checkout() {
  return (
    <>
      <CartFlow activeStep={1} />
      <div class="row">
        {/* 左邊 */}
        <div class="col-lg-7">
          <CheckoutProcessForm />
        </div>
        {/* 右邊 */}
        <div class="col-lg-1 "></div>
        <div class="col-lg-4 mt-5">
          <div className="text-h4 mb-4">我的購物車</div>
          <SmallProductCart />
          <SmallCourseCart />
          <div className="mt-5">
            <OrderSummary />
          </div>
          {/* <div className="my-button1 my-3 ">下一步</div> */}
        </div>
      </div>
    </>
  )
}
