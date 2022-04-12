import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { GradientBtn } from "../../components/GradientButton";
import { ProfileBtn } from "../../components/ProfileButton";
import UserPhoto from "../../assets/user-photo.png";

const FirstScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={["#1982C6", "#55D9C8"]}
      start={{ x: 0.25, y: 0.85 }}
      end={{ x: 1, y: 0.4 }}
      style={styles.container}
    >
      <View style={styles.profile}>
        <Text style={styles.title}>Perfil</Text>
        <Image source={UserPhoto} style={styles.image} resizeMode="stretch" />
        <Text style={styles.title}>Usuário</Text>
        <Text style={styles.subtitle}>usuário@gmail.com</Text>
      </View>
      <View style={styles.content}>
        <View style={{ marginTop: 10 }}>
          <ProfileBtn
            title="Falar com um profissional"
            navigation={navigation}
            to="TalkToProfessional"
          />
          <ProfileBtn
            title="Suporte"
            navigation={navigation}
            to="Support"
          />
        </View>
        <TouchableOpacity style={styles.opacityBtn} activeOpacity={0.75}>
          <GradientBtn style={styles.button}>Sair</GradientBtn>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default FirstScreen;
