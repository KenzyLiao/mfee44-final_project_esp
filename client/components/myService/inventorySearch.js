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
        庫存查詢
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
            <ul>
              {/* href 導至"服務據點"service路由並附上參數僅以textsearch=XXX店搜尋，連過去的同時也要發送請求*/}
              <li><a href='http://localhost:3000/service'>XXX店</a><span>庫存尚餘:?</span></li> 
              
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
            width: 25vw;
          }
        }

        .offcanvas-body {
          padding-block: 0px;
        }

        .offcanvas-body ul {
          list-style: none;

          & li {
            font-size:21px;
            border-bottom: 1px dashed black;
            position:relative;
            & span{
              position:absolute;
              top:0;
              right:0;
            }
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
        #a1 {
          color: #ff0083;
        }
      `}</style>
    </>
  )
}
