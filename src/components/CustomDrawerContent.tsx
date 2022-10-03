import Ionicons from "@expo/vector-icons/Ionicons";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { authSlice, logout } from "../redux/authSlice";
import { useNavigation } from "@react-navigation/native";
import {
  Avatar,
  Box,
  Heading,
  HStack,
  Pressable,
  Text,
  View,
  VStack,
} from "native-base";
import { SafeAreaView } from "react-native";
import { GRAY_COLOR, PINK_COLOR, PRIMARY_COLOR } from "../constants/COLORS";
const ICON_SIZE = 20;

type DrawerItemProps = {
  name: string;
  to?: string;
  icon: any;
  onPress?: () => void;
};

const DrawerItem = ({ to, icon, name, onPress }: DrawerItemProps) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
        },
      ]}
      onPress={() => {
        if (to) {
          navigation.navigate(to as never, { screen: to } as never);
        } else {
          onPress && onPress();
        }
      }}
    >
      <HStack p="3" space={3}>
        <Ionicons name={icon} size={ICON_SIZE} color="gray" />
        <Text>{name}</Text>
      </HStack>
    </Pressable>
  );
};

const CustomDrawerContent = (props: any) => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);
  return (
    <SafeAreaView>
      <Text>Custom Drawer</Text>
    </SafeAreaView>
  );
};

export default CustomDrawerContent;
