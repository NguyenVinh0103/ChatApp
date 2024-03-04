import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';

import {
  IC_BACK,
  IC_APPLE,
  IC_FACEBOOK,
  IMG_LOGIN,
  IC_GOOGLE,
} from '../../asset';
import {normalize, normalizeHorizontal, colors, fonts} from '../../helper';
import {useNavigation} from '@react-navigation/native';

export const Login = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.borderIcBack}>
        <FastImage
          source={IC_BACK}
          resizeMode="contain"
          style={styles.icBack}
        />
      </TouchableOpacity>
      <View style={styles.content}>
        <View style={styles.txt}>
          <Text style={styles.txtContainer}>{'Hello, Welcome Back'}</Text>
          <Text style={styles.txtContent}>
            {'Happy to see you again, to use your account please login first.'}
          </Text>
        </View>
        <FastImage
          source={IMG_LOGIN}
          resizeMode="contain"
          style={styles.imgLogin}
        />
      </View>
      <View style={styles.form}>
        <View style={styles.email}>
          <TextInput
            style={styles.tipEmail}
            placeholder="E-mail"
            placeholderTextColor="black"
          />
        </View>
        <View style={styles.password}>
          <TextInput
            style={styles.tipPassword}
            placeholder="Password"
            placeholderTextColor="black"
          />
        </View>
        <TouchableOpacity style={styles.forgotPass}>
          <Text style={styles.forgotPassword}>{'Forgot Password'}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.btnLogin}>
        <Text style={styles.txtLogin}>{'Login'}</Text>
      </TouchableOpacity>
      <View style={styles.bottom}>
        <View style={styles.border}></View>
        <Text style={styles.txtBotom}>{'Or login with'}</Text>
        <View style={styles.border}></View>
      </View>
      <View style={styles.icBottom}>
        <TouchableOpacity>
          <FastImage
            style={styles.icGoogle}
            source={IC_GOOGLE}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <FastImage
            source={IC_APPLE}
            resizeMode="contain"
            style={styles.icApple}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <FastImage
            style={styles.icFacebook}
            source={IC_FACEBOOK}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  borderIcBack: {
    height: normalize(40),
    aspectRatio: 1,
    borderWidth: 2,
    marginTop: normalize(60),
    marginLeft: normalizeHorizontal(20),
    borderRadius: 100 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icBack: {
    height: normalize(20),
    aspectRatio: 1,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txt: {
    width: normalizeHorizontal(200),
    marginLeft: normalizeHorizontal(20),
  },
  imgLogin: {
    height: normalize(200),
    aspectRatio: 1,
  },
  txtContainer: {
    fontSize: normalize(24),
    fontWeight: '700',
    color: colors.BACKGROUND,
    width: normalizeHorizontal(300),
  },
  txtContent: {
    marginTop: normalize(4),
    width: normalizeHorizontal(300),
    fontSize: normalize(16),
    fontWeight: '500',
  },
  tipEmail: {
    width: '90%',
    borderWidth: 1,
    height: normalize(50),
    borderRadius: 12,
    paddingHorizontal: normalizeHorizontal(20),
    color: colors.BACKGROUND,
    fontSize: normalizeHorizontal(16),
    letterSpacing: 0.5,
    alignSelf: 'center',
  },
  password: {
    marginTop: normalize(40),
  },
  tipPassword: {
    width: '90%',
    borderWidth: 1,
    height: normalize(50),
    borderRadius: 12,
    paddingHorizontal: normalizeHorizontal(20),
    color: colors.BACKGROUND,
    fontSize: normalizeHorizontal(16),
    letterSpacing: 0.5,
    alignSelf: 'center',
  },
  forgotPassword: {
    marginLeft: normalizeHorizontal(240),
    marginRight: normalizeHorizontal(20),
    marginTop: normalize(12),
    fontSize: normalize(16),
    fontWeight: '300',
    color: 'red',
  },
  btnLogin: {
    width: '90%',
    height: normalize(50),
    backgroundColor: '#771F98',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: normalize(50),
    borderRadius: 12,
  },
  txtLogin: {
    fontSize: normalize(20),
    fontWeight: '500',
    color: colors.TEXT,
    letterSpacing: 1,
  },
  bottom: {
    marginTop: normalize(20),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  border: {
    borderWidth: 1,
    width: normalizeHorizontal(100),
    margin: 4,
  },
  txtBotom: {
    fontSize: normalize(16),
    fontWeight: '300',
    color: colors.BACKGROUND,
    letterSpacing: 1,
  },
  icBottom: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: normalize(20),
    alignItems: 'center',
  },
  icGoogle: {
    height: normalize(40),
    aspectRatio: 1,
  },
  icApple: {
    height: normalize(40),
    aspectRatio: 1,
    marginHorizontal: normalizeHorizontal(40),
  },
  icFacebook: {
    height: normalize(40),
    aspectRatio: 1,
  },
});
