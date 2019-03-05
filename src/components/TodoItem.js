import React from 'react';

const TodoItem = (props) => {
  return (
    <div>
       <div className="todoItem">
        <input type="checkbox" checked={props.item.completed}/>
        <p>{props.item.text}</p>
      </div>
    </div>
  );
};

export default TodoItem;
