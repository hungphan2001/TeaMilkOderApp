import React from 'react';
import {
    View,
    SafeAreaView,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    FlatList,
    StyleSheet
} from 'react-native';

import { connect } from 'react-redux'
import { TabButton, IconButton } from '../components'
import { dummyData, COLORS, FONTS, SIZES, icons } from '../constants'
const Order = ({ navigation,route,appTheme }) => {

    const [selectedLocation, setSelectedLocation] =React.useState(null)

    React.useEffect(()=>{
        let {selectedLocation } = route.params
        setSelectedLocation(selectedLocation)
    })

    function renderHeaderSection(){
        <SafeAreaView style={{
            height: 200,
            paddingTop: 10,
            backgroundColor: COLORS.primary,
            alignItems: 'center'
        }}>
        {/* Nav Bar  */}
        <View
                    style={{
                        flexDirection: 'row',
                        paddingHorizontal: SIZES.radius,
                        alignItems: 'center'
                    }}
                >
                    <IconButton
                        icon={icons.leftArrow}
                        onPress={() => navigation.goBack()}
                    />
                    <View style={{
                        flex: 1,
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            color: COLORS.white, ...FONTS.h1, fontSize: 25
                        }}> Pick-Up order </Text>
                    </View>
                    <View style={{ width: 25 }} />
                </View>
                {/* Location  */}
                <View
                    style={{
                        marginTop: SIZES.radius,
                        backgroundColor: COLORS.white1,
                        paddingHorizontal: SIZES.radius,
                        paddingVertical: 5,
                        borderRadius: SIZES.padding
                    }}
                >
                    <Text style={{ color: COLORS.primary, ...FONTS.body3 }}> {selectedLocation?.title} </Text>
                </View>
        </SafeAreaView>
    }
    return (
        <View style={styles.container}>
            {renderHeaderSection()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

function mapStateToProps(state) {
    return {
        appTheme: state.appTheme,
        error: state.error
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Order)