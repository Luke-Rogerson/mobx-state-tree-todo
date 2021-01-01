import React, { useState, Dispatch, SetStateAction } from 'react'
import { Button, Input, Card } from '@ui-kitten/components'
import { TodoType } from '../../models/Todo/Todo'

export interface EditTodoProps {
    todo: TodoType
    setShowModal: Dispatch<SetStateAction<boolean>>
}

export const EditTodo: React.FC<EditTodoProps> = ({ todo, setShowModal }) => {
    const [editInputValue, setEditInputValue] = useState(todo.text)

    return (
        <Card disabled style={{ flexDirection: 'row' }}>
            <Input
                accessibilityLabel="Edit todo"
                accessibilityHint={`Edit ${todo.text}`}
                value={editInputValue ?? ''}
                onChangeText={(nextValue) => {
                    setEditInputValue(nextValue)
                }}
                style={{ width: 200 }}
            />
            <Button
                accessibilityLabel="Done"
                accessibilityHint="Complete editing"
                onPress={() => {
                    if (editInputValue.length > 0) {
                        todo.edit(editInputValue)
                    }
                    setShowModal(false)
                }}
                status="primary"
                size="tiny"
                style={{ marginRight: 5 }}
            >
                DONE
            </Button>
        </Card>
    )
}
