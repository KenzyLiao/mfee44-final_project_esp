import React, { useEffect, useState } from 'react'
import ProgressBar from '@/components/myCart/progressBar'
import CheckoutProcessForm from '@/components/myCart/checkoutProcessForm/checkoutProcessForm'

import OrderSummary from '@/components/myCart/orderSummary'
import SmallProductCart from '@/components/myCart/smallProductCart'
import SmallCourseCart from '@/components/myCart/smallCourseCart'
import ShippingRule from '@/components/myCart/shippingRule'
import { jwtDecode } from 'jwt-decode'

// //勾子context
import { useCart } from '@/hooks/user-cart'
import { useCheckout } from '@/hooks/use-checkout'

export default function Checkout() {
  const { cartCourse, cartGeneral, formatPrice } = useCart()
  const [token, setToken] = useState('')
  const [user, setUser] = useState(null)

  const {
    formData,
    setFormData,
    countries,
    townships,
    postcodes,
    rawTotalPrice,
    totalPrice,
    selectCoupon,
  } = useCheckout()

  useEffect(() => {
    const storedToken = localStorage.getItem('token')
    // console.log(storedToken)

    if (storedToken) {
      setToken(storedToken)
      // 確保在token有效的情況下才進行解碼
      try {
        const decodedUser = jwtDecode(storedToken)
        setUser(decodedUser)
        // 這裡可以使用decodedUser進行其他操作
      } catch (error) {
        console.error('Token解碼錯誤', error)
        // 處理無效token的情況
      }
    }
  }, []) // 空依賴數組確保只在組件掛載時運行

  return (
    <>
      <ProgressBar
        percentage={75}
        text={'結帳進度'}
        textColor={'var(--my-white)'}
      />
      <div className="row">
        {/* 左邊 */}
        <div className="col-lg-7">
          <CheckoutProcessForm
            countries={countries}
            townships={townships}
            postcodes={postcodes}
            selectCoupon={selectCoupon}
            setFormData={setFormData}
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
              discount_value={selectCoupon.discount_value}
            />
          </div>
          <div className="text-h4 mb-4 ">我的購物車</div>
          <SmallProductCart cartGeneral={cartGeneral} />
          <SmallCourseCart cartCourse={cartCourse} />
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
