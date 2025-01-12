import { ReactNode } from "react";
import { PressableProps, StyleProp, TextStyle, ViewStyle } from "react-native";

export interface ButtonType extends PressableProps {
    children?: ReactNode;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    backgroundColor?: string;
    color?: string;
}