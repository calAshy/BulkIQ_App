import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet,SafeAreaView, ScrollView, Alert } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth, db } from '../../Firebase/firebase.js';
import SecondaryButton from '../../components/SecondaryButton.js';
import { fetchUsername } from '../../Firebase/userService.js';
import { formattedDate } from '../../utils/CurrentDate.js';
import { BacckgroundLinearGradient } from '../../utils/BackgroundLinearGradient.js';

export default function HomeScreen({ navigation }) {

    const submitSignOut = async () => {
        try{
            await signOut( auth );
        } catch (err) {
            alert("Signing out Error", err);
        }
    };

    //Retrieve and display username code
    useEffect(() => {
        const getUsername = async () => {
            const name = await fetchUsername();
            if (name) setUsername(name);
        };
        getUsername();
        }, []);
    const [username, setUsername] = useState('');
    //Retrieve and display username code

    return (
        <BackgroundLinearGradient>
            <SafeAreaView style={styles.container}>
                <ScrollView style={ styles.scrollView }>
                    
                    <View style={styles.IntroductionContainer }>
                        <View style={styles.WelcomeAndDateText}>
                            <Text style={styles.WelcomeText}>Welcome, {username}!</Text>
                            <Text style={styles.DateText}>{formattedDate}</Text>
                        </View>

                        <SecondaryButton 
                            title= "Start a workout" onPress={submitSignOut}>
                        </SecondaryButton>
                        
                    </View>


{/* 
                    <View style={styles.ButtonPositioning}>

                        <AppButton title = "Back to Welcome Screen" onPress={(submitSignOut)}>
                        </AppButton>

                    </View> */}




                </ScrollView>
            </SafeAreaView>

        </BackgroundLinearGradient>
    )
};

const styles = StyleSheet.create({

    scrollView: {
        width: '100%',
        //borderColor: 'green',
        //borderWidth: 2,
    },

    container: { //Safearea View Container.
        flex:1, 
        justifyContent: 'space-between',
        alignItems: 'center', 
        width: '100%',
        //borderColor: 'red',
        //borderWidth: 2,
    },

    IntroductionContainer: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 10, 
        marginVertical: 20,
    },

    WelcomeText: {
        color: 'white',
        fontWeight: 800,
        fontSize: 20,
    },
    DateText: {
        color: 'white',
        fontWeight: 300,
        fontSize: 15,
    },

    ButtonPositioning: {
        flex:0,
        marginBottom: 30,
    },
})