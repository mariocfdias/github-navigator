import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';


export const ListItem = ({ title, description, icon, onPress, navigable = true }) => {

    return (
        <TouchableOpacity
            onPress={onPress}
            style={itemStyles.container}>
            <View style={itemStyles.iconContainer}>
                {icon}
            </View>
            <View style={itemStyles.descriptionContainer}>

                <Text style={itemStyles.title}>{title}</Text>
                <Text style={itemStyles.description}>{description}</Text>
            </View>

            <View style={itemStyles.endIconContainer}>
                {navigable && <Entypo name="chevron-right" size={24} color="black" />}
            </View>

        </TouchableOpacity>
    )
}


const itemStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        border: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: "500"
    },
    description: {
        fontSize: 16,
        fontWeight: "200"
    },
    iconContainer: {
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#f1f1f2",
        borderRadius: 10,
        padding: 5,


    },
    endIconContainer: {
        marginLeft: "auto"
    },

})
