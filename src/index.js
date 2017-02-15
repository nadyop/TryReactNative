import React, {Component, AppRegistry} from 'react-native' ;
import App from './containers/App' ;

class imuno extends Component{
    render(){
        return(
            <App />
        ) ;
    }
}

AppRegistry.registerComponent('imuno', () => imuno) ;
