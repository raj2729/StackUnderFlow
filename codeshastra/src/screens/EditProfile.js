import React, {useContext, useState} from 'react';
import {ScrollView, ToastAndroid, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {Button, Input, Avatar} from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
import ImageCropPicker from 'react-native-image-crop-picker';
import {AuthContext} from '../auth/AuthProvider';
import Header from '../components/Header';

const EditProfile = () => {
  const {colors} = useTheme();
  const {isLoading, currentUser, signOut, setCurrentUser} =
    useContext(AuthContext);
  const [email, setEmail] = useState(currentUser.email || '');
  const [name, setName] = useState(currentUser.name || '');
  const [image, setImage] = useState(currentUser.image || '');

  const pickImage = () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImage(image.path);
      setCurrentUser(c => {
        return {...c, image: image.path};
      });
    });
  };

  return (
    <ScrollView>
      <View style={{marginTop: 15, marginLeft: 15}}>
        <Header title={'Edit Profile'} showBack={true} />
      </View>

      <View style={{flex: 1, alignItems: 'center', padding: 20}}>
        <Avatar
          rounded
          onPress={pickImage}
          size={160}
          source={{
            uri:
              image ||
              'https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_960_720.png',
          }}>
          <Avatar.Accessory
            style={{height: 40, width: 40, borderRadius: 20}}
            iconStyle={{fontSize: 25}}
            ImageComponent={<Entypo name={'pencil'} color={colors.text} />}
          />
        </Avatar>

        <Input
          value={name}
          onChangeText={setName}
          label={'Name'}
          placeholder={'enter name'}
          leftIcon={{type: 'ionicons', name: 'person-outline'}}
        />
        <Input
          value={email}
          onChangeText={setEmail}
          label={'Email'}
          placeholder={'enter your mail '}
          leftIcon={{type: 'feather', name: 'mail'}}
        />
        <Button
          title={'Done'}
          style={'solid'}
          onPress={() => {
            setCurrentUser(c => {
              return {...c, profile: image, name, email};
            });
            ToastAndroid.show('Profile Details updated !!', ToastAndroid.SHORT);
          }}
          loading={isLoading}
          disabled={isLoading}
          buttonStyle={{
            backgroundColor: !isLoading ? colors.secondary : colors.textBefore,
            height: 60,
            width: 150,
            borderRadius: 30,
            marginBottom: 20,
          }}
          titleStyle={{
            fontWeight: 'bold',
            fontSize: 20,
          }}
        />

        <Button
          title={'Sign-Out'}
          style={'solid'}
          buttonStyle={{
            backgroundColor: colors.error,
            height: 60,
            width: 150,
            borderRadius: 30,
            marginBottom: 20,
          }}
          titleStyle={{
            fontWeight: 'bold',
            fontSize: 20,
          }}
          onPress={signOut}
        />
      </View>
    </ScrollView>
  );
};

export default EditProfile;
