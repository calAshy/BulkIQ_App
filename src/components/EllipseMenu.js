import React from "react";
import { Pressable } from "react-native"; 
import Svg, { Ellipse } from "react-native-svg";

const EllipseMenu = ({ onPress }) => {
    return(
        <Pressable onPress={ onPress } style={{backgroundColor: 'none'}}>
            <Svg width="40" height="24" viewBox="0 0 24 20" fill="none">
                <Ellipse x="4" y="10" rx="2" ry="2" fill="#fff" />
                <Ellipse x="12" y="10" rx="2" ry="2" fill="#fff" />
                <Ellipse x="20" y="10" rx="2" ry="2" fill="#fff" />
            </Svg>
        </Pressable>
    )
}

export default EllipseMenu;