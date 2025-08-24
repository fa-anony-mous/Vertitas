import { AppRegistry } from 'react-native';
import App from '../App';

// Register the app
AppRegistry.registerComponent('main', () => App);

// Run the app
AppRegistry.runApplication('main', {
  rootTag: document.getElementById('root')
});
