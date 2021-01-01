import React from 'react'
import { render, fireEvent } from '../../testing/test-utils'

import { EditTodo, EditTodoProps } from './EditTodo'

const editTodoMock = jest.fn()
const originalTodoText = 'Feed the dog'
const updatedTodoText = 'Feed the cats'

const props: EditTodoProps = {
    setShowModal: jest.fn(),
    todo: {
        completed: false,
        due: new Date(),
        edit: editTodoMock,
        id: 'abc123',
        remove: jest.fn(),
        setDueDate: jest.fn(),
        text: originalTodoText,
        todo: jest.fn(),
        toggleCompleted: jest.fn(),
    },
}

test('it should show the original todo text', () => {
    const { getByDisplayValue } = render(<EditTodo {...props} />)
    expect(getByDisplayValue(originalTodoText))
})

test('you should be able to edit (update) the todo text', () => {
    const { getByDisplayValue, getByLabelText } = render(
        <EditTodo {...props} />
    )
    const input = getByDisplayValue(originalTodoText)

    fireEvent.changeText(input, updatedTodoText)
    expect(getByDisplayValue(updatedTodoText))

    fireEvent.press(getByLabelText('Done'))
    expect(editTodoMock).toHaveBeenCalledTimes(1)
    expect(editTodoMock).toHaveBeenCalledWith(updatedTodoText)
})
