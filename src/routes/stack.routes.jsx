import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomePage } from "../pages/HomePage/HomePage";
import { UserProfile } from "../pages/UserProfile/UserProfile";
import { MyTabs } from "./tab.routes";

const stackRoutes = createStackNavigator();

export const AppRoutes = () => {
  return (
    <stackRoutes.Navigator headerMode="none">
      <stackRoutes.Screen name="HomePage" component={MyTabs} />
      <stackRoutes.Screen name="UserProfile" component={UserProfile} />
    </stackRoutes.Navigator>
  );
};
