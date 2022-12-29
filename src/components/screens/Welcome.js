import { StyleSheet, Image, Text, View, Button } from "react-native";
import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import logo from "../../../assets/logo.png";
import { createStackNavigator } from "@react-navigation/stack";
// import Button, { button1 } from "../../common/button";
import Signup from "./Signup";
import Login from "./Login";

const Stack = createStackNavigator();
class Welcome extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={logo} />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            {/* <Stack.Screen name="Signup" component={Signup} /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}
// const Welcome = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Image style={styles.logo} source={logo} />
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Button title="Login" onPress={() => navigation.navigate("Login")} />
//           <Button
//             title="Sign Up"
//             onPress={() => navigation.navigate("Sign Up")}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>

//       <Text style={button1}>Login</Text>
//       <Text style={button1}>Signup</Text>
//     </View>
//   );
// };

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
