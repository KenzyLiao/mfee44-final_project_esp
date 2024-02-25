import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import { BsFillStarFill, BsClockFill, BsFillPeopleFill } from 'react-icons/bs'

export default function CourseCard(props) {
  const image = props.image
  const title = props.title
  const teacher = props.teacher
  const description = props.description
  const rankStarNum = props.rankStarNum
  const totalTime = props.totalHour + '小時' + props.totalMinute + '分鐘'
  const totalPeople = props.totalPeople
  const price = props.price

  return (
    <Card style={{ width: '100%', borderRadius: 0 }}>
      <Card.Img
        style={{
          borderRadius: 0,
          width: '100%',
          paddingTop: '56.25%', // 9 / 16 = 0.5625
          background: `url(${image}) no-repeat center center`,
          backgroundSize: 'cover',
        }}
        variant="top"
      />
      <Card.Body>
        <Card.Title
          style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {title}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          By
          {/* <Link to="">{teacher}</Link> */}
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
        <Card.Text className="d-flex flex-column flex-lg-row align-items-lg-center">
          <div>
            <BsFillStarFill style={{ padding: '5px', fontSize: '24px' }} />{' '}
            {rankStarNum}
          </div>
          <div>
            <BsClockFill style={{ padding: '5px', fontSize: '24px' }} />
            {totalTime}
          </div>
          <div>
            <BsFillPeopleFill style={{ padding: '5px', fontSize: '24px' }} />
            {totalPeople}人
          </div>
        </Card.Text>
        <Card.Text className="text-h3">NT${price}</Card.Text>
      </Card.Body>
    </Card>
  )
}
