import React from 'react'
import { FaPenNib } from "react-icons/fa";

export default function ContactDiv() {
  return (
    <>
      <img className="img-fluid" src="/images/myService/isp55.jpg" alt="" />
      <div className="slogan shape-ex1">
        <h4 className="">Ink the Moments, Script Your Style.</h4>
        <hr />
        <h5>書寫的藝術傳承</h5>
        <p>
          匯聚世界級鋼筆，提供超過四十款精選筆款。從經典款到限量版
          <br />
          ，每一支鋼筆都是工匠精神的傳承。
          <br />
          不僅外型典雅，書寫流暢度更是無與倫比。
        </p>
      </div>
      <div className="contact w-25 text-center shape-ex2" d-flex="" flex-column="">
        <h2>聯絡我們</h2>
        <form action="" className='text-end'>
          <input className="w-75 mx-auto" type="text" placeholder="主旨" />
          <input className="w-75 mx-auto" type="email" placeholder="電子郵件" />
          <textarea
            className="w-75 mx-auto"
            name=""
            id="opinion"
            cols={30}
            rows={5}
            placeholder="意見內容"
            defaultValue={''}
          />
          <button type="submit"><FaPenNib  size={32}/></button>
        </form>
      </div>
      <style jsx>{`
        .slogan {
          position: absolute;
          top: 25%;
          left: 3%;
        }
        .slogan h4 {
          color: transparent;
          -webkit-text-stroke: 0.7px #ffffff;
        }
        .slogan p,
        .slogan h5 {
          text-align: left;
        }
        .shape-ex1 {
          margin: 0 auto;
          animation: fade 2s linear 1s 1, leftIn 2s linear 1s 1;
        }
        .shape-ex2 {
          margin: 0 auto;
          animation: fade 2s linear 1s 1, rightIn 2s linear 1s 1;
        }
        @keyframes fade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes leftIn {
          from {
            transform: translate3d(-40%, 0, 0);
          }
          to {
            transform: none;
          }
        }
        @keyframes rightIn {
          from {
            transform: translate3d(40%, 0, 0);
          }

          to {
            transform: none;
          }
        }

        .contact {
          position: absolute;
          top: 20%;
          right: 5%;
          background-color: rgba(2, 38, 68, 0.3);
          border-radius: 10px;
        }
        .contact input,
        .contact textarea {
          display: block;
          margin-block: 3px;
          background-color: #ffffff00;
          border: 0px;
          border-bottom: 2px solid rgb(0, 0, 0);
        }
        #opinion {
          background-color: #ffffff76;
        }
        button{
          color:white;
          background-color:transparent;
          border:none;
          margin:5px;
        }
      `}</style>
    </>
  )
}
