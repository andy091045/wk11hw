import React, { useState } from 'react';
import { View, Image, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { setConfigurationAsync } from 'expo/build/AR';


const HomeScreen = ({ back, navigation }) => {
    const [count, setCount] = useState(15815);
    return (
        <ScrollView>
            <View style={styles.container}>


                <View style={styles.imageContainer}>
                    <View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Profile')}
                        >
                            <Image
                                source={require('../Assets/107ed00af16a4328a7e19acdb31e3012.png')}
                            />
                        </TouchableOpacity>
                        <View style={styles.likeContent}>
                            <TouchableOpacity
                                onPress={() => setCount((count + 1))}
                            >
                                <Image
                                    style={styles.heart}
                                    source={require('../Assets/heart.png')}
                                />
                            </TouchableOpacity>

                        </View>
                    </View>
                    <View>
                        <Image
                            source={require('../Assets/7008f379e297ebdc31af7caaa2f6fb78.png')}
                        />
                        <View style={styles.likeContent}>
                            <Image
                                style={styles.heart}
                                source={require('../Assets/heart.png')}
                            />
                        </View>

                    </View>
                    <View>
                        <Image
                            source={require('../Assets/50612833fe476e17428fffcb98077423.png')}
                        />
                        <View style={styles.likeContent}>
                            <Image
                                style={styles.heart}
                                source={require('../Assets/heart.png')}
                            />
                        </View>
                    </View>
                </View>


                <View style={styles.imageContainer}>
                    <View>
                        <Image
                            source={require('../Assets/05606bcffd0b855c97699fdc4ca7978a.png')}
                        />
                        <View style={styles.likeContent}>
                            <Image
                                style={styles.heart}
                                source={require('../Assets/heart.png')}
                            />
                        </View>
                    </View>
                    <View>
                        <Image
                            source={require('../Assets/shibata.png')}
                        />
                        <View style={styles.likeContent}>
                            <Image
                                style={styles.heart}
                                source={require('../Assets/heart.png')}
                            />
                        </View>
                    </View>
                    <View>
                        <Image
                            source={require('../Assets/21163_0_620.png')}
                        />
                        <View style={styles.likeContent}>
                            <Image
                                style={styles.heart}
                                source={require('../Assets/heart.png')}
                            />
                        </View>
                    </View>
                </View>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // height: 750,
        backgroundColor: "#E3E3E3",
        flexDirection: 'row',
    },
    imageContainer: {
        marginLeft: 5,
        marginRight: 5,
        // justifyContent: 'space-between',
        // backgroundColor: '#000',
    },
    likeContent: {
        height: 60,
        width: 196,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        backgroundColor: '#7B7B7B',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        marginBottom: 10,
    },
    heart: {
        marginRight: 10,
    }
})
export default HomeScreen;