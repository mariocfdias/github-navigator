import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native"
import { FontAwesome5, MaterialCommunityIcons, AntDesign, Entypo } from '@expo/vector-icons';

import { ListItem } from "../components/ListItem";
import TouchableButton from "../components/TouchableButton";
import { useEffect } from "react";
const Profile = ({ profileImageUrl, username, usertag }) => {

    return (
        <View style={profileStyles.container}>
            <Image
                source={{ uri: profileImageUrl }}
                style={profileStyles.image}
            />
            <TouchableHighlight style={profileStyles.search}>
                <Entypo name="magnifying-glass" size={24} color="black" />
            </TouchableHighlight>
            <Text style={profileStyles.username}>{username}</Text>
            <Text style={profileStyles.usertag}>{usertag}</Text>
        </View>
    )
}


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

                <TouchableButton>

                    Resetar</TouchableButton>
            </View>

        </View>
    )




}

const profileStyles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
    },
    image: {
        flex: 4,
        width: 200,
        height: 200,
        borderRadius: 40
    },
    username: {
        flex: 1,
        fontSize: 36,
        fontWeight: "bold"
    },
    usertag: {
        flex: 1,
        fontWeight: "200",
        fontSize: 18
    },
    search: {
        position: "relative",
        width: 40,
        height: 40,
        top: -20,
        left: 80,
        borderRadius: 20,
        backgroundColor: "gray",
        justifyContent: "center",
        alignItems: "center"
    }
})
const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: '#F7F8FC',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    listStyle: {
        backgroundColor: "#FFFF",
        padding: 10,
        borderRadius: 30,
        flexGrow: 0
    },
    exitButtonContainer: {
        backgroundColor: "#FFFFFF",
        marginTop: 60,
        padding: 20,
        width: "100%",
        borderTopStartRadius: 20,
        borderTopStartRadius: 20
    }
})