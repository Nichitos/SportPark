import { createStackNavigator, createAppContainer } from "react-navigation";

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
