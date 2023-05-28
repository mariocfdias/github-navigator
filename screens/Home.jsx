import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import TouchableButton from "../components/TouchableButton";
export default function Home({ navigation }) {

  const [inputValue, setInputValue] = useState("")
  const [githubValues, setGithubValues] = useState({})

  const handleSearchButton = () => {

  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.appTitle}>Github Navigator</Text>
      <TextInput
        style={styles.usernameInput}
        value={inputValue}
        onChangeText={(text) => {
          console.log(text)
          setInputValue(text)
        }
        }
      />
      <TouchableButton
        text="Buscar"
        onPress={async () => {
          fetch(`https://api.github.com/users/${inputValue}`).then(res => {
            return res.json()
          }).then((response) => {
            console.log(response)
            navigation.push("Bio", { user: response })
          }).catch(error => {
          })


        }} />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  usernameInput: {
    height: 40,
    width: 240,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  appTitle: {
    fontSize: 36
  }
});
