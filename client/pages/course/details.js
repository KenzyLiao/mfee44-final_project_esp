import React from 'react'
import CardGroup from '@/components/course/card-group.js'
import FilterBar from '@/components/course/filter-bar'
// import '@/styles/details.scss'

export default function CoursePage() {

  return (
    <>
      <div className="container">
        {/* 課程介紹影片跟簡介 start */}
        <div className="course_detail d-flex">
          {/* 課程介紹影片 */}
          <video src="/data/course/video/pexels_videos_1926295 (1080p).mp4" controls />
          {/* 課程介紹 */}
          <div className="course_info justify-content-between d-flex flex-column">
            <div>
              <div className="teacher d-flex align-items-center">
                {/* 老師頭像 */}
                <div className="teacher_img">
                  <img src="https://images.pexels.com/photos/36843/lion-panthera-leo-lioness-animal-world.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="teacher" />
                </div>
                {/* 老師名字 */}
                <div className="teacher_info">
                  <p className="text-h5 mb-0">陳曉明</p>
                </div>
              </div>
              {/* 課程介紹 */}
              <div className="course_intro">
                <p className="text-h3">現代書寫: 探索當代風格的手寫字藝術</p>
                <p className="text-p">
                  引領您走進創新手寫世界的課程，結合傳統技法與現代風格，啟發您創造獨特、現代的書寫藝術。在這個課程中，您將學習到豐富的字型設計、色彩運用、構圖技巧，並透過實作專案深化對當代書寫的理解。挑戰傳統界線，讓您的字藝展現個性與時尚。
                </p>
              </div>
            </div>
            {/* 星、按鈕 */}
            <div className="d-flex justify-content-between">
              <div className="rank d-flex align-items-center">
                <p className="m-0">4.8</p>
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
              </div>
              <div className="btn-group">
                <a className="mx-3 text-decoration-none"><i className="fa-solid fa-bookmark" />收藏課程</a>
                <a className="text-decoration-none"><i className="fa-solid fa-gift" />贈送禮物</a>
              </div>
            </div>
          </div>
        </div>
        {/* 課程介紹影片跟簡介 end */}
        {/*  */}
        <div className="row mt-5">
          <main className="col-md-9">
            {/* info */}
            <div className=" mb-5">
              <p className="text-h2">關於課程{/*ㄣ*/}
              </p><div className="course-sub-info">
                <div className="course-sub-info-item">
                  <i className="fa-solid fa-clock" />
                  <div className="info">
                    <div className="label">課程時長</div>
                    <div className="value">2小時50分</div>
                  </div>
                </div>
                <div className="course-sub-info-item">
                  <i className="fa-solid fa-circle-play" />
                  <div className="info">
                    <div className="label">單元數</div>
                    <div className="value">2章18單元</div>
                  </div>
                </div>
                <div className="course-sub-info-item">
                  <i className="fa-solid fa-users" />
                  <div className="info">
                    <div className="label">課程總人數</div>
                    <div className="value">4085位同學</div>
                  </div>
                </div>
                <div className="course-sub-info-item">
                  <i className="fa-solid fa-eye" />
                  <div className="info">
                    <div className="label">觀看次數</div>
                    <div className="value">不限觀看次數</div>
                  </div>
                </div>
              </div>
            </div>
            {/* info end */}
            {/* news */}
            <div className="news mb-5">
              <div className="d-flex justify-content-between mb-3">
                <div className="text-h2">最新消息</div>
                <div className="text_fold">收起消息</div>
              </div>
              <div className>
                <article className="new mb-3">
                  <div className>
                    <div className="d-flex">
                      <div className="date ">2024-01-01</div>
                      <div className="text_label">訊息標題</div>
                    </div>
                    <p className="message">訊息內容，為迎接即將於下週四 1 月 25 日起一連四天在南港展覽館 1 館盛大登場的「2024 台北國際電玩展」，主辦單位
                      TCA 台北市電腦公會於今日（1/15）特別舉辦展前記者會，聯合傑仕登、Wemade、台灣大哥大、集英社遊戲、光榮特庫摩、madhead、萬代南夢宮娛樂、任天堂等八家主要參展廠商代表聯袂發表展出資訊。
                    </p>
                  </div>
                </article>
                <article className="new mb-3">
                  <div className>
                    <div className="d-flex">
                      <div className="date ">2024-01-01</div>
                      <div className="text_label">訊息標題</div>
                    </div>
                    <p className="message">訊息內容，為迎接即將於下週四 1 月 25 日起一連四天在南港展覽館 1 館盛大登場的「2024 台北國際電玩展」，主辦單位
                      TCA 台北市電腦公會於今日（1/15）特別舉辦展前記者會，聯合傑仕登、Wemade、台灣大哥大、集英社遊戲、光榮特庫摩、madhead、萬代南夢宮娛樂、任天堂等八家主要參展廠商代表聯袂發表展出資訊。
                    </p>
                  </div>
                </article>
                <article className="new mb-3">
                  <div className>
                    <div className="d-flex">
                      <div className="date ">2024-01-01</div>
                      <div className="text_label">訊息標題</div>
                    </div>
                    <p className="message">訊息內容，為迎接即將於下週四 1 月 25 日起一連四天在南港展覽館 1 館盛大登場的「2024 台北國際電玩展」，主辦單位
                      TCA 台北市電腦公會於今日（1/15）特別舉辦展前記者會，聯合傑仕登、Wemade、台灣大哥大、集英社遊戲、光榮特庫摩、madhead、萬代南夢宮娛樂、任天堂等八家主要參展廠商代表聯袂發表展出資訊。
                    </p>
                  </div>
                </article>
              </div>
            </div>
            {/* news end */}
            {/* course content */}
            <div className="course_content mb-5">
              <div className="d-flex justify-content-between mb-3">
                <div className="text-h2">課程內容</div>
                <div className="text_fold">收起內容</div>
              </div>
              <div className="course_content_item">
                <div className="course_content_item_title">
                  <div className="text-h3">第一章: 書寫基礎</div>
                  <div className="text-h5">共 5 單元</div>
                </div>
                <div className="course_content_item_content">
                  <div className="course_content_item_content_item">
                    <div className="text-h4">1.1 書寫基礎</div>
                    <div className>課程內容說明</div>
                  </div>
                  <div className="course_content_item_content_item">
                    <div className="text-h4">1.2 書寫基礎</div>
                    <div className>課程內容說明</div>
                  </div>
                  <div className="course_content_item_content_item">
                    <div className="text-h4">1.3 書寫基礎</div>
                    <div className>課程內容說明</div>
                  </div>
                  <div className="course_content_item_content_item">
                    <div className="text-h4">1.4 書寫基礎</div>
                    <div className>課程內容說明</div>
                  </div>
                  <div className="course_content_item_content_item">
                    <div className="text-h4">1.5 書寫基礎</div>
                    <div className>課程內容說明</div>
                  </div>
                </div>
              </div>
              <div className="course_content_item">
                <div className="course_content_item_title">
                  <div className="text-h3">第二章: 書寫進階</div>
                  <div className="text-h5">共 5 單元</div>
                </div>
              </div>
            </div>
            {/* course content end*/}
            {/* unit overview */}
            <div className="unit-overview mb-5">
              <div className="d-flex justify-content-between mb-3">
                <div className="d-flex">
                  <div className="text-h2">單元一覽</div>
                  <div className="text-h5 mx-3 text-my-primary">共 18 單元|總時長127分鐘</div>
                </div>
                <div className="text_fold">收起內容</div>
              </div>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      <p className="text-h3 m-0">單元一</p>
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <div className="d-flex justify-content-between">
                        <div className="d-flex">
                          <p className="mx-2">01</p>
                          <p>小節1</p>
                        </div>
                        <p>01:00</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div className="d-flex">
                          <p className="mx-2">02</p>
                          <p>小節2</p>
                        </div>
                        <p>01:10</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div className="d-flex">
                          <p className="mx-2">03</p>
                          <p>小節3</p>
                        </div>
                        <p>01:20</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div className="d-flex">
                          <p className="mx-2">04</p>
                          <p>小節4</p>
                        </div>
                        <p>01:30</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                      <p className="text-h3 m-0">單元二</p>
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <div className="d-flex justify-content-between">
                        <div className="d-flex">
                          <p className="mx-2">01</p>
                          <p>小節1</p>
                        </div>
                        <p>01:00</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div className="d-flex">
                          <p className="mx-2">02</p>
                          <p>小節2</p>
                        </div>
                        <p>01:10</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div className="d-flex">
                          <p className="mx-2">03</p>
                          <p>小節3</p>
                        </div>
                        <p>01:20</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div className="d-flex">
                          <p className="mx-2">04</p>
                          <p>小節4</p>
                        </div>
                        <p>01:30</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* unit overview end*/}
            {/* teacher */}
            <div className="teacher-info">
              <div className="d-flex justify-content-between mb-4">
                <div className="text-h2">關於講師</div>
              </div>
              <div className="teacher-info-item">
                <div className="teacher-info-item-title">
                  <div className="d-flex">
                    <div className="teacher-info-item-title-img">
                      <img src="https://images.pexels.com/photos/36843/lion-panthera-leo-lioness-animal-world.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="teacher" />
                    </div>
                    <div className="teacher-info-item-title-info d-flex align-items-center">
                      <p className="text-h3 mb-0 mx-3">陳曉明</p>
                    </div>
                  </div>
                </div>
                <div className="teacher-info-item-content">
                  <p className="text-p">陳曉明，台灣書法家，畢業於國立台北藝術大學美術學系，曾任教於國立台北藝術大學美術學系，現為台北市立美術館館長。</p>
                </div>
              </div>
            </div></main>
          <aside className="col-md-3">
            <div className="price">
              <p className="text-h4">購買課程</p>
              <p className="text-h3">NT$1,200</p>
              <div className>
                <a href className="text-decoration-none buy-btn">立即購買</a>
                <a href className="collect-btn"><i className="fa-solid fa-cart-shopping" /></a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>)
}