import React from "react";
import { View, FlatList } from "react-native";

import RankingScreen from "../components/RankingScreen";
import animalData from "../json/animal.json";

const RankingDetail = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={animalData.animalList}
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
