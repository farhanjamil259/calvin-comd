import { Box, HStack, Text, VStack } from "native-base";
import React from "react";

const Ticket = () => {
  return (
    <Box my="2" p="4" backgroundColor="white" borderRadius="lg">
      <HStack justifyContent="space-between">
        <VStack>
          <Text fontWeight="bold">Daily 4</Text>
          <Text>123123123123</Text>
          <Text fontWeight="light">Walter 1350</Text>
        </VStack>
        <VStack>
          <Text textAlign="right">{new Date().toDateString()}</Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Ticket;
