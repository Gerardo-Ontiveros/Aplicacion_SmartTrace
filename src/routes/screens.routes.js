import React, { useRef, useEffect } from "react";
import { View, StyleSheet, Animated } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import COLORS from "@constants/Colors";
import { Home } from "@screens/Home";
import { Pressure } from "@screens/Pressure";
import { Settings } from "@screens/Settings";
import { Temperature } from "@screens/Temperature";

const Tab = createBottomTabNavigator();

const AnimatedDot = ({ focused }) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(4)).current;

  useEffect(() => {
    if (focused) {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 4,
          duration: 150,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [focused]);

  return (
    <Animated.View
      style={[
        styles.dot,
        {
          opacity,
          transform: [{ translateY }],
        },
      ]}
    />
  );
};

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.lightTheme.primaryColor,
          elevation: 0,
          shadowOpacity: 0,
          height: 70,
          borderTopWidth: 0,
        },
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === "Home") iconName = "home-outline";
          else if (route.name === "Temperature")
            iconName = "thermometer-outline";
          else if (route.name === "Pressure") iconName = "compass-outline";
          else if (route.name === "Settings") iconName = "settings-outline";

          return (
            <View style={styles.iconContainer}>
              <Ionicons name={iconName} size={28} color="#fff" />
              <AnimatedDot focused={focused} />
            </View>
          );
        },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Temperature" component={Temperature} />
      <Tab.Screen name="Pressure" component={Pressure} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 999,
    backgroundColor: "#fff",
    marginTop: 4,
  },
});
