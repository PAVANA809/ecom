import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Dimensions } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { TouchableOpacity } from "react-native-gesture-handler";
import DropDownPicker from "react-native-dropdown-picker";

import Colors from "../Shared/Colors";

function NewItemForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(null);
  const Items = [
    { label: "Men", value: "Men" },
    { label: "Women", value: "Women" },
    { label: "Kids", value: "Kids" },
    { label: "Accessories", value: "Accessories" },
    { label: "Shoes", value: "Shoes" },
  ];

  return (
    <View style={styles.container}>
      <Formik
        validationSchema={Yup.object().shape({
          ItemName: Yup.string().required("Item Name is required"),
          Description: Yup.string().required("Description is required"),
          Category: Yup.array()
            .min(1, "Category is required")
            .required("Category is required"),
        })}
        initialValues={{
          ItemName: "",
          Description: "",
          Category: ["hello", "hi"],
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Item name"
              onChangeText={handleChange("ItemName")}
              onBlur={handleBlur("ItemName")}
              value={values.ItemName}
            />
            {touched.ItemName && errors.ItemName && (
              <Text style={styles.error}>{errors.ItemName}</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="Description"
              onChangeText={handleChange("Description")}
              onBlur={handleBlur("Description")}
              value={values.Description}
            />
            {touched.Description && errors.Description && (
              <Text style={styles.error}>{errors.Description}</Text>
            )}
            <DropDownPicker
              defaultValue={values.Category}
              value={value}
              onChangeValue={(selectedValues) => {
                values.Category = selectedValues;
              }}
              items={Items}
              style={styles.dropdown}
              placeholder="Select Category"
              placeholderStyle={{
                color: Colors.darkgrey,
              }}
              containerStyle={{ width: Dimensions.get("window").width * 0.9 }}
              maxHeight={150}
              autoScroll={true}
              open={isOpen}
              setOpen={setIsOpen}
              setValue={setValue}
              setItems={Items}
              multiple={true}
              mode="BADGE"
            />
            {touched.Category && errors.Category && (
              <Text style={styles.error}>{errors.Category}</Text>
            )}
            <TouchableOpacity>
              <Text style={styles.SubmitBtn} onPress={handleSubmit}>
                Add
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    },
  input: {
    width: Dimensions.get("window").width * 0.9,
    borderWidth: 2,
    borderColor: Colors.pink,
    padding: 6,
    fontSize: 15,
    borderRadius: 20,
    marginTop: 10,
  },
  SubmitBtn: {
    marginTop: 10,
    backgroundColor: Colors.pink,
    padding: 10,
    borderRadius: 20,
    width: Dimensions.get("window").width * 0.9,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
    
  },
  dropdown: {
    marginTop: 10,
    borderColor: Colors.pink,
    borderWidth: 2,
    borderRadius: 20,
    width: Dimensions.get("window").width * 0.9,
    },
    error: {
        color: Colors.pink,
        fontWeight: "bold",
        fontSize: 15,
        marginLeft: 10,
    }

});

export default NewItemForm;
