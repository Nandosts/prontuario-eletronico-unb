import qs from "qs";
import { Linking } from "react-native";

export async function sendEmail(to, subject, body) {

  let url = "mailto:" + to;

  // Create email link query
  const query = qs.stringify({
    subject: subject,
    body: body,
  });

  if (query.length) {
    url += `?${query}`;
  }

  const canOpen = await Linking.canOpenURL(url);

  if (!canOpen) {
    throw new Error("O URL fornecido não pode ser aberto corretamente.");
  }
    return Linking.openURL(url);
}