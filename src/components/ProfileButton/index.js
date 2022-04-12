import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import { styles } from "./styles";
import RightArrow from "../../assets/right-arrow.png";

export const ProfileBtn = ({ navigation, to, title }) => {
  return (
    <TouchableOpacity
      style={styles.BtnWrapper}
      onPress={() => {
        navigation.navigate(to);
      }}
    >
      <Text style={styles.BtnText}>{title}</Text>
      <Image source={RightArrow} style={styles.image} resizeMode="stretch" />
    </TouchableOpacity>
  );
};
