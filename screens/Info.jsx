import { StyleSheet, View } from "react-native"
import { Ionicons } from '@expo/vector-icons'; 

import TouchableButton from "../components/TouchableButton";
import Profile from "../components/Profile";


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