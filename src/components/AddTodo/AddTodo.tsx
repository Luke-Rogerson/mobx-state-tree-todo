/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { Input, Button } from '@ui-kitten/components'
import { useStore } from '../../hooks/useStore/useStore'
import { IPHONEX_OFFSET } from '../../constants'

export const AddTodo: React.FC = () => {
    const [value, setValue] = useState('')

    const store = useStore()

    return (
        <KeyboardAvoidingView
            {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}
            contentContainerStyle={{ flex: 1 }}
            // I hope you're using an iPhone X-sized device!
            keyboardVerticalOffset={IPHONEX_OFFSET}
        >
            <Input
                accessibilityLabel="Enter todo"
                accessibilityHint="Add a new todo"
                placeholder="Enter todo"
                value={value}
                onChangeText={(nextValue) => setValue(nextValue)}
            />
            <Button
                accessibilityLabel="Add todo"
                accessibilityHint="Add a new todo"
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
