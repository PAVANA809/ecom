import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Colors from "../../Shared/Colors";

function DropDown({ handleChange, handleBlur, values}) {
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
          <DropDownPicker
              value={value}
        items={Items}
        style={styles.dropdown}
              placeholder="Select Category"
              placeholderStyle={{
                  color: Colors.darkgrey,
              }}
        dropDownStyle={{ backgroundColor: Colors.pink }}
        maxHeight={150}
        autoScroll={true}
        open={isOpen}
        setOpen={setIsOpen}
        setValue={setValue}
        setItems={Items}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dropdown: {
    marginTop: 10,
    borderColor: Colors.pink,
    borderWidth: 2,
    borderRadius: 20,
    width: Dimensions.get("window").width * 0.9,
  },
});

export default DropDown;
