import { createStackNavigator, createAppContainer } from "react-navigation";

import Menu from "../screens/SettingsScreenTabs/Menu";
import DatePersonale from "../screens/SettingsScreenTabs/DatePersonale";
import Settings from "../screens/SettingsScreenTabs/Settings";
import CalendarClass from "../screens/SettingsScreenTabs/Calendar";

const MenuNavigator = createStackNavigator({
  Home: { screen: Menu },
  Settings: { screen: Settings },
  Date: { screen: DatePersonale },
  CalendarClass: { screen: CalendarClass }
});

const MenuContainer = createAppContainer(MenuNavigator);

export default MenuContainer;
