import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const TodoItem = ({ item, pressHandler }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        pressHandler(item.key);
      }}
    >
      <Text style={styles.text}>{item.text}</Text>
    </TouchableOpacity>
  );
};
export default TodoItem;
const styles = StyleSheet.create({
  text: {
    backgroundColor: "#edddd4",
    padding: 16,
    marginTop: 16,
    borderColor: "black",
    borderStyle: "dashed",
    borderWidth: 1,
    borderRadius: 10,
  },
});
