import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  FlatList
} from "react-native";
import { SQLite } from "expo";

import { Card } from "react-native-elements";
import { Font } from "expo";

const db = SQLite.openDatabase("SportParkDatabase");

const dataArray = [];

export default class StatisticWater extends Component {
  static navigationOptions = {
    title: "Apă",
    headerTitleStyle: {
      fontFamily: "century_gothic"
    },
    headerStyle: {
      backgroundColor: "#B3191E",
      borderBottomWidth: 0,
      shadowOpacity: 0
    },
    headerTintColor: "#fff"
  };

  state = {
    fontLoaded: false,
    waterValue: 0,
    waterDate: " ",
    loaded: false,
    dataArray: []
  };

  async componentDidMount() {
    Font.loadAsync({
      century_gothic: require("../img/CenturyGothic.ttf"),
      open_sans_bold: require("../img/OpenSans-Regular.ttf")
    });
    this.setState({ fontLoaded: true });
  }

  async componentWillMount() {
    this._retrieveWater();
  }

  getUnique(arr, comp) {
    const unique = arr
      .map(e => e[comp])

      // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)

      // eliminate the dead keys & store unique objects
      .filter(e => arr[e])
      .map(e => arr[e]);

    return unique;
  }

  _retrieveWater = async () => {
    try {
      db.transaction(tx => {
        tx.executeSql("SELECT * FROM waterTable", [], (tx, results) => {
          console.log(JSON.stringify(results));
          var len = results.rows.length;
          for (let i = 0; i < len; i++) {
            let retrievedItem = results.rows.item(i);
            objectToPush = {
              value: retrievedItem.value,
              date: retrievedItem.date
            };
            dataArray.push(objectToPush);
          }
          this.setState({ loaded: true });
        });
      }, null);
    } catch (error) {
      this.setState({ waterValue: 0 });
      console.log(error);
    }
  };

  render() {
    if (dataArray.length === 0) {
      return (
        <View>
          <Text
            style={{
              fontFamily: "open_sans_bold",
              alignSelf: "baseline",
              fontSize: 20,
              margin: 8
            }}
          >
            {" "}
            Nu aveți încă date înregistrate{" "}
          </Text>
        </View>
      );
    } else {
      return (
        <View backgroundColor="#ecf0f1">
          <ScrollView>
            <FlatList
              data={this.getUnique(dataArray, "date")}
              keyExtractor={item => item.date}
              renderItem={({ item }) => (
                <Card>
                  <View>
                    {this.state.fontLoaded ? (
                      <Text
                        style={{
                          fontFamily: "open_sans_bold",
                          fontSize: 30
                        }}
                      >
                        {item.date}
                      </Text>
                    ) : null}
                  </View>
                  <View
                    style={{
                      borderBottomColor: "black",
                      borderBottomWidth: 1,
                      marginBottom: 18
                    }}
                  />
                  <View style={{ flex: 1, flexDirection: "row" }}>
                    <Image
                      style={styles.icon}
                      source={require("../img/icon_water.jpg")}
                    />

                    {this.state.fontLoaded ? (
                      <Text
                        style={{
                          fontFamily: "century_gothic",
                          alignContent: "center",
                          alignItems: "center",
                          marginHorizontal: 10,
                          fontSize: 40
                        }}
                      >
                        {item.value}
                      </Text>
                    ) : null}
                    {this.state.fontLoaded ? (
                      <Text
                        style={{
                          fontFamily: "open_sans_bold",
                          marginStart: 3,
                          fontSize: 17,
                          marginTop: 20
                        }}
                      >
                        pahare
                      </Text>
                    ) : null}

                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "flex-end"
                      }}
                    />
                  </View>
                </Card>
              )}
            />
          </ScrollView>
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#ecf0f1",
    justifyContent: "center"
  },
  icon: {
    alignItems: "center",
    width: 50,
    height: 50
  }
});
