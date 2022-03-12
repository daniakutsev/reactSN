import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";


const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    let messagesElements = props.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)


    let onSendMessageClick = () => {
        props.sendMessageClick();
    }
    let onNewMessageChange = (body) => {
        props.updateNewMessageBody(body)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <div>
                    <textarea value={props.newMessageBody} onChange={onNewMessageChange}/>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Add post</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;