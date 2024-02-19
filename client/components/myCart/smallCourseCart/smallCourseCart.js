import React from 'react'

export default function SmallCourseCart() {
  return (
    <>
      <h4 className="text-p text-my-black mb-2 mt-5">課程(2)</h4>
      <div
        className="smallCourseCart-container d-flex flex-row"
        style={{ height: 'auto' }}
      >
        <div className="" style={{ width: '90px', height: '90px' }}>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3756b152d5542ff9c0cdab42853d4985d27d3a76202f6a15edb7c1043febec84?apiKey=549d2602ce5843b4bd5df38129685e36&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3756b152d5542ff9c0cdab42853d4985d27d3a76202f6a15edb7c1043febec84?apiKey=549d2602ce5843b4bd5df38129685e36&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3756b152d5542ff9c0cdab42853d4985d27d3a76202f6a15edb7c1043febec84?apiKey=549d2602ce5843b4bd5df38129685e36&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3756b152d5542ff9c0cdab42853d4985d27d3a76202f6a15edb7c1043febec84?apiKey=549d2602ce5843b4bd5df38129685e36&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3756b152d5542ff9c0cdab42853d4985d27d3a76202f6a15edb7c1043febec84?apiKey=549d2602ce5843b4bd5df38129685e36&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3756b152d5542ff9c0cdab42853d4985d27d3a76202f6a15edb7c1043febec84?apiKey=549d2602ce5843b4bd5df38129685e36&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3756b152d5542ff9c0cdab42853d4985d27d3a76202f6a15edb7c1043febec84?apiKey=549d2602ce5843b4bd5df38129685e36&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3756b152d5542ff9c0cdab42853d4985d27d3a76202f6a15edb7c1043febec84?apiKey=549d2602ce5843b4bd5df38129685e36&"
            className="card-img-top object-fit-cover"
            alt="..."
          />
        </div>
        <div className="card-body d-flex flex-column justify-content-center ">
          <div className=" ms-3 text-h4 text-my-black ">好想寫字</div>
          <div className=" ms-3 text-p text-my-black ">NT$88,888</div>
        </div>
        <style jsx>{`
          .smallCourseCart-container {
            padding-bottom: 30px;
            border-bottom: 0.75px solid var(--my-black);
          }
        `}</style>
      </div>
    </>
  )
}
