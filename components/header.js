import React from "react";
import { StyleSheet, Text, View, YellowBox } from "react-native";
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>To Do</Text>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#C44536",
    padding: 20,
    paddingTop: 38,
    height: 80,
  },
  title: { textAlign: "center", fontSize: 20, fontWeight: "bold" },
});
