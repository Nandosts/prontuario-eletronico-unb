import React from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { sendEmail } from "../../components/SendEmail";
import { GradientBtn } from "../../components/GradientButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const FirstScreen = () => {
  const [professional, onChangeProfessional] = React.useState("");
  const [subject, onChangeSubject] = React.useState("");
  const [text, onChangeText] = React.useState("");
  function onPressSendData() {
    sendEmail(professional, subject, text).then(() => {
      console.log("Your message was successfully sent!");
    });
  }
  return (
    <LinearGradient
      colors={["#1982C6", "#55D9C8"]}
      start={{ x: 0.25, y: 0.85 }}
      end={{ x: 1, y: 0.4 }}
      style={{ height: "100%" }}
    >
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={[
          styles.container,
          { height: Dimensions.get("window").height },
        ]}
        scrollEnabled={false}
        style={{ height: Dimensions.get("window").height }}
        automaticallyAdjustContentInsets={false}
      >
        <Text style={styles.title}>Falar com um profissional</Text>
        <View style={styles.content}>
          <View>
            <Text style={styles.subtitle}>Profissional:</Text>
            <TextInput
              multiline
              placeholder={"Selecione"}
              style={styles.inputStyle}
              onChangeText={onChangeProfessional}
              value={professional}
            />
          </View>
          <View>
            <Text style={styles.subtitle}>Assunto:</Text>
            <TextInput
              multiline
              placeholder={"Insira o assunto"}
              style={styles.inputStyle}
              onChangeText={onChangeSubject}
              value={subject}
            />
          </View>
          <View>
            <Text style={styles.subtitle}>Mensagem:</Text>
            <TextInput
              multiline
              placeholder={"Digitar..."}
              style={styles.inputStyle}
              onChangeText={onChangeText}
              value={text}
              numberOfLines={9}
            />
          </View>
          <TouchableOpacity
            onPress={onPressSendData}
            style={styles.opacityBtn}
            activeOpacity={0.75}
          >
            <GradientBtn style={styles.button}>Enviar</GradientBtn>
          </TouchableOpacity>
          <Text style={{ color: "#F37B37", textAlign: "center" }}>
            *Sua resposta será enviada pera o email do profissional.
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </LinearGradient>
  );
};
