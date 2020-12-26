/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { List, Divider, Text, Layout } from '@ui-kitten/components'
import { observer } from 'mobx-react'

import { useStore } from '../../hooks/useStore/useStore'

import { Todo } from '../Todo/Todo'

export const TodoList: React.FC = observer(() => {
    const store = useStore()

    return (
        <List
            style={{ flex: 1 }}
            data={store.getTodos().slice()}
            contentContainerStyle={
                store.getTodos().slice().length === 0 && { flex: 1 }
            }
            ItemSeparatorComponent={Divider}
            renderItem={(props) => <Todo {...props} />}
            ListEmptyComponent={
                <Layout
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text
                        accessibilityHint="Nothing yet"
                        accessibilityLabel="No todos yet"
                        category="h3"
                    >
                        Nothing yet...
                    </Text>
                </Layout>
            }
        />
    )
})
