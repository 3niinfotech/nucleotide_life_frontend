import { AppRegistry } from 'react-native';
import App from './App';

// Register the app
AppRegistry.registerComponent('nucleotide_life_frontend', () => App);

// Run the app
AppRegistry.runApplication('nucleotide_life_frontend', {
  initialProps: {},
  rootTag: document.getElementById('root'),
});
