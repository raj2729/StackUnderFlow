import React, {useContext, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  PermissionsAndroid,
  Image,
} from 'react-native';
import {
  Text,
  useTheme,
  Subheading,
  Button as PaperButton,
  Avatar,
  Card,
} from 'react-native-paper';
import {Input, Button} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CameraView from './CameraView';
import Picker from './Picker';
import {AuthContext} from '../auth/AuthProvider';

const UploadCard = ({title, open, image, setImage}) => {
  const {colors} = useTheme();
  return (
    <Card style={{width: '95%', alignSelf: 'center', marginVertical: 10}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
        }}>
        <Subheading>{title}</Subheading>
        <Button
          title={image ? 'X Remove' : 'upload'}
          style={'solid'}
          buttonStyle={{
            backgroundColor: image === null ? colors.secondary : colors.error,
            height: 40,
            width: 100,
            marginTop: 10,
          }}
          onPress={image ? () => setImage(null) : open}
        />
      </View>
      {image !== null && (
        <Image source={{uri: image}} style={{height: 100, width: 200}} />
      )}
    </Card>
  );
};
const MoreDetails = ({email, password}) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [front, setFront] = useState(null);
  const [back, setBack] = useState(null);
  const [fopen, setfopen] = useState(false);
  const [bopen, setbopen] = useState(false);
  const [open, setOpen] = useState(false);
  const {colors} = useTheme();
  const {signUp} = useContext(AuthContext);

  const pickImage = () => {
    // ImageCropPicker.openCamera({
    //   width: 500,
    //   height: 500,
    //   cropping: true,
    //   cropperTintColor: colors.primary,
    // })
    //   .then(i => console.log(i))
    //   .catch(console.log);

    const permission = PermissionsAndroid.PERMISSIONS.CAMERA;
    const check = PermissionsAndroid.check(permission);
    if (check) {
      return setOpen(true);
    } else {
      PermissionsAndroid.request(permission).then(value => {
        if (value === 'granted') {
          setOpen(true);
        } else {
          ToastAndroid.show(
            "Press on '+' button to post story from file manager",
            ToastAndroid.SHORT,
          );
        }
      });
    }
  };

  return (
    <ScrollView
      style={{
        ...styles.container,
        backgroundColor: open ? 'rgb(0,0,0,0.3)' : colors.background,
      }}>
      <Input
        value={name}
        onChangeText={setName}
        label={'Name'}
        placeholder={'enter your name '}
        leftIcon={{type: 'ionicons', name: 'person-outline'}}
      />
      <Input
        value={address}
        onChangeText={setAddress}
        label={'Address'}
        placeholder={'enter your address'}
        leftIcon={
          <Ionicons name="location-outline" color={colors.text} size={20} />
        }
      />
      <View style={{marginHorizontal: 10, marginVertical: 10}}>
        <Text style={{color: 'grey', fontWeight: 'bold', fontSize: 17}}>
          Profile Image
        </Text>
        {image !== '' && <Avatar.Image source={{uri: image}} size={200} />}
        {open ? (
          <CameraView setOpen={setOpen} setImage={setImage} />
        ) : (
          <Button
            title={image ? 'X Remove' : 'Click'}
            style={'solid'}
            loading={isLoading}
            disabled={isLoading}
            buttonStyle={{
              backgroundColor: image === '' ? colors.secondary : colors.error,
              height: 40,
              width: 100,
              marginTop: 10,
            }}
            onPress={
              image === ''
                ? pickImage
                : () => {
                    setImage('');
                    setOpen(true);
                  }
            }
          />
        )}
      </View>
      <UploadCard
        title={'Upload Aadhar front'}
        open={() => setfopen(true)}
        image={front}
        setImage={setFront}
      />
      <UploadCard
        title={'Upload Aadhar back'}
        open={() => setbopen(true)}
        image={back}
        setImage={setBack}
      />
      <Picker visible={fopen} setVisible={setfopen} setUri={setFront} />
      <Picker visible={bopen} setVisible={setbopen} setUri={setBack} />
      <Button
        //raised={true}
        title={'Sign-Up'}
        style={'solid'}
        loading={isLoading}
        disabled={isLoading}
        buttonStyle={{
          backgroundColor: !isLoading ? colors.secondary : colors.textBefore,
          height: 60,
          width: 150,
          borderRadius: 30,
          marginBottom: 20,
          alignSelf: 'center',
        }}
        titleStyle={{
          fontWeight: 'bold',
          fontSize: 20,
        }}
        onPress={() =>
          signUp({
            name,
            email,
            password,
            image,
            front,
            back,
          })
        }
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});

export default MoreDetails;
