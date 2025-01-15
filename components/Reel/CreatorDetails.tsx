import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Profile from "../Images/Profile";
import VisitUser from "../Helpers/VisitUser";
import CustomText from "../../UI/Typography/CustomText";
import { ReelType, ReelTypes } from "./type";
import CustomButton from "../../UI/Buttons/CustomButton";
import Center from "../../UI/Wrappers/Center";
import Skeleton, { skeletonStyles } from "../Loadings/Skeletons";

const CreatorDetails = ({
  username,
  profilePic,
  userId,
  caption,
}: ReelTypes) => {
  const [noLines, setNoLines] = useState<number | undefined>(1);
  return (
    <View style={styles.container}>
      <VisitUser id={userId}>
        <Profile size={40} profile_url={profilePic} />
      </VisitUser>
      <View>
        <Center style={styles.row}>
          <VisitUser id={userId}>
            <CustomText fontSize={14} textStyle={styles.username}>
              {username || "Instagram User"}
            </CustomText>
          </VisitUser>
          <CustomButton style={styles.button}>Follow</CustomButton>
        </Center>
        <Pressable
          onPress={() => setNoLines((prev) => (prev === 1 ? undefined : 1))}
        >
          <CustomText
            numberOfLines={noLines}
            textStyle={{ width: "55%" }}
            fontSize={14}
          >
            {caption}
          </CustomText>
        </Pressable>
      </View>
    </View>
  );
};

export default CreatorDetails;

export const ReelDetailsSkeleton = () => {
  return (
    <View style={styles.container}>
      <Skeleton style={[skeletonStyles.profile,{width:40,height:40}]} />
      <Skeleton  />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 60,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 15,
  },
  username: {
    fontWeight: "bold",
  },
  button: {
    height: 25,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "white",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    justifyContent: "flex-start",
  },
});
