import React from "react";
import { Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const GradientBtn = (props) => {
  return (
    <LinearGradient
      colors={["#1982C6", "#55D9C8"]}
      start={{ x: 0.25, y: 0.85 }}
      end={{ x: 1, y: 0.4 }}
      {...props}
    >
      <Text
        style={{
          color: "white",
          fontFamily: "sans-serif",
          fontSize: 20,
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        {props.children}
      </Text>
    </LinearGradient>
  );
};
