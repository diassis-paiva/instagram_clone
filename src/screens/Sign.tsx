import ArrowBack from "@/assets/svg/arrow-back.svg";
import IconFacebook from "@/assets/svg/facebook.svg";
import InstagramLogo from "@/assets/svg/instagram-logo.svg";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export function Sign({ navigation }: any) {
  return (
    <View style={styles.contentSign}>
      <View style={styles.arrowback}>
        <ArrowBack />
      </View>

      <View
        style={{
          alignItems: "center",
          marginTop: 78,
        }}
      >
        <InstagramLogo />
      </View>

      <View style={styles.form}>
        <TextInput
          placeholder="username"
          placeholderTextColor={"#0002"}
          style={styles.input_username}
        />
        <TextInput
          style={styles.input_password}
          placeholder="password"
          placeholderTextColor={"#0002"}
        />

        <TouchableOpacity
          style={{
            alignSelf: "flex-end",
          }}
        >
          <Text style={{ color: "#3797EF", fontWeight: 600 }}>
            Forgot password?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={{
            width: "100%",
            height: 44,
            borderRadius: 5,
            backgroundColor: "#3797ef",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#fff", fontWeight: 600 }}>Login</Text>
        </TouchableOpacity>

        <Pressable
          style={{
            width: "100%",
            marginTop: 38,
            borderRadius: 5,
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconFacebook />

          <Text style={{ color: "#3797ef", fontWeight: 600 }}>
            Log in with Facebook
          </Text>
        </Pressable>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginTop: 48,
        }}
      >
        <View
          style={{
            width: "44%",
            height: 1,
            backgroundColor: "#0002",
          }}
        />
        <Text
          style={{
            fontWeight: 600,
            color: "#0004",
          }}
        >
          OR
        </Text>
        <View
          style={{
            width: "44%",
            height: 1,
            backgroundColor: "#0002",
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentSign: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  arrowback: {
    marginTop: 40,
  },
  form: {
    marginTop: 40,
    gap: 12,
  },
  input_username: {
    backgroundColor: "#FAFAFA",
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: "#0001",
    width: "100%",
    padding: 15,
  },
  input_password: {
    backgroundColor: "#FAFAFA",
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: "#0001",
    width: "100%",
    padding: 15,
  },
});
