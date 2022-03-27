import React from 'react';

import {StyleSheet, ToastAndroid} from 'react-native';
import {Text} from 'react-native-paper';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import Geolocation from '@react-native-community/geolocation';
import {getDistanceFromLatLonInKm} from '../helpers';

const QrScanner = ({navigation, route}) => {
  const {lat, long, project} = route.params;

  const onSuccess = e => {
    Geolocation.getCurrentPosition(info => {
      const {latitude, longitude} = info.coords;
      let dist = getDistanceFromLatLonInKm(latitude, longitude, lat, long);

      if (dist > 1) {
        navigation.navigate('ProjectDetail', {marked: false, project});
        return alert(
          'Since you are not present on site ! Your Attendance could not be marked :(',
        );
      } else {
        navigation.navigate('ProjectDetail', {marked: true, project});
        ToastAndroid.show(
          'Your attendance has been marked.\n We hope you work hard and remain safe and sound :)',
          ToastAndroid.LONG,
        );
      }
    });

    ToastAndroid.show('Your Attendance is Marked :) ', ToastAndroid.SHORT);
  };

  return (
    <QRCodeScanner
      onRead={onSuccess}
      // flashMode={RNCamera.Constants.FlashMode.torch}
      flashMode={RNCamera.Constants.FlashMode.off}
      showMarker={true}
      topContent={
        <Text style={styles.centerText}>Scan the QR Code present on site</Text>
      }
      bottomContent={
        // <TouchableOpacity style={styles.buttonTouchable}>
        <Text style={styles.buttonText}>
          You need to be at the site to mark your attendance{' '}
        </Text>
        // </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
    marginTop: 20,
    textAlign: 'center',
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default QrScanner;
