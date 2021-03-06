import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import WatchlistProvider from "./src/Contexts/WatchlistContext"
import Navigation from "./src/navigation"
// import HomeScreen from "./src/screens/HomeScreen"
// import CoinDetailedScreen from "./src/screens/CoinDetailedScreen"

export default function App() {
  return (
    <NavigationContainer
      theme={{
        colors: {
          background: "#121212",
        },
      }}
    >
      <WatchlistProvider>
        <View style={styles.container}>
          <Navigation />
          <StatusBar style="light" />
        </View>
      </WatchlistProvider>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 50,
  },
})
