import React from 'react'
import {Link} from 'react-router'


export default function Email({params, emails}) {
const emailList = emails[params.mailbox]
const email = emailList[params.emailId]
console.log(emailList)
  return (
    <div>
      <h5>Subject: {email.title}</h5>
      <p>To: {email.to}</p>
      <p>From: {email.from}</p>
      <p>{email.content}</p>
    <Link to="/email">Back</Link>
    </div>
  )
};
