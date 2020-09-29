import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const ViewImageScreen = ({ params }) => (
  <View style={styles.container}>
    <View style={styles.closeIcon}>
      <MaterialCommunityIcons name="close" color="white" size={30} />
    </View>
    <View style={styles.deleteIcon}>
      <MaterialCommunityIcons
        name="trash-can-outline"
        color="white"
        size={30}
      />
    </View>
    <Image
      source={require("../assets/chair.jpg")}
      style={styles.image}
      resizeMode="contain"
    ></Image>
  </View>
);

const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 25,
    left: 10,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  deleteIcon: {
    position: "absolute",
    top: 25,
    right: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
