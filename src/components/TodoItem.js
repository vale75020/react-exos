import React from 'react';

const TodoItem = (props) => {
  return (
    <div>
       <div className="todoItem">
        <input 
        type="checkbox"
        checked={props.item.completed} 
        onChange={() => props.handleChange(props.item.id)}
        />
        <p>{props.item.text}</p>
      </div>
    </div>
  );
};

export default TodoItem;

/*
const TodoItem = (props) => {
  return (
    <div>
       <div className="todoItem">
        <input type="checkbox" checked={props.item.completed} onChange={()=> console.log("changed")}/>
        <p>{props.item.text}</p>
      </div>
    </div>
  );
};

export default TodoItem;
*/
