/*
Main app navigation:
Login
Create Account
Main
*/

const AppNavigator = createStackNavigator(
  {
    Start: StartScreen,
    Login: LoginScreen,
    CreateAccount: CreateAccountStack,
    // Main: MainAppStack,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);

export default AppNavigator;
