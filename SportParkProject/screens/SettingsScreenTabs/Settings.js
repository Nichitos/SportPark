import React, { Component } from "react";
import {
  View,
  AsyncStorage,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
  Text
} from "react-native";
import { TextField } from "react-native-material-textfield";
import { Font } from "expo";
import { Button } from "react-native-material-ui";
import SwitchSelector from "react-native-switch-selector";
import Dialog, {
  DialogFooter,
  DialogButton,
  DialogContent
} from "react-native-popup-dialog";
import { SQLite } from "expo";
const db = SQLite.openDatabase("SportParkDatabase");

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default class Settings extends Component {
  static navigationOptions = {
    title: "Setări",
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
    age: "",
    height: "",
    weight: "",
    selectedItem: "0",
    visible: false,
    fontLoaded: false
  };

  async componentDidMount() {
    this.setState({ fontLoaded: true });

    let getKeys = ["age", "height", "weight", "selectedItem"];
    const [age, height, weight, selectedItem] = await AsyncStorage.multiGet(
      getKeys
    );
    this.setState({
      age: age[1],
      height: height[1],
      weight: weight[1],
      selectedItem: selectedItem[1]
    });
  }

  showErrorAlert = () => {
    Alert.alert(
      "Eroare",
      "Introudceți toate datele.",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: true }
    );
  };

  showSuccessAlert = () => {
    Alert.alert(
      "Succes",
      "Datele au fost salvate.",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: true }
    );
  };

  showSuccessResetAlert = () => {
    Alert.alert(
      "Succes",
      "Datele au fost resetate.",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: true }
    );
  };

  clearStatistics() {
    db.transaction(
      tx => {
        tx.executeSql("DROP TABLE stepsTable;");
        tx.executeSql("DROP TABLE coffeeTable;");
        tx.executeSql("DROP TABLE caloriesTable;");
        tx.executeSql("DROP TABLE waterTable;");
      },
      null,
      function() {}
    );
    this.setState({ visible: false });
  }

  openPopup() {
    this.setState({ visible: true });
  }

  handleSubmit = () => {
    if (
      this.state.age === null ||
      this.state.weight === null ||
      this.state.height === null
    ) {
      this.showErrorAlert();
    } else {
      AsyncStorage.multiSet([
        ["age", this.state.age],
        ["height", this.state.height],
        ["weight", this.state.weight],
        ["selectedItem", this.state.selectedItem]
      ]);
      this.showSuccessAlert();
      Keyboard.dismiss();
    }
  };

  handleRemove = () => {
    let removeKeys = ["age", "weight", "height"];
    AsyncStorage.multiRemove(removeKeys);
    this.setState({
      age: "",
      weight: "",
      height: ""
    });
    //this.showSuccessResetAlert();
  };

  render() {
    return (
      <DismissKeyboard>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            alignItems: "stretch"
          }}
        >
          <Dialog
            visible={this.state.visible}
            onTouchOutside={() => this.setState({ visible: false })}
            width={300}
            height={150}
            footer={
              <DialogFooter>
                <DialogButton
                  text="anulează"
                  onPress={() => this.setState({ visible: false })}
                />
                <DialogButton
                  text="da"
                  onPress={() => {
                    this.clearStatistics();
                  }}
                />
              </DialogFooter>
            }
          >
            <DialogContent>
              {this.state.fontLoaded ? (
                <Text
                  style={{
                    marginTop: 10,
                    fontSize: 16,
                    fontFamily: "open_sans_bold"
                  }}
                >
                  Sunteți sigur(ă) că doriți să ștergeți toate datele despre
                  pași, apă, cafea și calorii ?
                </Text>
              ) : null}
            </DialogContent>
          </Dialog>
          <View style={{ padding: 10 }}>
            <TextField
              label="vârsta"
              labelTextStyle={{ fontFamily: "open_sans_bold" }}
              keyboardType="numeric"
              maxLength={3}
              tintColor="#E62027"
              value={this.state.age}
              onChangeText={age => this.setState({ age })}
            />

            <TextField
              label="înălțimea"
              labelTextStyle={{ fontFamily: "open_sans_bold" }}
              keyboardType="numeric"
              suffix="cm"
              maxLength={3}
              tintColor="#E62027"
              value={this.state.height}
              onChangeText={height => this.setState({ height })}
            />

            <TextField
              label="masa"
              labelTextStyle={{ fontFamily: "open_sans_bold" }}
              keyboardType="numeric"
              suffix="kg"
              maxLength={3}
              tintColor="#E62027"
              value={this.state.weight}
              onChangeText={weight => this.setState({ weight })}
            />
          </View>

          <View style={{ padding: 10 }}>
            <SwitchSelector
              onPress={value => this.setState({ selectedItem: value })}
              value={
                this.state.selectedItem === null ? 0 : this.state.selectedItem
              }
              textColor={"#E62027"}
              selectedColor={"#fff"}
              buttonColor={"#E62027"}
              borderColor={"#E62027"}
              fontSize={16}
              hasPadding
              options={[
                {
                  label: "bărbat",
                  labelTextStyle: {
                    fontFamily: "century_gothic"
                  },

                  value: "0"
                },
                {
                  label: "femeie",
                  labelTextStyle: {
                    fontFamily: "century_gothic"
                  },
                  value: "1"
                }
              ]}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              padding: 10
            }}
          >
            <View style={{ flex: 1 }}>
              <Button
                raised
                primary
                upperCase={true}
                text="salvează"
                labelTextStyle={{ fontFamily: "century_gothic" }}
                onPress={() => this.handleSubmit()}
              />
            </View>
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Button
                raised
                accent
                upperCase={true}
                text="resetează"
                labelTextStyle={{ fontFamily: "century_gothic" }}
                onPress={() => this.handleRemove()}
              />
            </View>
          </View>
          <View style={{ flex: 1, margin: 10 }}>
            <Button
              raised
              accent
              upperCase={true}
              text="șterge statistica"
              labelTextStyle={{ fontFamily: "century_gothic" }}
              onPress={() => this.openPopup()}
            />
          </View>
        </View>
      </DismissKeyboard>
    );
  }
}
