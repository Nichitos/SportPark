import React from "react";
import StatisticContainer from "../navigation/StatisticNavigator";

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return <StatisticContainer />;
  }
}
