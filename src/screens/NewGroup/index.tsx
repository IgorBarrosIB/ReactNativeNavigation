import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, SafeAreaView } from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { styles } from './styles';

type StackParamlist = {
  Groups: undefined;
  Usuario: undefined;
  NewGroup: undefined;
}

type StackProps = NativeStackNavigationProp<StackParamlist, 'Groups'>;

type Props = {
  navigation: StackProps; 
}

export function NewGroup({navigation}: Props) {

  function openUsuario(){
    navigation.navigate('Usuario');
  }

  function openGroup(){
    navigation.navigate('Groups');
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f4511e', justifyContent: 'center'}}>

      <TouchableOpacity style={styles.button} onPress={openUsuario}>
        <Text style={styles.text}>Tela Usuário</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={openGroup}>
        <Text style={styles.text}>Tela New Groups</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}