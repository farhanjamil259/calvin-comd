import { ScrollView, Text, View } from "native-base";
import React from "react";
import SearchBar from "../components/SearchBar";
import Ticket from "../components/Ticket";

const AllTickets = () => {
  return (
    <View p="4" flex="1">
      <SearchBar />
      <ScrollView>
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
      </ScrollView>
    </View>
  );
};

export default AllTickets;
