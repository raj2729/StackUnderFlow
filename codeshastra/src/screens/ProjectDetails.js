import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'react-native-elements';
import {Paragraph, Subheading, useTheme} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';

const Detail = ({name, value}) => {
  const {colors} = useTheme();
  return (
    <View
      style={{
        marginVertical: 5,
        flexDirection: 'row',
        marginLeft: 5,
        width: '80%',
      }}>
      <Paragraph style={{color: colors.primary, fontWeight: 'bold'}}>
        {name}:-{' '}
      </Paragraph>
      <Paragraph style={{color: colors.background}}>{value}</Paragraph>
    </View>
  );
};

const ProjectDetails = ({route, navigation}) => {
  const {project, marked: mark = false} = route.params;
  const [marked, setMarked] = useState(false);
  const [fmarked, setfmarked] = useState(false);
  const {colors} = useTheme();

  const goToQR = async () => {
    try {
      const data =
        await RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
          interval: 10000,
          fastInterval: 5000,
        });
      if (data)
        navigation.navigate('QR', {
          lat: project.latitude,
          long: project.longitude,
          project,
        });
    } catch {
      return ToastAndroid.show(
        'Pleae turn on your location to mark attendance',
        ToastAndroid.SHORT,
      );
    }
  };

  useEffect(() => {
    if (marked) return setfmarked(mark);
    setMarked(mark);
  }, [mark]);

  return (
    <ImageBackground source={{uri: project.img}} style={styles.container}>
      <View
        style={{...StyleSheet.absoluteFill, backgroundColor: 'rgba(0,0,0,0.4)'}}
      />
      <TouchableOpacity
        onPress={navigation.goBack}
        hitSlop={{top: 20, bottom: 100, left: 20, right: 20}}>
        <Ionicons
          name="arrow-back"
          style={{
            fontSize: 30,
            color: colors.background,
            marginRight: 15,
            position: 'absolute',
            top: -10,
            left: -5,
          }}
        />
      </TouchableOpacity>
      <Subheading
        style={{
          color: colors.accent,
          fontSize: 18,
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
        {project.name}
      </Subheading>
      <Paragraph style={{color: colors.background}}>
        By ~{project.builder}
      </Paragraph>
      <ScrollView
        style={{
          flex: 1,
          marginTop: 10,
          borderWidth: 2,
          borderColor: colors.disabled,
          borderRadius: 10,
          padding: 10,
        }}>
        <Paragraph
          style={{
            color: colors.background,
            fontWeight: 'bold',
            fontSize: 16,
            textDecorationLine: 'underline',
          }}>
          About Project:
        </Paragraph>
        <Paragraph style={{color: colors.background}}>
          {project.description}
        </Paragraph>
        <View style={{marginTop: 10}}>
          <Detail name={'Location'} value={project.location} />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 10,
            }}>
            <Button
              title={marked ? 'Marked :)' : 'Mark Attendance'}
              disabled={marked}
              style={'solid'}
              buttonStyle={{
                backgroundColor: marked ? 'green' : colors.border,
                width: 120,
                borderRadius: 30,
                marginBottom: 20,
                alignSelf: 'center',
              }}
              titleStyle={{
                fontWeight: 'bold',
              }}
              onPress={goToQR}
            />
            {marked && (
              <Button
                title={fmarked ? 'Marked :)' : 'Mark Leave Attendance'}
                disabled={fmarked}
                style={'solid'}
                buttonStyle={{
                  backgroundColor: fmarked ? 'green' : colors.border,
                  width: 120,
                  borderRadius: 30,
                  marginBottom: 20,
                  alignSelf: 'center',
                }}
                titleStyle={{
                  fontWeight: 'bold',
                }}
                onPress={goToQR}
              />
            )}
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});

export default ProjectDetails;
