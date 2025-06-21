import React from "react";
import { View, StyleSheet, LogBox, Text, SafeAreaView, TextInput} from 'react-native';
import { BackgroundLinearGradient } from "../../utils/BackgroundLinearGradient";

export default function WorkoutForm() {
    return(
        <BackgroundLinearGradient>
            <SafeAreaView style={styles.SafeAreaView}>
                <View style={styles.MainContainer}>

                    <View style={styles.LogMetaContainer}>
                        <View style={styles.LogMeta}>
                            <Text style={styles.Text}>Workout Title:</Text>
                            <TextInput value="Title"/>
                        </View>
                        <View style={styles.LogMeta}>
                            <Text style={styles.Text}>Workout Title:</Text>
                            <TextInput value="Title"/>
                        </View>
                        <View style={styles.LogMeta}>
                            <Text style={styles.Text}>Workout Title:</Text>
                            <TextInput value="Title"/>
                        </View>
                    </View>
                    <View style={styles.toggleOptions}>

                    </View>

                </View>
            </SafeAreaView>
        </BackgroundLinearGradient>
    )
};

const styles = StyleSheet.create({
    SafeAreaView: {
        width: '100%',
        height: '100%',
        borderColor: 'red',
        borderWidth:2
    },
    MainContainer: {
        borderColor: 'green',
        borderWidth:2,
        display:'flex',
        flexDirection: 'row'
    },

    LogMetaContainer: {
        borderColor: 'blue',
        borderWidth:2,
        flex: 3,
    },
    LogMeta: {
        backgroundColor: '#1c1c1c',
        borderColor: 'red',
        borderWidth:2,
        flexDirection: 'row'
    },

    toggleOptions:{
        borderColor: 'purple',
        borderWidth:2,
        flex: 2,
    },
    Text: {
        color: 'white',
    },
});
