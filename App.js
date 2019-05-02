import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ImageBackground, Dimensions, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-navigation';


const { width } = Dimensions.get('window');


export default class App extends Component{

	constructor(props){
		super(props);
		this._renderButton = this._renderButton.bind(this);
	}

	_renderButton(text, backgroundColor){
		return(
			<TouchableOpacity style={[styles.button, { backgroundColor: backgroundColor }]}>
				<Text style={styles.buttonText}>{text}</Text>
			</TouchableOpacity>
		);
	}

	render(){
		return(
			<SafeAreaView style={styles.container}>
				<View style={{ flex: 8 }}>
					<ImageBackground  source={require('./assets/images/background-welcome.png')} style={styles.background}>
						<View style={styles.backgroundContainer}>
							<Image source={require('./assets/images/logo.png')} style={styles.backgroundImage} />
						</View>
					</ImageBackground>
				</View>
				<View style={{ flex: 3, alignItems: 'center' }}>
					{this._renderButton('Connect with Facebook', '#055EEE')}
					{this._renderButton('Connect with Phone', '#5856D6')}
					{this._renderButton('Log In', '#FF2D55')}
				</View>
				<View style={styles.footerContainer}>
					<TouchableOpacity>
						<Text style={styles.signup}>
							Don't have an account? <Text style={styles.bold}>Sign Up</Text>
						</Text>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	bold: {
		fontWeight: '600'
	},
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF'
	},
	button: {
		width: 315,
		height: 44,
		borderWidth: 1,
		borderColor: '#FFFFFF',
		borderRadius: 8,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 15
	},
	buttonText: {
		fontSize: 15,
		color: '#FFFFFF',
		fontWeight: '600'
	},
	background: {
		width,
		height: '100%'
	},
	backgroundContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	backgroundImage: {
		width: 139,
		height: 220
	},
	signup: {
		fontSize: 15,
		color: '#1E2432',
		fontWeight: '200'
	},
	footerContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	}
});
