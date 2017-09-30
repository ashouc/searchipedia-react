# Searchipedia With React
This is a single page application that allows the user to search Wikipedia articles with a different interface. This SPA uses the Wikipedia API to request data according to the users search input. React.js and JSX are used to build the application UI. This is a mobile and tablet friendly web application.

The web application is available online [here](http://alexshoucri.com/searchipedia-react/build/).

![](header.png)

## Components
This React.js application contains a total of 4 components, 2 of which are class components.

1. **Query**

This function component is used to render a single query result with the information received from the server.

2. **QueryList**

The ```<QueryList />``` is the second function component. It is used to convert an array of entries into an array of ```<Query />```.

3. **Form**

The ```<Form />``` class component renders the form which is allows the user to type its query. By managing the state change of the input field, the component is able to read the input from the user. With that value, the component makes the Axios request to the server.

4. **App**

&nbsp;```<App />``` is the parent component and it is used to manage the relationship between all other components listed above. It renders all the other components and manages the state of the data received from the API.

## Features
Several features are found in this application.

1. **Search field**

My typing in the search box, the user is able to view the first 15 Wikipedia entries associated to the input value. All entry results are located

2. **Single entry**

Each entry represents a single article on Wikipedia. It includes the page title, a short summary paragraph and a link to visit the full article.

3. **Discover something new**

The user can also discover a random Wikipedia article by clicking on the random icon, located above the search field.
