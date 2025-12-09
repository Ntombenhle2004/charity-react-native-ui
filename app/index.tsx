import { ScrollView, StyleSheet, View } from "react-native";
import TopChatsCard from "../components/TopChatsCard";
import RecentChatsCard from "../components/RecentChatsCard";
import GroupChatCard from "../components/GroupChatsCard";

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <TopChatsCard />
      <RecentChatsCard />
      <GroupChatCard />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#202020" },
});
