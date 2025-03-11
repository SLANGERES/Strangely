import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import StartScreen from './StartScreen';
import SignUp from './SignUp';
import Login from './Login';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <SignUp/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,  // Ensures the app takes up the full screen
  },
  container: {
    flex: 1,  
    backgroundColor:"#000"
  },
});

export default App;
