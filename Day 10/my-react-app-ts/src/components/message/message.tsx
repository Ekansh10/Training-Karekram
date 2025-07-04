import React, {type FC} from "react";

type MessageModal ={
    msg:string;
    to:string;
    from:string;
}
type MessageType ={
    msgdetails:MessageModal,
}

const Message: FC<MessageType> = (props: MessageType) => {
    return(
        <div>
            <h1>
            {props.msgdetails.msg}
            </h1>
        </div>
    )
}
export default Message;

