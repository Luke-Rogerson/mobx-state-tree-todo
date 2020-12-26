/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react'
import { ListRenderItem } from 'react-native'
import {
    ListItem,
    Text,
    ButtonGroup,
    Button,
    Modal,
    Datepicker,
    Layout,
} from '@ui-kitten/components'

import { TodoType } from '../../models/Todo/Todo'
import { EditTodo } from '../EditTodo/EditTodo'

type TodoProps = ListRenderItem<TodoType>

export const Todo: TodoProps = ({ item: todo, index }) => {
    const [showModal, setShowModal] = useState(false)
    const [dueDate, setDueDate] = useState(new Date())

    // update todo's due date whenever new date is selected
    useEffect(() => {
        todo.setDueDate(dueDate)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dueDate])

    return (
        <>
            <ListItem
                accessibilityLabel={
                    todo.completed ? 'Mark as incompleted' : 'Mark as completed'
                }
                onPress={() => todo.toggleCompleted()}
                title={(evaProps) => {
                    return (
                        <Text
                            {...evaProps}
                            style={{
                                textDecorationLine: todo.completed
                                    ? 'line-through'
                                    : 'none',
                                textDecorationStyle: 'solid',
                            }}
                        >{`${index + 1}) ${todo.text}`}</Text>
                    )
                }}
                accessoryRight={() => (
                    <Layout>
                        <ButtonGroup size="tiny">
                            <Button
                                accessibilityLabel="Edit"
                                accessibilityHint="Edit this todo"
                                onPress={() => setShowModal(true)}
                                status="primary"
                                size="tiny"
                                style={{ marginRight: 5 }}
                            >
                                EDIT
                            </Button>
                            <Button
                                accessibilityLabel="Remove"
                                accessibilityHint="Remove this todo"
                                onPress={() => todo.remove()}
                                status="danger"
                                size="tiny"
                            >
                                REMOVE
                            </Button>
                        </ButtonGroup>
                        <Datepicker
                            accessibilityLabel="Set due date"
                            accessibilityHint="Set due date for this todo"
                            style={{ marginTop: 5 }}
                            date={dueDate}
                            onSelect={(nextDate) => setDueDate(nextDate)}
                            size="small"
                            min={new Date()}
                            max={
                                new Date(
                                    Date.now() + 1000 * 60 * 60 * 24 * 1000000
                                )
                            }
                        />
                    </Layout>
                )}
            />
            <Modal
                visible={showModal}
                backdropStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                onBackdropPress={() => setShowModal(false)}
            >
                <EditTodo todo={todo} setShowModal={setShowModal} />
            </Modal>
        </>
    )
}
