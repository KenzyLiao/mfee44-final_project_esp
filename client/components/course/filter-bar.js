import { BsChevronRight } from 'react-icons/bs'
import { BsSearch } from 'react-icons/bs'
import Link from 'next/link'

export default function FilterBar({ setFilterType, setFilterState }) {
  let filterType = ''
  let filterState = ''

  const handleFilterType = (e) => {
    let text = document.querySelector('.handwriting')
    let painting = document.querySelector('.painting')
    filterType = e.target.innerText
    setFilterType(filterType)
    if (filterType === '文字') {
      text.classList.add('btn-active')
      painting.classList.remove('btn-active')
    } else {
      painting.classList.add('btn-active')
      text.classList.remove('btn-active')
    }
  }
  const handleFilterState = (e) => {
    let hot = document.querySelector('.hot')
    let price = document.querySelector('.price')
    let time = document.querySelector('.time')
    filterState = e.target.innerText
    setFilterState(filterState)
    if (filterState === '最熱門') {
      hot.classList.add('btn-active')
      price.classList.remove('btn-active')
      time.classList.remove('btn-active')
    } else if (filterState === '依價格') {
      price.classList.add('btn-active')
      hot.classList.remove('btn-active')
      time.classList.remove('btn-active')
    } else {
      time.classList.add('btn-active')
      hot.classList.remove('btn-active')
      price.classList.remove('btn-active')
    }
  }
  return (
    <>
      <div className="filter my-2 d-flex flex-column flex-md-row align-items-center mb-4">
        <div className="filter-class d-flex align-items-center me-4 text-h3">
          <Link
            href="http://localhost:3000/course/overview?type=1"
            onClick={handleFilterType}
          >
            <span className="handwriting">文字</span>
          </Link>
          <p className="mb-1 fs-5 text-h3">&nbsp;|&nbsp;</p>
          <Link
            href="http://localhost:3000/course/overview?type=2"
            onClick={handleFilterType}
          >
            <span className="painting">繪畫</span>
          </Link>
        </div>
        <div className="filter-state d-flex align-items-center me-4">
          <Link
            href="http://localhost:3000/course/overview?state=1"
            onClick={handleFilterState}
          >
            <span className="hot text-h3">最熱門</span>
          </Link>
          <p className="mb-1 fs-5 text-h3">&nbsp;|&nbsp;</p>
          <Link
            href="http://localhost:3000/course/overview?state=2"
            onClick={handleFilterState}
          >
            <span className="price text-h3">依價格</span>
          </Link>
          <p className="mb-1 fs-5 text-h3">&nbsp;|&nbsp;</p>
          <Link
            href="http://localhost:3000/course/overview?state=3"
            onClick={handleFilterState}
          >
            <span className="time text-h3">依時間</span>
          </Link>
        </div>
        <div className="search d-flex align-items-center">
          <BsSearch className="text-h3 me-2" />
          <input type="text " />
        </div>
        <div></div>
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
