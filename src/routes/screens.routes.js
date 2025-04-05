import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { Home } from "@screens/Home";
import { Temperature } from "@screens/Temperature";
import { Pressure } from "@screens/Pressure";
import { Settings } from "@screens/Settings";
import Icon from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/FontAwesome6";
import Icon3 from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "@constants/Colors";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.lightTheme.primaryColor,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Icon
              name="home"
              size={24}
              color={
                focused
                  ? COLORS.lightTheme.focusIcon
                  : COLORS.lightTheme.whiteColor
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Temperature"
        component={Temperature}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Icon2
              name="temperature-quarter"
              size={24}
              color={
                focused
                  ? COLORS.lightTheme.focusIcon
                  : COLORS.lightTheme.whiteColor
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Pressure"
        component={Pressure}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Icon3
              name="car-brake-low-pressure"
              size={24}
              color={
                focused
                  ? COLORS.lightTheme.focusIcon
                  : COLORS.lightTheme.whiteColor
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarShowLabel: false,

          tabBarIcon: ({ focused }) => (
            <Icon
              name="settings"
              size={24}
              color={
                focused
                  ? COLORS.lightTheme.foucsIcon
                  : COLORS.lightTheme.whiteColor
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
