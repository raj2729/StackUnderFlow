import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useTheme} from 'react-native-paper';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text} from 'react-native-paper';
import ProjectDetails from '../screens/ProjectDetails';
import QrScanner from '../components/QrScanner';
import EditProfile from '../screens/EditProfile';
import ViolationScreen from '../screens/ViolationScreen';

const ProfileStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

const MainTabScreen = () => {
  const Tab = createBottomTabNavigator();
  const {colors} = useTheme();
  const iconSize = 26;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          elevation: 20,
          height: 50,
          width: '100%',
          backgroundColor: colors.secondary,
        },
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarLabel: ({focused, label}) => (
          <Text
            style={{
              color: !focused ? colors.primary : colors.textBefore,
            }}>
            {label}
          </Text>
        ),
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Entypo
              name="home"
              size={iconSize}
              color={!focused ? colors.primary : colors.textBefore}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="person"
              size={iconSize}
              color={!focused ? colors.primary : colors.textBefore}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="HomeMain" component={HomeScreen} />
      <HomeStack.Screen name="ProjectDetail" component={ProjectDetails} />
      <HomeStack.Screen name="QR" component={QrScanner} />
    </HomeStack.Navigator>
  );
};

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator screenOptions={{headerShown: false}}>
      <ProfileStack.Screen name="ProfileMain" component={ProfileScreen} />
      <ProfileStack.Screen name="Edit" component={EditProfile} />
      <ProfileStack.Screen name="Violation" component={ViolationScreen} />
    </ProfileStack.Navigator>
  );
};

export default MainTabScreen;
