import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'

import Main from '../views/Main'
import NewEntry from '../views/NewEntry'

const Tab = createBottomTabNavigator();

const Routes = () => {
    return (
        <>
            <Tab.Navigator
                activeColor="#EE161B"
                barStyle={{ backgroundColor: '#787878' }}
            >
                <Tab.Screen name="Main" component={Main}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Icon name="home" color={color} size={26} />
                        ),
                    }}

                />
                <Tab.Screen name="Add" component={NewEntry}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Icon name="add" color={color} size={26} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </>
    )
}

export default Routes;