// import React, { useState } from 'react';
import React, { useContext, useState, useRef } from "react";
import { View, Image, ScrollView, Text, StyleSheet, TouchableOpacity, AsyncStorage, Dimensions, Animated } from 'react-native';
import { setConfigurationAsync } from 'expo/build/AR';
import heartImage from "../Assets/heart.png"
import heartImageUnfill from "../Assets/heart_unfill.png"
const COUNTER_KEY = "IS_HEART_PRESS";
import { StoreContext } from "../stores/animalStore";
import { render } from "react-dom";

const { width } = Dimensions.get("window");

var i = 0;

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
            i = 1;
        }
        else {
            imgSrc = heartImageUnfill;
            i = 2;
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
        const animalsCopy = [...animals];
        const seal1Copy = animalsCopy[0];
        if (i % 2 != 0) { seal1Copy.liked = seal1Copy.liked - 1; } else { seal1Copy.liked = seal1Copy.liked + 1; }

        animalsCopy[0] = seal1Copy;
        setAnimals(animalsCopy);
    }

    const translateX = useRef(new Animated.Value(0)).current;
    const translateXTabOne = useRef(new Animated.Value(0)).current;
    const translateXTabTwo = useRef(new Animated.Value(width)).current;
    const [xTabOne, setXTabOne] = useState(0);
    const [xTabTwo, setXTabTwo] = useState(0);
    const [active, setActive] = useState(0);
    const [translateY, setTranslateY] = useState(0);

    const handleSlide = type => {
        Animated.spring(translateX, {
            toValue: type,
            duration: 100
        }).start();
        if (active === 0) {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: 0,
                    duration: 100
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: width,
                    duration: 100
                }).start(),

            ]);
        } else {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: -width,
                    duration: 100
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: 0,
                    duration: 100
                }).start(),

            ]);
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: "#E3E3E3", height: 6277 }}>
            
                <View
                    style={{
                        flexDirection: "row",
                        marginRight:30,
                        marginTop: 40,
                        height: 54,
                        position: "relative"
                    }}
                >
                    <Animated.View
                        style={{
                            position: "absolute",
                            width: 140,
                            height: 35,
                            marginLeft: 45,
                            backgroundColor: "#fff",
                            borderRadius: 15,
                            top: 0,
                            left: 0,
                            height: 40,

                            transform: [
                                {
                                    translateX
                                }
                            ]
                        }}
                    >
                        <Image source={"./assets/bubble.png"} />
                    </Animated.View>
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: -15,

                        }}
                        onLayout={event => setXTabOne(event.nativeEvent.layout.x)}
                        onPress={() => {
                            setActive(0);
                            handleSlide(xTabOne)
                        }}
                    >


                        <Text
                            style={{
                                color: active === 0 ? "#4E5C69" : "#fff",
                                fontWeight: 'bold',
                                fontSize: 20,
                                marginLeft: 40,
                            }}
                        >
                            Your Favorite
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: -15,

                        }}
                        onLayout={event => setXTabTwo(event.nativeEvent.layout.x)}
                        onPress={() => {
                            setActive(1);
                            handleSlide(xTabTwo)
                        }}
                    >
                        <Text
                            style={{
                                color: active === 0 ? "#fff" : "#4E5C69",
                                fontWeight: 'bold',
                                fontSize: 20,
                                marginLeft:40,
                            }}
                        >
                            Following
                        </Text>
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    <Animated.View
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            transform: [
                                {
                                    translateX: translateXTabOne
                                }
                            ]
                        }}
                        onLayout={event => setTranslateY(event.nativeEvent.layout.height)}
                    >
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
                                                onPress={() => {
                                                    const animalsCopy = [...animals];
                                                    const seal1Copy = animalsCopy[0];
                                                    seal1Copy.liked = seal1Copy.liked + 1;
                                                    animalsCopy[0] = seal1Copy;
                                                    setAnimals(animalsCopy)
                                                }}
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
                    </Animated.View>

                    <Animated.View
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            transform: [
                                {
                                    translateX: translateXTabTwo
                                },
                                {
                                    translateY: -translateY
                                }
                            ]
                        }}
                    >
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
                                                onPress={() => {
                                                    const animalsCopy = [...animals];
                                                    const seal1Copy = animalsCopy[0];
                                                    seal1Copy.liked = seal1Copy.liked + 1;
                                                    animalsCopy[0] = seal1Copy;
                                                    setAnimals(animalsCopy)
                                                }}
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
                    </Animated.View>
                </ScrollView>
            </View>
        
    );
}



// return (
//     <ScrollView>
//         <View style={styles.container}>


//             <View style={styles.imageContainer}>
//                 <View>
//                     <TouchableOpacity
//                         onPress={() => navigation.navigate('Profile')}
//                     >
//                         <Image
//                             source={require('../Assets/107ed00af16a4328a7e19acdb31e3012.png')}
//                         />
//                     </TouchableOpacity>
//                     <View style={styles.likeContent}>
//                         <TouchableOpacity
//                             onPress={plusOneFn}
//                         >
//                             {renderImage()}
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//                 <View>
//                     <Image
//                         source={require('../Assets/7008f379e297ebdc31af7caaa2f6fb78.png')}
//                     />
//                     <View style={styles.likeContent}>
//                         <TouchableOpacity
//                             // value={animals.liked}
//                             onPress={() => {
//                                 const animalsCopy = [...animals];
//                                 const seal1Copy = animalsCopy[0];
//                                 seal1Copy.liked = seal1Copy.liked + 1;
//                                 animalsCopy[0] = seal1Copy;
//                                 setAnimals(animalsCopy)
//                             }}
//                         >
//                             <Image
//                                 style={styles.heart}
//                                 source={require('../Assets/heart.png')}
//                             />
//                             {/* <Text>{animals.liked}</Text> */}
//                         </TouchableOpacity>

//                     </View>

//                 </View>
//                 <View>
//                     <Image
//                         source={require('../Assets/50612833fe476e17428fffcb98077423.png')}
//                     />
//                     <View style={styles.likeContent}>
//                         <Image
//                             style={styles.heart}
//                             source={require('../Assets/heart.png')}
//                         />
//                     </View>
//                 </View>
//             </View>


//             <View style={styles.imageContainer}>
//                 <View>
//                     <Image
//                         source={require('../Assets/05606bcffd0b855c97699fdc4ca7978a.png')}
//                     />
//                     <View style={styles.likeContent}>
//                         <Image
//                             style={styles.heart}
//                             source={require('../Assets/heart.png')}
//                         />
//                     </View>
//                 </View>
//                 <View>
//                     <Image
//                         source={require('../Assets/shibata.png')}
//                     />
//                     <View style={styles.likeContent}>
//                         <Image
//                             style={styles.heart}
//                             source={require('../Assets/heart.png')}
//                         />
//                     </View>
//                 </View>
//                 <View>
//                     <Image
//                         source={require('../Assets/21163_0_620.png')}
//                     />
//                     <View style={styles.likeContent}>
//                         <Image
//                             style={styles.heart}
//                             source={require('../Assets/heart.png')}
//                         />
//                     </View>
//                 </View>
//             </View>

//         </View>
//     </ScrollView>
// );
//     }

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