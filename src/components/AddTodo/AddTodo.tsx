/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { Input, Button } from '@ui-kitten/components'
import { useStore } from '../../hooks/useStore/useStore'

interface AddTodoProps {}

export const AddTodo: React.FC<AddTodoProps> = ({}) => {
    const [value, setValue] = useState('')

    const store = useStore()

    return (
        <KeyboardAvoidingView
            {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
            contentContainerStyle={{ flex: 1 }}
            keyboardVerticalOffset={44}
        >
            <Input
                placeholder="Enter todo"
                value={value}
                onChangeText={(nextValue) => setValue(nextValue)}
            />
            <Button
                onPress={() => {
                    if (value.length === 0) return
                    store.addTodo(value)
                    setValue('')
                }}
            >
                ADD TODO
            </Button>
        </KeyboardAvoidingView>
    )
}
