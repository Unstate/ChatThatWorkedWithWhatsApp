import { MessageProps } from '../types/props'
import classes from './../styles/Message.module.css'


const Message: React.FC<MessageProps> = ({ isOk, isRead, children, whoTyped }) => {
    return (
        <div>
            {whoTyped
                ? <div className={classes.forwaredFromYouContainer}>
                    <div className={classes.forwaredFromYou}>{children}</div>
                    {(isOk && isRead) ? <div>✔✔</div> : <div>✔</div>}
                </div>
                : <div className={classes.forwaredToYouContainer}>
                    <div className={classes.forwaredToYou}>{children}</div>
                    {(isOk && isRead) ? <div>✔✔</div> : <div>✔</div>}
                </div>}
        </div>
    )
}

export default Message