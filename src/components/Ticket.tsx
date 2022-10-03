import { Box, HStack, Text, VStack } from "native-base";
import React, { useEffect } from "react";
import { Cart } from "../../core/types";

type TicketProps = {
  cart: Cart;
};

const Ticket = ({ cart }: TicketProps) => {
  return (
    <Box my="2" p="4" backgroundColor="white" borderRadius="lg">
      <HStack justifyContent="space-between">
        <VStack>
          <Text fontWeight="bold">{cart.name}</Text>
          <Text>{cart.description}</Text>
          <Text fontWeight="light">{cart.client}</Text>
        </VStack>
        <VStack>
          <Text textAlign="right">{cart.date.toDateString()}</Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Ticket;
