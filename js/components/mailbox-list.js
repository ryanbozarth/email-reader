import React from 'react'
import {Link} from 'react-router'


export default function MailboxList(props) {

  const mailboxes = Object.keys(props.emails).map((mailboxType, index) => {
    console.log(mailboxType)
    return (
      <ul>
        <li><Link to={mailboxType.[index]} key={index}>{mailboxType.[index]}</Link></li>
        <li><Link to="mailbox-2">Mailbox Two</Link></li>
      </ul>
    )
  });
}
