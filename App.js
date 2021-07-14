import React from 'react';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';

const App = () => {
  return (
    <>
      <ScrollView>
        <View style={{ flexDirection: 'row' }}>
          <Image style={styles.banner} source={require('./assets/img/bg.jpg')} />
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>Qué hacer en Tatooine</Text>
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

          <Text style={styles.title}>Los mejores alojamientos</Text>
          <View>
            <View>
              <Image style={styles.imgFluid} source={require('./assets/img/best-1.jpg')} />
            </View>
            <View>
              <Image style={styles.imgFluid} source={require('./assets/img/best-2.jpg')} />
            </View>
            <View>
              <Image style={styles.imgFluid} source={require('./assets/img/best-3.jpg')} />
            </View>
          </View>

          <Text style={styles.title}>Hospedajes en Mordor</Text>
          <View style={styles.grid}>
            <View style={styles.gridItem}>
              <Image style={styles.imgFluid} source={require('./assets/img/host-1.jpg')} />
            </View>
            <View style={styles.gridItem}>
              <Image style={styles.imgFluid} source={require('./assets/img/host-2.jpg')} />
            </View>
            <View style={styles.gridItem}>
              <Image style={styles.imgFluid} source={require('./assets/img/host-3.jpg')} />
            </View>
            <View style={styles.gridItem}>
              <Image style={styles.imgFluid} source={require('./assets/img/host-4.jpg')} />
            </View>
          </View>
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
  },
  imgFluid: {
    width: '100%',
    height: 200,
    marginVertical: 5
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  gridItem: {
    flexBasis: '49%'
  }
});

export default App;
