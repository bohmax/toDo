import React from "react";
import {StyleSheet, View, Button, TextInput} from "react-native"

class TodoInput extends React.Component {
    state = {
        value: '',
    }
    onChangeTextHandler = (text) => {
        this.setState({value: text})
    }
    onAddTodo = () => {
        this.props.onAddTodo(this.state.value)
        this.setState({
            value: ''
        })
    }
    render () {
        return (
            <View style={style.InputContainer}>
                <TextInput value={this.state.value} onChangeText={this.onChangeTextHandler} placeholder={"scrivi todo"} style={style.Input}/>
                <Button
                    title={"Invio"}
                    onPress={this.onAddTodo}
                />
            </View>
        )
    }
}

const style = StyleSheet.create({
    Input: {
        width: '80%',
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 10,
        paddingLeft: 3,
        fontSize: 18
    },
    InputContainer: {
        marginTop: 50,
        padding: 50,
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 5
    },
})

export default TodoInput
