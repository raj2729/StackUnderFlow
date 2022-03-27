import React, {useRef, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Text,
  useTheme,
  Subheading,
  Button as PaperButton,
} from 'react-native-paper';
import {Input, Button} from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import Swiper from 'react-native-swiper';
import MoreDetails from '../components/MoreDetails';

const SignUpScreen = ({navigation}) => {
  const swiper = useRef(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confpass, setConfPass] = useState('');
  const [active, setActive] = useState(1);
  const [hide, setHide] = useState(true);
  const {colors} = useTheme();

  const getPaginationStyle = index => {
    if (index === active) {
      return [styles.bottomBar, {backgroundColor: colors.secondary}];
    }
    return styles.bottomBar;
  };

  return (
    <View style={{flex: 1, backgroundColor: colors.secondary}}>
      <Text style={styles.title}>Register</Text>
      <Animatable.View
        animation={'bounceInUp'}
        duration={1500}
        useNativeDriver
        style={{
          ...styles.subContainer,
          backgroundColor: colors.backgroundLight,
        }}>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <View style={getPaginationStyle(1)} />
          <View style={getPaginationStyle(2)} />
        </View>
        <Swiper showsPagination={false} ref={swiper} scrollEnabled={false}>
          <View style={{...styles.subContainer, marginTop: 20, padding: 20}}>
            <Input
              value={email}
              onChangeText={setEmail}
              label={'Email'}
              placeholder={'enter your mail '}
              leftIcon={{type: 'feather', name: 'mail'}}
            />
            <Input
              value={password}
              onChangeText={setPassword}
              label={'Password'}
              placeholder={'enter your password '}
              leftIcon={{type: 'feather', name: 'lock'}}
              secureTextEntry={hide}
              rightIcon={
                <Feather
                  name={hide ? 'eye-off' : 'eye'}
                  onPress={() => setHide(h => !h)}
                  color={colors.text}
                  size={22}
                />
              }
            />
            <Input
              value={confpass}
              onChangeText={setConfPass}
              label={'Re-Enter Password'}
              placeholder={'re-enter your password '}
              leftIcon={{type: 'feather', name: 'lock'}}
              secureTextEntry={hide}
              rightIcon={
                <Feather
                  name={hide ? 'eye-off' : 'eye'}
                  onPress={() => setHide(h => !h)}
                  color={colors.text}
                  size={22}
                />
              }
            />
            <Button
              //raised={true}
              title={'Continue'}
              style={'solid'}
              buttonStyle={{
                backgroundColor: colors.secondary,
                height: 60,
                width: 150,
                borderRadius: 30,
                marginBottom: 20,
              }}
              titleStyle={{
                fontWeight: 'bold',
                fontSize: 20,
              }}
              onPress={() => {
                if (password === confpass && password.trim() != '') {
                  swiper.current.scrollBy(1, true);
                  setActive(2);
                } else {
                  alert('Check passwords and try again');
                }
              }}
            />
            <Subheading>Already have an account ?</Subheading>
            <PaperButton
              labelStyle={{fontSize: 18, color: colors.secondary}}
              onPress={() => navigation.navigate('Login')}>
              Login
            </PaperButton>
          </View>
          <MoreDetails email={email} password={password} />
        </Swiper>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    //top: 100,
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'white',
    marginVertical: 30,
    marginLeft: 20,
  },
  bottomBar: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 30,
    height: 6,
    borderRadius: 3,
    marginHorizontal: 4,
  },
});

export default SignUpScreen;
