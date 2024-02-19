import React, { useState } from 'react'
import { Form, Button, Container, Collapse } from 'react-bootstrap'
import styles from './checkoutProcessForm.module.scss'
import { MdLocalShipping, MdPerson, MdReceiptLong } from 'react-icons/md'

export default function CheckoutProcessForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobilePhone: '',
    country: '',
    township: '',
    address: '',
    invoiceType: '2', //1非營業人電子發票 ２捐贈（默認）  3手機條碼
    mobileBarcode: '', //手機載具 當invoiceType為3時,才會有資料
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    // 檢查是否正在更改發票類型
    if (name === 'invoiceType') {
      // 如果發票類型不是3，則將手機載具的資料設為空值
      const mobileBarcodeValue = value === '3' ? formData.mobileBarcode : ''
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
        mobileBarcode: mobileBarcodeValue,
      }))
    } else {
      // 對於其他情況，正常更新表單資料
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData) // 處理表單數據...
  }

  return (
    <Container className="my-5">
      <h2 className="text-h4 text-my-black my-3 d-flex align-items-center">
        <MdPerson className="me-2 text-my-black  " size="24px" />
        收件人資料
      </h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formFirstName">
          <Form.Label className="text-h5 text-my-black">姓</Form.Label>
          <Form.Control
            className={`${styles['form-control']}`}
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="請輸入姓氏"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLastName">
          <Form.Label className="text-h5 text-my-black">名</Form.Label>
          <Form.Control
            className={`${styles['form-control']}`}
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="請輸入名字"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-h5 text-my-black">電子郵箱</Form.Label>
          <Form.Control
            className={`${styles['form-control']}`}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="請輸入您的電子郵箱"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMobilePhone">
          <Form.Label className="text-h5 text-my-black">行動電話</Form.Label>
          <Form.Control
            className={`${styles['form-control']}`}
            type="tel"
            name="mobilePhone"
            value={formData.mobilePhone}
            onChange={handleChange}
            placeholder="請輸入便於聯繫的行動電話"
          />
        </Form.Group>

        <h2 className="text-h4 text-my-black mb-3 mt-5 d-flex align-items-center">
          <MdLocalShipping className="me-2 text-my-black" size="24px" />
          運送資料
        </h2>
        <Form.Group className="mb-3" controlId="formCity">
          <Form.Label className="text-h5 text-my-black">城市</Form.Label>
          <Form.Control
            className={styles['form-control']}
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="請輸入城市"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDistrict">
          <Form.Label className="text-h5 text-my-black">鄉鎮區</Form.Label>
          <Form.Control
            className={styles['form-control']}
            type="text"
            name="township"
            value={formData.township}
            onChange={handleChange}
            placeholder="請輸入鄉鎮區"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAddress">
          <Form.Label className="text-h5 text-my-black">地址</Form.Label>
          <Form.Control
            className={styles['form-control']}
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="請輸入地址"
          />
        </Form.Group>
        <h2 className="text-h4 text-my-black mb-3 mt-5 d-flex align-items-center">
          <MdReceiptLong className="me-2 text-my-black" size="24px" />
          發票類型
        </h2>
        <Form.Group>
          <Form.Check
            className={`text-h5 text-my-black ${styles['form-check']} `}
            type="radio"
            label="非營業人電子發票"
            name="invoiceType"
            id="invoiceType1"
            value="1"
            onChange={handleChange}
            checked={formData.invoiceType === '1'}
          />
          <Form.Check
            className={`text-h5 text-my-black ${styles['form-check']} `}
            type="radio"
            label="雲端發票-捐贈"
            name="invoiceType"
            id="invoiceType2"
            value="2"
            onChange={handleChange}
            checked={formData.invoiceType === '2'}
          />
          <Form.Check
            className={`text-h5 text-my-black ${styles['form-check']} `}
            type="radio"
            label="雲端發票-手機條碼"
            name="invoiceType"
            id="invoiceType3"
            value="3"
            onChange={handleChange}
            checked={formData.invoiceType === '3'}
          />
        </Form.Group>
        <Collapse in={formData.invoiceType === '3'}>
          <Form.Group className="mb-3" controlId="formMobileBarcode">
            <Form.Control
              className={`${styles['form-control']}`}
              type="text"
              name="mobileBarcode"
              value={formData.mobileBarcode}
              onChange={handleChange}
              placeholder="請輸入手機載具 ex:/545142S"
            />
          </Form.Group>
        </Collapse>

        <Button className="my-button1 ms-auto" onClick={handleSubmit}>
          提交
        </Button>
      </Form>
    </Container>
  )
}
