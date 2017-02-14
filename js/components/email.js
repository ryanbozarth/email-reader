import React from 'react'
import {Link} from 'react-router'


export default function Email({emails}) {
const {inbox} = emails
console.log(inbox)
  return (
    <div>
      <h5>Subject: {inbox.title}</h5>
      <p>To: {emails.to}</p>
      <p>From: {emails.from}</p>
      <p>{emails.content}</p>
    <Link to="/email">Back</Link>
    </div>
  )
};
