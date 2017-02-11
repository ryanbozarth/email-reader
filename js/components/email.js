import React from 'react'
import {Link} from 'react-router'


export default function Email() {

  const props = {
    title: 'Title',
    to: 'Ryan',
    from: 'Bob',
    content: 'Hey there, how are you?'
  }
  return (
    <div>
      <h5>Subject: {props.title}</h5>
      <p>To: {props.to}</p>
      <p>From: {props.from}</p>
      <p>{props.content}</p>
    <Link to="/mailbox-one">Back</Link>
    </div>

  )
};
