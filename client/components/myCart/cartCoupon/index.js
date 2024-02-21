import React, { useState } from 'react'

import { HiOutlineTicket } from 'react-icons/hi2'

import { CSSTransition } from 'react-transition-group'

export default function CartCoupon() {
  const [selectedCouponID, setSelectedCouponID] = useState('none')

  const couponsData = [
    {
      CouponID: 'PEN001',
      Description: '鋼筆週 - 所有鋼筆類商品8折',
      ValidFrom: '2024-04-01',
      ValidTo: '2024-04-07',
      MinimumSpend: 50.0,
      DiscountType: '百分比',
      DiscountValue: 20,
      UsageLimit: 200,
      UsedCount: 0,
    },
    {
      CouponID: 'PEN002',
      Description: '購買任何兩支鋼筆送墨水一瓶',
      ValidFrom: '2024-05-01',
      ValidTo: '2024-05-31',
      MinimumSpend: 100.0,
      DiscountType: '贈品',
      DiscountValue: 1,
      UsageLimit: 100,
      UsedCount: 0,
    },
    {
      CouponID: 'PEN003',
      Description: '首次購買鋼筆享受9折優惠',
      ValidFrom: '2024-06-01',
      ValidTo: '2024-06-30',
      MinimumSpend: 0.0,
      DiscountType: '百分比',
      DiscountValue: 10,
      UsageLimit: 300,
      UsedCount: 0,
    },
    {
      CouponID: 'PEN004',
      Description: '高級鋼筆專場 - 滿500減50',
      ValidFrom: '2024-07-01',
      ValidTo: '2024-07-31',
      MinimumSpend: 500.0,
      DiscountType: '固定金額',
      DiscountValue: 50,
      UsageLimit: 150,
      UsedCount: 0,
    },
    {
      CouponID: 'PEN005',
      Description: '鋼筆配件週 - 配件類商品滿100減20',
      ValidFrom: '2024-08-01',
      ValidTo: '2024-08-07',
      MinimumSpend: 100.0,
      DiscountType: '固定金額',
      DiscountValue: 20,
      UsageLimit: 250,
      UsedCount: 0,
    },
  ]

  const handleRadioChange = (event) => {
    setSelectedCouponID(event.target.value)
  }

  return (
    <>
      <div className=" coupon-container">
        <h3 className="text-h3 text-my-black d-flex align-content-center">
          <HiOutlineTicket size="30px" color="#404040" />
          <div className="ms-3">可用優惠券</div>
        </h3>
        <div className="mb-2">
          <div className="text-h6 text-my-black card-header">
            <label>
              <input
                type="radio"
                value="none"
                checked={selectedCouponID === 'none'}
                onChange={handleRadioChange}
                className="me-2"
              />
              不使用優惠券
            </label>
          </div>
        </div>
        {couponsData.map((coupon) => (
          <div key={coupon.CouponID} className=" mb-2 card-header">
            <div className=" text-h6 text-my-black">
              <label>
                <input
                  type="radio"
                  name="coupon"
                  value={coupon.CouponID}
                  checked={selectedCouponID === coupon.CouponID}
                  onChange={handleRadioChange}
                  className="me-2"
                />
                {coupon.Description}
              </label>
            </div>
            <CSSTransition
              in={selectedCouponID === coupon.CouponID}
              timeout={300}
              classNames="zoom"
              unmountOnExit
            >
              <div className="card-body text-h6 text-my-black">
                <div>
                  有效期限：{coupon.ValidFrom} 至 {coupon.ValidTo}
                </div>
                <div>最低消費：NT${coupon.MinimumSpend.toFixed(2)}</div>
              </div>
            </CSSTransition>
          </div>
        ))}
      </div>
      <style jsx>{`
        .card-header input[type='radio'] {
          cursor: pointer;
        }
        .card-header label {
          user-select: none; /* 防止選中文本 */
        }
        .card-body {
          background-color: var(--my-white); /* 給詳情部分一個淺色背景 */
          height: auto;
          padding: 10px;
          border-radius: 10px;
        }
        .coupon-container {
          border-bottom: 1px solid var(--my-white);
          margin-top: 50px;
          padding-bottom: 40px;
        }
      `}</style>
    </>
  )
}
