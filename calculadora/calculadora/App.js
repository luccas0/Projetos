import React from 'react';
import {View, TextInput, Alert, Button, StatusBar, StyleSheet} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      txtPrimeiro: "",
      txtSegundo: ""
    }
  }

  botaoSomar = _ => {
    const {txtPrimeiro,txtSegundo} = this.state
    const Primeiro = parseFloat(txtPrimeiro)
    const Segundo = parseFloat(txtSegundo)

    if (Number.isNaN(Primeiro) || Number.isNaN(Segundo)) {
      Alert.alert("Preencha o campo apenas com números")
      return
    }
    const conta = Primeiro + Segundo
    const mensagem = `Resultado = ${conta}`
    Alert.alert("Resulatado:", mensagem)
    }
    
    
   
  
  botaoSubtrair = _ => {
    const {txtPrimeiro,txtSegundo} = this.state
    const Primeiro = parseFloat(txtPrimeiro)
    const Segundo = parseFloat(txtSegundo)

    if (Number.isNaN(Primeiro) || Number.isNaN(Segundo)) {
      Alert.alert("Preencha o campo apenas com números")
      return
    }
    const conta = Primeiro - Segundo
    
    const mensagem = `Resultado = ${conta}`
    Alert.alert("Resulatado:", mensagem)
  }

  botaoMultiplicar = _ => {
    const {txtPrimeiro,txtSegundo} = this.state
    const Primeiro = parseFloat(txtPrimeiro)
    const Segundo = parseFloat(txtSegundo)

    if (Number.isNaN(Primeiro) || Number.isNaN(Segundo)) {
      Alert.alert("Preencha o campo apenas com números")
      return
    }
    const conta = Primeiro * Segundo
    

    const mensagem = `Resultado = ${conta}`
    Alert.alert("Resulatado:", mensagem)
  }

  botaoDividir = _ => {
    const {txtPrimeiro,txtSegundo} = this.state
    const Primeiro = parseFloat(txtPrimeiro)
    const Segundo = parseFloat(txtSegundo)

    if (Number.isNaN(Primeiro) || Number.isNaN(Segundo)) {
      Alert.alert("Preencha o campo apenas com números")
      return
    }
    const conta = Primeiro / Segundo
    

    const mensagem = `Resultado = ${conta}`
    Alert.alert("Resultado:", mensagem)
  }

  




  render() {
    return (
      <View style={styles.container}>
      <TextInput autoFocus={true} style={styles.inputUm} 
     placeholder = "Informe o primeiro número"
     keyboardType = 'numeric'
     onChangeText={txtPrimeiro => this.setState({txtPrimeiro})}>
     </TextInput>

     <TextInput style={styles.inputDois} 
     placeholder = "Informe o segundo número"
     keyboardType = 'numeric'
     onChangeText={txtSegundo => this.setState({txtSegundo})}>
     </TextInput>


     <View style={styles.botao}>
     <Button color='black'
     title = "Somar"
     onPress={this.botaoSomar}>
     </Button>
     </View>

     <View style={styles.botao}>
     <Button 
     title = "Subtrair"
     onPress={this.botaoSubtrair}>
     </Button>
     </View>

     <View style={styles.botao}>
     <Button color = 'purple'
     title = "Multiplicar"
     onPress={this.botaoMultiplicar}>
     </Button>
     </View>

     <View style={styles.botao}>
     <Button color ='red'
     title = "Dividir"
     onPress={this.botaoDividir}>
     </Button>
     </View>

     <StatusBar/>
    
     </View>
  
  )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gold',
    resizeMode: 'cover'
  },
  inputUm:{
    marginTop: 50,
    marginBottom: 30,
    backgroundColor: 'silver',
    textAlign: 'center',
    fontSize: 20,
    
  },
  inputDois:{
    marginBottom: 30,
    backgroundColor: 'silver',
    textAlign: 'center',
    fontSize: 20,
  },
  botao:{
   marginBottom: 30,
   
  }
})
   
  



