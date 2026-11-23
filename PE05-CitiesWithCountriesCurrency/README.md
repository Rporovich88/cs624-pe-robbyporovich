Input:

- Users enter a city and its country, or a country and its currency, into a form from AddCity.js and AddCountry.js. Each form stores values locally and submits them with its Add button. If the input fields are empty, a message is sent to the screen and the user must retype the information

Process:

- The main App component stores cities and countries in separate in-memory arrays. Once submittes, a form creates an new object and calls the matching methods from the props in the App.js file. This is then appended it to the array. The form clears its fields and navigates to the corresponding list view. React passes the updated arrays to scrollviews that are part of the overlying stack.  A message is shown if the is no information yet added to the arrays. A Tab navigation is also created to navigate to the main lists or to the input forms.

Output:

- The interface displays each city with its country and each country with its currency in the corresponding lists. Tapping an item opens route to a page that will have additonal details.  Currently, those routes show placeholders. We see our bottom tabs for navigating through the different views. Users can see new entries in the corresponding list immediately after they have submitted the information into the input fields.
