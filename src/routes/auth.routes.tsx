import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
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
        <Screen name="Login" component={Sign} />
        <Screen name="Home" component={Home} />
      </Navigator>
    </>
  );
}
