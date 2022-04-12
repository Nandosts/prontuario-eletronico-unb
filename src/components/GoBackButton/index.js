import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import ArrowBack from "../../assets/go-back-arrow.png";

export const GoBackButton = ({ navigation, }) => {
  return (
    <TouchableOpacity
      style={styles.BtnWrapper}
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Image source={ArrowBack} style={styles.image} resizeMode="stretch" />
    </TouchableOpacity>
  );
};
