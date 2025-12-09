import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import RecentChatItem from "./RecentChatsItem";

export default function GroupChatCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Group Chat</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <RecentChatItem
          name="Kevin’s BP"
          message="Kate and Ann are typing..."
          time="11:34"
          image={require("../assets/images/smiling-redhaired-boy-illustration_1308-176664-removebg-preview.png")}
          count={6}
          avatarBackgroundColor="#D7B8F2"
        />
        <RecentChatItem
          name="Friend Zone"
          message="Hello guys, how are you doing?"
          time="11:34"
          image={require("../assets/images/smiling-redhaired-boy-illustration_1308-176664-removebg-preview.png")}
          count={6}
          avatarBackgroundColor="#D7B8F2"
        />
        <RecentChatItem
          name="Family"
          message="litle sister is typing..."
          time="11:34"
          image={require("../assets/images/smiling-redhaired-boy-illustration_1308-176664-removebg-preview.png")}
          count={6}
          avatarBackgroundColor="#D7B8F2"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#EAF0EC",
    borderRadius: 40,
    padding: 36,
    marginTop: 5,
    height: 190,
  },
  title: { fontSize: 20, fontWeight: "700", marginBottom: 10 },
  row: { flexDirection: "row", alignItems: "center" },
  groupAvatar: { width: 55, height: 55, borderRadius: 40 },
  gName: { fontSize: 16, fontWeight: "700" },
  gText: { fontSize: 14, color: "#777" },
  time: { color: "#777", marginBottom: 4 },
  counter: {
    backgroundColor: "#d3ea92",
    borderWidth: 1,
    borderColor: "black",
    paddingHorizontal: 7,
    paddingVertical: 1.4,
    borderRadius: 18,
  },
  counterText: { fontWeight: "700" },
  rightSide: { alignItems: "flex-end" },
});
