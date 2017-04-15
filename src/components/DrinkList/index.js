import React from 'react'
import {
  View,
  Text
} from 'react-native'
import styles from './DrinkList.styles'

const DrinkList = () => (
  <View style={styles.container}>
    <Text style={styles.text}>I am a DrinkList</Text>
  </View>
)

const mapStateToProps = (state) => {
  return {
    timesPressed: state.times,
    hasErrored: state.drinksReqHasErrored,
    isLoading: state.drinksReqIsLoading,
    drinksData: state.drinks
  }
}
export default DrinkList
