import React from 'react'
import CartFlow from '@/components/myCart/cartFlow'
import ProductCart from '@/components/myCart/productCart'
import CourseCart from '@/components/myCart/courseCart'
import OrderSummary from '@/components/myCart/orderSummary'
import CartCouppon from '@/components/myCart/cartCoupon'
import ShippingRule from '@/components/myCart/shippingRule'

export default function CartIndex() {
  return (
    <>
      <CartFlow activeStep={0} />
      <div class="row">
        {/* 左邊 */}
        <div class="col-lg-7">
          <ProductCart />
          <CourseCart />
        </div>
        {/* 右邊 */}
        <div class="col-lg-1 "></div>
        <div class="col-lg-4  mt-5">
          <OrderSummary />
          <CartCouppon />
          <ShippingRule />
          <div className="col-lg-8  my-button1 my-5 mx-auto  ">下一步</div>
        </div>
      </div>
    </>
  )
}
