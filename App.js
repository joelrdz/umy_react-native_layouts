import React from 'react';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';

const App = () => {
  return (
    <>
      <ScrollView>
        <View style={{ flexDirection: 'row' }}>
          <Image style={styles.banner} source={require('./assets/img/bg.jpg')}/>
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>Qué hacer en Paris</Text>
          <ScrollView horizontal>
            <View>
              <Image style={styles.activity} source={require('./assets/img/act-1.jpg')} />
            </View>
            <View>
              <Image style={styles.activity} source={require('./assets/img/act-2.jpg')} />
            </View>
            <View>
              <Image style={styles.activity} source={require('./assets/img/act-3.jpg')} />
            </View>
            <View>
              <Image style={styles.activity} source={require('./assets/img/act-4.jpg')} />
            </View>
            <View>
              <Image style={styles.activity} source={require('./assets/img/act-5.jpg')} />
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 20
  },
  container: {
    marginHorizontal: 10
  },
  activity: {
    width: 250,
    height: 300,
    marginRight: 10
  }
});

export default App;
