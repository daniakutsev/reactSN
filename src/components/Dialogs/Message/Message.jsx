import s from './../Dialogs.module.css'

const Message = (props) => {
    return (
        <div className={s.message + '' + s.active}>{props.message}</div>
    )
}


export default Message;