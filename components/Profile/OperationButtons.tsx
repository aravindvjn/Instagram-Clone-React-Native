import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomButton from "../../UI/Buttons/CustomButton";
import { Ionicons } from "@expo/vector-icons";
import { FollowRequestType, FollowStatusType } from "../LikeScreen/type";
import {
  addFollower,
  removeFollower,
} from "../../global/functions/followingOperations";
import { COLORS } from "../../global/constants/color";

const OperationButtons = ({
  userId,
  followerId,
  followStatus,
}: FollowRequestType) => {
  const [status, setStatus] = useState<FollowStatusType>(
    followStatus || "Follow"
  );
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      gap: 5,
      marginTop: 10,
    },
    button: {
      flexGrow: 1,
      height: 35,
      backgroundColor: "#2c2c2c",
      alignItems: "center",
    },
  });
  const followHandler = async () => {
    if (
      userId &&
      followerId &&
      (status === "Follow" || status === "Follow Back")
    ) {
      setStatus("Following");
      const result = await addFollower(userId, followerId);
      if (!result) {
        setStatus(followStatus || "Follow");
      }
    } else if (userId && followerId && status === "Following") {
      setStatus("Follow");
      const result = await removeFollower(userId, followerId);
      if (!result) {
        setStatus("Following");
      }
    }
  };
  return (
    <View style={styles.container}>
      <CustomButton
        onPress={followHandler}
        style={[
          styles.button,
          { backgroundColor: status === "Following" ? "#2c2c2c" : COLORS.BLUE },
        ]}
      >
        {status}
      </CustomButton>
      <CustomButton style={styles.button}>Message</CustomButton>
    </View>
  );
};

export default OperationButtons;
