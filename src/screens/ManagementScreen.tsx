import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Button,
  DeleteIcon,
  FormControl,
  HStack,
  IconButton,
  Input,
  KeyboardAvoidingView,
  Modal,
  Pressable,
  ScrollView,
  Text,
  View,
} from "native-base";
import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { RefreshControl } from "react-native";
import { axiosPrivate } from "../config/axios";
import Categories from "./Categories";
import Parts from "./Parts";

type CategoryItemProps = {
  name: string;
  id: string;
};

const CategoryItem = (props: CategoryItemProps) => {
  const [deleteModal, setDeleteModal] = useState(false);
  return (
    <Pressable>
      <Box backgroundColor="white" m={2} p={2}>
        <HStack alignItems="center" justifyContent="space-between">
          <Text>{props.name}</Text>
          <IconButton
            onPress={() => {}}
            colorScheme="red"
            icon={<DeleteIcon size={4} />}
          />
        </HStack>
      </Box>

      <Modal isOpen={deleteModal}>
        <Modal.Content>
          <Modal.Header>Are you sure?</Modal.Header>
          <Text>Delete Modal</Text>
          <Modal.Footer></Modal.Footer>
        </Modal.Content>
      </Modal>
    </Pressable>
  );
};

const ManagementScreen = () => {
  const navigation = useNavigation();

  const [showcategoryModal, setShowCategoryModal] = useState(true);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          variant="link"
          onPress={() => {
            setShowCategoryModal(true);
            // navigation.navigate("Cart" as never);
          }}
        >
          Add
        </Button>
      ),
    });
  }, [navigation]);

  const [selected, setSelected] = useState("c");

  const [category, setCategory] = useState("");

  const [loading, setLoading] = useState(false);

  const handleCreateCategory = async () => {
    setCategory("");
    console.log("Category Created");
  };

  const handleClose = () => {
    setShowCategoryModal(false);
    setCategory("");
  };

  return (
    <View p={4} flex={1}>
      <HStack>
        <Button
          onPress={() => setSelected("c")}
          w="1/2"
          variant="unstyled"
          borderBottomColor="indigo.500"
          borderBottomWidth={selected === "c" ? 1 : 0}
        >
          Categories
        </Button>
        <Button
          onPress={() => setSelected("p")}
          w="1/2"
          variant="unstyled"
          borderBottomColor="indigo.500"
          borderBottomWidth={selected === "p" ? 1 : 0}
        >
          Parts
        </Button>
      </HStack>

      {selected === "c" && <Categories />}
      {selected === "p" && <Parts />}

      <Modal onClose={handleClose} isOpen={showcategoryModal} size="xs">
        <Modal.Content>
          <Modal.Body>
            <FormControl.Label>Category Name</FormControl.Label>
            <Input
              autoCorrect={false}
              value={category}
              placeholder="Mercedes"
              onChangeText={(v) => setCategory(v)}
            />
          </Modal.Body>
          <Modal.Footer>
            <HStack space={4}>
              <Button
                w="16"
                variant="outline"
                colorScheme="red"
                size="sm"
                onPress={handleClose}
              >
                Close
              </Button>
              <Button
                isLoading={loading}
                w="16"
                size="sm"
                onPress={handleCreateCategory}
              >
                Add
              </Button>
            </HStack>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </View>
  );
};

export default ManagementScreen;
