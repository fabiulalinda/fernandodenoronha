import {View, Text, StyleSheet} from 'react-native'

export function SubTitle( ){
  return(
    <View>

      <Text style = {styles.subtitulo}> Explore as Maravilhosas praias</Text>
      <Text> Visite as praias de Fernando de Noronha e mergulhe nas águas azul-turquesa</Text>

    </View>
  )
}

const styles = StyleSheet.create ({
  subtitulo:{
  backgroundColor:"#ed7014",
  fontSize: '20px',
  textAlign: 'center',
  fontWeight: 'bold',
  color:'#ffffff',
  padding:20,
    
  }
  
})
