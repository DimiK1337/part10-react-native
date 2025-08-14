import { 
  StyleSheet,
  Pressable 
} from 'react-native';

import Text from '../Text';

import theme from '../../theme';

const styles = StyleSheet.create({
  tab: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    justifyContent: 'center'
  },
  label: {
    color: theme.colors.appBarText,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  }
})

const AppBarTab = ({ text }) => {
  return (
    <Pressable style={styles.tab}>
      <Text style={styles.label}>{text}</Text>
    </Pressable>
  );
};

export default AppBarTab;