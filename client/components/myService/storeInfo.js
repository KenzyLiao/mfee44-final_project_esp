import React, { useState } from 'react'
import { CiShop } from 'react-icons/ci'
import { FaInfoCircle } from 'react-icons/fa'
import { RiArrowGoBackFill } from 'react-icons/ri'
import { FaBookmark } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { FaPhone } from 'react-icons/fa6'
import { IoTime } from 'react-icons/io5'

export default function StoreInfo() {
  const [isHidden, setIsHidden] = useState(false)
  const handleAClick = () => {
    setIsHidden(true)
  }
  // 2/29要map出資料
  return (
    <>
      <div>
        {isHidden ? (
          <div className="store-detail">
            <div className="go-back text-center">
              <a href="" className="text-my-notice">
                <RiArrowGoBackFill />
                返回列表
              </a>
            </div>
            <div className="store-img-div mx-auto mb-3">
              <img src="images/myService/teststoreimg.jpg" alt="" />
            </div>
            <div>
              <ul>
                <li>
                  <FaBookmark />
                  店名:台北士林店
                </li>
                <li>
                  <FaLocationDot />
                  地址:台北市士林區中正路325號
                </li>
                <li>
                  <FaPhone />
                  電話:02-25876171
                </li>
                <li>
                  <IoTime />
                  營業時間:09:00~18:00
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <ul className="list-ul">
            <li>
              <h5 className="d-flex justify-content-between">
                <span className="store-icon">
                  <CiShop />
                  台北士林店
                </span>
                <span className="info-icon">
                  <FaInfoCircle onClick={handleAClick} />
                </span>
              </h5>
              <span>台北市士林區中正路325號</span>
            </li>
          </ul>
        )}
      </div>
      <style jsx>{`
        @media screen and (max-width: 391px) {
          .list-ul {
            padding:0;
          }
        }
        .list-ul li {
          list-style-type: none;
          list-style-image: url('placeholder.png');
          border-bottom: 1px solid black;
        }
        .info-icon:hover {
          cursor: pointer;
        }
        .store-img-div {
          padding:20px;
          width: 80%; /* 设置容器宽度 */
          height: auto; /* 设置容器高度 */
          overflow: hidden; /* 确保图片不会溢出容器 */
          & img {
            width: 100%; /* 图片宽度100%，自适应容器宽度 */
            height: auto; /* 图片高度自适应，保持宽高比 */
            display: block; /* 防止图片底部产生空白 */
          }
        }
        .store-detail li {
          border-bottom: 1px solid black;
          margin-bottom: 10px;
        }
      `}</style>
    </>
  )
}
