import React from 'react';
import { View, Text, StyleSheet,SafeAreaView } from 'react-native';
import AppButton from '../../components/AppButton';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoadScreen() {
    return (
        <LinearGradient
            colors={['#1d1d1d', '#0a0a0a', '#0a0a0a', '#1d1d1d']}
            style = {styles.gradientStyles}
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.TitleAndTagLineStyles}>
                    <Text style={styles.Wordmark}>BULK IQ</Text>
                    <Text style={styles.text}>Lets get Started!</Text>
                </View>
                <View>
                    
                </View>
                <View style={styles.ButtonPositioning}>
                    <AppButton title = "SIGN UP" variant='dark'></AppButton>
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
        alignItems: 'center', 
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

    ButtonPositioning: {
        flex:0,
        marginBottom: 30,
    },
})