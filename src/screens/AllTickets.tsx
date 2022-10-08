import React from "react";
import SearchBar from "../components/SearchBar";
import Ticket from "../components/Ticket";
import useData from "../hooks/useData";

import Empty from "../components/Empty";
import { ScrollView, View } from "native-base";

type AllTicketsProps = {};

const AllTickets = () => {
  const { carts } = useData();

  if (!carts?.length)
    return (
      <Empty
        heading="No Tickets Available"
        description="Please add a new ticket"
      />
    );

  return (
    <View p="4" flex="1">
      <SearchBar />
      <ScrollView>
        {carts?.map((c) => {
          return <Ticket cart={c} key={c.id} />;
        })}
      </ScrollView>
    </View>
  );
};

export default AllTickets;
