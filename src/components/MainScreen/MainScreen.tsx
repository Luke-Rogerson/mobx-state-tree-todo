import React from 'react'
import { Layout } from '@ui-kitten/components'

import { AddTodo } from '../AddTodo/AddTodo'
import { TodoList } from '../TodoList/TodoList'

export const MainScreen: React.FC = () => {
    return (
        <Layout style={{ flex: 1, justifyContent: 'space-between' }}>
            <TodoList />
            <AddTodo />
        </Layout>
    )
}
