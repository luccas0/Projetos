import React from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View
} from 'react-native'

export default class Quadrado extends React.Component {
  render() {
    const {value, onClick, desabilitado} = this.props
    return (
      <View>
        <TouchableOpacity
          onPress={onClick}
          disabled={desabilitado}
        >
          <Text style={styles.text}>{value}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    minHeight: 100,
    minWidth: 100,
    fontSize: 60,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderWidth: 1,
    margin: 1,
  }
})







