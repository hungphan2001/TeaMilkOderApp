import React from 'react';
import {
    View,
    SafeAreaView,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList,
    StyleSheet
} from 'react-native';

import { connect } from 'react-redux'
import { TabButton, IconButton } from '../components'
import { dummyData, COLORS, FONTS, SIZES, icons } from '../constants'

const Location = ({ navigation, appTheme }) => {

    const [selectedTab, setSelectedTab] = React.useState(0)

    const renderHeader = () => {
        return (
            <SafeAreaView
                style={{
                    height: 110,
                    paddingTop: 10,
                    backgroundColor: COLORS.primary,
                    alignItems: 'center'
                }}
            >
                <View style={{
                    flexDirection: 'row',
                    paddingHorizontal: SIZES.radius,
                    alignItems: 'center'
                }}>
                    {/* Back Button  */}
                    <IconButton
                        icon={icons.leftArrow}
                        onPress={() => navigation.goBack()}
                    />
                    {/* Title  */}
                    <View style={{
                        flex: 1,
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            color: COLORS.white, ...FONTS.h1, fontSize: 25
                        }}> Locations </Text>
                    </View>
                    {/* Empty  */}
                    <View style={{ width: 25 }} />
                </View>


            </SafeAreaView>
        )
    }

    const renderTopBarSection = () => {
        return (
            <View
                style={{
                    flexDirection: 'row'
                }}>
                {/* Nearby  */}
                <TabButton
                    containerStyle={{ width: 80 }}
                    label='Nearby'
                    selected={selectedTab === 0}
                    onPress={() => setSelectedTab(0)}
                />
                {/* Previous  */}
                <TabButton
                    containerStyle={{ width: 100 }}
                    label='Previous'
                    selected={selectedTab === 1}
                    onPress={() => setSelectedTab(1)}
                />
                {/* Favourite  */}
                <TabButton
                    containerStyle={{ width: 100 }}
                    label='Favourite'
                    selected={selectedTab === 2}
                    onPress={() => setSelectedTab(2)}
                />
            </View>
        )
    }

    const renderSearchBar = () => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    marginTop: SIZES.radius,
                    height: 50,
                    paddingHorizontal: SIZES.padding,
                    borderRadius: 25,
                    backgroundColor: COLORS.lightGreen2,
                    alignItems: 'center'
                }}
            >
                <TextInput
                    style={{
                        flex: 1,
                        height: 50,
                        color: COLORS.black,
                        ...FONTS.body3
                    }}
                    placeholder="enter your city, state or zip code"
                    placeholderTextColor={COLORS.lightGray2}
                />
                <Image
                    source={icons.search}
                    style={{
                        width: 30,
                        height: 30,
                        tintColor: COLORS.lightGray2
                    }}
                />
            </View>
        )
    }

    const renderLocationList = () => {
        return (
            <FlatList
                style={{
                    marginTop: SIZES.radius,
                    paddingHorizontal: SIZES.radius
                }}
                data={dummyData.locations}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                keyboardDismissMode='on-drag'
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={{
                            marginBottom: SIZES.radius,
                            borderRadius: SIZES.radius * 2,
                            paddingHorizontal: SIZES.padding,
                            paddingVertical: SIZES.radius,
                            backgroundColor: appTheme.cardBackgroundColor
                        }}
                        onPress={() => navigation.navigate('Order', {
                            selectedLocation: item
                        })}
                    >
                        {/* Name & Bookmark  */}
                        <View
                            style={{
                                flexDirection: 'row'
                            }}
                        >
                            <Text
                                style={{ flex: 1, color: appTheme.textColor, ...FONTS.h2 }}
                            >{item.title}</Text>
                            <Image
                                source={item.bookmarked
                                    ? icons.bookmarkFilled
                                    : icons.bookmark}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: item.bookmarked
                                        ? COLORS.red2
                                        : COLORS.white
                                }}
                            />
                        </View>
                        {/* Address  */}
                        <View
                            style={{
                                marginTop: SIZES.base,
                                width: '80%'
                            }}
                        >
                            <Text
                                style={{
                                    color: appTheme.textColor,
                                    ...FONTS.body3,
                                    lineHeight: 21
                                }}
                            >
                                {item.address}</Text>
                        </View>
                        {/* Operation Hours  */}
                        <View
                            style={{
                                marginTop: SIZES.base,
                                marginBottom: SIZES.base,
                            }}
                        >
                            <Text
                                style={{
                                    color: appTheme.textColor,
                                    ...FONTS.body5,
                                    lineHeight: 16
                                }}
                            >
                                {item.operation_hours}</Text>
                        </View>
                        {/* Services */}
                        <View
                            style={{
                                flexDirection: 'row',
                                marginTop: SIZES.base,
                            }}
                        >
                            {/* Pick up  */}
                            <View
                                style={{
                                    borderColor: appTheme.textColor,
                                    borderWidth: 1,
                                    borderRadius: 20,
                                    paddingHorizontal: SIZES.radius,
                                    paddingVertical: 5
                                }}
                            >
                                <Text style={{
                                    color: appTheme.textColor,
                                    ...FONTS.body3,
                                }}>Pick-Up</Text>
                            </View>
                            {/* Delivery  */}
                            <View
                                style={{
                                    borderColor: appTheme.textColor,
                                    borderWidth: 1,
                                    borderRadius: 20,
                                    paddingHorizontal: SIZES.radius,
                                    paddingVertical: 5,
                                    marginLeft: 10
                                }}
                            >
                                <Text style={{
                                    color: appTheme.textColor,
                                    ...FONTS.body3,
                                }}>Delivery</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}

            />
        )
    }

    return (
        <View style={styles.container}>
            {/* Header  */}
            {renderHeader()}
            {/* Detail  */}
            <View style={{
                flex: 1,
                backgroundColor: appTheme.backgroundColor,
                marginTop: -50,
                borderTopLeftRadius: SIZES.radius * 2,
                borderTopRightRadius: SIZES.radius * 2,
                padding: SIZES.padding
            }}>
                {renderTopBarSection()}
                {renderSearchBar()}
                {renderLocationList()}
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

export default connect(mapStateToProps, mapDispatchToProps)(Location)