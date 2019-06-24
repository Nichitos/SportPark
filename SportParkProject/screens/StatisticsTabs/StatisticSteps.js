import React, { Component } from "react";
import { View, Text, ScrollView, FlatList, AsyncStorage } from "react-native";
import * as Progress from "react-native-progress";
import { Card } from "react-native-elements";
import { Font } from "expo";
import { SQLite } from "expo";

import { COLOR } from "react-native-material-ui";

const db = SQLite.openDatabase("SportParkDatabase");

let dataArray = [];

export default class StatisticSteps extends Component {
  static navigationOptions = {
    title: "Pași",

    headerStyle: {
      backgroundColor: "#B3191E",
      borderBottomWidth: 0,
      shadowOpacity: 0
    },
    headerTintColor: "#fff"
  };

  state = {
    fontLoaded: false,
    stepsValue: 0,
    burnedCalories: 0,
    loaded: false,
    route: 0
  };

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
    Font.loadAsync({
      century_gothic: require("../img/CenturyGothic.ttf"),
      open_sans_bold: require("../img/OpenSans-Regular.ttf")
    });
    this.setState({ fontLoaded: true });
  }

  async componentWillMount() {
    this._retrieveSteps();
  }

  getUnique(arr, comp) {
    const unique = arr
      .map(e => e[comp])

      .map((e, i, final) => final.indexOf(e) === i && i)

      .filter(e => arr[e])
      .map(e => arr[e]);

    return unique;
  }

  _retrieveSteps = async () => {
    try {
      db.transaction(tx => {
        tx.executeSql("SELECT * FROM stepsTable", [], (tx, results) => {
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
      this.setState({ stepsValue: 0 });
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
            Nu aveți încă date înregistrate
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
                  {this.state.fontLoaded ? (
                    <Text
                      style={{
                        fontFamily: "century_gothic",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: 30,
                        marginBottom: 8
                      }}
                    >
                      {item.date}
                    </Text>
                  ) : null}
                  <Progress.Bar
                    progress={item.value / 9000}
                    width={300}
                    height={15}
                    color={COLOR.blue500}
                  />
                  {this.state.fontLoaded ? (
                    <Text
                      style={{
                        fontFamily: "open_sans_bold",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: 20,
                        marginTop: 8
                      }}
                    >
                      Pași efectuați: {item.value}
                    </Text>
                  ) : null}
                  {this.state.fontLoaded ? (
                    <Text
                      style={{
                        fontFamily: "open_sans_bold",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: 20
                      }}
                    >
                      Calorii arse:{" "}
                      {Math.floor(
                        this.state.getWeight *
                          2.2046226218 *
                          0.57 *
                          (Math.floor(item.value / 1320) * 0.62137)
                      )}
                    </Text>
                  ) : null}
                  {this.state.fontLoaded ? (
                    <Text
                      style={{
                        fontFamily: "open_sans_bold",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: 20
                      }}
                    >
                      Distanța parcursă: {Math.floor(item.value / 1320)}{" "}
                      kilometri
                    </Text>
                  ) : null}
                </Card>
              )}
            />
          </ScrollView>
        </View>
      );
    }
  }
}
