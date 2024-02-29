import React from 'react'
import UserCoupon from '@/components/myCoupon/tearStrip'

const CouponPage = () => {
  return (
    <>
      <div className="coupon-container">
        <div className="coupon-content">
          <div className="coupon-content__title">我的優惠卷</div>
          <div className="coupon-content__list">
            {/* 可以使用 map 遍歷渲染 */}
            <div className="coupon-content__item">
              <div className="container">
                <div className="row row-cols-lg-2">
                  <div className="col px-5">
                    <UserCoupon></UserCoupon>
                  </div>
                  <div className="col px-5">
                    <UserCoupon></UserCoupon>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
      <style jsx>{`
        .coupon-container {
          background-color: #f6f5f3;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 50px 60px;
        }
        @media (max-width: 991px) {
          .coupon-container {
            padding: 0 20px;
          }
        }
        .coupon-content {
          display: flex;
          margin-top: 26px;
          width: 100%;
          max-width: 1200px;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .coupon-content {
            max-width: 100%;
          }
        }
        .coupon-content__title {
          border-bottom: 1px solid #eae8e4;
          color: #19110b;
          white-space: nowrap;
          text-transform: uppercase;
          padding: 5px 0 31px;
          font: 700 26px Inter, sans-serif;
        }
        @media (max-width: 991px) {
          .coupon-content__title {
            max-width: 100%;
            white-space: initial;
          }
        }
        .coupon-content__list {
          justify-content: center;
          background-color: #fff;
          display: flex;
          margin-top: 42px;
          flex-direction: column;
        }
        @media (max-width: 991px) {
          .coupon-content__list {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .coupon-content__item {
          background-color: #fff;
        }
        .col {
          display: flex;
          justify-content: center;
        }
        @media (max-width: 991px) {
          .coupon-content__item {
            max-width: 100%;
          }
        }
      `}</style>
    </>
  )
}

export default CouponPage
