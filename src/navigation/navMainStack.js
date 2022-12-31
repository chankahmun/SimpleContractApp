
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from '../redux/rdxStore';

import HeaderTemplate from '../components/templates/HeaderTemplate';
import InformationHeaderTemplate from '../components/templates/InformationHeaderTemplate';

import PageContracts from '../pages/pageContracts';
import PageInformation from '../pages/pageInformation';

import {SCREEN_NAME} from '../assets/index'

const Stack = createNativeStackNavigator();

const navMainStack = () => {

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen 
                        name={SCREEN_NAME.CONTRACTS} 
                        component={PageContracts}
                        options={{ headerTitle: () => <HeaderTemplate/> }}
                        />
                    <Stack.Screen 
                        name={SCREEN_NAME.CONTRACT_DETAIL}
                        component={PageInformation}
                        
                        options={({ navigation }) => ({
                            headerTitle: () =><InformationHeaderTemplate navigation={navigation}/>, headerBackVisible:false
                       
                          })}
                        />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
        
      );
};

export default navMainStack;
