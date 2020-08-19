import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Linking,
  TextInput,
  Alert,
  Button,
} from "react-native";
import Card from "../shared/card";
import { useForm, Controller } from "react-hook-form";

const BookBed = ({ route, navigation }) => {
  const selHospital = route.params.selectedHospital;
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    console.log(selHospital);
  };

  return (
    <View>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            //xstyle={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="firstName"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.firstName && <Text>This is required.</Text>}

      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            //style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="lastName"
        defaultValue=""
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
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
  input: {},
});

export default BookBed;
