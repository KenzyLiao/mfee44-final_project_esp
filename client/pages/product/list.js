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
  const [showMore, setShowMore] = useState(false)
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

  const [priceRange, setPriceRange] = useState([474, 40900]) // 默认价格区间

  const handlePriceChange = (value) => {
    setPriceRange(value)
  }
  const [sortingOption, setSortingOption] = useState('newest')
  const [selectedColors, setSelectedColors] = useState([])
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [selectedNibs, setSelectedNibs] = useState([])
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

  const toggleMaterialSelection = (material) => {
    if (selectedMaterials.includes(material)) {
      setSelectedMaterials(selectedMaterials.filter((m) => m !== material))
    } else {
      setSelectedMaterials([...selectedMaterials, material])
    }
  }

  const getMaterialCheckboxClass = (material) => {
    return ` ${selectedMaterials.includes(material) ? 'selected' : ''} ${
      isPressed ? 'pressed' : ''
    }`
  }

  const toggleNibSelection = (nib) => {
    if (selectedNibs.includes(nib)) {
      setSelectedNibs(selectedNibs.filter((n) => n !== nib))
    } else {
      setSelectedNibs([...selectedNibs, nib])
    }
  }

  const getNibCheckboxClass = (nib) => {
    return ` ${selectedNibs.includes(nib) ? 'selected' : ''} ${
      isPressed ? 'pressed' : ''
    }`
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
                    className="btn dropdown-toggle my-text-contents-CH rounded-pill shadow"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span style={{ marginRight: '40px' }}>排序依據</span>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className={`dropdown-item ${
                          sortingOption === 'newest' ? 'active' : ''
                        }`}
                        href="#"
                        onClick={() => setSortingOption('newest')}
                      >
                        最新上架
                      </a>
                    </li>
                    <li>
                      <a
                        className={`dropdown-item ${
                          sortingOption === 'high-to-low' ? 'active' : ''
                        }`}
                        href="#"
                        onClick={() => setSortingOption('high-to-low')}
                      >
                        價格：由高至低
                      </a>
                    </li>
                    <li>
                      <a
                        className={`dropdown-item ${
                          sortingOption === 'low-to-high' ? 'active' : ''
                        }`}
                        href="#"
                        onClick={() => setSortingOption('low-to-high')}
                      >
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
                      <Typography
                        variant="h6"
                        style={{
                          fontFamily: 'Noto Serif TC',
                          fontWeight: 'bold',
                        }}
                      >
                        篩選
                      </Typography>

                      <button
                        className="btn btn-secondary rounded-pill"
                        onClick={handleClose}
                      >
                        <FontAwesomeIcon icon={faTimes} />
                      </button>
                    </div>

                    <div className="py-4">
                      <span className="text-h3">排序依據</span>
                      <div className="accordion-body px-1 mt-4 h6">
                        <div className="form-check mb-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="material"
                            id="newest"
                            value="newest"
                            checked={sortingOption === 'newest'}
                            onChange={() => setSortingOption('newest')}
                          />
                          <label className="form-check-label" htmlFor="newest">
                            最新發布
                          </label>
                        </div>
                        <div className="form-check mb-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="material"
                            id="high-to-low"
                            value="high-to-low"
                            checked={sortingOption === 'high-to-low'}
                            onChange={() => setSortingOption('high-to-low')}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="high-to-low"
                          >
                            價格：由高到低
                          </label>
                        </div>
                        <div className="form-check mb-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="material"
                            id="low-to-high"
                            value="low-to-high"
                            checked={sortingOption === 'low-to-high'}
                            onChange={() => setSortingOption('low-to-high')}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="low-to-high"
                          >
                            價格：由低到高
                          </label>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="py-4">
                      <span className="text-h3">材質</span>
                      <div className="accordion-body px-1 mt-4 h6">
                        <div className="form-check form-switch mb-2">
                          <input
                            className={`form-check-input ${getMaterialCheckboxClass(
                              'brass'
                            )}`}
                            type="checkbox"
                            value=""
                            id="flexCheckCheckedBrass"
                            onChange={() => toggleMaterialSelection('brass')}
                            checked={selectedMaterials.includes('brass')}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckCheckedBrass"
                          >
                            黄銅
                          </label>
                        </div>
                        <div className="form-check form-switch mb-2">
                          <input
                            className={`form-check-input ${getMaterialCheckboxClass(
                              'resin'
                            )}`}
                            type="checkbox"
                            value=""
                            id="flexCheckCheckedResin"
                            onChange={() => toggleMaterialSelection('resin')}
                            checked={selectedMaterials.includes('resin')}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckCheckedResin"
                          >
                            樹脂
                          </label>
                        </div>
                        <div className="form-check form-switch mb-2">
                          <input
                            className={`form-check-input ${getMaterialCheckboxClass(
                              'plastic'
                            )}`}
                            type="checkbox"
                            value=""
                            id="flexCheckCheckedPlastic"
                            onChange={() => toggleMaterialSelection('plastic')}
                            checked={selectedMaterials.includes('plastic')}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckCheckedPlastic"
                          >
                            塑膠
                          </label>
                        </div>
                        <div className="form-check form-switch mb-2">
                          <input
                            className={`form-check-input ${getMaterialCheckboxClass(
                              'rubber'
                            )}`}
                            type="checkbox"
                            value=""
                            id="flexCheckCheckedRubber"
                            onChange={() => toggleMaterialSelection('rubber')}
                            checked={selectedMaterials.includes('rubber')}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckCheckedRubber"
                          >
                            橡膠
                          </label>
                        </div>
                        {showMore && (
                          <>
                            <div className="form-check form-switch mb-2">
                              <input
                                className={`form-check-input ${getMaterialCheckboxClass(
                                  'metal'
                                )}`}
                                type="checkbox"
                                value=""
                                id="flexCheckCheckedMetal"
                                onChange={() =>
                                  toggleMaterialSelection('metal')
                                }
                                checked={selectedMaterials.includes('metal')}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckCheckedMetal"
                              >
                                金屬
                              </label>
                            </div>
                            <div className="form-check form-switch mb-2">
                              <input
                                className={`form-check-input ${getMaterialCheckboxClass(
                                  'stainlessSteel'
                                )}`}
                                type="checkbox"
                                value=""
                                id="flexCheckCheckedStainlessSteel"
                                onChange={() =>
                                  toggleMaterialSelection('stainlessSteel')
                                }
                                checked={selectedMaterials.includes(
                                  'stainlessSteel'
                                )}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckCheckedStainlessSteel"
                              >
                                不鏽鋼
                              </label>
                            </div>
                            <div className="form-check form-switch mb-2">
                              <input
                                className={`form-check-input ${getMaterialCheckboxClass(
                                  'wood'
                                )}`}
                                type="checkbox"
                                value=""
                                id="flexCheckCheckedWood"
                                onChange={() => toggleMaterialSelection('wood')}
                                checked={selectedMaterials.includes('wood')}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckCheckedWood"
                              >
                                木頭
                              </label>
                            </div>
                            <div className="form-check form-switch mb-2">
                              <input
                                className={`form-check-input ${getMaterialCheckboxClass(
                                  'syntheticFiber'
                                )}`}
                                type="checkbox"
                                value=""
                                id="flexCheckCheckedSyntheticFiber"
                                onChange={() =>
                                  toggleMaterialSelection('syntheticFiber')
                                }
                                checked={selectedMaterials.includes(
                                  'syntheticFiber'
                                )}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckCheckedSyntheticFiber"
                              >
                                人造纖維
                              </label>
                            </div>
                            <div className="form-check form-switch mb-2">
                              <input
                                className={`form-check-input ${getMaterialCheckboxClass(
                                  'aluminum'
                                )}`}
                                type="checkbox"
                                value=""
                                id="flexCheckCheckedAluminum"
                                onChange={() =>
                                  toggleMaterialSelection('aluminum')
                                }
                                checked={selectedMaterials.includes('aluminum')}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckCheckedAluminum"
                              >
                                鋁
                              </label>
                            </div>
                            <div className="form-check form-switch mb-2">
                              <input
                                className={`form-check-input ${getMaterialCheckboxClass(
                                  'chromePlating'
                                )}`}
                                type="checkbox"
                                value=""
                                id="flexCheckCheckedChromePlating"
                                onChange={() =>
                                  toggleMaterialSelection('chromePlating')
                                }
                                checked={selectedMaterials.includes(
                                  'chromePlating'
                                )}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckCheckedChromePlating"
                              >
                                鍍鉻
                              </label>
                            </div>

                            <button
                              className="btn btn-link"
                              onClick={() => setShowMore(false)}
                            >
                              - 收起
                            </button>
                          </>
                        )}
                        {/* 展开更多按钮 */}
                        {!showMore && (
                          <button
                            className="btn btn-link"
                            onClick={() => setShowMore(true)}
                          >
                            + 更多
                          </button>
                        )}
                      </div>
                    </div>
                    <hr />
                    <div className="py-4">
                      <span className="text-h3">筆尖種類</span>
                      <div className="accordion-body px-1 mt-4 h6">
                        <div className="form-check form-switch mb-2">
                          <input
                            className={`form-check-input ${getNibCheckboxClass(
                              'nibB'
                            )}`}
                            type="checkbox"
                            value=""
                            id="flexCheckCheckedNibB"
                            onChange={() => toggleNibSelection('nibB')}
                            checked={selectedNibs.includes('nibB')}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckCheckedNibB"
                          >
                            B
                          </label>
                        </div>

                        <div className="form-check form-switch mb-2">
                          <input
                            className={`form-check-input ${getNibCheckboxClass(
                              'nibM'
                            )}`}
                            type="checkbox"
                            value=""
                            id="flexCheckCheckedNibM"
                            onChange={() => toggleNibSelection('nibM')}
                            checked={selectedNibs.includes('nibM')}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckCheckedNibM"
                          >
                            M
                          </label>
                        </div>

                        <div className="form-check form-switch mb-2">
                          <input
                            className={`form-check-input ${getNibCheckboxClass(
                              'nibF'
                            )}`}
                            type="checkbox"
                            value=""
                            id="flexCheckCheckedNibF"
                            onChange={() => toggleNibSelection('nibF')}
                            checked={selectedNibs.includes('nibF')}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckCheckedNibF"
                          >
                            F
                          </label>
                        </div>

                        <div className="form-check form-switch mb-2">
                          <input
                            className={`form-check-input ${getNibCheckboxClass(
                              'nibEF'
                            )}`}
                            type="checkbox"
                            value=""
                            id="flexCheckCheckedNibEF"
                            onChange={() => toggleNibSelection('nibEF')}
                            checked={selectedNibs.includes('nibEF')}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckCheckedNibEF"
                          >
                            EF
                          </label>
                        </div>

                        <div className="form-check form-switch mb-2">
                          <input
                            className={`form-check-input ${getNibCheckboxClass(
                              'nibMF'
                            )}`}
                            type="checkbox"
                            value=""
                            id="flexCheckCheckedNibMF"
                            onChange={() => toggleNibSelection('nibMF')}
                            checked={selectedNibs.includes('nibMF')}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckCheckedNibMF"
                          >
                            MF
                          </label>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="py-4">
                      <span className="text-h3">顏色</span>

                      <div className="d-flex flex-row justify-content-around mb-2 mt-4">
                        <div className="p-2">
                          <div className="d-flex flex-column">
                            <div>
                              <button
                                type="button"
                                className={`${getColorButtonClass(
                                  'black'
                                )} btnColor`}
                                style={{
                                  backgroundColor: 'black',
                                }}
                                onClick={() => toggleColorSelection('black')}
                              >
                                {selectedColors.includes('black') && (
                                  <FontAwesomeIcon
                                    icon={faCheck}
                                    style={{ color: 'white' }}
                                  />
                                )}
                              </button>
                            </div>
                            <div className="color-f">亮黑</div>
                          </div>
                        </div>

                        <div className="p-2">
                          <div className="d-flex flex-column">
                            <div>
                              <button
                                type="button"
                                className={`${getColorButtonClass(
                                  'white'
                                )} btnColor`}
                                style={{
                                  backgroundColor: 'white',
                                  border: '1px solid black',
                                }}
                                onClick={() => toggleColorSelection('white')}
                              >
                                {selectedColors.includes('white') && (
                                  <FontAwesomeIcon icon={faCheck} />
                                )}
                              </button>
                            </div>
                            <div className="color-f">透白</div>
                          </div>
                        </div>

                        <div className="p-2">
                          <div className="d-flex flex-column">
                            <div>
                              <button
                                type="button"
                                className={`${getColorButtonClass(
                                  'gray'
                                )} btnColor`}
                                style={{
                                  backgroundColor: 'gray',
                                }}
                                onClick={() => toggleColorSelection('gray')}
                              >
                                {selectedColors.includes('gray') && (
                                  <FontAwesomeIcon
                                    icon={faCheck}
                                    style={{ color: 'white' }}
                                  />
                                )}
                              </button>
                            </div>
                            <div className="color-f">銀灰</div>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex flex-row justify-content-around mb-2">
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
                            <div className="color-f">赤紅</div>
                          </div>
                        </div>

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
                            <div className="color-f">深藍</div>
                          </div>
                        </div>

                        <div className="p-2 ">
                          <div className="d-flex flex-column">
                            <div>
                              <button
                                type="button"
                                className={`${getColorButtonClass(
                                  'brown'
                                )} btnColor`}
                                style={{
                                  backgroundColor: 'brown',
                                }}
                                onClick={() => toggleColorSelection('brown')}
                              >
                                {selectedColors.includes('brown') && (
                                  <FontAwesomeIcon
                                    icon={faCheck}
                                    style={{ color: 'white' }}
                                  />
                                )}
                              </button>
                            </div>
                            <div className="color-f">棕色</div>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex flex-row justify-content-around mb-2">
                        <div className="p-2">
                          <div className="d-flex flex-column">
                            <div>
                              <button
                                type="button"
                                className={`${getColorButtonClass(
                                  'purple'
                                )} btnColor pressed`}
                                style={{
                                  backgroundColor: 'purple',
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
                            <div className="color-f">深紫</div>
                          </div>
                        </div>

                        <div className="p-2">
                          <div className="d-flex flex-column">
                            <div>
                              <button
                                type="button"
                                className={`${getColorButtonClass(
                                  'pink'
                                )} btnColor`}
                                style={{
                                  backgroundColor: 'pink',
                                }}
                                onClick={() => toggleColorSelection('pink')}
                              >
                                {selectedColors.includes('pink') && (
                                  <FontAwesomeIcon icon={faCheck} />
                                )}
                              </button>
                            </div>
                            <div className="color-f">粉紅</div>
                          </div>
                        </div>

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
                            <div className="color-f">翠綠</div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-row justify-content-around mb-2">
                        <div className="p-2">
                          <div className="d-flex flex-column">
                            <div>
                              <button
                                type="button"
                                className={`${getColorButtonClass(
                                  'yellow'
                                )} btnColor pressed`}
                                style={{
                                  backgroundColor: 'yellow',
                                }}
                                onClick={() => toggleColorSelection('yellow')}
                              >
                                {selectedColors.includes('yellow') && (
                                  <FontAwesomeIcon icon={faCheck} />
                                )}
                              </button>
                            </div>
                            <div className="color-f">亮黃</div>
                          </div>
                        </div>

                        <div className="p-2">
                          <div className="d-flex flex-column">
                            <div>
                              <button
                                type="button"
                                className={`${getColorButtonClass(
                                  'bronze'
                                )} btnColor`}
                                style={{
                                  backgroundColor: '#CD7F32',
                                }}
                                onClick={() => toggleColorSelection('bronze')}
                              >
                                {selectedColors.includes('bronze') && (
                                  <FontAwesomeIcon
                                    icon={faCheck}
                                    style={{ color: 'white' }}
                                  />
                                )}
                              </button>
                            </div>
                            <div className="color-f">青銅</div>
                          </div>
                        </div>

                        <div className="p-2">
                          <div className="d-flex flex-column">
                            <div>
                              <button
                                type="button"
                                className={`${getColorButtonClass(
                                  'gold'
                                )} btnColor`}
                                style={{
                                  backgroundColor: '#FFD700',
                                }}
                                onClick={() => toggleColorSelection('gold')}
                              >
                                {selectedColors.includes('gold') && (
                                  <FontAwesomeIcon icon={faCheck} />
                                )}
                              </button>
                            </div>
                            <div className="color-f">黑金</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="py-4">
                      <div
                        className="text-h3"
                        data-bs-target="#panelsStayOpen-collapseThree"
                      >
                        價格範圍
                      </div>

                      <div id="panelsStayOpen-collapseThree">
                        <div className="mt-5">
                          <Slider
                            min={474}
                            max={40900}
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
                  </DialogContent>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      margin: '20px',
                      paddingTop: '30px',
                      paddingBottom: '5px',
                      borderTop: '2px solid #ccc',
                    }}
                  >
                    <button
                      className="btn btn-secondary rounded-pill"
                      style={{ width: '48%' }}
                      onClick={handleSubmit}
                    >
                      清除
                    </button>
                    <button
                      className="btn btn-primary rounded-pill"
                      style={{ width: '48%' }}
                      onClick={handleSubmit}
                    >
                      提交
                    </button>
                  </div>
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
                  className={`cats  ${isMobile ? 'd-flex ' : ''}`}
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
                      SHEAFFER
                    </button>
                  </div>
                  <div className="me-2">
                    <button type="button" className="btn">
                      PELIKAN
                    </button>
                  </div>
                  <div className="me-2">
                    <button type="button" className="btn">
                      MONTBLANC
                    </button>
                  </div>
                  <div className="me-2">
                    <button type="button" className="btn">
                      PILOT
                    </button>
                  </div>
                  <div className="me-2">
                    <button type="button" className="btn">
                      WATERMAN
                    </button>
                  </div>
                  <div className="me-2">
                    <button type="button" className="btn">
                      PARKER
                    </button>
                  </div>
                  <div className="me-2">
                    <button type="button" className="btn">
                      TWSBI
                    </button>
                  </div>
                  <div className="me-2">
                    <button type="button" className="btn">
                      LAMY
                    </button>
                  </div>
                  <div className="me-2">
                    <button type="button" className="btn">
                      KAWECO
                    </button>
                  </div>
                  <div className="me-2">
                    <button type="button" className="btn">
                      SAILOR
                    </button>
                  </div>
                </div>
                {!isMobile && <hr style={{ marginTop: '40px' }} />}
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
                              className={`form-check-input ${getMaterialCheckboxClass(
                                'brass'
                              )}`}
                              type="checkbox"
                              value=""
                              id="flexCheckBrass"
                              onChange={() => toggleMaterialSelection('brass')}
                              checked={selectedMaterials.includes('brass')}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckBrass"
                            >
                              黃銅
                            </label>
                          </div>
                          <div className="form-check form-switch">
                            <input
                              className={`form-check-input ${getMaterialCheckboxClass(
                                'resin'
                              )}`}
                              type="checkbox"
                              value=""
                              id="flexCheckResin"
                              onChange={() => toggleMaterialSelection('resin')}
                              checked={selectedMaterials.includes('resin')}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckResin"
                            >
                              樹脂
                            </label>
                          </div>
                          <div className="form-check form-switch">
                            <input
                              className={`form-check-input ${getMaterialCheckboxClass(
                                'plastic'
                              )}`}
                              type="checkbox"
                              value=""
                              id="flexCheckPlastic"
                              onChange={() =>
                                toggleMaterialSelection('plastic')
                              }
                              checked={selectedMaterials.includes('plastic')}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckPlastic"
                            >
                              塑膠
                            </label>
                          </div>

                          <div className="form-check form-switch">
                            <input
                              className={`form-check-input ${getMaterialCheckboxClass(
                                'rubber'
                              )}`}
                              type="checkbox"
                              value=""
                              id="flexCheckRubber"
                              onChange={() => toggleMaterialSelection('rubber')}
                              checked={selectedMaterials.includes('rubber')}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckRubber"
                            >
                              橡膠
                            </label>
                          </div>
                          {showMore && (
                            <>
                              <div className="form-check form-switch">
                                <input
                                  className={`form-check-input ${getMaterialCheckboxClass(
                                    'metal'
                                  )}`}
                                  type="checkbox"
                                  value=""
                                  id="flexCheckMetal"
                                  onChange={() =>
                                    toggleMaterialSelection('metal')
                                  }
                                  checked={selectedMaterials.includes('metal')}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckMetal"
                                >
                                  金屬
                                </label>
                              </div>
                              <div className="form-check form-switch">
                                <input
                                  className={`form-check-input ${getMaterialCheckboxClass(
                                    'stainlessSteel'
                                  )}`}
                                  type="checkbox"
                                  value=""
                                  id="flexCheckStainlessSteel"
                                  onChange={() =>
                                    toggleMaterialSelection('stainlessSteel')
                                  }
                                  checked={selectedMaterials.includes(
                                    'stainlessSteel'
                                  )}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckStainlessSteel"
                                >
                                  不銹鋼
                                </label>
                              </div>
                              <div className="form-check form-switch">
                                <input
                                  className={`form-check-input ${getMaterialCheckboxClass(
                                    'wood'
                                  )}`}
                                  type="checkbox"
                                  value=""
                                  id="flexCheckWood"
                                  onChange={() =>
                                    toggleMaterialSelection('wood')
                                  }
                                  checked={selectedMaterials.includes('wood')}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckWood"
                                >
                                  木頭
                                </label>
                              </div>
                              <div className="form-check form-switch">
                                <input
                                  className={`form-check-input ${getMaterialCheckboxClass(
                                    'syntheticFiber'
                                  )}`}
                                  type="checkbox"
                                  value=""
                                  id="flexCheckSyntheticFiber"
                                  onChange={() =>
                                    toggleMaterialSelection('syntheticFiber')
                                  }
                                  checked={selectedMaterials.includes(
                                    'syntheticFiber'
                                  )}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckSyntheticFiber"
                                >
                                  人造纖維
                                </label>
                              </div>
                              <div className="form-check form-switch">
                                <input
                                  className={`form-check-input ${getMaterialCheckboxClass(
                                    'aluminum'
                                  )}`}
                                  type="checkbox"
                                  value=""
                                  id="flexCheckAluminum"
                                  onChange={() =>
                                    toggleMaterialSelection('aluminum')
                                  }
                                  checked={selectedMaterials.includes(
                                    'aluminum'
                                  )}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckAluminum"
                                >
                                  鋁
                                </label>
                              </div>
                              <div className="form-check form-switch">
                                <input
                                  className={`form-check-input ${getMaterialCheckboxClass(
                                    'chromePlating'
                                  )}`}
                                  type="checkbox"
                                  value=""
                                  id="flexCheckChromePlating"
                                  onChange={() =>
                                    toggleMaterialSelection('chromePlating')
                                  }
                                  checked={selectedMaterials.includes(
                                    'chromePlating'
                                  )}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexCheckChromePlating"
                                >
                                  鍍鉻
                                </label>
                              </div>
                              <button
                                className="btn btn-link"
                                onClick={() => setShowMore(false)}
                              >
                                - 收起
                              </button>
                            </>
                          )}
                          {/* 展开更多按钮 */}
                          {!showMore && (
                            <button
                              className="btn btn-link"
                              onClick={() => setShowMore(true)}
                            >
                              + 更多
                            </button>
                          )}
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
                          <div className="form-check form-switch mb-2">
                            <input
                              className={`form-check-input ${getNibCheckboxClass(
                                'nibB'
                              )}`}
                              type="checkbox"
                              value=""
                              id="flexCheckNibB"
                              onChange={() => toggleNibSelection('nibB')}
                              checked={selectedNibs.includes('nibB')}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckNibB"
                            >
                              B
                            </label>
                          </div>

                          <div className="form-check form-switch mb-2">
                            <input
                              className={`form-check-input ${getNibCheckboxClass(
                                'nibM'
                              )}`}
                              type="checkbox"
                              value=""
                              id="flexCheckNibM"
                              onChange={() => toggleNibSelection('nibM')}
                              checked={selectedNibs.includes('nibM')}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckNibM"
                            >
                              M
                            </label>
                          </div>

                          <div className="form-check form-switch mb-2">
                            <input
                              className={`form-check-input ${getNibCheckboxClass(
                                'nibF'
                              )}`}
                              type="checkbox"
                              value=""
                              id="flexCheckNibF"
                              onChange={() => toggleNibSelection('nibF')}
                              checked={selectedNibs.includes('nibF')}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckNibF"
                            >
                              F
                            </label>
                          </div>

                          <div className="form-check form-switch mb-2">
                            <input
                              className={`form-check-input ${getNibCheckboxClass(
                                'nibEF'
                              )}`}
                              type="checkbox"
                              value=""
                              id="flexCheckNibEF"
                              onChange={() => toggleNibSelection('nibEF')}
                              checked={selectedNibs.includes('nibEF')}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckNibEF"
                            >
                              EF
                            </label>
                          </div>

                          <div className="form-check form-switch mb-2">
                            <input
                              className={`form-check-input ${getNibCheckboxClass(
                                'nibMF'
                              )}`}
                              type="checkbox"
                              value=""
                              id="flexCheckNibMF"
                              onChange={() => toggleNibSelection('nibMF')}
                              checked={selectedNibs.includes('nibMF')}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckNibMF"
                            >
                              MF
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
                        <div className="accordion-body px-1 ">
                          <div className="d-flex flex-row justify-content-around mb-2 ">
                            <div className="p-2">
                              <div className="d-flex flex-column">
                                <div>
                                  <button
                                    type="button"
                                    className={`${getColorButtonClass(
                                      'black'
                                    )} btnColor`}
                                    style={{
                                      backgroundColor: 'black',
                                    }}
                                    onClick={() =>
                                      toggleColorSelection('black')
                                    }
                                  >
                                    {selectedColors.includes('black') && (
                                      <FontAwesomeIcon
                                        icon={faCheck}
                                        style={{ color: 'white' }}
                                      />
                                    )}
                                  </button>
                                </div>
                                <div className="color-f">亮黑</div>
                              </div>
                            </div>
                            <div className="p-2">
                              <div className="d-flex flex-column">
                                <div>
                                  <button
                                    type="button"
                                    className={`${getColorButtonClass(
                                      'white'
                                    )} btnColor`}
                                    style={{
                                      backgroundColor: 'white',
                                      border: '1px solid black',
                                    }}
                                    onClick={() =>
                                      toggleColorSelection('white')
                                    }
                                  >
                                    {selectedColors.includes('white') && (
                                      <FontAwesomeIcon icon={faCheck} />
                                    )}
                                  </button>
                                </div>
                                <div className="color-f">透白</div>
                              </div>
                            </div>

                            <div className="p-2">
                              <div className="d-flex flex-column">
                                <div>
                                  <button
                                    type="button"
                                    className={`${getColorButtonClass(
                                      'gray'
                                    )} btnColor`}
                                    style={{
                                      backgroundColor: 'gray',
                                    }}
                                    onClick={() => toggleColorSelection('gray')}
                                  >
                                    {selectedColors.includes('gray') && (
                                      <FontAwesomeIcon
                                        icon={faCheck}
                                        style={{ color: 'white' }}
                                      />
                                    )}
                                  </button>
                                </div>
                                <div className="color-f">銀灰</div>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex flex-row justify-content-around mb-2">
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
                                <div className="color-f">赤紅</div>
                              </div>
                            </div>

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
                                <div className="color-f">深藍</div>
                              </div>
                            </div>

                            <div className="p-2 ">
                              <div className="d-flex flex-column">
                                <div>
                                  <button
                                    type="button"
                                    className={`${getColorButtonClass(
                                      'brown'
                                    )} btnColor`}
                                    style={{
                                      backgroundColor: 'brown',
                                    }}
                                    onClick={() =>
                                      toggleColorSelection('brown')
                                    }
                                  >
                                    {selectedColors.includes('brown') && (
                                      <FontAwesomeIcon
                                        icon={faCheck}
                                        style={{ color: 'white' }}
                                      />
                                    )}
                                  </button>
                                </div>
                                <div className="color-f">棕色</div>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex flex-row justify-content-around mb-2">
                            <div className="p-2">
                              <div className="d-flex flex-column">
                                <div>
                                  <button
                                    type="button"
                                    className={`${getColorButtonClass(
                                      'purple'
                                    )} btnColor pressed`}
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
                                <div className="color-f">深紫</div>
                              </div>
                            </div>

                            <div className="p-2">
                              <div className="d-flex flex-column">
                                <div>
                                  <button
                                    type="button"
                                    className={`${getColorButtonClass(
                                      'pink'
                                    )} btnColor`}
                                    style={{
                                      backgroundColor: 'pink',
                                    }}
                                    onClick={() => toggleColorSelection('pink')}
                                  >
                                    {selectedColors.includes('pink') && (
                                      <FontAwesomeIcon icon={faCheck} />
                                    )}
                                  </button>
                                </div>
                                <div className="color-f">粉紅</div>
                              </div>
                            </div>

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
                                <div className="color-f">翠綠</div>
                              </div>
                            </div>
                          </div>

                          <div className="d-flex flex-row justify-content-around mb-2">
                            <div className="p-2">
                              <div className="d-flex flex-column">
                                <div>
                                  <button
                                    type="button"
                                    className={`${getColorButtonClass(
                                      'yellow'
                                    )} btnColor pressed`}
                                    style={{
                                      backgroundColor: 'yellow',
                                    }}
                                    onClick={() =>
                                      toggleColorSelection('yellow')
                                    }
                                  >
                                    {selectedColors.includes('yellow') && (
                                      <FontAwesomeIcon icon={faCheck} />
                                    )}
                                  </button>
                                </div>
                                <div className="color-f">亮黃</div>
                              </div>
                            </div>

                            <div className="p-2">
                              <div className="d-flex flex-column">
                                <div>
                                  <button
                                    type="button"
                                    className={`${getColorButtonClass(
                                      'bronze'
                                    )} btnColor`}
                                    style={{
                                      backgroundColor: '#CD7F32',
                                    }}
                                    onClick={() =>
                                      toggleColorSelection('bronze')
                                    }
                                  >
                                    {selectedColors.includes('bronze') && (
                                      <FontAwesomeIcon
                                        icon={faCheck}
                                        style={{ color: 'white' }}
                                      />
                                    )}
                                  </button>
                                </div>
                                <div className="color-f">青銅</div>
                              </div>
                            </div>
                            <div className="p-2">
                              <div className="d-flex flex-column">
                                <div>
                                  <button
                                    type="button"
                                    className={`${getColorButtonClass(
                                      'gold'
                                    )} btnColor`}
                                    style={{
                                      backgroundColor: '#FFD700',
                                    }}
                                    onClick={() => toggleColorSelection('gold')}
                                  >
                                    {selectedColors.includes('gold') && (
                                      <FontAwesomeIcon icon={faCheck} />
                                    )}
                                  </button>
                                </div>
                                <div className="color-f">黑金</div>
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
                            min={474}
                            max={40900}
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
