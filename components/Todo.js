import React from "react";
import {Text, View, TouchableOpacity, StyleSheet} from "react-native"

const Todo = (props) => {
    return (
        <View style={styles.Output}>
            <TouchableOpacity onPress={props.onDeleteTodo}>
                <Text style={styles.deleteButton}>X</Text>
            </TouchableOpacity>
            <Text style={styles.Todo}>
                {props.title}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    Output: {
        backgroundColor: 'blue',
        justifyContent: "flex-start",
        alignItems: "center",
        paddingVertical: 10,
        marginVertical: 5,
        flexDirection: "row"
    },
    Todo: {
        color: "white",
        marginLeft: 20,
        fontSize: 18
    },
    deleteButton: {
        color: "white",
        marginLeft: 15,
        fontSize: 20,
    }
})
export default Todo;
