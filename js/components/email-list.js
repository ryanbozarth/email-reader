import React from 'react'
import {Link} from 'react-router'


export default function EmailList({params, emails}) {
  const emailList = emails[params.mailbox]
  return (
    <div>
      <ul>
          {emailList.map((email, i) => (
            <li key={i}>
              <Link to={`/${params.mailbox}/${email.id}`}>
                <strong>From: {email.from}</strong> Subject: {email.title}
              </Link>
            </li>
          ))}
      </ul>
      <Link to="/">Back</Link>
    </div>
  )
}
