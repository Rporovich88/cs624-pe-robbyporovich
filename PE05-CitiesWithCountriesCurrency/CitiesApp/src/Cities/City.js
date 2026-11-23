import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function City({ route }) {
  const { city } = route.params

  return (
    <View style={styles.container}>
      <Text style={styles.city}>{city.city}</Text>
      <Text style={styles.country}>{city.country}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  city: {
    fontSize: 28,
    fontWeight: '600'
  },
  country: {
    fontSize: 18
  }
})