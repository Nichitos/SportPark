import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { AppLoading, Asset, Font, Icon } from "expo";
import AppNavigator from "./navigation/AppNavigator";
import { StatusBar } from "react-native";

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === "ios" && <StatusBar />}
          <AppNavigator />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require("./assets/images/robot-dev.png"),
        require("./assets/images/robot-prod.png"),
        require("./screens/img/icon_coffee.jpg"),
        require("./screens/img/icon_food.jpg"),
        require("./screens/img/icon_water.jpg"),
        require("./screens/img/settings.png"),
        require("./screens/img/calendar.png"),
        require("./screens/img/sport.png"),
        require("./assets/images/coach_1.jpg"),
        require("./assets/images/coach_2.jpg"),
        require("./assets/images/coach_3.jpg"),
        require("./assets/images/coach_4.jpg"),
        require("./assets/images/coach_5.jpg"),
        require("./assets/images/coach_6.jpg"),
        require("./assets/images/coach_7.jpg"),
        require("./assets/images/coach_8.jpg"),
        require("./assets/images/coach_9.jpg"),
        require("./assets/images/coach_10.jpg"),
        require("./assets/images/coach_11.jpg"),
        require("./assets/images/coach_12.jpg"),
        require("./assets/images/coach_13.jpg"),
        require("./assets/images/coach_14.jpg"),
        require("./assets/images/coach_15.jpg"),
        require("./assets/images/coach_16.jpg"),
        require("./assets/images/coach_17.jpg"),
        require("./assets/images/coach_18.jpg"),
        require("./assets/images/coach_19.jpg"),
        require("./assets/images/coach_20.jpg"),
        require("./assets/images/coach_21.jpg"),
        require("./assets/images/coach_22.jpg"),
        require("./assets/images/coach_23.jpg"),
        require("./assets/images/coach_24.jpg"),
        require("./assets/images/coach_25.jpg"),
        require("./assets/images/coach_26.jpg"),
        require("./assets/images/coach_27.jpg"),
        require("./assets/images/coach_28.jpg"),
        require("./assets/images/coach_29.jpg"),
        require("./assets/images/coach_30.jpg"),
        require("./assets/images/coach_31.jpg"),
        require("./assets/images/coach_32.jpg"),
        require("./assets/images/coach_33.jpg"),
        require("./assets/images/tour_1.jpg"),
        require("./assets/images/tour_2.jpg"),
        require("./assets/images/tour_3.jpg"),
        require("./assets/images/tour_4.jpg"),
        require("./assets/images/tour_5.jpg"),
        require("./assets/images/tour_6.jpg"),
        require("./assets/images/tour_7.jpg"),
        require("./assets/images/tour_8.jpg"),
        require("./assets/images/tour_9.jpg"),
        require("./assets/images/tour_10.jpg"),
        require("./assets/images/tour_11.jpg"),
        require("./assets/images/training_1.jpg"),
        require("./assets/images/training_2.jpg"),
        require("./assets/images/training_3.jpg"),
        require("./assets/images/training_4.jpg"),
        require("./assets/images/training_5.jpg"),
        require("./assets/images/training_6.jpg"),
        require("./assets/images/training_7.jpg"),
        require("./assets/images/training_8.jpg"),
        require("./assets/images/training_9.jpg"),
        require("./assets/images/training_10.jpg"),
        require("./assets/images/training_11.jpg"),
        require("./assets/images/training_12.jpg"),
        require("./assets/images/training_13.jpg"),
        require("./assets/images/training_14.jpg"),
        require("./assets/images/training_15.jpg"),
        require("./assets/images/training_16.jpg"),
        require("./assets/images/training_17.jpg"),
        require("./assets/images/training_18.jpg"),
        require("./assets/images/training_19.jpg"),
        require("./assets/images/training_20.jpg"),
        require("./assets/images/training_21.jpg"),
        require("./assets/images/training_22.jpg"),
        require("./assets/images/training_23.jpg"),
        require("./assets/images/training_24.jpg"),
        require("./assets/images/training_25.jpg"),
        require("./assets/images/training_26.jpg")
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        space_mono: require("./assets/fonts/SpaceMono-Regular.ttf"),
        century_gothic: require("./assets/fonts/CenturyGothic.ttf"),
        open_sans_bold: require("./assets/fonts/OpenSans-Regular.ttf"),
        corbert_regular: require("./assets/fonts/Corbert-Regular.otf")
      })
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
  async _cacheResourcesAsync() {
    return Asset.loadAsync([
      require("./assets/images/robot-dev.png"),
      require("./assets/images/robot-prod.png"),
      require("./screens/img/icon_coffee.jpg"),
      require("./screens/img/icon_food.jpg"),
      require("./screens/img/icon_water.jpg"),
      require("./screens/img/settings.png"),
      require("./screens/img/calendar.png"),
      require("./screens/img/sport.png"),
      require("./assets/images/coach_1.jpg"),
      require("./assets/images/coach_2.jpg"),
      require("./assets/images/coach_3.jpg"),
      require("./assets/images/coach_4.jpg"),
      require("./assets/images/coach_5.jpg"),
      require("./assets/images/coach_6.jpg"),
      require("./assets/images/coach_7.jpg"),
      require("./assets/images/coach_8.jpg"),
      require("./assets/images/coach_9.jpg"),
      require("./assets/images/coach_10.jpg"),
      require("./assets/images/coach_11.jpg"),
      require("./assets/images/coach_12.jpg"),
      require("./assets/images/coach_13.jpg"),
      require("./assets/images/coach_14.jpg"),
      require("./assets/images/coach_15.jpg"),
      require("./assets/images/coach_16.jpg"),
      require("./assets/images/coach_17.jpg"),
      require("./assets/images/coach_18.jpg"),
      require("./assets/images/coach_19.jpg"),
      require("./assets/images/coach_20.jpg"),
      require("./assets/images/coach_21.jpg"),
      require("./assets/images/coach_22.jpg"),
      require("./assets/images/coach_23.jpg"),
      require("./assets/images/coach_24.jpg"),
      require("./assets/images/coach_25.jpg"),
      require("./assets/images/coach_26.jpg"),
      require("./assets/images/coach_27.jpg"),
      require("./assets/images/coach_28.jpg"),
      require("./assets/images/coach_29.jpg"),
      require("./assets/images/coach_30.jpg"),
      require("./assets/images/coach_31.jpg"),
      require("./assets/images/coach_32.jpg"),
      require("./assets/images/coach_33.jpg"),
      require("./assets/images/tour_1.jpg"),
      require("./assets/images/tour_2.jpg"),
      require("./assets/images/tour_3.jpg"),
      require("./assets/images/tour_4.jpg"),
      require("./assets/images/tour_5.jpg"),
      require("./assets/images/tour_6.jpg"),
      require("./assets/images/tour_7.jpg"),
      require("./assets/images/tour_8.jpg"),
      require("./assets/images/tour_9.jpg"),
      require("./assets/images/tour_10.jpg"),
      require("./assets/images/tour_11.jpg"),
      require("./assets/images/training_1.jpg"),
      require("./assets/images/training_2.jpg"),
      require("./assets/images/training_3.jpg"),
      require("./assets/images/training_4.jpg"),
      require("./assets/images/training_5.jpg"),
      require("./assets/images/training_6.jpg"),
      require("./assets/images/training_7.jpg"),
      require("./assets/images/training_8.jpg"),
      require("./assets/images/training_9.jpg"),
      require("./assets/images/training_10.jpg"),
      require("./assets/images/training_11.jpg"),
      require("./assets/images/training_12.jpg"),
      require("./assets/images/training_13.jpg"),
      require("./assets/images/training_14.jpg"),
      require("./assets/images/training_15.jpg"),
      require("./assets/images/training_16.jpg"),
      require("./assets/images/training_17.jpg"),
      require("./assets/images/training_18.jpg"),
      require("./assets/images/training_19.jpg"),
      require("./assets/images/training_20.jpg"),
      require("./assets/images/training_21.jpg"),
      require("./assets/images/training_22.jpg"),
      require("./assets/images/training_23.jpg"),
      require("./assets/images/training_24.jpg"),
      require("./assets/images/training_25.jpg"),
      require("./assets/images/training_26.jpg")
    ]);

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fefefe"
  }
});
