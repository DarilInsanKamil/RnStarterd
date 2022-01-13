import { ADD_TASK, DELETE_TASK } from './type'

export const addTodo = (todo) => (
    {
        type: ADD_TASK,
        data: todo
    }
)
export const deleteTodo = (key) => (
    {
        type: DELETE_TASK,
        key : key
    }
)