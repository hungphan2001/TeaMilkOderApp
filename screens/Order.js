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

import Svg, { Circle } from 'react-native-svg'

import { connect } from 'react-redux'
import { TabButton, IconButton, VerticalTextButton } from '../components'
import { dummyData, COLORS, FONTS, SIZES, icons } from '../constants'

const Order = ({ navigation, route, appTheme }) => {

    const [selectedLocation, setSelecytedLocation] = React.useState(null)
    const [selectedTab, setSelectedTab] = React.useState(0)
    const [selectedCategory, setSelectedCategory] = React.useState('Milk Tea')
    const [menu, setMenu] = React.useState(null)

    React.useEffect(() => {
        let { selectedLocation } = route.params
        setSelecytedLocation(selectedLocation)
    })

    React.useEffect(() => {
        const menuList = dummyData.menuList.filter(menuItem => menuItem.category === selectedCategory)
        setMenu(menuList)
    }, [selectedCategory])

    const renderHeaderSection = () => {
        return (
            <SafeAreaView
                style={{
                    height: 160,
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
        )
    }

    return (
        <View style={styles.container}>
            {/* Header  */}
            {renderHeaderSection()}
            {/* Detail  */}
            <View
                style={{
                    flex: 1,
                }}
            >
                {/* Tab Bar  */}

                {/* Side Bar & Listing  */}
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                    }}
                >
                    {/* Side Bar  */}

                    {/* Listing  */}
                </View>
            </View>
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