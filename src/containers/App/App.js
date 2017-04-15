import React, {Component} from 'react'
import {
  View,
  Image,
  Text,
  Button
} from 'react-native'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {updateButtonPress, fetchDrinksData} from '../../actions/drinks.js' // used in mapDispatchToProps
// import {drinksFetchData} from '../../actions/drinks.js' 


import styles from './App.styles.js'
import Topbar from '../../components/Topbar'
import DrinkList from '../../components/DrinkList'

class App extends Component {
  onButtonPress = () => {
      console.log(this.props)
      this.props.buttonPress(this.props.timesPressed+1)
      // Must use this address when using AVD
      this.props.fetchDrinks("http://10.0.2.2:3000/drinks")
      
      console.log('drinksData', this.props.drinksData)
      console.log('drinksData.drinks',this.props.drinksData.drinks)
      console.log('drinksData[1]', this.props.drinksData)
      console.log('drinksData.drinks[1]',this.props.drinksData.drinks)
      // this.props.fetchDrinks("https://jsonplaceholder.typicode.com/posts")
      // if(this.props.drinks){
      //   for (var i = 0; i < this.props.drinks.length; i++) {
      //   console.log(this.props.drinks.drinks[i])
      //   }
      // }
}

   // if(this.props.hasErrored){
   //    return (
   //       <View style={styles.container}>
   //      <Text>Sorry There was an error with the drinks order!</Text>
   //      </View>
   //      )
   //  }

 render() {
  return (
    <View style={styles.container}>
      <Topbar />
      <Button
        onPress={this.onButtonPress}
        title="Press Me!"
      />
      <DrinkList />
    </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    timesPressed: state.times,
    hasErrored: state.drinksReqHasErrored,
    isLoading: state.drinksReqIsLoading,
    drinksData: state.drinks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buttonPress: (currentTimes) => dispatch(updateButtonPress(currentTimes)),
    fetchDrinks: (url) => dispatch(fetchDrinksData(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
