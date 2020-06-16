import React, { useContext } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Context } from "../context/BlogContext";

const SecretScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const blogPost = state.find(
    blogPost => blogPost.id === navigation.navigate("Show", { id: 1 })
  );
  return (
    <View>
      <Text>Secret Screen</Text>

      <Text> `Guess the age of ${blogPost.name}` </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignContent: "center",
    padding: 5
  },
  inputStyle: {
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 5
  },
  iconContainer: {
    alignSelf: "center",
    padding: 5
  }
});
export default SecretScreen;