import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstScreen from "../screens/FirstScreen";
import TalkToProfessional from "../screens/TalkToProfessional";
import Support from "../screens/Support";
import AddExam from "../screens/AddExam";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="FirstScreen">
      <Stack.Screen
        name="FirstScreen"
        component={FirstScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TalkToProfessional"
        component={TalkToProfessional}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Support"
        component={Support}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AddExam"
        component={AddExam}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
