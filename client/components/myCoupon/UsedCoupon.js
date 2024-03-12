import React from 'react'
import Link from 'next/link'

export default function UsedCoupon({
  couponKey,
  coupon_name,
  discount,
  limit_time,
  end_time,
}) {
  console.log(couponKey)
  return (
    <>
      <div className="col-xl-4 col-lg-6 col-sm-12 d-flex justify-content-center align-items-center">
        <div className="coupon-background" Key={couponKey}>
          {/* <img src="/images/myCoupon/coupon_background_02.png" alt="" /> */}
          <div className="text-container">
            <h3>
              {/* 歡慶鋼筆盛典！ */}
              {coupon_name}
            </h3>
            <p className="discount m-0">
              {/* 85折優惠！ */}
              {discount}
            </p>
            <p className="expiration m-0">
              {/* 有效期限：2024.12.31 */}
              {limit_time.split('T')[0]}
            </p>
            <p className="expiration m-0">
              {/* 有效期限：2024.12.31 */}
              {end_time.split('T')[0]}
            </p>
            <div href={`/product/list`} className="button">
              已領取
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .coupon-background {
            background: url('/images/myCoupon/coupon_background_02.png')
              repeat-x center center;
            background-size: cover;
            text-align: center;
            width: 70%;
            height: 200px;
            margin: 10px 0;

            display: flex; /* 使用 Flexbox */
            position: relative;
            justify-content: center; /* 水平置中 */
            align-items: center; /* 垂直置中 */
            & img {
              position: absolute;
              width: 100%;
              object-fit: cover;
            }
            &::after {
              content: '';
              display: block;
              background: url('/images/myCoupon/coupon_background_03.png')
                no-repeat center center;
              background-size: contain;
              position: absolute;
              right: -76px;
              width: 100px;
              height: 200px;
              z-index: 999;
            }
            &::before {
              content: '';
              display: block;
              background: url('/images/myCoupon/coupon_background_01.png')
                no-repeat center center;
              background-size: contain;
              position: absolute;
              left: -77px;
              width: 100px;
              height: 200px;
              z-index: 999;
            }
          }
          .text-container {
            position: absolute;
            padding: 10px;
            width: 100%;
            object-fit: cover;

            h1 {
              font-size: 24px;
              color: #333;
              
            }
            h3{
                white-space:nowrap;
              overflow:hidden;
              text-overflow:ellipsis;
            }
            p {
              color: #555;
              margin-bottom: 10px;
            }
            .discount {
              color: #e44d26;
              font-size: 24px;
              font-weight: bold;
              margin-bottom: 10px;
            }
            .expiration {
              color: #777;
              line-height: 16px;
              padding:10px 0
            }
            .button {
              display: inline-block;
              padding: 3px 10px;
              border: 1.5px #e44d26 solid;
              color: #e44d26;
              text-decoration: none;
              border-radius: 5px;
            }
          }
          @media (max-width: 991px) {
            .coupon-background {
              background-size: contain;
            }
          }
          @media (max-width: 500px) {
            .coupon-background {
              background-size: cover;
              
            }
          }
        `}
      </style>
    </>
  )
}
