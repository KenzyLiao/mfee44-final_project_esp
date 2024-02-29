import React from 'react'

export default function UserCoupon() {
  return (
    <>
      
       
          <div className="coupon-background">
            <img src="/images/myCoupon/coupon_background.png" alt="" />
            <div className="text-container">
              <h3>歡慶鋼筆盛典！</h3>
              <p className="discount m-0">85折優惠！</p>
              <p className="expiration m-0">有效期限：2024.12.31</p>
              <a href="#" className="button">
                領取優惠卷
              </a>
            </div>
          </div>
        
     

      <style jsx>
        {`
          
          
          .coupon-background {
            text-align: center;
            width: 350px;
            height: 200px;
            overflow: hidden;
            display: flex; /* 使用 Flexbox */
            position: relative;
            justify-content: center; /* 水平置中 */
            align-items: center; /* 垂直置中 */
            & img {
              position: absolute;
              width: 100%;
              object-fit: cover;
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
            }
            .button {
              display: inline-block;
              padding: 5px 10px;
              background-color: #e44d26;
              color: #fff;
              text-decoration: none;
              border-radius: 5px;
            }
          }
        `}
      </style>
    </>
  )
}
