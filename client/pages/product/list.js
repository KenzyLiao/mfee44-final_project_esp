import React, { useState, useEffect } from 'react'
import ProductFigure from '@/components/myProduct/productfigure'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faSliders, faTimes } from '@fortawesome/free-solid-svg-icons'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Typography from '@mui/material/Typography'
import Slide from '@mui/material/Slide'

export default function List() {
  const [isMobile, setIsMobile] = useState(false)
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const handleSubmit = () => {
    // 处理提交逻辑
    setOpen(false) // 提交后关闭模态
  }

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 991)
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
  const [isPressed] = useState(false)

  const toggleColorSelection = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((c) => c !== color))
    } else {
      setSelectedColors([...selectedColors, color])
    }
  }

  const getColorButtonClass = (color) => {
    return `btn btn-circle ${
      selectedColors.includes(color) ? 'selected' : ''
    } ${isPressed ? 'pressed' : ''}`
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
            {!isMobile && (
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
            )}
            {isMobile && (
              <div className="d-flex p-2 justify-content-end align-items-center">
                <button
                  className="btn my-text-contents-CH rounded-pill shadow"
                  onClick={handleOpen}
                >
                  <span style={{ marginRight: '10px' }}>篩選</span>
                  <FontAwesomeIcon icon={faSliders} />
                </button>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  fullScreen
                  TransitionComponent={Slide}
                  TransitionProps={{
                    direction: 'up',
                  }}
                >
                  <DialogContent>
                    <div className="d-flex justify-content-between mt-3">
                      <Typography variant="h6">篩選</Typography>

                      <button
                        className="btn btn-secondary rounded-pill"
                        onClick={handleClose}
                      >
                        <FontAwesomeIcon icon={faTimes} />
                      </button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="row">
        {/* 左邊filter */}
        <div className="col-lg-3  col-md-12">
          <div id="wrapper">
            <div
              className={`bg-white ${isMobile ? 'flex-row' : 'me-3'}`}
              id="sidebar-wrapper"
            >
              <div className={`${isMobile ? 'scroll' : ''}`}>
                <div
                  className={`cats ${isMobile ? 'd-flex ' : ''}`}
                  style={{
                    overflowX: isMobile ? 'auto' : 'visible',
                    marginBottom: isMobile ? '50px' : '0px',
                  }}
                >
                  <div className="me-2">
                    <button
                      type="button"
                      className="btn"
                      style={{ whiteSpace: 'nowrap' }}
                    >
                      萬寶龍
                    </button>
                  </div>
                  <div className="me-2">
                    <button
                      type="button"
                      className="btn"
                      style={{ whiteSpace: 'nowrap' }}
                    >
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
                {!isMobile && <hr style={{ marginTop: '70px' }} />}
                {!isMobile && (
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
                            {/* 紫色按钮 */}
                            <div className="p-2">
                              <div className="d-flex flex-column">
                                <div>
                                  <button
                                    type="button"
                                    className={`${getColorButtonClass(
                                      'purple'
                                    )} btnColor`}
                                    style={{
                                      backgroundColor: 'purple',
                                    }}
                                    onClick={() =>
                                      toggleColorSelection('purple')
                                    }
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

                            {/* 蓝色按钮 */}
                            <div className="p-2">
                              <div className="d-flex flex-column">
                                <div>
                                  <button
                                    type="button"
                                    className={`${getColorButtonClass(
                                      'blue'
                                    )} btnColor`}
                                    style={{
                                      backgroundColor: 'blue',
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

                            {/* 绿色按钮 */}
                            <div className="p-2">
                              <div className="d-flex flex-column">
                                <div>
                                  <button
                                    type="button"
                                    className={`${getColorButtonClass(
                                      'green'
                                    )} btnColor`}
                                    style={{
                                      backgroundColor: 'green',
                                    }}
                                    onClick={() =>
                                      toggleColorSelection('green')
                                    }
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

                          <div className="d-flex flex-row justify-content-around mb-2">
                            {/* 红色按钮 */}
                            <div className="p-2">
                              <div className="d-flex flex-column">
                                <div>
                                  <button
                                    type="button"
                                    className={`${getColorButtonClass(
                                      'red'
                                    )} btnColor`}
                                    style={{
                                      backgroundColor: 'red',
                                    }}
                                    onClick={() => toggleColorSelection('red')}
                                  >
                                    {selectedColors.includes('red') && (
                                      <FontAwesomeIcon
                                        icon={faCheck}
                                        style={{ color: 'white' }}
                                      />
                                    )}
                                  </button>
                                </div>
                                <div className="color-f">红色</div>
                              </div>
                            </div>

                            {/* 黄色按钮 */}
                            <div className="p-2">
                              <div className="d-flex flex-column">
                                <div>
                                  <button
                                    type="button"
                                    className={`${getColorButtonClass(
                                      'yellow'
                                    )} btnColor`}
                                    style={{
                                      backgroundColor: 'yellow',
                                    }}
                                    onClick={() =>
                                      toggleColorSelection('yellow')
                                    }
                                  >
                                    {selectedColors.includes('yellow') && (
                                      <FontAwesomeIcon
                                        icon={faCheck}
                                        style={{ color: 'white' }}
                                      />
                                    )}
                                  </button>
                                </div>
                                <div className="color-f">黄色</div>
                              </div>
                            </div>

                            {/* 橙色按钮 */}
                            <div className="p-2 ">
                              <div className="d-flex flex-column">
                                <div>
                                  <button
                                    type="button"
                                    className={`${getColorButtonClass(
                                      'orange'
                                    )} btnColor`}
                                    style={{
                                      backgroundColor: 'orange',
                                    }}
                                    onClick={() =>
                                      toggleColorSelection('orange')
                                    }
                                  >
                                    {selectedColors.includes('orange') && (
                                      <FontAwesomeIcon
                                        icon={faCheck}
                                        style={{ color: 'white' }}
                                      />
                                    )}
                                  </button>
                                </div>
                                <div className="color-f">橙色</div>
                              </div>
                            </div>
                          </div>

                          <div className="d-flex flex-row justify-content-around mb-2">
                            {/* 粉色按钮 */}
                            <div className="p-2">
                              <div className="d-flex flex-column">
                                <div>
                                  <button
                                    type="button"
                                    className={`${getColorButtonClass(
                                      'pink'
                                    )} btnColor pressed`}
                                    style={{
                                      backgroundColor: 'pink',
                                    }}
                                    onClick={() => toggleColorSelection('pink')}
                                  >
                                    {selectedColors.includes('pink') && (
                                      <FontAwesomeIcon
                                        icon={faCheck}
                                        style={{ color: 'white' }}
                                      />
                                    )}
                                  </button>
                                </div>
                                <div className="color-f">粉红色</div>
                              </div>
                            </div>

                            {/* 青色按钮 */}
                            <div className="p-2">
                              <div className="d-flex flex-column">
                                <div>
                                  <button
                                    type="button"
                                    className={`${getColorButtonClass(
                                      'cyan'
                                    )} btnColor`}
                                    style={{
                                      backgroundColor: 'cyan',
                                    }}
                                    onClick={() => toggleColorSelection('cyan')}
                                  >
                                    {selectedColors.includes('cyan') && (
                                      <FontAwesomeIcon
                                        icon={faCheck}
                                        style={{ color: 'white' }}
                                      />
                                    )}
                                  </button>
                                </div>
                                <div className="color-f">青色</div>
                              </div>
                            </div>

                            {/* 浅蓝色按钮 */}
                            <div className="p-2">
                              <div className="d-flex flex-column">
                                <div>
                                  <button
                                    type="button"
                                    className={`${getColorButtonClass(
                                      'lightblue'
                                    )} btnColor`}
                                    style={{
                                      backgroundColor: 'lightblue',
                                    }}
                                    onClick={() =>
                                      toggleColorSelection('lightblue')
                                    }
                                  >
                                    {selectedColors.includes('lightblue') && (
                                      <FontAwesomeIcon
                                        icon={faCheck}
                                        style={{ color: 'white' }}
                                      />
                                    )}
                                  </button>
                                </div>
                                <div className="color-f">淡蓝色</div>
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
                )}
              </div>
            </div>
          </div>
        </div>
        {/* 右邊主商品欄位 */}
        <div className="col-lg-9 col-md-12">
          <div id="page-content-wrapper">
            <div className="container">
              <div className="row row-cols-2 row-cols-lg-3 g-4 row-cols-md-2">
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
      <style jsx>{`
        .btnColor {
          border-radius: 50%;
          width: 40px;
          height: 40px;
          transform: scale(0.7);
        }

        .btnColor:hover {
          opacity: 0.5;
        }

        /* 滚动条的样式 */
        ::-webkit-scrollbar {
          height: 3px; /* 滚动条宽度 */
        }

        /* 滚动条轨道 */
        ::-webkit-scrollbar-track {
          background: #f3f3f3; /* 轨道背景颜色 */
        }

        /* 滚动条滑块 */
        ::-webkit-scrollbar-thumb {
          background: #ff69b4; /* 滑块颜色 */
          border-radius: 4px; /* 滑块圆角 */
        }

        /* 滚动条滑块悬停状态 */
        ::-webkit-scrollbar-thumb:hover {
          background: #ff1493; /* 滑块悬停时的颜色 */
        }
      `}</style>
    </>
  )
}
