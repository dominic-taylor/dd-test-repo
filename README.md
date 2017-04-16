# Direct Drinks coding test

Hey there. 
After installing dependencies you can run the server on port 3000 with `node server`.
I wrote my solution for the android platform so had to delete the `charity tinder` project folder from `android/app/src/main/java/com/`, and the `build` file that was in `android` and `android/app`, in order to get the boiler plate app running. 

I also left the 'top-bar' component in the app as the exercise instructions refered to it.
Once the server is running and app open, you should be able to press the button and get the drinks list. Please let me know if it isn't working or if there is anything else you need. 

Cheers.

Dominic




# React Native Redux Boiler

This is a boilerplate project for a React Native application that uses Redux to manage state. Note that I use [React Native Debugger](https://github.com/jhen0409/react-native-debugger) for debugging, which I highly recommend as a way to visualize the redux logic in your application. I do my best to keep this updated with the latest version of React Native.

The boilerplate also includes linting with [Standard](https://github.com/feross/standard), and a skeleton testing suite with [Ava](https://github.com/avajs/ava).
## Getting Started

```bash
git clone https://github.com/breezykermo/react-native-redux-boiler my-project
cd my-project
sudo rm -r .git   #remove git history
git init
git remote add origin https://github.com/{your-username}/{your-repo-name}

brew update && brew cask install react-native-debugger
npm i -g yarn
npm i -g react-native-debugger-open
yarn   #install dependencies: can also use 'npm install'

#run the app on iOS simulator
npm run debug:ios
```

