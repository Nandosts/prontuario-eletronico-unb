import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  BtnWrapper: {
    flexDirection: "row",
    backgroundColor: "#DDDDDD",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
    width: "90%",
    height: 50,
    marginHorizontal: 10,
    marginBottom: 10,
    padding: 10,
  },
  BtnText: {
    alignSelf: "flex-start",
    color: "black",
    fontFamily: "sans-serif",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  Image: {
    alignSelf: "flex-end",
    width: 10,
    height: 10
  }
});
