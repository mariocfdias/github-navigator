import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native"
import { FontAwesome5, MaterialCommunityIcons, AntDesign, Entypo } from '@expo/vector-icons';
import NotFoundComponent from "../components/NotFoundComponent";
import { ListItem } from "../components/ListItem";
import TouchableButton from "../components/TouchableButton";
import { useEffect, useState } from "react";




export default function Repos({ route, navigation }) {

    const { repos } = route.params

    const [repoList, setRepoList] = useState([])

    useEffect(() => {
        const mappedRepos = repos.map((repo) => {
            return {
                name: repo.name,
                description: repo.language
            }
        })

        setRepoList(mappedRepos)
    }, [repos])




    return (
        <View style={styles.container}>

            <FlatList
                data={repoList}
                renderItem={({ item }) => <ListItem title={item.name} description={item.description} icon={item.icon} navigable={false}/>}
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