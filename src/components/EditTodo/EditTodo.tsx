import React, { useState } from 'react'
import { Button, Input, Card } from '@ui-kitten/components'
import { TodoType } from '../../models/Todo'

interface EditTodoProps {
    todo: TodoType
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const EditTodo: React.FC<EditTodoProps> = ({ todo, setShowModal }) => {
    const [editInputValue, setEditInputValue] = useState(todo.text)

    return (
        <Card disabled style={{ flexDirection: 'row' }}>
            <Input
                value={editInputValue ?? ''}
                onChangeText={(nextValue) => {
                    setEditInputValue(nextValue)
                }}
                style={{ width: 200 }}
            />
            <Button
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
