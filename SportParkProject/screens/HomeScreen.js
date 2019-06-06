import React, { Component } from "react";
import {
  Image,
  Platform,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Text,
  View,
  Linking
} from "react-native";
import { Card } from "react-native-elements";
import { Font } from "expo";
import Carousel, { Pagination } from "react-native-snap-carousel";

const SliderWidth = Dimensions.get("screen").width - 60;
const ItemWidth = 225.0;
const ItemWidth2 = 350.0;

let subscriptionItems = [
  {
    title: "PREMIUM",
    imgUrl: require("../assets/images/subscription_1.png"),
    url: "https://sportpark.md/abonamente/"
  },
  {
    title: "FITNESS",
    imgUrl: require("../assets/images/subscription_2.png"),
    url: "https://sportpark.md/abonamente/"
  }
];

let turFoto = [
  require("../assets/images/tour_1.jpg"),
  require("../assets/images/tour_2.jpg"),
  require("../assets/images/tour_3.jpg"),
  require("../assets/images/tour_4.jpg"),
  require("../assets/images/tour_5.jpg"),
  require("../assets/images/tour_6.jpg"),
  require("../assets/images/tour_7.jpg"),
  require("../assets/images/tour_8.jpg"),
  require("../assets/images/tour_9.jpg"),
  require("../assets/images/tour_10.jpg"),
  require("../assets/images/tour_11.jpg")
];

let trainingItems = [
  {
    title: "TRX INTERVAL",
    time: "55:00",
    difficulty: "Mediu",
    imgUrl: require("../assets/images/training_1.jpg"),
    url: "https://sportpark.md/antrenament/trx-interval/"
  },
  {
    title: "SPIN FIT",
    time: "45:00",
    difficulty: "Greu",
    imgUrl: require("../assets/images/training_2.jpg"),
    url: "https://sportpark.md/antrenament/spinfit/"
  },
  {
    title: "YOGA",
    time: "90:00",
    difficulty: "Mediu",
    imgUrl: require("../assets/images/training_3.jpg"),
    url: "https://sportpark.md/antrenament/yoga/"
  },
  {
    title: "LATINO",
    time: "55:00",
    difficulty: "Mediu",
    imgUrl: require("../assets/images/training_4.jpg"),
    url: "https://sportpark.md/antrenament/latino/"
  },
  {
    title: "STEP",
    time: "55:00",
    difficulty: "Mediu",
    imgUrl: require("../assets/images/training_5.jpg"),
    url: "https://sportpark.md/antrenament/step/"
  },
  {
    title: "TRX BOOTCAMP",
    time: "55:00",
    difficulty: "Mediu",
    imgUrl: require("../assets/images/training_6.jpg"),
    url: "https://sportpark.md/antrenament/trx-bootcamp/"
  },
  {
    title: "AQUA INTERVAL",
    time: "45:00",
    difficulty: "Mediu",
    imgUrl: require("../assets/images/training_7.jpg"),
    url: "https://sportpark.md/antrenament/aqua-interval/"
  },
  {
    title: "BURN UP",
    time: "55:00",
    difficulty: "Mediu",
    imgUrl: require("../assets/images/training_8.jpg"),
    url: "https://sportpark.md/antrenament/burn-up/"
  },
  {
    title: "ABS",
    time: "45:00",
    difficulty: "Mediu",
    imgUrl: require("../assets/images/training_9.jpg"),
    url: "https://sportpark.md/antrenament/abs/"
  },
  {
    title: "SPINNING",
    time: "45:00",
    difficulty: "Greu",
    imgUrl: require("../assets/images/training_10.jpg"),
    url: "https://sportpark.md/antrenament/spinning/"
  },
  {
    title: "STEP & SCULPT",
    time: "55:00",
    difficulty: "Mediu",
    imgUrl: require("../assets/images/training_11.jpg"),
    url: "https://sportpark.md/antrenament/step-sculpt/"
  },
  {
    title: "ÎNOT KIDS",
    time: "45:00",
    difficulty: "Mediu",
    imgUrl: require("../assets/images/training_12.jpg"),
    url: "https://sportpark.md/antrenament/inot-kids/"
  },
  {
    title: "STRETCHING",
    time: "30:00",
    difficulty: "Mediu",
    imgUrl: require("../assets/images/training_13.jpg"),
    url: "https://sportpark.md/antrenament/stretching/"
  },
  {
    title: "BODY MIND",
    time: "55:00",
    difficulty: "Mediu",
    imgUrl: require("../assets/images/training_14.jpg"),
    url: "https://sportpark.md/antrenament/body-mind/"
  },
  {
    title: "BODYBALLET",
    time: "55:00",
    difficulty: "Greu",
    imgUrl: require("../assets/images/training_15.jpg"),
    url: "https://sportpark.md/antrenament/body-mind/"
  },
  {
    title: "BRAZILIAN BUTT",
    time: "55:00",
    difficulty: "Greu",
    imgUrl: require("../assets/images/training_16.jpg"),
    url: "https://sportpark.md/antrenament/bodyballet/"
  },
  {
    title: "ABS+FLEX",
    time: "45:00",
    difficulty: "Greu",
    imgUrl: require("../assets/images/training_17.jpg"),
    url: "https://sportpark.md/antrenament/brazilian-but/"
  },
  {
    title: "KICKBOXING",
    time: "45:00",
    difficulty: "Greu",
    imgUrl: require("../assets/images/training_18.jpg"),
    url: "https://sportpark.md/antrenament/absflex/"
  },
  {
    title: "GOOD MORNING",
    time: "55:00",
    difficulty: "Greu",
    imgUrl: require("../assets/images/training_19.jpg"),
    url: "https://sportpark.md/antrenament/kickboxing/"
  },
  {
    title: "FIT BUTT",
    time: "50:00",
    difficulty: "Mediu",
    imgUrl: require("../assets/images/training_20.jpg"),
    url: "https://sportpark.md/antrenament/good-morning/"
  },
  {
    title: "AQUA FIGHT",
    time: "45:00",
    difficulty: "Greu",
    imgUrl: require("../assets/images/training_21.jpg"),
    url: "https://sportpark.md/antrenament/fit-butt/"
  },
  {
    title: "AQUA PILATES",
    time: "45:00",
    difficulty: "Greu",
    imgUrl: require("../assets/images/training_22.jpg"),
    url: "https://sportpark.md/antrenament/aqua-fight/"
  },
  {
    title: "ABL",
    time: "45:00",
    difficulty: "Mediu",
    imgUrl: require("../assets/images/training_23.jpg"),
    url: "https://sportpark.md/antrenament/aqua-pilates/"
  },
  {
    title: "AQUA STRONG",
    time: "45:00",
    difficulty: "Greu",
    imgUrl: require("../assets/images/training_24.jpg"),
    url: "https://sportpark.md/antrenament/abl/"
  },
  {
    title: "FITBAL",
    time: "45:00",
    difficulty: "Mediu",
    imgUrl: require("../assets/images/training_25.jpg"),
    url: "https://sportpark.md/antrenament/aqua-strong/"
  }
];

let coachItems = [
  {
    title: "ALEXANDR CRAVEŢ",
    imgUrl: require("../assets/images/coach_1.jpg"),
    url: "https://sportpark.md/antrenor/alexandr-cravet/"
  },
  {
    title: "ZAHAROVA ANNA",
    imgUrl: require("../assets/images/coach_2.jpg"),
    url: "https://sportpark.md/antrenor/zaharova-anna/"
  },
  {
    title: "BOROZAN GHEORGHE",
    imgUrl: require("../assets/images/coach_3.jpg"),
    url: "https://sportpark.md/antrenor/borozan-gheorghe/"
  },
  {
    title: "INGA SHABAZOVA",
    imgUrl: require("../assets/images/coach_4.jpg"),
    url: "https://sportpark.md/antrenor/inga-shabazova/"
  },
  {
    title: "ARAPOVA OLGA",
    imgUrl: require("../assets/images/coach_5.jpg"),
    url: "https://sportpark.md/antrenor/arapova-olga/"
  },
  {
    title: "SATALOVA ECATERINA",
    imgUrl: require("../assets/images/coach_6.jpg"),
    url: "https://sportpark.md/antrenor/satalova-ecaterina/"
  },
  {
    title: "KANARSKAIA IRINA",
    imgUrl: require("../assets/images/coach_7.jpg"),
    url: "https://sportpark.md/antrenor/kanarskaia-irina/"
  },
  {
    title: "POPA VADIM",
    imgUrl: require("../assets/images/coach_8.jpg"),
    url: "https://sportpark.md/antrenor/popa-vadim/"
  },
  {
    title: "GUȚU ALEXANDRU",
    imgUrl: require("../assets/images/coach_9.jpg"),
    url: "https://sportpark.md/antrenor/gutu-alexandru/"
  },
  {
    title: "SURAVSCHI STANISLAV",
    imgUrl: require("../assets/images/coach_10.png"),
    url: "https://sportpark.md/antrenor/suravschi-stanislav/"
  },
  {
    title: "ANA BEŢCO",
    imgUrl: require("../assets/images/coach_32.jpg"),
    url: "https://sportpark.md/antrenor/ana-betco/"
  },
  {
    title: "BIBILEV IGOR",
    imgUrl: require("../assets/images/coach_12.jpg"),
    url: "https://sportpark.md/antrenor/bibilev-igor/"
  },
  {
    title: "EUGEN CEBOTARI",
    imgUrl: require("../assets/images/coach_13.jpg"),
    url: "https://sportpark.md/antrenor/eugen-cebotari/"
  },
  {
    title: "TABUNSCIC OLGA",
    imgUrl: require("../assets/images/coach_15.jpg"),
    url: "https://sportpark.md/antrenor/tabunscic-olga/"
  },
  {
    title: "ROMAN TUDOREANU",
    imgUrl: require("../assets/images/coach_16.jpg"),
    url: "https://sportpark.md/antrenor/roman-tudoreanu/"
  },
  {
    title: "TURCEANINOV SERGIU",
    imgUrl: require("../assets/images/coach_17.jpg"),
    url: "https://sportpark.md/antrenor/turceaninov-sergiu/"
  },
  {
    title: "MELIHOVA POLINA",
    imgUrl: require("../assets/images/coach_18.jpg"),
    url: "https://sportpark.md/antrenor/melihova-polina/"
  },
  {
    title: "BOROZAN GHEORGHE",
    imgUrl: require("../assets/images/coach_19.jpg"),
    url: "https://sportpark.md/antrenor/borozan-gheorghe/"
  },
  {
    title: "BULAT VLAD",
    imgUrl: require("../assets/images/coach_20.jpg"),
    url: "https://sportpark.md/antrenor/bulat-vlad/"
  },
  {
    title: "CILICU DENIS",
    imgUrl: require("../assets/images/coach_21.jpg"),
    url: "https://sportpark.md/antrenor/cilicu-denis/"
  },
  {
    title: "OCHIȘOR CRISTIAN",
    imgUrl: require("../assets/images/coach_22.jpg"),
    url: "https://sportpark.md/antrenor/ochisor-cristian/"
  },
  {
    title: "EUGEN SEBOV",
    imgUrl: require("../assets/images/coach_23.jpg"),
    url: "https://sportpark.md/antrenor/eugen-sebov/"
  },
  {
    title: "CRISTIAN RACUL",
    imgUrl: require("../assets/images/coach_24.jpg"),
    url: "https://sportpark.md/antrenor/cristian-racul/"
  },
  {
    title: "ARTUR NINICU",
    imgUrl: require("../assets/images/coach_25.jpg"),
    url: "https://sportpark.md/antrenor/artur-ninicu/"
  },
  {
    title: "SERGIU CEBAN",
    imgUrl: require("../assets/images/coach_26.jpg"),
    url: "https://sportpark.md/antrenor/sergiu-ceban/"
  },
  {
    title: "VARTIC OLEG",
    imgUrl: require("../assets/images/coach_27.jpg"),
    url: "https://sportpark.md/antrenor/vartic-oleg/"
  },
  {
    title: "VARTIC SVETLANA",
    imgUrl: require("../assets/images/coach_28.jpg"),
    url: "https://sportpark.md/antrenor/vartic-svetlana/"
  },
  {
    title: "CROITOR MIHAI",
    imgUrl: require("../assets/images/coach_29.jpg"),
    url: "https://sportpark.md/antrenor/croitor-mihai/"
  },
  {
    title: "ISCHIMJI ELENA",
    imgUrl: require("../assets/images/coach_30.jpg"),
    url: "https://sportpark.md/antrenor/ischimji-elena/"
  },
  {
    title: "NICHITA SOBOLEVSCHI",
    imgUrl: require("../assets/images/coach_11.jpg"),
    url: "https://sportpark.md/antrenor/nichita-sobolevschi/"
  },
  {
    title: "NATALIA VOINAROVSCAIA",
    imgUrl: require("../assets/images/coach_31.jpg"),
    url: "https://sportpark.md/antrenor/natalia-voinarovscaia/"
  },
  {
    title: "VARNACOVA IANA",
    imgUrl: require("../assets/images/coach_33.jpg"),
    url: "https://sportpark.md/antrenor/varnacova-iana/"
  }
];

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    FirstItemCoaches: 0,
    FirstItemTraining: 0,
    coachActiveSlide: 0,
    trainingsActiveSlide: 0,
    tourActiveSlide: 0,
    cardsActiveSlide: 0,
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      century_gothic: require("../assets/fonts/CenturyGothic.ttf"),
      open_sans_bold: require("../assets/fonts/OpenSans-Regular.ttf")
    });

    this.setState({ fontLoaded: true });
  }

  get coachPagination() {
    return (
      <Pagination
        dotsLength={7}
        activeDotIndex={this.state.coachActiveSlide}
        containerStyle={{ backgroundColor: "rgba(255, 255, 255, 0.75)" }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 3,
          marginHorizontal: 1,
          backgroundColor: "rgba(255, 0, 0, 0.92)"
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }

  get trainingPagination() {
    return (
      <Pagination
        dotsLength={7}
        activeDotIndex={this.state.trainingsActiveSlide}
        containerStyle={{ backgroundColor: "rgba(255, 255, 255, 0.75)" }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 3,
          marginHorizontal: 1,
          backgroundColor: "rgba(255, 0, 0, 0.92)"
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }

  get tourPagination() {
    return (
      <Pagination
        dotsLength={turFoto.length}
        activeDotIndex={this.state.tourActiveSlide}
        containerStyle={{ backgroundColor: "rgba(255, 255, 255, 0.75)" }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 3,
          marginHorizontal: 1,
          backgroundColor: "rgba(255, 0, 0, 0.92)"
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }

  get cardsPagination() {
    return (
      <Pagination
        dotsLength={subscriptionItems.length}
        activeDotIndex={this.state.cardsActiveSlide}
        containerStyle={{ backgroundColor: "rgba(255, 255, 255, 0.75)" }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 3,
          marginHorizontal: 1,
          backgroundColor: "rgba(255, 0, 0, 0.92)"
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }
  _renderItem({ item }) {
    return (
      <View>
        <Image style={styles.cardImage} source={item.imgUrl} />
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View>
            {this.state.fontLoaded ? (
              <Text
                style={{
                  fontFamily: "open_sans_bold",
                  fontSize: 20,

                  paddingTop: 6
                }}
              >
                {item.title}
              </Text>
            ) : null}
          </View>
          <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
            <Image
              style={styles.questionStyle}
              source={require("../assets/images/question.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _renderItem2({ item }) {
    return (
      <View>
        <Image style={styles.cardImage2} source={item.imgUrl} />
        <View style={{ flex: 1, flexDirection: "row" }}>
          {this.state.fontLoaded ? (
            <Text
              style={{
                fontFamily: "open_sans_bold",
                fontSize: 20,
                paddingTop: 6
              }}
            >
              {item.title}
            </Text>
          ) : null}

          <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
            <Image
              style={styles.questionStyle}
              source={require("../assets/images/question.png")}
            />
          </TouchableOpacity>
        </View>
        {this.state.fontLoaded ? (
          <Text
            fontSize="17"
            style={{
              fontFamily: "open_sans_bold"
            }}
          >
            Durata: {item.time}
            {"\n"}
            Dificultate: {item.difficulty}
          </Text>
        ) : null}
      </View>
    );
  }

  _renderItem3({ item }) {
    return (
      <View>
        <Image style={styles.cardImage3} source={item.imgUrl} />
        <View style={{ flex: 1, flexDirection: "row" }}>
          {this.state.fontLoaded ? (
            <Text
              style={{
                fontFamily: "open_sans_bold",
                fontSize: 20,
                marginTop: 5,
                marginStart: 3
              }}
            >
              {item.title}
            </Text>
          ) : null}
          <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
            <Image
              style={styles.questionStyle}
              source={require("../assets/images/question.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _renderItem4({ item }) {
    return (
      <View>
        <Image style={styles.cardImage3} source={item} />
      </View>
    );
  }

  openExternalApp = url => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        Alert.alert("ERROR", "Unable to open: " + url, [{ text: "OK" }]);
      }
    });
  };

  _onPressLocation = () => {
    var scheme = Platform.OS === "ios" ? "maps:" : "geo:";
    var url = scheme + "47.0584379,28.873860";
    this.openExternalApp(url);
  };

  _manageCoachActiveSlide = index => {
    if (index == 0 || index == 7 || index == 14 || index == 21) {
      this.setState({ coachActiveSlide: 0 });
    } else if (index == 1 || index == 8 || index == 15 || index == 22) {
      this.setState({ coachActiveSlide: 1 });
    } else if (index == 2 || index == 9 || index == 16 || index == 23) {
      this.setState({ coachActiveSlide: 2 });
    } else if (
      index == 3 ||
      index == 10 ||
      index == 17 ||
      index == 24 ||
      index == 28
    ) {
      this.setState({ coachActiveSlide: 3 });
    } else if (
      index == 4 ||
      index == 11 ||
      index == 18 ||
      index == 25 ||
      index == 29
    ) {
      this.setState({ coachActiveSlide: 4 });
    } else if (
      index == 5 ||
      index == 12 ||
      index == 19 ||
      index == 26 ||
      index == 30
    ) {
      this.setState({ coachActiveSlide: 5 });
    } else if (
      index == 6 ||
      index == 13 ||
      index == 20 ||
      index == 27 ||
      index == 31
    ) {
      this.setState({ coachActiveSlide: 6 });
    } else {
      this.setState({
        coachActiveSlide: index
      });
    }
  };

  _manageTrainingActiveSlide = index => {
    if (index == 0 || index == 7 || index == 14 || index == 21) {
      this.setState({ trainingsActiveSlide: 0 });
    } else if (index == 1 || index == 8 || index == 15 || index == 22) {
      this.setState({ trainingsActiveSlide: 1 });
    } else if (index == 2 || index == 9 || index == 16 || index == 23) {
      this.setState({ trainingsActiveSlide: 2 });
    } else if (index == 3 || index == 10 || index == 17 || index == 24) {
      this.setState({ trainingsActiveSlide: 3 });
    } else if (index == 4 || index == 11 || index == 18) {
      this.setState({ trainingsActiveSlide: 4 });
    } else if (index == 5 || index == 12 || index == 19) {
      this.setState({ trainingsActiveSlide: 5 });
    } else if (index == 6 || index == 13 || index == 20) {
      this.setState({ trainingsActiveSlide: 6 });
    } else {
      this.setState({
        trainingsActiveSlide: index
      });
    }
  };

  render() {
    return (
      <View backgroundColor="#ecf0f1">
        <ScrollView>
          <Card>
            <View>
              {this.state.fontLoaded ? (
                <Text
                  style={{
                    fontFamily: "century_gothic",
                    fontSize: 30
                  }}
                >
                  antrenamente
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
            <Carousel
              style={styles.carousel}
              activeAnimationType="decay"
              autoplay={true}
              autoplayInterval={6000}
              autoplayDelay={5000}
              lockScrollWhileSnapping={true}
              swipeThreshold={10}
              loopClonesPerSide={10}
              layout={"default"}
              data={trainingItems}
              decelerationRate={"fast"}
              enableMomentum={true}
              firstItem={this.state.FirstItemTraining}
              itemWidth={ItemWidth2}
              sliderWidth={SliderWidth}
              activeSlideAlignment="center"
              renderItem={this._renderItem2.bind(this)}
              onSnapToItem={this._manageTrainingActiveSlide}
              loop={true}
            />
            {this.trainingPagination}
          </Card>
          <Card>
            <View>
              {this.state.fontLoaded ? (
                <Text
                  style={{
                    fontFamily: "century_gothic",
                    fontSize: 30
                  }}
                >
                  antrenori
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
            <Carousel
              style={styles.carousel}
              layout={"default"}
              autoplay={true}
              activeAnimationType="spring"
              autoplayInterval={6000}
              autoplayDelay={3000}
              lockScrollWhileSnapping={true}
              swipeThreshold={10}
              data={coachItems}
              decelerationRate={"fast"}
              enableMomentum={true}
              firstItem={this.stateFirstItemCoaches}
              itemWidth={ItemWidth}
              sliderWidth={SliderWidth}
              activeSlideAlignment="center"
              onSnapToItem={this._manageCoachActiveSlide}
              renderItem={this._renderItem.bind(this)}
              loop={true}
            />
            {this.coachPagination}
          </Card>
          <Card>
            <View>
              {this.state.fontLoaded ? (
                <Text
                  style={{
                    fontFamily: "century_gothic",
                    fontSize: 30
                  }}
                >
                  abonamente
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
            <Carousel
              style={styles.carousel}
              layout={"default"}
              data={subscriptionItems}
              firstItem={0}
              decelerationRate={"fast"}
              enableMomentum={true}
              itemWidth={ItemWidth2}
              sliderWidth={SliderWidth}
              activeSlideAlignment="center"
              renderItem={this._renderItem3.bind(this)}
              onSnapToItem={index => this.setState({ cardsActiveSlide: index })}
            />
            {this.cardsPagination}
          </Card>
          <Card>
            <View>
              {this.state.fontLoaded ? (
                <Text
                  style={{
                    fontFamily: "century_gothic",
                    fontSize: 30
                  }}
                >
                  tur foto
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
            <Carousel
              style={styles.carousel}
              layout={"default"}
              data={turFoto}
              autoplay={true}
              activeAnimationType="spring"
              autoplayInterval={6000}
              autoplayDelay={3000}
              lockScrollWhileSnapping={true}
              firstItem={0}
              decelerationRate={"fast"}
              enableMomentum={true}
              itemWidth={ItemWidth2}
              sliderWidth={SliderWidth}
              activeSlideAlignment="center"
              renderItem={this._renderItem4.bind(this)}
              onSnapToItem={index => this.setState({ tourActiveSlide: index })}
            />
            {this.tourPagination}
          </Card>
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
                  contacte
                </Text>
              ) : null}
            </View>
            <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 1,
                marginBottom: 12
              }}
            />
            <View>
              {this.state.fontLoaded ? (
                <Text
                  style={{
                    fontFamily: "century_gothic",
                    fontSize: 20
                  }}
                >
                  Chisinău{"\n"}
                  Str.Nicolae Dimo, 32{"\n"}
                  {"\n"}
                  Telefon: 078 889 889{"\n"}
                  Email: office@sportpark.md {"\n"}
                  {"\n"}
                </Text>
              ) : null}
            </View>

            <TouchableOpacity onPress={this._onPressLocation}>
              <Image
                style={styles.seeLocationButton}
                source={require("../assets/images/seelocation_button.jpg")}
              />
            </TouchableOpacity>
          </Card>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    marginRight: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1"
  },
  cardTitle: {
    fontFamily: "century_gothic",
    fontSize: 16
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },

  contentContainer: {},
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  arrowButton: {
    alignItems: "center",
    height: 30,
    width: 20
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  questionStyle: {
    alignItems: "center",
    width: 20,
    height: 20,
    margin: 5,
    marginTop: 8
  },
  card: {
    width: "98%",
    shadowColor: "#000",
    shadowOpacity: 0.7,
    shadowRadius: 2,
    shadowOffset: {
      width: 3,
      height: 3
    }
  },
  cardImage: {
    flex: 1,
    width: 35,
    height: 290,
    borderWidth: 100,
    resizeMode: "cover"
  },
  seeLocationButton: {
    flex: 1,
    width: 200,
    height: 50,
    alignContent: "center",
    justifyContent: "center"
  },
  cardImage2: {
    flex: 1,
    width: 350,

    height: Platform.OS === "ios" ? 200 : 100,
    borderWidth: 100,
    resizeMode: "cover"
  },
  cardImage3: {
    flex: 1,
    width: 350,
    height: 227,
    borderWidth: 100,
    resizeMode: "cover"
  },

  cardText3: {
    fontSize: 20,
    paddingVertical: 6,
    alignContent: "center"
  },
  topCardText: {
    padding: 10,
    fontSize: 26
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(255,255,255, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});
