import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet,SafeAreaView, ScrollView, Alert, Button } from 'react-native';
import SecondaryButton from '../../components/SecondaryButton.js';
import { fetchUsername } from '../../Firebase/userService.js';
import { formattedDate } from '../../utils/CurrentDate.js';
import { BackgroundLinearGradient } from '../../utils/BackgroundLinearGradient.js';
import { submitSignOut } from '../../Firebase/authController.js';
import BottomNav from '../../components/NavBar.js';

export default function HomeScreen({ navigation }) {

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
                        <Button 
                            title= "Start a workout" onPress={() => navigation.navigate('Workout Form')}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
            <BottomNav />
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