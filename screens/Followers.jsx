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


export default function Followers({ route, navigation }) {

    const { followers } = route.params

    const [followerList, setFollowerList] = useState([])

    useEffect(() => {
        const mappedFollowers = followers.map(follower => {
            return {
                icon: <ProfileIcon imageUrl={follower.avatar_url} />,
                name: follower.login,
                description: follower.html_url,
                url: follower.url
            }
        })

        setFollowerList(mappedFollowers)

        console.log( followers[0] )

    }, [followers])

    return (
        <View style={styles.container}>

            <FlatList
                data={followerList}
                renderItem={({ item }) => <ListItem 
                title={item.name} 
                description={item.description} 
                icon={item.icon} 
                onPress={async () => {
                    fetch(item.url).then(res => {
                      return res.json()
                    }).then((response) => {
                      console.log(response)
                      if(response.message == "Not Found"){
                        createAlert(inputValue)
                      }else{
                        navigation.push("Bio", { user: response })
          
                      }
                    }).catch(error => {
                    })
          
          
                  }}
                />}
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