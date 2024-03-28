import React, { useEffect, useState } from 'react'
import FluidLayout from '@/components/layout/fluid-layout'
import { LuCheckCircle2 } from 'react-icons/lu'
import { useRouter } from 'next/router'
import { useCart } from '@/hooks/user-cart'
import Link from 'next/link'
import Lottie from 'react-lottie'
import animationData from '../../data/Animation-pen.json'

export default function ConfirmationPage() {
  const [amount, setAmount] = useState('')
  const [loading, setLoading] = useState(true);

  const router = useRouter()

  const { formatPrice } = useCart()

   // 動畫
   const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  useEffect(() => {
    setLoading(true); // 開始加載數據
    if (router.isReady) {
      const queryAmount = router.query.amount
      if (queryAmount) {
        setAmount(queryAmount)
      } else {
        // 若amount不存在，重定向到首頁
        router.push('/')
      }
    }

    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)
    return () => clearTimeout(timer)

  }, [router, router.query.amount])


  if (loading) {
    return (
      <>
        <div className=" background-container my-3 ">
          <div className="confirm-box">
            <div className="lottie-container">
              <div className="lottie-animation">
                <Lottie
                  options={defaultOptions}
                  height={'200px'}
                  width={'200px'}
                />
                <h1 className="text-h2 text-my-primary ">訂單處理中...</h1>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .lottie-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            width: 100%;
          }

          .background-container {
            min-height: 80svh;

            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
          }
          .confirm-box {
            width: 1000svh;
            height: 300px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            background-color: #fff;
          }
        `}</style>
      </>
    )
  } else {
    return (
      <>
        <div className=" background-container my-3 ">
          <div className="confirm-box">
            <h1 className="text-h1 text-my-primary ">
              <div className=" loader mb-3">
                <LuCheckCircle2 />
              </div>
              付款成功
            </h1>
            <p className="text-h4 text-my-notice my-2">{formatPrice(amount)}</p>
            <Link href={`/member/orders`}>
              <div className="my-btn-check mt-3">查看訂單詳情</div>
            </Link>
          </div>
        </div>
  
        <style jsx>{`
          .background-container {
            min-height: 100svh;
            background-image: url('/images/common/cis-bg1.svg');
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
          }
          .confirm-box {
            width: 1000svh;
            height: 300px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            background-color: #fff;
          }
          .my-btn-check {
            padding: 8.25px 20px 9.25px 20px;
  
            border-radius: 37.5px;
            background-color: var(--my-primary);
            font-size: var(--h6);
            font-weight: 400;
            color: var(--my-white);
            cursor: pointer;
  
            &:hover {
              background-color: transparent;
              border-radius: 37.5px;
              border: 1.125px solid var(--primary, #7c7477);
              color: var(--my-primary);
            }
          }
          @keyframes spin {
            0%,
            100% {
              color: var(--my-primary);
              transform: scale(1.2);
              opacity: 0.5;
            }
            50% {
              color: var(--my-secondary);
              transform: scale(1);
              opacity: 1;
            }
          }
          .loader {
            animation: spin 1.5s ease-in-out infinite; /* 應用旋轉動畫 */
          }
        `}</style>
      </>
    )
  }
  
}

ConfirmationPage.getLayout = function (page) {
  return <FluidLayout>{page}</FluidLayout>
}
