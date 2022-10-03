import { createDrawerNavigator } from "@react-navigation/drawer";

import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View } from "react-native";

import { PRIMARY_COLOR } from "./constants/COLORS";

import AllTickets from "./screens/AllTickets";
import LoginScreen from "./screens/LoginScreen";

import { AddIcon, Button, Modal, Text } from "native-base";
import ManagementScreen from "./screens/ManagementScreen";
import { useMemo, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import {
  CartService,
  collections,
  ItemService,
} from "../core/services/services";
import { Item } from "../core/types";
import SplashScreen from "./screens/SplashScreen";
import CreateTicketModal from "./modals/CreateTicketModal";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerNavigation = () => {
  const [ticketModalOpen, setTicketModalOpen] = useState(true);

  return (
    <>
      <Drawer.Navigator initialRouteName="Map" useLegacyImplementation>
        <Drawer.Screen
          options={{
            headerRight: () => {
              return (
                <Button
                  onPress={() => setTicketModalOpen(true)}
                  variant="link"
                  leftIcon={<AddIcon size={2} />}
                >
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

      <CreateTicketModal
        open={ticketModalOpen}
        onClose={() => setTicketModalOpen(false)}
      />
    </>
  );
};

export default function Main() {
  const [token, setToken] = useState(true);

  const { data, isLoading: isItemsLoading } = useQuery<Item[]>(
    [collections.items],
    async () => await ItemService.instance.get()
  );

  const { isLoading: isCartLoading } = useQuery(
    [collections.carts],
    async () => await CartService.instance.get()
  );

  const loading = useMemo(() => {
    return isItemsLoading || isCartLoading;
  }, [isItemsLoading, isCartLoading]);

  if (loading) {
    return <SplashScreen />;
  }

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
