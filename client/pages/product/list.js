import React, { useState, useEffect } from 'react'
import ProductFigure from '@/components/myProduct/productfigure'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
export default function List() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    // 初始加载时触发一次检测
    checkIsMobile()

    // 监听窗口大小变化
    window.addEventListener('resize', checkIsMobile)

    // 清理函数
    return () => {
      window.removeEventListener('resize', checkIsMobile)
    }
  }, [])
  const [priceRange, setPriceRange] = useState([0, 1000]) // 默认价格区间

  const handlePriceChange = (value) => {
    setPriceRange(value)
  }

  const [selectedColors, setSelectedColors] = useState([])

  const toggleColorSelection = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((c) => c !== color))
    } else {
      setSelectedColors([...selectedColors, color])
    }
  }

  const getColorButtonClass = (color) => {
    return `btn btn-circle ${selectedColors.includes(color) ? 'selected' : ''}`
  }
  return (
    <>
      <div className="row mt-2 mb-3">
        <div className="col">
          <div className="d-flex align-items-center">
            <span className="ps-3 text-h1 my-3 ">所有鋼筆</span>
          </div>
          <div className="card-text d-flex justify-content-between align-items-center ms-3">
            <nav
              className="text-h4"
              aria-label="breadcrumb"
              style={{ marginLeft: '230px' }}
            >
              {/* <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active " aria-current="page">
                  所有鋼筆
                </li>
              </ol> */}
            </nav>
            <div className="d-flex p-2 justify-content-end align-items-center">
              <div className="dropdown ms-3">
                <button
                  className="btn dropdown-toggle my-text-contents-CH rounded-pill shadow "
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span style={{ marginRight: '40px' }}>排序依據</span>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      最新上架
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      價格：由高至低
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      價格：由低至高
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {/* 左邊filter */}
        <div className="col-md-3">
          <div id="wrapper">
            <div
              className={`bg-white ${isMobile ? 'flex-row' : 'me-3'}`}
              id="sidebar-wrapper"
            >
              <div className={`${isMobile ? 'scroll' : ''}`}>
                <div
                  className={`cats ${isMobile ? 'd-flex' : ''}`}
                  style={{ marginBottom: '10px' }}
                >
                  <div className="me-2">
                    <button type="button" className="btn">
                      萬寶龍
                    </button>
                  </div>
                  <div className="me-2">
                    <button type="button" className="btn">
                      百樂
                    </button>
                  </div>
                  <div className="me-2">
                    <button type="button" className="btn">
                      sheaffer
                    </button>
                  </div>
                  <div className="me-2">
                    <button type="button" className="btn">
                      sheaffer
                    </button>
                  </div>
                  <div className="me-2">
                    <button type="button" className="btn">
                      sheaffer
                    </button>
                  </div>
                  <div className="me-2">
                    <button type="button" className="btn">
                      sheaffer
                    </button>
                  </div>
                  <div className="me-2">
                    <button type="button" className="btn">
                      sheaffer
                    </button>
                  </div>
                  <div className="me-2">
                    <button type="button" className="btn">
                      sheaffer
                    </button>
                  </div>
                  <div className="me-2">
                    <button type="button" className="btn">
                      sheaffer
                    </button>
                  </div>
                </div>
                <hr />

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
                        材質
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOne"
                      className="accordion-collapse collapse"
                    >
                      <div className="accordion-body px-1">
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input rounded-circle"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            黃銅
                          </label>
                        </div>
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input rounded-circle"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            塑膠
                          </label>
                        </div>
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input rounded-circle"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            金屬
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        data-bs-target="#panelsStayOpen-collapseFour"
                        aria-controls="panelsStayOpen-collapseFour"
                      >
                        筆尖種類
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseFour"
                      className="accordion-collapse collapse"
                    >
                      <div className="accordion-body px-1">
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input rounded-circle"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            B
                          </label>
                        </div>
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input rounded-circle"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            F
                          </label>
                        </div>
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input rounded-circle"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                          />
                          <label
                            className="form-check-label rounded-circle"
                            htmlFor="flexCheckChecked"
                          >
                            M
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseTwo"
                        aria-expanded="false"
                        aria-controls="panelsStayOpen-collapseTwo"
                      >
                        顏色
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseTwo"
                      className="accordion-collapse collapse"
                    >
                      <div className="accordion-body px-1">
                        <div className="d-flex flex-row justify-content-around mb-2">
                          <div className="p-2">
                            <div className="d-flex flex-column">
                              <div>
                                <button
                                  type="button"
                                  className={getColorButtonClass('purple')}
                                  style={{
                                    backgroundColor: 'purple',
                                    borderRadius: '50%',
                                    width: '40px',
                                    height: '40px',
                                  }}
                                  onClick={() => toggleColorSelection('purple')}
                                >
                                  {selectedColors.includes('purple') && (
                                    <FontAwesomeIcon
                                      icon={faCheck}
                                      style={{ color: 'white' }}
                                    />
                                  )}
                                </button>
                              </div>
                              <div className="color-f">紫色</div>
                            </div>
                          </div>
                          <div className="p-2">
                            <div className="d-flex flex-column">
                              <div>
                                <button
                                  type="button"
                                  className={getColorButtonClass('blue')}
                                  style={{
                                    backgroundColor: 'blue',
                                    borderRadius: '50%',
                                    width: '40px',
                                    height: '40px',
                                  }}
                                  onClick={() => toggleColorSelection('blue')}
                                >
                                  {selectedColors.includes('blue') && (
                                    <FontAwesomeIcon
                                      icon={faCheck}
                                      style={{ color: 'white' }}
                                    />
                                  )}
                                </button>
                              </div>
                              <div className="color-f">蓝色</div>
                            </div>
                          </div>
                          <div className="p-2">
                            <div className="d-flex flex-column">
                              <div>
                                <button
                                  type="button"
                                  className={getColorButtonClass('green')}
                                  style={{
                                    backgroundColor: 'green',
                                    borderRadius: '50%',
                                    width: '40px',
                                    height: '40px',
                                  }}
                                  onClick={() => toggleColorSelection('green')}
                                >
                                  {selectedColors.includes('green') && (
                                    <FontAwesomeIcon
                                      icon={faCheck}
                                      style={{ color: 'white' }}
                                    />
                                  )}
                                </button>
                              </div>
                              <div className="color-f">绿色</div>
                            </div>
                          </div>
                        </div>
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
                        價格範圍
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseThree"
                      className="accordion-collapse collapse"
                    >
                      <div style={{ margin: '20px' }}>
                        <Slider
                          min={1}
                          max={5000}
                          step={100}
                          range
                          defaultValue={[0, 1000]}
                          value={priceRange}
                          onChange={handlePriceChange}
                        />
                        <div>
                          Price Range: ${priceRange[0]} - ${priceRange[1]}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 右邊主商品欄位 */}
        <div className="col-md-9">
          <div id="page-content-wrapper">
            <div className="container">
              <div className="row row-cols-2 row-cols-md-3 g-4 row-cols-sm-2">
                <div className="col">
                  <ProductFigure />
                </div>
                <div className="col">
                  <ProductFigure />
                </div>
                <div className="col">
                  <ProductFigure />
                </div>
                <div className="col">
                  <ProductFigure />
                </div>
                <div className="col">
                  <ProductFigure />
                </div>
                <div className="col">
                  <ProductFigure />
                </div>
                <div className="col">
                  <ProductFigure />
                </div>
                <div className="col">
                  <ProductFigure />
                </div>
                <div className="col">
                  <ProductFigure />
                </div>
                <div className="col">
                  <ProductFigure />
                </div>
                <div className="col">
                  <ProductFigure />
                </div>
                <div className="col">
                  <ProductFigure />
                </div>
              </div>

              <div style={{ marginTop: '60px' }}>
                <hr style={{ margin: '20px auto' }} />

                <nav
                  className="d-flex justify-content-center align-items-center"
                  aria-label="Page navigation example"
                >
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
