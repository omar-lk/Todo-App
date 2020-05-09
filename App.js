import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import Header from "./components/header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy ice cream", key: "1" },
    { text: "create the API", key: "2" },
    { text: "go to the cinema", key: "3" },
    { text: "watch the spranos", key: "4" },
    { text: "watch the office", key: "5" },
    { text: "make Documentaion", key: "6" },
    { text: "make Podcast", key: "7" },
    { text: "make Podcast", key: "8" },
  ]);

  const pressHandler = (key) => {
    console.log(key);

    setTodos((prevtodos) => {
      return prevtodos.filter((todo) => todo.key != key);
    });
  };
  const SubmitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevtodos) => {
        return [{ text, key: Math.random().toString() }, ...prevtodos];
      });
    } else
      Alert.alert("OOPS", "Todo must be over 3 characters long", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
  };
  return (
    <View style={styles.container}>
      <Header />
      <AddTodo SubmitHandler={SubmitHandler}></AddTodo>
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    backgroundColor: "#315799",
    flex: 1,
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
