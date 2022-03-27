import React, {useState, useContext} from 'react';
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
import {AuthContext} from '../auth/AuthProvider';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hide, setHide] = useState(true);
  const {colors} = useTheme();
  const {signIn, isLoading} = useContext(AuthContext);

  return (
    <View style={{flex: 1, backgroundColor: colors.secondary}}>
      <Text style={styles.title}>Sign-In</Text>
      <Animatable.View
        animation={'bounceInUp'}
        duration={1500}
        useNativeDriver
        style={{
          ...styles.subContainer,
          backgroundColor: colors.backgroundLight,
        }}>
        <View style={{height: 40}} />
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
        <Button
          //raised={true}
          title={'Login'}
          style={'solid'}
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
          onPress={() => signIn(email, password)}
        />
        <Subheading>Don't have an account ?</Subheading>
        <PaperButton
          labelStyle={{fontSize: 18, color: colors.secondary}}
          onPress={() => navigation.navigate('SignUp')}>
          Sign-Up
        </PaperButton>
        {/* <Title style={{color: colors.secondary}}>Sign-Up</Title> */}
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    //top: 100,
    width: '100%',
    padding: 20,
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
});

export default LoginScreen;
