import React, { useEffect } from 'react'
import ContactDiv from '@/components/myService/contactDiv'
import Progress from '@/components/myService/progress'
import AreaFilter from '@/components/myService/areaFilter'
import TimeFilter from '@/components/myService/timeFilter'
import Search from '@/components/myService/search'
import Map from '@/components/myService/map'
import StoreInfo from '@/components/myService/storeInfo'

export default function RepairAndServicePage() {
  useEffect(() => {
    import('@/pages/service/serviceIndex.js')
  }, [])
  return (
    <>
      <h1 className="text-center mb-3 text-h1">服務據點</h1>
      <section className="row contactDiv hiddenContent">
        <div className="col-12 px-0">
          <ContactDiv />
        </div>
      </section>
      <div className="row">
        <Progress />
      </div>
      <div className="filter my-3 row align-items-center  justify-content-evenly justify-content-lg-center  mx-0">
        <div className="col-md-3 col-8 text-center  my-2 d-flex justify-content-md-evenly justify-content-center">
          <AreaFilter />
        </div>
        <div className="col-md-3 col-8 text-center  my-2 d-flex justify-content-md-evenly justify-content-center">
          <TimeFilter />
        </div>
        <div className="col-md-3 col-8 text-center my-2 search-width">
          <Search />
        </div>
      </div>
      <div className="info d-flex row mx-5 mb-5">
        <div className="left col-md-6 px-0 text-center">
          <Map />
        </div>
        <div className="right col-md-6 px-0">
          <StoreInfo />
        </div>
      </div>

      {/* 把定位樣式放在page可以嗎? */}
      <style jsx>{`
        .contactDiv {
          position: relative;
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
      `}</style>
    </>
  )
}
