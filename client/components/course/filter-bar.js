import { BsChevronRight } from 'react-icons/bs'
import { BsSearch } from 'react-icons/bs'

export default function FilterBar({ filterType, filterState }) {
  const handleFilterType = (e) => {
    filterType = e.target.innerText
    console.log(filterType)
  }
  return (
    <>
      <div className="filter my-2 d-flex flex-column flex-md-row align-items-center mb-4">
        <div className="filter-class d-flex align-items-center me-4 text-h3">
          <button
            className={`btn p-0 text-h3 ${
              filterType === '文字' ? 'btn-active' : ''
            }`}
            onClick={handleFilterType}
          >
            文字
          </button>
          <p className="mb-1 fs-5 text-h3">&nbsp;|&nbsp;</p>
          <button className="btn p-0 text-h3" onClick={handleFilterType}>
            繪畫
          </button>
        </div>
        <div className="filter-state d-flex align-items-center me-4">
          <button className="btn p-0 text-h3">最熱門</button>
          <p className="mb-1 fs-5 text-h3">&nbsp;|&nbsp;</p>
          <button className="btn p-0 text-h3">依人數</button>
          <p className="mb-1 fs-5 text-h3">&nbsp;|&nbsp;</p>
          <button className="btn p-0 text-h3">依時間</button>
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
