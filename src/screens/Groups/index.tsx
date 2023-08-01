import { StatusBar } from 'expo-status-bar';
import { Text, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { styles } from './styles';

export function Groups() {

  const navigation = useNavigation();

  function openUsuario(){
    navigation.navigate('Usuario');
  }

  function openNewGroup(){
    navigation.navigate('NewGroup');
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f4511e', justifyContent: 'center'}}>

      <TouchableOpacity style={styles.button} onPress={openUsuario}>
        <Text style={styles.text}>Tela Usuário</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={openNewGroup}>
        <Text style={styles.text}>Tela New Groups</Text>
      </TouchableOpacity>
      
    </SafeAreaView>
  );
}