import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';

import Register from '../screens/Register';
import Sign_in from '../screens/Sign_in';
import Welcom from '../screens/Welcom';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Ticket from '../screens/Tickets';
import Ticket_D from '../screens/Ticket_D';
import Passenger from '../screens/Passagers';
import Payment from '../screens/Payment';
import Payment_S from '../screens/payment_s';
import Seat from '../screens/Seat';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
    <View style={{ flex: 1 }}>
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Icon name="home-outline" size={24} color={focused ? "#FFAA99" : "#03314b"} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Ticket" 
                component={Ticket}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Icon name="ticket-outline" size={24} color={focused ? "#FFAA99" : "#03314b"} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Profile" 
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Icon name="person-outline" size={24} color={focused ? "#FFAA99" : "#03314b"} />
                    ),
                }}
            />
        </Tab.Navigator>
    </View>
);

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcom">
                <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
                <Stack.Screen name="Sign_in" component={Sign_in} options={{ headerShown: false }} />
                <Stack.Screen name="Ticket_D" component={Ticket_D} options={{ headerShown: false }} />
                <Stack.Screen name="Passenger" component={Passenger} options={{ headerShown: false }} />
                <Stack.Screen name="Payment" component={Payment} options={{ headerShown: false }} />
                <Stack.Screen name="Payment_S" component={Payment_S} options={{ headerShown: false }} />
                <Stack.Screen name="Seat" component={Seat} options={{ headerShown: false }} />
                <Stack.Screen name="Welcom" component={Welcom} options={{ headerShown: false }} />
                <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;