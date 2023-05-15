export interface ChatProps {
    idInstance: string;
    apiTokenInstance: string;
    friendNumber: string;
    friendMessage: FriendMessage[];
    setFriendMessage: Function;
    chat: Item[];
    setChat: Function;
    setIsButtonClicked: Function;
    isOk: boolean;
    setIsOk: Function;
    isRead: boolean;
    setIsRead: Function;
    message: string;
    setMessage: Function;
    whoTyped: boolean;
    setWhoTyped: Function;
}

interface FriendMessage {
    textMessage: string;
    isTemplateMessage: boolean;
}

export interface Item {
    message: string;
    whoTyped: boolean;
}

export interface MessageProps {
    isOk: boolean;
    isRead: boolean;
    children: React.ReactNode;
    whoTyped: boolean;
}

export interface FormProps {
    idInstance: string;
    apiTokenInstance: string;
    friendNumber: string;
    setIdInstance: Function;
    setApiTokenInstance: Function;
    setFriendNumber: Function;
    isButtonClicked: boolean;
    setIsButtonClicked: Function;
}
