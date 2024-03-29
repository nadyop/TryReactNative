import React,{
    Animated,
    Component,
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native' ;

class App extends Component{
    render(){
        return(
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
        ) ;
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

export default App ;
