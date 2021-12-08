import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';
import HeaderBar from '../components/HeaderBar';
import {COLORS, SIZES, FONTS, icons, dummyData, constants} from '../constants';
import {connect} from 'react-redux';

function renderAvailableRewards() {
  return (
    <View></View>
  );
}

const Home = ({navigation, appTheme}) => {
  return (
    <View style={styles.container}>
      <HeaderBar />

      <ScrollView
        style={{
          flex: 1,
          backgroundColor: appTheme.backgroundColor,
          borderRadius: SIZES.radius * 2,
          marginTop: -20,
        }}
        contentContainerStyle={{
          paddingBottom: 150,
        }}>
        {/* Available rewards */}
        {renderAvailableRewards()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function mapStateToProps(state) {
  return {
    appTheme: state.appTheme,
    error: state.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);