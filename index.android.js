
import React, { Component } from 'react';
import {
  AppRegistry,
  Alert,
  StyleSheet,
  View,
  Text,
  Platform,
  Button,
  TextInput,
  FlatList
} from 'react-native';


export default class proj_one extends Component {

  constructor(props) {
    super(props)
    this.state = {
      todos: [],
    }
    this.todo = ''
  }

  _delTodo(task) {
    let { todos } = this.state
    let debug = '_delTodo'
    console.log(debug, task)
    console.log(debug, 'printing the array with index')
    for(let j=0; j < this.state.todos.length; j++) {
      console.log(j, todos[j]);
    }
    let index = 0;
    for(let i=0; i < todos.length; i++) {
      if (this.state.todos[i] === task) {
        console.log(debug, 'match found at ', i)
        index = i
        break
      }
    }
    console.log(debug, 'index', index)
    todos.splice(index, 1)
    this.setState({
      todos
    })
  }


  _onPressButton() {
    if (this.todo.length != 0) {
      this.setState({
        todos : [this.todo, ...this.state.todos]
      })
      Alert.alert('Task added to the list')
    }else {
      Alert.alert('Add something first')
    }
  }

  render() {
    console.log("current state ", this.state)
    let tasks = this.state.todos.map((todo) => {
      return {'key' : todo}
    })
    return(
      <View style={{padding: 10}}>
        <TextInput 
          style={{height: 40}}
          onChangeText={(text) => this.todo = text}
          placeholder='Add a task'
        />
        <View style={styles.buttonContainer}>
          <Button 
            onPress={() => this._onPressButton()}
            title="Add task"
          />
        </View>
        <View 
          style={{padding: 20}}
        >
          <FlatList
            data = {tasks}
            renderItem={({item}) =>
              <View>
                <Text style={styles.item}>{item.key}</Text>
                <Button
                  onPress = {() => this._delTodo(item.key)} 
                  title="Done"
                  color= "green"
                />
              </View>
            }
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 20
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  }
})


AppRegistry.registerComponent('proj_one', () => proj_one);
