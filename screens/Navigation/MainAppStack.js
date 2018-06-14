/*
Account Home Screen Stack
*/

const MainAppStack = createStackNavigator (
  {
    AccountHomeScreenStack: AccountHomeScreenStack,
  },
  {
    navigationOptions: {
      headerTitle: 'Daikin Smart Thermostat',
      headerStyle: {
        backgroundColor: 'black',
        height: 20,
      },
      headerTintColor: '#bdbdbd',
      headerTitleStyle: {
        fontSize: 18,
      },
    }
  }
);

export default MainAppStack
