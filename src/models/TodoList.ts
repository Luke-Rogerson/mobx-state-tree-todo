import { types, Instance, destroy } from 'mobx-state-tree'
import { Todo, TodoType } from './Todo'

export const TodoList = types
    .model({
        todos: types.array(Todo),
    })
    .actions((self) => ({
        addTodo: (text: string) => {
            self.todos.unshift({ text })
        },
        removeTodo(todo: TodoType) {
            destroy(todo)
        },
    }))
    .views((self) => ({
        getTodos: () => {
            return self.todos
        },
    }))

export type TodoListType = Instance<typeof TodoList>
