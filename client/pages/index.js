import React from 'react'
import FluidLayout from '@/components/layout/fluid-layout'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import styles from './index.module.scss'

import ConceptSection from '@/components/home/conceptSection'
import Carosuel2 from '@/components/common/carosuel2'
import Carosuel2copy from '@/components/common/carosuel2copy'

import CardSection from '@/components/home/CardSection'

export default function Home() {
  return (
    <>
      <div className="row">
        {/* carosuel */}
        <div className={` col-lg-12 ${styles['carosuel']}`}>
          <Carosuel2copy />
        </div>
      </div>
      {/* hero-section */}
      <motion.div
        // initial={{ opacity: 0, scale: 0.8 }}
        // animate={{ opacity: 1, scale: 1 }}
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        transition={{
          type: 'fade',
          delay: 0.5,
          duration: 1,
          ease: 'easeInOut',
        }}
        className={`row  ${styles['hero-section']}`}
      >
        <div className="bg-primary col-lg-12">
          <div className="row">
            {/* hero-img */}
            <div className={`col-lg-6 bg-black ${styles['image-container']}`}>
              <Image
                src="/images/common/hero.png"
                layout="fill"
                objectFit="cover"
                alt="hero image"
              />

              <Link href="/product/list">
                <div className="my-button2">探索商品</div>
              </Link>
            </div>
            {/* hero-content */}

            <div className={`col-lg-6 bg-my-white d-flex`}>
              <div
                className={`m-auto ${styles['hero-text-body']} ${styles['hero-content']}`}
              >
                <div className={`${styles['text-top']}`}>
                  <h3 className="title text-h3 text-my-black">
                    書寫，非筆墨所致，而心靈所至 —— 墨韻雅筆
                  </h3>
                  <p className={` text-h4 text-my-gray ${styles['slogan']}`}>
                    透過每一滴墨水，連結每一次思考的深度
                  </p>
                  <p className={`text-p text-my-gray ${styles['intro']}`}>
                    從經典傳統到現代創新，每一支鋼筆都是對卓越工藝的致敬，墨韻雅筆，為愛筆者傾心打造，為書寫者傳情達意。點擊探索，開啟您與墨韻雅筆的非凡旅程。
                  </p>
                </div>
                <div className={` ${styles['text-down']}`}>
                  <p className={` text-h4 text-my-primary ${styles['title']}`}>
                    書寫藝術，筆尖流傳
                  </p>
                  <Link href="/product/list">
                    <div className="my-button2">探索商品</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      {/* concept */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          type: 'tween',
          delay: 0.5,
          duration: 1,
          ease: 'easeInOut',
        }}
      >
        <ConceptSection />
      </motion.div>

      <div className="row">
        <div className="col-lg-12 bg-my-white">
          <div className="text-h2 d-flex justify-content-center ">
            <div className="text-center ">
              <p className="text-my-secondary text-h4 my-2">- 職人推薦 -</p>
              極品工藝
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <CardSection />
          </div>
          <Link href={'/product/list'}>
            <div
              className={`my-button2 my-3  mx-auto ${styles['card-button']}`}
            >
              查看更多
            </div>
          </Link>
        </div>
        <div className="bg-warning col-lg-12">123</div>
      </div>
    </>
  )
}

Home.getLayout = function (page) {
  return <FluidLayout>{page}</FluidLayout>
}
