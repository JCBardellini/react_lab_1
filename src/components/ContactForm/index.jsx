import React, { useState } from 'react'
import './index.css'

const ContactForm = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")


  return (
    <>
    <h2>Contact Form</h2>
    <form>
      <p>Name</p>
      <input type="text" />
      <p>Email</p>
      <input type="text" />
      <p>message</p>
      <input type="text" />
    </form>
    </>
  )
}

export default ContactForm