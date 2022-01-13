import { ADD_TASK, DELETE_TASK } from "../actions/type";

const initialState = {
    todoList : []
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                todoList: state.todoList.concat({
                    key: Math.floor(Math.random() * 10000),
                    name: action.data
                })
            }
        case DELETE_TASK:
            return{
                ...state,
                todoList: state.todoList.filter((item) => item.key !== action.key)
            };
        default:
            return state;
    }
}
export default todoReducer;