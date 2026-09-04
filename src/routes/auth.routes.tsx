import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { OnboardingScreen } from "../screens/Onboarding";
import { Sign } from "../screens/Sign";

export default function AuthRoutes() {
  const { Screen, Navigator } = createNativeStackNavigator();

  return (
    <>
      <Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Onboard"
      >
        <Screen name="Onboard" component={OnboardingScreen} />
        <Screen name="Sign" component={Sign} />
      </Navigator>
    </>
  );
}
