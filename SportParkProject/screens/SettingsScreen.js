import React from "react";
import MenuContainer from "../navigation/MenuNavigator";

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return <MenuContainer />;
  }
}
