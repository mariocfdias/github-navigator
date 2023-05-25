import { TouchableHighlight, View, Text, StyleSheet} from "react-native";

export default function TouchableButton ({onPress, children}) {
    return (

          <TouchableHighlight onPress={onPress}>
            <View style={styles.button}>
            <Text>{children}</Text>

            </View>
          </TouchableHighlight>
      );
      
      
      
    };
    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            borderRadius: 40
            },
          button: {
              alignItems: 'center',
              backgroundColor: '#DDDDDD',
              padding: 10,
          },
          countContainer: {
              alignItems: 'center',
              padding: 10,
          },
    countText: {
      color: '#FF00FF',
  },
});
