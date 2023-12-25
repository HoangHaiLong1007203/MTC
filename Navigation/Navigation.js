import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './TabNavigator';
import Case from './Case';
function AppNavigation() {
    return (
        <NavigationContainer>
            {/* <BottomTabNavigator/> */}
            <Case/>
        </NavigationContainer>
    )
}

export default AppNavigation;