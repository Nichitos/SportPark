import React from "react";
import { Text } from "react-native";
import Colors from "../constants/Colors";

export class MonoText extends React.Component {
  render() {
    return (
      <Text
        {...this.props}
        style={[
          this.props.style,
          Colors.tintColor,
          
        ]}
      />
    );
  }
}
