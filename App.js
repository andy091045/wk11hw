import React, { useContext, useRef } from 'react';
import * as firebase from "firebase";
import { StyleSheet, Text, View, Image, Platform, AsyncStorage, Animated, Button } from 'react-native';
import { StoreProvider, StoreContext } from "./src/stores/animalStore";
import MapView from 'react-native-maps';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from "./src/components/HomeScreen"
import SearchScreen from "./src/components/SearchScreen"
import RankingDetail from "./src/components/RankingDetail"
import ProfileScreen from "./src/components/ProfileScreen"
import LoginScreen from "./src/components/LoginScreen";
import UserScreen from "./src/components/UserScreen";

const PERSISTENCE_KEY = "ALBUMS_NAVIGATION_STATE";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const firebaseConfig = {
  apiKey: "AIzaSyDfvXChhILy2gc8UTHpd00Jt4ie-EDXFz0",
  authDomain: "tinyzoo-b8980.firebaseapp.com",
  databaseURL: "https://tinyzoo-b8980.firebaseio.com",
  projectId: "tinyzoo-b8980",
  storageBucket: "tinyzoo-b8980.appspot.com",
  messagingSenderId: "494210765558",
  appId: "1:494210765558:web:ed6f23ca0c1cb44a9b12d7",
  measurementId: "G-NYBEKYN9GW"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}



const HomeStack = () => {

  return (
    <Stack.Navigator>

      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ back }) => ({
          headerShown: false,
          title: "",
          headerStyle: {
            backgroundColor: '#E3E3E3',
          },
          headerLeft: () => (
            <View style={styles.headerLeftContainer}>
              <Text style={styles.headerLeftTextStyle}>Your Favorite</Text>
            </View>
          ),
          headerRight: () => (
            <View style={styles.headerRightContainer}>
              <Text style={styles.headerRightTextStyle}>Following</Text>
            </View>
          ),
        })}
      />

      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ route }) => ({
          headerShown: false,
          searchContainer: () => (
            <View style={{ backgroundColor: '#000' }}>
            </View>
          ),
        })}
      />

    </Stack.Navigator>
  );
}

const SearchStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#E3E3E3',
          },
          headerLeft: () => (
            <View style={styles.headerSearchContainer}>
              <Image
                style={{ height: 30, width: 30, marginRight: 10 }}
                source={require('./src/Assets/search-white-1.png')}
              />
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  )
}

const App = () => {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const { isLoginState } = useContext(StoreContext);
  const [isLogin, setIsLogin] = isLoginState;
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // SplashScreen.preventAutoHide();
        const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
        const state = JSON.parse(savedStateString);
        setInitialNavigationState(state);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        // SplashScreen.hide();
      }
    }
    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return isLogin ? (

      <NavigationContainer
        initialState={initialNavigationState}
        onStateChange={(state) =>
          AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
        }>

        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused
                  ? require('./src/Assets/owl-active.png') :
                  require('./src/Assets/グループ-1.png');
              } else if (route.name === 'Rank') {
                iconName = focused
                  ? require('./src/Assets/crown-5.png') :
                  require('./src/Assets/crown-6.png');
              } else if (route.name == 'Search') {
                iconName = focused
                  ? require('./src/Assets/search-white-2.png') :
                  require('./src/Assets/search-white-3.png');
              }
              return (
                <Image
                  style={{ width: 30, height: 30 }}
                  source={iconName}
                />
              );
            },
          })}
          tabBarOptions={{
            activeTintColor: '#000',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="Search" component={SearchStack} />
          <Tab.Screen name="Rank" component={RankingDetail} />
        </Tab.Navigator>
      </NavigationContainer>
    ) : (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                headerShown: false
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
  }
}

const styles = StyleSheet.create({
  headerLeftContainer: {
    height: 35,
    width: 130,
    marginLeft: 90,
    backgroundColor: '#fff',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerLeftButtonContainer: {
    height: 35,
    width: 130,
    marginLeft: 90,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerLeftTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#7B7B7B',
  },
  headerRightContainer: {
    marginRight: 90,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerRightTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerSearchContainer: {
    width: 380,
    height: 35,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    backgroundColor: '#878787',
    borderRadius: 15,
    marginRight: 15, /*flexDirection反向，這裡也要反向*/
  }
})

export default () => {
  return (
    <StoreProvider>
      <App />
    </StoreProvider>
  );
};

// export default App;