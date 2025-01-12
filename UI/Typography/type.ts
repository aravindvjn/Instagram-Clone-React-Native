import { ReactNode } from "react";
import { StyleProp, TextProps, TextStyle } from "react-native";

export interface TypographyType extends TextProps {
    textStyle?: StyleProp<TextStyle>;
    children?: ReactNode,
    fontSize?: number;
    fontWeight?: string;
    textAlign?: 'center' | 'right' | 'left' | 'justify';
}