import React, { useContext, useEffect } from "react"; //useContext is mainly used for the moment of information
import { Text, StyleSheet, View } from "react-native";
import { Context } from "../context/BlogContext";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost, getBlogPosts } = useContext(Context);
  // ^ get prop from 'BlogContext.js'
  useEffect(() => {
    getBlogPosts();
    const listener = navigation.addListener('didFocus', () => {
      getBlogPosts();
    });
    return () => {
      listener.remove();
    };
  }, []);
  return (
    <>
      <FlatList
        // flat list always requests 3 arguments to work
        data={state}
        keyExtractor={blogPosts => blogPosts.name}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.listText}>{item.name}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather style={styles.iconStyle} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      ></FlatList>
      <TouchableOpacity onPress={() => navigation.navigate("Secret")}>
        <Feather style={styles.iconStyle} name="eye" />
      </TouchableOpacity>
    </>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Feather size={30} name="plus" />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    padding: 5,
    borderColor: "gray",
    borderWidth: 1
  },
  listText: { fontSize: 18, fontWeight: "bold" },
  iconStyle: { fontSize: 28 }
});
export default IndexScreen;
