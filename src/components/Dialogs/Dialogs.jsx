import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


let dialogs = [
    {id: 1, name: "1"},
    {id: 2, name: "2"},
    {id: 3, name: "3"},
    {id: 4, name: "4"}
]

let dialogsElements = dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)

let messages = [

    {id: 1, message: "1"},
    {id: 2, message: "2"},
    {id: 3, message: "3"},
    {id: 4, message: "4"}
]

let messagesElements = messages.map(m => <Message id={m.id} message={m.message}/>)

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;