import { TouchableHighlight, View, Text, StyleSheet} from "react-native";

export default function TouchableButton ({onPress, text, icon}) {
    return (

          <TouchableHighlight onPress={onPress} style={styles.container}>
            <View style={styles.button}>
            <Text style={styles.text}>{icon} {text}</Text>
 
            </View>
          </TouchableHighlight>
      );
      
      
      
    };
    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            borderRadius: 10,
            },
          button: {
              alignItems: 'center',
              backgroundColor: '#ffffff',
              borderWidth: 2,
              borderRadius: 10,
              borderColor: "#4d4c4c",
              padding: 10,
          },
          text: {
            fontSize: 20,
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center"
          }


});
