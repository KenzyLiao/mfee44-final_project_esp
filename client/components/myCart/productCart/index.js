import React from 'react'
import Link from 'next/link'
import ProductCardItem from '@/components/myCart/productCart/productCard'
import { IoIosArrowRoundBack } from 'react-icons/io'

export default function ProductCart() {
  return (
    <>
      <div className="product-navbar mt-4">
        <div className="d-flex justify-content-between ">
          <div className="text-my-black ">
            商品<span>(2)</span>
          </div>
          <Link href="/product" style={{ textDecoration: 'none' }}>
            <div className="d-flex align-items-center back-to-product-list ">
              <IoIosArrowRoundBack className="" size="18px" />
              繼續購物
            </div>
          </Link>
        </div>
      </div>
      <ProductCardItem />
      <ProductCardItem />

      <style jsx>{`
        .product-navbar {
          max-width: 723px;
          padding: 10px;
        }
        .back-to-product-list {
          border-bottom: 1px solid var(--my-black);
        }
      `}</style>
    </>
  )
}
