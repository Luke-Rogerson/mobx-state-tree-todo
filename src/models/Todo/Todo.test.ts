import { Todo } from './Todo'

const todoText = 'Feed the dog'

test('should contain todo and completed info', () => {
    const todoStore = Todo.create({ text: todoText })
    expect(todoStore.text).toBe(todoText)
    expect(todoStore.completed).toBe(false)
})

test('should be able to add a due date', () => {
    const todoStore = Todo.create({ text: todoText })
    const date = new Date()
    todoStore.setDueDate(date)
    expect(todoStore.due).toBe(date)
})

test('should be able to edit the todo', () => {
    const todoStore = Todo.create({ text: todoText })
    expect(todoStore.text).toBe(todoText)
    const newTodo = 'Water the plants'
    todoStore.edit(newTodo)
    expect(todoStore.text).toBe(newTodo)
})

test('should be able to mark todo as completed', () => {
    const todoStore = Todo.create({ text: todoText })
    expect(todoStore.completed).toBe(false)
    todoStore.toggleCompleted()
    expect(todoStore.completed).toBe(true)
})
