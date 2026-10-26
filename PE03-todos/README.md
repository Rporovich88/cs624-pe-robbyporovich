PE03 - Todos App

1. Input

This App imports the React Native components for displaying components to the interface. The user will enter a 'task' into a TextInput component to add tasks to a list of todos. Styles are taken from the Style Sheets for each separate Views, Buttons, Text and Input bar. The different JavaScript files create functions to change the displayed tasks based on the state values of the App function

2. Process

When the App component is executed, all React components are displayed. Hitting the submit button will add the task to the todos array. Selecting one of the display buttons will change the 'type' state to all, active or complete. The TaskDisplay function takes the current state information that will export a new version of the array, creating a new view for each one containing styles and buttons.

3. Output

We see our Heading, Input field in a scrollview with the display buttons at the bottom. Based on which display button is active, the list of tasks will appear. Our task views are displayed underneath the input field showing the buttons for marking the task as done and deleting the task.
