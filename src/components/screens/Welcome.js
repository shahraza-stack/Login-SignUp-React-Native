import { StyleSheet, Image, Text, View } from "react-native";
import React from "react";
import pattern from "../../../assets/pattern.jpg";
import logo from "../../../assets/logo.png";
import { button1 } from "../../common/button";

const Welcome = () => {
  return (
    <View style={styles.container}>
      {/* <Image style={styles.patterning} source={pattern} />
      <View style={styles.container}>
        <Image style={styles.logo} source={logo} />
      </View>

      {/* <Text style={styles.head}>TEACH</Text> */}
      <Text style={button1}>Login</Text>
      <Text style={button1}>Signup</Text>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  container: {
    display: "flex",
    //    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  patterning: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    width: "100%",
  },
  logo: {
    height: "200",
  },
});
