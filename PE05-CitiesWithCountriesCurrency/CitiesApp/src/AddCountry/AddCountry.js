// import React native components and theme
import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import {colors} from '../theme'

// Add country component
class AddCountry extends React.Component {
    // initial state for the input form
    state = {
            country: '',
            currency: '',
        };
    
    onChangeText = (Key, value) => {
        this.setState({ [Key]: value });
    }
    // Submit function handler for button click
    submit = () => { 
        // Destructure state for easier access
        const {country, currency} = this.state;   
        if (this.state.country === '' || this.state.currency === '') {
            alert('please complete form');
            return;
        }
        const newCountry = {
            country: this.state.country,
            currency: this.state.currency,
        }
        // Call the addCountry prop function to add the new country
        this.props.addCountry(newCountry)
        // Resets the inputs fields after the country has been added
        this.setState({
            country: '',
            currency: ''
        }, () => {
            // Navigates to the Countries screen after adding the new country
            this.props.navigation.navigate('CountriesNav', {screen: 'Countries'});
        });
    };
    render() {
        return (
            // Render the form for adding a new country
        <View style={styles.container}>
            <Text style={styles.heading}>Countries</Text>
            <TextInput
                placeholder="Country name"
                placeholderTextColor="black"
                onChangeText={val => this.onChangeText('country', val)}
                style={styles.input}
                value={this.state.country}/>
            <TextInput
                placeholder="Currency"
                placeholderTextColor="black"
                onChangeText={val => this.onChangeText('currency', val)}
                style={styles.input}
                value={this.state.currency}/>
            <TouchableOpacity onPress={this.submit}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Add Country</Text>
                </View>
            </TouchableOpacity>
        </View>
        )
    }
}
            
// styles for the Add Country screen
const styles = StyleSheet.create({
button: {
    height: 50,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
},
buttonText: {
    color: 'white',
    fontSize: 18
},
heading: {
    color: 'white',
    fontSize: 40,
    marginBottom: 10,
    alignSelf: 'center'
},
container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center'
},
input: {
    margin: 10,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    height: 50
}
})

export default AddCountry;
