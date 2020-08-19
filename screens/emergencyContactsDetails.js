import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Linking, Image, Button } from "react-native";
import Card from "../shared/card";

const ContactDetails = ({ route, navigation }) => {
  const Contacts = route.params.contact;
  //console.log(Contacts.Contacts.image);
  //console.log(type(Contacts.Contacts.image));

  return (
    <View>
      <Card>
        <Text>{Contacts.name}</Text>
        <Text>{Contacts.body}</Text>
        <Image source={{ uri: Contacts.image }} />
      </Card>
      <Button
        onPress={() => callNumber(Contacts.number)}
        title="Call Contacts"
      ></Button>
      <Button
        title="Go to Contacts list"
        onPress={() => navigation.navigate("emergencyContactsList")}
      ></Button>
    </View>
  );
};

export default ContactDetails;
