// import React, { useState } from 'react';
import React, { useContext, useState } from "react";
import { View, Image, ScrollView, Text, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native';
import { setConfigurationAsync } from 'expo/build/AR';
import heartImage from "../Assets/heart.png"
import heartImageUnfill from "../Assets/heart_unfill.png"
const COUNTER_KEY = "IS_HEART_PRESS";
import { StoreContext } from "../stores/animalStore";

const HomeScreen = ({ back, navigation }) => {
    const { animalsState } = useContext(StoreContext);
    const [animals, setAnimals] = animalsState;
    // const [count, setCount] = useState(15815);
    const initHeat = async () => {
        try {
            let result = await AsyncStorage.getItem(COUNTER_KEY);
            result = JSON.parse(result);
            if (result != null) {
                setValue(result);
            }
            else {
                setValue(heart);
            }
        }
        catch (error) {
            console.warn(error);
        }
    };

    const [heart, setHeart] = useState(false); /*宣告useState*/

    initHeat();

    function renderImage() { /*判斷用哪張圖片渲染*/
        let imgSrc = ''
        if (heart) {
            imgSrc = heartImage;
        }
        else {
            imgSrc = heartImageUnfill;
        }
        return (
            <Image
                style={styles.heart}
                source={imgSrc}
            />
        );
    }


    setValue = async (b) => {
        try {
            await AsyncStorage.setItem(COUNTER_KEY, JSON.stringify(b)); /*設定新內容*/
        }
        catch (error) {
        }
        finally {
            setHeart(b);
        }
    };

    const plusOneFn = () => { /*給button用的函式*/
        setValue(!heart);
    }

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
                                onPress={plusOneFn}
                            >
                                {renderImage()}
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <Image
                            source={require('../Assets/7008f379e297ebdc31af7caaa2f6fb78.png')}
                        />
                        <View style={styles.likeContent}>
                            <TouchableOpacity
                                // value={animals.liked}
                                onPress={() => setAnimals(animals.liked + 1)}
                            >
                                <Image
                                    style={styles.heart}
                                    source={require('../Assets/heart.png')}
                                />
                                {/* <Text>{animals.liked}</Text> */}
                            </TouchableOpacity>

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