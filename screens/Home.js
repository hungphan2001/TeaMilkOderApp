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
import appTheme from '../constants/theme';

const promoTabs = constants.promoTabs;
const Tabs =({appTheme})=>{
  return (
    <View style={{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      marginTop:SIZES.padding,
      backgroundColor:appTheme.tabBackgroundColor,
      borderRadius:SIZES.radius,
    }}>
     {/* Tab -Indicatior */}

     {/* Tab */}
     {promoTabs.map((item,index)=>{
       return(
        <TouchableOpacity
        key={`PromoTab-${index}`}
        onPress={() => console.log(item)}>
        <View
          style={{
            paddingHorizontal: 15,
            alignItems: 'center',
            justifyContent: 'center',
            height: 40,
          }}>
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.h3,
            }}>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
       )
     })}
    </View>
  )
}
function renderAvailableRewards() {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        marginHorizontal: SIZES.padding,
        marginTop: SIZES.padding,
        height: 100,
      }}
      // onPress={() => navigation.navigate('Rewards')}
    >
      {/* Reward Cup */}
      <View
        style={{
          width: 100,
          height: '100%',
          borderTopLeftRadius: 15,
          borderBottomLeftRadius: 15,
          backgroundColor: COLORS.pink,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ImageBackground
          source={icons.reward_cup}
          resizeMode="contain"
          style={{
            width: 85,
            height: 85,
            marginLeft: 3,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 30,
              height: 30,
            }}>
            <Text style={{color: COLORS.white, ...FONTS.h4}}>290</Text>
          </View>
        </ImageBackground>
      </View>
     {/* Reward Details */}
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: COLORS.lightPink,
          borderRadius: 15,
          marginLeft: -10,
        }}>
        <View>
          <Text style={{color: COLORS.primary, ...FONTS.h2,
            fontSize:20}}>
            Avaiable Rewards</Text>

          <View
          style={{
            marginTop:5,
            padding:SIZES.base,
            borderRadius:SIZES.radius *2,
            backgroundColor: COLORS.primary
          }}
          >
         <Text style={{color:COLORS.white,...FONTS.body3}}>150 points -$2.50 off</Text>
          </View>
        </View>
      </View>
      
    </TouchableOpacity>
  );
}

const Home = ({navigation, appTheme}) => {

  function renderPromoDeal(){
    return (
      <View style={{
        flex :1,
        alignItems:'center'
      }}>
       {/* Header -Tabs */}
       
       {/* Details */}

      </View>
    )
  }
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

        {/* Promo */}
        {renderPromoDeal()}
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