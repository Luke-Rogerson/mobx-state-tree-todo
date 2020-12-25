import React, { createContext } from 'react'
import { TodoList, TodoListType } from '../../models/TodoList'

const todos = TodoList.create({ todos: [{ text: 'Feed the dog' }] })

export const StoreContext = createContext<TodoListType>({} as TodoListType)

export const StoreProvider: React.FC = ({ children }) => {
    return (
        <StoreContext.Provider value={todos}>{children}</StoreContext.Provider>
    )
}
