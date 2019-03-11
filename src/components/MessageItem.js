import React from 'react';

const MessageItem = (props) => {
    return (
        <div>
            <p>{props.item.id}</p>
            <h2>{props.item.text}</h2>
        </div>
    );
};

export default MessageItem;