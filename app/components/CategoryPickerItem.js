import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import AppText from "./AppText";
import Icon from "./Icon";

export default function CategoryPickerItem({ item, label, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={80}
        />
      </TouchableOpacity>

      <AppText style={styles.label}>{label}</AppText>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    backgroundColor: "black",
    borderWidth: 2,
    alignItems: "center",
    width: "33%",
  },
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 12,
  },
});
