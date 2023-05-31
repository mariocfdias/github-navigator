import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text, View } from 'react-native';

import Home from './screens/Home';
import Bio from './screens/Bio'
import Repos from './screens/Repos'
import Followers from './screens/Followers'
import Orgs from './screens/Orgs';
import Info from './screens/Info';

import { NavigationContainer } from '@react-navigation/native';


export default function App() {

  const Stack = createNativeStackNavigator();



  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Bio" component={Bio} />
        <Stack.Screen name="Repositorios" component={Repos} />
        <Stack.Screen name="Seguidores" component={Followers} />
        <Stack.Screen name="Organizações" component={Orgs} />
        <Stack.Screen name="Info" component={Info} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f8fa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
