import IconCamera from "@/assets/svg/camera-icon.svg";
import IconIGTV from "@/assets/svg/IGTV-icon.svg";
import InstagramLogo from "@/assets/svg/instagram-logo.svg";
import IconMessage from "@/assets/svg/messanger-icon.svg";
import { LinearGradient } from "expo-linear-gradient";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
export function Home() {
  const stories = [
    {
      id: "1",
      name: "Seu story",
      avatar: "https://i.pravatar.cc/300?img=12",
      viewed: false,
      isLive: false,
      isYourStory: true,
    },
    {
      id: "2",
      name: "karenne",
      avatar: "https://i.pravatar.cc/300?img=47",
      viewed: false,
      isLive: true,
      isYourStory: false,
    },
    {
      id: "3",
      name: "zackjohn",
      avatar: "https://i.pravatar.cc/300?img=11",
      viewed: false,
      isLive: false,
      isYourStory: false,
    },
    {
      id: "4",
      name: "kieron_d",
      avatar: "https://i.pravatar.cc/300?img=68",
      viewed: true,
      isLive: false,
      isYourStory: false,
    },
    {
      id: "5",
      name: "craig_",
      avatar: "https://i.pravatar.cc/300?img=32",
      viewed: false,
      isLive: false,
      isYourStory: false,
    },
    {
      id: "6",
      name: "maria.s",
      avatar: "https://i.pravatar.cc/300?img=44",
      viewed: true,
      isLive: false,
      isYourStory: false,
    },
    {
      id: "7",
      name: "lucas_dev",
      avatar: "https://i.pravatar.cc/300?img=15",
      viewed: false,
      isLive: false,
      isYourStory: false,
    },
    {
      id: "8",
      name: "gabriela",
      avatar: "https://i.pravatar.cc/300?img=45",
      viewed: false,
      isLive: false,
      isYourStory: false,
    },
  ];

  const feed = [
    {
      id: "1",
      user: {
        name: "joshua_l",
        avatar: "https://i.pravatar.cc/150?img=12",
        verified: true,
      },
      location: "Tokyo, Japan",
      image: "https://picsum.photos/seed/post1/800/800",
      likes: 842,
      caption: "Explorando novos lugares ✈️",
      comments: 24,
      createdAt: "2 h",
      liked: false,
      saved: false,
    },
    {
      id: "2",
      user: {
        name: "karenne",
        avatar: "https://i.pravatar.cc/150?img=47",
        verified: false,
      },
      location: "São Paulo, Brasil",
      image: "https://picsum.photos/seed/post2/800/900",
      likes: 1254,
      caption: "Um dia perfeito por aqui ☀️",
      comments: 48,
      createdAt: "3 h",
      liked: true,
      saved: false,
    },
    {
      id: "3",
      user: {
        name: "zackjohn",
        avatar: "https://i.pravatar.cc/150?img=11",
        verified: true,
      },
      location: "New York, USA",
      image: "https://picsum.photos/seed/post3/800/800",
      likes: 3268,
      caption: "City vibes 🏙️",
      comments: 96,
      createdAt: "5 h",
      liked: false,
      saved: true,
    },
    {
      id: "4",
      user: {
        name: "kieron_d",
        avatar: "https://i.pravatar.cc/150?img=68",
        verified: false,
      },
      location: "London, UK",
      image: "https://picsum.photos/seed/post4/800/1000",
      likes: 763,
      caption: "Mais um dia incrível 🙌",
      comments: 17,
      createdAt: "6 h",
      liked: false,
      saved: false,
    },
    {
      id: "5",
      user: {
        name: "craig_",
        avatar: "https://i.pravatar.cc/150?img=32",
        verified: false,
      },
      location: "Paris, France",
      image: "https://picsum.photos/seed/post5/800/850",
      likes: 2190,
      caption: "Paris nunca decepciona ❤️",
      comments: 74,
      createdAt: "8 h",
      liked: true,
      saved: true,
    },
    {
      id: "6",
      user: {
        name: "maria.s",
        avatar: "https://i.pravatar.cc/150?img=44",
        verified: true,
      },
      location: "Fortaleza, Ceará",
      image: "https://picsum.photos/seed/post6/800/800",
      likes: 1547,
      caption: "Fim de tarde 🌅",
      comments: 39,
      createdAt: "10 h",
      liked: false,
      saved: false,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <IconCamera />
        </TouchableOpacity>

        <InstagramLogo
          width={105}
          style={{
            marginLeft: 20,
          }}
        />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 18,
          }}
        >
          <TouchableOpacity>
            <IconIGTV />
          </TouchableOpacity>

          <TouchableOpacity>
            <IconMessage />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={stories}
        horizontal
        style={{
          maxHeight: 100,
          borderTopWidth: 1,
          borderTopColor: "#0001",
          borderBottomColor: "#0001",
          borderBottomWidth: 1,
        }}
        contentContainerStyle={{
          gap: 20,
          alignItems: "center",
          paddingHorizontal: 20,
        }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.buttonStorie}>
            <LinearGradient
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              colors={["#FBAA47", "#D91A46", "#A60F93"]}
              style={{
                width: 62,
                height: 62,
                borderRadius: 31,
                padding: 2,
              }}
            >
              <Image
                src={item.avatar}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 31,
                  borderWidth: 3,
                  borderColor: "#fff",
                }}
              />

              {item.isLive && (
                <LinearGradient
                  start={{ x: 0, y: 0.2 }}
                  end={{ x: 0.7, y: 0 }}
                  colors={["#C90083", "#D22463", "#E10038"]}
                  style={{
                    width: 26,
                    height: 16,
                    borderRadius: 3,
                    alignItems: "center",
                    justifyContent: "center",
                    borderWidth: 1,
                    borderColor: "#FFF",
                    alignSelf: "center",
                    position: "absolute",
                    bottom: -5,
                    zIndex: 0,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 8,
                      fontWeight: 600,
                      color: "#FEFEFE",
                    }}
                  >
                    LIVE
                  </Text>
                </LinearGradient>
              )}
            </LinearGradient>

            <Text
              style={{
                fontSize: 12,
              }}
            >
              {item.name}
            </Text>
          </View>
        )}
      />

      <FlatList
        data={feed}
        horizontal={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "red",
            }}
          >
            <View style={{}}>
              <Image
                src={item.user.avatar}
                style={{
                  width: 32,
                  height: 32,
                }}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  header: {
    marginTop: 24,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonStorie: {
    width: 62,
    height: 81,
  },
});
