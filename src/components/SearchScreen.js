import React from 'react';
import { View, Image, ScrollView, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
const SearchScreen = () => {
    let region = {
        longitude: 121.544637,
        latitude: 25.024624,
        longitudeDelta: 0.01,
        latitudeDelta: 0.02,
    };
    return (
        <ScrollView>
            <View>
                <View style={styles.textContainer}>
                    <Text style={styles.titleStyle}>Recently Search</Text>
                    <View style={styles.searchWordContainer}>
                        <Text style={styles.searchWordStyle}>Seal</Text>
                        <Text style={styles.searchWordStyle}>Fox</Text>
                        <Text style={styles.searchWordStyle}>Shibata Inu</Text>
                    </View>
                    <Text style={styles.titleStyle}>You May Like</Text>

                </View>

                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <View>
                            <Image
                                source={require('../Assets/be4dbba1644de434fd0d4bc1260ca38d.png')}
                            />
                            <View style={styles.likeContent}>
                                <Text style={styles.tagStyle}>Seal</Text>
                            </View>
                        </View>
                        <View>
                            <Image
                                source={require('../Assets/black-cat.png')}
                            />
                            <View style={styles.likeContent}>
                                <Text style={styles.tagStyle}>Cat</Text>
                            </View>
                        </View>

                    </View>

                    <View style={styles.imageContainer}>
                        <View>
                            <Image
                                source={require('../Assets/59be12bdc0fd9260308415811d35c8b3.png')}
                            />
                            <View style={styles.likeContent}>
                                <Text style={styles.tagStyle}>Fox</Text>
                            </View>
                        </View>


                    </View>
                </View>
                <View>
                    <Image
                        source={require('../Assets/shibata.png')}
                    />
                    <View style={styles.likeContent}>
                        <Text style={styles.tagStyle}>Shibata Inu</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    textContainer: {
        backgroundColor: '#E3E3E3',
        paddingLeft: 15,
    },
    titleStyle: {
        fontSize: 20,
        color: '#7B7B7B',
        fontWeight: 'bold'
    },
    searchWordContainer: {
        marginLeft: 15,
    },
    searchWordStyle: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold'
    },
    container: {
        flex: 1,
        backgroundColor: "#E3E3E3",
        flexDirection: 'row',
    },
    imageContainer: {
        marginLeft: 5,
        marginRight: 5,
        // backgroundColor: '#000',
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
    tagStyle: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    }
})
export default SearchScreen;