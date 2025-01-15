import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import AuthScreen from "./screen/AuthScreen";
import HomeScreen from "./screen/HomeScreen";
import SearchScreen from "./screen/SearchScreen";
import ProfileScreen from "./screen/ProfileScreen";
import { COLORS } from "./global/constants/color";
import ReelsScreen from "./screen/ReelsScreen";
import CreateScreen from "./screen/CreateScreen";
import Icons from "./UI/Icons/Icons";
import { useCurrentUser } from "./hooks/useCurrentUser";
import Profile from "./components/Images/Profile";
import Layout from "./UI/Wrappers/Layout";
import Center from "./UI/Wrappers/Center";
import DetailedPostScreen from "./screen/DetailedPostScreen";
import ChatListScreen from "./screen/ChatListScreen";
import LikeScreen from "./screen/LikeScreen";
import MessagesScreen from "./screen/MessagesScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
let failed = false;
const Routes = () => {
  const { data: user, isLoading, isError } = useCurrentUser();
  if (isError) {
    failed = true;
  }
  if (isLoading && !failed) {
    return (
      <Layout>
        <Center>
          <ActivityIndicator size={"large"} />
        </Center>
      </Layout>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation:"slide_from_right"
        }}
        
      >
        {(!!!user || isError) && (
          <Stack.Screen name="Auth" component={AuthScreen} />
        )}
        {!!user && <Stack.Screen name="Main" component={MainRoutes} />}
        {!!user && (
          <Stack.Screen name="DetailedPost" component={DetailedPostScreen} />
        )}
        {!!user && <Stack.Screen name="ChatLists" component={ChatListScreen} />}
        {!!user && <Stack.Screen name="Liked" component={LikeScreen} />}
        {!!user && <Stack.Screen name="Messages" component={MessagesScreen} />}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

// const ProtectedRoutes = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}
//     >
//       <Stack.Screen name="Main" component={MainRoutes} />
//       <Stack.Screen name="DetailedPost" component={DetailedPostScreen} />
//     </Stack.Navigator>
//   );
// };

const MainRoutes = () => {
  const { data: user } = useCurrentUser();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icons name={focused ? "home-fill" : "home"} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icons name={focused ? "search-fill" : "search"} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Create"
        component={CreateScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icons name={focused ? "create-fill" : "create"} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Reels"
        component={ReelsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icons name={focused ? "reel-fill" : "reel"} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        initialParams={{ id: user?.id }}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Profile size={size + 3} profile_url={user?.profilePic} />
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("Profile");
          },
        })}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: COLORS.BACKGROUND_COLOR,
    height: 50,
    paddingTop: 5,
    borderTopWidth: 0,
    borderColor: "black",
  },
});
