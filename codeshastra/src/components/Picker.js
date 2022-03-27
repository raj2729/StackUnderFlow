import React from 'react';
import {SafeAreaView, Pressable, StyleSheet} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import Modal from 'react-native-modal';
//import {Modal} from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';

const Picker = ({setUri, visible, setVisible}) => {
  const {colors} = useTheme();
  const close = () => setVisible(false);
  const chooseImage = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 300,
      cropping: true,
    })
      .then(image => {
        setUri(image.path);
      })
      .finally(close);
  };

  const openCamera = () => {
    ImagePicker.openCamera({
      width: 400,
      height: 300,
      cropping: true,
    })
      .then(image => {
        setUri(image.path);
      })
      .finally(close);
  };

  return (
    <Modal
      isVisible={visible}
      onBackButtonPress={close}
      onBackdropPress={close}
      style={{justifyContent: 'flex-end', height: 200}}>
      <SafeAreaView style={styles.options}>
        <Pressable style={styles.option} onPress={chooseImage}>
          <Entypo name="image-inverted" color={colors.text} size={20} />
          <Text>Library </Text>
        </Pressable>
        <Pressable style={styles.option} onPress={openCamera}>
          <Entypo name="camera" color={colors.text} size={20} />
          <Text>Camera</Text>
        </Pressable>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  options: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  option: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Picker;
