import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import { styles } from "./styles";
import RightArrow from "../../assets/right-arrow.png";

export const ProfileBtn = (props) => {
  return (
    <TouchableOpacity style={styles.BtnWrapper}>
      <Text style={styles.BtnText}>{props.title}</Text>
      <Image source={RightArrow} style={styles.image} resizeMode="stretch" />
    </TouchableOpacity>
  );
};
