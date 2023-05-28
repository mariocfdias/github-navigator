import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native"
import { FontAwesome5, MaterialCommunityIcons, AntDesign, Entypo } from '@expo/vector-icons';

import { ListItem } from "../components/ListItem";
import TouchableButton from "../components/TouchableButton";
import NotFoundComponent from "../components/NotFoundComponent";
import { useEffect, useState } from "react";

const ProfileIcon = ({ imageUrl }) => {
    return (<Image
        style={styles.image}
        source={{ uri: imageUrl }}
    />)

}

{
    /*
            {
            icon: <ProfileIcon imageUrl="https://fastly.picsum.photos/id/446/200/200.jpg?hmac=PkaLcCtgL4IvAz-gsxbCXz_tl0qdVUGOrxhYLrywa-c" />,
            name: "bt-championship-manager",
            description: "bt-championship-manager",
        },
    */
}
export default function Followers({ route, navigation }) {

    const { followers } = route.params

    const [followerList, setFollowerList] = useState([])

    useEffect(() => {
        const mappedFollowers = followers.map(follower => {
            return {
                icon: <ProfileIcon imageUrl={follower.avatar_url} />,
                name: follower.login,
                description: follower.html_url
            }
        })

        setFollowerList(mappedFollowers)

        console.log({ mappedFollowers })

    }, [followers])

    return (
        <View style={styles.container}>

            <FlatList
                data={followerList}
                renderItem={({ item }) => <ListItem title={item.name} description={item.description} icon={item.icon} />}
                ItemSeparatorComponent={() => <View style={{ height: 2, backgroundColor: "#F7F8FC" }} />}
                keyExtractor={item => item.name}
                style={styles.listStyle}
                ListEmptyComponent={NotFoundComponent}

            />

        </View>
    )




}


const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    image: {
        width: 40,
        height: 40,
        borderRadius: 20
    },

})