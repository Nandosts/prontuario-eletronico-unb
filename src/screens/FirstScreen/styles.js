import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  linearGradient: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    height: 200,
    width: 350,
  },
  content: {
    paddingHorizontal: 50,
    backgroundColor: "white",
    borderRadius: 30,
    width: "80%",
    height: "75%",
  },
  title: {
    textAlign: "center",
    color: "white",
    marginBottom: 16,
    fontFamily: 'Inter',
    fontWeight: 700,
    fontSize: 40,
    lineHeight: 36,
    textAlign: "center",

  },
  subtitle: {
    fontSize: 15,
    textAlign: "center",
    marginBottom: 64,
  },
});
