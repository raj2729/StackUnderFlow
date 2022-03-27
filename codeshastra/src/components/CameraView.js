import React, {useState} from 'react';
import {RNCamera} from 'react-native-camera';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, StyleSheet, TouchableOpacity, ToastAndroid} from 'react-native';
import {Text, useTheme} from 'react-native-paper';

const CameraView = ({setOpen, setImage}) => {
  const {colors} = useTheme();
  const [detected, setDetected] = useState(false);
  const PendingView = () => (
    <View
      style={{
        flex: 1,
        backgroundColor: 'lightgreen',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Waiting</Text>
    </View>
  );

  const takePicture = async camera => {
    const options = {quality: 0.7};
    if (!detected)
      return ToastAndroid.show('Face is not detected', ToastAndroid.SHORT);
    try {
      const data = await camera.takePictureAsync(options);
      console.log(data);
      setImage(data.uri);
      setOpen(false);
    } catch (e) {
      console.log(e);
    }
    //  eslint-disable-next-line
  };

  return (
    <View
      style={{
        borderWidth: 4,
        borderColor: detected ? 'green' : 'red',
        paddingBottom: 10,
        height: 300,
        width: '90%',
        marginTop: 10,
      }}>
      <RNCamera
        style={styles.preview}
        type={RNCamera.Constants.Type.front}
        captureAudio={false}
        flashMode={RNCamera.Constants.FlashMode.on}
        onFacesDetected={data => {
          if (data.faces.length === 0) setDetected(false);
          else setDetected(true);
        }}
        onFaceDetectionError={console.log}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}>
        {({camera, status, recordAudioPermissionStatus}) => {
          if (status !== 'READY') return <PendingView />;
          return (
            <View
              style={{
                flex: 0,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              {/* <TouchableOpacity
              onPress={() => camera.}
              style={styles.capture}>
              <Ionicons
                name="camera-reverse-outline"
                color={colors.text}
                size={20}
              />
            </TouchableOpacity> */}
              <TouchableOpacity
                onPress={() => takePicture(camera)}
                style={styles.capture}>
                <Text style={{fontSize: 14}}> SNAP </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      </RNCamera>
    </View>
  );
};

const styles = StyleSheet.create({
  preview: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    marginTop: 10,
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

export default CameraView;
