import {
  View,
  StyleSheet,
  Image,
} from 'react-native';

import Text from './Text';
import theme from '../theme';

const divMod = (dividend, divisor) => [Math.floor(dividend / divisor), dividend % divisor];

const preciseNumericalText = (num) => {
  const [quotient, remainder] = divMod(num, 1000);
  const preciseRemainder = Math.round(remainder / 100);
  const preciseRemainderStr = preciseRemainder === 0 ? '' : `.${preciseRemainder}`
  return `${quotient}${preciseRemainderStr}k`
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 12,
    //borderColor: 'green',
    //borderWidth: 2
  },

  languageTextContainer: {
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    borderRadius: 4,
    padding: 8
  },

  languageText: {
    color: theme.colors.appBarText,
  },

  avatar: {
    height: 50,
    width: 50,
    marginLeft: 5,
    borderRadius: 4,
    flexShrink: 0
  },

  repoHeroContainer: {
    //borderColor: 'blue',
    //borderWidth: 2,
    flexDirection: 'row',
    marginVertical: 12,
    paddingVertical: 8,
  },

  repoHeroContainerText: {
    marginBottom: 8,
    flexShrink: 1,
  },

  repoInfoContainer: {
    //borderColor: 'white',
    //borderWidth: 2,
    flexDirection: 'column',
    marginLeft: 10,
    paddingVertical: 5,
    padding: 5,
    flex: 1,
    minWidth: 0
  },

  repoCountContainer: {
    //borderColor: 'purple',
    //borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 0,
    margin: 12,
    text: {
      textAlign: 'center'
    }
  }
})

const CountItem = ({ text, value }) => {
  return (
    <View>
      <Text style={styles.repoCountContainer.text} fontWeight='bold'>
        {value}
      </Text>
      <Text color='textSecondary'>{text}</Text>
    </View>
  );
};



const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.repoHeroContainer}>
        <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
        <View style={styles.repoInfoContainer}>
          <Text fontWeight='bold' fontSize='subheading' style={styles.repoHeroContainerText}>
            {item.fullName}
          </Text>
          <Text color='textSecondary' style={styles.repoHeroContainerText}>
            {item.description} kkkkkkkkkkkkkkkkkk
          </Text>
          <View style={styles.languageTextContainer}>
            <Text style={[styles.languageText]}>
              {item.language}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.repoCountContainer}>
        <CountItem text='Stars' value={preciseNumericalText(item.stargazersCount)} />
        <CountItem text='Forks' value={preciseNumericalText(item.forksCount)} />
        <CountItem text='Reviews' value={item.reviewCount} />
        <CountItem text='Rating' value={item.ratingAverage} />
      </View>
    </View>
  );
};

export default RepositoryItem;