import React, { Component } from "react";
import {
  View,
  AsyncStorage,
  Keyboard,
  TouchableWithoutFeedback,
  Alert
} from "react-native";
import { TextField } from "react-native-material-textfield";
import { Font, Notifications } from "expo";
import { Button } from "react-native-material-ui";
import * as firebase from "firebase";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default class Register extends Component {
  static navigationOptions = {
    title: "Înregistrare",
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
    name: "",
    surname: "",
    training: "",
    hour: "",
    sala: "",
    fontLoaded: false,
    registrationOrder: 1,
    phoneNumber: "",
    date: ""
  };

  async componentDidMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyCntV5I66V3AX-p6fKoFIaQsrJifxMaywo",
      authDomain: "sportpark-29f33.firebaseapp.com",
      databaseURL: "https://sportpark-29f33.firebaseio.com",
      storageBucket: "sportpark-29f33.appspot.com",
      messagingSenderId: "155819614491"
    };

    //firebase.initializeApp(firebaseConfig);

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    await Font.loadAsync({
      century_gothic: require("../img/CenturyGothic.ttf"),
      open_sans_bold: require("../img/OpenSans-Regular.ttf")
    });
    this.setState({ fontLoaded: true });

    const retrievedItem = await AsyncStorage.getItem("registerObject");
    const item = JSON.parse(retrievedItem);
    this.setState({ hour: item.hour });
    this.setState({ training: item.training });
    this.setState({ sala: item.sala });
    this.setState({ date: item.date });
    AsyncStorage.removeItem("registerObject");

    this.onSubmit();

    console.log("hour" + this.state.hour);
    console.log("date" + this.state.date);
  }

  onSubmit() {
    const localNotification = {
      title: "SportPark",
      body:
        "Antrenamentul dumneavoastră " +
        this.state.training +
        " va începe în 2 ore.",
      android: {
        sound: true,
        icon: "./assets/images/icon1.png"
      },
      ios: {
        sound: true,
        icon: "./assets/images/icon1.png"
      }
    };

    let currentTime = new Date();

    let neededTime = new Date();

    let date = this.state.date.split("/");
    let time = this.state.hour.split(":");
    neededTime.setDate(date[0]);
    neededTime.setMonth(date[1]);
    neededTime.setFullYear(date[2]);
    neededTime.setHours(time[0] - 2);
    neededTime.setMinutes(0);

    console.log("neededTime" + neededTime);
    console.log("currentTime " + currentTime);

    let final = neededTime - currentTime;

    const schedulingOptions = {
      time: new Date().getTime() + Number(final)
    };

    Notifications.scheduleLocalNotificationAsync(
      localNotification,
      schedulingOptions
    );
  }

  writeUserData(nume, prenume, numarulDeTelefon, data, antrenament, ora, sala) {
    firebase
      .database()
      .ref("Inscrieri/")
      .push({
        nume,
        prenume,
        numarulDeTelefon,
        data,
        antrenament,
        ora,
        sala
      })
      .then(data => {
        console.log("data ", data);
      })
      .catch(error => {
        //error callback
        console.log("error ", error);
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
      "Ați fost înregistrat cu success.",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: true }
    );
  };

  handleSubmit = () => {
    if (
      this.state.name === "" ||
      this.state.surname === "" ||
      this.state.phoneNumber === ""
    ) {
      this.showErrorAlert();
    } else {
      this.writeUserData(
        this.state.surname,
        this.state.name,
        this.state.phoneNumber,
        this.state.date,
        this.state.training,
        this.state.hour,
        this.state.sala
      );
      this.showSuccessAlert();
      Keyboard.dismiss();
    }
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
          <View style={{ padding: 10 }}>
            <TextField
              label="numele"
              labelTextStyle={{ fontFamily: "open_sans_bold" }}
              keyboardType="default"
              tintColor="#E62027"
              value={this.state.surname}
              onChangeText={surname => this.setState({ surname: surname })}
            />

            <TextField
              label="prenumele"
              labelTextStyle={{ fontFamily: "open_sans_bold" }}
              keyboardType="default"
              tintColor="#E62027"
              value={this.state.name}
              onChangeText={name => this.setState({ name: name })}
            />

            <TextField
              label="numarul de telefon"
              labelTextStyle={{ fontFamily: "open_sans_bold" }}
              keyboardType="numeric"
              tintColor="#E62027"
              value={this.state.phoneNumber}
              onChangeText={phoneNumber =>
                this.setState({ phoneNumber: phoneNumber })
              }
            />

            <TextField
              label="data"
              disabled={true}
              labelTextStyle={{ fontFamily: "open_sans_bold" }}
              keyboardType="default"
              tintColor="#E62027"
              value={this.state.date}
            />

            <TextField
              label="antrenament"
              disabled={true}
              labelTextStyle={{ fontFamily: "open_sans_bold" }}
              keyboardType="numeric"
              tintColor="#E62027"
              value={this.state.training}
            />

            <TextField
              label="ora"
              disabled={true}
              labelTextStyle={{ fontFamily: "open_sans_bold" }}
              keyboardType="numeric"
              tintColor="#E62027"
              value={this.state.hour}
            />

            <TextField
              label="sala"
              disabled={true}
              labelTextStyle={{ fontFamily: "open_sans_bold" }}
              keyboardType="numeric"
              tintColor="#E62027"
              value={this.state.sala}
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
                text="înscrie-mă"
                labelTextStyle={{ fontFamily: "century_gothic" }}
                onPress={() => this.handleSubmit()}
              />
            </View>
          </View>
        </View>
      </DismissKeyboard>
    );
  }
}
