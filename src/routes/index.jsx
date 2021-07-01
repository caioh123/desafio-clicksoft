import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import { HomePage } from "../pages/HomePage/HomePage";
import { SignInPage } from "../pages/SignInPage/SigninPage";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#32b768",
        inactiveTintColor: "#52665a",
        labelPosition: "beside-icon",
        style: {
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
          height: 88,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AddPost"
        component={SignInPage}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="add-to-list" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}