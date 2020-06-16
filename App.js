import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack"; //seperatly imported libary, why?
import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import { Provider } from "./src/context/BlogContext";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";
import SecretScreen from "./src/screens/SecretScreen";

const navigator = createStackNavigator( //use of new libary, creating a new stack of screens for me to navigate around; named 'navigator'
  {
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen,
    Secret: SecretScreen
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Fighters"
    }
  }
);

const App = createAppContainer(navigator); // funtion to wrap the root navigator

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
