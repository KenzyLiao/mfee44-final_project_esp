import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Link from 'next/link'
import {
  BsFillStarFill,
  BsClockFill,
  BsFillPeopleFill,
  BsFillEasel2Fill,
  BsFillPenFill,
} from 'react-icons/bs'

export default function CourseCard({
  id,
  name,
  price,
  description,
  image,
  teacher_name,
  rank,
  total_minute,
  student_num,
  category_name,
}) {
  return (
    <>
      <Link href={`http://localhost:3000/course/${id}`}>
        <Card style={{ width: '100%', borderRadius: 0 }}>
          <Card.Img
            style={{
              borderRadius: 0,
              width: '100%',
              paddingTop: '56.25%', // 9 / 16 = 0.5625
              background: `url(http://localhost:3005/course/images/course_${
                image.split('_')[1].split('.')[0] % 25
              }.jpg) no-repeat center center / cover`,
            }}
            variant="top"
          />

          <Card.Body>
            <Card.Title
            // style={{
            //   overflow: 'hidden',
            //   textOverflow: 'ellipsis',
            //   whiteSpace: 'nowrap',
            // }}
            >
              {name}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              <p>{`By ${teacher_name}`}</p>
            </Card.Subtitle>
            <Card.Text
              style={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                whiteSpace: 'normal',
              }}
            >
              {description}
            </Card.Text>
            <Card.Text className="d-flex flex-lg-row align-items-lg-center">
              <span className="me-1">
                <BsFillStarFill
                  style={{
                    fontSize: '16px',
                    marginBottom: '2px',
                    marginRight: '5px',
                  }}
                />
                {rank}
              </span>
              <span className="me-1">
                <BsClockFill style={{ padding: '5px', fontSize: '24px' }} />
                {total_minute}分鐘
              </span>
              <span className="me-1">
                <BsFillPeopleFill
                  style={{ padding: '5px', fontSize: '24px' }}
                />
                {student_num}人
              </span>
              <span className="me-1">
                {category_name === '手寫字' ? (
                  <BsFillPenFill className=" mb-1 me-1 " />
                ) : (
                  <BsFillEasel2Fill className="mb-1 me-1" />
                )}
                {category_name}
              </span>
            </Card.Text>
            <Card.Text className="text-h3 text-my-notice">
              ${price.toLocaleString()}
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </>
  )
}
