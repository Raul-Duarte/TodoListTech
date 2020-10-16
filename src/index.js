import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Header} from 'react-native-elements';
import Routes from './Routes'

// import { Container } from './styles';

const App = () => {
    return (
        <>
            <NavigationContainer>
                <Header
                    centerComponent={{ text: 'Todo List', style: { color: '#fff' } }}
                />
                <Routes />
            </NavigationContainer>
        </>
    )
}

export default App;