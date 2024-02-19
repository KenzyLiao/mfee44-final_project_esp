import * as React from 'react'

import {
  IoIosInformationCircleOutline,
  IoIosCloseCircleOutline,
} from 'react-icons/io'

export default function CartItemCard(props) {
  return (
    <>
      <div className="card mb-4">
        <div className="card-body">
          <div className="card-image-container">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3756b152d5542ff9c0cdab42853d4985d27d3a76202f6a15edb7c1043febec84?apiKey=549d2602ce5843b4bd5df38129685e36&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3756b152d5542ff9c0cdab42853d4985d27d3a76202f6a15edb7c1043febec84?apiKey=549d2602ce5843b4bd5df38129685e36&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3756b152d5542ff9c0cdab42853d4985d27d3a76202f6a15edb7c1043febec84?apiKey=549d2602ce5843b4bd5df38129685e36&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3756b152d5542ff9c0cdab42853d4985d27d3a76202f6a15edb7c1043febec84?apiKey=549d2602ce5843b4bd5df38129685e36&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3756b152d5542ff9c0cdab42853d4985d27d3a76202f6a15edb7c1043febec84?apiKey=549d2602ce5843b4bd5df38129685e36&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3756b152d5542ff9c0cdab42853d4985d27d3a76202f6a15edb7c1043febec84?apiKey=549d2602ce5843b4bd5df38129685e36&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3756b152d5542ff9c0cdab42853d4985d27d3a76202f6a15edb7c1043febec84?apiKey=549d2602ce5843b4bd5df38129685e36&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3756b152d5542ff9c0cdab42853d4985d27d3a76202f6a15edb7c1043febec84?apiKey=549d2602ce5843b4bd5df38129685e36&"
              className="img"
            />
          </div>
          <div className="column-content">
            <div className="product-name">Visvim鋼筆</div>
            <div className="card-line" />
            <ul className="product-detail">
              <li className="d-flex justify-content-between">
                <div className="label text-h5">品牌：</div>
                <div className="value text-h6 my-auto ">visvim</div>
              </li>
              <li className="d-flex justify-content-between">
                <div className="label text-h5">顏色：</div>
                <div className="value text-h6 my-auto">黑色</div>
              </li>
              <li className="d-flex justify-content-between">
                <div className="label text-h5">筆尖：</div>
                <div className="value text-h6 my-auto">ＸＤ</div>
              </li>
            </ul>
            <div className="product-actions">
              <div className="d-flex justify-content-between align-items-center">
                <div className="quantity-selector">
                  <button className="btn">-</button>
                  <div className="my-auto">1</div>
                  <button className="btn">+</button>
                </div>
                <div className="product-price text-h5 text-my-notice">
                  ＮＴ＄88,888
                </div>
              </div>
              <div className="product-button d-flex justify-content-between ">
                <button className="btn text-h5 text-my-black d-flex align-items-center">
                  <IoIosInformationCircleOutline size="18px" />
                  <span className="ms-1">瀏覽詳情</span>
                </button>
                <button className="btn text-h5 text-my-black d-flex align-items-center">
                  <IoIosCloseCircleOutline size="18px" />
                  <span className="ms-1">刪除</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .card {
          box-shadow: 1px 1px 6.7px 0px rgba(0, 0, 0, 0.35);
          background-color: var(--white-second, #fff);
          max-width: 723px;
          height: auto;
           {
            /* padding: 10px; */
          }
        }
        .card-body {
          gap: 20px;
          display: flex;
        }

        @media (max-width: 991px) {
          .card-body {
            flex-direction: column;
            align-items: stretch;
            gap: 20px;
          }
        }
        .card-image-container {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 50%;
        }

        @media (max-width: 991px) {
          .card-image-container {
            width: 100%;
          }
        }
        .img {
          aspect-ratio: 1;
          object-fit: cover;
          width: 100%;
          flex-grow: 1;
        }

        .column-content {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 50%;
          padding: 5px 0;
          white-space: nowrap;
        }
        @media (max-width: 991px) {
          .column-content {
            width: 100%;
            margin-top: 20px;
            white-space: initial;
          }
        }

        .product-name {
          color: var(--my-black);
          text-overflow: ellipsis;
          align-self: start;
          font: 900 16px Noto Serif TC, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .card-line {
          background-color: var(--my-gray);
          margin-top: 10px;
          height: 1px;
        }
        .product-detail {
          padding: 0;
          margin: 0;
          border-radius: 10px;
          margin-block: 10px;
          padding: 10px 10px;
          height: 160px;
          background-color: var(--my-white);
        }
        @media (max-width: 991px) {
          .product-detail {
            white-space: initial;
          }
        }

        .label {
          font-feature-settings: 'clig' off, 'liga' off;
          font-family: Noto Serif TC, -apple-system, Roboto, Helvetica,
            sans-serif;
          padding-bottom: 13px;
        }

        .value {
          font-family: Noto Serif TC, -apple-system, Roboto, Helvetica,
            sans-serif;
          align-self: start;
          padding-bottom: 13px;
        }

        .product-actions {
          display: flex;
          flex-direction: column;
        }
         {
          /* @media (max-width: 991px) {
          .product-actions {
            white-space: initial;
          }
        } */
        }

        .quantity-selector {
          justify-content: space-between;
          border-radius: 37.5px;
          border: 0.75px solid var(--notice, #ff0083);
          box-shadow: 3px 3px 3px 0px rgba(255, 255, 255, 0.1) inset,
            -3px -3px 3px 0px rgba(0, 0, 0, 0.1) inset;
          display: flex;
          gap: 20px;
          font-size: 16px;
          color: var(--my-black);
          font-weight: 900;
          white-space: nowrap;
          text-align: center;
          transition: all 0.5s;
          &:hover {
            color: var(--my-white);
            background-color: var(--my-notice);
          }
          & > button {
            font-size: 14px;
          }
        }
        @media (max-width: 991px) {
          .quantity-selector {
            white-space: initial;
          }
        }

        .product-button {
          margin-top: 25px;
          & button {
            transition: all 0.5s;

            &:hover {
              border-bottom: 1px solid black;
            }
          }
        }
      `}</style>
    </>
  )
}
