import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

import Tabuleiro from './components/Tabuleiro'
import verificarVencedor from './Utils/VerificaVencedor'

export default class App extends React.Component {
  state = {
    quadrados: Array(9).fill(""),
    tabuleiroDesabilitado: false,
    xProximo: true,
    mensagem: ""
  }

  handleOnClick = i => {
    const {quadrados, xProximo} = this.state
    if (quadrados[i]) return
    const jogador = xProximo ? "X" : "O"
    quadrados[i] = jogador
    let msg = verificarVencedor(quadrados, jogador)
    switch (msg) {
      case "X":
        msg = "Vencedor: X"
        break
      case "O":
        msg = "Vencedor: O"
        break
      case "E":
        msg = "Empate"
    }
    const desabilitado = !msg ? false : true
    this.setState({
      quadrados,
      xProximo: !xProximo,
      mensagem: msg,
      tabuleiroDesabilitado: desabilitado
    })
  }

  novoJogo = () => {
    this.setState({
      quadrados: Array(9).fill(""),
      xProximo: true.xProximo,
      mensagem: "",
      tabuleiroDesabilitado: false,
    })
  }


  render() {
    const {quadrados, tabuleiroDesabilitado, xProximo, mensagem} = this.state
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Jogo da Velha</Text>
        </View>
        <View style={styles.boardContainer}>
          <Tabuleiro
            quadrados={quadrados}
            desabilitado={tabuleiroDesabilitado}
            onClick={this.handleOnClick}
          />
          {mensagem === "" && (
            <View>
              <Text style={styles.text}>
                {`Próximo => ${xProximo ? "X" : "O"}`}
              </Text>
            </View>
          )}
          {mensagem !== "" && (
            <View>
              <Text style={styles.textVencedor}>{mensagem}</Text>
              <TouchableOpacity onPress={this.novoJogo}>
                <Text style={styles.textNovoJogo}>Novo Jogo?</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    height: 50,
    backgroundColor: 'steelblue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleText: {
    fontSize: 30,
    color: 'white'
  },
  boardContainer: {
    flex: 1,
    marginTop: 30,
  },
  text: {
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center'
  },
  textVencedor: {
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  textNovoJogo: {
    fontSize: 15,
    color: 'gray',
    textAlign: 'center',
    marginTop: 30
  }
})












