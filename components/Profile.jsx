import { Alert, Image, StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native"
import { Entypo } from '@expo/vector-icons';
import { useState } from "react";

export default Profile = ({ profileImageUrl, username, usertag, navigation, renderSearch = true }) => {
    const [isSearchFormVisible, setSearchFormVisible] = useState(false)
    const [inputValue, setInputValue] = useState("")

    const createAlert = (username) =>
    Alert.alert('Usuario não encontrado', `Não foi encontrado usuario com nome ${username}`, [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

    return (
        <View style={profileStyles.container}>
            <Image
                source={{ uri: profileImageUrl }}
                style={profileStyles.image}
            />
            {renderSearch && <TouchableHighlight 
            style={profileStyles.search}
            onPress={() => {
                    setSearchFormVisible(!isSearchFormVisible)
                    setInputValue("")
            }}
            >
                {isSearchFormVisible ? <Entypo name="cross" size={24} color="white" /> : <Entypo name="magnifying-glass" size={24} color="white" /> }
            </TouchableHighlight>}
            <Text style={profileStyles.username}>{username || usertag}</Text>
            <Text style={profileStyles.usertag}>{usertag}</Text>
           { 
           
           isSearchFormVisible && <View style={profileStyles.searchForm}>
                <TextInput
                style={profileStyles.usernameInput}
                value={inputValue}
                onChangeText={(text) => {
          setInputValue(text)
        }}/>
                      <TouchableHighlight 
                        onPress={async () => {
                            console.log(inputValue)
                            fetch(`https://api.github.com/users/${inputValue}`).then(res => {
                              return res.json()
                            }).then((response) => {
                              if(response.message == "Not Found"){
                                createAlert(inputValue)
                              }else{
                                console.log("teste")
                                navigation.push("Bio", { user: response })
                  
                              }
                            }).catch(error => {
                            })
                  
                  
                          }}
            >
                <Entypo name="magnifying-glass" size={24} color="black" />
            </TouchableHighlight>
            </View>}
        </View>
    )
}

const profileStyles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 40
    },
    username: {
        fontSize: 36,
        fontWeight: "bold"
    },
    usertag: {
        fontWeight: "200",
        fontSize: 18
    },
    search: {
        position: "relative",
        width: 40,
        height: 40,
        top: -20,
        left: 80,
        borderRadius: 10,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center"
    },
    usernameInput: {
        height: 40,
        width: 240,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: "#C1C2C7"
      },
      searchForm: {
        flexDirection: "row",
        alignItems: "center"
      }
})