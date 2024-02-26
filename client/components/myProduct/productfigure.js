import React from 'react'
import Heart from './heart-icon' // 假设 FavIcon 组件位于同一目录下的 FavIcon.js 文件中

const ProductFigure = () => {
  return (
    <div className="card m-2 border-0 shadow" style={{ width: '100%' }}>
      <img
        src="/images/product/list/p1-thumb.jpg"
        className="card-img-top"
        alt="Product 4"
      />
      <div className="card-body no-space-x">
        <p className="text-h6">MONTBLANC</p>
        <p className="text-h3">萬寶龍鋼筆</p>
        <span className="text-my-notice text-h4">$1,990</span>
        <div style={{ position: 'absolute', top: '3%', right: '5%' }}>
          <Heart />
        </div>
      </div>
    </div>
  )
}

export default ProductFigure
