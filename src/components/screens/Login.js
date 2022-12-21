import { StyleSheet, Image, Text, View, TextInput } from "react-native";
import React from "react";
import pattern from "../../../assets/pattern.jpg";
import logo from "../../../assets/logo.png";
import button, { button1 } from "../../common/button";
import {
  formgroup,
  head1,
  head2,
  input,
  label,
  link,
  link2,
} from "../../common/formcss";

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
        <View style={formgroup}>
          <Text style={label}>Email</Text>
          <TextInput style={input} placeholder="abc@xyz.com" />
          <Text style={label}>Password</Text>
          <TextInput
            style={input}
            placeholder="********"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.fp}>
          <Text style={link}>Forgot Password?</Text>
        </View>
        <Text style={button1}>Login</Text>
        <Text>
          Don't have an account <Text style={link2}>Create an account?</Text>
        </Text>
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
    height: "45%",
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
  fp: {
    display: "flex",
    alignItems: "flex-end",
    marginVertical: 5,
    marginHorizontal: 15,
  },
});
