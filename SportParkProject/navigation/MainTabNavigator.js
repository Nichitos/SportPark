import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";
import Colors from "../constants/Colors";

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarOptions: {
    swipeEnabled: true,
    lazy: false,
    animationEnabled: true,
    activeBackgroundColor: "#B3191E",
    inactiveBackgroundColor: Colors.tintColor,
    showLabel: false
  },

  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      tintColor="#FFFF"
      name={
        Platform.OS === "ios"
          ? `ios-information-circle-outline${focused ? "" : "-outline"}`
          : "md-information-circle-outline"
      }
    />
  )
};

const LinksStack = createStackNavigator({
  Links: LinksScreen
});

LinksStack.navigationOptions = {
  tabBarOptions: {
    swipeEnabled: true,
    lazy: false,
    animationEnabled: true,

    activeBackgroundColor: "#B3191E",
    inactiveBackgroundColor: Colors.tintColor,
    showLabel: false
  },

  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      activeTintColor={"#FFFFF"}
      name={Platform.OS === "ios" ? "ios-bicycle" : "ios-bicycle"}
    />
  )
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
  tabBarOptions: {
    swipeEnabled: true,
    lazy: false,
    animationEnabled: true,
    activeBackgroundColor: "#B3191E",
    inactiveBackgroundColor: Colors.tintColor,
    showLabel: false,
    showIcon: true
  },

  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-contact" : "md-contact"}
    />
  )
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack
});
