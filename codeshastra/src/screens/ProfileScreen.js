import React, {useContext} from 'react';
import {Linking, StyleSheet, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {Avatar, Card, Text, Title, useTheme} from 'react-native-paper';
import {AuthContext} from '../auth/AuthProvider';
import Section from '../components/Section';

const ProfileScreen = ({navigation}) => {
  const {currentUser, signOut} = useContext(AuthContext);
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <Title style={styles.title}>Your Profile</Title>
      <View
        style={{
          borderWidth: 5,
          borderColor: colors.primary,
          width: 170,
          height: 170,
          borderRadius: 90,
          alignSelf: 'center',
          marginVertical: 15,
        }}>
        <Avatar.Image source={{uri: currentUser.image}} size={160} />
      </View>
      <Card style={styles.card}>
        <Section
          Icon={() => (
            <MaterialCommunityIcons
              name="clipboard-text-outline"
              color={colors.secondary}
              style={styles.iconMain}
            />
          )}
          label={'Your Violations'}
          showArrow={true}
          onPress={() => navigation.navigate('Violation')}
        />
      </Card>
      <Card style={styles.card}>
        <Section
          Icon={() => (
            <Entypo
              name="pencil"
              color={colors.accent}
              style={styles.iconMain}
            />
          )}
          label={'Edit Profile'}
          showArrow={true}
          onPress={() => navigation.navigate('Edit')}
        />
        {/* <Section
          Icon={() => (
            <Ionicons
              name="language"
              color={colors.accent}
              style={styles.iconMain}
            />
          )}
          label={'Language'}
          showArrow={true}
        /> */}
        <Section
          Icon={() => (
            <FontAwesome5
              name="restroom"
              color={colors.accent}
              style={styles.iconMain}
            />
          )}
          label={'Restrooms'}
          onPress={() =>
            Linking.openURL(
              'https://www.google.com/maps/search/?api=1&query=nearby_restrooms',
            )
          }
        />
        <Section
          Icon={() => (
            <Ionicons
              name="restaurant-outline"
              color={colors.accent}
              style={styles.iconMain}
            />
          )}
          label={'Eateries'}
          onPress={() =>
            Linking.openURL(
              'https://www.google.com/maps/search/?api=1&query=nearby_restaurants',
            )
          }
        />
        {/* <Section
          Icon={() => (
            <AntDesign
              name="sharealt"
              color={colors.accent}
              style={styles.iconMain}
            />
          )}
          label={`Share (${currentUser.referralCode})`}
          onPress={() => onShare(appURL, currentUser.referralCode)}
        />

        <Section
          Icon={() => (
            <AntDesign
              name="staro"
              color={colors.accent}
              style={styles.iconMain}
            />
          )}
          label={'Rate Us'}
          onPress={() => Linking.openURL(appURL)}
        /> */}
        <Section
          Icon={() => (
            <Ionicons
              name="exit-outline"
              color={colors.accent}
              style={styles.iconMain}
            />
          )}
          label={'Log Out'}
          onPress={signOut}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    padding: 10,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 15,
    marginBottom: 15,
  },
  iconMain: {
    fontSize: 22,
    marginTop: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProfileScreen;
