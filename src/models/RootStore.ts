import AsyncStorage from '@react-native-async-storage/async-storage'
import { TodoList, TodoListType } from './TodoList'
import { TODO_LIST_STORAGE_KEY } from '../constants'

export const setupRootStore = async (): Promise<TodoListType> => {
    const persistedTodos = await AsyncStorage.getItem(TODO_LIST_STORAGE_KEY)

    if (persistedTodos) {
        return TodoList.create({
            // full tree not persisted - https://github.com/agilgur5/mst-persist#how-it-works
            todos: (JSON.parse(persistedTodos) as Pick<TodoListType, 'todos'>)
                .todos,
        })
    }

    return TodoList.create({})
}
