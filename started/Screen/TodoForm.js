import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../actions/todo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {ListTodo, TxtList, DeleteBtn} from '../styled/homeStyled'
const TodoList = () => {

    const todos = useSelector((state) => state.todoReducer.todoList)
    const dispatch = useDispatch()
    const deleteCurrent = (key) => dispatch(deleteTodo(key))
    return (
        <FlatList
            data={todos}
            keyExtractor={(item, index) => item.key.toString()}
            renderItem={({ item }) => (
                <ListTodo>
                    <TxtList>{item.name}</TxtList>
                    <DeleteBtn onPress={() => deleteCurrent(item.key)}>
                        <FontAwesome name="trash-o" size={26} color="white"/>
                    </DeleteBtn>
                </ListTodo>
            )}
        />
    )
}
export default TodoList
