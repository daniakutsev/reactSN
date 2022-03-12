import React from "react";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState();

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC());
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyAC(body))
    }


    return (
        <Dialogs sendMessageClick={onSendMessageClick} updateNewMessageBody={onNewMessageChange}
                 dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages}
                 newMessageBody={state.dialogsPage.newMessageBody}/>
    )
}

export default DialogsContainer;