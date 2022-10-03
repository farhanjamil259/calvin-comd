import { createDrawerNavigator } from "@react-navigation/drawer";

import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View } from "react-native";

import { PRIMARY_COLOR } from "./constants/COLORS";

import CustomDrawerContent from "./components/CustomDrawerContent";
import AllTickets from "./screens/AllTickets";
import LoginScreen from "./screens/LoginScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AddIcon, Button, Icon } from "native-base";
import ManagementScreen from "./screens/ManagementScreen";
import { useState } from "react";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Map"
      // drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        options={{
          headerRight: () => {
            return (
              <Button variant="link" leftIcon={<AddIcon size={2} />}>
                New Ticket
              </Button>
            );
          },
        }}
        name="Tickets"
        component={AllTickets}
      />

      <Drawer.Screen name="Management" component={ManagementScreen} />
    </Drawer.Navigator>
  );
};

type MainProps = {
  notificationToken?: string;
};

export default function Main() {
  const [token, setToken] = useState(false);

  if (!token) {
    return (
      <View style={styles.container}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            options={{ title: "", headerShown: false }}
            name="Login"
            component={LoginScreen}
          />
        </Stack.Navigator>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false, title: "Home" }}
          name="Home"
          component={DrawerNavigation}
        />
      </Stack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    position: "absolute",
    borderRadius: 50,
    fontSize: 24,
    backgroundColor: PRIMARY_COLOR[500],
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
