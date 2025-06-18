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
        backgroundColor: '#1d1d1d',
    },

    container: {
        height: 70,
        backgroundColor: '#1d1d1d',
        paddingHorizontal: 18,
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 2,
        borderBottomColor: 'white',
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