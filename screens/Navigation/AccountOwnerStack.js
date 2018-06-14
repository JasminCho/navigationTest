const AccountOwnerStack = createStackNavigator (
  {
    AccountOwner: AccountOwner,
    Name: OwnerName,
    Email: AccountEmail,
    Password: AccountPassword,
  },
  {
    initialRouteName: "AccountOwner",
  }
);

export default AccountOwnerStack;
