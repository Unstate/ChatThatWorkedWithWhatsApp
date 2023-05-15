import React, { useEffect, useState } from 'react';
import Chat from './components/Chat';
import Form from './components/Form';
import { Item } from './types/props';
import classes from './styles/App.module.css'

function App() {
  const [idInstance, setIdInstance] = useState<string>('1101820153')
  const [apiTokenInstance, setApiTokenInstance] = useState<string>('231a58f0ed6a48628dec284eb14b7c5864a46445e31a4012a3')
  const [friendNumber, setFriendNumber] = useState<string>('79022424210')
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false)
  const [friendMessage, setFriendMessage] = useState([])
  const [chat, setChat] = useState<Item[]>([])
  const [isRead, setIsRead] = useState<boolean>(false)
  const [isOk, setIsOk] = useState<boolean>(false)
  const [message, setMessage] = useState('')
  const [whoTyped, setWhoTyped] = useState(false)

  // useEffect(()=>{
  //   console.log(chat)
  //   console.log(Array.isArray(chat))
  // },[chat])

  return (
    <div className={classes.appWrapper}>
      {isButtonClicked
        ? <Chat
          idInstance={idInstance}
          apiTokenInstance={apiTokenInstance}
          friendNumber={friendNumber}
          friendMessage={friendMessage}
          setFriendMessage={setFriendMessage}
          chat={chat}
          setChat={setChat}
          setIsButtonClicked={setIsButtonClicked}
          isOk={isOk}
          setIsOk={setIsOk}
          isRead={isRead}
          setIsRead={setIsRead}
          message={message}
          setMessage={setMessage}
          whoTyped={whoTyped}
          setWhoTyped={setWhoTyped}></Chat>
        : <Form
          idInstance={idInstance}
          setIdInstance={setIdInstance}
          apiTokenInstance={apiTokenInstance}
          setApiTokenInstance={setApiTokenInstance}
          friendNumber={friendNumber}
          setFriendNumber={setFriendNumber}
          setIsButtonClicked={setIsButtonClicked}
          isButtonClicked={isButtonClicked}></Form>}
    </div>
  );
}

export default App;
