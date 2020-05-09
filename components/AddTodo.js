import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

const AddTodo = ({ SubmitHandler }) => {
  const [text, SetText] = useState("");
  const textChange = (val) => {
    SetText(val);
  };
  const PressHandler = () => {
    SubmitHandler(text);
    SetText("");
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new to do .."
        value={text}
        onChangeText={textChange}
      ></TextInput>
      <Button title="add to do" onPress={PressHandler} />
    </View>
  );
};
export default AddTodo;
const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 50,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
