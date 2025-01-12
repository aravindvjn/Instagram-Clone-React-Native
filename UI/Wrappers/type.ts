import { ReactNode } from "react"
import { StyleProp, ViewStyle } from "react-native"

export interface WrapperType {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
    padding?: number;
    noScrollView?: boolean;
}