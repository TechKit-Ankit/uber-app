import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';


const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        setLoading(true);
        try {
            await auth().signInWithEmailAndPassword(email, password);
            // Handle successful login (e.g., navigate to the home screen)
        } catch (error) {
            console.error(error);
            // Handle login errors (e.g., display an error message)
        }
        setLoading(false);
    };

    const handleSignUp = async () => {
        try {
            await auth().createUserWithEmailAndPassword(email, password);
            // Handle successful signup (e.g., navigate to the home screen)
        } catch (error) {
            console.error(error);
            // Handle signup errors (e.g., display an error message)
        }
    };

    return (
        <View style={styles.container}>
            <Icon name="user-circle" size={70} color="#3498db" />
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                autoCapitalize="none"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            {loading ? <ActivityIndicator size="large" color="#3498db" /> :
                <>
                    <Button title="Login" onPress={handleLogin} style={styles.button} />
                    <Button title="Sign Up" onPress={handleSignUp} style={styles.button} />
                </>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color: '#3498db',
    },
    input: {
        width: '80%',
        height: 40,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 5,
    },
});

export default LoginScreen;
