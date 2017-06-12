/**
 * Created by hari on 6/12/17.
 */
import React from 'react'
import {TodoItem} from './TodoItem'

export const TodoList = (props) => {
    return (
        <div className="Todo-List">
            <ul>
                {props.todos.map(todo => <TodoItem key={todo.id} {...todo}/>)}
            </ul>
        </div>
    )
}