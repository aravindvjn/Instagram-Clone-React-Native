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
import { useNavigation } from "@react-navigation/native";

const OperationButtons = ({
  userData,
  followerId,
  followStatus,
  currentUserId,
}: FollowRequestType) => {
  const [status, setStatus] = useState<FollowStatusType>(
    followStatus || "Follow"
  );

  const navigation: any = useNavigation();

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
      userData?.id &&
      followerId &&
      (status === "Follow" || status === "Follow Back")
    ) {
      setStatus("Following");
      const result = await addFollower(userData?.id, followerId);
      if (!result) {
        setStatus(followStatus || "Follow");
      }
    } else if (userData?.id && followerId && status === "Following") {
      setStatus("Follow");
      const result = await removeFollower(userData?.id, followerId);
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
      <CustomButton
        onPress={() =>
          navigation.navigate("Messages", {
            user1_id: currentUserId,
            user2_id: userData?.id,
            userData,
          })
        }
        style={styles.button}
      >
        Message
      </CustomButton>
    </View>
  );
};

export default OperationButtons;
