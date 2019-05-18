import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Agenda } from "react-native-calendars";
import Dialog, {
  DialogFooter,
  DialogButton,
  DialogContent
} from "react-native-popup-dialog";

import { Button } from "react-native-material-ui";

import { Font } from "expo";

export default class CalendarClass extends React.Component {
  static navigationOptions = {
    title: "Orar",
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
    visible: false,
    items: {
      "2019-04-01": [
        {
          time: "09:00",
          nume: "Aqua Pilates",
          sala: "Basin"
        },
        {
          time: "09:00",
          nume: "Abs+Flex",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Step Sculpt",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Pilates Basic",
          sala: "Sala Oasis"
        },
        {
          time: "11:00",
          nume: "Aqua Strong",
          sala: "Basin"
        },
        {
          time: "11:00",
          nume: "Stretching",
          sala: "Sala Tonus"
        },
        {
          time: "11:00",
          nume: "Latino",
          sala: "Sala Oasis"
        },
        {
          time: "12:00",
          nume: "YOGA",
          sala: "Sala Oasis"
        },
        {
          time: "18:00",
          nume: "Body Pumping",
          sala: "Sala Tonus"
        },
        {
          time: "18:00",
          nume: "Pilates Functional",
          sala: "Sala Oasis"
        },
        {
          time: "19:00",
          nume: "Aqua Interval",
          sala: "Basin"
        },
        {
          time: "19:00",
          nume: "Abs Sculpt",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "KickBoxing",
          sala: "Zona Crossfit"
        },
        {
          time: "19:00",
          nume: "Crossfit",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "Stretching",
          sala: "Sala Oasis"
        }
      ],
      "2019-04-02": [
        {
          time: "09:00",
          nume: "Aqua Fit",
          sala: "Basin"
        },
        {
          time: "09:00",
          nume: "Fitball",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Body Ballet",
          sala: "Sala Tonus"
        },

        {
          time: "10:00",
          nume: "Cycling"
        },
        {
          time: "11:00",
          nume: "Dance Mix",
          sala: "Sala Oasis"
        },
        {
          time: "11:00",
          nume: "TRX Body Blast",
          sala: "Sala Intense"
        },
        {
          time: "12:00",
          nume: "Hobby Dance",
          sala: "Sala Oasis"
        },
        {
          time: "18:00",
          nume: "FitBall",
          sala: "Sala Tonus"
        },
        {
          time: "18:30",
          nume: "Upper Body",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "ABL Band",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "ZUMBA",
          sala: "Sala Oasis"
        },
        {
          time: "19:00",
          nume: "Spin Fit"
        },
        {
          time: "19:00",
          nume: "Crossfit",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "Strong Stretch",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "YOGA",
          sala: "Sala Oasis"
        },
        {
          time: "20:00",
          nume: "Fly YOGA",
          sala: "Sala Intense"
        }
      ],
      "2019-04-03": [
        {
          time: "09:00",
          nume: "Aqua Pilates",
          sala: "Basin"
        },
        {
          time: "09:00",
          nume: "Abs Sculpt",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Step",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Fly YOGA",
          sala: "Sala Intense"
        },
        {
          time: "11:00",
          nume: "Pilates",
          sala: "Sala Intense"
        },
        {
          time: "11:00",
          nume: "Brazillian Butt",
          sala: "Sala Tonus"
        },
        {
          time: "11:00",
          nume: "YOGA",
          sala: "Sala Oasis"
        },
        {
          time: "12:00",
          nume: "Stretching",
          sala: "Sala Tonus"
        },
        {
          time: "18:00",
          nume: "Aqua Fight",
          sala: "Basin"
        },
        {
          time: "18:00",
          nume: "FitButt",
          sala: "Sala Tonus"
        },
        {
          time: "18:00",
          nume: "STEP",
          sala: "Sala intense"
        },
        {
          time: "19:00",
          nume: "Body Pumping",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "Pilates Power",
          sala: "Sala Oasis"
        },
        {
          time: "19:00",
          nume: "KickBoxing",
          sala: "Zona Crossfit"
        },
        {
          time: "19:00",
          nume: "Crossfit",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "Fly YOGA",
          sala: "Sala Intense"
        }
      ],
      "2019-04-04": [
        {
          time: "09:00",
          nume: "Spin Fit"
        },
        {
          time: "09:00",
          nume: "Good Morning",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Body Pumping",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Pilates Functional",
          sala: "Sala Oasis"
        },
        {
          time: "11:00",
          nume: "Aqua Interval",
          sala: "Basin"
        },
        {
          time: "11:00",
          nume: "Dance Mix",
          sala: "Sala Oasis"
        },
        {
          time: "12:00",
          nume: "Couple Dance",
          sala: "Sala Oasis"
        },
        {
          time: "18:00",
          nume: "Brazillian Butt",
          sala: "Sala Tonus"
        },
        {
          time: "18:00",
          nume: "Pilates Basic",
          sala: "Sala Oasis"
        },
        {
          time: "18:30",
          nume: "Abs Sculpt",
          sala: "Sala Intense"
        },
        {
          time: "19:00",
          nume: "Kengoo",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "TRX Core",
          sala: "Sala Intense"
        },
        {
          time: "19:00",
          nume: "Cycling"
        },
        {
          time: "19:00",
          nume: "CrossFit",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "PortDeBrass",
          sala: "Sala Tonus"
        },
        {
          time: "20:00",
          nume: "YOGA",
          sala: "Sala Oasis"
        }
      ],
      "2019-04-05": [
        {
          time: "09:00",
          nume: "Pilates Power",
          sala: "Sala Oasis"
        },
        {
          time: "09:00",
          nume: "ABL",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Metabolism Booster",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Aqua Fight",
          sala: "Basin"
        },
        {
          time: "11:00",
          nume: "PortDeBrass",
          sala: "Sala Tonus"
        },
        {
          time: "11:00",
          nume: "TRX Interval",
          sala: "Sala Tonus"
        },
        {
          time: "12:00",
          nume: "Yoga-Sala",
          sala: "Oasis"
        },
        {
          time: "18:00",
          nume: "Upper Body",
          sala: "Sala Tonus"
        },
        {
          time: "18:00",
          nume: "FitBall",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "BodyMind",
          sala: "Sala Oasis"
        },
        {
          time: "19:00",
          nume: "Zumba",
          sala: "Sala Intense"
        },
        {
          time: "19:00",
          nume: "KickBoxing",
          sala: "Zona Crossfit"
        },
        {
          time: "19:00",
          nume: "Crossfit",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "Aqua Fit",
          sala: "Basin"
        },
        {
          time: "20:00",
          nume: "Strong Stretch",
          sala: "Zona Crossfit"
        }
      ],
      "2019-04-06": [
        {
          time: "09:00",
          nume: "Aqua Pilates",
          sala: "Basin"
        },
        {
          time: "10:00",
          nume: "Body Pumping",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Fly YOGA",
          sala: "Sala Intense"
        },
        {
          time: "11:00",
          nume: "FitBall",
          sala: "Sala Intense"
        },
        {
          time: "11:00",
          nume: "Pilates Power",
          sala: "Sala Tonus"
        },
        {
          time: "12:00",
          nume: "Dance Mix",
          sala: "Sala Oasis"
        },
        {
          time: "12:00",
          nume: "Crossfit",
          sala: "Zona Crossfit"
        }
      ],
      "2019-04-07": [
        {
          time: "10:00",
          nume: "Burn Up",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Cycling"
        },
        {
          time: "11:00",
          nume: "Abs Sculpt",
          sala: "Sala Tonus"
        },
        {
          time: "11:00",
          nume: "TRX Bootcamp",
          sala: "Sala Intense"
        },
        {
          time: "12:00",
          nume: "Stretching",
          sala: "Sala Oasis"
        }
      ],
      "2019-04-08": [
        {
          time: "09:00",
          nume: "Aqua Pilates",
          sala: "Basin"
        },
        {
          time: "09:00",
          nume: "Abs+Flex",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Step Sculpt",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Pilates Basic",
          sala: "Sala Oasis"
        },
        {
          time: "11:00",
          nume: "Aqua Strong",
          sala: "Basin"
        },
        {
          time: "11:00",
          nume: "Stretching",
          sala: "Sala Tonus"
        },
        {
          time: "11:00",
          nume: "Latino",
          sala: "Sala Oasis"
        },
        {
          time: "12:00",
          nume: "YOGA",
          sala: "Sala Oasis"
        },
        {
          time: "18:00",
          nume: "Body Pumping",
          sala: "Sala Tonus"
        },
        {
          time: "18:00",
          nume: "Pilates Functional",
          sala: "Sala Oasis"
        },
        {
          time: "19:00",
          nume: "Aqua Interval",
          sala: "Basin"
        },
        {
          time: "19:00",
          nume: "Abs Sculpt",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "KickBoxing",
          sala: "Zona Crossfit"
        },
        {
          time: "19:00",
          nume: "Crossfit",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "Stretching",
          sala: "Sala Oasis"
        }
      ],
      "2019-04-09": [
        {
          time: "09:00",
          nume: "Aqua Fit",
          sala: "Basin"
        },
        {
          time: "09:00",
          nume: "Fitball",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Body Ballet",
          sala: "Sala Tonus"
        },

        {
          time: "10:00",
          nume: "Cycling"
        },
        {
          time: "11:00",
          nume: "Dance Mix",
          sala: "Sala Oasis"
        },
        {
          time: "11:00",
          nume: "TRX Body Blast",
          sala: "Sala Intense"
        },
        {
          time: "12:00",
          nume: "Hobby Dance",
          sala: "Sala Oasis"
        },
        {
          time: "18:00",
          nume: "FitBall",
          sala: "Sala Tonus"
        },
        {
          time: "18:30",
          nume: "Upper Body",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "ABL Band",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "ZUMBA",
          sala: "Sala Oasis"
        },
        {
          time: "19:00",
          nume: "Spin Fit"
        },
        {
          time: "19:00",
          nume: "Crossfit",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "Strong Stretch",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "YOGA",
          sala: "Sala Oasis"
        },
        {
          time: "20:00",
          nume: "Fly YOGA",
          sala: "Sala Intense"
        }
      ],
      "2019-04-10": [
        {
          time: "09:00",
          nume: "Aqua Pilates",
          sala: "Basin"
        },
        {
          time: "09:00",
          nume: "Abs Sculpt",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Step",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Fly YOGA",
          sala: "Sala Intense"
        },
        {
          time: "11:00",
          nume: "Pilates",
          sala: "Sala Intense"
        },
        {
          time: "11:00",
          nume: "Brazillian Butt",
          sala: "Sala Tonus"
        },
        {
          time: "11:00",
          nume: "YOGA",
          sala: "Sala Oasis"
        },
        {
          time: "12:00",
          nume: "Stretching",
          sala: "Sala Tonus"
        },
        {
          time: "18:00",
          nume: "Aqua Fight",
          sala: "Basin"
        },
        {
          time: "18:00",
          nume: "FitButt",
          sala: "Sala Tonus"
        },
        {
          time: "18:00",
          nume: "STEP",
          sala: "Sala intense"
        },
        {
          time: "19:00",
          nume: "Body Pumping",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "Pilates Power",
          sala: "Sala Oasis"
        },
        {
          time: "19:00",
          nume: "KickBoxing",
          sala: "Zona Crossfit"
        },
        {
          time: "19:00",
          nume: "Crossfit",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "Fly YOGA",
          sala: "Sala Intense"
        }
      ],
      "2019-04-11": [
        {
          time: "09:00",
          nume: "Spin Fit"
        },
        {
          time: "09:00",
          nume: "Good Morning",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Body Pumping",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Pilates Functional",
          sala: "Sala Oasis"
        },
        {
          time: "11:00",
          nume: "Aqua Interval",
          sala: "Basin"
        },
        {
          time: "11:00",
          nume: "Dance Mix",
          sala: "Sala Oasis"
        },
        {
          time: "12:00",
          nume: "Couple Dance",
          sala: "Sala Oasis"
        },
        {
          time: "18:00",
          nume: "Brazillian Butt",
          sala: "Sala Tonus"
        },
        {
          time: "18:00",
          nume: "Pilates Basic",
          sala: "Sala Oasis"
        },
        {
          time: "18:30",
          nume: "Abs Sculpt",
          sala: "Sala Intense"
        },
        {
          time: "19:00",
          nume: "Kengoo",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "TRX Core",
          sala: "Sala Intense"
        },
        {
          time: "19:00",
          nume: "Cycling"
        },
        {
          time: "19:00",
          nume: "CrossFit",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "PortDeBrass",
          sala: "Sala Tonus"
        },
        {
          time: "20:00",
          nume: "YOGA",
          sala: "Sala Oasis"
        }
      ],
      "2019-04-12": [
        {
          time: "09:00",
          nume: "Pilates Power",
          sala: "Sala Oasis"
        },
        {
          time: "09:00",
          nume: "ABL",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Metabolism Booster",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Aqua Fight",
          sala: "Basin"
        },
        {
          time: "11:00",
          nume: "PortDeBrass",
          sala: "Sala Tonus"
        },
        {
          time: "11:00",
          nume: "TRX Interval",
          sala: "Sala Tonus"
        },
        {
          time: "12:00",
          nume: "Yoga-Sala",
          sala: "Oasis"
        },
        {
          time: "18:00",
          nume: "Upper Body",
          sala: "Sala Tonus"
        },
        {
          time: "18:00",
          nume: "FitBall",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "BodyMind",
          sala: "Sala Oasis"
        },
        {
          time: "19:00",
          nume: "Zumba",
          sala: "Sala Intense"
        },
        {
          time: "19:00",
          nume: "KickBoxing",
          sala: "Zona Crossfit"
        },
        {
          time: "19:00",
          nume: "Crossfit",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "Aqua Fit",
          sala: "Basin"
        },
        {
          time: "20:00",
          nume: "Strong Stretch",
          sala: "Zona Crossfit"
        }
      ],
      "2019-04-13": [
        {
          time: "09:00",
          nume: "Aqua Pilates",
          sala: "Basin"
        },
        {
          time: "10:00",
          nume: "Body Pumping",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Fly YOGA",
          sala: "Sala Intense"
        },
        {
          time: "11:00",
          nume: "FitBall",
          sala: "Sala Intense"
        },
        {
          time: "11:00",
          nume: "Pilates Power",
          sala: "Sala Tonus"
        },
        {
          time: "12:00",
          nume: "Dance Mix",
          sala: "Sala Oasis"
        },
        {
          time: "12:00",
          nume: "Crossfit",
          sala: "Zona Crossfit"
        }
      ],
      "2019-04-14": [
        {
          time: "10:00",
          nume: "Burn Up",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Cycling"
        },
        {
          time: "11:00",
          nume: "Abs Sculpt",
          sala: "Sala Tonus"
        },
        {
          time: "11:00",
          nume: "TRX Bootcamp",
          sala: "Sala Intense"
        },
        {
          time: "12:00",
          nume: "Stretching",
          sala: "Sala Oasis"
        }
      ],
      "2019-04-15": [
        {
          time: "09:00",
          nume: "Aqua Pilates",
          sala: "Basin"
        },
        {
          time: "09:00",
          nume: "Abs+Flex",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Step Sculpt",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Pilates Basic",
          sala: "Sala Oasis"
        },
        {
          time: "11:00",
          nume: "Aqua Strong",
          sala: "Basin"
        },
        {
          time: "11:00",
          nume: "Stretching",
          sala: "Sala Tonus"
        },
        {
          time: "11:00",
          nume: "Latino",
          sala: "Sala Oasis"
        },
        {
          time: "12:00",
          nume: "YOGA",
          sala: "Sala Oasis"
        },
        {
          time: "18:00",
          nume: "Body Pumping",
          sala: "Sala Tonus"
        },
        {
          time: "18:00",
          nume: "Pilates Functional",
          sala: "Sala Oasis"
        },
        {
          time: "19:00",
          nume: "Aqua Interval",
          sala: "Basin"
        },
        {
          time: "19:00",
          nume: "Abs Sculpt",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "KickBoxing",
          sala: "Zona Crossfit"
        },
        {
          time: "19:00",
          nume: "Crossfit",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "Stretching",
          sala: "Sala Oasis"
        }
      ],
      "2019-04-16": [
        {
          time: "09:00",
          nume: "Aqua Fit",
          sala: "Basin"
        },
        {
          time: "09:00",
          nume: "Fitball",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Body Ballet",
          sala: "Sala Tonus"
        },

        {
          time: "10:00",
          nume: "Cycling"
        },
        {
          time: "11:00",
          nume: "Dance Mix",
          sala: "Sala Oasis"
        },
        {
          time: "11:00",
          nume: "TRX Body Blast",
          sala: "Sala Intense"
        },
        {
          time: "12:00",
          nume: "Hobby Dance",
          sala: "Sala Oasis"
        },
        {
          time: "18:00",
          nume: "FitBall",
          sala: "Sala Tonus"
        },
        {
          time: "18:30",
          nume: "Upper Body",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "ABL Band",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "ZUMBA",
          sala: "Sala Oasis"
        },
        {
          time: "19:00",
          nume: "Spin Fit"
        },
        {
          time: "19:00",
          nume: "Crossfit",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "Strong Stretch",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "YOGA",
          sala: "Sala Oasis"
        },
        {
          time: "20:00",
          nume: "Fly YOGA",
          sala: "Sala Intense"
        }
      ],
      "2019-04-17": [
        {
          time: "09:00",
          nume: "Aqua Pilates",
          sala: "Basin"
        },
        {
          time: "09:00",
          nume: "Abs Sculpt",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Step",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Fly YOGA",
          sala: "Sala Intense"
        },
        {
          time: "11:00",
          nume: "Pilates",
          sala: "Sala Intense"
        },
        {
          time: "11:00",
          nume: "Brazillian Butt",
          sala: "Sala Tonus"
        },
        {
          time: "11:00",
          nume: "YOGA",
          sala: "Sala Oasis"
        },
        {
          time: "12:00",
          nume: "Stretching",
          sala: "Sala Tonus"
        },
        {
          time: "18:00",
          nume: "Aqua Fight",
          sala: "Basin"
        },
        {
          time: "18:00",
          nume: "FitButt",
          sala: "Sala Tonus"
        },
        {
          time: "18:00",
          nume: "STEP",
          sala: "Sala intense"
        },
        {
          time: "19:00",
          nume: "Body Pumping",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "Pilates Power",
          sala: "Sala Oasis"
        },
        {
          time: "19:00",
          nume: "KickBoxing",
          sala: "Zona Crossfit"
        },
        {
          time: "19:00",
          nume: "Crossfit",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "Fly YOGA",
          sala: "Sala Intense"
        }
      ],
      "2019-04-18": [
        {
          time: "09:00",
          nume: "Spin Fit"
        },
        {
          time: "09:00",
          nume: "Good Morning",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Body Pumping",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Pilates Functional",
          sala: "Sala Oasis"
        },
        {
          time: "11:00",
          nume: "Aqua Interval",
          sala: "Basin"
        },
        {
          time: "11:00",
          nume: "Dance Mix",
          sala: "Sala Oasis"
        },
        {
          time: "12:00",
          nume: "Couple Dance",
          sala: "Sala Oasis"
        },
        {
          time: "18:00",
          nume: "Brazillian Butt",
          sala: "Sala Tonus"
        },
        {
          time: "18:00",
          nume: "Pilates Basic",
          sala: "Sala Oasis"
        },
        {
          time: "18:30",
          nume: "Abs Sculpt",
          sala: "Sala Intense"
        },
        {
          time: "19:00",
          nume: "Kengoo",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "TRX Core",
          sala: "Sala Intense"
        },
        {
          time: "19:00",
          nume: "Cycling"
        },
        {
          time: "19:00",
          nume: "CrossFit",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "PortDeBrass",
          sala: "Sala Tonus"
        },
        {
          time: "20:00",
          nume: "YOGA",
          sala: "Sala Oasis"
        }
      ],
      "2019-04-19": [
        {
          time: "09:00",
          nume: "Pilates Power",
          sala: "Sala Oasis"
        },
        {
          time: "09:00",
          nume: "ABL",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Metabolism Booster",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Aqua Fight",
          sala: "Basin"
        },
        {
          time: "11:00",
          nume: "PortDeBrass",
          sala: "Sala Tonus"
        },
        {
          time: "11:00",
          nume: "TRX Interval",
          sala: "Sala Tonus"
        },
        {
          time: "12:00",
          nume: "Yoga-Sala",
          sala: "Oasis"
        },
        {
          time: "18:00",
          nume: "Upper Body",
          sala: "Sala Tonus"
        },
        {
          time: "18:00",
          nume: "FitBall",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "BodyMind",
          sala: "Sala Oasis"
        },
        {
          time: "19:00",
          nume: "Zumba",
          sala: "Sala Intense"
        },
        {
          time: "19:00",
          nume: "KickBoxing",
          sala: "Zona Crossfit"
        },
        {
          time: "19:00",
          nume: "Crossfit",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "Aqua Fit",
          sala: "Basin"
        },
        {
          time: "20:00",
          nume: "Strong Stretch",
          sala: "Zona Crossfit"
        }
      ],
      "2019-04-20": [
        {
          time: "09:00",
          nume: "Aqua Pilates",
          sala: "Basin"
        },
        {
          time: "10:00",
          nume: "Body Pumping",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Fly YOGA",
          sala: "Sala Intense"
        },
        {
          time: "11:00",
          nume: "FitBall",
          sala: "Sala Intense"
        },
        {
          time: "11:00",
          nume: "Pilates Power",
          sala: "Sala Tonus"
        },
        {
          time: "12:00",
          nume: "Dance Mix",
          sala: "Sala Oasis"
        },
        {
          time: "12:00",
          nume: "Crossfit",
          sala: "Zona Crossfit"
        }
      ],
      "2019-04-21": [
        {
          time: "10:00",
          nume: "Burn Up",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Cycling"
        },
        {
          time: "11:00",
          nume: "Abs Sculpt",
          sala: "Sala Tonus"
        },
        {
          time: "11:00",
          nume: "TRX Bootcamp",
          sala: "Sala Intense"
        },
        {
          time: "12:00",
          nume: "Stretching",
          sala: "Sala Oasis"
        }
      ],
      "2019-04-22": [
        {
          time: "09:00",
          nume: "Aqua Pilates",
          sala: "Basin"
        },
        {
          time: "09:00",
          nume: "Abs+Flex",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Step Sculpt",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Pilates Basic",
          sala: "Sala Oasis"
        },
        {
          time: "11:00",
          nume: "Aqua Strong",
          sala: "Basin"
        },
        {
          time: "11:00",
          nume: "Stretching",
          sala: "Sala Tonus"
        },
        {
          time: "11:00",
          nume: "Latino",
          sala: "Sala Oasis"
        },
        {
          time: "12:00",
          nume: "YOGA",
          sala: "Sala Oasis"
        },
        {
          time: "18:00",
          nume: "Body Pumping",
          sala: "Sala Tonus"
        },
        {
          time: "18:00",
          nume: "Pilates Functional",
          sala: "Sala Oasis"
        },
        {
          time: "19:00",
          nume: "Aqua Interval",
          sala: "Basin"
        },
        {
          time: "19:00",
          nume: "Abs Sculpt",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "KickBoxing",
          sala: "Zona Crossfit"
        },
        {
          time: "19:00",
          nume: "Crossfit",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "Stretching",
          sala: "Sala Oasis"
        }
      ],
      "2019-04-23": [
        {
          time: "09:00",
          nume: "Aqua Fit",
          sala: "Basin"
        },
        {
          time: "09:00",
          nume: "Fitball",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Body Ballet",
          sala: "Sala Tonus"
        },

        {
          time: "10:00",
          nume: "Cycling"
        },
        {
          time: "11:00",
          nume: "Dance Mix",
          sala: "Sala Oasis"
        },
        {
          time: "11:00",
          nume: "TRX Body Blast",
          sala: "Sala Intense"
        },
        {
          time: "12:00",
          nume: "Hobby Dance",
          sala: "Sala Oasis"
        },
        {
          time: "18:00",
          nume: "FitBall",
          sala: "Sala Tonus"
        },
        {
          time: "18:30",
          nume: "Upper Body",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "ABL Band",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "ZUMBA",
          sala: "Sala Oasis"
        },
        {
          time: "19:00",
          nume: "Spin Fit"
        },
        {
          time: "19:00",
          nume: "Crossfit",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "Strong Stretch",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "YOGA",
          sala: "Sala Oasis"
        },
        {
          time: "20:00",
          nume: "Fly YOGA",
          sala: "Sala Intense"
        }
      ],
      "2019-04-24": [
        {
          time: "09:00",
          nume: "Aqua Pilates",
          sala: "Basin"
        },
        {
          time: "09:00",
          nume: "Abs Sculpt",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Step",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Fly YOGA",
          sala: "Sala Intense"
        },
        {
          time: "11:00",
          nume: "Pilates",
          sala: "Sala Intense"
        },
        {
          time: "11:00",
          nume: "Brazillian Butt",
          sala: "Sala Tonus"
        },
        {
          time: "11:00",
          nume: "YOGA",
          sala: "Sala Oasis"
        },
        {
          time: "12:00",
          nume: "Stretching",
          sala: "Sala Tonus"
        },
        {
          time: "18:00",
          nume: "Aqua Fight",
          sala: "Basin"
        },
        {
          time: "18:00",
          nume: "FitButt",
          sala: "Sala Tonus"
        },
        {
          time: "18:00",
          nume: "STEP",
          sala: "Sala intense"
        },
        {
          time: "19:00",
          nume: "Body Pumping",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "Pilates Power",
          sala: "Sala Oasis"
        },
        {
          time: "19:00",
          nume: "KickBoxing",
          sala: "Zona Crossfit"
        },
        {
          time: "19:00",
          nume: "Crossfit",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "Fly YOGA",
          sala: "Sala Intense"
        }
      ],
      "2019-04-25": [
        {
          time: "09:00",
          nume: "Spin Fit"
        },
        {
          time: "09:00",
          nume: "Good Morning",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Body Pumping",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Pilates Functional",
          sala: "Sala Oasis"
        },
        {
          time: "11:00",
          nume: "Aqua Interval",
          sala: "Basin"
        },
        {
          time: "11:00",
          nume: "Dance Mix",
          sala: "Sala Oasis"
        },
        {
          time: "12:00",
          nume: "Couple Dance",
          sala: "Sala Oasis"
        },
        {
          time: "18:00",
          nume: "Brazillian Butt",
          sala: "Sala Tonus"
        },
        {
          time: "18:00",
          nume: "Pilates Basic",
          sala: "Sala Oasis"
        },
        {
          time: "18:30",
          nume: "Abs Sculpt",
          sala: "Sala Intense"
        },
        {
          time: "19:00",
          nume: "Kengoo",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "TRX Core",
          sala: "Sala Intense"
        },
        {
          time: "19:00",
          nume: "Cycling"
        },
        {
          time: "19:00",
          nume: "CrossFit",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "PortDeBrass",
          sala: "Sala Tonus"
        },
        {
          time: "20:00",
          nume: "YOGA",
          sala: "Sala Oasis"
        }
      ],
      "2019-04-26": [
        {
          time: "09:00",
          nume: "Pilates Power",
          sala: "Sala Oasis"
        },
        {
          time: "09:00",
          nume: "ABL",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Metabolism Booster",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Aqua Fight",
          sala: "Basin"
        },
        {
          time: "11:00",
          nume: "PortDeBrass",
          sala: "Sala Tonus"
        },
        {
          time: "11:00",
          nume: "TRX Interval",
          sala: "Sala Tonus"
        },
        {
          time: "12:00",
          nume: "Yoga-Sala",
          sala: "Oasis"
        },
        {
          time: "18:00",
          nume: "Upper Body",
          sala: "Sala Tonus"
        },
        {
          time: "18:00",
          nume: "FitBall",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "BodyMind",
          sala: "Sala Oasis"
        },
        {
          time: "19:00",
          nume: "Zumba",
          sala: "Sala Intense"
        },
        {
          time: "19:00",
          nume: "KickBoxing",
          sala: "Zona Crossfit"
        },
        {
          time: "19:00",
          nume: "Crossfit",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "Aqua Fit",
          sala: "Basin"
        },
        {
          time: "20:00",
          nume: "Strong Stretch",
          sala: "Zona Crossfit"
        }
      ],
      "2019-04-27": [
        {
          time: "09:00",
          nume: "Aqua Pilates",
          sala: "Basin"
        },
        {
          time: "10:00",
          nume: "Body Pumping",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Fly YOGA",
          sala: "Sala Intense"
        },
        {
          time: "11:00",
          nume: "FitBall",
          sala: "Sala Intense"
        },
        {
          time: "11:00",
          nume: "Pilates Power",
          sala: "Sala Tonus"
        },
        {
          time: "12:00",
          nume: "Dance Mix",
          sala: "Sala Oasis"
        },
        {
          time: "12:00",
          nume: "Crossfit",
          sala: "Zona Crossfit"
        }
      ],
      "2019-04-28": [
        {
          time: "10:00",
          nume: "Burn Up",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Cycling"
        },
        {
          time: "11:00",
          nume: "Abs Sculpt",
          sala: "Sala Tonus"
        },
        {
          time: "11:00",
          nume: "TRX Bootcamp",
          sala: "Sala Intense"
        },
        {
          time: "12:00",
          nume: "Stretching",
          sala: "Sala Oasis"
        }
      ],
      "2019-04-29": [
        {
          time: "09:00",
          nume: "Aqua Pilates",
          sala: "Basin"
        },
        {
          time: "09:00",
          nume: "Abs+Flex",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Step Sculpt",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Pilates Basic",
          sala: "Sala Oasis"
        },
        {
          time: "11:00",
          nume: "Aqua Strong",
          sala: "Basin"
        },
        {
          time: "11:00",
          nume: "Stretching",
          sala: "Sala Tonus"
        },
        {
          time: "11:00",
          nume: "Latino",
          sala: "Sala Oasis"
        },
        {
          time: "12:00",
          nume: "YOGA",
          sala: "Sala Oasis"
        },
        {
          time: "18:00",
          nume: "Body Pumping",
          sala: "Sala Tonus"
        },
        {
          time: "18:00",
          nume: "Pilates Functional",
          sala: "Sala Oasis"
        },
        {
          time: "19:00",
          nume: "Aqua Interval",
          sala: "Basin"
        },
        {
          time: "19:00",
          nume: "Abs Sculpt",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "KickBoxing",
          sala: "Zona Crossfit"
        },
        {
          time: "19:00",
          nume: "Crossfit",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "Stretching",
          sala: "Sala Oasis"
        }
      ],
      "2019-04-30": [
        {
          time: "09:00",
          nume: "Aqua Fit",
          sala: "Basin"
        },
        {
          time: "09:00",
          nume: "Fitball",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Body Ballet",
          sala: "Sala Tonus"
        },

        {
          time: "10:00",
          nume: "Cycling"
        },
        {
          time: "11:00",
          nume: "Dance Mix",
          sala: "Sala Oasis"
        },
        {
          time: "11:00",
          nume: "TRX Body Blast",
          sala: "Sala Intense"
        },
        {
          time: "12:00",
          nume: "Hobby Dance",
          sala: "Sala Oasis"
        },
        {
          time: "18:00",
          nume: "FitBall",
          sala: "Sala Tonus"
        },
        {
          time: "18:30",
          nume: "Upper Body",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "ABL Band",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "ZUMBA",
          sala: "Sala Oasis"
        },
        {
          time: "19:00",
          nume: "Spin Fit"
        },
        {
          time: "19:00",
          nume: "Crossfit",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "Strong Stretch",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "YOGA",
          sala: "Sala Oasis"
        },
        {
          time: "20:00",
          nume: "Fly YOGA",
          sala: "Sala Intense"
        }
      ],
      "2019-05-01": [
        {
          time: "09:00",
          nume: "Aqua Pilates",
          sala: "Basin"
        },
        {
          time: "09:00",
          nume: "Abs Sculpt",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Step",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Fly YOGA",
          sala: "Sala Intense"
        },
        {
          time: "11:00",
          nume: "Pilates",
          sala: "Sala Intense"
        },
        {
          time: "11:00",
          nume: "Brazillian Butt",
          sala: "Sala Tonus"
        },
        {
          time: "11:00",
          nume: "YOGA",
          sala: "Sala Oasis"
        },
        {
          time: "12:00",
          nume: "Stretching",
          sala: "Sala Tonus"
        },
        {
          time: "18:00",
          nume: "Aqua Fight",
          sala: "Basin"
        },
        {
          time: "18:00",
          nume: "FitButt",
          sala: "Sala Tonus"
        },
        {
          time: "18:00",
          nume: "STEP",
          sala: "Sala intense"
        },
        {
          time: "19:00",
          nume: "Body Pumping",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "Pilates Power",
          sala: "Sala Oasis"
        },
        {
          time: "19:00",
          nume: "KickBoxing",
          sala: "Zona Crossfit"
        },
        {
          time: "19:00",
          nume: "Crossfit",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "Fly YOGA",
          sala: "Sala Intense"
        }
      ],
      "2019-05-02": [
        {
          time: "09:00",
          nume: "Spin Fit"
        },
        {
          time: "09:00",
          nume: "Good Morning",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Body Pumping",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Pilates Functional",
          sala: "Sala Oasis"
        },
        {
          time: "11:00",
          nume: "Aqua Interval",
          sala: "Basin"
        },
        {
          time: "11:00",
          nume: "Dance Mix",
          sala: "Sala Oasis"
        },
        {
          time: "12:00",
          nume: "Couple Dance",
          sala: "Sala Oasis"
        },
        {
          time: "18:00",
          nume: "Brazillian Butt",
          sala: "Sala Tonus"
        },
        {
          time: "18:00",
          nume: "Pilates Basic",
          sala: "Sala Oasis"
        },
        {
          time: "18:30",
          nume: "Abs Sculpt",
          sala: "Sala Intense"
        },
        {
          time: "19:00",
          nume: "Kengoo",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "TRX Core",
          sala: "Sala Intense"
        },
        {
          time: "19:00",
          nume: "Cycling"
        },
        {
          time: "19:00",
          nume: "CrossFit",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "PortDeBrass",
          sala: "Sala Tonus"
        },
        {
          time: "20:00",
          nume: "YOGA",
          sala: "Sala Oasis"
        }
      ],
      "2019-05-03": [
        {
          time: "09:00",
          nume: "Pilates Power",
          sala: "Sala Oasis"
        },
        {
          time: "09:00",
          nume: "ABL",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Metabolism Booster",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Aqua Fight",
          sala: "Basin"
        },
        {
          time: "11:00",
          nume: "PortDeBrass",
          sala: "Sala Tonus"
        },
        {
          time: "11:00",
          nume: "TRX Interval",
          sala: "Sala Tonus"
        },
        {
          time: "12:00",
          nume: "Yoga-Sala",
          sala: "Oasis"
        },
        {
          time: "18:00",
          nume: "Upper Body",
          sala: "Sala Tonus"
        },
        {
          time: "18:00",
          nume: "FitBall",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "BodyMind",
          sala: "Sala Oasis"
        },
        {
          time: "19:00",
          nume: "Zumba",
          sala: "Sala Intense"
        },
        {
          time: "19:00",
          nume: "KickBoxing",
          sala: "Zona Crossfit"
        },
        {
          time: "19:00",
          nume: "Crossfit",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "Aqua Fit",
          sala: "Basin"
        },
        {
          time: "20:00",
          nume: "Strong Stretch",
          sala: "Zona Crossfit"
        }
      ],
      "2019-05-04": [
        {
          time: "09:00",
          nume: "Aqua Pilates",
          sala: "Basin"
        },
        {
          time: "10:00",
          nume: "Body Pumping",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Fly YOGA",
          sala: "Sala Intense"
        },
        {
          time: "11:00",
          nume: "FitBall",
          sala: "Sala Intense"
        },
        {
          time: "11:00",
          nume: "Pilates Power",
          sala: "Sala Tonus"
        },
        {
          time: "12:00",
          nume: "Dance Mix",
          sala: "Sala Oasis"
        },
        {
          time: "12:00",
          nume: "Crossfit",
          sala: "Zona Crossfit"
        }
      ],
      "2019-05-05": [
        {
          time: "10:00",
          nume: "Burn Up",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Cycling"
        },
        {
          time: "11:00",
          nume: "Abs Sculpt",
          sala: "Sala Tonus"
        },
        {
          time: "11:00",
          nume: "TRX Bootcamp",
          sala: "Sala Intense"
        },
        {
          time: "12:00",
          nume: "Stretching",
          sala: "Sala Oasis"
        }
      ],
      "2019-05-06": [
        {
          time: "09:00",
          nume: "Aqua Pilates",
          sala: "Basin"
        },
        {
          time: "09:00",
          nume: "Abs+Flex",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Step Sculpt",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Pilates Basic",
          sala: "Sala Oasis"
        },
        {
          time: "11:00",
          nume: "Aqua Strong",
          sala: "Basin"
        },
        {
          time: "11:00",
          nume: "Stretching",
          sala: "Sala Tonus"
        },
        {
          time: "11:00",
          nume: "Latino",
          sala: "Sala Oasis"
        },
        {
          time: "12:00",
          nume: "YOGA",
          sala: "Sala Oasis"
        },
        {
          time: "18:00",
          nume: "Body Pumping",
          sala: "Sala Tonus"
        },
        {
          time: "18:00",
          nume: "Pilates Functional",
          sala: "Sala Oasis"
        },
        {
          time: "19:00",
          nume: "Aqua Interval",
          sala: "Basin"
        },
        {
          time: "19:00",
          nume: "Abs Sculpt",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "KickBoxing",
          sala: "Zona Crossfit"
        },
        {
          time: "19:00",
          nume: "Crossfit",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "Stretching",
          sala: "Sala Oasis"
        }
      ],
      "2019-05-07": [
        {
          time: "09:00",
          nume: "Aqua Fit",
          sala: "Basin"
        },
        {
          time: "09:00",
          nume: "Fitball",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Body Ballet",
          sala: "Sala Tonus"
        },

        {
          time: "10:00",
          nume: "Cycling"
        },
        {
          time: "11:00",
          nume: "Dance Mix",
          sala: "Sala Oasis"
        },
        {
          time: "11:00",
          nume: "TRX Body Blast",
          sala: "Sala Intense"
        },
        {
          time: "12:00",
          nume: "Hobby Dance",
          sala: "Sala Oasis"
        },
        {
          time: "18:00",
          nume: "FitBall",
          sala: "Sala Tonus"
        },
        {
          time: "18:30",
          nume: "Upper Body",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "ABL Band",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "ZUMBA",
          sala: "Sala Oasis"
        },
        {
          time: "19:00",
          nume: "Spin Fit"
        },
        {
          time: "19:00",
          nume: "Crossfit",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "Strong Stretch",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "YOGA",
          sala: "Sala Oasis"
        },
        {
          time: "20:00",
          nume: "Fly YOGA",
          sala: "Sala Intense"
        }
      ],
      "2019-05-08": [
        {
          time: "09:00",
          nume: "Aqua Pilates",
          sala: "Basin"
        },
        {
          time: "09:00",
          nume: "Abs Sculpt",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Step",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Fly YOGA",
          sala: "Sala Intense"
        },
        {
          time: "11:00",
          nume: "Pilates",
          sala: "Sala Intense"
        },
        {
          time: "11:00",
          nume: "Brazillian Butt",
          sala: "Sala Tonus"
        },
        {
          time: "11:00",
          nume: "YOGA",
          sala: "Sala Oasis"
        },
        {
          time: "12:00",
          nume: "Stretching",
          sala: "Sala Tonus"
        },
        {
          time: "18:00",
          nume: "Aqua Fight",
          sala: "Basin"
        },
        {
          time: "18:00",
          nume: "FitButt",
          sala: "Sala Tonus"
        },
        {
          time: "18:00",
          nume: "STEP",
          sala: "Sala intense"
        },
        {
          time: "19:00",
          nume: "Body Pumping",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "Pilates Power",
          sala: "Sala Oasis"
        },
        {
          time: "19:00",
          nume: "KickBoxing",
          sala: "Zona Crossfit"
        },
        {
          time: "19:00",
          nume: "Crossfit",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "Fly YOGA",
          sala: "Sala Intense"
        }
      ],
      "2019-05-09": [
        {
          time: "09:00",
          nume: "Spin Fit"
        },
        {
          time: "09:00",
          nume: "Good Morning",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Body Pumping",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Pilates Functional",
          sala: "Sala Oasis"
        },
        {
          time: "11:00",
          nume: "Aqua Interval",
          sala: "Basin"
        },
        {
          time: "11:00",
          nume: "Dance Mix",
          sala: "Sala Oasis"
        },
        {
          time: "12:00",
          nume: "Couple Dance",
          sala: "Sala Oasis"
        },
        {
          time: "18:00",
          nume: "Brazillian Butt",
          sala: "Sala Tonus"
        },
        {
          time: "18:00",
          nume: "Pilates Basic",
          sala: "Sala Oasis"
        },
        {
          time: "18:30",
          nume: "Abs Sculpt",
          sala: "Sala Intense"
        },
        {
          time: "19:00",
          nume: "Kengoo",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "TRX Core",
          sala: "Sala Intense"
        },
        {
          time: "19:00",
          nume: "Cycling"
        },
        {
          time: "19:00",
          nume: "CrossFit",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "PortDeBrass",
          sala: "Sala Tonus"
        },
        {
          time: "20:00",
          nume: "YOGA",
          sala: "Sala Oasis"
        }
      ],
      "2019-05-10": [
        {
          time: "09:00",
          nume: "Pilates Power",
          sala: "Sala Oasis"
        },
        {
          time: "09:00",
          nume: "ABL",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Metabolism Booster",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Aqua Fight",
          sala: "Basin"
        },
        {
          time: "11:00",
          nume: "PortDeBrass",
          sala: "Sala Tonus"
        },
        {
          time: "11:00",
          nume: "TRX Interval",
          sala: "Sala Tonus"
        },
        {
          time: "12:00",
          nume: "Yoga-Sala",
          sala: "Oasis"
        },
        {
          time: "18:00",
          nume: "Upper Body",
          sala: "Sala Tonus"
        },
        {
          time: "18:00",
          nume: "FitBall",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "BodyMind",
          sala: "Sala Oasis"
        },
        {
          time: "19:00",
          nume: "Zumba",
          sala: "Sala Intense"
        },
        {
          time: "19:00",
          nume: "KickBoxing",
          sala: "Zona Crossfit"
        },
        {
          time: "19:00",
          nume: "Crossfit",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "Aqua Fit",
          sala: "Basin"
        },
        {
          time: "20:00",
          nume: "Strong Stretch",
          sala: "Zona Crossfit"
        }
      ],
      "2019-05-11": [
        {
          time: "09:00",
          nume: "Aqua Pilates",
          sala: "Basin"
        },
        {
          time: "10:00",
          nume: "Body Pumping",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Fly YOGA",
          sala: "Sala Intense"
        },
        {
          time: "11:00",
          nume: "FitBall",
          sala: "Sala Intense"
        },
        {
          time: "11:00",
          nume: "Pilates Power",
          sala: "Sala Tonus"
        },
        {
          time: "12:00",
          nume: "Dance Mix",
          sala: "Sala Oasis"
        },
        {
          time: "12:00",
          nume: "Crossfit",
          sala: "Zona Crossfit"
        }
      ],
      "2019-05-12": [
        {
          time: "10:00",
          nume: "Burn Up",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Cycling"
        },
        {
          time: "11:00",
          nume: "Abs Sculpt",
          sala: "Sala Tonus"
        },
        {
          time: "11:00",
          nume: "TRX Bootcamp",
          sala: "Sala Intense"
        },
        {
          time: "12:00",
          nume: "Stretching",
          sala: "Sala Oasis"
        }
      ],
      "2019-05-13": [
        {
          time: "09:00",
          nume: "Aqua Pilates",
          sala: "Basin"
        },
        {
          time: "09:00",
          nume: "Abs+Flex",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Step Sculpt",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Pilates Basic",
          sala: "Sala Oasis"
        },
        {
          time: "11:00",
          nume: "Aqua Strong",
          sala: "Basin"
        },
        {
          time: "11:00",
          nume: "Stretching",
          sala: "Sala Tonus"
        },
        {
          time: "11:00",
          nume: "Latino",
          sala: "Sala Oasis"
        },
        {
          time: "12:00",
          nume: "YOGA",
          sala: "Sala Oasis"
        },
        {
          time: "18:00",
          nume: "Body Pumping",
          sala: "Sala Tonus"
        },
        {
          time: "18:00",
          nume: "Pilates Functional",
          sala: "Sala Oasis"
        },
        {
          time: "19:00",
          nume: "Aqua Interval",
          sala: "Basin"
        },
        {
          time: "19:00",
          nume: "Abs Sculpt",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "KickBoxing",
          sala: "Zona Crossfit"
        },
        {
          time: "19:00",
          nume: "Crossfit",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "Stretching",
          sala: "Sala Oasis"
        }
      ],
      "2019-05-14": [
        {
          time: "09:00",
          nume: "Aqua Fit",
          sala: "Basin"
        },
        {
          time: "09:00",
          nume: "Fitball",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Body Ballet",
          sala: "Sala Tonus"
        },

        {
          time: "10:00",
          nume: "Cycling"
        },
        {
          time: "11:00",
          nume: "Dance Mix",
          sala: "Sala Oasis"
        },
        {
          time: "11:00",
          nume: "TRX Body Blast",
          sala: "Sala Intense"
        },
        {
          time: "12:00",
          nume: "Hobby Dance",
          sala: "Sala Oasis"
        },
        {
          time: "18:00",
          nume: "FitBall",
          sala: "Sala Tonus"
        },
        {
          time: "18:30",
          nume: "Upper Body",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "ABL Band",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "ZUMBA",
          sala: "Sala Oasis"
        },
        {
          time: "19:00",
          nume: "Spin Fit"
        },
        {
          time: "19:00",
          nume: "Crossfit",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "Strong Stretch",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "YOGA",
          sala: "Sala Oasis"
        },
        {
          time: "20:00",
          nume: "Fly YOGA",
          sala: "Sala Intense"
        }
      ],
      "2019-05-15": [
        {
          time: "09:00",
          nume: "Aqua Pilates",
          sala: "Basin"
        },
        {
          time: "09:00",
          nume: "Abs Sculpt",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Step",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Fly YOGA",
          sala: "Sala Intense"
        },
        {
          time: "11:00",
          nume: "Pilates",
          sala: "Sala Intense"
        },
        {
          time: "11:00",
          nume: "Brazillian Butt",
          sala: "Sala Tonus"
        },
        {
          time: "11:00",
          nume: "YOGA",
          sala: "Sala Oasis"
        },
        {
          time: "12:00",
          nume: "Stretching",
          sala: "Sala Tonus"
        },
        {
          time: "18:00",
          nume: "Aqua Fight",
          sala: "Basin"
        },
        {
          time: "18:00",
          nume: "FitButt",
          sala: "Sala Tonus"
        },
        {
          time: "18:00",
          nume: "STEP",
          sala: "Sala intense"
        },
        {
          time: "19:00",
          nume: "Body Pumping",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "Pilates Power",
          sala: "Sala Oasis"
        },
        {
          time: "19:00",
          nume: "KickBoxing",
          sala: "Zona Crossfit"
        },
        {
          time: "19:00",
          nume: "Crossfit",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "Fly YOGA",
          sala: "Sala Intense"
        }
      ],
      "2019-05-16": [
        {
          time: "09:00",
          nume: "Spin Fit"
        },
        {
          time: "09:00",
          nume: "Good Morning",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Body Pumping",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Pilates Functional",
          sala: "Sala Oasis"
        },
        {
          time: "11:00",
          nume: "Aqua Interval",
          sala: "Basin"
        },
        {
          time: "11:00",
          nume: "Dance Mix",
          sala: "Sala Oasis"
        },
        {
          time: "12:00",
          nume: "Couple Dance",
          sala: "Sala Oasis"
        },
        {
          time: "18:00",
          nume: "Brazillian Butt",
          sala: "Sala Tonus"
        },
        {
          time: "18:00",
          nume: "Pilates Basic",
          sala: "Sala Oasis"
        },
        {
          time: "18:30",
          nume: "Abs Sculpt",
          sala: "Sala Intense"
        },
        {
          time: "19:00",
          nume: "Kengoo",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "TRX Core",
          sala: "Sala Intense"
        },
        {
          time: "19:00",
          nume: "Cycling"
        },
        {
          time: "19:00",
          nume: "CrossFit",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "PortDeBrass",
          sala: "Sala Tonus"
        },
        {
          time: "20:00",
          nume: "YOGA",
          sala: "Sala Oasis"
        }
      ],
      "2019-05-17": [
        {
          time: "09:00",
          nume: "Pilates Power",
          sala: "Sala Oasis"
        },
        {
          time: "09:00",
          nume: "ABL",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Metabolism Booster",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Aqua Fight",
          sala: "Basin"
        },
        {
          time: "11:00",
          nume: "PortDeBrass",
          sala: "Sala Tonus"
        },
        {
          time: "11:00",
          nume: "TRX Interval",
          sala: "Sala Tonus"
        },
        {
          time: "12:00",
          nume: "Yoga-Sala",
          sala: "Oasis"
        },
        {
          time: "18:00",
          nume: "Upper Body",
          sala: "Sala Tonus"
        },
        {
          time: "18:00",
          nume: "FitBall",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "BodyMind",
          sala: "Sala Oasis"
        },
        {
          time: "19:00",
          nume: "Zumba",
          sala: "Sala Intense"
        },
        {
          time: "19:00",
          nume: "KickBoxing",
          sala: "Zona Crossfit"
        },
        {
          time: "19:00",
          nume: "Crossfit",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "Aqua Fit",
          sala: "Basin"
        },
        {
          time: "20:00",
          nume: "Strong Stretch",
          sala: "Zona Crossfit"
        }
      ],
      "2019-05-18": [
        {
          time: "09:00",
          nume: "Aqua Pilates",
          sala: "Basin"
        },
        {
          time: "10:00",
          nume: "Body Pumping",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Fly YOGA",
          sala: "Sala Intense"
        },
        {
          time: "11:00",
          nume: "FitBall",
          sala: "Sala Intense"
        },
        {
          time: "11:00",
          nume: "Pilates Power",
          sala: "Sala Tonus"
        },
        {
          time: "12:00",
          nume: "Dance Mix",
          sala: "Sala Oasis"
        },
        {
          time: "12:00",
          nume: "Crossfit",
          sala: "Zona Crossfit"
        }
      ],
      "2019-05-19": [
        {
          time: "10:00",
          nume: "Burn Up",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Cycling"
        },
        {
          time: "11:00",
          nume: "Abs Sculpt",
          sala: "Sala Tonus"
        },
        {
          time: "11:00",
          nume: "TRX Bootcamp",
          sala: "Sala Intense"
        },
        {
          time: "12:00",
          nume: "Stretching",
          sala: "Sala Oasis"
        }
      ],
      "2019-05-20": [
        {
          time: "09:00",
          nume: "Aqua Pilates",
          sala: "Basin"
        },
        {
          time: "09:00",
          nume: "Abs+Flex",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Step Sculpt",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Pilates Basic",
          sala: "Sala Oasis"
        },
        {
          time: "11:00",
          nume: "Aqua Strong",
          sala: "Basin"
        },
        {
          time: "11:00",
          nume: "Stretching",
          sala: "Sala Tonus"
        },
        {
          time: "11:00",
          nume: "Latino",
          sala: "Sala Oasis"
        },
        {
          time: "12:00",
          nume: "YOGA",
          sala: "Sala Oasis"
        },
        {
          time: "18:00",
          nume: "Body Pumping",
          sala: "Sala Tonus"
        },
        {
          time: "18:00",
          nume: "Pilates Functional",
          sala: "Sala Oasis"
        },
        {
          time: "19:00",
          nume: "Aqua Interval",
          sala: "Basin"
        },
        {
          time: "19:00",
          nume: "Abs Sculpt",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "KickBoxing",
          sala: "Zona Crossfit"
        },
        {
          time: "19:00",
          nume: "Crossfit",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "Stretching",
          sala: "Sala Oasis"
        }
      ],
      "2019-05-21": [
        {
          time: "09:00",
          nume: "Aqua Fit",
          sala: "Basin"
        },
        {
          time: "09:00",
          nume: "Fitball",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Body Ballet",
          sala: "Sala Tonus"
        },

        {
          time: "10:00",
          nume: "Cycling"
        },
        {
          time: "11:00",
          nume: "Dance Mix",
          sala: "Sala Oasis"
        },
        {
          time: "11:00",
          nume: "TRX Body Blast",
          sala: "Sala Intense"
        },
        {
          time: "12:00",
          nume: "Hobby Dance",
          sala: "Sala Oasis"
        },
        {
          time: "18:00",
          nume: "FitBall",
          sala: "Sala Tonus"
        },
        {
          time: "18:30",
          nume: "Upper Body",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "ABL Band",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "ZUMBA",
          sala: "Sala Oasis"
        },
        {
          time: "19:00",
          nume: "Spin Fit"
        },
        {
          time: "19:00",
          nume: "Crossfit",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "Strong Stretch",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "YOGA",
          sala: "Sala Oasis"
        },
        {
          time: "20:00",
          nume: "Fly YOGA",
          sala: "Sala Intense"
        }
      ],
      "2019-05-22": [
        {
          time: "09:00",
          nume: "Aqua Pilates",
          sala: "Basin"
        },
        {
          time: "09:00",
          nume: "Abs Sculpt",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Step",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Fly YOGA",
          sala: "Sala Intense"
        },
        {
          time: "11:00",
          nume: "Pilates",
          sala: "Sala Intense"
        },
        {
          time: "11:00",
          nume: "Brazillian Butt",
          sala: "Sala Tonus"
        },
        {
          time: "11:00",
          nume: "YOGA",
          sala: "Sala Oasis"
        },
        {
          time: "12:00",
          nume: "Stretching",
          sala: "Sala Tonus"
        },
        {
          time: "18:00",
          nume: "Aqua Fight",
          sala: "Basin"
        },
        {
          time: "18:00",
          nume: "FitButt",
          sala: "Sala Tonus"
        },
        {
          time: "18:00",
          nume: "STEP",
          sala: "Sala intense"
        },
        {
          time: "19:00",
          nume: "Body Pumping",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "Pilates Power",
          sala: "Sala Oasis"
        },
        {
          time: "19:00",
          nume: "KickBoxing",
          sala: "Zona Crossfit"
        },
        {
          time: "19:00",
          nume: "Crossfit",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "Fly YOGA",
          sala: "Sala Intense"
        }
      ],
      "2019-05-23": [
        {
          time: "09:00",
          nume: "Spin Fit"
        },
        {
          time: "09:00",
          nume: "Good Morning",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Body Pumping",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Pilates Functional",
          sala: "Sala Oasis"
        },
        {
          time: "11:00",
          nume: "Aqua Interval",
          sala: "Basin"
        },
        {
          time: "11:00",
          nume: "Dance Mix",
          sala: "Sala Oasis"
        },
        {
          time: "12:00",
          nume: "Couple Dance",
          sala: "Sala Oasis"
        },
        {
          time: "18:00",
          nume: "Brazillian Butt",
          sala: "Sala Tonus"
        },
        {
          time: "18:00",
          nume: "Pilates Basic",
          sala: "Sala Oasis"
        },
        {
          time: "18:30",
          nume: "Abs Sculpt",
          sala: "Sala Intense"
        },
        {
          time: "19:00",
          nume: "Kengoo",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "TRX Core",
          sala: "Sala Intense"
        },
        {
          time: "19:00",
          nume: "Cycling"
        },
        {
          time: "19:00",
          nume: "CrossFit",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "PortDeBrass",
          sala: "Sala Tonus"
        },
        {
          time: "20:00",
          nume: "YOGA",
          sala: "Sala Oasis"
        }
      ],
      "2019-05-24": [
        {
          time: "09:00",
          nume: "Pilates Power",
          sala: "Sala Oasis"
        },
        {
          time: "09:00",
          nume: "ABL",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Metabolism Booster",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Aqua Fight",
          sala: "Basin"
        },
        {
          time: "11:00",
          nume: "PortDeBrass",
          sala: "Sala Tonus"
        },
        {
          time: "11:00",
          nume: "TRX Interval",
          sala: "Sala Tonus"
        },
        {
          time: "12:00",
          nume: "Yoga-Sala",
          sala: "Oasis"
        },
        {
          time: "18:00",
          nume: "Upper Body",
          sala: "Sala Tonus"
        },
        {
          time: "18:00",
          nume: "FitBall",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "BodyMind",
          sala: "Sala Oasis"
        },
        {
          time: "19:00",
          nume: "Zumba",
          sala: "Sala Intense"
        },
        {
          time: "19:00",
          nume: "KickBoxing",
          sala: "Zona Crossfit"
        },
        {
          time: "19:00",
          nume: "Crossfit",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "Aqua Fit",
          sala: "Basin"
        },
        {
          time: "20:00",
          nume: "Strong Stretch",
          sala: "Zona Crossfit"
        }
      ],
      "2019-05-25": [
        {
          time: "09:00",
          nume: "Aqua Pilates",
          sala: "Basin"
        },
        {
          time: "10:00",
          nume: "Body Pumping",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Fly YOGA",
          sala: "Sala Intense"
        },
        {
          time: "11:00",
          nume: "FitBall",
          sala: "Sala Intense"
        },
        {
          time: "11:00",
          nume: "Pilates Power",
          sala: "Sala Tonus"
        },
        {
          time: "12:00",
          nume: "Dance Mix",
          sala: "Sala Oasis"
        },
        {
          time: "12:00",
          nume: "Crossfit",
          sala: "Zona Crossfit"
        }
      ],
      "2019-05-26": [
        {
          time: "10:00",
          nume: "Burn Up",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Cycling"
        },
        {
          time: "11:00",
          nume: "Abs Sculpt",
          sala: "Sala Tonus"
        },
        {
          time: "11:00",
          nume: "TRX Bootcamp",
          sala: "Sala Intense"
        },
        {
          time: "12:00",
          nume: "Stretching",
          sala: "Sala Oasis"
        }
      ],
      "2019-05-27": [
        {
          time: "09:00",
          nume: "Aqua Pilates",
          sala: "Basin"
        },
        {
          time: "09:00",
          nume: "Abs+Flex",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Step Sculpt",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Pilates Basic",
          sala: "Sala Oasis"
        },
        {
          time: "11:00",
          nume: "Aqua Strong",
          sala: "Basin"
        },
        {
          time: "11:00",
          nume: "Stretching",
          sala: "Sala Tonus"
        },
        {
          time: "11:00",
          nume: "Latino",
          sala: "Sala Oasis"
        },
        {
          time: "12:00",
          nume: "YOGA",
          sala: "Sala Oasis"
        },
        {
          time: "18:00",
          nume: "Body Pumping",
          sala: "Sala Tonus"
        },
        {
          time: "18:00",
          nume: "Pilates Functional",
          sala: "Sala Oasis"
        },
        {
          time: "19:00",
          nume: "Aqua Interval",
          sala: "Basin"
        },
        {
          time: "19:00",
          nume: "Abs Sculpt",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "KickBoxing",
          sala: "Zona Crossfit"
        },
        {
          time: "19:00",
          nume: "Crossfit",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "Stretching",
          sala: "Sala Oasis"
        }
      ],
      "2019-05-28": [
        {
          time: "09:00",
          nume: "Aqua Fit",
          sala: "Basin"
        },
        {
          time: "09:00",
          nume: "Fitball",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Body Ballet",
          sala: "Sala Tonus"
        },

        {
          time: "10:00",
          nume: "Cycling"
        },
        {
          time: "11:00",
          nume: "Dance Mix",
          sala: "Sala Oasis"
        },
        {
          time: "11:00",
          nume: "TRX Body Blast",
          sala: "Sala Intense"
        },
        {
          time: "12:00",
          nume: "Hobby Dance",
          sala: "Sala Oasis"
        },
        {
          time: "18:00",
          nume: "FitBall",
          sala: "Sala Tonus"
        },
        {
          time: "18:30",
          nume: "Upper Body",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "ABL Band",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "ZUMBA",
          sala: "Sala Oasis"
        },
        {
          time: "19:00",
          nume: "Spin Fit"
        },
        {
          time: "19:00",
          nume: "Crossfit",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "Strong Stretch",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "YOGA",
          sala: "Sala Oasis"
        },
        {
          time: "20:00",
          nume: "Fly YOGA",
          sala: "Sala Intense"
        }
      ],
      "2019-05-29": [
        {
          time: "09:00",
          nume: "Aqua Pilates",
          sala: "Basin"
        },
        {
          time: "09:00",
          nume: "Abs Sculpt",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Step",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Fly YOGA",
          sala: "Sala Intense"
        },
        {
          time: "11:00",
          nume: "Pilates",
          sala: "Sala Intense"
        },
        {
          time: "11:00",
          nume: "Brazillian Butt",
          sala: "Sala Tonus"
        },
        {
          time: "11:00",
          nume: "YOGA",
          sala: "Sala Oasis"
        },
        {
          time: "12:00",
          nume: "Stretching",
          sala: "Sala Tonus"
        },
        {
          time: "18:00",
          nume: "Aqua Fight",
          sala: "Basin"
        },
        {
          time: "18:00",
          nume: "FitButt",
          sala: "Sala Tonus"
        },
        {
          time: "18:00",
          nume: "STEP",
          sala: "Sala intense"
        },
        {
          time: "19:00",
          nume: "Body Pumping",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "Pilates Power",
          sala: "Sala Oasis"
        },
        {
          time: "19:00",
          nume: "KickBoxing",
          sala: "Zona Crossfit"
        },
        {
          time: "19:00",
          nume: "Crossfit",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "Fly YOGA",
          sala: "Sala Intense"
        }
      ],
      "2019-05-30": [
        {
          time: "09:00",
          nume: "Spin Fit"
        },
        {
          time: "09:00",
          nume: "Good Morning",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Body Pumping",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Pilates Functional",
          sala: "Sala Oasis"
        },
        {
          time: "11:00",
          nume: "Aqua Interval",
          sala: "Basin"
        },
        {
          time: "11:00",
          nume: "Dance Mix",
          sala: "Sala Oasis"
        },
        {
          time: "12:00",
          nume: "Couple Dance",
          sala: "Sala Oasis"
        },
        {
          time: "18:00",
          nume: "Brazillian Butt",
          sala: "Sala Tonus"
        },
        {
          time: "18:00",
          nume: "Pilates Basic",
          sala: "Sala Oasis"
        },
        {
          time: "18:30",
          nume: "Abs Sculpt",
          sala: "Sala Intense"
        },
        {
          time: "19:00",
          nume: "Kengoo",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "TRX Core",
          sala: "Sala Intense"
        },
        {
          time: "19:00",
          nume: "Cycling"
        },
        {
          time: "19:00",
          nume: "CrossFit",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "PortDeBrass",
          sala: "Sala Tonus"
        },
        {
          time: "20:00",
          nume: "YOGA",
          sala: "Sala Oasis"
        }
      ],
      "2019-05-31": [
        {
          time: "09:00",
          nume: "Pilates Power",
          sala: "Sala Oasis"
        },
        {
          time: "09:00",
          nume: "ABL",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Metabolism Booster",
          sala: "Sala Tonus"
        },
        {
          time: "10:00",
          nume: "Aqua Fight",
          sala: "Basin"
        },
        {
          time: "11:00",
          nume: "PortDeBrass",
          sala: "Sala Tonus"
        },
        {
          time: "11:00",
          nume: "TRX Interval",
          sala: "Sala Tonus"
        },
        {
          time: "12:00",
          nume: "Yoga-Sala",
          sala: "Oasis"
        },
        {
          time: "18:00",
          nume: "Upper Body",
          sala: "Sala Tonus"
        },
        {
          time: "18:00",
          nume: "FitBall",
          sala: "Sala Tonus"
        },
        {
          time: "19:00",
          nume: "BodyMind",
          sala: "Sala Oasis"
        },
        {
          time: "19:00",
          nume: "Zumba",
          sala: "Sala Intense"
        },
        {
          time: "19:00",
          nume: "KickBoxing",
          sala: "Zona Crossfit"
        },
        {
          time: "19:00",
          nume: "Crossfit",
          sala: "Zona Crossfit"
        },
        {
          time: "20:00",
          nume: "Aqua Fit",
          sala: "Basin"
        },
        {
          time: "20:00",
          nume: "Strong Stretch",
          sala: "Zona Crossfit"
        }
      ]
    },

    async componentDidMount() {
      await Font.loadAsync({
        century_gothic: require("../img/CenturyGothic.ttf"),
        open_sans_bold: require("../img/OpenSans-Regular.ttf")
      });

      this.setState({ fontLoaded: true });
    }
  };
  render() {
    return (
      <Agenda
        items={this.state.items}
        firstDay={1}
        showWeekNumbers={true}
        loadItemsForMonth={this.loadItems.bind(this)}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        selected={new Date()}
        theme={{
          agendaDayTextColor: "black",
          agendaDayNumColor: "green",
          agendaTodayColor: "red",
          agendaKnobColor: "blue"
        }}
        // renderDay={(day, item) => <Text>{day ? day.day : "item"}</Text>}
      />
    );
  }

  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = 1;
          for (let j = 0; j < numItems; j++) {
            this.state.items[strTime].push({
              // name: "Exercise ",
              height: Math.max(50, Math.floor)
            });
          }
        }
      }
      //console.log(this.state.items);
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {
        newItems[key] = this.state.items[key];
      });
      this.setState({
        items: newItems
      });
    }, 1000);
    // console.log(Load Items for ${day.year}-${day.month});
  }

  setVisible() {
    this.setState({ visible: true });
  }

  renderItem(item) {
    return (
      <View style={{ margin: 10 }}>
        <Dialog
          visible={this.state.visible}
          footer={
            <DialogFooter>
              <DialogButton text="CANCEL" onPress={() => {}} />
              <DialogButton text="OK" onPress={() => {}} />
            </DialogFooter>
          }
        >
          <DialogContent>
            <Text>hello</Text>
          </DialogContent>
        </Dialog>
        <View>
          <Text style={styles.timeBackgroundStyle}>{item.time}</Text>
        </View>
        <View style={styles.theRestOfBackground}>
          <Text
            style={{
              margin: 7,
              marginLeft: 10,
              fontSize: 18
            }}
          >
            {item.nume}
          </Text>
          <Text
            style={
              (styles.salaBackgroundStyle,
              {
                marginBottom: 3,
                marginLeft: 10,
                fontFamily: "century_gothic"
              })
            }
          >
            {item.sala}
          </Text>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
              marginLeft: 7,
              marginBottom: 7
            }}
          />
          <Button
            raised
            primary
            text="Înscrie-te"
            onPress={() => {
              this.setVisible();
            }}
          />{" "}
          />
        </View>
      </View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split("T")[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex: 1,
    padding: 15
  },
  timeStyle: {
    height: 15,
    flex: 1,
    paddingTop: 30,
    fontSize: 30
  },
  timeBackgroundStyle: {
    fontFamily: "century_gothic",
    fontSize: 18,
    backgroundColor: "#E62027",
    padding: 10,
    color: "white"
  },
  theRestOfBackground: {
    flex: 0,
    backgroundColor: "white",
    flexDirection: "column"
  }
});
