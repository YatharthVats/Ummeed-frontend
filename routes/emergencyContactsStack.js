import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Header from "../shared/header";
import Contacts from "../screens/emergencyContactsList";
import ContactDetails from "../screens/emergencyContactsDetails";

const Stack = createStackNavigator();

const ContactStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="emergencyContactsList"
        component={Contacts}
        options={{ title: "Your Emergency Contacts" }}
      />
      <Stack.Screen
        name="emergencyContactsDetails"
        component={ContactDetails}
      />
    </Stack.Navigator>
  );
};

export default ContactStack;
