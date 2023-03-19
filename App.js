import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Title from '../my-app/src/components/Title/index.js';
import Form from './src/components/Form/index.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
        < Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop: 80,
  },
});
