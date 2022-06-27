import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Image, Text, View } from 'react-native';
import Second from './second';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bienvenu à l'application</Text>
      <View>
      <Image source={{
                    uri: 'https://avatars.githubusercontent.com/u/12435165?v=4',
                }}
                    style={{ width: 200, height: 200 }}></Image>
      </View>
      <View><Second user="khalil"></Second></View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
