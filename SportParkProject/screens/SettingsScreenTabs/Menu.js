import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Font } from "expo";

export default class Menu extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      century_gothic: require("../img/CenturyGothic.ttf"),
      open_sans_bold: require("../img/OpenSans-Regular.ttf")
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginTop: 15 }} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("Date")}
        >
          <Image
            style={{
              width: 65,
              height: 65,
              marginHorizontal: 15,
              marginLeft: 30,
              alignSelf: "center"
            }}
            source={require("../img/sport.png")}
          />
          {this.state.fontLoaded ? <Text style={styles.text}>date</Text> : null}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("CalendarClass")}
        >
          <Image
            style={{
              width: 65,
              height: 65,
              marginHorizontal: 15,
              alignSelf: "center",
              marginLeft: 30
            }}
            source={require("../img/calendar.png")}
          />
          {this.state.fontLoaded ? <Text style={styles.text}>orar</Text> : null}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("Settings")}
        >
          <Image
            style={{
              width: 65,
              height: 65,
              marginHorizontal: 15,
              alignSelf: "center",
              marginLeft: 30
            }}
            source={require("../img/settings.png")}
          />
          {this.state.fontLoaded ? (
            <Text style={styles.text}>parametri</Text>
          ) : null}
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#ecf0f1"
  },
  button: {
    flexDirection: "row",
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#e6e6e6",
    backgroundColor: "#fff",
    padding: 6,
    marginBottom: 15,
    width: 350,
    height: 150,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1
  },

  text: {
    fontSize: 35,
    alignSelf: "center",
    fontFamily: "century_gothic",
    margin: 20
  }
});
