import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";

import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Red Jacker for sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 400,
    image: require("../assets/couch.jpg"),
  },
  {
    id: 3,
    title: "Couch in great condition",
    price: 400,
    image: require("../assets/couch.jpg"),
  },
  {
    id: 4,
    title: "Couch in great condition",
    price: 400,
    image: require("../assets/couch.jpg"),
  },
];

export default function ListingsScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.gray,
  },
});
