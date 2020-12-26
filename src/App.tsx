/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persist } from 'mst-persist'
import * as eva from '@eva-design/eva'
import { ApplicationProvider } from '@ui-kitten/components'

import { StoreProvider } from './components/StoreProvider/StoreProvider'
import { TodoListType } from './models/TodoList/TodoList'
import { setupRootStore } from './models/RootStore'
import { TODO_LIST_STORAGE_KEY } from './constants'
import { MainScreen } from './components/MainScreen/MainScreen'

export const App: React.FC = () => {
    const [rootStore, setRootStore] = useState<TodoListType | null>(null)

    useEffect(() => {
        setupRootStore().then((todoStore) => {
            setRootStore(todoStore)
        })
    }, [])

    // Don't render app until store is properly setup
    if (!rootStore) return null

    // persist created todos
    persist(TODO_LIST_STORAGE_KEY, rootStore, {
        storage: AsyncStorage,
        jsonify: true,
    }).then(() => {
        // eslint-disable-next-line no-console
        console.log('Persisted todo store')
    })

    return (
        <StoreProvider todoList={rootStore}>
            <ApplicationProvider {...eva} theme={eva.light}>
                <SafeAreaView
                    style={{ flex: 1, justifyContent: 'space-between' }}
                >
                    <MainScreen />
                </SafeAreaView>
            </ApplicationProvider>
        </StoreProvider>
    )
}
