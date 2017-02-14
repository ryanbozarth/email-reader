import React from 'react'
import MailboxList from './mailbox-list'
import EMAILS from '../emails'

// const email = () => ()

export default function App(props) {
  return (
    <div>
      <h1>Email Reader</h1>
      <div className="content">
        <aside>
          <MailboxList emails={EMAILS}/>
        </aside>
        <main>
          {React.cloneElement(props.children, {emails:EMAILS})}
        </main>
      </div>
    </div>
  )
}
