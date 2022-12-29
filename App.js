import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ViewPropTypes } from "deprecated-react-native-prop-types";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/components/screens/Login";
import Signup from "./src/components/screens/Signup";
import Welcome from "./src/components/screens/Welcome";
import React from "react";

const Stack = createStackNavigator();
class App extends React.Component {
  render() {
    return (
      // <NavigationContainer>
      //   <Stack.Navigator>
      //     <Stack.Screen name="Welcome" component={Welcome} />
      //   </Stack.Navigator>
      // </NavigationContainer>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="login" component={Login} />

          {/* <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Welcome" }}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

// export default function App() {
//   return (
//     <View style={styles.container}>
//       {/* <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name="Welcome" component={WelcomeScreen} />
//         </Stack.Navigator>
//       </NavigationContainer> */}
//       <Welcome />
//       {/* <Login /> */}

//       {/* <Signup /> */}
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
