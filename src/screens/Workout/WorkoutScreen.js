import React from "react";
import { View, StyleSheet, LogBox, Text, SafeAreaView, TextInput, ScrollView} from 'react-native';
import { BackgroundLinearGradient } from "../../utils/BackgroundLinearGradient";
import { DateDisplay } from "../../utils/CurrentDate";
import EllipseMenu from "../../components/EllipseMenu";
import AppButton from "../../components/AppButton";

export default function WorkoutForm() {
    return(
        <BackgroundLinearGradient>
            <SafeAreaView style={styles.SafeAreaView}>
                <ScrollView style={styles.SafeAreaView}>
                    <View style={styles.MainContainer}>
                        <View style={styles.LogMetaContainer}>

                            <View style={styles.LogMeta}>
                                <Text style={styles.TitleText}>Workout Title:</Text>
                                <TextInput value="Title"/>
                            </View>
                                <View style={styles.seperator} />

                            <View style={styles.LogMeta}>
                                <Text style={styles.TitleText}>Start Time:</Text>
                                <Text style={styles.Text}>{DateDisplay}</Text>
                            </View>
                                <View style={styles.seperator} />

                            <View style={styles.LogMeta}>
                                <Text style={styles.TitleText}>End Time:</Text>
                            </View>

                        </View>
                        <View style={styles.toggleOptions}>
                            <EllipseMenu />
                        </View>
                    </View>
                    <View>
                        <AppButton>
                        </AppButton>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </BackgroundLinearGradient>
    )
};

const styles = StyleSheet.create({
    SafeAreaView: {
        width: '100%',
        height: '100%',
    },
    MainContainer: {
        display:'flex',
        flexDirection: 'row',
        borderRadius: 20,
        marginVertical: 12,
        marginHorizontal: 8,
        backgroundColor: '#2a2a2a',
    },

    LogMetaContainer: {
        // borderColor: 'blue',
        // borderWidth:2,
        flex: 3,
        alignItems: 'center',
        paddingVertical: 5,
    },
    LogMeta: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 8,
        width: '100%',
        marginLeft: 20,
    },

    seperator: {
        height: 1,
        width: '80%',
        backgroundColor: 'white',
        marginVertical: 2,
    },
    toggleOptions:{
        // borderColor: 'purple',
        // borderWidth:2,
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        paddingRight: 10,
        paddingTop: 5,
    },
    TitleText: {
        color: 'white',
        fontWeight: 'bold',
        marginRight: 8,
    },
    Text: {
        color: 'white',
    }
});
