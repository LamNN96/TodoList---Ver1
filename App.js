/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import TodoList from './src/components/TodoList';
import TaskDetail from './src/components/TaskDetail';


export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: TodoList,
      
    },
    Detail: {
      screen: TaskDetail
    }
  },
  {
    initialRouteName: 'Home',
  }
)

const AppContainer = createAppContainer(AppNavigator)
const styles = StyleSheet.create({

});
