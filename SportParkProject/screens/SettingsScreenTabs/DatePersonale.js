import React, { Component } from "react";
import { View, Text, StyleSheet, AsyncStorage } from "react-native";
import { Font } from "expo";

export default class DatePersonale extends Component {
  static navigationOptions = {
    title: "Date Personale",
    headerStyle: {
      backgroundColor: "#B3191E",
      borderBottomWidth: 0,
      shadowOpacity: 0
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontFamily: "century_gothic"
    }
  };

  state = {
    fontLoaded: false
  };

  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    let getKeys = ["height", "selectedItem", "age", "weight"];
    await AsyncStorage.multiGet(getKeys).then(result =>
      this.setState({
        getHeight: result[0][1],
        getSelectedItem: result[1][1],
        getAge: result[2][1],
        getWeight: result[3][1]
      })
    );
    await Font.loadAsync({
      century_gothic: require("../img/CenturyGothic.ttf"),
      open_sans_bold: require("../img/OpenSans-Regular.ttf")
    });

    this.setState({ fontLoaded: true });
  }

  idealWeight = (idealWeightRounded = "NaN") => {
    const heightInch = this.state.getHeight / 2.54; //height converted to inch

    if (this.state.getSelectedItem === "0") {
      const idealWeight = 50 + 2.3 * (heightInch - 60); //ideal weight calculator for male: Robinson calculator
      idealWeightRounded = idealWeight.toFixed(1); //ideal weight for male rounded
    } else if (this.state.getSelectedItem == null) {
      idealWeightRounded = "NaN";
    } else {
      const idealWeight = 45.5 + 2.3 * (heightInch - 60); //ideal weight calculator for female: Robinson calculator
      idealWeightRounded = idealWeight.toFixed(1); //ideal weight for female rounded
    }

    return idealWeightRounded;
  };

  bmr = (bmrRounded = "NaN") => {
    if (this.state.getSelectedItem === "0") {
      const bmr =
        66.47 +
        13.75 * this.state.getWeight +
        5.003 * this.state.getHeight -
        6.755 * this.state.getAge;
      bmrRounded = bmr.toFixed(0);
    } else if (this.state.getSelectedItem == null) {
      bmrRounded = "2800";
    } else {
      const bmr =
        655.1 +
        9.563 * this.state.getWeight +
        1.85 * this.state.getHeight -
        4.676 * this.state.getAge;
      bmrRounded = bmr.toFixed(0);
    }

    return bmrRounded;
  };

  showAge = () => {
    if (this.state.getAge === null) {
      return <Text>NaN</Text>;
    } else {
      return <Text>{this.state.getAge} ani</Text>;
    }
  };

  showWeight = () => {
    if (this.state.getWeight === null) {
      return <Text>NaN</Text>;
    } else {
      return <Text>{this.state.getWeight} kg</Text>;
    }
  };

  showHeight = () => {
    if (this.state.getHeight === null) {
      return <Text>NaN</Text>;
    } else {
      return <Text>{this.state.getHeight} cm</Text>;
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: "#E62027" }}>
          {this.state.fontLoaded ? (
            <Text style={styles.headerMenu}>Personale</Text>
          ) : null}
        </View>

        <View style={styles.tabs}>
          {this.state.fontLoaded ? (
            <Text style={styles.fullText}>
              <Text style={styles.label}>Vârsta: </Text>
              <Text>{this.showAge()}</Text>
            </Text>
          ) : null}
        </View>
        <View style={styles.tabs}>
          {this.state.fontLoaded ? (
            <Text style={styles.fullText}>
              <Text style={styles.label}>Masa: </Text>
              <Text>{this.showWeight()}</Text>
            </Text>
          ) : null}
        </View>
        <View style={styles.tabs}>
          {this.state.fontLoaded ? (
            <Text style={styles.fullText}>
              <Text style={styles.label}>Înălțimea: </Text>
              <Text>{this.showHeight()}</Text>
            </Text>
          ) : null}
        </View>

        {/*--------------------*/}

        <View style={{ backgroundColor: "#E62027" }}>
          <Text style={styles.headerMenu}>Fitness</Text>
        </View>

        <View style={styles.tabs}>
          {this.state.fontLoaded ? (
            <Text style={styles.fullText}>
              <Text style={styles.label}>Masa ideală: </Text>
              <Text>{this.idealWeight()} kg</Text>
            </Text>
          ) : null}
        </View>

        <View style={styles.tabs}>
          {this.state.fontLoaded ? (
            <Text style={styles.fullText}>
              <Text style={styles.label}>BMR: </Text>
              <Text>{this.bmr()} cal/zi</Text>
            </Text>
          ) : null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabs: {
    backgroundColor: "#FAFAFA",
    borderRadius: 0,
    borderWidth: 0.5,
    borderColor: "#D8D8D8",
    borderTopColor: "#FAFAFA"
  },

  label: {
    fontFamily: "open_sans_bold",
    padding: 20
  },

  fullText: {
    fontFamily: "century_gothic",
    padding: 15,
    fontSize: 14
  },

  headerMenu: {
    fontFamily: "century_gothic",
    padding: 10,
    fontSize: 16,

    color: "#fff"
  }
});
