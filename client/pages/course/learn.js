import React from 'react'
import ReactPlayer from 'react-player'
import Accordion from 'react-bootstrap/Accordion'
import Section from '@/components/course/section'
import New from '@/components/course/new'
import {
  BsListOl,
  BsClockFill,
  BsFillPlayCircleFill,
  BsFillPeopleFill,
  BsFillEyeFill,
} from 'react-icons/bs'

export default function LearnPage() {
  const courseTitle = '現代書寫: 探索當代風格的手寫字藝術'
  return (
    <>
      <div className="container">
        <h1 className="text-h1 d-flex justify-content-center mb-5">
          {courseTitle}
        </h1>
        <div className="row">
          <div className="video col-6">
            <ReactPlayer width="100%" controls="true" url="video/01.mp4" />
          </div>
          <div className="scrollable col-6">
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
        </div>
        <div>
          {/* info */}
          <div className="mb-5">
            <p className="text-h2">關於課程</p>
            <div className="course-sub-info d-flex">
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
        </div>
      </div>

      <style jsx>{`
        .scrollable {
          max-height: 350px;
          overflow: auto;
        }
        .teacher-info {
          & img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
          }
        }
      `}</style>
    </>
  )
}
