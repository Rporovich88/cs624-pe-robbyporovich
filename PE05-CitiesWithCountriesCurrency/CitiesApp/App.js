import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Cities from './src/Cities/Cities';
import AddCity from './src/AddCity/AddCity';
// Import our new components for adding and viewing countries
import AddCountry from './src/AddCountry/AddCountry';
import Countries from './src/Countries/Countries';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function CitiesStackScreen({ cities }) {
  function CityPlaceholder() {
    return (
      <View>
        <Text>City Details Placeholder</Text>
      </View>
    );
  }

  return (
    <Stack.Navigator>
      <Stack.Screen name="Cities">
        {(props) => <Cities {...props} cities={cities} />}
      </Stack.Screen>
      <Stack.Screen name="City" component={CityPlaceholder} />
    </Stack.Navigator>
  );
}
// Creating a new Countries stack navigator to keep app consisten with previous work
function CountriesStackScreen({countries}) {
  function CountryPlaceholder() {
    return (
      <View>
        <Text>Country Details Placeholder</Text>
      </View>
    );
  }
  // Creates our stack layers with the list of countries at the top using the latest state through props
  return (
    <Stack.Navigator>
      <Stack.Screen name="Countries">
        {(props) => <Countries {...props} countries={countries}/>}
      </Stack.Screen>
      <Stack.Screen name="Country" component={CountryPlaceholder} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [cities, setCities] = useState([]);

  const addCity = (city) => {
    setCities((prevCities) => [...prevCities, city]);
  };
  // Function to add a new country to the state
  const [countries, setCountries] = useState([]);

  const addCountry = (country) => {
    setCountries((prevCountries) => [...prevCountries, country]);
  };
  // Added 2 new tabs for the list of countries and the AddCountry input form     
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="CitiesNav">
          {(props) => <CitiesStackScreen {...props} cities={cities} />}
        </Tab.Screen>
        <Tab.Screen name="AddCity">
          {(props) => <AddCity {...props} addCity={addCity} />}
        </Tab.Screen>
        <Tab.Screen name="CountriesNav">
          {(props) => <CountriesStackScreen {...props} countries={countries}/>}
        </Tab.Screen>
        <Tab.Screen name="AddCountry">
          {(props) => <AddCountry {...props} addCountry={addCountry} />}
        </Tab.Screen>
      </Tab.Navigator>                                                                            
    </NavigationContainer>
  );
}