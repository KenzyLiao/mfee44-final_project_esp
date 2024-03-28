import React, { useRef, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import CardGroup from '@/components/course/card-group.js'


import Lottie from 'react-lottie'
import animationData from '../../data/Animation-pen.json'

export default function CoursePage() {
  const [login, setLogin] = useState(false)
  const [courseOrder, setCourseOrder] = useState([])
  const [courseALL, setCourseALL] = useState([])
  const [collection, setCollection] = useState([])

  // 會員資料
  const [user, setUser] = useState({
    title: '',
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    birthdate: '',
    year: '',
    month: '',
    day: '',
  })
  const [loading, setLoading] = useState(true)
  console.log(user)
  // 定義年份、月份、日期的選項數組
  const years = Array.from(
    new Array(100),
    (_, index) => new Date().getFullYear() - index
  )
  const months = Array.from(new Array(12), (_, index) => index + 1)
  const days = Array.from(new Array(31), (_, index) => index + 1)

  // 載入時時獲取用戶數據
  useEffect(() => {
    setLoading(true)
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:3005/api/profile', {
          credentials: 'include',
        })

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`)
        }

        const data = await response.json()

        const newUser = {
          ...data,
          year: data.birthdate ? data.birthdate.split('-')[0] : '',
          month: data.birthdate ? data.birthdate.split('-')[1] : '',
          day: data.birthdate ? data.birthdate.split('-')[2] : '',
        }

        setUser(newUser)
        if (newUser.firstname === '') {
          setLogin(false)
        } else {
          setLogin(true)
        }
      } catch (error) {
        console.error('Failed to fetch user data:', error)
      } finally {
        const timer = setTimeout(() => {
          setLoading(false)
        }, 500)
        return () => clearTimeout(timer)
      }
    }
    fetchUserData()
  }, [])

  useEffect(() => {
    const fetchUserCourse = async () => {
      try {
        const response = await fetch(
          'http://localhost:3005/api/course/my_course'
        )

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`)
        }

        const data = await response.json()

        setCourseOrder(data)
      } catch (error) {
        console.error('Failed to fetch user course:', error)
      }
    }
    fetchUserCourse()
  }, [])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'http://localhost:3005/api/course/courseALL'
        )
        const data = await response.json()
        setCourseALL(data)
      } catch (error) {
        console.error('Error:', error)
      }
    }
    fetchData()
  }, [])
  useEffect(() => {
    const fetchCollectionData = async () => {
      try {
        const response = await fetch(
          'http://localhost:3005/api/course/collection'
        )
        const data = await response.json()
        setCollection(data)
      } catch (error) {
        console.error('Failed to fetch user data:', error)
      }
    }
    fetchCollectionData()
  }, [])
  // user course end

  let myCollection = collection.filter((item) => item.uid === user.user_id)
  let haveCollectionList = myCollection.map((item) => {
    return item.pid
  })
  console.log('myCollection', myCollection)
  let myCourse = myCollection.map((item) => {
    let course = courseALL.filter((course) => course.id === item.pid)
    return course[0]
  })

      // 動畫
      const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      }
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
                    <h1 className="text-h2 text-my-primary ">處理中...</h1>
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
      }

  return (
    <>
      <div className="text-h1 d-flex justify-content-center mb-5">我的收藏</div>
      <CardGroup data={myCourse} />
    </>
  )
}
