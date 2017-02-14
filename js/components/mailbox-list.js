import React from 'react'
import {Link} from 'react-router'

const MailboxLink = ({type}) => (
  <li>
    <Link to={`${type}`}>{type}</Link>
  </li>
);

export default function MailboxList({emails}) {
  const mailboxes = Object.keys(emails);
  const html = mailboxes.map((type, index) => (
      <MailboxLink key={type} type={type} />
    )
  );
  return (
    <ul>
      {html}
    </ul>
  )
}
