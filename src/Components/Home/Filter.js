import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";

import Colors from "../../Shared/Colors";

function Filter() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState([]);
  const Items = [
    { label: "Men", value: "Men" },
    { label: "Women", value: "Women" },
    { label: "Kids", value: "Kids" },
  ];
  return (
    <TouchableOpacity style={styles.container}>
      {/* <Entypo name="chevron-small-down" size={24} color="black" /> */}
      <DropDownPicker
        value={value}
        onChangeValue={(selectedValues) => {
          setValue(selectedValues);
          console.log(selectedValues);
        }}
        items={Items}
        style={styles.dropdown}
        placeholder="Filter"
        placeholderStyle={{
          color: Colors.darkgrey,
        }}
        containerStyle={styles.containerStyle}
        autoScroll={true}
        open={isOpen}
        setOpen={setIsOpen}
        setValue={setValue}
        setItems={Items}
        multiple={true}
        mode="BADGE"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    backgroundColor: Colors.white,
    marginTop: 4,
    elevation: 20,
    position: "relative",
    zIndex: 9999,
  },
  containerStyle: {
    width: Dimensions.get("window").width*0.9,
    display: "flex",
    zIndex: 9999,
    elevation: 20,
    position: "relative",
  },
  dropdown: {
    width: Dimensions.get("window").width*0.9,
    borderColor: Colors.white,
  },
});

export default Filter;
