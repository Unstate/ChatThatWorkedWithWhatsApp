import React from 'react'
import classes from './../styles/Form.module.css'
import { FormProps } from '../types/props';



const Form: React.FC<FormProps> = ({idInstance,setIdInstance,apiTokenInstance,setApiTokenInstance,friendNumber,setFriendNumber,isButtonClicked,setIsButtonClicked}) => {
  
    return (
        <div className={classes.formContainer}>
            <input className={classes.formInput} type='text' placeholder='Enter your id instance' value={idInstance} onChange={(e) => setIdInstance(e.target.value)}></input>
            <input className={classes.formInput} type='text' placeholder='Enter your api token instance' value={apiTokenInstance} onChange={(e) => setApiTokenInstance(e.target.value)}></input>
            <input className={`${classes.formInput} ${classes.lastInput}`} type='text' placeholder='Enter your friend number' value={friendNumber} onChange={(e) => setFriendNumber(e.target.value)}></input>
            <button className={classes.formButton} onClick={() => setIsButtonClicked(!isButtonClicked)}>Generate chat</button>
        </div>
    )
}

export default Form;