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
//import HospitalDetails from "./HospitalDetails";

const Hospital = ({ navigation }) => {
  const [hospitals, setHospitals] = useState([
    {
      name: "ABC Hospital",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
      number: "000000000",
      image:
        "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png",
    },
    {
      name: "PQR Hospital",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
      number: "1111111111",
      image:
        "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png",
    },
    {
      name: "XYZ Hospital",
      rating: 3,
      body: "lorem ipsum",
      key: "3",
      number: "2222222222",
      image:
        "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png",
    },
  ]);

  const HospitalList = hospitals.map((item, index) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => {
          navigation.navigate("HospitalDetails", { hospital: item });
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

  return <View style={styles.container}>{HospitalList}</View>;
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

export default Hospital;

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
