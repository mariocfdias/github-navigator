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


export default function Info({ route, navigation }) {

    const { info } = route.params

    return (
        <View style={styles.container}>
            <Profile
                profileImageUrl={info.profileImageUrl}
                username={info.username}
                usertag={info.usertag}
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