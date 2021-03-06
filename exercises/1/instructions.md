# Exercise 1

In this exercise, you will create a simple express server that serves JSON at an endpoint, and then load that data into a React Native application.

Fork React Native Redux Boiler to your own github, and download the code into your local environment. You can also clone the code directly from this repo, and push it to a new named repo if you would prefer.

1. Set up the server using [ExpressJS](https://expressjs.com/) or [HapiJS](https://hapijs.com/), and locally serve the static JSON in [drinks.json](./drinks.json) at a `/drinks` route. When you are running the server, you should be able to visit the route in a browser (e.g. [http://localhost:8080/drinks](http://localhost:8080/drinks)) and see the JSON file. You can arrange the folder structure for the server in whichever way you best see fit, but please keep it within your cloned repo.

2. Create a simple React Native application that presents a button that reads 'Press Me!' on the home screen (beneath the topbar included in the boilerplate). 

When this button is pressed, the application should submit an action to the redux store to indicate that the application is loading, and the UI should update accordingly by changing the 'Press Me!' button to 'Loading data...' text. 

When the data has been successfully retrieved from the express server, the React Native app should display the images from the image URLs in the data in a 2x4 grid, with the drink title listed beneath each image. You may use an external library such as [React Native Grid View](https://github.com/phil-r/react-native-grid-component) for the grid if you wish.

The essential part of this exercise is to implement a basic feature that handles asynchrounous actions through redux. You should use either [Redux Thunk](https://github.com/gaearon/redux-thunk) or [Redux Saga](https://github.com/redux-saga/redux-saga) to manage the redux action workflow. This is not a design challenge necessarily; however, if you'd like to show us your design skills as well, feel free to spend some time prettying up the loading screen and the grid.

If you have any questions, please do not hesitate to reach out to [lachie@directdrinks.co](mailto:lachie@directdrinks.co).