import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

export const Select = (props) => {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedValue(itemValue);
          props.setValue(itemValue)
        }}
        placeholder="Selecione"
      
      >
        <Picker.Item
          style={{color: "#00000050"}}
          label="Selecione"
        />
        <Picker.Item
          label="Doutor Fernando"
          value="fernando.jsts@gmail.com"
        />
        <Picker.Item
          label="Doutor Jales"
          value="jales@inexistente.com"
        />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EEEEEE",
    width: "100%",
  },
});
