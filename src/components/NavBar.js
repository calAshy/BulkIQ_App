import React from "react";
import { View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Alert } from "react-native";

export default function BottomNav () {
    const navigation = useNavigation();
    return (
        
        <View style={styles.container}>

            {/* <Text>Home</Text>
            <Text>Home</Text>
            <Text>Home</Text>
            <Text>Home</Text> */}


            <TouchableOpacity onPress={() => navigation.navigate('Home Screen')}>
                <Ionicons name="home-outline" size={30} color={'#fff'} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Home Screen')}>
                <Ionicons name="home-outline" size={30} color={'#fff'} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Home Screen')}>
                <Ionicons name="home-outline" size={30} color={'#fff'} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Home Screen')}>
                <Ionicons name="home-outline" size={30} color={'#fff'} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Home Screen')}>
                <Ionicons name="home-outline" size={30} color={'#fff'} />
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
       // borderTopWidth: 1,
        borderTopColor: '#ccc',
        backgroundColor: '#fff',
        backgroundColor: '#1a1a1a',
        width: '100%',
        paddingBottom: 50,
        paddingTop: 20,
    },
});