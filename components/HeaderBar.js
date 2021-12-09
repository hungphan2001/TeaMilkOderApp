import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {FONTS, COLORS, SIZES, icons} from '../constants';

import {connect} from 'react-redux';
import {toggleTheme} from '../stores/themeActions';

const HeaderBar = ({appTheme, toggleTheme}) => {
  function toggleThemeHandler() {
    if (appTheme.name == 'light') {
      toggleTheme('dark');
    } else {
      toggleTheme('light');
    }
  }

  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: 120,
        flexDirection: 'row',
        paddingTop:10,
        backgroundColor: COLORS.purple,
      }}>
      {/* Greeting view */}
      <View
        style={{
          flex: 1,
          paddingLeft: SIZES.padding,
        }}>
        <Text style={{color: COLORS.white, ...FONTS.h2}}>Hung,</Text>
        <Text style={{color: COLORS.white, ...FONTS.h2}}>Welcome Back!</Text>
      </View>

      {/* The toggle button */}
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          height: 40,
          backgroundColor: COLORS.lightPurple,
          borderRadius: 20,
          marginHorizontal: SIZES.padding,
        }}
        onPress={toggleThemeHandler}>
        {/* Light Mode */}
        <View
          style={{
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            ...(appTheme.name == 'light' ? styles.lightMode : {}),
          }}>
          <Image
            source={icons.sunny}
            style={{
              width: 30,
              height: 30,
              tintColor: COLORS.white,
            }}
          />
        </View>
        {/* Night mode */}
        <View
          style={{
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            ...(appTheme.name == 'dark' ? styles.nightMode : {}),
          }}>
          <Image
            source={icons.night}
            style={{
              width: 30,
              height: 30,
              tintColor: COLORS.white,
            }}
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  nightMode: {
    backgroundColor: COLORS.black,
    borderRadius: 20,
  },
  lightMode: {
    backgroundColor: COLORS.yellow,
    borderRadius: 20,
  },
});

function mapStateToProps(state) {
  return {
    appTheme: state.appTheme,
    error: state.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleTheme: themeType => {
      return dispatch(toggleTheme(themeType));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);