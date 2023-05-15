import React from 'react'
import classes from './../styles/Chat.module.css';
import axios from 'axios';
import Message from './Message';
import { ChatProps } from '../types/props';


const Chat: React.FC<ChatProps> = ({ idInstance, apiTokenInstance, friendNumber, chat, setFriendMessage, setChat, setIsButtonClicked, isOk, isRead, setIsOk, setIsRead, message,setMessage,whoTyped,setWhoTyped }) => {



    const clearInput = () => {
        setMessage('')
    }

    const sendMessage = () => {
        const endpointURL = `https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiTokenInstance}`;

        const headers = {
            'Content-Type': 'application/json'
        };

        const data = {
            chatId: friendNumber + '@c.us',
            message: message
        };

        axios.post(endpointURL, data, { headers })
            .then((response) => {
                console.log(`[Response]: ${response.data}`);
            })
            .catch((error) => {
                console.error(`[ERROR ${error.response.status}]: ${error.response.statusText} ${error.response.data}`);
            });
        clearInput()
        processingNotification()
        setWhoTyped(true)
        setChat([...chat, { message: message, whoTyped: true }])
    }

    const processingNotification = () => {
        const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://api.green-api.com/waInstance${idInstance}/ReceiveNotification/${apiTokenInstance}`,
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                const receiptId = response.data.receiptId
                if (response.data.body.typeWebhook === 'outgoingMessageStatus' && response.data.body.status === 'read') {
                    setIsRead(true)
                }
                else if (response.data.body.typeWebhook === 'outgoingMessageStatus' && response.data.body.status === 'delivered') {
                    setIsOk(true)
                }
                else if (response.data.body.typeWebhook === 'incomingMessageReceived') {
                    setWhoTyped(false)
                    setFriendMessage(response.data.body.messageData.textMessageData.textMessage)
                    setChat([...chat, { message: response.data.body.messageData.textMessageData.textMessage, whoTyped: false }])
                }
                deleteNot(receiptId)
            })
            .catch((error) => {
                console.log(error);
            });

    }



    const deleteNot = (receiptId: number) => {
        let config = {
            method: 'delete',
            maxBodyLength: Infinity,
            url: `https://api.green-api.com/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${receiptId}`,
            headers: {}
        };
        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });

    }


    return (
        <>
            <div className={classes.chatContainer}>
                <div className={classes.infoContainer}>
                    <button className={`${classes.sendButton} ${classes.backButton}`} onClick={() => setIsButtonClicked(false)}>Back</button>
                    <div className={classes.info}>Chat with: {friendNumber}</div>
                </div>
                <div className={classes.chat}>
                    {chat ? chat.map(letter =>
                        <Message
                        isOk={isOk}
                        isRead={isRead}
                        whoTyped={letter.whoTyped}>{letter.message}</Message>) : <></>}
                </div>
                <div className={classes.inputContainer}>
                    <input className={classes.message} type='text' value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Enter your message'></input>
                    <button className={classes.sendButton} onClick={sendMessage}>Send</button>
                    <button className={classes.sendButton} onClick={processingNotification}>Get</button>
                </div>
            </div>
        </>
    )
}

export default Chat