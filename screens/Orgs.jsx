import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native"
import { FontAwesome5, MaterialCommunityIcons, AntDesign, Entypo } from '@expo/vector-icons';
import NotFoundComponent from "../components/NotFoundComponent";
import { ListItem } from "../components/ListItem";
import TouchableButton from "../components/TouchableButton";
import { useEffect, useState } from "react";




export default function Orgs({ route, navigation }) {

    const { orgs } = route.params

    const [orgList, setOrgList] = useState([])

    useEffect(() => {
        const mappedOrgs = orgs.map((org) => {
            return {
                name: org.login,
                description: org.description
            }
        })

        setOrgList(mappedOrgs)
    }, [orgs])




    return (
        <View style={styles.container}>

            <FlatList
                data={orgList}
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