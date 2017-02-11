import React from 'react'
import {Link} from 'react-router'

export default function MailboxList(props) {

  return (
    <ul>
      <li><Link to="mailbox-1">Mailbox One</Link></li>
      <li><Link to="mailbox-2">Mailbox Two</Link></li>
    </ul>
  )
}
