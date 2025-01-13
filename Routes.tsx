import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { UserType } from "./components/Profile/type";
import AuthScreen from "./screen/AuthScreen";
import HomeScreen from "./screen/HomeScreen";
import SearchScreen from "./screen/SearchScreen";
import LikeScreen from "./screen/LikeScreen";
import ProfileScreen from "./screen/ProfileScreen";
import { COLORS } from "./global/constants/color";
import { Ionicons } from "@expo/vector-icons";
import ReelsScreen from "./screen/ReelsScreen";
import CreateScreen from "./screen/CreateScreen";
import Icons from "./UI/Icons/Icons";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useCurrentUser } from "./hooks/useCurrentUser";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Routes = () => {
  const { data: user } = useCurrentUser();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {!!!user && <Stack.Screen name="Auth" component={AuthScreen} />}
        {!!user && (
          <Stack.Screen name="Protected" component={ProtectedRoutes} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

const ProtectedRoutes = () => {
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
            <Icons name={"home"} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icons name={"search"} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Create"
        component={CreateScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icons name={"create"} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Reels"
        component={ReelsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icons name={"reel"} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        initialParams={{ id: user?.id }}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icons name={"account"} size={size} />
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
