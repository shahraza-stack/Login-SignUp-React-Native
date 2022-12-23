import { StyleSheet, Image, Text, View } from "react-native";
import React from "react";
import logo from "../../../assets/logo.png";
import { button1 } from "../../common/button";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />

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
  logo: {
    height: "80%",
    resizeMode: "contain",
  },
});
