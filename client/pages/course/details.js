import React from 'react'
import ReactPlayer from 'react-player'
import New from '@/components/course/new'
import Section from '@/components/course/section'
import Accordion from 'react-bootstrap/Accordion'
import {
  BsBookmarkCheckFill,
  BsFillGiftFill,
  BsFillStarFill,
  BsStarHalf,
  BsFillCartFill,
  BsClockFill,
  BsFillPlayCircleFill,
  BsFillPeopleFill,
  BsFillEyeFill,
  BsListOl,
} from 'react-icons/bs'

export default function CoursePage() {
  return (
    <>
      <div className="container">
        {/* 課程介紹影片跟簡介 start */}
        <div className="course_detail d-lg-flex">
          {/* 課程介紹影片 */}
          {/* <video src="https://www.youtube.com/watch?v=LXb3EKWsInQ" controls /> */}
          <div className="video me-lg-4 mb-4 mb-xl-0">
            <ReactPlayer width="100%" controls="true" url="video/01.mp4" />
          </div>
          {/* 課程介紹 */}
          <div className="course_info justify-content-between d-flex flex-column ">
            <div>
              <div className="teacher d-flex align-items-center">
                {/* 老師頭像 */}
                <div className="teacher_img">
                  <img
                    src="https://images.pexels.com/photos/36843/lion-panthera-leo-lioness-animal-world.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="teacher"
                  />
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
                <p className="mb-0 me-1">4.5</p>
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsStarHalf />
              </div>
              <div className="btn-group">
                <a className="mx-3 text-decoration-none border1">
                  <BsBookmarkCheckFill className="mb-1 me-2" />
                  收藏課程
                </a>
                <a className="text-decoration-none border1">
                  <BsFillGiftFill className="mb-1 me-2 " />
                  贈送禮物
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* 課程介紹影片跟簡介 end */}
        {/*  */}

        <div className="row mt-5">
          <main className="col-md-9">
            {/* info */}
            <div className="mb-5">
              <p className="text-h2">關於課程{/*ㄣ*/}</p>
              <div className="course-sub-info">
                <div className="course-sub-info-item d-flex align-items-center">
                  <BsClockFill
                    className="me-1 text-primary"
                    style={{ width: '40px', fontSize: '50px' }}
                  />
                  <div className="info">
                    <div className="label">課程時長</div>
                    <div className="value">2小時50分</div>
                  </div>
                </div>
                <div className="course-sub-info-item d-flex align-items-center">
                  <BsFillPlayCircleFill
                    className="me-1 text-primary"
                    style={{ width: '40px', fontSize: '50px' }}
                  />
                  <div className="info">
                    <div className="label">單元數</div>
                    <div className="value">2章18單元</div>
                  </div>
                </div>
                <div className="course-sub-info-item d-flex align-items-center">
                  <BsFillPeopleFill
                    className="me-1 text-primary"
                    style={{ width: '40px', fontSize: '50px' }}
                  />
                  <div className="info">
                    <div className="label">課程總人數</div>
                    <div className="value">4085位同學</div>
                  </div>
                </div>
                <div className="course-sub-info-item d-flex align-items-center">
                  <BsFillEyeFill
                    className="me-1 text-primary"
                    style={{ width: '40px', fontSize: '50px' }}
                  />
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
                <New
                  date="2024-01-01"
                  title="訊息標題"
                  message="訊息內容，為迎接即將於下週四 1 月 25
                      日起一連四天在南港展覽館 1 館盛大登場的「2024
                      台北國際電玩展」，主辦單位 TCA
                      台北市電腦公會於今日（1/15）特別舉辦展前記者會，聯合傑仕登、Wemade、台灣大哥大、集英社遊戲、光榮特庫摩、madhead、萬代南夢宮娛樂、任天堂等八家主要參展廠商代表聯袂發表展出資訊。"
                />
                <New
                  date="2024-01-01"
                  title="訊息標題"
                  message="訊息內容，為迎接即將於下週四 1 月 25
                      日起一連四天在南港展覽館 1 館盛大登場的「2024
                      台北國際電玩展」，主辦單位 TCA
                      台北市電腦公會於今日（1/15）特別舉辦展前記者會，聯合傑仕登、Wemade、台灣大哥大、集英社遊戲、光榮特庫摩、madhead、萬代南夢宮娛樂、任天堂等八家主要參展廠商代表聯袂發表展出資訊。"
                />
                <New
                  date="2024-01-01"
                  title="訊息標題"
                  message="訊息內容，為迎接即將於下週四 1 月 25
                      日起一連四天在南港展覽館 1 館盛大登場的「2024
                      台北國際電玩展」，主辦單位 TCA
                      台北市電腦公會於今日（1/15）特別舉辦展前記者會，聯合傑仕登、Wemade、台灣大哥大、集英社遊戲、光榮特庫摩、madhead、萬代南夢宮娛樂、任天堂等八家主要參展廠商代表聯袂發表展出資訊。"
                />
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
                  <div className="text-h5 mx-3 text-my-primary">
                    共 18 單元|總時長127分鐘
                  </div>
                </div>
                <div className="text_fold">收起內容</div>
              </div>
              <Accordion defaultActiveKey={['0']} alwaysOpen>
                {Array.from({ length: 3 }).map((_, index) => {
                  return (
                    <Accordion.Item key={index} eventKey={index.toString()}>
                      <Accordion.Header>
                        <BsListOl className="me-1" />
                        章節{index + 1}
                      </Accordion.Header>
                      <Accordion.Body>
                        {Array.from({ length: 5 }).map((_, index) => {
                          return (
                            <Section
                              key={index}
                              secNum={index + 1}
                              secTitle={`小節 ${index + 1}`}
                              secTime="00:00"
                            />
                          )
                        })}
                      </Accordion.Body>
                    </Accordion.Item>
                  )
                })}
              </Accordion>
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
                      <img
                        src="https://images.pexels.com/photos/36843/lion-panthera-leo-lioness-animal-world.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="teacher"
                      />
                    </div>
                    <div className="teacher-info-item-title-info d-flex align-items-center">
                      <p className="text-h3 mb-0 mx-3">陳曉明</p>
                    </div>
                  </div>
                </div>
                <div className="teacher-info-item-content">
                  <p className="text-p">
                    陳曉明，台灣書法家，畢業於國立台北藝術大學美術學系，曾任教於國立台北藝術大學美術學系，現為台北市立美術館館長。
                  </p>
                </div>
              </div>
            </div>
          </main>
          <aside className="col-md-3 mb-5 ">
            <div className="price border1">
              <p className="text-h4">購買課程</p>
              <p className="text-h3">NT$1,200</p>
              <div className="d-flex flex-column flex-xl-row">
                <a className="text-decoration-none buy-btn border1 me-xl-2 mb-2 mb-xl-0">
                  立即購買
                </a>
                <a className="text-decoration-none collect-btn border1 px-2">
                  <BsFillCartFill className="mb-1" /> 加入購物車
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <style jsx>{`
        h1 {
          color: #7c7477;
        }
        .course_info {
          width: 100%;
          padding: 0;
        }
        video {
          width: 100%;
          margin-right: 20px;
        }
        @media (min-width: 992px) {
          .course_info {
            width: 50%;
          }
          .video {
            width: 50%;
          }
        }
        .teacher {
          margin-bottom: 20px;

          .teacher_img {
            margin-right: 10px;

            & img {
              width: 30px;
              height: 30px;
              border-radius: 50%;
            }
          }
        }
        .course_intro {
          margin-top: 10px;
        }

        .btn-group {
          & a {
            border: 0.5px solid $primary;
            padding: 0px 5px;

            cursor: pointer;

            & i {
              margin-right: 5px;
              color: $primary;
            }
          }
        }

        .price {
          padding: 20px 10px;
          border: 1px solid $primary;
          position: sticky;
          top: 120px;
        }

        .buy-btn {
          padding: 5px 20px;
          color: $my-white;
          background-color: $primary;
          border-radius: 20px;
        }

        .collect-btn {
          border: 0.2px solid $primary;
          padding: 5px 10px;
          border-radius: 20px;
        }

        .course-sub-info {
          display: flex;
          @media (max-width: 992px) {
            flex-wrap: wrap;
          }
          .course-sub-info-item {
            display: flex;
            align-items: flex-start;
            margin-right: 30px;

            & i {
              font-size: 40px;
              margin-top: 10px;
              margin-right: 5px;
              color: $primary;
            }
          }
        }

        .news {
          .date {
            margin-right: 10px;
          }

          .date,
          .text_label {
            font-weight: bold;
            font-size: 18px;
          }

          .message {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }

        .text_fold {
          color: $primary;
        }

        .teacher-info {
          & img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
          }
        }
        .border1 {
          border: 1px solid #7c7477;
        }
      `}</style>
    </>
  )
}
