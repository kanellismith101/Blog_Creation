import React, { useContext } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Context } from "../context/BlogContext";
import { TouchableOpacity } from "react-native-gesture-handler";
import { EvilIcons } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const blogPost = state.find(
    blogPost => blogPost.id === navigation.getParam("id")
  );
  return (
    <>
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.boldText}>Name: </Text>
          <Text>{blogPost.name}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.boldText}>Membership: </Text>
          <Text>{blogPost.membership}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.boldText}>Age: </Text>
          <Text>{blogPost.age}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.boldText}>ID: </Text>
          <Text>{blogPost.id}</Text>
        </View>
      </View>
    </>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", {
            id: navigation.getParam("id")
          })
        }
      >
        <EvilIcons size={35} name="pencil" />
      </TouchableOpacity>
    )
  };
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignContent: "center",
    padding: 5,
    borderColor: "gray",
    borderWidth: 1
  },
  row: {
    flexDirection: "row"
  },
  boldText: {
    fontWeight: "bold"
  }
});
export default ShowScreen;
