import React from 'react';
import { View, Text, StyleSheet,SafeAreaView } from 'react-native';

export default function LoadScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.TitleAndTagLineStyles}>
                <Text>BULK IQ</Text>
                <Text>Ready to start smashing those goals?</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1, 
        justifyContent: 'center',
        alignItems: 'center', 
    },

    TitleAndTagLineStyles: {
        height: 200,
        display: 'flex',
        justifyContent: 'space-between',
        borderWidth: 2,
        borderColor: 'blue', 
        alignItems: 'center'

    }
})