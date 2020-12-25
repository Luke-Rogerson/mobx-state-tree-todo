/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'

import { SafeAreaView } from 'react-native'

import * as eva from '@eva-design/eva'
import { ApplicationProvider, Layout } from '@ui-kitten/components'

import { StoreProvider } from './components/StoreProvider/StoreProvider'

import { TodoList } from './components/TodoList/TodoList'
import { AddTodo } from './components/AddTodo/AddTodo'

const HomeScreen: React.FC = () => {
    return (
        <Layout style={{ flex: 1, justifyContent: 'space-between' }}>
            <TodoList />
            <AddTodo />
        </Layout>
    )
}

export const App: React.FC = () => {
    return (
        <StoreProvider>
            <ApplicationProvider {...eva} theme={eva.light}>
                <SafeAreaView
                    style={{ flex: 1, justifyContent: 'space-between' }}
                >
                    <HomeScreen />
                </SafeAreaView>
            </ApplicationProvider>
        </StoreProvider>
    )
}
