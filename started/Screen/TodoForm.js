import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../actions/todo';
const TodoList = () => {

    const todos = useSelector((state) => state.todoReducer.todoList)
    const dispatch = useDispatch()
    const deleteCurrent = (key) => dispatch(deleteTodo(key))
    return (
        <FlatList
            data={todos}
            keyExtractor={(item, index) => item.key.toString()}
            renderItem={({ item }) => (
                <>
                    <Text>{item.name}</Text>
                    <Text>{item.key}</Text>
                    <TouchableOpacity onPress={() => deleteCurrent(item.key)}>
                        <Text>Hapus</Text>
                    </TouchableOpacity>
                </>
            )}
        />
    )
}
export default TodoList
