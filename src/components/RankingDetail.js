import React, { useContext, useState } from "react";
import { View, FlatList } from "react-native";
import RankingScreen from "../components/RankingScreen";
import { StoreContext } from "../stores/animalStore";
import animalsState from "../json/animal.json";
const RankingDetail = ({ navigation }) => {
    const { animalsState } = useContext(StoreContext);
    const [animals, setAnimals] = animalsState;
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={animals}
                renderItem={({ item }) =>
                    <RankingScreen
                        apple={item}
                        navigation={navigation}
                    />}
                keyExtractor={item => item.title}
            />
        </View>
    );
};

export default RankingDetail;
