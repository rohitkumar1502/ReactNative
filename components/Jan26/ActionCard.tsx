import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const ActionCard = () => {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>What's New in new javascript</Text>
        </View>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          }}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            Just like every year, Javascript brings in new features. This year
            javascript is bringing 4 new features, which are almost in
            production rollout. I won't be wasting much more time and directly
            jump to code with easy to understand examples.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <View style={styles.dektehai}>
            <TouchableOpacity
              onPress={() =>
                openWebsite(
                  'https://blog.learncodeonline.in/whats-new-in-javascript-21-es12',
                )
              }>
              <Text style={styles.socialLinks}>Read more</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() =>
              openWebsite('https://www.linkedin.com/in/krohitkumar/')
            }>
            <Text style={styles.socialLinks}>Follow me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  card: {
    width: 350,
    height: 450,
    borderRadius: 6,
    marginVertical: 13,
    marginHorizontal: 20,
  },
  elevatedCard: {
    backgroundColor: 'orange',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 1,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  cardImage: {
    height: 250,
  },
  headerText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  headingText: {
    fontSize: 30,
    fontWeight: '700',
    paddingHorizontal: 10,
  },
  socialLinks: {
    fontSize: 16,
    color: '#000000',

    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  bodyContainer: {
    padding: 10,
  },
  dektehai: {
    backgroundColor: '#FFF',
    borderRadius: 6,
  },
});
