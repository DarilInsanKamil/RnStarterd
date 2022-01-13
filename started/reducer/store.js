import { combineReducers, createStore } from "redux";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
    todoReducer: todoReducer 
})

const configureStore = () => createStore(rootReducer)

export default configureStore;