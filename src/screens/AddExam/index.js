import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Image,
} from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { GradientBtn } from "../../components/GradientButton";
import { GoBackButton } from "../../components/GoBackButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import FileIcon from "../../assets/file-icon.png";
import Checked from "../../assets/checked.png";

const AddExam = ({ navigation }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [singleFile, setSingleFile] = useState(null);

  const uploadImage = async () => {
    // Check if any file is selected or not
    if (singleFile != null) {
      // If file selected then create FormData
      const fileToUpload = singleFile;
      const data = new FormData();
      data.append("name", "Image Upload");
      data.append("file_attachment", fileToUpload);
      // Please change file upload URL
      let res = await fetch("https://prontuario-eletronico-2c4fe-default-rtdb.firebaseio.com/", {
        method: "post",
        body: data,
        headers: {
          "Content-Type": "multipart/form-data; ",
        },
      }).catch((e)=> console.log(e))
      let responseJson = await res.json();
      if (responseJson.status == 1) {
        alert("Upload Successful");
      }
    } else {
      // If no file selected the show alert
      alert("Please Select File first");
    }
  };

  const selectFile = async () => {
    try {
      const res = await DocumentPicker.getDocumentAsync({});
      let response = JSON.parse(JSON.stringify(res));
      if (response.type === "cancel") {
        alert("Cancelado");
        setSingleFile(null);
      } else {
        setSingleFile(res);
      }
    } catch (err) {
      setSingleFile(null);
      // Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        // If user canceled the document selection
        alert("Canceled");
      } else {
        // For Unknown Error
        alert("Unknown Error: " + JSON.stringify(err));
        throw err;
      }
    }
  };
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
        <GoBackButton navigation={navigation} />
        <Text style={styles.title}>Adicionar exame</Text>
        <View style={styles.content}>
          <View>
            <Text style={styles.subtitle}>Nome:</Text>
            <TextInput
              multiline
              placeholder={"Insira o nome"}
              style={styles.inputStyle}
              onChangeText={setName}
              value={name}
            />
          </View>
          <View>
            <Text style={styles.subtitle}>Descrição:</Text>
            <TextInput
              multiline
              placeholder={"Insira a descrição"}
              style={styles.inputStyle}
              onChangeText={setDescription}
              value={description}
            />
          </View>
          <View>
            <Text style={styles.subtitle}>Forma de envio:</Text>
            <TouchableOpacity activeOpacity={0.5} onPress={selectFile}>
              <View style={styles.addDocument}>
                <View style={styles.addBorder}>
                  <Image
                    source={singleFile ? Checked : FileIcon }
                    style={styles.docImage}
                    resizeMode="stretch"
                  />
                  <Text
                    style={{ color: "#0005", fontSize: 15, fontWeight: "700" }}
                  >
                     {singleFile ? singleFile.name : "Selecione um arquivo"}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={uploadImage}
            style={styles.opacityBtn}
            activeOpacity={0.75}
          >
            <GradientBtn style={styles.button}>Enviar</GradientBtn>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </LinearGradient>
  );
};

export default AddExam;
