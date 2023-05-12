import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, styles.cyan]}>
        <Text style={styles.text}>Cyan</Text>
      </View>
      <View style={[styles.container, styles.blue]}>
        <Text style={styles.text}>Blue</Text>
      </View>
      <View style={[styles.container, styles.magenta]}>
        <Text style={styles.text}>Magenta</Text>
      </View>
      <View style={[styles.container, styles.orange]}>
        <Text style={styles.text}>Orange</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
  cyan: {
    backgroundColor: '#2aa198',
  },
  blue: {
    backgroundColor: '#268bd2',
  },
  magenta: {
    backgroundColor: '#d33682',
  },
  orange: {
    backgroundColor: '#cb4b16',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
    margin: 10,
  },
  safeArea: {
    flex: 2,
  },
});

export default App;
