import { StyleSheet, Text, View } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default NotFoundComponent = ({ }) => {
    return (<View style={styles.notFoundContainer}>
        <Text style={styles.notFoundTextMessage}>
            Não foram encontrados resultados parra essa busca
        </Text>
        <MaterialCommunityIcons name="magnify-close" size={64} color="black" />
    </View>)
}

const styles = StyleSheet.create({
    notFoundContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    notFoundTextMessage: {
        fontSize: 16,
        fontWeight: "bold",

    }
})