import React from 'react';
import { View, Image, ScrollView, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ProfileScreen = ({ route,navigation }) => {
    return (
        <ScrollView>
            <View style={styles.container}>

                <View style={{ alignItems: 'center' ,marginTop: 20 }}>
                    <Image
                        source={require('../Assets/アセット-3.png')}
                    />

                    <View style={styles.profileContentContainer}>

                        <View style={{ marginLeft: 10, marginTop: 10 }}>
                            <Text style={styles.profileCategoryTextStyle}>Name</Text>
                            <Text style={styles.profileCategoryTextStyle}>Gender</Text>
                            <Text style={styles.profileCategoryTextStyle}>Category</Text>
                            <Text style={styles.profileCategoryTextStyle}>Location</Text>
                        </View>

                        <View style={{ marginLeft: 20, marginTop: 10 }}>
                            <Text style={styles.profileContentTextStyle}>Seal</Text>
                            <Text style={styles.profileContentTextStyle}>Male</Text>
                            <Text style={styles.profileContentTextStyle}>Seal</Text>
                            <Text style={styles.profileContentTextStyle}>Taipei Zoo</Text>
                        </View>
                    </View>

                    <View style={styles.introductionContentContainer}>
                        <View style={{ marginLeft: 10 ,marginRight: 10 ,marginTop: 10 }}>
                            <Text style={styles.profileCategoryTextStyle}>
                                海豹是對鰭足亞目種海豹科動物的統稱，這是一類身體成紡錘體型、四肢特化成鰭狀的哺乳動物。
                            </Text>
                        </View>
                    </View>

                    {/* 把header放在最上方  */}
                    <View style={styles.header}>
                        <View>
                            <View style={styles.headerTitleContainer}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Home')}
                                >
                                    <Image
                                        source={require('../Assets/keyboard_arrow_down-white-24dp.png')}
                                    />
                                </TouchableOpacity>
                                <Text style={styles.headerTitleStyle}>Seal</Text>
                            </View>
                            <Image
                                style={styles.headerHeartStyle}
                                source={require('../Assets/heart.png')}
                            />
                            <Text style={styles.likeNumberTextStyle}>158,15k</Text>
                        </View>
                    </View>

                </View>
                {/* </View> */}



            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {    /*整個背景*/
        flex: 1,
        backgroundColor: "#E3E3E3",
    },
    header: {   /*上方橢圓部分*/
        // marginLeft: 70,
        marginTop: -970,
        height: 280,
        width: 280,
        backgroundColor: '#878787',
        borderRadius: 300,
        transform: [
            { scaleX: 2 }
        ],
        flexDirection: 'column',
        alignItems: 'center',
    },
    headerTitleContainer: {
        transform: [
            { scaleX: 0.5 }
        ],
        marginRight: 100,
        marginTop: 180,
        fontSize: 40,
        color: '#fff',
        fontWeight: 'bold',
        flexDirection: 'row',
    },
    headerTitleStyle: { /*Seal部分*/
        paddingLeft: 120,
        fontSize: 40,
        color: '#fff',
        fontWeight: 'bold',
    },
    headerHeartStyle: { /*header愛心*/
        marginLeft: 145,
        marginTop: -37,
        transform: [
            { scaleX: 0.5 }
        ],
    },
    likeNumberTextStyle: { /*likes數*/
        transform: [
            { scaleX: 0.5 }
        ],
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 83,
    },
    profileContainer: {
        transform: [
            { scaleX: 0.5 }
        ],
        // marginLeft: 10,
        // marginTop: -40,
    },
    profileContentContainer: {
        height: 165,
        width: 400,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        backgroundColor: '#7B7B7B',
        flexDirection: 'row',
        marginBottom: 10,
    },
    profileCategoryTextStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    profileContentTextStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#BCBCBC',
    },
    introductionContentContainer: {
        height: 165,
        width: 400,
        borderRadius: 15,
        backgroundColor: '#7B7B7B',
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: -8,
    },
})
export default ProfileScreen;