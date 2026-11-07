1. Input

The App Function uses takes data to define a Image component, then a TextInput component, then 2 Views for displaying the Core Requirment courses and the Depth of Study courses. The Styles borrow from a style sheet that contains style data for Container, Image, Text and Title. The HeadingBox and ListBox functions are called with every string for the props.

2. Process

React Native builds a scrollable layout from `App`. The image is pulled from the assests directory. The Reusable `HeadingBox` and `ListBox` components receive strings through props and render them as text. Styles set colors, sizing, alignment, and spacing are processed with the Stylesheets data. The style of the ScrollView set the components to have spacing and fit to screen.

#3. Output

The output is a light-blue, scrollable interface showing a centered icon, input text field, gray section headings, and course lists. Section heading are larger font with gray background and course lists are smaller font with white background. Users can scroll to view all courses. 
