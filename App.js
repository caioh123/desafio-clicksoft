import React from "react";
import {
  useFonts,
  Jost_400Regular,
  Jost_700Bold,
} from "@expo-google-fonts/jost";
import AppLoading from "expo-app-loading";
import { PostsProvider } from "./src/context/context";
import { Routes } from "./src/routes/index";

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <PostsProvider>
      <Routes />
    </PostsProvider>
  );
}
