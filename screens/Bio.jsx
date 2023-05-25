import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { FontAwesome5, MaterialCommunityIcons, AntDesign, Entypo  } from '@expo/vector-icons'; 

import { ListItem } from "../components/ListItem";
import TouchableButton from "../components/TouchableButton";
const Profile = ({profileImageUrl, username, usertag}) => {

    return (
        <View style={profileStyles.container}>
            <Image 
            source={{uri: profileImageUrl}}
            style={profileStyles.image}
            />
            <Text style={profileStyles.username}>{username}</Text>
            <Text style={profileStyles.usertag}>{usertag}</Text>
        </View>
    )
}


export default function Bio(){

    const DATA = [
        {
            title: "Bio",
            description: "Um pouco sobre o usuário",
            icon: <AntDesign name="user" size={24} color="black" />,
        },
        {
            title: "Orgs",
            description: "Organizações que o usuário faz parte",
            icon: <FontAwesome5 name="headset" size={24} color="black" />
        },
        {
            title: "Repositórios",
            description: "Lista contendo todos os repositórios",
            icon:<AntDesign name="filetext1" size={24} color="black" />
        },
        {
            title: "Seguidores",
            description: "Lista de seguidores",
            icon: <MaterialCommunityIcons name="face-mask-outline" size={24} color="black" />
        },
        
    ]

    return (
        <View style={styles.container}>
            <Profile
            profileImageUrl="https://fastly.picsum.photos/id/446/200/200.jpg?hmac=PkaLcCtgL4IvAz-gsxbCXz_tl0qdVUGOrxhYLrywa-c"
            username="teste"
            usertag="@teste"
            />
            

            <FlatList   
            data={DATA}
            renderItem={({item}) => <ListItem title={item.title} description={item.description} icon={item.icon} />}
            ItemSeparatorComponent={() => <View style={{height: 2, backgroundColor: "#F7F8FC"}} />}
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
        flex:4,
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
        fontWeight:"200",
        fontSize: 18
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