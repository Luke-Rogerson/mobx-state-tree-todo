import { TodoList } from './TodoList'

const todos = [{ text: 'Feed the dog' }, { text: 'Water the plants' }]

test('should have a list of todos', () => {
    const todoListStore = TodoList.create({
        todos,
    })
    const todosInStore = todoListStore.getTodos()

    expect(todosInStore).toHaveLength(2)
    expect(todosInStore[0].text).toBe(todos[0].text)
    expect(todosInStore[1].text).toBe(todos[1].text)
})

test('should be able to add a todo', () => {
    const todoListStore = TodoList.create({
        todos,
    })
    expect(todoListStore.getTodos()).toHaveLength(2)
    todoListStore.addTodo('Do homework')
    expect(todoListStore.getTodos()).toHaveLength(3)
})

test('should be able to remove a todo', () => {
    const todoListStore = TodoList.create({
        todos,
    })
    expect(todoListStore.getTodos()).toHaveLength(2)

    const todosInStore = todoListStore.getTodos()
    expect(todoListStore.removeTodo(todosInStore[0]))
    expect(todoListStore.getTodos()).toHaveLength(1)
})
