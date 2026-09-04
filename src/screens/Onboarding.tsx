import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ImageUser from "@/assets/images/user.png";
import InstagramLogo from "@/assets/svg/instagram-logo.svg";

export function OnboardingScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <InstagramLogo width={182} height={49} />

        <View style={styles.user}>
          <Image source={ImageUser} style={styles.imageUser} />
          <Text>jaccob_w</Text>
        </View>

        <View style={styles.contentButtons}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Sign")}
            style={styles.buttonLogin}
          >
            <Text style={styles.textButtonLogin}>Log in</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonAccounts}>
            <Text style={styles.textButtonAccounts}>Switch accounts</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Pressable style={styles.contentSignup}>
        <Text style={styles.textSignup}>Don’t have an account?</Text>
        <Text
          style={
            (styles.textSignup,
            { color: "#262626", fontSize: 12, fontWeight: 600 })
          }
        >
          Sign up.
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  user: {
    marginTop: 52,
    gap: 13,
    alignItems: "center",
  },
  imageUser: {
    width: 85,
    height: 85,
    borderRadius: 85,
  },
  contentButtons: {
    marginTop: 12,
    gap: 10,
  },
  buttonLogin: {
    width: 307,
    height: 44,
    borderRadius: 5,
    backgroundColor: "#3797EF",
    alignItems: "center",
    justifyContent: "center",
  },
  textButtonLogin: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: 500,
  },
  buttonAccounts: {
    width: 307,
    height: 44,
    borderRadius: 5,
    backgroundColor: "#FFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  textButtonAccounts: {
    color: "#3797EF",
    fontSize: 14,
    fontWeight: 500,
  },
  contentSignup: {
    width: "100%",
    height: 60,
    borderTopWidth: 1,
    borderTopColor: "#E9E9E9",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 5,
  },
  textSignup: {
    color: "#0004",
    fontSize: 12,
    fontWeight: 400,
  },
});
