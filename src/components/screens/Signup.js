import {
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import React from "react";
import logo from "../../../assets/logo.png";
import { button1 } from "../../common/button";
import {
  formgroup,
  head1,
  head2,
  input,
  label,
  link,
  link2,
} from "../../common/formcss";
// import Button from "../../common/button";

export default function Signup(navigation) {
  return (
    <View style={styles.container1}>
      <View style={styles.s1}>
        <Image style={styles.logo} source={logo} />
      </View>
      <ScrollView>
        <View style={styles.s2}>
          <Text style={head1}>Create new Account</Text>
          <Text style={link2}>
            Already Registered?
            <Text style={link}>Login here</Text>
          </Text>
          <View style={formgroup}>
            <Text style={label}>First Name</Text>
            <TextInput style={input} placeholder="John" />
            <Text style={label}>Last Name</Text>
            <TextInput style={input} placeholder="Walter" />
            <Text style={label}>Email</Text>
            <TextInput style={input} placeholder="abc@xyz.com" />
            <Text style={label}>Email</Text>
            <TextInput style={input} placeholder="abc@xyz.com" />
            <Text style={label}>Email</Text>
            <TextInput style={input} placeholder="abc@xyz.com" />
            <Text style={label}>Password</Text>
            <TextInput
              style={input}
              placeholder="********"
              secureTextEntry={true}
            />
            <Text style={label}>Confirm Password</Text>
            <TextInput
              style={input}
              placeholder="********"
              secureTextEntry={true}
            />
          </View>
          <Button style={button1} title="SIGN UP" />
          {/* <Text style={button1}>Signup</Text> */}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   width: "100%",
  //   //height: "100%",
  // },
  // container: {
  //   display: "flex",
  //   backgroundColor: "black",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   height: "100%",
  //   width: "100%",
  // },
  // patterning: {
  //   position: "absolute",
  //   top: 0,
  //   width: "100%",
  //   height: "100%",
  //   width: "100%",
  // },
  logo: {
    height: "80%",
    resizeMode: "contain",
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
    height: "20%",
    // width: "100%",
  },
  s2: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    textAlign: "center",
    alignItem: "centre",
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
