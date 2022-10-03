import "react-native-gesture-handler";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { NativeBaseProvider, extendTheme, View } from "native-base";

import Main from "./src/Main";

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#6366f1",
  },
};

const nbtheme = extendTheme({
  colors: {
    // Add new color
    primary: {
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a",
    },

    // Redefining only one shade, rest of the color will remain same.
    amber: {
      400: "#d97706",
    },
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: "light",
  },
});

export default function App() {
  return (
    <NativeBaseProvider theme={nbtheme}>
      <View flex={1}>
        <NavigationContainer theme={navTheme}>
          <Main />
        </NavigationContainer>
      </View>
    </NativeBaseProvider>
  );
}
