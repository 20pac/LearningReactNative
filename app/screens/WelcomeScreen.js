import React from "react";
import { Text, View, Image, ImageBackground, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";

import colors from "../config/colors";

export default function WelcomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "gold" }}>
      <ImageBackground
        blurRadius={5}
        source={require("../assets/background.jpg")}
        style={styles.background}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/logo-red.png")}
            style={styles.logo}
          />
          <Text style={styles.tagline}>Sell What You Don't Want</Text>
        </View>
        <View style={styles.buttonContainer}>
          <AppButton title="login" />
          <AppButton title="register" color="secondary" />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, justifyContent: "flex-end", alignItems: "center" },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },

  logo: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 10,
  },
});
