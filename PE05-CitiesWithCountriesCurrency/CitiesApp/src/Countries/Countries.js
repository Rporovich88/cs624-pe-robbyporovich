// Import necessary modules and components as well as the center message component for a place holder
import React from 'react';
import { View, Text,StyleSheet, ScrollView, TouchableWithoutFeedback } from 'react-native';
import CenterMessage from '../components/CenterMessage';
import { colors } from '../theme';

// New component for the Countries entries
export default class Countries extends React.Component{
    static navigationOptions = {
        title: 'Countries',
        headerStyle: {
             color: 'white',
            fontSize: 20,
            fontWeight: '400',
            }
    };
    // Navigator for changing to the single country data
    navigate = (item) => {
        this.props.navigation.navigate('Country', { country: item });
    };
    render() {
        const { countries } = this.props;
        //Using the countries props, we render a mapping of the countries list and added a new view for each added item.
        // Reused the TouchableWithoutFeedback component to maintain consistency with the previous work
        // When you tap on a country, it navigates to the single 'country' screen.
        return (
            // Scrollable list of countries with a message if no countries have been added
            <ScrollView contentContainerStyle={[!countries.length && { flex: 1 }]}>
               <View style={[!countries.length && { justifyContent: 'center', flex: 1 }]}>
                    {!countries.length && <CenterMessage message="No saved countries" />}
                    {countries.map((item, index) => (
                        <TouchableWithoutFeedback onPress={() => this.navigate(item)} key={index}>
                            <View style={styles.countryContainer}>
                                <Text style={styles.country}>{item.country}</Text>
                                <Text style={styles.currency}>{item.currency}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    ))}
               </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
  countryContainer: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  country: {
    fontSize: 20,
  },
  currency: {
    color: 'rgba(0, 0, 0, .5)',
  },

});