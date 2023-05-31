import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native"
import { FontAwesome5, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 

import { ListItem } from "../components/ListItem";
import TouchableButton from "../components/TouchableButton";
import { useEffect } from "react";



export default function Bio({ route, navigation }) {

    const { user } = route.params
    useEffect(() => {
        console.log({ user })
    }, [user])

    const DATA = [
        {
            title: "Bio",
            description: "Um pouco sobre o usuário",
            icon: <AntDesign name="user" size={24} color="black" />,
            tag: "bio"
        },
        {
            title: "Orgs",
            description: "Organizações que o usuário faz parte",
            icon: <FontAwesome5 name="headset" size={24} color="black" />,
            tag: "organizations"
        },
        {
            title: "Repositórios",
            description: "Lista contendo todos os repositórios",
            icon: <AntDesign name="filetext1" size={24} color="black" />,
            tag: "repos"
        },
        {
            title: "Seguidores",
            description: "Lista de seguidores",
            icon: <MaterialCommunityIcons name="face-mask-outline" size={24} color="black" />,
            tag: "followers"
        },

    ]

    return (
        <View style={styles.container}>
            <Profile
                profileImageUrl={user.avatar_url}
                username={user.name}
                usertag={`@${user.login}`}
                navigation={navigation}
            />


            <FlatList
                data={DATA}
                renderItem={({ item }) => <ListItem
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                    onPress={() => {
                        console.log(item)
                        if (item.tag == "bio") {
                            navigation.push("Info", {
                                info: {
                                    profileImageUrl: user.avatar_url,
                                    username: user.name,
                                    usertag: user.login

                                }
                            })
                        }
                        console.log(user[`${item.tag}_url`])
                        fetch(user[`${item.tag}_url`]).then(res => {
                            return res.json()
                        }).then((response) => {

                            switch (item.tag) {
                                case "organizations":
                                    navigation.push("Organizações", { orgs: response })
                                    break
                                case "repos":
                                    navigation.push("Repositorios", { repos: response })
                                    break
                                case "followers":
                                    navigation.push("Seguidores", { followers: response })
                                    break
                                default:
                                    break;

                            }
                        }).catch(error => {
                            console.log(error)
                        })



                    }}
                />}
                ItemSeparatorComponent={() => <View style={{ height: 2, backgroundColor: "#F7F8FC" }} />}
                keyExtractor={item => item.title}
                style={styles.listStyle}
            />

            <View style={styles.exitButtonContainer}>

                <TouchableButton
                icon={<Ionicons name="exit-outline" size={24} color="black" />}
                text="Resetar"
                onPress={() => {
                    navigation.navigate("Home")
                }}
                />

                    
            </View>

        </View>
    )




}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f6f8fa',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    listStyle: {
        backgroundColor: "#FFFF",
        padding: 30,
        borderRadius: 30,
        flexGrow: 0
    },
    exitButtonContainer: {
        backgroundColor: "#FFFFFF",
        padding: 20,
        width: "100%",
        borderTopStartRadius: 20,
        borderTopStartRadius: 20
    }
})