import React, { useContext, useState } from "react";
import { Text, StyleSheet, View, TextInput, Picker } from "react-native";
import { Context } from "../context/BlogContext";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

const CreateScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [membership, setMembership] = useState("");
  const [age, setAge] = useState("");
  const { addBlogPost } = useContext(Context);
    createAgeList = () => {
      const ageList = [];
      for (let x = 10; x < 43; x++) {
        ageList.push(
          <Picker.Item label={JSON.stringify(x)} value={JSON.stringify(x)} />
        );
      }
      return ageList;
    };
  return (
    <>
      <View style={styles.container}>
        <Text>Enter Name:</Text>
        <TextInput
          style={styles.inputStyle}
          value={name}
          onChangeText={text => setName(text)}
        ></TextInput>
      </View>
      <View style={styles.container}>
        <Text>Enter Membership:</Text>
        {/* <TextInput
          style={styles.inputStyle}
          value={membership}
          onChangeText={text => setMembership(text)}
        ></TextInput> */}
        <Picker
          selectedValue={membership}
          style={{ height: 50, width: "100%" }}
          onValueChange={itemValue => setMembership(itemValue)}
        >
          <Picker.Item label="Sr Boxer" value="Sr Boxer" />
          <Picker.Item label="Sr Coach" value="Sr Coach" />
          <Picker.Item label="Jr Boxer" value="Jr Boxer" />
          <Picker.Item label="Jr Coach" value="Jr Coach" />
          <Picker.Item label="Swimmer" value="Swimmer" />
          <Picker.Item label="Wanker" value="wanker" />
        </Picker>
      </View>

      <View style={styles.container}>
        <Text>Enter Age:</Text>
        {/* <TextInput
          style={styles.inputStyle}
          value={age}
          onChangeText={text => setAge(text)}
        ></TextInput> */}
        <Picker
          selectedValue={age}
          style={{ height: 50, width: "100%" }}
          onValueChange={itemValue => setAge(itemValue)}
        >
          {createAgeList()}
        </Picker>
      </View>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => {
          addBlogPost(name, membership, age, () => {
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
export default CreateScreen;
