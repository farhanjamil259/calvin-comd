import { Button, FormControl, Input, Modal, VStack } from "native-base";
import React, { useState } from "react";
import { CartService } from "../../core/services/services";
import { Cart } from "../../core/types";

const CreateTicketModal = (props: BaseModalProps) => {
  const [cart, setCart] = useState({
    client: "Some Client",
    description: "",
    profitMarginPercent: 10,
    metalPrices: { palldium: 0, platinum: 0, rhodium: 0 },
  });

  const newCart = Cart.New(
    cart.client,
    cart.description,
    cart.profitMarginPercent,
    cart.metalPrices
  );

  //   CartService.instance.post(newCart);

  return (
    <Modal isOpen={props.open} onClose={props.onClose}>
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Header>Create New Ticket</Modal.Header>
        <Modal.Body>
          <VStack space={4}>
            <FormControl>
              <FormControl.Label>Client</FormControl.Label>
              <Input p={2} placeholder="John Doe" />
            </FormControl>

            <FormControl>
              <FormControl.Label>Description</FormControl.Label>
              <Input p={2} placeholder="This is an awesome description" />
            </FormControl>

            <FormControl>
              <FormControl.Label>Profit Margin %</FormControl.Label>
              <Input p={2} placeholder="20" />
            </FormControl>
          </VStack>
        </Modal.Body>
        <Modal.Footer>
          <Button.Group variant="ghost" space="2">
            <Button onPress={props.onClose} colorScheme="red">
              Cancel
            </Button>
            <Button>Accept</Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default CreateTicketModal;
