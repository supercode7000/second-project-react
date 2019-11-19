import React from 'react'
import TodoItem from './TodoItem'
import todoListData from '../todoListData'

const TodoList = () => {
    console.log(todoListData)
    const todo = todoListData.map(todoListDataItem =>
        <TodoItem key={todoListDataItem.id} task={todoListDataItem.task} status={todoListDataItem.status} />
    )
    return (
        <section>
            {todo}
            <TodoItem task="first task" status={true} />
            <TodoItem task="second task" status={false} />
            <TodoItem task="third task" status={true} />
        </section>
    )
}

export default TodoList