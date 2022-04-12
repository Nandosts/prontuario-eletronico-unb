import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    paddingHorizontal: 30,
    paddingVertical: "5%",
    backgroundColor: "white",
    borderRadius: 30,
    width: "80%",
    height: "75%",
    justifyContent: "space-evenly",
  },
  title: {
    textAlign: "center",
    color: "white",
    marginBottom: 16,
    fontFamily: "sans-serif",
    fontWeight: "700",
    width: "60%",
    fontSize: 30,
    lineHeight: 36,
    textAlign: "center",
  },
  subtitle: {
    fontFamily: "sans-serif",
    fontSize: 20,
    fontWeight: "600",
  },
  inputStyle: {
    backgroundColor: "#EEEEEE",
    width: "100%",
    margin: 2,
    padding: 10,
    borderRadius: 5,
  },
  opacityBtn: {
    marginHorizontal: "auto",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "100%",
    padding: 10,
    textAlign: "center",
    borderRadius: 5,
  },
});
