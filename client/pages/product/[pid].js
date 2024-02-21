import React from 'react'
import Carousel from '@/components/myProduct/carousel'
import FavIcon from '@/components/myProduct/heart-icon'
import QuantityButton from '@/components/myProduct/quantitybutton'

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
          </ol>
        </nav>
        <div className="col-sm-7">
          <div className="position-sticky" style={{ top: '2rem' }}>
            <Carousel />
          </div>
        </div>
        <div className="col-sm-5">
          <h4 className="text-h4">萬寶龍</h4>
          <h1 className="text-h1 py-3">萬寶龍鋼筆</h1>
          <h3 className="text-h3 text-my-notice">NT $4,000</h3>
          <div style={{ marginTop: '230px' }}>
            <div className="d-flex justify-content-between align-items-center m-3">
              <QuantityButton />
              <span>
                <FavIcon />
                加入收藏
              </span>
            </div>

            <button className="btn btn-primary w-100 mb-3">加入購物車</button>
            <button className="btn btn-outline-primary w-100">立即購買</button>
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
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    評價(370){'  '}
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body px-1">
                    <div className="commet">
                      <div className="rating">
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                        <span className="star">&#9733;</span>
                      </div>
                      <p>great shoes overall Ella579458843 - 2023年6月19日</p>
                      <p>
                        overall one of my favorite shoes at the moment. go with
                        any of my outfits, i can wear sweatpants with them or to
                        a nice dinner with a dress. the only “problem” i have
                        with them is that they’re difficult to break into even
                        if you half size up, it took me a while to break into
                        them. but overall i recommend these shoes if you just
                        want some great shoes for any occasion.... 更多
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h3 style={{ margin: '100px auto 50px' }}>其他人還看了</h3>
          <div className="row my-3">
            <div className="col-sm-3">
              <div className="card mx-2 border-0" style={{ width: '100%' }}>
                <img
                  src="/images/product/list/p1-thumb.webp"
                  className="card-img-top"
                  alt="Product 1"
                />
                <div className="card-body no-space-x">
                  <p className="card-text note-text">萬寶龍</p>
                  <p className="card-text h5">萬寶龍鋼筆</p>
                  <span className="text-my-notice">$1,990</span>
                  <div style={{ position: 'absolute', top: '3%', right: '5%' }}>
                    <FavIcon />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card mx-2 border-0" style={{ width: '100%' }}>
                <img
                  src="/images/product/list/p1-thumb.webp"
                  className="card-img-top"
                  alt="Product 2"
                />
                <div className="card-body no-space-x">
                  <p className="card-text note-text">萬寶龍</p>
                  <p className="card-text h5">萬寶龍鋼筆</p>
                  <span className="text-my-notice">$1,990</span>
                  <div style={{ position: 'absolute', top: '3%', right: '5%' }}>
                    <FavIcon />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card mx-2 border-0" style={{ width: '100%' }}>
                <img
                  src="/images/product/list/p1-thumb.webp"
                  className="card-img-top"
                  alt="Product 3"
                />
                <div className="card-body no-space-x">
                  <p className="card-text note-text">萬寶龍</p>
                  <p className="card-text h5">萬寶龍鋼筆</p>
                  <span className="text-my-notice">$1,990</span>
                  <div style={{ position: 'absolute', top: '3%', right: '5%' }}>
                    <FavIcon />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card mx-2 border-0" style={{ width: '100%' }}>
                <img
                  src="/images/product/list/p1-thumb.webp"
                  className="card-img-top"
                  alt="Product 4"
                />
                <div className="card-body no-space-x">
                  <p className="card-text note-text">萬寶龍</p>
                  <p className="card-text h5">萬寶龍鋼筆</p>
                  <span className="text-my-notice">$1,990</span>
                  <div style={{ position: 'absolute', top: '3%', right: '5%' }}>
                    <FavIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
