import React, { useState } from "react";
import {
  Linking,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-elements";
import Card from "../shared/card";
//import ContactsDetails from "./ContactsDetails";

const Contacts = ({ navigation }) => {
  const [contacts, setContacts] = useState([
    {
      name: "ABC Contacts",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
      number: "000000000",
      image:
        "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png",
    },
    {
      name: "PQR Contacts",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
      number: "1111111111",
      image:
        "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png",
    },
    {
      name: "XYZ Contacts",
      rating: 3,
      body: "lorem ipsum",
      key: "3",
      number: "2222222222",
      image:
        "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png",
    },
  ]);

  const ContactsList = contacts.map((item, index) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => {
          navigation.navigate("emergencyContactsDetails", { contact: item });
        }}
      >
        <Card>
          <Text>Hello</Text>
          <Text>{item.name}</Text>
          <Image source={{ uri: item.image }} />
        </Card>
      </TouchableOpacity>
    );
  });

  return <View style={styles.container}>{ContactsList}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    margin: 10,
  },
});

export default Contacts;

/*
export default function ReviewDetails({ navigation }) {
  const rating = navigation.getParam('rating');
  
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>
          { navigation.getParam('title') }
        </Text>
        <Text>{ navigation.getParam('body') }</Text>
        <View style={styles.rating}>
          <Text>GameZone rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  }
});*/
