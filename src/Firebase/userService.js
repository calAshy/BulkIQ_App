//This file is specifically for user-related Firestore(Firebase) functions that are exported to other files. 

import React from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { Alert } from "react-native";
import { useState } from "react";


const fetchUsername = async () => {
    try { 
        //Get current user
        const user = auth.currentUser;
        //Get their UID
        const uid = user.uid;
        //creatre the reference to their unique document in the 'users' collection
        const userDocRef = doc(db, 'users', uid);
        //fetch the document. 
        const userDoc = await getDoc(userDocRef);
        //Check if the doc actually exists
        if( userDoc.exists()){
            const data = userDoc.data();
            return data.username;
        } else {
            Alert.alert('Document does not exist') //Debuggins - remove when code is fully functional.
        }
    } catch (error) {
        Alert.alert('Error fetching user data');
    }
};

export {fetchUsername};
