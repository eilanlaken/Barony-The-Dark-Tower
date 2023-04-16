import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as NavigationBar from "expo-navigation-bar";
import MapTile from "./components/MapTile";
import Token from "./components/Token";
import { HomeScreen } from "./screens/HomeScreen";
import { GameScreen } from "./screens/GameScreen";
import { useEffect } from "react";

const Stack = createNativeStackNavigator();

const setNavigationBarColor = async () => {
  await NavigationBar.setBackgroundColorAsync("#1110");
};

export default function App() {
  useEffect(() => {});

  setNavigationBarColor();

  return (
    <NavigationContainer>
      {/* TODO: customize the status bar according to standards */}
      <StatusBar backgroundColor="green" style="light" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Gameplay" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <Text>qqqq</Text>

    //   <MapTile x={30} y={30} onPress={() => console.log('hi')} tile={'Green'}/>
    //   <Token worldMap={test}/>

    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
