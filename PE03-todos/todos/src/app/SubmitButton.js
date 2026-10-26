
// Problem 1 - Create Submit button that will log the added tasks

import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

// Create Submit button component
const submitButton = ({inputValue, press} ) => (
    <View style={styles.Container}>
        <View style={styles.buttons}>
        <Button
         title="Submit" 
         onPress={press}
         disabled={!inputValue}
         color={'black'}

        />
        </View>
        
    </View> 

);
export const addTodo = (inputValue, todos) => {
    todos = [...todos, {title: inputValue, index: todos.length, complete: false}];
    return todos;
    
}

// Create style sheet for the container and the buttons
const styles = StyleSheet.create({
    Container: {
        margin: 20,
        alignItems: 'flex-end',
        justifyContent: 'center',
    
    },
    buttons: {
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        paddingHorizontal: 10,
        width: 175,
        height: 60,
        
    }
});
export default submitButton;