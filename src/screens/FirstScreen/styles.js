import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between"
  },
  profile: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  content: {
    backgroundColor: "white",
    width: "100%",
    height: "65%",
    justifyContent: "space-between",
  },
  title: {
    textAlign: "center",
    color: "white",
    fontFamily: "sans-serif",
    fontWeight: "700",
    width: "60%",
    fontSize: 30,
    textAlign: "center",
  },
  subtitle: {
    fontFamily: "sans-serif",
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
  opacityBtn: {
    marginHorizontal: "auto",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "60%",
    height: 50,
    textAlign: "center",
    borderRadius: 5,
    justifyContent: "center"
  },
});
