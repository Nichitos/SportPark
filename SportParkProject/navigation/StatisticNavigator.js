import { createStackNavigator, createAppContainer } from "react-navigation";

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
