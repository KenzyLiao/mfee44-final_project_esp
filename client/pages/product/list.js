import { useEffect } from 'react'
import Heart from '@/components/myProduct/heart-icon'
export default function List() {
  // Toggle the side navigation
  useEffect(() => {
    // fix next issue
    if (typeof window !== 'undefined') {
      const sidebarToggle = document.body.querySelector('#sidebarToggle')

      if (sidebarToggle) {
        // 在localStorage中儲存目前sidebar情況
        if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
          document.body.classList.toggle('sb-sidenav-toggled')
        }

        sidebarToggle.addEventListener('click', (event) => {
          event.preventDefault()

          document.body.classList.toggle('sb-sidenav-toggled')

          localStorage.setItem(
            'sb|sidebar-toggle',
            document.body.classList.contains('sb-sidenav-toggled')
          )
        })
      }
    }
  }, [])

  return (
    <>
      <div className="row mt-2 mb-3">
        <div className="col">
          <div className="d-flex align-items-center">
            <span className="ps-3 text-h1 my-3">所有鋼筆</span>
          </div>
          <div className="card-text d-flex justify-content-between align-items-center ms-3">
            <nav
              className="text-h4"
              aria-label="breadcrumb"
              style={{ marginLeft: '230px' }}
            >
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  所有鋼筆
                </li>
              </ol>
            </nav>
            <div className="d-flex p-2 justify-content-end align-items-center">
              <div className="dropdown ms-3">
                <button
                  className="btn dropdown-toggle my-text-contents-CH"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  排序依據
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
        <div className="col-md-16">
          <div className="d-flex" id="wrapper">
            <div className="bg-white me-3" id="sidebar-wrapper">
              <div className="scroll">
                <div className="cats">
                  <div>
                    <button type="button" className="btn">
                      萬寶龍
                    </button>
                  </div>
                  <div>
                    <button type="button" className="btn">
                      百樂
                    </button>
                  </div>
                  <div>
                    <button type="button" className="btn">
                      sheaffer
                    </button>
                  </div>
                </div>

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
                        <div className="form-check">
                          <input
                            className="form-check-input"
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
                        <div className="form-check">
                          <input
                            className="form-check-input"
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
                        <div className="form-check">
                          <input
                            className="form-check-input"
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
                        <div className="form-check">
                          <input
                            className="form-check-input"
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
                        <div className="form-check">
                          <input
                            className="form-check-input"
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
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                          />
                          <label
                            className="form-check-label"
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
                                  className="btn btn-purple btn-circle"
                                  style={{ backgroundColor: 'purple' }}
                                ></button>
                              </div>
                              <div className="color-f">紫色</div>
                            </div>
                          </div>
                          <div className="p-2">
                            <div className="d-flex flex-column">
                              <div>
                                <button
                                  type="button"
                                  className="btn btn-primary btn-circle"
                                ></button>
                              </div>
                              <div className="color-f">紫色</div>
                            </div>
                          </div>
                          <div className="p-2">
                            <div className="d-flex flex-column">
                              <div>
                                <button
                                  type="button"
                                  className="btn btn-primary btn-circle"
                                ></button>
                              </div>
                              <div className="color-f">紫色</div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex flex-row justify-content-around mb-2">
                          <div className="p-2">
                            <div className="d-flex flex-column">
                              <div>
                                <button
                                  type="button"
                                  className="btn btn-primary btn-circle"
                                ></button>
                              </div>
                              <div className="color-f">紫色</div>
                            </div>
                          </div>
                          <div className="p-2">
                            <div className="d-flex flex-column">
                              <div>
                                <button
                                  type="button"
                                  className="btn btn-primary btn-circle"
                                ></button>
                              </div>
                              <div className="color-f">紫色</div>
                            </div>
                          </div>
                          <div className="p-2">
                            <div className="d-flex flex-column">
                              <div>
                                <button
                                  type="button"
                                  className="btn btn-primary btn-circle"
                                ></button>
                              </div>
                              <div className="color-f">紫色</div>
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
                      <div className="accordion-body px-1">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            $1,500以下
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            $1,500 - $3,000
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            $3,001 - $5,999
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="page-content-wrapper">
              <div className="container-fluid">
                <div className="row row-cols-1 row-cols-md-3 g-4 row-cols-sm-2">
                  <div className="col-6 col-sm-6 col-md-4">
                    <div className="card w-350 no-border f-16">
                      <img
                        src="/images/product/list/p1-thumb.webp"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body no-space-x">
                        <p className="card-text note-text ">萬寶龍</p>
                        <p className="card-text h5 ">萬寶龍鋼筆</p>
                        <span className="text-my-notice">$1,990</span>
                        <div
                          style={{
                            position: 'absolute',
                            top: '3%',
                            right: '5%',
                          }}
                        >
                          <Heart />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card w-350 no-border f-16">
                      <img
                        src="/images/product/list/p1-thumb.webp"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body no-space-x">
                        <p className="card-text note-text ">萬寶龍</p>
                        <p className="card-text h5 ">萬寶龍鋼筆</p>
                        <span className="text-my-notice">$1,990</span>
                        <div
                          style={{
                            position: 'absolute',
                            top: '3%',
                            right: '5%',
                          }}
                        >
                          <Heart />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card w-350 no-border f-16">
                      <img
                        src="/images/product/list/p1-thumb.webp"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body no-space-x">
                        <p className="card-text note-text ">萬寶龍</p>
                        <p className="card-text h5 ">萬寶龍鋼筆</p>
                        <span className="text-my-notice">$1,990</span>
                        <div
                          style={{
                            position: 'absolute',
                            top: '3%',
                            right: '5%',
                          }}
                        >
                          <Heart />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card w-350 no-border f-16">
                      <img
                        src="/images/product/list/p1-thumb.webp"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body no-space-x">
                        <p className="card-text note-text ">萬寶龍</p>
                        <p className="card-text h5 ">萬寶龍鋼筆</p>
                        <span className="text-my-notice">$1,990</span>
                        <div
                          style={{
                            position: 'absolute',
                            top: '3%',
                            right: '5%',
                          }}
                        >
                          <Heart />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card w-350 no-border f-16">
                      <img
                        src="/images/product/list/p1-thumb.webp"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body no-space-x">
                        <p className="card-text note-text ">萬寶龍</p>
                        <p className="card-text h5 ">萬寶龍鋼筆</p>
                        <span className="text-my-notice">$1,990</span>
                        <div
                          style={{
                            position: 'absolute',
                            top: '3%',
                            right: '5%',
                          }}
                        >
                          <Heart />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card w-350 no-border f-16">
                      <img
                        src="/images/product/list/p1-thumb.webp"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body no-space-x">
                        <p className="card-text note-text ">萬寶龍</p>
                        <p className="card-text h5 ">萬寶龍鋼筆</p>
                        <span className="text-my-notice">$1,990</span>
                        <div
                          style={{
                            position: 'absolute',
                            top: '3%',
                            right: '5%',
                          }}
                        >
                          <Heart />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card w-350 no-border f-16">
                      <img
                        src="/images/product/list/p1-thumb.webp"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body no-space-x">
                        <p className="card-text note-text ">萬寶龍</p>
                        <p className="card-text h5 ">萬寶龍鋼筆</p>
                        <span className="text-my-notice">$1,990</span>
                        <div
                          style={{
                            position: 'absolute',
                            top: '3%',
                            right: '5%',
                          }}
                        >
                          <Heart />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card w-350 no-border f-16">
                      <img
                        src="/images/product/list/p1-thumb.webp"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body no-space-x">
                        <p className="card-text note-text ">萬寶龍</p>
                        <p className="card-text h5 ">萬寶龍鋼筆</p>
                        <span className="text-my-notice">$1,990</span>
                        <div
                          style={{
                            position: 'absolute',
                            top: '3%',
                            right: '5%',
                          }}
                        >
                          <Heart />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card w-350 no-border f-16">
                      <img
                        src="/images/product/list/p1-thumb.webp"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body no-space-x">
                        <p className="card-text note-text ">萬寶龍</p>
                        <p className="card-text h5 ">萬寶龍鋼筆</p>
                        <span className="text-my-notice">$1,990</span>
                        <div
                          style={{
                            position: 'absolute',
                            top: '3%',
                            right: '5%',
                          }}
                        >
                          <Heart />
                        </div>
                      </div>
                    </div>
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
      </div>
    </>
  )
}
