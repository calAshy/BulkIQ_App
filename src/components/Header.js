//This is the component for our customisable header visable on the HomeNav screens, like Home.

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Header ({ navigation, title }) {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <Text></Text>
            </TouchableOpacity>
            <Text>Title</Text>
            <View />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: 'red',
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
        fontSize: 18,
        fontWeight: 'bold',
    },
    placeholder: {
        width: 24, 
    },
})