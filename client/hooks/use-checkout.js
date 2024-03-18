import { createContext, useState, useContext, useEffect } from 'react'

//1.建立與導出
export const CheckoutContext = createContext(null)
// 協助全站(_app.js)裡套用Provider的元件，集中要使用的狀態
export function CheckoutProvider({ children }) {
  // 共享用狀態(state)
  const [formData, setFormData] = useState({})
  console.log(formData)

  return (
    <CheckoutContext.Provider
      value={{ formData, setFormData }}
      //用value屬性傳入共享用狀態(state)
    >
      {children}
    </CheckoutContext.Provider>
  )
}
// 給消費者們(consumers)，包裝好專用於此context的勾子名稱
export const useCheckout = () => useContext(CheckoutContext)
