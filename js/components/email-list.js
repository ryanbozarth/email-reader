import React from 'react'
import {Link} from 'react-router'


export default function EmailList({emails}) {
const {inbox} = emails
  return (
    <div>
      <ul>
          {inbox.map((email, i) => (
            <li key={i}>
              <Link to={`/${email}/${email.id}`}>
                <strong>From: {email.from}</strong> Subject: {email.title}
              </Link>
            </li>
          ))}
      </ul>
      <Link to="/">Back</Link>
    </div>
  )
}
