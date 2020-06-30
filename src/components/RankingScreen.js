import React from 'react';
import { View, Image, ScrollView, Text, StyleSheet, ImageBackground } from 'react-native';

const RankingScreen = ({ apple, navigation }) => {
    return (
        <ScrollView>
            <View style={styles.container}>

                <View style={styles.header}>
                    <View>
                        <Text style={styles.headerTitleStyle}>TOP 3</Text>
                    </View>
                </View>


                <View style={styles.ChampionContainer}>
                    <Image
                        style={styles.leftFeather}
                        source={require('../Assets/羽毛Left.png')}
                    />
                    <View>
                        <View style={styles.crownContainer}>
                            <ImageBackground
                                style={styles.crownImageStyle}
                                source={require('../Assets/crown-2.png')}
                            >
                                <Text style={styles.rankingTextStyle}>1</Text>
                            </ImageBackground>
                        </View>
                        <Image
                            source={require('../Assets/アセット-1.png')}
                        />
                        <View style={styles.likeContent}>
                            <Image
                                source={require('../Assets/heart.png')}
                            />
                            <Text style={styles.likeNumberTextStyle}>{apple.liked}</Text>
                        </View>
                    </View>
                    <Image
                        style={styles.rightFeather}
                        source={require("../Assets/羽毛Right.png")}
                    />
                </View>


                <View style={styles.secondThirdContainer}>
                    <View>
                        <View style={styles.crownContainer}>
                            <ImageBackground
                                style={styles.crownImageStyle}
                                source={require('../Assets/crown-2.png')}
                            >
                                <Text style={styles.rankingTextStyle}>2</Text>
                            </ImageBackground>
                        </View>
                        <Image
                            source={require('../Assets/be4dbba1644de434fd0d4bc1260ca38d.png')}
                        />
                        <View style={styles.likeContent}>
                            <Image
                                source={require('../Assets/heart.png')}
                            />
                            <Text style={styles.likeNumberTextStyle}>158,00</Text>
                        </View>
                    </View>
                    <View>
                        <View style={styles.crownContainer}>
                            <ImageBackground
                                style={styles.crownImageStyle}
                                source={require('../Assets/crown-2.png')}
                            >
                                <Text style={styles.rankingTextStyle}>3</Text>
                            </ImageBackground>
                        </View>
                        <Image
                            source={require('../Assets/05606bcffd0b855c97699fdc4ca7978a.png')}
                        />
                        <View style={styles.likeContent}>
                            <Image
                                source={require('../Assets/heart.png')}
                            />
                            <Text style={styles.likeNumberTextStyle}>148,15</Text>
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
        backgroundColor: "#E3E3E3",
    },
    header: {
        marginLeft: 70,
        marginTop: -200,
        height: 280,
        width: 280,
        backgroundColor: '#878787',
        borderRadius: 300,
        transform: [
            { scaleX: 2 }
        ],
        flexDirection: 'column-reverse',
        alignItems: 'center',
    },
    headerTitleStyle: {
        marginBottom: 20,
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
        transform: [
            { scaleX: 0.5 }
        ],
    },
    ChampionContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
    },
    leftFeather: {
        marginRight: 10,
    },
    rightFeather: {
        marginLeft: 10,
    },
    imageContainer: {
        marginLeft: 5,
        marginRight: 5,
        // backgroundColor: '#000',
    },
    crownContainer: {
        height: 60,
        width: 196,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        backgroundColor: '#7B7B7B',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom: 10,
    },
    crownImageStyle: {
        height: 40,
        width: 45,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rankingTextStyle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#7B7B7B',
        marginTop: 8,
    },
    likeContent: {
        height: 60,
        width: 196,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        backgroundColor: '#7B7B7B',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    likeNumberTextStyle: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 10,
    },
    secondThirdContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 10,
        marginRight: 10,
    }
})
export default RankingScreen;