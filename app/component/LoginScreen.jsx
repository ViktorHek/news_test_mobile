import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Auth from "../modules/auth";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = new Auth('https://newsroom-api.herokuapp.com/api')
  const authenticateUser = async () => {
    let response = await auth.signIn(email, password)
    debugger
  }

  return (
    <View style={{ flex: 1, margin: 10 }}>
      <Text>Login screen</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        secureTextEntry={true}
        placeholder="Password"
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
      />
      <Button 
        title="Log in"
        color="pink"
        // style={{backgroundColor: "green"}}
        onPress={() => authenticateUser()}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
    padding: 10,
    height: 40,
    borderColor: "green",
    borderWidth: 1,
  }
});
