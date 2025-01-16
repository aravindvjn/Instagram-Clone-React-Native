import { StyleSheet,View } from "react-native";
import React from "react";
import { MessageType } from "./type";
import CustomText from "../../UI/Typography/CustomText";

const Message = ({ incoming, message,timestamp }: MessageType) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: incoming ? "#ececec" : "rgb(10, 0, 204)",
      padding: 10,
      paddingHorizontal:14,
      borderRadius: 10,
      marginBottom: 10,
      maxWidth: "75%",
      borderTopLeftRadius: incoming ? 0 : 10,
      borderTopRightRadius: incoming ? 10 : 0,
      alignSelf: incoming ? "flex-start" : "flex-end",
    },
    text: {
      color: incoming ? "black" : "white",
    },
  });

  return (
    <View style={styles.container}>
      <CustomText fontSize={15} textStyle={styles.text}>
        {message}
      </CustomText>
    </View>
  );
};

export default Message;
