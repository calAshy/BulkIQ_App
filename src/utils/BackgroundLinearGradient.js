//Util for our linear background gradient.

import LinearGradient from "react-native-linear-gradient";
import { StyleSheet } from "react-native";

//children and style props are passed to all for components to be placed inside the fucntion and style for any changes we want to make on each individual screen. 

function BackgroundLinearGradient({ children, style }) {
    return(
        <LinearGradient 
        colors={['#1d1d1d', '#0a0a0a', '#0a0a0a', '#1d1d1d']} 
        style = {[styles.LinearGradientStyle, style]}
        >
        {children}
        </LinearGradient>
    )
}

 export {BackgroundLinearGradient};

 const styles = StyleSheet.create = {
    LinearGradientStyle: {
        flex: 1, 
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
 }