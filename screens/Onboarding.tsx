import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import InstagramLogo from "@/assets/svg/instagram-logo.svg";

export function OnboardingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <InstagramLogo width={182} height={49} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
