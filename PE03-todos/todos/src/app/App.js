import React, {Component} from "react";
import {View, ScrollView, StyleSheet, Button} from "react-native";
import Heading from './Heading';
import Input from './Input';
import SubmitButton, {addTodo} from './SubmitButton';
import TaskDisplay from './TaskDisplay';

class App extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: '',
            todos: [],
            type: 'All'
        };
    }
    inputChange(inputValue) {
        console.log(' Input Value:', inputValue);
        this.setState({inputValue });
    };
    todosChange(todos) {
        console.log(' Todos:', todos);
        this.setState({todos, inputValue:''})
    };
    // added new TaskDisplay component, SubmitButton component and display to the app
    render() {
        const {inputValue, todos, type} = this.state;
        return (
            <View style={styles.container}>
                <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
                    <Heading />
                    <Input 
                        inputValue={inputValue}
                        inputChange={text=>this.inputChange(text)} 
                    />
                    <TaskDisplay 
                        todos={todos}
                        type={type}
                    />

                    <SubmitButton
                        inputValue={inputValue}
                        press={() => this.todosChange(addTodo(inputValue, todos))} 
                    />
                </ScrollView>
                <View style={styles.buttonRow}>
                        
                        <View style={styles.buttons}>
                            <Button
                                title="All"
                                onPress={() => this.setState({type: 'All'})}
                            />
                        </View>
                        <View style={styles.buttons}>
                            <Button
                                title="Active"
                                onPress={() => this.setState({type: 'Active'})}
                            />
                        </View>
                        <View style={styles.buttons}>
                            <Button
                                title="Complete"
                                onPress={() => this.setState({type: 'Complete'})}
                            />
                        </View>

                    </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5"
    },
    content: { 
        flex: 1,
        paddingTop: 60,
    },
    buttonRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-around',
        paddingVertical: 20,
        
    },
    buttons: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ddd',
        borderWidth: 1,
        height: 75
        
    }
});

export default App;