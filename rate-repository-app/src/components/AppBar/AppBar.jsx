import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// Components
import AppBarTab from './AppBarTab';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarPrimary,
    paddingHorizontal: 8,
    paddingVertical: 8,
    flexDirection: 'row',
    // ...
  },
  // ...
});

const AppBar = () => {

  const tabTexts = ['Repositories'];
  return (
    <View style={styles.container}>
      {tabTexts.map(text => <AppBarTab key={text} text={text}/>)}
    </View>
  );
};

export default AppBar;