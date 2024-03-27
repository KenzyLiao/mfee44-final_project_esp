import React ,{useEffect,useState}from 'react'
import Lottie from 'react-lottie';
import animationData from '../../data/Animation-pen.json';


export default function TestLoader() {

    const [loading, setLoading] = useState(false);

      // 動畫
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  useEffect(()=>{
    setLoading(true)
  },[])

  return (
    <>
 <div className="lottie-container">
      <div className="lottie-animation">
        <Lottie options={defaultOptions} height={'200px'} width={'200px'}/>
      </div>
    </div>
    <style jsx>{`
    .lottie-container {
        display: flex;
        justify-content: center; /* 水平居中 */
        align-items: center; /* 垂直居中 */
        height: 100vh; /* 使容器高度为视口高度，确保垂直居中有足够的空间 */
        width: 100%; /* 使容器宽度充满屏幕 */
      }
    `}</style>
    </>
  )
}