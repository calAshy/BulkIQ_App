//This is the component for our customisable header visable on the HomeNav screens, like Home.

import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import HamburgerIcon from "./HamburgerMenu";

export default function Header ({ navigation, title }) {
    return (
        <SafeAreaView style={styles.SafeArea}>
            <View style={styles.container}>
                <HamburgerIcon onPress={() => navigation.toggleDrawer()} />
                <Text style={styles.title}>BULK HQ</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    SafeArea: {
        //backgroundColor: 'green'
    },

    container: {
        height: 70,
        backgroundColor: '#343434',
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    icon: {
        color: 'white',
        fontSize: 36,
    },
    title: {
        color: 'white',
        fontWeight: 800,
        fontSize: 20,
        //backgroundColor: 'purple'
    },
    placeholder: {
        width: 24, 
    },
})