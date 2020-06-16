import React, { useContext, useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import { Context } from "../context/BlogContext";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(Context);

  const blogPost = state.find(
    blogPost => blogPost.id === navigation.getParam("id")
  );
  const [name, setName] = useState(blogPost.name);
  const [membership, setMembership] = useState(blogPost.membership);
  const [age, setAge] = useState(blogPost.age);
  return (
    <>
      <View style={styles.container}>
        <Text>Change name to:</Text>
        <TextInput
          style={styles.inputStyle}
          value={name}
          onChangeText={newName => setName(newName)}
        ></TextInput>
      </View>
      <View style={styles.container}>
        <Text>Change membership to:</Text>
        <TextInput
          style={styles.inputStyle}
          value={membership}
          onChangeText={newMembership => setMembership(newMembership)}
        ></TextInput>
      </View>
      <View style={styles.container}>
        <Text>Change age to:</Text>
        <TextInput
          style={styles.inputStyle}
          value={age}
          onChangeText={newAge => setAge(newAge)}
        ></TextInput>
      </View>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => {
          editBlogPost(name, membership, age, () => {
            navigation.navigate("Index");
          });
        }}
      >
        <Feather size={30} name="save" />
      </TouchableOpacity>
    </>
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
export default EditScreen;
