import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Groups} from '../screens/Groups';
import {Usuario} from '../screens/Usuario';
import {NewGroup} from '../screens/NewGroup';

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes() {
    return(
        <Navigator
            screenOptions={{
                headerShown:true,
                headerTitleStyle: {fontWeight: 'bold', fontSize: 20},
                headerStyle: {backgroundColor: '#00623B'},
                headerTintColor: '#fff'
            }}
        >
            <Screen name="Groups" options={{headerShown: true}} component={Groups} />
            <Screen name="Usuario" options={{title: 'Usuário', headerTitleAlign: 'center'}} component={Usuario} />
            <Screen name="NewGroup" options={{title: 'New Group', headerTitleAlign: 'center', headerTintColor: '#fff', 
                headerStyle: {
                    backgroundColor: '#f4511e',

                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }} component={NewGroup} />
        </Navigator>
    );
}

