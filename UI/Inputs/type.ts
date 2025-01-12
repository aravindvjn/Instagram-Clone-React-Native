import { StyleProp, TextInputProps, ViewStyle } from "react-native";

export interface InputType extends TextInputProps {
    placeholder?: string;
    style?: StyleProp<ViewStyle>,
    inputStyle?: StyleProp<ViewStyle>;
}