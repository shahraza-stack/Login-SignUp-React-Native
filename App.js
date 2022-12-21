import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Welcome from "./src/components/screens/Welcome";
import Login from "./src/components/screens/Login";
import Signup from "./src/components/screens/Signup";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Welcome /> */}
      {/* <Login /> */}
      <Signup />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
