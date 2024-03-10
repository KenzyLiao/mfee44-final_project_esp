import React, { useState } from 'react'
import CartFlow from '@/components/myCart/cartFlow'
import CheckoutProcessForm from '@/components/myCart/checkoutProcessForm/checkoutProcessForm'
import OrderSummary from '@/components/myCart/orderSummary'
import SmallProductCart from '@/components/myCart/smallProductCart'
import SmallCourseCart from '@/components/myCart/smallCourseCart'
import ShippingRule from '@/components/myCart/shippingRule'

// //勾子context
import { useCart } from '@/hooks/user-cart'
export default function Checkout() {
  const {
    rawTotalPrice,
    totalPrice,
    cartCourse,
    cartGeneral,
    formatPrice,
    selectCoupon,
  } = useCart()

  // 宅配或門市的狀態
  const [selection, setSelection] = useState('')

  const handleChange = (e) => {
    setSelection(e.target.value)
  }

  return (
    <>
      <div className="row">
        {/* 左邊 */}
        <div className="col-lg-7">
          <h2>選擇配送方式</h2>
          <form>
            <div>
              <label>
                <input
                  type="radio"
                  value="宅配"
                  checked={selection === '宅配'}
                  onChange={handleChange}
                />
                宅配
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  value="門市"
                  checked={selection === '門市'}
                  onChange={handleChange}
                />
                門市
              </label>
            </div>
          </form>
          {selection === '宅配' && (
            <div>
              <h3>宅配內容</h3>
              <p>這裡是宅配的相關資訊...</p>
            </div>
          )}
          {selection === '門市' && (
            <div>
              <h3>門市內容</h3>
              <p>這裡是選擇門市後的相關資訊...</p>
            </div>
          )}
          <CheckoutProcessForm />
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
