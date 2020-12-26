import { useContext } from 'react'

import { StoreContext } from '../../components/StoreProvider/StoreProvider'
import { TodoListType } from '../../models/TodoList/TodoList'

export const useStore = (): TodoListType => {
    return useContext(StoreContext)
}
