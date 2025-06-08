import React from 'react';
import { View, Text, StyleSheet,SafeAreaView } from 'react-native';
import AppButton from '../../components/AppButton';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoadScreen() {
    return (
        <LinearGradient
            colors={['#212121', '#0a0a0a', '#0a0a0a', '#212121']}
            style = {styles.gradientStyles}
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.TitleAndTagLineStyles}>
                    <Text>BULK IQ</Text>
                    <Text>Ready to start smashing those goals?</Text>
                </View>
                <View style={styles.ButtonPositioning}>
                    <AppButton title = "Login"></AppButton>
                    <AppButton title = "Sign Up" variant='dark'></AppButton>
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
        borderWidth: 2,
        borderColor: 'red', 
    },
    container: {
        flex:1, 
        justifyContent: 'space-between',
        alignItems: 'center', 
        borderWidth: 2,
        borderColor: 'purple', 
    },

    TitleAndTagLineStyles: {
        height: 100,
        display: 'flex',
        justifyContent: 'space-between',
        borderWidth: 2,
        borderColor: 'blue', 
        alignItems: 'center'
    },

    ButtonPositioning: {
        flex:0,
        borderWidth: 2,
        borderColor: 'green', 
    },
})