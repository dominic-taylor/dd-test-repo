import React, {Component} from 'react'
import {
  View,
  Image,
  Text,
  Button
} from 'react-native'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {fetchDrinksData} from '../../actions/drinks.js' 


import styles from './App.styles.js'
import Topbar from '../../components/Topbar'
import DrinkList from '../../components/DrinkList'

class App extends Component {
  onButtonPress = () => {
      // Must use this address when using AVD/Android Studio
      this.props.fetchDrinks("http://10.0.2.2:3000/drinks")
 }

 render() {
  if(this.props.drinksData.drinks){
    return(
      <View style={styles.container}>
        <Topbar />
        <DrinkList />
      </View>
      )
  }
  if(this.props.isLoading) {
    return(
      <View style={styles.container}>
      <Topbar />
      <Text style={styles.text}>Loading Data...</Text>
    </View>
      )
  }
  return (
    <View style={styles.container}>
      <Topbar />
      <Button
        onPress={this.onButtonPress}
        title="Press Me!"
      />
    </View>
    )
  }
 } 

const mapStateToProps = (state) => {
  return {
    hasErrored: state.drinksReqHasErrored,
    isLoading: state.drinksReqIsLoading,
    drinksData: state.drinks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDrinks: (url) => dispatch(fetchDrinksData(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
