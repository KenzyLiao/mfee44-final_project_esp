import React from 'react'
import {
  MdLocalShipping,
  MdPerson,
  MdReceiptLong,
  MdOutlinePayments,
} from 'react-icons/md'

import { HiOutlineTicket } from 'react-icons/hi2'

export default function OrderConfirmList() {
  return (
    <div className="container my-4">
      <div className="card shadow-sm mb-4 border-0 rounded-lg">
        <div className="card-header bg-primary text-my-white">
          <h4 className="mb-0 text-h4 text-my-white d-flex  align-items-center">
            <MdPerson className="me-2" size="24px" />
            收件人資料
          </h4>
        </div>
        <ul className="list-group">
          <li className="list-group-item border-0 text-h5 text-my-balck">
            <span className="">姓名：</span>
            <span className="firstname ">王</span>{' '}
            <span className="lastname ">小明</span>
          </li>
          <li className="list-group-item border-0 text-h5 text-my-balck ">
            <span>電子郵件：</span>
            <span className="email">test123@mail.com</span>
          </li>
          <li className="list-group-item border-0 text-h5 text-my-balck">
            <span>手機號碼：</span>
            <span className="mobile">0987654321</span>
          </li>
        </ul>
      </div>

      <div className="card shadow-sm mb-4 border-0 rounded-lg">
        <div className="card-header bg-secondary text-my-white">
          <h4 className="mb-0 text-h4 text-my-white d-flex align-items-center">
            <MdLocalShipping className="me-2" size="24px" />
            運送地址詳細資訊
          </h4>
        </div>
        <ul className="list-group ">
          <li className="list-group-item border-0 text-h5 text-my-balck">
            <span>城市：</span>
            <span className="country">桃園市</span>
          </li>
          <li className="list-group-item border-0 text-h5 text-my-balck">
            <span>區域：</span>
            <span className="township">中壢區</span>
          </li>
          <li className="list-group-item border-0 text-h5 text-my-balck">
            <span>地址：</span>
            <span className="address">新生路二段421號</span>
          </li>
        </ul>
      </div>

      <div className="card shadow-sm mb-4 border-0 rounded-lg">
        <div className="card-header bg-primary text-my-white ">
          <h4 className="mb-0 text-h4 text-my-white d-flex align-items-center">
            <HiOutlineTicket className="me-2" size="24px" />
            優惠卷詳細資訊
          </h4>
        </div>
        <div className="card-body">
          <div className="card-text text-h5 text-my-balck">
            <span>優惠卷名稱：</span>
            <span className="coupon-name">折抵運費888</span>
          </div>
        </div>
      </div>

      <div className="card shadow-sm mb-4 border-0 rounded-lg">
        <div className="card-header bg-secondary text-my-white">
          <h4 className="mb-0 text-h4 text-my-white d-flex align-items-center">
            <MdReceiptLong className="me-2" size="24px" />
            電子發票詳細資訊
          </h4>
        </div>
        <div className="card-body">
          <div className="card-text text-h5 text-my-balck">
            <span>發票類型-</span>
            <span className="invoiceType">手機條碼載具：</span>
            <span className="mobileBarcode">/545142S</span>
          </div>
        </div>
      </div>

      <div className="card shadow-sm mb-4 border-0 rounded-lg">
        <div className="card-header bg-primary text-my-white">
          <h4 className="mb-0 text-h4 text-my-white d-flex align-items-center">
            <MdOutlinePayments className="me-2" size="24px" />
            支付方式詳細資訊
          </h4>
        </div>
        <div className="card-body">
          <div className="card-text text-h5 text-my-balck">
            <span>支付方式：</span>
            <span className="payType ">綠界付款</span>
          </div>
        </div>
      </div>
      <style jsx>{`
        /* CustomStyles.css */

        .card {
          transition: transform 0.3s ease-in-out;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .container > div {
          border-radius: 10px;
        }
        .container ul {
          border-radius: 10px;
        }
      `}</style>
    </div>
  )
}
