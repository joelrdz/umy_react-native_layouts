import React from 'react';
import { StyleSheet, View } from 'react-native';

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
        <View style={styles.box4}></View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'cornflowerblue',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box1: {
    padding: 20,
    backgroundColor: 'navy'
  },
  box2: {
    padding: 20,
    backgroundColor: 'yellow'
  },
  box3: {
    padding: 20,
    backgroundColor: 'green'
  },
  box4: {
    padding: 20,
    backgroundColor: 'teal'
  }
});

export default App;
