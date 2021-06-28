import React from 'react';
import { StyleSheet, View, SafeAreaView} from 'react-native';
import Box from './src/component/box';

const App = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.block}>
    <Box/>
    </View>   
  </SafeAreaView>
  
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  block: {
    backgroundColor: 'white',
    height: 300,
  },
});

export default App;