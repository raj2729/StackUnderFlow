import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Title} from 'react-native-paper';
import ViolationCard from '../components/ViolationCard';
import Header from '../components/Header';

const ViolationScreen = () => {
  const violations = [
    {
      type: 'Late Reporting',
      reporting: new Date(new Date().getTime() - 30 * 60 * 60),
      arrival: new Date(),
    },
    {
      type: 'Incomplete Hours',
      arrival: new Date().getTime() - 4 * 60 * 60 * 60,
      outTime: new Date().getTime(),
      hours: 7,
    },
    {
      type: 'Head Gear Missing',
      image:
        'https://www.researchgate.net/profile/Md-Mehrab-Aopy/publication/330198608/figure/fig2/AS:712426450345988@1546867110482/Worker-working-without-safety-boots-hand-gloves-head-protection_Q320.jpg',
    },
    {
      type: 'Late Reporting',
      reporting: new Date(new Date().getTime() - 30 * 60 * 60),
      arrival: new Date(),
    },
    {
      type: 'Incomplete Hours',
      arrival: new Date().getTime() - 4 * 60 * 60 * 60,
      outTime: new Date().getTime(),
      hours: 7,
    },
    {
      type: 'Head Gear Missing',
      image:
        'https://www.researchgate.net/profile/Md-Mehrab-Aopy/publication/330198608/figure/fig2/AS:712426450345988@1546867110482/Worker-working-without-safety-boots-hand-gloves-head-protection_Q320.jpg',
    },
  ];

  return (
    <View style={styles.container}>
      <Header title={'Violations'} showBack={true} />
      <FlatList
        data={violations}
        keyExtractor={(x, i) => i.toString()}
        renderItem={({item}) => <ViolationCard item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ViolationScreen;
