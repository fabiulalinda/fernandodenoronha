import {View, Text, StyleSheet} from 'react-native'

export function Title( ){
  return(
    <View>

      <Text style = {styles.titulo}> Bem-vindo a Fernando de Noronha</Text>
      <Text> Descubra os paraísos das praias intocadas e águas cristalinas.</Text>

    </View>
  )
}

const styles = StyleSheet.create ({
  titulo:{
    backgroundColor: '#007b00',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#ffffff',
    padding: 20,
  }
})