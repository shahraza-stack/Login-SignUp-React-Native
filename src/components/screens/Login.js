import { StyleSheet, Image, Text, View, TextInput } from "react-native";
import React from "react";
import pattern from "../../../assets/pattern.jpg";
import logo from "../../../assets/logo.png";
import { button1 } from "../../common/button";
import { head1, head2 } from "../../common/formcss";

export default function Login() {
  return (
    <View style={styles.container1}>
      <View style={styles.s1}>
        {/* <Image style={styles.logo} source={logo} /> */}
        <Text style={styles.h1}> Shah </Text>
        <Text style={styles.h2}>Polishing Skills..</Text>
      </View>
      <View style={styles.s2}>
        <Text style={head1}>Login</Text>
        <Text style={head2}>Sign in to continue</Text>
        <View style={styles.formgroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   width: "100%",
  //   //height: "100%",
  // },
  container: {
    display: "flex",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  // patterning: {
  //   position: "absolute",
  //   top: 0,
  //   width: "100%",
  //   height: "100%",
  //   width: "100%",
  // },
  logo: {
    height: "200",
  },
  container1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  s1: {
    display: "flex",
    color: "white",
    //fontSize: 15,
    alignItems: "center",
    justifyContent: "center",
    height: "40%",
    width: "100%",
  },
  s2: {
    display: "flex",
    backgroundColor: "white",
    width: "100%",
    height: "60%",
    // justifyContent: "center",
    // alignItem: "centre",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  h1: {
    fontSize: 30,
    color: "white",
  },
  h2: {
    fontSize: 10,
    color: "grey",
  },
  bu: {
    alignItem: "centre",
    justifyContent: "center",
    color: "black",
    fontSize: 20,
  },
  formgroup: {
    display: "flex",
    flexDirection: "column",
    widht: "100%",
    marginVertical: 10,
  },
  label: {
    fontSize: 17,
    marginLeft: 10,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#D9D9D9",
    // borderRadius: 5,
    padding: 15,
  },
});
