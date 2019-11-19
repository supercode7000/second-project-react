import React from 'react';

const TodoItem = (props) => {

    return (
        <article>
            <input type="checkbox" checked={props.status} />
            <label >{props.task}</label>
        </article>);
}

export default TodoItem;