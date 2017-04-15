import React, {Component} from 'react'
import {
  View,
  Image,
  Text,
  Button
} from 'react-native'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {updateButtonPress} from '../../actions/drinks.js'

import styles from './App.styles.js'
import Topbar from '../../components/Topbar'
import DrinkList from '../../components/DrinkList'

class App extends Component {
  onButtonPress = () => {
      console.log(this.props)
      this.props.buttonPress(this.props.timesPressed+1)
}

 render() {
    return (
    <View style={styles.container}>
      <Topbar />
      <Button
        onPress={this.onButtonPress}
        title="Press Me!"
      />
      <Text> Number: {this.props.timesPressed}</Text>
      <DrinkList />
    </View>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    timesPressed: state.times
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buttonPress: (currentTimes) => dispatch(updateButtonPress(currentTimes))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
