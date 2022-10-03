import { Center, Heading, Text, VStack } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

type EmptyProps = {
  heading: string;
  description?: string;
};

const Empty = ({ heading, description }: EmptyProps) => {
  return (
    <Center alignItems="center" h="full" justifyContent="center">
      <VStack alignItems="center" space={2}>
        <Ionicons name="md-file-tray-stacked-outline" size={48} color="black" />
        <Heading>{heading}</Heading>
        <Text>{description}</Text>
      </VStack>
    </Center>
  );
};

export default Empty;
