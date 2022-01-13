import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../actions/todo'
import { Container, TxtHead, InputTodo, ForInput, ButtonAdd, ButtonNav, TxtBtn } from '../styled/homeStyled'
const Home = ({navigation}) => {

    const [todo, setTodo] = useState('')
    const dispatch = useDispatch()
    const submitTodo = (todo) => dispatch(addTodo(todo))

    return (
        <Container>
            <TxtHead>
                Notes
            </TxtHead>
            <ForInput>
                <InputTodo
                    placeholder="Masukan Task"
                    value={todo}
                    onChangeText={(todo) => setTodo(todo)}
                    selectTextOnFocus={true}
                />
                <ButtonAdd onPress={() => {
                    submitTodo(todo)
                    setTodo('')
                }}>
                    <TxtBtn>Input</TxtBtn>
                </ButtonAdd>
                <ButtonNav onPress={() => navigation.navigate('List Todo')}>
                    <TxtBtn>Todo List</TxtBtn>
                </ButtonNav>
            </ForInput>
        </Container>
    )
}

export default Home
