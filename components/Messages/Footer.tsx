import {
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import Input from "../../UI/Inputs/Input";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../global/constants/color";
import Icons from "../../UI/Icons/Icons";
import { MessageInputType } from "./type";

const Footer = ({ onSend, message, setMessage }: MessageInputType) => {
  const { width } = useWindowDimensions();
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const styles = StyleSheet.create({
    container: {
      position: "absolute",
      width,
      bottom: 15,
      height: keyboardVisible ? 90 : 45,
      paddingHorizontal: 16,
      zIndex: 10,
    },
    input: {
      borderRadius: 20,
      paddingLeft: 46,
      height: 44,
      backgroundColor: "#2f2f2f",
    },
    cameraContainer: {
      position: "absolute",
      left: 5,
      top: 5,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "50%",
      backgroundColor: COLORS.BLUE,
      height: 34,
      width: 34,
    },
  });

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="position">
      <Input
        value={message}
        onChangeText={(text) => setMessage(text)}
        inputStyle={styles.input}
        placeholder="Message..."
      />
      <Pressable style={styles.cameraContainer}>
        <Ionicons name="camera-sharp" size={20} color={"white"} />
      </Pressable>
      <Pressable
        onPress={onSend}
        style={[
          styles.cameraContainer,
          { right: 15, left: null, backgroundColor: "transparent" },
        ]}
      >
        <Icons name="share" />
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default Footer;
