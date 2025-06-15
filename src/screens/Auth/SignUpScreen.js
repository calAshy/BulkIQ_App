import React, { useState } from 'react';
import { View, Text, StyleSheet,SafeAreaView, Pressable } from 'react-native';
import AppButton from '../../components/AppButton';
import { LinearGradient } from 'expo-linear-gradient';
import FormInput from '../../components/FormInput';
import { useForm } from 'react-hook-form';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';


export default function SignUpScreen({ navigation }) {

    const {control, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState('');

    //This is the logic for the SignUp Auth
    const handleSignUp = async ( data ) => {
        const {email, password } = data;

            try {
                await createUserWithEmailAndPassword( auth, email, password);
            } catch (err) {
                setError(err.message);
            }
    };

    return (
        <LinearGradient
            colors={['#1d1d1d', '#0a0a0a', '#0a0a0a', '#1d1d1d']}
            style = {styles.gradientStyles}
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.TitleAndTagLineStyles}>
                    <Text style={styles.Wordmark}>BULK IQ</Text>
                    <Text style={styles.text}>Sign Up</Text>
                </View>
                <View style={styles.FormContainer}>
                    <FormInput
                        name="name"
                        control={control}
                        placeholder="Username"
                        rules={{ required: "Name is required" }}
                    />
                    <FormInput
                        name="email"
                        control={control}
                        placeholder="Email"
                        rules={{ required: "Email is required" }}
                    />
                    <FormInput
                        name="password"
                        control={control}
                        placeholder="Password"
                        secureTextEntry
                        rules={{ required: "Password is required" }}
                    />
                    {/*
                    <View style={styles.divider} />
                    <FormInput
                        name="age"
                        control={control}
                        placeholder="Age"
                        rules={{ required: "Age is required" }}
                    />
                    <FormInput
                        name="Weight"
                        control={control}
                        placeholder="Current Weight"
                        rules={{ required: "Weight is required" }}
                    />
                    <FormInput
                        name="Height"
                        control={control}
                        placeholder="Enter a height"
                        rules={{ required: "Height is required" }}
                    />
                    */}
                </View>
                <View style={styles.ButtonPositioning}>
                    <AppButton 
                        title = "SIGN UP" 
                        variant='dark'
                        onPress={handleSubmit(handleSignUp)}
                    />
                </View>
                <View style={styles.LoginTextContainer}>
                    <Text style={styles.text}>Already have an account?{' '}
                            <Text style={styles.LoginLink} onPress={() => navigation.navigate("Login Screen")}>
                                Log In
                            </Text>
                    </Text>
                </View>
            </SafeAreaView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    gradientStyles:{
        flex:1, 
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center', 
    },
    container: {
        flex:1, 
        justifyContent: 'space-between',
        alignItems: 'strech', 
        width: '100%'
    },

    TitleAndTagLineStyles: {
        flex: 1,
        height: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fffff',
    },

    Wordmark: {
        color: 'white',
        fontWeight: 800,
        fontSize: 40,
        marginBottom: 8,
    },

    text: {
        color: 'white',
    },

    FormContainer: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginBottom: 120,
    },

    ButtonPositioning: {
        flex:0,
        marginBottom: 30,
        alignItems: 'center',
    },

    divider: {
        height: 1,
        backgroundColor: 'white',
        width: '100%', 
        marginVertical: 20,
        marginLeft: 10,
        MarginRight: 10,
        justifyContent: 'cemter',
    },

    LoginTextContainer: {
        alignItems: 'center',
    },

    LoginLink: {
        fontWeight: 'bold',
        color: 'white',
    },
})