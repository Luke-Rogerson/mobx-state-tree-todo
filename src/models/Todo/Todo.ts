/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */

import { types, Instance, getRoot } from 'mobx-state-tree'
import { genId } from './Todo.utils'

export const Todo = types
    .model({
        text: types.string,
        completed: false,
        id: types.optional(types.identifier, genId),
        due: types.optional(types.Date, new Date()),
    })
    .actions((self) => ({
        toggleCompleted: () => (self.completed = !self.completed),
        edit: (text: string) => (self.text = text),
        // need to better resolve circlular dependencies - https://github.com/mobxjs/mobx-state-tree/issues/1330
        remove: () => getRoot<any>(self).removeTodo(self),
        setDueDate: (date: Date) => (self.due = date),
    }))
    .views((self) => ({
        todo: () => self.text,
    }))

export type TodoType = Instance<typeof Todo>
