import React from 'react'
import {Link} from 'react-router'

export default function EmailList(props) {

  return (
    <div>
      <ul>
        <li>
          <Link to="mailbox-one/email-1">
            <strong>From: Ryan</strong> Subject: Hello Ryan
          </Link>
        </li>
        <li>
          <Link to="mailbox-two/email-2">
            <strong>From: Bob</strong> Subject: Hello Bob
          </Link>
        </li>
      </ul>
      <Link to="/">Back</Link>
    </div>
  )
}
