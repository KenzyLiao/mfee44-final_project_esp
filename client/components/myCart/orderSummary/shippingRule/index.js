import * as React from 'react'
import Link from 'next/link'

export default function ShippingRule(props) {
  return (
    <>
      <div className="rule-container mt-5">
        <Link href="/#" style={{ textDecoration: 'none' }}>
          <div className="rule-body">
            <img
              loading="lazy"
              src="/images/myCart/shipping-1.svg"
              className="img"
            />
            <div className="rule-text text-my-black">
              <div className="text-h3">付款方式</div>
              <div className="text-h6">信用卡或銀行轉帳</div>
            </div>
          </div>
        </Link>
        <Link href="/#" style={{ textDecoration: 'none' }}>
          <div className="rule-body  mt-4 ">
            <img
              loading="lazy"
              src="/images/myCart/shipping-2.svg"
              className="img"
            />
            <div className="rule-text text-my-black">
              <div className="text-h3">訂單配送</div>
              <div className="text-h6">免費送貨&專門店取貨</div>
            </div>
          </div>
        </Link>
        <Link href="/#" style={{ textDecoration: 'none' }}>
          <div className="rule-body  mt-4 text-my-black">
            <img
              loading="lazy"
              src="/images/myCart/shipping-3.svg"
              className="img"
            />
            <div className="rule-text text-my-black">
              <div className="text-h3">退換貨規定</div>
              <div className="text-h6">免費退換貨</div>
            </div>
          </div>
        </Link>
      </div>

      <style jsx>{`
        .rule-container {
          display: flex;
          flex-direction: column;
          white-space: nowrap;
        }
        @media (max-width: 991px) {
          .rule-container {
            margin-top: 40px;
            white-space: initial;
          }
        }

        .rule-body {
          border-bottom: 1px solid var(--my-white);
          display: flex;
          justify-content: space-between;
          gap: 20px;
          color: #000;
          padding: 4px 80px 36px 0;
        }
        @media (max-width: 991px) {
          .rule-body {
            padding-right: 20px;
            margin-top: 40px;
            white-space: initial;
          }
        }
        .img {
          aspect-ratio: 0.97;
          object-fit: auto;
          object-position: center;
          width: 30px;
          align-self: start;
        }
        .rule-text {
          display: flex;
          flex-grow: 1;
          flex-basis: 0%;
          flex-direction: column;
          transition: all 0.5s;
          &:hover {
            color: var(--my-notice);
          }
        }
        @media (max-width: 991px) {
          .rule-text {
            white-space: initial;
          }
        }
      `}</style>
    </>
  )
}
