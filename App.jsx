import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./app/component/MainScreen";
import ArticleShow from "./app/component/ArticleShow";
import LoginScreen from "./app/component/LoginScreen";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

const App = () => {
  const { appTitle } = useSelector((state) => state);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={MainScreen}
          options={(props) => ({
            headerRight: () => {
              return (
                <Ionicons
                  name="person"
                  size={24}
                  color="black"
                  onPress={() => {
                    props.navigation.navigate("Login");
                  }}
                  style={{marginRight: 10}}
                />
              );
            },
            title: appTitle,
            headerStyle: {
              backgroundColor: "blue",
            },
            headerTitleStyle: {
              color: "white",
              fontSize: 22,
            },
          })}
        />
        <Stack.Screen
          name="ArticleShow"
          component={ArticleShow}
          options={{
            title: "My Article",
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: "Login",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
