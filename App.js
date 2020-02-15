import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Welcome from './src/screens/Welcome'
import Todo from './src/screens/Todo'

const AppNavigator = createStackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      title: 'Welcome to TODO App'
    }
  },
  Todo: {
    screen: Todo,
    navigationOptions: {
      title: 'TodoApp'
    }
  },
}, {
  initialRouteName: 'Welcome'
});

export default createAppContainer(AppNavigator);