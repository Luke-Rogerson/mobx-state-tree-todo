import React, { createContext } from 'react'
import { TodoListType } from '../../models/TodoList'

export const StoreContext = createContext<TodoListType>({} as TodoListType)

export interface StoreProviderProps {
    todoList: TodoListType
}

export const StoreProvider: React.FC<StoreProviderProps> = ({
    children,
    todoList,
}) => {
    return (
        <StoreContext.Provider value={todoList}>
            {children}
        </StoreContext.Provider>
    )
}
