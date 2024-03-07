import { BsChevronRight } from 'react-icons/bs'
import { BsSearch } from 'react-icons/bs'

export default function FilterBar({ setFilterType, setFilterState }) {
  let filterType = ''
  let filterState = ''

  const handleFilterType = (e) => {
    let textBtn = document.querySelector('.handwriting')
    let paintingBtn = document.querySelector('.painting')
    filterType = e.target.innerText
    setFilterType(filterType)
    console.log(filterType)
    if (filterType === '文字') {
      textBtn.classList.add('btn-active')
      paintingBtn.classList.remove('btn-active')
    } else {
      paintingBtn.classList.add('btn-active')
      textBtn.classList.remove('btn-active')
    }
  }
  const handleFilterState = (e) => {
    let hotBtn = document.querySelector('.hot')
    let peopleBtn = document.querySelector('.people')
    let timeBtn = document.querySelector('.time')
    filterState = e.target.innerText
    setFilterState(filterState)
    if (filterState === '最熱門') {
      hotBtn.classList.add('btn-active')
      peopleBtn.classList.remove('btn-active')
      timeBtn.classList.remove('btn-active')
    } else if (filterState === '依人數') {
      peopleBtn.classList.add('btn-active')
      hotBtn.classList.remove('btn-active')
      timeBtn.classList.remove('btn-active')
    } else {
      timeBtn.classList.add('btn-active')
      hotBtn.classList.remove('btn-active')
      peopleBtn.classList.remove('btn-active')
    }
  }
  return (
    <>
      <div className="filter my-2 d-flex flex-column flex-md-row align-items-center mb-4">
        <div className="filter-class d-flex align-items-center me-4 text-h3">
          <button
            className={`btn p-0 text-h3 handwriting`}
            onClick={handleFilterType}
          >
            文字
          </button>
          <p className="mb-1 fs-5 text-h3">&nbsp;|&nbsp;</p>
          <button
            className="btn p-0 text-h3 painting"
            onClick={handleFilterType}
          >
            繪畫
          </button>
        </div>
        <div className="filter-state d-flex align-items-center me-4">
          <button className="btn p-0 text-h3 hot" onClick={handleFilterState}>
            最熱門
          </button>
          <p className="mb-1 fs-5 text-h3">&nbsp;|&nbsp;</p>
          <button
            className="btn p-0 text-h3 people"
            onClick={handleFilterState}
          >
            依人數
          </button>
          <p className="mb-1 fs-5 text-h3">&nbsp;|&nbsp;</p>
          <button className="btn p-0 text-h3 time" onClick={handleFilterState}>
            依時間
          </button>
        </div>
        <div className="search d-flex align-items-center">
          <BsSearch className="text-h3 me-2" />
          <input type="text " />
        </div>
      </div>
      <style jsx>{`
        .btn,
        p {
          color: var(--my-secondary);
        }
        .btn:hover {
          color: var(--my-notice);
        }
        .btn-active {
          color: var(--my-notice);
        }
      `}</style>
    </>
  )
}
