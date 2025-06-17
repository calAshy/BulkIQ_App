import React from "react";
import Svg, {Rect} from "react-native-svg";
import { Pressable } from "react-native";

const HamburgerIcon = ({ onPress }) => {
    return ( 
        <Pressable onPress={ onPress } style={{backgroundColor: 'none'}}>
            <Svg width="30" height="24" viewBox="0 0 30 24 " fill="none">
                <Rect x="0" y="0" width="30" height="4" rx="2" fill="#fff" />
                <Rect x="0" y="10" width="30" height="4" rx="2" fill="#fff" />
                <Rect x="0" y="20" width="30" height="4" rx="2" fill="#fff" />
            </Svg>
        </Pressable>
    );
};

export default HamburgerIcon;