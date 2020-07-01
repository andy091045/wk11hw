import React, { useState, useContext } from "react";
import * as firebase from "firebase";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { Button, Text } from "react-native-elements";
import Input from "../components/Input";
import { StoreContext } from "../stores/animalStore";

// Make a component
const LoginScreen = ({ navigation }) => {
    const { isLoginState } = useContext(StoreContext);
    const [isLogin, setIsLogin] = isLoginState;
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const onSignIn = async () => {
        setError(" ");
        setLoading(true);
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            setEmail("");
            setPassword("");
            setError("");
            setIsLogin(true);
        } catch (err1) {
            try {
                await firebase.auth().createUserWithEmailAndPassword(email, password);
                setIsLogin(true);
                setEmail("");
                setPassword("");
                setError("");
            } catch (err2) {
                setError(err2.message);
            }
        } finally {
            setLoading(false);
        }
    };

    const renderButton = () => {
        return loading ? (
            <ActivityIndicator size="large" style={{ marginTop: 20 }} />
        ) : (
                <Button
                    title="comfirm"
                    buttonStyle={{ backgroundColor: "#000000", borderRadius: 30, height: 60, width: 200, marginLeft: 80}}
                    containerStyle={{ padding: 10, }}
                    onPress={onSignIn}
                />
            );
    };

    return (
        <View>
            <View style={styles.formStyle}>
                <Text style={styles.loginStyle}>LOG IN</Text>
                <View style={styles.inputStyle}>
                    <Input
                        labelStyle={{ marginTop: 20 }}

                        placeholder="account"
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={(email) => setEmail(email)}
                    />
                </View>
                <View style={styles.inputStyle}>
                    <Input
                        labelStyle={{ marginTop: 20 }}

                        placeholder="password"
                        secureTextEntry
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={password}
                        onChangeText={(password) => setPassword(password)}
                    />
                </View>
                <Text style={styles.forgetStyle}>forget password ?</Text>
                {renderButton()}
                <Text style={{ padding: 10, fontSize: 16, color: "red" }}>{error}</Text>
            </View>
            {/* <View style={styles.formStyle}>
                <Button
                    title="Sign in with Facebook"
                    buttonStyle={{ backgroundColor: "#39579A" }}
                    containerStyle={{ padding: 5 }}
                />
            </View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    formStyle: {
        height: 400,
        width: 380,
        marginLeft: 17,
        marginTop: 150,
        borderRadius: 20,
        backgroundColor: "#878787",
    },
    loginStyle: {
        marginTop: 30,
        marginLeft: 145,
        marginBottom: 30,
        fontWeight: 'bold',
        fontSize: 30,
        color: "#FFFFFF",
    },
    inputStyle: {
        marginLeft: 90,
        marginVertical: 5,
        height: 60,
        width: 200,
        borderRadius: 15,
        backgroundColor: "#FFFFFF",
    },
    forgetStyle: {
        marginLeft: 90,
        color: "#FFFFFF",
    }
});

export default LoginScreen;
