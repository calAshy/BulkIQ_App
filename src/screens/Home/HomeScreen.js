import React from 'react';
import { View, Text, StyleSheet,SafeAreaView, ScrollView } from 'react-native';
import AppButton from '../../components/AppButton';
import { LinearGradient } from 'expo-linear-gradient';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

export default function HomeScreen( {navigation } ) {

    const submitSignOut = async () => {
        try{
            await signOut( auth );
        } catch (err) {
            alert("Signing out Error", err);
        }
    };

    return (
        <LinearGradient
            colors={['#1d1d1d', '#0a0a0a', '#0a0a0a', '#1d1d1d']}
            style = {styles.gradientStyles}
        >
            <SafeAreaView style={styles.container}>
                <ScrollView style={ styles.scrollView }>


                    <View style={styles.ButtonPositioning}>

                        <AppButton title = "Back to Welcome Screen" onPress={(submitSignOut)}>
                        </AppButton>

                    </View>
                </ScrollView>
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
    scrollView: {
        width: '100%',
        borderColor: 'green',
        borderWidth: 2,
    },

    container: {
        flex:1, 
        justifyContent: 'space-between',
        alignItems: 'center', 
        width: '100%',
        borderColor: 'red',
        borderWidth: 2,
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