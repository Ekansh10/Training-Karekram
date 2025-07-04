import React, {type FC} from "react";

type MessageType ={
    msg:String,
}

const Message: FC<MessageType> = (props: MessageType) => {
    return(
        <div>
            <h1>
            {props.msg};
            </h1>
        </div>
    )
}
export default Message;

