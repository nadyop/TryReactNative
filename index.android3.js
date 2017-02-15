/**
 * App name : imuno
 * App description : sahabat imunisasi ibu dan anak, penjadwalan imunisasi yang tersusun rapi
 * Dibuat pada tanggal : 28 Maret 2016
 * Versi : 1.0.0
 * Dibuat dengan React Native
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  Animated,
  AppRegistry,
  Component,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

class imuno extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to imuno!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
        <Text style={styles.instructions}>
            Aplikasi ini dibuat oleh tim RAN (Rini, Ashari, Nadya)
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('imuno', () => imuno);
