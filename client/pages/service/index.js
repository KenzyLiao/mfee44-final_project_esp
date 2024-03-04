import React, { useEffect, useState } from 'react'
import ContactDiv from '@/components/myService/contactDiv'
import Progress from '@/components/myService/progress'
import AreaFilter from '@/components/myService/areaFilter'
import TimeFilter from '@/components/myService/timeFilter'
// import TimeRangePicker from '@/components/myService/TimeRangePicker'

import Search from '@/components/myService/search'
import Map from '@/components/myService/map'
import StoreInfo from '@/components/myService/storeInfo'
import axios from 'axios'
import testmapData from '@/data/store1.json'; //地圖測試用資料
import teststoreData from '@/data/store2.json'; //店家列表測試用資料



export default function RepairAndServicePage() {
  const [loading, setLoading] = useState(false) //
  const [north, setNorth] = useState(true) //首次渲染可能考慮北中南全顯示
  const [middle, setMiddle] = useState(true) //首次渲染可能考慮北中南全顯示
  const [south, setSouth] = useState(true) //首次渲染可能考慮北中南全顯示
  const [openTime, setOpenTime] = useState(0)
  const [closeTime, setCloseTime] = useState(0)
  const [textSearch, setTextSearch] = useState('')
  const [geojsonData, setGeojsonData] = useState(null) //首次渲染可能考慮北中南全顯示
  const [storeData, setStoreData] = useState(null) //首次渲染可能考慮北中南全顯示

  //頁面上方展開的動畫用
  useEffect(() => {
    import('@/utils/serviceTool/serviceIndex.js')
  }, [])
  //發送請求，獲取geojson
  // useEffect(() => {
  //   // 获取 GeoJSON 数据的请求
  //   axios.get('YOUR_ENDPOINT')
  //     .then(response => {
  //       // 设置获取到的 GeoJSON 数据
  //       setGeojsonData(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching GeoJSON data:', error);
  //     });
  // }, []);

  const handleRequest = () => {
    setLoading(true) // 发出请求时设置加载状态为 true
    // 模拟请求
    setTimeout(() => {
      setLoading(false) // 模拟请求完成后，设置加载状态为 false
    }, 1000) // 假设请求耗时 3 秒
  }

  return (
    <>
      <h1 className="text-center mb-3 text-h1">服務據點</h1>
      <section className="row contactDiv hiddenContent">
        <div className="col-12 px-0">
          <ContactDiv />
        </div>
      </section>
      <div className="row">
      {/* 下方btn為測試用 */}
      <button onClick={handleRequest}>发出请求</button>

        <Progress loading={loading} setLoading={setLoading} />
      </div>
      <div className="filter my-3 row align-items-center  justify-content-evenly justify-content-lg-center  mx-0">
        <div className="col-md-3 col-8 text-center  my-2 d-flex justify-content-md-evenly justify-content-center">
          <AreaFilter
            north={north}
            setNorth={setNorth}
            middle={middle}
            setMiddle={setMiddle}
            south={south}
            setSouth={setSouth}
          />
        </div>
        <div className="col-md-3 col-8 text-center p-0 my-2 d-flex justify-content-md-evenly justify-content-center">
          <TimeFilter
            openTime={openTime}
            setOpenTime={setOpenTime}
            closeTime={closeTime}
            setCloseTime={setCloseTime}
          />
          {/* <TimeRangePicker /> 這元件有多餘的時間再搞(來自antd) */}
        </div>
        <div className="col-md-3 col-8 text-center my-2 search-width">
          <Search textSearch={textSearch} setTextSearch={setTextSearch} />
        </div>
      </div>
      <div className="info d-flex row mx-5 mb-5">
        <div className="left col-md-6 px-0 text-center">
          <Map geojsonData={testmapData} setGeojsonData={setGeojsonData} />
        </div>
        <div className="right col-md-6 px-0">
          <StoreInfo storeData={teststoreData} setStoreData={setStoreData} />
        </div>
      </div>

      {/* 把定位樣式放在page可以嗎? */}
      <style jsx>{`
        .contactDiv {
          position: relative;
        }
        @media screen and (max-width: 391px) {
          .contactDiv {
            display: none;
          }
        }
        .hiddenContent {
          height: 0;
          overflow: hidden;
          transition: height 0.9s ease; /* 添加过渡效果 */
        }
        .search-width {
          min-width: 300px;
        }
        .right {
          border-left: 2px solid black;
        }
        @media screen and (max-width: 391px) {
          .right {
            margin-top: 20px;
            border-left: none;
            border-top: 1px solid black;
          }
        }
      `}</style>
    </>
  )
}
