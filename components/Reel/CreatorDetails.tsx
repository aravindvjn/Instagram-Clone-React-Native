import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Profile from "../Images/Profile";
import VisitUser from "../Helpers/VisitUser";
import CustomText from "../../UI/Typography/CustomText";
import { ReelType } from "./type";
import CustomButton from "../../UI/Buttons/CustomButton";
import Center from "../../UI/Wrappers/Center";

const CreatorDetails = ({ user, caption }: ReelType) => {
  const [noLines, setNoLines] = useState<number | undefined>(1);
  return (
    <View style={styles.container}>
     <VisitUser id={user?.id}>
     <Profile size={40} profile_url={user?.profile_url} />
     </VisitUser>
      <View>
        <Center style={styles.row}>
          <VisitUser id={user?.id}>
            <CustomText fontSize={14} textStyle={styles.username}>
              {user?.username || "isudgugsg "}
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

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 70,
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
