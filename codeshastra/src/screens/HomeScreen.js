import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text, Title} from 'react-native-paper';
import ProjectCard from '../components/ProjectCard';

const HomeScreen = ({navigation}) => {
  const projects = [
    {
      id: 1,
      name: 'Sunview Heights',
      img: 'https://media.istockphoto.com/photos/experienced-engineer-explaining-the-problems-in-construction-works-picture-id1267010934?k=20&m=1267010934&s=612x612&w=0&h=orOoQ1keF4d0axah0pr5HENABscij3Nxg-PKUV_7YK0=',
      status: 'active',
      location: 'Andheri West, Mumbai',
      time: new Date().toString(),
      builder: 'Lorem Ipsum',
      description:
        "Over 45,000 m3 (58,900 cu yd) of concrete, weighing more than 110,000 tonnes were used to construct the concrete and steel foundation, which features 192 piles buried more than 50 m (164 ft) deep. Burj Khalifa's construction will have used 330,000 m3 (431,600 cu yd) of concrete and 39,000 tonnes (43,000 ST; 38,000 LT) of steel rebar, and construction will have taken 22 million man-hours. The exterior cladding of Burj Khalifa began in May 2007 and was completed in September 2009. The vast project involved more than 380 skilled engineers and on-site technicians. At the initial stage of installation, the team progressed at the rate of about 20 to 30 panels per day and eventually achieved as many as 175 panels per day. The tower accomplished a world record for the highest installation of an aluminium and glass façade with a height of 512 metres. The total weight of aluminium used on Burj Khalifa is equivalent to that of five A380 aircrafts and the total length of stainless steel bull nose fins is 293 times the height of Eiffel Tower in Paris.",
      latitude: -21.25653,
      longitude: -100.84926,
    },
    {
      id: 2,
      name: 'Ganji Nivaas',
      img: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/69_Fisk_IRT_work_vests_jeh.jpg',
      status: 'pending',
      location: 'Thane, Mumbai',
      time: new Date().toString(),
      builder: 'Lorem Ipsum',
      description:
        "Over 45,000 m3 (58,900 cu yd) of concrete, weighing more than 110,000 tonnes were used to construct the concrete and steel foundation, which features 192 piles buried more than 50 m (164 ft) deep. Burj Khalifa's construction will have used 330,000 m3 (431,600 cu yd) of concrete and 39,000 tonnes (43,000 ST; 38,000 LT) of steel rebar, and construction will have taken 22 million man-hours. The exterior cladding of Burj Khalifa began in May 2007 and was completed in September 2009. The vast project involved more than 380 skilled engineers and on-site technicians. At the initial stage of installation, the team progressed at the rate of about 20 to 30 panels per day and eventually achieved as many as 175 panels per day. The tower accomplished a world record for the highest installation of an aluminium and glass façade with a height of 512 metres. The total weight of aluminium used on Burj Khalifa is equivalent to that of five A380 aircrafts and the total length of stainless steel bull nose fins is 293 times the height of Eiffel Tower in Paris.",
      latitude: 19.1061636,
      longitude: 72.8369622,
    },
    {
      id: 3,
      name: 'Niles Apartments',
      img: 'https://www.worldconstructiontoday.com/wp-content/uploads/2020/11/constructon-worker-wellfare.jpg',
      status: 'passive',
      location: 'Sagarcity, Pune',
      time: new Date().toString(),
      builder: 'Lorem Ipsum',
      description:
        "Over 45,000 m3 (58,900 cu yd) of concrete, weighing more than 110,000 tonnes were used to construct the concrete and steel foundation, which features 192 piles buried more than 50 m (164 ft) deep. Burj Khalifa's construction will have used 330,000 m3 (431,600 cu yd) of concrete and 39,000 tonnes (43,000 ST; 38,000 LT) of steel rebar, and construction will have taken 22 million man-hours. The exterior cladding of Burj Khalifa began in May 2007 and was completed in September 2009. The vast project involved more than 380 skilled engineers and on-site technicians. At the initial stage of installation, the team progressed at the rate of about 20 to 30 panels per day and eventually achieved as many as 175 panels per day. The tower accomplished a world record for the highest installation of an aluminium and glass façade with a height of 512 metres. The total weight of aluminium used on Burj Khalifa is equivalent to that of five A380 aircrafts and the total length of stainless steel bull nose fins is 293 times the height of Eiffel Tower in Paris.",
      latitude: -21.25653,
      longitude: -100.84926,
    },
    {
      id: 4,
      name: 'Caribbean B',
      img: 'https://www.lawyernc.com/wp-content/uploads/2020/09/construction.jpg',
      status: 'passive',
      location: 'Vile Parle, Mumbai',
      time: new Date().toString(),
      builder: 'Lorem Ipsum',
      description:
        "Over 45,000 m3 (58,900 cu yd) of concrete, weighing more than 110,000 tonnes were used to construct the concrete and steel foundation, which features 192 piles buried more than 50 m (164 ft) deep. Burj Khalifa's construction will have used 330,000 m3 (431,600 cu yd) of concrete and 39,000 tonnes (43,000 ST; 38,000 LT) of steel rebar, and construction will have taken 22 million man-hours. The exterior cladding of Burj Khalifa began in May 2007 and was completed in September 2009. The vast project involved more than 380 skilled engineers and on-site technicians. At the initial stage of installation, the team progressed at the rate of about 20 to 30 panels per day and eventually achieved as many as 175 panels per day. The tower accomplished a world record for the highest installation of an aluminium and glass façade with a height of 512 metres. The total weight of aluminium used on Burj Khalifa is equivalent to that of five A380 aircrafts and the total length of stainless steel bull nose fins is 293 times the height of Eiffel Tower in Paris.",
      latitude: 19.1061636,
      longitude: 72.8369622,
    },
  ];

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Ongoing Work</Title>
      <FlatList
        data={projects}
        keyExtractor={(x, i) => i.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ProjectDetail', {project: item})
            }>
            <ProjectCard project={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    padding: 15,
  },
});

export default HomeScreen;
