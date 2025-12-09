import { View, Text, StyleSheet, ScrollView} from "react-native";
import RecentChatItem from "./RecentChatsItem";

export default function RecentChatsCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Recent Chat</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <RecentChatItem
          name="Phillip Geidt"
          message="Philip is typing..."
          time="11:34"
          image={require("../assets/images/smiling-redhaired-boy-illustration_1308-176664-removebg-preview.png")}
          count={6}
          avatarBackgroundColor="#D7B8F2"
          onlin
        />

        <RecentChatItem
          name="Kierra from Match"
          message=" Voice message"
          time="11:05"
          image={require("../assets/images/woman-floral-traditional-costume_1308-176159-removebg-preview.png")}
          count={2}
          avatarBackgroundColor="#FCF3A7"
        />

        <RecentChatItem
          name="Mike Smith"
          message="Yes, put my name down in that list of donations."
          time="10:31"
          image={require("../assets/images/smiling-young-man-illustration_1308-173524-removebg-preview.png")}
          avatarBackgroundColor="#96E7A9"
        />

        <RecentChatItem
          name="Stacey Neighbor"
          message="Hi! Her mom already used it"
          time="08:12"
          image={require("../assets/images/woman-with-braided-hair-illustration_1308-174675-removebg-preview.png")}
          avatarBackgroundColor="#E292D4"
        />
        <RecentChatItem
          name="Amahle"
          message="Hello"
          time="08:07"
          image={require("../assets/images/smiling-redhaired-boy-illustration_1308-176664-removebg-preview.png")}
          count={1}
          avatarBackgroundColor="pink"
          onlin
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#EAF0EC",
    borderRadius: 30,
    marginTop: 5,
    padding: 20,
    height: 450
   
  },
  title: { fontSize: 20, fontWeight: "700", marginBottom: 10 },
});
