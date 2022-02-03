import { StyleSheet, View, FlatList } from 'react-native';
import React from "react";
import Todo from "./components/Todo"
import TodoInput from "./components/TodoInput";

export default class App extends React.Component {
  state = {
    todoList: [],
    id: 0
  }
  addToDoHandler = (value) => {
    if (value.trim() === "") {
      alert("Scrivi qualcosa")
      return
    }
    this.setState(prevState => {
      return {
        todoList: prevState.todoList.concat({value: value, id: prevState.id}),
        id: prevState.id + 1
      }
    })
  }
  deleteTodoHandler = (id) => {
    this.setState(prevState => {
      return {
        todoList: prevState.todoList.filter(e => e.id !== id)
      }
    })
  }
  render() {
    return (
        <View>
          <TodoInput onAddTodo={this.addToDoHandler} />
          <View>
            <FlatList data={this.state.todoList} renderItem={item =>
                <Todo onDeleteTodo={() => this.deleteTodoHandler(item.item.id)} title={item.item.value}/>
            }
            />
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
