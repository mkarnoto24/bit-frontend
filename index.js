/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// import { Provider } from 'react-redux';
// import { createStore } from 'redux';

// const store = createStore(reducers);

AppRegistry.registerComponent(appName, () => App);
