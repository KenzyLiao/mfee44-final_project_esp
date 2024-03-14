import React from 'react'

export default function InventorySearch() {
  return (
    <>
      <a
        id="a1"
        data-bs-toggle="offcanvas"
        href="#offcanvasExample"
        role="button"
        aria-controls="offcanvasExample"
      >
        分店庫存查詢
      </a>
      <div className="container">
        <div
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header row me-2">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body row">
            {/* 設計200*200 */}
            <div className="img-div col-sm-6 col-12 mx-auto">
              <img src="/images/myService/n02.jpg" alt="" />
            </div>
            <div className="ps-4 col-sm-6 flex-grow-1">
              <h3>來自資料表的品名</h3>
              <div className="mb-1">品牌:來自資料表的品牌</div>
              <div className="mb-1">價錢:來自資料表的價錢</div>
              <div className="mb-1">顏色:來自資料表的顏色</div>
              <div className="mb-1">筆尖:來自資料表的筆尖</div>
              <div className="mb-1">
                <i className="fa-regular fa-heart" />
              </div>
            </div>
          </div>
          <div className="offcanvas-body row my-1 product-describe">
            <h5 className="m-0">商品敘述</h5>
            <p>
            (來自資料表的商品敘述)
            </p>
          </div>
          <div className="offcanvas-body row mt-2">
            <ul>
              <li className="d-flex justify-content-between">
                <div>
                  <a>
                    <i className="fa-solid fa-location-dot" />
                  </a>
                  來自資料表(stock)的分店店名
                </div>
                <div>
                  來自資料表(stock)的庫存狀態
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 767.98px) {
          .offcanvas.show {
            width: 100%;
          }
        }

        @media (min-width: 768px) {
          .offcanvas {
            width: 50vw;
          }
        }

        .img-div {
          width: 30%;
          height: auto;
          overflow: hidden;

          & img {
            width: 100%;
            height: auto;
          }
        }

        .offcanvas-body {
          padding-block: 0px;
        }

        .offcanvas-body ul {
          list-style: none;

          & li {
            border-bottom: 1px solid black;
          }
        }

        @media screen and (max-width: 391px) {
          .img-div {
            width: 70%;
            height: auto;
            overflow: hidden;
            margin-bottom: 5px;

            & img {
              width: 100%;
              height: auto;
            }
          }

          .product-describe {
            display: none;
          }
        }
        #a1{
          color:#ff0083
        }
      `}</style>
    </>
  )
}
