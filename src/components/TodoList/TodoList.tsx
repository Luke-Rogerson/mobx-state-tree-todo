/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { List, Divider, Text, Layout } from '@ui-kitten/components'
import { observer } from 'mobx-react-lite'

import { useStore } from '../../hooks/useStore/useStore'

import { todoListStyles } from './TodoList.styles'
import { Todo } from '../Todo/Todo'

export const TodoList: React.FC = observer(() => {
    const store = useStore()

    return (
        <List
            style={todoListStyles.container}
            data={store.getTodos().slice()}
            ItemSeparatorComponent={Divider}
            renderItem={(props) => <Todo {...props} />}
            ListEmptyComponent={
                <Layout
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderColor: 'red',
                    }}
                >
                    <Text category="p1">Nothing yet...</Text>
                </Layout>
            }
        />
    )
})
