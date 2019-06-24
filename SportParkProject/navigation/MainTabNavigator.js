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

/*
//MenuNavigator
import Menu from "../screens/SettingsScreenTabs/Menu";
import DatePersonale from "../screens/SettingsScreenTabs/DatePersonale";
import Settings from "../screens/SettingsScreenTabs/Settings";
import Agenda from "../screens/SettingsScreenTabs/Agenda";
import Register from "../screens/SettingsScreenTabs/Register";

const MenuNavigator = createStackNavigator({
  Home: { screen: Menu },
  Settings: { screen: Settings },
  Date: { screen: DatePersonale },
  Agenda: { screen: Agenda },
  Register: { screen: Register }
});

const MenuContainer = createAppContainer(MenuNavigator);

export default MenuContainer;

//StatisticNavigator
import Activity from "../screens/StatisticsTabs/Activity";
import StatisticSteps from "../screens/StatisticsTabs/StatisticSteps";
import StatisticWater from "../screens/StatisticsTabs/StatisticWater";
import StatisticCoffee from "../screens/StatisticsTabs/StatisticCoffee";
import StatisticCalories from "../screens/StatisticsTabs/StatisticCalories";

const StatisticNavigator = createStackNavigator({
  Home: { screen: Activity },
  Steps: { screen: StatisticSteps },
  Water: { screen: StatisticWater },
  Coffee: { screen: StatisticCoffee },
  Calories: { screen: StatisticCalories }
});

const StatisticContainer = createAppContainer(StatisticNavigator);

export default StatisticContainer;

//end
*/

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
      name={"ios-information-circle-outline"}
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
      name={"ios-bicycle"}
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
    <TabBarIcon focused={focused} name={"md-contact"} />
  )
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack
});
