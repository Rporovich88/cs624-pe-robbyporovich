// Problem 2 - 
import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const TaskDisplay = (props) => {
    let type = props.type
    let {todos} = props
    // Filter todos based on the type 
    if (type === 'All') {
        todos = todos;
    } else if (type === 'Complete') {
        todos = todos.filter(todo => todo.complete);
    } else if (type === 'Active') {
        todos = todos.filter(todo => !todo.complete);
    }
    //Returns view for each todo based on the filtered list
    return (
            todos.map((todo, index) => (
                <View key={index} style={styles.container}>
                    <View style={styles.Row}>
                        <Text style={styles.text}>
                        {todo.title}
                        </Text>
                        <View style={styles.buttonView}>
                            <Pressable 
                                style={styles.buttonStyle}>
                                <Text style={{textAlign: 'center', color:'green'}}>Done</Text>
                            </Pressable>
                            <Pressable 
                                style={styles.buttonStyle}>
                                <Text style={{textAlign: 'center', color: 'red'}}>Delete</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            ))
        
    );
};  

export default TaskDisplay;
   
// Style Sheet for the individual items
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
        borderWidth: 1,
        borderBottomColor: '#ccc',
        justifyContent: 'center',
        backgroundColor: '#fff',
        height: 50,
    },
    Row: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
    
    },
    text: {
        fontSize: 16,
        color: '#333',
        justifyContent: 'center',
        margin: 10,
    },
    buttonStyle: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        padding: 5,
        width: 70,
        marginLeft: 5, 
    },
    buttonView: {
        flexDirection: 'row',
        margin: 5,
        justifyContent: 'space-around',
    }
});

