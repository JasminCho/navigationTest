/*
Account Owner Info
Home Info
Connect Thermostat
Account Created Login Stack
*/

const CreateAccountStack = createStackNavigator (
  {
    Owner: OwnerStack,
    Home: HomeInfoStack,
    ConnectThermostat: ConnectThermostatStack,
    Agreement: AgreementStack,
  },
  {
    navigationOptions: {
      headerTitle: 'create account',
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
