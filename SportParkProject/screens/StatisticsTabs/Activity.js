import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  Image
} from "react-native";
import { Pedometer, Permissions, Constants } from "expo";
import { AsyncStorage } from "react-native";
import { Font } from "expo";
import { Button } from "react-native-material-ui";
import { Card } from "react-native-elements";
import * as Progress from "react-native-progress";
import { SQLite } from "expo";

const db = SQLite.openDatabase("SportParkDatabase");

export default class Activity extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    fontLoaded: false,
    isPedometerAvailable: "checking",
    pastStepCount: 0,
    veryPastStepCount: 0,
    currentStepCount: 0,
    waterValue: 0,
    coffeeValue: 0,
    caloriesValue: 0,
    pedometerLoaded: false
  };

  async componentDidMount() {
    let result = await Permissions.askAsync(Permissions.NOTIFICATIONS);

    if (Constants.isDevice && result.status === "granted") {
      console.log("Notification permissions granted.");
    }

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

    this._retrieveWater();
    this._retrieveCoffee();
    this._retrieveCalories();
    this.setState({ fontLoaded: true });
    this._subscribe();
    this.prepareDb();
  }

  prepareDb() {
    db.transaction(
      tx => {
        //tx.executeSql("DROP TABLE stepsTable;");
        tx.executeSql(
          "create table if not exists stepsTable (id INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, value INTEGER, unique (date));"
        );
        tx.executeSql(
          "create table if not exists waterTable (id INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, value INTEGER);"
        );
        tx.executeSql(
          "create table if not exists coffeeTable (id INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, value INTEGER);"
        );
        tx.executeSql(
          "create table if not exists caloriesTable (id INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, value INTEGER);"
        );
      },
      null,
      function() {
        console.log("done?.");
      }
    );
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  handleNotification() {
    console.log("ok! got your notif");
  }

  bmr = (bmrRounded = "NaN") => {
    if (this.state.getSelectedItem === "0") {
      const bmr =
        66.47 +
        13.75 * this.state.getWeight +
        5.003 * this.state.getHeight -
        6.755 * this.state.getAge;
      bmrRounded = "/ 2800";
    } else if (this.state.getSelectedItem == null) {
      bmrRounded = "/ 2800";
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

  _subscribe = () => {
    this._subscription = Pedometer.watchStepCount(result => {
      this.setState({
        currentStepCount: result.steps
      });
    });

    Pedometer.isAvailableAsync().then(
      result => {
        this.setState({
          isPedometerAvailable: String(result)
        });
      },
      error => {
        this.setState({
          isPedometerAvailable: "Could not get isPedometerAvailable: " + error
        });
      }
    );

    const end = new Date();
    const start = new Date();
    start.setHours(0);
    start.setMinutes(0);
    start.setSeconds(0);
    end.setHours(23);
    end.setMinutes(59);
    end.setSeconds(59);

    Pedometer.getStepCountAsync(start, end).then(
      result => {
        this.setState({ pastStepCount: result.steps });
        this.setState({ pedometerLoaded: true });
      },
      error => {
        this.setState({
          pastStepCount: "Could not get stepCount: " + error
        });
      }
    );

    const end2 = new Date();
    const start2 = new Date();
    start2.setDate(start2.getDate() - 1);
    end2.setDate(end2.getDate() - 1);
    start2.setHours(0);
    start2.setMinutes(0);
    start2.setSeconds(0);
    end2.setHours(23);
    end2.setMinutes(59);
    end2.setSeconds(59);

    Pedometer.getStepCountAsync(start2, end2).then(
      result => {
        let date = new Date();
        var month = new Array();
        month[0] = "Ianuarie";
        month[1] = "Februarie";
        month[2] = "Martie";
        month[3] = "Aprilie";
        month[4] = "Mai";
        month[5] = "Iunie";
        month[6] = "Iulie";
        month[7] = "August";
        month[8] = "Septembrie";
        month[9] = "Octombrie";
        month[10] = "Noiembrie";
        month[11] = "Decembrie";
        var n = month[date.getMonth()];
        let correctDate = new Date();
        correctDate.setDate(correctDate.getDate() - 1);
        let finalDate = correctDate.getDate() + " " + n;

        db.transaction(tx => {
          tx.executeSql("INSERT INTO stepsTable(date, value) VALUES (? , ?)", [
            finalDate,
            result.steps
          ]);
        }, null);

        this.setState({ veryPastStepCount: result.steps });
        this.setState({ pedometerLoaded: true });
      },
      error => {
        this.setState({
          pastStepCount: "Could not get stepCount: " + error
        });
      }
    );
  };

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  _storeWater(value) {
    try {
      let date = new Date();
      var month = new Array();
      month[0] = "Ianuarie";
      month[1] = "Februarie";
      month[2] = "Martie";
      month[3] = "Aprilie";
      month[4] = "Mai";
      month[5] = "Iunie";
      month[6] = "Iulie";
      month[7] = "August";
      month[8] = "Septembrie";
      month[9] = "Octombrie";
      month[10] = "Noiembrie";
      month[11] = "Decembrie";
      var n = month[date.getMonth()];
      let dateToShow = new Date().getDate() + " " + n;
      let expireAt = new Date().getDate();
      let object = {
        value: value,
        dateToShow: dateToShow,
        expireAt: expireAt
      };
      object.value = value + 1;
      AsyncStorage.setItem("water", JSON.stringify(object));
    } catch (error) {
      console.log(error);
    }
  }

  _storeCoffee(value) {
    try {
      let date = new Date();
      var month = new Array();
      month[0] = "Ianuarie";
      month[1] = "Februarie";
      month[2] = "Martie";
      month[3] = "Aprilie";
      month[4] = "Mai";
      month[5] = "Iunie";
      month[6] = "Iulie";
      month[7] = "August";
      month[8] = "Septembrie";
      month[9] = "Octombrie";
      month[10] = "Noiembrie";
      month[11] = "Decembrie";
      var n = month[date.getMonth()];
      let dateToShow = new Date().getDate() + " " + n;
      let expireAt = new Date().getDate();
      let object1 = {
        value: value,
        dateToShow: dateToShow,
        expireAt: expireAt
      };
      object1.value = value + 1;
      AsyncStorage.setItem("coffee", JSON.stringify(object1));
    } catch (error) {
      console.log(error);
    }
  }

  _storeCalories(value) {
    try {
      let date = new Date();
      var month = new Array();
      month[0] = "Ianuarie";
      month[1] = "Februarie";
      month[2] = "Martie";
      month[3] = "Aprilie";
      month[4] = "Mai";
      month[5] = "Iunie";
      month[6] = "Iulie";
      month[7] = "August";
      month[8] = "Septembrie";
      month[9] = "Octombrie";
      month[10] = "Noiembrie";
      month[11] = "Decembrie";
      var n = month[date.getMonth()];
      let dateToShow = new Date().getDate() + " " + n;
      let expireAt = new Date().getDate();
      let object2 = {
        value: value,
        dateToShow: dateToShow,
        expireAt: expireAt
      };
      object2.value = value + 100;
      AsyncStorage.setItem("calories", JSON.stringify(object2));
    } catch (error) {
      console.log(error);
    }
  }

  _incrementWater = () => {
    this._storeWater(this.state.waterValue);
    this._retrieveWater();
  };

  _incrementCoffee = () => {
    this._storeCoffee(this.state.coffeeValue);
    this._retrieveCoffee();
  };

  _incrementCalories = () => {
    this._storeCalories(this.state.caloriesValue);
    this._retrieveCalories();
  };

  _retrieveCoffee = async () => {
    try {
      let coffeeValue = await AsyncStorage.getItem("coffee");

      if (coffeeValue !== null) {
        let parsed = JSON.parse(coffeeValue);

        this.setState({ coffeeValue: parsed.value });
        if (parsed.expireAt < new Date().getDate()) {
          db.transaction(tx => {
            tx.executeSql(
              "INSERT INTO coffeeTable (date, value) VALUES (? , ?)",
              [parsed.dateToShow, parsed.value]
            );
          }, null);
          AsyncStorage.removeItem("coffee");
          this.setState({ coffeeValue: 0 });
        }
      }
    } catch (error) {
      this.setState({ coffeeValue: 0 });
    }
  };

  _retrieveCalories = async () => {
    try {
      let caloriesValue = await AsyncStorage.getItem("calories");
      if (caloriesValue !== null) {
        let parsed = JSON.parse(caloriesValue);
        this.setState({ caloriesValue: parsed.value });

        if (parsed.expireAt < new Date().getDate()) {
          db.transaction(tx => {
            tx.executeSql(
              "INSERT INTO caloriesTable(date, value) VALUES (? , ?)",
              [parsed.dateToShow, parsed.value]
            );
          }, null);
          AsyncStorage.removeItem("calories");
          this.setState({ caloriesValue: 0 });
        }
      }
    } catch (error) {
      this.setState({ caloriesValue: 0 });
    }
  };

  _retrieveWater = async () => {
    try {
      let waterValue = await AsyncStorage.getItem("water");
      if (waterValue !== null) {
        let parsed = JSON.parse(waterValue);
        this.setState({ waterValue: parsed.value });

        if (parsed.expireAt < new Date().getDate()) {
          db.transaction(tx => {
            tx.executeSql(
              "INSERT INTO waterTable(date, value) VALUES (? , ?)",
              [parsed.dateToShow, parsed.value]
            );
          }, null);
          AsyncStorage.removeItem("water");
          this.setState({ waterValue: 0 });
        }
      }
    } catch (error) {
      this.setState({ waterValue: 0 });
    }
  };

  render() {
    const { active, text } = this.state;
    const size = Dimensions.get("screen").width - 62;
    showProgress = () => {
      let prog = 0;
      let i = this.state.pastStepCount;
      if (i > 9000) {
        return (prog = 1.0);
      } else {
        return (prog = prog + 0.09);
      }
    };
    stepText = () => {
      const end = new Date();
      const start = new Date();
      start.setHours(0);
      start.setMinutes(0);
      start.setSeconds(0);
      end.setHours(23);
      end.setMinutes(59);
      end.setSeconds(59);
      Pedometer.getStepCountAsync(start, end).then(
        result => {
          this.setState({ pastStepCount: result.steps });
        },
        error => {
          this.setState({
            pastStepCount: "Could not get stepCount: " + error
          });
        }
      );
      return (
        <Text style={{ flex: 1, flexDirection: "column" }}>
          <Text>
            {this.state.fontLoaded ? (
              <Text
                style={{
                  fontFamily: "century_gothic",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: 110
                }}
              >
                {this.state.pastStepCount}
              </Text>
            ) : null}
          </Text>
          <Text>
            {this.state.fontLoaded ? (
              <Text
                style={{
                  fontFamily: "open_sans_bold",
                  fontSize: 30,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                {"\n"} din 9000 pași
              </Text>
            ) : null}
          </Text>
        </Text>
      );
    };
    return (
      <View backgroundColor="#ecf0f1">
        <ScrollView>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Steps")}
          >
            <Card>
              <View>
                {this.state.fontLoaded ? (
                  <Text
                    style={{
                      fontFamily: "century_gothic",
                      fontSize: 30
                    }}
                  >
                    pedometru
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
              <Progress.Circle
                color={"#E62027"}
                size={size}
                progress={this.state.pastStepCount / 9000}
                showsText={true}
                thickness={20}
                formatText={stepText}
              />
            </Card>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Water")}
          >
            <Card>
              <View>
                {this.state.fontLoaded ? (
                  <Text
                    style={{
                      fontFamily: "century_gothic",
                      fontSize: 30
                    }}
                  >
                    apă
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
                    {this.state.waterValue}
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
                >
                  <View style={{ flex: 0, width: 120, marginTop: 7 }}>
                    <Button
                      raised
                      primary
                      text="+1"
                      onPress={this._incrementWater}
                    />
                  </View>
                </View>
              </View>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Coffee")}
          >
            <Card>
              <View>
                {this.state.fontLoaded ? (
                  <Text
                    style={{
                      fontFamily: "century_gothic",
                      fontSize: 30
                    }}
                  >
                    cafea
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
                  source={require("../img/icon_coffee.jpg")}
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
                    {this.state.coffeeValue}
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
                    cești
                  </Text>
                ) : null}

                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "flex-end"
                  }}
                >
                  <View style={{ flex: 0, width: 120, marginTop: 7 }}>
                    <Button
                      raised
                      primary
                      text="+1"
                      onPress={this._incrementCoffee}
                    />
                  </View>
                </View>
              </View>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Calories")}
          >
            <Card
              containerStyle={{
                marginBottom: 18
              }}
            >
              <View>
                {this.state.fontLoaded ? (
                  <Text
                    style={{
                      fontFamily: "century_gothic",
                      fontSize: 30
                    }}
                  >
                    calorii
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
                  source={require("../img/icon_food.jpg")}
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
                    {this.state.caloriesValue}
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
                    {this.bmr()} Cal
                  </Text>
                ) : null}

                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "flex-end",

                    alignContent: "flex-end"
                  }}
                >
                  <View style={{ flex: 0, width: 120, marginTop: 7 }}>
                    <Button
                      raised
                      primary
                      text="+100"
                      onPress={this._incrementCalories}
                    />
                  </View>
                </View>
              </View>
            </Card>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
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
  },
  icon2: {
    alignItems: "center",
    width: 100,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    margin: 5
  },
  icon3: {
    alignItems: "center",
    width: 50,
    height: 50
  },
  buttonStyle: {
    flex: 1,
    alignContent: "flex-end",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    height: 40
  }
});

//Expo.registerRootComponent(PedometerSensor);
