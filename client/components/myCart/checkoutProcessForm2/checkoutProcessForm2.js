// CheckoutProcessForm.js
import React, { useEffect, useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { IoIosArrowRoundBack, IoIosFiling } from 'react-icons/io'
import {
  MdPerson,
  MdReceiptLong,
  MdOutlinePayments,
  MdLocalShipping,
} from 'react-icons/md'

export default function CheckoutProcessForm() {
  const router = useRouter()

  const [formData, setFormData] = useState({
    shipping: '宅配', // Default to home delivery
    firstName: '',
    lastName: '',
    email: '',
    mobilePhone: '',
    // Home delivery info
    country: '',
    township: '',
    postcode: '',
    address: '',
    // Store pickup info
    storeID: '',
    storeName: '',
    storeAddress: '',
    // Common info
    invoiceType: '2', // Default to donation
    mobileBarcode: '', // Mobile carrier number when invoiceType is 3
    payType: 'LinePay', // Default payment type
  })

  useEffect(() => {
    // Code to load data from localStorage or URL parameters
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    // Implement submission logic here
    router.push('/cart/confirmation')
  }

  return (
    <Container className="my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-h4 text-my-black d-flex align-items-center">
          <IoIosFiling className="me-2" size="24px" />
          Shipping Method
        </h2>
        <Link href="/cart">
          <div className="d-flex align-items-center text-decoration-none">
            <IoIosArrowRoundBack size="18px" />
            Return to cart
          </div>
        </Link>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Check
            type="radio"
            label="Home Delivery"
            name="shipping"
            id="homeDelivery"
            value="宅配"
            onChange={handleChange}
            checked={formData.shipping === '宅配'}
          />
          <Form.Check
            type="radio"
            label="7-11 Delivery"
            name="shipping"
            id="storeDelivery"
            value="7-11"
            onChange={handleChange}
            checked={formData.shipping === '7-11'}
          />
        </Form.Group>

        {/* Conditionally render form fields based on the shipping method */}
        {formData.shipping === '宅配' && (
          <>
            <h3>Home Delivery Address</h3>
            {/* Insert home delivery address fields here */}
          </>
        )}
        {formData.shipping === '7-11' && (
          <>
            <h3>7-11 Store Details</h3>
            {/* Insert 7-11 store selection fields here */}
          </>
        )}

        <Button type="submit" className="mt-4">
          Submit Order
        </Button>
      </Form>
    </Container>
  )
}
