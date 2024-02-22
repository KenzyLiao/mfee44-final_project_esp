import React from 'react'
import Carousel from '@/components/myProduct/productcarousel'
import FavIcon from '@/components/myProduct/heart-icon'
import QuantityButton from '@/components/myProduct/quantitybutton'
import ProductFigure from '@/components/myProduct/productfigure'

export default function Detail() {
  return (
    <>
      <div className="row mt-5 mx-2">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              所有鋼筆
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              萬寶龍鋼筆
            </li>
          </ol>
        </nav>
        <div className="col-sm-7 my-3">
          <div className="position-sticky" style={{ top: '2rem' }}>
            <Carousel />
          </div>
        </div>
        <div className="col-sm-5 my-3">
          <div className="position-sticky" style={{ top: '2rem' }}>
            <h4 className="text-h4">萬寶龍</h4>
            <h1 className="text-h1 py-3">萬寶龍鋼筆</h1>
            <h3 className="text-h3 text-my-notice">NT $4,000</h3>
            <div style={{ marginTop: '5rem' }}>
              <div
                className="d-flex justify-content-between align-items-center m-3"
                style={{ flexWrap: 'wrap' }}
              >
                <QuantityButton />
                <span className="my-3">
                  <FavIcon />
                  <span className="ms-2">加入收藏</span>
                </span>
              </div>
              <button className="btn btn-primary w-100 mb-3 rounded-pill">
                加入購物車
              </button>
              <button className="btn btn-outline-primary w-100 rounded-pill">
                立即購買
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5 mx-2">
        <div className="col-sm-12">
          <div className="product-info my-5">
            <h2>產品介紹</h2>
            <p className="my-text-contents-CH ms-3 my-5">
              萬寶龍大師傑作（大班）經典系列鍍金質鋼筆已成為萬寶龍設計的經典。筆蓋和筆身以黑色珍貴樹脂製作，鑲嵌白色萬寶龍標誌。三個鍍金質圓環壓印萬寶龍字樣，鍍金質筆夾飾有獨立編號，充分彰顯大師傑作（大班）經典系列鋼筆風格雋永的設計。這款鍍金質鋼筆配有活塞轉換器，可選用卡式墨水，手工製作14
              K
              金質筆尖綴以鍍銠鑲飾。為了能展現您的個人風格，萬寶龍為您提供免費雕刻名字或姓名字首服務。
            </p>
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    aria-expanded="false"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    產品資訊
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body px-1">
                    <ul>
                      <li>筆夾:鍍金質筆夾飾有獨立編號</li>
                      <li>筆蓋:黑色珍貴樹脂鑲嵌萬寶龍標誌</li>
                      <li>顏色:黑色</li>
                      <li>尺寸:140 13.7 mm</li>
                      <li>體重:21.73 g</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h3 style={{ margin: '100px auto 50px' }}>其他人還看了</h3>
          <div className="row my-3">
            <div className="col-sm-3">
              <ProductFigure />
            </div>
            <div className="col-sm-3">
              <ProductFigure />
            </div>
            <div className="col-sm-3">
              <ProductFigure />
            </div>
            <div className="col-sm-3">
              <ProductFigure />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
