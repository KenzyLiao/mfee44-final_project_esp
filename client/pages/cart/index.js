import React, { useEffect, useState } from 'react'

import ProductCart from '@/components/myCart/productCart'
import CourseCart from '@/components/myCart/courseCart'
import OrderSummary from '@/components/myCart/orderSummary'
import CartCouppon from '@/components/myCart/cartCoupon'
import ShippingRule from '@/components/myCart/shippingRule'
import ProgressBar from '@/components/myCart/progressBar'

import { useRouter } from 'next/router'

//勾子context
import { useCart } from '@/hooks/user-cart'
import { useCheckout } from '@/hooks/use-checkout'

export default function CartIndex() {
  const {
    // 購物車
    cart,
    cartGeneral,
    increment,
    decrement,
    removeCartItem,
    cartCourse,
    formatPrice,
  } = useCart()

  const {
    totalPrice,
    rawTotalPrice,
    coupons,
    selectedCouponID,
    selectCoupon,
    handleRadioChange,
  } = useCheckout()

  const router = useRouter()

  const handleNextSteap = () => {
    if (cart.length < 1) {
      alert('購物車中沒有任何商品')
      return false
    }
    router.push('/cart/checkout')
  }

  return (
    <>
      <ProgressBar
        percentage={30}
        text={'結帳進度'}
        textColor={'var(--my-white)'}
      />
      <div className="row">
        {/* 左邊 */}
        <div className="col-lg-7">
          <ProductCart
            cartGeneral={cartGeneral}
            increment={increment}
            decrement={decrement}
            removeCartItem={removeCartItem}
          />
          <CourseCart cartCourse={cartCourse} removeCartItem={removeCartItem} />
        </div>
        {/* 右邊 */}
        <div className="col-lg-1 "></div>
        <div className="col-lg-4  mt-5">
          <OrderSummary
            rawTotalPrice={rawTotalPrice}
            totalPrice={totalPrice}
            checkoutPath={'/cart/checkout'}
            formatPrice={formatPrice}
            handleNextSteap={handleNextSteap}
            discount_value={selectCoupon.discount_value}
          />
          <CartCouppon
            coupons={coupons}
            selectedCouponID={selectedCouponID}
            handleRadioChange={handleRadioChange}
          />
          <ShippingRule />

          <div
            onClick={() => {
              handleNextSteap()
            }}
            className="col-lg-8  my-button1 my-5 mx-auto rwd-button"
          >
            下一步
          </div>
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
      `}</style>
    </>
  )
}
