import React, { Component }from 'react'
import {
	Image,
  	View,
  	Text
} from 'react-native'

import { connect } from 'react-redux'
import Grid from 'react-native-grid-component'
import styles from './DrinkList.styles'


class DrinkList extends Component {

 	_renderItem = (data, i) => {
  		return (
  			<View style={[styles.item]} key={i}>
  				<Image 
  				source={{uri: data.strDrinkThumb}}
  				style={styles.list}/>	
  				<Text style={styles.listText}>{data.strDrink}</Text>
  			</View> 
  			)
  	}
     	
	render() {
		return (
			<Grid
		       style={styles.list}
			   renderItem={this._renderItem}
		       data={this.props.drinksData.drinks}
		       itemsPerRow={2}
               itemHasChanged={(d1, d2) => d1 !== d2}
	     	/>
	    	);
	  
	}
}	

const mapStateToProps = (state) => {
  return {
    drinksData: state.drinks
  }
}


export default connect(mapStateToProps)(DrinkList)
