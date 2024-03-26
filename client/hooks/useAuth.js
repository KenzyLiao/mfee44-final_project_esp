import { useEffect } from 'react'
import Router from 'next/router'

export function useAuth() {
  useEffect(() => {
    // 定義驗證 Token 的函數
    const verifyToken = async () => {
      try {
        const response = await fetch('http://localhost:3005/api/verify-token', {
          method: 'POST',
          credentials: 'include', // 確保發送 cookies
        })

        const data = await response.json()

        // 如果認證不成功，則重定向到登入頁面
        if (data.status !== 'success') {
          //清空localstorage的購物車與收件人資料
          localStorage.removeItem('check_info')
          localStorage.removeItem('selectedCouponID')
          window.location.href = '/member/login'
        }
      } catch (error) {
        console.error('Error in token verification:', error)
        //清空localstorage的購物車與收件人資料
        localStorage.removeItem('cart')
        localStorage.removeItem('check_info')
        localStorage.removeItem('selectedCouponID')
        window.location.href = '/member/login'
      }
    }

    // 調用驗證函數
    verifyToken()
  }, []) // 空依賴陣列確保效果只在組件掛載時運行
}
