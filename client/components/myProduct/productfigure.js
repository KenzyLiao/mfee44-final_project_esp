import React, { useState } from 'react'

const ProductFigure = ({ image, brand, name, price }) => {
  const formattedPrice = price.toLocaleString()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="card border-0 shadow"
      style={{
        width: '100%',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        transition: 'transform 0.3s ease',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={image}
        className="card-img-top"
        alt={name}
        style={{ width: 'auto', height: '300px', objectFit: 'cover' }}
      />
      <div className="card-body no-space-x ">
        <p className="text-p ">{brand}</p>
        <p
          className="text-h4 mb-5"
          style={{
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
            overflow: 'hidden',
          }}
          v
        >
          {name}
        </p>
        <div style={{ position: 'absolute', bottom: '3%', left: '5%' }}>
          <span className="text-my-notice text-h5 ">${formattedPrice}</span>
        </div>
        <div style={{ position: 'absolute', top: '3%', right: '5%' }}></div>
      </div>
    </div>
  )
}

export default ProductFigure
