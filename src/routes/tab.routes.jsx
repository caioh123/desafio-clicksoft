import React from "react";
import { fonts, colors } from "../styles/theme";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import { HomePage } from "../pages/HomePage/HomePage";
import { AddPostPage } from "../pages/AddPostPage/AddPostPage";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const AppTab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <AppTab.Navigator
      tabBarOptions={{
        activeTintColor: colors.container,
        inactiveTintColor: "#52665a",
        labelPosition: "beside-icon",
        style: {
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
          height: 88,
        },
      }}>
      <AppTab.Screen
        name="HomePage"
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
      <AppTab.Screen
        name="AddPost"
        component={AddPostPage}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="add-to-list" size={size} color={color} />
          ),
        }}
      />
    </AppTab.Navigator>
  );
}
