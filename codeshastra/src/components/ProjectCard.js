import React from 'react';
import {View, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import {
  Card,
  Subheading,
  Paragraph,
  useTheme,
  ProgressBar,
} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProjectCard = ({project}) => {
  const {colors} = useTheme();
  const date = new Date(project.time);
  return (
    <Card style={{marginVertical: 5}}>
      <Card.Cover
        source={{
          uri: project.img,
        }}
      />
      <Card.Content>
        <Subheading style={{fontWeight: 'bold', fontSize: 16}}>
          {project.name}
        </Subheading>
        <Paragraph style={{color: colors.textAfter}}>
          By. {project.builder}
        </Paragraph>
        {/* <View style={{flexDirection: 'row', marginBottom: 10}}>
          <Paragraph style={{fontWeight: 'bold'}}>Rs. 9,30,000 </Paragraph>
          <Paragraph>out of 10,00,000</Paragraph>
        </View> */}
        {/* <ProgressBar progress={0.8} color={colors.accent} /> */}
        <View style={styles.section}>
          <View
            style={{
              ...styles.info,
              backgroundColor: colors.border,
            }}>
            <Ionicons name="timer-outline" size={20} color={colors.text} />
            <Paragraph style={{fontWeight: 'bold'}}>
              Reporting time:- {date.toLocaleTimeString()} on{' '}
              {date.toLocaleDateString()}
            </Paragraph>
          </View>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                `https://www.google.com/maps/search/?api=1&query=${project.location}`,
              )
            }>
            <Ionicons
              name="location-sharp"
              size={30}
              color={colors.text}
              style={{marginTop: 3}}
            />
          </TouchableOpacity>
          {/* <View
            style={{
              ...styles.info,
              backgroundColor: colors.border,
            }}>
            <MaterialCommunityIcons
              name="account-group-outline"
              size={20}
              color={colors.text}
            />
            <Paragraph style={{fontWeight: 'bold'}}>300+ backers</Paragraph>
          </View> */}
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  info: {
    height: 40,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default ProjectCard;
